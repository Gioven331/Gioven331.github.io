(function(t){function e(e){for(var n,o,c=e[0],r=e[1],l=e[2],m=0,h=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==s[r]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09af":function(t,e,a){},"0a68":function(t,e,a){},"0f4a":function(t,e,a){},"128d":function(t,e,a){},2303:function(t,e,a){"use strict";var n=a("128d"),s=a.n(n);s.a},"2d008":function(t,e,a){"use strict";var n=a("0a68"),s=a.n(n);s.a},"3fff":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{ref:"firstLoad",staticClass:"loading"},[n("h2",[t._v("玩命加载中...")]),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("img",{attrs:{src:a("a5a4")}})]),n("navBar",{attrs:{pageNames:t.pageNames},on:{checkPage:t.checkPage}}),n("musicPlayer"),n("transition",{attrs:{name:"custom-classes-transition",mode:"out-in","enter-active-class":t.inActive,"leave-active-class":t.outActive}},[n("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"left-bar":!0,show:t.close}},[a("div",{staticClass:"nav"},[a("a",{attrs:{href:"http://www.github.com",target:"_blank"}},[t._v("BLOG")]),a("ul",{staticClass:"nav-items"},[a("li",{attrs:{index:"0"},on:{click:function(e){return t.pushBut(0)}}},[a("router-link",{attrs:{to:"/",exact:""}},[a("span",[a("i",{staticClass:"iconfont icon-home"})]),a("span",{staticClass:"describe"},[t._v("Home")])])],1),a("li",{attrs:{index:"1"},on:{click:function(e){return t.pushBut(1)}}},[a("router-link",{attrs:{to:"/aboutMe"}},[a("span",[a("i",{staticClass:"iconfont icon-icon31"})]),a("span",{staticClass:"describe"},[t._v("About")])])],1),a("li",{attrs:{index:"2"},on:{click:function(e){return t.pushBut(2)}}},[a("router-link",{attrs:{to:"/myProject"}},[a("span",[a("i",{staticClass:"iconfont icon-project"})]),a("span",{staticClass:"describe"},[t._v("Project")])])],1),a("li",{attrs:{index:"3"},on:{click:function(e){return t.pushBut(3)}}},[a("router-link",{attrs:{to:"/website"}},[a("span",[a("i",{staticClass:"iconfont icon-link"})]),a("span",{staticClass:"describe"},[t._v("Link")])])],1)])]),a("div",{staticClass:"show-but",on:{click:function(e){t.close=!t.close}}},[a("span",[a("i",{class:{iconfont:!0,"icon-more_1":t.close,"icon-baseline-close-px":!t.close}})])])])},c=[],r={data:function(){return{close:!0}},props:["pageNames"],methods:{pushBut:function(t){this.$emit("checkPage",this.pageNames[t])}}},l=r,u=(a("e6b8"),a("2877")),m=Object(u["a"])(l,o,c,!1,null,"a5de0fb2",null),h=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"player-slide":t.playerShow,wrapper:!0},on:{mouseenter:function(e){return e.stopPropagation(),t.playerAction(!0)},mouseleave:function(e){return e.stopPropagation(),t.playerAction(!1)}}},[a("audio",{ref:"musicPlayer",attrs:{src:"http://music.163.com/song/media/outer/url?id="+t.musicList[t.musicNum].id+".mp3"},on:{ended:t.autoPlay}}),a("div",{staticClass:"tool"},[a("div",{staticClass:"container"},[a("a",{attrs:{href:"javascript:;"},on:{click:t.lastMusic}},[a("i",{staticClass:"iconfont icon-shangyishou"})]),a("a",{attrs:{href:"javascript:;"},on:{click:t.playMusic}},[a("i",{class:{iconfont:!0,"icon-bofang":!t.musicStatus,"icon-zanting":t.musicStatus}})]),a("a",{attrs:{href:"javascript:;"},on:{click:t.nextMusic}},[a("i",{staticClass:"iconfont icon-xiayishou"})])])]),a("div",{staticClass:"player-show"},[a("span",[t._v(t._s(t.musicList[t.musicNum].name))])])])},d=[],f=[{id:"28907016",name:"Illusionary Daytime-Shirfine"},{id:"410518453",name:"The Truth That You Leave-Pianoboy高至豪"},{id:"1328045658",name:"洪荒之力"},{id:"1372402767",name:"DJ OKAWARI"},{id:"1427515199",name:"Melancholy Galaxy-CMJ"},{id:"443242",name:"Summer-久石譲"},{id:857896,name:"A Little Story-Valentin"}],v={data:function(){return{playerShow:!1,showTimmer:null,musicNum:0,musicList:f,musicStatus:!1}},methods:{playerAction:function(t){t?(this.playerShow=!0,this.showTimmer&&clearTimeout(this.showTimmer)):this.showTimmer=setTimeout(this.hidePlayer,500)},hidePlayer:function(){this.playerShow=!1},lastMusic:function(){var t=this.$refs.musicPlayer;t.ended||t.pause(),this.musicNum-=1,this.musicNum<0&&(this.musicNum=this.musicList.length-1),this.$nextTick((function(){t.play(),this.musicStatus=!0}))},playMusic:function(){var t=this.$refs.musicPlayer;t.play(),this.musicStatus?t.pause():t.play(),this.musicStatus=!this.musicStatus},nextMusic:function(){var t=this.$refs.musicPlayer;t.ended||t.pause(),this.musicNum+=1,this.musicNum>this.musicList.length-1&&(this.musicNum=0),this.$nextTick((function(){t.play(),this.musicStatus=!0}))},autoPlay:function(){this.nextMusic(),this.playMusic()}},mounted:function(){this.musicNum=Math.floor(Math.random()*this.musicList.length)}},_=v,b=(a("e2af"),Object(u["a"])(_,p,d,!1,null,"3b50eb99",null)),g=b.exports,w=["home","about","a-myProject","website"],k=["animate__bounceInDown","animate__flipInX","animate__lightSpeedInRight","animate__rotateInDownRight","animate__jackInTheBox","animate__lightSpeedInLeft","animate__rollIn","animate__zoomInDown","animate__zoomInRight","animate__zoomInUp","animate__slideInDown","animate__slideInRight"],y=["animate__bounceOutUp","animate__fadeOutTopRight","animate__rotateOut","animate__flipOutY","animate__lightSpeedOutRight","animate__rotateOutDownLeft","animate__rollOut","animate__zoomOutDown","animate__zoomOutRight","animate__zoomOutUp","animate__slideOutDown"],C={data:function(){return{pageNames:w,showPage:w[0],checkActive:{inAni:k[0],outAni:y[0],inLength:k.length,outLength:y.length}}},computed:{inActive:function(){return"animate__animated "+this.checkActive.inAni},outActive:function(){return"animate__animated "+this.checkActive.outAni}},components:{navBar:h,musicPlayer:g},created:function(){var t=this;window.onload=function(){t.$refs.firstLoad.style.display="none"}},methods:{checkPage:function(){var t=Math.floor(Math.random()*this.checkActive.inLength);this.checkActive.inAni=k[t],t=Math.floor(Math.random()*this.checkActive.outLength),this.checkActive.outAni=y[t]}}},j=C,S=(a("5c0b"),Object(u["a"])(j,s,i,!1,null,null,null)),L=S.exports,x=a("2f62");n["a"].use(x["a"]);var P=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),N=(a("3fff"),a("77ed")),A=a.n(N),O=a("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("h1",[t._v("hello")]),a("div",{staticClass:"show"},[t._v(" I am a "),a("span",[t._v(t._s(t.nickname))]),t._v("| ")]),t._m(0)]),a("div",{staticClass:"help"})])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"skill"},[a("li",[t._v("Vue")]),a("li"),a("li",[t._v("WebPack")]),a("li"),a("li",[t._v("Github")]),a("li")])}],T=(a("fb6a"),["Hiker.","Baking lover.","Engineer."]),$={data:function(){return{nameList:T,nickname:"",length:T.length,writeLoop:null,deleteLoop:null,waitTimer:null}},methods:{showName:function(){var t=0,e=0,a="",n=null,s=function(s){a=s.nameList[t],n=a.length,s.writeLoop=setInterval((function(){s.nickname=s.nickname+a[e++],e>n-1&&(clearInterval(s.writeLoop),s.waitTimer=setTimeout((function(){i(s),e=0}),1e3))}),200)};function i(e){e.deleteLoop=setInterval((function(){e.nickname=e.nickname.slice(0,-1),""==e.nickname&&(clearInterval(e.deleteLoop),t==e.length-1?t=0:t++,s(e))}),100)}return s}()},mounted:function(){this.showName(this)},beforeDestroy:function(){clearInterval(this.writeLoop),clearInterval(this.deleteLoop),clearTimeout(this.waitTimer)}},D=$,E=(a("2303"),Object(u["a"])(D,M,I,!1,null,"08fccdda",null)),B=E.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"wapper",staticClass:"container"},[t._m(0),t._m(1)])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("About Me")]),a("p",[t._v('"There are only two creatures," says a proverb, "who can surmount the pyramids the eagle and the snail."')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"describe"},[a("span",[t._v("My name is")]),a("div",{staticClass:"name-box"},[a("span",{staticClass:"myName",attrs:{"text-data":"Goven Chen"}},[t._v("Goven Chen")])]),a("span",{staticClass:"iconfont icon-zhuanyerencai"},[t._v("Designer / Developer")]),a("p",[t._v("I am 18 years old front-end developer from China")])]),a("div",{staticClass:"pic"},[a("div",{staticClass:"pic-header"}),a("div",{staticClass:"red-boll"}),a("div",{staticClass:"green-boll"}),a("div",{staticClass:"yellow-boll"})])])}],W={data:function(){return{}},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.wapper.classList.add("container-ani")}),0)},beforeDestroy:function(){this.$refs.wapper.classList.remove("container-ani")}},R=W,G=(a("2d008"),Object(u["a"])(R,J,z,!1,null,"22a87d76",null)),V=G.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._g({staticClass:"wrapper",on:{mousemove:function(e){t.mouseDown&&t.move(e)}}},{mousedown:t.slideStart,mouseup:t.slideStop}),[a("div",{staticClass:"container"},[a("ul",{staticClass:"project-list",style:{transform:t.transform}},t._l(t.projectList,(function(e,n){return a("li",{key:"project_"+n,staticClass:"project-item",class:{dark:t.hightLight&&t.hightLight!=n+1},on:{mouseenter:function(e){t.hightLight=n+1},mouseout:function(e){t.hightLight=!1}}},[a("div",{style:"backgroundPosition:"+t.bgPosition(n)+"%"},[a("a",{attrs:{href:"http://vip.chanke.xyz/v03017/chanke/myProject/"+e.urlName+"/index.html/",target:"_blank"}})]),a("span",[t._v(t._s(e.name))])])})),0)])])},U=[],Y={data:function(){return{xStart:null,mouseDown:!1,distance:0,rotationAngle:0,eachAngle:40,hightLight:!1,projectList:[{name:"作业管理系统",urlName:"eStudy"},{name:"小米商城",urlName:"mi"},{name:"音乐播放器",urlName:"musicplayer"},{name:"移动端相册",urlName:"mobileAlbum"},{name:"刮刮乐",urlName:"scratch"},{name:"百度图片的动画效果",urlName:"flash"},{name:"Bootstrap首页",urlName:"bootstrap"},{name:"CSS仿生ios时钟",urlName:"clock"},{name:"扫雷游戏(原生JS)",urlName:"Mine"}]}},methods:{slideStart:function(t){this.mouseDown=!0,this.xStart=t.clientX},move:function(t){var e=t.clientX;this.distance=e-this.xStart,this.xStart=t.clientX,this.rotationAngle+=this.distance/2e3*360},slideStop:function(){this.mouseDown=!1}},computed:{transform:function(){return"rotateY("+this.rotationAngle+"deg)"},bgPosition:function(){return function(t){var e=Math.abs((90-this.eachAngle*t+this.rotationAngle)%360);return e=e>180?360-e:e,e/180*100}}}},q=Y,H=(a("9d9d"),Object(u["a"])(q,X,U,!1,null,"5421a66a",null)),K=H.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wapper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[a("a",{attrs:{href:"https://www.webpackjs.com/",target:"_blank"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/webpack.png",alt:""}})]),a("div",[a("h3",[a("a",{attrs:{href:"https://www.webpackjs.com/",target:"_blank"}},[t._v(" Webpack "),a("br"),a("small",[t._v("是前端资源模块化管理和打包工具")])])]),a("p",[t._v("Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。")])])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[a("a",{attrs:{href:"https://vuejs.bootcss.com/guide/",target:"_blank"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/vuejs.png",alt:""}})]),a("div",[a("h3",[a("a",{attrs:{href:"https://vuejs.bootcss.com/guide/",target:"_blank"}},[t._v(" Vue.js "),a("br"),a("small",[t._v("中文文档。")])])]),a("p",[t._v("Vue.js - 是一套构建用户界面的渐进式框架。")])])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[a("a",{attrs:{href:"https://www.nodeapp.cn/",target:"_blank"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/nodejs.png",alt:""}})]),a("div",[a("h3",[a("a",{attrs:{href:"https://www.nodeapp.cn/",target:"_blank"}},[t._v(" Node.js "),a("br"),a("small",[t._v("中文文档 / 手册")])])]),a("p",[t._v("Webpack Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。")])])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[a("a",{attrs:{href:"https://www.npmjs.cn/",target:"_blank"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/npm.png",alt:""}})]),a("div",[a("h3",[a("a",{attrs:{href:"https://www.npmjs.cn/",target:"_blank"}},[t._v(" NPM "),a("br"),a("small",[t._v("中文文档")])])]),a("p",[t._v("Webpack NPM（node package manager）是 Node.js 世界的包管理器。NPM 可以让 JavaScript 开发者在共享代码、复用代码以及更新共享的代码上更加方便。")])])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[a("a",{attrs:{href:"https://www.quanzhanketang.com/",target:"_blank"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/w3schools.png",alt:""}})]),a("div",[a("h3",[a("a",{attrs:{href:"https://www.quanzhanketang.com/",target:"_blank"}},[t._v(" w3schools "),a("br"),a("small",[t._v("原版国内镜像")])])]),a("p",[t._v("Webpack w3schools.com 是最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧！")])])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[a("a",{attrs:{href:"https://www.sasscss.com",target:"_blank"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/sass.png",alt:""}})]),a("div",[a("h3",[a("a",{attrs:{href:"https://www.sasscss.com",target:"_blank"}},[t._v(" Sass "),a("br"),a("small",[t._v("最流行的 CSS 扩展语言解析器")])])]),a("p",[t._v("Webpack Sass 是一个成熟、稳定、强大的 CSS 扩展语言解析器。")])])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[a("a",{attrs:{href:"https://cn.eslint.org/",target:"_blank"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/eslint.png",alt:""}})]),a("div",[a("h3",[a("a",{attrs:{href:"https://cn.eslint.org/",target:"_blank"}},[t._v(" ESLint "),a("br"),a("small",[t._v("JavaScript 代码检查工具")])])]),a("p",[t._v("Webpack ESLint 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具。ESLint 能够帮你轻松写出高质量的 JavaScript 代码。")])])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[a("a",{attrs:{href:"https://www.babeljs.cn/",target:"_blank"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.31/dist/img/babeljs.png",alt:""}})]),a("div",[a("h3",[a("a",{attrs:{href:"https://www.babeljs.cn/",target:"_blank"}},[t._v(" Babel "),a("br"),a("small",[t._v("是一个 JavaScript 编译器。")])])]),a("p",[t._v("Webpack Babel 是一个 JavaScript 编译器。Babel 通过语法转换器支持最新版本的 JavaScript 语法。")])])])])])])}],Z={},tt=Z,et=(a("6485"),Object(u["a"])(tt,F,Q,!1,null,"0f1a7e13",null)),at=et.exports;n["a"].use(O["a"]);var nt=new O["a"]({routes:[{path:"/",component:B},{path:"/aboutMe",component:V},{path:"/myProject",component:K},{path:"/website",component:at}]}),st=a("ca95"),it=a.n(st);n["a"].use(it.a,{name:"v-touch"}),n["a"].use(A.a),n["a"].config.productionTip=!1,new n["a"]({store:P,router:nt,render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("c58b"),s=a.n(n);s.a},6485:function(t,e,a){"use strict";var n=a("09af"),s=a.n(n);s.a},"6baf":function(t,e,a){},"9d9d":function(t,e,a){"use strict";var n=a("9eb0"),s=a.n(n);s.a},"9eb0":function(t,e,a){},a5a4:function(t,e,a){t.exports=a.p+"img/dancingkitty.446100f3.gif"},c58b:function(t,e,a){},e2af:function(t,e,a){"use strict";var n=a("0f4a"),s=a.n(n);s.a},e6b8:function(t,e,a){"use strict";var n=a("6baf"),s=a.n(n);s.a}});
//# sourceMappingURL=app.4439607c.js.map