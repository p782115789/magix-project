define("app/mixins/mask-loading",["$","magix"],function(i,n,d){var a=i("$");i("magix").applyStyle("pae",".pae-97a{padding:10px}.pae-7c7{position:fixed;width:150px;height:34px;background-color:#000;opacity:.3;border-radius:5px;z-index:999999;display:none}");d.exports={ctor:function(){var i=this;i.on("rendercall",function(){i.$uiRendered&&i.showLoading()}),i.on("rendered",function(){i.$uiRendered=!0,i.hideLoading()})},buildLoading:function(){var i=a("#m_loading");return i.length||(a(document.body).append('<div id="m_loading" class="pae-7c7"><div class="p28-f0b pae-97a"><span class="p28-662"></span></div></div>'),i=a("#m_loading")),i},showLoading:function(){var i=this,n=i.buildLoading(),d=a(window),o=(d.width()-150)/2|0,e=(d.height()-40)/2|0;n.css({left:o,top:e,display:"block"})},hideLoading:function(){this.buildLoading().css({display:"none"})}}});