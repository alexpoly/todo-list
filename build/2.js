webpackJsonp([2],{416:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u(0),e=(u(3),u(60),u(105),u(104),function(){function l(l,n,u,t){this.navParams=l,this.modalCtrl=n,this._TodoListProvider=u,this.alert=t}return l.prototype.ngOnInit=function(){this.todoList=this.navParams.get("details")},l.prototype.getItem=function(){var l=this;this.subscriberTodoList$=this._TodoListProvider.getOneList(this.todoList.id).subscribe(function(n){l.todoList=n})},l.prototype.addItem=function(){var l=this,n=this.modalCtrl.create("ItemDetailsPage",{addOrEdit:!0,todoList:this.todoList});n.onDidDismiss(function(n){n||l.getItem()}),n.present()},l.prototype.deleteItem=function(l){var n=this;this.alert.createAlert({title:"Delete Note",message:"Are you sure you want to delete this Note?",inputs:[],noText:"Cancel",yesText:"Yes",yesToastThen:"Note succesfuly deleted",yesToastCatch:"Something wrong happened",yesFunction:function(u){return n.getItem(),n._TodoListProvider.deleteItem(n.todoList,l)}})},l.prototype.updateItem=function(l){var n=this,u=this.modalCtrl.create("ItemDetailsPage",{addOrEdit:!1,todoList:this.todoList,item:l});u.onDidDismiss(function(l){l||n.getItem()}),u.present()},l.prototype.presentToast=function(l){this.alert.presentToast(l)},l.prototype.ngOnDestroy=function(){this.subscriberTodoList$&&this.subscriberTodoList$.unsubscribe()},l}()),o=u(422),a=function(){return function(){}}(),i=u(288),r=u(289),c=u(290),s=u(291),d=u(292),_=u(293),f=u(294),m=u(295),p=u(296),h=u(287),g=u(286),b=u(108),v=u(181),Z=u(2),Y=u(182),y=u(188),I=u(171),x=u(175),L=u(78),T=u(46),j=u(23),z=u(32),D=u(185),k=u(15),w=u(424),O=u(428),P=u(423),$=u(106),F=u(6),M=u(299),S=u(36),C=u(11),N=u(24),U=u(300),E=u(79),X=u(54),A=u(297),G=u(28),B=u(5),J=u(12),R=u(33),V=u(433),W=u(174),q=u(434),H=u(76),K=u(14),Q=u(114),ll=u(178),nl=u(107),ul=t.X({encapsulation:2,styles:[],data:{}});function tl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"empty-list",[["h1Text","OMG!"],["h3Text","You have no Tasks."],["h3Textsecond","Let's change that!"],["icon","notifications"]],null,null,null,g.c,g.b)),t.Y(1,49152,null,0,b.a,[],{icon:[0,"icon"],h1Text:[1,"h1Text"],h3Text:[2,"h3Text"],h3Textsecond:[3,"h3Textsecond"]},null)],function(l,n){l(n,1,0,"notifications","OMG!","You have no Tasks.","Let's change that!")},null)}function el(l){return t._22(0,[(l()(),t.Z(0,0,null,null,74,"ion-card",[],null,null,null,null,null)),t.Y(1,16384,null,0,v.a,[Z.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(3,0,null,null,29,"ion-card-content",[],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.updateItem(l.context.$implicit)&&t);return t},null,null)),t.Y(4,16384,null,0,Y.a,[Z.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(6,0,null,null,22,"ion-card-title",[],null,null,null,null,null)),t.Y(7,16384,null,0,y.a,[Z.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(9,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),t.Y(10,16384,null,0,I.a,[],null,null),(l()(),t._20(-1,null,["\n              "])),(l()(),t.Z(12,0,null,null,2,"ion-col",[["class","col"],["col-9",""]],null,null,null,null,null)),t.Y(13,16384,null,0,x.a,[],null,null),(l()(),t._20(14,null,[" "," "])),(l()(),t._20(-1,null,["\n              "])),(l()(),t.Z(16,0,null,null,10,"ion-col",[["align-self-start",""],["class","col"],["col-3",""]],null,null,null,null,null)),t.Y(17,16384,null,0,x.a,[],null,null),(l()(),t._20(-1,null,["\n                "])),(l()(),t.Z(19,0,null,null,6,"p",[["ion-text",""],["text-right",""]],null,null,null,null,null)),t.Y(20,16384,null,0,L.a,[Z.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,null,["\n                  "])),(l()(),t.Z(22,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),t._20(23,null,["",""])),t._16(24,1),(l()(),t._20(-1,null,["\n                "])),(l()(),t._20(-1,null,["\n              "])),(l()(),t._20(-1,null,["\n            "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(30,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._20(31,null,[" ",""])),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(34,0,null,null,39,"ion-row",[["class","row"]],null,null,null,null,null)),t.Y(35,16384,null,0,I.a,[],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(37,0,null,null,12,"ion-col",[["align-self-center",""],["class","col"],["text-center",""]],null,null,null,null,null)),t.Y(38,16384,null,0,x.a,[],null,null),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(40,0,null,null,8,"button",[["clear",""],["color","danger"],["icon-start",""],["ion-button",""],["small",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.deleteItem(l.context.$implicit)&&t);return t},T.b,T.a)),t.Y(41,1097728,null,0,j.a,[[8,""],Z.a,t.j,t.z],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),t._20(-1,0,["\n              "])),(l()(),t.Z(43,0,null,0,1,"ion-icon",[["name","trash"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(44,147456,null,0,z.a,[Z.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n              "])),(l()(),t.Z(46,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["Delete"])),(l()(),t._20(-1,0,["\n            "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(51,0,null,null,12,"ion-col",[["align-self-center",""],["class","col"],["text-center",""]],null,null,null,null,null)),t.Y(52,16384,null,0,x.a,[],null,null),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(54,0,null,null,8,"button",[["clear",""],["color","warning"],["icon-start",""],["ion-button",""],["small",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.updateItem(l.context.$implicit)&&t);return t},T.b,T.a)),t.Y(55,1097728,null,0,j.a,[[8,""],Z.a,t.j,t.z],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),t._20(-1,0,["\n              "])),(l()(),t.Z(57,0,null,0,1,"ion-icon",[["name","create"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(58,147456,null,0,z.a,[Z.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n              "])),(l()(),t.Z(60,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["Edit"])),(l()(),t._20(-1,0,["\n            "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(65,0,null,null,7,"ion-col",[["align-self-center",""],["class","col"],["text-center",""]],null,null,null,null,null)),t.Y(66,16384,null,0,x.a,[],null,null),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(68,0,null,null,3,"ion-note",[],null,null,null,null,null)),t.Y(69,16384,null,0,D.a,[Z.a,t.j,t.z],null,null),(l()(),t._20(70,null,["\n              ","\n            "])),t._16(71,1),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n      "]))],function(l,n){l(n,20,0,t._2(1,"",n.context.$implicit.state?"success":"danger",""));l(n,41,0,"danger","","");l(n,44,0,"trash");l(n,55,0,"warning","","");l(n,58,0,"create")},function(l,n){l(n,14,0,n.context.$implicit.name),l(n,23,0,t._21(n,23,0,l(n,24,0,t._13(n.parent.parent.parent,1),n.context.$implicit.state))),l(n,31,0,n.context.$implicit.description),l(n,43,0,t._13(n,44)._hidden),l(n,57,0,t._13(n,58)._hidden),l(n,70,0,t._21(n,70,0,l(n,71,0,t._13(n.parent.parent.parent,2),n.context.$implicit.date)))})}function ol(l){return t._22(0,[(l()(),t.Z(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["\n      "])),(l()(),t.U(16777216,null,null,2,null,el)),t.Y(3,802816,null,0,k.i,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),t._16(4,1),(l()(),t._20(-1,null,["\n    "]))],function(l,n){var u=n.component;l(n,3,0,t._21(n,3,0,l(n,4,0,t._13(n.parent.parent,0),u.todoList.items)))},null)}function al(l){return t._22(0,[(l()(),t.Z(0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,tl)),t.Y(3,16384,null,0,k.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,ol)),t.Y(6,16384,null,0,k.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,3,0,!u.todoList.items),l(n,6,0,!!u.todoList.items)},null)}function il(l){return t._22(0,[t._14(0,w.a,[]),t._14(0,O.a,[]),t._14(0,P.a,[]),(l()(),t._20(-1,null,["\n"])),(l()(),t.Z(4,0,null,null,10,"ion-header",[],null,null,null,null,null)),t.Y(5,16384,null,0,$.a,[Z.a,t.j,t.z,[2,F.a]],null,null),(l()(),t._20(-1,null,["\n\n  "])),(l()(),t.Z(7,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,M.b,M.a)),t.Y(8,49152,null,0,S.a,[C.a,[2,F.a],[2,N.a],Z.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,3,["\n    "])),(l()(),t.Z(10,0,null,3,2,"ion-title",[],null,null,null,U.b,U.a)),t.Y(11,49152,null,0,E.a,[Z.a,t.j,t.z,[2,X.a],[2,S.a]],null,null),(l()(),t._20(12,0,["",""])),(l()(),t._20(-1,3,["\n  "])),(l()(),t._20(-1,null,["\n\n"])),(l()(),t._20(-1,null,["\n\n\n"])),(l()(),t.Z(16,0,null,null,18,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,A.b,A.a)),t.Y(17,4374528,null,0,G.a,[Z.a,B.a,J.a,t.j,t.z,C.a,R.a,t.u,[2,F.a],[2,N.a]],null,null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.U(16777216,null,1,1,null,al)),t.Y(20,16384,null,0,k.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.Z(22,0,null,0,11,"ion-fab",[["bottom",""],["right",""]],null,null,null,V.b,V.a)),t.Y(23,1228800,null,2,W.a,[B.a],null,null),t._18(335544320,1,{_mainButton:0}),t._18(603979776,2,{_fabLists:1}),(l()(),t._20(-1,0,["\n    "])),(l()(),t.Z(27,0,null,0,5,"button",[["color","secondary"],["ion-fab",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.addItem()&&t);return t},q.b,q.a)),t.Y(28,49152,[[1,4]],0,H.a,[Z.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,0,["\n      "])),(l()(),t.Z(30,0,null,0,1,"ion-icon",[["name","add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(31,147456,null,0,z.a,[Z.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n    "])),(l()(),t._20(-1,0,["\n  "])),(l()(),t._20(-1,1,["\n"])),(l()(),t._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,8,0,"primary"),l(n,20,0,!!u.todoList);l(n,28,0,"secondary");l(n,31,0,"add")},function(l,n){var u=n.component;l(n,7,0,t._13(n,8)._hidden,t._13(n,8)._sbPadding),l(n,12,0,null==u.todoList?null:u.todoList.name),l(n,16,0,t._13(n,17).statusbarPadding,t._13(n,17)._hasRefresher),l(n,30,0,t._13(n,31)._hidden)})}var rl=t.V("page-details",e,function(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"page-details",[],null,null,null,il,ul)),t.Y(1,245760,null,0,e,[K.a,Q.a,ll.a,nl.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),cl=u(22),sl=u(168),dl=u(173),_l=u(51);u.d(n,"DetailsPageModuleNgFactory",function(){return fl});var fl=t.W(a,[],function(l){return t._10([t._11(512,t.i,t.S,[[8,[i.a,r.a,c.a,s.a,d.a,_.a,f.a,m.a,p.a,h.a,g.a,rl]],[3,t.i],t.s]),t._11(4608,k.l,k.k,[t.r,[2,k.t]]),t._11(4608,cl.o,cl.o,[]),t._11(4608,cl.d,cl.d,[]),t._11(512,k.c,k.c,[]),t._11(512,cl.m,cl.m,[]),t._11(512,cl.e,cl.e,[]),t._11(512,cl.l,cl.l,[]),t._11(512,sl.a,sl.a,[]),t._11(512,sl.b,sl.b,[]),t._11(512,o.a,o.a,[]),t._11(512,dl.a,dl.a,[]),t._11(512,a,a,[]),t._11(256,_l.a,e,[])])})},422:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(3),u(427);var t=function(){return function(){}}()},423:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(3);var t=function(){function l(){}return l.prototype.transform=function(l){for(var n=[],u=1;u<arguments.length;u++)n[u-1]=arguments[u];if(!l)return"";var t=Date.now()-l;return t>6048e5?new Date(l).toDateString():t>864e5?Math.round(t/864e5).toString()+" days ago":t>36e5?Math.round(t/36e5).toString()+" hours ago":t>6e4?Math.round(t/6e4).toString()+" minutes ago":t>1e3?Math.round(t/1e3).toString()+" seconds ago ":" one second ago"},l}()},424:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(3);var t=function(){function l(){}return l.prototype.transform=function(l,n){return l&&null!==l?Object.values(l):[]},l}()},427:function(l,n,u){"use strict";u(423),u(428),u(424),u(422)},428:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(3);var t=function(){function l(){}return l.prototype.transform=function(l){return l?"Finished":"Doing"},l}()},433:function(l,n,u){"use strict";u.d(n,"a",function(){return e}),n.b=o;var t=u(0),e=(u(5),t.X({encapsulation:2,styles:[],data:{}}));function o(l){return t._22(0,[t._12(null,0)],null,null)}},434:function(l,n,u){"use strict";u.d(n,"a",function(){return a}),n.b=i;var t=u(0),e=u(32),o=u(2),a=t.X({encapsulation:2,styles:[],data:{}});function i(l){return t._22(2,[(l()(),t.Z(0,0,null,null,1,"ion-icon",[["class","fab-close-icon"],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(1,147456,null,0,e.a,[o.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.Z(2,0,null,null,1,"span",[["class","button-inner"]],null,null,null,null,null)),t._12(null,0),(l()(),t.Z(4,0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(l,n){l(n,1,0,"close")},function(l,n){l(n,0,0,t._13(n,1)._hidden)})}}});