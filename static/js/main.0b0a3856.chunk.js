(this.webpackJsonpmonster=this.webpackJsonpmonster||[]).push([[0],{18:function(e,t,n){},34:function(e,t,n){e.exports=n(67)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(31),r=n.n(o);n(39),n(40);var l=function(){return i.a.createElement("div",null,i.a.createElement("p",{className:"nav"},"Watch the monsters in you ?"))},s=n(3),c=n(4),u=n(8),h=n(6),m=n(7),f=(n(41),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"btn"},i.a.createElement("a",{href:"/cat-s-eye/#/modal"},i.a.createElement("button",{className:"btn-home",type:"button"}," Click me"))))}}]),t}(i.a.Component)),v=(n(42),n(11)),d=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("canvas"),t=e.getContext("2d"),n=e.width=window.innerWidth,a=e.height=window.innerHeight,i="rgba(0, 0, 0, .1)",o=30,r=[];function l(e,t){return Math.random()*(t-e)+e}var u=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,[{key:"init",value:function(){this.x=l(0,n),this.y=0,this.color="hsl(000, 100%, 40%)",this.w=2,this.h=1,this.vy=l(4,5),this.vw=3,this.vh=1,this.size=2,this.hit=l(.9*a,1*a),this.a=1,this.va=.96}},{key:"draw",value:function(){this.y>this.hit?(t.beginPath(),t.moveTo(this.x,this.y-this.h/2),t.bezierCurveTo(this.x+this.w/2,this.y-this.h/2,this.x+this.w/2,this.y+this.h/2,this.x,this.y+this.h/2),t.bezierCurveTo(this.x-this.w/2,this.y+this.h/2,this.x-this.w/2,this.y-this.h/2,this.x,this.y-this.h/2),t.strokeStyle="hsla(0, 100%, 40%, "+this.a+")",t.stroke(),t.closePath()):(t.fillStyle=this.color,t.fillRect(this.x,this.y,this.size,5*this.size)),this.update()}},{key:"update",value:function(){this.y<this.hit?this.y+=this.vy:this.a>.03?(this.w+=this.vw,this.h+=this.vh,this.w>100&&(this.a*=this.va,this.vw*=.98,this.vh*=.98)):this.init()}}]),e}();window.addEventListener("resize",(function(){n=e.width=window.innerWidth,a=e.height=window.innerHeight})),function(){for(var e=0;e<o;e++)setTimeout((function(){var e=new u;e.init(),r.push(e)}),200*e)}(),function e(){for(var o in t.fillStyle=i,t.fillRect(0,0,n,a),r)r[o].draw();requestAnimationFrame(e)}()}},{key:"render",value:function(){return i.a.createElement("canvas",{id:"canvas"})}}]),t}(i.a.Component),b=(n(43),n(44),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"modal dsk-offset-3 dsk-6 tab-offset-2 tab-8 mob-offset-1 mob-10"},i.a.createElement("ul",null,i.a.createElement("li",{className:"questions"},"What's your favorite cocktail ?"),i.a.createElement("li",null,"I love Bloody Mary.",i.a.createElement("input",{type:"checkbox",name:"audio"})),i.a.createElement("li",null,"I prefer unicorn's milk.",i.a.createElement("input",{type:"checkbox",name:"audio"}))),i.a.createElement("ul",null,i.a.createElement("li",{className:"questions"},"What's your favorite meal ?"),i.a.createElement("li",null,"I love fried eyes for breakfast.",i.a.createElement("input",{type:"checkbox",name:"audio"})),i.a.createElement("li",null,"Young children's brains.",i.a.createElement("input",{type:"checkbox",name:"audio"}))),i.a.createElement("ul",null,i.a.createElement("li",{className:"questions"},"What's your favorite tool ?"),i.a.createElement("li",null,"My chainsaw is my best friend.",i.a.createElement("input",{type:"checkbox",name:"audio"})),i.a.createElement("li",null,"I love playing around with my saw.",i.a.createElement("input",{type:"checkbox",name:"audio"}))),i.a.createElement("div",null,i.a.createElement("a",{href:"/cat-s-eye/#/result"},i.a.createElement("button",{className:"confirm",type:"button"}," Confirm"))))}}]),t}(i.a.Component)),p=n(13),y=n(16),E=n.n(y);n(18);var k=function(e){var t=e.monster;return i.a.createElement("div",{className:"DisplayMonster dsk-offset-1 dsk-2 tab-offset-1 tab-3 mob-offset-1 mob-3"},i.a.createElement("img",{className:"monsterImg",src:t.picture,alt:t.name}),i.a.createElement("ul",{className:"ul"},i.a.createElement("li",{className:"monsterName"},t.name)))},w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={monster:null},n.getMonster=n.getMonster.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getMonster()}},{key:"getMonster",value:function(){var e=this,t=Number(Math.floor(20*Math.random()));E.a.get("https://hackathon-wild-hackoween.herokuapp.com/monsters").then((function(e){return e.data})).then((function(n){e.setState({monster:n.monsters[t]})}))}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.monster?i.a.createElement(k,{monster:this.state.monster}):i.a.createElement("p",null," No data "))}}]),t}(i.a.Component);var j=function(e){var t=e.movie;return i.a.createElement("div",{className:"DisplayMovie dsk-offset-1 dsk-3 tab-offset-1 tab-2 mob-offset-1 mob-3"},i.a.createElement("h3",null,t.title),i.a.createElement("img",{className:"movieImg",src:t.posterUrl,alt:t.title}),i.a.createElement("ul",null,i.a.createElement("li",null," ",t.director," (",t.year,")")))},O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={movie:null},n.getMovie=n.getMovie.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"getMovie",value:function(){var e=this,t=Number(Math.floor(82*Math.random()));E.a.get("https://hackathon-wild-hackoween.herokuapp.com/movies").then((function(e){return e.data})).then((function(n){e.setState({movie:n.movies[t]})}))}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.movie?i.a.createElement(j,{movie:this.state.movie}):i.a.createElement("p",null," No data "))}}]),t}(i.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"row tab-12"},i.a.createElement(O,null),i.a.createElement(O,null),i.a.createElement(w,null),i.a.createElement(O,null),i.a.createElement(O,null))}}]),t}(i.a.Component);var N=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l,null),i.a.createElement(v.c,null,i.a.createElement(v.a,{exact:!0,path:"/",component:f}),i.a.createElement(v.a,{path:"/modal",component:b}),i.a.createElement(v.a,{path:"/result",component:g})),i.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(15);r.a.render(i.a.createElement(M.a,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.0b0a3856.chunk.js.map