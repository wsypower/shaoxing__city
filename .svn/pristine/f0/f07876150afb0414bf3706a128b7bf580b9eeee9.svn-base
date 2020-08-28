var _callback_map = []
var uniqueId = 1;
var ssdk = function (apiName, params) {
    let callbackId = String('hesc_' + (uniqueId++) + '_' + new Date().getTime());
    params['callbackId'] = callbackId;
    _callback_map[callbackId] = params;
    let handlerInterface = 'Native';
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // window.webkit.messageHandlers[handlerInterface].postMessage(params);
        var iosParam={}
        for (var key in params){
            if(typeof params[key] != "function"){
                iosParam[key]=params[key]
            }
        }
        iosParam['function'] =
            window.webkit.messageHandlers[handlerInterface].postMessage({"function":apiName,"parameters":iosParam});
    } else {
        //安卓传输不了js json对象
        window[handlerInterface]['handler'](apiName, JSON.stringify(params));
    }
}
var callBack = function (params) {
    let obj = JSON.parse(params);
    let item = _callback_map[obj.callbackId];
    if(obj.running){
        item.onThumbnail(obj.res)
    }else{
        if (obj.success) {
            item.onSuccess(obj.res)
        } else {
            item.onFail(obj.res)
        }
        delete _callback_map[obj.callbackId];
    }

}
