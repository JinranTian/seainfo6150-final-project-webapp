(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/iq-1.00e53cf9.png"},22:function(e,t,a){e.exports=a.p+"static/media/iq-2.61e41d09.png"},23:function(e,t,a){e.exports=a.p+"static/media/iq-3.e3f5f71c.png"},24:function(e,t,a){e.exports=a.p+"static/media/iq-4.6ee22f79.png"},25:function(e,t,a){e.exports=a.p+"static/media/iq-5.efa7d7a5.png"},26:function(e,t,a){e.exports=a.p+"static/media/iq-6.74de7b40.png"},27:function(e,t,a){e.exports=a.p+"static/media/iq-7.8588787d.png"},28:function(e,t,a){e.exports=a.p+"static/media/iq-8.239848d5.png"},29:function(e,t,a){e.exports=a.p+"static/media/iq-9.c4f18894.png"},30:function(e,t,a){e.exports=a.p+"static/media/iq-10.ec31c940.png"},31:function(e,t,a){e.exports=a.p+"static/media/sodoku.8996057a.png"},32:function(e,t,a){e.exports=a.p+"static/media/reflex.46e2fbe4.png"},33:function(e,t,a){e.exports=a.p+"static/media/mind_training.0a759da6.png"},34:function(e,t,a){e.exports=a.p+"static/media/more_games.96715782.png"},36:function(e,t,a){e.exports=a(49)},41:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),o=a(1),m=a(3);a(41);function i(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Error!"),l.a.createElement("code",null,"404: Not Found"))}function u(e){var t=e.appVersion;return document.body.style.backgroundColor="white",l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,"Quiz App")),l.a.createElement("p",null,"Welcome to the Quiz App, and Games! This is a very long-winded introduction!"),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex flex-row justify-content-center p-20 home-cards"},l.a.createElement("div",{className:"card bg-lb"},l.a.createElement("h3",null,"Knowledge Quiz"),l.a.createElement("p",null,"Do you consider yourself to be more ",l.a.createElement("br",null),"of a book smart person or a street  ",l.a.createElement("br",null),"smart person? Whichever you are,  ",l.a.createElement("br",null),"luckily this general knowledge quiz",l.a.createElement("br",null),"will test both sides of the coin. ",l.a.createElement("br",null),"Though you should be warned, there ",l.a.createElement("br",null),"are no actual questions about coins ",l.a.createElement("br",null),"in this quiz, so you can sit down ",l.a.createElement("br",null),"and take that sigh of relief right now."),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex flex-column text-align-center"},l.a.createElement(o.b,{to:"/quiz/start",style:{borderRadius:10,padding:10,textDecoration:"none",backgroundColor:"grey"},className:"text-white"},"Go"))),l.a.createElement("div",{className:"card bg-lg"},l.a.createElement("h3",null,"Intelligence Quotient"),l.a.createElement("p",null,"The quiz challenge of this page involves ",l.a.createElement("br",null),"answering 10 questions in 10 minutes. This",l.a.createElement("br",null),"quiz is provided for entertainment purposes",l.a.createElement("br",null),"only: it's not an IQ test and your score will",l.a.createElement("br",null),"not qualify you for any certificates. ",l.a.createElement("br",null),"Nevertheless, if you're pleased with your ",l.a.createElement("br",null),"score, you might want to consider taking a",l.a.createElement("br",null),"properly administered and supervised IQ test."),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("div",{className:"d-flex flex-column text-align-center"},l.a.createElement(o.b,{to:"/iq",style:{borderRadius:10,padding:10,textDecoration:"none",backgroundColor:"grey"},className:"text-white"},"Go"))),l.a.createElement("div",{className:"card bg-pk"},l.a.createElement("h3",null,"Other Games"),l.a.createElement("p",null,"Here are more interesting games you ",l.a.createElement("br",null),"can play and websites you can visit. ",l.a.createElement("br",null),"Be happy!"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"d-flex flex-column text-align-center"},l.a.createElement(o.b,{to:"/games",style:{borderRadius:10,padding:10,textDecoration:"none",backgroundColor:"grey"},className:"text-white"},"Go")))),l.a.createElement("code",{className:"font-secondary p-10"},"Running v",t))}var s=a(2);function E(e){var t=e.questionData,a=t.type,n=t.category,r=t.difficulty,c=t.question;return l.a.createElement("div",null,l.a.createElement("small",{className:"font-secondary fw-700"},"Difficulty: ",r.toUpperCase()," | Type: ","multiple"===a?"Multiple Choice":"True or False"),l.a.createElement("hr",null),l.a.createElement("small",null,n),l.a.createElement("div",{className:"d-flex flex-column text-align-center"},l.a.createElement("h3",{style:{padding:0,margin:0}},"Question"),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:c}})),l.a.createElement("hr",null))}var d=a(35);function h(e){var t=e.onChange,a=e.questionData,r=e.complete,c=a.correct_answer,o=a.incorrect_answers;a.type;Object(n.useEffect)(function(){var e=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}([c].concat(Object(d.a)(o)));E(e)},[c,o]);var m=Object(n.useState)([]),i=Object(s.a)(m,2),u=i[0],E=i[1],h=Object(n.useState)(""),p=Object(s.a)(h,2),b=p[0],f=p[1];return l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("select",{label:"Answer",onChange:function(e){f(e.target.value),t(a,e.target.value)},disabled:r},l.a.createElement("option",{disabled:!0,selected:!0,value:!0},"-- SELECT --"),u&&Object.keys(u).map(function(e){return l.a.createElement("option",{value:u[e],dangerouslySetInnerHTML:{__html:u[e]}})})),r?b===c?l.a.createElement("div",{className:"success p-10"},"Correct!"):l.a.createElement("div",{className:"danger text-white p-10"},"Wrong! The correct answer is ",c):"")}function p(e){var t=e.onChange,a=e.questionData,n=e.complete,r=e.style;return l.a.createElement("div",{style:r},l.a.createElement("div",{className:"question-card"},l.a.createElement(E,{questionData:a}),l.a.createElement(h,{questionData:a,onChange:t,complete:n})))}function b(e){var t=e.complete,a=e.setComplete,r=e.initialMinute,c=void 0===r?10:r,o=e.initialSeconds,m=void 0===o?0:o,i=Object(n.useState)(c),u=Object(s.a)(i,2),E=u[0],d=u[1],h=Object(n.useState)(m),p=Object(s.a)(h,2),b=p[0],f=p[1];return Object(n.useEffect)(function(){var e=setInterval(function(){t&&clearInterval(e),b>0&&f(b-1),0===b&&(0===E?(a(!0),clearInterval(e)):(d(E-1),f(59)))},1e3);return function(){clearInterval(e)}}),t?l.a.createElement("h3",null,"Out of Time"):l.a.createElement("div",null,0===E&&0===b?null:l.a.createElement("h3",null," ",E,":",b<10?"0".concat(b):b))}var f=Object(m.f)(function(e){Object(n.useEffect)(function(){j(20),w(0)},[]);var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),m=Object(s.a)(o,2),i=m[0],u=m[1],E=Object(n.useState)(!1),d=Object(s.a)(E,2),h=d[0],f=d[1],g=Object(n.useState)(0),y=Object(s.a)(g,2),v=y[0],w=y[1],x=Object(n.useState)([]),N=Object(s.a)(x,2),q=N[0],k=N[1];Object(n.useEffect)(function(){!0===h&&C()},[h]);var C=function(){var t=0;return Object.keys(q).forEach(function(e){q[e][0]==q[e][1]&&t++}),e.history.push("/quiz/score?score=".concat(t,"&numQuestions=").concat(r.length))},O=function(e,t){var a=e.correct_answer;console.log(a,t);var n=q;n[v]=[a,t],k(n)},j=function(e){fetch("https://opentdb.com/api.php?amount=".concat(e)).then(function(e){return e.json()}).then(function(e){return c(e.results)})};return document.body.style.backgroundColor="lightblue",l.a.createElement("div",null,l.a.createElement("h1",null,"Quiz Time!"),l.a.createElement(b,{complete:i,setComplete:u}),i&&l.a.createElement("button",{onClick:function(){return f(!0)}},"View Score"),l.a.createElement("button",{onClick:function(){window.confirm("Are you sure you want to finish the quiz?")&&u(!0)}},"Finish"),l.a.createElement("h4",null,"Question ",v+1," of 20"),Object.keys(r).map(function(e){return l.a.createElement(p,{questionData:r[e],onChange:O,complete:i,style:{display:v==e?"block":"none"}})}),l.a.createElement("button",{onClick:function(){return w(v+1)},disabled:v+1>r.length-1},"Next"),l.a.createElement("button",{onClick:function(){return w(v-1)},disabled:v-1<=-1},"Previous"))});function g(){return l.a.createElement("footer",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("p",{className:"fw-700"},"Links"),l.a.createElement(o.b,{to:"/"},"Home"),l.a.createElement(o.b,{to:"/quiz/start"},"Quiz"),l.a.createElement(o.b,{to:"/iq"},"IQ Test"),l.a.createElement(o.b,{to:"/games"},"Games"),l.a.createElement(o.b,{to:"/contactus"},"Contact Us"))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("p",{className:"fw-700"},"More"),l.a.createElement("span",null,"Policies"),l.a.createElement("span",null,"Blog"),l.a.createElement("span",null,"GDPR")))))}var y=a(10),v=a.n(y);function w(e){var t=v.a.parse(e.location.search,{ignoreQueryPrefix:!0}),a=t.score||0,n=t.numQuestions||0;return l.a.createElement("div",null,l.a.createElement("h2",null,"Well Done!"),l.a.createElement("h4",null,"You scored ",a," out of ",n),l.a.createElement("h4",null,"That is ",Math.round(a/n*100),"%"))}function x(e){return document.body.style.backgroundColor="lightblue",l.a.createElement("div",{className:"d-flex flex-column text-align-center"},l.a.createElement("h2",null,"Knowledge Quiz"),l.a.createElement("h3",null,"Introduction"),l.a.createElement("p",{className:"p-10"},"Do you consider yourself to be more of a book smart person or a street smart person? Whichever you are, luckily this general knowledge quiz will test both sides of the coin. Though you should be warned, there are no actual questions about coins in this quiz, so you can sit down and take that sigh of relief right now."),l.a.createElement("hr",null),l.a.createElement("h4",null,"After you finish and before you view score, you can see the answer of each question by navigating through the questions"),l.a.createElement("h4",null,"You have chosen to take a quiz of 20 questions."),l.a.createElement("p",null,"You have 10 minutes to complete the quiz."),l.a.createElement(o.b,{to:"/quiz/main",style:{borderRadius:10,padding:10,textDecoration:"none",backgroundColor:"grey"},className:"text-white"},"Start Quiz"))}function N(){return document.body.style.backgroundColor="lightgreen",l.a.createElement("div",{className:"d-flex flex-column text-align-center"},l.a.createElement("h2",null,"Intelligence Quotient (IQ) Test"),l.a.createElement("p",null,"The quiz challenge of this page involves answering 10 questions in 10 minutes. This quiz is provided for entertainment purposes only: it's not an IQ test and your score will not qualify you for any certificates. Nevertheless, if you're pleased with your score, you might want to consider taking a properly administered and supervised IQ test."),l.a.createElement("p",null,"After you finish and before you view score, you can see the answer of each question by navigating through the questions"),l.a.createElement(o.b,{to:"/iq/main",style:{borderRadius:10,padding:10,textDecoration:"none",backgroundColor:"grey"},className:"text-white"},"Start IQ Test"))}var q=a(21),k=a.n(q),C=a(22),O=a.n(C),j=a(23),S=a.n(j),F=a(24),z=a.n(F),Q=a(25),T=a.n(Q),D=a(26),I=a.n(D),M=a(27),G=a.n(M),A=a(28),P=a.n(A),R=a(29),W=a.n(R),B=a(30),L=a.n(B);function _(e){var t=e.iqData,a=e.complete,r=e.style,c=e.change,o=Object(n.useState)(""),m=Object(s.a)(o,2),i=m[0],u=m[1];return l.a.createElement("div",{className:"card bg-white",style:r},l.a.createElement("img",{src:t[0],className:"img-responsive",alt:"IQ"}),l.a.createElement("hr",null),l.a.createElement("h4",null,"Answer"),l.a.createElement("select",{disabled:a,onChange:a?null:function(e){null!=e.target.value&&c(e.target.value),u(e.target.value)},value:t[3]||null},l.a.createElement("option",{selected:!0,disabled:!0},"-- SELECT --"),l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"B"},"B"),l.a.createElement("option",{value:"C"},"C"),l.a.createElement("option",{value:"D"},"D"),l.a.createElement("option",{value:"E"},"E"),l.a.createElement("option",{value:"F"},"F")),a?i===t[1]?l.a.createElement("div",{className:"success p-10"},"Correct!"):l.a.createElement("div",{className:"danger text-white p-10"},"Wrong! The correct answer is ",t[1]):"")}var H=Object(m.f)(function(e){document.body.style.backgroundColor="lightgreen";var t=Object(n.useState)({0:[k.a,"F"],1:[O.a,"B"],2:[S.a,"C"],3:[z.a,"B"],4:[T.a,"C"],5:[I.a,"F"],6:[G.a,"D"],7:[P.a,"E"],8:[W.a,"E"],9:[L.a,"A"]}),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(0),m=Object(s.a)(o,2),i=m[0],u=m[1],E=Object(n.useState)(!1),d=Object(s.a)(E,2),h=d[0],p=d[1],f=Object(n.useState)(0),g=Object(s.a)(f,2),y=g[0],v=g[1];return l.a.createElement("div",null,l.a.createElement(b,{complete:h,setComplete:p}),l.a.createElement("button",{onClick:function(){window.confirm("Are you sure you want to end the IQ test?")&&(p(!0),function(){var e=0;console.log(r),Object.keys(r).forEach(function(t){null!=r[t][2]&&r[t][2]===r[t][1]&&e++}),v(14*e)}())}},"Finish"),h&&l.a.createElement("button",{onClick:function(){return e.history.push("/iq/score?iq=".concat(y))}},"View Score"),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex flex-column text-align-center"},l.a.createElement("h4",null,"Question ",i+1," of 10"),Object.keys(r).map(function(e){return l.a.createElement(_,{iqData:r[e],complete:h,change:function(t){var a=r;a[e][2]=t,c(a),console.log(t)},style:{display:i==e?"block":"none"}})})),l.a.createElement("button",{onClick:function(){return u(i+1)},disabled:i+1>9},"Next"),l.a.createElement("button",{onClick:function(){return u(i-1)},disabled:i-1<0},"Previous"))});function U(e){var t=v.a.parse(e.location.search,{ignoreQueryPrefix:!0}).iq;return document.body.style.backgroundColor="lightgreen",l.a.createElement("div",null,l.a.createElement("h2",null,"Well Done!"),l.a.createElement("h4",null,"You scored ",t/14," out of 10"))}var $=a(31),V=a.n($),Y=a(32),J=a.n(Y),K=a(33),X=a.n(K),Z=a(34),ee=a.n(Z);function te(){return document.body.style.backgroundColor="pink",l.a.createElement("div",null,l.a.createElement("h2",null,"Other Games"),l.a.createElement("p",null,"Here are more interesting games you can play and websites you can visit. Be happy!"),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex flex-row justify-content-center p-20 game-cards"},l.a.createElement("div",{className:"card bg-white"},l.a.createElement("h2",null,"Sodoku"),l.a.createElement("a",{href:"https://sudoku.com/"},l.a.createElement("img",{className:"img-responsive",src:V.a,alt:"Sodoku",style:{maxWidth:200,borderRadius:20}})),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://sudoku.com/"},"Sodoku")),l.a.createElement("div",{className:"card bg-white"},l.a.createElement("h2",null,"Reflex Test"),l.a.createElement("a",{href:"https://faculty.washington.edu/chudler/java/redgreen.html"},l.a.createElement("img",{className:"img-responsive",src:J.a,alt:"Sodoku",style:{maxWidth:200,borderRadius:20}})),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://faculty.washington.edu/chudler/java/redgreen.html"},"Reflex Test")),l.a.createElement("div",{className:"card bg-white"},l.a.createElement("h2",null,"Mind Training"),l.a.createElement("p",null,"Mind training games for kids"),l.a.createElement("a",{href:"https://www.smartgameslive.com/en"},l.a.createElement("img",{className:"img-responsive",src:X.a,alt:"Sodoku",style:{maxWidth:200,borderRadius:20}})),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://www.smartgameslive.com/en"},"Mind Training")),l.a.createElement("div",{className:"card bg-white"},l.a.createElement("h2",null,"More Online Games"),l.a.createElement("p",null,"More Games Online!"),l.a.createElement("a",{href:"https://www.arkadium.com/free-online-games/"},l.a.createElement("img",{className:"img-responsive",src:ee.a,alt:"More games",style:{maxWidth:200,borderRadius:20}})),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://www.arkadium.com/free-online-games/"},"More Games")),l.a.createElement("div",{className:"card bg-white"},l.a.createElement("h2",null,"Other Games"),l.a.createElement("p",null,"Even more similar games!"),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://www.Agame.com"},"AGame"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.Miniclip.com"},"MiniClip"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.Pogo.com"},"Pogo"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.playretrogames.com"},"PlayRetroGames"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.arkadium.com"},"Arkadium"))))}function ae(){document.body.style.backgroundColor="white";var e=Object(n.useState)({firstName:"",lastName:"",email:"",phone:""}),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),m=o[0],i=o[1],u=function(e,t){var n=a;n[t]=e.target.value,r(n),console.log(a)};return m?l.a.createElement("div",{className:"p-10"},l.a.createElement("h4",null,"Thanks for contacting us, ",a.firstName," ",a.lastName),l.a.createElement("hr",null),l.a.createElement("p",null,"Here's what we've learned about you;"),l.a.createElement("div",{className:"card bg-white"},l.a.createElement("h4",null,"Personal"),l.a.createElement("hr",null),l.a.createElement("small",null,"First Name"),l.a.createElement("p",null,a.firstName),l.a.createElement("small",null,"Last Name"),l.a.createElement("p",null,a.lastName),l.a.createElement("small",null,"Email Address"),l.a.createElement("p",null,a.email),l.a.createElement("small",null,"Phone Number"),l.a.createElement("p",null,a.phone),a.birthday?l.a.createElement(l.a.Fragment,null,l.a.createElement("small",null,"Birthdate"),l.a.createElement("p",null,a.birthday)):"",a.gender?l.a.createElement(l.a.Fragment,null,l.a.createElement("small",null,"Gender"),l.a.createElement("p",null,a.gender)):""),a.website||a.employment||a.salary?l.a.createElement("div",{className:"card bg-white"},l.a.createElement("h4",null,"Business"),l.a.createElement("hr",null),a.website?l.a.createElement(l.a.Fragment,null,l.a.createElement("small",null,"Website"),l.a.createElement("br",null),l.a.createElement("a",{href:a.website},a.website),l.a.createElement("br",null)):"",a.employment?l.a.createElement(l.a.Fragment,null,l.a.createElement("small",null,"Employment Status"),l.a.createElement("p",null,a.employment)):"",a.salary?l.a.createElement(l.a.Fragment,null,l.a.createElement("small",null,"Salary Range"),l.a.createElement("p",null,a.salary)):""):"",l.a.createElement("h4",null,"We will be in touch.")):l.a.createElement("div",{className:"p-10"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement("div",{className:"card bg-white d-flex flex-column"},l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),new Date(a.birthday)>new Date(Date.now()))return alert("Please check your birthdate - you cannot be born after today");i(!0)},className:"contact-form"},l.a.createElement("label",{htmlFor:"name"},"First Name*"),l.a.createElement("br",null),l.a.createElement("input",{required:!0,type:"text",id:"name",onChange:function(e){return u(e,"firstName")}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"namel"},"Last Name*"),l.a.createElement("br",null),l.a.createElement("input",{required:!0,type:"text",id:"namel",onChange:function(e){return u(e,"lastName")}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"email"},"Email Address*"),l.a.createElement("br",null),l.a.createElement("input",{required:!0,type:"email",id:"email",onChange:function(e){return u(e,"email")}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"phone"},"Phone Number*"),l.a.createElement("br",null),l.a.createElement("input",{required:!0,type:"tel",id:"phone",onChange:function(e){return u(e,"phone")}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"url"},"Website"),l.a.createElement("br",null),l.a.createElement("input",{type:"url",id:"url",onChange:function(e){return u(e,"website")}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"birthday"},"Birthdate"),l.a.createElement("br",null),l.a.createElement("input",{type:"date",id:"birthday",onChange:function(e){return u(e,"birthday")}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"gender"},"Gender"),l.a.createElement("br",null),l.a.createElement("select",{id:"gender",onChange:function(e){return u(e,"gender")}},l.a.createElement("option",{value:!0,disabled:!0,selected:!0},"-- SELECT --"),l.a.createElement("option",{value:"Male"},"Male"),l.a.createElement("option",{value:"Female"},"Female"),l.a.createElement("option",{value:"Other"},"Other / Prefer not to say")),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"employment"},"Employment Status"),l.a.createElement("br",null),l.a.createElement("select",{id:"employment",onChange:function(e){return u(e,"employment")}},l.a.createElement("option",{selected:!0,disabled:!0,value:!0},"-- SELECT --"),l.a.createElement("option",{value:"Employed"},"Employed"),l.a.createElement("option",{value:"Unemployed"},"Unemployed")),l.a.createElement("br",null),l.a.createElement("label",null,"Salary Band"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",name:"band",id:"banda",value:"<$10,000",onChange:function(e){return u(e,"salary")}}),l.a.createElement("label",{htmlFor:"banda"}," <$10,000"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",name:"band",id:"bandb",value:"<$50,000",onChange:function(e){return u(e,"salary")}}),l.a.createElement("label",{htmlFor:"bandb"}," <$50,000"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",name:"band",id:"bandc",value:">$50,000",onChange:function(e){return u(e,"salary")}}),l.a.createElement("label",{htmlFor:"bandc"}," >$50,000"),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Post"})),l.a.createElement("br",null),l.a.createElement("small",null,"Fields marked with a '*' are required.")))}var ne=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},l.a.createElement("h4",{className:"text-white",style:{padding:0,margin:0}},"Quizzer"))),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/quiz/start"},"Quiz")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/iq"},"IQ")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/games"},"Games")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/contactus"},"Contact Us"))))),l.a.createElement("div",{className:"root"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:function(){return l.a.createElement(u,{appVersion:"1.0.0b"})}}),l.a.createElement(m.a,{path:"/quiz/main",component:f}),l.a.createElement(m.a,{path:"/quiz/score",component:w}),l.a.createElement(m.a,{path:"/quiz/start",component:x}),l.a.createElement(m.a,{path:"/iq",exact:!0,component:N}),l.a.createElement(m.a,{path:"/iq/main",exact:!0,component:H}),l.a.createElement(m.a,{path:"/iq/score",component:U}),l.a.createElement(m.a,{path:"/games",exact:!0,component:te}),l.a.createElement(m.a,{path:"/contactus",exact:!0,component:ae}),l.a.createElement(m.a,{component:i}))),l.a.createElement(g,null))};c.a.render(l.a.createElement(o.a,{basename:/github.io/.test(window.location)?"/seainfo6150-final-project-webapp":""},l.a.createElement(ne,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d4d7cbce.chunk.js.map