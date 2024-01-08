import{j as r}from"./jsx-runtime-6eef64cc.js";import{r as m}from"./index-c013ead5.js";import{I as M}from"./Icon-90bc8ca1.js";import"./_commonjsHelpers-725317a4.js";const Q="input",W="input__text",X="input__text_bordered",Y="input__text_bordered",Z="input__text_iconed",ee="input__text_iconed",ae="input__error",re="input__icon",ne="input__icon_bordered",oe="input__icon_bordered",de="input__icon_disabled",le="input__icon_disabled",e={input:Q,text:W,text_bordered:X,textBordered:Y,text_iconed:Z,textIconed:ee,error:ae,icon:re,icon_bordered:ne,iconBordered:oe,icon_disabled:de,iconDisabled:le},b=({label:u,placeholder:R,id:v,name:z,bordered:_=!1,className:y,disabled:g=!1,required:F=!1,autoComplete:U="off",value:c,setValue:n,error:$,password:h,icon:a})=>{const x=[e.input];y&&x.push(y);const p=[e.text];_&&p.push(e.text_bordered),a&&p.push(e.text_iconed);const f=[e.icon];_&&f.push(e.icon_bordered),g&&f.push(e.icon_disabled);const[V,q]=m.useState(!1),A=n&&(K=>n(K.target.value)),G=()=>{V||q(!0)};m.useEffect(()=>{c||q(!1)},[c]);const o=m.useRef(null),J=()=>{if(a){if(a==="cross")return n?n(""):void 0;!o||!h||(o.current.type=o.current.type==="password"?"text":"password")}};return r.jsxs("label",{className:x.join(" "),htmlFor:v,children:[u&&r.jsx("span",{children:u}),r.jsx("input",{ref:o,className:p.join(" "),type:h?"password":"text",onChange:A,onBlur:G,id:v,name:z,placeholder:R,disabled:g,required:F,autoComplete:U,value:c}),V&&r.jsx("p",{className:e.error,children:$}),a&&r.jsx(M,{className:f.join(" "),icon:a||"baby",onClick:J,size:"1em"})]})},se=b;try{b.displayName="Input",b.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"enum",value:[{value:'"password"'},{value:'"text"'},{value:'"email"'},{value:'"tel"'},{value:'"username"'},{value:'"comments"'}]}},bordered:{defaultValue:{value:"false"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:{value:"off"},description:"",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"off"'},{value:'"on"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!1,type:{name:"((value: string) => void)"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},password:{defaultValue:null,description:"",name:"password",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"cross"'},{value:'"eye"'}]}}}}}catch{}const pe={title:"UI/Input",component:se,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{description:"Впомогательный текст в поле ввода данных",table:{category:"Optional",defaultValue:{summary:"undefined"}}},disabled:{description:"Состояние неактивности элемента ввода",table:{category:"Optional"}},required:{description:"Необходимость базовой валидации",table:{category:"Optional"}},autoComplete:{description:"Автоматическое заполнение поля браузером",table:{category:"Optional"}},bordered:{description:"Вариант отображения элемента ввода с внешними границами",table:{category:"Optional"}},value:{description:"Введенное значение",table:{category:"Optional",defaultValue:{summary:"undefined"}}},setValue:{description:"Функция управления значением элемента ввода",table:{category:"Optional",defaultValue:{summary:"undefined"}}},name:{description:"Имя элемента ввода, связанное с отправляемыми формой данными",table:{category:"Optional",defaultValue:{summary:"undefined"}}},id:{description:'Идентификатор для связи со встроенным элементом "label"',table:{category:"Optional",defaultValue:{summary:"undefined"}}},label:{description:"Подпись элемента ввода",table:{category:"Optional",defaultValue:{summary:"undefined"}}},className:{description:"Имя внешнего CSS класса для позиционирования",table:{category:"Optional",defaultValue:{summary:"undefined"}}},error:{description:"Сообщение об ошибке, выводимое ниже элемента ввода при потере фокуса",table:{category:"Optional",defaultValue:{summary:"undefined"}}},password:{description:"Определение типа элемента ввода password",table:{category:"Optional"}},icon:{description:"Отображение иконки внутри элемента ввода",table:{category:"Optional"}}}},d={args:{label:"Label",placeholder:"Placeholder",name:void 0,id:void 0,bordered:!1,className:void 0,disabled:!1,required:!1,autoComplete:"off",value:void 0,setValue:void 0,error:"Сообщение об ошибке",password:!1,icon:void 0}},l={args:{label:"Label",placeholder:"Placeholder",name:void 0,id:void 0,value:void 0,setValue:void 0,disabled:!1,required:!1,autoComplete:"off",bordered:!0,className:void 0,error:"Сообщение об ошибке",password:!1,icon:void 0}},s={args:{label:"Label",placeholder:"Placeholder",name:void 0,id:void 0,value:void 0,setValue:void 0,disabled:!1,required:!1,autoComplete:"off",bordered:!0,className:void 0,error:"Сообщение об ошибке",password:!1,icon:"cross"}},t={args:{label:"Label",placeholder:"Placeholder",name:void 0,id:void 0,value:void 0,setValue:void 0,disabled:!1,required:!1,autoComplete:"off",bordered:!0,className:void 0,error:"Сообщение об ошибке",password:!1,icon:"cross"}},i={args:{label:"Label",placeholder:"Placeholder",name:void 0,id:void 0,value:void 0,setValue:void 0,disabled:!1,required:!1,autoComplete:"off",bordered:!0,className:void 0,error:"Сообщение об ошибке",password:!0,icon:"eye"}};var w,C,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    name: undefined,
    id: undefined,
    bordered: false,
    className: undefined,
    disabled: false,
    required: false,
    autoComplete: 'off',
    value: undefined,
    setValue: undefined,
    error: 'Сообщение об ошибке',
    password: false,
    icon: undefined
  }
}`,...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var I,O,P;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    name: undefined,
    id: undefined,
    value: undefined,
    setValue: undefined,
    disabled: false,
    required: false,
    autoComplete: 'off',
    bordered: true,
    className: undefined,
    error: 'Сообщение об ошибке',
    password: false,
    icon: undefined
  }
}`,...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var j,L,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    name: undefined,
    id: undefined,
    value: undefined,
    setValue: undefined,
    disabled: false,
    required: false,
    autoComplete: 'off',
    bordered: true,
    className: undefined,
    error: 'Сообщение об ошибке',
    password: false,
    icon: 'cross'
  }
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var B,D,E;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    name: undefined,
    id: undefined,
    value: undefined,
    setValue: undefined,
    disabled: false,
    required: false,
    autoComplete: 'off',
    bordered: true,
    className: undefined,
    error: 'Сообщение об ошибке',
    password: false,
    icon: 'cross'
  }
}`,...(E=(D=t.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var H,T,k;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    name: undefined,
    id: undefined,
    value: undefined,
    setValue: undefined,
    disabled: false,
    required: false,
    autoComplete: 'off',
    bordered: true,
    className: undefined,
    error: 'Сообщение об ошибке',
    password: true,
    icon: 'eye'
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const fe=["Default","Bordered","Iconed","PasswordInput","PasswordInputToggle"];export{l as Bordered,d as Default,s as Iconed,t as PasswordInput,i as PasswordInputToggle,fe as __namedExportsOrder,pe as default};
