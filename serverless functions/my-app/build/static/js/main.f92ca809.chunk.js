(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},222:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(0),c=n.n(r),l=n(11),i=n.n(l),o=(n(108),n.p,n(109),n(58)),s=n(57),u=n(32),d=n(88),b=n(264),h=n(263),g=n(56),j=n.n(g),f=(n(222),n(95)),p=n(265),w={scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Number of words in sentence"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Number of sentences"},ticks:{beginAtZero:!0}}]},title:{display:!0,text:"Ditribution of number of words in each sentence."}},O=[{title:"Frankenstein by Mary Wollstonecraft Shelley",url:"http://www.gutenberg.org/files/84/84-0.txt"},{title:"Pride and Prejudice by Jane Austen",url:"http://www.gutenberg.org/files/1342/1342-0.txt"},{title:"Alice's Adventures in Wonderland by Lewis Carroll",url:"http://www.gutenberg.org/files/11/11-0.txt"},{title:"Moby Dick by Herman Melville",url:"http://www.gutenberg.org/files/2701/2701-0.txt"},{title:"Dracula by Bram Stoker",url:"http://www.gutenberg.org/cache/epub/345/pg345.txt"},{title:"Peter Pan by James M. Barrie",url:"http://www.gutenberg.org/files/16/16-0.txt"},{title:"The Republic by Plato",url:"http://www.gutenberg.org/cache/epub/1497/pg1497.txt"}];var x=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(""),i=Object(u.a)(l,2),g=i[0],x=i[1],y=Object(r.useState)(""),v=Object(u.a)(y,2),m=v[0],k=v[1],C=Object(r.useState)(!1),S=Object(u.a)(C,2),A=S[0],M=S[1],B=function(e,t){var a=255*Math.random(),r=255*Math.random(),l=255*Math.random(),i={label:e,data:t,fill:!1,backgroundColor:"rgb(".concat(a,", ").concat(r,", ").concat(l,")"),borderColor:"rgba(".concat(a,", ").concat(r,", ").concat(l,", 0.2)")},o=n;c([].concat(Object(s.a)(o),[i]))};return Object(r.useEffect)((function(){console.log(m,g)}),[g,m]),Object(a.jsxs)("div",{className:"body-container",children:[Object(a.jsxs)("div",{children:[A&&Object(a.jsx)("div",{className:"loading",children:Object(a.jsx)(f.a,{width:"100"})}),Object(a.jsx)("div",{className:"title",children:"The App parses the plain text from the urls and draws a histogram of the sentence length distribution."}),Object(a.jsx)("div",{children:"Enter a book name and url with text (press enter after pasting a url or else it will get cleared)"}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(b.a,{placeholder:"Book name here",id:"outlined-basic",label:"Book name",variant:"outlined",value:g,style:{width:500},required:!0,onChange:function(e){x(e.target.value)}}),Object(a.jsx)(p.a,{clearOnBlur:!0,handleHomeEndKeys:!0,options:O,style:{width:500},renderOption:function(e){return e.title?e.title:e},getOptionLabel:function(e){return e.url?e.url:e},onChange:function(e,t){var n=t?t.title:"",a=t?t.url:"";x(n),k(a)},freeSolo:!0,onInputChange:function(e,t){k(t.url),x(t.title)},renderInput:function(e){return Object(a.jsx)(b.a,Object(o.a)(Object(o.a)({},e),{},{placeholder:"http://www.gutenberg.org/files/1342/1342-0.txt",id:"outlined-basic",label:"Url",required:!0,variant:"outlined",style:{width:500},value:m}))}}),Object(a.jsx)(h.a,{color:"secondary",variant:"contained",onClick:function(){!function(){M(!0);var e=m;k("");var t=g;x(""),j.a.post("https://us-central1-rishabh-gajra.cloudfunctions.net/cached_data",{url:e}).then((function(n){1==n.data.success?(console.log(n.data),B(t,Object.values(n.data.frequency)),M(!1)):j.a.post("https://us-central1-rishabh-gajra.cloudfunctions.net/sentence_length",{url:e}).then((function(e){B(t,Object.values(e.data.frequency)),M(!1)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}()},children:"Analyse"}),Object(a.jsx)(h.a,{color:"secondary",variant:"contained",onClick:function(){k(""),x(""),c([])},children:"Reset"})]})]}),Object(a.jsx)("div",{className:"chart",children:Object(a.jsx)(d.Line,{data:{labels:Object(s.a)(Array(60).keys()),datasets:n},options:w})}),Object(a.jsx)("div",{children:"The app caches results for previous books so try comparing the loading times for a new url vs same url twice, the repeats should be significantly faster."})]})};var y=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(x,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,267)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),v()}},[[224,1,2]]]);
//# sourceMappingURL=main.f92ca809.chunk.js.map