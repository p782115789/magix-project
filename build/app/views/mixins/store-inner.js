define("app/views/mixins/store-inner",["magix","./c-store"],function(e,n,t){var i=e("magix"),r=e("./c-store");t.exports=i.View.extend({tmpl:{html:"1",subs:[{s:"1",keys:["count","type","rnd"],tmpl:"magix view store-inner:<%=$$.count%>,increase type:<%=$$.type?$$.type:'user click'%>,self rnd:<%=$$.rnd%>",path:"#"}]},mixins:[r],render:function(){this.store.set({rnd:"inner rnd "+Math.random()}).dispatch("load")}})});