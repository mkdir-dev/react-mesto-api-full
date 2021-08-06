(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(18),s=n.n(r),i=n(7),o=(n(29),n(22)),u=n(2),l=n(3),p=n(19),d=n(20),h=new(function(){function e(t){var n=t.url,a=t.headers;Object(p.a)(this,e),this._url=n,this._headers=a}return Object(d.a)(e,[{key:"_fixPromise",value:function(e){return e.ok?e.json():Promise.reject("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._fixPromise(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._fixPromise(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.about)})}).then((function(e){return t._fixPromise(e)}))}},{key:"editUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e.avatar)})}).then((function(e){return t._fixPromise(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then((function(e){return t._fixPromise(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._fixPromise(e)}))}},{key:"addLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._fixPromise(e)}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._fixPromise(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.deleteLikeCard(e):this.addLikeCard(e)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-23",headers:{authorization:"08704321-7bb1-4c78-b9e1-013c8abb4d8e","content-Type":"application/json"}}),b="https://auth.nomoreparties.co";function j(e){return e.ok?e.json():Promise.reject("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}var m=c.a.createContext(),f=n(23),x=n(24),O=n(0),g=function(e){var t=e.component,n=Object(x.a)(e,["component"]);return Object(O.jsx)(l.b,{children:function(){return n.loggedIn?Object(O.jsx)(t,Object(f.a)({},n)):Object(O.jsx)(l.a,{to:"./sign-in"})}})};var v=function(e){var t=Object(l.g)();return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)(i.b,{className:"header__logo",href:"/",target:"_blank",rel:"noreferrer"}),Object(O.jsx)("div",{className:"header__auth",children:e.loggedIn?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"header__email",children:e.userEmail}),Object(O.jsx)(i.b,{className:"header__signout",onClick:e.onSignOut,to:"/sign-in",children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(O.jsx)(i.b,{className:"header__signin",to:"".concat("/sign-in"===t.pathname?"/sign-up":"/sign-in"),children:"".concat("/sign-in"===t.pathname?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438")})})]})};var _=function(e){var t=c.a.useContext(m),n=e.card.owner._id===t._id,a="place-card__delete ".concat(n?"place-card__delete":"place-card__delete_hidden"),r=e.card.likes.some((function(e){return e._id===t._id})),s="place-card__like ".concat(r?"place-card__like_active":"");return Object(O.jsxs)("li",{className:"place-card",children:[Object(O.jsx)("img",{className:"place-card__image",src:e.link,alt:e.name,onClick:function(){e.onCardClick(e.card)}}),Object(O.jsxs)("div",{className:"place-card__wrapper",children:[Object(O.jsx)("h2",{className:"place-card__name",children:e.name}),Object(O.jsxs)("div",{className:"place-card__like-wrap",children:[Object(O.jsx)("button",{className:s,type:"button",onClick:function(){e.onCardLike(e.card)},"aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"}),Object(O.jsx)("p",{className:"place-card__like-count",children:e.likes})]})]}),Object(O.jsx)("button",{className:a,type:"button",onClick:function(){e.onCardDelete(e.card)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})};var N=function(e){var t=c.a.useContext(m);return Object(O.jsxs)("main",{className:"content page__section",children:[Object(O.jsxs)("section",{className:"user",children:[Object(O.jsxs)("div",{className:"user__wrapper",children:[Object(O.jsx)("button",{className:"user__edit-avatar",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onPopupAvatar,children:Object(O.jsx)("div",{className:"user__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")}})}),Object(O.jsxs)("div",{className:"user__info",children:[Object(O.jsxs)("div",{className:"user__text",children:[Object(O.jsx)("h1",{className:"user__name",children:t.name}),Object(O.jsx)("button",{className:"button user__edit",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onPopupEdit})]}),Object(O.jsx)("p",{className:"user__about",children:t.about})]})]}),Object(O.jsx)("button",{className:"button user__add",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:e.onPopupAdd})]}),Object(O.jsx)("section",{className:"places",children:Object(O.jsx)("ul",{className:"places__section",children:e.cards.map((function(t){return Object(O.jsx)(_,{link:t.link,name:t.name,likes:t.likes.length,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var C=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],r=n[1],s=c.a.useState(""),o=Object(u.a)(s,2),l=o[0],p=o[1];return Object(O.jsxs)("div",{className:"auth",children:[Object(O.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onRegister(a,l)},children:[Object(O.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(O.jsx)("input",{className:"auth__input",id:"reg-email",name:"email",type:"email",placeholder:"Email",minLength:"2",required:!0,onChange:function(e){r(e.target.value)},value:a}),Object(O.jsx)("input",{className:"auth__input",id:"reg-password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"6",required:!0,onChange:function(e){p(e.target.value)},value:l}),Object(O.jsx)("button",{className:"auth__button-submit",type:"submit","aria-label":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(O.jsxs)("p",{className:"auth__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0",Object(O.jsx)(i.b,{className:"auth__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var A=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],r=n[1],s=c.a.useState(""),i=Object(u.a)(s,2),o=i[0],l=i[1];return Object(O.jsx)("div",{className:"auth",children:Object(O.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onLogin(a,o)},children:[Object(O.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(O.jsx)("input",{className:"auth__input",id:"email",name:"email",type:"email",placeholder:"Email",minLength:"2",required:!0,onChange:function(e){r(e.target.value)},value:a}),Object(O.jsx)("input",{className:"auth__input",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"6",required:!0,onChange:function(e){l(e.target.value)},value:o}),Object(O.jsx)("button",{className:"auth__button-submit",type:"submit","aria-label":"\u0412\u043e\u0439\u0442\u0438",children:"\u0412\u043e\u0439\u0442\u0438"})]})})};var k=function(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsx)(i.b,{to:"https://github.com/mkdir-dev",className:"footer__copyright",target:"_blank",rel:"noreferrer",children:'\xa9 \u041f\u0440\u043e\u0435\u043a\u0442 "\u041c\u0435\u0441\u0442\u043e". 2021. \u041c\u0438\u0445\u0430\u0438\u043b \u041a\u043e\u0440\u044e\u043a\u043e\u0432'})})};var y=function(e){return Object(O.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(O.jsxs)("div",{className:"popup__container",children:[Object(O.jsx)("h2",{className:"popup__title",children:e.title}),Object(O.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),onSubmit:e.onSubmit,name:e.name,noValidate:!0,children:[e.children,Object(O.jsx)("button",{className:"popup__button-save",type:"submit","aria-label":e.buttonText,children:e.buttonText})]}),Object(O.jsx)("button",{className:"popup__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})};var S=function(e){var t=c.a.useRef("");return Object(O.jsxs)(y,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),console.log(t.current.value),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(O.jsx)("input",{className:"popup__input popup__input_type_avatar",ref:t,id:"avatar",name:"avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",minLength:"2",required:!0}),Object(O.jsx)("span",{className:"popup__input-error",id:"avatar-error"})]})};var E=function(e){var t=c.a.useContext(m),n=c.a.useState(""),a=Object(u.a)(n,2),r=a[0],s=a[1],i=c.a.useState(""),o=Object(u.a)(i,2),l=o[0],p=o[1];return c.a.useEffect((function(){s(t.name),p(t.about)}),[t]),Object(O.jsxs)(y,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:l})},children:[Object(O.jsx)("input",{className:"popup__input popup__input_type_name",onChange:function(e){s(e.target.value)},id:"name",name:"name",type:"text",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",value:r,required:!0}),Object(O.jsx)("span",{className:"popup__input-error",id:"name-error"}),Object(O.jsx)("input",{className:"popup__input popup__input_type_about",onChange:function(e){p(e.target.value)},id:"about",name:"about",type:"text",placeholder:"\u0414\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",minLength:"2",maxLength:"200",value:l,required:!0}),Object(O.jsx)("span",{className:"popup__input-error",id:"about-error"})]})};var L=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],r=n[1],s=c.a.useState(""),i=Object(u.a)(s,2),o=i[0],l=i[1];return Object(O.jsxs)(y,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:o}),r(""),l("")},children:[Object(O.jsx)("input",{className:"popup__input popup__input_type_title-place",id:"title-place",name:"title-place",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",onChange:function(e){r(e.target.value)},required:!0}),Object(O.jsx)("span",{className:"popup__input-error",id:"title-place-error"}),Object(O.jsx)("input",{className:"popup__input popup__input_type_link-place",id:"link-place",name:"link-place",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",minLength:"2",onChange:function(e){l(e.target.value)},required:!0}),Object(O.jsx)("span",{className:"popup__input-error",id:"link-place-error"})]})};var P=function(){return Object(O.jsx)(y,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",buttonText:"\u0414\u0430"})};var R=function(e){return Object(O.jsx)("div",{className:e.card?"popup popup_type_view popup_opened":"popup popup_type_view",children:Object(O.jsxs)("div",{className:"popup__view",children:[Object(O.jsxs)("figure",{className:"popup__figure",children:[Object(O.jsx)("img",{className:"popup__image",src:e.card?e.card.link:"",alt:e.card?e.card.name:""}),Object(O.jsx)("figcaption",{className:"popup__figcaption",children:e.card?e.card.name:""})]}),Object(O.jsx)("button",{className:"popup__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})};var w=function(e){return Object(O.jsx)("div",{className:"popup popup_type_auth ".concat(e.isOpen?"popup_opened":""),children:Object(O.jsxs)("div",{className:"popup__container popup__container_auth",children:[Object(O.jsx)("img",{className:"popup__auth-image",src:e.isRegistration?"data:image/png;base64,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":"data:image/png;base64,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",alt:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(O.jsx)("h3",{className:"popup__title popup__title_auth",children:e.isRegistration?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(O.jsx)("button",{className:"popup__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})};var I=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],r=c.a.useState(!1),s=Object(u.a)(r,2),i=s[0],p=s[1],d=c.a.useState(!1),f=Object(u.a)(d,2),x=f[0],_=f[1],y=c.a.useState(null),I=Object(u.a)(y,2),q=I[0],X=I[1],J=c.a.useState({}),Z=Object(u.a)(J,2),K=Z[0],U=Z[1],H=c.a.useState([]),Y=Object(u.a)(H,2),M=Y[0],B=Y[1],T=c.a.useState(!1),V=Object(u.a)(T,2),D=V[0],G=V[1],Q=c.a.useState(""),F=Object(u.a)(Q,2),z=F[0],W=F[1],$=c.a.useState(!1),ee=Object(u.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(!1),ce=Object(u.a)(ae,2),re=ce[0],se=ce[1],ie=Object(l.f)();function oe(){a(!1),p(!1),_(!1),ne(!1),X(null)}return c.a.useEffect((function(){!function(){var e=localStorage.getItem("token");if(!e)return void console.log("\u041d\u0435\u0442 \u0442\u043e\u043a\u0435\u043d\u0430 - \u043f\u043e\u0442\u0435\u0440\u044f\u043b\u0441\u044f");(function(e){return fetch("".concat(b,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},method:"GET"}).then((function(e){return j(e)}))})(e).then((function(e){W(e.data.email),G(!0)})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0442\u043e\u043a\u0435\u043d. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e,"."))}))}()}),[D]),c.a.useEffect((function(){D&&ie.push("/")}),[D,ie]),c.a.useEffect((function(){Promise.all([h.getUserInfo(),h.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];U(n),B(a)})).catch((function(e){console.log("\u0414\u0430\u043d\u043d\u044b\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e,"."))}))}),[]),Object(O.jsx)(m.Provider,{value:K,children:Object(O.jsxs)("div",{className:"page",children:[Object(O.jsx)(v,{userEmail:z,loggedIn:D,onSignOut:function(){localStorage.removeItem("token"),G(!1),W(""),ie.push("/sihn-in")}}),Object(O.jsx)(g,{path:"/",component:N,loggedIn:D,onPopupAvatar:function(){a(!0)},onPopupEdit:function(){p(!0)},onPopupAdd:function(){_(!0)},onCardClick:function(e){X(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===K._id}));h.changeLikeCardStatus(e._id,t).then((function(t){var n=M.map((function(n){return n._id===e._id?t:n}));B(n)})).catch((function(e){console.log('\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 "\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f". \u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e,"."))}))},onCardDelete:function(e){h.deleteCard(e._id).then((function(){var t=M.filter((function(t){return t!==e}));B(t)})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e,"."))}))},cards:M}),Object(O.jsx)(l.b,{path:"/sign-up",children:Object(O.jsx)(C,{onRegister:function(e,t){return function(e,t){return fetch("".concat(b,"/signup"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({password:t,email:e})}).then((function(e){return j(e)}))}(e,t).then((function(e){localStorage.setItem("token",e.token),ne(!0),ie.push("/sign-in")})).catch((function(){ne(!0),se(!1)})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e,"."))}))}})}),Object(O.jsx)(l.b,{path:"/sign-in",children:Object(O.jsx)(A,{onLogin:function(e,t){return function(e,t){return fetch("".concat(b,"/signin"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({password:t,email:e})}).then((function(e){return j(e)}))}(e,t).then((function(e){localStorage.setItem("token",e.token),G(!0),ie.push("/")})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u0439\u0442\u0438. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e,"."))}))}})}),Object(O.jsx)(l.b,{children:D?Object(O.jsx)(l.a,{to:"/"}):Object(O.jsx)(l.a,{to:"sign-in"})}),Object(O.jsx)(k,{}),D&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S,{isOpen:n,onClose:oe,onUpdateAvatar:function(e){h.editUserAvatar(e).then((function(e){U(e),oe()})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e,"."))}))}}),Object(O.jsx)(E,{isOpen:i,onClose:oe,onUpdateUser:function(e){h.editUserInfo(e).then((function(e){U(e),oe()})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e,"."))}))}}),Object(O.jsx)(L,{isOpen:x,onClose:oe,onAddPlace:function(e){h.addCard(e).then((function(e){B([e].concat(Object(o.a)(M))),oe()})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e,"."))}))}}),Object(O.jsx)(P,{}),Object(O.jsx)(R,{card:q,onClose:oe})]}),te&&Object(O.jsx)(w,{isOpen:te,onClose:oe,isRegistration:re})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(I,{})})}),document.getElementById("root")),q()}},[[36,1,2]]]);
//# sourceMappingURL=main.4f497ff1.chunk.js.map