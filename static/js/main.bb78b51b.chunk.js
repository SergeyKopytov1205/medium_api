(this.webpackJsonpmedium_api=this.webpackJsonpmedium_api||[]).push([[0],{10:function(e,t,c){e.exports={content:"Profile_content__3KMQX",about:"Profile_about__GXweq",image:"Profile_image__LIP-K",title:"Profile_title__a9DV3",bio:"Profile_bio__BgGXW",list:"Profile_list__FIX3U",link:"Profile_link__sv_tt",active:"Profile_active__383bU"}},13:function(e,t,c){e.exports={header:"Navbar_header__3z-mT",logo:"Navbar_logo__26DkY",logoContent:"Navbar_logoContent__2nvRF",logoTitle:"Navbar_logoTitle__2Aklm",logoNumber:"Navbar_logoNumber__ixnbr",menu:"Navbar_menu__15-I_",list:"Navbar_list__e8_v-",item:"Navbar_item__2w1vi",link:"Navbar_link__2bHRo",active:"Navbar_active__1MZS9"}},14:function(e,t,c){e.exports={content:"Article_content__QQZ1P",info:"Article_info__qCRpb",image:"Article_image__1arCu",pic:"Article_pic__2aPC3",link:"Article_link__1yXyF",created:"Article_created__37PgA",edit:"Article_edit__wIUsd",delete:"Article_delete__2xXjQ",article:"Article_article__24N8w",title:"Article_title__W9KfS",body:"Article_body__q80-P"}},16:function(e,t,c){e.exports={content:"PopularTags_content__29f3A",title:"PopularTags_title__it-yk",list:"PopularTags_list__3QBhS",item:"PopularTags_item__2JXXy",link:"PopularTags_link__3Ufo_"}},17:function(e,t,c){e.exports={input:"FormControl_input__263ca",textarea:"FormControl_textarea__3b0uz",error:"FormControl_error__3qGxU",button:"FormControl_button__1E8a0"}},20:function(e,t,c){e.exports={list:"FeedToggler_list__1uNjR",item:"FeedToggler_item__2oEOk",link:"FeedToggler_link__1r9wx",active:"FeedToggler_active__1fv29"}},21:function(e,t,c){e.exports={list:"Pagination_list__3AAGI",item:"Pagination_item__3WFEM",link:"Pagination_link__1k6ww",active:"Pagination_active__1H6cS"}},22:function(e,t,c){e.exports={container:"Authentication_container__2HEqx",title:"Authentication_title__Hxz6C",form:"Authentication_form__3RlMI",link:"Authentication_link__1Q8Yk"}},23:function(e,t,c){e.exports={content:"Settings_content__1c_C1",title:"Settings_title__iOBGr",form:"Settings_form__3RMxt",logout:"Settings_logout__oR5tH"}},26:function(e,t,c){e.exports={like:"AddToFavorited_like__1ZgmC",icon:"AddToFavorited_icon__2BMFx",favor:"AddToFavorited_favor__16A-q"}},31:function(e,t,c){e.exports={container:"Loading_container__1dGwO",spinner:"Loading_spinner__nwvG3",s7:"Loading_s7__2QCE9"}},32:function(e,t,c){e.exports={content:"ArticleForm_content__2RXni",form:"ArticleForm_form__GicjR"}},33:function(e,t,c){e.exports={footer:"Footer_footer__2EyNL",desc:"Footer_desc__J1UQj"}},43:function(e,t,c){e.exports={container:"App_container__1MQN3"}},52:function(e,t,c){},6:function(e,t,c){e.exports={content:"PageFeed_content__kxaRg",toggler:"PageFeed_toggler__3cUyU",feed:"PageFeed_feed__1zzgx",pagination:"PageFeed_pagination__3oSyA",tags:"PageFeed_tags__1XrZI"}},7:function(e,t,c){e.exports={wrapper:"Feed_wrapper__tuPsz",profile:"Feed_profile__38NDj",image:"Feed_image__WBE7b",pic:"Feed_pic__1AsP0",about:"Feed_about__fJrOr",author:"Feed_author__2eG3x",time:"Feed_time__PqsP7",article:"Feed_article__3LP_5",title:"Feed_title__3nLby",title_link:"Feed_title_link__2u2W4",content:"Feed_content__p1YbH",info:"Feed_info__skkWr",more:"Feed_more__1lznE",tag_item:"Feed_tag_item__2A05X"}},82:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(42),s=c.n(n),r=(c(52),c(3)),i=c(8),o=c(0),l={isLoading:!1,isLoggedIn:null,currentUser:null},j=function(e,t){switch(t.type){case"LOADING":return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case"SET_AUTHORIZED":return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,isLoggedIn:!0,currentUser:t.payload});case"SET_UNAUTHORIZED":return Object(i.a)(Object(i.a)({},e),{},{isLoggedIn:!1});case"LOGOUT":return Object(i.a)(Object(i.a)({},l),{},{isLoggedIn:!1});default:return e}},b=Object(a.createContext)(),u=function(e){var t=e.children,c=Object(a.useReducer)(j,l);return Object(o.jsx)(b.Provider,{value:c,children:t})},d=c(43),O=c.n(d),m=c(2),x=c(44),_=c.n(x),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=Object(a.useState)((function(){return localStorage.getItem(e)||t})),n=Object(m.a)(c,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){localStorage.setItem(e,s)}),[s,e]),[s,r]},g=function(e){var t=Object(a.useState)(null),c=Object(m.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!1),o=Object(m.a)(r,2),l=o[0],j=o[1],b=Object(a.useState)(null),u=Object(m.a)(b,2),d=u[0],O=u[1],x=Object(a.useState)({}),g=Object(m.a)(x,2),h=g[0],p=g[1],v=f("token"),N=Object(m.a)(v,1)[0],S=Object(a.useCallback)((function(e){j(!0),p(e)}),[]);return Object(a.useEffect)((function(){var t=!1,c=Object(i.a)(Object(i.a)({},h),{headers:{authorization:N?"Token ".concat(N):""}});if(l)return _()("https://api.realworld.io/api"+e,c).then((function(e){t||(s(e.data),j(!1))})).catch((function(e){t||(O(e.response.data),j(!1))})),function(){t=!0}}),[l,h,e,N]),[{response:n,isLoading:l,error:d},S]},h=function(e){var t=e.children,c=g("/user"),n=Object(m.a)(c,2),s=n[0].response,r=n[1],i=f("token"),o=Object(m.a)(i,1)[0],l=Object(a.useContext)(b),j=Object(m.a)(l,2)[1];return Object(a.useEffect)((function(){o?(r(),j({type:"LOADING"})):j({type:"SET_UNAUTHORIZED"})}),[o,r,j]),Object(a.useEffect)((function(){s&&j({type:"SET_AUTHORIZED",payload:s.user})}),[s,j]),t},p=c(13),v=c.n(p),N=function(e){var t=e.link,c=e.text,a=e.handleToggle;return Object(o.jsx)("li",{onClick:a,className:v.a.item,children:Object(o.jsx)(r.c,{exact:!0,className:v.a.link,activeClassName:v.a.active,to:t,children:c})})},S=function(){var e=Object(a.useContext)(b),t=Object(m.a)(e,1)[0],c=Object(a.useState)(!1),n=Object(m.a)(c,2),s=n[0],i=n[1],l=function(){i(!s)};return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("header",{className:v.a.header,children:[Object(o.jsx)(r.b,{to:"/",className:v.a.logo,children:Object(o.jsxs)("div",{className:v.a.logoContent,children:[Object(o.jsx)("div",{className:v.a.logoNumber,children:"#2"}),Object(o.jsx)("div",{className:v.a.logoTitle,children:"training project"})]})}),Object(o.jsx)("div",{onClick:l,className:"".concat(v.a.menu," ").concat(s?v.a.active:"")}),Object(o.jsxs)("nav",{className:"".concat(v.a.list," ").concat(s?v.a.active:""),children:[Object(o.jsx)(N,{handleToggle:l,link:"/",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),!1===t.isLoggedIn&&Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(N,{handleToggle:l,link:"/login",text:"\u0412\u043e\u0439\u0442\u0438"}),Object(o.jsx)(N,{handleToggle:l,link:"/register",text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),!0===t.isLoggedIn&&Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(N,{handleToggle:l,link:"/editor",text:"\u041d\u043e\u0432\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f"}),Object(o.jsx)(N,{handleToggle:l,link:"/settings",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(o.jsx)(N,{handleToggle:l,link:"/profile/".concat(t.currentUser.username),text:t.currentUser.username})]})]})]})})},C=c(4),k=c(5),y=c(14),E=c.n(y),F=c(47),L=c(15),P=function(e){var t=Object(L.parse)(e),c=t.page?Number(t.page):1;return{currentPage:c,offset:5*(c-1)}},T=function(e){var t=new Date(e);return t.toLocaleString("ru-RU",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"})},A=c(31),U=c.n(A),w=function(){return Object(o.jsx)("div",{className:U.a.container,children:Object(o.jsx)("div",{className:U.a.spinner})})},I=function(e){var t=e.match.params.slug,c="/articles/".concat(t),n=g(c),s=Object(m.a)(n,2),i=s[0],l=i.response,j=i.isLoading,u=i.error,d=s[1],O=g(c),x=Object(m.a)(O,2)[1],_=Object(a.useContext)(b),f=Object(m.a)(_,1)[0],h=Object(a.useState)(!1),p=Object(m.a)(h,2),v=p[0],N=p[1];Object(k.useEffect)((function(){d()}),[d]);return v?Object(o.jsx)(C.a,{to:"/"}):j||!l?Object(o.jsx)("div",{className:E.a.container,children:Object(o.jsx)(w,{})}):u||0===Object.keys(l.article).length?Object(o.jsx)("div",{children:"Some error"}):Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:E.a.content,children:[Object(o.jsxs)("div",{className:E.a.info,children:[Object(o.jsx)("div",{className:E.a.image,children:Object(o.jsx)(r.b,{to:"/profile/".concat(l.article.author.username),children:Object(o.jsx)("img",{className:E.a.pic,src:l.article.author.image,alt:""})})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(r.b,{className:E.a.link,to:"/profile/".concat(l.article.author.username),children:l.article.author.username})}),Object(o.jsxs)("div",{className:E.a.created,children:["\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e: ",Object(o.jsx)("div",{children:T(l.article.createdAt)})]})]}),!(!l||!f.isLoggedIn)&&f.currentUser.username===l.article.author.username&&Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(r.b,{className:E.a.edit,to:"/article/".concat(t,"/edit"),children:"Edit article"}),Object(o.jsx)("button",{className:E.a.delete,onClick:function(){N(!0),x({method:"DELETE"})},children:"Delete article"})]})]}),Object(o.jsxs)("article",{className:E.a.article,children:[Object(o.jsx)("h1",{className:E.a.title,children:l.article.title}),Object(o.jsx)("div",{className:E.a.body,children:l.article.body})]})]})})},D=c(7),R=c.n(D),G=c(26),H=c.n(G),z=function(e){var t=e.isFavorited,c=e.favoritesCount,a=e.articleSlug,n="/articles/".concat(a,"/favorite"),s=g(n),r=Object(m.a)(s,2),i=r[0],l=i.response,j=i.isLoading,b=r[1],u=l?l.article.favoritesCount:c,d=l?l.article.favorited:t;return Object(o.jsxs)("button",{className:"".concat(H.a.like," ").concat(d?H.a.favor:""),disabled:j,onClick:function(e){e.preventDefault(),b({method:d?"DELETE":"POST"})},children:[Object(o.jsx)("svg",{className:H.a.icon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",children:Object(o.jsx)("path",{d:"M 23 3 C 22.448 3 22 3.448 22 4 L 22 11.75 L 18 22 L 18 43 C 18.413 44.164 19.696 45 21 45 L 40 45 C 42.206 45 44 43.206 44 41 C 44 40.177 43.7395 39.41825 43.3125 38.78125 C 44.8695 38.23425 46 36.742 46 35 C 46 34.021 45.6475 33.1325 45.0625 32.4375 C 46.2235 31.7365 47 30.452 47 29 C 47 28.021 46.6475 27.1325 46.0625 26.4375 C 47.2235 25.7365 48 24.453 48 23 C 48 20.794 46.206 19 44 19 L 29.375 19 C 29.984 17.07 31 13.616 31 12 C 31 8.236 28.24125 3 25.53125 3 L 23 3 z M 3 19 C 2.713 19 2.44 19.12875 2.25 19.34375 C 2.06 19.55875 1.965 19.84 2 20.125 L 5 44.125 C 5.063 44.625 5.496 45 6 45 L 15 45 C 15.552 45 16 44.553 16 44 L 16 20 C 16 19.448 15.552 19 15 19 L 3 19 z M 11.5 38 C 12.328 38 13 38.672 13 39.5 C 13 40.328 12.328 41 11.5 41 C 10.672 41 10 40.328 10 39.5 C 10 38.672 10.672 38 11.5 38 z"})}),u]})},M=function(e){var t=e.articles;return Object(o.jsx)(a.Fragment,{children:t.map((function(e,t){return Object(o.jsxs)("section",{className:R.a.wrapper,children:[Object(o.jsxs)("div",{className:R.a.profile,children:[Object(o.jsx)("div",{className:R.a.image,children:Object(o.jsx)(r.b,{to:"/profile/".concat(e.author.username),children:Object(o.jsx)("img",{className:R.a.pic,src:e.author.image,alt:""})})}),Object(o.jsxs)("div",{className:R.a.about,children:[Object(o.jsx)(r.b,{className:R.a.author,to:"/profile/".concat(e.author.username),children:e.author.username}),Object(o.jsxs)("div",{className:R.a.time,children:["\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e: ",Object(o.jsx)("div",{children:T(e.createdAt)})]})]}),Object(o.jsx)(z,{isFavorited:e.favorited,articleSlug:e.slug,favoritesCount:e.favoritesCount})]}),Object(o.jsxs)("div",{className:R.a.article,children:[Object(o.jsx)("h2",{className:R.a.title,children:Object(o.jsx)(r.b,{className:R.a.title_link,to:"/article/".concat(e.slug),children:e.title})}),Object(o.jsx)("p",{className:R.a.content,children:e.description}),Object(o.jsxs)("div",{className:R.a.info,children:[Object(o.jsx)(r.b,{to:"/article/".concat(e.slug),className:R.a.more,children:"\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u0435\u0435..."}),Object(o.jsx)("ul",{className:R.a.tag_list,children:e.tagList.map((function(e,t){return e.length>0?Object(o.jsx)("li",{className:R.a.tag_item,children:e},t):null}))})]})]})]},t)}))})},X=c(20),Z=c.n(X),Q=function(e){var t=e.url,c=e.text,a=e.tagName;return Object(o.jsx)("li",{className:Z.a.item,children:Object(o.jsxs)(r.c,{activeClassName:Z.a.active,className:Z.a.link,to:t,exact:!0,children:[a&&Object(o.jsx)("span",{children:"#"}),c]})})},q=function(e){var t=e.tagName,c=Object(k.useContext)(b),a=Object(m.a)(c,1)[0];return Object(o.jsxs)("ul",{className:Z.a.list,children:[a.isLoggedIn&&Object(o.jsx)(Q,{url:"/feed",text:"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"}),Object(o.jsx)(Q,{url:"/",text:"\u0412\u0441\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),t&&Object(o.jsx)(Q,{url:"/tags/".concat(t),text:t,tagName:t})]})},B=c(21),W=c.n(B),J=function(e){var t=e.page,c=e.currentPage,a=e.url,n=t===c?W.a.active:"";return Object(o.jsx)(r.b,{className:W.a.link,to:"".concat(a,"?page=").concat(t),children:Object(o.jsx)("li",{className:"".concat(n," ").concat(W.a.item),children:t})})},V=function(e){var t,c,a=e.total,n=e.currentPage,s=e.url,r=e.limit,i=Math.ceil(a/r),l=(t=1,c=i,Object(F.a)(Array(c).keys()).map((function(e){return e+t})));return l.length<=1?null:Object(o.jsx)("ul",{className:W.a.list,children:l.map((function(e){return Object(o.jsx)(J,{page:e,currentPage:n,url:s},e)}))})},K=c(16),Y=c.n(K),$=function(){var e=g("/tags"),t=Object(m.a)(e,2),c=t[0],a=c.response,n=c.isLoading,s=c.error,i=t[1];return Object(k.useEffect)((function(){i()}),[i]),n||!a?Object(o.jsx)(w,{}):s?Object(o.jsx)("div",{children:"Some errors"}):Object(o.jsxs)("aside",{className:Y.a.content,children:[Object(o.jsx)("h4",{className:Y.a.title,children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u0435\u0433\u0438"}),Object(o.jsxs)("ul",{className:Y.a.list,children:[0===a.tags.length&&Object(o.jsx)("div",{children:"Not popular tags"}),a.tags.map((function(e,t){return Object(o.jsx)("li",{className:Y.a.item,children:Object(o.jsx)(r.b,{className:Y.a.link,to:"/tags/".concat(e),children:e})},t)}))]})]})},ee=c(6),te=c.n(ee),ce=function(e){var t=e.location,c=e.match,n=P(t.search),s=n.currentPage,r=n.offset,i=Object(L.stringify)({limit:5,offset:r}),l="/articles?".concat(i),j=g(l),b=Object(m.a)(j,2),u=b[0],d=u.response,O=u.isLoading,x=u.error,_=b[1],f=c.url;return Object(a.useEffect)((function(){_()}),[_,s]),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:te.a.content,children:[Object(o.jsx)("div",{className:te.a.toggler,children:Object(o.jsx)(q,{})}),O&&Object(o.jsx)(w,{}),x&&Object(o.jsx)("div",{children:"Some error"}),!O&&d&&Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("div",{className:te.a.feed,children:Object(o.jsx)(M,{articles:d.articles})}),Object(o.jsx)("div",{className:te.a.pagination,children:Object(o.jsx)(V,{total:d.articlesCount,limit:5,url:f,currentPage:s})}),Object(o.jsx)("div",{className:te.a.tags,children:Object(o.jsx)($,{})})]})]})})},ae=function(e){var t=e.location,c=e.match,n=c.params.slug,s=P(t.search),r=s.currentPage,i=s.offset,l=Object(L.stringify)({limit:5,offset:i,tag:n}),j="/articles?".concat(l),b=g(j),u=Object(m.a)(b,2),d=u[0],O=d.response,x=d.isLoading,_=d.error,f=u[1],h=c.url;return Object(a.useEffect)((function(){f()}),[f,r,n]),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:te.a.content,children:[Object(o.jsx)("div",{className:te.a.toggler,children:Object(o.jsx)(q,{tagName:n})}),x&&Object(o.jsx)(w,{}),_&&Object(o.jsx)("div",{children:"Some error"}),!x&&O&&Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("div",{className:te.a.feed,children:Object(o.jsx)(M,{articles:O.articles})}),Object(o.jsx)("div",{className:te.a.pagination,children:Object(o.jsx)(V,{total:O.articlesCount,limit:5,url:h,currentPage:r})}),Object(o.jsx)("div",{className:te.a.tags,children:Object(o.jsx)($,{})})]})]})})},ne=function(e){var t=e.location,c=e.match,n=P(t.search),s=n.currentPage,r=n.offset,i=Object(L.stringify)({limit:5,offset:r}),l="/articles/feed?".concat(i),j=g(l),b=Object(m.a)(j,2),u=b[0],d=u.response,O=u.isLoading,x=u.error,_=b[1],f=c.url;return Object(a.useEffect)((function(){_()}),[_,s]),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:te.a.content,children:[Object(o.jsx)("div",{className:te.a.toggler,children:Object(o.jsx)(q,{})}),O&&Object(o.jsx)(w,{}),x&&Object(o.jsx)("div",{children:"Some error"}),!O&&d&&Object(o.jsxs)(k.Fragment,{children:[Object(o.jsxs)("div",{className:te.a.feed,children:[0===d.articlesCount&&Object(o.jsx)("div",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"}),Object(o.jsx)(M,{articles:d.articles})]}),Object(o.jsx)("div",{className:te.a.pagination,children:Object(o.jsx)(V,{total:d.articlesCount,limit:5,url:f,currentPage:s})}),Object(o.jsx)("div",{className:te.a.tags,children:Object(o.jsx)($,{})})]})]})})},se=c(22),re=c.n(se),ie=c(17),oe=c.n(ie),le=function(e){var t=e.type,c=e.name,n=e.value,s=e.setState,r=e.autoComplete,i=e.error,l=Object(a.useState)(c),j=Object(m.a)(l,2),b=j[0],u=j[1],d=Object(a.useState)(!1),O=Object(m.a)(d,2),x=O[0],_=O[1];return Object(a.useEffect)((function(){if(_(!1),i){var e=i.errors;Object.keys(e).forEach((function(t){switch(t){case c:u(e[t].join(", ")),_(!0),s("");break;case"email or password":u("".concat(t," ").concat(e[t].join(", "))),_(!0),s("")}}))}}),[i,c,s]),Object(o.jsx)("input",{className:x?"".concat(oe.a.input," ").concat(oe.a.error):"".concat(oe.a.input),autoComplete:r,type:t,placeholder:b,value:n,onChange:function(e){return s(e.target.value)}})},je=function(e){var t=e.placeholder,c=e.value,a=e.setState;return Object(o.jsx)("textarea",{className:oe.a.textarea,placeholder:t,cols:"30",rows:"3",value:c,onChange:function(e){return a(e.target.value)}})},be=function(e){var t=e.isDisabled,c=e.text;return Object(o.jsx)("button",{className:oe.a.button,disabled:t,children:c})},ue=function(e){var t="/login"===e.location.pathname,c=t?"\u0412\u0445\u043e\u0434":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",n=t?"/register":"/login",s=t?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?":"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d?",i=t?"/users/login":"/users",l=Object(a.useState)(""),j=Object(m.a)(l,2),u=j[0],d=j[1],O=Object(a.useState)(""),x=Object(m.a)(O,2),_=x[0],h=x[1],p=Object(a.useState)(""),v=Object(m.a)(p,2),N=v[0],S=v[1],k=Object(a.useState)(!1),y=Object(m.a)(k,2),E=y[0],F=y[1],L=f("token"),P=Object(m.a)(L,2)[1],T=g(i),A=Object(m.a)(T,2),U=A[0],w=U.response,I=U.isLoading,D=U.error,R=A[1],G=Object(a.useContext)(b),H=Object(m.a)(G,2)[1];Object(a.useEffect)((function(){w&&(P(w.user.token),F(!0),H({type:"SET_AUTHORIZED",payload:w.user}))}),[w,P,H]);return E?Object(o.jsx)(C.a,{to:"/"}):Object(o.jsxs)("div",{className:re.a.container,children:[Object(o.jsx)("h1",{className:re.a.title,children:c}),Object(o.jsxs)("form",{className:re.a.form,onSubmit:function(e){e.preventDefault(),R({method:"post",data:{user:t?{email:u,password:_}:{email:u,password:_,username:N}}})},children:[Object(o.jsx)(r.b,{className:re.a.link,to:n,children:s}),!t&&Object(o.jsx)(le,{error:D,type:"text",name:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",value:N,setState:S}),Object(o.jsx)(le,{error:D,type:"text",name:"E-mail",value:u,setState:d}),Object(o.jsx)(le,{error:D,type:"password",name:"\u041f\u0430\u0440\u043e\u043b\u044c",value:_,setState:h,autoComplete:"off"}),Object(o.jsx)(be,{isDisabled:I,text:"\u0412\u043e\u0439\u0442\u0438"})]})]})},de=function(e){var t=e.backendErrors,c=Object.keys(t).map((function(e){var c=t[e].join(" ");return"".concat(e," ").concat(c," ")}));return Object(o.jsx)("ul",{children:c.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})},Oe=c(32),me=c.n(Oe),xe=function(e){var t=e.onSubmit,c=e.errors,n=e.initialValue,s=Object(a.useState)(""),r=Object(m.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(""),b=Object(m.a)(j,2),u=b[0],d=b[1],O=Object(a.useState)(""),x=Object(m.a)(O,2),_=x[0],f=x[1],g=Object(a.useState)([]),h=Object(m.a)(g,2),p=h[0],v=h[1];Object(a.useEffect)((function(){n&&(l(n.title),d(n.description),f(n.body),v(n.tagList.join(" ")))}),[n]);return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:me.a.content,children:[c&&Object(o.jsx)(de,{backendErrors:c}),Object(o.jsxs)("form",{className:me.a.form,onSubmit:function(e){e.preventDefault();var c={title:i,description:u,body:_,tagList:p.split(" ")};t(c)},children:[Object(o.jsx)(le,{type:"text",name:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438",value:i,setState:l}),Object(o.jsx)(le,{type:"text",name:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438",value:u,setState:d}),Object(o.jsx)(je,{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0442\u0430\u0442\u044c\u044e",value:_,setState:f}),Object(o.jsx)(le,{type:"text",name:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0433\u043e\u0432",value:p,setState:v}),Object(o.jsx)(be,{text:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})]})})},_e=function(){var e=g("/articles"),t=Object(m.a)(e,2),c=t[0],n=c.response,s=c.error,r=t[1],i=Object(a.useState)(!1),l=Object(m.a)(i,2),j=l[0],u=l[1],d=Object(a.useContext)(b),O=Object(m.a)(d,1)[0];if(Object(k.useEffect)((function(){n&&u(!0)}),[n]),!1===O.isLoggedIn)return Object(o.jsx)(C.a,{to:"/login"});if(j)return Object(o.jsx)(C.a,{to:"/article/".concat(n.article.slug)});return Object(o.jsx)(xe,{errors:s&&s.errors||{},initialValue:{title:"",description:"",body:"",tagList:[]},onSubmit:function(e){r({method:"POST",data:{article:e}})}})},fe=function(e){var t=e.match.params.slug,c="/articles/".concat(t),n=g(c),s=Object(m.a)(n,2),r=s[0].response,i=s[1],l=g(c),j=Object(m.a)(l,2),u=j[0],d=u.response,O=u.error,x=j[1],_=Object(a.useState)(null),f=Object(m.a)(_,2),h=f[0],p=f[1],v=Object(a.useState)(!1),N=Object(m.a)(v,2),S=N[0],y=N[1],E=Object(a.useContext)(b),F=Object(m.a)(E,1)[0];Object(k.useEffect)((function(){i()}),[i]),Object(k.useEffect)((function(){r&&p({title:r.article.title,description:r.article.description,body:r.article.body,tagList:r.article.tagList})}),[r]);return Object(k.useEffect)((function(){d&&y(!0)}),[d]),!1===F.isLoggedIn?Object(o.jsx)(C.a,{to:"/login"}):S?Object(o.jsx)(C.a,{to:"/article/".concat(d.article.slug)}):Object(o.jsx)("div",{children:Object(o.jsx)(xe,{onSubmit:function(e){x({method:"PUT",data:{article:e}})},initialValue:h,errors:O&&O.errors||{}})})},ge=c(23),he=c.n(ge),pe=function(){var e=Object(a.useContext)(b),t=Object(m.a)(e,2),c=t[0],n=t[1],s=g("/user"),r=Object(m.a)(s,2),l=r[0],j=l.response,u=l.error,d=r[1],O=f("token"),x=Object(m.a)(O,2)[1],_=Object(a.useState)(""),h=Object(m.a)(_,2),p=h[0],v=h[1],N=Object(a.useState)(""),S=Object(m.a)(N,2),y=S[0],E=S[1],F=Object(a.useState)(""),L=Object(m.a)(F,2),P=L[0],T=L[1],A=Object(a.useState)(""),U=Object(m.a)(A,2),w=U[0],I=U[1],D=Object(a.useState)(""),R=Object(m.a)(D,2),G=R[0],H=R[1],z=Object(a.useState)(!1),M=Object(m.a)(z,2),X=M[0],Z=M[1],Q=Object(a.useState)(!1),q=Object(m.a)(Q,2),B=q[0],W=q[1];return Object(k.useEffect)((function(){c.currentUser&&(v(c.currentUser.image),E(c.currentUser.username),T(null===c.currentUser.bio?"":c.currentUser.bio),I(c.currentUser.email))}),[c.currentUser]),Object(k.useEffect)((function(){j&&(n({type:"SET_AUTHORIZED",payload:j.user}),Z(!0))}),[n,j,x]),X?Object(o.jsx)(C.a,{to:"/profile/".concat(j.user.username)}):B?Object(o.jsx)(C.a,{to:"/"}):Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:he.a.content,children:[Object(o.jsx)(de,{backendErrors:u&&u.errors||{}}),Object(o.jsx)("h1",{className:he.a.title,children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=Object(i.a)(Object(i.a)({},c.currentUser),{},{image:p,username:y,bio:P,email:w,password:G});d({method:"PUT",data:{user:t}})},className:he.a.form,children:[Object(o.jsx)(le,{type:"text",name:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",value:p,setState:v}),Object(o.jsx)(le,{type:"text",name:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",value:y,setState:E}),Object(o.jsx)(je,{placeholder:"\u041e \u0441\u0435\u0431\u0435",value:P,setState:T}),Object(o.jsx)(le,{type:"text",name:"E-mail",value:w,setState:I}),Object(o.jsx)(le,{type:"text",name:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f",value:G,setState:H}),Object(o.jsx)(be,{text:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(o.jsx)("button",{className:he.a.logout,onClick:function(e){e.preventDefault(),x(""),n({type:"LOGOUT"}),W(!0)},children:"\u0412\u044b\u0445\u043e\u0434"})]})]})})},ve=function(e){var t=e.username,c=e.isFavorites,n=e.location,s=e.url,r=P(n.search),i=r.offset,l=r.currentPage,j=function(e){var t=e.username,c=e.offset,a=e.isFavorites?{limit:5,offset:c,favorited:t}:{limit:5,offset:c,author:t};return"/articles/?".concat(Object(L.stringify)(a))}({username:t,offset:i,isFavorites:c}),b=g(j),u=Object(m.a)(b,2),d=u[0],O=d.response,x=d.error,_=d.isLoading,f=u[1];return Object(k.useEffect)((function(){f()}),[f,c,l]),Object(o.jsxs)("div",{children:[_&&Object(o.jsx)(w,{}),x&&Object(o.jsx)("div",{children:"Some error"}),!_&&O&&Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(M,{articles:O.articles}),Object(o.jsx)(V,{currentPage:l,limit:5,total:O.articlesCount,url:s})]})]})},Ne=c(10),Se=c.n(Ne),Ce=function(e){var t=e.match,c=e.location,n=t.params.slug,s=c.pathname.includes("favorites"),i="/profiles/".concat(n),l=g(i),j=Object(m.a)(l,2),b=j[0].response,u=j[1];return Object(a.useEffect)((function(){u()}),[u]),b?Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:Se.a.content,children:[Object(o.jsxs)("div",{className:Se.a.about,children:[Object(o.jsx)("img",{className:Se.a.image,src:b.profile.image?b.profile.image:"https://realworld-temp-api.herokuapp.com/images/smiley-cyrus.jpeg",alt:""}),Object(o.jsx)("h1",{className:Se.a.title,children:b.profile.username}),Object(o.jsx)("p",{className:Se.a.bio,children:b.profile.bio})]}),Object(o.jsxs)("ul",{className:Se.a.list,children:[Object(o.jsx)(r.c,{exact:!0,to:"/profile/".concat(b.profile.username),activeClassName:Se.a.active,className:Se.a.link,children:Object(o.jsx)("li",{className:Se.a.item,children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b"})}),Object(o.jsx)(r.c,{to:"/profile/".concat(b.profile.username,"/favorites"),activeClassName:Se.a.active,className:Se.a.link,children:Object(o.jsx)("li",{className:Se.a.item,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})})]}),Object(o.jsx)(ve,{username:b.profile.username,location:c,isFavorites:s,url:t.url})]})}):Object(o.jsx)("div",{className:Se.a.container,children:Object(o.jsx)(w,{})})},ke=function(){return Object(o.jsxs)(C.d,{children:[Object(o.jsx)(C.b,{exact:!0,path:"/",component:ce}),Object(o.jsx)(C.b,{path:"/tags/:slug",component:ae}),Object(o.jsx)(C.b,{path:"/feed",component:ne}),Object(o.jsx)(C.b,{path:"/article/:slug/edit",component:fe}),Object(o.jsx)(C.b,{path:"/article/:slug",component:I}),Object(o.jsx)(C.b,{path:"/login",component:ue}),Object(o.jsx)(C.b,{path:"/register",component:ue}),Object(o.jsx)(C.b,{path:"/editor",component:_e}),Object(o.jsx)(C.b,{path:"/settings",component:pe}),Object(o.jsx)(C.b,{path:"/profile/:slug",component:Ce}),Object(o.jsx)(C.b,{path:"/profile/:slug/favorites",component:Ce})]})},ye=c(33),Ee=c.n(ye),Fe=function(){return Object(o.jsx)("div",{className:Ee.a.footer,children:Object(o.jsxs)("p",{className:Ee.a.desc,children:["\xa9 \u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0441\u0430\u0439\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432 \u0446\u0435\u043b\u044f\u0445 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0438 \u043e\u0442\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0430\u0432\u044b\u043a\u043e\u0432 front-end \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438. ",Object(o.jsx)("br",{})," \u041a\u043e\u043f\u044b\u0442\u043e\u0432 \u0421\u0435\u0440\u0433\u0435\u0439, \u0433. \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433, 2021 \u0433\u043e\u0434. "]})})};var Le=function(){return Object(o.jsx)("div",{className:O.a.container,children:Object(o.jsx)(u,{children:Object(o.jsx)(h,{children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(S,{}),Object(o.jsx)(ke,{}),Object(o.jsx)(Fe,{})]})})})})};s.a.render(Object(o.jsx)(Le,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.bb78b51b.chunk.js.map