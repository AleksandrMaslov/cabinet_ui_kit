import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as v}from"./index-c013ead5.js";import{B as O}from"./Button-67e2900c.js";import{R as x}from"./index-169ee69c.js";import{I as h}from"./Icon-90bc8ca1.js";import"./_commonjsHelpers-725317a4.js";import"./DotsLoader-9ca9a271.js";const b="modal__cover",g="modal__opacity",j="modal__cover_out",N="modal__cover_out",V="modal",C="modal__scale",R="modal_out",k="modal_out",q="modal__container",I="modal__close",n={cover:b,opacity:g,cover_out:j,coverOut:N,modal:V,scale:C,modal_out:R,modalOut:k,container:q,close:I},p=document.getElementById("portal"),d=({isModalOpened:t,setModalOpened:o,className:a,children:s})=>{const c=[n.cover];t||c.push(n.cover_out);const r=[n.modal];t||r.push(n.modal_out),a&&r.push(a);const i=()=>o(!1),u=e.jsx("div",{className:c.join(" "),onClick:i,children:e.jsxs("div",{className:r.join(" "),onClick:M=>M.stopPropagation(),children:[e.jsx(h,{className:n.close,icon:"cross",onClick:i}),e.jsx("div",{className:n.container,children:s})]})});return p?x.createPortal(u,p):u},y=d;try{d.displayName="Modal",d.__docgenInfo={description:"",displayName:"Modal",props:{isModalOpened:{defaultValue:null,description:"",name:"isModalOpened",required:!0,type:{name:"boolean"}},setModalOpened:{defaultValue:null,description:"",name:"setModalOpened",required:!0,type:{name:"(value: boolean) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const T={title:"UI/Modal",component:y,decorators:[t=>{const[o,a]=v.useState(!1),s=()=>{a(!o)};return e.jsxs("div",{className:"wrapper_preview",children:[e.jsx(O,{label:"SHOW",className:"button_preview",onClick:s}),o&&e.jsx(t,{isModalOpened:o,setVisible:a})]})}],parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isModalOpened:{description:"Состояние видимости модального окна",table:{category:"Required",defaultValue:{summary:"undefined"}}},setModalOpened:{description:"Функция управления состоянием видимости",table:{category:"Required",defaultValue:{summary:"undefined"}}},children:{description:"Контент модального окна",table:{category:"Optional",type:{summary:"ReactNode"},defaultValue:{summary:"undefined"}}},className:{description:"Имя внешнего CSS класса для переопределния стилей модального окна",table:{category:"Optional",defaultValue:{summary:"undefined"}}}}};function l(t,o){const{isModalOpened:a,setVisible:s}=o;return e.jsxs(y,{children:"Modal Content",isModalOpened:a,setModalOpened:s,className:void 0,children:[e.jsx("h3",{children:"Заголовок формы"}),e.jsx("p",{children:"Содержание формы"})]})}var m,_,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`function Default(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
args: any, context: {
  isModalOpened: boolean;
  setVisible: () => void;
}) {
  const {
    isModalOpened,
    setVisible
  } = context;
  return <Modal {...{
    children: 'Modal Content',
    isModalOpened: isModalOpened,
    setModalOpened: setVisible,
    className: undefined
  }}>\r
      <h3>Заголовок формы</h3>\r
\r
      <p>Содержание формы</p>\r
    </Modal>;
}`,...(f=(_=l.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const U=["Default"];export{l as Default,U as __namedExportsOrder,T as default};
