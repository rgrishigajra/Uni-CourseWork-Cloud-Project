from client import client
from server import server
import threading
import concurrent.futures
import random
import string
import os
import time
import sys

function_to_arg_map = {
    "set": "set_key",
    "get": "get_key",
}


def n_random_request_clients(port_number, n):
    for c in range(n):
        client_instance = client(port_number)
        client_pool.append(executor.submit(
            client_instance.spawn_random_client, 20, 100))
    concurrent.futures.wait(client_pool)
    print('\n\n\n All %d Clients ran one set followed by one get sucessfully!\n\n' % (n))


def set_key(client_instance):
    print("\nEnter key to set:\n")
    key = input()
    print('\nenter value to set\n')
    value = input()
    print("\nresponse that client got\n",client_instance.set_key(key, value))
    return True


def get_key(client_instance):
    print("\nEnter key to get:\n")
    key = input()
    print("\nresponse that client got\n",client_instance.get_key(key))
    return True


def command_line_client(port_number):
    current_module = sys.modules[__name__]
    client_instance = client(port_number)
    while True:
        print('\nEnter a command for client: (type `help` to see what commands are available), `exit` to leave\n')
        command = input()
        if command == 'exit':
            try:
                sys.exit(0)
            except SystemExit:
                os._exit(0)
        elif command == 'help':
            print(server.function_to_arg_map.keys())
        elif command in server.function_to_arg_map:
            getattr(current_module, function_to_arg_map[command])(
                client_instance)
        else:
            print('\nCould not parse input, please try `help` or try again\n')


if __name__ == "__main__":

    # for i in range(10):
    #     client_thread = threading.Thread(
    #         target=client, args=(1027,))
    #     client_thread.start()
    server_instance = server()
    executor = concurrent.futures.ProcessPoolExecutor()
    client_pool = []
    # passing 0 as port number so the OS can assign one instead thats free.
    port_number = server_instance.port_setup(0)
    server_process = executor.submit(server_instance.server_loop)
    time.sleep(5)
    print("\nEnter how many random clients do you want to run one set and one get request for:\n")
    n = input()
    n_random_request_clients(port_number, int(n))
    command_line_client(port_number)
