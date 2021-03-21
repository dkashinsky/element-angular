function _defineProperties(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,o){return e&&_defineProperties(n.prototype,e),o&&_defineProperties(n,o),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+2BB":function(n,e,o){"use strict";o.r(e),e.default=".el-row {\n  margin-bottom: 20px;\n}\n.el-row:last-child {\n  margin-bottom: 0;\n}\n.el-col {\n  border-radius: 4px;\n}\n.bg-purple-dark {\n  background: #99a9bf;\n}\n.bg-purple {\n  background: #d3dce6;\n}\n.bg-purple-light {\n  background: #e5e9f2;\n}\n.grid-content {\n  border-radius: 4px;\n  min-height: 36px;\n}\n.row-bg {\n  padding: 10px 0;\n  background-color: #f9fafc;\n}"},"1CQT":function(n,e,o){"use strict";o.r(e),e.default='@charset "UTF-8";\n.demo-typo-box {\n  height: 200px;\n  width: 200px;\n  position: relative;\n  border: 1px solid #eaeefb;\n  font-size: 40px;\n  color: #1f2d3d;\n  text-align: center;\n  line-height: 162px;\n  padding-bottom: 36px;\n  box-sizing: border-box;\n  display: inline-block;\n  margin-right: 17px;\n  border-radius: 4px;\n}\n.demo-typo-box .name {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 35px;\n  border-top: 1px solid #eaeefb;\n  font-size: 14px;\n  color: #8492a6;\n  line-height: 35px;\n  text-align: left;\n  text-indent: 10px;\n  font-family: "Helvetica Neue";\n}\n.demo-typo-size {\n  border-collapse: collapse;\n  width: 100%;\n  background-color: #fff;\n  font-size: 14px;\n  margin-bottom: 45px;\n  line-height: 1.5em;\n}\n.demo-typo-size th, .demo-typo-size td {\n  border-bottom: 1px solid #d8d8d8;\n  padding: 15px;\n  max-width: 250px;\n}\n.demo-typo-size td {\n  color: #333;\n}\n.demo-typo-size td:first-child {\n  padding-left: 10px;\n}\n.demo-typo-size .h1 {\n  font-size: 20px;\n}\n.demo-typo-size .h2 {\n  font-size: 18px;\n}\n.demo-typo-size .h3 {\n  font-size: 16px;\n}\n.demo-typo-size .text-regular {\n  font-size: 14px;\n}\n.demo-typo-size .text-small {\n  font-size: 13px;\n}\n.demo-typo-size .text-smaller {\n  font-size: 12px;\n}\n.demo-typo-size .color-dark-light {\n  color: #99a9bf;\n}\n.typo-PingFang {\n  font-family: "PingFang SC";\n}\n.typo-Hiragino {\n  font-family: "Hiragino Sans GB";\n}\n.typo-Microsoft {\n  font-family: "Microsoft YaHei";\n}\n/* \u82f1\u6587 */\n.typo-Helvetica-Neue {\n  font-family: "Helvetica Neue";\n}\n.typo-Helvetica {\n  font-family: "Helvetica";\n}\n.typo-Arial {\n  font-family: "Arial";\n}'},"1HoQ":function(n,e,o){"use strict";o.r(e),e.default='<h2 i18n="@@basic-button-h2-1">Button \u6309\u94ae</h2>\r\n<p i18n="@@basic-button-p-1">\u5e38\u7528\u7684\u64cd\u4f5c\u6309\u94ae\u3002</p>\r\n\r\n<h3 i18n="@@basic-button-h3-1">\u57fa\u7840\u7528\u6cd5</h3>\r\n<p i18n="@@basic-button-p-2">\u57fa\u7840\u7684\u6309\u94ae\u7528\u6cd5\u3002</p>\r\n<ex-demo  [code]="code[0]" notes="Button \u7ec4\u4ef6\u9ed8\u8ba4\u63d0\u4f9b7\u79cd\u4e3b\u9898\uff0c\u7531 <code>type</code> \u5c5e\u6027\u6765\u5b9a\u4e49\uff0c\u9ed8\u8ba4\u4e3a <code>default</code>\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@basic-button-h3-2">\u7981\u7528\u72b6\u6001</h3>\r\n<p i18n="@@basic-button-p-3">\u6309\u94ae\u4e0d\u53ef\u7528\u72b6\u6001\u3002</p>\r\n<ex-demo  [code]="code[1]" notes="\u4f60\u53ef\u4ee5\u4f7f\u7528<code>disabled</code>\u5c5e\u6027\u6765\u5b9a\u4e49\u6309\u94ae\u662f\u5426\u53ef\u7528\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a <code>Boolean</code> \u503c\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@basic-button-h3-3">\u6709\u989c\u8272\u503e\u5411</h3>\r\n<p i18n="@@basic-button-p-4">\u4e0d\u540c\u7684\u989c\u8272\u503e\u5411\u4ee3\u8868\u4e0d\u540c\u7684\u63d0\u793a</p>\r\n<ex-demo  [code]="code[2]" notes="\u6734\u7d20\u6309\u94ae\u540c\u6837\u8bbe\u7f6e\u4e86\u4e0d\u540c\u7684 <code>type</code> \u5c5e\u6027\u5bf9\u5e94\u7684\u6837\u5f0f\uff08\u53ef\u9009\u503c\u540c\u4e0a\uff09\uff0c\r\n\u9ed8\u8ba4\u4e3a <code>info</code>\u3002\u8bbe\u7f6e <code>plain</code> \u5c5e\u6027\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a <code>Boolean</code>\u3002\u6ce8\u610f\uff0c\u5728\u8be5\u60c5\u51b5\u4e0b\uff0c\r\n<code>text</code>\u867d\u7136\u53ef\u4ee5\u4e3a <code>text</code>\uff0c\u4f46\u662f\u662f\u6ca1\u6709\u610f\u4e49\u7684\uff0c\u4f1a\u663e\u793a\u4e3a <code>text button</code> \u7684\u6837\u5f0f\u3002\r\n">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@basic-button-h3-4">\u56fe\u6807\u6309\u94ae</h3>\r\n<p i18n="@@basic-button-p-5">\u5e26\u56fe\u6807\u7684\u6309\u94ae\u53ef\u589e\u5f3a\u8fa8\u8bc6\u5ea6(\u6709\u6587\u5b57)\u6216\u8282\u7701\u7a7a\u95f4(\u65e0\u6587\u5b57)\u3002</p>\r\n<ex-demo  [code]="code[3]" notes="\u8bbe\u7f6e <code>icon</code> \u5c5e\u6027\u5373\u53ef\uff0cicon \u7684\u5217\u8868\u53ef\u4ee5\u53c2\u8003 Element \u7684 icon \u7ec4\u4ef6\uff0c\r\n\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u5728\u6587\u5b57\u53f3\u8fb9\u7684 icon \uff0c\u53ea\u8981\u4f7f\u7528 <code>i</code> \u6807\u7b7e\u5373\u53ef\uff0c\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u56fe\u6807\u3002">\r\n</ex-demo>\r\n\r\n\r\n<h3 i18n="@@basic-button-h3-5">\u6309\u94ae\u7ec4</h3>\r\n<p i18n="@@basic-button-p-6">\u4ee5\u6309\u94ae\u7ec4\u7684\u65b9\u5f0f\u51fa\u73b0\uff0c\u5e38\u7528\u4e8e\u591a\u9879\u7c7b\u4f3c\u64cd\u4f5c\u3002</p>\r\n<ex-demo  [code]="code[4]" notes="\u4f7f\u7528 <code><el-button-group></code> \u6807\u7b7e\u6765\u5d4c\u5957\u4f60\u7684\u6309\u94ae\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@basic-button-h3-6">\u52a0\u8f7d\u4e2d</h3>\r\n<p i18n="@@basic-button-p-7">\u70b9\u51fb\u6309\u94ae\u540e\u8fdb\u884c\u6570\u636e\u52a0\u8f7d\u64cd\u4f5c\uff0c\u5728\u6309\u94ae\u4e0a\u663e\u793a\u52a0\u8f7d\u72b6\u6001\u3002</p>\r\n<ex-demo  [code]="code[5]" notes="\u8981\u8bbe\u7f6e\u4e3a loading \u72b6\u6001\uff0c\u53ea\u8981\u8bbe\u7f6e <code>loading</code>\r\n\u5c5e\u6027\u4e3a <code>true</code> \u5373\u53ef\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@basic-button-h3-7">\u4e0d\u540c\u5c3a\u5bf8</h3>\r\n<p i18n="@@basic-button-p-8">Button \u7ec4\u4ef6\u63d0\u4f9b\u9664\u4e86\u9ed8\u8ba4\u503c\u4ee5\u5916\u7684\u4e09\u79cd\u5c3a\u5bf8\uff0c\u53ef\u4ee5\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u9009\u62e9\u5408\u9002\u7684\u6309\u94ae\u5c3a\u5bf8\u3002</p>\r\n<ex-demo  [code]="code[6]" notes="\u989d\u5916\u7684\u5c3a\u5bf8\uff1a<code>large</code>\u3001\r\n<code>small</code>\u3001<code>mini</code>\uff0c\u901a\u8fc7\u8bbe\u7f6e <code>size</code> \u5c5e\u6027\u6765\u914d\u7f6e\u5b83\u4eec\u3002">\r\n</ex-demo>\r\n\r\n\r\n<ex-document doc="button"></ex-document>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n'},F2jU:function(n,e,o){"use strict";o.r(e),e.default='<h2 i18n="@@icon-h2-1">Icon</h2>\r\n<p>Provides a set of common icons.</p>\r\n\r\n<h3 i18n="@@icon-h3-1">Basic Usage</h3>\r\n<p i18n="@@icon-p-1">Assign icon class <code>el-icon-iconName</code> to an element\uff1a</p>\r\n\r\n<ex-demo  [code]="code[0]" notes="<code>el-icon</code> component serves the same purpose.">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@icon-h3-2">Icons</h3>\r\n<ul class="icon-list" *ngIf="icons">\r\n  <li *ngFor="let name of icons">\r\n    <span>\r\n      <i [class]="\'el-icon-\' + name"></i>\r\n      {{\'el-icon-\' + name}}\r\n    </span>\r\n  </li>\r\n</ul>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n'},OdTp:function(n,e,o){"use strict";o.r(e),e.default='<h2 i18n="@@basic-color-h2-1">Color \u8272\u5f69</h2>\r\n<p i18n="@@basic-color-p-1">\r\n  Element \u4e3a\u4e86\u907f\u514d\u89c6\u89c9\u4f20\u8fbe\u5dee\u5f02\uff0c\u4f7f\u7528\u4e00\u5957\u7279\u5b9a\u7684\u8c03\u8272\u677f\u6765\u89c4\u5b9a\u989c\u8272\uff0c\u4e3a\u4f60\u6240\u642d\u5efa\u7684\u4ea7\u54c1\u63d0\u4f9b\u4e00\u81f4\u7684\u5916\u89c2\u89c6\u89c9\u611f\u53d7\u3002\r\n</p>\r\n\r\n<h3 i18n="@@basic-color-h3-1">\u4e3b\u8272</h3>\r\n<p i18n="@@basic-color-p-2">Element \u4e3b\u8981\u54c1\u724c\u989c\u8272\u662f\u9c9c\u8273\u3001\u53cb\u597d\u7684\u84dd\u8272\u3002</p>\r\n<div el-row gutter="12">\r\n  <div el-col span="8">\r\n    <div class="demo-color-box bg-blue-light">Light Blue<div class="value">#58B7FF</div></div>\r\n  </div>\r\n  <div el-col span="8">\r\n    <div class="demo-color-box bg-blue">Blue<div class="value">#20A0FF</div></div>\r\n  </div>\r\n  <div el-col span="8">\r\n    <div class="demo-color-box bg-blue-dark">Dark Blue<div class="value">#1D8CE0</div></div>\r\n  </div>\r\n</div>\r\n\r\n<h3 i18n="@@basic-color-h3-2">\u8f85\u52a9\u8272</h3>\r\n<p i18n="@@basic-color-p-3">\u9664\u4e86\u4e3b\u8272\u5916\u7684\u573a\u666f\u8272\uff0c\u9700\u8981\u5728\u4e0d\u540c\u7684\u573a\u666f\u4e2d\u4f7f\u7528\uff08\u4f8b\u5982\u5371\u9669\u8272\u8868\u793a\u5371\u9669\u7684\u64cd\u4f5c\uff09\u3002</p>\r\n<div el-row gutter="12">\r\n  <div el-col span="6">\r\n    <div class="demo-color-box bg-info">Blue<div class="value">#20A0FF</div></div>\r\n  </div>\r\n  <div el-col span="6">\r\n    <div class="demo-color-box bg-success">Success<div class="value">#13CE66</div></div>\r\n  </div>\r\n  <div el-col span="6">\r\n    <div class="demo-color-box bg-warning">Warning<div class="value">#F7BA2A</div></div>\r\n  </div>\r\n  <div el-col span="6">\r\n    <div class="demo-color-box bg-danger">Danger<div class="value">#FF4949</div></div>\r\n  </div>\r\n</div>\r\n\r\n<h3 i18n="@@basic-color-h3-3">\u4e2d\u6027\u8272</h3>\r\n<p i18n="@@basic-color-p-4">\u4e2d\u6027\u8272\u7528\u4e8e\u6587\u672c\u3001\u80cc\u666f\u548c\u8fb9\u6846\u989c\u8272\u3002\u901a\u8fc7\u8fd0\u7528\u4e0d\u540c\u7684\u4e2d\u6027\u8272\uff0c\u6765\u8868\u73b0\u5c42\u6b21\u7ed3\u6784\u3002</p>\r\n<div el-row gutter="12">\r\n  <div el-col span="6">\r\n    <div class="demo-color-box-group">\r\n      <div class="demo-color-box bg-black">Black<div class="value">#1F2D3D</div></div>\r\n      <div class="demo-color-box bg-black-light">Light Black<div class="value">#324057</div></div>\r\n      <div class="demo-color-box bg-black-lighter">Extra Light Black<div class="value">#475669</div></div>\r\n    </div>\r\n  </div>\r\n  <div el-col span="6">\r\n    <div class="demo-color-box-group">\r\n      <div class="demo-color-box bg-silver">Silver<div class="value">#8492A6</div></div>\r\n      <div class="demo-color-box bg-silver-light">Light Silver<div class="value">#99A9BF</div></div>\r\n      <div class="demo-color-box bg-silver-lighter">Extra Light Silver<div class="value">#C0CCDA</div></div>\r\n    </div>\r\n  </div>\r\n  <div el-col span="6">\r\n    <div class="demo-color-box-group">\r\n      <div class="demo-color-box color-gray bg-gray">Gray<div class="value">#D3DCE6</div></div>\r\n      <div class="demo-color-box color-gray bg-gray-light">Light Gray<div class="value">#E5E9F2</div></div>\r\n      <div class="demo-color-box color-gray bg-gray-lighter">Extra Light Gray<div class="value">#EFF2F7</div></div>\r\n    </div>\r\n  </div>\r\n  <div el-col span="6">\r\n    <div class="demo-color-box-group" style="border: 1px solid #e0e6ed;border-radius: 4px;">\r\n      <div class="demo-color-box color-gray bg-white-dark">Dark White<div class="value">#F9FAFC</div></div>\r\n      <div class="demo-color-box color-gray bg-white">White<div class="value">#FFFFFF</div></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>'},PwcP:function(n,e,o){"use strict";o.r(e),o.d(e,"BasicModule",(function(){return j}));var i=o("D57K"),t=o("2kYt"),r=o("EM62"),l=o("nIj0"),d=o("sEIs"),a=function n(){_classCallCheck(this,n)};a=Object(i.a)([Object(r.n)({selector:"ex-basic-main",template:Object(i.b)(o("WXEy")).default})],a);var c=['\n<el-button>\u9ed8\u8ba4\u6309\u94ae</el-button>\n<el-button type="primary">\u4e3b\u8981\u6309\u94ae</el-button>\n<el-button type="text">\u6587\u5b57\u6309\u94ae</el-button>\n<el-button>\u6587\u5b57\u6309\u94ae</el-button>\n<el-button [round]="true">\u6587\u5b57\u6309\u94ae</el-button>\n','\n<el-button [plain]="true" [elDisabled]="true">\u4e3b\u8981\u6309\u94ae</el-button>\n<el-button type="primary" [elDisabled]="true">\u4e3b\u8981\u6309\u94ae</el-button>\n<el-button type="text" [elDisabled]="true">\u6587\u5b57\u6309\u94ae</el-button>\n','\n<div class="block">\n  <span class="demonstration">\u9ed8\u8ba4\u663e\u793a\u989c\u8272</span>\n  <span class="wrapper">\n    <el-button type="success">\u6210\u529f\u6309\u94ae</el-button>\n    <el-button type="warning">\u8b66\u544a\u6309\u94ae</el-button>\n    <el-button type="danger">\u5371\u9669\u6309\u94ae</el-button>\n    <el-button type="info">\u4fe1\u606f\u6309\u94ae</el-button>\n  </span>\n</div>\n<div class="block">\n  <span class="demonstration">hover \u663e\u793a\u989c\u8272</span>\n  <span class="wrapper">\n    <el-button [plain]="true" type="success">\u6210\u529f\u6309\u94ae</el-button>\n    <el-button [plain]="true" type="warning">\u8b66\u544a\u6309\u94ae</el-button>\n    <el-button [plain]="true" type="danger">\u5371\u9669\u6309\u94ae</el-button>\n    <el-button [plain]="true" type="info">\u4fe1\u606f\u6309\u94ae</el-button>\n  </span>\n</div>\n','\n<el-button type="primary" icon="edit"></el-button>\n<el-button type="primary" icon="share"></el-button>\n<el-button type="primary" icon="delete"></el-button>\n<el-button type="primary" icon="search">\u641c\u7d22</el-button>\n<el-button type="primary">\u4e0a\u4f20<i class="el-icon-upload el-icon--right"></i></el-button>\n','\n<el-button-group>\n  <el-button type="primary" icon="arrow-left">\u4e0a\u4e00\u9875</el-button>\n  <el-button type="primary">\u4e0b\u4e00\u9875<i class="el-icon-arrow-right el-icon--right"></i></el-button>\n</el-button-group>\n<el-button-group>\n  <el-button type="primary" icon="edit"></el-button>\n  <el-button type="primary" icon="share"></el-button>\n  <el-button type="primary" icon="delete"></el-button>\n</el-button-group>\n','\n<el-button type="primary" [loading]="true">\u52a0\u8f7d\u4e2d</el-button>\n','\n<el-button type="primary" size="large">\u5927\u578b\u6309\u94ae</el-button>\n<el-button type="primary">\u6b63\u5e38\u6309\u94ae</el-button>\n<el-button type="primary" size="small">\u5c0f\u578b\u6309\u94ae</el-button>\n<el-button type="primary" size="mini">\u8d85\u5c0f\u6309\u94ae</el-button>\n'],s=function n(){_classCallCheck(this,n),this.code=c,this.page={previous:{name:"Icon \u56fe\u6807",link:"/basic/icon"},next:{name:"Radio \u5355\u9009\u6846",link:"/form/radio"}}};s=Object(i.a)([Object(r.n)({selector:"ex-button",template:Object(i.b)(o("1HoQ")).default,encapsulation:r.nb.None,styles:[Object(i.b)(o("lALf")).default]})],s);var p=o("ZF+8"),v=['\n<span class="icons">\n  <i class="el-icon-edit"></i>\n  <el-icon name="share"></el-icon>\n  <el-icon name="delete"></el-icon>\n</span>\n<el-button type="primary" icon="search">Search</el-button>\n'],b=function(){function n(e){_classCallCheck(this,n),this.docsService=e,this.code=v,this.page={previous:{name:"Typography",link:"/basic/font"},next:{name:"Button",link:"/basic/button"}}}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.docsService.getIcons().subscribe((function(e){return n.icons=e}))}}]),n}();b.ctorParameters=function(){return[{type:p.a}]},b=Object(i.a)([Object(r.n)({selector:"ex-icon",template:Object(i.b)(o("F2jU")).default,encapsulation:r.nb.None,styles:[Object(i.b)(o("Ye44")).default]}),Object(i.c)("design:paramtypes",[p.a])],b);var u=['\n<div el-row>\n  <div el-col span="24"><div class="grid-content bg-purple-dark"></div></div>\n</div>\n<div el-row>\n  <div el-col span="12"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="12"><div class="grid-content bg-purple-light"></div></div>\n</div>\n<div el-row>\n  <div el-col span="8"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="8"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col span="8"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row>\n  <div el-col span="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col span="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="6"><div class="grid-content bg-purple-light"></div></div>\n</div>\n<div el-row>\n  <div el-col span="4"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="4"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col span="4"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="4"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col span="4"><div class="grid-content bg-purple"></div></div>\n  <div el-col span="4"><div class="grid-content bg-purple-light"></div></div>\n</div>\n','\n<div el-row gutter="20">\n  <div el-col [span]="6">\n    <div class="grid-content bg-purple"></div>\n  </div>\n  <div el-col span="6">\n    <div class="grid-content bg-purple"></div>\n  </div>\n  <div el-col span="6">\n    <div class="grid-content bg-purple"></div>\n  </div>\n  <div el-col span="6">\n    <div class="grid-content bg-purple"></div>\n  </div>\n</div>\n','\n<div el-row gutter="20">\n  <div el-col [span]="16"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="8"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row :gutter="20">\n  <div el-col [span]="8"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="8"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row :gutter="20">\n  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="16"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="4"><div class="grid-content bg-purple"></div></div>\n</div>\n','\n<div el-row type="flex" class="row-bg">\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row type="flex" class="row-bg" justify="center">\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row type="flex" class="row-bg" justify="end">\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row type="flex" class="row-bg" justify="space-between">\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n</div>\n<div el-row type="flex" class="row-bg" justify="space-around">\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple-light"></div></div>\n  <div el-col [span]="6"><div class="grid-content bg-purple"></div></div>\n</div>\n'],g=function n(){_classCallCheck(this,n),this.page={previous:{name:"\u66f4\u65b0\u65e5\u5fd7",link:"/guide/log"},next:{name:"Color \u8272\u5f69",link:"/basic/color"}},this.code=u};g=Object(i.a)([Object(r.n)({selector:"ex-layout",template:Object(i.b)(o("SWna")).default,encapsulation:r.nb.None,styles:[Object(i.b)(o("+2BB")).default]})],g);var h=function n(){_classCallCheck(this,n),this.page={previous:{name:"Layout \u5e03\u5c40",link:"/basic/layout"},next:{name:"Typography \u5b57\u4f53",link:"/basic/font"}}};h=Object(i.a)([Object(r.n)({selector:"ex-color",template:Object(i.b)(o("OdTp")).default,styles:[Object(i.b)(o("yw/w")).default]})],h);var m=function n(){_classCallCheck(this,n),this.page={previous:{name:"Color \u8272\u5f69",link:"/basic/color"},next:{name:"Button \u6309\u94ae",link:"/basic/button"}}};m=Object(i.a)([Object(r.n)({selector:"ex-font",template:Object(i.b)(o("Xs+B")).default,styles:[Object(i.b)(o("1CQT")).default]})],m);var x=['\n<div el-container direction="vertical" class="demo-box">\n  <div el-header>Header</div>\n  <div el-main>Main</div>\n</div>\n\n<div el-container direction="vertical" class="demo-box">\n  <div el-header>Header</div>\n  <div el-main>Main</div>\n  <div el-footer>Footer</div>\n</div>\n\n\n<div el-container direction="vertical" class="demo-box">\n  <div el-header>Header</div>\n  <div el-container>\n    <div el-aside width="200px">Aside</div>\n    <div el-main>Main</div>\n  </div>\n</div>\n\n<div el-container direction="vertical" class="demo-box">\n  <div el-header>Header</div>\n  <div el-container>\n    <div el-aside width="200px">Aside</div>\n    <div el-container direction="vertical">\n      <div el-main>Main</div>\n      <div el-footer>Footer</div>\n    </div>\n  </div>\n</div>\n\n<div el-container class="demo-box">\n  <div el-aside width="200px">Aside</div>\n  <div el-container direction="vertical">\n    <div el-header>Header</div>\n    <div el-main>Main</div>\n  </div>\n</div>\n\n<div el-container class="demo-box">\n  <div el-aside width="200px">Aside</div>\n  <div el-container direction="vertical">\n    <div el-header>Header</div>\n    <div el-main>Main</div>\n    <div el-footer>Footer</div>\n  </div>\n</div>\n'],f=function(){function n(){_classCallCheck(this,n),this.visible=!0}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;setTimeout((function(){n.visible=!1}),1e3)}}]),n}(),y=function n(){_classCallCheck(this,n),this.exClass=f,this.page={previous:{name:"\u5e03\u5c40",link:"/guide/log"},next:{name:"Color \u8272\u5f69",link:"/basic/color"}},this.code=x},k=[{path:"",component:a,children:[{path:"button",component:s},{path:"icon",component:b},{path:"layout",component:g},{path:"color",component:h},{path:"font",component:m},{path:"container",component:y=Object(i.a)([Object(r.n)({selector:"ex-container",template:Object(i.b)(o("wYsd")).default,encapsulation:r.nb.None,styles:[Object(i.b)(o("jabw")).default]})],y)}]}],w=function n(){_classCallCheck(this,n)};w=Object(i.a)([Object(r.L)({imports:[d.e.forChild(k)],exports:[d.e]})],w);var C=o("pz7V"),z=o("uvrf"),j=function n(){_classCallCheck(this,n)};j=Object(i.a)([Object(r.L)({declarations:[a,s,b,g,h,m,y],imports:[t.b,l.d,w,z.b,C.a],exports:[a],providers:[]})],j)},SWna:function(n,e,o){"use strict";o.r(e),e.default='<h2 i18n="@@layout-h2-1">Layout \u5e03\u5c40 </h2>\r\n<p i18n="@@layout-p-1">\u8fd9\u662f\u4e00\u4e2a <a href="https://angular.cn/guide/attribute-directives" target="_blank">\u5c5e\u6027\u578b\u6307\u4ee4</a>\uff0c\u5b83\u53ef\u4ee5\u88ab\u7528\u5728\u4efb\u4f55\u5143\u7d20\u4e0a\u3002</p>\r\n<p i18n="@@layout-p-2">\u901a\u8fc7\u57fa\u7840\u7684 24 \u5206\u680f\uff0c\u8fc5\u901f\u7b80\u4fbf\u5730\u521b\u5efa\u5e03\u5c40\u3002</p>\r\n\r\n<h3 i18n="@@layout-h3-1">\u57fa\u7840\u5e03\u5c40</h3>\r\n<p i18n="@@layout-p-3">\u4f7f\u7528\u5355\u4e00\u5206\u680f\u521b\u5efa\u57fa\u7840\u7684\u6805\u683c\u5e03\u5c40\u3002</p>\r\n\r\n<ex-demo [code]="code[0]"  notes="<code>el-row</code> \u4e0e <code>el-col</code> \u53ef\u4ee5\u88ab\u8f7b\u6613\u7684\u8fd0\u7528\u5728\u4efb\u4f55\u5143\u7d20\u4e0a\uff0c\u8fd9\u4e9b\u6307\u4ee4\u4f7f\u5143\u7d20\u5177\u5907\u989d\u5916\u7684\u80fd\u529b\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@layout-h3-2">\u5206\u680f\u95f4\u9694</h3>\r\n<p i18n="@@layout-p-4">\u5206\u680f\u4e4b\u95f4\u5b58\u5728\u95f4\u9694\u3002</p>\r\n<ex-demo [code]="code[1]"  notes="\u5f53\u5c5e\u6027\u7684\u503c\u56fa\u5b9a\u65f6\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165\u6a21\u677f\u5b57\u7b26\u4e32\u3002 \u5982 <code>gutter=&quot;20&quot;</code>">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@layout-h3-3">\u6df7\u5408\u5e03\u5c40</h3>\r\n<p i18n="@@layout-p-5">\u901a\u8fc7\u57fa\u7840\u7684 1/24 \u5206\u680f\u4efb\u610f\u6269\u5c55\u7ec4\u5408\u5f62\u6210\u8f83\u4e3a\u590d\u6742\u7684\u6df7\u5408\u5e03\u5c40\u3002</p>\r\n<ex-demo [code]="code[2]" >\r\n</ex-demo>\r\n\r\n<h3 i18n="@@layout-h3-4">\u5bf9\u9f50\u65b9\u5f0f</h3>\r\n<ex-demo [code]="code[3]"  notes="\u5c06 <code>type</code> \u5c5e\u6027\u8d4b\u503c\u4e3a \'flex\'\uff0c\u53ef\u4ee5\u542f\u7528 flex \u5e03\u5c40\uff0c\u5e76\u53ef\u901a\u8fc7 <code>justify</code> \u5c5e\u6027\u6765\u6307\u5b9a start, center, end, space-between, space-around \u5176\u4e2d\u7684\u503c\u6765\u5b9a\u4e49\u5b50\u5143\u7d20\u7684\u6392\u7248\u65b9\u5f0f\u3002">\r\n</ex-demo>\r\n\r\n<ex-document doc="row"></ex-document>\r\n<ex-document doc="col"></ex-document>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n\r\n\r\n'},WXEy:function(n,e,o){"use strict";o.r(e),e.default="<router-outlet></router-outlet>\r\n"},"Xs+B":function(n,e,o){"use strict";o.r(e),e.default='<h2 i18n="@@basic-font-h2-1">Typography \u5b57\u4f53</h2>\r\n<p>\u6211\u4eec\u5bf9\u5b57\u4f53\u8fdb\u884c\u7edf\u4e00\u89c4\u8303\uff0c\u529b\u6c42\u5728\u5404\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u90fd\u6709\u6700\u4f73\u5c55\u793a\u6548\u679c\u3002</p>\r\n\r\n<h3 i18n="@@basic-font-h3-1">\u4e2d\u6587\u5b57\u4f53</h3>\r\n\r\n<div class="demo-typo-box typo-PingFang">\r\n  \u548c\u7545\u60e0\u98ce\r\n  <div class="name">PingFang SC</div>\r\n</div>\r\n<div class="demo-typo-box typo-Hiragino">\r\n  \u548c\u7545\u60e0\u98ce\r\n  <div class="name">Hiragino Sans GB</div>\r\n</div>\r\n<div class="demo-typo-box typo-Microsoft">\r\n  \u548c\u7545\u60e0\u98ce\r\n  <div class="name">Microsoft YaHei</div>\r\n</div>\r\n\r\n<h3 i18n="@@basic-font-h3-2">\u82f1\u6587\uff0f\u6570\u5b57\u5b57\u4f53</h3>\r\n\r\n<div class="demo-typo-box typo-Helvetica-neue">\r\n  RGag\r\n  <div class="name">Helvetica Neue</div>\r\n</div>\r\n<div class="demo-typo-box typo-Helvetica">\r\n  RGag\r\n  <div class="name">Helvetica</div>\r\n</div>\r\n<div class="demo-typo-box typo-Arial">\r\n  RGag\r\n  <div class="name">Arial</div>\r\n</div>\r\n\r\n<h3 i18n="@@basic-font-h3-3">Font-family \u4ee3\u7801</h3>\r\n\r\n<pre>\r\n<code class="hljs language-css">\r\nfont-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\u5fae\u8f6f\u96c5\u9ed1",Arial,sans-serif;\r\n</code>\r\n</pre>\r\n\r\n<h3 i18n="@@basic-font-h3-4">\u5b57\u4f53\u4f7f\u7528\u89c4\u8303</h3>\r\n\r\n<table class="demo-typo-size">\r\n  <tbody>\r\n  <tr>\r\n    <td class="h1" i18n="@@basic-font-size-title-1">\u4e3b\u6807\u9898</td>\r\n    <td class="h1" i18n="@@basic-font-size-content-2">\u7528 Element \u5feb\u901f\u642d\u5efa\u9875\u9762</td>\r\n    <td class="color-dark-light">20px  Extra large</td>\r\n  </tr>\r\n  <tr>\r\n    <td class="h2" i18n="@@basic-font-size-title-2">\u6807\u9898</td>\r\n    <td class="h2" i18n="@@basic-font-size-content-2">\u7528 Element \u5feb\u901f\u642d\u5efa\u9875\u9762</td>\r\n    <td class="color-dark-light">18px large</td>\r\n  </tr>\r\n  <tr>\r\n    <td class="h3" i18n="@@basic-font-size-title-3">\u5c0f\u6807\u9898</td>\r\n    <td class="h3" i18n="@@basic-font-size-content-2">\u7528 Element \u5feb\u901f\u642d\u5efa\u9875\u9762</td>\r\n    <td class="color-dark-light">16px Medium</td>\r\n  </tr>\r\n  <tr>\r\n    <td class="text-regular" i18n="@@basic-font-size-title-4">\u6b63\u6587</td>\r\n    <td class="text-regular" i18n="@@basic-font-size-content-2">\u7528 Element \u5feb\u901f\u642d\u5efa\u9875\u9762</td>\r\n    <td class="color-dark-light">14px Small</td>\r\n  </tr>\r\n  <tr>\r\n    <td class="text-small" i18n="@@basic-font-size-title-5">\u6b63\u6587\uff08\u5c0f\uff09</td>\r\n    <td class="text-small" i18n="@@basic-font-size-content-2">\u7528 Element \u5feb\u901f\u642d\u5efa\u9875\u9762</td>\r\n    <td class="color-dark-light">13px Extra Small</td>\r\n  </tr>\r\n  <tr>\r\n    <td class="text-smaller" i18n="@@basic-font-size-title-6">\u8f85\u52a9\u6587\u5b57</td>\r\n    <td class="text-smaller" i18n="@@basic-font-size-content-2">\u7528 Element \u5feb\u901f\u642d\u5efa\u9875\u9762</td>\r\n    <td class="color-dark-light">12px Extra Extra Small</td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n'},Ye44:function(n,e,o){"use strict";o.r(e),e.default='.icons i {\n  color: #8492a6;\n  margin: 0 20px;\n  font-size: 1.5em;\n  vertical-align: middle;\n}\n\nbutton {\n  margin: 0 20px;\n}\n\n.icon-list {\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  border: solid 1px #eaeefb;\n  border-radius: 4px;\n}\n\n.icon-list li {\n  float: left;\n  width: 16.66%;\n  text-align: center;\n  height: 120px;\n  line-height: 120px;\n  color: #666;\n  font-size: 13px;\n  transition: color 0.15s linear;\n  border-right: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  margin-right: -1px;\n  margin-bottom: -1px;\n}\n\n.icon-list li span {\n  display: inline-block;\n  line-height: normal;\n  vertical-align: middle;\n  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;\n  color: #99a9bf;\n}\n\n.icon-list li i {\n  display: block;\n  font-size: 24px;\n  margin-bottom: 15px;\n  color: #8492a6;\n}\n\n.icon-list li:hover {\n  color: #5cb6ff;\n}'},jabw:function(n,e,o){"use strict";o.r(e),e.default=".demo-box {\n  margin-bottom: 25px;\n}\n.demo-box:last-child {\n  margin: 0;\n}\n.el-header, .el-footer {\n  background-color: #B3C0D1;\n  color: #333;\n  line-height: 60px;\n}\n.el-aside {\n  color: #333;\n}\n.el-header, .el-footer {\n  text-align: center;\n}\n.el-aside {\n  background-color: #D3DCE6;\n  text-align: center;\n  line-height: 200px;\n}\n.el-main {\n  background-color: #E9EEF3;\n  color: #333;\n  text-align: center;\n  line-height: 160px;\n}"},lALf:function(n,e,o){"use strict";o.r(e),e.default=".demo-box .el-row, .demo-button .el-row {\n  margin-bottom: 10px;\n}\n.demo-box .el-button + .el-button, .demo-button .el-button + .el-button {\n  margin-left: 10px;\n}\n.demo-box .el-button-group, .demo-button .el-button-group {\n  margin-bottom: 20px;\n}\n.demo-box .el-button-group .el-button + .el-button, .demo-button .el-button-group .el-button + .el-button {\n  margin-left: 0;\n}\n.demo-box .el-button-group + .el-button-group, .demo-button .el-button-group + .el-button-group {\n  margin-left: 10px;\n}\n.intro-block {\n  padding: 0;\n}\n.block {\n  padding: 30px 24px;\n  overflow: hidden;\n  border-bottom: solid 1px #EFF2F6;\n}\n.block:last-child {\n  border-bottom: none;\n}\n.demonstration {\n  font-size: 14px;\n  color: #8492a6;\n  line-height: 44px;\n}\n.wrapper {\n  float: right;\n  margin-right: 20px;\n}"},wYsd:function(n,e,o){"use strict";o.r(e),e.default='<h2 i18n="@@container-h2-1">Container \u5e03\u5c40\u5bb9\u5668</h2>\r\n<p i18n="@@container-p-1">\u7528\u4e8e\u5e03\u5c40\u7684\u6307\u4ee4\uff0c\u65b9\u4fbf\u5feb\u901f\u642d\u5efa\u9875\u9762\u7684\u57fa\u672c\u7ed3\u6784\uff1a</p>\r\n<p i18n="@@container-p-2"> <code>el-container</code>\uff1a\u5916\u5c42\u5bb9\u5668\u3002</p>\r\n<p><code>el-header</code> <span i18n="@@container-span-1">\u9876\u680f\u5bb9\u5668\u3002</span></p>\r\n<p><code>el-aside</code> <span i18n="@@container-span-2">\u4fa7\u8fb9\u680f\u5bb9\u5668\u3002</span></p>\r\n<p><code>el-main</code> <span i18n="@@container-span-3">\u4e3b\u8981\u533a\u57df\u5bb9\u5668\u3002</span></p>\r\n<p><code>el-footer</code> <span i18n="@@container-span-4">\u5e95\u680f\u5bb9\u5668\u3002</span></p>\r\n\r\n<div class="tip">\r\n  <p i18n="@@container-p-3">\u4ee5\u4e0a\u7ec4\u4ef6\u91c7\u7528\u4e86 flex \u5e03\u5c40\uff0c\u4f7f\u7528\u524d\u8bf7\u786e\u5b9a\u76ee\u6807\u6d4f\u89c8\u5668\u662f\u5426\u517c\u5bb9\u3002\r\n    \u6b64\u5916\uff0c\u5b50\u5143\u7d20\u53ea\u80fd\u662f\u540e\u56db\u8005\uff0c\u540e\u56db\u8005\u7684\u7236\u5143\u7d20\u4e5f\u53ea\u80fd\u662f <code>el-container</code>\u3002</p>\r\n</div>\r\n\r\n<h3 i18n="@@container-h3-1">\u5e38\u89c1\u9875\u9762\u5e03\u5c40</h3>\r\n<ex-demo [code]="code[0]" [class]="exClass"></ex-demo>\r\n\r\n\r\n<ex-document doc="container"></ex-document>\r\n<ex-document doc="header"></ex-document>\r\n<ex-document doc="aside"></ex-document>\r\n<ex-document doc="footer"></ex-document>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n\r\n\r\n'},"yw/w":function(n,e,o){"use strict";o.r(e),e.default=".demo-color-box {\n  border-radius: 4px;\n  padding: 20px;\n  height: 74px;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 14px;\n}\n.demo-color-box .value {\n  font-size: 12px;\n  opacity: 0.69;\n  line-height: 24px;\n}\n.demo-color-box-group .demo-color-box {\n  border-radius: 0;\n}\n.demo-color-box-group .demo-color-box:first-child {\n  border-radius: 4px 4px 0 0;\n}\n.demo-color-box-group .demo-color-box:last-child {\n  border-radius: 0 0 4px 4px;\n}\n.bg-blue-light {\n  background-color: #58b7ff;\n}\n.bg-blue, .bg-info {\n  background-color: #20a0ff;\n}\n.bg-blue-dark {\n  background-color: #1d8ce0;\n}\n.bg-success {\n  background-color: #13CE66;\n}\n.bg-warning {\n  background-color: #f7ba2a;\n}\n.bg-danger {\n  background-color: #ff4949;\n}\n.bg-black {\n  background-color: #1f2d3d;\n}\n.bg-black-light {\n  background-color: #324057;\n}\n.bg-black-lighter {\n  background-color: #475669;\n}\n.bg-silver {\n  background-color: #8492a6;\n}\n.bg-silver-light {\n  background-color: #99a9bf;\n}\n.bg-silver-lighter {\n  background-color: #c0ccda;\n}\n.bg-gray {\n  background-color: #d3dce6;\n}\n.bg-gray-light {\n  background-color: #e5e9f2;\n}\n.bg-gray-lighter {\n  background-color: #eff2f7;\n}\n.bg-white-dark {\n  background-color: #f9fafc;\n}\n.color-gray {\n  color: #5e6d82;\n}"}}]);