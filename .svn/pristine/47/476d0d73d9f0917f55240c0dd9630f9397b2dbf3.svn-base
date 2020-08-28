window.hesc = {};
//记录调用的原生方法
var _callback_count = 0;
var _callback_map = [];
//记录需要失败回调的方法
var _errback_map = [];
//html调用终端硬件部分
//tags 是组件唯一标示,如id，定义哪个组件调用原生功能
window.callMobile = function(handlerInterface, handlerMethod, parameters, tags, callback, errback) {
  //handlerInterface由iOS addScriptMessageHandler与andorid addJavascriptInterface 代码注入而来。
  //handlerInterface：'Native' 调用原生  handlerMethod:具体原生功能方法名  parameters:json对象，供原生使用的值

  var requestTags = {
    tags: tags,
  };

  var callbackID = /* (_callback_count++).toString() */ ++_callback_count;

  if (typeof callback === 'function') {
    _callback_map[callbackID] = callback;
  }

  // _callback_map.join("@")

  if (errback != null && typeof errback === 'function') {
    _errback_map[callbackID] = errback;
  }

  requestTags['callbackID'] = callbackID;

  var dic = {
    handlerInterface: handlerInterface,
    function: handlerMethod,
    parameters: parameters,
    tags: requestTags,
  };

  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    window.webkit.messageHandlers[handlerInterface].postMessage(dic);
  } else {
    //安卓传输不了js json对象
    window[handlerInterface]['handler'](handlerMethod, JSON.stringify(dic));
  }
};

String.prototype.replaceAll = function(FindText, RepText) {
  let regExp = new RegExp(FindText, 'g');
  return this.replace(regExp, RepText);
};

//终端调用JS方法，将硬件调用的返回结果发送给web
window.fromMobile = function(handlerInterface, handlerMethod, parameters, tags) {
  var para = String(parameters);
  var strtags = String(tags);
  var re = JSON.parse(strtags);

  var param = para.replaceAll('"{', '{').replaceAll('}"', '}');

  if (handlerMethod === 'takephoto' && !Array.isArray(JSON.parse(param))) {
    _errback_map[re.callbackID](JSON.parse(param));
    delete _errback_map[re.callbackID];
  } else if (handlerMethod === 'chooseimg' && !Array.isArray(JSON.parse(param))) {
    _errback_map[re.callbackID](JSON.parse(param));
    delete _errback_map[re.callbackID];
  } else {
    _callback_map[re.callbackID](JSON.parse(param)); //回调函数，用完删除事件
  }
  delete _callback_map[re.callbackID];
};
