(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],p=0,u=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},s={app:0},r=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("64a9")},"0516":function(t,e,i){"use strict";i("9492")},"352c":function(t,e,i){},"4b89":function(t,e,i){"use strict";i("352c")},"565d":function(t,e,i){"use strict";i("f80b")},"56d7":function(t,e,i){"use strict";i.r(e);i("ffc1"),i("551c");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("main",[i("fade-transition",{attrs:{duration:250,mode:"out-in",origin:"center"}},[i("router-view")],1)],1)])},r=[],n=i("7c76"),o={components:{FadeTransition:n["a"]}},l=o,c=(i("034f"),i("2877")),d=Object(c["a"])(l,s,r,!1,null,null,null),p=d.exports,u=i("8c4f"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profile-page"},[i("ProfileCard"),i("section",{staticClass:"main section-skew"},[i("About"),i("Skills"),i("Projects")],1)],1)},h=[],_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about",attrs:{id:"about"}},[i("h2",{staticClass:"about__title"},[t._v("\n\t\tAbout me\n\t")]),i("p",{staticClass:"about__description"},[t._v("\n\t\tI am currently freelancing as a front-end developer, which brings me great pleasure. I’m not afraid\n\t\tof new challenges and am always ready to develop my professional and human qualities. Outside of work, I\n\t\tenjoy spending time with friends and pursuing a few hobbies. Check out my work and feel free to get in\n\t\ttouch with me, I’m always happy to help!\n\t")])])}],b={name:"About"},m=b,g=(i("565d"),Object(c["a"])(m,_,v,!1,null,"18d1808f",null)),w=g.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skills"},[i("h2",{staticClass:"skills__title"},[t._v("\n\t\t\tMost related skills\n\t\t")]),i("div",{staticClass:"skills__container skills__container_pb"},t._l(t.mainSkills,(function(e,a){return i("div",{key:a,staticClass:"skills__item"},[i("p",{staticClass:"skills__description font-weight-400"},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")]),i("b-progress",{attrs:{striped:e.striped,value:e.value,variant:e.variant}})],1)})),0)])},k=[],C={name:"Skills",data:function(){return{mainSkills:[{title:"HTML5 (Semantic Elements)",value:90,variant:"html",striped:"striped"},{title:"Pug (formerly Jade)",value:90,variant:"html",striped:"striped"},{title:"JavaScript (es5, es6, es7, es8)",value:70,variant:"js",striped:"striped"},{title:"CSS3 (CSS Grid / Flexbox)",value:90,variant:"css",striped:"striped"},{title:"BEM, SMACSS, OOCSS",value:90,variant:"css",striped:"striped"},{title:"SASS/SCSS",value:90,variant:"css",striped:"striped"},{title:"Vue.js (Vuex, Vue Router)",value:70,variant:"vue",striped:"striped"},{title:"Nuxt.js",value:50,variant:"vue",striped:"striped"},{title:"TypeScript",value:50,variant:"primary",striped:"striped"},{title:"Git, Github",value:70,variant:"dark",striped:"striped"}]}}},S=C,j=(i("9780"),Object(c["a"])(S,y,k,!1,null,"f9163222",null)),O=j.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"projects",attrs:{id:"projects"}},[i("h2",{staticClass:"projects__title"},[t._v("\n\t\tMy projects\n\t")]),i("div",{staticClass:"projects__container"},t._l(t.projects,(function(e,a){return i("b-card",{key:a,staticClass:"projects__card",staticStyle:{"max-width":"20rem"},attrs:{"img-src":e.img,title:e.title,"img-alt":"Image","img-top":"",tag:"article"}},[i("b-card-text",{staticClass:"font-weight-400"},[t._v("\n\t\t\t\t"+t._s(e.description)+"\n\t\t\t")]),e.subtitle?i("b-card-text",[i("p",{staticClass:"case__links-title font-weight-400",domProps:{innerHTML:t._s(e.subtitle)}}),i("div",{staticClass:"case__links"},t._l(e.links,(function(e,a){return i("a",{key:a,staticClass:"case__link",attrs:{href:e.link,target:"_blank"}},[t._v(" "+t._s(e.title)+",\n\t\t\t\t\t")])})),0)]):t._e(),i("div",{staticClass:"projects__footer"},[i("b-card-text",[i("div",{staticClass:"technologies"},[i("div",{staticClass:"technologies__container"},t._l(e.technologies,(function(e,a){return i("b-button",{key:a,staticClass:"technologies__btn",attrs:{variant:"outline-primary"}},[t._v(" "+t._s(e.title)+"\n\t\t\t\t\t\t\t")])})),1)])]),i("b-button",{staticClass:"projects__btn",attrs:{href:e.link,target:"_blank",variant:"primary"}},[t._v(" Visit Website\n\t\t\t\t")])],1)],1)})),1)])},P=[],A={name:"Projects",data:function(){return{projects:[{title:"Talkable",description:"Talkable — American product IT-company, the leading referral marketing platform.",link:"https://www.talkable.com",img:"img/talkable.jpg",subtitle:"List of pages i've made",links:[{title:"Homepage",link:"https://www.talkable.com"},{title:"Pricing",link:"https://www.talkable.com/pricing"},{title:"Referral Program",link:"https://www.talkable.com/referral_program"},{title:"Customer Success",link:"https://www.talkable.com/customer_success"},{title:"Case Studies",link:"https://www.talkable.com/case_study"},{title:"Whoop Case",link:"https://www.talkable.com/case_study/whoop"},{title:"Pura Vida Case",link:"https://www.talkable.com/case_study/pura_vida"},{title:"Rhinoshield Case",link:"https://www.talkable.com/case_study/rhinoshield"},{title:"Outdoor Case",link:"https://www.talkable.com/case_study/outdoor"},{title:"Soko glam Case",link:"https://www.talkable.com/case_study/soko_glam"},{title:"Apparel Case",link:"https://www.talkable.com/case_study/apparel"}],technologies:[{title:"Ruby on Rails"},{title:"CoffeeScript"},{title:"Haml"},{title:"OOCSS"},{title:"SASS"}]},{title:"Otaku Library",description:"Organize your own anime and manga list with this application. Inspired by MAL and Shikimori. Using the Jikan API (Unofficial MyAnimeList API).",subtitle:"Also available as a showcase at <a href='https://jikan.moe/showcase'>jikan.moe/showcase</a>.",link:"https://otaku-library.one",img:"img/otaku-library.jpg",technologies:[{title:"Vue.js"},{title:"Vuex"},{title:"Vue-Router"},{title:"JavaScript"},{title:"Pug"},{title:"BEM"},{title:"SASS"},{title:"Materialize"},{title:"Firebase"},{title:"Jikan-API"}]},{title:"iApple",description:"This website is an online store where you can order any accessory for your Apple device through Nova Poshta or regular delivery.",link:"https://iapple.in.ua",img:"img/iapple.jpg",technologies:[{title:"WordPress"},{title:"JavaScript"},{title:"PHP"},{title:"Vanilla CSS"}]},{title:"Marta Deco",description:"Landing page written for a textile salon.",link:"https://marta-deco.com",img:"img/marta-deco.jpg",technologies:[{title:"CoffeeScript"},{title:"Pug"},{title:"Bootstrap"},{title:"JavaScript"},{title:"JQuery"},{title:"SASS"},{title:"Webpack"}]},{title:"Old Portfolio",description:"My old portfolio site, where you can find both pet and production projects.",link:"https://kremeshnoi.github.io/outdated",img:"img/oldportfolio.jpg",technologies:[{title:"Vanilla CSS"},{title:"JQuery"},{title:"Bootstrap"},{title:"JavaScript"},{title:"Gulp"}]}]}}},M=A,E=(i("4b89"),Object(c["a"])(M,x,P,!1,null,"00d20819",null)),B=E.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("card",{staticClass:"card-profile profile",attrs:{"no-body":"",shadow:""}},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-lg-3 order-lg-2"},[i("div",{staticClass:"card-profile-image profile__image"},[i("a",{attrs:{href:"/#"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"img/photo.jpg",expression:"'img/photo.jpg'"}],staticClass:"profile__circle rounded-circle"})])])])]),i("div",{staticClass:"text-center"},[i("h1",{staticClass:"profile__title"},[t._v(" Alexander Kremeshnoi\n\t\t")]),i("div",{staticClass:"profile__description font-italic"},[i("i",{staticClass:"ni location_pin"}),t._v(" 27 y.o. from Kyiv, Ukraine ")]),i("div",{staticClass:"profile__description"},[i("i",{staticClass:"ni business_briefcase-24"}),t._v(" Front-end developer ")]),i("div",{staticClass:"profile__description row justify-content-center"},[i("div",{staticClass:"col-lg-9"},[i("a",{attrs:{href:"#about"}},[t._v(" About ")]),t._v(" |\n\t\t\t\t"),i("a",{attrs:{href:"#projects"}},[t._v(" Projects ")])])]),i("div",{staticClass:"profile__description profile__soc"},[i("a",{staticClass:"profile__link",attrs:{target:"_blank",href:"https://github.com/kremeshnoi/"}},[i("font-awesome-icon",{staticClass:"profile__icon",attrs:{icon:["fab","github"]}})],1),i("a",{staticClass:"profile__link",attrs:{target:"_blank",href:"https://www.linkedin.com/in/alexander-kremeshnoi/"}},[i("font-awesome-icon",{staticClass:"profile__icon",attrs:{icon:["fab","linkedin-in"]}})],1)])]),i("div",{staticClass:"border-top text-center"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"profile__footer col-lg-9"},[i("a",{attrs:{href:"https://kremeshnoi.github.io/docs/cv.pdf",target:"_blank"}},[t._v("Show CV")])])])])])},T=[],V=function(){var t,e,i,a=this,s=a.$createElement,r=a._self._c||s;return r("div",{staticClass:"card",class:[{"card-lift--hover":a.hover},{shadow:a.shadow},(t={},t["shadow-"+a.shadowSize]=a.shadowSize,t),(e={},e["bg-gradient-"+a.gradient]=a.gradient,e),(i={},i["bg-"+a.type]=a.type,i)]},[a.$slots.header?r("div",{staticClass:"card-header",class:a.headerClasses},[a._t("header")],2):a._e(),a.noBody?a._e():r("div",{staticClass:"card-body",class:a.bodyClasses},[a._t("default")],2),a.noBody?a._t("default"):a._e(),a.$slots.footer?r("div",{staticClass:"card-footer",class:a.footerClasses},[a._t("footer")],2):a._e()],2)},$=[],I={name:"card",props:{type:{type:String,description:"Card type"},gradient:{type:String,description:"Card background gradient type (warning,danger etc)"},hover:{type:Boolean,description:"Whether card should move on hover"},shadow:{type:Boolean,description:"Whether card has shadow"},shadowSize:{type:String,description:"Card shadow size"},noBody:{type:Boolean,default:!1,description:"Whether card should have wrapper body class"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},z=I,L=Object(c["a"])(z,V,$,!1,null,null,null),W=L.exports,F={name:"ProfileCard",components:{Card:W}},N=F,R=(i("0516"),Object(c["a"])(N,J,T,!1,null,"2dd0d1cc",null)),H=R.exports,G={components:{About:w,Skills:O,Projects:B,ProfileCard:H},data:function(){return{striped:!0}}},U=G,q=(i("6346"),Object(c["a"])(U,f,h,!1,null,null,null)),K=q.exports;a["default"].use(u["a"]);var Q=new u["a"]({mode:"history",linkExactActiveClass:"active",routes:[{path:"/",name:"profile",components:{default:K}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),D=i("9483");Object(D["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var X=i("caf9"),Y={install:function(t){t.use(X["a"])}},Z=i("5f5b"),tt=i("ecee"),et=i("f2d1"),it=i("ad3d");i("b97a"),i("b0e6");tt["c"].add(et["a"]),tt["c"].add(et["b"]),a["default"].component("font-awesome-icon",it["a"]),a["default"].config.productionTip=!1,a["default"].use(Y),a["default"].use(Z["a"]),new a["default"]({router:Q,render:function(t){return t(p)}}).$mount("#app")},6346:function(t,e,i){"use strict";i("eb7b")},"64a9":function(t,e,i){},"8d78":function(t,e,i){},9492:function(t,e,i){},9780:function(t,e,i){"use strict";i("8d78")},b0e6:function(t,e,i){},b97a:function(t,e,i){},eb7b:function(t,e,i){},f80b:function(t,e,i){}});
//# sourceMappingURL=app.66d7a3bc.js.map