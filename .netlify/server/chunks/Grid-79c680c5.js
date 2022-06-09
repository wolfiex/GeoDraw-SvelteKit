var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  G: () => Grid
});
module.exports = __toCommonJS(stdin_exports);
var import_index_092899d0 = require("./index-092899d0.js");
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var g10 = /* @__PURE__ */ (() => `/*purgecss start ignore*/

html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{
  padding:0;
  border:0;
  margin:0;
  font:inherit;
  font-size:100%;
  vertical-align:baseline
}

button,select,input,textarea{
  border-radius:0;
  font-family:inherit
}

input[type=text]::-ms-clear{
  display:none
}

article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{
  display:block
}

body{
  line-height:1
}

sup{
  vertical-align:super
}

sub{
  vertical-align:sub
}

ol,ul{
  list-style:none
}

blockquote,q{
  quotes:none
}

blockquote::before,blockquote::after,q::before,q::after{
  content:""
}

table{
  border-collapse:collapse;
  border-spacing:0
}

*{
  box-sizing:border-box
}

button{
  margin:0
}

html{
  font-size:100%
}

body{
  font-weight:400;
  font-family:'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility
}

code{
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace
}

strong{
  font-weight:600
}

@media screen and (-ms-high-contrast: active){
  svg{
    fill:ButtonText
  }
}

h1{
  font-size:2.625rem;
  font-weight:300;
  line-height:1.199;
  letter-spacing:0
}

h2{
  font-size:2rem;
  font-weight:400;
  line-height:1.25;
  letter-spacing:0
}

h3{
  font-size:1.75rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:0
}

h4{
  font-size:1.25rem;
  font-weight:400;
  line-height:1.4;
  letter-spacing:0
}

h5{
  font-size:1rem;
  font-weight:600;
  line-height:1.375;
  letter-spacing:0
}

h6{
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px
}

p{
  font-size:1rem;
  font-weight:400;
  line-height:1.5;
  letter-spacing:0
}

a{
  color:#0f62fe
}

em{
  font-style:italic
}

@-webkit-keyframes skeleton{
  0%{
    opacity:.3;
    transform:scaleX(0);
    transform-origin:left
  }

  20%{
    opacity:1;
    transform:scaleX(1);
    transform-origin:left
  }

  28%{
    transform:scaleX(1);
    transform-origin:right
  }

  51%{
    transform:scaleX(0);
    transform-origin:right
  }

  58%{
    transform:scaleX(0);
    transform-origin:right
  }

  82%{
    transform:scaleX(1);
    transform-origin:right
  }

  83%{
    transform:scaleX(1);
    transform-origin:left
  }

  96%{
    transform:scaleX(0);
    transform-origin:left
  }

  100%{
    opacity:.3;
    transform:scaleX(0);
    transform-origin:left
  }
}

@keyframes skeleton{
  0%{
    opacity:.3;
    transform:scaleX(0);
    transform-origin:left
  }

  20%{
    opacity:1;
    transform:scaleX(1);
    transform-origin:left
  }

  28%{
    transform:scaleX(1);
    transform-origin:right
  }

  51%{
    transform:scaleX(0);
    transform-origin:right
  }

  58%{
    transform:scaleX(0);
    transform-origin:right
  }

  82%{
    transform:scaleX(1);
    transform-origin:right
  }

  83%{
    transform:scaleX(1);
    transform-origin:left
  }

  96%{
    transform:scaleX(0);
    transform-origin:left
  }

  100%{
    opacity:.3;
    transform:scaleX(0);
    transform-origin:left
  }
}

.bx--tag{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  background-color:#e0e0e0;
  color:#393939;
  display:inline-flex;
  min-width:2rem;
  max-width:100%;
  min-height:1.5rem;
  align-items:center;
  justify-content:center;
  padding:.25rem .5rem;
  margin:.25rem;
  border-radius:.9375rem;
  cursor:default;
  vertical-align:middle;
  word-break:break-word
}

.bx--tag::-moz-focus-inner{
  border:0
}

.bx--tag.bx--tag--interactive:hover,.bx--tag .bx--tag__close-icon:hover{
  background-color:#c6c6c6
}

.bx--tag:not(:first-child){
  margin-left:0
}

.bx--tag--red{
  background-color:#ffd7d9;
  color:#750e13
}

.bx--tag--red.bx--tag--interactive:hover,.bx--tag--red .bx--tag__close-icon:hover{
  background-color:#ffb3b8
}

.bx--tag--magenta{
  background-color:#ffd6e8;
  color:#740937
}

.bx--tag--magenta.bx--tag--interactive:hover,.bx--tag--magenta .bx--tag__close-icon:hover{
  background-color:#ffafd2
}

.bx--tag--purple{
  background-color:#e8daff;
  color:#491d8b
}

.bx--tag--purple.bx--tag--interactive:hover,.bx--tag--purple .bx--tag__close-icon:hover{
  background-color:#d4bbff
}

.bx--tag--blue{
  background-color:#d0e2ff;
  color:#002d9c
}

.bx--tag--blue.bx--tag--interactive:hover,.bx--tag--blue .bx--tag__close-icon:hover{
  background-color:#a6c8ff
}

.bx--tag--cyan{
  background-color:#bae6ff;
  color:#003a6d
}

.bx--tag--cyan.bx--tag--interactive:hover,.bx--tag--cyan .bx--tag__close-icon:hover{
  background-color:#82cfff
}

.bx--tag--teal{
  background-color:#9ef0f0;
  color:#004144
}

.bx--tag--teal.bx--tag--interactive:hover,.bx--tag--teal .bx--tag__close-icon:hover{
  background-color:#3ddbd9
}

.bx--tag--green{
  background-color:#a7f0ba;
  color:#044317
}

.bx--tag--green.bx--tag--interactive:hover,.bx--tag--green .bx--tag__close-icon:hover{
  background-color:#6fdc8c
}

.bx--tag--gray{
  background-color:#e0e0e0;
  color:#393939
}

.bx--tag--gray.bx--tag--interactive:hover,.bx--tag--gray .bx--tag__close-icon:hover{
  background-color:#c6c6c6
}

.bx--tag--cool-gray{
  background-color:#dde1e6;
  color:#343a3f
}

.bx--tag--cool-gray.bx--tag--interactive:hover,.bx--tag--cool-gray .bx--tag__close-icon:hover{
  background-color:#c1c7cd
}

.bx--tag--warm-gray{
  background-color:#e5e0df;
  color:#3c3838
}

.bx--tag--warm-gray.bx--tag--interactive:hover,.bx--tag--warm-gray .bx--tag__close-icon:hover{
  background-color:#cac5c4
}

.bx--tag--high-contrast{
  background-color:#393939;
  color:#fff
}

.bx--tag--high-contrast.bx--tag--interactive:hover,.bx--tag--high-contrast .bx--tag__close-icon:hover{
  background-color:#4c4c4c
}

.bx--tag--outline{
  background-color:#f4f4f4;
  color:#161616;
  box-shadow:inset 0 0 0 1px #393939
}

.bx--tag--outline.bx--tag--interactive:hover,.bx--tag--outline .bx--tag__close-icon:hover{
  background-color:#e5e5e5
}

.bx--tag--disabled,.bx--tag--filter.bx--tag--disabled,.bx--tag--interactive.bx--tag--disabled{
  background-color:#fff;
  color:#c6c6c6
}

.bx--tag--disabled.bx--tag--interactive:hover,.bx--tag--disabled .bx--tag__close-icon:hover,.bx--tag--filter.bx--tag--disabled.bx--tag--interactive:hover,.bx--tag--filter.bx--tag--disabled .bx--tag__close-icon:hover,.bx--tag--interactive.bx--tag--disabled.bx--tag--interactive:hover,.bx--tag--interactive.bx--tag--disabled .bx--tag__close-icon:hover{
  background-color:#fff
}

.bx--tag--disabled:hover,.bx--tag--filter.bx--tag--disabled:hover,.bx--tag--interactive.bx--tag--disabled:hover{
  cursor:not-allowed
}

.bx--tag__label{
  overflow:hidden;
  max-width:100%;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--tag--interactive:focus{
  box-shadow:inset 0 0 0 1px #0f62fe;
  outline:none
}

.bx--tag--interactive:hover{
  cursor:pointer
}

.bx--tag--filter{
  padding-top:0;
  padding-right:0;
  padding-bottom:0;
  cursor:pointer
}

.bx--tag--filter:hover{
  outline:none
}

.bx--tag--interactive{
  transition:background-color 70ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--tag__close-icon{
  display:flex;
  width:1.5rem;
  height:1.5rem;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  padding:0;
  border:0;
  margin:0 0 0 .125rem;
  background-color:transparent;
  border-radius:50%;
  color:currentColor;
  cursor:pointer;
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),box-shadow 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tag__close-icon svg{
  fill:currentColor
}

.bx--tag__custom-icon{
  width:1rem;
  height:1rem;
  flex-shrink:0;
  padding:0;
  border:0;
  margin-right:.25rem;
  background-color:transparent;
  color:currentColor;
  outline:none
}

.bx--tag__custom-icon svg{
  fill:currentColor
}

.bx--tag--disabled .bx--tag__close-icon{
  cursor:not-allowed
}

.bx--tag__close-icon:focus{
  border-radius:50%;
  box-shadow:inset 0 0 0 1px #0f62fe;
  outline:none
}

.bx--tag--high-contrast .bx--tag__close-icon:focus{
  box-shadow:inset 0 0 0 1px #fff
}

.bx--tag--filter.bx--tag--disabled .bx--tag__close-icon:hover{
  background-color:transparent
}

.bx--tag--filter.bx--tag--disabled svg{
  fill:#c6c6c6
}

.bx--tag--sm{
  min-height:1.125rem;
  padding:0 .5rem
}

.bx--tag--sm.bx--tag--filter{
  padding-right:0
}

.bx--tag--sm .bx--tag__close-icon{
  width:1.125rem;
  height:1.125rem;
  margin-left:.3125rem
}

.bx--tag.bx--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  background-color:#e5e5e5;
  color:#161616;
  overflow:hidden;
  width:3.75rem
}

.bx--tag.bx--skeleton:hover,.bx--tag.bx--skeleton:focus,.bx--tag.bx--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--tag.bx--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--tag.bx--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--tag.bx--skeleton.bx--tag--interactive:hover,.bx--tag.bx--skeleton .bx--tag__close-icon:hover{
  background-color:#e5e5e5
}

@media not all and (-webkit-min-device-pixel-ratio: 0), not all and (min-resolution: 0.001dpcm){
  @supports(-webkit-appearance: none) and (stroke-color: transparent){
    .bx--tag.bx--skeleton{
      transform:translateZ(0)
    }
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--tag{
    outline:1px solid transparent
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--tag__close-icon svg,.bx--tag__custom-icon svg{
    fill:ButtonText
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--tag__close-icon:focus{
    color:Highlight;
    outline:1px solid Highlight
  }
}

.bx--text-truncate--end{
  display:inline-block;
  overflow:hidden;
  width:100%;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--text-truncate--front{
  display:inline-block;
  overflow:hidden;
  width:100%;
  direction:rtl;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--inline-notification{
  position:relative;
  display:flex;
  width:100%;
  min-width:18rem;
  max-width:18rem;
  height:auto;
  min-height:3rem;
  flex-wrap:wrap;
  margin-top:1rem;
  margin-bottom:1rem;
  color:#fff
}

@media(min-width: 42rem){
  .bx--inline-notification{
    max-width:38rem;
    flex-wrap:nowrap
  }
}

@media(min-width: 66rem){
  .bx--inline-notification{
    max-width:46rem
  }
}

@media(min-width: 99rem){
  .bx--inline-notification{
    max-width:52rem
  }
}

.bx--inline-notification:not(.bx--inline-notification--low-contrast) a{
  color:#78a9ff
}

.bx--inline-notification a{
  text-decoration:none
}

.bx--inline-notification a:hover{
  text-decoration:underline
}

.bx--inline-notification a:focus{
  outline:1px solid #78a9ff
}

.bx--inline-notification.bx--inline-notification--low-contrast a:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--inline-notification.bx--inline-notification--low-contrast a:focus{
    outline-style:dotted
  }
}

.bx--inline-notification--low-contrast{
  color:#161616
}

.bx--inline-notification--low-contrast::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  box-sizing:border-box;
  border-width:1px 1px 1px 0;
  border-style:solid;
  content:"";
  filter:opacity(0.4);
  pointer-events:none
}

.bx--inline-notification--error{
  border-left:3px solid #fa4d56;
  background:#393939
}

.bx--inline-notification--error .bx--inline-notification__icon,.bx--inline-notification--error .bx--toast-notification__icon,.bx--inline-notification--error .bx--actionable-notification__icon{
  fill:#fa4d56
}

.bx--inline-notification--low-contrast.bx--inline-notification--error{
  border-left:3px solid #da1e28;
  background:#fff1f1
}

.bx--inline-notification--low-contrast.bx--inline-notification--error .bx--inline-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--error .bx--toast-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--error .bx--actionable-notification__icon{
  fill:#da1e28
}

.bx--inline-notification--low-contrast.bx--inline-notification--error::before{
  border-color:#da1e28
}

.bx--inline-notification--success{
  border-left:3px solid #42be65;
  background:#393939
}

.bx--inline-notification--success .bx--inline-notification__icon,.bx--inline-notification--success .bx--toast-notification__icon,.bx--inline-notification--success .bx--actionable-notification__icon{
  fill:#42be65
}

.bx--inline-notification--low-contrast.bx--inline-notification--success{
  border-left:3px solid #198038;
  background:#defbe6
}

.bx--inline-notification--low-contrast.bx--inline-notification--success .bx--inline-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--success .bx--toast-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--success .bx--actionable-notification__icon{
  fill:#198038
}

.bx--inline-notification--low-contrast.bx--inline-notification--success::before{
  border-color:#198038
}

.bx--inline-notification--info,.bx--inline-notification--info-square{
  border-left:3px solid #4589ff;
  background:#393939
}

.bx--inline-notification--info .bx--inline-notification__icon,.bx--inline-notification--info .bx--toast-notification__icon,.bx--inline-notification--info .bx--actionable-notification__icon,.bx--inline-notification--info-square .bx--inline-notification__icon,.bx--inline-notification--info-square .bx--toast-notification__icon,.bx--inline-notification--info-square .bx--actionable-notification__icon{
  fill:#4589ff
}

.bx--inline-notification--low-contrast.bx--inline-notification--info,.bx--inline-notification--low-contrast.bx--inline-notification--info-square{
  border-left:3px solid #0043ce;
  background:#edf5ff
}

.bx--inline-notification--low-contrast.bx--inline-notification--info .bx--inline-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--info .bx--toast-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--info .bx--actionable-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--info-square .bx--inline-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--info-square .bx--toast-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--info-square .bx--actionable-notification__icon{
  fill:#0043ce
}

.bx--inline-notification--low-contrast.bx--inline-notification--info::before,.bx--inline-notification--low-contrast.bx--inline-notification--info-square::before{
  border-color:#0043ce
}

.bx--inline-notification--warning,.bx--inline-notification--warning-alt{
  border-left:3px solid #f1c21b;
  background:#393939
}

.bx--inline-notification--warning .bx--inline-notification__icon,.bx--inline-notification--warning .bx--toast-notification__icon,.bx--inline-notification--warning .bx--actionable-notification__icon,.bx--inline-notification--warning-alt .bx--inline-notification__icon,.bx--inline-notification--warning-alt .bx--toast-notification__icon,.bx--inline-notification--warning-alt .bx--actionable-notification__icon{
  fill:#f1c21b
}

.bx--inline-notification--low-contrast.bx--inline-notification--warning,.bx--inline-notification--low-contrast.bx--inline-notification--warning-alt{
  border-left:3px solid #f1c21b;
  background:#fdf6dd
}

.bx--inline-notification--low-contrast.bx--inline-notification--warning .bx--inline-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--warning .bx--toast-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--warning .bx--actionable-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--warning-alt .bx--inline-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--warning-alt .bx--toast-notification__icon,.bx--inline-notification--low-contrast.bx--inline-notification--warning-alt .bx--actionable-notification__icon{
  fill:#f1c21b
}

.bx--inline-notification--low-contrast.bx--inline-notification--warning::before,.bx--inline-notification--low-contrast.bx--inline-notification--warning-alt::before{
  border-color:#f1c21b
}

.bx--inline-notification--warning .bx--inline-notification__icon path[opacity="0"]{
  fill:#000;
  opacity:1
}

.bx--inline-notification__details{
  display:flex;
  flex-grow:1;
  margin:0 3rem 0 1rem
}

@media(min-width: 42rem){
  .bx--inline-notification__details{
    margin:0 1rem
  }
}

.bx--inline-notification__icon{
  flex-shrink:0;
  margin-top:.875rem;
  margin-right:1rem
}

.bx--inline-notification__text-wrapper{
  display:flex;
  flex-wrap:wrap;
  padding:.9375rem 0
}

.bx--inline-notification__title{
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  margin:0 .25rem 0 0
}

.bx--inline-notification__subtitle{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  word-break:break-word
}

.bx--inline-notification__action-button.bx--btn--ghost{
  height:2rem;
  margin-bottom:.5rem;
  margin-left:2.5rem
}

@media(min-width: 42rem){
  .bx--inline-notification__action-button.bx--btn--ghost{
    margin:.5rem 0
  }
}

.bx--inline-notification:not(.bx--inline-notification--low-contrast) .bx--inline-notification__action-button.bx--btn--ghost{
  color:#78a9ff
}

.bx--inline-notification__action-button.bx--btn--ghost:active,.bx--inline-notification__action-button.bx--btn--ghost:hover{
  background-color:#4c4c4c
}

.bx--inline-notification--low-contrast .bx--inline-notification__action-button.bx--btn--ghost:active,.bx--inline-notification--low-contrast .bx--inline-notification__action-button.bx--btn--ghost:hover{
  background-color:#fff
}

.bx--inline-notification__action-button.bx--btn--ghost:focus{
  border-color:transparent;
  box-shadow:none;
  outline:2px solid #fff;
  outline-offset:-2px
}

.bx--inline-notification--low-contrast .bx--inline-notification__action-button.bx--btn--ghost:focus{
  outline-color:#0f62fe
}

.bx--inline-notification--hide-close-button .bx--inline-notification__action-button.bx--btn--ghost{
  margin-right:.5rem
}

.bx--inline-notification__close-button{
  outline:2px solid transparent;
  outline-offset:-2px;
  position:absolute;
  top:0;
  right:0;
  display:flex;
  width:3rem;
  min-width:3rem;
  max-width:3rem;
  height:3rem;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:0;
  border:none;
  background:transparent;
  cursor:pointer;
  transition:outline 110ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--inline-notification__close-button:focus{
  outline:2px solid #fff;
  outline-offset:-2px
}

.bx--inline-notification__close-button .bx--inline-notification__close-icon{
  fill:#fff
}

@media(min-width: 42rem){
  .bx--inline-notification__close-button{
    position:static
  }
}

.bx--inline-notification--low-contrast .bx--inline-notification__close-button:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--inline-notification--low-contrast .bx--inline-notification__close-button:focus{
    outline-style:dotted
  }
}

.bx--inline-notification--low-contrast .bx--inline-notification__close-button .bx--inline-notification__close-icon{
  fill:#161616
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--inline-notification{
    outline:1px solid transparent
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--inline-notification__close-button:focus,.bx--btn.bx--btn--ghost.bx--inline-notification__action-button:focus{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--inline-notification__icon{
    fill:ButtonText
  }
}

.bx--toast-notification{
  display:flex;
  width:18rem;
  height:auto;
  padding-left:1rem;
  margin-top:.5rem;
  margin-right:1rem;
  margin-bottom:.5rem;
  box-shadow:0 2px 6px 0 rgba(0,0,0,.2);
  color:#fff
}

.bx--toast-notification:first-child{
  margin-top:1rem
}

@media(min-width: 99rem){
  .bx--toast-notification{
    width:22rem
  }
}

.bx--toast-notification:not(.bx--toast-notification--low-contrast) a{
  color:#78a9ff
}

.bx--toast-notification a{
  text-decoration:none
}

.bx--toast-notification a:hover{
  text-decoration:underline
}

.bx--toast-notification a:focus{
  outline:1px solid #78a9ff
}

.bx--toast-notification.bx--toast-notification--low-contrast a:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--toast-notification.bx--toast-notification--low-contrast a:focus{
    outline-style:dotted
  }
}

.bx--toast-notification--low-contrast{
  color:#161616
}

.bx--toast-notification--error{
  border-left:3px solid #fa4d56;
  background:#393939
}

.bx--toast-notification--error .bx--inline-notification__icon,.bx--toast-notification--error .bx--toast-notification__icon,.bx--toast-notification--error .bx--actionable-notification__icon{
  fill:#fa4d56
}

.bx--toast-notification--low-contrast.bx--toast-notification--error{
  border-left:3px solid #da1e28;
  background:#fff1f1
}

.bx--toast-notification--low-contrast.bx--toast-notification--error .bx--inline-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--error .bx--toast-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--error .bx--actionable-notification__icon{
  fill:#da1e28
}

.bx--toast-notification--success{
  border-left:3px solid #42be65;
  background:#393939
}

.bx--toast-notification--success .bx--inline-notification__icon,.bx--toast-notification--success .bx--toast-notification__icon,.bx--toast-notification--success .bx--actionable-notification__icon{
  fill:#42be65
}

.bx--toast-notification--low-contrast.bx--toast-notification--success{
  border-left:3px solid #198038;
  background:#defbe6
}

.bx--toast-notification--low-contrast.bx--toast-notification--success .bx--inline-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--success .bx--toast-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--success .bx--actionable-notification__icon{
  fill:#198038
}

.bx--toast-notification--info,.bx--toast-notification--info-square{
  border-left:3px solid #4589ff;
  background:#393939
}

.bx--toast-notification--info .bx--inline-notification__icon,.bx--toast-notification--info .bx--toast-notification__icon,.bx--toast-notification--info .bx--actionable-notification__icon,.bx--toast-notification--info-square .bx--inline-notification__icon,.bx--toast-notification--info-square .bx--toast-notification__icon,.bx--toast-notification--info-square .bx--actionable-notification__icon{
  fill:#4589ff
}

.bx--toast-notification--low-contrast.bx--toast-notification--info,.bx--toast-notification--low-contrast.bx--toast-notification--info-square{
  border-left:3px solid #0043ce;
  background:#edf5ff
}

.bx--toast-notification--low-contrast.bx--toast-notification--info .bx--inline-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--info .bx--toast-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--info .bx--actionable-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--info-square .bx--inline-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--info-square .bx--toast-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--info-square .bx--actionable-notification__icon{
  fill:#0043ce
}

.bx--toast-notification--warning,.bx--toast-notification--warning-alt{
  border-left:3px solid #f1c21b;
  background:#393939
}

.bx--toast-notification--warning .bx--inline-notification__icon,.bx--toast-notification--warning .bx--toast-notification__icon,.bx--toast-notification--warning .bx--actionable-notification__icon,.bx--toast-notification--warning-alt .bx--inline-notification__icon,.bx--toast-notification--warning-alt .bx--toast-notification__icon,.bx--toast-notification--warning-alt .bx--actionable-notification__icon{
  fill:#f1c21b
}

.bx--toast-notification--low-contrast.bx--toast-notification--warning,.bx--toast-notification--low-contrast.bx--toast-notification--warning-alt{
  border-left:3px solid #f1c21b;
  background:#fdf6dd
}

.bx--toast-notification--low-contrast.bx--toast-notification--warning .bx--inline-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--warning .bx--toast-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--warning .bx--actionable-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--warning-alt .bx--inline-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--warning-alt .bx--toast-notification__icon,.bx--toast-notification--low-contrast.bx--toast-notification--warning-alt .bx--actionable-notification__icon{
  fill:#f1c21b
}

.bx--toast-notification--warning .bx--toast-notification__icon path[opacity="0"]{
  fill:#000;
  opacity:1
}

.bx--toast-notification__icon{
  flex-shrink:0;
  margin-top:1rem;
  margin-right:1rem
}

.bx--toast-notification__details{
  margin-right:1rem
}

.bx--toast-notification__close-button{
  outline:2px solid transparent;
  outline-offset:-2px;
  display:flex;
  width:3rem;
  min-width:3rem;
  height:3rem;
  min-height:3rem;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:0;
  border:none;
  margin-left:auto;
  background-color:transparent;
  cursor:pointer;
  transition:outline 110ms,background-color 110ms
}

.bx--toast-notification__close-button:focus{
  outline:2px solid #fff;
  outline-offset:-2px
}

.bx--toast-notification__close-button .bx--toast-notification__close-icon{
  fill:#fff
}

.bx--toast-notification--low-contrast .bx--toast-notification__close-button:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--toast-notification--low-contrast .bx--toast-notification__close-button:focus{
    outline-style:dotted
  }
}

.bx--toast-notification--low-contrast .bx--toast-notification__close-button .bx--toast-notification__close-icon{
  fill:#161616
}

.bx--toast-notification__title{
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  margin-top:1rem;
  font-weight:600;
  word-break:break-word
}

.bx--toast-notification__subtitle{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  margin-top:0;
  margin-bottom:1rem;
  color:#fff;
  word-break:break-word
}

.bx--toast-notification--low-contrast .bx--toast-notification__subtitle{
  color:#161616
}

.bx--toast-notification__caption{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  padding-top:.5rem;
  margin-bottom:1rem;
  color:#fff
}

.bx--toast-notification--low-contrast .bx--toast-notification__caption{
  color:#161616
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--toast-notification{
    outline:1px solid transparent
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--toast-notification__close-button:focus{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--toast-notification__icon{
    fill:ButtonText
  }
}

.bx--popover{
  --cds-popover-offset: 0rem;
  --cds-popover-caret-offset: 1rem;
  position:absolute;
  z-index:6000;
  display:none
}

.bx--popover::before{
  position:absolute;
  display:block;
  content:""
}

.bx--popover--open{
  display:block
}

.bx--popover-contents{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  position:relative;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  max-width:23rem;
  background-color:#fff;
  border-radius:2px;
  color:#161616
}

.bx--popover--light .bx--popover-contents{
  background-color:#f4f4f4
}

.bx--popover--high-contrast .bx--popover-contents{
  background-color:#393939;
  color:#fff
}

.bx--popover--caret{
  --cds-popover-offset: 0.5rem
}

.bx--popover--caret .bx--popover-contents::before,.bx--popover--caret .bx--popover-contents::after{
  position:absolute;
  display:inline-block;
  width:.5rem;
  height:.5rem;
  background-color:inherit;
  content:""
}

.bx--popover--caret .bx--popover-contents::before{
  z-index:-1;
  box-shadow:2px 2px 6px 0 rgba(0,0,0,.2)
}

.bx--popover--bottom{
  bottom:0;
  left:50%;
  transform:translate(-50%, calc(100% + var(--cds-popover-offset)))
}

.bx--popover--caret.bx--popover--bottom .bx--popover-contents::before,.bx--popover--caret.bx--popover--bottom .bx--popover-contents::after{
  top:0;
  left:50%;
  transform:translate(-50%, -50%) rotate(45deg)
}

.bx--popover--bottom-left{
  bottom:0;
  left:0;
  transform:translateY(calc(100% + var(--cds-popover-offset)))
}

.bx--popover--caret.bx--popover--bottom-left .bx--popover-contents::before,.bx--popover--caret.bx--popover--bottom-left .bx--popover-contents::after{
  top:0;
  left:0;
  transform:translate(var(--cds-popover-caret-offset), -50%) rotate(45deg)
}

.bx--popover--bottom-right{
  right:0;
  bottom:0;
  transform:translateY(calc(100% + var(--cds-popover-offset)))
}

.bx--popover--caret.bx--popover--bottom-right .bx--popover-contents::before,.bx--popover--caret.bx--popover--bottom-right .bx--popover-contents::after{
  top:0;
  right:0;
  transform:translate(calc(-1 * var(--cds-popover-caret-offset)), -50%) rotate(45deg)
}

.bx--popover--bottom.bx--popover::before,.bx--popover--bottom-left.bx--popover::before,.bx--popover--bottom-right.bx--popover::before{
  top:0;
  right:0;
  left:0;
  height:var(--cds-popover-offset);
  transform:translateY(-100%)
}

.bx--popover--top{
  bottom:100%;
  left:50%;
  transform:translate(-50%, calc(-1 * var(--cds-popover-offset)))
}

.bx--popover--caret.bx--popover--top .bx--popover-contents::before,.bx--popover--caret.bx--popover--top .bx--popover-contents::after{
  bottom:0;
  left:50%;
  transform:translate(-50%, 50%) rotate(45deg)
}

.bx--popover--top-left{
  bottom:100%;
  left:0;
  transform:translateY(calc(-1 * var(--cds-popover-offset)))
}

.bx--popover--caret.bx--popover--top-left .bx--popover-contents::before,.bx--popover--caret.bx--popover--top-left .bx--popover-contents::after{
  bottom:0;
  left:0;
  transform:translate(var(--cds-popover-caret-offset), 50%) rotate(45deg)
}

.bx--popover--top-right{
  right:0;
  bottom:100%;
  transform:translateY(calc(-1 * var(--cds-popover-offset)))
}

.bx--popover--caret.bx--popover--top-right .bx--popover-contents::before,.bx--popover--caret.bx--popover--top-right .bx--popover-contents::after{
  right:0;
  bottom:0;
  transform:translate(calc(-1 * var(--cds-popover-caret-offset)), 50%) rotate(45deg)
}

.bx--popover--top.bx--popover::before,.bx--popover--top-left.bx--popover::before,.bx--popover--top-right.bx--popover::before{
  right:0;
  bottom:0;
  left:0;
  height:var(--cds-popover-offset);
  transform:translateY(100%)
}

.bx--popover--right{
  top:50%;
  left:100%;
  transform:translate(var(--cds-popover-offset), -50%)
}

.bx--popover--caret.bx--popover--right .bx--popover-contents::before,.bx--popover--caret.bx--popover--right .bx--popover-contents::after{
  top:50%;
  left:0;
  transform:translate(-50%, -50%) rotate(45deg)
}

.bx--popover--right-top{
  top:0;
  left:100%;
  transform:translateX(8px)
}

.bx--popover--caret.bx--popover--right-top .bx--popover-contents::before,.bx--popover--caret.bx--popover--right-top .bx--popover-contents::after{
  top:0;
  left:0;
  transform:translate(-50%, var(--cds-popover-caret-offset)) rotate(45deg)
}

.bx--popover--right-bottom{
  bottom:0;
  left:100%;
  transform:translateX(var(--cds-popover-offset))
}

.bx--popover--caret.bx--popover--right-bottom .bx--popover-contents::before,.bx--popover--caret.bx--popover--right-bottom .bx--popover-contents::after{
  bottom:0;
  left:0;
  transform:translate(-50%, calc(-1 * var(--cds-popover-caret-offset))) rotate(45deg)
}

.bx--popover--right.bx--popover::before,.bx--popover--right-top.bx--popover::before,.bx--popover--right-bottom.bx--popover::before{
  top:0;
  bottom:0;
  left:0;
  width:var(--cds-popover-offset);
  transform:translateX(-100%)
}

.bx--popover--left{
  top:50%;
  right:100%;
  transform:translate(calc(-1 * var(--cds-popover-offset)), -50%)
}

.bx--popover--caret.bx--popover--left .bx--popover-contents::before,.bx--popover--caret.bx--popover--left .bx--popover-contents::after{
  top:50%;
  right:0;
  transform:translate(50%, -50%) rotate(45deg)
}

.bx--popover--left-top{
  top:0;
  right:100%;
  transform:translateX(calc(-1 * var(--cds-popover-offset)))
}

.bx--popover--caret.bx--popover--left-top .bx--popover-contents::before,.bx--popover--caret.bx--popover--left-top .bx--popover-contents::after{
  top:0;
  right:0;
  transform:translate(50%, var(--cds-popover-caret-offset)) rotate(45deg)
}

.bx--popover--left-bottom{
  right:100%;
  bottom:0;
  transform:translateX(calc(-1 * var(--cds-popover-offset)))
}

.bx--popover--caret.bx--popover--left-bottom .bx--popover-contents::before,.bx--popover--caret.bx--popover--left-bottom .bx--popover-contents::after{
  right:0;
  bottom:0;
  transform:translate(50%, calc(-1 * var(--cds-popover-caret-offset))) rotate(45deg)
}

.bx--popover--left.bx--popover::before,.bx--popover--left-top.bx--popover::before,.bx--popover--left-bottom.bx--popover::before{
  top:0;
  right:0;
  bottom:0;
  width:var(--cds-popover-offset);
  transform:translateX(100%)
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Mono Light Italic"),local("IBMPlexMono-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1gMoW.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Mono Italic"),local("IBMPlexMono-Italic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa1Xdm.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold Italic"),local("IBMPlexMono-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1gMoW.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Mono Light"),local("IBMPlexMono-Light"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwlBFhA.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Mono"),local("IBMPlexMono"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1i8q0Q.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold"),local("IBMPlexMono-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwlBFhA.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Mono Light Italic"),local("IBMPlexMono-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1jcoQPttoz6Pz.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Mono Light Italic"),local("IBMPlexMono-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1hMoQPttoz6Pz.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Mono Light Italic"),local("IBMPlexMono-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1j8oQPttoz6Pz.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Mono Light Italic"),local("IBMPlexMono-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1jsoQPttoz6Pz.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Mono Light Italic"),local("IBMPlexMono-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSflV1gMoQPttozw.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Mono Italic"),local("IBMPlexMono-Italic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa2HdgregdFOFh.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Mono Italic"),local("IBMPlexMono-Italic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa0XdgregdFOFh.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Mono Italic"),local("IBMPlexMono-Italic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa2ndgregdFOFh.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Mono Italic"),local("IBMPlexMono-Italic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa23dgregdFOFh.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Mono Italic"),local("IBMPlexMono-Italic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6pfjptAgt5VM-kVkqdyU8n1ioa1XdgregdFA.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold Italic"),local("IBMPlexMono-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1jcoQPttoz6Pz.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold Italic"),local("IBMPlexMono-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1hMoQPttoz6Pz.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold Italic"),local("IBMPlexMono-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1j8oQPttoz6Pz.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold Italic"),local("IBMPlexMono-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1jsoQPttoz6Pz.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold Italic"),local("IBMPlexMono-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6sfjptAgt5VM-kVkqdyU8n1ioSClN1gMoQPttozw.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Mono Light"),local("IBMPlexMono-Light"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwl1FgsAXHNlYzg.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Mono Light"),local("IBMPlexMono-Light"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwlRFgsAXHNlYzg.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Mono Light"),local("IBMPlexMono-Light"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwl9FgsAXHNlYzg.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Mono Light"),local("IBMPlexMono-Light"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwl5FgsAXHNlYzg.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Mono Light"),local("IBMPlexMono-Light"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3oQIwlBFgsAXHNk.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Mono"),local("IBMPlexMono"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1iIq131nj-otFQ.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Mono"),local("IBMPlexMono"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1isq131nj-otFQ.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Mono"),local("IBMPlexMono"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1iAq131nj-otFQ.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Mono"),local("IBMPlexMono"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1iEq131nj-otFQ.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Mono"),local("IBMPlexMono"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F63fjptAgt5VM-kVkqdyU8n1i8q131nj-o.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold"),local("IBMPlexMono-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwl1FgsAXHNlYzg.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold"),local("IBMPlexMono-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwlRFgsAXHNlYzg.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold"),local("IBMPlexMono-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwl9FgsAXHNlYzg.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold"),local("IBMPlexMono-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwl5FgsAXHNlYzg.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Mono";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Mono SemiBold"),local("IBMPlexMono-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexmono/v4/-F6qfjptAgt5VM-kVkqdyU8n3vAOwlBFgsAXHNk.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Sans Light Italic"),local("IBMPlexSans-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRcdvfo.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Sans Italic"),local("IBMPlexSans-Italic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZP.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold Italic"),local("IBMPlexSans-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJcdvfo.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Sans Light"),local("IBMPlexSans-Light"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFscg.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Sans"),local("IBMPlexSans"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdHeEw.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold"),local("IBMPlexSans-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFscg.woff) format("woff")
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Sans Light Italic"),local("IBMPlexSans-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRce_fuJGl18QRY.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Sans Light Italic"),local("IBMPlexSans-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRccvfuJGl18QRY.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Sans Light Italic"),local("IBMPlexSans-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRcdffuJGl18QRY.woff2) format("woff2");

  unicode-range:U+0370-03FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Sans Light Italic"),local("IBMPlexSans-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRceffuJGl18QRY.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Sans Light Italic"),local("IBMPlexSans-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRcePfuJGl18QRY.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:300;

  src:local("IBM Plex Sans Light Italic"),local("IBMPlexSans-LightItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmvIRcdvfuJGl18Q.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Sans Italic"),local("IBMPlexSans-Italic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuGqZJW9XjDlN8.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Sans Italic"),local("IBMPlexSans-Italic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuE6ZJW9XjDlN8.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Sans Italic"),local("IBMPlexSans-Italic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuFKZJW9XjDlN8.woff2) format("woff2");

  unicode-range:U+0370-03FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Sans Italic"),local("IBMPlexSans-Italic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuGKZJW9XjDlN8.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Sans Italic"),local("IBMPlexSans-Italic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuGaZJW9XjDlN8.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:400;

  src:local("IBM Plex Sans Italic"),local("IBMPlexSans-Italic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZJW9XjDg.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold Italic"),local("IBMPlexSans-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJce_fuJGl18QRY.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold Italic"),local("IBMPlexSans-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJccvfuJGl18QRY.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold Italic"),local("IBMPlexSans-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJcdffuJGl18QRY.woff2) format("woff2");

  unicode-range:U+0370-03FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold Italic"),local("IBMPlexSans-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJceffuJGl18QRY.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold Italic"),local("IBMPlexSans-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJcePfuJGl18QRY.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:italic;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold Italic"),local("IBMPlexSans-SemiBoldItalic"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJcdvfuJGl18Q.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Sans Light"),local("IBMPlexSans-Light"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIxsdP3pBmtF8A.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Sans Light"),local("IBMPlexSans-Light"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIVsdP3pBmtF8A.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Sans Light"),local("IBMPlexSans-Light"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIJsdP3pBmtF8A.woff2) format("woff2");

  unicode-range:U+0370-03FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Sans Light"),local("IBMPlexSans-Light"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI5sdP3pBmtF8A.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Sans Light"),local("IBMPlexSans-Light"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI9sdP3pBmtF8A.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:300;

  src:local("IBM Plex Sans Light"),local("IBMPlexSans-Light"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdP3pBms.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Sans"),local("IBMPlexSans"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdzeFaxOedfTDw.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Sans"),local("IBMPlexSans"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdXeFaxOedfTDw.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Sans"),local("IBMPlexSans"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdLeFaxOedfTDw.woff2) format("woff2");

  unicode-range:U+0370-03FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Sans"),local("IBMPlexSans"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhd7eFaxOedfTDw.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Sans"),local("IBMPlexSans"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhd_eFaxOedfTDw.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:400;

  src:local("IBM Plex Sans"),local("IBMPlexSans"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold"),local("IBMPlexSans-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIxsdP3pBmtF8A.woff2) format("woff2");

  unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold"),local("IBMPlexSans-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIVsdP3pBmtF8A.woff2) format("woff2");

  unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold"),local("IBMPlexSans-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIJsdP3pBmtF8A.woff2) format("woff2");

  unicode-range:U+0370-03FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold"),local("IBMPlexSans-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AI5sdP3pBmtF8A.woff2) format("woff2");

  unicode-range:U+0102-0103,U+0110-0111,U+1EA0-1EF9,U+20AB
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold"),local("IBMPlexSans-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AI9sdP3pBmtF8A.woff2) format("woff2");

  unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
}

@font-face{
  font-display:auto;

  font-family:"IBM Plex Sans";

  font-style:normal;

  font-weight:600;

  src:local("IBM Plex Sans SemiBold"),local("IBMPlexSans-SemiBold"),url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFsdP3pBms.woff2) format("woff2");

  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
}

.bx--assistive-text,.bx--visually-hidden{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap
}

.bx--body{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  background-color:#f4f4f4;
  color:#161616;
  line-height:1
}

body{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  background-color:#f4f4f4;
  color:#161616;
  line-height:1
}

.bx--grid{
  margin-right:auto;
  margin-left:auto;
  max-width:99rem;
  padding-right:1rem;
  padding-left:1rem
}

@media(min-width: 42rem){
  .bx--grid{
    padding-right:2rem;
    padding-left:2rem
  }
}

@media(min-width: 99rem){
  .bx--grid{
    padding-right:2.5rem;
    padding-left:2.5rem
  }
}

@media(min-width: 99rem){
  .bx--grid--full-width{
    max-width:100%
  }
}

.bx--row{
  display:flex;
  flex-wrap:wrap;
  margin-right:-1rem;
  margin-left:-1rem
}

.bx--row-padding [class*=bx--col],.bx--col-padding{
  padding-top:1rem;
  padding-bottom:1rem
}

.bx--grid--condensed [class*=bx--col]{
  padding-top:.03125rem;
  padding-bottom:.03125rem
}

.bx--col{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col,.bx--grid--condensed .bx--col{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col,.bx--grid--narrow .bx--col{
  padding-right:1rem;
  padding-left:0
}

.bx--col-sm-0{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-sm-0,.bx--grid--condensed .bx--col-sm-0{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-sm-0,.bx--grid--narrow .bx--col-sm-0{
  padding-right:1rem;
  padding-left:0
}

.bx--col-sm-1{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-sm-1,.bx--grid--condensed .bx--col-sm-1{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-sm-1,.bx--grid--narrow .bx--col-sm-1{
  padding-right:1rem;
  padding-left:0
}

.bx--col-sm-2{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-sm-2,.bx--grid--condensed .bx--col-sm-2{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-sm-2,.bx--grid--narrow .bx--col-sm-2{
  padding-right:1rem;
  padding-left:0
}

.bx--col-sm-3{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-sm-3,.bx--grid--condensed .bx--col-sm-3{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-sm-3,.bx--grid--narrow .bx--col-sm-3{
  padding-right:1rem;
  padding-left:0
}

.bx--col-sm-4{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-sm-4,.bx--grid--condensed .bx--col-sm-4{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-sm-4,.bx--grid--narrow .bx--col-sm-4{
  padding-right:1rem;
  padding-left:0
}

.bx--col-sm,.bx--col-sm--auto{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-sm,.bx--grid--condensed .bx--col-sm,.bx--row--condensed .bx--col-sm--auto,.bx--grid--condensed .bx--col-sm--auto{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-sm,.bx--grid--narrow .bx--col-sm,.bx--row--narrow .bx--col-sm--auto,.bx--grid--narrow .bx--col-sm--auto{
  padding-right:1rem;
  padding-left:0
}

.bx--col,.bx--col-sm{
  max-width:100%;
  flex-basis:0;
  flex-grow:1
}

.bx--col--auto,.bx--col-sm--auto{
  width:auto;
  max-width:100%;
  flex:1 0 0%
}

.bx--col-sm-0{
  display:none
}

.bx--col-sm-1{
  display:block;
  max-width:25%;
  flex:0 0 25%
}

.bx--col-sm-2{
  display:block;
  max-width:50%;
  flex:0 0 50%
}

.bx--col-sm-3{
  display:block;
  max-width:75%;
  flex:0 0 75%
}

.bx--col-sm-4{
  display:block;
  max-width:100%;
  flex:0 0 100%
}

.bx--offset-sm-0{
  margin-left:0
}

.bx--offset-sm-1{
  margin-left:25%
}

.bx--offset-sm-2{
  margin-left:50%
}

.bx--offset-sm-3{
  margin-left:75%
}

.bx--col-md-0{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-md-0,.bx--grid--condensed .bx--col-md-0{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-md-0,.bx--grid--narrow .bx--col-md-0{
  padding-right:1rem;
  padding-left:0
}

.bx--col-md-1{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-md-1,.bx--grid--condensed .bx--col-md-1{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-md-1,.bx--grid--narrow .bx--col-md-1{
  padding-right:1rem;
  padding-left:0
}

.bx--col-md-2{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-md-2,.bx--grid--condensed .bx--col-md-2{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-md-2,.bx--grid--narrow .bx--col-md-2{
  padding-right:1rem;
  padding-left:0
}

.bx--col-md-3{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-md-3,.bx--grid--condensed .bx--col-md-3{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-md-3,.bx--grid--narrow .bx--col-md-3{
  padding-right:1rem;
  padding-left:0
}

.bx--col-md-4{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-md-4,.bx--grid--condensed .bx--col-md-4{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-md-4,.bx--grid--narrow .bx--col-md-4{
  padding-right:1rem;
  padding-left:0
}

.bx--col-md-5{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-md-5,.bx--grid--condensed .bx--col-md-5{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-md-5,.bx--grid--narrow .bx--col-md-5{
  padding-right:1rem;
  padding-left:0
}

.bx--col-md-6{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-md-6,.bx--grid--condensed .bx--col-md-6{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-md-6,.bx--grid--narrow .bx--col-md-6{
  padding-right:1rem;
  padding-left:0
}

.bx--col-md-7{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-md-7,.bx--grid--condensed .bx--col-md-7{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-md-7,.bx--grid--narrow .bx--col-md-7{
  padding-right:1rem;
  padding-left:0
}

.bx--col-md-8{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-md-8,.bx--grid--condensed .bx--col-md-8{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-md-8,.bx--grid--narrow .bx--col-md-8{
  padding-right:1rem;
  padding-left:0
}

.bx--col-md,.bx--col-md--auto{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-md,.bx--grid--condensed .bx--col-md,.bx--row--condensed .bx--col-md--auto,.bx--grid--condensed .bx--col-md--auto{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-md,.bx--grid--narrow .bx--col-md,.bx--row--narrow .bx--col-md--auto,.bx--grid--narrow .bx--col-md--auto{
  padding-right:1rem;
  padding-left:0
}

@media(min-width: 42rem){
  .bx--col,.bx--col-md{
    max-width:100%;
    flex-basis:0;
    flex-grow:1
  }

  .bx--col--auto,.bx--col-md--auto{
    width:auto;
    max-width:100%;
    flex:1 0 0%
  }

  .bx--col-md-0{
    display:none
  }

  .bx--col-md-1{
    display:block;
    max-width:12.5%;
    flex:0 0 12.5%
  }

  .bx--col-md-2{
    display:block;
    max-width:25%;
    flex:0 0 25%
  }

  .bx--col-md-3{
    display:block;
    max-width:37.5%;
    flex:0 0 37.5%
  }

  .bx--col-md-4{
    display:block;
    max-width:50%;
    flex:0 0 50%
  }

  .bx--col-md-5{
    display:block;
    max-width:62.5%;
    flex:0 0 62.5%
  }

  .bx--col-md-6{
    display:block;
    max-width:75%;
    flex:0 0 75%
  }

  .bx--col-md-7{
    display:block;
    max-width:87.5%;
    flex:0 0 87.5%
  }

  .bx--col-md-8{
    display:block;
    max-width:100%;
    flex:0 0 100%
  }

  .bx--offset-md-0{
    margin-left:0
  }

  .bx--offset-md-1{
    margin-left:12.5%
  }

  .bx--offset-md-2{
    margin-left:25%
  }

  .bx--offset-md-3{
    margin-left:37.5%
  }

  .bx--offset-md-4{
    margin-left:50%
  }

  .bx--offset-md-5{
    margin-left:62.5%
  }

  .bx--offset-md-6{
    margin-left:75%
  }

  .bx--offset-md-7{
    margin-left:87.5%
  }
}

.bx--col-lg-0{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-0,.bx--grid--condensed .bx--col-lg-0{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-0,.bx--grid--narrow .bx--col-lg-0{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-1{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-1,.bx--grid--condensed .bx--col-lg-1{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-1,.bx--grid--narrow .bx--col-lg-1{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-2{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-2,.bx--grid--condensed .bx--col-lg-2{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-2,.bx--grid--narrow .bx--col-lg-2{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-3{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-3,.bx--grid--condensed .bx--col-lg-3{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-3,.bx--grid--narrow .bx--col-lg-3{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-4{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-4,.bx--grid--condensed .bx--col-lg-4{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-4,.bx--grid--narrow .bx--col-lg-4{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-5{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-5,.bx--grid--condensed .bx--col-lg-5{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-5,.bx--grid--narrow .bx--col-lg-5{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-6{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-6,.bx--grid--condensed .bx--col-lg-6{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-6,.bx--grid--narrow .bx--col-lg-6{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-7{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-7,.bx--grid--condensed .bx--col-lg-7{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-7,.bx--grid--narrow .bx--col-lg-7{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-8{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-8,.bx--grid--condensed .bx--col-lg-8{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-8,.bx--grid--narrow .bx--col-lg-8{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-9{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-9,.bx--grid--condensed .bx--col-lg-9{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-9,.bx--grid--narrow .bx--col-lg-9{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-10{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-10,.bx--grid--condensed .bx--col-lg-10{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-10,.bx--grid--narrow .bx--col-lg-10{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-11{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-11,.bx--grid--condensed .bx--col-lg-11{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-11,.bx--grid--narrow .bx--col-lg-11{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-12{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-12,.bx--grid--condensed .bx--col-lg-12{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-12,.bx--grid--narrow .bx--col-lg-12{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-13{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-13,.bx--grid--condensed .bx--col-lg-13{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-13,.bx--grid--narrow .bx--col-lg-13{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-14{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-14,.bx--grid--condensed .bx--col-lg-14{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-14,.bx--grid--narrow .bx--col-lg-14{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-15{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-15,.bx--grid--condensed .bx--col-lg-15{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-15,.bx--grid--narrow .bx--col-lg-15{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg-16{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg-16,.bx--grid--condensed .bx--col-lg-16{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg-16,.bx--grid--narrow .bx--col-lg-16{
  padding-right:1rem;
  padding-left:0
}

.bx--col-lg,.bx--col-lg--auto{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-lg,.bx--grid--condensed .bx--col-lg,.bx--row--condensed .bx--col-lg--auto,.bx--grid--condensed .bx--col-lg--auto{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-lg,.bx--grid--narrow .bx--col-lg,.bx--row--narrow .bx--col-lg--auto,.bx--grid--narrow .bx--col-lg--auto{
  padding-right:1rem;
  padding-left:0
}

@media(min-width: 66rem){
  .bx--col,.bx--col-lg{
    max-width:100%;
    flex-basis:0;
    flex-grow:1
  }

  .bx--col--auto,.bx--col-lg--auto{
    width:auto;
    max-width:100%;
    flex:1 0 0%
  }

  .bx--col-lg-0{
    display:none
  }

  .bx--col-lg-1{
    display:block;
    max-width:6.25%;
    flex:0 0 6.25%
  }

  .bx--col-lg-2{
    display:block;
    max-width:12.5%;
    flex:0 0 12.5%
  }

  .bx--col-lg-3{
    display:block;
    max-width:18.75%;
    flex:0 0 18.75%
  }

  .bx--col-lg-4{
    display:block;
    max-width:25%;
    flex:0 0 25%
  }

  .bx--col-lg-5{
    display:block;
    max-width:31.25%;
    flex:0 0 31.25%
  }

  .bx--col-lg-6{
    display:block;
    max-width:37.5%;
    flex:0 0 37.5%
  }

  .bx--col-lg-7{
    display:block;
    max-width:43.75%;
    flex:0 0 43.75%
  }

  .bx--col-lg-8{
    display:block;
    max-width:50%;
    flex:0 0 50%
  }

  .bx--col-lg-9{
    display:block;
    max-width:56.25%;
    flex:0 0 56.25%
  }

  .bx--col-lg-10{
    display:block;
    max-width:62.5%;
    flex:0 0 62.5%
  }

  .bx--col-lg-11{
    display:block;
    max-width:68.75%;
    flex:0 0 68.75%
  }

  .bx--col-lg-12{
    display:block;
    max-width:75%;
    flex:0 0 75%
  }

  .bx--col-lg-13{
    display:block;
    max-width:81.25%;
    flex:0 0 81.25%
  }

  .bx--col-lg-14{
    display:block;
    max-width:87.5%;
    flex:0 0 87.5%
  }

  .bx--col-lg-15{
    display:block;
    max-width:93.75%;
    flex:0 0 93.75%
  }

  .bx--col-lg-16{
    display:block;
    max-width:100%;
    flex:0 0 100%
  }

  .bx--offset-lg-0{
    margin-left:0
  }

  .bx--offset-lg-1{
    margin-left:6.25%
  }

  .bx--offset-lg-2{
    margin-left:12.5%
  }

  .bx--offset-lg-3{
    margin-left:18.75%
  }

  .bx--offset-lg-4{
    margin-left:25%
  }

  .bx--offset-lg-5{
    margin-left:31.25%
  }

  .bx--offset-lg-6{
    margin-left:37.5%
  }

  .bx--offset-lg-7{
    margin-left:43.75%
  }

  .bx--offset-lg-8{
    margin-left:50%
  }

  .bx--offset-lg-9{
    margin-left:56.25%
  }

  .bx--offset-lg-10{
    margin-left:62.5%
  }

  .bx--offset-lg-11{
    margin-left:68.75%
  }

  .bx--offset-lg-12{
    margin-left:75%
  }

  .bx--offset-lg-13{
    margin-left:81.25%
  }

  .bx--offset-lg-14{
    margin-left:87.5%
  }

  .bx--offset-lg-15{
    margin-left:93.75%
  }
}

.bx--col-xlg-0{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-0,.bx--grid--condensed .bx--col-xlg-0{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-0,.bx--grid--narrow .bx--col-xlg-0{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-1{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-1,.bx--grid--condensed .bx--col-xlg-1{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-1,.bx--grid--narrow .bx--col-xlg-1{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-2{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-2,.bx--grid--condensed .bx--col-xlg-2{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-2,.bx--grid--narrow .bx--col-xlg-2{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-3{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-3,.bx--grid--condensed .bx--col-xlg-3{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-3,.bx--grid--narrow .bx--col-xlg-3{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-4{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-4,.bx--grid--condensed .bx--col-xlg-4{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-4,.bx--grid--narrow .bx--col-xlg-4{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-5{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-5,.bx--grid--condensed .bx--col-xlg-5{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-5,.bx--grid--narrow .bx--col-xlg-5{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-6{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-6,.bx--grid--condensed .bx--col-xlg-6{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-6,.bx--grid--narrow .bx--col-xlg-6{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-7{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-7,.bx--grid--condensed .bx--col-xlg-7{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-7,.bx--grid--narrow .bx--col-xlg-7{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-8{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-8,.bx--grid--condensed .bx--col-xlg-8{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-8,.bx--grid--narrow .bx--col-xlg-8{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-9{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-9,.bx--grid--condensed .bx--col-xlg-9{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-9,.bx--grid--narrow .bx--col-xlg-9{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-10{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-10,.bx--grid--condensed .bx--col-xlg-10{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-10,.bx--grid--narrow .bx--col-xlg-10{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-11{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-11,.bx--grid--condensed .bx--col-xlg-11{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-11,.bx--grid--narrow .bx--col-xlg-11{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-12{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-12,.bx--grid--condensed .bx--col-xlg-12{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-12,.bx--grid--narrow .bx--col-xlg-12{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-13{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-13,.bx--grid--condensed .bx--col-xlg-13{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-13,.bx--grid--narrow .bx--col-xlg-13{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-14{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-14,.bx--grid--condensed .bx--col-xlg-14{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-14,.bx--grid--narrow .bx--col-xlg-14{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-15{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-15,.bx--grid--condensed .bx--col-xlg-15{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-15,.bx--grid--narrow .bx--col-xlg-15{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg-16{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg-16,.bx--grid--condensed .bx--col-xlg-16{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg-16,.bx--grid--narrow .bx--col-xlg-16{
  padding-right:1rem;
  padding-left:0
}

.bx--col-xlg,.bx--col-xlg--auto{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-xlg,.bx--grid--condensed .bx--col-xlg,.bx--row--condensed .bx--col-xlg--auto,.bx--grid--condensed .bx--col-xlg--auto{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-xlg,.bx--grid--narrow .bx--col-xlg,.bx--row--narrow .bx--col-xlg--auto,.bx--grid--narrow .bx--col-xlg--auto{
  padding-right:1rem;
  padding-left:0
}

@media(min-width: 82rem){
  .bx--col,.bx--col-xlg{
    max-width:100%;
    flex-basis:0;
    flex-grow:1
  }

  .bx--col--auto,.bx--col-xlg--auto{
    width:auto;
    max-width:100%;
    flex:1 0 0%
  }

  .bx--col-xlg-0{
    display:none
  }

  .bx--col-xlg-1{
    display:block;
    max-width:6.25%;
    flex:0 0 6.25%
  }

  .bx--col-xlg-2{
    display:block;
    max-width:12.5%;
    flex:0 0 12.5%
  }

  .bx--col-xlg-3{
    display:block;
    max-width:18.75%;
    flex:0 0 18.75%
  }

  .bx--col-xlg-4{
    display:block;
    max-width:25%;
    flex:0 0 25%
  }

  .bx--col-xlg-5{
    display:block;
    max-width:31.25%;
    flex:0 0 31.25%
  }

  .bx--col-xlg-6{
    display:block;
    max-width:37.5%;
    flex:0 0 37.5%
  }

  .bx--col-xlg-7{
    display:block;
    max-width:43.75%;
    flex:0 0 43.75%
  }

  .bx--col-xlg-8{
    display:block;
    max-width:50%;
    flex:0 0 50%
  }

  .bx--col-xlg-9{
    display:block;
    max-width:56.25%;
    flex:0 0 56.25%
  }

  .bx--col-xlg-10{
    display:block;
    max-width:62.5%;
    flex:0 0 62.5%
  }

  .bx--col-xlg-11{
    display:block;
    max-width:68.75%;
    flex:0 0 68.75%
  }

  .bx--col-xlg-12{
    display:block;
    max-width:75%;
    flex:0 0 75%
  }

  .bx--col-xlg-13{
    display:block;
    max-width:81.25%;
    flex:0 0 81.25%
  }

  .bx--col-xlg-14{
    display:block;
    max-width:87.5%;
    flex:0 0 87.5%
  }

  .bx--col-xlg-15{
    display:block;
    max-width:93.75%;
    flex:0 0 93.75%
  }

  .bx--col-xlg-16{
    display:block;
    max-width:100%;
    flex:0 0 100%
  }

  .bx--offset-xlg-0{
    margin-left:0
  }

  .bx--offset-xlg-1{
    margin-left:6.25%
  }

  .bx--offset-xlg-2{
    margin-left:12.5%
  }

  .bx--offset-xlg-3{
    margin-left:18.75%
  }

  .bx--offset-xlg-4{
    margin-left:25%
  }

  .bx--offset-xlg-5{
    margin-left:31.25%
  }

  .bx--offset-xlg-6{
    margin-left:37.5%
  }

  .bx--offset-xlg-7{
    margin-left:43.75%
  }

  .bx--offset-xlg-8{
    margin-left:50%
  }

  .bx--offset-xlg-9{
    margin-left:56.25%
  }

  .bx--offset-xlg-10{
    margin-left:62.5%
  }

  .bx--offset-xlg-11{
    margin-left:68.75%
  }

  .bx--offset-xlg-12{
    margin-left:75%
  }

  .bx--offset-xlg-13{
    margin-left:81.25%
  }

  .bx--offset-xlg-14{
    margin-left:87.5%
  }

  .bx--offset-xlg-15{
    margin-left:93.75%
  }
}

.bx--col-max-0{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-0,.bx--grid--condensed .bx--col-max-0{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-0,.bx--grid--narrow .bx--col-max-0{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-1{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-1,.bx--grid--condensed .bx--col-max-1{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-1,.bx--grid--narrow .bx--col-max-1{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-2{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-2,.bx--grid--condensed .bx--col-max-2{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-2,.bx--grid--narrow .bx--col-max-2{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-3{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-3,.bx--grid--condensed .bx--col-max-3{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-3,.bx--grid--narrow .bx--col-max-3{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-4{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-4,.bx--grid--condensed .bx--col-max-4{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-4,.bx--grid--narrow .bx--col-max-4{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-5{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-5,.bx--grid--condensed .bx--col-max-5{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-5,.bx--grid--narrow .bx--col-max-5{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-6{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-6,.bx--grid--condensed .bx--col-max-6{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-6,.bx--grid--narrow .bx--col-max-6{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-7{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-7,.bx--grid--condensed .bx--col-max-7{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-7,.bx--grid--narrow .bx--col-max-7{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-8{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-8,.bx--grid--condensed .bx--col-max-8{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-8,.bx--grid--narrow .bx--col-max-8{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-9{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-9,.bx--grid--condensed .bx--col-max-9{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-9,.bx--grid--narrow .bx--col-max-9{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-10{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-10,.bx--grid--condensed .bx--col-max-10{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-10,.bx--grid--narrow .bx--col-max-10{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-11{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-11,.bx--grid--condensed .bx--col-max-11{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-11,.bx--grid--narrow .bx--col-max-11{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-12{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-12,.bx--grid--condensed .bx--col-max-12{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-12,.bx--grid--narrow .bx--col-max-12{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-13{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-13,.bx--grid--condensed .bx--col-max-13{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-13,.bx--grid--narrow .bx--col-max-13{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-14{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-14,.bx--grid--condensed .bx--col-max-14{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-14,.bx--grid--narrow .bx--col-max-14{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-15{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-15,.bx--grid--condensed .bx--col-max-15{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-15,.bx--grid--narrow .bx--col-max-15{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max-16{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max-16,.bx--grid--condensed .bx--col-max-16{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max-16,.bx--grid--narrow .bx--col-max-16{
  padding-right:1rem;
  padding-left:0
}

.bx--col-max,.bx--col-max--auto{
  width:100%;
  padding-right:1rem;
  padding-left:1rem
}

.bx--row--condensed .bx--col-max,.bx--grid--condensed .bx--col-max,.bx--row--condensed .bx--col-max--auto,.bx--grid--condensed .bx--col-max--auto{
  padding-right:.03125rem;
  padding-left:.03125rem
}

.bx--row--narrow .bx--col-max,.bx--grid--narrow .bx--col-max,.bx--row--narrow .bx--col-max--auto,.bx--grid--narrow .bx--col-max--auto{
  padding-right:1rem;
  padding-left:0
}

@media(min-width: 99rem){
  .bx--col,.bx--col-max{
    max-width:100%;
    flex-basis:0;
    flex-grow:1
  }

  .bx--col--auto,.bx--col-max--auto{
    width:auto;
    max-width:100%;
    flex:1 0 0%
  }

  .bx--col-max-0{
    display:none
  }

  .bx--col-max-1{
    display:block;
    max-width:6.25%;
    flex:0 0 6.25%
  }

  .bx--col-max-2{
    display:block;
    max-width:12.5%;
    flex:0 0 12.5%
  }

  .bx--col-max-3{
    display:block;
    max-width:18.75%;
    flex:0 0 18.75%
  }

  .bx--col-max-4{
    display:block;
    max-width:25%;
    flex:0 0 25%
  }

  .bx--col-max-5{
    display:block;
    max-width:31.25%;
    flex:0 0 31.25%
  }

  .bx--col-max-6{
    display:block;
    max-width:37.5%;
    flex:0 0 37.5%
  }

  .bx--col-max-7{
    display:block;
    max-width:43.75%;
    flex:0 0 43.75%
  }

  .bx--col-max-8{
    display:block;
    max-width:50%;
    flex:0 0 50%
  }

  .bx--col-max-9{
    display:block;
    max-width:56.25%;
    flex:0 0 56.25%
  }

  .bx--col-max-10{
    display:block;
    max-width:62.5%;
    flex:0 0 62.5%
  }

  .bx--col-max-11{
    display:block;
    max-width:68.75%;
    flex:0 0 68.75%
  }

  .bx--col-max-12{
    display:block;
    max-width:75%;
    flex:0 0 75%
  }

  .bx--col-max-13{
    display:block;
    max-width:81.25%;
    flex:0 0 81.25%
  }

  .bx--col-max-14{
    display:block;
    max-width:87.5%;
    flex:0 0 87.5%
  }

  .bx--col-max-15{
    display:block;
    max-width:93.75%;
    flex:0 0 93.75%
  }

  .bx--col-max-16{
    display:block;
    max-width:100%;
    flex:0 0 100%
  }

  .bx--offset-max-0{
    margin-left:0
  }

  .bx--offset-max-1{
    margin-left:6.25%
  }

  .bx--offset-max-2{
    margin-left:12.5%
  }

  .bx--offset-max-3{
    margin-left:18.75%
  }

  .bx--offset-max-4{
    margin-left:25%
  }

  .bx--offset-max-5{
    margin-left:31.25%
  }

  .bx--offset-max-6{
    margin-left:37.5%
  }

  .bx--offset-max-7{
    margin-left:43.75%
  }

  .bx--offset-max-8{
    margin-left:50%
  }

  .bx--offset-max-9{
    margin-left:56.25%
  }

  .bx--offset-max-10{
    margin-left:62.5%
  }

  .bx--offset-max-11{
    margin-left:68.75%
  }

  .bx--offset-max-12{
    margin-left:75%
  }

  .bx--offset-max-13{
    margin-left:81.25%
  }

  .bx--offset-max-14{
    margin-left:87.5%
  }

  .bx--offset-max-15{
    margin-left:93.75%
  }
}

.bx--no-gutter,.bx--row.bx--no-gutter [class*=bx--col]{
  padding-right:0;
  padding-left:0
}

.bx--no-gutter--start,.bx--row.bx--no-gutter--start [class*=bx--col]{
  padding-left:0
}

.bx--no-gutter--end,.bx--row.bx--no-gutter--end [class*=bx--col]{
  padding-right:0
}

.bx--no-gutter--left,.bx--row.bx--no-gutter--left [class*=bx--col]{
  padding-left:0
}

.bx--no-gutter--right,.bx--row.bx--no-gutter--right [class*=bx--col]{
  padding-right:0
}

.bx--hang--start{
  padding-left:1rem
}

.bx--hang--end{
  padding-right:1rem
}

.bx--hang--left{
  padding-left:1rem
}

.bx--hang--right{
  padding-right:1rem
}

.bx--aspect-ratio{
  position:relative
}

.bx--aspect-ratio::before{
  width:1px;
  height:0;
  margin-left:-1px;
  content:"";
  float:left
}

.bx--aspect-ratio::after{
  display:table;
  clear:both;
  content:""
}

.bx--aspect-ratio--16x9::before{
  padding-top:56.25%
}

.bx--aspect-ratio--9x16::before{
  padding-top:177.7777777778%
}

.bx--aspect-ratio--2x1::before{
  padding-top:50%
}

.bx--aspect-ratio--1x2::before{
  padding-top:200%
}

.bx--aspect-ratio--4x3::before{
  padding-top:75%
}

.bx--aspect-ratio--3x4::before{
  padding-top:133.3333333333%
}

.bx--aspect-ratio--3x2::before{
  padding-top:66.6666666667%
}

.bx--aspect-ratio--2x3::before{
  padding-top:150%
}

.bx--aspect-ratio--1x1::before{
  padding-top:100%
}

.bx--aspect-ratio--object{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%
}

@-webkit-keyframes collapse-accordion{
  0%{
    height:100%;
    opacity:1;
    visibility:inherit
  }

  100%{
    height:0;
    opacity:0;
    visibility:hidden
  }
}

@keyframes collapse-accordion{
  0%{
    height:100%;
    opacity:1;
    visibility:inherit
  }

  100%{
    height:0;
    opacity:0;
    visibility:hidden
  }
}

@-webkit-keyframes expand-accordion{
  0%{
    height:0;
    opacity:0;
    visibility:hidden
  }

  100%{
    height:100%;
    opacity:1;
    visibility:inherit
  }
}

@keyframes expand-accordion{
  0%{
    height:0;
    opacity:0;
    visibility:hidden
  }

  100%{
    height:100%;
    opacity:1;
    visibility:inherit
  }
}

.bx--accordion{
  width:100%;
  list-style:none
}

.bx--accordion__item{
  overflow:visible;
  border-top:1px solid #e0e0e0;
  transition:all 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--accordion__item:last-child{
  border-bottom:1px solid #e0e0e0
}

.bx--accordion__heading{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  position:relative;
  display:flex;
  width:100%;
  min-height:2.5rem;
  flex-direction:row-reverse;
  align-items:flex-start;
  justify-content:flex-start;
  padding:.625rem 0;
  margin:0;
  color:#161616;
  cursor:pointer;
  transition:background-color cubic-bezier(0.2, 0, 0.38, 0.9) 110ms
}

.bx--accordion__heading::-moz-focus-inner{
  border:0
}

.bx--accordion__heading:hover::before,.bx--accordion__heading:focus::before{
  position:absolute;
  top:-1px;
  left:0;
  width:100%;
  height:calc(100% + 2px);
  content:""
}

.bx--accordion__heading:hover::before{
  background-color:#e5e5e5
}

.bx--accordion__heading:focus{
  outline:none
}

.bx--accordion__heading:focus::before{
  box-sizing:border-box;
  border:2px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--accordion__heading:focus::before{
    border-style:dotted
  }
}

.bx--accordion--xl .bx--accordion__heading,.bx--accordion--lg .bx--accordion__heading{
  min-height:3rem
}

.bx--accordion--sm .bx--accordion__heading{
  min-height:2rem;
  padding:.3125rem 0
}

.bx--accordion__heading[disabled]{
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--accordion__heading[disabled] .bx--accordion__arrow{
  fill:#c6c6c6
}

.bx--accordion__heading[disabled]:hover::before{
  background-color:transparent
}

.bx--accordion__item--disabled,.bx--accordion__item--disabled+.bx--accordion__item{
  border-top:1px solid #fff
}

li.bx--accordion__item--disabled:last-of-type{
  border-bottom:1px solid #fff
}

.bx--accordion__arrow{
  outline:2px solid transparent;
  outline-offset:-2px;
  width:1rem;
  height:1rem;
  flex:0 0 1rem;
  margin:2px 1rem 0 0;
  fill:#161616;
  transform:rotate(-270deg) /*rtl:ignore*/;
  transition:all 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--accordion__title{
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px;
  z-index:1;
  width:100%;
  margin:0 0 0 1rem;
  text-align:left
}

.bx--accordion__content{
  display:none;
  padding-right:1rem;
  padding-left:1rem;
  transition:padding cubic-bezier(0.2, 0, 0.38, 0.9) 110ms
}

@media(min-width: 480px){
  .bx--accordion__content{
    padding-right:3rem
  }
}

@media(min-width: 640px){
  .bx--accordion__content{
    padding-right:25%
  }
}

.bx--accordion__content>p{
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px
}

.bx--accordion--start .bx--accordion__heading{
  flex-direction:row
}

.bx--accordion--start .bx--accordion__arrow{
  margin:2px 0 0 1rem
}

.bx--accordion--start .bx--accordion__title{
  margin-right:1rem
}

.bx--accordion--start .bx--accordion__content{
  margin-left:2rem
}

.bx--accordion__item--collapsing .bx--accordion__content,.bx--accordion__item--expanding .bx--accordion__content{
  display:block
}

.bx--accordion__item--collapsing .bx--accordion__content{
  -webkit-animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) collapse-accordion;
  animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) collapse-accordion
}

.bx--accordion__item--expanding .bx--accordion__content{
  -webkit-animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) expand-accordion;
  animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) expand-accordion
}

.bx--accordion__item--active{
  overflow:visible
}

.bx--accordion__item--active .bx--accordion__content{
  display:block;
  padding-top:.5rem;
  padding-bottom:1.5rem;
  transition:padding-top cubic-bezier(0, 0, 0.38, 0.9) 110ms,padding-bottom cubic-bezier(0, 0, 0.38, 0.9) 110ms
}

.bx--accordion__item--active .bx--accordion__arrow{
  fill:#161616;
  transform:rotate(-90deg) /*rtl:ignore*/
}

.bx--accordion.bx--skeleton .bx--accordion__heading,.bx--accordion.bx--skeleton .bx--accordion__button{
  cursor:default
}

.bx--accordion.bx--skeleton .bx--accordion__arrow{
  cursor:default;
  fill:#161616;
  pointer-events:none
}

.bx--accordion.bx--skeleton .bx--accordion__arrow:hover,.bx--accordion.bx--skeleton .bx--accordion__arrow:focus,.bx--accordion.bx--skeleton .bx--accordion__arrow:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--accordion.bx--skeleton .bx--accordion__heading:hover::before{
  background-color:transparent
}

.bx--accordion--end.bx--skeleton .bx--accordion__arrow{
  margin-left:1rem
}

.bx--skeleton .bx--accordion__heading:focus .bx--accordion__arrow{
  border:none;
  cursor:default;
  outline:none
}

.bx--accordion__title.bx--skeleton__text{
  margin-bottom:0
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--accordion__arrow,.bx--accordion__item--active .bx--accordion__arrow{
    fill:ButtonText
  }
}

.bx--link{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:inline-flex;
  color:#0f62fe;
  outline:none;
  text-decoration:none;
  transition:color 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--link:hover{
  color:#0043ce;
  text-decoration:underline
}

.bx--link:active,.bx--link:active:visited,.bx--link:active:visited:hover{
  color:#161616;
  text-decoration:underline
}

.bx--link:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--link:focus{
    outline-style:dotted
  }
}

.bx--link:visited{
  color:#0f62fe
}

.bx--link:visited:hover{
  color:#0043ce
}

.bx--link--disabled,.bx--link--disabled:hover{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  color:#c6c6c6;
  cursor:not-allowed;
  font-weight:400;
  text-decoration:none
}

.bx--link.bx--link--visited:visited{
  color:#8a3ffc
}

.bx--link.bx--link--visited:visited:hover{
  color:#0043ce
}

.bx--link.bx--link--inline{
  text-decoration:underline
}

.bx--link.bx--link--inline:focus,.bx--link.bx--link--inline:visited{
  text-decoration:none
}

.bx--link--disabled.bx--link--inline{
  text-decoration:underline
}

.bx--link--sm{
  font-size:.75rem;
  line-height:1.33333;
  letter-spacing:.32px
}

.bx--link--lg{
  font-size:1rem;
  font-weight:400;
  line-height:1.375;
  letter-spacing:0
}

.bx--link__icon{
  display:inline-flex;
  align-self:center;
  margin-left:.5rem
}

.bx--breadcrumb{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:inline
}

@media(min-width: 42rem){
  .bx--breadcrumb{
    display:flex;
    flex-wrap:wrap
  }
}

.bx--breadcrumb-item{
  position:relative;
  display:flex;
  align-items:center;
  margin-right:.5rem
}

.bx--breadcrumb-item .bx--link:visited{
  color:#0f62fe
}

.bx--breadcrumb-item .bx--link:visited:hover{
  color:#0043ce
}

.bx--breadcrumb-item::after{
  margin-left:.5rem;
  color:#161616;
  content:"/"
}

.bx--breadcrumb--no-trailing-slash .bx--breadcrumb-item:last-child::after{
  content:""
}

.bx--breadcrumb-item:last-child,.bx--breadcrumb-item:last-child::after{
  margin-right:0
}

.bx--breadcrumb .bx--link{
  white-space:nowrap
}

.bx--breadcrumb-item [aria-current=page],.bx--breadcrumb-item.bx--breadcrumb-item--current .bx--link{
  color:#161616;
  cursor:auto
}

.bx--breadcrumb-item [aria-current=page]:hover,.bx--breadcrumb-item.bx--breadcrumb-item--current .bx--link:hover{
  text-decoration:none
}

.bx--breadcrumb-item .bx--overflow-menu{
  position:relative;
  width:1.25rem;
  height:1.125rem
}

.bx--breadcrumb-item .bx--overflow-menu:focus{
  outline:1px solid #0f62fe
}

.bx--breadcrumb-item .bx--overflow-menu:hover{
  background:transparent
}

.bx--breadcrumb-item .bx--overflow-menu::after{
  position:absolute;
  bottom:2px;
  width:.75rem;
  height:1px;
  background:#0043ce;
  content:"";
  opacity:0;
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--breadcrumb-item .bx--overflow-menu:hover::after{
  opacity:1
}

.bx--breadcrumb-item .bx--overflow-menu.bx--overflow-menu--open{
  background:transparent;
  box-shadow:none
}

.bx--breadcrumb-item .bx--overflow-menu__icon{
  position:relative;
  fill:#0f62fe;
  transform:translateY(4px)
}

.bx--breadcrumb-item .bx--overflow-menu:hover .bx--overflow-menu__icon{
  fill:#0043ce
}

.bx--breadcrumb-menu-options:focus{
  outline:none
}

.bx--breadcrumb-menu-options.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after{
  top:-0.4375rem;
  left:.875rem;
  width:0;
  height:0;
  border-right:.4375rem solid transparent;
  border-bottom:.4375rem solid #fff;
  border-left:.4375rem solid transparent;
  margin:0 auto;
  background:transparent
}

.bx--breadcrumb.bx--skeleton .bx--link{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:6.25rem;
  height:1rem
}

.bx--breadcrumb.bx--skeleton .bx--link:hover,.bx--breadcrumb.bx--skeleton .bx--link:focus,.bx--breadcrumb.bx--skeleton .bx--link:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--breadcrumb.bx--skeleton .bx--link::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--breadcrumb.bx--skeleton .bx--link::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--btn{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  position:relative;
  display:inline-flex;
  max-width:20rem;
  min-height:3rem;
  flex-shrink:0;
  align-items:center;
  justify-content:space-between;
  padding:calc(.875rem - 3px) 63px calc(.875rem - 3px) 15px;
  margin:0;
  border-radius:0;
  cursor:pointer;
  outline:none;
  text-align:left;
  text-decoration:none;
  transition:background 70ms cubic-bezier(0, 0, 0.38, 0.9),box-shadow 70ms cubic-bezier(0, 0, 0.38, 0.9),border-color 70ms cubic-bezier(0, 0, 0.38, 0.9),outline 70ms cubic-bezier(0, 0, 0.38, 0.9);
  vertical-align:top
}

.bx--btn:disabled,.bx--btn:hover:disabled,.bx--btn:focus:disabled,.bx--btn.bx--btn--disabled,.bx--btn.bx--btn--disabled:hover,.bx--btn.bx--btn--disabled:focus{
  border-color:#c6c6c6;
  background:#c6c6c6;
  box-shadow:none;
  color:#8d8d8d;
  cursor:not-allowed
}

.bx--btn .bx--btn__icon{
  position:absolute;
  right:1rem;
  width:1rem;
  height:1rem;
  flex-shrink:0
}

.bx--btn::-moz-focus-inner{
  padding:0;
  border:0
}

.bx--btn--primary{
  border-width:1px;
  border-style:solid;
  border-color:transparent;
  background-color:#0f62fe;
  color:#fff
}

.bx--btn--primary:hover{
  background-color:#0353e9
}

.bx--btn--primary:focus{
  border-color:#0f62fe;
  box-shadow:inset 0 0 0 1px #0f62fe,inset 0 0 0 2px #f4f4f4
}

.bx--btn--primary:active{
  background-color:#002d9c
}

.bx--btn--primary .bx--btn__icon,.bx--btn--primary .bx--btn__icon path:not([data-icon-path]):not([fill=none]){
  fill:currentColor
}

.bx--btn--primary:hover{
  color:#fff
}

.bx--btn--secondary{
  border-width:1px;
  border-style:solid;
  border-color:transparent;
  background-color:#393939;
  color:#fff
}

.bx--btn--secondary:hover{
  background-color:#4c4c4c
}

.bx--btn--secondary:focus{
  border-color:#0f62fe;
  box-shadow:inset 0 0 0 1px #0f62fe,inset 0 0 0 2px #f4f4f4
}

.bx--btn--secondary:active{
  background-color:#6f6f6f
}

.bx--btn--secondary .bx--btn__icon,.bx--btn--secondary .bx--btn__icon path:not([data-icon-path]):not([fill=none]){
  fill:currentColor
}

.bx--btn--secondary:hover,.bx--btn--secondary:focus{
  color:#fff
}

.bx--btn--tertiary{
  border-width:1px;
  border-style:solid;
  border-color:#0f62fe;
  background-color:transparent;
  color:#0f62fe
}

.bx--btn--tertiary:hover{
  background-color:#0353e9
}

.bx--btn--tertiary:focus{
  border-color:#0f62fe;
  box-shadow:inset 0 0 0 1px #0f62fe,inset 0 0 0 2px #f4f4f4
}

.bx--btn--tertiary:active{
  background-color:#002d9c
}

.bx--btn--tertiary .bx--btn__icon,.bx--btn--tertiary .bx--btn__icon path:not([data-icon-path]):not([fill=none]){
  fill:currentColor
}

.bx--btn--tertiary:hover{
  color:#fff
}

.bx--btn--tertiary:focus{
  background-color:#0f62fe;
  color:#fff
}

.bx--btn--tertiary:active{
  border-color:transparent;
  background-color:#002d9c;
  color:#fff
}

.bx--btn--tertiary:disabled,.bx--btn--tertiary:hover:disabled,.bx--btn--tertiary:focus:disabled,.bx--btn--tertiary.bx--btn--disabled,.bx--btn--tertiary.bx--btn--disabled:hover,.bx--btn--tertiary.bx--btn--disabled:focus{
  background:transparent;
  color:#8d8d8d;
  outline:none
}

.bx--btn--ghost{
  border-width:1px;
  border-style:solid;
  border-color:transparent;
  background-color:transparent;
  color:#0f62fe;
  padding:calc(.875rem - 3px) 16px
}

.bx--btn--ghost:hover{
  background-color:#e5e5e5
}

.bx--btn--ghost:focus{
  border-color:#0f62fe;
  box-shadow:inset 0 0 0 1px #0f62fe,inset 0 0 0 2px #f4f4f4
}

.bx--btn--ghost:active{
  background-color:#c6c6c6
}

.bx--btn--ghost .bx--btn__icon,.bx--btn--ghost .bx--btn__icon path:not([data-icon-path]):not([fill=none]){
  fill:currentColor
}

.bx--btn--ghost .bx--btn__icon{
  position:static;
  margin-left:.5rem
}

.bx--btn--ghost:hover,.bx--btn--ghost:active{
  color:#0043ce
}

.bx--btn--ghost:active{
  background-color:#c6c6c6
}

.bx--btn--ghost:disabled,.bx--btn--ghost:hover:disabled,.bx--btn--ghost:focus:disabled,.bx--btn--ghost.bx--btn--disabled,.bx--btn--ghost.bx--btn--disabled:hover,.bx--btn--ghost.bx--btn--disabled:focus{
  border-color:transparent;
  background:transparent;
  color:#8d8d8d;
  outline:none
}

.bx--btn--ghost.bx--btn--sm{
  padding:calc(.375rem - 3px) 16px
}

.bx--btn--ghost.bx--btn--field,.bx--btn--ghost.bx--btn--md{
  padding:calc(.675rem - 3px) 16px
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus{
    outline-style:dotted
  }
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus{
  outline:1px solid transparent
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus svg{
    outline-style:dotted
  }
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger::before,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger::after,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--btn.bx--btn--icon-only.bx--tooltip__trigger::before,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger::after,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger+.bx--assistive-text{
    display:inline-block
  }
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger::before,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--a11y::before,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--a11y::after{
  transition:none
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger::after,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--btn.bx--btn--icon-only.bx--tooltip__trigger::after,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--btn.bx--btn--icon-only.bx--tooltip__trigger::after,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--btn.bx--btn--icon-only.bx--tooltip__trigger::after,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--btn.bx--btn--icon-only.bx--tooltip__trigger::after,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger::after{
  content:attr(aria-label)
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--a11y::after{
  content:none
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--visible::before,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--visible::after,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover::before,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover::after,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus::before,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus::after{
  opacity:1
}

@-webkit-keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--visible .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--visible+.bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover+.bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--visible .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--visible+.bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover+.bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover.bx--tooltip--a11y::before,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus+.bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--hidden .bx--assistive-text,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger svg,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover svg,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus svg{
  fill:currentColor
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--btn--disabled.bx--tooltip--a11y::before,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--btn--disabled.bx--tooltip--a11y::after,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--btn--disabled .bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  opacity:0
}

.bx--btn.bx--btn--icon-only:not(.bx--tooltip--hidden) .bx--assistive-text{
  pointer-events:all
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus{
  border-color:#0f62fe
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:active:not([disabled]){
  border-color:transparent
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus svg{
  outline-color:transparent
}

.bx--btn.bx--btn--icon-only.bx--tooltip__trigger[disabled]:hover,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger[disabled]:focus,.bx--btn.bx--btn--icon-only.bx--tooltip__trigger[disabled]:active{
  cursor:not-allowed;
  fill:#8d8d8d
}

.bx--tooltip__trigger.bx--btn--icon-only--top{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--tooltip__trigger.bx--btn--icon-only--top:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--top:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--top:focus{
  outline:1px solid transparent
}

.bx--tooltip__trigger.bx--btn--icon-only--top:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--top:focus svg{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--top::before,.bx--tooltip__trigger.bx--btn--icon-only--top::after,.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--btn--icon-only--top::before,.bx--tooltip__trigger.bx--btn--icon-only--top::after,.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top+.bx--assistive-text{
    display:inline-block
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--top::before,.bx--tooltip__trigger.bx--btn--icon-only--top::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--a11y::after{
  transition:none
}

.bx--tooltip__trigger.bx--btn--icon-only--top::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--tooltip__trigger.bx--btn--icon-only--top::after,.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--btn--icon-only--top::after,.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--tooltip__trigger.bx--btn--icon-only--top::after,.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--tooltip__trigger.bx--btn--icon-only--top::after,.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--top::after,.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--top::after{
  content:attr(aria-label)
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--a11y::after{
  content:none
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--visible::before,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--visible::after,.bx--tooltip__trigger.bx--btn--icon-only--top:hover::before,.bx--tooltip__trigger.bx--btn--icon-only--top:hover::after,.bx--tooltip__trigger.bx--btn--icon-only--top:focus::before,.bx--tooltip__trigger.bx--btn--icon-only--top:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top:hover .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top:focus .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--top:hover .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top:hover.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--top:focus .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top:focus+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--hidden .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--top::before,.bx--tooltip__trigger.bx--btn--icon-only--top::after,.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--btn--icon-only--top::before{
  top:-0.5rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--top::after,.bx--tooltip__trigger.bx--btn--icon-only--top .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top+.bx--assistive-text{
  top:-0.8125rem;
  left:50%;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-start .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-start::before,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-start+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-start::before{
  top:-0.5rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-start+.bx--assistive-text{
  top:-0.8125rem;
  left:0;
  transform:translate(0, -100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-center .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-center::before,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-center+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-center::before{
  top:-0.5rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-center+.bx--assistive-text{
  top:-0.8125rem;
  left:50%;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-end .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-end::before,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-end+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-end::before{
  top:-0.5rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--top.bx--tooltip--align-end+.bx--assistive-text{
  top:-0.8125rem;
  right:0;
  left:auto;
  transform:translate(0, -100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--right{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--tooltip__trigger.bx--btn--icon-only--right:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--right:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--right:focus{
  outline:1px solid transparent
}

.bx--tooltip__trigger.bx--btn--icon-only--right:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--right:focus svg{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--right::before,.bx--tooltip__trigger.bx--btn--icon-only--right::after,.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--btn--icon-only--right::before,.bx--tooltip__trigger.bx--btn--icon-only--right::after,.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right+.bx--assistive-text{
    display:inline-block
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--right::before,.bx--tooltip__trigger.bx--btn--icon-only--right::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--a11y::after{
  transition:none
}

.bx--tooltip__trigger.bx--btn--icon-only--right::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--tooltip__trigger.bx--btn--icon-only--right::after,.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--btn--icon-only--right::after,.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--tooltip__trigger.bx--btn--icon-only--right::after,.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--tooltip__trigger.bx--btn--icon-only--right::after,.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--right::after,.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--right::after{
  content:attr(aria-label)
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--a11y::after{
  content:none
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--visible::before,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--visible::after,.bx--tooltip__trigger.bx--btn--icon-only--right:hover::before,.bx--tooltip__trigger.bx--btn--icon-only--right:hover::after,.bx--tooltip__trigger.bx--btn--icon-only--right:focus::before,.bx--tooltip__trigger.bx--btn--icon-only--right:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right:hover .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right:focus .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--right:hover .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right:hover.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--right:focus .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right:focus+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--hidden .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  left:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--right::before,.bx--tooltip__trigger.bx--btn--icon-only--right::after,.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right+.bx--assistive-text{
  top:50%;
  right:0
}

.bx--tooltip__trigger.bx--btn--icon-only--right::before{
  right:-0.5rem;
  border-width:.25rem .3125rem .25rem 0;
  border-color:transparent #393939 transparent transparent;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--right::after,.bx--tooltip__trigger.bx--btn--icon-only--right .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right+.bx--assistive-text{
  right:-0.8125rem;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-start .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  left:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-start::before,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-start+.bx--assistive-text{
  top:50%;
  right:0
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-start::before{
  right:-0.5rem;
  border-width:.25rem .3125rem .25rem 0;
  border-color:transparent #393939 transparent transparent;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-start+.bx--assistive-text{
  right:-0.8125rem;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-center .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  left:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-center::before,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-center+.bx--assistive-text{
  top:50%;
  right:0
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-center::before{
  right:-0.5rem;
  border-width:.25rem .3125rem .25rem 0;
  border-color:transparent #393939 transparent transparent;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-center+.bx--assistive-text{
  right:-0.8125rem;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-end .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  left:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-end::before,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-end+.bx--assistive-text{
  top:50%;
  right:0
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-end::before{
  right:-0.5rem;
  border-width:.25rem .3125rem .25rem 0;
  border-color:transparent #393939 transparent transparent;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--right.bx--tooltip--align-end+.bx--assistive-text{
  right:-0.8125rem;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--bottom:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom:focus{
  outline:1px solid transparent
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--bottom:focus svg{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--btn--icon-only--bottom::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom+.bx--assistive-text{
    display:inline-block
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--a11y::after{
  transition:none
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--btn--icon-only--bottom::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--tooltip__trigger.bx--btn--icon-only--bottom::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--tooltip__trigger.bx--btn--icon-only--bottom::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--bottom::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom::after{
  content:attr(aria-label)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--a11y::after{
  content:none
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--visible::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--visible::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom:hover::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom:hover::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom:focus::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom:hover .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom:focus .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom:hover .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom:hover.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom:focus .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom:focus+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--hidden .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom+.bx--assistive-text{
  bottom:-0.8125rem;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-start .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-start::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-start+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-start::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-start+.bx--assistive-text{
  bottom:-0.8125rem;
  left:0;
  transform:translate(0, 100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-center .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-center::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-center+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-center::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-center+.bx--assistive-text{
  bottom:-0.8125rem;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-end .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-end::before,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-end+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-end::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--bottom.bx--tooltip--align-end+.bx--assistive-text{
  bottom:-0.8125rem;
  right:0;
  left:auto;
  transform:translate(0, 100%)
}

.bx--tooltip__trigger.bx--btn--icon-only--left{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--tooltip__trigger.bx--btn--icon-only--left:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--left:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--left:focus{
  outline:1px solid transparent
}

.bx--tooltip__trigger.bx--btn--icon-only--left:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--left:focus svg{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--left::before,.bx--tooltip__trigger.bx--btn--icon-only--left::after,.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--btn--icon-only--left::before,.bx--tooltip__trigger.bx--btn--icon-only--left::after,.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left+.bx--assistive-text{
    display:inline-block
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--left::before,.bx--tooltip__trigger.bx--btn--icon-only--left::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--a11y::after{
  transition:none
}

.bx--tooltip__trigger.bx--btn--icon-only--left::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--tooltip__trigger.bx--btn--icon-only--left::after,.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--btn--icon-only--left::after,.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--tooltip__trigger.bx--btn--icon-only--left::after,.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--tooltip__trigger.bx--btn--icon-only--left::after,.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--btn--icon-only--left::after,.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--left::after{
  content:attr(aria-label)
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--a11y::after{
  content:none
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--visible::before,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--visible::after,.bx--tooltip__trigger.bx--btn--icon-only--left:hover::before,.bx--tooltip__trigger.bx--btn--icon-only--left:hover::after,.bx--tooltip__trigger.bx--btn--icon-only--left:focus::before,.bx--tooltip__trigger.bx--btn--icon-only--left:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left:hover .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left:focus .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--left:hover .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left:hover.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--btn--icon-only--left:focus .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left:focus+.bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--hidden .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  right:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--left::before,.bx--tooltip__trigger.bx--btn--icon-only--left::after,.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left+.bx--assistive-text{
  top:50%;
  left:0
}

.bx--tooltip__trigger.bx--btn--icon-only--left::before{
  left:-0.5rem;
  border-width:.25rem 0 .25rem .3125rem;
  border-color:transparent transparent transparent #393939;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--left::after,.bx--tooltip__trigger.bx--btn--icon-only--left .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left+.bx--assistive-text{
  left:-0.8125rem;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-start .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  right:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-start::before,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-start+.bx--assistive-text{
  top:50%;
  left:0
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-start::before{
  left:-0.5rem;
  border-width:.25rem 0 .25rem .3125rem;
  border-color:transparent transparent transparent #393939;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-start+.bx--assistive-text{
  left:-0.8125rem;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-center .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  right:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-center::before,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-center+.bx--assistive-text{
  top:50%;
  left:0
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-center::before{
  left:-0.5rem;
  border-width:.25rem 0 .25rem .3125rem;
  border-color:transparent transparent transparent #393939;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-center+.bx--assistive-text{
  left:-0.8125rem;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-end .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  right:-0.75rem
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-end::before,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-end+.bx--assistive-text{
  top:50%;
  left:0
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-end::before{
  left:-0.5rem;
  border-width:.25rem 0 .25rem .3125rem;
  border-color:transparent transparent transparent #393939;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--btn--icon-only--left.bx--tooltip--align-end+.bx--assistive-text{
  left:-0.8125rem;
  transform:translate(-100%, -50%)
}

.bx--btn--icon-only{
  padding-right:.9375rem;
  padding-left:.9375rem
}

.bx--btn--icon-only .bx--btn__icon{
  position:static
}

.bx--btn--icon-only.bx--btn--ghost .bx--btn__icon,.bx--btn--icon-only.bx--btn--danger--ghost .bx--btn__icon{
  margin:0
}

.bx--btn--icon-only.bx--btn--selected{
  background:#e0e0e0
}

.bx--btn path[data-icon-path=inner-path]{
  fill:none
}

.bx--btn--ghost.bx--btn--icon-only .bx--btn__icon path:not([data-icon-path]):not([fill=none]),.bx--btn--ghost.bx--btn--icon-only .bx--btn__icon{
  fill:#161616
}

.bx--btn--ghost.bx--btn--icon-only[disabled] .bx--btn__icon path:not([data-icon-path]):not([fill=none]),.bx--btn--ghost.bx--btn--icon-only[disabled] .bx--btn__icon,.bx--btn.bx--btn--icon-only.bx--btn--ghost[disabled]:hover .bx--btn__icon{
  fill:#8d8d8d
}

.bx--btn--ghost.bx--btn--icon-only[disabled]{
  cursor:not-allowed
}

.bx--btn--field.bx--btn--icon-only,.bx--btn--md.bx--btn--icon-only{
  padding-right:.6875rem;
  padding-left:.6875rem
}

.bx--btn--sm.bx--btn--icon-only{
  padding-right:.4375rem;
  padding-left:.4375rem
}

.bx--btn--danger{
  border-width:1px;
  border-style:solid;
  border-color:transparent;
  background-color:#da1e28;
  color:#fff
}

.bx--btn--danger:hover{
  background-color:#b81921
}

.bx--btn--danger:focus{
  border-color:#0f62fe;
  box-shadow:inset 0 0 0 1px #0f62fe,inset 0 0 0 2px #f4f4f4
}

.bx--btn--danger:active{
  background-color:#750e13
}

.bx--btn--danger .bx--btn__icon,.bx--btn--danger .bx--btn__icon path:not([data-icon-path]):not([fill=none]){
  fill:currentColor
}

.bx--btn--danger:hover{
  color:#fff
}

.bx--btn--danger-tertiary,.bx--btn--danger--tertiary{
  border-width:1px;
  border-style:solid;
  border-color:#da1e28;
  background-color:transparent;
  color:#da1e28
}

.bx--btn--danger-tertiary:hover,.bx--btn--danger--tertiary:hover{
  background-color:#b81921
}

.bx--btn--danger-tertiary:focus,.bx--btn--danger--tertiary:focus{
  border-color:#0f62fe;
  box-shadow:inset 0 0 0 1px #0f62fe,inset 0 0 0 2px #f4f4f4
}

.bx--btn--danger-tertiary:active,.bx--btn--danger--tertiary:active{
  background-color:#750e13
}

.bx--btn--danger-tertiary .bx--btn__icon,.bx--btn--danger-tertiary .bx--btn__icon path:not([data-icon-path]):not([fill=none]),.bx--btn--danger--tertiary .bx--btn__icon,.bx--btn--danger--tertiary .bx--btn__icon path:not([data-icon-path]):not([fill=none]){
  fill:currentColor
}

.bx--btn--danger-tertiary:hover,.bx--btn--danger--tertiary:hover{
  border-color:#b81921;
  color:#fff
}

.bx--btn--danger-tertiary:focus,.bx--btn--danger--tertiary:focus{
  background-color:#da1e28;
  color:#fff
}

.bx--btn--danger-tertiary:active,.bx--btn--danger--tertiary:active{
  border-color:#750e13;
  color:#fff
}

.bx--btn--danger-tertiary:disabled,.bx--btn--danger-tertiary:hover:disabled,.bx--btn--danger-tertiary:focus:disabled,.bx--btn--danger-tertiary.bx--btn--disabled,.bx--btn--danger-tertiary.bx--btn--disabled:hover,.bx--btn--danger-tertiary.bx--btn--disabled:focus,.bx--btn--danger--tertiary:disabled,.bx--btn--danger--tertiary:hover:disabled,.bx--btn--danger--tertiary:focus:disabled,.bx--btn--danger--tertiary.bx--btn--disabled,.bx--btn--danger--tertiary.bx--btn--disabled:hover,.bx--btn--danger--tertiary.bx--btn--disabled:focus{
  background:transparent;
  color:#8d8d8d;
  outline:none
}

.bx--btn--danger-ghost,.bx--btn--danger--ghost{
  border-width:1px;
  border-style:solid;
  border-color:transparent;
  background-color:transparent;
  color:#da1e28;
  padding:calc(.875rem - 3px) 16px
}

.bx--btn--danger-ghost:hover,.bx--btn--danger--ghost:hover{
  background-color:#b81921
}

.bx--btn--danger-ghost:focus,.bx--btn--danger--ghost:focus{
  border-color:#0f62fe;
  box-shadow:inset 0 0 0 1px #0f62fe,inset 0 0 0 2px #f4f4f4
}

.bx--btn--danger-ghost:active,.bx--btn--danger--ghost:active{
  background-color:#750e13
}

.bx--btn--danger-ghost .bx--btn__icon,.bx--btn--danger-ghost .bx--btn__icon path:not([data-icon-path]):not([fill=none]),.bx--btn--danger--ghost .bx--btn__icon,.bx--btn--danger--ghost .bx--btn__icon path:not([data-icon-path]):not([fill=none]){
  fill:currentColor
}

.bx--btn--danger-ghost .bx--btn__icon,.bx--btn--danger--ghost .bx--btn__icon{
  position:static;
  margin-left:.5rem
}

.bx--btn--danger-ghost:hover,.bx--btn--danger-ghost:active,.bx--btn--danger--ghost:hover,.bx--btn--danger--ghost:active{
  color:#fff
}

.bx--btn--danger-ghost:disabled,.bx--btn--danger-ghost:hover:disabled,.bx--btn--danger-ghost:focus:disabled,.bx--btn--danger-ghost.bx--btn--disabled,.bx--btn--danger-ghost.bx--btn--disabled:hover,.bx--btn--danger-ghost.bx--btn--disabled:focus,.bx--btn--danger--ghost:disabled,.bx--btn--danger--ghost:hover:disabled,.bx--btn--danger--ghost:focus:disabled,.bx--btn--danger--ghost.bx--btn--disabled,.bx--btn--danger--ghost.bx--btn--disabled:hover,.bx--btn--danger--ghost.bx--btn--disabled:focus{
  border-color:transparent;
  background:transparent;
  color:#c6c6c6;
  outline:none
}

.bx--btn--danger-ghost.bx--btn--sm,.bx--btn--danger--ghost.bx--btn--sm{
  padding:calc(.375rem - 3px) 16px
}

.bx--btn--danger-ghost.bx--btn--field,.bx--btn--danger-ghost.bx--btn--md,.bx--btn--danger--ghost.bx--btn--field,.bx--btn--danger--ghost.bx--btn--md{
  padding:calc(.675rem - 3px) 16px
}

.bx--btn--sm{
  min-height:2rem;
  padding:calc(.375rem - 3px) 60px calc(.375rem - 3px) 12px
}

.bx--btn--xl:not(.bx--btn--icon-only){
  align-items:baseline;
  padding-top:1rem;
  padding-right:4rem;
  padding-left:1rem;
  min-height:5rem
}

.bx--btn--lg:not(.bx--btn--icon-only){
  align-items:baseline;
  padding-top:1rem;
  padding-right:4rem;
  padding-left:1rem;
  min-height:4rem
}

.bx--btn--field,.bx--btn--md{
  min-height:2.5rem;
  padding:calc(.675rem - 3px) 60px calc(.675rem - 3px) 12px
}

.bx--btn--expressive{
  font-size:1rem;
  font-weight:400;
  line-height:1.375;
  letter-spacing:0;
  min-height:3rem
}

.bx--btn--icon-only.bx--btn--expressive{
  padding:12px 13px
}

.bx--btn.bx--btn--expressive .bx--btn__icon{
  width:1.25rem;
  height:1.25rem
}

.bx--btn-set .bx--btn.bx--btn--expressive{
  max-width:20rem
}

.bx--btn.bx--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:9.375rem
}

.bx--btn.bx--skeleton:hover,.bx--btn.bx--skeleton:focus,.bx--btn.bx--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--btn.bx--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--btn.bx--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--btn-set{
  display:flex
}

.bx--btn-set--stacked{
  flex-direction:column
}

.bx--btn-set .bx--btn{
  width:100%;
  max-width:12.25rem
}

.bx--btn-set .bx--btn:not(:focus){
  box-shadow:-0.0625rem 0 0 0 #e0e0e0
}

.bx--btn-set .bx--btn:first-of-type:not(:focus){
  box-shadow:inherit
}

.bx--btn-set .bx--btn:focus+.bx--btn{
  box-shadow:inherit
}

.bx--btn-set--stacked .bx--btn:not(:focus){
  box-shadow:0 -0.0625rem 0 0 #e0e0e0
}

.bx--btn-set--stacked .bx--btn:first-of-type:not(:focus){
  box-shadow:inherit
}

.bx--btn-set .bx--btn.bx--btn--disabled{
  box-shadow:-0.0625rem 0 0 0 #8d8d8d
}

.bx--btn-set .bx--btn.bx--btn--disabled:first-of-type{
  box-shadow:none
}

.bx--btn-set--stacked .bx--btn.bx--btn--disabled{
  box-shadow:0 -0.0625rem 0 0 #8d8d8d
}

.bx--btn-set--stacked .bx--btn.bx--btn--disabled:first-of-type{
  box-shadow:none
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--btn:focus{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--btn--ghost.bx--btn--icon-only .bx--btn__icon path:not([data-icon-path]):not([fill=none]),.bx--btn--ghost.bx--btn--icon-only .bx--btn__icon{
    fill:ButtonText
  }
}

.bx--fieldset{
  margin-bottom:2rem
}

.bx--fieldset--no-margin{
  margin-bottom:0
}

.bx--form-item{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:flex;
  flex:1 1 auto;
  flex-direction:column;
  align-items:flex-start
}

.bx--label{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  display:inline-block;
  margin-bottom:.5rem;
  color:#525252;
  font-weight:400;
  line-height:1rem;
  vertical-align:baseline
}

.bx--label .bx--tooltip__trigger{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px
}

.bx--label.bx--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:4.6875rem;
  height:.875rem
}

.bx--label.bx--skeleton:hover,.bx--label.bx--skeleton:focus,.bx--label.bx--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--label.bx--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--label.bx--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

input[type=number]{
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace
}

input[data-invalid]:not(:focus),.bx--number[data-invalid] input[type=number]:not(:focus),.bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:not(:focus),.bx--text-area__wrapper[data-invalid]>.bx--text-area--invalid:not(:focus),.bx--select-input__wrapper[data-invalid] .bx--select-input:not(:focus),.bx--list-box[data-invalid]:not(:focus),.bx--combo-box[data-invalid] .bx--text-input:not(:focus){
  outline:2px solid #da1e28;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  input[data-invalid]:not(:focus),.bx--number[data-invalid] input[type=number]:not(:focus),.bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:not(:focus),.bx--text-area__wrapper[data-invalid]>.bx--text-area--invalid:not(:focus),.bx--select-input__wrapper[data-invalid] .bx--select-input:not(:focus),.bx--list-box[data-invalid]:not(:focus),.bx--combo-box[data-invalid] .bx--text-input:not(:focus){
    outline-style:dotted
  }
}

input[data-invalid]~.bx--form-requirement,.bx--number[data-invalid] .bx--number__input-wrapper~.bx--form-requirement,.bx--number__input-wrapper--warning~.bx--form-requirement,.bx--date-picker-input__wrapper~.bx--form-requirement,.bx--date-picker-input__wrapper--warn~.bx--form-requirement,.bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--time-picker--invalid~.bx--form-requirement,.bx--text-input__field-wrapper[data-invalid]~.bx--form-requirement,.bx--text-input__field-wrapper--warning~.bx--form-requirement,.bx--text-input__field-wrapper--warning>.bx--text-input~.bx--form-requirement,.bx--text-area__wrapper[data-invalid]~.bx--form-requirement,.bx--select-input__wrapper[data-invalid]~.bx--form-requirement,.bx--select--warning .bx--select-input__wrapper~.bx--form-requirement,.bx--time-picker[data-invalid]~.bx--form-requirement,.bx--list-box[data-invalid]~.bx--form-requirement,.bx--list-box--warning~.bx--form-requirement{
  display:block;
  overflow:visible;
  max-height:12.5rem;
  font-weight:400
}

input[data-invalid]~.bx--form-requirement,.bx--number[data-invalid] .bx--number__input-wrapper~.bx--form-requirement,.bx--date-picker-input__wrapper~.bx--form-requirement,.bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--time-picker--invalid~.bx--form-requirement,.bx--text-input__field-wrapper[data-invalid]~.bx--form-requirement,.bx--text-area__wrapper[data-invalid]~.bx--form-requirement,.bx--select-input__wrapper[data-invalid]~.bx--form-requirement,.bx--time-picker[data-invalid]~.bx--form-requirement,.bx--list-box[data-invalid]~.bx--form-requirement{
  color:#da1e28
}

.bx--form--fluid .bx--text-input__field-wrapper[data-invalid],.bx--form--fluid .bx--text-input__field-wrapper--warning{
  display:block
}

.bx--form--fluid .bx--fieldset{
  margin:0
}

.bx--form--fluid input[data-invalid]{
  outline:none
}

.bx--form--fluid .bx--form-requirement{
  padding:.5rem 2.5rem .5rem 1rem;
  margin:0
}

input:not(output):not([data-invalid]):-moz-ui-invalid{
  box-shadow:none
}

.bx--form-requirement{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  display:none;
  overflow:hidden;
  max-height:0;
  margin:.25rem 0 0
}

.bx--select--inline .bx--form__helper-text{
  margin-top:0
}

.bx--form__helper-text{
  font-size:.75rem;
  line-height:1.33333;
  letter-spacing:.32px;
  z-index:0;
  width:100%;
  margin-top:.25rem;
  color:#525252;
  opacity:1
}

.bx--label--disabled,.bx--form__helper-text--disabled{
  color:#c6c6c6
}

fieldset[disabled] .bx--label,fieldset[disabled] .bx--form__helper-text{
  color:#c6c6c6
}

.bx--form-item.bx--checkbox-wrapper{
  position:relative;
  margin-bottom:.25rem
}

.bx--form-item.bx--checkbox-wrapper:first-of-type{
  margin-top:.1875rem
}

.bx--label+.bx--form-item.bx--checkbox-wrapper{
  margin-top:-0.125rem
}

.bx--form-item.bx--checkbox-wrapper:last-of-type{
  margin-bottom:.1875rem
}

.bx--checkbox{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap;
  top:1.25rem;
  left:.7rem
}

.bx--checkbox-label{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  position:relative;
  display:flex;
  min-height:1.5rem;
  padding-top:.1875rem;
  padding-left:1.25rem;
  cursor:pointer;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

.bx--checkbox-label-text{
  padding-left:.375rem
}

.bx--checkbox-label::before,.bx--checkbox-label::after{
  box-sizing:border-box
}

.bx--checkbox-label::before{
  position:absolute;
  top:.125rem;
  left:0;
  width:1rem;
  height:1rem;
  border:1px solid #161616;
  margin:.125rem .125rem .125rem .1875rem;
  background-color:transparent;
  border-radius:1px;
  content:""
}

.bx--checkbox-label::after{
  position:absolute;
  top:.5rem;
  left:.4375rem;
  width:.5625rem;
  height:.3125rem;
  border-bottom:2px solid #fff;
  border-left:2px solid #fff;
  margin-top:-0.1875rem /*rtl:0rem*/;
  background:none;
  content:"";
  transform:scale(0) rotate(-45deg);
  transform-origin:bottom right /*rtl:center*/
}

.bx--checkbox:checked+.bx--checkbox-label::before,.bx--checkbox:indeterminate+.bx--checkbox-label::before,.bx--checkbox-label[data-contained-checkbox-state=true]::before,.bx--checkbox-label[data-contained-checkbox-state=mixed]::before{
  border-width:1px;
  border-color:#161616;
  background-color:#161616
}

.bx--checkbox:checked+.bx--checkbox-label::after,.bx--checkbox-label[data-contained-checkbox-state=true]::after{
  transform:scale(1) rotate(-45deg) /*rtl:scale(1.2) rotate3d(.5, 1, 0, 158deg)*/
}

.bx--checkbox:indeterminate+.bx--checkbox-label::after,.bx--checkbox-label[data-contained-checkbox-state=mixed]::after{
  top:.6875rem;
  width:.5rem;
  border-bottom:2px solid #fff;
  border-left:0 solid #fff;
  transform:scale(1) rotate(0deg)
}

.bx--checkbox:focus+.bx--checkbox-label::before,.bx--checkbox-label__focus::before,.bx--checkbox:checked:focus+.bx--checkbox-label::before,.bx--checkbox-label[data-contained-checkbox-state=true].bx--checkbox-label__focus::before,.bx--checkbox:indeterminate:focus+.bx--checkbox-label::before,.bx--checkbox-label[data-contained-checkbox-state=mixed].bx--checkbox-label__focus::before{
  outline:2px solid #0f62fe;
  outline-offset:1px
}

.bx--checkbox:disabled+.bx--checkbox-label,.bx--checkbox-label[data-contained-checkbox-disabled=true]{
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--checkbox:disabled+.bx--checkbox-label::before,.bx--checkbox-label[data-contained-checkbox-disabled=true]::before{
  border-color:#c6c6c6
}

.bx--checkbox:checked:disabled+.bx--checkbox-label::before,.bx--checkbox:indeterminate:disabled+.bx--checkbox-label::before,.bx--checkbox-label[data-contained-checkbox-state=true][data-contained-checkbox-disabled=true]::before,.bx--checkbox-label[data-contained-checkbox-state=mixed][data-contained-checkbox-disabled=true]::before{
  background-color:#c6c6c6
}

.bx--checkbox-label-text.bx--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:6.25rem;
  height:1rem;
  margin:.0625rem 0 0 .375rem
}

.bx--checkbox-label-text.bx--skeleton:hover,.bx--checkbox-label-text.bx--skeleton:focus,.bx--checkbox-label-text.bx--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--checkbox-label-text.bx--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--checkbox-label-text.bx--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--checkbox--inline{
  position:relative
}

@-webkit-keyframes hide-feedback{
  0%{
    opacity:1;
    visibility:inherit
  }

  100%{
    opacity:0;
    visibility:hidden
  }
}

@keyframes hide-feedback{
  0%{
    opacity:1;
    visibility:inherit
  }

  100%{
    opacity:0;
    visibility:hidden
  }
}

@-webkit-keyframes show-feedback{
  0%{
    opacity:0;
    visibility:hidden
  }

  100%{
    opacity:1;
    visibility:inherit
  }
}

@keyframes show-feedback{
  0%{
    opacity:0;
    visibility:hidden
  }

  100%{
    opacity:1;
    visibility:inherit
  }
}

.bx--snippet--disabled,.bx--snippet--disabled .bx--btn.bx--snippet-btn--expand{
  background-color:#fff;
  color:#c6c6c6
}

.bx--snippet--disabled .bx--snippet-btn--expand:hover,.bx--snippet--disabled .bx--copy-btn:hover{
  background-color:#fff;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--snippet--disabled .bx--snippet__icon,.bx--snippet--disabled .bx--snippet-btn--expand .bx--icon-chevron--down{
  fill:#c6c6c6
}

.bx--snippet code{
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px
}

.bx--snippet--inline{
  position:relative;
  display:inline;
  padding:0;
  border:2px solid transparent;
  background-color:#fff;
  border-radius:4px;
  color:#161616;
  cursor:pointer
}

.bx--snippet--inline:hover{
  background-color:#e0e0e0
}

.bx--snippet--inline:active{
  background-color:#c6c6c6
}

.bx--snippet--inline:focus{
  border:2px solid #0f62fe;
  outline:none
}

.bx--snippet--inline::before{
  position:absolute;
  z-index:6000;
  width:0;
  height:0;
  border-style:solid;
  content:"";
  display:none
}

.bx--snippet--inline .bx--copy-btn__feedback{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:none;
  overflow:visible;
  box-sizing:content-box;
  margin:auto;
  clip:auto
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--snippet--inline .bx--copy-btn__feedback{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--snippet--inline .bx--copy-btn__feedback{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--snippet--inline .bx--copy-btn__feedback{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--snippet--inline .bx--copy-btn__feedback{
    border:1px solid transparent
  }
}

.bx--snippet--inline .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--snippet--inline::before,.bx--snippet--inline::after,.bx--snippet--inline .bx--assistive-text,.bx--snippet--inline+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--snippet--inline::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--snippet--inline::after,.bx--snippet--inline .bx--assistive-text,.bx--snippet--inline+.bx--assistive-text{
  bottom:-0.8125rem;
  transform:translate(-50%, 100%)
}

.bx--snippet--inline.bx--copy-btn--animating::before,.bx--snippet--inline.bx--copy-btn--animating .bx--copy-btn__feedback{
  display:block
}

.bx--snippet--inline.bx--copy-btn--animating.bx--copy-btn--fade-out::before,.bx--snippet--inline.bx--copy-btn--animating.bx--copy-btn--fade-out .bx--copy-btn__feedback{
  -webkit-animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) hide-feedback;
  animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) hide-feedback
}

.bx--snippet--inline.bx--copy-btn--animating.bx--copy-btn--fade-in::before,.bx--snippet--inline.bx--copy-btn--animating.bx--copy-btn--fade-in .bx--copy-btn__feedback{
  -webkit-animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) show-feedback;
  animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) show-feedback
}

.bx--snippet--inline code{
  padding:0 .5rem
}

.bx--snippet--inline.bx--snippet--no-copy{
  display:inline-block
}

.bx--snippet--inline.bx--snippet--no-copy:hover{
  background-color:#fff;
  cursor:auto
}

.bx--snippet--light.bx--snippet--inline.bx--snippet--no-copy:hover{
  background-color:#f4f4f4;
  cursor:auto
}

.bx--snippet--single{
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  position:relative;
  width:100%;
  max-width:48rem;
  background-color:#fff;
  display:flex;
  height:2.5rem;
  align-items:center;
  padding-right:2.5rem
}

.bx--snippet--single.bx--snippet--no-copy{
  padding:0
}

.bx--snippet--single.bx--snippet--no-copy::after{
  right:1rem
}

.bx--snippet--single .bx--snippet-container{
  position:relative;
  display:flex;
  height:100%;
  align-items:center;
  padding-left:1rem;
  overflow-x:auto
}

.bx--snippet--single .bx--snippet-container:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--snippet--single .bx--snippet-container:focus{
    outline-style:dotted
  }
}

.bx--snippet--single pre{
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  padding-right:.5rem
}

.bx--snippet--single pre,.bx--snippet--inline code{
  white-space:pre
}

.bx--snippet--multi{
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  position:relative;
  width:100%;
  max-width:48rem;
  background-color:#fff;
  display:flex;
  padding:1rem
}

.bx--snippet--multi .bx--snippet-container{
  position:relative;
  min-height:100%;
  max-height:100%;
  order:1;
  overflow-y:auto;
  transition:max-height 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--snippet--multi.bx--snippet--expand .bx--snippet-container{
  padding-bottom:1rem;
  transition:max-height 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--snippet--multi.bx--snippet--wraptext pre{
  white-space:pre-wrap;
  word-wrap:break-word
}

.bx--snippet--multi .bx--snippet-container pre{
  padding-right:2.5rem;
  padding-bottom:1.5rem;
  overflow-x:auto
}

.bx--snippet--multi.bx--snippet--no-copy .bx--snippet-container pre{
  padding-right:0
}

.bx--snippet--multi.bx--snippet--expand .bx--snippet-container pre{
  overflow-x:auto
}

.bx--snippet--multi .bx--snippet-container pre::after{
  position:absolute;
  top:0;
  right:0;
  width:1rem;
  height:100%;
  background-image:linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);
  content:""
}

.bx--snippet--multi .bx--snippet-container pre code{
  overflow:hidden
}

.bx--snippet__icon{
  width:1rem;
  height:1rem;
  fill:#161616;
  transition:all 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--snippet-button{
  position:absolute;
  top:0;
  right:0;
  display:flex;
  overflow:visible;
  width:2.5rem;
  height:2.5rem;
  align-items:center;
  justify-content:center;
  padding:0;
  border:none;
  background-color:#fff;
  cursor:pointer;
  outline:none
}

.bx--snippet-button:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  outline-color:#0f62fe
}

@media screen and (prefers-contrast){
  .bx--snippet-button:focus{
    outline-style:dotted
  }
}

.bx--snippet--multi .bx--snippet-button{
  top:.5rem;
  right:.5rem;
  width:2rem;
  height:2rem
}

.bx--snippet-button:hover{
  background:#e5e5e5
}

.bx--snippet-button:active{
  background-color:#c6c6c6
}

.bx--btn--copy__feedback{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  font-family:'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  z-index:6000;
  top:.75rem;
  right:1.25rem;
  left:inherit;
  font-weight:400
}

.bx--btn--copy__feedback::before,.bx--btn--copy__feedback::after{
  background:#393939
}

.bx--btn--copy__feedback::after{
  border:none
}

.bx--snippet .bx--copy-btn{
  position:absolute;
  top:0;
  right:0;
  font-family:'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif
}

.bx--snippet-btn--expand{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  font-family:'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  position:absolute;
  z-index:10;
  right:0;
  bottom:0;
  display:inline-flex;
  align-items:center;
  padding:.5rem 1rem;
  border:0;
  background-color:#fff;
  color:#161616
}

.bx--snippet-btn--expand .bx--snippet-btn--text{
  position:relative;
  top:-0.0625rem
}

.bx--snippet-btn--expand--hide.bx--snippet-btn--expand{
  display:none
}

.bx--snippet-btn--expand .bx--icon-chevron--down{
  margin-left:.5rem;
  fill:#161616;
  transform:rotate(0deg);
  transition:150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--snippet-btn--expand:hover{
  background:#e5e5e5;
  color:#161616
}

.bx--snippet-btn--expand:active{
  background-color:#c6c6c6
}

.bx--snippet-btn--expand:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  border-color:transparent
}

@media screen and (prefers-contrast){
  .bx--snippet-btn--expand:focus{
    outline-style:dotted
  }
}

.bx--snippet--expand .bx--snippet-btn--expand .bx--icon-chevron--down{
  transform:rotate(180deg);
  transition:transform 240ms
}

.bx--snippet--light,.bx--snippet--light .bx--snippet-button,.bx--snippet--light .bx--btn.bx--snippet-btn--expand,.bx--snippet--light .bx--copy-btn{
  background-color:#f4f4f4
}

.bx--snippet--light.bx--snippet--inline:hover,.bx--snippet--light .bx--snippet-button:hover,.bx--snippet--light .bx--btn.bx--snippet-btn--expand:hover,.bx--snippet--light .bx--copy-btn:hover{
  background-color:#e5e5e5
}

.bx--snippet--light.bx--snippet--inline:active,.bx--snippet--light .bx--snippet-button:active,.bx--snippet--light .bx--btn.bx--snippet-btn--expand:active,.bx--snippet--light .bx--copy-btn:active{
  background-color:#c6c6c6
}

.bx--snippet--light.bx--snippet--single::after,.bx--snippet--light.bx--snippet--multi .bx--snippet-container pre::after{
  background-image:linear-gradient(to right, rgba(244, 244, 244, 0), #f4f4f4)
}

.bx--snippet.bx--skeleton .bx--snippet-container{
  width:100%;
  height:100%
}

.bx--snippet-button .bx--btn--copy__feedback{
  top:3.175rem;
  right:auto;
  left:50%
}

.bx--snippet-button .bx--btn--copy__feedback::before{
  top:0
}

.bx--snippet-button .bx--btn--copy__feedback::after{
  top:-0.25rem
}

.bx--snippet--multi .bx--copy-btn{
  z-index:10;
  top:.5rem;
  right:.5rem;
  width:2rem;
  height:2rem
}

.bx--snippet--multi .bx--snippet-button .bx--btn--copy__feedback{
  top:2.675rem
}

.bx--snippet--inline .bx--btn--copy__feedback{
  top:calc(100% - 0.25rem);
  right:auto;
  left:50%
}

.bx--snippet__overflow-indicator--left,.bx--snippet__overflow-indicator--right{
  z-index:1;
  width:1rem;
  flex:1 0 auto
}

.bx--snippet__overflow-indicator--left{
  order:0;
  margin-right:-1rem;
  background-image:linear-gradient(to left, transparent, #ffffff)
}

.bx--snippet__overflow-indicator--right{
  order:2;
  margin-left:-1rem;
  background-image:linear-gradient(to right, transparent, #ffffff)
}

.bx--snippet--single .bx--snippet__overflow-indicator--right,.bx--snippet--single .bx--snippet__overflow-indicator--left{
  position:absolute;
  width:2rem;
  height:calc(100% - 0.25rem)
}

.bx--snippet--single .bx--snippet__overflow-indicator--right{
  right:2.5rem
}

.bx--snippet--single.bx--snippet--no-copy .bx--snippet__overflow-indicator--right{
  right:0
}

.bx--snippet--single .bx--snippet-container:focus~.bx--snippet__overflow-indicator--right{
  right:calc(2.5rem + 0.125rem)
}

.bx--snippet--single .bx--snippet-container:focus+.bx--snippet__overflow-indicator--left{
  left:.125rem
}

.bx--snippet--light .bx--snippet__overflow-indicator--left{
  background-image:linear-gradient(to left, transparent, #f4f4f4)
}

.bx--snippet--light .bx--snippet__overflow-indicator--right{
  background-image:linear-gradient(to right, transparent, #f4f4f4)
}

@media not all and (-webkit-min-device-pixel-ratio: 0), not all and (min-resolution: 0.001dpcm){
  @supports(-webkit-appearance: none) and (stroke-color: transparent){
    .bx--snippet__overflow-indicator--left{
      background-image:linear-gradient(to left, rgba(255, 255, 255, 0), #ffffff)
    }

    .bx--snippet__overflow-indicator--right{
      background-image:linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff)
    }
  }
}

.bx--snippet--multi.bx--skeleton{
  height:6.125rem
}

.bx--snippet--single.bx--skeleton{
  height:3.5rem
}

.bx--snippet.bx--skeleton span{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  display:block;
  width:100%;
  height:1rem;
  margin-top:.5rem
}

.bx--snippet.bx--skeleton span:hover,.bx--snippet.bx--skeleton span:focus,.bx--snippet.bx--skeleton span:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--snippet.bx--skeleton span::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--snippet.bx--skeleton span::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--snippet.bx--skeleton span:first-child{
  margin:0
}

.bx--snippet.bx--skeleton span:nth-child(2){
  width:85%
}

.bx--snippet.bx--skeleton span:nth-child(3){
  width:95%
}

.bx--snippet--single.bx--skeleton .bx--snippet-container{
  padding-bottom:0
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--snippet__icon{
    fill:ButtonText
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--snippet--inline:focus{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--snippet--single,.bx--snippet--multi{
    outline:1px solid transparent
  }
}

.bx--list-box__wrapper--inline{
  display:inline-grid;
  align-items:center;
  grid-gap:.25rem;
  grid-template:auto auto/auto auto
}

.bx--list-box__wrapper--inline .bx--label{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

.bx--list-box__wrapper--inline .bx--label,.bx--list-box__wrapper--inline .bx--form__helper-text,.bx--list-box__wrapper--inline .bx--form-requirement{
  margin:0
}

.bx--list-box__wrapper--inline .bx--form__helper-text{
  max-width:none
}

.bx--list-box__wrapper--inline .bx--form-requirement{
  grid-column:2
}

.bx--list-box{
  position:relative;
  width:100%;
  height:2.5rem;
  max-height:2.5rem;
  border:none;
  border-bottom:1px solid #8d8d8d;
  background-color:#fff;
  color:#161616;
  cursor:pointer;
  transition:all 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--list-box:hover{
  background-color:#e5e5e5
}

.bx--list-box--xl,.bx--list-box--lg{
  height:3rem;
  max-height:3rem
}

.bx--list-box--sm{
  height:2rem;
  max-height:2rem
}

.bx--list-box--expanded{
  border-bottom-color:#e0e0e0
}

.bx--list-box--expanded:hover{
  background-color:#fff
}

.bx--list-box--expanded:hover.bx--list-box--light:hover{
  background-color:#f4f4f4
}

.bx--list-box .bx--text-input{
  min-width:0;
  height:100%
}

.bx--list-box__invalid-icon{
  position:absolute;
  top:50%;
  right:2.5rem;
  fill:#da1e28;
  transform:translateY(-50%)
}

.bx--list-box__invalid-icon--warning{
  fill:#f1c21b
}

.bx--list-box__invalid-icon--warning path[fill]{
  fill:#000;
  opacity:1
}

.bx--list-box[data-invalid] .bx--list-box__field,.bx--list-box.bx--list-box--warning .bx--list-box__field{
  padding-right:4rem;
  border-bottom:0
}

.bx--list-box[data-invalid].bx--list-box--inline .bx--list-box__field{
  padding-right:3.5rem
}

.bx--list-box--light{
  background-color:#f4f4f4
}

.bx--list-box--light:hover{
  background-color:#e5e5e5
}

.bx--list-box--light .bx--list-box__menu{
  background:#f4f4f4
}

.bx--list-box--light .bx--list-box__menu-item__option{
  border-top-color:#e0e0e0
}

.bx--list-box--light.bx--list-box--expanded{
  border-bottom-color:transparent
}

.bx--list-box--disabled:hover{
  background-color:#fff
}

.bx--list-box--light.bx--list-box--disabled{
  background-color:#f4f4f4
}

.bx--list-box--disabled,.bx--list-box--disabled .bx--list-box__field,.bx--list-box--disabled .bx--list-box__field:focus{
  border-bottom-color:transparent;
  outline:none
}

.bx--list-box--disabled .bx--list-box__label,.bx--list-box--disabled.bx--list-box--inline .bx--list-box__label{
  color:#c6c6c6
}

.bx--list-box--disabled .bx--list-box__menu-icon>svg,.bx--list-box--disabled .bx--list-box__selection>svg{
  fill:#c6c6c6
}

.bx--list-box--disabled,.bx--list-box--disabled .bx--list-box__field,.bx--list-box--disabled .bx--list-box__menu-icon{
  cursor:not-allowed
}

.bx--list-box--disabled .bx--list-box__menu-item,.bx--list-box--disabled .bx--list-box__menu-item:hover,.bx--list-box--disabled .bx--list-box__menu-item--highlighted{
  color:#c6c6c6;
  text-decoration:none
}

.bx--list-box--disabled .bx--list-box__selection:hover{
  cursor:not-allowed
}

.bx--list-box--disabled.bx--list-box[data-invalid] .bx--list-box__field{
  padding-right:3rem
}

.bx--list-box--disabled.bx--list-box[data-invalid].bx--list-box--inline .bx--list-box__field{
  padding-right:2rem
}

.bx--list-box.bx--list-box--inline{
  border-width:0;
  background-color:transparent
}

.bx--list-box.bx--list-box--inline:hover{
  background-color:#e5e5e5
}

.bx--list-box.bx--list-box--inline.bx--list-box--expanded{
  border-bottom-width:0
}

.bx--list-box.bx--list-box--inline.bx--list-box--expanded .bx--list-box__field[aria-expanded=true]{
  border-width:0
}

.bx--list-box.bx--list-box--inline.bx--list-box--disabled:hover{
  background-color:transparent
}

.bx--list-box.bx--list-box--inline.bx--list-box--expanded:hover{
  background-color:#f4f4f4
}

.bx--list-box.bx--list-box--inline .bx--list-box__field{
  padding:0 2rem 0 .5rem
}

.bx--list-box.bx--list-box--inline .bx--list-box__menu-icon{
  right:.5rem
}

.bx--list-box.bx--list-box--inline .bx--list-box__invalid-icon{
  right:2rem
}

.bx--list-box--inline .bx--list-box__label{
  color:#161616
}

.bx--list-box--inline .bx--list-box__field{
  height:100%
}

.bx--dropdown--inline .bx--list-box__field{
  max-width:30rem
}

.bx--dropdown--inline .bx--list-box__menu{
  min-width:18rem;
  max-width:30rem
}

.bx--list-box__field{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  position:relative;
  display:inline-flex;
  overflow:hidden;
  height:calc(100% + 1px);
  align-items:center;
  padding:0 3rem 0 1rem;
  cursor:pointer;
  outline:none;
  text-overflow:ellipsis;
  vertical-align:top;
  white-space:nowrap
}

.bx--list-box__field::-moz-focus-inner{
  border:0
}

.bx--list-box__field:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--list-box__field:focus{
    outline-style:dotted
  }
}

.bx--list-box__field[disabled]{
  color:#c6c6c6;
  outline:none
}

.bx--list-box__field .bx--text-input{
  padding-right:4.5rem
}

.bx--list-box[data-invalid] .bx--list-box__field .bx--text-input,.bx--list-box--warning .bx--list-box__field .bx--text-input{
  padding-right:6.125rem
}

.bx--list-box[data-invalid] .bx--list-box__field .bx--text-input+.bx--list-box__invalid-icon,.bx--list-box--warning .bx--list-box__field .bx--text-input+.bx--list-box__invalid-icon{
  right:4.125rem
}

.bx--list-box__field .bx--text-input--empty{
  padding-right:3rem
}

.bx--list-box[data-invalid] .bx--list-box__field .bx--text-input--empty,.bx--list-box--warning .bx--list-box__field .bx--text-input--empty{
  padding-right:4.5rem
}

.bx--list-box[data-invalid] .bx--list-box__field .bx--text-input--empty+.bx--list-box__invalid-icon,.bx--list-box--warning .bx--list-box__field .bx--text-input--empty+.bx--list-box__invalid-icon{
  right:2.5rem
}

.bx--list-box__label{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  overflow:hidden;
  color:#161616;
  text-overflow:ellipsis;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  white-space:nowrap
}

.bx--list-box__menu-icon{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  position:absolute;
  right:1rem;
  display:flex;
  width:1.5rem;
  height:1.5rem;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  outline:none;
  transition:transform 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--list-box__menu-icon::-moz-focus-inner{
  border:0
}

.bx--list-box__menu-icon>svg{
  fill:#161616
}

.bx--list-box__menu-icon--open{
  width:1.5rem;
  justify-content:center;
  transform:rotate(180deg)
}

.bx--list-box__selection{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  position:absolute;
  top:50%;
  right:2.5rem;
  display:flex;
  width:1.5rem;
  height:1.5rem;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transform:translateY(-50%);
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

.bx--list-box__selection::-moz-focus-inner{
  border:0
}

.bx--list-box__selection:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--list-box__selection:focus{
    outline-style:dotted
  }
}

.bx--list-box__selection:focus:hover{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--list-box__selection:focus:hover{
    outline-style:dotted
  }
}

.bx--list-box__selection>svg{
  fill:#161616
}

.bx--list-box--disabled .bx--list-box__selection:focus{
  outline:none
}

.bx--list-box__selection--multi{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  position:static;
  top:auto;
  display:flex;
  width:auto;
  height:1.5rem;
  align-items:center;
  justify-content:space-between;
  padding:.5rem;
  padding-right:.125rem;
  margin-right:.625rem;
  background-color:#393939;
  border-radius:.75rem;
  color:#fff;
  line-height:0;
  transform:none
}

.bx--list-box__selection--multi>svg{
  width:1.25rem;
  height:1.25rem;
  padding:.125rem;
  margin-left:.25rem;
  fill:#fff
}

.bx--list-box__selection--multi>svg:hover{
  background-color:#4c4c4c;
  border-radius:50%
}

.bx--list-box--disabled .bx--list-box__selection--multi{
  background-color:#c6c6c6;
  color:#fff
}

.bx--list-box--disabled .bx--list-box__selection--multi.bx--tag--interactive:hover,.bx--list-box--disabled .bx--list-box__selection--multi .bx--tag__close-icon:hover{
  background-color:#c6c6c6
}

.bx--list-box--disabled .bx--list-box__selection--multi>svg{
  fill:#fff
}

.bx--list-box--disabled .bx--list-box__selection--multi>svg:hover{
  background-color:initial
}

.bx--list-box__selection--multi:hover{
  outline:none
}

.bx--list-box__menu{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  position:absolute;
  z-index:9100;
  right:0;
  left:0;
  width:100%;
  background-color:#fff;
  overflow-y:auto;
  transition:max-height 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--list-box__menu:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--list-box__menu:focus{
    outline-style:dotted
  }
}

.bx--list-box .bx--list-box__field[aria-expanded=false]+.bx--list-box__menu{
  max-height:0
}

.bx--list-box--expanded .bx--list-box__menu{
  max-height:13.75rem
}

.bx--list-box--expanded.bx--list-box--xl .bx--list-box__menu,.bx--list-box--expanded.bx--list-box--lg .bx--list-box__menu{
  max-height:16.5rem
}

.bx--list-box--expanded.bx--list-box--sm .bx--list-box__menu{
  max-height:11rem
}

.bx--list-box__menu-item{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  position:relative;
  height:2.5rem;
  color:#525252;
  cursor:pointer;
  transition:background 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

.bx--list-box__menu-item:hover{
  background-color:#e5e5e5
}

.bx--list-box__menu-item:active{
  background-color:#e0e0e0
}

.bx--list-box--light .bx--list-box__menu-item:hover{
  background-color:#e5e5e5
}

.bx--list-box--sm .bx--list-box__menu-item{
  height:2rem
}

.bx--list-box--xl .bx--list-box__menu-item,.bx--list-box--lg .bx--list-box__menu-item{
  height:3rem
}

.bx--list-box--disabled .bx--list-box__menu-item:hover{
  background-color:transparent
}

.bx--list-box--light .bx--list-box__menu-item:active{
  background-color:#e0e0e0
}

.bx--list-box--disabled .bx--list-box__menu-item__option:hover{
  border-top-color:#e0e0e0
}

.bx--list-box__menu-item:first-of-type .bx--list-box__menu-item__option{
  border-top-color:transparent
}

.bx--list-box__menu-item:hover .bx--list-box__menu-item__option{
  color:#161616
}

.bx--list-box__menu-item:hover+.bx--list-box__menu-item .bx--list-box__menu-item__option{
  border-top-color:transparent
}

.bx--list-box--disabled .bx--list-box__menu-item:hover+.bx--list-box__menu-item .bx--list-box__menu-item__option{
  border-top-color:#e0e0e0
}

.bx--list-box__menu-item__option{
  outline:2px solid transparent;
  outline-offset:-2px;
  display:block;
  overflow:hidden;
  height:2.5rem;
  padding:.6875rem 0;
  padding-right:1.5rem;
  border-top:1px solid transparent;
  border-top-color:#e0e0e0;
  border-bottom:1px solid transparent;
  margin:0 1rem;
  color:#525252;
  font-weight:normal;
  line-height:1rem;
  text-decoration:none;
  text-overflow:ellipsis;
  transition:border-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  white-space:nowrap
}

.bx--list-box__menu-item__option:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  padding:.6875rem 1rem;
  border-color:transparent;
  margin:0
}

@media screen and (prefers-contrast){
  .bx--list-box__menu-item__option:focus{
    outline-style:dotted
  }
}

.bx--list-box__menu-item__option:hover{
  border-color:transparent;
  color:#161616
}

.bx--list-box--sm .bx--list-box__menu-item__option{
  height:2rem;
  padding-top:.4375rem;
  padding-bottom:.4375rem
}

.bx--list-box--xl .bx--list-box__menu-item__option,.bx--list-box--lg .bx--list-box__menu-item__option{
  height:3rem;
  padding-top:.9375rem;
  padding-bottom:.9375rem
}

.bx--list-box--disabled .bx--list-box__menu-item:hover .bx--list-box__menu-item__option,.bx--list-box--disabled .bx--list-box__menu-item__option{
  color:#c6c6c6
}

.bx--list-box__menu-item[disabled],.bx--list-box__menu-item[disabled] *,.bx--list-box__menu-item[disabled] .bx--list-box__menu-item__option,.bx--list-box__menu-item[disabled]:hover{
  color:#c6c6c6;
  cursor:not-allowed;
  outline:none
}

.bx--list-box__menu-item[disabled]:hover{
  background-color:revert
}

.bx--list-box__menu-item[disabled] .bx--checkbox-label::before{
  border-color:#c6c6c6
}

.bx--list-box__menu-item[disabled] .bx--list-box__menu-item__option{
  border-top-color:#e0e0e0
}

.bx--list-box__menu-item[disabled]:hover+.bx--list-box__menu-item .bx--list-box__menu-item__option{
  border-top-color:#e0e0e0
}

.bx--list-box.bx--list-box--inline .bx--list-box__menu-item__option{
  margin:0 .5rem
}

.bx--list-box.bx--list-box--inline .bx--list-box__menu-item__option:focus{
  padding-right:.5rem;
  padding-left:.5rem;
  margin:0
}

.bx--list-box__menu-item--highlighted{
  border-color:transparent;
  background-color:#e5e5e5;
  color:#161616
}

.bx--list-box__menu-item--highlighted .bx--list-box__menu-item__option,.bx--list-box__menu-item--highlighted+.bx--list-box__menu-item .bx--list-box__menu-item__option{
  border-top-color:transparent
}

.bx--list-box__menu-item--highlighted .bx--list-box__menu-item__option{
  color:#161616
}

.bx--list-box__menu-item--active{
  border-bottom-color:#e0e0e0;
  background-color:#e0e0e0;
  color:#161616
}

.bx--list-box--light .bx--list-box__menu-item--active{
  border-bottom-color:#e0e0e0;
  background-color:#e0e0e0
}

.bx--list-box__menu-item--active:hover,.bx--list-box__menu-item--active.bx--list-box__menu-item--highlighted{
  border-bottom-color:#cacaca;
  background-color:#cacaca
}

.bx--list-box__menu-item--active .bx--list-box__menu-item__option{
  color:#161616
}

.bx--list-box__menu-item--active+.bx--list-box__menu-item>.bx--list-box__menu-item__option{
  border-top-color:transparent
}

.bx--list-box__menu-item__selected-icon{
  position:absolute;
  top:50%;
  right:1rem;
  display:none;
  fill:#161616;
  transform:translateY(-50%)
}

.bx--list-box--inline .bx--list-box__menu-item__selected-icon{
  right:.5rem
}

.bx--list-box__menu-item--active .bx--list-box__menu-item__selected-icon{
  display:block
}

.bx--list-box__menu-item .bx--checkbox-label{
  width:100%
}

.bx--list-box__menu-item .bx--checkbox-label-text{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--list-box--up .bx--list-box__menu{
  bottom:2.5rem
}

.bx--list-box--up.bx--dropdown--sm .bx--list-box__menu,.bx--list-box--up.bx--list-box--sm .bx--list-box__menu,.bx--list-box--up .bx--list-box--sm .bx--list-box__menu{
  bottom:2rem
}

.bx--list-box--up.bx--dropdown--xl .bx--list-box__menu,.bx--list-box--up.bx--list-box--xl .bx--list-box__menu,.bx--list-box--up.bx--dropdown--lg .bx--list-box__menu,.bx--list-box--up.bx--list-box--lg .bx--list-box__menu,.bx--list-box--up .bx--list-box--lg .bx--list-box__menu{
  bottom:3rem
}

.bx--list-box input[role=combobox],.bx--list-box input[type=text]{
  min-width:0;
  background-color:inherit
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--list-box__field,.bx--list-box__menu,.bx--multi-select .bx--tag--filter{
    outline:1px solid transparent
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--list-box__field:focus,.bx--multi-select .bx--tag__close-icon:focus,.bx--list-box__menu-item--highlighted .bx--list-box__menu-item__option{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--list-box__menu-icon>svg,.bx--list-box__selection>svg,.bx--list-box__selection--multi>svg{
    fill:ButtonText
  }
}

.bx--combo-box:hover{
  background-color:#fff
}

.bx--combo-box.bx--list-box--light:hover{
  background-color:#f4f4f4
}

.bx--combo-box .bx--text-input::-ms-clear{
  display:none
}

.bx--combo-box.bx--list-box--expanded .bx--text-input{
  border-bottom-color:#e0e0e0
}

.bx--combo-box .bx--list-box__field,.bx--combo-box.bx--list-box[data-invalid] .bx--list-box__field,.bx--combo-box.bx--list-box--warning .bx--list-box__field,.bx--combo-box.bx--list-box--disabled.bx--list-box[data-invalid] .bx--list-box__field,.bx--combo-box.bx--list-box--disabled.bx--list-box--warning .bx--list-box__field{
  padding:0
}

.bx--content-switcher{
  display:flex;
  width:100%;
  height:2.5rem;
  justify-content:space-evenly
}

.bx--content-switcher--sm{
  height:2rem
}

.bx--content-switcher--xl,.bx--content-switcher--lg{
  height:3rem
}

.bx--content-switcher-btn{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  outline:2px solid transparent;
  outline-offset:-2px;
  position:relative;
  display:inline-flex;
  overflow:hidden;
  width:100%;
  align-items:center;
  padding:.5rem 1rem;
  border:none;
  border-top:.0625rem solid #161616;
  border-bottom:.0625rem solid #161616;
  margin:0;
  background-color:transparent;
  color:#525252;
  text-align:left;
  text-decoration:none;
  transition:all 150ms cubic-bezier(0.2, 0, 0.38, 0.9);
  white-space:nowrap
}

.bx--content-switcher-btn::after{
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100%;
  height:100%;
  background-color:#161616;
  content:"";
  transform:scaleY(0);
  transform-origin:bottom;
  transition:all 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

@media(prefers-reduced-motion: reduce){
  .bx--content-switcher-btn::after{
    transition:none
  }
}

.bx--content-switcher-btn:disabled::after{
  display:none
}

.bx--content-switcher-btn:focus{
  z-index:3;
  border-color:#0f62fe;
  box-shadow:inset 0 0 0 2px #0f62fe,inset 0 0 0 3px #fff
}

.bx--content-switcher-btn:focus::after{
  -webkit-clip-path:inset(3px 3px 3px 3px);
  clip-path:inset(3px 3px 3px 3px)
}

.bx--content-switcher-btn:hover{
  color:#161616;
  cursor:pointer
}

.bx--content-switcher-btn:hover,.bx--content-switcher-btn:active{
  z-index:3;
  background-color:#e5e5e5;
  color:#161616
}

.bx--content-switcher-btn:disabled{
  border-color:#fff;
  background-color:transparent;
  color:#c6c6c6
}

.bx--content-switcher-btn:disabled:hover{
  cursor:not-allowed
}

.bx--content-switcher-btn:disabled:first-child,.bx--content-switcher-btn:disabled:last-child{
  border-color:#fff
}

.bx--content-switcher-btn:first-child{
  border-left:.0625rem solid #161616;
  border-bottom-left-radius:.25rem;
  border-top-left-radius:.25rem
}

.bx--content-switcher-btn:last-child{
  border-right:.0625rem solid #161616;
  border-bottom-right-radius:.25rem;
  border-top-right-radius:.25rem
}

.bx--content-switcher--selected,.bx--content-switcher--selected:first-child,.bx--content-switcher--selected:last-child{
  border:0
}

.bx--content-switcher-btn::before{
  position:absolute;
  z-index:2;
  left:0;
  display:block;
  width:.0625rem;
  height:1rem;
  background-color:#e0e0e0;
  content:""
}

.bx--content-switcher-btn:first-of-type::before{
  display:none
}

.bx--content-switcher-btn:focus::before,.bx--content-switcher-btn:focus+.bx--content-switcher-btn::before,.bx--content-switcher-btn:hover::before,.bx--content-switcher-btn:hover+.bx--content-switcher-btn::before,.bx--content-switcher--selected::before,.bx--content-switcher--selected+.bx--content-switcher-btn::before{
  background-color:transparent
}

.bx--content-switcher-btn:disabled::before,.bx--content-switcher-btn:disabled:hover+.bx--content-switcher-btn:disabled::before{
  background-color:#fff
}

.bx--content-switcher-btn.bx--content-switcher--selected:disabled+.bx--content-switcher-btn::before,.bx--content-switcher-btn.bx--content-switcher--selected:disabled:hover+.bx--content-switcher-btn::before{
  background-color:transparent
}

.bx--content-switcher__icon{
  fill:#525252;
  transition:fill 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--content-switcher__icon+span{
  margin-left:.5rem
}

.bx--content-switcher__label{
  z-index:1;
  overflow:hidden;
  max-width:100%;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--content-switcher-btn:hover .bx--content-switcher__icon,.bx--content-switcher-btn:focus .bx--content-switcher__icon{
  fill:#161616
}

.bx--content-switcher-btn.bx--content-switcher--selected{
  z-index:3;
  background-color:#161616;
  color:#fff
}

.bx--content-switcher-btn.bx--content-switcher--selected::after{
  transform:scaleY(1)
}

.bx--content-switcher-btn.bx--content-switcher--selected:disabled{
  background-color:#8d8d8d;
  color:#c6c6c6
}

.bx--content-switcher-btn.bx--content-switcher--selected .bx--content-switcher__icon{
  fill:#fff
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--content-switcher-btn:focus{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@keyframes hide-feedback{
  0%{
    opacity:1;
    visibility:inherit
  }

  100%{
    opacity:0;
    visibility:hidden
  }
}

@keyframes show-feedback{
  0%{
    opacity:0;
    visibility:hidden
  }

  100%{
    opacity:1;
    visibility:inherit
  }
}

.bx--btn--copy{
  position:relative;
  overflow:visible
}

.bx--btn--copy .bx--btn__icon{
  margin-left:.3125rem
}

.bx--btn--copy__feedback{
  position:absolute;
  top:1.2rem;
  left:50%;
  display:none
}

.bx--btn--copy__feedback::before{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  z-index:2;
  top:1.1rem;
  padding:.25rem;
  border-radius:4px;
  color:#fff;
  content:attr(data-feedback);
  font-weight:400;
  pointer-events:none;
  transform:translateX(-50%);
  white-space:nowrap
}

.bx--btn--copy__feedback::after{
  z-index:1;
  top:.85rem;
  left:-0.3rem;
  width:.6rem;
  height:.6rem;
  border-right:1px solid #393939;
  border-bottom:1px solid #393939;
  content:"";
  transform:rotate(-135deg)
}

.bx--btn--copy__feedback::before,.bx--btn--copy__feedback::after{
  position:absolute;
  display:block;
  background:#393939
}

.bx--btn--copy__feedback--displayed{
  display:inline-flex
}

.bx--copy-btn{
  position:relative;
  display:flex;
  width:2.5rem;
  height:2.5rem;
  align-items:center;
  justify-content:center;
  padding:0;
  border:none;
  background-color:#fff;
  cursor:pointer
}

.bx--copy-btn:hover{
  background-color:#e5e5e5
}

.bx--copy-btn:active{
  background-color:#c6c6c6
}

.bx--copy-btn::before{
  position:absolute;
  z-index:6000;
  width:0;
  height:0;
  border-style:solid;
  content:"";
  display:none
}

.bx--copy-btn .bx--copy-btn__feedback{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:none;
  overflow:visible;
  box-sizing:content-box;
  margin:auto;
  clip:auto
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--copy-btn .bx--copy-btn__feedback{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--copy-btn .bx--copy-btn__feedback{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--copy-btn .bx--copy-btn__feedback{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--copy-btn .bx--copy-btn__feedback{
    border:1px solid transparent
  }
}

.bx--copy-btn .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--copy-btn::before,.bx--copy-btn::after,.bx--copy-btn .bx--assistive-text,.bx--copy-btn+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--copy-btn::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--copy-btn::after,.bx--copy-btn .bx--assistive-text,.bx--copy-btn+.bx--assistive-text{
  bottom:-0.8125rem;
  transform:translate(-50%, 100%)
}

.bx--copy-btn:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  outline-color:#0f62fe
}

@media screen and (prefers-contrast){
  .bx--copy-btn:focus{
    outline-style:dotted
  }
}

.bx--copy-btn.bx--copy-btn--animating::before,.bx--copy-btn.bx--copy-btn--animating .bx--copy-btn__feedback{
  display:block
}

.bx--copy-btn.bx--copy-btn--animating.bx--copy-btn--fade-out::before,.bx--copy-btn.bx--copy-btn--animating.bx--copy-btn--fade-out .bx--copy-btn__feedback{
  -webkit-animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) hide-feedback;
  animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) hide-feedback
}

.bx--copy-btn.bx--copy-btn--animating.bx--copy-btn--fade-in::before,.bx--copy-btn.bx--copy-btn--animating.bx--copy-btn--fade-in .bx--copy-btn__feedback{
  -webkit-animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) show-feedback;
  animation:110ms cubic-bezier(0.2, 0, 0.38, 0.9) show-feedback
}

.bx--copy{
  font-size:0
}

.bx--table-toolbar{
  position:relative;
  display:flex;
  width:100%;
  min-height:3rem;
  background-color:#fff
}

.bx--toolbar-content{
  display:flex;
  width:100%;
  height:3rem;
  justify-content:flex-end;
  transform:translate3d(0, 0, 0);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),-webkit-clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9),-webkit-clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--batch-actions~.bx--toolbar-content{
  -webkit-clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%);
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%)
}

.bx--toolbar-content .bx--search .bx--search-input{
  background-color:transparent
}

.bx--batch-actions~.bx--toolbar-search-container{
  display:flex;
  align-items:center;
  opacity:1;
  transition:opacity 110ms
}

.bx--toolbar-content .bx--toolbar-search-container-expandable{
  position:relative;
  width:3rem;
  height:3rem;
  box-shadow:none;
  cursor:pointer;
  transition:width 240ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 110ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--toolbar-content .bx--toolbar-search-container-expandable:hover{
  background-color:#e5e5e5
}

.bx--toolbar-search-container-expandable .bx--search-input{
  height:100%;
  cursor:pointer;
  opacity:0
}

.bx--toolbar-search-container-expandable:not(.bx--toolbar-search-container-active) .bx--search-input{
  padding:0
}

.bx--toolbar-search-container-expandable .bx--search-magnifier-icon{
  left:0;
  width:3rem;
  height:3rem;
  padding:1rem;
  fill:#161616
}

.bx--toolbar-search-container-expandable.bx--search--disabled .bx--search-magnifier-icon{
  background-color:#fff;
  cursor:not-allowed;
  transition:background-color none
}

.bx--toolbar-search-container-disabled .bx--search-input{
  cursor:not-allowed
}

.bx--toolbar-search-container-expandable.bx--search .bx--label{
  visibility:hidden
}

.bx--toolbar-search-container-expandable.bx--search .bx--search-close{
  width:3rem;
  height:3rem
}

.bx--toolbar-search-container-expandable.bx--search .bx--search-close::before{
  top:.125rem;
  height:calc(100% - 0.25rem);
  background-color:#e5e5e5
}

.bx--toolbar-search-container-expandable.bx--search .bx--search-close:focus::before{
  background-color:#0f62fe
}

.bx--toolbar-search-container-active.bx--search{
  width:100%
}

.bx--toolbar-search-container-active .bx--search-input{
  opacity:1
}

.bx--toolbar-search-container-active .bx--label,.bx--toolbar-search-container-active .bx--search-input{
  padding:0 3rem;
  cursor:text
}

.bx--toolbar-search-container-active .bx--search-input:focus+.bx--search-close{
  border:none;
  box-shadow:none;
  outline:none
}

.bx--toolbar-search-container-active .bx--search-input:not(:-moz-placeholder-shown){
  border:none;
  background-color:#e5e5e5
}

.bx--toolbar-search-container-active .bx--search-input:not(:-ms-input-placeholder){
  border:none;
  background-color:#e5e5e5
}

.bx--toolbar-search-container-active .bx--search-input:not(:placeholder-shown){
  border:none;
  background-color:#e5e5e5
}

.bx--toolbar-search-container-active .bx--search-magnifier-icon:focus,.bx--toolbar-search-container-active .bx--search-magnifier-icon:active,.bx--toolbar-search-container-active .bx--search-magnifier-icon:hover{
  border:none;
  background-color:transparent;
  outline:none
}

.bx--toolbar-search-container-persistent .bx--search-close,.bx--toolbar-search-container-persistent .bx--search-close:hover,.bx--toolbar-search-container-active .bx--search-close,.bx--toolbar-search-container-active .bx--search-close:hover{
  border:none;
  background-color:transparent
}

.bx--toolbar-search-container-persistent .bx--search-close::before{
  display:none
}

.bx--overflow-menu.bx--toolbar-action{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  display:flex;
  width:3rem;
  height:3rem;
  padding:1rem;
  cursor:pointer;
  transition:background 110ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--overflow-menu.bx--toolbar-action::-moz-focus-inner{
  border:0
}

.bx--toolbar-action{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  display:flex;
  width:3rem;
  height:3rem;
  cursor:pointer;
  transition:background 110ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--toolbar-action::-moz-focus-inner{
  border:0
}

.bx--toolbar-action:hover:not([disabled]){
  background-color:#e5e5e5
}

.bx--toolbar-action:hover[aria-expanded=true]{
  background-color:#fff
}

.bx--toolbar-action[disabled]{
  cursor:not-allowed
}

.bx--toolbar-action[disabled] .bx--toolbar-action__icon{
  cursor:not-allowed;
  fill:#c6c6c6
}

.bx--toolbar-action:focus:not([disabled]),.bx--toolbar-action:active:not([disabled]){
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--toolbar-action:focus:not([disabled]),.bx--toolbar-action:active:not([disabled]){
    outline-style:dotted
  }
}

.bx--toolbar-action:focus:not([disabled]).bx--toolbar-search-container-expandable,.bx--toolbar-action:active:not([disabled]).bx--toolbar-search-container-expandable{
  outline:none
}

.bx--toolbar-action~.bx--btn{
  max-width:none;
  margin:0;
  white-space:nowrap
}

.bx--overflow-menu--data-table{
  height:3rem
}

.bx--toolbar-action__icon{
  width:auto;
  max-width:1rem;
  height:1rem;
  fill:#161616
}

.bx--toolbar-search-container-persistent{
  position:relative;
  width:100%;
  height:3rem;
  opacity:1
}

.bx--toolbar-search-container-persistent+.bx--toolbar-content{
  position:relative;
  width:auto
}

.bx--toolbar-search-container-persistent .bx--search{
  position:initial
}

.bx--toolbar-search-container-persistent .bx--search-magnifier-icon{
  left:1rem
}

.bx--toolbar-search-container-persistent .bx--search-input{
  height:3rem;
  padding:0 3rem;
  border:none
}

.bx--toolbar-search-container-persistent .bx--search-input:focus:not([disabled]){
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--toolbar-search-container-persistent .bx--search-input:focus:not([disabled]){
    outline-style:dotted
  }
}

.bx--toolbar-search-container-persistent .bx--search-input:hover:not([disabled]){
  background-color:#e5e5e5
}

.bx--toolbar-search-container-persistent .bx--search-input:not(:-moz-placeholder-shown){
  background-color:#e5e5e5
}

.bx--toolbar-search-container-persistent .bx--search-input:not(:-ms-input-placeholder){
  background-color:#e5e5e5
}

.bx--toolbar-search-container-persistent .bx--search-input:active:not([disabled]),.bx--toolbar-search-container-persistent .bx--search-input:not(:placeholder-shown){
  background-color:#e5e5e5
}

.bx--toolbar-search-container-persistent .bx--search-close{
  width:3rem;
  height:3rem
}

.bx--batch-actions--active~.bx--toolbar-search-container,.bx--batch-actions--active~.bx--toolbar-content{
  -webkit-clip-path:polygon(0 0, 100% 0, 100% 0, 0 0);
  clip-path:polygon(0 0, 100% 0, 100% 0, 0 0);
  transform:translate3d(0, 48px, 0);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),-webkit-clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9),-webkit-clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--batch-actions{
  position:absolute;
  right:0;
  bottom:0;
  left:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:#0f62fe;
  -webkit-clip-path:polygon(0 0, 100% 0, 100% 0, 0 0);
  clip-path:polygon(0 0, 100% 0, 100% 0, 0 0);
  pointer-events:none;
  transform:translate3d(0, 48px, 0);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),opacity 110ms cubic-bezier(0.2, 0, 0.38, 0.9),-webkit-clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9),opacity 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9),opacity 110ms cubic-bezier(0.2, 0, 0.38, 0.9),-webkit-clip-path 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  will-change:transform
}

.bx--batch-actions:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--batch-actions:focus{
    outline-style:dotted
  }
}

.bx--batch-actions--active{
  overflow:auto hidden;
  -webkit-clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%);
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%);
  pointer-events:all;
  transform:translate3d(0, 0, 0)
}

.bx--action-list{
  display:flex;
  align-items:center
}

.bx--action-list .bx--btn{
  padding:calc(.875rem - 3px) 16px;
  color:#fff;
  white-space:nowrap
}

.bx--action-list .bx--btn:disabled{
  color:#8d8d8d
}

.bx--action-list .bx--btn .bx--btn__icon{
  position:static;
  margin-left:.5rem;
  fill:#fff
}

.bx--action-list .bx--btn .bx--btn__icon .st0{
  fill:none
}

.bx--batch-download{
  padding:.0625rem
}

.bx--action-list .bx--btn--primary:focus::before,.bx--action-list .bx--btn--primary::before,.bx--action-list .bx--btn--primary:focus::after,.bx--action-list .bx--btn--primary::after{
  display:none
}

.bx--action-list .bx--btn--primary:focus{
  outline:2px solid #fff;
  outline-offset:-0.125rem
}

.bx--action-list .bx--btn--primary:nth-child(3):hover+.bx--btn--primary.bx--batch-summary__cancel::before,.bx--action-list .bx--btn--primary:nth-child(3):focus+.bx--btn--primary.bx--batch-summary__cancel::before{
  opacity:0
}

.bx--btn--primary.bx--batch-summary__cancel::before{
  position:absolute;
  top:.9375rem;
  left:0;
  display:block;
  width:.0625rem;
  height:1rem;
  border:none;
  background-color:#fff;
  content:"";
  opacity:1;
  transition:opacity 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--btn--primary.bx--batch-summary__cancel:hover::before{
  opacity:0;
  transition:opacity 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--batch-summary{
  position:-webkit-sticky;
  position:sticky;
  z-index:100000;
  left:0;
  display:flex;
  min-height:3rem;
  align-items:center;
  padding:0 1rem;
  background-color:#0f62fe;
  color:#fff
}

.bx--batch-summary__scroll{
  box-shadow:.5px 0 .2px #0043ce
}

.bx--batch-summary__para{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

.bx--table-toolbar--small,.bx--table-toolbar--sm{
  height:2rem;
  min-height:2rem
}

.bx--table-toolbar--small .bx--toolbar-search-container-expandable,.bx--table-toolbar--small .bx--toolbar-search-container-persistent,.bx--table-toolbar--sm .bx--toolbar-search-container-expandable,.bx--table-toolbar--sm .bx--toolbar-search-container-persistent{
  height:2rem
}

.bx--table-toolbar--small .bx--toolbar-search-container-expandable .bx--search-input,.bx--table-toolbar--small .bx--toolbar-search-container-persistent .bx--search-input,.bx--table-toolbar--sm .bx--toolbar-search-container-expandable .bx--search-input,.bx--table-toolbar--sm .bx--toolbar-search-container-persistent .bx--search-input{
  height:2rem
}

.bx--table-toolbar--small .bx--toolbar-search-container-expandable .bx--search-close,.bx--table-toolbar--small .bx--toolbar-search-container-persistent .bx--search-close,.bx--table-toolbar--sm .bx--toolbar-search-container-expandable .bx--search-close,.bx--table-toolbar--sm .bx--toolbar-search-container-persistent .bx--search-close{
  width:2rem;
  height:2rem
}

.bx--table-toolbar--small .bx--toolbar-search-container-expandable .bx--search-magnifier-icon,.bx--table-toolbar--small .bx--toolbar-search-container-persistent .bx--search-magnifier-icon,.bx--table-toolbar--sm .bx--toolbar-search-container-expandable .bx--search-magnifier-icon,.bx--table-toolbar--sm .bx--toolbar-search-container-persistent .bx--search-magnifier-icon{
  width:2rem;
  height:2rem;
  padding:.5rem
}

.bx--table-toolbar--small .bx--toolbar-action.bx--toolbar-search-container-persistent,.bx--table-toolbar--sm .bx--toolbar-action.bx--toolbar-search-container-persistent{
  width:100%
}

.bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-magnifier-icon,.bx--table-toolbar--small .bx--toolbar-search-container-persistent .bx--search-magnifier-icon,.bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-magnifier-icon,.bx--table-toolbar--sm .bx--toolbar-search-container-persistent .bx--search-magnifier-icon{
  left:.5rem
}

.bx--table-toolbar--small .bx--toolbar-search-container-expandable,.bx--table-toolbar--sm .bx--toolbar-search-container-expandable{
  width:2rem
}

.bx--table-toolbar--small .bx--toolbar-search-container-expandable .bx--search .bx--search-input,.bx--table-toolbar--sm .bx--toolbar-search-container-expandable .bx--search .bx--search-input{
  padding:0 3rem
}

.bx--table-toolbar--small .bx--toolbar-search-container-active,.bx--table-toolbar--sm .bx--toolbar-search-container-active{
  flex:auto;
  transition:flex 175ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-input,.bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-input{
  visibility:inherit
}

.bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-input:focus,.bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-input:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  background-color:#e5e5e5
}

@media screen and (prefers-contrast){
  .bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-input:focus,.bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-input:focus{
    outline-style:dotted
  }
}

.bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-input:not(:-moz-placeholder-shown), .bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-input:not(:-moz-placeholder-shown){
  background-color:#e5e5e5
}

.bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-input:not(:-ms-input-placeholder), .bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-input:not(:-ms-input-placeholder){
  background-color:#e5e5e5
}

.bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-input:active,.bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-input:not(:placeholder-shown),.bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-input:active,.bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-input:not(:placeholder-shown){
  background-color:#e5e5e5
}

.bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-magnifier-icon:focus,.bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-magnifier-icon:active,.bx--table-toolbar--small .bx--toolbar-search-container-active .bx--search-magnifier-icon:hover,.bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-magnifier-icon:focus,.bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-magnifier-icon:active,.bx--table-toolbar--sm .bx--toolbar-search-container-active .bx--search-magnifier-icon:hover{
  outline:2px solid transparent;
  outline-offset:-2px;
  background-color:transparent
}

.bx--table-toolbar--small .bx--overflow-menu.bx--toolbar-action,.bx--table-toolbar--sm .bx--overflow-menu.bx--toolbar-action{
  width:2rem;
  min-width:2rem;
  height:2rem
}

.bx--table-toolbar--small .bx--toolbar-content,.bx--table-toolbar--sm .bx--toolbar-content{
  height:2rem
}

.bx--search--disabled .bx--search-magnifier-icon:hover{
  background-color:transparent
}

.bx--table-toolbar--small .bx--batch-actions .bx--action-list,.bx--table-toolbar--sm .bx--batch-actions .bx--action-list{
  height:2rem
}

.bx--table-toolbar--small .bx--toolbar-action,.bx--table-toolbar--sm .bx--toolbar-action{
  width:2rem;
  height:2rem;
  padding:.5rem 0
}

.bx--table-toolbar--small .bx--btn--primary,.bx--table-toolbar--sm .bx--btn--primary{
  height:2rem;
  min-height:auto;
  padding-top:calc(.375rem - 3px);
  padding-bottom:calc(.375rem - 3px)
}

.bx--table-toolbar--small .bx--btn--primary.bx--batch-summary__cancel::before,.bx--table-toolbar--sm .bx--btn--primary.bx--batch-summary__cancel::before{
  top:.5rem
}

.bx--table-toolbar--small .bx--toolbar-action~.bx--btn,.bx--table-toolbar--sm .bx--toolbar-action~.bx--btn{
  overflow:hidden;
  height:2rem
}

.bx--table-toolbar--small .bx--batch-summary,.bx--table-toolbar--sm .bx--batch-summary{
  min-height:2rem
}

.bx--data-table-container{
  position:relative;
  padding-top:.125rem
}

.bx--data-table-content{
  overflow-x:auto
}

.bx--data-table-header{
  padding:1rem 0 1.5rem 1rem;
  background:#fff
}

.bx--data-table-header__title{
  font-size:1.25rem;
  font-weight:400;
  line-height:1.4;
  letter-spacing:0;
  color:#161616
}

.bx--data-table-header__description{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  color:#525252
}

.bx--data-table{
  width:100%;
  border-collapse:collapse;
  border-spacing:0
}

.bx--data-table thead{
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  background-color:#e0e0e0
}

.bx--data-table tbody{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  width:100%;
  background-color:#fff
}

.bx--data-table tr{
  width:100%;
  height:3rem;
  border:none
}

.bx--data-table tbody tr,.bx--data-table tbody tr td,.bx--data-table tbody tr th{
  transition:background-color 70ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--data-table tbody tr:hover{
  background:#e5e5e5
}

.bx--data-table tbody tr:hover td,.bx--data-table tbody tr:hover th{
  border-top:1px solid #e5e5e5;
  border-bottom:1px solid #e5e5e5;
  background:#e5e5e5;
  color:#161616
}

.bx--data-table tbody tr:hover td .bx--link,.bx--data-table tbody tr:hover th .bx--link{
  color:#0043ce
}

.bx--data-table tbody tr:hover td .bx--link--disabled,.bx--data-table tbody tr:hover th .bx--link--disabled{
  color:#c6c6c6
}

.bx--data-table th,.bx--data-table td{
  text-align:left;
  vertical-align:middle
}

.bx--data-table th[align=right],.bx--data-table td[align=right]{
  text-align:right
}

.bx--data-table th[align=center],.bx--data-table td[align=center]{
  text-align:center
}

.bx--data-table th{
  padding-right:1rem;
  padding-left:1rem;
  background-color:#e0e0e0;
  color:#161616
}

.bx--data-table th:last-of-type{
  position:static;
  width:auto
}

.bx--data-table td,.bx--data-table tbody th{
  padding-right:1rem;
  padding-left:1rem;
  border-top:1px solid #fff;
  border-bottom:1px solid #e0e0e0;
  background:#fff;
  color:#525252
}

.bx--data-table td+td:first-of-type,.bx--data-table tbody th+td:first-of-type{
  padding-left:.75rem
}

@supports(-moz-appearance: none){
  .bx--data-table td{
    background-clip:padding-box
  }
}

.bx--data-table .bx--list-box input[role=combobox],.bx--data-table .bx--list-box input[type=text],.bx--data-table .bx--dropdown,.bx--data-table .bx--list-box,.bx--data-table .bx--number input[type=number],.bx--data-table .bx--number__control-btn::before,.bx--data-table .bx--number__control-btn::after,.bx--data-table .bx--text-input,.bx--data-table .bx--select-input{
  background-color:#f4f4f4
}

.bx--data-table td.bx--table-column-menu .bx--overflow-menu[aria-expanded=false]:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--data-table td.bx--table-column-menu .bx--overflow-menu[aria-expanded=false]:focus{
    outline-style:dotted
  }
}

.bx--data-table td.bx--table-column-menu .bx--overflow-menu[aria-expanded=true]:focus{
  outline:none
}

@media screen and (hover: hover),(-ms-high-contrast: active),(-ms-high-contrast: none){
  .bx--data-table td.bx--table-column-menu .bx--overflow-menu .bx--overflow-menu__icon{
    opacity:0
  }
}

.bx--data-table td.bx--table-column-menu .bx--overflow-menu.bx--overflow-menu--open .bx--overflow-menu__icon{
  opacity:1
}

.bx--data-table.bx--data-table--visible-overflow-menu td.bx--table-column-menu .bx--overflow-menu .bx--overflow-menu__icon,.bx--data-table td.bx--table-column-menu .bx--overflow-menu:hover .bx--overflow-menu__icon,.bx--data-table td.bx--table-column-menu .bx--overflow-menu:focus .bx--overflow-menu__icon,.bx--data-table tr:hover td.bx--table-column-menu .bx--overflow-menu .bx--overflow-menu__icon{
  opacity:1
}

.bx--table-row--menu-option .bx--overflow-menu-options__btn .bx--overflow-menu-options__option-content svg{
  position:relative;
  top:.1875rem;
  margin-right:.5rem
}

.bx--data-table .bx--overflow-menu:hover,.bx--data-table .bx--overflow-menu__trigger:hover{
  background-color:#cacaca
}

.bx--data-table--selected .bx--overflow-menu:hover,.bx--data-table--selected .bx--overflow-menu__trigger:hover{
  background-color:#e5e5e5
}

.bx--data-table--selected .bx--link{
  color:#0043ce
}

.bx--data-table--compact td.bx--table-column-menu,.bx--data-table--xs td.bx--table-column-menu,.bx--data-table--short td.bx--table-column-menu,.bx--data-table--sm td.bx--table-column-menu{
  height:1.5rem;
  padding-top:0;
  padding-bottom:0
}

.bx--data-table--short td.bx--table-column-menu,.bx--data-table--sm td.bx--table-column-menu{
  height:2rem
}

.bx--data-table--md td.bx--table-column-menu{
  height:2.5rem
}

.bx--data-table--tall .bx--table-column-menu,.bx--data-table--xl .bx--table-column-menu{
  padding-top:.5rem
}

.bx--data-table--zebra tbody tr:not(.bx--parent-row):nth-child(odd) td{
  border-bottom:1px solid #fff
}

.bx--data-table--zebra tbody tr:not(.bx--parent-row):nth-child(even) td{
  border-top:1px solid #f4f4f4;
  border-bottom:1px solid #f4f4f4;
  background-color:#f4f4f4
}

.bx--data-table--zebra tbody tr:not(.bx--parent-row):hover td{
  border-top:1px solid #e5e5e5;
  border-bottom:1px solid #e5e5e5;
  background-color:#e5e5e5
}

.bx--table-column-checkbox .bx--checkbox-label{
  padding-left:0
}

.bx--data-table th.bx--table-column-checkbox{
  position:static;
  width:2rem;
  background:#e0e0e0;
  transition:background-color 70ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--data-table .bx--table-column-checkbox .bx--checkbox:focus+.bx--checkbox-label::before{
  outline-offset:.375rem
}

.bx--data-table--compact .bx--table-column-checkbox .bx--checkbox:focus+.bx--checkbox-label::before,.bx--data-table--xs .bx--table-column-checkbox .bx--checkbox:focus+.bx--checkbox-label::before{
  outline-offset:.125rem
}

.bx--data-table thead th.bx--table-column-checkbox,.bx--data-table tbody td.bx--table-column-checkbox,.bx--data-table thead th.bx--table-expand,.bx--data-table tbody td.bx--table-expand{
  min-width:0
}

.bx--data-table thead th.bx--table-column-checkbox,.bx--data-table tbody td.bx--table-column-checkbox{
  width:2.5rem;
  padding-right:.25rem;
  padding-left:1rem
}

.bx--data-table thead th.bx--table-expand,.bx--data-table tbody td.bx--table-expand{
  width:2rem;
  height:2rem
}

.bx--data-table--compact thead th.bx--table-expand,.bx--data-table--compact tbody td.bx--table-expand,.bx--data-table--xs thead th.bx--table-expand,.bx--data-table--xs tbody td.bx--table-expand{
  width:1.5rem;
  height:1.5rem;
  padding:0 0 0 .5rem
}

.bx--data-table--short thead th.bx--table-expand,.bx--data-table--short tbody td.bx--table-expand,.bx--data-table--sm thead th.bx--table-expand,.bx--data-table--sm tbody td.bx--table-expand{
  width:2rem;
  height:2rem;
  padding:0;
  padding-left:.5rem
}

.bx--data-table--md thead th.bx--table-expand,.bx--data-table--md tbody td.bx--table-expand{
  width:2.5rem;
  height:2.5rem;
  padding:.25rem 0 .25rem .5rem
}

.bx--data-table--tall thead th.bx--table-expand,.bx--data-table--tall tbody td.bx--table-expand,.bx--data-table--xl thead th.bx--table-expand,.bx--data-table--xl tbody td.bx--table-expand{
  height:4rem;
  padding-top:.625rem;
  padding-bottom:1.375rem
}

.bx--data-table--tall .bx--table-column-checkbox,.bx--data-table--xl .bx--table-column-checkbox{
  padding-top:.8125rem
}

.bx--data-table--tall .bx--table-column-radio,.bx--data-table--xl .bx--table-column-radio{
  padding-top:1rem
}

.bx--table-column-radio{
  width:48px
}

.bx--table-column-radio .bx--radio-button__appearance{
  margin-right:-0.125rem
}

.bx--data-table--zebra tbody tr:nth-child(odd).bx--data-table--selected td,tr.bx--data-table--selected td{
  border-top:1px solid #e0e0e0;
  border-bottom:1px solid #c6c6c6;
  background-color:#e0e0e0;
  color:#161616
}

.bx--data-table--zebra tbody tr:first-of-type:nth-child(odd).bx--data-table--selected td,tr.bx--data-table--selected:first-of-type td{
  border-top:1px solid #c6c6c6
}

.bx--data-table--zebra tbody tr:last-of-type:nth-child(odd).bx--data-table--selected td,.bx--data-table--zebra tbody tr:last-of-type:nth-child(even).bx--data-table--selected td,tr.bx--data-table--selected:last-of-type td{
  border-top:1px solid #e0e0e0;
  border-bottom:1px solid #e0e0e0
}

.bx--data-table--zebra tbody tr:nth-child(even).bx--data-table--selected td{
  border-bottom:1px solid #c6c6c6
}

.bx--data-table--zebra tbody tr:nth-child(even).bx--data-table--selected:hover td{
  border-bottom:1px solid #cacaca
}

.bx--data-table--zebra tbody tr:nth-child(odd).bx--data-table--selected:hover td,.bx--data-table tbody .bx--data-table--selected:hover td{
  border-top:1px solid #cacaca;
  border-bottom:1px solid #cacaca;
  background:#cacaca;
  color:#161616
}

.bx--data-table--selected .bx--overflow-menu .bx--overflow-menu__icon{
  opacity:1
}

.bx--data-table--compact thead tr,.bx--data-table--compact tbody tr,.bx--data-table--compact tbody tr th{
  height:1.5rem
}

.bx--data-table--compact .bx--table-header-label{
  padding-top:.125rem;
  padding-bottom:.125rem
}

.bx--data-table--compact td,.bx--data-table--compact tbody tr th{
  padding-top:.125rem;
  padding-bottom:.125rem
}

.bx--data-table--compact .bx--overflow-menu{
  width:2rem;
  height:100%
}

.bx--data-table.bx--data-table--compact .bx--table-column-checkbox{
  padding-top:0;
  padding-bottom:0
}

.bx--data-table.bx--data-table--compact .bx--table-column-checkbox .bx--checkbox-label{
  height:1.4375rem;
  min-height:1.4375rem
}

.bx--data-table--xs thead tr,.bx--data-table--xs tbody tr,.bx--data-table--xs tbody tr th{
  height:1.5rem
}

.bx--data-table--xs .bx--table-header-label{
  padding-top:.125rem;
  padding-bottom:.125rem
}

.bx--data-table--xs td,.bx--data-table--xs tbody tr th{
  padding-top:.125rem;
  padding-bottom:.125rem
}

.bx--data-table--xs .bx--overflow-menu{
  width:2rem;
  height:calc(100% + 1px)
}

.bx--data-table.bx--data-table--xs .bx--table-column-checkbox{
  padding-top:0;
  padding-bottom:0
}

.bx--data-table.bx--data-table--xs .bx--table-column-checkbox .bx--checkbox-label{
  height:1.4375rem;
  min-height:1.4375rem
}

.bx--data-table--short thead tr,.bx--data-table--short tbody tr,.bx--data-table--short tbody tr th{
  height:2rem
}

.bx--data-table--short .bx--table-header-label{
  padding-top:.4375rem;
  padding-bottom:.4375rem
}

.bx--data-table--short td,.bx--data-table--short tbody tr th{
  padding-top:.4375rem;
  padding-bottom:.375rem
}

.bx--data-table.bx--data-table--short .bx--table-column-checkbox{
  padding-top:.1875rem;
  padding-bottom:.1875rem
}

.bx--data-table--short .bx--overflow-menu{
  height:100%
}

.bx--data-table--sm thead tr,.bx--data-table--sm tbody tr,.bx--data-table--sm tbody tr th{
  height:2rem
}

.bx--data-table--sm .bx--table-header-label{
  padding-top:.4375rem;
  padding-bottom:.4375rem
}

.bx--data-table--sm td,.bx--data-table--sm tbody tr th{
  padding-top:.4375rem;
  padding-bottom:.375rem
}

.bx--data-table.bx--data-table--sm .bx--table-column-checkbox{
  padding-top:.1875rem;
  padding-bottom:.1875rem
}

.bx--data-table--sm .bx--overflow-menu{
  height:calc(100% + 1px)
}

.bx--data-table--md thead tr,.bx--data-table--md tbody tr,.bx--data-table--md tbody tr th{
  height:2.5rem
}

.bx--data-table--md .bx--table-header-label{
  padding-top:.4375rem;
  padding-bottom:.4375rem
}

.bx--data-table--md td,.bx--data-table--md tbody tr th{
  padding-top:.4375rem;
  padding-bottom:.375rem
}

.bx--data-table.bx--data-table--md .bx--table-column-checkbox{
  padding-top:.1875rem;
  padding-bottom:.1875rem
}

.bx--data-table--md .bx--table-column-menu{
  padding-top:.1875rem;
  padding-bottom:.1875rem
}

.bx--data-table--tall thead tr,.bx--data-table--tall tbody tr,.bx--data-table--tall tbody tr th{
  height:4rem
}

.bx--data-table--tall .bx--table-header-label{
  padding-top:1rem;
  padding-bottom:1rem
}

.bx--data-table--tall td,.bx--data-table--tall tbody tr th{
  padding-top:1rem
}

.bx--data-table--tall th,.bx--data-table--tall td{
  vertical-align:top
}

.bx--data-table--tall .bx--data-table--cell-secondary-text{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px
}

.bx--data-table--xl thead tr,.bx--data-table--xl tbody tr,.bx--data-table--xl tbody tr th{
  height:4rem
}

.bx--data-table--xl .bx--table-header-label{
  padding-top:1rem;
  padding-bottom:1rem
}

.bx--data-table--xl td,.bx--data-table--xl tbody tr th{
  padding-top:1rem
}

.bx--data-table--xl th,.bx--data-table--xl td{
  vertical-align:top
}

.bx--data-table--xl .bx--data-table--cell-secondary-text{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px
}

.bx--data-table--static{
  width:auto
}

.bx--data-table-container--static{
  width:-webkit-fit-content;
  width:-moz-fit-content;
  width:fit-content
}

.bx--data-table_inner-container{
  background-color:#e0e0e0;
  transform:translateZ(0)
}

.bx--data-table--sticky-header{
  display:block;
  overflow-y:scroll
}

.bx--data-table--sticky-header thead,.bx--data-table--sticky-header tbody,.bx--data-table--sticky-header tr,.bx--data-table--sticky-header th,.bx--data-table--sticky-header td{
  display:flex
}

.bx--data-table--sticky-header thead{
  position:-webkit-sticky;
  position:sticky;
  z-index:1;
  top:0;
  overflow:scroll;
  width:100%;
  -ms-overflow-style:none;
  will-change:transform
}

.bx--data-table--sticky-header thead tr th{
  border-bottom:1px solid #c6c6c6
}

.bx--data-table--sticky-header tbody{
  flex-direction:column;
  -ms-overflow-style:none;
  overflow-x:scroll;
  will-change:transform
}

.bx--data-table--sticky-header tr.bx--parent-row.bx--expandable-row{
  height:auto;
  min-height:3rem
}

.bx--data-table--sticky-header tr.bx--expandable-row:not(.bx--parent-row){
  height:auto
}

.bx--data-table--sticky-header .bx--table-expand{
  max-width:3rem
}

.bx--data-table--sticky-header thead .bx--table-expand{
  align-items:center
}

.bx--data-table--sticky-header .bx--parent-row{
  min-height:3rem
}

.bx--data-table--sticky-header:not(.bx--data-table--compact):not(.bx--data-table--xs):not(.bx--data-table--tall):not(.bx--data-table--xl):not(.bx--data-table--short):not(.bx--data-table--sm) td:not(.bx--table-column-menu):not(.bx--table-column-checkbox){
  padding-top:.875rem
}

.bx--data-table--sticky-header tr.bx--parent-row.bx--expandable-row:hover+tr[data-child-row] td{
  border-top:1px solid #e5e5e5
}

.bx--data-table--sticky-header tr.bx--expandable-row:last-of-type{
  overflow:hidden
}

.bx--data-table--sticky-header tr.bx--data-table--selected:first-of-type td{
  border-top:none
}

.bx--data-table--sticky-header thead th.bx--table-column-checkbox,.bx--data-table--sticky-header tbody tr td.bx--table-column-checkbox{
  width:2.25rem;
  min-width:2.25rem;
  align-items:center
}

.bx--data-table--sticky-header.bx--data-table--tall thead th.bx--table-column-checkbox,.bx--data-table--sticky-header.bx--data-table--xl thead th.bx--table-column-checkbox,.bx--data-table--sticky-header.bx--data-table--tall td.bx--table-column-checkbox,.bx--data-table--sticky-header.bx--data-table--xl td.bx--table-column-checkbox{
  align-items:flex-start
}

.bx--data-table--sticky-header th.bx--table-column-checkbox~th:last-of-type:empty{
  max-width:4rem
}

.bx--data-table--sticky-header th:empty:not(.bx--table-expand){
  max-width:2.25rem
}

.bx--data-table--sticky-header td.bx--table-column-menu{
  height:auto;
  align-items:center;
  padding-top:0
}

.bx--data-table--sticky-header thead::-webkit-scrollbar,.bx--data-table--sticky-header tbody::-webkit-scrollbar{
  display:none
}

@-moz-document url-prefix(){
  .bx--data-table--sticky-header thead,.bx--data-table--sticky-header tbody{
    scrollbar-width:none
  }
}

.bx--data-table--sticky-header tbody tr:last-of-type{
  border-bottom:0
}

.bx--data-table--sticky-header th:not(.bx--table-column-checkbox):not(.bx--table-column-menu):not(.bx--table-expand-v2):not(.bx--table-column-icon),.bx--data-table--sticky-header td:not(.bx--table-column-checkbox):not(.bx--table-column-menu):not(.bx--table-expand-v2):not(.bx--table-column-icon){
  width:100%;
  min-width:0
}

.bx--data-table--sticky-header.bx--data-table--compact tr:not(.bx--expandable-row),.bx--data-table--sticky-header.bx--data-table--xs tr:not(.bx--expandable-row),.bx--data-table--sticky-header.bx--data-table--short tr:not(.bx--expandable-row),.bx--data-table--sticky-header.bx--data-table--sm tr:not(.bx--expandable-row),.bx--data-table--sticky-header.bx--data-table--tall tr:not(.bx--expandable-row),.bx--data-table--sticky-header.bx--data-table--xl tr:not(.bx--expandable-row){
  height:auto
}

.bx--data-table--sticky-header.bx--data-table--compact tr:not(.bx--expandable-row),.bx--data-table--sticky-header.bx--data-table--xs tr:not(.bx--expandable-row){
  min-height:1.5rem
}

.bx--data-table--sticky-header.bx--data-table--short tr:not(.bx--expandable-row),.bx--data-table--sticky-header.bx--data-table--sm tr:not(.bx--expandable-row){
  min-height:2rem
}

.bx--data-table--sticky-header.bx--data-table--tall tr:not(.bx--expandable-row),.bx--data-table--sticky-header.bx--data-table--xl tr:not(.bx--expandable-row){
  min-height:4rem
}

.bx--data-table--sticky-header.bx--data-table--compact tr td.bx--table-expand,.bx--data-table--sticky-header.bx--data-table--xs tr td.bx--table-expand{
  padding-top:.25rem
}

.bx--data-table--sticky-header.bx--data-table--short tr td.bx--table-expand,.bx--data-table--sticky-header.bx--data-table--sm tr td.bx--table-expand{
  padding-top:.5rem
}

.bx--data-table--sticky-header .bx--table-header-label{
  display:block;
  overflow-x:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  max-width:calc(100% - 10px);
  padding-top:.9375rem;
  padding-bottom:1rem;
  overflow-y:hidden
}

.bx--data-table--sticky-header.bx--data-table--compact th .bx--table-header-label,.bx--data-table--sticky-header.bx--data-table--xs th .bx--table-header-label{
  padding-top:.1875rem;
  padding-bottom:0
}

.bx--data-table--sticky-header.bx--data-table--short th .bx--table-header-label,.bx--data-table--sticky-header.bx--data-table--sm th .bx--table-header-label{
  padding-top:.5rem;
  padding-bottom:0
}

.bx--data-table--sticky-header.bx--data-table--tall th .bx--table-header-label,.bx--data-table--sticky-header.bx--data-table--xl th .bx--table-header-label{
  padding-top:1rem
}

.bx--data-table--sticky-header.bx--data-table--tall th.bx--table-expand,.bx--data-table--sticky-header.bx--data-table--xl th.bx--table-expand{
  display:flex;
  align-items:flex-start
}

.bx--data-table--sticky-header.bx--data-table--compact tr.bx--parent-row .bx--table-column-checkbox,.bx--data-table--sticky-header.bx--data-table--short tr.bx--parent-row .bx--table-column-checkbox,.bx--data-table--sticky-header.bx--data-table--xs tr.bx--parent-row .bx--table-column-checkbox,.bx--data-table--sticky-header.bx--data-table--sm tr.bx--parent-row .bx--table-column-checkbox{
  align-items:flex-start
}

.bx--data-table--max-width{
  max-width:100%
}

.bx--data-table--sticky-header{
  max-height:18.75rem
}

.bx--data-table .bx--form-item.bx--checkbox-wrapper:last-of-type{
  margin:0
}

.bx--data-table--short .bx--form-item.bx--checkbox-wrapper:last-of-type,.bx--data-table--compact .bx--form-item.bx--checkbox-wrapper:last-of-type,.bx--data-table--xs .bx--form-item.bx--checkbox-wrapper:last-of-type,.bx--data-table--sm .bx--form-item.bx--checkbox-wrapper:last-of-type{
  margin:-0.1875rem 0
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--data-table-content{
    outline:1px solid transparent
  }
}

.bx--data-table tr.bx--parent-row:first-of-type td{
  border-top:1px solid #e0e0e0
}

.bx--expandable-row--hidden td{
  width:auto;
  padding:1rem;
  border-top:0
}

tr.bx--parent-row:not(.bx--expandable-row)+tr[data-child-row]{
  height:0;
  transition:height 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

tr.bx--parent-row:not(.bx--expandable-row)+tr[data-child-row] td{
  padding-top:0;
  padding-bottom:0;
  border:0;
  background-color:#e5e5e5;
  transition:padding 150ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

tr.bx--parent-row:not(.bx--expandable-row)+tr[data-child-row] td .bx--child-row-inner-container{
  overflow:hidden;
  max-height:0
}

tr.bx--parent-row.bx--expandable-row+tr[data-child-row]{
  transition:height 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

tr.bx--parent-row.bx--expandable-row+tr[data-child-row] td{
  padding-left:4rem;
  border-bottom:1px solid #e0e0e0;
  transition:padding-bottom 110ms cubic-bezier(0.2, 0, 0.38, 0.9),transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

tr.bx--parent-row.bx--expandable-row+tr[data-child-row] td .bx--child-row-inner-container{
  max-height:100%
}

.bx--parent-row.bx--expandable-row>td,.bx--parent-row.bx--expandable-row+tr[data-child-row]>td{
  border-bottom:1px solid #e0e0e0;
  box-shadow:0 1px #e0e0e0
}

.bx--parent-row:not(.bx--expandable-row)+tr[data-child-row]>td{
  box-shadow:none
}

.bx--parent-row.bx--expandable-row>td:first-of-type{
  box-shadow:none
}

tr.bx--parent-row:not(.bx--expandable-row) td,tr.bx--parent-row.bx--expandable-row td,tr.bx--parent-row.bx--expandable-row{
  transition:height 240ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

tr.bx--parent-row:not(.bx--expandable-row):first-of-type:hover td{
  border-top:1px solid #e0e0e0;
  border-bottom:1px solid #e0e0e0
}

tr.bx--parent-row.bx--expandable-row:hover td{
  border-top:1px solid #e0e0e0;
  border-bottom:1px solid #e0e0e0;
  background-color:#e5e5e5;
  color:#161616
}

tr.bx--parent-row.bx--expandable-row:hover td:first-of-type{
  border-bottom:1px solid #e5e5e5
}

tr.bx--parent-row.bx--expandable-row:hover+tr[data-child-row] td{
  border-bottom:1px solid #e0e0e0;
  background-color:#e5e5e5;
  color:#161616
}

tr.bx--expandable-row--hover+tr[data-child-row] td{
  border-bottom:1px solid #e0e0e0
}

tr.bx--expandable-row--hover{
  background-color:#e5e5e5
}

tr.bx--expandable-row--hover td{
  border-top:1px solid #e0e0e0;
  border-bottom:1px solid #e0e0e0;
  background-color:#e5e5e5;
  color:#161616
}

tr.bx--parent-row.bx--expandable-row.bx--expandable-row--hover td:first-of-type{
  border-bottom:1px solid transparent
}

.bx--data-table td.bx--table-expand{
  border-bottom:1px solid #e0e0e0
}

.bx--data-table th.bx--table-expand+.bx--table-column-checkbox,.bx--data-table td.bx--table-expand+.bx--table-column-checkbox{
  padding-right:.375rem;
  padding-left:.375rem
}

.bx--data-table th.bx--table-expand+.bx--table-column-checkbox+th,.bx--data-table td.bx--table-expand+.bx--table-column-checkbox+td{
  padding-left:.5rem
}

.bx--data-table td.bx--table-expand,.bx--data-table th.bx--table-expand{
  padding:.5rem;
  padding-right:0
}

.bx--data-table td.bx--table-expand[data-previous-value=collapsed]{
  border-bottom:1px solid transparent
}

.bx--table-expand[data-previous-value=collapsed] .bx--table-expand__svg{
  transform:rotate(270deg);
  transition:transform 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--table-expand__button{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  display:inline-flex;
  width:100%;
  height:calc(100% + 1px);
  align-items:center;
  justify-content:center;
  padding:0 .5rem;
  vertical-align:inherit
}

.bx--table-expand__button::-moz-focus-inner{
  border:0
}

.bx--table-expand__button:focus{
  box-shadow:inset 0 0 0 2px #0f62fe;
  outline:none
}

.bx--table-expand__svg{
  fill:#161616;
  transform:rotate(90deg);
  transition:transform 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--data-table--tall .bx--table-expand__button,.bx--data-table--xl .bx--table-expand__button{
  width:2rem;
  padding:0
}

tr.bx--parent-row.bx--expandable-row td.bx--table-expand+td::after{
  position:absolute;
  bottom:-0.0625rem;
  left:0;
  width:.5rem;
  height:.0625rem;
  background:#e0e0e0;
  content:""
}

tr.bx--parent-row.bx--expandable-row:hover td.bx--table-expand+td::after,tr.bx--parent-row.bx--expandable-row.bx--expandable-row--hover td.bx--table-expand+td::after{
  background:#e5e5e5
}

tr.bx--parent-row.bx--data-table--selected td.bx--table-expand+td::after{
  display:none
}

.bx--data-table--zebra tbody tr[data-parent-row]:nth-child(4n+3) td,.bx--data-table--zebra tbody tr[data-child-row]:nth-child(4n+4) td{
  border-bottom:1px solid #fff
}

.bx--data-table--zebra tbody tr[data-parent-row]:nth-child(4n+1) td,.bx--data-table--zebra tbody tr[data-child-row]:nth-child(4n+2) td{
  border-top:1px solid #f4f4f4;
  border-bottom:1px solid #f4f4f4;
  background-color:#f4f4f4
}

.bx--data-table--zebra tr.bx--parent-row td,.bx--data-table--zebra tr.bx--parent-row.bx--expandable-row+tr[data-child-row] td{
  transition:transform 150ms cubic-bezier(0.2, 0, 0.38, 0.9),border-bottom 150ms cubic-bezier(0.2, 0, 0.38, 0.9),border-top 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--data-table--zebra tbody tr[data-parent-row]:hover td,.bx--data-table--zebra tbody tr[data-parent-row]:hover+tr[data-child-row] td,.bx--data-table--zebra tbody tr[data-child-row]:hover td{
  border-top:1px solid #e5e5e5;
  border-bottom:1px solid #e5e5e5;
  background-color:#e5e5e5
}

.bx--data-table--zebra tr.bx--parent-row.bx--expandable-row.bx--expandable-row--hover td{
  border-top:1px solid #e5e5e5;
  border-bottom:1px solid #e5e5e5;
  background:#e5e5e5
}

tr.bx--parent-row.bx--data-table--selected:first-of-type td{
  border-top:1px solid #c6c6c6;
  border-bottom:1px solid #e0e0e0;
  background:#e0e0e0;
  box-shadow:0 1px #c6c6c6
}

tr.bx--parent-row.bx--data-table--selected td{
  border-bottom:1px solid transparent;
  background:#e0e0e0;
  box-shadow:0 1px #c6c6c6;
  color:#161616
}

tr.bx--parent-row.bx--data-table--selected:last-of-type td{
  border-bottom:1px solid transparent;
  background:#e0e0e0;
  box-shadow:0 1px #e0e0e0
}

tr.bx--parent-row.bx--data-table--selected:not(.bx--expandable-row):hover td{
  border-top:1px solid #cacaca;
  border-bottom:1px solid #e0e0e0;
  background:#cacaca;
  box-shadow:0 1px #cacaca
}

tr.bx--parent-row.bx--data-table--selected.bx--expandable-row td,tr.bx--parent-row.bx--data-table--selected.bx--expandable-row td:first-of-type{
  border-bottom:1px solid transparent;
  box-shadow:0 1px #e0e0e0
}

tr.bx--parent-row.bx--data-table--selected.bx--expandable-row:hover td,tr.bx--parent-row.bx--data-table--selected.bx--expandable-row:hover td:first-of-type,tr.bx--parent-row.bx--data-table--selected.bx--expandable-row--hover td,tr.bx--parent-row.bx--data-table--selected.bx--expandable-row--hover td:first-of-type{
  border-top:1px solid #cacaca;
  border-bottom:1px solid transparent;
  background:#cacaca;
  box-shadow:0 1px #cacaca
}

tr.bx--parent-row.bx--data-table--selected.bx--expandable-row+tr[data-child-row] td{
  border-top:1px solid #c6c6c6;
  border-bottom:1px solid #e0e0e0;
  background-color:#e5e5e5;
  box-shadow:0 1px #c6c6c6;
  color:#161616
}

tr.bx--parent-row.bx--data-table--selected.bx--expandable-row+tr[data-child-row]:last-of-type td{
  padding-bottom:1.5rem;
  box-shadow:inset 0 -1px #c6c6c6
}

tr.bx--parent-row.bx--data-table--selected.bx--expandable-row:hover+tr[data-child-row] td,tr.bx--parent-row.bx--data-table--selected.bx--expandable-row--hover+tr[data-child-row] td{
  background:#e0e0e0
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--table-expand__button:focus .bx--table-expand__svg{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--table-expand__svg{
    fill:ButtonText
  }
}

.bx--data-table--sort th,.bx--data-table th[aria-sort]{
  height:3rem;
  padding:0;
  border-top:none;
  border-bottom:none
}

.bx--table-sort{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  display:flex;
  width:100%;
  min-height:100%;
  align-items:center;
  justify-content:space-between;
  padding-left:1rem;
  background-color:#e0e0e0;
  color:#161616;
  font:inherit;
  line-height:1;
  text-align:left;
  transition:background-color 70ms cubic-bezier(0, 0, 0.38, 0.9),outline 70ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--table-sort::-moz-focus-inner{
  border:0
}

.bx--table-sort:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--table-sort:focus{
    outline-style:dotted
  }
}

.bx--table-sort:hover{
  background:#cacaca
}

.bx--table-sort:focus svg,.bx--table-sort:hover svg{
  opacity:1
}

.bx--data-table.bx--data-table--sort th>.bx--table-header-label{
  padding-right:1rem;
  padding-left:1rem
}

th .bx--table-sort__flex{
  display:flex;
  width:100%;
  height:100%;
  min-height:3rem;
  align-items:center;
  justify-content:space-between
}

@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){
  .bx--data-table--sort:not(.bx--data-table--compact):not(.bx--data-table--short):not(.bx--data-table--tall):not(.bx--data-table--xs):not(.bx--data-table--sm):not(.bx--data-table--md):not(.bx--data-table--xl) th .bx--table-sort__flex{
    height:2.99rem
  }
}

.bx--data-table--compact.bx--data-table--sort th .bx--table-sort__flex,.bx--data-table--xs.bx--data-table--sort th .bx--table-sort__flex{
  min-height:1.5rem
}

.bx--data-table--short.bx--data-table--sort th .bx--table-sort__flex,.bx--data-table--sm.bx--data-table--sort th .bx--table-sort__flex{
  min-height:2rem
}

.bx--data-table--md.bx--data-table--sort th .bx--table-sort__flex{
  min-height:2.5rem
}

.bx--data-table--tall.bx--data-table--sort th .bx--table-sort__flex,.bx--data-table--xl.bx--data-table--sort th .bx--table-sort__flex{
  min-height:4rem;
  align-items:flex-start
}

.bx--table-sort .bx--table-sort__icon-inactive{
  display:block
}

.bx--table-sort .bx--table-sort__icon{
  display:none
}

.bx--table-sort__icon-unsorted{
  width:1.25rem;
  min-width:1rem;
  margin-right:.5rem;
  margin-left:.5rem;
  fill:#161616;
  opacity:0
}

.bx--table-sort.bx--table-sort--active{
  background:#cacaca
}

.bx--table-sort.bx--table-sort--active .bx--table-sort__icon-unsorted{
  display:none
}

.bx--table-sort.bx--table-sort--active .bx--table-sort__icon{
  display:block;
  opacity:1
}

.bx--table-sort--ascending .bx--table-sort__icon{
  transform:rotate(180deg)
}

.bx--table-sort__icon{
  width:1.25rem;
  min-width:1rem;
  margin-right:.5rem;
  margin-left:.5rem;
  fill:#161616;
  opacity:1;
  transform:rotate(0);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--data-table--compact.bx--data-table--sort th,.bx--data-table--xs.bx--data-table--sort th{
  height:1.5rem
}

.bx--data-table--short.bx--data-table--sort th,.bx--data-table--sm.bx--data-table--sort th{
  height:2rem
}

.bx--data-table--md.bx--data-table--sort th{
  height:2.5rem
}

.bx--data-table--tall.bx--data-table--sort th,.bx--data-table--xl.bx--data-table--sort th{
  height:4rem
}

.bx--data-table--tall.bx--data-table--sort th .bx--table-sort,.bx--data-table--xl.bx--data-table--sort th .bx--table-sort{
  display:inline-block;
  height:4rem
}

.bx--data-table--tall .bx--table-sort__icon-unsorted,.bx--data-table--tall .bx--table-sort__icon,.bx--data-table--xl .bx--table-sort__icon-unsorted,.bx--data-table--xl .bx--table-sort__icon{
  margin-top:.8125rem
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--table-sort__icon,.bx--table-sort__icon-unsorted{
    fill:ButtonText
  }
}

.bx--inline-edit-label{
  display:flex;
  align-items:center;
  justify-content:space-between
}

.bx--inline-edit-label:hover .bx--inline-edit-label__icon{
  opacity:1
}

.bx--inline-edit-label--inactive{
  display:none
}

.bx--inline-edit-label__action{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer
}

.bx--inline-edit-label__action::-moz-focus-inner{
  border:0
}

.bx--inline-edit-label__action:hover{
  cursor:pointer
}

.bx--inline-edit-label__action:focus{
  outline:1px solid #0f62fe;
  padding:.125rem
}

@media screen and (prefers-contrast){
  .bx--inline-edit-label__action:focus{
    outline-style:dotted
  }
}

.bx--inline-edit-label__action:focus .bx--inline-edit-label__icon{
  width:auto;
  opacity:1
}

.bx--inline-edit-label__icon{
  fill:#161616;
  opacity:0
}

.bx--inline-edit-input{
  display:none
}

.bx--inline-edit-input--active{
  display:block;
  margin-left:-0.75rem
}

.bx--inline-edit-input--active input{
  padding-left:.75rem
}

.bx--data-table.bx--skeleton th{
  padding-left:1rem;
  vertical-align:middle
}

.bx--data-table.bx--skeleton th span,.bx--data-table.bx--skeleton td span{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  display:block;
  width:4rem;
  height:1rem
}

.bx--data-table.bx--skeleton th span:hover,.bx--data-table.bx--skeleton th span:focus,.bx--data-table.bx--skeleton th span:active,.bx--data-table.bx--skeleton td span:hover,.bx--data-table.bx--skeleton td span:focus,.bx--data-table.bx--skeleton td span:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--data-table.bx--skeleton th span::before,.bx--data-table.bx--skeleton td span::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--data-table.bx--skeleton th span::before,.bx--data-table.bx--skeleton td span::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--data-table.bx--skeleton tr:hover td{
  border-color:#e0e0e0;
  background:transparent
}

.bx--data-table.bx--skeleton tr:hover td:first-of-type,.bx--data-table.bx--skeleton tr:hover td:last-of-type{
  border-color:#e0e0e0
}

.bx--data-table.bx--skeleton .bx--table-sort-v2{
  pointer-events:none
}

.bx--data-table.bx--skeleton th span{
  background:#c6c6c6
}

.bx--data-table.bx--skeleton th span::before{
  background:#e5e5e5
}

.bx--data-table-container.bx--skeleton .bx--data-table-header__title{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:7.5rem;
  height:1.5rem
}

.bx--data-table-container.bx--skeleton .bx--data-table-header__title:hover,.bx--data-table-container.bx--skeleton .bx--data-table-header__title:focus,.bx--data-table-container.bx--skeleton .bx--data-table-header__title:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--data-table-container.bx--skeleton .bx--data-table-header__title::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--data-table-container.bx--skeleton .bx--data-table-header__title::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--data-table-container.bx--skeleton .bx--data-table-header__description{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:10rem;
  height:1rem;
  margin-top:.5rem
}

.bx--data-table-container.bx--skeleton .bx--data-table-header__description:hover,.bx--data-table-container.bx--skeleton .bx--data-table-header__description:focus,.bx--data-table-container.bx--skeleton .bx--data-table-header__description:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--data-table-container.bx--skeleton .bx--data-table-header__description::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--data-table-container.bx--skeleton .bx--data-table-header__description::before{
    -webkit-animation:none;
    animation:none
  }
}

@-webkit-keyframes fpFadeInDown{
  from{
    transform:translate3d(0, -20px, 0);
    opacity:0
  }

  to{
    transform:translate3d(0, 0, 0);
    opacity:1
  }
}

@keyframes fpFadeInDown{
  from{
    transform:translate3d(0, -20px, 0);
    opacity:0
  }

  to{
    transform:translate3d(0, 0, 0);
    opacity:1
  }
}

@-webkit-keyframes fpSlideLeft{
  from{
    transform:translate3d(0, 0, 0)
  }

  to{
    transform:translate3d(-100%, 0, 0)
  }
}

@keyframes fpSlideLeft{
  from{
    transform:translate3d(0, 0, 0)
  }

  to{
    transform:translate3d(-100%, 0, 0)
  }
}

@-webkit-keyframes fpSlideLeftNew{
  from{
    transform:translate3d(100%, 0, 0)
  }

  to{
    transform:translate3d(0, 0, 0)
  }
}

@keyframes fpSlideLeftNew{
  from{
    transform:translate3d(100%, 0, 0)
  }

  to{
    transform:translate3d(0, 0, 0)
  }
}

@-webkit-keyframes fpSlideRight{
  from{
    transform:translate3d(0, 0, 0)
  }

  to{
    transform:translate3d(100%, 0, 0)
  }
}

@keyframes fpSlideRight{
  from{
    transform:translate3d(0, 0, 0)
  }

  to{
    transform:translate3d(100%, 0, 0)
  }
}

@-webkit-keyframes fpSlideRightNew{
  from{
    transform:translate3d(-100%, 0, 0)
  }

  to{
    transform:translate3d(0, 0, 0)
  }
}

@keyframes fpSlideRightNew{
  from{
    transform:translate3d(-100%, 0, 0)
  }

  to{
    transform:translate3d(0, 0, 0)
  }
}

@-webkit-keyframes fpFadeOut{
  from{
    opacity:1
  }

  to{
    opacity:0
  }
}

@keyframes fpFadeOut{
  from{
    opacity:1
  }

  to{
    opacity:0
  }
}

@-webkit-keyframes fpFadeIn{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

@keyframes fpFadeIn{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.flatpickr-calendar{
  position:absolute;
  box-sizing:border-box;
  width:19.6875rem;
  max-height:0;
  padding:0;
  overflow:hidden;
  direction:ltr;
  text-align:center;
  border:0;
  border-radius:0;
  visibility:hidden;
  opacity:0;
  -webkit-animation:none;
  animation:none;
  touch-action:manipulation
}

.flatpickr-calendar.open,.flatpickr-calendar.inline{
  max-height:40rem;
  overflow:visible;
  visibility:inherit;
  opacity:1
}

.flatpickr-calendar.open{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:99999;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:18rem;
  height:21rem;
  margin-top:-0.125rem;
  padding:.25rem .25rem .5rem .25rem;
  overflow:hidden;
  background-color:#fff;
  border:none
}

.flatpickr-calendar.open:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .flatpickr-calendar.open:focus{
    outline-style:dotted
  }
}

.flatpickr-calendar.animate.open{
  -webkit-animation:fpFadeInDown 110ms cubic-bezier(0, 0, 0.38, 0.9);
  animation:fpFadeInDown 110ms cubic-bezier(0, 0, 0.38, 0.9)
}

.flatpickr-calendar.inline{
  position:relative;
  top:.125rem;
  display:block
}

.flatpickr-calendar.static{
  position:absolute;
  top:calc(100% + 2px)
}

.flatpickr-calendar.static.open{
  z-index:999;
  display:block
}

.flatpickr-calendar.hasWeeks{
  width:auto
}

.dayContainer{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  height:15.375rem;
  padding:0;
  outline:0
}

.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{
  border-bottom:0;
  border-bottom-right-radius:0;
  border-bottom-left-radius:0
}

.flatpickr-calendar .hasWeeks .dayContainer{
  border-left:0
}

.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{
  height:2.5rem;
  border-top:1px solid #e6e6e6
}

.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{
  height:auto
}

.flatpickr-calendar:focus{
  outline:0
}

.flatpickr-months{
  display:flex;
  justify-content:space-between;
  width:100%
}

.flatpickr-month{
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  display:flex;
  align-items:center;
  height:2.5rem;
  color:#161616;
  line-height:1;
  text-align:center;
  background-color:transparent
}

.flatpickr-prev-month,.flatpickr-next-month{
  z-index:3;
  display:flex;
  align-items:center;
  justify-content:center;
  width:2.5rem;
  height:2.5rem;
  padding:0;
  line-height:16px;
  text-decoration:none;
  transform:scale(1, 1) /*rtl: scale(-1,1)*/;
  cursor:pointer;
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  fill:#161616;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

.flatpickr-prev-month:hover,.flatpickr-next-month:hover{
  background-color:#e5e5e5
}

.flatpickr-next-month.disabled svg,.flatpickr-prev-month.disabled svg{
  cursor:not-allowed;
  fill:#161616
}

.flatpickr-next-month.disabled:hover svg,.flatpickr-prev-month.disabled:hover svg{
  fill:#161616
}

.flatpickr-current-month{
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  display:flex;
  align-items:center;
  justify-content:center;
  height:1.75rem;
  text-align:center
}

.flatpickr-current-month .cur-month{
  margin-right:.25rem;
  margin-left:.25rem
}

.flatpickr-current-month .cur-month:hover{
  background-color:#e5e5e5
}

.numInputWrapper{
  position:relative;
  width:3.75rem
}

.numInputWrapper:hover{
  background-color:#e5e5e5
}

.numInputWrapper .numInput{
  display:inline-block;
  width:100%;
  margin:0;
  padding:.25rem;
  color:#161616;
  font-weight:600;
  font-size:inherit;
  font-family:inherit;
  background-color:#fff;
  border:none;
  cursor:default;
  -moz-appearance:textfield
}

.numInputWrapper .numInput::-webkit-outer-spin-button,.numInputWrapper .numInput::-webkit-inner-spin-button{
  margin:0;
  -webkit-appearance:none
}

.numInputWrapper .numInput:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .numInputWrapper .numInput:focus{
    outline-style:dotted
  }
}

.numInputWrapper .numInput[disabled],.numInputWrapper .numInput[disabled]:hover{
  color:#c6c6c6;
  background-color:#fff;
  pointer-events:none
}

.numInputWrapper .arrowUp{
  top:.25rem;
  border-bottom:0
}

.numInputWrapper .arrowUp::after{
  border-bottom:.25rem solid #161616
}

.numInputWrapper .arrowDown{
  top:.6875rem
}

.numInputWrapper .arrowDown::after{
  border-top:.25rem solid #161616
}

.numInputWrapper .arrowUp,.numInputWrapper .arrowDown{
  position:absolute;
  left:2.6rem;
  width:.75rem;
  height:50%;
  padding:0 .25rem 0 .125rem;
  line-height:50%;
  border:none;
  cursor:pointer;
  opacity:0
}

.numInputWrapper .arrowUp::after,.numInputWrapper .arrowDown::after{
  position:absolute;
  top:33%;
  display:block;
  border-right:.25rem solid transparent;
  border-left:.25rem solid transparent;
  content:""
}

.numInputWrapper .arrowUp:hover::after,.numInputWrapper .arrowDown:hover::after{
  border-top-color:#0f62fe;
  border-bottom-color:#0f62fe
}

.numInputWrapper .arrowUp:active::after,.numInputWrapper .arrowDown:active::after{
  border-top-color:#0f62fe;
  border-bottom-color:#0f62fe
}

.numInput[disabled]~.arrowUp::after{
  border-bottom-color:#c6c6c6
}

.numInput[disabled]~.arrowDown::after{
  border-top-color:#c6c6c6
}

.numInputWrapper:hover .arrowUp,.numInputWrapper:hover .arrowDown{
  opacity:1
}

.numInputWrapper:hover .numInput[disabled]~.arrowUp,.numInputWrapper:hover .numInput[disabled]~.arrowDown{
  opacity:0
}

.flatpickr-weekdays{
  display:flex;
  align-items:center;
  height:2.5rem
}

.flatpickr-weekdaycontainer{
  display:flex;
  width:100%
}

.flatpickr-weekday{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  flex:1;
  color:#161616;
  cursor:default
}

.flatpickr-days:focus{
  outline:0
}

.flatpickr-calendar.animate .dayContainer.slideLeft{
  -webkit-animation:fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);
  animation:fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1)
}

.flatpickr-calendar.animate .dayContainer.slideLeft,.flatpickr-calendar.animate .dayContainer.slideLeftNew{
  transform:translate3d(-100%, 0, 0)
}

.flatpickr-calendar.animate .dayContainer.slideLeftNew{
  -webkit-animation:fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);
  animation:fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1)
}

.flatpickr-calendar.animate .dayContainer.slideRight{
  transform:translate3d(100%, 0, 0);
  -webkit-animation:fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);
  animation:fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1)
}

.flatpickr-calendar.animate .dayContainer.slideRightNew{
  -webkit-animation:fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);
  animation:fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1),fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1)
}

.flatpickr-day{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:flex;
  align-items:center;
  justify-content:center;
  width:2.5rem;
  height:2.5rem;
  color:#161616;
  cursor:pointer;
  transition:all 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.flatpickr-day:hover{
  background:#e5e5e5
}

.flatpickr-day:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  outline-color:#0f62fe
}

@media screen and (prefers-contrast){
  .flatpickr-day:focus{
    outline-style:dotted
  }
}

.nextMonthDay,.prevMonthDay{
  color:#6f6f6f
}

.flatpickr-day.today{
  position:relative;
  color:#0f62fe;
  font-weight:600
}

.flatpickr-day.today::after{
  position:absolute;
  bottom:.4375rem;
  left:50%;
  display:block;
  width:.25rem;
  height:.25rem;
  background-color:#0f62fe;
  transform:translateX(-50%);
  content:""
}

.flatpickr-day.today.no-border{
  border:none
}

.flatpickr-day.today.selected{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .flatpickr-day.today.selected{
    outline-style:dotted
  }
}

.flatpickr-day.today.selected::after{
  display:none
}

.flatpickr-day.inRange{
  color:#161616;
  background-color:#d0e2ff
}

.flatpickr-day.selected{
  color:#fff;
  background-color:#0f62fe
}

.flatpickr-day.selected:focus{
  outline:.0625rem solid #f4f4f4;
  outline-offset:-0.1875rem
}

.flatpickr-day.startRange.selected{
  z-index:2;
  box-shadow:none
}

.flatpickr-day.startRange.inRange:not(.selected),.flatpickr-day.endRange.inRange{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  z-index:3;
  background:#fff
}

@media screen and (prefers-contrast){
  .flatpickr-day.startRange.inRange:not(.selected),.flatpickr-day.endRange.inRange{
    outline-style:dotted
  }
}

.flatpickr-day.endRange:hover{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  color:#161616;
  background:#fff
}

@media screen and (prefers-contrast){
  .flatpickr-day.endRange:hover{
    outline-style:dotted
  }
}

.flatpickr-day.endRange.inRange.selected{
  color:#fff;
  background:#0f62fe
}

.flatpickr-day.flatpickr-disabled{
  color:#c6c6c6;
  cursor:not-allowed
}

.flatpickr-day.flatpickr-disabled:hover{
  background-color:transparent
}

.flatpickr-input[readonly]{
  cursor:pointer
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .flatpickr-prev-month,.flatpickr-next-month{
    fill:ButtonText
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .flatpickr-day.selected{
    color:Highlight;
    outline:1px solid Highlight;
    outline-style:dotted
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .flatpickr-day.today,.flatpickr-day.inRange{
    color:Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .flatpickr-calendar{
    outline:1px solid transparent
  }
}

.bx--date-picker{
  display:flex
}

.bx--date-picker--light .bx--date-picker__input{
  background:#f4f4f4
}

.bx--date-picker~.bx--label{
  order:1
}

.bx--date-picker-container{
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:space-between
}

.bx--date-picker-input__wrapper{
  position:relative;
  display:flex;
  align-items:center
}

.bx--date-picker.bx--date-picker--simple .bx--date-picker__input,.bx--date-picker.bx--date-picker--simple .bx--label{
  width:7.5rem
}

.bx--date-picker.bx--date-picker--simple .bx--date-picker-input__wrapper--invalid .bx--date-picker__input,.bx--date-picker.bx--date-picker--simple .bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--date-picker.bx--date-picker--simple .bx--date-picker-input__wrapper--warn .bx--date-picker__input,.bx--date-picker.bx--date-picker--simple .bx--date-picker-input__wrapper--warn~.bx--form-requirement{
  width:9.5rem
}

.bx--date-picker.bx--date-picker--simple.bx--date-picker--short .bx--date-picker__input{
  width:5.7rem
}

.bx--date-picker.bx--date-picker--single .bx--date-picker__input{
  width:18rem
}

.bx--date-picker .bx--date-picker-input__wrapper--warn~.bx--form-requirement{
  color:#161616
}

.bx--date-picker__input{
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.32px;
  outline:2px solid transparent;
  outline-offset:-2px;
  position:relative;
  display:block;
  height:2.5rem;
  padding:0 1rem;
  border:none;
  border-bottom:1px solid #8d8d8d;
  background-color:#fff;
  color:#161616;
  transition:70ms cubic-bezier(0.2, 0, 0.38, 0.9) all
}

.bx--date-picker__input:focus,.bx--date-picker__input.bx--focused{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--date-picker__input:focus,.bx--date-picker__input.bx--focused{
    outline-style:dotted
  }
}

.bx--date-picker__input:disabled{
  border-bottom:1px solid transparent;
  background-color:#fff;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--date-picker__input:disabled::-moz-placeholder{
  color:#c6c6c6
}

.bx--date-picker__input:disabled:-ms-input-placeholder{
  color:#c6c6c6
}

.bx--date-picker__input:disabled::placeholder{
  color:#c6c6c6
}

.bx--date-picker__input:disabled:hover{
  border-bottom:1px solid transparent
}

.bx--date-picker__input::-moz-placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--date-picker__input:-ms-input-placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--date-picker__input::placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--date-picker__input--xl,.bx--date-picker__input--lg{
  height:3rem
}

.bx--date-picker__input--sm{
  height:2rem
}

.bx--date-picker__icon{
  position:absolute;
  z-index:1;
  top:50%;
  right:1rem;
  fill:#161616;
  pointer-events:none;
  transform:translateY(-50%)
}

.bx--date-picker__icon--invalid,.bx--date-picker__icon--warn{
  cursor:auto
}

.bx--date-picker__icon--warn{
  fill:#f1c21b
}

.bx--date-picker__icon--warn path:first-of-type{
  fill:#000;
  opacity:1
}

.bx--date-picker__icon--invalid{
  fill:#da1e28
}

.bx--date-picker__icon~.bx--date-picker__input{
  padding-right:3rem
}

.bx--date-picker__input:disabled~.bx--date-picker__icon{
  cursor:not-allowed;
  fill:#c6c6c6
}

.bx--date-picker--range>.bx--date-picker-container:first-child{
  margin-right:.0625rem
}

.bx--date-picker--range .bx--date-picker-container,.bx--date-picker--range .bx--date-picker__input{
  width:8.96875rem
}

.bx--date-picker.bx--skeleton input,.bx--date-picker__input.bx--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:100%
}

.bx--date-picker.bx--skeleton input:hover,.bx--date-picker.bx--skeleton input:focus,.bx--date-picker.bx--skeleton input:active,.bx--date-picker__input.bx--skeleton:hover,.bx--date-picker__input.bx--skeleton:focus,.bx--date-picker__input.bx--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--date-picker.bx--skeleton input::before,.bx--date-picker__input.bx--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--date-picker.bx--skeleton input::before,.bx--date-picker__input.bx--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--date-picker.bx--skeleton input::-moz-placeholder, .bx--date-picker__input.bx--skeleton::-moz-placeholder{
  color:transparent
}

.bx--date-picker.bx--skeleton input:-ms-input-placeholder, .bx--date-picker__input.bx--skeleton:-ms-input-placeholder{
  color:transparent
}

.bx--date-picker.bx--skeleton input::placeholder,.bx--date-picker__input.bx--skeleton::placeholder{
  color:transparent
}

.bx--date-picker.bx--skeleton .bx--label{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:4.6875rem;
  height:.875rem
}

.bx--date-picker.bx--skeleton .bx--label:hover,.bx--date-picker.bx--skeleton .bx--label:focus,.bx--date-picker.bx--skeleton .bx--label:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--date-picker.bx--skeleton .bx--label::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--date-picker.bx--skeleton .bx--label::before{
    -webkit-animation:none;
    animation:none
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--date-picker__icon{
    fill:ButtonText
  }
}

.bx--dropdown__wrapper--inline{
  display:inline-grid;
  align-items:center;
  grid-gap:0 1.5rem;
  grid-template:auto auto/auto -webkit-min-content;
  grid-template:auto auto/auto min-content
}

.bx--dropdown__wrapper--inline .bx--label{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

.bx--dropdown__wrapper--inline .bx--label,.bx--dropdown__wrapper--inline .bx--form__helper-text,.bx--dropdown__wrapper--inline .bx--form-requirement{
  margin:0
}

.bx--dropdown__wrapper--inline .bx--form-requirement{
  grid-column:2
}

.bx--dropdown{
  outline:2px solid transparent;
  outline-offset:-2px;
  position:relative;
  display:block;
  width:100%;
  height:2.5rem;
  border:none;
  border-bottom:1px solid #8d8d8d;
  background-color:#fff;
  color:#161616;
  cursor:pointer;
  list-style:none;
  outline:2px solid transparent;
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--dropdown:hover{
  background-color:#e5e5e5
}

.bx--dropdown .bx--list-box__field{
  text-align:left
}

.bx--dropdown--xl,.bx--dropdown--lg{
  height:3rem;
  max-height:3rem
}

.bx--dropdown--xl .bx--dropdown__arrow,.bx--dropdown--lg .bx--dropdown__arrow{
  top:1rem
}

.bx--dropdown--sm{
  height:2rem;
  max-height:2rem
}

.bx--dropdown--sm .bx--dropdown__arrow{
  top:.5rem
}

.bx--dropdown--open{
  border-bottom-color:#e0e0e0
}

.bx--dropdown--invalid{
  outline:2px solid #da1e28;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--dropdown--invalid{
    outline-style:dotted
  }
}

.bx--dropdown--invalid .bx--dropdown-text{
  padding-right:3.5rem
}

.bx--dropdown--invalid+.bx--form-requirement{
  display:inline-block;
  max-height:12.5rem;
  color:#da1e28
}

.bx--dropdown__invalid-icon{
  position:absolute;
  top:50%;
  right:2.5rem;
  fill:#da1e28;
  transform:translateY(-50%)
}

.bx--dropdown--open:hover{
  background-color:#fff
}

.bx--dropdown--open:focus{
  outline:1px solid transparent
}

.bx--dropdown--open .bx--dropdown-list{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  max-height:13.75rem;
  transition:max-height 110ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--dropdown--light{
  background-color:#f4f4f4
}

.bx--dropdown--light:hover{
  background-color:#e5e5e5
}

.bx--dropdown--up .bx--dropdown-list{
  bottom:2rem
}

.bx--dropdown__arrow{
  position:absolute;
  top:.8125rem;
  right:1rem;
  fill:#161616;
  pointer-events:none;
  transform-origin:50% 45%;
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

button.bx--dropdown-text{
  width:100%;
  border:none;
  background:none;
  color:#161616;
  text-align:left
}

button.bx--dropdown-text:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  button.bx--dropdown-text:focus{
    outline-style:dotted
  }
}

.bx--dropdown-text{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:block;
  overflow:hidden;
  height:calc(100% + 1px);
  padding-right:2.625rem;
  padding-left:1rem;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--dropdown-list{
  outline:2px solid transparent;
  outline-offset:-2px;
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  position:absolute;
  z-index:9100;
  display:flex;
  width:100%;
  max-height:0;
  flex-direction:column;
  background-color:#fff;
  list-style:none;
  overflow-x:hidden;
  overflow-y:auto;
  transition:max-height 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--dropdown--light .bx--dropdown-list{
  background-color:#f4f4f4
}

.bx--dropdown:not(.bx--dropdown--open) .bx--dropdown-item{
  visibility:hidden
}

.bx--dropdown-item{
  position:relative;
  opacity:0;
  transition:visibility 70ms cubic-bezier(0.2, 0, 0.38, 0.9),opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  visibility:inherit
}

.bx--dropdown-item:hover{
  background-color:#e5e5e5
}

.bx--dropdown-item:hover+.bx--dropdown-item .bx--dropdown-link{
  border-color:transparent
}

.bx--dropdown-item:active{
  background-color:#e0e0e0
}

.bx--dropdown-item:first-of-type .bx--dropdown-link{
  border-top-color:transparent
}

.bx--dropdown-item:last-of-type .bx--dropdown-link{
  border-bottom:none
}

.bx--dropdown-link{
  outline:2px solid transparent;
  outline-offset:-2px;
  display:block;
  overflow:hidden;
  height:2.5rem;
  padding:.6875rem 0;
  border:1px solid transparent;
  border-top-color:#e0e0e0;
  margin:0 1rem;
  color:#525252;
  font-weight:normal;
  line-height:1rem;
  text-decoration:none;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--dropdown-link:hover{
  border-color:transparent;
  color:#161616
}

.bx--dropdown--light .bx--dropdown-link{
  border-top-color:#e0e0e0
}

.bx--dropdown--sm .bx--dropdown-link{
  height:2rem;
  padding-top:.4375rem;
  padding-bottom:.4375rem
}

.bx--dropdown--xl .bx--dropdown-link{
  height:3rem;
  padding-top:.9375rem;
  padding-bottom:.9375rem
}

.bx--dropdown--focused,.bx--dropdown-link:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  padding:.6875rem 1rem;
  margin:0
}

@media screen and (prefers-contrast){
  .bx--dropdown--focused,.bx--dropdown-link:focus{
    outline-style:dotted
  }
}

.bx--dropdown-list[aria-activedescendant] .bx--dropdown-link:focus{
  padding:.6875rem 0;
  margin:0 1rem;
  outline:none
}

.bx--dropdown-list[aria-activedescendant] .bx--dropdown--focused:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  padding:.6875rem 1rem;
  margin:0
}

@media screen and (prefers-contrast){
  .bx--dropdown-list[aria-activedescendant] .bx--dropdown--focused:focus{
    outline-style:dotted
  }
}

.bx--dropdown-list[aria-activedescendant] .bx--dropdown-item:active{
  background-color:inherit
}

.bx--dropdown-item:hover .bx--dropdown-link{
  border-bottom-color:#e5e5e5
}

.bx--dropdown--open .bx--dropdown__arrow{
  transform:rotate(-180deg)
}

.bx--dropdown--open.bx--dropdown--xl .bx--dropdown-list{
  max-height:16.5rem
}

.bx--dropdown--open.bx--dropdown--sm .bx--dropdown-list{
  max-height:11rem
}

.bx--dropdown--open .bx--dropdown-item{
  opacity:1
}

.bx--dropdown--disabled{
  border-bottom-color:transparent
}

.bx--dropdown--disabled:hover{
  background-color:#fff
}

.bx--dropdown--disabled:focus{
  outline:none
}

.bx--dropdown--disabled .bx--dropdown-text,.bx--dropdown--disabled .bx--list-box__label{
  color:#c6c6c6
}

.bx--dropdown--disabled .bx--dropdown__arrow,.bx--dropdown--disabled .bx--list-box__menu-icon svg{
  fill:#c6c6c6
}

.bx--dropdown--disabled.bx--dropdown--light:hover{
  background-color:#f4f4f4
}

.bx--dropdown--disabled .bx--list-box__field,.bx--dropdown--disabled .bx--list-box__menu-icon{
  cursor:not-allowed
}

.bx--dropdown--auto-width{
  width:auto;
  max-width:25rem
}

.bx--dropdown--inline{
  display:inline-block;
  width:auto;
  border-bottom-color:transparent;
  background-color:transparent;
  justify-self:start;
  transition:background 70ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--dropdown--inline:hover{
  background-color:#e5e5e5
}

.bx--dropdown--inline.bx--dropdown--disabled{
  background-color:transparent
}

.bx--dropdown--inline .bx--dropdown__arrow{
  top:.5rem;
  right:.5rem
}

.bx--dropdown--inline.bx--dropdown--open{
  background-color:transparent
}

.bx--dropdown--inline .bx--dropdown-text{
  display:inline-block;
  overflow:visible;
  height:2rem;
  padding:.4375rem 2rem .4375rem .75rem;
  color:#161616
}

.bx--dropdown--inline.bx--dropdown--disabled .bx--dropdown-text{
  color:#c6c6c6
}

.bx--dropdown--inline.bx--dropdown--disabled:focus .bx--dropdown-text{
  outline:0
}

.bx--dropdown--inline.bx--dropdown--invalid .bx--dropdown__invalid-icon{
  right:2rem
}

.bx--dropdown--inline.bx--dropdown--invalid .bx--dropdown-text{
  padding-right:3.5rem
}

.bx--dropdown--inline.bx--dropdown--open:focus .bx--dropdown-list{
  box-shadow:0 2px 6px rgba(0,0,0,.3)
}

.bx--dropdown--inline .bx--dropdown-link{
  font-weight:normal
}

.bx--dropdown--show-selected .bx--dropdown--selected{
  display:block;
  background-color:#e5e5e5;
  color:#161616
}

.bx--dropdown--show-selected .bx--dropdown--selected:hover{
  background-color:#e0e0e0
}

.bx--dropdown--show-selected .bx--dropdown--selected .bx--dropdown-link{
  border-top-color:transparent
}

.bx--dropdown--show-selected .bx--dropdown--selected+.bx--dropdown-item .bx--dropdown-link{
  border-top-color:transparent
}

.bx--dropdown--show-selected .bx--dropdown--selected .bx--list-box__menu-item__selected-icon{
  display:block
}

.bx--dropdown-v2.bx--skeleton,.bx--dropdown.bx--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none
}

.bx--dropdown-v2.bx--skeleton:hover,.bx--dropdown-v2.bx--skeleton:focus,.bx--dropdown-v2.bx--skeleton:active,.bx--dropdown.bx--skeleton:hover,.bx--dropdown.bx--skeleton:focus,.bx--dropdown.bx--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--dropdown-v2.bx--skeleton::before,.bx--dropdown.bx--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--dropdown-v2.bx--skeleton::before,.bx--dropdown.bx--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--dropdown .bx--list-box__field{
    outline:1px solid transparent
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--list-box__menu-item__option{
    outline:none
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--list-box__menu-item__selected-icon{
    fill:ButtonText
  }
}

@-webkit-keyframes rotate{
  0%{
    transform:rotate(0deg)
  }

  100%{
    transform:rotate(360deg)
  }
}

@keyframes rotate{
  0%{
    transform:rotate(0deg)
  }

  100%{
    transform:rotate(360deg)
  }
}

@-webkit-keyframes rotate-end-p1{
  100%{
    transform:rotate(360deg)
  }
}

@keyframes rotate-end-p1{
  100%{
    transform:rotate(360deg)
  }
}

@-webkit-keyframes rotate-end-p2{
  100%{
    transform:rotate(-360deg)
  }
}

@keyframes rotate-end-p2{
  100%{
    transform:rotate(-360deg)
  }
}

@-webkit-keyframes init-stroke{
  0%{
    stroke-dashoffset:276.4608
  }

  100%{
    stroke-dashoffset:52.527552
  }
}

@keyframes init-stroke{
  0%{
    stroke-dashoffset:276.4608
  }

  100%{
    stroke-dashoffset:52.527552
  }
}

@-webkit-keyframes stroke-end{
  0%{
    stroke-dashoffset:52.527552
  }

  100%{
    stroke-dashoffset:276.4608
  }
}

@keyframes stroke-end{
  0%{
    stroke-dashoffset:52.527552
  }

  100%{
    stroke-dashoffset:276.4608
  }
}

.bx--loading{
  -webkit-animation-duration:690ms;
  animation-duration:690ms;
  -webkit-animation-fill-mode:forwards;
  animation-fill-mode:forwards;
  -webkit-animation-iteration-count:infinite;
  animation-iteration-count:infinite;
  -webkit-animation-name:rotate;
  animation-name:rotate;
  -webkit-animation-timing-function:linear;
  animation-timing-function:linear;
  width:5.5rem;
  height:5.5rem
}

.bx--loading svg circle{
  -webkit-animation-duration:10ms;
  animation-duration:10ms;
  -webkit-animation-name:init-stroke;
  animation-name:init-stroke;
  -webkit-animation-timing-function:cubic-bezier(0.2, 0, 0.38, 0.9);
  animation-timing-function:cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--loading__svg{
  fill:transparent
}

.bx--loading__svg circle{
  stroke-dasharray:276.4608 276.4608;
  stroke-linecap:butt;
  stroke-width:10
}

.bx--loading__stroke{
  stroke:#0f62fe;
  stroke-dashoffset:52.527552
}

.bx--loading--small .bx--loading__stroke{
  stroke-dashoffset:143.759616
}

.bx--loading--stop{
  -webkit-animation:rotate-end-p1 700ms cubic-bezier(0.2, 0, 1, 0.9) forwards,rotate-end-p2 700ms cubic-bezier(0.2, 0, 1, 0.9) 700ms forwards;
  animation:rotate-end-p1 700ms cubic-bezier(0.2, 0, 1, 0.9) forwards,rotate-end-p2 700ms cubic-bezier(0.2, 0, 1, 0.9) 700ms forwards
}

.bx--loading--stop svg circle{
  -webkit-animation-delay:700ms;
  animation-delay:700ms;
  -webkit-animation-duration:700ms;
  animation-duration:700ms;
  -webkit-animation-fill-mode:forwards;
  animation-fill-mode:forwards;
  -webkit-animation-name:stroke-end;
  animation-name:stroke-end;
  -webkit-animation-timing-function:cubic-bezier(0.2, 0, 1, 0.9);
  animation-timing-function:cubic-bezier(0.2, 0, 1, 0.9)
}

.bx--loading--small{
  width:1rem;
  height:1rem
}

.bx--loading--small circle{
  stroke-width:16
}

.bx--loading--small .bx--loading__svg{
  stroke:#0f62fe
}

.bx--loading__background{
  stroke:#e0e0e0;
  stroke-dashoffset:-22
}

@media not all and (-webkit-min-device-pixel-ratio: 0), not all and (min-resolution: 0.001dpcm){
  @supports(-webkit-appearance: none) and (stroke-color: transparent){
    circle.bx--loading__background{
      stroke-dasharray:265;
      stroke-dashoffset:0
    }
  }
}

.bx--loading-overlay{
  position:fixed;
  z-index:6000;
  top:0;
  left:0;
  display:flex;
  width:100%;
  height:100%;
  align-items:center;
  justify-content:center;
  background-color:rgba(22,22,22,.5);
  transition:background-color 720ms cubic-bezier(0.4, 0.14, 0.3, 1)
}

.bx--loading-overlay--stop{
  display:none
}

.bx--file{
  width:100%
}

.bx--file--invalid{
  margin-right:.5rem;
  fill:#da1e28
}

.bx--file--label{
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  margin-bottom:.5rem;
  color:#161616
}

.bx--file--label--disabled{
  color:#c6c6c6
}

.bx--file-input{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap
}

.bx--file-btn{
  display:inline-flex;
  padding-right:4rem;
  margin:0
}

.bx--file-browse-btn{
  display:inline-block;
  width:100%;
  max-width:20rem;
  margin-bottom:.5rem;
  color:#0f62fe;
  cursor:pointer;
  outline:2px solid transparent;
  outline-offset:-2px;
  transition:110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--file-browse-btn:focus,.bx--file-browse-btn:hover{
  outline:2px solid #0f62fe
}

.bx--file-browse-btn:hover,.bx--file-browse-btn:focus,.bx--file-browse-btn:active,.bx--file-browse-btn:active:visited{
  text-decoration:underline
}

.bx--file-browse-btn:active{
  color:#161616
}

.bx--file-browse-btn--disabled{
  color:#c6c6c6;
  cursor:no-drop;
  text-decoration:none
}

.bx--file-browse-btn--disabled:hover,.bx--file-browse-btn--disabled:focus{
  color:#c6c6c6;
  outline:none;
  text-decoration:none
}

.bx--file-browse-btn--disabled .bx--file__drop-container{
  border:1px dashed #c6c6c6
}

.bx--label-description{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  margin-bottom:1rem;
  color:#525252
}

.bx--label-description--disabled{
  color:#c6c6c6
}

.bx--file-btn~.bx--file-container{
  margin-top:1.5rem
}

.bx--btn~.bx--file-container{
  margin-top:1rem
}

.bx--file .bx--file-container,.bx--file~.bx--file-container{
  margin-top:.5rem
}

.bx--file__selected-file{
  display:grid;
  max-width:20rem;
  min-height:3rem;
  align-items:center;
  margin-bottom:.5rem;
  background-color:#fff;
  gap:.75rem 1rem;
  grid-auto-rows:auto;
  grid-template-columns:1fr auto;
  word-break:break-word
}

.bx--file__selected-file:last-child{
  margin-bottom:0
}

.bx--file__selected-file .bx--form-requirement{
  display:block;
  max-height:none;
  margin:0;
  grid-column:1/-1
}

.bx--file__selected-file .bx--inline-loading__animation .bx--loading{
  margin-right:0
}

.bx--file__selected-file .bx--file-filename{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  overflow:hidden;
  margin-left:1rem;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--file__selected-file--field,.bx--file__selected-file--md{
  min-height:2.5rem;
  gap:.5rem 1rem
}

.bx--file__selected-file--sm{
  min-height:2rem;
  gap:.25rem 1rem
}

.bx--file__selected-file--invalid__wrapper{
  outline:2px solid #da1e28;
  outline-offset:-2px;
  max-width:20rem;
  margin-bottom:.5rem;
  background-color:#fff;
  outline-width:1px
}

@media screen and (prefers-contrast){
  .bx--file__selected-file--invalid__wrapper{
    outline-style:dotted
  }
}

.bx--file__selected-file--invalid{
  outline:2px solid #da1e28;
  outline-offset:-2px;
  padding:.75rem 0
}

@media screen and (prefers-contrast){
  .bx--file__selected-file--invalid{
    outline-style:dotted
  }
}

.bx--file__selected-file--invalid.bx--file__selected-file--sm{
  padding:.25rem 0
}

.bx--file__selected-file--invalid.bx--file__selected-file--field,.bx--file__selected-file--invalid.bx--file__selected-file--md{
  padding:.5rem 0
}

.bx--file__selected-file--invalid .bx--form-requirement{
  padding-top:1rem;
  border-top:1px solid #e0e0e0
}

.bx--file__selected-file--invalid.bx--file__selected-file--sm .bx--form-requirement{
  padding-top:.4375rem
}

.bx--file__selected-file--invalid.bx--file__selected-file--field .bx--form-requirement,.bx--file__selected-file--invalid.bx--file__selected-file--md .bx--form-requirement{
  padding-top:.6875rem
}

.bx--file__selected-file--invalid .bx--form-requirement__title,.bx--file__selected-file--invalid .bx--form-requirement__supplement{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  padding:0 1rem
}

.bx--file__selected-file--invalid .bx--form-requirement__title{
  color:#da1e28
}

.bx--file__selected-file--invalid .bx--form-requirement__supplement{
  color:#161616
}

.bx--file__selected-file--invalid+.bx--form-requirement{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  display:block;
  overflow:visible;
  max-height:12.5rem;
  padding:.5rem 1rem;
  color:#da1e28;
  font-weight:400
}

.bx--file__selected-file--invalid+.bx--form-requirement .bx--form-requirement__supplement{
  padding-bottom:.5rem;
  color:#161616
}

.bx--file__state-container{
  display:flex;
  min-width:1.5rem;
  align-items:center;
  justify-content:center;
  padding-right:1rem
}

.bx--file__state-container .bx--loading__svg{
  stroke:#161616
}

.bx--file__state-container .bx--file-complete{
  cursor:pointer;
  fill:#0f62fe
}

.bx--file__state-container .bx--file-complete:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--file__state-container .bx--file-complete:focus{
    outline-style:dotted
  }
}

.bx--file__state-container .bx--file-complete [data-icon-path=inner-path]{
  fill:#fff;
  opacity:1
}

.bx--file__state-container .bx--file-invalid{
  width:1rem;
  height:1rem;
  fill:#da1e28
}

.bx--file__state-container .bx--file-close{
  display:flex;
  width:1.5rem;
  height:1.5rem;
  align-items:center;
  justify-content:center;
  padding:0;
  border:none;
  background-color:transparent;
  cursor:pointer;
  fill:#161616
}

.bx--file__state-container .bx--file-close:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--file__state-container .bx--file-close:focus{
    outline-style:dotted
  }
}

.bx--file__state-container .bx--file-close svg path{
  fill:#161616
}

.bx--file__state-container .bx--inline-loading__animation{
  margin-right:-0.5rem
}

.bx--file__drop-container{
  display:flex;
  overflow:hidden;
  height:6rem;
  align-items:flex-start;
  justify-content:space-between;
  padding:1rem;
  border:1px dashed #8d8d8d
}

.bx--file__drop-container--drag-over{
  background:none;
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--file__selected-file{
    outline:1px solid transparent
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--file__state-container .bx--file-close svg path{
    fill:ButtonText
  }
}

@keyframes rotate{
  0%{
    transform:rotate(0deg)
  }

  100%{
    transform:rotate(360deg)
  }
}

@keyframes rotate-end-p1{
  100%{
    transform:rotate(360deg)
  }
}

@keyframes rotate-end-p2{
  100%{
    transform:rotate(-360deg)
  }
}

@keyframes init-stroke{
  0%{
    stroke-dashoffset:276.4608
  }

  100%{
    stroke-dashoffset:52.527552
  }
}

@keyframes stroke-end{
  0%{
    stroke-dashoffset:52.527552
  }

  100%{
    stroke-dashoffset:276.4608
  }
}

@-webkit-keyframes stroke{
  100%{
    stroke-dashoffset:0
  }
}

@keyframes stroke{
  100%{
    stroke-dashoffset:0
  }
}

.bx--inline-loading{
  display:flex;
  width:100%;
  min-height:2rem;
  align-items:center
}

.bx--inline-loading__text{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  color:#525252
}

.bx--inline-loading__animation{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:.5rem
}

.bx--inline-loading__checkmark-container{
  fill:#198038
}

.bx--inline-loading__checkmark-container.bx--inline-loading__svg{
  position:absolute;
  top:.75rem;
  width:.75rem
}

.bx--inline-loading__checkmark-container[hidden]{
  display:none
}

.bx--inline-loading__checkmark{
  -webkit-animation-duration:250ms;
  animation-duration:250ms;
  -webkit-animation-fill-mode:forwards;
  animation-fill-mode:forwards;
  -webkit-animation-name:stroke;
  animation-name:stroke;
  fill:none;
  stroke:#0f62fe;
  stroke-dasharray:12;
  stroke-dashoffset:12;
  stroke-width:1.8;
  transform-origin:50% 50%
}

.bx--inline-loading--error{
  width:1rem;
  height:1rem;
  fill:#da1e28
}

.bx--inline-loading--error[hidden]{
  display:none
}

.bx--loading--small .bx--inline-loading__svg{
  stroke:#0f62fe
}

@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){
  .bx--inline-loading__checkmark-container{
    top:1px;
    right:.5rem
  }

  .bx--inline-loading__checkmark{
    -webkit-animation:none;
    animation:none;
    stroke-dasharray:0;
    stroke-dashoffset:0
  }
}

.bx--list--nested,.bx--list--unordered,.bx--list--ordered,.bx--list--ordered--native{
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px;
  list-style:none
}

.bx--list--expressive,.bx--list--expressive .bx--list--nested{
  font-size:1rem;
  font-weight:400;
  line-height:1.5;
  letter-spacing:0
}

.bx--list--ordered--native{
  list-style:decimal
}

.bx--list__item{
  color:#161616
}

.bx--list--nested{
  margin-left:2rem
}

.bx--list--nested .bx--list__item{
  padding-left:.25rem
}

.bx--list--ordered:not(.bx--list--nested){
  counter-reset:item
}

.bx--list--ordered:not(.bx--list--nested)>.bx--list__item{
  position:relative
}

.bx--list--ordered:not(.bx--list--nested)>.bx--list__item::before{
  position:absolute;
  left:-1.5rem;
  content:counter(item) ".";
  counter-increment:item
}

.bx--list--ordered.bx--list--nested,.bx--list--ordered--native.bx--list--nested{
  list-style-type:lower-latin
}

.bx--list--unordered>.bx--list__item{
  position:relative
}

.bx--list--unordered>.bx--list__item::before{
  position:absolute;
  left:-1rem;
  content:"\u2013"
}

.bx--list--unordered.bx--list--nested>.bx--list__item::before{
  left:-0.75rem;
  content:"\u25AA"
}

@keyframes rotate{
  0%{
    transform:rotate(0deg)
  }

  100%{
    transform:rotate(360deg)
  }
}

@keyframes rotate-end-p1{
  100%{
    transform:rotate(360deg)
  }
}

@keyframes rotate-end-p2{
  100%{
    transform:rotate(-360deg)
  }
}

@keyframes init-stroke{
  0%{
    stroke-dashoffset:276.4608
  }

  100%{
    stroke-dashoffset:52.527552
  }
}

@keyframes stroke-end{
  0%{
    stroke-dashoffset:52.527552
  }

  100%{
    stroke-dashoffset:276.4608
  }
}

.bx--menu{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  position:fixed;
  z-index:9000;
  min-width:13rem;
  max-width:18rem;
  padding:.25rem 0;
  background-color:#fff;
  visibility:hidden
}

.bx--menu--open{
  visibility:visible
}

.bx--menu--open:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--menu--open:focus{
    outline-style:dotted
  }
}

.bx--menu--invisible{
  opacity:0;
  pointer-events:none
}

.bx--menu-option{
  position:relative;
  height:2rem;
  background-color:#fff;
  color:#161616;
  cursor:pointer;
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--menu-option:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--menu-option:focus{
    outline-style:dotted
  }
}

.bx--menu-option--active,.bx--menu-option:hover{
  background-color:#e5e5e5
}

.bx--menu-option--danger:hover,.bx--menu-option--danger:focus{
  background-color:#da1e28;
  color:#fff
}

.bx--menu-option>.bx--menu{
  margin-top:calc(0.25rem * -1)
}

.bx--menu-option__content{
  display:flex;
  height:100%;
  align-items:center;
  justify-content:space-between;
  padding:0 1rem
}

.bx--menu-option__content--disabled{
  background-color:#fff;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--menu-option__content--disabled .bx--menu-option__label,.bx--menu-option__content--disabled .bx--menu-option__info,.bx--menu-option__content--disabled .bx--menu-option__icon{
  color:#c6c6c6
}

.bx--menu-option__content--indented .bx--menu-option__label{
  margin-left:1rem
}

.bx--menu-option__label{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  overflow:hidden;
  flex-grow:1;
  padding:.25rem 0;
  text-align:start;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--menu-option__info{
  display:inline-flex;
  margin-left:1rem
}

.bx--menu-option__icon{
  display:flex;
  width:1rem;
  height:1rem;
  align-items:center;
  margin-right:.5rem
}

.bx--menu-divider{
  width:100%;
  height:1px;
  margin:.25rem 0;
  background-color:#e0e0e0
}

.bx--menu--md .bx--menu-option{
  height:2.5rem
}

.bx--menu--lg .bx--menu-option{
  height:3rem
}

.bx--modal{
  position:fixed;
  z-index:9000;
  top:0;
  left:0;
  display:flex;
  width:100vw;
  height:100vh;
  align-items:center;
  justify-content:center;
  background-color:rgba(22,22,22,.5);
  content:"";
  opacity:0;
  transition:opacity 240ms cubic-bezier(0.4, 0.14, 1, 1),visibility 0ms linear 240ms;
  visibility:hidden
}

.bx--modal.is-visible{
  opacity:1;
  transition:opacity 240ms cubic-bezier(0, 0, 0.3, 1),visibility 0ms linear;
  visibility:inherit
}

.bx--modal .bx--pagination,.bx--modal .bx--pagination__control-buttons,.bx--modal .bx--text-input,.bx--modal .bx--text-area,.bx--modal .bx--search-input,.bx--modal .bx--select-input,.bx--modal .bx--dropdown,.bx--modal .bx--dropdown-list,.bx--modal .bx--number input[type=number],.bx--modal .bx--date-picker__input,.bx--modal .bx--multi-select{
  background-color:#f4f4f4
}

.bx--modal.is-visible .bx--modal-container{
  transform:translate3d(0, 0, 0);
  transition:transform 240ms cubic-bezier(0, 0, 0.3, 1)
}

.bx--modal-container{
  position:fixed;
  top:0;
  display:grid;
  overflow:hidden;
  width:100%;
  height:100%;
  max-height:100%;
  background-color:#fff;
  grid-template-columns:100%;
  grid-template-rows:auto 1fr auto;
  outline:3px solid transparent;
  outline-offset:-3px;
  transform:translate3d(0, -24px, 0);
  transform-origin:top center;
  transition:transform 240ms cubic-bezier(0.4, 0.14, 1, 1)
}

@media(min-width: 42rem){
  .bx--modal-container{
    position:static;
    width:84%;
    height:auto;
    max-height:90%
  }
}

@media(min-width: 66rem){
  .bx--modal-container{
    width:60%;
    max-height:84%
  }
}

@media(min-width: 82rem){
  .bx--modal-container{
    width:48%
  }
}

.bx--modal-content{
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px;
  position:relative;
  padding-top:.5rem;
  padding-right:1rem;
  padding-left:1rem;
  margin-bottom:3rem;
  color:#161616;
  font-weight:400;
  grid-column:1/-1;
  grid-row:2/-2;
  overflow-y:auto
}

.bx--modal-content:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--modal-content:focus{
    outline-style:dotted
  }
}

.bx--modal-content p,.bx--modal-content__regular-content{
  padding-right:20%;
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px
}

.bx--modal-content--with-form{
  padding-right:1rem
}

.bx--modal-header{
  padding-top:1rem;
  padding-right:3rem;
  padding-left:1rem;
  margin-bottom:.5rem;
  grid-column:1/-1;
  grid-row:1/1
}

.bx--modal-header__label{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  margin-bottom:.25rem;
  color:#525252
}

.bx--modal-header__heading{
  font-size:1.25rem;
  font-weight:400;
  line-height:1.4;
  letter-spacing:0;
  color:#161616
}

.bx--modal-container--xs .bx--modal-content__regular-content{
  padding-right:1rem
}

.bx--modal-container--xs .bx--modal-content p{
  padding-right:0
}

@media(min-width: 42rem){
  .bx--modal-container--xs{
    width:48%
  }
}

@media(min-width: 66rem){
  .bx--modal-container--xs{
    width:32%;
    max-height:48%
  }
}

@media(min-width: 82rem){
  .bx--modal-container--xs{
    width:24%
  }
}

.bx--modal-container--sm .bx--modal-content__regular-content{
  padding-right:1rem
}

.bx--modal-container--sm .bx--modal-content p{
  padding-right:0
}

@media(min-width: 42rem){
  .bx--modal-container--sm{
    width:60%
  }
}

@media(min-width: 66rem){
  .bx--modal-container--sm{
    width:42%;
    max-height:72%
  }

  .bx--modal-container--sm .bx--modal-content p,.bx--modal-container--sm .bx--modal-content__regular-content{
    padding-right:20%
  }
}

@media(min-width: 82rem){
  .bx--modal-container--sm{
    width:36%
  }
}

@media(min-width: 42rem){
  .bx--modal-container--lg{
    width:96%
  }
}

@media(min-width: 66rem){
  .bx--modal-container--lg{
    width:84%;
    max-height:96%
  }
}

@media(min-width: 82rem){
  .bx--modal-container--lg{
    width:72%
  }
}

.bx--modal-scroll-content>*:last-child{
  padding-bottom:2rem
}

.bx--modal-content--overflow-indicator{
  position:absolute;
  bottom:3rem;
  left:0;
  width:100%;
  height:2rem;
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  content:"";
  grid-column:1/-1;
  grid-row:2/-2;
  pointer-events:none
}

@media not all and (-webkit-min-device-pixel-ratio: 0), not all and (min-resolution: 0.001dpcm){
  @supports(-webkit-appearance: none) and (stroke-color: transparent){
    .bx--modal-content--overflow-indicator{
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff)
    }
  }
}

.bx--modal-content:focus~.bx--modal-content--overflow-indicator{
  width:calc(100% - 4px);
  margin:0 2px 2px
}

@media screen and (-ms-high-contrast: active){
  .bx--modal-scroll-content>*:last-child{
    padding-bottom:0
  }

  .bx--modal-content--overflow-indicator{
    display:none
  }
}

.bx--modal-footer{
  display:flex;
  height:4rem;
  justify-content:flex-end;
  margin-top:auto;
  grid-column:1/-1;
  grid-row:-1/-1
}

.bx--modal-footer .bx--btn{
  max-width:none;
  height:4rem;
  flex:0 1 50%;
  padding-top:1rem;
  padding-bottom:2rem;
  margin:0
}

.bx--modal-footer--three-button .bx--btn{
  flex:0 1 25%;
  align-items:flex-start
}

.bx--modal-close{
  position:absolute;
  z-index:2;
  top:0;
  right:0;
  overflow:hidden;
  width:3rem;
  height:3rem;
  padding:.75rem;
  border:2px solid transparent;
  background-color:transparent;
  cursor:pointer;
  transition:background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--modal-close:hover{
  background-color:#e5e5e5
}

.bx--modal-close:focus{
  border-color:#0f62fe;
  outline:none
}

.bx--modal-close::-moz-focus-inner{
  border:0
}

.bx--modal-close__icon{
  width:1.25rem;
  height:1.25rem;
  fill:#161616
}

.bx--body--with-modal-open{
  overflow:hidden
}

.bx--body--with-modal-open .bx--tooltip,.bx--body--with-modal-open .bx--overflow-menu-options{
  z-index:9000
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--modal-close__icon{
    fill:ButtonText
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--modal-close:focus{
    color:Highlight;
    outline:1px solid Highlight
  }
}

.bx--multi-select .bx--tag{
  min-width:auto;
  margin:0 .5rem 0 0
}

.bx--multi-select--filterable .bx--tag{
  margin:0 .5rem 0 1rem
}

.bx--multi-select .bx--list-box__menu{
  min-width:auto
}

.bx--multi-select .bx--list-box__menu-item__option .bx--checkbox-wrapper{
  display:flex;
  width:100%;
  height:100%;
  align-items:center
}

.bx--multi-select .bx--list-box__menu-item__option .bx--checkbox-label{
  display:inline-block;
  overflow:hidden;
  width:100%;
  padding-left:1.75rem;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--multi-select .bx--list-box__menu-item__option>.bx--form-item{
  flex-direction:row;
  margin:0
}

.bx--multi-select .bx--list-box__menu-item .bx--checkbox:checked~.bx--checkbox-label-text{
  color:#161616
}

.bx--multi-select--filterable{
  transition:outline-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--multi-select--filterable.bx--combo-box .bx--text-input{
  border:.125rem solid transparent;
  background-clip:padding-box;
  outline:none
}

.bx--multi-select--filterable--input-focused{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--multi-select--filterable--input-focused{
    outline-style:dotted
  }
}

.bx--multi-select--filterable.bx--multi-select--selected .bx--text-input{
  padding-left:0
}

.bx--multi-select--filterable.bx--list-box--disabled:hover .bx--text-input{
  background-color:#fff
}

.bx--multi-select--filterable .bx--list-box__selection--multi{
  margin:0 0 0 1rem
}

.bx--multi-select--filterable.bx--multi-select--inline,.bx--multi-select--filterable.bx--multi-select--inline .bx--text-input{
  border-bottom:0;
  background-color:transparent
}

.bx--number{
  position:relative;
  display:flex;
  width:100%;
  flex-direction:column
}

.bx--number input[type=number]{
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  outline:2px solid transparent;
  outline-offset:-2px;
  display:inline-flex;
  width:100%;
  min-width:9.375rem;
  height:2.5rem;
  box-sizing:border-box;
  padding-right:8rem;
  padding-left:1rem;
  border:0;
  border-bottom:.0625rem solid #8d8d8d;
  -moz-appearance:textfield;
  background-color:#fff;
  border-radius:0;
  color:#161616;
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  font-weight:300;
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--number input[type=number]:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--number input[type=number]:focus{
    outline-style:dotted
  }
}

.bx--number input[type=number]:disabled~.bx--number__controls{
  cursor:not-allowed;
  pointer-events:none
}

.bx--number input[type=number]:disabled~.bx--number__controls svg{
  fill:#c6c6c6
}

.bx--number input[type=number]::-ms-clear{
  display:none
}

.bx--number input[type=number]::-webkit-inner-spin-button{
  -webkit-appearance:none;
  appearance:none
}

.bx--number--xl.bx--number input[type=number],.bx--number--lg.bx--number input[type=number]{
  padding-right:9rem
}

.bx--number--sm.bx--number input[type=number]{
  padding-right:7rem
}

.bx--number input[type=number]:disabled{
  border-bottom-color:transparent;
  background-color:#fff;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--number__input-wrapper{
  position:relative;
  display:flex;
  align-items:center
}

.bx--number__controls{
  position:absolute;
  top:50%;
  right:0;
  display:flex;
  width:5rem;
  height:100%;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  transform:translateY(-50%)
}

.bx--number__control-btn{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  position:relative;
  display:inline-flex;
  height:100%;
  align-items:center;
  justify-content:center;
  border-bottom:.0625rem solid #8d8d8d;
  color:#161616
}

.bx--number__control-btn::-moz-focus-inner{
  border:0
}

.bx--number__control-btn::before,.bx--number__control-btn::after{
  position:absolute;
  top:.125rem;
  display:block;
  width:.125rem;
  height:2.25rem;
  background-color:#fff;
  content:""
}

.bx--number__control-btn::before{
  left:0
}

.bx--number__control-btn::after{
  right:0
}

.bx--number__control-btn svg{
  fill:currentColor
}

.bx--number__control-btn:focus{
  outline:1px solid #0f62fe;
  color:#161616;
  outline-offset:-2px;
  outline-width:2px
}

@media screen and (prefers-contrast){
  .bx--number__control-btn:focus{
    outline-style:dotted
  }
}

.bx--number__control-btn:hover{
  background-color:#e5e5e5;
  color:#161616;
  cursor:pointer
}

.bx--number__control-btn:hover::before,.bx--number__control-btn:hover::after{
  background-color:#e5e5e5
}

.bx--number__control-btn:focus::before,.bx--number__control-btn:focus::after,.bx--number__control-btn:hover:focus::before,.bx--number__control-btn:hover:focus::after{
  background-color:transparent
}

.bx--number__control-btn:disabled{
  border-bottom-color:transparent;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--number__control-btn.down-icon{
  order:1
}

.bx--number__control-btn.up-icon{
  order:2
}

.bx--number input[type=number]:focus~.bx--number__controls .bx--number__control-btn{
  border-bottom-width:0
}

.bx--number input[type=number]:focus~.bx--number__controls .bx--number__control-btn:hover{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  border:0
}

@media screen and (prefers-contrast){
  .bx--number input[type=number]:focus~.bx--number__controls .bx--number__control-btn:hover{
    outline-style:dotted
  }
}

.bx--number input[type=number][data-invalid]~.bx--number__controls .bx--number__control-btn{
  border-bottom-width:0
}

.bx--number input[type=number][data-invalid]:not(:focus)~.bx--number__controls .bx--number__control-btn:hover{
  outline:2px solid #da1e28;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--number input[type=number][data-invalid]:not(:focus)~.bx--number__controls .bx--number__control-btn:hover{
    outline-style:dotted
  }
}

.bx--number input[type=number]:focus~.bx--number__controls .bx--number__control-btn.up-icon::after{
  background-color:transparent
}

.bx--number input[type=number][data-invalid]~.bx--number__controls .bx--number__control-btn.up-icon::after{
  background-color:#da1e28
}

.bx--number input[type=number][data-invalid]:focus~.bx--number__controls .bx--number__control-btn.up-icon::after,.bx--number input[type=number][data-invalid]~.bx--number__controls .bx--number__control-btn.up-icon:focus::after{
  background-color:#0f62fe
}

.bx--number__rule-divider{
  position:absolute;
  z-index:6000;
  width:.0625rem;
  height:1rem;
  background-color:#e0e0e0
}

.bx--number__rule-divider:first-of-type{
  order:0
}

.bx--number__controls .bx--number__rule-divider:first-of-type{
  left:0;
  background-color:transparent
}

.bx--number__invalid+.bx--number__controls .bx--number__rule-divider:first-of-type{
  background-color:#e0e0e0
}

.bx--number--light .bx--number__rule-divider,.bx--number--light .bx--number__invalid+.bx--number__controls .bx--number__rule-divider:first-of-type{
  background-color:#e0e0e0
}

.bx--number input[type=number]:disabled+.bx--number__controls .bx--number__rule-divider:first-of-type{
  background-color:transparent
}

.bx--number input[type=number]:disabled+.bx--number__controls .bx--number__rule-divider{
  background-color:#c6c6c6
}

.bx--number__control-btn:focus~.bx--number__rule-divider{
  background-color:transparent
}

.bx--number__invalid{
  position:absolute;
  right:6rem;
  fill:#da1e28
}

.bx--number--xl .bx--number__invalid,.bx--number--lg .bx--number__invalid{
  right:7rem
}

.bx--number--sm .bx--number__invalid{
  right:5rem
}

.bx--number__invalid+.bx--number__rule-divider{
  position:absolute;
  right:5rem
}

.bx--number--xl .bx--number__invalid+.bx--number__rule-divider,.bx--number--lg .bx--number__invalid+.bx--number__rule-divider{
  right:6rem
}

.bx--number--sm .bx--number__invalid+.bx--number__rule-divider{
  right:4rem
}

.bx--number__control-btn.down-icon:hover~.bx--number__rule-divider,.bx--number__control-btn.up-icon:hover+.bx--number__rule-divider,.bx--number__control-btn.down-icon:focus~.bx--number__rule-divider,.bx--number__control-btn.up-icon:focus+.bx--number__rule-divider{
  background-color:transparent
}

.bx--number__invalid--warning{
  fill:#f1c21b
}

.bx--number__invalid--warning path:first-of-type{
  fill:#000;
  opacity:1
}

.bx--number--light input[type=number]{
  background-color:#f4f4f4
}

.bx--number--light input[type=number]:disabled{
  background-color:#f4f4f4
}

.bx--number--light .bx--number__control-btn::before,.bx--number--light .bx--number__control-btn::after{
  background-color:#f4f4f4
}

.bx--number--light .bx--number__control-btn:focus::before,.bx--number--light .bx--number__control-btn:focus::after{
  background-color:transparent
}

.bx--number--light .bx--number__control-btn:hover,.bx--number--light .bx--number__control-btn:not(:focus):hover::before,.bx--number--light .bx--number__control-btn:not(:focus):hover::after{
  background-color:#e5e5e5
}

.bx--number--xl input[type=number],.bx--number--lg input[type=number]{
  height:3rem
}

.bx--number--xl .bx--number__controls,.bx--number--lg .bx--number__controls{
  width:6rem
}

.bx--number--xl .bx--number__control-btn,.bx--number--lg .bx--number__control-btn{
  width:3rem
}

.bx--number--xl .bx--number__control-btn::before,.bx--number--xl .bx--number__control-btn::after,.bx--number--lg .bx--number__control-btn::before,.bx--number--lg .bx--number__control-btn::after{
  height:2.75rem
}

.bx--number--sm input[type=number]{
  height:2rem
}

.bx--number--sm .bx--number__controls{
  width:4rem
}

.bx--number--sm .bx--number__control-btn{
  width:2rem
}

.bx--number--sm .bx--number__control-btn::before,.bx--number--sm .bx--number__control-btn::after{
  height:1.75rem
}

.bx--number--nolabel .bx--label+.bx--form__helper-text{
  margin-top:0
}

.bx--number--nosteppers input[type=number]{
  padding-right:3rem
}

.bx--number--nosteppers .bx--number__invalid{
  right:1rem
}

.bx--number--readonly input[type=number]{
  background:transparent
}

.bx--number--readonly .bx--number__controls{
  display:none
}

.bx--number__readonly-icon{
  position:absolute;
  right:1rem
}

.bx--number.bx--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:100%;
  height:2.5rem
}

.bx--number.bx--skeleton:hover,.bx--number.bx--skeleton:focus,.bx--number.bx--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--number.bx--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--number.bx--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--number.bx--skeleton input[type=number]{
  display:none
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--number__control-btn:hover,.bx--number__control-btn:focus{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--number__control-btn{
    outline:1px solid transparent
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--number__control-btn svg{
    fill:ButtonText
  }
}

.bx--overflow-menu,.bx--overflow-menu__trigger{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  outline:2px solid transparent;
  outline-offset:-2px;
  position:relative;
  display:flex;
  width:2.5rem;
  height:2.5rem;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:outline 110ms cubic-bezier(0, 0, 0.38, 0.9),background-color 110ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--overflow-menu::-moz-focus-inner,.bx--overflow-menu__trigger::-moz-focus-inner{
  border:0
}

.bx--overflow-menu:focus,.bx--overflow-menu__trigger:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--overflow-menu:focus,.bx--overflow-menu__trigger:focus{
    outline-style:dotted
  }
}

.bx--overflow-menu:hover,.bx--overflow-menu__trigger:hover{
  background-color:#e5e5e5
}

.bx--overflow-menu--sm{
  width:2rem;
  height:2rem
}

.bx--overflow-menu--xl,.bx--overflow-menu--lg{
  width:3rem;
  height:3rem
}

.bx--overflow-menu__trigger.bx--tooltip--a11y.bx--tooltip__trigger:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--overflow-menu__trigger.bx--tooltip--a11y.bx--tooltip__trigger:focus{
    outline-style:dotted
  }
}

.bx--overflow-menu__trigger.bx--tooltip--a11y.bx--tooltip__trigger:focus svg{
  outline:none
}

.bx--overflow-menu.bx--overflow-menu--open,.bx--overflow-menu.bx--overflow-menu--open .bx--overflow-menu__trigger{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  background-color:#fff;
  transition:none
}

.bx--overflow-menu--light.bx--overflow-menu--open,.bx--overflow-menu--light.bx--overflow-menu--open .bx--overflow-menu__trigger{
  background-color:#f4f4f4
}

.bx--overflow-menu__icon{
  width:1rem;
  height:1rem;
  fill:#161616
}

.bx--overflow-menu-options{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  position:absolute;
  z-index:6000;
  top:32px;
  left:0;
  display:none;
  width:10rem;
  flex-direction:column;
  align-items:flex-start;
  background-color:#fff;
  list-style:none
}

.bx--overflow-menu-options::after{
  position:absolute;
  display:block;
  background-color:#fff;
  content:"";
  transition:background-color 110ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--overflow-menu.bx--overflow-menu--open:hover{
  background-color:#fff
}

.bx--overflow-menu-options--light{
  background-color:#f4f4f4
}

.bx--overflow-menu-options--light::after{
  background-color:#f4f4f4
}

.bx--overflow-menu.bx--overflow-menu--light.bx--overflow-menu--open:hover{
  background-color:#f4f4f4
}

.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after{
  top:-0.1875rem;
  left:0;
  width:2.5rem;
  height:.1875rem
}

.bx--overflow-menu-options[data-floating-menu-direction=top]::after{
  bottom:-0.5rem;
  left:0;
  width:2.5rem;
  height:.5rem
}

.bx--overflow-menu-options[data-floating-menu-direction=left]::after{
  top:0;
  right:-0.375rem;
  width:.375rem;
  height:2.5rem
}

.bx--overflow-menu-options[data-floating-menu-direction=right]::after{
  top:0;
  left:-0.375rem;
  width:.375rem;
  height:2.5rem
}

.bx--overflow-menu-options--sm.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after,.bx--overflow-menu-options--sm.bx--overflow-menu-options[data-floating-menu-direction=top]::after{
  width:2rem
}

.bx--overflow-menu-options--sm.bx--overflow-menu-options[data-floating-menu-direction=left]::after,.bx--overflow-menu-options--sm.bx--overflow-menu-options[data-floating-menu-direction=right]::after{
  height:2rem
}

.bx--overflow-menu-options--xl.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after,.bx--overflow-menu-options--xl.bx--overflow-menu-options[data-floating-menu-direction=top]::after,.bx--overflow-menu-options--lg.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after,.bx--overflow-menu-options--lg.bx--overflow-menu-options[data-floating-menu-direction=top]::after{
  width:3rem
}

.bx--overflow-menu-options--xl.bx--overflow-menu-options[data-floating-menu-direction=left]::after,.bx--overflow-menu-options--xl.bx--overflow-menu-options[data-floating-menu-direction=right]::after,.bx--overflow-menu-options--lg.bx--overflow-menu-options[data-floating-menu-direction=left]::after,.bx--overflow-menu-options--lg.bx--overflow-menu-options[data-floating-menu-direction=right]::after{
  height:3rem
}

.bx--overflow-menu--flip.bx--overflow-menu-options[data-floating-menu-direction=top]::after,.bx--overflow-menu--flip.bx--overflow-menu-options[data-floating-menu-direction=bottom]::after{
  right:0;
  left:auto
}

.bx--overflow-menu--flip.bx--overflow-menu-options[data-floating-menu-direction=left]::after,.bx--overflow-menu--flip.bx--overflow-menu-options[data-floating-menu-direction=right]::after{
  top:auto;
  bottom:0
}

.bx--overflow-menu-options--open{
  display:flex
}

.bx--overflow-menu-options__content{
  width:100%
}

.bx--overflow-menu-options__option{
  display:flex;
  width:100%;
  height:2.5rem;
  align-items:center;
  padding:0;
  background-color:transparent;
  transition:background-color 110ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--overflow-menu-options--sm .bx--overflow-menu-options__option{
  height:2rem
}

.bx--overflow-menu-options--xl .bx--overflow-menu-options__option,.bx--overflow-menu-options--lg .bx--overflow-menu-options__option{
  height:3rem
}

.bx--overflow-menu--divider{
  border-top:1px solid #e0e0e0
}

.bx--overflow-menu--light .bx--overflow-menu--divider{
  border-top:1px solid #e0e0e0
}

a.bx--overflow-menu-options__btn::before{
  display:inline-block;
  height:100%;
  content:"";
  vertical-align:middle
}

.bx--overflow-menu-options__btn{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  outline:2px solid transparent;
  outline-offset:-2px;
  display:inline-flex;
  width:100%;
  max-width:11.25rem;
  height:100%;
  align-items:center;
  padding:0 1rem;
  border:none;
  background-color:transparent;
  color:#525252;
  cursor:pointer;
  font-weight:400;
  text-align:left;
  transition:outline 110ms cubic-bezier(0, 0, 0.38, 0.9),background-color 110ms cubic-bezier(0, 0, 0.38, 0.9),color 110ms cubic-bezier(0, 0, 0.38, 0.9)
}

.bx--overflow-menu-options__btn:hover{
  color:#161616
}

.bx--overflow-menu-options__btn:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--overflow-menu-options__btn:focus{
    outline-style:dotted
  }
}

.bx--overflow-menu-options__btn::-moz-focus-inner{
  border:none
}

.bx--overflow-menu-options__btn svg{
  fill:#525252
}

.bx--overflow-menu-options__btn:hover svg{
  fill:#161616
}

.bx--overflow-menu-options__option-content{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--overflow-menu-options__option:hover{
  background-color:#e5e5e5
}

.bx--overflow-menu-options__option--danger .bx--overflow-menu-options__btn:hover,.bx--overflow-menu-options__option--danger .bx--overflow-menu-options__btn:focus{
  background-color:#da1e28;
  color:#fff
}

.bx--overflow-menu-options__option--danger .bx--overflow-menu-options__btn:hover svg,.bx--overflow-menu-options__option--danger .bx--overflow-menu-options__btn:focus svg{
  fill:currentColor
}

.bx--overflow-menu-options__option--disabled:hover{
  background-color:#fff;
  cursor:not-allowed
}

.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn{
  color:#c6c6c6;
  pointer-events:none
}

.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn:hover,.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn:active,.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn:focus{
  outline:2px solid transparent;
  outline-offset:-2px;
  background-color:#fff
}

.bx--overflow-menu-options__option--disabled .bx--overflow-menu-options__btn svg{
  fill:#c6c6c6
}

.bx--overflow-menu--flip{
  left:-140px
}

.bx--overflow-menu--flip::before{
  left:145px
}

.bx--overflow-menu__container{
  display:inline-block
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--overflow-menu:focus,.bx--overflow-menu-options__btn:focus{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--overflow-menu svg{
    fill:ButtonText
  }
}

.bx--pagination-nav{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  line-height:0
}

.bx--pagination-nav__list{
  display:flex;
  align-items:center;
  list-style:none
}

.bx--pagination-nav__list-item{
  padding:0
}

.bx--pagination-nav__list-item:first-child{
  padding-left:0
}

.bx--pagination-nav__list-item:last-child{
  padding-right:0
}

.bx--pagination-nav__page{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  position:relative;
  display:block;
  min-width:3rem;
  padding:1.0625rem .25rem;
  border-radius:0;
  color:#525252;
  font-weight:400;
  line-height:1;
  outline:0;
  text-align:center;
  text-decoration:none;
  transition:background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9),color 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

.bx--pagination-nav__page::-moz-focus-inner{
  border:0
}

.bx--pagination-nav__page:hover{
  background-color:#e5e5e5;
  color:#525252
}

.bx--pagination-nav__page:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--pagination-nav__page:focus{
    outline-style:dotted
  }
}

.bx--pagination-nav__page:disabled,.bx--pagination-nav__page.bx--pagination-nav__page--disabled{
  background:none;
  color:rgba(82,82,82,.5);
  outline:none;
  pointer-events:none
}

.bx--pagination-nav__page:not(.bx--pagination-nav__page--direction)::after{
  position:absolute;
  bottom:0;
  left:50%;
  display:block;
  width:0;
  height:.25rem;
  background-color:#0f62fe;
  content:"";
  opacity:0;
  transition:width 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--pagination-nav__page--active+.bx--pagination-nav__page::after,.bx--pagination-nav__page.bx--pagination-nav__page--active::after{
  left:calc(50% - 0.5rem);
  width:1rem;
  opacity:1
}

.bx--pagination-nav__page.bx--pagination-nav__page--active{
  background-color:initial;
  color:#525252;
  font-weight:600
}

.bx--pagination-nav__page .bx--pagination-nav__icon{
  fill:currentColor;
  pointer-events:none
}

.bx--pagination-nav__page--direction{
  display:flex;
  width:3rem;
  height:3rem;
  align-items:center;
  justify-content:center;
  line-height:0
}

.bx--pagination-nav__select{
  position:relative
}

.bx--pagination-nav__page--select{
  max-height:3rem;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  text-indent:calc(50% - 4.5px)
}

@-moz-document url-prefix(){
  .bx--pagination-nav__page--select{
    text-indent:0
  }
}

.bx--pagination-nav__select-icon-wrapper{
  position:absolute;
  top:0;
  width:100%;
  height:100%;
  pointer-events:none
}

.bx--pagination-nav__select-icon-wrapper:not(.bx--pagination-nav__page--direction)::after{
  position:absolute;
  bottom:0;
  left:50%;
  display:block;
  width:0;
  height:.25rem;
  background-color:#0f62fe;
  content:"";
  opacity:0;
  transition:width 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--pagination-nav__page--active+.bx--pagination-nav__select-icon-wrapper::after,.bx--pagination-nav__select-icon-wrapper.bx--pagination-nav__page--active::after{
  left:calc(50% - 0.5rem);
  width:1rem;
  opacity:1
}

.bx--pagination-nav__page--active+.bx--pagination-nav__select-icon-wrapper .bx--pagination-nav__select-icon{
  display:none
}

.bx--pagination-nav__select-icon{
  position:absolute;
  top:calc(50% - 0.5rem);
  left:calc(50% - 0.5rem);
  pointer-events:none
}

.bx--pagination-nav__accessibility-label{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap
}

.bx--select{
  position:relative;
  display:flex;
  width:100%;
  flex-direction:column;
  align-items:flex-start
}

.bx--select-input__wrapper{
  position:relative;
  display:flex;
  width:100%;
  align-items:center
}

.bx--select-input{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  outline:2px solid transparent;
  outline-offset:-2px;
  display:block;
  width:100%;
  height:2.5rem;
  padding:0 3rem 0 1rem;
  border:none;
  border-bottom:1px solid #8d8d8d;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background-color:#fff;
  border-radius:0;
  color:#161616;
  cursor:pointer;
  font-family:inherit;
  opacity:1;
  transition:outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--select-input:hover{
  background-color:#e5e5e5
}

.bx--select-input::-ms-expand{
  display:none
}

@-moz-document url-prefix(){
  .bx--select-input:-moz-focusring,.bx--select-input::-moz-focus-inner{
    background-image:none;
    color:transparent;
    text-shadow:0 0 0 #000
  }
}

.bx--select-input:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  color:#161616
}

@media screen and (prefers-contrast){
  .bx--select-input:focus{
    outline-style:dotted
  }
}

.bx--select-input:disabled,.bx--select-input:hover:disabled{
  border-bottom-color:#fff;
  background-color:#fff;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--select-input--sm{
  height:2rem;
  max-height:2rem
}

.bx--select-input--xl,.bx--select-input--lg{
  height:3rem;
  max-height:3rem
}

.bx--select--disabled .bx--label,.bx--select--disabled .bx--form__helper-text{
  color:#c6c6c6
}

.bx--select-input__wrapper[data-invalid] .bx--select-input,.bx--select--warning .bx--select-input{
  padding-right:4.5rem
}

.bx--select-input:disabled~.bx--select__arrow{
  fill:#c6c6c6
}

.bx--select--light .bx--select-input{
  background-color:#f4f4f4
}

.bx--select--light .bx--select-input:hover{
  background-color:#e5e5e5
}

.bx--select--light .bx--select-input:disabled,.bx--select--light .bx--select-input:hover:disabled{
  background-color:#f4f4f4;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--select__arrow{
  position:absolute;
  top:0;
  right:1rem;
  height:100%;
  fill:#161616;
  pointer-events:none
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--select__arrow path{
    fill:ButtonText
  }
}

.bx--select__invalid-icon{
  position:absolute;
  right:2.5rem
}

.bx--select-input__wrapper[data-invalid] .bx--select-input~.bx--select__invalid-icon{
  fill:#da1e28
}

.bx--select__invalid-icon--warning{
  fill:#f1c21b
}

.bx--select__invalid-icon--warning path[fill]{
  fill:#000;
  opacity:1
}

optgroup.bx--select-optgroup,.bx--select-option{
  background-color:#e5e5e5;
  color:#161616
}

optgroup.bx--select-optgroup:disabled,.bx--select-option:disabled{
  color:#c6c6c6
}

.bx--select--inline{
  display:flex;
  flex-direction:row;
  align-items:center
}

.bx--select--inline.bx--select--invalid .bx--label,.bx--select--inline.bx--select--invalid .bx--form__helper-text{
  align-self:flex-start;
  margin-top:.8125rem
}

.bx--select--inline .bx--form__helper-text{
  margin-bottom:0;
  margin-left:.5rem
}

.bx--select--inline .bx--label{
  margin:0 .5rem 0 0;
  white-space:nowrap
}

.bx--select--inline .bx--select-input{
  width:auto;
  padding-right:2rem;
  padding-left:.5rem;
  border-bottom:none;
  background-color:transparent;
  color:#161616
}

.bx--select--inline .bx--select-input:focus,.bx--select--inline .bx--select-input:focus option,.bx--select--inline .bx--select-input:focus optgroup{
  background-color:#f4f4f4
}

.bx--select--inline .bx--select-input[disabled],.bx--select--inline .bx--select-input[disabled]:hover{
  background-color:#fff
}

.bx--select--inline .bx--select__arrow{
  right:.5rem
}

.bx--select--inline.bx--select--invalid .bx--select-input{
  padding-right:3.5rem
}

.bx--select--inline.bx--select--invalid .bx--select-input~.bx--select__invalid-icon{
  right:2rem
}

.bx--select--inline .bx--select-input:disabled{
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--select--inline .bx--select-input:disabled~*{
  cursor:not-allowed
}

.bx--select.bx--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:100%;
  height:2.5rem
}

.bx--select.bx--skeleton:hover,.bx--select.bx--skeleton:focus,.bx--select.bx--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--select.bx--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--select.bx--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--select.bx--skeleton .bx--select-input{
  display:none
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--select__arrow{
    fill:ButtonText
  }
}

.bx--text-input{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  outline:2px solid transparent;
  outline-offset:-2px;
  width:100%;
  height:2.5rem;
  padding:0 1rem;
  border:none;
  border-bottom:1px solid #8d8d8d;
  background-color:#fff;
  color:#161616;
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--text-input:focus,.bx--text-input:active{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--text-input:focus,.bx--text-input:active{
    outline-style:dotted
  }
}

.bx--text-input-wrapper svg[hidden]{
  display:none
}

.bx--text-input--xl,.bx--text-input--lg{
  height:3rem
}

.bx--text-input--sm{
  height:2rem
}

.bx--password-input{
  padding-right:2.5rem
}

.bx--text-input--sm.bx--password-input{
  padding-right:2rem
}

.bx--text-input--lg.bx--password-input{
  padding-right:3rem
}

.bx--text-input::-moz-placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--text-input:-ms-input-placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--text-input::placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--text-input--light{
  background-color:#f4f4f4
}

.bx--text-input__field-wrapper{
  position:relative;
  display:flex;
  width:100%
}

.bx--text-input__invalid-icon,.bx--text-input__readonly-icon{
  position:absolute;
  top:50%;
  right:1rem;
  transform:translateY(-50%)
}

.bx--text-input__invalid-icon{
  fill:#da1e28
}

.bx--text-input__invalid-icon--warning{
  fill:#f1c21b
}

.bx--text-input__invalid-icon--warning path:first-of-type{
  fill:#000;
  opacity:1
}

.bx--text-input--password__visibility{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--text-input--password__visibility:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--text-input--password__visibility:focus{
    outline-style:dotted
  }
}

.bx--text-input--password__visibility:focus{
  outline:1px solid transparent
}

.bx--text-input--password__visibility:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--text-input--password__visibility:focus svg{
    outline-style:dotted
  }
}

.bx--text-input--password__visibility::before,.bx--text-input--password__visibility::after,.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--text-input--password__visibility::before,.bx--text-input--password__visibility::after,.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{
    display:inline-block
  }
}

.bx--text-input--password__visibility::before,.bx--text-input--password__visibility::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--text-input--password__visibility.bx--tooltip--a11y::before,.bx--text-input--password__visibility.bx--tooltip--a11y::after{
  transition:none
}

.bx--text-input--password__visibility::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--text-input--password__visibility::after,.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--text-input--password__visibility::after,.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--text-input--password__visibility::after,.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--text-input--password__visibility::after,.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--text-input--password__visibility::after,.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--text-input--password__visibility::after{
  content:attr(aria-label)
}

.bx--text-input--password__visibility.bx--tooltip--a11y::after{
  content:none
}

.bx--text-input--password__visibility.bx--tooltip--visible::before,.bx--text-input--password__visibility.bx--tooltip--visible::after,.bx--text-input--password__visibility:hover::before,.bx--text-input--password__visibility:hover::after,.bx--text-input--password__visibility:focus::before,.bx--text-input--password__visibility:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--text-input--password__visibility.bx--tooltip--visible .bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--visible+.bx--assistive-text,.bx--text-input--password__visibility:hover .bx--assistive-text,.bx--text-input--password__visibility:hover+.bx--assistive-text,.bx--text-input--password__visibility:focus .bx--assistive-text,.bx--text-input--password__visibility:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--text-input--password__visibility.bx--tooltip--visible .bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--visible+.bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--text-input--password__visibility:hover .bx--assistive-text,.bx--text-input--password__visibility:hover+.bx--assistive-text,.bx--text-input--password__visibility:hover.bx--tooltip--a11y::before,.bx--text-input--password__visibility:focus .bx--assistive-text,.bx--text-input--password__visibility:focus+.bx--assistive-text,.bx--text-input--password__visibility:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--text-input--password__visibility.bx--tooltip--hidden .bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--text-input--password__visibility.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--text-input--password__visibility .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--text-input--password__visibility::before,.bx--text-input--password__visibility::after,.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--text-input--password__visibility::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--text-input--password__visibility::after,.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{
  bottom:-0.8125rem;
  transform:translate(-50%, 100%)
}

.bx--text-input--password__visibility,.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger{
  outline:2px solid transparent;
  outline-offset:-2px;
  position:absolute;
  right:0;
  display:flex;
  width:2.5rem;
  height:100%;
  min-height:auto;
  align-items:center;
  justify-content:center;
  padding:0;
  border:0;
  background:none;
  cursor:pointer;
  transition:outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--text-input--sm+.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger{
  width:2rem
}

.bx--text-input--lg+.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger{
  width:3rem
}

.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg{
  fill:#525252;
  transition:fill 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg{
    fill:ButtonText
  }
}

.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:focus{
    outline-style:dotted
  }
}

.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:hover svg,.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:focus svg{
  fill:#161616
}

.bx--text-input--invalid,.bx--text-input--warning,.bx--text-input-wrapper--readonly .bx--text-input{
  padding-right:2.5rem
}

.bx--text-input--invalid.bx--password-input{
  padding-right:4rem
}

.bx--text-input--invalid+.bx--text-input--password__visibility,.bx--text-input--invalid+.bx--text-input--password__visibility__toggle{
  right:1rem
}

.bx--password-input-wrapper .bx--text-input__invalid-icon{
  right:2.5rem
}

.bx--text-input:disabled+.bx--text-input--password__visibility svg,.bx--text-input:disabled+.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg{
  cursor:not-allowed;
  fill:#c6c6c6
}

.bx--text-input:disabled+.bx--text-input--password__visibility svg:hover,.bx--text-input:disabled+.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg:hover{
  fill:#c6c6c6
}

.bx--text-input:disabled{
  outline:2px solid transparent;
  outline-offset:-2px;
  border-bottom:1px solid transparent;
  background-color:#fff;
  color:#c6c6c6;
  cursor:not-allowed;
  -webkit-text-fill-color:#c6c6c6
}

.bx--text-input--light:disabled{
  background-color:#f4f4f4
}

.bx--text-input:disabled::-moz-placeholder{
  color:#c6c6c6;
  opacity:1
}

.bx--text-input:disabled:-ms-input-placeholder{
  color:#c6c6c6;
  opacity:1
}

.bx--text-input:disabled::placeholder{
  color:#c6c6c6;
  opacity:1
}

.bx--text-input--invalid{
  outline:2px solid #da1e28;
  outline-offset:-2px;
  box-shadow:none
}

@media screen and (prefers-contrast){
  .bx--text-input--invalid{
    outline-style:dotted
  }
}

.bx--text-input--invalid .bx--text-input--password__visibility,.bx--text-input--invalid .bx--text-input--password__visibility__toggle{
  right:2.5rem
}

.bx--skeleton.bx--text-input{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none
}

.bx--skeleton.bx--text-input:hover,.bx--skeleton.bx--text-input:focus,.bx--skeleton.bx--text-input:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--skeleton.bx--text-input::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--skeleton.bx--text-input::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--form--fluid .bx--text-input-wrapper{
  position:relative;
  background:#fff;
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--form--fluid .bx--label{
  position:absolute;
  z-index:1;
  top:.8125rem;
  left:1rem;
  margin:0
}

.bx--form--fluid .bx--form__helper-text{
  display:none
}

.bx--form--fluid .bx--text-input{
  min-height:4rem;
  padding:2rem 1rem .8125rem
}

.bx--text-input__divider,.bx--form--fluid .bx--text-input__divider{
  display:none
}

.bx--form--fluid .bx--text-input--invalid,.bx--form--fluid .bx--text-input--warn{
  border-bottom:none
}

.bx--form--fluid .bx--text-input--invalid+.bx--text-input__divider,.bx--form--fluid .bx--text-input--warn+.bx--text-input__divider{
  display:block;
  border-style:solid;
  border-color:#e0e0e0;
  border-bottom:none;
  margin:0 1rem
}

.bx--form--fluid .bx--text-input__invalid-icon{
  top:5rem
}

.bx--form--fluid .bx--text-input-wrapper--light{
  background:#f4f4f4
}

.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid{
  outline:2px solid transparent;
  outline-offset:-2px
}

.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]:not(:focus){
  outline:2px solid #da1e28;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--form--fluid .bx--text-input__field-wrapper[data-invalid]:not(:focus){
    outline-style:dotted
  }
}

.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--form--fluid .bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:focus{
    outline-style:dotted
  }
}

.bx--text-input-wrapper.bx--text-input-wrapper--inline{
  flex-flow:row wrap
}

.bx--text-input-wrapper .bx--label--inline{
  flex:1;
  margin:.8125rem 0 0 0;
  overflow-wrap:break-word;
  word-break:break-word
}

.bx--text-input-wrapper .bx--label--inline--sm{
  margin-top:.5625rem
}

.bx--text-input-wrapper .bx--label--inline--xl,.bx--text-input-wrapper .bx--label--inline--lg{
  margin-top:1.0625rem
}

.bx--text-input__label-helper-wrapper{
  max-width:8rem;
  flex:2;
  flex-direction:column;
  margin-right:1.5rem;
  overflow-wrap:break-word
}

.bx--text-input-wrapper .bx--form__helper-text--inline{
  margin-top:.125rem
}

.bx--text-input__field-outer-wrapper{
  display:flex;
  width:100%;
  flex:1 1 auto;
  flex-direction:column;
  align-items:flex-start
}

.bx--text-input__field-outer-wrapper--inline{
  flex:8;
  flex-direction:column
}

.bx--form--fluid .bx--text-input-wrapper--readonly,.bx--text-input-wrapper--readonly .bx--text-input{
  background:transparent
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--text-input--password__visibility,.bx--btn.bx--btn--icon-only.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg,.bx--btn.bx--btn--icon-only.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:hover svg{
    fill:ButtonText
  }
}

.bx--data-table-container+.bx--pagination{
  border-top:0
}

.bx--pagination{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:flex;
  width:calc(100% - 1px);
  min-height:2.5rem;
  align-items:center;
  justify-content:space-between;
  border-top:1px solid #e0e0e0;
  background-color:#fff;
  overflow-x:auto
}

@media(min-width: 42rem){
  .bx--pagination{
    overflow:initial
  }

  .bx--pagination .bx--pagination__control-buttons{
    display:flex
  }
}

@media(max-width: 41.98rem){
  .bx--pagination .bx--pagination__left>*,.bx--pagination .bx--pagination__right>*{
    display:none
  }

  .bx--pagination .bx--pagination__items-count{
    display:initial
  }

  .bx--pagination .bx--pagination__control-buttons{
    display:flex
  }
}

.bx--pagination--sm{
  min-height:2rem
}

.bx--pagination--lg{
  min-height:3rem
}

.bx--pagination .bx--select{
  height:100%;
  align-items:center
}

.bx--pagination .bx--select-input--inline__wrapper{
  display:flex;
  height:100%
}

.bx--pagination .bx--select-input{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  width:auto;
  min-width:auto;
  height:100%;
  padding:0 2.25rem 0 1rem;
  background-color:#fff;
  line-height:2.5rem
}

.bx--pagination--sm .bx--select-input{
  line-height:2rem
}

.bx--pagination--lg .bx--select-input{
  line-height:3rem
}

.bx--pagination .bx--select-input:hover{
  background:#e5e5e5
}

.bx--pagination .bx--select--inline .bx--select-input:focus,.bx--pagination .bx--select--inline .bx--select-input:focus option,.bx--pagination .bx--select--inline .bx--select-input:focus optgroup{
  background-color:#fff
}

.bx--pagination .bx--select__arrow{
  top:50%;
  transform:translate(-0.5rem, -50%)
}

.bx--pagination .bx--select__item-count .bx--select-input{
  border-right:.0625rem solid #e0e0e0
}

.bx--pagination .bx--select__page-number .bx--select-input{
  border-left:1px solid #e0e0e0
}

.bx--pagination__left,.bx--pagination__right{
  display:flex;
  height:100%;
  align-items:center
}

.bx--pagination__left>.bx--form-item,.bx--pagination__right>.bx--form-item{
  height:100%
}

.bx--pagination__left .bx--pagination__text,.bx--pagination__right .bx--pagination__text{
  white-space:nowrap
}

.bx--pagination__left .bx--pagination__text{
  margin-right:.0625rem
}

.bx--pagination__right .bx--pagination__text{
  margin-right:1rem;
  margin-left:.0625rem
}

.bx--pagination__left{
  padding:0 1rem 0 0
}

@media(min-width: 42rem){
  .bx--pagination__left{
    padding:0 1rem
  }
}

@media(min-width: 42rem){
  .bx--pagination__text{
    display:inline-block
  }
}

span.bx--pagination__text{
  margin-left:1rem;
  color:#525252
}

.bx--pagination__button,.bx--btn--ghost.bx--pagination__button{
  display:flex;
  width:2.5rem;
  height:2.5rem;
  min-height:2rem;
  align-items:center;
  justify-content:center;
  border:none;
  border-left:1px solid #e0e0e0;
  margin:0;
  background:none;
  cursor:pointer;
  fill:#161616;
  transition:outline 110ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--pagination--sm .bx--pagination__button,.bx--pagination--sm .bx--btn--ghost.bx--pagination__button{
  width:2rem;
  height:2rem
}

.bx--pagination--lg .bx--pagination__button,.bx--pagination--lg .bx--btn--ghost.bx--pagination__button{
  width:3rem;
  height:3rem
}

.bx--pagination__button:focus,.bx--btn--ghost:focus.bx--pagination__button{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  border-left:0
}

@media screen and (prefers-contrast){
  .bx--pagination__button:focus,.bx--btn--ghost:focus.bx--pagination__button{
    outline-style:dotted
  }
}

.bx--pagination__button:hover,.bx--btn--ghost:hover.bx--pagination__button{
  background:#e5e5e5
}

.bx--pagination__button--no-index,.bx--btn--ghost.bx--pagination__button--no-index{
  cursor:not-allowed;
  fill:#c6c6c6
}

.bx--pagination__button:disabled:hover,.bx--pagination__button--no-index:hover,.bx--btn--ghost:disabled:hover.bx--pagination__button,.bx--btn--ghost:hover.bx--pagination__button--no-index{
  border-color:#e0e0e0;
  background:#fff;
  cursor:not-allowed;
  fill:#c6c6c6
}

.bx--pagination.bx--skeleton .bx--skeleton__text{
  margin-right:1rem;
  margin-bottom:0
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--pagination__button,.bx--btn--ghost.bx--pagination__button{
    outline:1px solid transparent
  }
}

.bx--progress-bar__label{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:block;
  margin-bottom:.5rem;
  color:#161616
}

.bx--progress-bar__track{
  position:relative;
  width:100%;
  height:.5rem;
  background-color:#fff
}

.bx--progress-bar--big .bx--progress-bar__track{
  height:.5rem
}

.bx--progress-bar--small .bx--progress-bar__track{
  height:.25rem
}

.bx--progress-bar__bar{
  display:block;
  width:100%;
  height:100%;
  background-color:#0f62fe;
  transform:scaleX(0);
  transform-origin:0 50%;
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--progress-bar--indeterminate .bx--progress-bar__track::after{
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  -webkit-animation-duration:1400ms;
  animation-duration:1400ms;
  -webkit-animation-iteration-count:infinite;
  animation-iteration-count:infinite;
  -webkit-animation-name:progress-bar-indeterminate;
  animation-name:progress-bar-indeterminate;
  -webkit-animation-timing-function:linear;
  animation-timing-function:linear;
  background-image:linear-gradient(90deg, #0f62fe 12.5%, transparent 12.5%);
  background-position-x:0%;
  background-size:200% 100%;
  content:""
}

.bx--progress-bar__helper-text{
  font-size:.75rem;
  line-height:1.33333;
  letter-spacing:.32px;
  margin-top:.25rem;
  color:#525252
}

@-webkit-keyframes progress-bar-indeterminate{
  0%{
    background-position-x:25%
  }

  80%,100%{
    background-position-x:-105%
  }
}

@keyframes progress-bar-indeterminate{
  0%{
    background-position-x:25%
  }

  80%,100%{
    background-position-x:-105%
  }
}

.bx--tooltip__label{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  display:inline-flex;
  align-items:center;
  color:#525252
}

.bx--tooltip__label:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__label:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger svg{
  fill:#525252
}

.bx--tooltip__trigger:not(.bx--btn--icon-only){
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  font-size:1rem
}

.bx--tooltip__trigger:not(.bx--btn--icon-only)::-moz-focus-inner{
  border:0
}

.bx--tooltip__trigger:not(.bx--btn--icon-only):focus{
  outline:1px solid #0f62fe;
  fill:#0353e9
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger:not(.bx--btn--icon-only):focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger:not(.bx--btn--icon-only)[disabled] svg{
  fill:#c6c6c6
}

.bx--tooltip__label .bx--tooltip__trigger{
  margin-left:.5rem
}

.bx--tooltip__label--bold{
  font-weight:600
}

.bx--tooltip{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  position:absolute;
  z-index:6000;
  display:none;
  min-width:13rem;
  max-width:18rem;
  padding:1rem;
  margin-top:.25rem;
  background:#393939;
  border-radius:.125rem;
  color:#fff;
  word-wrap:break-word
}

.bx--tooltip:focus{
  box-shadow:inset 0 0 0 1px #393939,inset 0 0 0 2px #f4f4f4;
  outline:0
}

.bx--tooltip.bx--tooltip--top.bx--tooltip--align-start,.bx--tooltip.bx--tooltip--bottom.bx--tooltip--align-start{
  transform:translate(calc(50% - 22px), 0)
}

.bx--tooltip.bx--tooltip--top.bx--tooltip--align-start .bx--tooltip__caret,.bx--tooltip.bx--tooltip--bottom.bx--tooltip--align-start .bx--tooltip__caret{
  margin-left:15px
}

.bx--tooltip.bx--tooltip--top.bx--tooltip--align-end,.bx--tooltip.bx--tooltip--bottom.bx--tooltip--align-end{
  transform:translate(calc(22px - 50%), 0)
}

.bx--tooltip.bx--tooltip--top.bx--tooltip--align-end .bx--tooltip__caret,.bx--tooltip.bx--tooltip--bottom.bx--tooltip--align-end .bx--tooltip__caret{
  margin-right:15px
}

.bx--tooltip.bx--tooltip--left.bx--tooltip--align-start{
  transform:translate(0, calc(-15px + 50%))
}

.bx--tooltip.bx--tooltip--left.bx--tooltip--align-start .bx--tooltip__caret{
  top:14px
}

.bx--tooltip.bx--tooltip--left.bx--tooltip--align-end{
  transform:translate(0, calc(31px - 50%))
}

.bx--tooltip.bx--tooltip--left.bx--tooltip--align-end .bx--tooltip__caret{
  top:initial;
  bottom:25px
}

.bx--tooltip.bx--tooltip--right.bx--tooltip--align-start{
  transform:translate(0, calc(-26px + 50%))
}

.bx--tooltip.bx--tooltip--right.bx--tooltip--align-start .bx--tooltip__caret{
  top:26px
}

.bx--tooltip.bx--tooltip--right.bx--tooltip--align-end{
  transform:translate(0, calc(20px - 50%))
}

.bx--tooltip.bx--tooltip--right.bx--tooltip--align-end .bx--tooltip__caret{
  top:initial;
  bottom:12px
}

.bx--tooltip p{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  text-align:left
}

.bx--tooltip button{
  padding-right:2rem
}

.bx--tooltip .bx--btn:focus{
  border-color:#fff;
  outline-color:#393939
}

.bx--tooltip .bx--link{
  color:#78a9ff;
  font-size:.875rem
}

.bx--tooltip .bx--link:focus{
  outline:1px solid #fff;
  outline-offset:2px
}

.bx--tooltip .bx--link:active,.bx--tooltip .bx--link:active:visited,.bx--tooltip .bx--link:active:visited:hover{
  color:#fff
}

.bx--tooltip .bx--link:visited{
  color:#78a9ff
}

.bx--tooltip .bx--tooltip__content[tabindex="-1"]:focus{
  outline:none
}

.bx--tooltip .bx--tooltip__caret{
  position:absolute;
  top:calc(-0.4296875rem + 1px);
  right:0;
  left:0;
  width:0;
  height:0;
  border-right:.4296875rem solid transparent;
  border-bottom:.4296875rem solid #393939;
  border-left:.4296875rem solid transparent;
  margin:0 auto;
  content:""
}

.bx--tooltip .bx--tooltip__footer{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top:1rem
}

.bx--tooltip[data-floating-menu-direction=left]{
  margin-left:calc(0.5rem * -1)
}

.bx--tooltip[data-floating-menu-direction=left] .bx--tooltip__caret{
  top:50%;
  right:calc(-0.4296875rem + 1px);
  left:auto;
  transform:rotate(90deg) translate(50%, -50%)
}

.bx--tooltip[data-floating-menu-direction=top]{
  margin-top:calc(0.5rem * -1)
}

.bx--tooltip[data-floating-menu-direction=top] .bx--tooltip__caret{
  top:auto;
  bottom:calc(-0.4296875rem + 1px);
  transform:rotate(180deg)
}

.bx--tooltip[data-floating-menu-direction=right]{
  margin-left:.5rem
}

.bx--tooltip[data-floating-menu-direction=right] .bx--tooltip__caret{
  top:50%;
  right:auto;
  left:calc(-0.4296875rem + 1px);
  transform:rotate(270deg) translate(50%, -50%)
}

.bx--tooltip[data-floating-menu-direction=bottom]{
  margin-top:.5rem
}

.bx--tooltip__heading{
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  margin-bottom:.5rem
}

.bx--tooltip--shown{
  display:block;
  margin-top:0
}

.bx--tooltip--definition{
  position:relative
}

.bx--tooltip--definition .bx--tooltip__trigger{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  position:relative;
  display:inline-flex;
  border-bottom:1px dotted #0f62fe;
  color:#161616
}

.bx--tooltip--definition .bx--tooltip__trigger:hover+.bx--tooltip--definition__top,.bx--tooltip--definition .bx--tooltip__trigger:hover+.bx--tooltip--definition__bottom{
  display:block
}

.bx--tooltip--definition .bx--tooltip__trigger:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip--definition .bx--tooltip__trigger:focus{
    outline-style:dotted
  }
}

.bx--tooltip--definition .bx--tooltip__trigger:focus+.bx--tooltip--definition__top,.bx--tooltip--definition .bx--tooltip__trigger:focus+.bx--tooltip--definition__bottom{
  display:block
}

.bx--tooltip--definition__bottom,.bx--tooltip--definition__top{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  position:absolute;
  z-index:1;
  display:none;
  width:13rem;
  padding:.5rem 1rem;
  margin-top:.75rem;
  background:#393939;
  border-radius:.125rem;
  pointer-events:none
}

.bx--tooltip--definition__bottom p,.bx--tooltip--definition__top p{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  color:#fff
}

.bx--tooltip--definition__bottom .bx--tooltip__caret,.bx--tooltip--definition__top .bx--tooltip__caret{
  position:absolute;
  right:0;
  left:0;
  width:.6rem;
  height:.6rem;
  margin-left:1rem;
  background:#393939
}

.bx--tooltip--definition__bottom .bx--tooltip__caret{
  top:-0.2rem;
  transform:rotate(-135deg)
}

.bx--tooltip--definition__top{
  margin-top:-2rem;
  transform:translateY(-100%)
}

.bx--tooltip--definition__top .bx--tooltip__caret{
  bottom:-0.2rem;
  transform:rotate(45deg)
}

.bx--tooltip--definition__align-end{
  right:0
}

.bx--tooltip--definition__align-center{
  margin-left:50%;
  transform:translateX(-50%)
}

.bx--tooltip--definition__top.bx--tooltip--definition__align-center{
  margin-left:50%;
  transform:translate(-50%, -100%)
}

.bx--tooltip--definition__align-center .bx--tooltip__caret{
  left:auto;
  margin-right:calc(50% - 6px);
  margin-left:auto
}

.bx--tooltip--definition__align-end .bx--tooltip__caret{
  left:auto;
  margin-right:1rem;
  margin-left:auto
}

.bx--tooltip--definition.bx--tooltip--a11y{
  display:inline-flex
}

.bx--tooltip--definition button.bx--tooltip--a11y{
  margin:0
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  border-bottom:.0625rem dotted #525252;
  transition:border-color 110ms
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition:hover,.bx--tooltip__trigger.bx--tooltip__trigger--definition:focus{
  border-bottom-color:#0f62fe
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:default
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top+.bx--assistive-text{
    display:inline-block
  }
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--a11y::after{
  transition:none
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.5rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after{
  content:attr(aria-label)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--a11y::after{
  content:none
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--visible::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--visible::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:hover::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:hover::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:focus::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:hover.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:focus+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--hidden .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::before{
  top:-0.25rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top+.bx--assistive-text{
  top:-0.5625rem;
  left:0;
  transform:translate(0, -100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-start .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-start::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-start+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-start::before{
  top:-0.25rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-start+.bx--assistive-text{
  top:-0.5625rem;
  left:0;
  transform:translate(0, -100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-center .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-center::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-center+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-center::before{
  top:-0.25rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-center+.bx--assistive-text{
  top:-0.5625rem;
  left:50%;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-end .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-end::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-end+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-end::before{
  top:-0.25rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--top.bx--tooltip--align-end+.bx--assistive-text{
  top:-0.5625rem;
  right:0;
  left:auto;
  transform:translate(0, -100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:default
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom+.bx--assistive-text{
    display:inline-block
  }
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--a11y::after{
  transition:none
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.5rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after{
  content:attr(aria-label)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--a11y::after{
  content:none
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--visible::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--visible::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:hover::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:hover::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:focus::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:hover.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:focus+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--hidden .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::before{
  bottom:-0.25rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom+.bx--assistive-text{
  bottom:-0.5625rem;
  left:0;
  transform:translate(0, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--a11y+.bx--assistive-text{
  bottom:-0.5rem;
  transform:translate(0, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-start .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-start::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-start+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-start::before{
  bottom:-0.25rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-start+.bx--assistive-text{
  bottom:-0.5625rem;
  left:0;
  transform:translate(0, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-start.bx--tooltip--a11y+.bx--assistive-text{
  bottom:-0.5rem;
  transform:translate(0, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-center .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-center::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-center+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-center::before{
  bottom:-0.25rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-center+.bx--assistive-text{
  bottom:-0.5625rem;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-center.bx--tooltip--a11y+.bx--assistive-text{
  bottom:-0.5rem;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-end .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-end::before,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-end+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-end::before{
  bottom:-0.25rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-end+.bx--assistive-text{
  bottom:-0.5625rem;
  right:0;
  left:auto;
  transform:translate(0, 100%)
}

.bx--tooltip__trigger.bx--tooltip__trigger--definition.bx--tooltip--bottom.bx--tooltip--align-end.bx--tooltip--a11y+.bx--assistive-text{
  bottom:-0.5rem;
  transform:translate(0, 100%)
}

.bx--tooltip--icon{
  display:inline-flex;
  align-items:center
}

.bx--tooltip--icon__top,.bx--tooltip--icon__bottom{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--tooltip--icon__top::before,.bx--tooltip--icon__top::after,.bx--tooltip--icon__bottom::before,.bx--tooltip--icon__bottom::after{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  position:absolute;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none;
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip--icon__top::before,.bx--tooltip--icon__bottom::before{
  right:0;
  left:0;
  width:0;
  height:0;
  border-width:0 .25rem .3125rem .25rem;
  border-style:solid;
  border-color:transparent transparent #393939 transparent;
  margin:0 auto;
  margin-top:1px;
  margin-left:50%;
  content:""
}

.bx--tooltip--icon__top::after,.bx--tooltip--icon__bottom::after{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  min-width:1.5rem;
  max-width:13rem;
  height:1.5rem;
  padding:0 1rem;
  margin-left:50%;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  content:attr(aria-label);
  font-weight:400;
  pointer-events:none;
  transform:translateX(-50%);
  white-space:nowrap
}

.bx--tooltip--icon__top:hover::before,.bx--tooltip--icon__top:hover::after,.bx--tooltip--icon__top:focus::before,.bx--tooltip--icon__top:focus::after,.bx--tooltip--icon__bottom:hover::before,.bx--tooltip--icon__bottom:hover::after,.bx--tooltip--icon__bottom:focus::before,.bx--tooltip--icon__bottom:focus::after{
  opacity:1
}

.bx--tooltip--icon__top:hover svg,.bx--tooltip--icon__top:focus svg,.bx--tooltip--icon__bottom:hover svg,.bx--tooltip--icon__bottom:focus svg{
  fill:#525252
}

.bx--tooltip--icon__top:focus,.bx--tooltip--icon__bottom:focus{
  outline:1px solid transparent
}

.bx--tooltip--icon__top:focus svg,.bx--tooltip--icon__bottom:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip--icon__top:focus svg,.bx--tooltip--icon__bottom:focus svg{
    outline-style:dotted
  }
}

.bx--tooltip--icon__top::before{
  transform:translate(-50%, calc(-100% - 9px)) rotate(180deg);
  top:1px
}

.bx--tooltip--icon__top::after{
  transform:translate(-50%, calc(-100% - 12px));
  top:0
}

.bx--tooltip--icon__bottom::before{
  transform:translate(-50%, 10px) rotate(0);
  bottom:0
}

.bx--tooltip--icon__bottom::after{
  transform:translate(-50%, calc(100% + 10px));
  bottom:0
}

.bx--tooltip--icon__top.bx--tooltip--icon__align-start::before{
  transform:translate(0, calc(-100% - 9px)) rotate(180deg);
  top:1px;
  margin-left:4px
}

.bx--tooltip--icon__top.bx--tooltip--icon__align-start::after{
  transform:translate(0, calc(-100% - 12px));
  top:0;
  margin-left:0
}

.bx--tooltip--icon__top.bx--tooltip--icon__align-end::before{
  transform:translate(0, calc(-100% - 9px)) rotate(180deg);
  top:1px;
  right:0;
  left:auto;
  margin-right:4px
}

.bx--tooltip--icon__top.bx--tooltip--icon__align-end::after{
  transform:translate(0, calc(-100% - 12px));
  top:0;
  margin-left:0;
  right:0
}

.bx--tooltip--icon__bottom.bx--tooltip--icon__align-start::before{
  transform:translate(0, 10px) rotate(0);
  bottom:0;
  margin-left:4px
}

.bx--tooltip--icon__bottom.bx--tooltip--icon__align-start::after{
  transform:translate(0, calc(100% + 10px));
  bottom:0;
  margin-left:0
}

.bx--tooltip--icon__bottom.bx--tooltip--icon__align-end::before{
  transform:translate(0, 10px) rotate(0);
  bottom:0;
  right:0;
  left:auto;
  margin-right:4px
}

.bx--tooltip--icon__bottom.bx--tooltip--icon__align-end::after{
  transform:translate(0, calc(100% + 10px));
  bottom:0;
  margin-left:0;
  right:0
}

.bx--tooltip--icon .bx--tooltip__trigger svg{
  margin-left:0
}

.bx--tooltip__trigger:hover svg,.bx--tooltip__trigger:focus svg{
  fill:#525252
}

.bx--tooltip__trigger.bx--tooltip--top{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--tooltip__trigger.bx--tooltip--top:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--top:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--tooltip--top:focus{
  outline:1px solid transparent
}

.bx--tooltip__trigger.bx--tooltip--top:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--top:focus svg{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--tooltip--top::before,.bx--tooltip__trigger.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip--top::before,.bx--tooltip__trigger.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top+.bx--assistive-text{
    display:inline-block
  }
}

.bx--tooltip__trigger.bx--tooltip--top::before,.bx--tooltip__trigger.bx--tooltip--top::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--a11y::after{
  transition:none
}

.bx--tooltip__trigger.bx--tooltip--top::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--tooltip__trigger.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--tooltip__trigger.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--tooltip__trigger.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--tooltip__trigger.bx--tooltip--top::after{
  content:attr(aria-label)
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--a11y::after{
  content:none
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--visible::before,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--visible::after,.bx--tooltip__trigger.bx--tooltip--top:hover::before,.bx--tooltip__trigger.bx--tooltip--top:hover::after,.bx--tooltip__trigger.bx--tooltip--top:focus::before,.bx--tooltip__trigger.bx--tooltip--top:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--top:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top:hover.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--top:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top:focus+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--hidden .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--top::before,.bx--tooltip__trigger.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip--top::before{
  top:-0.5rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip--top::after,.bx--tooltip__trigger.bx--tooltip--top .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top+.bx--assistive-text{
  top:-0.8125rem;
  left:50%;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-start .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-start::before,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-start+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-start::before{
  top:-0.5rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-start+.bx--assistive-text{
  top:-0.8125rem;
  left:0;
  transform:translate(0, -100%)
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-center .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-center::before,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-center+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-center::before{
  top:-0.5rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-center+.bx--assistive-text{
  top:-0.8125rem;
  left:50%;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-end .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  bottom:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-end::before,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-end+.bx--assistive-text{
  top:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-end::before{
  top:-0.5rem;
  border-width:.3125rem .25rem 0 .25rem;
  border-color:#393939 transparent transparent transparent;
  transform:translate(-50%, -100%)
}

.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--top.bx--tooltip--align-end+.bx--assistive-text{
  top:-0.8125rem;
  right:0;
  left:auto;
  transform:translate(0, -100%)
}

.bx--tooltip__trigger.bx--tooltip--right{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--tooltip__trigger.bx--tooltip--right:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--right:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--tooltip--right:focus{
  outline:1px solid transparent
}

.bx--tooltip__trigger.bx--tooltip--right:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--right:focus svg{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--tooltip--right::before,.bx--tooltip__trigger.bx--tooltip--right::after,.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip--right::before,.bx--tooltip__trigger.bx--tooltip--right::after,.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right+.bx--assistive-text{
    display:inline-block
  }
}

.bx--tooltip__trigger.bx--tooltip--right::before,.bx--tooltip__trigger.bx--tooltip--right::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--a11y::after{
  transition:none
}

.bx--tooltip__trigger.bx--tooltip--right::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--tooltip__trigger.bx--tooltip--right::after,.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip--right::after,.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--tooltip__trigger.bx--tooltip--right::after,.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--tooltip__trigger.bx--tooltip--right::after,.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--right::after,.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--tooltip__trigger.bx--tooltip--right::after{
  content:attr(aria-label)
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--a11y::after{
  content:none
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--visible::before,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--visible::after,.bx--tooltip__trigger.bx--tooltip--right:hover::before,.bx--tooltip__trigger.bx--tooltip--right:hover::after,.bx--tooltip__trigger.bx--tooltip--right:focus::before,.bx--tooltip__trigger.bx--tooltip--right:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--right:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right:hover.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--right:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right:focus+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--hidden .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  left:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--right::before,.bx--tooltip__trigger.bx--tooltip--right::after,.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right+.bx--assistive-text{
  top:50%;
  right:0
}

.bx--tooltip__trigger.bx--tooltip--right::before{
  right:-0.5rem;
  border-width:.25rem .3125rem .25rem 0;
  border-color:transparent #393939 transparent transparent;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--right::after,.bx--tooltip__trigger.bx--tooltip--right .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right+.bx--assistive-text{
  right:-0.8125rem;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-start .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  left:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-start::before,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-start+.bx--assistive-text{
  top:50%;
  right:0
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-start::before{
  right:-0.5rem;
  border-width:.25rem .3125rem .25rem 0;
  border-color:transparent #393939 transparent transparent;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-start+.bx--assistive-text{
  right:-0.8125rem;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-center .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  left:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-center::before,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-center+.bx--assistive-text{
  top:50%;
  right:0
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-center::before{
  right:-0.5rem;
  border-width:.25rem .3125rem .25rem 0;
  border-color:transparent #393939 transparent transparent;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-center+.bx--assistive-text{
  right:-0.8125rem;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-end .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  left:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-end::before,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-end+.bx--assistive-text{
  top:50%;
  right:0
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-end::before{
  right:-0.5rem;
  border-width:.25rem .3125rem .25rem 0;
  border-color:transparent #393939 transparent transparent;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--right.bx--tooltip--align-end+.bx--assistive-text{
  right:-0.8125rem;
  transform:translate(100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--bottom{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--tooltip__trigger.bx--tooltip--bottom:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--bottom:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--tooltip--bottom:focus{
  outline:1px solid transparent
}

.bx--tooltip__trigger.bx--tooltip--bottom:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--bottom:focus svg{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--tooltip--bottom::before,.bx--tooltip__trigger.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip--bottom::before,.bx--tooltip__trigger.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom+.bx--assistive-text{
    display:inline-block
  }
}

.bx--tooltip__trigger.bx--tooltip--bottom::before,.bx--tooltip__trigger.bx--tooltip--bottom::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--a11y::after{
  transition:none
}

.bx--tooltip__trigger.bx--tooltip--bottom::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--tooltip__trigger.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--tooltip__trigger.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--tooltip__trigger.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--tooltip__trigger.bx--tooltip--bottom::after{
  content:attr(aria-label)
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--a11y::after{
  content:none
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--visible::before,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--visible::after,.bx--tooltip__trigger.bx--tooltip--bottom:hover::before,.bx--tooltip__trigger.bx--tooltip--bottom:hover::after,.bx--tooltip__trigger.bx--tooltip--bottom:focus::before,.bx--tooltip__trigger.bx--tooltip--bottom:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--bottom:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom:hover.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--bottom:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom:focus+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--hidden .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--bottom::before,.bx--tooltip__trigger.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip--bottom::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip--bottom::after,.bx--tooltip__trigger.bx--tooltip--bottom .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom+.bx--assistive-text{
  bottom:-0.8125rem;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-start .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-start::before,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-start+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-start::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-start+.bx--assistive-text{
  bottom:-0.8125rem;
  left:0;
  transform:translate(0, 100%)
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-center .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-center::before,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-center+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-center::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-center+.bx--assistive-text{
  bottom:-0.8125rem;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-end .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  left:0;
  width:100%;
  height:.75rem;
  top:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-end::before,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-end+.bx--assistive-text{
  bottom:0;
  left:50%
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-end::before{
  bottom:-0.5rem;
  border-width:0 .25rem .3125rem .25rem;
  border-color:transparent transparent #393939 transparent;
  transform:translate(-50%, 100%)
}

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-end+.bx--assistive-text{
  bottom:-0.8125rem;
  right:0;
  left:auto;
  transform:translate(0, 100%)
}

.bx--tooltip__trigger.bx--tooltip--left{
  position:relative;
  display:inline-flex;
  overflow:visible;
  align-items:center;
  cursor:pointer
}

.bx--tooltip__trigger.bx--tooltip--left:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--left:focus{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--tooltip--left:focus{
  outline:1px solid transparent
}

.bx--tooltip__trigger.bx--tooltip--left:focus svg{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--left:focus svg{
    outline-style:dotted
  }
}

.bx--tooltip__trigger.bx--tooltip--left::before,.bx--tooltip__trigger.bx--tooltip--left::after,.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left+.bx--assistive-text{
  position:absolute;
  z-index:6000;
  display:flex;
  align-items:center;
  opacity:0;
  pointer-events:none
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip--left::before,.bx--tooltip__trigger.bx--tooltip--left::after,.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left+.bx--assistive-text{
    display:inline-block
  }
}

.bx--tooltip__trigger.bx--tooltip--left::before,.bx--tooltip__trigger.bx--tooltip--left::after{
  transition:opacity 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--a11y::after{
  transition:none
}

.bx--tooltip__trigger.bx--tooltip--left::before{
  width:0;
  height:0;
  border-style:solid;
  content:""
}

.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left+.bx--assistive-text{
  box-sizing:content-box;
  color:inherit;
  opacity:1;
  white-space:normal;
  word-break:break-word
}

.bx--tooltip__trigger.bx--tooltip--left::after,.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left+.bx--assistive-text{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  z-index:6000;
  width:-webkit-max-content;
  width:-moz-max-content;
  width:max-content;
  min-width:1.5rem;
  max-width:13rem;
  height:auto;
  padding:.1875rem 1rem;
  background-color:#393939;
  border-radius:.125rem;
  color:#fff;
  font-weight:400;
  text-align:left;
  transform:translateX(-50%);
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){
  .bx--tooltip__trigger.bx--tooltip--left::after,.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-accelerator: true){
  .bx--tooltip__trigger.bx--tooltip--left::after,.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left+.bx--assistive-text{
    width:auto
  }
}

@supports(-ms-ime-align: auto){
  .bx--tooltip__trigger.bx--tooltip--left::after,.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left+.bx--assistive-text{
    width:auto
  }
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tooltip__trigger.bx--tooltip--left::after,.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left+.bx--assistive-text{
    border:1px solid transparent
  }
}

.bx--tooltip__trigger.bx--tooltip--left::after{
  content:attr(aria-label)
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--a11y::after{
  content:none
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--visible::before,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--visible::after,.bx--tooltip__trigger.bx--tooltip--left:hover::before,.bx--tooltip__trigger.bx--tooltip--left:hover::after,.bx--tooltip__trigger.bx--tooltip--left:focus::before,.bx--tooltip__trigger.bx--tooltip--left:focus::after{
  opacity:1
}

@keyframes tooltip-fade{
  from{
    opacity:0
  }

  to{
    opacity:1
  }
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left:focus+.bx--assistive-text{
  overflow:visible;
  margin:auto;
  clip:auto
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--visible .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--visible+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--left:hover .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left:hover+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left:hover.bx--tooltip--a11y::before,.bx--tooltip__trigger.bx--tooltip--left:focus .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left:focus+.bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left:focus.bx--tooltip--a11y::before{
  -webkit-animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  animation:tooltip-fade 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--hidden .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--hidden+.bx--assistive-text{
  overflow:hidden;
  margin:-1px;
  clip:rect(0, 0, 0, 0)
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--hidden.bx--tooltip--a11y::before{
  -webkit-animation:none;
  animation:none;
  opacity:0
}

.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  right:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--left::before,.bx--tooltip__trigger.bx--tooltip--left::after,.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left+.bx--assistive-text{
  top:50%;
  left:0
}

.bx--tooltip__trigger.bx--tooltip--left::before{
  left:-0.5rem;
  border-width:.25rem 0 .25rem .3125rem;
  border-color:transparent transparent transparent #393939;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--left::after,.bx--tooltip__trigger.bx--tooltip--left .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left+.bx--assistive-text{
  left:-0.8125rem;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-start .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  right:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-start::before,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-start+.bx--assistive-text{
  top:50%;
  left:0
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-start::before{
  left:-0.5rem;
  border-width:.25rem 0 .25rem .3125rem;
  border-color:transparent transparent transparent #393939;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-start::after,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-start .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-start+.bx--assistive-text{
  left:-0.8125rem;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-center .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  right:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-center::before,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-center+.bx--assistive-text{
  top:50%;
  left:0
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-center::before{
  left:-0.5rem;
  border-width:.25rem 0 .25rem .3125rem;
  border-color:transparent transparent transparent #393939;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-center::after,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-center .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-center+.bx--assistive-text{
  left:-0.8125rem;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-end .bx--assistive-text::after{
  position:absolute;
  display:block;
  content:"";
  top:0;
  width:.75rem;
  height:100%;
  right:-0.75rem
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-end::before,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-end+.bx--assistive-text{
  top:50%;
  left:0
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-end::before{
  left:-0.5rem;
  border-width:.25rem 0 .25rem .3125rem;
  border-color:transparent transparent transparent #393939;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-end::after,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-end .bx--assistive-text,.bx--tooltip__trigger.bx--tooltip--left.bx--tooltip--align-end+.bx--assistive-text{
  left:-0.8125rem;
  transform:translate(-100%, -50%)
}

.bx--tooltip__trigger:not(.bx--tooltip--hidden) .bx--assistive-text{
  pointer-events:all
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--tooltip__trigger svg,.bx--tooltip__trigger:hover svg,.bx--tooltip__trigger:focus svg{
    fill:ButtonText
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--tooltip__trigger:focus svg{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--tooltip{
    outline:1px solid transparent
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--assistive-text{
    outline:1px solid transparent
  }
}

.bx--progress{
  display:flex;
  list-style:none
}

.bx--progress-step{
  position:relative;
  display:inline-flex;
  overflow:visible;
  width:8rem;
  min-width:7rem;
  flex-direction:row
}

.bx--progress-step .bx--tooltip__label{
  display:block
}

.bx--progress--space-equal .bx--progress-step{
  min-width:8rem;
  flex-grow:1
}

.bx--progress-line{
  position:absolute;
  left:0;
  width:8rem;
  height:1px;
  border:1px inset transparent
}

.bx--progress--space-equal .bx--progress-line{
  width:100%;
  min-width:8rem
}

.bx--progress-step svg{
  position:relative;
  z-index:1;
  width:1rem;
  height:1rem;
  flex-shrink:0;
  margin:.625rem .5rem 0 0;
  border-radius:50%;
  fill:#0f62fe
}

.bx--progress-label{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  overflow:hidden;
  max-width:5.5rem;
  margin:.5rem 0 0 0;
  color:#161616;
  line-height:1.45;
  text-overflow:ellipsis;
  transition:box-shadow 110ms cubic-bezier(0.2, 0, 0.38, 0.9),color 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  white-space:nowrap
}

.bx--progress-label::before{
  display:block;
  content:""
}

.bx--progress-label:hover{
  box-shadow:0 .0625rem #0f62fe;
  color:#0f62fe;
  cursor:pointer
}

.bx--progress-label:focus{
  box-shadow:0 .1875rem 0 0 #0f62fe;
  color:#0f62fe;
  outline:none
}

.bx--progress--space-equal .bx--progress-label{
  max-width:100%;
  margin-right:.75rem
}

.bx--progress-step-button:not(.bx--progress-step-button--unclickable) .bx--progress-label:active{
  box-shadow:0 .1875rem 0 0 #0f62fe;
  color:#0f62fe
}

.bx--progress-label-overflow:hover~.bx--tooltip,.bx--progress-label-overflow:focus~.bx--tooltip{
  visibility:inherit
}

.bx--progress-step .bx--tooltip .bx--tooltip__caret{
  margin-left:.625rem
}

.bx--tooltip__text{
  padding:0;
  margin:0;
  font-weight:normal
}

.bx--progress-step .bx--tooltip{
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px;
  display:block;
  width:7.8125rem;
  min-width:7.1875rem;
  min-height:1.5rem;
  padding:.5rem 1rem;
  margin-top:2.5rem;
  margin-left:1.375rem;
  color:#fff;
  visibility:hidden
}

.bx--progress-step .bx--tooltip_multi{
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px;
  width:9.375rem;
  height:auto;
  color:#fff
}

.bx--progress-optional{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  position:absolute;
  left:0;
  margin-top:1.75rem;
  margin-left:1.5rem;
  color:#525252;
  text-align:start
}

.bx--progress-step--current .bx--progress-line{
  background-color:#0f62fe
}

.bx--progress-step--incomplete svg{
  fill:#161616
}

.bx--progress-step--incomplete .bx--progress-line{
  background-color:#e0e0e0
}

.bx--progress-step--complete .bx--progress-line{
  background-color:#0f62fe
}

.bx--progress-step-button{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  display:flex;
  text-align:left
}

.bx--progress-step-button::-moz-focus-inner{
  border:0
}

.bx--progress-step-button--unclickable{
  cursor:default;
  outline:none
}

.bx--progress-step-button--unclickable .bx--progress-label:hover{
  box-shadow:none;
  color:#161616;
  cursor:default
}

.bx--progress-step-button--unclickable .bx--tooltip__label:hover{
  box-shadow:0 .0625rem #0f62fe;
  color:#0f62fe;
  cursor:pointer
}

.bx--progress-step--disabled{
  cursor:not-allowed;
  pointer-events:none
}

.bx--progress-step--disabled svg{
  cursor:not-allowed;
  fill:#c6c6c6
}

.bx--progress-step--disabled .bx--progress-label,.bx--progress-step--disabled .bx--progress-label:hover{
  box-shadow:none;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--progress-step--disabled .bx--progress-label:focus,.bx--progress-step--disabled .bx--progress-label:active{
  box-shadow:none;
  outline:none
}

.bx--progress-step--disabled .bx--progress-line{
  cursor:not-allowed
}

.bx--progress-step--disabled .bx--progress-label-overflow:hover~.bx--tooltip--definition .bx--tooltip--definition__bottom{
  display:none
}

.bx--progress__warning>*{
  fill:#da1e28
}

.bx--progress.bx--skeleton .bx--progress-label{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:2.5rem;
  height:.875rem;
  margin-top:.625rem
}

.bx--progress.bx--skeleton .bx--progress-label:hover,.bx--progress.bx--skeleton .bx--progress-label:focus,.bx--progress.bx--skeleton .bx--progress-label:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--progress.bx--skeleton .bx--progress-label::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--progress.bx--skeleton .bx--progress-label::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--progress--vertical{
  display:flex;
  flex-direction:column
}

.bx--progress--vertical,.bx--progress-text{
  display:flex;
  flex-direction:column
}

.bx--progress--vertical .bx--progress-step,.bx--progress--vertical .bx--progress-step-button{
  width:initial;
  min-width:initial;
  min-height:3.625rem;
  align-content:flex-start
}

.bx--progress--vertical .bx--progress-step svg,.bx--progress--vertical .bx--progress-step-button svg{
  display:inline-block;
  margin:.0625rem .5rem 0
}

.bx--progress--vertical .bx--progress-label{
  display:inline-block;
  width:initial;
  max-width:10rem;
  margin:0;
  vertical-align:top;
  white-space:initial
}

.bx--progress--vertical .bx--progress-step .bx--tooltip{
  margin-top:.5rem
}

.bx--progress--vertical .bx--progress-optional{
  position:static;
  width:100%;
  margin:auto 0
}

.bx--progress--vertical .bx--progress-line{
  position:absolute;
  top:0;
  left:0;
  width:1px;
  height:100%
}

.bx--radio-button-group{
  position:relative;
  display:flex;
  align-items:center
}

.bx--label+.bx--form-item .bx--radio-button-group{
  margin-top:0
}

.bx--radio-button-group--vertical{
  flex-direction:column;
  align-items:flex-start
}

.bx--radio-button-group--vertical.bx--radio-button-group--label-left{
  align-items:flex-end
}

.bx--radio-button-group--vertical .bx--radio-button__label{
  margin-right:0;
  line-height:1.25rem
}

.bx--radio-button-group--vertical .bx--radio-button__label:not(:last-of-type){
  margin-bottom:.5rem
}

.bx--radio-button{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap;
  visibility:inherit
}

.bx--radio-button__label{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:flex;
  align-items:center;
  margin-right:1rem;
  cursor:pointer
}

.bx--radio-button__appearance{
  width:1.125rem;
  height:1.125rem;
  flex-shrink:0;
  border:1px solid #161616;
  margin:.0625rem .5rem .125rem .125rem;
  background-color:transparent;
  border-radius:50%
}

.bx--radio-button:checked+.bx--radio-button__label .bx--radio-button__appearance{
  display:flex;
  align-items:center;
  justify-content:center;
  border-color:#161616
}

.bx--radio-button:checked+.bx--radio-button__label .bx--radio-button__appearance::before{
  position:relative;
  display:inline-block;
  width:100%;
  height:100%;
  background-color:#161616;
  border-radius:50%;
  content:"";
  transform:scale(0.5)
}

@media screen and (-ms-high-contrast: active){
  .bx--radio-button:checked+.bx--radio-button__label .bx--radio-button__appearance::before{
    background-color:WindowText
  }
}

@media screen and (prefers-contrast){
  .bx--radio-button:checked+.bx--radio-button__label .bx--radio-button__appearance::before{
    border:2px solid WindowText
  }
}

.bx--radio-button:disabled+.bx--radio-button__label{
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--radio-button:disabled+.bx--radio-button__label .bx--radio-button__appearance,.bx--radio-button:disabled:checked+.bx--radio-button__label .bx--radio-button__appearance{
  border-color:#c6c6c6
}

.bx--radio-button:disabled+.bx--radio-button__label .bx--radio-button__appearance::before,.bx--radio-button:disabled:checked+.bx--radio-button__label .bx--radio-button__appearance::before{
  background-color:#c6c6c6
}

.bx--radio-button:focus+.bx--radio-button__label .bx--radio-button__appearance{
  outline:2px solid #0f62fe;
  outline-offset:1.5px
}

.bx--radio-button__label.bx--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:6.25rem;
  height:1.125rem
}

.bx--radio-button__label.bx--skeleton:hover,.bx--radio-button__label.bx--skeleton:focus,.bx--radio-button__label.bx--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--radio-button__label.bx--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--radio-button__label.bx--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--radio-button__label.bx--skeleton .bx--radio-button__appearance{
  display:none
}

.bx--radio-button-wrapper .bx--radio-button__label{
  display:flex;
  align-items:flex-start;
  justify-content:center;
  margin:0
}

.bx--radio-button-wrapper:not(:last-of-type){
  margin-right:1rem
}

.bx--radio-button-group--vertical .bx--radio-button-wrapper:not(:last-of-type){
  margin-right:0;
  margin-bottom:.5rem
}

.bx--radio-button-group--label-right .bx--radio-button__label,.bx--radio-button-wrapper.bx--radio-button-wrapper--label-right .bx--radio-button__label{
  flex-direction:row
}

.bx--radio-button-group--label-left .bx--radio-button__label,.bx--radio-button-wrapper.bx--radio-button-wrapper--label-left .bx--radio-button__label{
  flex-direction:row-reverse
}

.bx--radio-button-group--label-left .bx--radio-button__appearance,.bx--radio-button-wrapper.bx--radio-button-wrapper--label-left .bx--radio-button__appearance{
  margin-right:0;
  margin-left:.5rem
}

.bx--search{
  position:relative;
  display:flex;
  width:100%;
  align-items:center
}

.bx--search .bx--label{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap
}

.bx--search-input{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  outline:2px solid transparent;
  outline-offset:-2px;
  width:100%;
  order:1;
  padding:0 2.5rem;
  border:none;
  border-bottom:1px solid #8d8d8d;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background-color:#fff;
  color:#161616;
  text-overflow:ellipsis;
  transition:background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9),outline 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--search-input:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--search-input:focus{
    outline-style:dotted
  }
}

.bx--search-input::-moz-placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--search-input:-ms-input-placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--search-input::placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--search-input::-ms-clear{
  display:none
}

.bx--search-input[disabled]{
  border-bottom:1px solid transparent;
  background-color:#fff;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--search-input[disabled]::-moz-placeholder{
  color:#c6c6c6
}

.bx--search-input[disabled]:-ms-input-placeholder{
  color:#c6c6c6
}

.bx--search-input[disabled]::placeholder{
  color:#c6c6c6
}

.bx--search--light .bx--search-input{
  background:#f4f4f4
}

.bx--search--light .bx--search-close::before{
  background:#f4f4f4
}

.bx--search--sm .bx--search-input,.bx--search--sm.bx--search--expandable.bx--search--expanded .bx--search-input{
  height:2rem;
  padding:0 2rem
}

.bx--search--sm .bx--search-magnifier-icon{
  left:.5rem
}

.bx--search--lg .bx--search-input,.bx--search--lg.bx--search--expandable.bx--search--expanded .bx--search-input{
  height:2.5rem;
  padding:0 2.5rem
}

.bx--search--lg .bx--search-magnifier-icon{
  left:.75rem
}

.bx--search--xl .bx--search-input,.bx--search--xl.bx--search--expandable.bx--search--expanded .bx--search-input{
  height:3rem;
  padding:0 3rem
}

.bx--search-magnifier-icon{
  position:absolute;
  z-index:2;
  top:50%;
  left:1rem;
  width:1rem;
  height:1rem;
  fill:#525252;
  pointer-events:none;
  transform:translateY(-50%)
}

.bx--search-close{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  outline:2px solid transparent;
  outline-offset:-2px;
  position:absolute;
  top:0;
  right:0
}

.bx--search-close::-moz-focus-inner{
  border:0
}

.bx--search-close::before{
  position:absolute;
  top:.0625rem;
  left:0;
  display:block;
  width:2px;
  height:calc(100% - 2px);
  background-color:#fff;
  content:"";
  transition:background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--search-close:hover{
  border-bottom:1px solid #8d8d8d
}

.bx--search-close:hover::before{
  background-color:#e5e5e5
}

.bx--search-button{
  flex-shrink:0;
  margin-left:.125rem;
  background-color:#fff
}

.bx--search-button svg{
  fill:currentColor;
  vertical-align:middle
}

.bx--search-close svg{
  fill:inherit
}

.bx--search-close,.bx--search-button{
  display:flex;
  width:2.5rem;
  height:2.5rem;
  align-items:center;
  justify-content:center;
  border-width:1px 0;
  border-style:solid;
  border-color:transparent;
  cursor:pointer;
  fill:#161616;
  opacity:1;
  transition:opacity 110ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9),outline 110ms cubic-bezier(0.2, 0, 0.38, 0.9),border 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  visibility:inherit
}

.bx--search-close:hover,.bx--search-button:hover{
  background-color:#e5e5e5
}

.bx--search-close:focus,.bx--search-button:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--search-close:focus,.bx--search-button:focus{
    outline-style:dotted
  }
}

.bx--search-close:active,.bx--search-button:active{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  background-color:#e0e0e0
}

@media screen and (prefers-contrast){
  .bx--search-close:active,.bx--search-button:active{
    outline-style:dotted
  }
}

.bx--search--disabled .bx--search-close,.bx--search--disabled.bx--search--expandable .bx--search-magnifier{
  cursor:not-allowed;
  outline:none
}

.bx--search--disabled .bx--search-close:hover,.bx--search--disabled.bx--search--expandable .bx--search-magnifier:hover{
  border-bottom-color:transparent;
  background-color:transparent
}

.bx--search--disabled .bx--search-close:hover::before,.bx--search--disabled.bx--search--expandable .bx--search-magnifier:hover::before{
  background-color:transparent
}

.bx--search--disabled svg{
  fill:#c6c6c6
}

.bx--search-close:focus::before,.bx--search-close:active::before{
  background-color:#0f62fe
}

.bx--search-input:focus~.bx--search-close:hover{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--search-input:focus~.bx--search-close:hover{
    outline-style:dotted
  }
}

.bx--search--sm .bx--search-close,.bx--search--sm~.bx--search-button,.bx--search--sm.bx--search--expandable,.bx--search--sm.bx--search--expandable .bx--search-magnifier{
  width:2rem;
  height:2rem
}

.bx--search--sm.bx--search--expandable .bx--search-input::-moz-placeholder{
  padding:0 2rem
}

.bx--search--sm.bx--search--expandable .bx--search-input:-ms-input-placeholder{
  padding:0 2rem
}

.bx--search--sm.bx--search--expandable .bx--search-input::placeholder{
  padding:0 2rem
}

.bx--search--lg .bx--search-close,.bx--search--lg~.bx--search-button,.bx--search--lg.bx--search--expandable,.bx--search--lg.bx--search--expandable .bx--search-magnifier{
  width:2.5rem;
  height:2.5rem
}

.bx--search--lg.bx--search--expandable .bx--search-input::-moz-placeholder{
  padding:0 2.5rem
}

.bx--search--lg.bx--search--expandable .bx--search-input:-ms-input-placeholder{
  padding:0 2.5rem
}

.bx--search--lg.bx--search--expandable .bx--search-input::placeholder{
  padding:0 2.5rem
}

.bx--search--xl .bx--search-close,.bx--search--xl~.bx--search-button,.bx--search--xl.bx--search--expandable,.bx--search--xl.bx--search--expandable .bx--search-magnifier{
  width:3rem;
  height:3rem
}

.bx--search--xl.bx--search--expandable .bx--search-input::-moz-placeholder{
  padding:0 3rem
}

.bx--search--xl.bx--search--expandable .bx--search-input:-ms-input-placeholder{
  padding:0 3rem
}

.bx--search--xl.bx--search--expandable .bx--search-input::placeholder{
  padding:0 3rem
}

.bx--search-close--hidden{
  opacity:0;
  visibility:hidden
}

.bx--search--xl.bx--skeleton .bx--search-input,.bx--search--lg.bx--skeleton .bx--search-input,.bx--search--sm.bx--skeleton .bx--search-input{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:100%
}

.bx--search--xl.bx--skeleton .bx--search-input:hover,.bx--search--xl.bx--skeleton .bx--search-input:focus,.bx--search--xl.bx--skeleton .bx--search-input:active,.bx--search--lg.bx--skeleton .bx--search-input:hover,.bx--search--lg.bx--skeleton .bx--search-input:focus,.bx--search--lg.bx--skeleton .bx--search-input:active,.bx--search--sm.bx--skeleton .bx--search-input:hover,.bx--search--sm.bx--skeleton .bx--search-input:focus,.bx--search--sm.bx--skeleton .bx--search-input:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--search--xl.bx--skeleton .bx--search-input::before,.bx--search--lg.bx--skeleton .bx--search-input::before,.bx--search--sm.bx--skeleton .bx--search-input::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--search--xl.bx--skeleton .bx--search-input::before,.bx--search--lg.bx--skeleton .bx--search-input::before,.bx--search--sm.bx--skeleton .bx--search-input::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--search--xl.bx--skeleton .bx--search-input::-moz-placeholder, .bx--search--lg.bx--skeleton .bx--search-input::-moz-placeholder, .bx--search--sm.bx--skeleton .bx--search-input::-moz-placeholder{
  color:transparent
}

.bx--search--xl.bx--skeleton .bx--search-input:-ms-input-placeholder, .bx--search--lg.bx--skeleton .bx--search-input:-ms-input-placeholder, .bx--search--sm.bx--skeleton .bx--search-input:-ms-input-placeholder{
  color:transparent
}

.bx--search--xl.bx--skeleton .bx--search-input::placeholder,.bx--search--lg.bx--skeleton .bx--search-input::placeholder,.bx--search--sm.bx--skeleton .bx--search-input::placeholder{
  color:transparent
}

.bx--search--expandable{
  transition:width 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--search--expandable.bx--search--expanded{
  width:100%
}

.bx--search--expandable .bx--search-input{
  width:0;
  padding:0;
  transition:padding 70ms cubic-bezier(0.2, 0, 0.38, 0.9),width 0s linear 70ms
}

.bx--search--expandable .bx--search-input::-moz-placeholder{
  position:relative;
  opacity:0;
  transition-duration:70ms;
  -moz-transition-property:padding,opacity;
  transition-property:padding,opacity;
  transition-timing-function:cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--search--expandable .bx--search-input:-ms-input-placeholder{
  position:relative;
  opacity:0;
  transition-duration:70ms;
  -ms-transition-property:padding,opacity;
  transition-property:padding,opacity;
  transition-timing-function:cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--search--expandable .bx--search-input::placeholder{
  position:relative;
  opacity:0;
  transition-duration:70ms;
  transition-property:padding,opacity;
  transition-timing-function:cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--search--expandable.bx--search--expanded .bx--search-input{
  width:100%;
  transition:padding 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--search--expandable.bx--search--expanded .bx--search-input::-moz-placeholder{
  position:relative;
  padding:0;
  opacity:1
}

.bx--search--expandable.bx--search--expanded .bx--search-input:-ms-input-placeholder{
  position:relative;
  padding:0;
  opacity:1
}

.bx--search--expandable.bx--search--expanded .bx--search-input::placeholder{
  position:relative;
  padding:0;
  opacity:1
}

.bx--search--expandable .bx--search-magnifier{
  position:absolute;
  cursor:pointer
}

.bx--search--expandable .bx--search-magnifier:hover{
  background-color:#e5e5e5
}

.bx--search--expandable.bx--search--expanded .bx--search-magnifier{
  pointer-events:none
}

.bx--search--expandable .bx--search-magnifier-icon{
  fill:#161616
}

.bx--search--expandable.bx--search--expanded .bx--search-magnifier-icon{
  fill:#525252
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--search-close svg,.bx--search-magnifier-icon{
    fill:ButtonText
  }
}

.bx--skeleton__text{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:100%;
  height:1rem;
  margin-bottom:.5rem
}

.bx--skeleton__text:hover,.bx--skeleton__text:focus,.bx--skeleton__text:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--skeleton__text::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--skeleton__text::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--skeleton__heading{
  height:1.5rem
}

.bx--icon--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  display:inline-block;
  width:1rem;
  height:1rem
}

.bx--icon--skeleton:hover,.bx--icon--skeleton:focus,.bx--icon--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--icon--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--icon--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--skeleton__placeholder{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:6.25rem;
  height:6.25rem
}

.bx--skeleton__placeholder:hover,.bx--skeleton__placeholder:focus,.bx--skeleton__placeholder:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--skeleton__placeholder::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--skeleton__placeholder::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--slider-container{
  display:flex;
  align-items:center;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

.bx--slider{
  position:relative;
  width:100%;
  min-width:12.5rem;
  max-width:40rem;
  padding:1rem 0;
  margin:0 1rem;
  cursor:pointer
}

.bx--slider__range-label{
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.32px;
  color:#161616;
  white-space:nowrap
}

.bx--slider__range-label:last-of-type{
  margin-right:1rem
}

.bx--slider__track{
  position:absolute;
  width:100%;
  height:.125rem;
  background:#e0e0e0;
  transform:translate(0%, -50%)
}

.bx--slider__track:before{
  position:absolute;
  top:-0.3125rem;
  left:50%;
  display:inline-block;
  width:.125rem;
  height:.25rem;
  background:#e0e0e0;
  content:"";
  transform:translate(-50%, 0)
}

.bx--slider__filled-track{
  position:absolute;
  width:100%;
  height:.125rem;
  background:#161616;
  pointer-events:none;
  transform:translate(0%, -50%);
  transform-origin:left;
  transition:background 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--slider__thumb{
  position:absolute;
  z-index:3;
  width:.875rem;
  height:.875rem;
  background:#161616;
  border-radius:50%;
  box-shadow:inset 0 0 0 1px transparent,inset 0 0 0 2px transparent;
  outline:none;
  transform:translate(-50%, -50%);
  transition:transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),background 110ms cubic-bezier(0.2, 0, 0.38, 0.9),box-shadow 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--slider__thumb:hover{
  transform:translate(-50%, -50%) scale(1.4286)
}

.bx--slider__thumb:focus{
  background-color:#0f62fe;
  box-shadow:inset 0 0 0 2px #0f62fe,inset 0 0 0 3px #fff;
  transform:translate(-50%, -50%) scale(1.4286)
}

.bx--slider__thumb:active{
  box-shadow:inset 0 0 0 2px #0f62fe;
  transform:translate(-50%, -50%) scale(1.4286)
}

.bx--slider__input{
  display:none
}

.bx--slider-text-input,.bx-slider-text-input{
  width:4rem;
  height:2.5rem;
  -moz-appearance:textfield;
  text-align:center
}

.bx--slider-text-input::-webkit-outer-spin-button,.bx--slider-text-input::-webkit-inner-spin-button,.bx-slider-text-input::-webkit-outer-spin-button,.bx-slider-text-input::-webkit-inner-spin-button{
  display:none
}

.bx--slider-text-input.bx--text-input--invalid{
  padding-right:1rem
}

.bx--slider__thumb:focus~.bx--slider__filled-track{
  background-color:#0f62fe
}

.bx--label--disabled~.bx--slider-container>.bx--slider__range-label{
  color:#c6c6c6
}

.bx--slider--disabled.bx--slider{
  cursor:not-allowed
}

.bx--slider--disabled .bx--slider__thumb{
  background-color:#e0e0e0
}

.bx--slider--disabled .bx--slider__thumb:hover{
  cursor:not-allowed;
  transform:translate(-50%, -50%)
}

.bx--slider--disabled .bx--slider__thumb:focus{
  background-color:#e0e0e0;
  box-shadow:none;
  outline:none;
  transform:translate(-50%, -50%)
}

.bx--slider--disabled .bx--slider__thumb:active{
  background:#e0e0e0;
  transform:translate(-50%, -50%)
}

.bx--slider--disabled .bx--slider__track,.bx--slider--disabled .bx--slider__filled-track,.bx--slider--disabled .bx--slider__thumb:focus~.bx--slider__filled-track{
  background-color:#e0e0e0
}

.bx--slider--disabled~.bx--form-item .bx--slider-text-input,.bx--slider--disabled~.bx--slider-text-input{
  border:none;
  background-color:#fff;
  color:#c6c6c6;
  cursor:not-allowed;
  transition:none
}

.bx--slider--disabled~.bx--form-item .bx--slider-text-input:active,.bx--slider--disabled~.bx--form-item .bx--slider-text-input:focus,.bx--slider--disabled~.bx--form-item .bx--slider-text-input:hover,.bx--slider--disabled~.bx--slider-text-input:active,.bx--slider--disabled~.bx--slider-text-input:focus,.bx--slider--disabled~.bx--slider-text-input:hover{
  color:#c6c6c6;
  outline:none
}

.bx--slider-container.bx--skeleton .bx--slider__range-label{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:1.25rem;
  height:.75rem
}

.bx--slider-container.bx--skeleton .bx--slider__range-label:hover,.bx--slider-container.bx--skeleton .bx--slider__range-label:focus,.bx--slider-container.bx--skeleton .bx--slider__range-label:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--slider-container.bx--skeleton .bx--slider__range-label::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--slider-container.bx--skeleton .bx--slider__range-label::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--slider-container.bx--skeleton .bx--slider__track{
  cursor:default;
  pointer-events:none
}

.bx--slider-container.bx--skeleton .bx--slider__thumb{
  left:50%;
  cursor:default;
  pointer-events:none
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--slider__thumb{
    outline:1px solid transparent
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--slider__thumb:focus{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--slider__track{
    outline:1px solid transparent
  }
}

.bx--structured-list--selection .bx--structured-list-td,.bx--structured-list--selection .bx--structured-list-th{
  padding-right:1rem;
  padding-left:1rem
}

.bx--structured-list--selection .bx--structured-list-td:first-child,.bx--structured-list--selection .bx--structured-list-th:first-child{
  padding-right:1rem;
  padding-left:1rem
}

.bx--structured-list-input{
  display:none
}

.bx--structured-list{
  display:table;
  width:100%;
  margin-bottom:5rem;
  background-color:transparent;
  border-collapse:collapse;
  border-spacing:0;
  overflow-x:auto
}

.bx--structured-list.bx--structured-list--condensed .bx--structured-list-td,.bx--structured-list.bx--structured-list--condensed .bx--structured-list-th{
  padding:.5rem
}

.bx--structured-list .bx--structured-list-row .bx--structured-list-td:first-of-type,.bx--structured-list .bx--structured-list-row .bx--structured-list-th:first-of-type{
  padding-left:1rem
}

.bx--structured-list.bx--structured-list--flush .bx--structured-list-row .bx--structured-list-td,.bx--structured-list.bx--structured-list--flush .bx--structured-list-row .bx--structured-list-th,.bx--structured-list.bx--structured-list--flush .bx--structured-list-row .bx--structured-list-td:first-of-type,.bx--structured-list.bx--structured-list--flush .bx--structured-list-row .bx--structured-list-th:first-of-type{
  padding-right:1rem;
  padding-left:0
}

.bx--structured-list-row{
  display:table-row;
  border-bottom:1px solid #e0e0e0;
  transition:background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--structured-list--selection .bx--structured-list-row:hover:not(.bx--structured-list-row--header-row):not(.bx--structured-list-row--selected){
  border-bottom:1px solid #e5e5e5;
  background-color:#e5e5e5;
  cursor:pointer
}

.bx--structured-list-row.bx--structured-list-row--selected{
  background-color:#e0e0e0
}

.bx--structured-list-row.bx--structured-list-row--header-row{
  border-bottom:1px solid #e0e0e0;
  cursor:inherit
}

.bx--structured-list-row:focus:not(.bx--structured-list-row--header-row){
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--structured-list-row:focus:not(.bx--structured-list-row--header-row){
    outline-style:dotted
  }
}

.bx--structured-list--selection .bx--structured-list-row:hover:not(.bx--structured-list-row--header-row)>.bx--structured-list-td,.bx--structured-list-row.bx--structured-list-row--selected>.bx--structured-list-td{
  color:#161616
}

.bx--structured-list--selection .bx--structured-list-row:hover:not(.bx--structured-list-row--header-row)>.bx--structured-list-td{
  border-top:1px solid #fff
}

.bx--structured-list-thead{
  display:table-header-group;
  vertical-align:middle
}

.bx--structured-list-th{
  padding:1rem .5rem .5rem .5rem;
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  display:table-cell;
  height:2.5rem;
  color:#161616;
  font-weight:600;
  text-align:left;
  text-transform:none;
  vertical-align:top
}

.bx--structured-list-tbody{
  display:table-row-group;
  vertical-align:middle
}

.bx--structured-list-td{
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px;
  padding:1rem .5rem 1.5rem .5rem;
  position:relative;
  display:table-cell;
  max-width:36rem;
  color:#525252;
  transition:color 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--structured-list-content--nowrap{
  white-space:nowrap
}

.bx--structured-list-svg{
  display:inline-block;
  fill:transparent;
  transition:all 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  vertical-align:middle
}

.bx--structured-list-input:checked+.bx--structured-list-row .bx--structured-list-svg,.bx--structured-list-input:checked+.bx--structured-list-td .bx--structured-list-svg{
  fill:#161616
}

.bx--structured-list.bx--skeleton .bx--structured-list-th:first-child{
  width:8%
}

.bx--structured-list.bx--skeleton .bx--structured-list-th:nth-child(3n+2){
  width:30%
}

.bx--structured-list.bx--skeleton .bx--structured-list-th:nth-child(3n+3){
  width:15%
}

.bx--structured-list.bx--skeleton span{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  display:block;
  width:75%;
  height:1rem
}

.bx--structured-list.bx--skeleton span:hover,.bx--structured-list.bx--skeleton span:focus,.bx--structured-list.bx--skeleton span:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--structured-list.bx--skeleton span::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--structured-list.bx--skeleton span::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--structured-list.bx--structured-list--selection.bx--skeleton .bx--structured-list-th:first-child{
  width:5%
}

.bx--structured-list.bx--structured-list--selection.bx--skeleton .bx--structured-list-th:first-child span{
  display:none
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--structured-list-input:checked+.bx--structured-list-td .bx--structured-list-svg{
    fill:ButtonText
  }
}

.bx--tabs{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  position:relative;
  width:100%;
  height:auto;
  color:#161616
}

@media(min-width: 42rem){
  .bx--tabs{
    min-height:2.5rem;
    background:none
  }
}

@media(min-width: 42rem){
  .bx--tabs--container{
    min-height:3rem
  }
}

.bx--tabs-trigger{
  display:flex;
  height:2.5rem;
  align-items:center;
  justify-content:space-between;
  padding:0 3rem 0 1rem;
  border-bottom:1px solid #8d8d8d;
  background-color:#fff;
  color:#161616;
  cursor:pointer;
  outline:2px solid transparent
}

@media(min-width: 42rem){
  .bx--tabs-trigger{
    display:none
  }
}

.bx--tabs-trigger:focus,.bx--tabs-trigger:active{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--tabs-trigger:focus,.bx--tabs-trigger:active{
    outline-style:dotted
  }
}

.bx--tabs-trigger svg{
  position:absolute;
  right:1rem;
  fill:#161616;
  transition:transform 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tabs-trigger--open:focus,.bx--tabs-trigger--open:active{
  outline:2px solid transparent;
  outline-offset:-2px;
  transition:outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tabs-trigger--open{
  background:#e0e0e0
}

.bx--tabs-trigger--open svg{
  transform:rotate(-180deg);
  transform-origin:50% 45%;
  transition:transform 70ms
}

.bx--tabs--light.bx--tabs-trigger{
  background-color:#f4f4f4
}

.bx--tabs-trigger-text{
  overflow:hidden;
  padding-top:2px;
  color:#161616;
  font-weight:400;
  text-decoration:none;
  text-overflow:ellipsis;
  white-space:nowrap
}

.bx--tabs-trigger-text:hover{
  color:#161616
}

.bx--tabs-trigger-text:focus{
  outline:none
}

.bx--tabs__nav{
  box-shadow:0 2px 6px rgba(0,0,0,.3);
  position:absolute;
  z-index:9100;
  display:flex;
  width:100%;
  max-height:600px;
  flex-direction:column;
  padding:0;
  margin:0;
  background:#fff;
  list-style:none;
  transition:max-height 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

@media(min-width: 42rem){
  .bx--tabs__nav{
    z-index:auto;
    width:auto;
    flex-direction:row;
    background:none;
    box-shadow:none;
    transition:inherit
  }
}

.bx--tabs__nav--hidden{
  overflow:hidden;
  max-height:0;
  transition:max-height 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

@media(min-width: 42rem){
  .bx--tabs__nav--hidden{
    display:flex;
    max-width:100%;
    max-height:none;
    overflow-x:auto;
    transition:inherit
  }
}

.bx--tabs__nav-item{
  display:flex;
  width:100%;
  height:2.5rem;
  padding:0;
  background-color:#fff;
  cursor:pointer;
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

@media(min-width: 42rem){
  .bx--tabs__nav-item{
    height:auto;
    background:transparent
  }

  .bx--tabs__nav-item+.bx--tabs__nav-item{
    margin-left:.0625rem
  }
}

@media(min-width: 42rem){
  .bx--tabs--container .bx--tabs__nav-item{
    background-color:#e0e0e0
  }

  .bx--tabs--container .bx--tabs__nav-item+.bx--tabs__nav-item{
    margin-left:0;
    box-shadow:-1px 0 0 0 #8d8d8d
  }

  .bx--tabs--container .bx--tabs__nav-item+.bx--tabs__nav-item.bx--tabs__nav-item--selected,.bx--tabs--container .bx--tabs__nav-item.bx--tabs__nav-item--selected+.bx--tabs__nav-item{
    box-shadow:none
  }
}

.bx--tabs__nav-item .bx--tabs__nav-link{
  transition:color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),border-bottom-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

@media(min-width: 42rem){
  .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected){
    background:transparent
  }
}

.bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled){
  background-color:#e5e5e5;
  box-shadow:0 -1px 0 #e5e5e5
}

@media(min-width: 42rem){
  .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled){
    background-color:transparent
  }

  .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled)+.bx--tabs__nav-item{
    box-shadow:none
  }
}

@media(min-width: 42rem){
  .bx--tabs--container .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled){
    background-color:#cacaca
  }
}

.bx--tabs__nav-item--disabled,.bx--tabs__nav-item--disabled:hover{
  cursor:not-allowed;
  outline:none
}

@media(min-width: 42rem){
  .bx--tabs--container .bx--tabs__nav-item.bx--tabs__nav-item--disabled,.bx--tabs--container .bx--tabs__nav-item.bx--tabs__nav-item--disabled:hover{
    background-color:#c6c6c6
  }
}

@media(min-width: 42rem){
  .bx--tabs--container .bx--tabs__nav-item--disabled .bx--tabs__nav-link{
    border-bottom:none;
    color:#8d8d8d
  }
}

.bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled){
  display:none;
  border:none;
  transition:color 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

@media(min-width: 42rem){
  .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled){
    display:flex
  }

  .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link,.bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:focus,.bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:active{
    font-size:.875rem;
    font-weight:600;
    line-height:1.28572;
    letter-spacing:.16px;
    border-bottom:2px solid #0f62fe;
    color:#161616
  }
}

@media(min-width: 42rem){
  .bx--tabs--container .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled),.bx--tabs--container .bx--tabs__nav-item--selected:hover:not(.bx--tabs__nav-item--disabled){
    background-color:#fff
  }

  .bx--tabs--container .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link,.bx--tabs--container .bx--tabs__nav-item--selected:hover:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link{
    padding:.5rem 1rem;
    border-bottom:none;
    box-shadow:inset 0 2px 0 0 #0f62fe;
    line-height:calc(3rem - (0.5rem * 2))
  }

  .bx--tabs--container .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:focus,.bx--tabs--container .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:active,.bx--tabs--container .bx--tabs__nav-item--selected:hover:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:focus,.bx--tabs--container .bx--tabs__nav-item--selected:hover:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:active{
    box-shadow:none
  }
}

a.bx--tabs__nav-link{
  outline:2px solid transparent;
  outline-offset:-2px;
  display:inline-block;
  overflow:hidden;
  width:calc(100% - 32px);
  height:2.5rem;
  padding:.75rem 0;
  border-bottom:1px solid #e0e0e0;
  margin:0 1rem;
  color:#525252;
  font-weight:400;
  line-height:1rem;
  text-decoration:none;
  text-overflow:ellipsis;
  transition:border 70ms cubic-bezier(0.2, 0, 0.38, 0.9),outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  white-space:nowrap
}

a.bx--tabs__nav-link:focus,a.bx--tabs__nav-link:active{
  outline:2px solid #0f62fe;
  outline-offset:-2px;
  width:100%;
  padding-left:16px;
  margin:0
}

@media screen and (prefers-contrast){
  a.bx--tabs__nav-link:focus,a.bx--tabs__nav-link:active{
    outline-style:dotted
  }
}

@media(min-width: 42rem){
  a.bx--tabs__nav-link{
    width:10rem;
    padding:.75rem 1rem .5rem;
    border-bottom:2px solid #e0e0e0;
    margin:0;
    line-height:inherit
  }

  a.bx--tabs__nav-link:focus,a.bx--tabs__nav-link:active{
    width:10rem;
    border-bottom:2px
  }
}

@media(min-width: 42rem){
  .bx--tabs--container a.bx--tabs__nav-link{
    height:3rem;
    padding:.5rem 1rem;
    border-bottom:none;
    line-height:calc(3rem - (0.5rem * 2))
  }
}

.bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link{
  color:#161616
}

@media(min-width: 42rem){
  .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link{
    border-bottom:2px solid #8d8d8d;
    color:#161616
  }
}

@media(min-width: 42rem){
  .bx--tabs--container .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link{
    border-bottom:none
  }
}

.bx--tabs__nav-item--disabled .bx--tabs__nav-link{
  border-bottom:2px solid #fff;
  color:#c6c6c6;
  pointer-events:none
}

.bx--tabs__nav-item--disabled:hover .bx--tabs__nav-link{
  border-bottom:2px solid #fff;
  cursor:no-drop
}

.bx--tabs__nav-item--disabled .bx--tabs__nav-link:focus,.bx--tabs__nav-item--disabled a.bx--tabs__nav-link:active{
  border-bottom:2px solid #fff;
  outline:none
}

.bx--tabs__nav-item:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) .bx--tabs__nav-link:focus,.bx--tabs__nav-item:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) a.bx--tabs__nav-link:active{
  color:#525252
}

.bx--tab-content{
  padding:1rem
}

.bx--tab-content:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--tab-content:focus{
    outline-style:dotted
  }
}

.bx--tabs.bx--skeleton{
  cursor:default;
  pointer-events:none
}

.bx--skeleton.bx--tabs--scrollable:not(.bx--tabs--scrollable--container) .bx--tabs--scrollable__nav-item{
  border-bottom:2px solid #c6c6c6
}

.bx--tabs.bx--skeleton .bx--tabs__nav-link{
  display:flex;
  width:10rem;
  height:100%;
  align-items:center;
  padding:0 1rem
}

.bx--tabs.bx--skeleton .bx--tabs__nav-link span{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  display:block;
  width:100%;
  height:.875rem
}

.bx--tabs.bx--skeleton .bx--tabs__nav-link span:hover,.bx--tabs.bx--skeleton .bx--tabs__nav-link span:focus,.bx--tabs.bx--skeleton .bx--tabs__nav-link span:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--tabs.bx--skeleton .bx--tabs__nav-link span::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--tabs.bx--skeleton .bx--tabs__nav-link span::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--tabs.bx--skeleton .bx--tabs-trigger{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:6.25rem
}

.bx--tabs.bx--skeleton .bx--tabs-trigger:hover,.bx--tabs.bx--skeleton .bx--tabs-trigger:focus,.bx--tabs.bx--skeleton .bx--tabs-trigger:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--tabs.bx--skeleton .bx--tabs-trigger::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--tabs.bx--skeleton .bx--tabs-trigger::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--tabs.bx--skeleton .bx--tabs-trigger svg{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap
}

.bx--tabs--scrollable{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:flex;
  width:100%;
  height:auto;
  min-height:2.5rem;
  color:#161616
}

.bx--tabs--scrollable.bx--tabs--scrollable--container{
  min-height:3rem
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav{
  display:flex;
  overflow:auto hidden;
  width:auto;
  max-width:100%;
  flex-direction:row;
  padding:0;
  margin:0;
  list-style:none;
  outline:0;
  scrollbar-width:none;
  transition:max-height 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav::-webkit-scrollbar{
  display:none
}

.bx--tabs--scrollable .bx--tabs__overflow-indicator--left,.bx--tabs--scrollable .bx--tabs__overflow-indicator--right{
  z-index:1;
  width:.5rem;
  flex:1 0 auto
}

.bx--tabs--scrollable .bx--tabs__overflow-indicator--left{
  margin-right:-0.5rem;
  background-image:linear-gradient(to left, transparent, #f4f4f4)
}

.bx--tabs--scrollable .bx--tabs__overflow-indicator--right{
  margin-left:-0.5rem;
  background-image:linear-gradient(to right, transparent, #f4f4f4)
}

.bx--tabs--scrollable .bx--tabs--scrollable--light .bx--tabs__overflow-indicator--left{
  background-image:linear-gradient(to left, transparent, #ffffff)
}

.bx--tabs--scrollable .bx--tabs--scrollable--light .bx--tabs__overflow-indicator--right{
  background-image:linear-gradient(to right, transparent, #ffffff)
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs__overflow-indicator--left{
  background-image:linear-gradient(to left, transparent, #e0e0e0)
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs__overflow-indicator--right{
  background-image:linear-gradient(to right, transparent, #e0e0e0)
}

@media not all and (-webkit-min-device-pixel-ratio: 0), not all and (min-resolution: 0.001dpcm){
  @supports(-webkit-appearance: none) and (stroke-color: transparent){
    .bx--tabs--scrollable .bx--tabs__overflow-indicator--left{
      background-image:linear-gradient(to left, rgba(244, 244, 244, 0), #f4f4f4)
    }

    .bx--tabs--scrollable .bx--tabs__overflow-indicator--right{
      background-image:linear-gradient(to right, rgba(244, 244, 244, 0), #f4f4f4)
    }

    .bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs__overflow-indicator--left{
      background-image:linear-gradient(to left, rgba(224, 224, 224, 0), #e0e0e0)
    }

    .bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs__overflow-indicator--right{
      background-image:linear-gradient(to right, rgba(224, 224, 224, 0), #e0e0e0)
    }
  }
}

.bx--tabs--scrollable .bx--tab--overflow-nav-button{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  display:flex;
  width:2.5rem;
  flex-shrink:0;
  align-items:center;
  justify-content:center
}

.bx--tabs--scrollable .bx--tab--overflow-nav-button::-moz-focus-inner{
  border:0
}

.bx--tabs--scrollable .bx--tab--overflow-nav-button:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--tabs--scrollable .bx--tab--overflow-nav-button:focus{
    outline-style:dotted
  }
}

.bx--tabs--scrollable .bx--tab--overflow-nav-button--hidden{
  display:none
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tab--overflow-nav-button{
  width:3rem;
  margin:0;
  background-color:#e0e0e0
}

.bx--tabs--scrollable .bx--tab--overflow-nav-button svg{
  fill:#161616
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-item{
  display:flex;
  padding:0;
  cursor:pointer;
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-item+.bx--tabs--scrollable__nav-item{
  margin-left:.0625rem
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item{
  background-color:#e0e0e0
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item+.bx--tabs--scrollable__nav-item{
  margin-left:0;
  box-shadow:-0.0625rem 0 0 0 #8d8d8d
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item+.bx--tabs--scrollable__nav-item.bx--tabs--scrollable__nav-item--selected,.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item.bx--tabs--scrollable__nav-item--selected+.bx--tabs--scrollable__nav-item{
  box-shadow:none
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-item .bx--tabs--scrollable__nav-link{
  transition:color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),border-bottom-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item:hover{
  background-color:#cacaca
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-item--disabled,.bx--tabs--scrollable .bx--tabs--scrollable__nav-item--disabled:hover{
  background-color:transparent;
  cursor:not-allowed;
  outline:none
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item.bx--tabs--scrollable__nav-item--disabled,.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item.bx--tabs--scrollable__nav-item--disabled:hover{
  background-color:#c6c6c6
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-item--selected{
  transition:color 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-item--selected .bx--tabs--scrollable__nav-link,.bx--tabs--scrollable .bx--tabs--scrollable__nav-item--selected .bx--tabs--scrollable__nav-link:focus,.bx--tabs--scrollable .bx--tabs--scrollable__nav-item--selected .bx--tabs--scrollable__nav-link:active{
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  border-bottom:2px solid #0f62fe;
  color:#161616
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item--selected,.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item--selected:hover{
  background-color:#fff
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item--selected .bx--tabs--scrollable__nav-link:focus,.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item--selected .bx--tabs--scrollable__nav-link:active,.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item--selected:hover .bx--tabs--scrollable__nav-link:focus,.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item--selected:hover .bx--tabs--scrollable__nav-link:active{
  box-shadow:none
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item--selected .bx--tabs--scrollable__nav-link{
  box-shadow:inset 0 2px 0 0 #0f62fe;
  line-height:calc(3rem - (0.5rem * 2))
}

.bx--tabs--scrollable.bx--tabs--scrollable--light.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item--selected,.bx--tabs--scrollable.bx--tabs--scrollable--light.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item--selected:hover{
  background-color:#f4f4f4
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-link{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  outline:2px solid transparent;
  outline-offset:-2px;
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  width:10rem;
  overflow:hidden;
  padding:.75rem 1rem .5rem;
  border-bottom:2px solid #e0e0e0;
  color:#525252;
  text-align:left;
  text-decoration:none;
  text-overflow:ellipsis;
  transition:border 70ms cubic-bezier(0.2, 0, 0.38, 0.9),outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  white-space:nowrap
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-link::-moz-focus-inner{
  border:0
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-link:focus,.bx--tabs--scrollable .bx--tabs--scrollable__nav-link:active{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--tabs--scrollable .bx--tabs--scrollable__nav-link:focus,.bx--tabs--scrollable .bx--tabs--scrollable__nav-link:active{
    outline-style:dotted
  }
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-link{
  height:3rem;
  padding:.5rem 1rem;
  border-bottom:0;
  line-height:calc(3rem - (0.5rem * 2))
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-item:hover .bx--tabs--scrollable__nav-link{
  border-bottom:2px solid #8d8d8d;
  color:#161616
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item .bx--tabs--scrollable__nav-link{
  border-bottom:none
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-item--disabled .bx--tabs--scrollable__nav-link{
  border-bottom:2px solid #fff;
  color:#c6c6c6
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-item--disabled:hover .bx--tabs--scrollable__nav-link{
  border-bottom:2px solid #fff;
  color:#c6c6c6;
  cursor:not-allowed;
  pointer-events:none
}

.bx--tabs--scrollable .bx--tabs--scrollable__nav-item--disabled .bx--tabs--scrollable__nav-link:focus,.bx--tabs--scrollable .bx--tabs--scrollable__nav-item--disabled .bx--tabs--scrollable__nav-link:active{
  border-bottom:2px solid #fff;
  outline:none
}

.bx--tabs--scrollable .bx--tabs--scrollable--light .bx--tabs--scrollable__nav-item--disabled .bx--tabs--scrollable__nav-link{
  border-bottom-color:#e0e0e0
}

.bx--tabs--scrollable .bx--tabs--scrollable--light .bx--tabs--scrollable__nav-item--disabled:hover .bx--tabs--scrollable__nav-link{
  border-bottom-color:#e0e0e0
}

.bx--tabs--scrollable .bx--tabs--scrollable--light .bx--tabs--scrollable__nav-item--disabled .bx--tabs--scrollable__nav-link:focus,.bx--tabs--scrollable .bx--tabs--scrollable--light .bx--tabs--scrollable__nav-item--disabled .bx--tabs--scrollable__nav-link:active{
  border-bottom-color:#e0e0e0
}

.bx--tabs--scrollable.bx--tabs--scrollable--container .bx--tabs--scrollable__nav-item--disabled .bx--tabs--scrollable__nav-link{
  border-bottom:none;
  color:#8d8d8d
}

.bx--tabs--scrollable .bx--tab-content{
  padding:1rem
}

.bx--tabs--scrollable .bx--tabs.bx--skeleton{
  cursor:default;
  pointer-events:none
}

.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs--scrollable__nav-link{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:4.6875rem
}

.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs--scrollable__nav-link:hover,.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs--scrollable__nav-link:focus,.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs--scrollable__nav-link:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs--scrollable__nav-link::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs--scrollable__nav-link::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs-trigger{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:4.6875rem;
  margin-right:.0625rem
}

.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs-trigger:hover,.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs-trigger:focus,.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs-trigger:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs-trigger::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs-trigger::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--tabs--scrollable .bx--tabs.bx--skeleton .bx--tabs-trigger svg{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--tabs--scrollable__nav-item .bx--tabs__nav-item--selected .bx--tabs--scrollable__nav-item--selected{
    color:Highlight;
    outline:1px solid Highlight
  }
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--tabs--scrollable .bx--tabs--scrollable__nav-item--disabled .bx--tabs--scrollable__nav-link{
    color:GrayText;
    fill:GrayText
  }
}

.bx--text-area{
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px;
  outline:2px solid transparent;
  outline-offset:-2px;
  width:100%;
  min-width:10rem;
  height:100%;
  min-height:2.5rem;
  padding:.6875rem 1rem;
  border:none;
  border-bottom:1px solid #8d8d8d;
  background-color:#fff;
  color:#161616;
  resize:vertical;
  transition:background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--text-area:focus,.bx--text-area:active{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--text-area:focus,.bx--text-area:active{
    outline-style:dotted
  }
}

.bx--text-area::-moz-placeholder{
  color:#6f6f6f;
  opacity:1;
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px
}

.bx--text-area:-ms-input-placeholder{
  color:#6f6f6f;
  opacity:1;
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px
}

.bx--text-area::placeholder{
  color:#6f6f6f;
  opacity:1;
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.16px
}

.bx--text-area--light{
  background-color:#f4f4f4
}

.bx--text-area--invalid{
  padding-right:2.5rem
}

.bx--text-area__wrapper{
  position:relative;
  display:flex;
  width:100%
}

.bx--text-area__invalid-icon{
  position:absolute;
  top:.75rem;
  right:1rem;
  fill:#da1e28
}

.bx--text-area:disabled{
  border-bottom:1px solid transparent;
  background-color:#fff;
  color:#c6c6c6;
  cursor:not-allowed;
  outline:none
}

.bx--text-area:disabled::-moz-placeholder{
  color:#c6c6c6
}

.bx--text-area:disabled:-ms-input-placeholder{
  color:#c6c6c6
}

.bx--text-area:disabled::placeholder{
  color:#c6c6c6
}

.bx--text-area.bx--text-area--light:disabled{
  background-color:#f4f4f4
}

.bx--text-area.bx--skeleton{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  height:6.25rem
}

.bx--text-area.bx--skeleton:hover,.bx--text-area.bx--skeleton:focus,.bx--text-area.bx--skeleton:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--text-area.bx--skeleton::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--text-area.bx--skeleton::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--text-area.bx--skeleton::-moz-placeholder{
  color:transparent
}

.bx--text-area.bx--skeleton:-ms-input-placeholder{
  color:transparent
}

.bx--text-area.bx--skeleton::placeholder{
  color:transparent
}

.bx--text-area__label-wrapper{
  display:flex;
  width:100%;
  justify-content:space-between
}

.bx--tile{
  display:block;
  min-width:8rem;
  min-height:4rem;
  padding:1rem;
  background-color:#fff;
  outline:2px solid transparent;
  outline-offset:-2px
}

.bx--tile:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--tile:focus{
    outline-style:dotted
  }
}

.bx--tile--light{
  background-color:#f4f4f4
}

.bx--tile--clickable,.bx--tile--selectable,.bx--tile--expandable{
  cursor:pointer;
  transition:150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tile--clickable:hover,.bx--tile--selectable:hover,.bx--tile--expandable:hover{
  background:#e5e5e5
}

.bx--tile--expandable .bx--link{
  color:#0043ce
}

.bx--tile--clickable:focus,.bx--tile--expandable:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--tile--clickable:focus,.bx--tile--expandable:focus{
    outline-style:dotted
  }
}

.bx--tile--clickable:hover .bx--tile__checkmark,.bx--tile--clickable:focus .bx--tile__checkmark,.bx--tile--expandable:hover .bx--tile__checkmark,.bx--tile--expandable:focus .bx--tile__checkmark{
  opacity:1
}

.bx--tile--expandable::-moz-focus-inner{
  border:0
}

.bx--tile--clickable{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  color:#161616;
  text-decoration:none
}

.bx--tile--clickable:hover,.bx--tile--clickable:active,.bx--tile--clickable:visited,.bx--tile--clickable:visited:hover{
  color:#161616;
  text-decoration:none
}

.bx--tile--clickable.bx--link--disabled{
  color:#c6c6c6
}

.bx--tile--clickable:hover.bx--link--disabled{
  display:block;
  background-color:#fff;
  color:#c6c6c6
}

.bx--tile--selectable{
  position:relative;
  padding-right:3rem;
  border:1px solid transparent
}

.bx--tile__checkmark,.bx--tile__chevron{
  position:absolute;
  border:none;
  background:transparent;
  transition:110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tile__checkmark{
  top:1rem;
  right:1rem;
  height:1rem;
  opacity:0
}

.bx--tile__checkmark svg{
  border-radius:50%;
  fill:#525252
}

.bx--tile__checkmark:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--tile__checkmark:focus{
    outline-style:dotted
  }
}

.bx--tile__checkmark--persistent{
  opacity:1
}

.bx--tile__chevron{
  position:absolute;
  right:1rem;
  bottom:1rem;
  display:flex;
  height:1rem;
  align-items:flex-end
}

.bx--tile__chevron svg{
  margin-left:.5rem;
  fill:#161616;
  transform-origin:center;
  transition:110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tile__chevron svg{
    fill:ButtonText
  }
}

.bx--tile__chevron:hover{
  cursor:pointer
}

.bx--tile__chevron:focus{
  outline:none
}

.bx--tile--expandable{
  position:relative;
  overflow:hidden;
  width:100%;
  border:0;
  color:inherit;
  font-size:inherit;
  text-align:left;
  transition:max-height 150ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tile-content__above-the-fold{
  display:block
}

.bx--tile-content__below-the-fold{
  display:block;
  opacity:0;
  transition:opacity 110ms cubic-bezier(0.2, 0, 0.38, 0.9),visibility 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  visibility:hidden
}

.bx--tile--is-expanded{
  overflow:visible;
  transition:max-height 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tile--is-expanded .bx--tile__chevron svg{
  transform:rotate(180deg)
}

.bx--tile--is-expanded .bx--tile-content__below-the-fold{
  opacity:1;
  transition:opacity 110ms cubic-bezier(0.2, 0, 0.38, 0.9),visibility 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  visibility:inherit
}

@media not all and (-webkit-min-device-pixel-ratio: 0), not all and (min-resolution: 0.001dpcm){
  @supports(-webkit-appearance: none) and (stroke-color: transparent){
    .bx--tile--is-expanded .bx--tile-content__below-the-fold{
      overflow-y:auto
    }
  }
}

.bx--tile--is-selected{
  border:1px solid #161616
}

.bx--tile--is-selected .bx--tile__checkmark{
  opacity:1
}

.bx--tile--is-selected .bx--tile__checkmark svg{
  fill:#161616
}

@media screen and (-ms-high-contrast: active),screen and (prefers-contrast){
  .bx--tile--is-selected .bx--tile__checkmark svg{
    fill:ButtonText
  }
}

.bx--tile-content{
  width:100%;
  height:100%
}

.bx--tile-input{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap
}

.bx--tile-input:focus+.bx--tile{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--tile-input:focus+.bx--tile{
    outline-style:dotted
  }
}

.bx--tile--disabled.bx--tile--selectable{
  background-color:#fff;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--tile--disabled.bx--tile--selectable.bx--tile--light{
  background-color:#f4f4f4
}

.bx--tile--disabled.bx--tile--is-selected{
  outline-color:#c6c6c6
}

.bx--tile--disabled.bx--tile--is-selected .bx--tile__checkmark svg{
  fill:#c6c6c6
}

.bx--time-picker{
  display:flex;
  align-items:flex-end
}

.bx--time-picker__select{
  justify-content:center
}

.bx--time-picker__select:not(:last-of-type){
  margin:0 .125rem
}

.bx--time-picker__input{
  display:flex;
  flex-direction:column
}

.bx--time-picker .bx--select-input{
  width:auto;
  min-width:auto;
  padding-right:3rem;
  margin:0
}

.bx--time-picker__input-field{
  outline:2px solid transparent;
  outline-offset:-2px;
  font-family:'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  font-size:.875rem;
  font-weight:400;
  line-height:1.42857;
  letter-spacing:.32px;
  display:flex;
  width:4.875rem;
  height:2.5rem;
  align-items:center;
  transition:outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--time-picker__input-field::-moz-placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--time-picker__input-field:-ms-input-placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--time-picker__input-field::placeholder{
  color:#6f6f6f;
  opacity:1
}

.bx--time-picker--light .bx--select-input{
  background-color:#f4f4f4
}

.bx--time-picker--light .bx--select-input:hover{
  background-color:#e5e5e5
}

.bx--time-picker--light .bx--select-input:disabled,.bx--time-picker--light .bx--select-input:hover:disabled{
  border-bottom:1px solid transparent;
  background-color:transparent;
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--time-picker--sm .bx--select-input,.bx--time-picker--sm .bx--time-picker__input-field{
  height:2rem;
  max-height:2rem
}

.bx--time-picker--xl .bx--select-input,.bx--time-picker--xl .bx--time-picker__input-field,.bx--time-picker--lg .bx--select-input,.bx--time-picker--lg .bx--time-picker__input-field{
  height:3rem;
  max-height:3rem
}

.bx--toggle{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap
}

.bx--toggle:focus{
  outline:none
}

.bx--toggle__label{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  position:relative;
  display:flex;
  align-items:center;
  margin:.5rem 0;
  cursor:pointer
}

.bx--toggle__appearance{
  position:relative;
  width:3rem;
  height:1.5rem
}

.bx--toggle__appearance::before{
  position:absolute;
  top:0;
  display:block;
  width:3rem;
  height:1.5rem;
  box-sizing:border-box;
  background-color:#8d8d8d;
  border-radius:.9375rem;
  box-shadow:0 0 0 1px transparent,0 0 0 3px transparent;
  content:"";
  cursor:pointer;
  transition:box-shadow 70ms cubic-bezier(0.2, 0, 1, 0.9),background-color 70ms cubic-bezier(0.2, 0, 1, 0.9);
  will-change:box-shadow
}

.bx--toggle__appearance::after{
  position:absolute;
  top:.1875rem;
  left:.1875rem;
  display:block;
  width:1.125rem;
  height:1.125rem;
  box-sizing:border-box;
  background-color:#fff;
  border-radius:50%;
  content:"";
  cursor:pointer;
  transition:transform 70ms cubic-bezier(0.2, 0, 1, 0.9)
}

.bx--toggle__check{
  position:absolute;
  z-index:1;
  top:.375rem;
  left:.375rem;
  width:.375rem;
  height:.3125rem;
  fill:#fff;
  transform:scale(0.2);
  transition:70ms cubic-bezier(0.2, 0, 1, 0.9)
}

.bx--toggle__text--left,.bx--toggle__text--right{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  position:relative;
  margin-left:.5rem
}

.bx--toggle__text--left{
  position:absolute;
  left:3rem
}

.bx--toggle:checked+.bx--toggle__label .bx--toggle__text--left,.bx--toggle:not(:checked)+.bx--toggle__label .bx--toggle__text--right{
  visibility:hidden
}

.bx--toggle:checked+.bx--toggle__label .bx--toggle__text--right,.bx--toggle:not(:checked)+.bx--toggle__label .bx--toggle__text--left{
  display:inline
}

.bx--toggle:checked+.bx--toggle__label .bx--toggle__appearance::before{
  background-color:#198038
}

.bx--toggle:checked+.bx--toggle__label .bx--toggle__appearance::after{
  background-color:#fff;
  transform:translateX(1.5rem)
}

.bx--toggle+.bx--toggle__label .bx--toggle__appearance::before{
  box-shadow:0 0 0 1px transparent,0 0 0 3px transparent
}

.bx--toggle:focus+.bx--toggle__label,.bx--toggle:active+.bx--toggle__label .bx--toggle__appearance::before{
  box-shadow:0 0 0 1px #e0e0e0,0 0 0 3px #0f62fe
}

.bx--toggle:disabled+.bx--toggle__label{
  cursor:not-allowed
}

.bx--toggle:disabled+.bx--toggle__label .bx--toggle__appearance::before{
  background-color:#fff
}

.bx--toggle:disabled+.bx--toggle__label .bx--toggle__appearance::after{
  background-color:#c6c6c6
}

.bx--toggle:disabled+.bx--toggle__label .bx--toggle__appearance::before,.bx--toggle:disabled+.bx--toggle__label .bx--toggle__appearance::after{
  cursor:not-allowed;
  transition:70ms cubic-bezier(0.2, 0, 1, 0.9)
}

.bx--toggle:disabled+.bx--toggle__label .bx--toggle__text--left,.bx--toggle:disabled+.bx--toggle__label .bx--toggle__text--right{
  color:#c6c6c6
}

.bx--toggle:disabled:active+.bx--toggle__label .bx--toggle__appearance:before{
  box-shadow:none
}

.bx--toggle:disabled+.bx--toggle__label .bx--toggle__check{
  fill:#c6c6c6
}

.bx--toggle--small+.bx--toggle__label .bx--toggle__appearance{
  width:2rem;
  height:1rem
}

.bx--toggle--small+.bx--toggle__label .bx--toggle__appearance::before{
  top:0;
  width:2rem;
  height:1rem;
  box-sizing:border-box;
  border-radius:.9375rem
}

.bx--toggle--small+.bx--toggle__label .bx--toggle__appearance::after{
  top:.1875rem;
  left:.1875rem;
  width:.625rem;
  height:.625rem
}

.bx--toggle--small:checked+.bx--toggle__label .bx--toggle__check{
  fill:#198038;
  transform:scale(1) translateX(1rem)
}

.bx--toggle--small+.bx--toggle__label .bx--toggle__text--left{
  left:2rem
}

.bx--toggle--small:checked+.bx--toggle__label .bx--toggle__appearance::after{
  margin-left:0;
  transform:translateX(1.0625rem)
}

.bx--toggle-input{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap
}

.bx--toggle-input:focus{
  outline:none
}

.bx--toggle-input__label{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  color:#525252;
  cursor:pointer
}

.bx--toggle__switch{
  position:relative;
  display:flex;
  width:3rem;
  height:1.5rem;
  align-items:center;
  cursor:pointer
}

.bx--toggle__switch::before{
  position:absolute;
  top:0;
  display:block;
  width:3rem;
  height:1.5rem;
  box-sizing:border-box;
  background-color:#8d8d8d;
  border-radius:.9375rem;
  box-shadow:0 0 0 1px transparent,0 0 0 3px transparent;
  content:"";
  transition:box-shadow 70ms cubic-bezier(0.2, 0, 1, 0.9),background-color 70ms cubic-bezier(0.2, 0, 1, 0.9);
  will-change:box-shadow
}

.bx--toggle__switch::after{
  position:absolute;
  top:.1875rem;
  left:.1875rem;
  display:block;
  width:1.125rem;
  height:1.125rem;
  box-sizing:border-box;
  background-color:#fff;
  border-radius:50%;
  content:"";
  transition:transform 70ms cubic-bezier(0.2, 0, 1, 0.9)
}

.bx--toggle-input__label .bx--toggle__switch{
  margin-top:1rem
}

.bx--toggle__text--off,.bx--toggle__text--on{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  position:absolute;
  top:50%;
  margin-left:3.5rem;
  transform:translateY(-50%);
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  white-space:nowrap
}

.bx--toggle-input:checked+.bx--toggle-input__label>.bx--toggle__switch>.bx--toggle__text--off,.bx--toggle-input:not(:checked)+.bx--toggle-input__label>.bx--toggle__switch>.bx--toggle__text--on{
  visibility:hidden
}

.bx--toggle-input:checked+.bx--toggle-input__label>.bx--toggle__switch::before{
  background-color:#198038
}

.bx--toggle-input:checked+.bx--toggle-input__label>.bx--toggle__switch::after{
  background-color:#fff;
  transform:translateX(1.5rem)
}

.bx--toggle-input:focus+.bx--toggle-input__label>.bx--toggle__switch::before,.bx--toggle-input:active+.bx--toggle-input__label>.bx--toggle__switch::before{
  box-shadow:0 0 0 1px #f4f4f4,0 0 0 3px #0f62fe
}

.bx--toggle-input:disabled+.bx--toggle-input__label{
  color:#c6c6c6;
  cursor:not-allowed
}

.bx--toggle-input:disabled+.bx--toggle-input__label>.bx--toggle__switch{
  cursor:not-allowed
}

.bx--toggle-input:disabled+.bx--toggle-input__label>.bx--toggle__switch::before{
  background-color:#c6c6c6
}

.bx--toggle-input:disabled+.bx--toggle-input__label>.bx--toggle__switch::after{
  background-color:#8d8d8d
}

.bx--toggle-input:disabled+.bx--toggle-input__label>.bx--toggle__switch::before,.bx--toggle-input:disabled+.bx--toggle-input__label>.bx--toggle__switch::after{
  cursor:not-allowed;
  transition:70ms cubic-bezier(0.2, 0, 1, 0.9)
}

.bx--toggle-input:disabled:active+.bx--toggle-input__label>.bx--toggle__switch::before{
  box-shadow:none
}

.bx--toggle-input--small+.bx--toggle-input__label>.bx--toggle__switch{
  width:2rem;
  height:1rem
}

.bx--toggle-input--small+.bx--toggle-input__label>.bx--toggle__switch::before{
  width:2rem;
  height:1rem;
  border-radius:.9375rem
}

.bx--toggle-input--small+.bx--toggle-input__label>.bx--toggle__switch::after{
  width:.625rem;
  height:.625rem
}

.bx--toggle-input--small+.bx--toggle-input__label .bx--toggle__text--off,.bx--toggle-input--small+.bx--toggle-input__label .bx--toggle__text--on{
  margin-left:2.5rem
}

.bx--toggle-input--small:checked+.bx--toggle-input__label>.bx--toggle__switch::after{
  transform:translateX(1.0625rem)
}

.bx--toggle-input--small:checked+.bx--toggle-input__label .bx--toggle__check{
  fill:#198038;
  transform:scale(1) translateX(1rem)
}

.bx--toggle-input--small:disabled:checked+.bx--toggle-input__label .bx--toggle__check{
  fill:#fff
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:3rem;
  margin-top:.5rem
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch:hover,.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch:focus,.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label>div{
  overflow:hidden;
  width:1.5rem;
  height:.5rem;
  font-size:0%;
  line-height:0;
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label>div:hover,.bx--toggle.bx--skeleton+.bx--toggle-input__label>div:focus,.bx--toggle.bx--skeleton+.bx--toggle-input__label>div:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label>div::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--toggle.bx--skeleton+.bx--toggle-input__label>div::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  width:2rem;
  margin-top:.5rem
}

.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch:hover,.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch:focus,.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label>div{
  overflow:hidden;
  width:1rem;
  height:.5rem;
  font-size:0%;
  line-height:0;
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none
}

.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label>div:hover,.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label>div:focus,.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label>div:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label>div::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label>div::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch .bx--toggle__text--left{
  position:relative;
  padding:0;
  border:none;
  background:#e5e5e5;
  box-shadow:none;
  pointer-events:none;
  position:absolute;
  width:1rem;
  height:.5rem
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch .bx--toggle__text--left:hover,.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch .bx--toggle__text--left:focus,.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch .bx--toggle__text--left:active{
  border:none;
  cursor:default;
  outline:none
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch .bx--toggle__text--left::before{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -webkit-animation:3000ms ease-in-out skeleton infinite;
  animation:3000ms ease-in-out skeleton infinite;
  background:#c6c6c6;
  content:"";
  will-change:transform-origin,transform,opacity
}

@media(prefers-reduced-motion: reduce){
  .bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch .bx--toggle__text--left::before{
    -webkit-animation:none;
    animation:none
  }
}

.bx--toggle-input--small.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch .bx--toggle__text--left{
  left:2rem
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch::after,.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__appearance::after,.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__appearance::before{
  display:none
}

.bx--toggle.bx--skeleton+.bx--toggle-input__label .bx--toggle__switch::before{
  border-radius:0
}

.bx--toolbar{
  display:flex;
  flex-flow:row nowrap;
  align-items:center;
  margin:1rem 0
}

.bx--toolbar>div{
  margin:0 .25rem
}

.bx--toolbar .bx--search-input{
  height:2rem;
  background-color:transparent;
  outline:none
}

.bx--toolbar .bx--search-close{
  display:none
}

.bx--toolbar .bx--overflow-menu__icon{
  fill:#525252;
  transition:fill 50ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--toolbar .bx--search-magnifier{
  top:.5rem;
  left:.375rem;
  cursor:pointer;
  fill:#525252;
  transform:scale(1.15);
  transition:all 175ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--toolbar fieldset{
  padding:0;
  border:0
}

.bx--toolbar .bx--toolbar-search--active{
  width:15.625rem
}

.bx--toolbar .bx--toolbar-search--active .bx--search-magnifier{
  top:.5625rem;
  transform:scale(1)
}

.bx--toolbar .bx--toolbar-search--active .bx--search-input{
  background-color:#f4f4f4
}

.bx--toolbar .bx--toolbar-search--active .bx--search-close{
  display:block
}

.bx--toolbar .bx--checkbox-label{
  margin-bottom:0
}

.bx--toolbar .bx--overflow-menu--open>.bx--overflow-menu__icon{
  fill:#0f62fe
}

.bx--toolbar-search{
  width:1.8rem;
  transition:all 175ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--toolbar-search__btn{
  position:absolute;
  top:0;
  left:0;
  width:2rem;
  height:2rem;
  border:0;
  background:transparent
}

.bx--toolbar-search__btn:focus{
  outline:1px solid #0f62fe
}

@media screen and (prefers-contrast){
  .bx--toolbar-search__btn:focus{
    outline-style:dotted
  }
}

.bx--toolbar-filter-icon{
  padding-right:0;
  padding-left:0
}

.bx--toolbar-menu__title{
  font-size:.75rem;
  font-weight:400;
  line-height:1.33333;
  letter-spacing:.32px;
  padding:.5rem 1.25rem;
  font-weight:600
}

.bx--toolbar-menu__option{
  padding:.5rem 1.25rem
}

.bx--toolbar-menu__divider{
  width:100%;
  border:0;
  border-top:1px solid #e0e0e0
}

.bx--radio-button-group{
  border:none
}

.bx--toolbar-search:not(.bx--toolbar-search--active) .bx--search-input{
  border-bottom:none
}

.bx--unstable-pagination{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:flex;
  width:100%;
  height:3rem;
  align-items:center;
  justify-content:space-between;
  border-top:1px solid #e0e0e0;
  border-bottom:1px solid transparent;
  background-color:#fff
}

.bx--unstable-pagination__text{
  margin:0 1rem;
  color:#525252
}

@media(min-width: 42rem){
  .bx--unstable-pagination__text{
    display:inline-block
  }
}

.bx--unstable-pagination__left,.bx--unstable-pagination__right{
  display:flex;
  height:100%;
  align-items:center
}

.bx--unstable-pagination__left{
  padding:0 1rem 0 0
}

.bx--unstable-pagination__left>.bx--form-item,.bx--unstable-pagination__right>.bx--form-item{
  height:100%
}

.bx--unstable-pagination__left .bx--unstable-pagination__text{
  margin-right:.0625rem
}

.bx--unstable-pagination__right .bx--unstable-pagination__text{
  margin-right:1rem;
  margin-left:.0625rem
}

.bx--unstable-pagination__button{
  display:flex;
  height:100%;
  align-items:center;
  justify-content:center;
  padding:0 .875rem;
  border:none;
  border-left:1px solid #e0e0e0;
  margin:0;
  background:none;
  color:#161616;
  cursor:pointer;
  fill:#161616;
  transition:outline 110ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--unstable-pagination__button .bx--btn__icon{
  width:initial;
  height:initial
}

.bx--unstable-pagination__button.bx--btn--icon-only.bx--tooltip__trigger:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--unstable-pagination__button.bx--btn--icon-only.bx--tooltip__trigger:focus{
    outline-style:dotted
  }
}

.bx--unstable-pagination__button:hover{
  background:#e5e5e5;
  color:#161616
}

.bx--unstable-pagination__button--no-index{
  cursor:not-allowed;
  fill:#c6c6c6
}

.bx--unstable-pagination__button.bx--btn:disabled{
  border-color:#e0e0e0;
  background:transparent
}

.bx--unstable-pagination__button:disabled:hover,.bx--unstable-pagination__button--no-index:hover{
  background:transparent;
  cursor:not-allowed;
  fill:#c6c6c6
}

.bx--unstable-pagination__page-selector,.bx--unstable-pagination__page-sizer{
  height:100%;
  align-items:center
}

.bx--unstable-pagination__page-selector .bx--select-input--inline__wrapper,.bx--unstable-pagination__page-sizer .bx--select-input--inline__wrapper{
  display:flex;
  height:100%
}

.bx--unstable-pagination__page-selector .bx--select-input,.bx--unstable-pagination__page-sizer .bx--select-input{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  width:auto;
  min-width:auto;
  height:100%;
  padding:0 2.5rem 0 1rem;
  margin-right:-0.65rem
}

@media(min-width: 42rem){
  .bx--unstable-pagination__page-selector .bx--select-input,.bx--unstable-pagination__page-sizer .bx--select-input{
    padding-right:2.25rem;
    margin-right:0
  }
}

.bx--unstable-pagination__page-selector .bx--select-input:hover,.bx--unstable-pagination__page-sizer .bx--select-input:hover{
  background:#e5e5e5
}

.bx--unstable-pagination__page-selector .bx--select__arrow,.bx--unstable-pagination__page-sizer .bx--select__arrow{
  top:50%;
  transform:translateY(-50%)
}

@media(min-width: 42rem){
  .bx--unstable-pagination__page-selector .bx--select__arrow,.bx--unstable-pagination__page-sizer .bx--select__arrow{
    right:1rem
  }
}

.bx--unstable-pagination__page-selector{
  border-left:1px solid #e0e0e0
}

.bx--unstable-pagination__page-sizer{
  border-right:1px solid #e0e0e0
}

.bx--header{
  position:fixed;
  z-index:8000;
  top:0;
  right:0;
  left:0;
  display:flex;
  height:3rem;
  align-items:center;
  border-bottom:1px solid #393939;
  background-color:#161616
}

.bx--header__action{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  width:3rem;
  height:3rem;
  border:.0625rem solid transparent;
  transition:background-color 110ms,border-color 110ms
}

.bx--header__action::-moz-focus-inner{
  border:0
}

.bx--header__action>svg.bx--navigation-menu-panel-collapse-icon,.bx--header__action--active>svg.bx--navigation-menu-panel-expand-icon{
  display:none
}

.bx--header__action--active>svg.bx--navigation-menu-panel-collapse-icon{
  display:inline
}

.bx--header__action:hover{
  background-color:#353535
}

.bx--header__action--active{
  border-right:1px solid #393939;
  border-bottom:1px solid #161616;
  border-left:1px solid #393939
}

.bx--header__action:focus{
  border-color:#fff;
  outline:none
}

.bx--header__action:active{
  background-color:#393939
}

.bx--header__action.bx--btn--icon-only.bx--tooltip__trigger{
  justify-content:center
}

.bx--header__action>svg{
  fill:#fff
}

.bx--header__menu-trigger>svg{
  fill:#f4f4f4
}

.bx--header__menu-trigger:hover{
  fill:#2c2c2c
}

.bx--header__menu-toggle{
  display:flex;
  align-items:center;
  justify-content:center
}

@media(min-width: 66rem){
  .bx--header__menu-toggle__hidden{
    display:none
  }
}

a.bx--header__name{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:flex;
  height:100%;
  align-items:center;
  padding:0 2rem 0 1rem;
  border:.125rem solid transparent;
  font-weight:600;
  letter-spacing:.1px;
  line-height:1.25rem;
  outline:none;
  text-decoration:none;
  transition:border-color 110ms;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

a.bx--header__name:focus{
  border-color:#fff
}

.bx--header__name--prefix{
  font-weight:400
}

a.bx--header__name,a.bx--header__name:hover{
  color:#f4f4f4
}

.bx--header__menu-toggle:not(.bx--header__menu-toggle__hidden)~.bx--header__name{
  padding-left:.5rem
}

.bx--header__nav{
  position:relative;
  display:none;
  height:100%;
  padding-left:1rem
}

@media(min-width: 66rem){
  .bx--header__nav{
    display:block
  }
}

.bx--header__nav::before{
  position:absolute;
  top:50%;
  left:0;
  display:block;
  width:.0625rem;
  height:1.5rem;
  background-color:#393939;
  content:"";
  transform:translateY(-50%)
}

.bx--header__menu-bar{
  display:flex;
  height:100%;
  padding:0;
  margin:0;
  list-style:none
}

a.bx--header__menu-item{
  position:relative;
  display:flex;
  height:100%;
  align-items:center;
  padding:0 1rem;
  border:2px solid transparent;
  color:#c6c6c6;
  font-size:.875rem;
  font-weight:400;
  letter-spacing:0;
  line-height:1.125rem;
  text-decoration:none;
  transition:background-color 110ms,border-color 110ms,color 110ms;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

a.bx--header__menu-item:hover{
  background-color:#2c2c2c;
  color:#f4f4f4
}

.bx--header__action:active,a.bx--header__menu-item:active{
  background-color:#393939;
  color:#f4f4f4
}

a.bx--header__menu-item:focus{
  border-color:#fff;
  color:#f4f4f4;
  outline:none
}

a.bx--header__menu-item:hover>svg,a.bx--header__menu-item:active>svg,a.bx--header__menu-item:focus>svg{
  fill:#f4f4f4
}

a.bx--header__menu-item[aria-current=page]::after,.bx--header__menu-item--current::after{
  position:absolute;
  top:0;
  right:0;
  bottom:-2px;
  left:0;
  width:100%;
  border-bottom:3px solid #4589ff;
  content:""
}

a.bx--header__menu-item[aria-current=page]:focus::after,.bx--header__menu-item--current:focus::after{
  border:0
}

a.bx--header__menu-item[aria-current=page]:focus,a.bx--header__menu-item.bx--header__menu-item--current:focus{
  border:2px solid #fff
}

.bx--header__submenu{
  position:relative
}

.bx--header__submenu--current::after{
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  width:100%;
  border-bottom:3px solid #0f62fe;
  content:""
}

.bx--header__submenu--current:focus{
  border:2px solid #0f62fe
}

.bx--header__submenu--current:focus::after{
  border:0
}

.bx--header__menu-title[aria-haspopup=true]{
  position:relative
}

.bx--header__menu-title[aria-expanded=true]{
  z-index:8001;
  background-color:#262626;
  color:#fff
}

.bx--header__menu-title[aria-expanded=true]>.bx--header__menu-arrow{
  transform:rotate(180deg)
}

.bx--header__menu{
  display:none;
  padding:0;
  margin:0;
  list-style:none
}

.bx--header__menu-title[aria-expanded=true]+.bx--header__menu{
  position:absolute;
  z-index:8000;
  bottom:0;
  left:0;
  display:flex;
  width:12.5rem;
  flex-direction:column;
  background-color:#262626;
  box-shadow:0 4px 8px 0 rgba(0,0,0,.5);
  transform:translateY(100%)
}

.bx--header__menu-title[aria-expanded=true]+.bx--header__menu .bx--header__menu-item:hover{
  background-color:#353535
}

.bx--header__menu-title[aria-expanded=true]+.bx--header__menu .bx--header__menu-item:active{
  background-color:#393939
}

.bx--header__menu .bx--header__menu-item{
  height:3rem
}

.bx--header__menu .bx--header__menu-item:hover{
  background-color:#262626;
  color:#f4f4f4
}

.bx--header__menu-arrow{
  margin-left:.5rem;
  fill:#c6c6c6;
  transition:transform 110ms,fill 110ms
}

.bx--header__global{
  display:flex;
  height:100%;
  flex:1 1 0%;
  justify-content:flex-end
}

.bx--skip-to-content{
  position:absolute;
  overflow:hidden;
  width:1px;
  height:1px;
  padding:0;
  border:0;
  margin:-1px;
  clip:rect(0, 0, 0, 0);
  visibility:inherit;
  white-space:nowrap
}

.bx--skip-to-content:focus{
  z-index:9999;
  top:0;
  left:0;
  display:flex;
  width:auto;
  height:3rem;
  align-items:center;
  padding:0 1rem;
  border:4px solid #0f62fe;
  background-color:#161616;
  clip:auto;
  color:#f4f4f4;
  outline:none
}

.bx--header-panel{
  transition-timing-function:cubic-bezier(0.2, 0, 1, 0.9);
  position:fixed;
  z-index:8000;
  top:3rem;
  right:0;
  bottom:0;
  overflow:hidden;
  width:0;
  border:none;
  background-color:#161616;
  color:#c6c6c6;
  transition:width .11s;
  will-change:width
}

.bx--header-panel--expanded{
  width:16rem;
  border-right:1px solid #393939;
  border-left:1px solid #393939
}

.bx--panel--overlay{
  position:fixed;
  z-index:1000;
  top:3rem;
  right:0;
  bottom:0;
  width:16rem;
  height:100%;
  padding:1rem 0;
  background-color:#161616;
  overflow-x:hidden;
  overflow-y:auto;
  transform:translate3d(100%, 0, 0);
  transition:transform .11s cubic-bezier(0.2, 0, 0.38, 0.9);
  will-change:transform
}

.bx--panel--expanded{
  box-shadow:0 8px 16px 0 rgba(0,0,0,.25);
  transform:translate3d(0, 0, 0)
}

.bx--product-switcher__search{
  padding:0 1rem;
  margin-bottom:1.5rem
}

.bx--search--shell input{
  background-color:#e0e0e0
}

.bx--product-switcher__subheader,.bx--product-switcher__all-btn{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  padding:.5rem;
  color:#c6c6c6
}

.bx--product-switcher__subheader{
  padding-left:3.5rem
}

.bx--product-switcher__all-btn{
  padding-left:3.5rem
}

.bx--product-switcher__all-btn,.bx--product-switcher__back-btn{
  display:inline-block;
  width:100%;
  border:none;
  background:transparent;
  color:#0f62fe;
  cursor:pointer;
  text-align:left
}

.bx--product-switcher__all-btn:hover,.bx--product-switcher__back-btn:hover{
  text-decoration:underline
}

.bx--product-switcher__all-btn:focus,.bx--product-switcher__back-btn:focus{
  box-shadow:inset 0 0 0 3px #0f62fe;
  outline:none
}

.bx--product-switcher__back-btn{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  display:flex;
  align-items:center;
  padding:.5rem 1rem
}

.bx--product-switcher__back-arrow{
  margin-right:1rem;
  fill:#0f62fe
}

.bx--product-list__item{
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer
}

.bx--product-list__item:hover{
  background:#e0e0e0
}

.bx--product-link{
  display:flex;
  width:100%;
  flex-direction:row;
  align-items:center;
  padding:.5rem 1rem;
  text-decoration:none
}

.bx--product-link:focus{
  box-shadow:inset 0 0 0 3px #0f62fe;
  outline:none
}

.bx--product-switcher__icon{
  margin-right:1rem
}

.bx--product-link__name{
  font-size:.875rem;
  font-weight:400;
  line-height:1.28572;
  letter-spacing:.16px;
  margin-left:.25rem;
  color:#c6c6c6;
  font-weight:400
}

.bx--product-switcher__product-list .bx--overflow-menu{
  display:none;
  width:2.5rem;
  align-items:center;
  justify-content:center
}

.bx--product-switcher__product-list .bx--overflow-menu.bx--overflow-menu--open{
  display:flex
}

.bx--product-switcher__product-list .bx--overflow-menu>svg{
  fill:#c6c6c6
}

.bx--product-switcher__product-list .bx--overflow-menu:hover{
  background:#c6c6c6
}

.bx--product-switcher__product-list .bx--overflow-menu:hover>svg{
  fill:#c6c6c6
}

.bx--product-switcher__product-list .bx--overflow-menu:focus{
  display:flex;
  box-shadow:inset 0 0 0 3px #0f62fe;
  outline:none
}

.bx--product-switcher__product-list .bx--overflow-menu-options__option:hover{
  background:#fff
}

.bx--product-list__item:hover .bx--overflow-menu{
  display:flex
}

.bx--switcher{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:#c6c6c6
}

.bx--switcher__item{
  width:100%;
  height:2rem
}

.bx--switcher__item:nth-child(1){
  margin-top:1rem
}

.bx--switcher__item--divider{
  display:block;
  width:14rem;
  height:1px;
  border:none;
  margin:.5rem 1rem;
  background:#393939
}

.bx--switcher__item-link{
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  display:block;
  height:2rem;
  padding:.375rem 1rem;
  color:#c6c6c6;
  text-decoration:none
}

.bx--switcher__item-link:hover:not(.bx--switcher__item-link--selected){
  background:#2c2c2c;
  color:#f4f4f4;
  cursor:pointer
}

.bx--switcher__item-link:focus{
  outline:2px solid #fff;
  outline-offset:-2px
}

.bx--switcher__item-link:active{
  background:#393939;
  color:#f4f4f4
}

.bx--switcher__item-link--selected{
  background:#262626;
  color:#f4f4f4
}

.bx--side-nav{
  position:fixed;
  z-index:8000;
  top:0;
  bottom:0;
  left:0;
  overflow:hidden;
  width:3rem;
  max-width:16rem;
  background-color:#fff;
  color:#525252;
  transition:width .11s cubic-bezier(0.2, 0, 1, 0.9);
  will-change:width
}

.bx--side-nav--ux{
  top:3rem;
  width:16rem
}

@media(max-width: 65.98rem){
  .bx--side-nav--ux{
    width:0
  }
}

.bx--side-nav--rail{
  width:3rem
}

.bx--side-nav--hidden{
  width:0
}

.bx--side-nav.bx--side-nav--rail:not(.bx--side-nav--fixed):hover,.bx--side-nav--expanded{
  width:16rem
}

.bx--side-nav__overlay{
  position:fixed;
  top:3rem;
  left:0;
  width:0;
  height:0;
  background-color:transparent;
  opacity:0;
  transition:opacity 240ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 240ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

@media(max-width: 65.98rem){
  .bx--side-nav__overlay-active{
    width:100vw;
    height:100vh;
    background-color:rgba(22,22,22,.5);
    opacity:1;
    transition:opacity 240ms cubic-bezier(0.2, 0, 0.38, 0.9),background-color 240ms cubic-bezier(0.2, 0, 0.38, 0.9)
  }
}

.bx--header~.bx--side-nav{
  top:3rem;
  height:calc(100% - 48px)
}

.bx--side-nav--fixed{
  width:16rem
}

.bx--side-nav--collapsed{
  width:16rem;
  transform:translateX(-16rem)
}

.bx--side-nav__navigation{
  display:flex;
  height:100%;
  flex-direction:column
}

.bx--side-nav__header{
  display:flex;
  width:100%;
  max-width:100%;
  height:3rem;
  border-bottom:1px solid #393939
}

.bx--side-nav:hover .bx--side-nav__header,.bx--side-nav--fixed .bx--side-nav__header,.bx--side-nav--expanded .bx--side-nav__header{
  height:auto
}

.bx--side-nav--ux .bx--side-nav__header{
  height:auto
}

.bx--side-nav__details{
  display:flex;
  min-width:0;
  flex:1;
  flex-direction:column;
  padding-right:1rem;
  opacity:0;
  visibility:hidden
}

.bx--side-nav:hover .bx--side-nav__details,.bx--side-nav--fixed .bx--side-nav__details,.bx--side-nav--expanded .bx--side-nav__details{
  visibility:inherit;
  opacity:1
}

.bx--side-nav--ux .bx--side-nav__details{
  opacity:1;
  visibility:inherit
}

.bx--side-nav__title{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin-top:1rem;
  font-size:.875rem;
  font-weight:600;
  letter-spacing:.1px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

.bx--side-nav__title,.bx--side-nav__select{
  padding-left:.5rem
}

.bx--side-nav__switcher{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between
}

.bx--side-nav__switcher-chevron{
  position:absolute;
  top:0;
  right:.5rem;
  bottom:0;
  display:flex;
  align-items:center;
  fill:#525252
}

.bx--side-nav__select{
  outline:2px solid transparent;
  outline-offset:-2px;
  min-width:0;
  height:2rem;
  flex:1 1 0%;
  padding-right:2rem;
  border:none;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background-color:#161616;
  border-radius:0;
  color:#f4f4f4;
  cursor:pointer;
  font-size:.75rem;
  transition:outline 110ms
}

.bx--side-nav__select:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--side-nav__select:focus{
    outline-style:dotted
  }
}

.bx--side-nav__footer{
  width:100%;
  flex:0 0 3rem;
  background-color:#fff
}

.bx--side-nav__toggle{
  outline:2px solid transparent;
  outline-offset:-2px;
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  height:100%;
  padding-left:1rem;
  text-align:left;
  transition:outline 110ms
}

.bx--side-nav__toggle::-moz-focus-inner{
  border:0
}

.bx--side-nav__toggle:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--side-nav__toggle:focus{
    outline-style:dotted
  }
}

.bx--side-nav__items{
  overflow:hidden;
  flex:1 1 0%;
  padding:1rem 0 0
}

.bx--side-nav:hover .bx--side-nav__items,.bx--side-nav--fixed .bx--side-nav__items,.bx--side-nav--expanded .bx--side-nav__items{
  overflow-y:auto
}

.bx--side-nav--ux .bx--side-nav__items{
  overflow-y:auto
}

.bx--side-nav__item{
  overflow:hidden;
  width:auto;
  height:auto
}

.bx--side-nav--ux .bx--side-nav__item{
  width:auto;
  height:auto
}

.bx--side-nav__item:not(.bx--side-nav__item--active):hover .bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__submenu:hover,.bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__link:hover,.bx--side-nav__menu a.bx--side-nav__link:not(.bx--side-nav__link--current):not([aria-current=page]):hover,.bx--side-nav a.bx--header__menu-item:hover,.bx--side-nav .bx--header__menu-title[aria-expanded=true]:hover{
  background-color:#e5e5e5;
  color:#161616
}

.bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__link:hover>span,.bx--side-nav__item:not(.bx--side-nav__item--active) .bx--side-nav__menu-item>.bx--side-nav__link:hover>span{
  color:#161616
}

.bx--side-nav__item--large{
  height:3rem
}

.bx--side-nav__divider{
  height:1px;
  margin:.5rem 1rem;
  background-color:#e0e0e0
}

.bx--side-nav__submenu{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  outline:2px solid transparent;
  outline-offset:-2px;
  display:flex;
  height:2rem;
  align-items:center;
  padding:0 1rem;
  color:#525252;
  transition:color 110ms,background-color 110ms,outline 110ms;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

.bx--side-nav__submenu::-moz-focus-inner{
  border:0
}

.bx--side-nav__submenu:hover{
  background-color:#e5e5e5;
  color:#161616
}

.bx--side-nav__submenu:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--side-nav__submenu:focus{
    outline-style:dotted
  }
}

.bx--side-nav__submenu-title{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  text-align:left
}

.bx--side-nav__icon.bx--side-nav__submenu-chevron{
  display:flex;
  flex:1;
  justify-content:flex-end
}

.bx--side-nav__submenu-chevron>svg{
  width:1rem;
  height:1rem;
  transition:transform 110ms
}

.bx--side-nav__submenu[aria-expanded=true] .bx--side-nav__submenu-chevron>svg{
  transform:rotate(180deg)
}

.bx--side-nav__item--large .bx--side-nav__submenu{
  height:3rem
}

.bx--side-nav__item--active .bx--side-nav__submenu:hover{
  background-color:#e5e5e5;
  color:#161616
}

.bx--side-nav__item--active .bx--side-nav__submenu[aria-expanded=false]{
  position:relative;
  background-color:#e5e5e5;
  color:#161616
}

.bx--side-nav__item--active .bx--side-nav__submenu[aria-expanded=false]::before{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  width:4px;
  background-color:#0f62fe;
  content:""
}

.bx--side-nav__item--active .bx--side-nav__submenu-title{
  color:#161616;
  font-weight:600
}

.bx--side-nav__menu{
  display:block;
  max-height:0;
  visibility:hidden
}

.bx--side-nav__submenu[aria-expanded=true]+.bx--side-nav__menu{
  max-height:93.75rem;
  visibility:inherit
}

.bx--side-nav__menu a.bx--side-nav__link{
  height:2rem;
  min-height:2rem;
  padding-left:2rem;
  font-weight:400
}

.bx--side-nav__item.bx--side-nav__item--icon a.bx--side-nav__link{
  padding-left:4.5rem
}

.bx--side-nav__menu a.bx--side-nav__link--current,.bx--side-nav__menu a.bx--side-nav__link[aria-current=page],a.bx--side-nav__link--current{
  background-color:#e0e0e0
}

.bx--side-nav__menu a.bx--side-nav__link--current>span,.bx--side-nav__menu a.bx--side-nav__link[aria-current=page]>span,a.bx--side-nav__link--current>span{
  color:#161616;
  font-weight:600
}

a.bx--side-nav__link,.bx--side-nav a.bx--header__menu-item,.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu{
  outline:2px solid transparent;
  outline-offset:-2px;
  font-size:.875rem;
  font-weight:600;
  line-height:1.28572;
  letter-spacing:.16px;
  position:relative;
  display:flex;
  min-height:2rem;
  align-items:center;
  padding:0 1rem;
  text-decoration:none;
  transition:color 110ms,background-color 110ms,outline 110ms
}

.bx--side-nav__item--large a.bx--side-nav__link{
  height:3rem
}

a.bx--side-nav__link>.bx--side-nav__link-text,.bx--side-nav a.bx--header__menu-item .bx--text-truncate-end{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  color:#525252;
  font-size:.875rem;
  letter-spacing:.1px;
  line-height:1.25rem;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

a.bx--side-nav__link:focus,.bx--side-nav a.bx--header__menu-item:focus{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  a.bx--side-nav__link:focus,.bx--side-nav a.bx--header__menu-item:focus{
    outline-style:dotted
  }
}

a.bx--side-nav__link[aria-current=page],a.bx--side-nav__link--current{
  background-color:#e5e5e5;
  font-weight:600
}

a.bx--side-nav__link[aria-current=page] .bx--side-nav__link-text,a.bx--side-nav__link--current .bx--side-nav__link-text{
  color:#161616
}

a.bx--side-nav__link[aria-current=page]::before,a.bx--side-nav__link--current::before{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  width:4px;
  background-color:#0f62fe;
  content:""
}

.bx--side-nav__icon{
  display:flex;
  flex:0 0 1rem;
  align-items:center;
  justify-content:center
}

.bx--side-nav__icon:not(.bx--side-nav__submenu-chevron){
  margin-right:1.5rem
}

.bx--side-nav__icon>svg{
  width:1rem;
  height:1rem;
  fill:#525252
}

.bx--side-nav__icon>svg.bx--side-nav-collapse-icon{
  display:none
}

.bx--side-nav--expanded .bx--side-nav__icon>svg.bx--side-nav-expand-icon{
  display:none
}

.bx--side-nav--expanded .bx--side-nav__icon>svg.bx--side-nav-collapse-icon{
  display:block
}

.bx--side-nav--fixed a.bx--side-nav__link,.bx--side-nav--fixed .bx--side-nav__submenu{
  padding-left:1rem
}

.bx--side-nav--fixed .bx--side-nav__item:not(.bx--side-nav__item--icon) .bx--side-nav__menu a.bx--side-nav__link{
  padding-left:2rem
}

@media(max-width: 65.98rem){
  .bx--side-nav .bx--header__nav{
    display:block
  }
}

.bx--side-nav__header-navigation{
  display:none
}

@media(max-width: 65.98rem){
  .bx--side-nav__header-navigation{
    position:relative;
    display:block;
    margin-bottom:2rem
  }
}

.bx--side-nav__header-divider::after{
  position:absolute;
  bottom:-1rem;
  left:1rem;
  width:calc(100% - 32px);
  height:.0625rem;
  background:#e0e0e0;
  content:""
}

.bx--side-nav a.bx--header__menu-item{
  justify-content:space-between;
  color:#525252;
  white-space:nowrap
}

.bx--side-nav a.bx--header__menu-item[aria-expanded=true]{
  background-color:transparent
}

.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu{
  bottom:inherit;
  width:100%;
  padding:0;
  background-color:transparent;
  box-shadow:none;
  transform:none
}

.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu li{
  width:100%
}

.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu a.bx--header__menu-item{
  padding-left:4.25rem;
  font-weight:400
}

.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu a.bx--header__menu-item:hover{
  background-color:#e5e5e5;
  color:#161616
}

.bx--side-nav .bx--header__menu a.bx--header__menu-item{
  height:inherit
}

.bx--side-nav a.bx--header__menu-item:hover .bx--header__menu-arrow,.bx--side-nav a.bx--header__menu-item:focus .bx--header__menu-arrow,.bx--side-nav .bx--header__menu-arrow{
  fill:#525252
}

@media screen and (-ms-high-contrast: active),(forced-colors: active),(prefers-contrast){
  .bx--side-nav__icon>svg,.bx--side-nav a.bx--header__menu-item:hover .bx--header__menu-arrow,.bx--side-nav a.bx--header__menu-item:focus .bx--header__menu-arrow,.bx--side-nav .bx--header__menu-arrow{
    fill:ButtonText
  }
}

.bx--navigation{
  position:fixed;
  z-index:9100;
  top:3rem;
  bottom:0;
  left:0;
  width:16rem;
  background-color:#262626;
  box-shadow:0 .5rem 1rem 0 rgba(0,0,0,.25);
  color:#f4f4f4
}

.bx--navigation--right{
  right:0;
  left:auto
}

.bx--navigation svg{
  fill:#f4f4f4
}

.bx--navigation-section:not(:last-child)::after{
  display:block;
  height:1px;
  margin:0 1rem;
  background-color:#393939;
  content:""
}

.bx--navigation-item{
  position:relative;
  display:flex;
  align-items:center
}

.bx--navigation-item--active>a.bx--navigation-link{
  color:#fff;
  font-weight:600
}

.bx--navigation-item--active::after{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  display:block;
  width:4px;
  background-color:#0f62fe;
  content:""
}

a.bx--navigation-link{
  display:flex;
  width:100%;
  min-height:2.5rem;
  align-items:center;
  padding-left:1rem;
  color:#f4f4f4;
  font-size:.875rem;
  font-weight:400;
  text-decoration:none
}

a.bx--navigation-link:hover{
  background-color:#333;
  color:#fff
}

a.bx--navigation-link:focus{
  outline:.1875rem solid #0f62fe;
  outline-offset:-0.1875rem
}

.bx--navigation-item--icon>a.bx--navigation-link{
  padding-left:0
}

.bx--navigation__category{
  width:100%
}

.bx--navigation__category-toggle{
  display:inline-block;
  padding:0;
  border:0;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  cursor:pointer;
  width:100%;
  display:flex;
  align-items:center
}

.bx--navigation__category-toggle::-moz-focus-inner{
  border:0
}

.bx--navigation__category-toggle:hover{
  background-color:#333
}

.bx--navigation__category-toggle:focus{
  outline:.1875rem solid #0f62fe;
  outline-offset:-0.1875rem
}

.bx--navigation__category-title{
  display:flex;
  width:100%;
  min-height:2.5rem;
  align-items:center;
  justify-content:space-between;
  padding-right:1rem;
  padding-left:1rem;
  color:#f4f4f4;
  font-size:.875rem;
  font-weight:400
}

.bx--navigation-item--icon .bx--navigation__category-title{
  padding-left:0
}

.bx--navigation__category-items{
  display:none;
  visibility:hidden
}

.bx--navigation__category-item>a.bx--navigation-link{
  display:flex;
  min-height:2rem;
  align-items:center;
  padding-left:2rem
}

.bx--navigation__category-item{
  position:relative
}

.bx--navigation-item--icon .bx--navigation__category-item>a.bx--navigation-link{
  padding-left:3.5rem
}

.bx--navigation__category-item--active::after{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  display:block;
  width:4px;
  background-color:#0f62fe;
  content:""
}

.bx--navigation__category-item--active>a.bx--navigation-link{
  color:#fff;
  font-weight:600
}

.bx--navigation__category--expanded .bx--navigation__category-title{
  font-weight:600
}

.bx--navigation__category--expanded .bx--navigation__category-title>svg{
  transform:rotate(180deg)
}

.bx--navigation__category--expanded .bx--navigation__category-items{
  display:block;
  visibility:inherit
}

.bx--navigation-icon{
  display:flex;
  width:3rem;
  min-width:3rem;
  height:2.5rem;
  align-items:center;
  justify-content:center;
  margin-right:.5rem
}

.bx--content{
  padding:2rem;
  background:#f4f4f4;
  will-change:margin-left
}

.bx--header~.bx--content{
  margin-top:3rem
}

.bx--side-nav~.bx--content{
  margin-left:3rem
}

.bx--side-nav.bx--side-nav--expanded~.bx--content{
  margin-left:16rem
}

.bx--tree{
  overflow:hidden
}

.bx--tree .bx--tree-node{
  padding-left:1rem;
  background-color:#fff;
  color:#525252
}

.bx--tree .bx--tree-node:focus{
  outline:none
}

.bx--tree .bx--tree-node:focus>.bx--tree-node__label{
  outline:2px solid #0f62fe;
  outline-offset:-2px
}

@media screen and (prefers-contrast){
  .bx--tree .bx--tree-node:focus>.bx--tree-node__label{
    outline-style:dotted
  }
}

.bx--tree .bx--tree-node--disabled:focus>.bx--tree-node__label{
  outline:none
}

.bx--tree .bx--tree-node--disabled,.bx--tree .bx--tree-node--disabled .bx--tree-node__label:hover,.bx--tree .bx--tree-node--disabled .bx--tree-node__label:hover .bx--tree-node__label__details{
  background-color:#fff;
  color:#c6c6c6
}

.bx--tree .bx--tree-node--disabled .bx--tree-parent-node__toggle-icon,.bx--tree .bx--tree-node--disabled .bx--tree-node__icon,.bx--tree .bx--tree-node--disabled .bx--tree-node__label:hover .bx--tree-parent-node__toggle-icon,.bx--tree .bx--tree-node--disabled .bx--tree-node__label:hover .bx--tree-node__icon{
  fill:#c6c6c6
}

.bx--tree .bx--tree-node--disabled,.bx--tree .bx--tree-node--disabled .bx--tree-parent-node__toggle-icon:hover{
  cursor:not-allowed
}

.bx--tree .bx--tree-node__label{
  display:flex;
  min-height:2rem;
  flex:1;
  align-items:center
}

.bx--tree .bx--tree-node__label:hover{
  background-color:#e5e5e5;
  color:#161616
}

.bx--tree .bx--tree-node__label:hover .bx--tree-node__label__details{
  color:#161616
}

.bx--tree .bx--tree-node__label:hover .bx--tree-parent-node__toggle-icon,.bx--tree .bx--tree-node__label:hover .bx--tree-node__icon{
  fill:#161616
}

.bx--tree .bx--tree-leaf-node{
  display:flex;
  padding-left:2.5rem
}

.bx--tree .bx--tree-leaf-node.bx--tree-node--with-icon{
  padding-left:2rem
}

.bx--tree .bx--tree-node__label__details{
  display:flex;
  align-items:center
}

.bx--tree .bx--tree-node--with-icon .bx--tree-parent-node__toggle{
  margin-right:0
}

.bx--tree .bx--tree-parent-node__toggle{
  padding:0;
  border:0;
  margin-right:.5rem
}

.bx--tree .bx--tree-parent-node__toggle:hover{
  cursor:pointer
}

.bx--tree .bx--tree-parent-node__toggle:focus{
  outline:none
}

.bx--tree .bx--tree-parent-node__toggle-icon{
  fill:#525252;
  transform:rotate(-90deg);
  transition:all 110ms cubic-bezier(0.2, 0, 0.38, 0.9)
}

.bx--tree .bx--tree-parent-node__toggle-icon--expanded{
  transform:rotate(0)
}

.bx--tree .bx--tree-node__icon{
  flex-shrink:0;
  margin-right:.5rem;
  fill:#525252
}

.bx--tree .bx--tree-node--selected>.bx--tree-node__label{
  background-color:#e0e0e0;
  color:#161616
}

.bx--tree .bx--tree-node--selected>.bx--tree-node__label:hover{
  background-color:#cacaca
}

.bx--tree .bx--tree-node--selected>.bx--tree-node__label .bx--tree-parent-node__toggle-icon,.bx--tree .bx--tree-node--selected>.bx--tree-node__label .bx--tree-node__icon{
  fill:#161616
}

.bx--tree .bx--tree-node--active>.bx--tree-node__label{
  position:relative
}

.bx--tree .bx--tree-node--active>.bx--tree-node__label::before{
  position:absolute;
  top:0;
  left:0;
  width:.25rem;
  height:100%;
  background-color:#0f62fe;
  content:""
}

.bx--tree--compact .bx--tree-node__label{
  min-height:1.5rem
}

/*purgecss end ignore*/`)();
const Grid = (0, import_index_092899d0.c)(($$result, $$props, $$bindings, slots) => {
  let props;
  let $$restProps = (0, import_index_092899d0.b)($$props, [
    "as",
    "condensed",
    "narrow",
    "fullWidth",
    "noGutter",
    "noGutterLeft",
    "noGutterRight",
    "padding"
  ]);
  let { as = false } = $$props;
  let { condensed = false } = $$props;
  let { narrow = false } = $$props;
  let { fullWidth = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.condensed === void 0 && $$bindings.condensed && condensed !== void 0)
    $$bindings.condensed(condensed);
  if ($$props.narrow === void 0 && $$bindings.narrow && narrow !== void 0)
    $$bindings.narrow(narrow);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.noGutter === void 0 && $$bindings.noGutter && noGutter !== void 0)
    $$bindings.noGutter(noGutter);
  if ($$props.noGutterLeft === void 0 && $$bindings.noGutterLeft && noGutterLeft !== void 0)
    $$bindings.noGutterLeft(noGutterLeft);
  if ($$props.noGutterRight === void 0 && $$bindings.noGutterRight && noGutterRight !== void 0)
    $$bindings.noGutterRight(noGutterRight);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  props = __spreadProps(__spreadValues({}, $$restProps), {
    class: [
      $$restProps.class,
      "bx--grid",
      condensed && "bx--grid--condensed",
      narrow && "bx--grid--narrow",
      fullWidth && "bx--grid--full-width",
      noGutter && "bx--no-gutter",
      noGutterLeft && "bx--no-gutter--left",
      noGutterRight && "bx--no-gutter--right",
      padding && "bx--row-padding"
    ].filter(Boolean).join(" ")
  });
  return `${as ? `${slots.default ? slots.default({ props }) : ``}` : `<div${(0, import_index_092899d0.d)([(0, import_index_092899d0.e)(props)], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
