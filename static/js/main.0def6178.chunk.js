(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/robert-katzki.fbfcd3be.jpg"},19:function(e,n,t){e.exports=t(27)},27:function(e,n,t){"use strict";t.r(n);var r,a=t(0),c=t.n(a),o=t(14),u=t.n(o),i=t(4),s=t(5),l=t.n(s),d=t(8),p=t(3),f=t(11);!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(r||(r={}));var m=function(){var e=Object(d.a)(l.a.mark((function e(n,t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(n,"&difficulty=").concat(t,"&type=multiple"),e.next=3,fetch(r);case 3:return e.next=5,e.sent.json();case 5:return a=e.sent,console.log(a),e.abrupt("return",a.results.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{answers:(n=[].concat(Object(i.a)(e.incorrect_answers),[e.correct_answer]),Object(i.a)(n).sort((function(){return Math.random()-.5})))});var n})));case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),b=t(1),x=t(2);function g(){var e=Object(b.a)(["\n  transition: all 0.3s ease;\n  :hover {\n    opacity: 0.8;\n  }\n\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.9rem;\n    width: 100%;\n    margin: 5px 0;\n    height: 40px;\n    background: ",";\n    border: 4px solid #eee;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #ffffff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"]);return g=function(){return e},e}function h(){var e=Object(b.a)(["\n  width: 100%;\n  max-width: 1200px;\n  background: #d0fff9;\n  border-radius: 10px;\n  border: 3px solid #1f4261;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n\n  p {\n    font-size: 1.1rem;\n  }\n"]);return h=function(){return e},e}var v=x.b.div(h()),w=x.b.div(g(),(function(e){var n=e.correct,t=e.userClicked;return n?"linear-gradient(90deg,#3FBC9B,#596418)":!n&&t?"linear-gradient(90deg,#ac331d,#cf0909)":"linear-gradient(90deg,#1F4261,#6EAFD3)"})),E=function(e){var n=e.question,t=e.answers,r=e.callback,a=e.userAnswer,o=e.questionNumber,u=e.totalQuestions;return c.a.createElement(v,null,c.a.createElement("p",{className:"number"},"Question: ",o," / ",u),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}),c.a.createElement("div",null,t.map((function(e){return c.a.createElement(w,{key:e,correct:(null===a||void 0===a?void 0:a.correctAnswer)===e,userClicked:(null===a||void 0===a?void 0:a.answer)===e},c.a.createElement("button",{disabled:!!a,value:e,onClick:r},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})))}))))};function j(){var e=Object(b.a)(["\n  .correctness {\n    background: ",";\n    color: white;\n  }\n"]);return j=function(){return e},e}function k(){var e=Object(b.a)(["\n  margin: 50px 0 10px;\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n"]);return k=function(){return e},e}var O=x.b.div(k()),y=x.b.div(j(),(function(e){return e.correct?"linear-gradient(90deg,#3FBC9B,#596418)":"linear-gradient(90deg,#FF5637,#C1581B)"})),S=function(e){var n=e.userAnswers;return a.createElement(O,null,a.createElement("h2",null,"Summary of your answers."),n.map((function(e){var n=e.question,t=e.answer,r=e.correctAnswer,c=e.correct;return a.createElement(y,{key:n,correct:c},a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}),a.createElement("p",null,"Your answer: ",t),a.createElement("p",null,"Correct answer: ",r),a.createElement("p",{className:"correctness"},c?"Correct!":"Incorrect!"),a.createElement("br",null))})))},z=t(18),C=t.n(z);function q(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .score {\n    font-size: 2rem;\n    margin: 0;\n  }\n\n  h1 {\n    font-family: 'Fascinate Inline', sans-serif;\n    background-size: 100%;\n    filter: drop-shadow(2px 2px #ebfeff);\n    font-size: 50px;\n    text-align: center;\n    margin: 20px;\n    @media (min-width: 900px) {\n      font-size: 70px;\n    }\n  }\n\n  .start,\n  .next {\n    cursor: pointer;\n    background: #d0fff9;\n    border: 2px solid #1f4261;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n    font-size: 1rem;\n  }\n\n  .start {\n    max-width: 200px;\n  }\n"]);return q=function(){return e},e}function A(){var e=Object(b.a)(["\n    html {\n        height: 100%;\n    }\n\n    body {\n        background-image: url(",");\n        background-size: cover;\n        background-attachment: fixed;\n        background-repeat: no-repeat;\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n\n    * {\n        box-sizing: border-box;\n        font-family: 'Catamaran', sans-serif;\n    }\n"]);return A=function(){return e},e}var F=Object(x.a)(A(),C.a),_=x.b.div(q()),N=function(){var e=Object(a.useState)(!1),n=Object(p.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)([]),s=Object(p.a)(u,2),f=s[0],b=s[1],x=Object(a.useState)(0),g=Object(p.a)(x,2),h=g[0],v=g[1],w=Object(a.useState)([]),j=Object(p.a)(w,2),k=j[0],O=j[1],y=Object(a.useState)(0),z=Object(p.a)(y,2),C=z[0],q=z[1],A=Object(a.useState)(!0),N=Object(p.a)(A,2),I=N[0],M=N[1],B=function(){var e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),M(!1),e.next=4,m(10,r.EASY);case 4:n=e.sent,b(n),q(0),O([]),v(0),o(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(k),c.a.createElement(c.a.Fragment,null,c.a.createElement(F,null),c.a.createElement(_,null,k.length<10?c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Evergreen Quiz"),I||10===k.length?c.a.createElement("button",{className:"start",onClick:B},"Start"):null,I?null:c.a.createElement("p",{className:"score"},"Score: ",C),t&&c.a.createElement("p",null,"Loading Questions..."),!t&&!I&&c.a.createElement(E,{questionNumber:h+1,totalQuestions:10,question:f[h].question,answers:f[h].answers,userAnswer:k?k[h]:void 0,callback:function(e){if(!I){var n=e.currentTarget.value,t=f[h].correct_answer===n;t&&q((function(e){return e+1}));var r={question:f[h].question,answer:n,correct:t,correctAnswer:f[h].correct_answer};O((function(e){return[].concat(Object(i.a)(e),[r])}))}}}),I||t||k.length!==h+1||9===h?null:c.a.createElement("button",{className:"next",onClick:function(){var e=h+1;10===e?M(!0):v(e)}},"Next")):c.a.createElement(c.a.Fragment,null,c.a.createElement(S,{userAnswers:k}),c.a.createElement("button",{className:"start",onClick:B},"Take quiz again"))))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0def6178.chunk.js.map