'use strict';
var trueurl,
  _typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        };

function setupWebViewJavascriptBridge(e) {
  if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
  if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
  window.WVJBCallbacks = [e];
  var i = document.createElement('iframe');
  (i.style.display = 'none'),
    (i.src = 'ddjsscheme://__bridge_loaded__'),
    document.documentElement.appendChild(i),
    setTimeout(function() {
      document.documentElement.removeChild(i);
    }, 0);
}

function networkType(e) {
  _executeFuction('networkType', e);
}

function getUserID(e) {
  _executeFuction('getUserID', e);
}

function getUserInfo(e) {
  _executeFuction('getUserInfo', e);
}

function registerUser(e) {
  _executeFuction('registerUser', e);
}

function modifyPassword(e) {
  _executeFuction('modifyPassword', e);
}

function loginApp(e) {
  _executeFuction('loginApp', e);
}

function logout(e) {
  _executeFuction('logout', e);
}

function loginQQ(e) {
  _executeFuction('loginQQ', e);
}

function logoutQQ(e) {
  _executeFuction('logoutQQ', e);
}

function loginTencentWeibo(e) {
  _executeFuction('loginTencentWeibo', e);
}

function logoutTencentWeibo() {
  _executeFuction('loginTencentWeibo', options);
}

function loginSinaWeibo(e) {
  _executeFuction('loginSinaWeibo', e);
}

function logoutSinaWeibo(e) {
  _executeFuction('logoutSinaWeibo', e);
}

function getUUID(e) {
  _executeFuction('getUUID', e);
}

function getDistance(e) {
  _executeFuction('getDistance', e);
}

function getlocation(e) {
  _executeFuction('getLocation', e);
}

function getLocation(e) {
  _executeFuction('getLocation', e);
}

function chooseImage(e) {
  _executeFuction('chooseImage', e);
}

function chooseVideo(e) {
  _executeFuction('chooseVideo', e);
}

function chooseVideoAndPic(e) {
  _executeFuction('chooseVideoAndPic', e);
}

function startVoice(e) {
  _executeFuction('startVoice', e);
}

function stopVoice(e) {
  _executeFuction('stopVoice', e);
}

function playVoice(e) {
  _executeFuction('playVoice', e);
}

function stopPlayVoice(e) {
  _executeFuction('stopPlayVoice', e);
}

function getQRCode(e) {
  _executeFuction('getQRCode', e);
}

function share(e) {
  _executeFuction('share', e);
}

function pay(e) {
  _executeFuction('pay', e);
}

function setItem(e) {
  _executeFuction('setItem', e);
}

function getItem(e) {
  _executeFuction('getItem', e);
}

function removeItem(e) {
  _executeFuction('removeItem', e);
}

function showOrHiddenNav(e) {
  _executeFuction('showOrHiddenNav', e);
}

function submit(e) {
  _executeFuction('submit', e);
}

function callPhone(e) {
  _executeFuction('callPhone', e);
}

function sendMessage(e) {
  _executeFuction('sendMessage', e);
}

function sendEmail(e) {
  _executeFuction('sendEmail', e);
}

function faceIdentification(e) {
  _executeFuction('faceIdentification', e);
}

function alipayIdentification(e) {
  _executeFuction('alipayIdentification', e);
}

function closeWindow(e) {
  _executeFuction('closeWindow', e);
}

function onShowOrHiddenNav(e) {
  _executeFuction('onShowOrHiddenNav', e);
}

function _executeFuction(e, i) {
  dd.isInit
    ? window['_' + e] && window['_' + e](i)
    : dd &&
      setupWebViewJavascriptBridge(function() {
        window.WebViewJavascriptBridge.init &&
          (dd.isInit || window.WebViewJavascriptBridge.init(function(e, i) {})),
          (dd.isInit = !0),
          setTimeout(function() {
            window['_' + e] && window['_' + e](i);
          }, 100);
      });
}

