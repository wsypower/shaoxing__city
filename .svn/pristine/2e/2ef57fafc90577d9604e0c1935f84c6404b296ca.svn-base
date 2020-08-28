import { stringify } from "qs";
import request from "@/utils/request";

const POST = "POST";

// 获取验证码
export async function getVCode(params) {
  return request(`/api/syssp/getVcode?${stringify(params)}`, { method: POST });
}

// 注册
export async function register(params) {
  return request(`/api/syssp/register?${stringify(params)}`, { method: POST });
}

// 登录
export async function login(params) {
  return request(`/api/syssp/login?${stringify(params)}`, { method: POST });
}

// 修改密码
export async function changePWD(params) {
  return request(`/api/syssp/changePWD?${stringify(params)}`, { method: POST });
}

// 上报
export async function report(params) {
  return request(`/api/syssp/report?${stringify(params)}`, { method: POST });
}

// 获取气象 by the front end
export async function getMeteorology() {
  // https://tianqiapi.com/api?version=v6&appid=86691714&appsecret=gCaPU8WI
  const params = {
    version: "v6",
    appid: "86691714",
    appsecret: "gCaPU8WI",
    cityid: "101210501",
    city: "绍兴",
    vue: "1"
  };
  return request(`https://tianqiapi.com/api?${stringify(params)}`);
}

// 案卷图片
export async function uploadCaseImage(params) {
  return request(`/api/syssp/fileUpload?${stringify(params)}`, {
    method: POST,
    body: params
  });
}

// 历史案卷
export async function getEventList(params) {
  return request(`/api/syssp/eventlist?${stringify(params)}`, { method: POST });
}
