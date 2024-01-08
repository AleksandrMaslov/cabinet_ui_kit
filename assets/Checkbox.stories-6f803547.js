import{j as b}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const ce="checkbox",se="checkbox__input",ie="checkbox_white",re="checkbox_white",le="checkbox_lightgrey",te="checkbox_lightgrey",ue="checkbox_grey",he="checkbox_grey",be="checkbox_orange",ge="checkbox_orange",me="checkbox_green",fe="checkbox_green",pe="checkbox_lightgreen",ke="checkbox_lightgreen",ve="checkbox_blue",xe="checkbox_blue",ye="checkbox_milk",_e="checkbox_milk",g={checkbox:ce,input:se,checkbox_white:ie,checkboxWhite:re,checkbox_lightgrey:le,checkboxLightgrey:te,checkbox_grey:ue,checkboxGrey:he,checkbox_orange:be,checkboxOrange:ge,checkbox_green:me,checkboxGreen:fe,checkbox_lightgreen:pe,checkboxLightgreen:ke,checkbox_blue:ve,checkboxBlue:xe,checkbox_milk:ye,checkboxMilk:_e},m=({id:u,name:ee,label:f,color:p,className:k,disabled:ne,checked:ae,onChange:v,size:x="1.1em"})=>{const h=[g.checkbox];p&&h.push(g[`checkbox_${p}`]),k&&h.push(k);const oe=v&&(de=>v(de.target.checked));return b.jsxs("label",{className:h.join(" "),htmlFor:u,children:[b.jsx("input",{className:g.input,style:{height:x,width:x},onChange:oe,id:u,name:ee,disabled:ne,checked:ae,type:"checkbox"}),f&&b.jsx("span",{children:f})]})},Ce=m;try{m.displayName="Checkbox",m.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"1.1em"},description:"",name:"size",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"orange"'},{value:'"green"'},{value:'"lightgreen"'},{value:'"blue"'},{value:'"milk"'},{value:'"lightgrey"'},{value:'"grey"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ve={title:"UI/Checkbox",component:Ce,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Не активное состояние компонента",table:{category:"Optional",defaultValue:{summary:!1}}},checked:{description:"Состояние элемента ввода",table:{category:"Optional"}},onChange:{description:"Обработчик изменения состояния элемента ввода",table:{category:"Optional",defaultValue:{summary:"undefined"}}},name:{description:"Имя элемента ввода, связанное с отправляемыми формой данными",table:{category:"Optional",defaultValue:{summary:"undefined"}}},id:{description:'Используется для связывания со встроенным элементом "label"',table:{category:"Optional",defaultValue:{summary:"undefined"}}},label:{description:"Подпись элемента ввода",table:{category:"Optional",defaultValue:{summary:"undefined"}}},color:{options:["undefined","green","orange","lightgreen","blue","milk","white","lightgrey","grey"],description:"Цветовая схема компонента",table:{category:"Optional",defaultValue:{summary:"undefined"}}},size:{description:"Размер компонента",table:{category:"Optional"}},className:{description:"Имя внешнего CSS класса для позиционирования",table:{category:"Optional",defaultValue:{summary:"undefined"}}}}},e={args:{label:"Label",name:void 0,id:void 0,color:void 0,size:void 0,disabled:!1,checked:!1,onChange:void 0,className:void 0}},n={args:{label:"Label",name:void 0,id:void 0,color:void 0,size:void 0,disabled:!0,checked:!1,onChange:void 0,className:void 0}},a={args:{label:"Label",name:void 0,id:void 0,color:void 0,size:"2em",disabled:!1,checked:!1,onChange:void 0,className:void 0}},o={args:{label:"Label",name:void 0,id:void 0,color:"green",size:void 0,disabled:!1,checked:!0,onChange:void 0,className:void 0}},d={args:{label:"Label",name:void 0,id:void 0,color:"orange",size:void 0,disabled:!1,checked:!0,onChange:void 0,className:void 0}},c={args:{label:"Label",name:void 0,id:void 0,color:"blue",size:void 0,disabled:!1,checked:!0,onChange:void 0,className:void 0}},s={args:{label:"Label",name:void 0,id:void 0,color:"lightgreen",size:void 0,disabled:!1,checked:!0,onChange:void 0,className:void 0}},i={args:{label:"Label",name:void 0,id:void 0,color:"milk",size:void 0,disabled:!1,checked:!0,onChange:void 0,className:void 0}},r={args:{label:"Label",name:void 0,id:void 0,color:"white",size:void 0,disabled:!1,checked:!0,onChange:void 0,className:void 0}},l={args:{label:"Label",name:void 0,id:void 0,color:"lightgrey",size:void 0,disabled:!1,checked:!0,onChange:void 0,className:void 0}},t={args:{label:"Label",name:void 0,id:void 0,color:"grey",size:void 0,disabled:!1,checked:!0,onChange:void 0,className:void 0}};var y,_,C;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: undefined,
    size: undefined,
    disabled: false,
    checked: false,
    onChange: undefined,
    className: undefined
  }
}`,...(C=(_=e.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var L,N,z;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: undefined,
    size: undefined,
    disabled: true,
    checked: false,
    onChange: undefined,
    className: undefined
  }
}`,...(z=(N=n.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var V,S,O;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: undefined,
    size: '2em',
    disabled: false,
    checked: false,
    onChange: undefined,
    className: undefined
  }
}`,...(O=(S=a.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var q,w,G;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'green',
    size: undefined,
    disabled: false,
    checked: true,
    onChange: undefined,
    className: undefined
  }
}`,...(G=(w=o.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var j,B,D;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'orange',
    size: undefined,
    disabled: false,
    checked: true,
    onChange: undefined,
    className: undefined
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var M,W,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'blue',
    size: undefined,
    disabled: false,
    checked: true,
    onChange: undefined,
    className: undefined
  }
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var I,$,F;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'lightgreen',
    size: undefined,
    disabled: false,
    checked: true,
    onChange: undefined,
    className: undefined
  }
}`,...(F=($=s.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var H,R,T;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'milk',
    size: undefined,
    disabled: false,
    checked: true,
    onChange: undefined,
    className: undefined
  }
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var U,A,J;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'white',
    size: undefined,
    disabled: false,
    checked: true,
    onChange: undefined,
    className: undefined
  }
}`,...(J=(A=r.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var K,P,Q;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'lightgrey',
    size: undefined,
    disabled: false,
    checked: true,
    onChange: undefined,
    className: undefined
  }
}`,...(Q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,Z;t.parameters={...t.parameters,docs:{...(X=t.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'grey',
    size: undefined,
    disabled: false,
    checked: true,
    onChange: undefined,
    className: undefined
  }
}`,...(Z=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Se=["Default","Disabled","Size2em","Green","Orange","Blue","Lightgreen","Milk","White","Lightgrey","Grey"];export{c as Blue,e as Default,n as Disabled,o as Green,t as Grey,s as Lightgreen,l as Lightgrey,i as Milk,d as Orange,a as Size2em,r as White,Se as __namedExportsOrder,Ve as default};
