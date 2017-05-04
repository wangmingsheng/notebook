/**
 * Created by Administrator on 2017/4/27.
 */
!(function resize() {
  var docEl = document.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
      };

  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
})();

!(function prventDropDown() {
  var startPointY;
  window.addEventListener('touchstart', function(e) {
    var finger = e.changedTouches[0];
    startPointY = finger.screenY;
  });
  window.addEventListener('touchmove', function(e) {
    if (!($(e.target).is('[data-touchmoveable]') || $(e.target).parents('[data-touchmoveable]').length > 0)) return e.preventDefault();
    var finger = e.changedTouches[0];
    var ObjectBox = $('.living_box');
    var diffY = finger.screenY - startPointY;
    if (ObjectBox[0].scrollHeight <= ObjectBox[0].offsetHeight + ObjectBox[0].scrollTop && diffY < 0) return e.preventDefault();
    if (ObjectBox.scrollTop() <= 0 && diffY > 0) return e.preventDefault();
  });
})();

//防止iPhone双击抖动
!(function stopIphoneDoubleClickEvent()
{
  var agent = navigator.userAgent.toLowerCase();        //检测是否是ios
  var iLastTouch = null;                                //缓存上一次tap的时间
  if (agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0)
  {
    document.body.addEventListener('touchend', function(event)
    {
      var iNow = new Date().getTime();
      iLastTouch = iLastTouch || iNow + 1 /** 第一次时将iLastTouch设为当前时间+1 */ ;
      var delta = iNow - iLastTouch;
      if (delta < 500 && delta > 0)
      {
        event.preventDefault();
        return false;
      }
      iLastTouch = iNow;
    }, false);
  }
})();

function domLoaded() {
  document.addEventListener("WeixinJSBridgeReady", function () {
    var media = document.getElementById('video');
    media.play();
    $(media).attr('poster', null);
  }, false);
  document.removeEventListener('DOMContentLoaded', domLoaded);
}
document.addEventListener('DOMContentLoaded', domLoaded);


//禁止部分区域的默认事件(iphone的橡皮筋效果）
document.addEventListener('touchmove', function (ev){
    ev.preventDefault();
}, false);

document.querySelector('.menuright ').addEventListener('touchmove', function (ev){
    ev.stopPropagation();
}, false);

