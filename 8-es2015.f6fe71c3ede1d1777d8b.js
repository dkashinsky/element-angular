(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1ci+":function(e,n,t){"use strict";t.r(n),n.default=".pagination-demo {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n\n.block {\n  padding: 30px 0;\n  text-align: center;\n  border-right: solid 1px #EFF2F6;\n  float: left;\n  width: 50%;\n  box-sizing: border-box;\n}\n\n.block:last-child {\n  border-right: none;\n}\n\n.demonstration {\n  display: block;\n  color: #8492a6;\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n\n.list {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  margin: 0;\n}\n\n.list > li {\n  list-style: none;\n  padding: 30px 24px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-bottom: 1px solid #eff2f6;\n}\n\n.list > li:last-child {\n  border: none;\n}\n\n.list > li > span {\n  flex: 1;\n  display: flex;\n  color: #8492a6;\n  font-size: 14px;\n  margin-right: 20px;\n  float: left;\n}\n\n.list > li .el-pagination {\n  width: 70%;\n  margin: 5px 20px 0 0;\n}"},"3ubf":function(e,n,t){"use strict";t.r(n),n.default='<h2 i18n="@@progress-h2-1">Progress \u8fdb\u5ea6\u6761</h2>\r\n<p>\u7528\u4e8e\u5c55\u793a\u64cd\u4f5c\u8fdb\u5ea6\uff0c\u544a\u77e5\u7528\u6237\u5f53\u524d\u72b6\u6001\u548c\u9884\u671f\u3002</p>\r\n\r\n<h3 i18n="@@progress-h3-1">\u7ebf\u5f62\u8fdb\u5ea6\u6761 \u2014 \u767e\u5206\u6bd4\u5916\u663e</h3>\r\n<ex-demo  [code]="code[0]" notes="<code>[percentage]</code> \u5c5e\u6027\u662f\u5fc5\u586b\u7684\uff0c\u8868\u793a\u8fdb\u5ea6\u6761\u5bf9\u5e94\u7684\u767e\u5206\u6bd4\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@progress-h3-2">\u7ebf\u5f62\u8fdb\u5ea6\u6761 \u2014 \u767e\u5206\u6bd4\u5185\u663e</h3>\r\n<p i18n="@@progress-p-1">\u767e\u5206\u6bd4\u4e0d\u5360\u7528\u989d\u5916\u63a7\u4ef6\uff0c\u9002\u7528\u4e8e\u6587\u4ef6\u4e0a\u4f20\u7b49\u573a\u666f\u3002</p>\r\n<ex-demo  [code]="code[1]" notes="\u53ef\u901a\u8fc7 <code>stroke-width</code>\r\n\u5c5e\u6027\u66f4\u6539\u8fdb\u5ea6\u6761\u7684\u9ad8\u5ea6\uff0c\u5e76\u53ef\u901a\u8fc7 <code>text-inside</code> \u5c5e\u6027\u6765\u5c06\u8fdb\u5ea6\u6761\u63cf\u8ff0\u7f6e\u4e8e\u8fdb\u5ea6\u6761\u5185\u90e8">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@progress-h3-3">\u73af\u5f62\u8fdb\u5ea6\u6761</h3>\r\n<ex-demo  [code]="code[2]" notes="\u53ef\u901a\u8fc7 <code>type</code>\r\n\u5c5e\u6027\u6765\u6307\u5b9a\u4f7f\u7528\u73af\u5f62\u8fdb\u5ea6\u6761">\r\n</ex-demo>\r\n\r\n\r\n<ex-document doc="progress"></ex-document>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n'},"4aZk":function(e,n,t){"use strict";t.r(n),n.default=".el-tag + .el-tag {\n  margin-left: 10px;\n}\n\n.button-new-tag {\n  margin-left: 10px;\n  height: 24px;\n  line-height: 22px;\n  padding: 0 auto;\n}\n\n.input-new-tag {\n  width: 78px;\n  margin-left: 10px;\n  vertical-align: bottom;\n}\n\n.input-new-tag .el-input__inner {\n  height: 24px;\n}"},"6f+J":function(e,n,t){"use strict";t.r(n),n.default='<h2 i18n="@@table-h2-1">Table \u8868\u683c</h2>\r\n<p i18n="@@table-p-1">\u7528\u4e8e\u5c55\u793a\u591a\u6761\u7ed3\u6784\u7c7b\u4f3c\u7684\u6570\u636e\uff0c\u53ef\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u3001\u7b5b\u9009\u3001\u5bf9\u6bd4\u6216\u5176\u4ed6\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002</p>\r\n\r\n<h3 i18n="@@table-h3-1">\u57fa\u7840\u7684\u8868\u683c\u5c55\u793a\u7528\u6cd5\u3002</h3>\r\n<p i18n="@@table-p-8">\u5982\u679c\u5b58\u5728 el-table-column \u672a\u8bbe\u7f6e\u5bbd\u5ea6\uff0c\u5c06\u4f1a\u81ea\u52a8\u8ba1\u7b97\u5bbd\u5ea6\uff0c\u540c\u65f6\u4e5f\u4e0d\u4f1a\u56fa\u5b9a\u663e\u793a\u8868\u683c\u7684\u603b\u5bbd\u5ea6\u3002</p>\r\n<ex-demo  [code]="code[0]" [class]="exClass" notes="\u5f53 <code>el-table</code>\r\n\u5143\u7d20\u4e2d\u6ce8\u5165 <code>model</code> \u5bf9\u8c61\u6570\u7ec4\u540e\uff0c\u5728 <code>el-table-column</code> \u4e2d\u7528 <code>model-key</code>\r\n\u5c5e\u6027\u6765\u5bf9\u5e94\u5bf9\u8c61\u4e2d\u7684\u952e\u540d\u5373\u53ef\u586b\u5165\u6570\u636e">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@table-h3-2">\u5e26\u6591\u9a6c\u7eb9\u8868\u683c</h3>\r\n<p i18n="@@table-p-2">\u4f7f\u7528\u5e26\u6591\u9a6c\u7eb9\u7684\u8868\u683c\uff0c\u53ef\u4ee5\u66f4\u5bb9\u6613\u533a\u5206\u51fa\u4e0d\u540c\u884c\u7684\u6570\u636e\u3002</p>\r\n<ex-demo  [code]="code[1]" [class]="exClass" notes="\u53ef\u4ee5\u4f7f\u7528 <code>stripe</code>\r\n\u6765\u6307\u5b9a\u662f\u5426\u5f00\u542f\u6591\u9a6c\u6761\u7eb9\u663e\u793a">\r\n</ex-demo>\r\n\r\n\r\n<h3 i18n="@@table-h3-3">\u5e26\u8fb9\u6846\u8868\u683c</h3>\r\n<ex-demo  [code]="code[2]" [class]="exClass" notes="\u53ef\u4ee5\u4f7f\u7528 <code>border</code>\r\n\u6765\u6307\u5b9a\u662f\u5426\u5f00\u542f\u8fb9\u6846">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@table-h3-4">\u5e26\u72b6\u6001\u8868\u683c</h3>\r\n<p i18n="@@table-p-3">\u53ef\u5c06\u8868\u683c\u5185\u5bb9 highlight \u663e\u793a\uff0c\u65b9\u4fbf\u533a\u5206\u300c\u6210\u529f\u3001\u4fe1\u606f\u3001\u8b66\u544a\u3001\u5371\u9669\u300d\u7b49\u5185\u5bb9\u3002</p>\r\n<ex-demo  [code]="code[3]" [class]="exClass" notes="\u5c5e\u6027 <code>row-class-name</code>\r\n\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\u6765\u6807\u8bc6\u66f4\u591a\u7684 css \u7c7b\u540d\u3002\u5f53\u7136\u4e0d\u8981\u5fd8\u4e86\u4e3a\u4f60\u7684\u81ea\u5b9a\u4e49\u7c7b\u540d\u8865\u5145\u6837\u5f0f\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@table-h3-5">\u56fa\u5b9a\u8868\u5934</h3>\r\n<p i18n="@@table-p-4">\u7eb5\u5411\u5185\u5bb9\u8fc7\u591a\u65f6\uff0c\u53ef\u9009\u62e9\u56fa\u5b9a\u8868\u5934\u3002</p>\r\n<ex-demo  [code]="code[4]" [class]="exClass" notes="\u6307\u5b9a\u9ad8\u5ea6\u53ef\u81ea\u52a8\u56fa\u5b9a\u8868\u5934">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@table-h3-6">\u586b\u5145\u5185\u5bb9</h3>\r\n<p i18n="@@table-p-5">\u53ef\u4ee5\u4e3a\u5217\u586b\u5145\u56fa\u5b9a\u5185\u5bb9\uff0c\u5e38\u7528\u4e8e\u64cd\u4f5c\u4e0e\u5220\u9664</p>\r\n<ex-demo  [code]="code[5]" [class]="exClass" notes="\u5728\u83b7\u53d6\u586b\u5145\u4e8b\u4ef6\u65f6\uff0c\u5982\u679c\u9700\u8981\r\n\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587\uff0c\u53ef\u4ee5\u7528 <code>let</code> \u8bed\u6cd5\u5c06 <code>scope</code> \u4f20\u5165\u53c2\u6570\u3002\u5b83\u5305\u542b\u88ab\u70b9\u51fb\u7684\u6309\u94ae\u5143\u7d20\u672c\u8eab\uff0c\r\n\u70b9\u51fb\u6240\u5728\u7684\u884c\uff0c\u7528\u6237\u6570\u636e\u4ee5\u53ca\u9500\u6bc1\u65b9\u6cd5\u7b49\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@table-h3-7">\u591a\u7ea7\u8868\u5934</h3>\r\n<p i18n="@@table-p-6">\u6570\u636e\u7ed3\u6784\u6bd4\u8f83\u590d\u6742\u7684\u65f6\u5019\uff0c\u53ef\u4f7f\u7528\u591a\u7ea7\u8868\u5934\u6765\u5c55\u73b0\u6570\u636e\u7684\u5c42\u6b21\u5173\u7cfb\u3002</p>\r\n<ex-demo  [code]="code[6]" [class]="exClass" notes="\u6ce8\u610f\u5355\u4e2a <code>el-table-column</code>\r\n\u4e0d\u8981\u518d\u6b21\u5d4c\u5957\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@table-h3-7">\u6e32\u67d3 HTML</h3>\r\n<p i18n="@@table-p-6">\u5f53\u6570\u636e\u4e3a HTML \u65f6\uff0c\u53ef\u4f7f\u7528\u6b64\u529f\u80fd\u5728 table \u4e2d\u6e32\u67d3 html \u7ed3\u6784\u3002</p>\r\n<ex-demo  [code]="code[7]" [class]="exClass" notes="\u8fd9\u91cc\u7684\u5730\u5740\u989c\u8272\u53d8\u5316\u662f\u56e0\u4e3a\u6570\u636e\u4e2d\u5730\u5740\u4e3a html \u7247\u6bb5">\r\n</ex-demo>\r\n\r\n\r\n<ex-document doc="table"></ex-document>\r\n<ex-document doc="table-column"></ex-document>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n'},DxiW:function(e,n,t){"use strict";t.r(n),n.default=".item {\n  margin-top: 10px;\n  margin-right: 40px;\n}"},"HO/L":function(e,n,t){"use strict";t.r(n),n.default='<h2 i18n="@@tree-h2-1">Tree \u6811\u5f62\u63a7\u4ef6</h2>\r\n<p i18n="@@tree-p-1">\u7528\u6e05\u6670\u7684\u5c42\u7ea7\u7ed3\u6784\u5c55\u793a\u4fe1\u606f\uff0c\u53ef\u5c55\u5f00\u6216\u6298\u53e0\u3002</p>\r\n\r\n<h3 i18n="@@tree-h3-1">\u57fa\u7840\u7528\u6cd5</h3>\r\n<p i18n="@@tree-p-2">\u57fa\u7840\u7684\u6811\u5f62\u7ed3\u6784\u5c55\u793a\u3002</p>\r\n<ex-demo [code]="code[0]" [class]="exClass"></ex-demo>\r\n\r\n<h3 i18n="@@tree-h3-2">\u53ef\u9009\u62e9</h3>\r\n<p i18n="@@tree-p-3">\u9002\u7528\u4e8e\u9700\u8981\u9009\u62e9\u5c42\u7ea7\u65f6\u4f7f\u7528\u3002</p>\r\n<ex-demo [code]="code[1]" [class]="exClass"></ex-demo>\r\n\r\n<h3 i18n="@@tree-h3-3">\u9ed8\u8ba4\u5c55\u5f00\u548c\u9ed8\u8ba4\u9009\u4e2d</h3>\r\n<p i18n="@@tree-p-4">\u53ef\u5c06 Tree \u7684\u67d0\u4e9b\u8282\u70b9\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u5c55\u5f00\u6216\u9ed8\u8ba4\u9009\u4e2d\u3002</p>\r\n<p i18n="@@tree-p-7">\u4f7f\u7528 <code>default-expanded-keys</code> \u6216 <code>default-checked-keys</code> \u5c5e\u6027\u6765\u8bbe\u7f6e\u9ed8\u8ba4\u5c55\u5f00\u548c\u9009\u4e2d\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u8fd9\u8fd9\u4e24\u4e2a\u8bbe\u7f6e\u9879\u8868\u793a\r\n\u6e90\u6570\u636e\u4e2d\u7684 id\uff0c\u5982\u679c model data \u6ca1\u6709 id \u5c5e\u6027\uff0c\u4f60\u9700\u8981\u4e3a\u6bcf\u4e00\u9879\u6570\u636e\u624b\u52a8\u589e\u52a0\u552f\u4e00\u7684 id\u3002</p>\r\n<ex-demo [code]="code[2]" [class]="exClass"></ex-demo>\r\n\r\n<h3 i18n="@@tree-h3-4">\u94a9\u5b50\u51fd\u6570</h3>\r\n<p i18n="@@tree-p-5">\u94a9\u5b50\u51fd\u6570\u53ef\u4ee5\u5e2e\u52a9\u4f60\u624b\u52a8\u8bbe\u7f6e\u6570\u636e</p>\r\n<ex-demo [code]="code[3]" [class]="exClass"></ex-demo>\r\n\r\n<h3 i18n="@@tree-h3-4">\u624b\u98ce\u7434\u6a21\u5f0f</h3>\r\n<p i18n="@@tree-p-6">\u5bf9\u4e8e\u540c\u4e00\u7ea7\u7684\u8282\u70b9\uff0c\u6bcf\u6b21\u53ea\u80fd\u5c55\u5f00\u4e00\u4e2a</p>\r\n<ex-demo [code]="code[4]" [class]="exClass"></ex-demo>\r\n\r\n<ex-document doc="tree"></ex-document>\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n'},MgIx:function(e,n,t){"use strict";t.r(n),t.d(n,"DataModule",(function(){return D}));var l=t("D57K"),a=t("2kYt"),o=t("EM62"),r=t("nIj0"),d=t("sEIs");let s=class{};s=Object(l.a)([Object(o.n)({selector:"ex-user-data",template:Object(l.b)(t("jV1/")).default})],s);var c=['\n<el-tag>\u6807\u7b7e\u4e00</el-tag>\n<el-tag type="gray">\u6807\u7b7e\u4e8c</el-tag>\n<el-tag type="primary">\u6807\u7b7e\u4e09</el-tag>\n<el-tag type="success">\u6807\u7b7e\u56db</el-tag>\n<el-tag type="warning">\u6807\u7b7e\u4e94</el-tag>\n<el-tag type="danger">\u6807\u7b7e\u516d</el-tag>\n\n',"\n<el-tag *ngFor=\"let tag of [\n{ name: '\u6807\u7b7e\u4e00', type: ''\n},{ name: '\u6807\u7b7e\u4e8c', type: 'gray'\n},{ name: '\u6807\u7b7e\u4e09', type: 'primary'\n},{ name: '\u6807\u7b7e\u56db', type: 'success'\n},{ name: '\u6807\u7b7e\u4e94', type: 'warning'\n},{ name: '\u6807\u7b7e\u516d', type: 'danger' }]\"\n  [closable]=\"true\"\n  [type]=\"tag.type\">\n  {{tag.name}}\n</el-tag>\n"];let i=class{constructor(){this.code=c,this.tags=["123","234234","0011"],this.page={previous:{name:"Form \u8868\u5355",link:"/form/form"},next:{name:"Progress \u8f93\u5165\u6846",link:"/data/progress"}}}handle(){this.tags.pop()}};i=Object(l.a)([Object(o.n)({selector:"ex-tag",template:Object(l.b)(t("QgiU")).default,encapsulation:o.nb.None,styles:[Object(l.b)(t("4aZk")).default]})],i);var p=['\n<el-progress [percentage]="0"></el-progress>\n<el-progress [percentage]="70"></el-progress>\n<el-progress [percentage]="100" status="success"></el-progress>\n<el-progress [percentage]="50" status="exception"></el-progress>\n','\n<el-progress [text-inside]="true" [stroke-width]="18" [percentage]="0"></el-progress>\n<el-progress [text-inside]="true" [stroke-width]="18" [percentage]="70"></el-progress>\n<el-progress [text-inside]="true" [stroke-width]="18" [percentage]="100" status="success"></el-progress>\n<el-progress [text-inside]="true" [stroke-width]="18" [percentage]="50" status="exception"></el-progress>\n','\n<el-progress type="circle" [percentage]="0"></el-progress>\n<el-progress type="circle" [percentage]="25"></el-progress>\n<el-progress type="circle" [percentage]="100" status="success"></el-progress>\n<el-progress type="circle" [percentage]="50" status="exception"></el-progress>\n'];let b=class{constructor(){this.code=p,this.page={previous:{name:"Tag \u6807\u7b7e",link:"/data/tag"},next:{name:"Badge \u6807\u8bb0",link:"/data/badge"}}}};b=Object(l.a)([Object(o.n)({selector:"ex-progress",template:Object(l.b)(t("3ubf")).default,encapsulation:o.nb.None,styles:[Object(l.b)(t("tvc9")).default]})],b);var m=['\n<el-badge [model]="12" class="item">\n  <el-button size="small">\u8bc4\u8bba</el-button>\n</el-badge>\n\n<el-badge [model]="3" class="item">\n  <el-button size="small">\u56de\u590d</el-button>\n</el-badge>\n','\n<el-badge [model]="200" [max]="99" class="item">\n  <el-button size="small">\u8bc4\u8bba</el-button>\n</el-badge>\n\n<el-badge [model]="100" [max]="10" class="item">\n  <el-button size="small">\u56de\u590d</el-button>\n</el-badge>\n','\n<el-badge model="new" class="item">\n  <el-button size="small">\u8bc4\u8bba</el-button>\n</el-badge>\n\n<el-badge model="hot" class="item">\n  <el-button size="small">\u56de\u590d</el-button>\n</el-badge>\n','\n<el-badge [is-dot]="true" class="item">\u6570\u636e\u67e5\u8be2</el-badge>\n\n<el-badge [is-dot]="true" class="item">\n  <el-button class="share-button" icon="share" type="primary"></el-button>\n</el-badge>\n'];let h=class{constructor(){this.code=m,this.tags=["123","234234","0011"],this.page={previous:{name:"Progress \u8fdb\u5ea6\u6761",link:"/data/progress"},next:{name:"Pagination \u5206\u9875",link:"/data/pagination"}}}handle(){this.tags.pop()}};h=Object(l.a)([Object(o.n)({selector:"ex-badge",template:Object(l.b)(t("zt7u")).default,encapsulation:o.nb.None,styles:[Object(l.b)(t("DxiW")).default]})],h);var u=['\n<div class="pagination-demo">\n  <div class="block">\n    <span class="demonstration">\u9875\u6570\u8f83\u5c11\u65f6\u7684\u6548\u679c</span>\n    <el-pagination [total]="50"\n    [layout]="[\'prev\', \'pager\', \'next\']">\n    </el-pagination>\n  </div>\n  <div class="block">\n    <span class="demonstration">\u5927\u4e8e 7 \u9875\u65f6\u7684\u6548\u679c</span>\n    <el-pagination [total]="200"\n    [layout]="[\'prev\', \'pager\', \'next\']">\n    </el-pagination>\n  </div>\n</div>\n','\n<el-pagination [total]="50"\n  [small]="true">\n</el-pagination>\n',"\n<ul class=\"list\">\n<li>\n<span>\u663e\u793a\u603b\u6570</span>\n<el-pagination [total]=\"50\"\n[layout]=\"['prev', 'pager', 'next', 'total']\">\n</el-pagination>\n</li>\n\n<li>\n  <span>\u8c03\u6574\u6bcf\u9875\u663e\u793a\u6761\u6570</span>\n  <el-pagination [total]=\"500\"\n    [page-size]=\"20\"\n    [layout]=\"['prev', 'pager', 'next', 'size']\">\n  </el-pagination>\n</li>\n\n<li>\n  <span>\u76f4\u63a5\u524d\u5f80</span>\n  <el-pagination [total]=\"500\"\n    [layout]=\"['prev', 'pager', 'next', 'jumper']\">\n  </el-pagination>\n</li>\n\n<li>\n  <span>\u5b8c\u6574\u529f\u80fd</span>\n  <el-pagination [total]=\"40\"\n    [layout]=\"['prev', 'pager', 'next', 'jumper', 'size', 'total']\">\n  </el-pagination>\n</li>\n</ul>\n\n\n"];let g=class{constructor(){this.code=u,this.tags=["123","234234","0011"],this.page={previous:{name:"Badge \u6807\u8bb0",link:"/data/badge"},next:{name:"Table \u8868\u683c",link:"/data/table"}}}handle(){this.tags.pop()}};g=Object(l.a)([Object(o.n)({selector:"ex-pagination",template:Object(l.b)(t("hxRP")).default,encapsulation:o.nb.None,styles:[Object(l.b)(t("1ci+")).default]})],g);var x=['\n<el-table [model]="tableData" [scroll-x]="true" center="all">\n  <el-table-column model-key="name" label="\u59d3\u540d" width="140">\n  </el-table-column>\n  <el-table-column model-key="date" label="\u65e5\u671f" width="140">\n  </el-table-column>\n  <el-table-column model-key="address" label="\u5730\u5740" width="140" [render-html]="true">\n  </el-table-column>\n   <el-table-column label="\u64cd\u4f5c" width="120">\n    <ng-template #slot let-scope="scope">\n      <el-button type="text" size="small" (click)="handle(scope)">\u5220\u9664</el-button>\n    </ng-template>\n  </el-table-column>\n   <el-table-column label="\u64cd\u4f5c" width="120">\n    <ng-template #slot let-scope="scope">\n      <el-button type="text" size="small" (click)="handle(scope)">\u5220\u9664</el-button>\n    </ng-template>\n  </el-table-column>\n</el-table>\n\n<script type="text">\n// in component\ntableData: any[] = [{\n  name: \'\u6c34\u7237\',\n  date: \'2017-08-19\',\n  address: \'\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04\',\n}, {\n  name: \'\u6c34\u7237\',\n  date: \'2017-08-20\',\n  address: \'\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04\',\n}, {\n  name: \'\u6c34\u7237\',\n  date: \'2017-08-21\',\n  address: \'\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04\',\n}, {\n  name: \'\u6c34\u7237\',\n  date: \'2017-08-22\',\n  address: \'\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1510 \u5f04\',\n}]\n<\/script>\n','\n<el-table [model]="tableData" [stripe]="true">\n  <el-table-column model-key="name" label="\u59d3\u540d" width="140">\n  </el-table-column>\n  <el-table-column model-key="date" label="\u65e5\u671f" width="140">\n  </el-table-column>\n  <el-table-column model-key="address" label="\u5730\u5740">\n  </el-table-column>\n</el-table>\n\n','\n<el-table [model]="tableData" [border]="true">\n  <el-table-column model-key="name" label="\u59d3\u540d" width="140">\n  </el-table-column>\n  <el-table-column model-key="date" label="\u65e5\u671f" width="140">\n  </el-table-column>\n  <el-table-column model-key="address" label="\u5730\u5740">\n  </el-table-column>\n</el-table>\n','\n<el-table [model]="tableData" [row-class-name]="rowClassNameFilter">\n  <el-table-column model-key="name" label="\u59d3\u540d" width="140">\n  </el-table-column>\n  <el-table-column model-key="date" label="\u65e5\u671f" width="140">\n  </el-table-column>\n  <el-table-column model-key="address" label="\u5730\u5740">\n  </el-table-column>\n</el-table>\n\n<script type="text">\n// in component\nrowClassNameFilter(row: any, index: number): string {\n  if (index === 1) {\n    return \'info-row\';\n  } else if (index === 3) {\n    return \'positive-row\';\n  }\n  return \'\'\n}\n<\/script>\n\n<style type="text">\n.el-table .info-row {\n  background: #c9e5f5;\n}\n\n.el-table .positive-row {\n  background: #e2f0e4;\n}\n</style>\n','\n<el-table [model]="tableDataMore" height="300px">\n  <el-table-column model-key="name" label="\u59d3\u540d" width="150">\n  </el-table-column>\n  <el-table-column model-key="date" label="\u65e5\u671f" width="150">\n  </el-table-column>\n  <el-table-column model-key="address" label="\u5730\u5740">\n  </el-table-column>\n</el-table>\n','\n<el-table [model]="tableData">\n  <el-table-column model-key="name" label="\u59d3\u540d" width="120">\n  </el-table-column>\n  <el-table-column model-key="date" label="\u65e5\u671f" width="120">\n  </el-table-column>\n  <el-table-column model-key="address" label="\u5730\u5740" >\n  </el-table-column>\n  <el-table-column label="\u64cd\u4f5c" width="120">\n    <ng-template #slot let-scope="scope">\n      <el-button type="text" size="small" (click)="handle(scope)">\u5220\u9664</el-button>\n    </ng-template>\n  </el-table-column>\n</el-table>\n\n<script type="text">\n// in component\nhandle(ref: any): void {\n  // console.log(ref.index)\n  // console.log(ref.rowData)\n  // console.log(ref.innerHTML)\n  ref.destroy()\n}\n<\/script>\n','\n<el-table [model]="tableDataMore" [border]="true">\n  <el-table-column model-key="name" label="\u59d3\u540d" width="150">\n  </el-table-column>\n  \n  <el-table-column label="\u5176\u4ed6\u4fe1\u606f">\n    <el-table-column model-key="date" label="\u65e5\u671f" width="150"></el-table-column>\n    <el-table-column model-key="address" label="\u5730\u5740"></el-table-column>\n  </el-table-column>\n  \n</el-table>\n\n','\n<el-table [model]="tableWithHTML" [scroll-x]="true">\n  <el-table-column model-key="name" label="\u59d3\u540d">\n  </el-table-column>\n  <el-table-column model-key="date" label="\u65e5\u671f">\n  </el-table-column>\n  <el-table-column model-key="address" label="\u5730\u5740" [render-html]="true">\n  </el-table-column>\n</el-table>\n\n<script type="text">\n// in Component\n\ntableData: any[] = [{\n  name: \'\u706b\u9505\',\n  date: 2017,\n  address: \'<span style="color: red;">\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04</span>\',\n}, {\n  name: \'\u91cd\u5e86\u5c0f\u9762\',\n  date: \'2017-08-20\',\n  address: \'<span style="color: red;">\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04</span>\',\n}, {\n  name: \'\u6d77\u86ce\u714e\',\n  date: \'2017-08-21\',\n  address: \'<span style="color: red;">\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04</span>\',\n}, {\n  name: \'\u69b4\u83b2\u9165\',\n  date: \'2017-08-22\',\n  address: \'<span style="color: red;">\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04</span>\',\n}]\n<\/script>\n\n'];let y=class{constructor(){this.tableData=[{name:"\u706b\u9505",date:2017,address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04"},{name:"\u91cd\u5e86\u5c0f\u9762",date:"2017-08-20",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04"},{name:"\u6d77\u86ce\u714e",date:"2017-08-21",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1518 \u5f04"},{name:"\u69b4\u83b2\u9165",date:"2017-08-22",address:"\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u91d1\u6c99\u6c5f\u8def 1510 \u5f04"}],this.tableDataMore=[],this.tableWithHTML=[],this.tableDataMore=this.tableData.concat(this.tableData),this.tableWithHTML=this.tableData.map(e=>Object.assign({},e,{address:`<span style="color: red;">${e.address}</span>`}))}rowClassNameFilter(e,n){return 1===n?"info-row":3===n?"positive-row":""}handle(e){e.destroy()}};y=Object(l.a)([Object(o.n)({selector:"ex-table-demo",template:" "}),Object(l.c)("design:paramtypes",[])],y);let f=class{constructor(){this.code=x,this.page={previous:{name:"Pagination \u5206\u9875",link:"/data/pagination"},next:{name:"Tree \u6811\u578b\u63a7\u4ef6",link:"/data/tree"}},this.exClass=y}};f=Object(l.a)([Object(o.n)({selector:"ex-table",template:Object(l.b)(t("6f+J")).default,encapsulation:o.nb.None,styles:[Object(l.b)(t("Yy0J")).default]})],f);var k=["\n<el-tree [model]=\"data\">\n</el-tree>\n\n<script type=\"text\">\n// in Component\ndata: any = [{\n  label: '\u4e00\u7ea7 1',\n  children: [{\n    label: '\u4e8c\u7ea7 1-1',\n    children: [{\n      label: '\u4e09\u7ea7 1-1-1',\n    }]\n  }]\n}, {\n  label: '\u4e00\u7ea7 2',\n  children: [{\n    label: '\u4e8c\u7ea7 2-1',\n  }]\n}, {\n  label: '\u4e00\u7ea7 3',\n}]\n<\/script>\n","\n<el-tree [model]=\"data\" [show-checkbox]=\"true\">\n</el-tree>\n\n<script type=\"text\">\n// in Component\ndata: any = [{\n  label: '\u4e00\u7ea7 1',\n  children: [{\n    label: '\u4e8c\u7ea7 1-1',\n    children: [{\n      label: '\u4e09\u7ea7 1-1-1',\n    }]\n  }]\n}, {\n  label: '\u4e00\u7ea7 2',\n  children: [{\n    label: '\u4e8c\u7ea7 2-1',\n  }]\n}, {\n  label: '\u4e00\u7ea7 3',\n}]\n<\/script>\n","\n<el-tree [model]=\"data2\" [show-checkbox]=\"true\">\n</el-tree>\n\n<script type=\"text\">\n// in Component\ndata2: any = [{\n  label: '\u4e00\u7ea7 1',\n  children: [{\n    label: '\u4e8c\u7ea7 1-1',\n    children: [{\n      label: '\u4e09\u7ea7 1-1-1',\n      checked: true,\n      expanded: true,\n    }]\n  }]\n}, {\n  label: '\u4e00\u7ea7 2',\n  children: [{\n    label: '\u4e8c\u7ea7 2-1',\n  }]\n}, {\n  label: '\u4e00\u7ea7 3',\n}]\n<\/script>\n","\n<el-tree [model]=\"data3\" [show-checkbox]=\"true\" #tree>\n</el-tree>\n\n<div class=\"tree-box\">\n<el-button (click)=\"findAllChecked()\">\u83b7\u53d6\u6240\u6709\u9009\u4e2d</el-button>\n<el-button (click)=\"removeAllChecked()\">\u6e05\u9664\u6240\u6709</el-button>\n<el-button (click)=\"updateItemChecked()\">\u66f4\u65b0\u9009\u4e2d</el-button>\n<el-button (click)=\"updateItemExpanded()\">\u66f4\u65b0\u5c55\u5f00</el-button>\n</div>\n<script type=\"text\">\n// in Component\ndata3: any = [{\n  label: '\u4e00\u7ea7 1',\n  id: '1.1.1',\n  children: [{\n    label: '\u4e8c\u7ea7 1-1',\n    id: '2.1.1',\n    children: [{\n      id: '3.1.1',\n      label: '\u4e09\u7ea7 1-1-1',\n      checked: true,\n      expanded: true,\n    }]\n  }]\n}, {\n  label: '\u4e00\u7ea7 2',\n  id: '1.2.1',\n  children: [{\n    id: '2.2.1',\n    label: '\u4e8c\u7ea7 2-1',\n  }]\n}, {\n  id: '1.3.1',\n  label: '\u4e00\u7ea7 3',\n}]\n\n@ViewChild('tree') tree: ElementRef\nhooks: UserSafeHooks\n\nfindAllChecked(): void {\n  console.log(this.hooks.findAllChecked())\n}\n\nremoveAllChecked(): void {\n  this.hooks.removeAllChecked()\n}\n\nupdateItemChecked(): void {\n  this.hooks.updateItemChecked('1.3.1')\n}\n\nupdateItemExpanded(): void {\n  this.hooks.updateItemExpanded('1.2.1')\n}\n\nngAfterViewInit(): void {\n  this.hooks = this.tree.userSafeHooks()\n}\n<\/script>\n","\n<el-tree [model]=\"data\" [accordion]=\"true\">\n</el-tree>\n\n<script type=\"text\">\n// in Component\ndata: any = [{\n  label: '\u4e00\u7ea7 1',\n  children: [{\n    label: '\u4e8c\u7ea7 1-1',\n    children: [{\n      label: '\u4e09\u7ea7 1-1-1',\n    }]\n  }]\n}, {\n  label: '\u4e00\u7ea7 2',\n  children: [{\n    label: '\u4e8c\u7ea7 2-1',\n  }]\n}, {\n  label: '\u4e00\u7ea7 3',\n}]\n<\/script>\n"];let v=class{constructor(){this.data=[{label:"\u4e00\u7ea7 1",id:"1.1.1",children:[{label:"\u4e8c\u7ea7 1-1",id:"2.1.1",children:[{id:"3.1.1",label:"\u4e09\u7ea7 1-1-1"}]}]},{label:"\u4e00\u7ea7 2",id:"1.2.1",children:[{id:"2.2.1",label:"\u4e8c\u7ea7 2-1"}]},{id:"1.3.1",label:"\u4e00\u7ea7 3"}],this.data2=[{label:"\u4e00\u7ea7 1",id:"1.1.1",expanded:!0,children:[{label:"\u4e8c\u7ea7 1-1",id:"2.1.1",children:[{id:"3.1.1",label:"\u4e09\u7ea7 1-1-1",checked:!0}]}]},{label:"\u4e00\u7ea7 2",id:"1.2.1",children:[{id:"2.2.1",label:"\u4e8c\u7ea7 2-1"}]},{id:"1.3.1",label:"\u4e00\u7ea7 3"}],this.data3=Object.assign([],this.data2)}findAllChecked(){console.log(this.hooks.findAllChecked())}removeAllChecked(){this.hooks.removeAllChecked()}updateItemChecked(){this.hooks.updateItemChecked("1.3.1")}updateItemExpanded(){this.hooks.updateItemExpanded("1.2.1")}ngAfterViewInit(){this.tree&&(this.hooks=this.tree.userSafeHooks())}};Object(l.a)([Object(o.lb)("tree"),Object(l.c)("design:type",o.v)],v.prototype,"tree",void 0),v=Object(l.a)([Object(o.u)()],v);let w=class{constructor(){this.exClass=v,this.code=k,this.page={previous:{name:"Table \u8868\u683c",link:"/data/table"},next:{name:"Loading \u52a0\u8f7d",link:"/notice/loading"}}}};w=Object(l.a)([Object(o.n)({selector:"ex-tree",template:Object(l.b)(t("HO/L")).default,encapsulation:o.nb.None,styles:[Object(l.b)(t("hzxy")).default]})],w);const j=[{path:"",component:s,children:[{path:"tag",component:i},{path:"progress",component:b},{path:"badge",component:h},{path:"pagination",component:g},{path:"table",component:f},{path:"tree",component:w}]}];let O=class{};O=Object(l.a)([Object(o.L)({imports:[d.e.forChild(j)],exports:[d.e]})],O);var C=t("uvrf"),z=t("pz7V");let D=class{};D=Object(l.a)([Object(o.L)({declarations:[s,i,b,h,g,f,y,w],imports:[a.b,r.d,C.b,z.a,O],exports:[s],providers:[]})],D)},QgiU:function(e,n,t){"use strict";t.r(n),n.default='<h2 i18n="@@tag-h2-1">Tag \u6807\u7b7e</h2>\r\n<p i18n="@@tag-p-1">\u7528\u4e8e\u6807\u8bb0\u548c\u9009\u62e9\u3002</p>\r\n\r\n<h3 i18n="@@tag-h3-1">\u57fa\u7840\u7528\u6cd5</h3>\r\n<ex-demo  [code]="code[0]" notes="\u7531 <code>type</code> \u5c5e\u6027\u6765\u9009\u62e9 tag \u7684\u7c7b\u578b\uff0c\r\n\u4e5f\u53ef\u4ee5\u901a\u8fc7 <code>color</code> \u5c5e\u6027\u6765\u81ea\u5b9a\u4e49\u80cc\u666f\u8272\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@tag-h3-2">\u53ef\u79fb\u9664\u6807\u7b7e</h3>\r\n<ex-demo  [code]="code[1]" notes="<code>[closable]</code> \u5c5e\u6027\u53ef\u4ee5\u5b9a\u4e49\u6807\u7b7e\u662f\u5426\u53ef\u79fb\u9664\u3002\r\n<code>(close)</code> \u5c5e\u6027\u53ef\u4ee5\u83b7\u5f97\u6bcf\u6b21\u79fb\u9664\u65f6\u7684\u4e8b\u4ef6\u3002">\r\n</ex-demo>\r\n\r\n<ex-document doc="tag"></ex-document>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n'},Yy0J:function(e,n,t){"use strict";t.r(n),n.default=".el-table .info-row {\n  background: #c9e5f5;\n}\n\n.el-table .positive-row {\n  background: #e2f0e4;\n}"},hxRP:function(e,n,t){"use strict";t.r(n),n.default='<h2 i18n="@@pagination-h2-1">Pagination \u5206\u9875</h2>\r\n<p>\u5f53\u6570\u636e\u91cf\u8fc7\u591a\u65f6\uff0c\u4f7f\u7528\u5206\u9875\u5206\u89e3\u6570\u636e\u3002</p>\r\n\r\n<h3 i18n="@@pagination-h3-1">\u57fa\u7840\u7528\u6cd5</h3>\r\n<p i18n="@@pagination-p-1">\u5c5e\u6027 <code>layout</code> \u5171\u6709 6 \u4e2a\u53c2\u6570\uff0c\u5206\u522b\u4ee3\u8868\u4e0d\u540c\u5b50\u7ec4\u4ef6 (\u529f\u80fd)\uff0c\u53ea\u6709\u58f0\u660e\u9700\u8981\u65f6\u8fd9\u4e9b\u5b50\u7ec4\u4ef6\u624d\u4f1a\u663e\u793a\u3002</p>\r\n<p i18n="@@pagination-p-2"> <code>prev</code>\u8868\u793a\u4e0a\u4e00\u9875\uff0c <code>next</code>\u4e3a\u4e0b\u4e00\u9875\uff0c <code>pager</code>\u8868\u793a\u9875\u7801\u5217\u8868\u3002</p>\r\n<p i18n="@@pagination-p-3">\u9664\u6b64\u4ee5\u5916\u8fd8\u63d0\u4f9b\u4e86 <code>jumper</code>\u548c <code>total</code>\uff0c <code>size</code>\u3002</p>\r\n<p i18n="@@pagination-p-4"> <code>jumper</code>\u8868\u793a\u8df3\u9875\u5143\u7d20\uff0c <code>total</code>\u8868\u793a\u663e\u793a\u9875\u7801\u603b\u6570\uff0c <code>size</code>\u7528\u4e8e\u8bbe\u7f6e\u6bcf\u9875\u663e\u793a\u7684\u9875\u7801\u6570\u91cf\u3002</p>\r\n<ex-demo  [code]="code[0]" notes="\u8bbe\u7f6e <code>layout</code>\uff0c\r\n\u8868\u793a\u9700\u8981\u663e\u793a\u7684\u5185\u5bb9\uff0c\u7528\u9017\u53f7\u5206\u9694\uff0c\u5e03\u5c40\u5143\u7d20\u4f1a\u4f9d\u6b21\u663e\u793a\u3002">\r\n</ex-demo>\r\n\r\n\r\n<h3 i18n="@@pagination-h3-2">\u5c0f\u578b\u5206\u9875</h3>\r\n<p i18n="@@pagination-p-5">\u5728\u7a7a\u95f4\u6709\u9650\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528\u7b80\u5355\u7684\u5c0f\u578b\u5206\u9875\u3002</p>\r\n<ex-demo  [code]="code[1]">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@pagination-h3-3">\u9644\u52a0\u529f\u80fd</h3>\r\n<p i18n="@@pagination-p-6">\u6839\u636e\u573a\u666f\u9700\u8981\uff0c\u53ef\u4ee5\u6dfb\u52a0\u5176\u4ed6\u529f\u80fd\u6a21\u5757\u3002</p>\r\n<ex-demo  [code]="code[2]" notes="\u5f53\u4f60\u6253\u5f00\u81ea\u7531\u63a7\u5236\u5206\u9875\u6570\u91cf\u53c2\u6570 <code>size</code>\r\n\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 <code>page-sizes</code> \u6765\u8c03\u6574\u5177\u4f53\u7684\u9009\u9879\uff0c\u8be6\u89c1\u6587\u672b\u7684\u5c5e\u6027\u8868\u3002">\r\n</ex-demo>\r\n\r\n\r\n<ex-document doc="pagination"></ex-document>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n'},hzxy:function(e,n,t){"use strict";t.r(n),n.default=".tree-box {\n  width: 100%;\n  height: auto;\n  margin-top: 30px;\n  display: flex;\n}\n.tree-box > div {\n  margin-right: 20px;\n}"},"jV1/":function(e,n,t){"use strict";t.r(n),n.default="<router-outlet></router-outlet>\r\n"},tvc9:function(e,n,t){"use strict";t.r(n),n.default=".el-progress--line {\n  margin-bottom: 15px;\n  width: 350px;\n}\n\n.el-progress--circle {\n  margin-right: 15px;\n}"},zt7u:function(e,n,t){"use strict";t.r(n),n.default='<h2 i18n="@@badge-h2-1">Badge \u6807\u8bb0</h2>\r\n<p i18n="@@badge-p-1">\u51fa\u73b0\u5728\u6309\u94ae\u3001\u56fe\u6807\u65c1\u7684\u6570\u5b57\u6216\u72b6\u6001\u6807\u8bb0\u3002</p>\r\n\r\n<h3 i18n="@@badge-h3-1">\u57fa\u7840\u7528\u6cd5</h3>\r\n<p i18n="@@badge-p-2">\u5c55\u793a\u65b0\u6d88\u606f\u6570\u91cf\u3002</p>\r\n<ex-demo  [code]="code[0]">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@badge-h3-2">\u6700\u5927\u503c</h3>\r\n<p i18n="@@badge-p-3">\u53ef\u81ea\u5b9a\u4e49\u6700\u5927\u503c\u3002</p>\r\n<ex-demo  [code]="code[1]" notes="\u7531 <code>max</code> \u5c5e\u6027\u5b9a\u4e49\uff0c\r\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u53ea\u6709\u5f53 <code>model</code> \u4e3a <code>number</code> \u65f6\uff0c\u5b83\u624d\u4f1a\u751f\u6548\u3002">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@badge-h3-3">\u81ea\u5b9a\u4e49\u5185\u5bb9</h3>\r\n<p i18n="@@badge-p-4">\u53ef\u4ee5\u663e\u793a\u6570\u5b57\u4ee5\u5916\u7684\u6587\u672c\u5185\u5bb9\u3002</p>\r\n<ex-demo  [code]="code[2]">\r\n</ex-demo>\r\n\r\n<h3 i18n="@@badge-h3-4">\u5c0f\u7ea2\u70b9</h3>\r\n<p i18n="@@badge-p-5">\u4ee5\u7ea2\u70b9\u7684\u5f62\u5f0f\u6807\u6ce8\u9700\u8981\u5173\u6ce8\u7684\u5185\u5bb9\u3002</p>\r\n<ex-demo  [code]="code[3]">\r\n</ex-demo>\r\n\r\n<ex-document doc="badge"></ex-document>\r\n\r\n<ex-footer-nav [page]="page"></ex-footer-nav>\r\n'}}]);