(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{69694:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(52322),r=(n(2784),n(6277)),i=(n(85430),n(51537)),a=n.n(i);function s(e){var t=e.code,n=e.className,i=e.name,s=(0,r.Z)(a().root,n),c=i?a().name:a().hiddenName,l=(0,r.Z)(a().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("div",{className:c,children:i}),(0,o.jsx)("pre",{className:l,children:(0,o.jsx)("code",{children:t})})]})}},97539:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(52322),r=n(2784),i=n(18476),a=n.n(i),s=n(98118),c=n(25949),l=n(97249),u=n(2137);function d(e){var t=e.children;return(0,r.useEffect)((function(){a().highlightAll()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{}),(0,o.jsx)(c.Z,{}),t,(0,o.jsx)(l.Z,{}),(0,o.jsx)(u.Z,{})]})}},36893:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var o=n(52322),r=n(66601),i=n(29931),a=n(78414),s=n(85520),c=n(55089),l=n(2784),u=n(96383),d=n(25567),f=n(41907),g=n(14660),p=n.n(g),y=n(69694),h=n(97290),m=n(77460),v=n(1503),S=n(64705),b=n(53816),k=n(95597),C=n(95276);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=l.forwardRef((function(e,t){e.block,e.blockProps,e.customStyleMap,e.customStyleFn,e.decorator,e.forceSelection,e.offsetKey,e.selection,e.tree,e.contentState,e.blockStyleFn,e.preventScroll;var n=e.style,r=(0,C.Z)(e,["block","blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","contentState","blockStyleFn","preventScroll","style"]);return(0,o.jsx)("div",x(x({ref:t},r),{},{style:x({width:200,height:80,backgroundColor:"#9bc0c7"},n)}))}));R.displayName="ColorBlock";var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorator?e.decorator(R):R;return{blockRendererFn:function(e,n){var o=n.getEditorState;if("atomic"===e.getType()&&"colorBlock"===o().getCurrentContent().getEntity(e.getEntityAt(0)).getType())return{component:t,editable:!1};return null}}},w=n(89221),B=n.n(w);function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,s.Z)(this,n)}}var _=(0,k.Z)(),P=(0,b.Z)(),Z=[_,P,j({decorator:(0,S.lM)(P.decorator,_.decorator)})],O={entityMap:{0:{type:"colorBlock",mutability:"IMMUTABLE",data:{}}},blocks:[{key:"9gm3s",text:"This is a simple example. Hover the block and change the with by dragging the mouse.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"More text here \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},z=function(e){(0,a.Z)(n,e);var t=K(n);function n(){var e;(0,r.Z)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,m.Z)((0,h.Z)(e),"state",{editorState:v.EditorState.createWithContent((0,v.convertFromRaw)(O))}),(0,m.Z)((0,h.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,m.Z)((0,h.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,i.Z)(n,[{key:"render",value:function(){var e=this;return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:B().editor,onClick:this.focus,children:(0,o.jsx)(S.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:Z,ref:function(t){e.editor=t}})})})}}]),n}(l.Component),A=n(97539);function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,s.Z)(this,n)}}var N=function(e){(0,a.Z)(n,e);var t=F(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,o.jsxs)(A.Z,{children:[(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(f.Z,{level:2,children:"Resizeable"}),(0,o.jsx)(f.Z,{level:3,children:"Prerequisite"}),(0,o.jsx)("p",{children:"This plugin exposes a decorator for blocks. You can use it in combination with any kind of plugin that manages a Draft.js block e.g. image or video. Keep in mind the plugin must accept a decorator for the block. The `Simple Resizeable Example` further down contains an example plugin rendering a colored div. In addition this plugin only works in combination with the @draft-js-plugins/focus."}),(0,o.jsx)(f.Z,{level:3,children:"Usage"}),(0,o.jsx)("p",{children:"Hover with the mouse on the right side of the block and drag it to resize. At which edge resize is possible is configurable."}),(0,o.jsx)(f.Z,{level:3,children:"Supported Environment"}),(0,o.jsxs)("ul",{className:p().list,children:[(0,o.jsx)("li",{className:p().listEntry,children:"Desktop: Yes"}),(0,o.jsx)("li",{className:p().listEntry,children:"Mobile: No"}),(0,o.jsx)("li",{className:p().listEntry,children:"Screen-reader: No"})]})]}),(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(f.Z,{level:2,children:"Getting Started"}),(0,o.jsx)(y.Z,{code:"npm install @draft-js-plugins/editor"}),(0,o.jsx)(y.Z,{code:"npm install @draft-js-plugins/focus"}),(0,o.jsx)(y.Z,{code:"npm install @draft-js-plugins/resizeable"})]}),(0,o.jsx)(u.Z,{children:(0,o.jsx)(f.Z,{level:2,children:"Configuration Parameters"})}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(f.Z,{level:2,children:"Simple Resizeable Example"}),(0,o.jsx)(z,{}),(0,o.jsx)(y.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createResizeablePlugin from '@draft-js-plugins/resizeable';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createColorBlockPlugin from './colorBlockPlugin';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\nconst resizeablePlugin = createResizeablePlugin();\n\nconst decorator = composeDecorators(\n  resizeablePlugin.decorator,\n  focusPlugin.decorator\n);\n\nconst colorBlockPlugin = createColorBlockPlugin({ decorator });\nconst plugins = [focusPlugin, resizeablePlugin, colorBlockPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'colorBlock',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example. Hover the block and change the with by dragging the mouse.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'More text here \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class SimpleResizeableEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"SimpleResizeableEditor.js"}),(0,o.jsx)(y.Z,{code:"import React from 'react';\n\nconst ColorBlock = React.forwardRef(\n  (\n    {\n      block, // eslint-disable-line no-unused-vars\n      blockProps, // eslint-disable-line no-unused-vars\n      customStyleMap, // eslint-disable-line no-unused-vars\n      customStyleFn, // eslint-disable-line no-unused-vars\n      decorator, // eslint-disable-line no-unused-vars\n      forceSelection, // eslint-disable-line no-unused-vars\n      offsetKey, // eslint-disable-line no-unused-vars\n      selection, // eslint-disable-line no-unused-vars\n      tree, // eslint-disable-line no-unused-vars\n      contentState, // eslint-disable-line no-unused-vars\n      blockStyleFn, // eslint-disable-line no-unused-vars\n      preventScroll, // eslint-disable-line no-unused-vars\n      style,\n      ...elementProps\n    },\n    ref\n  ) => (\n    <div\n      ref={ref}\n      {...elementProps}\n      style={{ width: 200, height: 80, backgroundColor: '#9bc0c7', ...style }}\n    />\n  )\n);\n\nconst createColorBlockPlugin = (config = {}) => {\n  const component = config.decorator\n    ? config.decorator(ColorBlock)\n    : ColorBlock;\n  return {\n    blockRendererFn: (block, { getEditorState }) => {\n      if (block.getType() === 'atomic') {\n        const contentState = getEditorState().getCurrentContent();\n        const entity = contentState.getEntity(block.getEntityAt(0));\n        const type = entity.getType();\n        if (type === 'colorBlock') {\n          return {\n            component,\n            editable: false,\n          };\n        }\n      }\n      return null;\n    },\n  };\n};\nColorBlock.displayName = 'ColorBlock';\n\nexport default createColorBlockPlugin;\n",name:"colorBlockPlugin.js"}),(0,o.jsx)(y.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})]})]})}}]),n}(l.Component)},68791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/resizeable",function(){return n(36893)}])},51537:function(e){e.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},89221:function(e){e.exports={editor:"editorStyles_editor__3UvEi",options:"editorStyles_options__1gTbi"}},14660:function(e){e.exports={root:"styles_root__1dzkj",param:"styles_param__25JjX",paramBig:"styles_paramBig__3ojT0",paramName:"styles_paramName__blbJE",subParams:"styles_subParams__2qHtX",subParam:"styles_subParam__2guFk",subParamName:"styles_subParamName__1-8pq",list:"styles_list__9JIP4",listEntry:"styles_listEntry__2dTHj",guideCodeBlock:"styles_guideCodeBlock__1iopd"}},95597:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var o=n(1503),r=n(46670),i=n(52358),a=n.n(i),s=n(2784),c=n(6277);function l(e){var t=function(e,t,n){var r=t.getStartKey(),i=[];return e.getBlockMap().forEach((function(e,t){i.push(e),t===r&&i.push(n)})),e.merge({blockMap:o.BlockMapBuilder.createFromArray(i),selectionBefore:t,selectionAfter:t.merge({anchorKey:n.getKey(),anchorOffset:n.getLength(),focusKey:n.getKey(),focusOffset:n.getLength(),isBackward:!1})})}(e.getCurrentContent(),e.getSelection(),new o.ContentBlock({key:(0,o.genKey)(),type:"unstyled",text:"",characterList:(0,r.List)()})),n=t.merge({selectionAfter:t.getSelectionAfter().set("hasFocus",!0)});return o.EditorState.push(e,n,"insert-fragment")}var u=function(e,t,n,r){var i=e(),s=i.getSelection().getAnchorKey(),c="up"===n?i.getCurrentContent().getBlockBefore(s):i.getCurrentContent().getBlockAfter(s);if((!c||c.get("key")!==s)&&c){var l=a().encode(c.getKey(),0,0),u=document.querySelectorAll('[data-offset-key="'+l+'"]')[0],d=window.getSelection(),f=document.createRange();f.setStart(u,0),f.setEnd(u,0),d.removeAllRanges(),d.addRange(f);var g="up"===n?c.getLength():0;r.preventDefault(),t(o.EditorState.forceSelection(i,new o.SelectionState({anchorKey:c.getKey(),anchorOffset:g,focusKey:c.getKey(),focusOffset:g,isBackward:!1})))}};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var f=function(e){var t=e.theme,n=e.blockKeyStore;return function(e){var o=s.forwardRef((function(o,r){(0,s.useEffect)((function(){return n.add(o.block.getKey()),function(){n.remove(o.block.getKey())}}),[]);var i=o.blockProps,a=o.className,l=i.isFocused?(0,c.Z)(a,t.focused):(0,c.Z)(a,t.unfocused);return s.createElement(e,d({},o,{ref:r,onClick:function(e){e.preventDefault(),o.blockProps.isFocused||o.blockProps.setFocusToBlock()},className:l}))}));return o.displayName="BlockFocus("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",o.WrappedComponent=e.WrappedComponent||e,o}};var g=function(e,t,n){return e.getBlockMap().keySeq().skipUntil((function(e){return e===t})).takeUntil((function(e){return e===n})).concat([n])},p=function(e,t){return function(e){var t=e.getSelection(),n=e.getCurrentContent();return g(n,t.getStartKey(),t.getEndKey())}(e).includes(t)};var y={unfocused:"uz5k6rs",focused:"f1vn2c6d"},h=function(e,t){var n=e.getSelection();if(n.getAnchorKey()!==n.getFocusKey())return!1;var o=e.getCurrentContent().getBlockForKey(n.getAnchorKey());return t.includes(o.getKey())},m=["backspace","backspace-word","backspace-to-start-of-line","delete","delete-word","delete-to-end-of-block"];function v(e){return o.EditorState.set(e,{selection:e.getSelection(),forceSelection:!0,nativelyRenderedContent:null,inlineStyleOverride:null})}var S=function(e){void 0===e&&(e={});var t,n,i=function(){var e=(0,r.List)();return{add:function(t){return e=e.push(t)},remove:function(t){return e=e.filter((function(e){return e!==t}))},includes:function(t){return e.includes(t)},getAll:function(){return e}}}(),s=e.theme?e.theme:y;return{handleReturn:function(e,t,n){var o=n.setEditorState;return h(t,i)?(o(l(t)),"handled"):"not-handled"},handleKeyCommand:function(e,t,n,r){var a=r.setEditorState;if(m.includes(e)&&h(t,i)){var s=t.getSelection().getStartKey(),c=function(e,t){var n=e.getCurrentContent(),r=n.getKeyBefore(t),i=n.getBlockForKey(r);if(void 0===i){var a=new o.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});n=o.Modifier.removeRange(n,a,"backward"),n=o.Modifier.setBlockType(n,a,"unstyled");var s=o.EditorState.push(e,n,"remove-range"),c=new o.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0});return o.EditorState.forceSelection(s,c)}var l=new o.SelectionState({anchorKey:r,anchorOffset:i.getLength(),focusKey:t,focusOffset:1});n=o.Modifier.removeRange(n,l,"backward");var u=o.EditorState.push(e,n,"remove-range"),d=new o.SelectionState({anchorKey:r,anchorOffset:i.getLength(),focusKey:r,focusOffset:i.getLength()});return o.EditorState.forceSelection(u,d)}(t,s);if(c!==t)return a(c),"handled"}return"not-handled"},onChange:function(e){var o=e.getCurrentContent();if(!o.equals(n))return n=o,e;n=o;var r=e.getSelection();if(t&&r.equals(t))return t=e.getSelection(),e;var a=i.getAll();if(t&&g(o,t.getStartKey(),t.getEndKey()).some((function(e){return a.includes(e)})))return t=r,v(e);return g(o,r.getStartKey(),r.getEndKey()).some((function(e){return a.includes(e)}))?(t=r,v(e)):e},keyBindingFn:function(e,t){var n=t.getEditorState,o=t.setEditorState,r=n();if(h(r,i)&&(37===e.keyCode&&u(n,o,"up",e),39===e.keyCode&&u(n,o,"down",e),38===e.keyCode&&u(n,o,"up",e),40===e.keyCode))u(n,o,"down",e);else if(!e.shiftKey){if(37===e.keyCode){var a=r.getSelection(),s=a.getAnchorKey(),c=r.getCurrentContent().getBlockBefore(s);c&&0===a.getAnchorOffset()&&i.includes(c.getKey())&&u(n,o,"up",e)}if(39===e.keyCode){var l=r.getSelection(),d=l.getFocusKey(),f=r.getCurrentContent().getBlockForKey(d),g=r.getCurrentContent().getBlockAfter(d),p="atomic"!==f.getType()&&f.getLength()===l.getFocusOffset();g&&p&&i.includes(g.getKey())&&u(n,o,"down",e)}if(38===e.keyCode){var y=r.getSelection().getAnchorKey(),m=r.getCurrentContent().getBlockBefore(y);m&&i.includes(m.getKey())&&u(n,o,"up",e)}if(40===e.keyCode){var v=r.getSelection().getAnchorKey(),S=r.getCurrentContent().getBlockAfter(v);S&&i.includes(S.getKey())&&u(n,o,"down",e)}}},blockRendererFn:function(e,t){var n=t.getEditorState,r=t.setEditorState;if("atomic"===e.getType()){var i=n();return{props:{isFocused:i.getSelection().getHasFocus()&&p(i,e.getKey()),isCollapsedSelection:i.getSelection().isCollapsed(),setFocusToBlock:function(){!function(e,t,n){var r=e(),i=a().encode(n.getKey(),0,0),s=document.querySelectorAll('[data-offset-key="'+i+'"]')[0],c=window.getSelection(),l=document.createRange();l.setStart(s,0),l.setEnd(s,0),c.removeAllRanges(),c.addRange(l),t(o.EditorState.forceSelection(r,new o.SelectionState({anchorKey:n.getKey(),anchorOffset:0,focusKey:n.getKey(),focusOffset:0,isBackward:!1})))}(n,r,e)}}}}},decorator:f({theme:s,blockKeyStore:i})}}},53816:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(1503),r=n(2784);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var a=["blockProps","isResizable","resizeSteps"],s=function(e,t){return Math.ceil(e/t)*t},c=function(e){var t=e.config,n=e.store;return function(e){var o=r.forwardRef((function(o,c){var l=o.blockProps,u=o.isResizable,d=void 0===u||u,f=o.resizeSteps,g=void 0===f?1:f,p=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(o,a),y=t.vertical,h=void 0!==y&&y,m=t.horizontal,v=void 0===m?"relative":m,S=t.initialWidth,b=t.initialHeight,k=(0,r.useState)(!1),C=k[0],E=k[1],x=(0,r.useState)(0),R=x[0],j=x[1],w=(0,r.useState)(0),B=w[0],K=w[1],_=(0,r.useState)({}),P=_[0],Z=_[1],O=(0,r.useRef)(),z=(0,r.useCallback)((function(){C||Z({})}),[C]),A=(0,r.useCallback)((function(e){var t=O.current.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top,r=!(!h||"auto"===h)&&o<6,i=!!v&&n<6,a=!!v&&n>=t.width-6,s=!(!h||"auto"===h)&&(o>=t.height-6&&o<t.height),c={isTop:r,isLeft:i,isRight:a,isBottom:s,canResize:(r||i||a||s)&&d};Z((function(e){return Object.keys(c).filter((function(t){return e[t]!==c[t]})).length?c:e}))}),[h,v,d]),F=(0,r.useCallback)((function(e){if(P.canResize){e.preventDefault();var t=P.isTop,o=P.isLeft,r=P.isRight,i=P.isBottom,a=O.current,c=e.clientX,u=e.clientY,d=parseInt(document.defaultView.getComputedStyle(a).width,10),f=parseInt(document.defaultView.getComputedStyle(a).height,10),p=R,y=B,m=function(e){var a=d+(o?c-e.clientX:e.clientX-c),l=f+e.clientY-u,m=n.getEditorRef(),S=m.refs&&m.refs.editor?m.refs.editor:m.editor;a=Math.min(S.clientWidth,a),l=Math.min(S.clientHeight,l);var b=100/S.clientWidth*a,k=100/S.clientHeight*l;(o||r)&&"relative"===v?(p=g?s(b,g):b,j(p)):(o||r)&&"absolute"===v&&(p=g?s(a,g):a,j(p)),(t||i)&&"relative"===h?(y=g?s(k,g):k,K(y)):(t||i)&&"absolute"===h&&(y=g?s(l,g):l,K(y)),e.preventDefault()};document.addEventListener("mousemove",m,!1),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",m,!1),document.removeEventListener("mouseup",e,!1),E(!1),l.setResizeData({width:p,height:y})}),!1),E(!0)}}),[P,R,B,l]),N=(0,r.useMemo)((function(){var e={position:"relative"},t=P.isTop,n=P.isLeft,o=P.isRight,r=P.isBottom;if("auto"===v)e.width="auto";else if("relative"===v){var i=R||l.resizeData.width;e.width=!i&&S?S:(i||40)+"%"}else if("absolute"===v){var a=R||l.resizeData.width;e.width=!a&&S?S:(a||40)+"px"}if("auto"===h)e.height="auto";else if("relative"===h){var s=B||l.resizeData.height;e.height=!s&&b?b:(s||40)+"%"}else if("absolute"===h){var c=B||l.resizeData.height;e.height=!c&&b?b:(c||40)+"%"}return e.cursor=d?o&&r||n&&t?"nwse-resize":o&&t||r&&n?"nesw-resize":o||n?"ew-resize":r||t?"ns-resize":"default":"default",e}),[P,B,R]),M=!n.getReadOnly||n.getReadOnly()?{}:{onMouseDown:F,onMouseMove:A,onMouseLeave:z};return r.createElement(e,i({},p,M,{blockProps:l,ref:function(e){O.current=e,"function"===typeof c?c(e):c&&(c.current=e)},style:N}))}));return o.displayName="BlockResizeable("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",o.WrappedComponent=e.WrappedComponent||e,o}},l=function(e,t){var n=t.getEditorState,r=t.setEditorState;return function(t){var a=e.getEntityAt(0);if(a){var s=n();s.getCurrentContent().mergeEntityData(a,i({},t)),r(o.EditorState.forceSelection(s,s.getSelection()))}}},u=function(e){void 0===e&&(e={});var t={getEditorRef:void 0,getReadOnly:void 0,getEditorState:void 0,setEditorState:void 0};return{initialize:function(e){var n=e.getEditorRef,o=e.getReadOnly,r=e.getEditorState,i=e.setEditorState;t.getReadOnly=o,t.getEditorRef=n,t.getEditorState=r,t.setEditorState=i},decorator:c({config:e,store:t}),blockRendererFn:function(e,t){var n=t.getEditorState,o=t.setEditorState,r=e.getEntityAt(0),i=n().getCurrentContent();return{props:{resizeData:r?i.getEntity(r).getData():{},setResizeData:l(e,{getEditorState:n,setEditorState:o})}}}}}}},function(e){e.O(0,[774,13,476,919,888,179],(function(){return t=68791,e(e.s=t);var t}));var t=e.O();_N_E=t}]);