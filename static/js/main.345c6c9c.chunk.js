(this["webpackJsonpacnh-dialog"]=this["webpackJsonpacnh-dialog"]||[]).push([[0],{10:function(e,n,t){e.exports=t(25)},15:function(e,n,t){},17:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),s=t(8),i=t.n(s),o=(t(15),t(5)),l=t.n(o),c=t(6),u=t(1),h=t(2),p=t(3),f=t(4),m=t(9),d=(t(17),{0:"#22ABBD",3:"#F28903",65535:"reset"}),g={0:"neutral",2:"happiness",3:"joy",4:"love",5:"sheepishness",6:"happiness-like",7:"shine with happy",9:"aggrivation",11:"worry",12:"sighing",13:"thought",14:"sadness",15:"distress",16:"sorrow",17:"heartbreak",18:"resignation",20:"laughter",21:"glee",23:"flourish",24:"showmanship",26:"amazed",27:"surprise",28:"shocked-like",29:"shocked",30:"inspiration",31:"mistaken",32:"lightly amazed",33:"encouraging",34:"greetings",35:"apologetic",36:"pleased",37:"agreement",38:"curiosity",39:"disagreement",40:"confident",41:"explaining",42:"cold chill",43:"fearful",44:"sneezing",46:"sleepy",47:"dozing",49:"daydreaming",50:"bashfulness",51:"mischief",52:"shyness",53:"pride",54:"smirking",55:"eyes to the side",56:"arms close, eyes up, frown",57:"intense-like",58:"intense",59:"bewilderment"};function v(e,n,t){return n in e?e[n]:void 0===t?n:t}var y={0:function(e){if(0===e[0]){for(var n="",t=0;t<e[2]/2;t++)n+=String.fromCodePoint(e[3+t]);return"displayHint("+e[1]+' chars, "'+n+'")'}if(2===e[0])return"setTextSize("+e[1]+")";if(3===e[0]){e[1];return"setTextColor("+v(d,e[1])+")"}return 4===e[0]?"nextPage()":null},10:function(e){return 2===e[0]?"shortPause()":null},40:function(e){return 52480===e[1]&&0==e[2]?"emote("+v(g,e[0])+")":null},50:function(e){if(0===e[0]&&3===e.length&&52483===e[2]){var n={256:"singular indefinite consonant",512:"singular indefinite vowel",1024:"plural"};return null===v(n,e[1],null)?null:"wordInfo("+n[e[1]]+")"}return 1===e.length&&2===e[0]?"getWordArticle()":null},90:function(e){if(0===e[1]&&2===e.length){return"getNum("+v({2:"item present in storage/pockets",17:"bells",20:"Daisy turnip price",21:"price offered to buy item",26:"Daisy turnip price"},e[0])+")"}if(52480===e[1]){return"getVal("+v({35:"month",36:"day",37:"hour",38:"minute"},e[0])+")"}return null},110:function(e){if(1===e.length){return"getStr("+v({0:'"..."',1:"player name",3:"nickname",5:"catchphrase",9:"player's island"},e[0])+")"}return null},115:function(e){if(1===e.length){return"getStr("+v({0:"some player name",1:"some player name",2:"some island name"},e[0])+")"}return null}};function w(e){if(e[0]in y){var n=y[e[0]](e[1]);if(null!==n)return n}return"F"+e[0]+"("+e[1].join(", ")+")"}var k=t(18),b=k.initialize(Math.pow(2,1)),E=(b.encode,b.decode);function j(){return(j=Object(m.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ACNHDialog/clean.mp");case 2:return n=e.sent,e.next=5,n.arrayBuffer();case 5:return t=e.sent,console.log(t),e.abrupt("return",E(k.Buffer.from(t)));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e,n=[],t=0,a=Object(c.a)(this.props.data);try{for(a.s();!(e=a.n()).done;){var s=e.value;"0"in s&&n.push(r.a.createElement("div",{key:t++,className:"text"},s[0])),"1"in s&&this.props.showFuncs&&n.push(r.a.createElement("div",{key:t++,className:"func"},w(s[1]))),"2"in s&&this.props.showFuncs&&n.push(r.a.createElement("div",{key:t++,className:"func special"},"SF(",s[2][0],", ",s[2][1],")"))}}catch(i){a.e(i)}finally{a.f()}return r.a.createElement("li",{className:"entry"},r.a.createElement("div",{className:"name"},this.props.name),r.a.createElement("div",{className:"val"},n))}}]),t}(r.a.Component),O=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(e){var a;return Object(u.a)(this,t),(a=n.call(this,e)).state={open:!1},a}return Object(h.a)(t,[{key:"render",value:function(){var e=this,n=null;if(this.state.open){n=[];var t,a=Object(c.a)(this.props.data[0]);try{for(a.s();!(t=a.n()).done;){var s=t.value;n.push(r.a.createElement(F,{key:s[0],name:s[0],data:s[1],showFuncs:this.props.showFuncs}))}}catch(i){a.e(i)}finally{a.f()}}return r.a.createElement("li",null,r.a.createElement("div",{className:"clickable",onClick:function(){return e.setState({open:!e.state.open})}},this.props.name),r.a.createElement("ul",null,n))}}]),t}(r.a.Component),N=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(e){var a;return Object(u.a)(this,t),(a=n.call(this,e)).state={open:!!a.props.openDefault&&a.props.openDefault},a}return Object(h.a)(t,[{key:"render",value:function(){var e=this,n=null,a=this.props.data;if(this.state.open){n=[];for(var s=0,i=Object.keys(a[0]);s<i.length;s++){var o=i[s];n.push(r.a.createElement(t,{key:n.length,name:o,data:a[0][o],showFuncs:this.props.showFuncs}))}for(var l=0,c=Object.keys(a[1]);l<c.length;l++){var u=c[l];n.push(r.a.createElement(O,{key:n.length,name:u,data:a[1][u],showFuncs:this.props.showFuncs}))}}return r.a.createElement("li",null,r.a.createElement("div",{className:"clickable",onClick:function(){return e.setState({open:!e.state.open})}},this.props.name),r.a.createElement("ul",null,n))}}]),t}(r.a.Component),S=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(e){var a;return Object(u.a)(this,t),(a=n.call(this,e)).state={data:{info:"loading"},showFuncs:!0},a}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){return j.apply(this,arguments)})().then((function(n){e.setState({data:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return"info"in this.state.data?r.a.createElement("div",null,"Loading"):r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"showFuncs",checked:this.state.showFuncs,onChange:function(){return e.setState({showFuncs:!e.state.showFuncs})}}),r.a.createElement("label",{htmlFor:"showFuncs"},"Show Functions"),r.a.createElement("ul",{className:"tree-view",style:{minHeight:"50%"}},r.a.createElement(N,{name:"/",data:this.state.data,openDefault:!0,showFuncs:this.state.showFuncs})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.345c6c9c.chunk.js.map