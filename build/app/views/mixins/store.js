define("app/views/mixins/store",["magix","./c-store"],function(i,t,n){var s=i("magix"),e=i("./c-store");n.exports=s.View.extend({tmpl:{html:'<div mx-guid="g0">1</div><div mx-view="app/views/mixins/store-inner"></div><div mx-view="app/views/mixins/store-inner"></div><button class="pf0-btn" mx-click="inc()">increase</button><button class="pf0-btn" mx-click="inc1()">increase1</button><button class="pf0-btn" mx-click="uts()">update table settings</button><div mx-view="app/views/mixins/store-table" class="p16-28f"></div>',subs:[{s:"1",keys:["count","rnd"],tmpl:"count:<%=$$.count%>,self rnd:<%=$$.rnd%>",path:'div[mx-guid="g0"]'}]},mixins:[e],render:function(){this.store.set({rnd:Math.random()}).dispatch("load")},"inc<click>":function(){this.store.set({rnd:Math.random()}).dispatch("increase")},"inc1<click>":function(){e.dispatch("increase")},"uts<click>":function(){e.dispatch("test")}})});