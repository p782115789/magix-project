define("app/views/mixins/store-table-settings",["magix","./store-table-store","../../mixins/form","$"],function(e,i,t){var d=e("magix");d.applyStyle("p86",".p86-5b9{box-shadow:0 3px 3px #eee;list-style:none;margin:0;border:1px solid #e6e6e6;border-radius:4px;position:relative;background-color:#fff;width:400px;min-height:200px}");var s=e("./store-table-store"),a=e("../../mixins/form"),n=e("$");t.exports=d.View.extend({tmpl:{html:'<button mx-guid="g0" class="pf0-btn pf0-046 p16-03e" mx-view="app/gallery/mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>&align=right" id="settings_<%=$$.viewId%>">字段设置</button><div mx-guid="g1" id="menu_<%=$$.viewId%>" class="p86-5b9 p16-ab9">2</div>',subs:[{keys:["viewId"],path:'button[mx-guid="g0"]',attr:'mx-view="app/gallery/mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>&align=right" id="settings_<%=$$.viewId%>"',attrs:[{n:"mx-view",v:1},{n:"id",p:1}]},{s:"2",keys:["viewId","fields","checked"],tmpl:'<%for(var a=0;a<$$.fields.length;a++){%><label><input type="checkbox" value="<%=$$.fields[a].id%>" <%if($$.checked.indexOf($$.fields[a].id)>=0){%> checked<%}%>/><%=$$.fields[a].name%></label><%}%><button class="pf0-btn pf0-046" mx-click="save()">确定</button>',path:'div[mx-guid="g1"]',attr:'id="menu_<%=$$.viewId%>"',attrs:[{n:"id",p:1}],mask:"211"}]},mixins:[s,a],render:function(){var e=this;e.store.set({viewId:e.id}).dispatch("load")},"save<click>":function(){var e=this,i=[];n("#"+e.id+' input[type="checkbox"]:checked').each(function(e,t){i.push(0|t.value)}),e.store.dispatch("save",i),n("#settings_"+e.id).invokeView("hide")}})});