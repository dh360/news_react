(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){e.exports=a(270)},124:function(e,t,a){},125:function(e,t,a){},128:function(e,t,a){},136:function(e,t,a){},227:function(e,t,a){},242:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(13),i=a(15),r=a(14),s=a(16),l=a(6),o=a.n(l),u=a(1),m=a.n(u),h=(a(124),a(80),a(125),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"header"},m.a.createElement("div",{className:"title"},m.a.createElement("span",{className:"logo"}),"\xa0\u756a\u8304\u65b0\u95fb")))}}]),t}(u.Component)),g=(a(126),a(78)),b=a.n(g),f=(a(128),a(40)),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={data:a.props.msg,tagName:"http://news.leomeo.cn/image/".concat(a.props.tagName,".png"),category:{"\u5934\u6761":"hot","\u793e\u4f1a":"social","\u56fd\u5185":"china","\u5a31\u4e50":"fun","\u4f53\u80b2":"sports","\u519b\u4e8b":"army","\u79d1\u6280":"tech","\u8d22\u7ecf":"money","\u56fd\u9645":"international","\u65f6\u5c1a":"fashion"},url:"../../images/china.png"},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"checkOutTag",value:function(e){var t=this.state.category;if(t)return t[e]}},{key:"getTagUrl",value:function(e){console.log("\u56fe\u7247 \u6807\u7b7e\u7684\u79cd\u7c7b\u662f\uff1a\uff1a\uff1a",e);var t=this.checkOutTag(e);return"".concat("http://news.leomeo.cn/image/").concat(t).concat(".png")}},{key:"render",value:function(){return m.a.createElement(f.b,{to:"news_detail/".concat(this.state.data.url)},m.a.createElement("div",{className:"new_item",onClick:this.getNewsPage},m.a.createElement("div",{className:"innerBox"},m.a.createElement("img",{alt:"\u65b0\u95fb\u5c01\u9762",text:"\u65b0\u95fb\u5c01\u9762",className:"new_cover",src:"http://news.leomeo.cn/image/placeholder.png","data-src":"hello world"}),m.a.createElement("div",{className:"new_info"},m.a.createElement("p",{className:"new_title"},this.state.data.title),m.a.createElement("p",{className:"other"},m.a.createElement("img",{className:"tag_img",src:this.state.tagName,alt:""}),m.a.createElement("span",{className:"tag_name"}," ",this.state.data.category),m.a.createElement("span",{className:"new_time"},this.state.data.date))))))}}]),t}(u.Component),v=(a(136),a(113)),d=a.n(v),j=b.a.TabPane,y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).onChange=function(e){a.getNewListData(e),a.setState(function(t,n){return{activeKey:e,tagName:a.hanzi2Pinyin(e)}})},a.state={tags:["\u5934\u6761","\u5a31\u4e50","\u793e\u4f1a","\u56fd\u5185","\u56fd\u9645","\u4f53\u80b2","\u519b\u4e8b","\u79d1\u6280","\u8d22\u7ecf","\u65f6\u5c1a"],activeKey:"\u5934\u6761",tagName:"toutiao",newsData:{toutiao:[],yule:[],shehui:[],guonei:[],guoji:[],tiyu:[],junshi:[],keji:[],caijing:[],shishang:[]}},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"getNewListData",value:function(e){var t=this;if(e=(e=this.hanzi2Pinyin(e))||"toutiao",this.state.newsData[e]&&this.state.newsData[e].length<=0){var a="http://news.leomeo.cn/api/getNewsItemData?type=".concat(e);d.a.get(a).then(function(a){if(200===a.status){var n=t.state.newsData;n[e]=a.data.result.data,t.setState({newsData:n})}}).catch()}}},{key:"hanzi2Pinyin",value:function(e){var t="";switch(e){case"\u5a31\u4e50":t="yule";break;case"\u793e\u4f1a":t="shehui";break;case"\u56fd\u5185":t="guonei";break;case"\u56fd\u9645":t="guoji";break;case"\u4f53\u80b2":t="tiyu";break;case"\u519b\u4e8b":t="junshi";break;case"\u79d1\u6280":t="keji";break;case"\u8d22\u7ecf":t="caijing";break;case"\u65f6\u5c1a":t="shishang";break;default:t="toutiao"}return t}},{key:"componentWillMount",value:function(){this.getNewListData(this.state.activeKey)}},{key:"render",value:function(){var e=this,t=this.hanzi2Pinyin(this.state.activeKey),a=this.state.newsData[t],n=a.map(function(t,n){return a.length>0?m.a.createElement(p,{key:t.url,msg:t,tagName:e.state.tagName}):m.a.createElement("div",null)});return m.a.createElement("div",{className:"news_list"},m.a.createElement(b.a,{activeKey:this.state.activeKey,onTabClick:this.onChange},this.state.tags.map(function(e,t){return m.a.createElement(j,{tab:e,key:e}," ",n)}))," ")}}]),t}(u.Component),O=(a(227),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null," ")}}]),t}(u.Component)),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(y,null),m.a.createElement(O,null))}}]),t}(u.Component),w=(a(228),a(115)),E=a.n(w),N=(a(242),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"parseUrl",value:function(e){var t=e.length;return e.substr(13,t-1)}},{key:"ConcatUrl",value:function(e){var t=this.parseUrl(e);return"".concat("http://news.leomeo.cn/api/getData/?url=").concat(t)}},{key:"render",value:function(){return m.a.createElement("div",{className:"news_details"},m.a.createElement(f.b,{to:"/"},m.a.createElement(E.a,{onBack:function(){return null}})),m.a.createElement("iframe",{style:{border:0,width:"100%",height:630},title:"sdd",scrolling:"yes",src:this.ConcatUrl(this.props.location.pathname),frameBorder:"1"}))}}]),t}(u.Component)),C=a(32);a.d(t,"default",function(){return D});var D=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(f.a,null,m.a.createElement("div",null,m.a.createElement(h,null),m.a.createElement(C.a,{exact:!0,path:"/",component:k}),m.a.createElement(C.a,{path:"/news_detail/:url",component:N})))}}]),t}(u.Component);o.a.render(m.a.createElement(D,null),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.29a282f8.chunk.js.map