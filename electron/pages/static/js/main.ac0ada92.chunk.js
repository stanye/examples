(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(59)},30:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(19),r=n.n(o),c=(n(30),n(22)),i=n(2),s=n(3),u=n(5),p=n(4),d=n(6),m=n(23),f=n(7),h=n.n(f),v="https://sm.ms/api/upload",b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).getResponse=function(e){var t=e.data,a=t.code,l=Object(m.a)(t,["code"]);if("success"!==a)throw new Error(l.msg);return n.renderList(l.data)},n.upload=function(e){var t=new FormData;return t.append("smfile",e),t.append("ssl",!0),h.a.post(v,t).then(n.getResponse)},n.onChange=function(e){var t=e.target.files;n.uploadFiles(t)},n.uploadFiles=function(e){Array.prototype.slice.call(e).forEach(function(e){n.upload(e)})},n.clickUpload=function(){var e=n.uploader;e&&e.click()},n.saveUploader=function(e){n.uploader=e},n.renderList=function(e){(0,n.props.onFileUploadSuccess)(e)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{role:"button",tabIndex:0,className:"upload-button",onClick:this.clickUpload},l.a.createElement("input",{type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:this.onChange,ref:this.saveUploader}),l.a.createElement("button",{type:"button"},l.a.createElement("span",null,"+ \u70b9\u51fb\u4e0a\u4f20")))}}]),t}(a.Component),y=n(20),E=n.n(y),w=n(21),g=n.n(w),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).copy=function(e){E()(e)},n.delete=function(e){return h.a.get(e)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.fileList;return l.a.createElement("div",{className:"file-list"},t.map(function(t){var n=t.url,a=t.alt,o=t.hash,r=t.delete,c=t.filename,i=t.height,s=t.width;return l.a.createElement("div",{key:o,className:"file"},l.a.createElement("div",{className:"layout"},l.a.createElement("img",{alt:a,src:n})),l.a.createElement("div",{className:"layout"},l.a.createElement("p",null,"\u6587\u4ef6\u540d:",c),l.a.createElement("p",null,"\u5bbd:",s,"px"),l.a.createElement("p",null,"\u9ad8:",i,"px"),l.a.createElement("div",null,l.a.createElement("button",{className:"copy",type:"button",onClick:function(){return e.copy(n)}},"\u590d\u5236\u94fe\u63a5"),l.a.createElement("button",{className:"delete",type:"button",onClick:function(){return e.delete(r)}},"\u5220\u9664\u7167\u7247")),l.a.createElement("div",null,l.a.createElement(g.a,{className:"qrcode",value:n}))))}))}}]),t}(l.a.PureComponent),O=(n(58),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).destroy=function(){n.setState({destroyed:!0})},n.uploadFileList=function(e){var t=n.state.fileList;n.setState({fileList:[].concat(Object(c.a)(t),[e])})},n.state={destroyed:!1,fileList:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.fileList;return e.destroyed?null:l.a.createElement("div",{className:"App"},l.a.createElement(b,{onFileUploadSuccess:this.uploadFileList}),l.a.createElement(j,{fileList:t}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.ac0ada92.chunk.js.map