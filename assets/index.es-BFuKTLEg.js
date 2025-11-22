import{p as c,a}from"./chunk-OIYGIGL5-dRCHG6Uj.js";import{a as V}from"./index-BD14frTz.js";const H={sm:"w-16 h-16",md:"w-24 h-24 md:w-32 md:h-32",lg:"w-32 h-32"},q={sm:"text-lg",md:"text-2xl md:text-4xl",lg:"text-4xl"},ln=({initials:n,alt:t,size:o="md",className:e="",src:l})=>{const i=H[o],u=q[o];return c.jsx("div",{className:"flex justify-center",children:c.jsx("div",{className:"avatar",children:c.jsx("div",{className:`${i} rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl ${e}`,children:l?c.jsx("img",{src:l,alt:t,className:"w-full h-full object-cover rounded-full"}):c.jsx("div",{className:`w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold ${u}`,children:n})})})})};var h=function(n,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(o[l]=e[l])},h(n,t)};function p(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");h(n,t);function o(){this.constructor=n}n.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var d=function(){return d=Object.assign||function(t){for(var o,e=1,l=arguments.length;e<l;e++){o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},d.apply(this,arguments)};function Q(n,t){t===void 0&&(t={});var o=t.insertAt;if(!(typeof document>"u")){var e=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}}var X=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
  font-size: 16px;
  line-height: 1.2em;
}

.calendly-inline-widget {
  min-width: 320px;
  height: 630px;
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
  display: inline;
  width: 100%;
  height: 100%;
}

.calendly-popup-content {
  position: relative;
}

.calendly-popup-content.calendly-mobile {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}

.calendly-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  background-color: #a5a5a5;
  background-color: rgba(31, 31, 31, 0.4);
}

.calendly-overlay .calendly-close-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.calendly-overlay .calendly-popup {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  width: 80%;
  min-width: 900px;
  max-width: 1000px;
  height: 90%;
  max-height: 680px;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: none;
    transform: none;
    width: 100%;
    height: auto;
    min-width: 0;
    max-height: none;
  }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
  height: 100%;
}

.calendly-overlay .calendly-popup-close {
  position: absolute;
  top: 25px;
  right: 25px;
  color: #fff;
  width: 19px;
  height: 19px;
  cursor: pointer;
  background: url(https://assets.calendly.com/assets/external/close-icon.svg)
    no-repeat;
  background-size: contain;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup-close {
    top: 15px;
    right: 15px;
  }
}

.calendly-badge-widget {
  position: fixed;
  right: 20px;
  bottom: 15px;
  z-index: 9998;
}

.calendly-badge-widget .calendly-badge-content {
  display: table-cell;
  width: auto;
  height: 45px;
  padding: 0 30px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;
  font-family: sans-serif;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
  color: #666a73;
}

.calendly-badge-widget .calendly-badge-content span {
  display: block;
  font-size: 12px;
}

.calendly-spinner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  z-index: -1;
}

