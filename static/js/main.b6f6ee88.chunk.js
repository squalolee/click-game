(this["webpackJsonpclick-game"]=this["webpackJsonpclick-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Luka","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254","position":"Guard","team":"Mavericks"},{"id":2,"name":"Lebron","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254","position":"Forward","team":"Lakers"},{"id":3,"name":"Kawaii","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6450.png&w=350&h=254","position":"Forward","team":"Clippers"},{"id":4,"name":"Bam","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066261.png&w=350&h=254","position":"Center","team":"Heat"},{"id":5,"name":"Jimmy","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png&w=350&h=254","position":"Forward","team":"Heat"},{"id":6,"name":"Nikola","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3112335.png&w=350&h=254","position":"Center","team":"Nuggets"},{"id":7,"name":"Chris","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2779.png&w=350&h=254","position":"Guard","team":"Thunder"},{"id":8,"name":"Ben","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907387.png&w=350&h=254","position":"Guard","team":"Sixers"},{"id":9,"name":"Kristaps","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102531.png&w=350&h=254","position":"Center","team":"Mavericks"},{"id":10,"name":"Giannis","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png&w=350&h=254","position":"Center","team":"Bucks"},{"id":11,"name":"Jayson","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=350&h=254","position":"Forward","team":"Celtics"},{"id":12,"name":"Kemba","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6479.png&w=350&h=254","position":"Guard","team":"Celtics"},{"id":13,"name":"Joel","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&w=350&h=254","position":"Center","team":"Sixers"},{"id":14,"name":"Damian","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6606.png&w=350&h=254","position":"Guard","team":"Blazers"},{"id":15,"name":"Steph","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254","position":"Guard","team":"Warriors"},{"id":16,"name":"Klay","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254","position":"Guard","team":"Warriors"},{"id":17,"name":"Draymond","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254","position":"Forward","team":"Warriors"},{"id":18,"name":"Jamal","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3936299.png&w=350&h=254","position":"Guard","team":"Nuggets"},{"id":19,"name":"Goran","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3423.png&w=350&h=254","position":"Guard","team":"Heat"},{"id":20,"name":"Tyler","image":"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395725.png&w=350&h=254","position":"Guard","team":"Heat"}]')},,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(3),c=t.n(s),r=(t(13),t(4)),o=t(5),m=t(7),l=t(6),h=t(1);t(14);var d=function(e){return i.a.createElement("div",{className:"card item",onClick:function(){return e.clickedImage(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name),i.a.createElement("li",null,i.a.createElement("strong",null,"Occupation:")," ",e.position),i.a.createElement("li",null,i.a.createElement("strong",null,"Location:")," ",e.team))))};var p=function(e){return i.a.createElement("header",{className:"scoreB"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 col-left text-center"},i.a.createElement("h5",null,e.title)),i.a.createElement("div",{className:"col-md-3 col-right text-center"},i.a.createElement("h6",null,"High Score ",e.score)),i.a.createElement("div",{className:"col-md-3 col-right text-center"},i.a.createElement("h6",null,"Current Score: ",e.highScore))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12 col-right text-center"},i.a.createElement("h6",null,"Click a friend, but only once! Try to hit as many new friends to get a new high score!"))))};var g=function(e){return i.a.createElement("h1",{className:"title"},e.children)};var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};t(15);function f(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}var b=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=a.call.apply(a,[this].concat(i))).state={friends:h,score:0,highScore:0,showAlert:0,showSuccess:0,clickedIcons:[]},e.clickedImage=function(a){var t=e.state.clickedIcons,n=e.state.score,i=e.state.highScore;e.setState({showAlert:0}),-1===t.indexOf(a)?(t.push(a),console.log(t),e.handleIncrement(),e.makeShuffle()):12===e.state.score?e.setState({showSuccess:1,score:0,clickedIcons:[]}):(e.setState({score:0,clickedIcons:[]}),console.log("duplicate"),e.setState({showAlert:1})),n>i&&e.setState({highScore:n})},e.handleIncrement=function(){e.setState({score:e.state.score+1})},e.makeShuffle=function(){e.setState({friends:f(h)})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"alert alert-danger",style:{opacity:this.state.showAlert}},"You clicked somebody twice! Try again!"),i.a.createElement("div",{className:"alert alert-success",style:{opacity:this.state.showSuccess}},"Keep going!!"),i.a.createElement(p,{Title:"clicky game",score:this.state.score,highScore:this.state.highScore}),i.a.createElement(g,null,"Clicky Game"),i.a.createElement(u,null,i.a.createElement("div",{className:"row"},this.state.friends.map((function(a){return i.a.createElement(d,{key:a.id,id:a.id,name:a.name,position:a.position,team:a.team,image:a.image,clickedImage:e.clickedImage})})))))}}]),t}(n.Component);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.b6f6ee88.chunk.js.map