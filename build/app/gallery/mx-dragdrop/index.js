define("app/gallery/mx-dragdrop/index",["$"],function(e,o,n){var t,u=e("$"),l=u(window),i=u(document),r=window.getComputedStyle,d=function(e){(e=window.getSelection)?e().removeAllRanges():(e=window.document.selection)&&(e.empty?e.empty():e=null)},m=function(e){e.preventDefault()},c=function(e){t.iMove&&t.move(e)},f=function(e){if(t){i.off("mousemove touchmove",c).off("mouseup touchend",f).off("keydown mousewheel DOMMouseScroll",m),l.off("blur",f);var o=t.node;u(o).off("losecapture",f),o.setCapture&&o.releaseCapture(),t.iStop&&t.stop(e),t=null}};n.exports={begin:function(e,o,n){f(),e&&(d(),e.setCapture&&e.setCapture(),t={move:o,stop:n,node:e,iMove:u.isFunction(o),iStop:u.isFunction(n)},i.on("mousemove touchmove",c).on("mouseup touchend",f).on("keydown mousewheel DOMMouseScroll",m),l.on("blur",f),u(e).on("losecapture",f))},fromPoint:function(e,o){var n=null;if(document.elementFromPoint)for(!m.$fixed&&r&&(m.$fixed=!0,m.$add=null!==document.elementFromPoint(-1,-1)),m.$add&&(e+=l.scrollLeft(),o+=l.scrollTop()),n=document.elementFromPoint(e,o);n&&3==n.nodeType;)n=n.parentNode;return n},clear:d,end:f}});