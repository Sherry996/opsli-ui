import request from "@/utils/request";

export function getAllOptions(data) {
  return request({
    url: "/api/v1/sys/options/findAllOptions",
    method: "get",
    params: data,
  });
}

export function doUpdateOptions(data) {
  return request({
    url: "/api/v1/sys/options/updateOptions",
    method: "post",
    data,
  });
}

// ===========================

/**
 * 创建 加解密公私钥
 * @param type
 * @returns {AxiosPromise}
 */
export function doCreateCrypto(type) {
  return request({
    url: "/api/v1/sys/options/createCrypto",
    method: "post",
    params: {
      type: type
    },
  });
}
