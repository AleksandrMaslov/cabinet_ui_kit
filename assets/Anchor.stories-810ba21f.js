import{j as D}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const N="anchor",x="anchor_disabled",U="anchor_disabled",j="anchor_underlined",E="anchor_underlined",W="anchor_white",R="anchor_white",H="anchor_orange",I="anchor_orange",n={anchor:N,anchor_disabled:x,anchorDisabled:U,anchor_underlined:j,anchorUnderlined:E,anchor_white:W,anchorWhite:R,anchor_orange:H,anchorOrange:I},t=({children:s,className:i,lineColor:c,underlined:q=!1,disabled:w,...S})=>{const e=[n.anchor];return w&&e.push(n.anchor_disabled),q&&e.push(n.anchor_underlined),c&&e.push(n[`anchor_${c}`]),i&&e.push(i),D.jsx("a",{className:e.join(" "),...S,children:s})},M=t;try{t.displayName="Anchor",t.__docgenInfo={description:"",displayName:"Anchor",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},lineColor:{defaultValue:null,description:"",name:"lineColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"orange"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},underlined:{defaultValue:{value:"false"},description:"",name:"underlined",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const z={title:"UI/Anchor",component:M,parameters:{layout:"centered",backgrounds:{default:"lightgrey",values:[{name:"lightgrey",value:"#e6e6e6"}]}},tags:["autodocs"],argTypes:{children:{table:{category:"Required",type:{summary:"ReactNode"}},description:"Текстовое поле кнопки"},href:{description:"Гипертекстовая ссылка",table:{category:"Optional",defaultValue:{summary:"undefined"}}},target:{description:"Определяет окно открытия гиперссылки",options:["_blank","_self","_parent","_top"],table:{category:"Optional",defaultValue:{summary:"_self"}}},onClick:{table:{category:"Optional",defaultValue:{summary:"undefined"}},description:"Обработчик события нажатия на ссылку"},lineColor:{options:["undefined","white","orange"],description:"Цвет линии подчеркивания",table:{category:"Optional",defaultValue:{summary:"undefined"}}},disabled:{control:"boolean",description:"Не активное состояние компонента",table:{category:"Optional",defaultValue:{summary:!1}}},underlined:{control:"boolean",description:"Видимость подчеркивания ссылки",table:{category:"Optional",defaultValue:{summary:!1}}},className:{description:"Имя внешнего CSS класса для позиционирования",table:{category:"Optional",defaultValue:{summary:"undefined"}}}}},r={args:{children:"Anchor",href:void 0,target:void 0,onClick:void 0,underlined:!1,disabled:!1}},a={args:{children:"Anchor",href:void 0,target:void 0,onClick:void 0,underlined:!1,disabled:!0}},o={args:{children:"Anchor",underlined:!0}},l={args:{children:"Anchor",lineColor:"white",underlined:!0}},d={args:{children:"Anchor",lineColor:"orange",underlined:!0}};var u,h,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Anchor',
    href: undefined,
    target: undefined,
    onClick: undefined,
    underlined: false,
    disabled: false
  }
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,f,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Anchor',
    href: undefined,
    target: undefined,
    onClick: undefined,
    underlined: false,
    disabled: true
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var _,y,b;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Anchor',
    underlined: true
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,A,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Anchor',
    lineColor: 'white',
    underlined: true
  }
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var V,O,k;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Anchor',
    lineColor: 'orange',
    underlined: true
  }
}`,...(k=(O=d.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const B=["Default","Disabled","Underlined","White","Orange"];export{r as Default,a as Disabled,d as Orange,o as Underlined,l as White,B as __namedExportsOrder,z as default};
