module.exports=function(t){var n={};function r(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=t,r.c=n,r.d=function(t,n,o){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(o,e,function(n){return t[n]}.bind(null,e));return o},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=21)}([function(t,n){t.exports=flarum.core.compat.extend},function(t,n){t.exports=flarum.core.compat.app},function(t,n){t.exports=flarum.core.compat["models/Discussion"]},function(t,n){t.exports=flarum.core.compat.Model},function(t,n){t.exports=flarum.core.compat["components/Notification"]},function(t,n){t.exports=flarum.core.compat["components/CommentPost"]},function(t,n){t.exports=flarum.core.compat.Component},function(t,n){t.exports=flarum.core.compat["components/Button"]},function(t,n){t.exports=flarum.core.compat["helpers/username"]},function(t,n){t.exports=flarum.core.compat["helpers/icon"]},,function(t,n){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,n){t.exports=flarum.core.compat["utils/PostControls"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,n){t.exports=flarum.core.compat["components/Post"]},function(t,n){t.exports=flarum.core.compat["components/PostMeta"]},function(t,n){t.exports=flarum.core.compat["helpers/userOnline"]},function(t,n){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,n){t.exports=flarum.core.compat["components/Badge"]},,function(t,n){t.exports=flarum.core.compat["components/ReplyComposer"]},function(t,n,r){"use strict";r.r(n);var o=r(0),e=r(1),a=r.n(e),i=r(2),s=r.n(i),c=r(3),u=r.n(c),p=r(11),f=r.n(p);r(20);function l(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}var d=r(6),b=r.n(d),g=(b.a,r(4)),I=r.n(g),h=function(t){function n(){return t.apply(this,arguments)||this}l(n,t);var r=n.prototype;return r.icon=function(){return"fas fa-comment-dots"},r.href=function(){var t=this.props.notification.subject();return app.route.discussion(t)},r.content=function(){return app.translator.trans("barg-init.forum.notification.content")},n}(I.a),y=r(7),v=r.n(y),x=r(12),B=r.n(x),P=r(13),_=r.n(P),O=r(5),j=r.n(O),N=r(14),S=r.n(N),U=r(15),C=r.n(U),k=r(8),w=r.n(k),A=r(16),T=r.n(A),D=r(9),H=r.n(D),M=r(17),z=r.n(M),G=function(t){function n(){return t.apply(this,arguments)||this}l(n,t);var r=n.prototype;return r.view=function(){var t=this.props,n=t.post,r=t.discussion;return m("div",{className:"Post--BargInit"},n?m("span",null,H()("fas fa-check"),app.translator.trans("barg-init.forum.sale_button")):m("a",{href:app.route.post(n),config:m.route,"data-number":n.number()},H()("fas fa-check"),app.translator.trans("barg-init.forum.sale_button")),m("span",{className:"BargInit--User"},app.translator.trans("barg-init.forum.sale_label",{user:r.bargInitUser(),time_set:this.getSetTime(r),a:m("a",{onclick:function(){return m.route(app.route.user(r.bargInitUser()))}})})))},r.getSetTime=function(t){if(null!==t.bargInitSetAt())return z()(t.bargInitSetAt())},n}(b.a),R=r(18),V=r.n(R),q=function(t){function n(){return t.apply(this,arguments)||this}l(n,t);var r=n.prototype;return r.icon=function(){return"fas fa-check"},r.href=function(){var t=this.props.notification.subject();return app.route.discussion(t)},r.content=function(){var t=this.props.notification.fromUser();return app.translator.trans("barg-init.forum.notification.awarded",{user:t})},n}(I.a),E=function(t){function n(){return t.apply(this,arguments)||this}l(n,t);var r=n.prototype;return r.icon=function(){return"fas fa-check"},r.href=function(){var t=this.props.notification.subject();return app.route.discussion(t)},r.content=function(){var t=this.props.notification.fromUser();return app.translator.trans("barg-init.forum.notification.barg_init_in_discussion",{user:t})},n}(I.a);a.a.initializers.add("alterbyte/barg-init",(function(){var t,n,r,e;s.a.prototype.bargInitPost=u.a.hasOne("bargInitPost"),s.a.prototype.bargInitUser=u.a.hasOne("bargInitUser"),s.a.prototype.hasBargInit=u.a.attribute("hasBargInit"),s.a.prototype.startUserId=u.a.attribute("startUserId",Number),s.a.prototype.firstPostId=u.a.attribute("firstPostId",Number),s.a.prototype.canSelectBargInit=u.a.attribute("canSelectBargInit"),s.a.prototype.bargInitSetAt=u.a.attribute("bargInitSetAt",u.a.transformDate),a.a.notificationComponents.selectBargInit=h,a.a.notificationComponents.awardedBargInit=q,a.a.notificationComponents.BargInitInDiscussion=E,Object(o.extend)(s.a.prototype,"badges",(function(t){this.hasBargInit()&&!t.has("hidden")&&t.add("barg-init-badge",V.a.component({type:"bargInit",icon:"fas fa-check",label:a.a.translator.trans("barg-init.forum.sold_badge")}))})),t=function(t,n){return n.isHidden()||null===n.attribute("alterbyteBidding")||1===n.number()||!t.canSelectBargInit()||!app.session.user},n=function(t){return!app.forum.attribute("canSelectBargInitOwnPost")&&t.user()&&t.user().id()===app.session.user.id()},r=function(t){return app.translator.trans(t?"barg-init.forum.remove_barg_init":"barg-init.forum.this_barg_init")},e=function(t,n,r){t.save({bargInitPostId:n?r.id():0,bargInitUserId:app.session.user.id(),relationships:n?{bargInitPost:r,bargInitUser:app.session.user}:delete t.data.relationships.bargInitPost}).then((function(){app.current instanceof _.a&&app.current.stream.update(),m.redraw(),n&&m.route(app.route.discussion(t))}))},Object(o.extend)(B.a,"moderationControls",(function(o,a){if(!app.forum.attribute("useAlternativeBargInitUi")){var i=a.discussion(),s=function(t,n){return t.bargInitPost()&&t.bargInitPost().id()===n.id()}(i,a);a.pushAttributes({isBargInit:s}),"comment"===a.contentType()&&(t(i,a)||n(a)||o.add("bargInit-dle",v.a.component({children:r(s),icon:"fa"+(s?"s":"r")+" fa-comment-dots",onclick:function(){e(i,s=!s,a)}})))}})),Object(o.extend)(j.a.prototype,"actionItems",(function(o){if(app.forum.attribute("useAlternativeBargInitUi")){var a=this.props.post,i=this.props.post.discussion(),s=isThisSale(i,a),c=!1!==i.bargInitPost();a.pushAttributes({isBargInit:s}),t(i,a)||n(a)||o.add("bargInit",v.a.component({children:r(s),className:c?s?"Button Button--primary":"Button Button--link":"Button Button--primary",onclick:function(){c=!c,e(i,s=!s,a)}}))}})),Object(o.extend)(j.a.prototype,"headerItems",(function(t){var n=this.attrs.post;n.discussion().bargInitPost()&&n.discussion().bargInitPost().id()===n.id()&&!n.isHidden()&&t.add("isBargInit",G.component({post:n,discussion:n.discussion()}))})),Object(o.extend)(j.a.prototype,"footerItems",(function(t){var n=this.attrs.post,r=n.discussion(),o=r.bargInitPost(),e=null!==this.attrs.post.attribute("alterbyteBidding");if(o&&e&&!o.isHidden()&&1===n.number()&&!n.isHidden()){var a=o.user(),i=o.attribute("alterbyteBidding")+" ر.س";t.add("bargInitPost approved",m("div",{className:"CommentPost"},m("div",{className:"Post-header"},m("ul",null,m("li",{className:"item-user"},m("div",{className:"PostUser"},a&&T()(a),m("h3",null,a?m("a",{href:app.route.user(a),config:m.route},w()(a)):w()(a)))),o.discussion()&&m("li",{className:"item-meta"},C.a.component({post:o})),G.component({post:o,discussion:r})),m("div",{Class:"item-bid"},m("input",{class:"bidValue",type:"text",name:"CommentBid",value:i,readonly:!0}))),m("div",{className:"Post-body"},m.trust(o.contentHtml())),m("div",{className:"barg-footer"},m("li",{className:"item-confirm"},m("button",{type:"button"},"Confirm")),m("li",{className:"item-cancel"},m("button",{type:"button"},"Cancel")))),-10)}})),Object(o.extend)(S.a.prototype,"elementAttrs",(function(t){var n=this.attrs.post;n.discussion().bargInitPost()&&n.discussion().bargInitPost().id()===n.id()&&!n.isHidden()&&(t.className+=" Post--bargInit")})),Object(o.extend)(f.a.prototype,"notificationTypes",(function(t){t.add("awardedBargInit",{name:"awardedBargInit",icon:"fas fa-check",label:a.a.translator.trans("barg-init.forum.notification.preferences.awarded_barg_init")}),t.add("BargInitInDiscussion",{name:"BargInitInDiscussion",icon:"fas fa-check",label:a.a.translator.trans("barg-init.forum.notification.preferences.barg_init_in_discussion")})}))}))}]);
//# sourceMappingURL=forum.js.map