(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/cAt":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n);t.a=function(e){var t=e.pageTitle;return l.a.createElement("div",{className:"header-bottom bg_img"},l.a.createElement("div",{className:"wrapit"},t))}},"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"2J6N":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("Wbzz"),l=a("q1tI"),r=a.n(l);function c(){var e=Object(l.useState)(!1),t=e[0],a=e[1];return r.a.createElement("div",{className:"banner-bottom"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navi"},r.a.createElement("div",{className:"head-logo"},r.a.createElement(n.Link,{to:"/"},r.a.createElement("span",{className:"southern"},"Southern")," ",r.a.createElement("span",{className:"partner"}," Partners"))),r.a.createElement("div",{className:"banner-nav"},r.a.createElement("span",{className:"menu",onClick:function(){a(!t)}},r.a.createElement("img",{src:"images/menu.png",alt:" "})),r.a.createElement("ul",{className:"nav1 "+(t?"displayNav":"")},r.a.createElement("li",{className:"active"},r.a.createElement(n.Link,{to:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement(n.Link,{to:"/services"},"Product & Services")),r.a.createElement("li",null,r.a.createElement(n.Link,{to:"/about"},"ABOUT")),r.a.createElement("li",null,r.a.createElement(n.Link,{to:"/contact"},"CONTACT")))),r.a.createElement("div",{className:"clearfix"}," "))))}},"9nWZ":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),l=a.n(n);function r(){return l.a.createElement("div",{className:"footer-credit"},"© Southern Partners | 2020")}},"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("/cAt"),c=a("Bl7J"),s=a("2J6N"),i=a("vrFN"),o=(a("Tze0"),a("pIFo"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("hHhE"),a("f3/d"),a("91GP"),a("MgzW")),m=a.n(o),u=function(){return(u=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},d=function(e){for(var t=e.url,a=e.allowFullScreen,n=e.position,r=e.display,c=e.height,s=e.width,i=e.overflow,o=e.styles,d=e.onLoad,p=e.onMouseOver,f=e.onMouseOut,E=e.scrolling,v=e.id,h=e.frameBorder,b=e.ariaHidden,N=e.sandbox,y=e.allow,g=e.className,w=e.title,O=e.ariaLabel,S=e.ariaLabelledby,q=e.name,C=e.target,x=e.loading,k=e.importance,R=e.referrerpolicy,L=e.allowpaymentrequest,T=e.src,F=m()({src:T||t,target:C||null,style:{position:n||null,display:r||"block",overflow:i||null},scrolling:E||null,allowpaymentrequest:L||null,importance:k||null,sandbox:N||null,loading:x||null,styles:o||null,name:q||null,className:g||null,referrerpolicy:R||null,title:w||null,allow:y||null,id:v||null,"aria-labelledby":S||null,"aria-hidden":b||null,"aria-label":O||null,width:s||null,height:c||null,onLoad:d||null,onMouseOver:p||null,onMouseOut:f||null}),_=Object.create(null),A=0,M=Object.keys(F);A<M.length;A++){var j=M[A];null!=F[j]&&(_[j]=F[j])}for(var P=0,I=Object.keys(_.style);P<I.length;P++){var B=I[P];null==_.style[B]&&delete _.style[B]}if(a)if("allow"in _){var D=_.allow.replace("fullscreen","");_.allow=("fullscreen "+D.trim()).trim()}else _.allow="fullscreen";return h>=0&&(_.style.hasOwnProperty("border")||(_.style.border=h)),l.a.createElement("iframe",u({},_))};a("a1Th"),a("I5cv");function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){var t,a;a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n;n=r;function r(t){var a;return(a=e.call(this,t)||this).submitForm=a.submitForm.bind(p(a)),a.state={status:""},a}var c=r.prototype;return c.submitForm=function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),l=new XMLHttpRequest;l.open(a.method,a.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},l.send(n)},c.render=function(){var e=this.state.status;return l.a.createElement("form",{className:"contact",method:"post",onSubmit:this.submitForm,action:"https://formspree.io/mqkyppnk"},"SUCCESS"===e&&l.a.createElement("div",{className:"feedback"},"Thanks! Message sent successfully "),"ERROR"===e&&l.a.createElement("div",{className:"feedback"}," ","Ooops! There was an error. Try again"),l.a.createElement("input",{className:"in1",type:"text",placeholder:"Name",required:" ",name:"name"}),l.a.createElement("input",{className:"in2",type:"email",placeholder:"Email",required:" ",name:"email"}),l.a.createElement("input",{className:"in3 no_margin_right",type:"tel",placeholder:"Tel",required:" ",name:"phone"}),l.a.createElement("textarea",{className:"in4",placeholder:"Type your message",required:" ",name:"message"}),l.a.createElement("input",{type:"submit",value:"SEND"}),l.a.createElement("div",{className:"clearfix"}," "))},r}(n.Component);function E(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"map"},l.a.createElement(d,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.8868578487036!2d-117.63219618437492!3d33.55631585114748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcedcdbb83b1d7%3A0xc36a614740e56e6d!2s999%20Corporate%20Dr%20%23100%2C%20Ladera%20Ranch%2C%20CA%2092694%2C%20USA!5e0!3m2!1sen!2smu!4v1590335107208!5m2!1sen!2smu",width:"100%",height:"400px",frameborder:"0",style:"border:0;",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})),l.a.createElement("div",{id:"contact",className:"footer f_contact"},l.a.createElement("div",{className:"footer-left"},l.a.createElement("div",{className:"leave-comment"},l.a.createElement(f,null))),l.a.createElement("div",{className:"footer-right c_info"},l.a.createElement("h4",null,l.a.createElement("span",null,"C"),"ontact Info"),l.a.createElement("ul",{className:"contact_ul"},l.a.createElement("li",{className:"dot"},"999 Corporate Drive, Suite 100 Ladera Ranch, CA 92694"),l.a.createElement("li",{className:"mobile"},"Fax: 949.498.5066"))),l.a.createElement("div",{className:"clearfix"}," ")),l.a.createElement("div",{className:"clearfix"}," "),l.a.createElement("div",{className:"body_margin"}))}var v=a("9nWZ");t.default=function(){return l.a.createElement(c.a,{className:"contact_b"},l.a.createElement(i.a,{title:"Contact us"}),l.a.createElement(r.a,{pageTitle:"contact us"}),l.a.createElement(s.a,null),l.a.createElement(E,null),l.a.createElement(v.a,null))}},Tze0:function(e,t,a){"use strict";a("qncB")("trim",(function(e){return function(){return e(this,3)}}))},qncB:function(e,t,a){var n=a("XKFU"),l=a("vhPU"),r=a("eeVq"),c=a("/e88"),s="["+c+"]",i=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),m=function(e,t,a){var l={},s=r((function(){return!!c[e]()||"​"!="​"[e]()})),i=l[e]=s?t(u):c[e];a&&(l[a]=i),n(n.P+n.F*s,"String",l)},u=m.trim=function(e,t){return e=String(l(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(o,"")),e};e.exports=m}}]);
//# sourceMappingURL=component---src-pages-contact-js-b8b2a98b17b1301b16bb.js.map