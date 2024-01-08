import{j as s}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const j="marker",v="markerAnimation",T="marker_tooltiped",V="marker_tooltiped",A="marker__tooltip",P="marker__tooltipAnimation",M="marker_positioned",O="marker_positioned",r={marker:j,markerAnimation:v,marker_tooltiped:T,markerTooltiped:V,tooltip:A,tooltipAnimation:P,marker_positioned:M,markerPositioned:O},d=({tooltip:e,className:l,coords:n,size:p="3rem"})=>{const o=[r.marker];e&&o.push(r.marker_tooltiped),l&&o.push(l);let m,c;return n&&(o.push(r.marker_positioned),m=n[0],c=n[1]),s.jsx("div",{className:o.join(" "),style:{height:p,width:p,left:m,top:c},children:s.jsx("span",{className:r.tooltip,children:e})})},S=d;try{d.displayName="Marker",d.__docgenInfo={description:"",displayName:"Marker",props:{size:{defaultValue:{value:"3rem"},description:"",name:"size",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},coords:{defaultValue:null,description:"",name:"coords",required:!1,type:{name:"[string, string]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const I={title:"UI/Marker",component:S,parameters:{layout:"centered"},decorators:[e=>s.jsx("div",{style:{height:"200px",display:"grid",placeContent:"center"},children:s.jsx(e,{})})],tags:["autodocs"],argTypes:{size:{description:"Размер компонента",table:{category:"Optional"}},tooltip:{description:"Текст всплывающей подсказки",table:{category:"Optional",defaultValue:{summary:"undefined"}}},coords:{description:"Координаты маркера для абсолютного позиционирования",table:{category:"Optional",defaultValue:{summary:"undefined"}}},className:{description:"Имя внешнего CSS класса для позиционирования",table:{category:"Optional",defaultValue:{summary:"undefined"}}}}},t={args:{size:void 0,tooltip:void 0,coords:void 0,className:void 0}},a={args:{tooltip:"Tooltip"}},i={args:{tooltip:"I'm Positioned",coords:["-15rem","40%"]}};var u,k,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: undefined,
    tooltip: undefined,
    coords: undefined,
    className: undefined
  }
}`,...(f=(k=t.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var g,_,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tooltip: 'Tooltip'
  }
}`,...(y=(_=a.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var h,x,N;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tooltip: "I'm Positioned",
    coords: ['-15rem', '40%']
  }
}`,...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const C=["Default","Tooltiped","Positioned"];export{t as Default,i as Positioned,a as Tooltiped,C as __namedExportsOrder,I as default};
