(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(7),s=a.n(c),l=(a(14),a(1)),o=a(2),u=a(4),d=a(3),r=a(5),m=(a(16),a(18),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).handleAutoAmount=function(){var t=a.state,e=t.amountClicked,n=t.minusData,i=t.addData,c=t.addToMinus;if(e>=n){var s=e-n;a.setState({amountClicked:s}),i<1?a.setState({minusData:100,addData:i+1}):a.setState({minusData:n+100*i,addData:i+5,AddToMinus:c*i}),a.autoAdd()}},a.autoAdd=function(){setInterval(a.pleaseAdd,a.state.timeData)},a.pleaseAdd=function(){var t=a.state,e=t.amountClicked+t.addData;a.setState({amountClicked:e})},a.handleCircleClicked=function(){var t=a.state,e=t.amountClicked,n=t.clickData;a.setState({amountClicked:e+n,clickerClicked:!0})},a.handleCircleMouseUp=function(){a.setState({clickerClicked:!1})},a.handleAddClick=function(){var t=a.state,e=t.amountClicked,n=t.minusClickData,i=t.clickData;e>n&&a.setState({amountClicked:e-n,clickData:i+1,minusClickData:n+6e3})},a.handleMinusTime=function(){var t=a.state,e=t.amountClicked,n=t.minusTimeData,i=t.timeData,c=t.addData;e>n&&(i>=400?(a.setState({amountClicked:e-n,timeData:i-300}),c<=1?a.setState({minusTimeData:n+1e3}):a.setState({minusTimeData:n+1e3*c})):a.setState({timeData:100}))},a.state={amountClicked:0,minusData:10,addData:0,addToMinus:1e3,clickData:1,minusClickData:1e3,timeData:3e3,minusTimeData:5e3,clickerClicked:!1},a}return Object(r.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"clickerContainer"},i.a.createElement("div",{className:"amountContainer"},i.a.createElement("span",{className:this.state.clickerClicked?"active":" "},this.state.amountClicked)),i.a.createElement("button",{className:"clicker "+(this.state.clickerClicked?"active":" "),onMouseUp:this.handleCircleMouseUp,onMouseDown:this.handleCircleClicked})),i.a.createElement("div",{className:"autoContainer"},i.a.createElement("p",null,i.a.createElement("button",{className:"autoAdd",onClick:this.handleAutoAmount}," ",this.state.minusData," points for ",this.state.addData+1," auto Click")),i.a.createElement("p",null,i.a.createElement("button",{className:"autoAdd",onClick:this.handleMinusTime}," ",this.state.minusTimeData," points to lessen Auto time "),"\xa0 Currently: ",this.state.timeData/1e3),i.a.createElement("p",null,i.a.createElement("button",{className:"autoAdd",onClick:this.handleAddClick}," ",this.state.minusClickData," points for +1 Points per Click"),"\xa0 Currently: ",this.state.clickData)))}}]),e}(n.Component)),k=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(r.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement(m,null)))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.3a1c7448.chunk.js.map