.calendly-spinner > div {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #e1e1e1;
  border-radius: 50%;
  vertical-align: middle;
  -webkit-animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.calendly-spinner .calendly-bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.calendly-spinner .calendly-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`;Q(X);function y(n){return n.charAt(0)==="#"?n.slice(1):n}function J(n){return n?.primaryColor&&(n.primaryColor=y(n.primaryColor)),n?.textColor&&(n.textColor=y(n.textColor)),n?.backgroundColor&&(n.backgroundColor=y(n.backgroundColor)),n}var U;(function(n){n.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",n.EVENT_TYPE_VIEWED="calendly.event_type_viewed",n.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",n.EVENT_SCHEDULED="calendly.event_scheduled",n.PAGE_HEIGHT="calendly.page_height"})(U||(U={}));var D=function(n){var t=n.url,o=n.prefill,e=o===void 0?{}:o,l=n.pageSettings,i=l===void 0?{}:l,u=n.utm,r=u===void 0?{}:u,g=n.embedType,s=J(i),b=s.backgroundColor,M=s.hideEventTypeDetails,B=s.hideLandingPageDetails,v=s.primaryColor,x=s.textColor,Y=s.hideGdprBanner,C=e.customAnswers,m=e.date,w=e.email,E=e.firstName,_=e.guests,S=e.lastName,k=e.location,N=e.name,L=r.utmCampaign,T=r.utmContent,I=r.utmMedium,P=r.utmSource,O=r.utmTerm,j=r.salesforce_uuid,f=t.indexOf("?"),R=f>-1,$=t.slice(f+1),F=R?t.slice(0,f):t,G=[R?$:null,b?"background_color=".concat(b):null,M?"hide_event_type_details=1":null,B?"hide_landing_page_details=1":null,v?"primary_color=".concat(v):null,x?"text_color=".concat(x):null,Y?"hide_gdpr_banner=1":null,N?"name=".concat(encodeURIComponent(N)):null,k?"location=".concat(encodeURIComponent(k)):null,E?"first_name=".concat(encodeURIComponent(E)):null,S?"last_name=".concat(encodeURIComponent(S)):null,_?"guests=".concat(_.map(encodeURIComponent).join(",")):null,w?"email=".concat(encodeURIComponent(w)):null,m&&m instanceof Date?"date=".concat(K(m)):null,L?"utm_campaign=".concat(encodeURIComponent(L)):null,T?"utm_content=".concat(encodeURIComponent(T)):null,I?"utm_medium=".concat(encodeURIComponent(I)):null,P?"utm_source=".concat(encodeURIComponent(P)):null,O?"utm_term=".concat(encodeURIComponent(O)):null,j?"salesforce_uuid=".concat(encodeURIComponent(j)):null,g?"embed_type=".concat(g):null,"embed_domain=1"].concat(C?nn(C):[]).filter(function(W){return W!==null}).join("&");return"".concat(F,"?").concat(G)},K=function(n){var t=n.getMonth()+1,o=n.getDate(),e=n.getFullYear();return[e,t<10?"0".concat(t):t,o<10?"0".concat(o):o].join("-")},Z=/^a\d{1,2}$/,nn=function(n){var t=Object.keys(n).filter(function(o){return o.match(Z)});return t.length?t.map(function(o){return"".concat(o,"=").concat(encodeURIComponent(n[o]))}):[]},z=(function(n){p(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.render=function(){return a.createElement("div",{className:"calendly-spinner"},a.createElement("div",{className:"calendly-bounce1"}),a.createElement("div",{className:"calendly-bounce2"}),a.createElement("div",{className:"calendly-bounce3"}))},t})(a.Component),en="calendly-inline-widget";(function(n){p(t,n);function t(o){var e=n.call(this,o)||this;return e.state={isLoading:!0},e.onLoad=e.onLoad.bind(e),e}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var o=D({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),e=this.props.LoadingSpinner||z;return a.createElement("div",{className:this.props.className||en,style:this.props.styles||{}},this.state.isLoading&&a.createElement(e,null),a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},t})(a.Component);var tn=(function(n){p(t,n);function t(o){var e=n.call(this,o)||this;return e.state={isLoading:!0},e.onLoad=e.onLoad.bind(e),e}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var o=D({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),e=this.props.LoadingSpinner||z;return a.createElement(a.Fragment,null,this.state.isLoading&&a.createElement(e,null),a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},t})(a.Component),A=(function(n){if(!n.open)return null;if(!n.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return V.createPortal(a.createElement("div",{className:"calendly-overlay"},a.createElement("div",{onClick:n.onModalClose,className:"calendly-close-overlay"}),a.createElement("div",{className:"calendly-popup"},a.createElement("div",{className:"calendly-popup-content"},a.createElement(tn,d({},n)))),a.createElement("button",{className:"calendly-popup-close",onClick:n.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),n.rootElement)});(function(n){p(t,n);function t(o){var e=n.call(this,o)||this;return e.state={isOpen:!1},e.onClick=e.onClick.bind(e),e.onClose=e.onClose.bind(e),e}return t.prototype.onClick=function(o){o.preventDefault(),this.setState({isOpen:!0})},t.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),a.createElement(A,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(a.Component);(function(n){p(t,n);function t(o){var e=n.call(this,o)||this;return e.state={isOpen:!1},e.onClick=e.onClick.bind(e),e.onClose=e.onClose.bind(e),e}return t.prototype.onClick=function(){this.setState({isOpen:!0})},t.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return a.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},a.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&a.createElement("span",null,"powered by Calendly")),a.createElement(A,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(a.Component);export{ln as A,A as M};
