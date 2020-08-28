import { Toast } from "vant";

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [newOptions] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, newOptions = {}) {
  if (newOptions.body instanceof FormData) {
    // newOptions.body is FormData
    newOptions.headers = { Accept: "application/json", ...newOptions.headers };
  } else {
    newOptions.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      ...newOptions.headers
    };
    if (newOptions.method === "POST") {
      newOptions.body = JSON.stringify(newOptions.body);
    }
  }
  return fetch(url, newOptions)
    .then(response => {
      return response.json().then(result => {
        if (result.code === "45010004") {
          sessionStorage.removeItem("TOKEN");
          location.replace("/login");
          return;
        }
        return result;
      });
    })
    .catch(() => Toast.fail("网络异常"));
}
