(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),l=a("q1tI"),m=a.n(l),i=a("CGcg"),s=a("vrFN"),o=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={smallScreen:!1,modal:{name:""}},t}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()},a.resize=function(){this.setState({smallScreen:window.innerWidth<=840})},a.openModal=function(e){this.setState({modal:e}),document.getElementById("modal").style.display="block"},a.closeModal=function(){document.getElementById("modal").style.display="none"},a.render=function(){var e=this,t=this.props.data.allIndexJson.nodes[0],a=[],n=0;return t.home_items.forEach((function(t){a.push(m.a.createElement("div",{key:n,onClick:e.openModal.bind(e,t),className:e.state.smallScreen?"grid-item-small":"home-grid-item",style:{backgroundImage:"url("+t.image+")",backgroundSize:"100%"}})),n++})),m.a.createElement(i.a,{page:"home"},m.a.createElement("meta",{property:"og:type",content:"Hành phi Nhung Việt"}),m.a.createElement("meta",{property:"og:title",content:"Hành phi Nhung Việt"}),m.a.createElement("meta",{property:"og:description",content:"Hành khô"}),m.a.createElement("meta",{property:"og:image",content:t.home_items[0].image}),m.a.createElement(s.a,{title:"Trang chủ",image:t.home_items[0].image,description:"Trang chủ"}),m.a.createElement("h1",{className:"title"},t.title),m.a.createElement("div",{className:"home-main"},m.a.createElement("div",{className:"text"},t.text),m.a.createElement("div",{className:"divider"}),m.a.createElement("h2",{className:"subtitle"},t.subtitle),m.a.createElement("div",{className:this.state.smallScreen?"grid-container-small":"home-grid-container"},a)),m.a.createElement("div",{id:"modal",className:"modal",onClick:this.closeModal},m.a.createElement("div",{className:this.state.smallScreen?"modal-content-small":"modal-content"},m.a.createElement("span",{className:"modal-close"},"×"),m.a.createElement("div",{className:"modal-grid-container"},m.a.createElement("div",{className:"modal-grid-item-left"},m.a.createElement("span",{className:"modal-title"},this.state.modal.name),m.a.createElement("p",{className:"modal-text"},this.state.modal.description),m.a.createElement("p",{className:"modal-text"},"Giá bán: ",this.state.modal.completed)),m.a.createElement("div",{className:"modal-grid-item-right"},m.a.createElement("img",{src:this.state.modal.image,alt:this.state.modal.name,className:"modal-image"}))))))},t}(l.Component);t.default=o}}]);
//# sourceMappingURL=component---src-pages-index-js-6639207c6f0d441d1df2.js.map