(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),u=n.n(r),l=(n(18),n(1)),o=function(){var e=Object(l.c)(function(e){return e.changeTheNumber}),t=Object(l.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:" text-center bg-warning vh-100  container-fluid"},c.a.createElement("h1",null,"Increment/decrement counter"),c.a.createElement("h4",null,"REDUX-APP"),c.a.createElement("div",{className:"  text-center row m-auto p-5 mt-5 container-fluid "},c.a.createElement("button",{onClick:function(){return t({type:"INCREMENT"})},className:"col-2 m-auto btn btn-success text-white rounded-5 ",value:"+"},c.a.createElement("h1",{className:"display-1"},"+")),c.a.createElement("input",{name:"quantity",className:"text-center display-1 quantity__input auto col-4 w-25 mb-0 bg-white rounded-5 btn-outline-light border-0 ",value:e}),c.a.createElement("button",{onClick:function(){return t({type:"DECREMENT"})},className:"btn btn-danger m-auto col-2 text-white rounded-5 ",value:"-"},c.a.createElement("h1",{className:"display-1"},"-")))))},i=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,26)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),a(e),c(e),r(e),u(e)})},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},m=n(2),E=Object(m.a)({changeTheNumber:s}),d=Object(m.b)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=u.a.createRoot(document.getElementById("root"));d.subscribe(function(){return console.log(d.getState())}),b.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:d},c.a.createElement(o,null)))),i()}},[[10,3,2]]]);
//# sourceMappingURL=main.6d768e94.chunk.js.map