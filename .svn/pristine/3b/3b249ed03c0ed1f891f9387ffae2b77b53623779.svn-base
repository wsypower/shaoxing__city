/**
 * 调用原生接口方法
 * @param {Object} type "zw"政务APP下运行,"hesc" 天翼app下运行
 * @param {Object} method 需要调用的方法名
 * @param {Object} calllback 回调函数
 */
window.jstype = "";
window.nativeMethod = function(method, params, successFun, errorFun) {
  // eslint-disable-next-line no-undef
  var tp = jstype || "hesc";
  // getMac
  if (method === "BaiduLocation") {
    window.callMobile(
      "Native",
      "BaiduLocation",
      {},
      "BaiduLocation",
      successFun,
      errorFun
    );
  }
  // getMac
  if (method === "getMac") {
    window.callMobile("Native", "getMac", {}, "getMac", successFun, errorFun);
  }
  //打电话
  else if (method === "call") {
    if (tp === "zw") {
      window.dd.biz.telephone.call({
        users: ["101", "102"], //用户列表，工号
        corpId: params.phone, //企业id
        onSuccess: function(info) {
          successFun(info);
        },
        onFail: function(err) {
          errorFun(err);
        }
      });
    } else {
      window.callMobile("Native", "call", { phone: params.phone }, "calltail");
    }
  }
  //发送短信
  else if (method === "sendmsg") {
    if (tp === "zw") {
      window.dd.biz.telephone.sms({
        text: params.content, //内容
        phoneNumber: params.phone, //电话号码
        onSuccess: function() {},
        onFail: function() {}
      });
    } else {
      window.callMobile(
        "Native",
        "sendmsg",
        { phone: params.phone, msg: params.content },
        "sendmsg"
      );
    }
  }
  //拍照
  else if (method === "takephone") {
    if (tp === "zw") {
      window.dd.device.notification.chooseImage({
        cancelButton: "取消",
        otherButtons: ["拍照", "相册"],
        onSuccess: function(data) {
          successFun(data);
          // log(data.picPath + data.result)
        },
        onFail: function(err) {
          errorFun(err);
        }
      });
    } else {
      window.callMobile(
        "Native",
        "takephoto",
        { path: params.path },
        "takephoto",
        successFun,
        errorFun
      );
    }
  }
  //选择照片
  else if (method === "chooseimg") {
    if (tp === "zw") {
      window.dd.device.notification.chooseImage({
        cancelButton: "取消",
        otherButtons: ["拍照", "相册"],
        onSuccess: function(data) {
          successFun(data);
        },
        onFail: function(err) {
          errorFun(err);
        }
      });
    } else {
      window.callMobile(
        "Native",
        "chooseimg",
        { maxSelect: params.maxSelect },
        "openSystemPhotoGallery",
        successFun,
        errorFun
      );
    }
  }
  //开始录音
  else if (method === "startRecord") {
    if (tp === "zw") {
      window.dd.device.audio.startRecord({
        onSuccess: function() {},
        onFail: function(err) {}
      });
    } else {
      window.callMobile(
        "Native",
        "startRecord",
        { path: params.path },
        "startRecord",
        successFun,
        errorFun
      );
    }
  }
  //停止录音
  else if (method === "stopRecord") {
    if (tp === "zw") {
      window.dd.device.audio.stopRecord({
        onSuccess: function(res) {
          //			        res.mediaId; // 返回音频的MediaID，可用于本地播放和音频下载
          //			        res.duration; // 返回音频的时长，单位：秒
          successFun(res);
        },
        onFail: function(err) {}
      });
    } else {
      window.callMobile(
        "Native",
        "stopRecord",
        { path: params.path },
        "stopRecord",
        successFun,
        errorFun
      );
    }
  }
  //播放录音
  else if (method === "playvoice") {
    if (tp === "zw") {
      window.dd.device.audio.download({
        mediaId: params.path,
        onSuccess: function(res) {
          window.nativeMethod.localvoice = res.localAudioId;
          window.dd.device.audio.play({
            localAudioId: res.localAudioId,
            onSuccess: function() {},
            onFail: function(err) {}
          });
          window.dd.device.audio.onPlayEnd({
            onSuccess: function(res) {
              successFun(res.localAudioId);
            },
            onFail: function(err) {}
          });
        },
        onFail: function(err) {}
      });
    } else {
      window.callMobile(
        "Native",
        "playvoice",
        { path: params.path },
        "playvoice",
        successFun,
        errorFun
      );
    }
  }
  //暂停播放
  else if (method === "pauseplayvoice") {
    if (tp === "zw") {
    } else {
      window.callMobile(
        "Native",
        "pauseplayvoice",
        { path: params.path },
        "pauseplayvoice",
        successFun,
        errorFun
      );
    }
  }
  //继续播放
  else if (method === "resumeplayvoice") {
    if (tp === "zw") {
    } else {
      window.callMobile(
        "Native",
        "resumeplayvoice",
        { path: params.path },
        "resumeplayvoice",
        successFun,
        errorFun
      );
    }
  }
  //停止播放
  else if (method === "endvoice") {
    if (tp === "zw") {
      window.dd.device.audio.stop({
        localAudioId: params.path,
        onSuccess: function(res) {},
        onFail: function() {}
      });
    } else {
      window.callMobile(
        "Native",
        "endvoice",
        { path: params.path },
        "endvoice",
        successFun,
        errorFun
      );
    }
  }
  //获取位置信息
  else if (method === "location") {
    if (tp === "zw") {
      window.dd.device.location.get({
        onSuccess: function(data) {
          successFun(data);
          // {
          //"latitude": "120.0032",
          //"longitude": "30.3238",
          //"detailAddress": "转塘街道云栖小镇中大银座9号楼",
          //"cityName":"杭州市",
          //"region": "西湖区"
          //}
        },
        onFail: function() {}
      });
    } else {
      window.callMobile(
        "Native",
        "location",
        { path: "" },
        "location",
        successFun,
        errorFun
      );
    }
  }
  //打开第三方软件
  else if (method === "launchapp") {
    if (tp === "zw") {
      window.dd.device.launcher.launchApp({
        app: params.path, //iOS:应用scheme;Android:应用包名
        activity: params.activity, //仅限Android，打开指定Activity，可不传。如果为空，就打开App的Main入口Activity
        onSuccess: function(data) {
          /*{
			            result: true //true 唤起成功 false 唤起失败
			        }*/
          successFun(data);
        },
        onFail: function(err) {}
      });
    } else {
      window.callMobile(
        "Native",
        "launchapp",
        { path: params.path, activity: params.activity },
        "launchapp",
        successFun,
        errorFun
      );
    }
  }
  //获取网络类型
  else if (method === "networktype") {
    if (tp === "zw") {
      window.dd.device.connection.getNetworkType({
        onSuccess: function(data) {
          successFun(data);
          /*
			        {
			            result: 'wifi' // result值: wifi 2g 3g 4g unknown none   none表示离线
			        }
			        */
        },
        onFail: function(err) {}
      });
    } else {
      window.callMobile(
        "Native",
        "networktype",
        { path: params.path },
        "networktype",
        successFun,
        errorFun
      );
    }
  }
  //保存缓存
  else if (method === "savelocal") {
    if (tp === "zw") {
      window.dd.util.localStorage.setItem({
        key: params.key,
        value: params.value,
        onSuccess: function(data) {
          successFun(data);
        },
        onFail: function(err) {}
      });
    } else {
      window.callMobile(
        "Native",
        "savelocal",
        { key: params.key, value: params.value },
        "savelocal",
        successFun,
        errorFun
      );
    }
  }
  //读取缓存
  else if (method === "getlocal") {
    if (tp === "zw") {
      window.dd.util.localStorage.getItem({
        key: params.key,
        onSuccess: function(data) {
          successFun(data);

          /*{key:’value’}*/
        },
        OnFail: function(err) {}
      });
    } else {
      window.callMobile(
        "Native",
        "getlocal",
        { key: params.key },
        "getlocal",
        successFun,
        errorFun
      );
    }
  }
  //删除缓存
  else if (method === "deletelocal") {
    if (tp === "zw") {
      window.dd.util.localStorage.removeItem({
        key: params.key,
        onSuccess: function(data) {
          successFun(data);
        },
        OnFail: function(err) {}
      });
    } else {
      window.callMobile(
        "Native",
        "deletelocal",
        { key: params.key },
        "deletelocal",
        successFun,
        errorFun
      );
    }
  }
  //图片预览
  else if (method === "previewpic") {
    if (tp === "zw") {
      window.dd.util.localStorage.removeItem({
        key: params.key,
        onSuccess: function(data) {
          successFun(data);
        },
        OnFail: function(err) {}
      });
    } else {
      window.callMobile(
        "Native",
        "previewpic",
        { pics: params.paths },
        "previewpic",
        successFun,
        errorFun
      );
    }
  }
  //打开第三方超链接
  else if (method === "hrefurl") {
    if (tp === "zw") {
      window.dd.util.localStorage.removeItem({
        key: params.key,
        onSuccess: function(data) {
          successFun(data);
        },
        OnFail: function(err) {}
      });
    } else {
      window.callMobile(
        "Native",
        "hrefurl",
        { url: params.url },
        "hrefurl",
        successFun,
        errorFun
      );
    }
  }
  //打开地图
  else if (method === "mapapplication") {
    window.callMobile(
      "Native",
      "mapapplication",
      { strx: params.strx, stry: params.stry },
      "mapapplication",
      successFun,
      errorFun
    );
  }
  //裁剪图片
  else if (method === "clippicture") {
    window.callMobile(
      "Native",
      "clippicture",
      { path: "" },
      "clippicture",
      successFun,
      errorFun
    );
  }
  //alert
  else if (method === "alert") {
    window.callMobile("Native", "alert", params, "alert", successFun, errorFun);
  }
  //confirm
  else if (method === "confirm") {
    window.callMobile(
      "Native",
      "confirm",
      params,
      "confirm",
      successFun,
      errorFun
    );
  }
  //toast
  else if (method === "toast") {
    window.callMobile("Native", "toast", params, "toast", successFun, errorFun);
  }
  //日历选择
  else if (method === "calendar") {
    window.callMobile(
      "Native",
      "calendar",
      params,
      "calendar",
      successFun,
      errorFun
    );
  }
  //扫二维码
  else if (method === "scanbar") {
    window.callMobile(
      "Native",
      "scanbar",
      params,
      "scanbar",
      successFun,
      errorFun
    );
  }
  //单选
  else if (method === "signalchoose") {
    window.callMobile(
      "Native",
      "signalchoose",
      params,
      "signalchoose",
      successFun,
      errorFun
    );
  }
  //多选
  else if (method === "multiechoose") {
    window.callMobile(
      "Native",
      "multiechoose",
      params,
      "multiechoose",
      successFun,
      errorFun
    );
  }
  //打开word等
  else if (method === "openword") {
    window.callMobile(
      "Native",
      "openword",
      params,
      "openword",
      successFun,
      errorFun
    );
  }
  //车牌识别
  else if (method === "platerecognition") {
    window.callMobile(
      "Native",
      "platerecognition",
      params,
      "platerecognition",
      successFun,
      errorFun
    );
  }
  //打开翼T
  else if (method === "onlinemeeting") {
    window.callMobile(
      "Native",
      "onlinemeeting",
      params,
      "onlinemeeting",
      successFun,
      errorFun
    );
  }
  //打开人脸识别
  else if (method === "facerecognition") {
    window.callMobile(
      "Native",
      "facerecognition",
      params,
      "facerecognition",
      successFun,
      errorFun
    );
  }
  //语音转文字
  else if (method === "voicetoword") {
    window.callMobile(
      "Native",
      "voicetoword",
      params,
      "voicetoword",
      successFun,
      errorFun
    );
  } else {
    window.callMobile("Native", method, params, method, successFun, errorFun);
  }
};

window.GetQueryString = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};
