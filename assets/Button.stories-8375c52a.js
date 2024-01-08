import{B as E}from"./Button-67e2900c.js";import"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./DotsLoader-9ca9a271.js";const A={title:"UI/Button",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{table:{category:"Required",type:{summary:"string"}},description:"Текстовое поле кнопки"},type:{table:{category:"Optional",defaultValue:{summary:"undefined"}},description:"Определяет поведение компонента в форме"},onClick:{table:{category:"Optional",defaultValue:{summary:"undefined"}},description:"Обработчик события нажатия на кнопку"},color:{options:["undefined","black","green","lightgrey"],description:"Цветовая схема компонента",table:{category:"Optional",defaultValue:{summary:"undefined"}}},inverted:{control:"boolean",description:"Инверсия цветовой схемы",table:{category:"Optional",defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Не активное состояние компонента",table:{category:"Optional",defaultValue:{summary:!1}}},isLoading:{control:"boolean",description:"Состояние загрузки компонента",table:{category:"Optional",defaultValue:{summary:!1}}},size:{control:"inline-radio",options:["undefined","small"],description:"Размер, определяемый внутренними отступами",table:{category:"Optional",defaultValue:{summary:"undefined"}}},className:{description:"Имя внешнего CSS класса для позиционирования",table:{category:"Optional",defaultValue:{summary:"undefined"}}}}},e={args:{label:"Click Me",inverted:!1,color:void 0,size:void 0,type:void 0,onClick:void 0,isLoading:!1,disabled:!1,className:void 0}},a={args:{label:"Click Me",isLoading:!0}},r={args:{label:"Click Me",disabled:!0}},n={args:{label:"Click Me",size:"small",inverted:!1}},l={args:{label:"Click Me",color:"black",inverted:!1}},s={args:{label:"Click Me",color:"green",inverted:!1},parameters:{backgrounds:{default:"green",values:[{name:"green",value:"#565b4f"}]}}},t={args:{label:"Click Me",color:"green",inverted:!0},parameters:{backgrounds:{default:"green",values:[{name:"green",value:"#565b4f"}]}}},o={args:{label:"Click Me",color:"lightgrey",inverted:!1},parameters:{backgrounds:{default:"lightgrey",values:[{name:"lightgrey",value:"#e6e6e6"}]}}},i={args:{label:"Click Me",color:"lightgrey",inverted:!0},parameters:{backgrounds:{default:"lightgrey",values:[{name:"lightgrey",value:"#e6e6e6"}]}}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    inverted: false,
    color: undefined,
    size: undefined,
    type: undefined,
    onClick: undefined,
    isLoading: false,
    disabled: false,
    className: undefined
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,m,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    isLoading: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,f,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    disabled: true
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,k,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    size: 'small',
    inverted: false
  }
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,h,S;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    color: 'black',
    inverted: false
  }
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var L,O,G;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    color: 'green',
    inverted: false
  },
  parameters: {
    backgrounds: {
      default: 'green',
      values: [{
        name: 'green',
        value: '#565b4f'
      }]
    }
  }
}`,...(G=(O=s.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var V,z,B;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    color: 'green',
    inverted: true
  },
  parameters: {
    backgrounds: {
      default: 'green',
      values: [{
        name: 'green',
        value: '#565b4f'
      }]
    }
  }
}`,...(B=(z=t.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var I,D,N;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    color: 'lightgrey',
    inverted: false
  },
  parameters: {
    backgrounds: {
      default: 'lightgrey',
      values: [{
        name: 'lightgrey',
        value: '#e6e6e6'
      }]
    }
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var x,_,q;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    color: 'lightgrey',
    inverted: true
  },
  parameters: {
    backgrounds: {
      default: 'lightgrey',
      values: [{
        name: 'lightgrey',
        value: '#e6e6e6'
      }]
    }
  }
}`,...(q=(_=i.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const F=["Default","Loading","Disabled","Small","Black","Green","GreenInverted","LightGrey","LightGreyInverted"];export{l as Black,e as Default,r as Disabled,s as Green,t as GreenInverted,o as LightGrey,i as LightGreyInverted,a as Loading,n as Small,F as __namedExportsOrder,A as default};