function _networkType(i) {
  dd.device.connection.getNetworkType({
    onSuccess: function(e) {
      i && i.success && i.success(JSON.stringify(e));
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _getUserID(t) {
  dd.biz.user.getUserInfo({
    onSuccess: function(e) {
      var i = {
        userid: e.userid,
      };
      e.appConEntUniCode && ((i.appConEntUniCode = e.appConEntUniCode), (i.uniscid = e.uniscid)),
        t && t.success && t.success(JSON.stringify(i));
    },
    onFail: function(e) {
      t && t.fail && t.fail(e);
    },
  });
}

function _getUserInfo(t) {
  dd.biz.user.getUserInfo({
    onSuccess: function(e) {
      var i = e.sex;
      (e.sex = '濂�' == i ? '2' : '1'), t && t.success && t.success(JSON.stringify(e));
    },
    onFail: function(e) {
      t && t.fail && t.fail(e);
    },
  });
}

function _registerUser(e) {
  alert('registerUser method not realize in [dd] environment!');
}

function _modifyPassword(e) {
  alert('modifyPassword method not realize in [dd] environment!');
}

function _loginApp(e) {
  alert('loginApp method not realize in [dd] environment!');
}

function _logout(e) {
  alert('logout method not realize in [dd] environment!');
}

function _loginQQ(e) {
  alert('loginQQ method not realize in [dd] environment!');
}

function _logoutQQ(e) {
  alert('logoutQQ method not realize in [dd] environment!');
}

function _loginTencentWeibo(e) {
  alert('loginTencentWeibo method not realize in [dd] environment!');
}

function _logoutTencentWeibo(e) {
  alert('logoutTencentWeibo method not realize in [dd] environment!');
}

function _loginSinaWeibo(e) {
  alert('loginSinaWeibo method not realize in [dd] environment!');
}

function _logoutSinaWeibo(e) {
  alert('logoutSinaWeibo method not realize in [dd] environment!');
}

function _getUUID(i) {
  dd.device.base.getUUID({
    onSuccess: function(e) {
      i && i.success && i.success(e);
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _getDistance(e) {
  alert('getDistance method not realize in [dd] environment!');
}

function _getLocation(i) {
  dd.device.location.get({
    onSuccess: function(e) {
      i && i.success && i.success(e);
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _chooseImage(t) {
  dd.device.notification.chooseImage({
    size: t.arg,
    onSuccess: function(e) {
      var i = {
        result: 'true',
        picPath: e.picPath,
      };
      t && t.success && t.success(i);
    },
    onFail: function(e) {
      t && t.fail && t.fail(e);
    },
  });
}

function _chooseVideo(e) {
  alert('chooseVideo method not realize in [dd] environment!');
}

function _chooseVideoAndPic(t) {
  dd.device.notification.chooseImage({
    size: t.arg,
    onSuccess: function(e) {
      var i = {
        result: 'true',
        picPath: e.picPath,
        videoPath: '',
      };
      t && t.success && t.success(i);
    },
    onFail: function(e) {
      t && t.fail && t.fail(e);
    },
  });
}

function _startVoice(i) {
  dd.device.audio.startRecord({
    localAudioId: 'localAudioId',
    onSuccess: function(e) {
      i && i.success && i.success(JSON.stringify(e));
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _stopVoice(i) {
  dd.device.audio.stopRecord({
    onSuccess: function(e) {
      i && i.success && i.success(JSON.stringify(e));
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _playVoice(i) {
  dd.device.audio.play({
    localAudioId: 'localAudioId',
    onSuccess: function(e) {
      i && i.success && i.success(JSON.stringify(e));
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _stopPlayVoice(i) {
  dd.device.audio.stop({
    localAudioId: 'localAudioId',
    onSuccess: function(e) {
      i && i.success && i.success(JSON.stringify(e));
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _getQRCode(i) {
  dd.biz.util.scan({
    type: 'qrCode',
    onSuccess: function(e) {
      i && i.success && i.success(e.qrcode);
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _share(i) {
  dd.biz.util.share({
    arg: i.arg,
    onSuccess: function(e) {
      i && i.success && i.success(JSON.stringify(e));
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _pay(e) {
  alert('pay method not realize in [dd] environment!');
}

function _setItem(i) {
  var t = setTimeout(function() {
    i && i.success && i.success(i.key);
  }, 500);
  dd.util.localStorage.setItem({
    key: i.key,
    value: i.value,
    onSuccess: function(e) {
      clearTimeout(t), i && i.success && i.success(JSON.stringify(e));
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _getItem(i) {
  dd.util.localStorage.getItem({
    key: i.key,
    onSuccess: function(e) {
      i && i.success && i.success(e[i.key]);
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _removeItem(i) {
  var t = setTimeout(function() {
    i && i.success && i.success(i.key);
  }, 500);
  dd.util.localStorage.removeItem({
    key: i.key,
    onSuccess: function(e) {
      clearTimeout(t), i && i.success && i.success(JSON.stringify(e));
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _showOrHiddenNav(e) {}

function _submit(e) {
  alert('submit method not realize in [dd] environment!');
}

function _callPhone(i) {
  dd.biz.telephone.call({
    users: ['101', '102'],
    corpId: i.phone,
    onSuccess: function(e) {
      i && i.success && i.success(JSON.stringify(e));
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function _sendMessage() {
  alert('sendMessage method not realize in [dd] environment!');
}

function _sendEmail() {
  alert('sendEmail method not realize in [dd] environment!');
}

function _faceIdentification() {
  alert('faceIdentification method not realize in [dd] environment!');
}

function _alipayIdentification() {
  alert('alipayIdentification method not realize in [dd] environment!');
}

function _closeWindow() {
  dd.biz.navigation.close({
    onSuccess: function(e) {
      options && options.success && options.success(JSON.stringify(e));
    },
    onFail: function(e) {
      options && options.fail && options.fail(e);
    },
  });
}

function _onShowOrHiddenNav() {}

function config(e, i) {
  alert('config called');
  var t = window.location.href;
  $.ajax('http://app.zjzwfw.gov.cn/jmopen/interfaces/checklightvalid.do', {
    data: {
      urlString: t,
      key: e,
      secret: i,
    },
    dataType: 'json',
    type: 'post',
    async: !1,
    timeout: 1e4,
    success: function(e) {
      alert('success called' + e), 'false' == e.isvalid || (trueurl = e.urldomain);
    },
    error: function(e) {},
  });
}

function containerType() {
  var e = navigator.userAgent.toLowerCase(),
    i = (e.match(/ipad/i),
    e.match(/iphone os/i),
    e.match(/midp/i),
    e.match(/rv:1.2.3.4/i),
    e.match(/ucweb/i),
    e.match(/android/i),
    e.match(/windows ce/i),
    e.match(/windows mobile/i),
    -1 < e.indexOf('hanweb')),
    t = -1 < e.indexOf('micromessenger'),
    n = -1 < e.indexOf('alipayclient');
  return i ? 'hanweb' : t ? 'wetchat' : n ? 'Alipay' : 'web';
}

function getUserInfoString(e, i) {
  _executeFuction('getUserInfoString', {
    success: e,
    fail: i,
  });
}

function getQRCodeString(e, i) {
  _executeFuction('getQRCode', {
    success: e,
    fail: i,
  });
}

function _getUserInfoString(i) {
  dd.biz.user.getUserInfo({
    onSuccess: function(e) {
      i && i.success && i.success(JSON.stringify(e));
    },
    onFail: function(e) {
      i && i.fail && i.fail(e);
    },
  });
}

function getUserType(e) {
  _executeFuction('getUserType', e);
}

function _getUserType(t) {
  dd.biz.user.getUserInfo({
    onSuccess: function(e) {
      var i = {
        userType: 1,
      };
      e.appConEntUniCode && (i.userType = 2), t && t.success && t.success(JSON.stringify(i));
    },
    onFail: function(e) {
      t && t.fail && t.fail(e);
    },
  });
}

function ddBridge() {
  if (
    ((window.dd = {}),
    (function(e) {
      function m(e, i, t) {
        for (var n in i) e[n] = t ? i[n] : void 0 !== e[n] ? e[n] : i[n];
      }
      var i = e.navigator.userAgent,
        t = i.match(/AliApp\(\w+\/([a-zA-Z0-9.-]+)\)/);
      null === t && (t = i.match(/DingTalk\/([a-zA-Z0-9.-]+)/));
      var n = t && t[1],
        z = null,
        h = {
          isInit: !1,
          ios: !0,
          android: !1,
          version: n,
          support: '1.2.2' === n || '1.3.2' === n,
          ability: '',
          config: function(e) {
            e &&
              ((z = {
                corpId: e.corpId,
                appId: e.appId || -1,
                timeStamp: e.timeStamp,
                nonceStr: e.nonceStr,
                signature: e.signature,
                jsApiList: e.jsApiList,
              }),
              e.agentId && (z.agentId = e.agentId));
          },
          error: function(e) {
            e;
          },
          type: function(e) {
            return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1];
          },
          compareVersion: function(e, i, t) {
            if ('string' != typeof e || 'string' != typeof i) return !1;
            for (var n, o, c = e.split('.'), a = i.split('.'); n === o && 0 < a.length; )
              (n = c.shift()), (o = a.shift());
            return t ? (0 | n) <= (0 | o) : (0 | n) < (0 | o);
          },
        },
        o = function(e, i) {
          for (var t = e.split('.'), n = h, o = 0, c = t.length; o < c; o++)
            o === c - 1 && (n[t[o]] = i), void 0 === n[t[o]] && (n[t[o]] = {}), (n = n[t[o]]);
        };
      [
        'device.notification.alert',
        'device.notification.confirm',
        'device.notification.prompt',
        'device.notification.vibrate',
        'device.accelerometer.watchShake',
        'device.accelerometer.clearShake',
        'biz.util.open',
        'biz.util.openLink',
        'biz.util.share',
        'biz.util.ut',
        'biz.util.datepicker',
        'biz.util.timepicker',
        'biz.user.get',
        'biz.navigation.setLeft',
        'biz.navigation.setRight',
        'biz.navigation.setTitle',
        'biz.navigation.setMenu',
        'biz.navigation.back',
        'device.notification.toast',
        'device.notification.showPreloader',
        'device.notification.hidePreloader',
        'device.location.get',
        'biz.util.uploadImage',
        'biz.util.previewImage',
        'ui.input.plain',
        'device.notification.actionSheet',
        'biz.util.qrcode',
        'device.connection.getNetworkType',
        'runtime.info',
        'biz.ding.post',
        'biz.telephone.call',
        'biz.telephone.sms',
        'biz.chat.chooseConversation',
        'biz.contact.createGroup',
        'biz.util.datetimepicker',
        'biz.util.chosen',
        'device.base.getUUID',
        'device.base.getInterface',
        'device.launcher.checkInstalledApps',
        'device.launcher.launchApp',
        'ui.progressBar.setColors',
        'runtime.permission.requestAuthCode',
        'runtime.permission.requestJsApis',
        'ui.pullToRefresh.enable',
        'ui.pullToRefresh.stop',
        'ui.pullToRefresh.disable',
        'ui.webViewBounce.enable',
        'ui.webViewBounce.disable',
        'biz.chat.getConversationInfo',
        'biz.map.search',
        'biz.map.locate',
        'biz.util.scan',
        'biz.contact.choose',
        'biz.contact.complexChoose',
        'util.localStorage.getItem',
        'util.localStorage.setItem',
        'util.localStorage.removeItem',
        'biz.navigation.createEditor',
        'biz.navigation.finishEditor',
        'biz.chat.pickConversation',
        'device.notification.modal',
        'biz.navigation.setIcon',
        'biz.navigation.close',
        'biz.util.uploadImageFromCamera',
        'internal.lwp.call',
        'device.geolocation.openGps',
        'biz.util.test',
        'internal.microapp.checkInstalled',
        'internal.user.getRole',
        'device.notification.extendModal',
        'internal.request.lwp',
        'biz.user.secretID',
        'internal.util.encryData',
        'biz.customContact.choose',
        'biz.customContact.multipleChoose',
        'biz.util.encrypt',
        'biz.util.decrypt',
        'device.audio.startRecord',
        'device.audio.stopRecord',
        'device.audio.onRecordEnd',
        'device.audio.play',
        'device.audio.pause',
        'device.audio.resume',
        'device.audio.stop',
        'device.audio.onPlayEnd',
        'device.audio.translateVoice',
        'device.audio.download',
        'biz.user.getUserInfo',
        'biz.util.selectLocalCity',
        'biz.util.selectCity',
        'device.notification.selectImg',
        'device.notification.toast',
        'device.notification.chooseImage',
        'biz.util.selectFiveRegionDivision',
        'biz.user.realAuthentication',
        'biz.zwfw.openPage',
        'biz.app.open',
        'biz.app.isSubscribe',
        'biz.app.addSubscribe',
        'biz.app.deleteSubscribe',
        'biz.util.search',
        'biz.map.zjnavi',
        'biz.navigation.setSegmentedTitle',
        'biz.navigation.setRightBtn',
        'biz.util.pay',
        'biz.util.sign',
        'device.notification.notify',
        'biz.navigation.hide',
        'biz.navigation.show',
        'biz.navigation.setBackground',
        'biz.navigation.setLeftBtn',
        'biz.util.request',
        'biz.map.getLocation',
        'biz.controller.push',
        'biz.map.navigation',
        'biz.order.alipay',
        'biz.user.checkLogin',
        'biz.controller.resume',
        'biz.util.directShare',
        'biz.user.login',
        'biz.clipboardData.setData',
        'biz.user.zmCertification',
        'device.audio.voicedictation',
        'biz.user.realAuthentication',
        'device.video.recordVideo',
        'biz.busCard.detail',
        'biz.busCard.auth',
        'biz.busCard.unAuth',
        'biz.busCard.cities',
        'biz.busCard.receive',
        'biz.busCard.allList',
        'biz.busCard.list',
        'biz.busCard.first',
        'device.notification.saveImage',
        'biz.user.getUserType',
        'biz.user.policeRealAuthentication',
        'biz.util.analysis',
      ].forEach(function(i) {
        o(i, function(e) {
          console.log(i),
            (function(c, e) {
              if (void 0 === window.WebViewJavascriptBridge)
                return console.log('WebViewJavascriptBridge 鏈畾涔�');
              var i = e || {},
                a = function(e) {
                  console.log('榛樿鎴愬姛鍥炶皟', c, e);
                },
                s = function(e) {
                  console.log('榛樿澶辫触鍥炶皟', c, e);
                },
                u = function() {};
              i.onSuccess && ((a = i.onSuccess), delete i.onSuccess),
                i.onFail && ((s = i.onFail), delete i.onFail),
                i.onCancel && ((u = i.onCancel), delete i.onCancel);
              var t = function(e) {
                  var i = JSON.parse(e || ''),
                    t = i.errorCode,
                    n = i.result,
                    o = i.errorMessage;
                  'biz.user.realAuthentication' == c &&
                    (n.auditId || (n.auditId = n.passId),
                    n.status || (!1 !== n.pass ? (n.status = 'true') : (n.status = 'false')),
                    -1 == t && ((t = '0'), (n.pass = 1))),
                    '0' === t
                      ? a && a.call(null, n)
                      : '-1' === t
                      ? u && u.call(null, o)
                      : s && s.call(null, o, t);
                },
                n = !1;
              switch (c) {
                case 'device.notification.alert':
                  m(i, {
                    title: '',
                    buttonName: '纭畾',
                  });
                  break;
                case 'device.notification.confirm':
                case 'device.notification.prompt':
                  m(i, {
                    title: '',
                    buttonLabels: ['纭畾', '鍙栨秷'],
                  });
                  break;
                case 'device.notification.vibrate':
                  m(i, {
                    duration: 300,
                  });
                  break;
                case 'device.accelerometer.watchShake':
                  h.ios && ((n = !0), (i.sensitivity = 3.2));
                  break;
                case 'biz.util.openLink':
                  m(i, {
                    credible: !0,
                    showMenuBar: !0,
                  });
                  var o = navigator.userAgent.toLowerCase();
                  -1 < o.indexOf('android') &&
                    -1 < o.indexOf('4.3.0') &&
                    /^zhengwt:.*$/.test(i.url) &&
                    (i.url =
                      'schema://openApp?Android=com.dtdream.zwhelper&param=' +
                      escape(i.url) +
                      '&userType=0&serviceCode=smapp');
                  break;
                case 'biz.contact.choose':
                  m(i, {
                    multiple: !0,
                    startWithDepartmentId: 0,
                    users: [],
                    corpId: (z && z.corpId) || '',
                  });
                  break;
                case 'biz.contact.complexChoose':
                  m(i, {
                    startWithDepartmentId: 0,
                    selectedUsers: [],
                    selectedDepartments: [],
                    corpId: (z && z.corpId) || '',
                  });
                  break;
                case 'biz.navigation.setSegmentedTitle':
                case 'biz.navigation.setRightBtn':
                case 'biz.navigation.setLeftBtn':
                case 'biz.navigation.setMenu':
                case 'biz.controller.resume':
                  h.ios && (n = !0);
                  break;
                case 'biz.navigation.setLeft':
                case 'biz.navigation.setRight':
                  h.ios && (n = !0),
                    m(i, {
                      show: !0,
                      control: !1,
                      showIcon: !0,
                      text: '',
                    });
                  break;
                case 'ui.pullToRefresh.enable':
                  h.ios && (n = !0);
                  break;
                case 'device.notification.toast':
                  m(i, {
                    text: 'toast',
                    duration: h.android ? (0 < h.duration - 3) + 0 : 3,
                    delay: 0,
                  });
                  break;
                case 'device.notification.showPreloader':
                  m(i, {
                    text: '鍔犺浇涓�...',
                    showIcon: !0,
                  });
                  break;
                case 'biz.util.uploadImage':
                  m(i, {
                    multiple: !1,
                  });
                  break;
                case 'biz.util.scan':
                  m(i, {
                    type: 'qrCode',
                  });
                  break;
                case 'biz.map.search':
                  m(i, {
                    scope: 500,
                  });
                  break;
                case 'biz.util.ut':
                  var r = i.value;
                  if (r && 'Object' == h.type(r) && window.JSON) {
                    if (h.ios) r = JSON.stringify(r);
                    else if (h.android) {
                      for (var d in r) l.push(d + '=' + r[d]);
                      r = l.join(',');
                    }
                  } else window.JSON || (r = '');
                  m(
                    i,
                    {
                      value: r,
                    },
                    !0,
                  );
                  break;
                case 'internal.util.encryData':
                  var l,
                    f = i.data;
                  if ('Object' == h.type(f)) {
                    for (var d in f) l.push(d + '=' + f[d]);
                    f = l.json('&');
                  }
                  m(
                    i,
                    {
                      data: f,
                    },
                    !0,
                  );
                  break;
                case 'biz.navigation.setIcon':
                  h.ios && (n = !0),
                    m(i, {
                      showIcon: !0,
                      iconIndex: '1',
                    });
                  break;
                case 'dd.biz.util.encrypt':
                  m(i, {
                    corpId: 'test',
                    data: {
                      h: 'hello',
                      w: 'world',
                    },
                  });
                  break;
                case 'dd.biz.util.decrypt':
                  m(i, {
                    orpId: 'test',
                    data: {
                      h: '1_1_29ae62f3a655aecd14b639a5aa50d3408e21c1ff668c71ea78f3d5cc340a9880',
                      w: '1_1_62983a28e92e59e2d889eb6bbba872cc141dd7b495e7a076847125fe70472e1e',
                    },
                  });
                  break;
                case 'biz.customContact.multipleChoose':
                case 'biz.customContact.choose':
                  m(i, {
                    isShowCompanyName: !1,
                  });
              }
              var p = {
                handlerName: c,
                params: i,
              };
              if (h.android) {
                var b = c.split('.'),
                  g = b.pop(),
                  v = b.join('.');
                WebViewJavascriptBridgeAndroid(a, s, v, g, p);
              } else
                h.ios &&
                  (n
                    ? (WebViewJavascriptBridge.registerHandler(c, function(e, i) {
                        t(e),
                          i &&
                            i({
                              errorCode: '0',
                              errorMessage: '鎴愬姛',
                            });
                      }),
                      WebViewJavascriptBridge.callHandler('dd.native.call', p))
                    : WebViewJavascriptBridge.callHandler('dd.native.call', p, t));
            })(i, e);
        });
      }),
        (h.__ns = o),
        'object' == ('undefined' == typeof module ? 'undefined' : _typeof(module)) &&
        module &&
        'object' == _typeof(module.exports)
          ? (module.exports = h)
          : 'function' == typeof define && (define.amd || define.cmd)
          ? define('dd', [], function() {
              return h;
            })
          : (e.dd = h);
    })(window),
    'undefined' == typeof jQuery)
  ) {
    var e = window.location.host;
    'jhsbmxcx.yyhj.zjzwfw.gov.cn' == e ||
      '118.178.118.33' == e ||
      '120.27.194.121:8080' == e ||
      '120.27.194.121' == e ||
      document.write(
        '<script type="text/javascript" src="//app.zjzwfw.gov.cn/client/jssdkcheck/js/jquery-1.8.3.min.js"></script>',
      );
  }
  dd && !dd.isInit && dd && setupWebViewJavascriptBridge(function() {});
}

function alipayBridge() {
  window.dd = {};
  var c = {
    'device.notification.alert': function(e) {
      AlipayJSBridge.call(
        'alert',
        {
          title: e.title,
          content: e.message,
          button: e.buttonName,
        },
        function() {
          e.onSuccess();
        },
      );
    },
    'device.notification.confirm': function(t) {
      AlipayJSBridge.call(
        'confirm',
        {
          title: t.title,
          message: t.message,
          okButton: t.buttonLabels[0],
          cancelButton: t.buttonLabels[1],
        },
        function(e) {
          var i = {
            buttonIndex: e.ok ? 1 : 0,
          };
          t.onSuccess(i);
        },
      );
    },
    'device.notification.prompt': function(t) {
      AlipayJSBridge.call(
        'prompt',
        {
          title: t.title,
          message: t.message,
          okButton: t.otherButtons,
          cancelButton: t.cancelButton,
        },
        function(e) {
          var i = {
            buttonIndex: e.ok ? 1 : 0,
            value: e.ok ? e.inputValue : '',
          };
          t.onSuccess(i);
        },
      );
    },
    'device.notification.showPreloader': function(e) {
      AlipayJSBridge.call('showLoading', {
        text: e.text,
      });
    },
    'device.notification.hidePreloader': function(e) {
      AlipayJSBridge.call('hideLoading');
    },
    'device.notification.toast': function(e) {
      AlipayJSBridge.call(
        'toast',
        {
          content: e.message,
          duration: 1e3 * e.duration,
        },
        function() {
          e.onSuccess();
        },
      );
    },
    'device.notification.actionSheet': function(t) {
      AlipayJSBridge.call(
        'actionSheet',
        {
          title: t.title,
          btns: t.otherButtons,
          cancelBtn: t.cancelButton,
        },
        function(e) {
          if (-1 !== e.index) {
            var i = {
              buttonIndex: e.index,
            };
            t.onSuccess(i);
          }
        },
      );
    },
    'biz.util.selectLocalCity': function(t) {
      AlipayJSBridge.call(
        'getCurrentLocation',
        {
          requestType: 1,
          bizType: 'didi',
        },
        function(e) {
          var i = {
            cityId: e.districtAdcode ? e.districtAdcode + '999' : e.cityAdcode + '999',
            orgCode: '001008999',
            webId: '',
            cityName: e.district ? e.district : e.city,
          };
          t.onSuccess(i);
        },
      );
    },
    'device.location.get': function(t) {
      AlipayJSBridge.call(
        'getCurrentLocation',
        {
          requestType: 2,
          bizType: 'didi',
        },
        function(e) {
          var i = {
            longitude: e.longitude,
            latitude: e.latitude,
            detailAddress:
              e.streetNumber != {} ? e.streetNumber.street + e.streetNumber.number : '',
            cityName: e.city,
            region: e.district,
          };
          t.onSuccess(i);
        },
      );
    },
    'device.connection.getNetworkType': function(t) {
      AlipayJSBridge.call('getNetworkType', function(e) {
        var i = {
          result: e.networkType,
        };
        t.onSuccess(i);
      });
    },
    'device.notification.chooseImage': function(t) {
      AlipayJSBridge.call(
        'chooseImage',
        {
          sourceType: ['camera', 'album'],
          count: 1,
        },
        function(e) {
          var i = {
            result: 'true',
            picPath: e.apFilePathsV2,
          };
          t.onSuccess(i);
        },
      );
    },
    'device.accelerometer.watchShake': function(i) {
      AlipayJSBridge.call('watchShake', function(e) {
        i.onSuccess({
          result: 'success',
        });
      });
    },
    'device.notification.vibrate': function(e) {
      AlipayJSBridge.call('vibrate');
    },
    'biz.util.scan': function(i) {
      AlipayJSBridge.call(
        'scan',
        {
          type: 'qrCode' == i.type ? 'qr' : 'bar',
        },
        function(e) {
          i.onSuccess({
            text: e.codeContent,
          });
        },
      );
    },
    'biz.telephone.call': function(e) {
      var i = document.createElement('a');
      document.documentElement.appendChild(i),
        (i.style.opacity = 0),
        i.addEventListener('click', function() {
          location.href = 'tel:' + e.corpId;
        }),
        i.click();
    },
    'biz.util.share': function(i) {
      AlipayJSBridge.call(
        'startShare',
        {
          onlySelectChannel: ['Weixin', 'WeixinTimeLine', 'Weibo', 'ALPContact'],
        },
        function(e) {
          AlipayJSBridge.call(
            'shareToChannel',
            {
              name: e.channelName,
              param: {
                contentType: 'auto',
                title: i.titleStr,
                content: i.contentStr,
                imageUrl: i.imageStr,
                captureScreen: !1,
                url: i.shareUrlStr,
              },
            },
            function(e) {
              console.log(e);
            },
          );
        },
      );
    },
    'biz.navigation.setTitle': function(e) {
      AlipayJSBridge.call('setTitle', {
        title: e.title,
      });
    },
    'biz.navigation.close': function(e) {
      AlipayJSBridge.call('popWindow');
    },
  };
  if (
    ((function(e) {
      function o(e, i, t) {
        for (var n in i) e[n] = t ? i[n] : void 0 !== e[n] ? e[n] : i[n];
      }
      var a = {},
        t = function(e, i) {
          for (var t = e.split('.'), n = a, o = 0, c = t.length; o < c; o++)
            o === c - 1 && (n[t[o]] = i), void 0 === n[t[o]] && (n[t[o]] = {}), (n = n[t[o]]);
        };
      [
        'device.notification.alert',
        'device.notification.confirm',
        'device.notification.prompt',
        'device.notification.vibrate',
        'device.accelerometer.watchShake',
        'device.accelerometer.clearShake',
        'biz.util.open',
        'biz.util.openLink',
        'biz.util.share',
        'biz.util.ut',
        'biz.util.datepicker',
        'biz.util.timepicker',
        'biz.user.get',
        'biz.navigation.setLeft',
        'biz.navigation.setRight',
        'biz.navigation.setTitle',
        'biz.navigation.setMenu',
        'biz.navigation.back',
        'device.notification.toast',
        'device.notification.showPreloader',
        'device.notification.hidePreloader',
        'device.location.get',
        'biz.util.uploadImage',
        'biz.util.previewImage',
        'ui.input.plain',
        'device.notification.actionSheet',
        'biz.util.qrcode',
        'device.connection.getNetworkType',
        'runtime.info',
        'biz.ding.post',
        'biz.telephone.call',
        'biz.telephone.sms',
        'biz.chat.chooseConversation',
        'biz.contact.createGroup',
        'biz.util.datetimepicker',
        'biz.util.chosen',
        'device.base.getUUID',
        'device.base.getInterface',
        'device.launcher.checkInstalledApps',
        'device.launcher.launchApp',
        'ui.progressBar.setColors',
        'runtime.permission.requestAuthCode',
        'runtime.permission.requestJsApis',
        'ui.pullToRefresh.enable',
        'ui.pullToRefresh.stop',
        'ui.pullToRefresh.disable',
        'ui.webViewBounce.enable',
        'ui.webViewBounce.disable',
        'biz.chat.getConversationInfo',
        'biz.map.search',
        'biz.map.locate',
        'biz.util.scan',
        'biz.contact.choose',
        'biz.contact.complexChoose',
        'util.localStorage.getItem',
        'util.localStorage.setItem',
        'util.localStorage.removeItem',
        'biz.navigation.createEditor',
        'biz.navigation.finishEditor',
        'biz.chat.pickConversation',
        'device.notification.modal',
        'biz.navigation.setIcon',
        'biz.navigation.close',
        'biz.util.uploadImageFromCamera',
        'internal.lwp.call',
        'device.geolocation.openGps',
        'biz.util.test',
        'internal.microapp.checkInstalled',
        'internal.user.getRole',
        'device.notification.extendModal',
        'internal.request.lwp',
        'biz.user.secretID',
        'internal.util.encryData',
        'biz.customContact.choose',
        'biz.customContact.multipleChoose',
        'biz.util.encrypt',
        'biz.util.decrypt',
        'device.audio.startRecord',
        'device.audio.stopRecord',
        'device.audio.onRecordEnd',
        'device.audio.play',
        'device.audio.pause',
        'device.audio.resume',
        'device.audio.stop',
        'device.audio.onPlayEnd',
        'device.audio.translateVoice',
        'device.audio.download',
        'biz.user.getUserInfo',
        'biz.util.selectLocalCity',
        'biz.util.selectCity',
        'device.notification.selectImg',
        'device.notification.toast',
        'device.notification.chooseImage',
        'biz.util.selectFiveRegionDivision',
        'biz.user.realAuthentication',
        'biz.zwfw.openPage',
        'biz.app.open',
        'biz.app.isSubscribe',
        'biz.app.addSubscribe',
        'biz.app.deleteSubscribe',
        'biz.util.search',
        'biz.map.zjnavi',
        'biz.navigation.setSegmentedTitle',
        'biz.navigation.setRightBtn',
        'biz.util.pay',
        'biz.util.sign',
        'device.notification.notify',
        'biz.navigation.hide',
        'biz.navigation.show',
        'biz.navigation.setBackground',
        'biz.navigation.setLeftBtn',
        'biz.util.request',
        'biz.map.getLocation',
        'biz.controller.push',
        'biz.map.navigation',
        'biz.order.alipay',
        'biz.user.checkLogin',
        'biz.controller.resume',
        'biz.util.directShare',
        'biz.user.login',
        'biz.clipboardData.setData',
        'biz.user.zmCertification',
        'device.audio.voicedictation',
        'biz.user.realAuthentication',
        'device.video.recordVideo',
        'biz.busCard.detail',
        'biz.busCard.auth',
        'biz.busCard.unAuth',
        'biz.busCard.cities',
        'biz.busCard.receive',
        'biz.busCard.allList',
        'biz.busCard.list',
        'biz.busCard.first',
        'device.notification.saveImage',
        'biz.user.getUserType',
      ].forEach(function(i) {
        t(i, function(e) {
          !(function(e, i) {
            var t = i || {};
            switch (e) {
              case 'device.notification.alert':
                o(t, {
                  title: '',
                  buttonName: '纭畾',
                });
                break;
              case 'device.notification.confirm':
              case 'device.notification.prompt':
                o(t, {
                  title: '',
                  buttonLabels: ['纭畾', '鍙栨秷'],
                });
                break;
              case 'device.notification.vibrate':
                o(t, {
                  duration: 300,
                });
                break;
              case 'device.accelerometer.watchShake':
                a.ios && ((registered = !0), (t.sensitivity = 3.2));
                break;
              case 'device.notification.toast':
                o(t, {
                  text: 'toast',
                  duration: a.android ? (0 < a.duration - 3) + 0 : 3,
                  delay: 0,
                });
                break;
              case 'device.notification.showPreloader':
                o(t, {
                  text: '鍔犺浇涓�...',
                  showIcon: !0,
                });
                break;
              case 'biz.util.uploadImage':
                o(t, {
                  multiple: !1,
                });
                break;
              case 'biz.util.scan':
                o(t, {
                  type: 'qrCode',
                });
                break;
              case 'biz.navigation.setIcon':
                a.ios && (registered = !0),
                  o(t, {
                    showIcon: !0,
                    iconIndex: '1',
                  });
                break;
              case 'biz.customContact.choose':
                o(t, {
                  isShowCompanyName: !1,
                });
            }
            var n = c[e];
            n ? n(t) : console.log('alipayApi 鏈畾涔�');
          })(i, e);
        });
      }),
        (a.__ns = t),
        'object' == ('undefined' == typeof module ? 'undefined' : _typeof(module)) &&
        module &&
        'object' == _typeof(module.exports)
          ? (module.exports = a)
          : 'function' == typeof define && (define.amd || define.cmd)
          ? define('dd', [], function() {
              return a;
            })
          : (e.dd = a);
    })(window),
    'undefined' == typeof jQuery)
  ) {
    var e = window.location.host;
    'jhsbmxcx.yyhj.zjzwfw.gov.cn' == e ||
      '118.178.118.33' == e ||
      '120.27.194.121:8080' == e ||
      '120.27.194.121' == e ||
      document.write(
        '<script type="text/javascript" src="//app.zjzwfw.gov.cn/client/jssdkcheck/js/jquery-1.8.3.min.js"></script>',
      );
  }
  dd && !dd.isInit && dd && setupWebViewJavascriptBridge(function() {});
}
(window.loadScript = function(e, i, t) {
  var n = document.createElement('script');
  (n.type = 'text/javascript'),
    (n.src = e),
    n.readyState
      ? (n.onreadystatechange = function() {
          ('loaded' != n.readyState && 'complete' != n.readyState) ||
            ((n.onreadystatechange = null), i(e));
        })
      : (n.onload = function() {
          i(e);
        }),
    (t = t || document.getElementsByTagName('head')[0]).insertBefore(n, t.firstChild);
}),
  (window.setupWebViewJavascriptBridge = setupWebViewJavascriptBridge),
  (window.onerror = function(e, i, t) {}),
  (window.jmportal = {
    login: {
      getUserInfo: getUserInfoString,
    },
    QRCode: {
      getQRCode: getQRCodeString,
    },
  });
var userAgent = window.navigator.userAgent;
/AlipayClient/.test(userAgent)
  ? document.addEventListener('AlipayJSBridgeReady', alipayBridge(), !1)
  : ddBridge();
