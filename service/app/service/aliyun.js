'use strict';

/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
const Service = require('egg').Service;
const Client = require('aliyun-api-gateway').Client;
const UUID = require('uuid');

/**
 * Gateway for aliyun
 * @param {*} param0 paramters
 * @return {Object} return value
 */
const Gateway = async ({
  url, apiVer, params, iotToken, config,
}) => {
  // 用appKey和appSecret初始化客户端
  const client = new Client(config.AppKey, config.AppSecret);
  const result = await client.post(url, {
    data: {
      id: UUID.v1(), // 请求唯一标识，必填
      version: '1.0', // 协议版本，固定值1.0
      request: {
        iotToken, // iottoken，选填
        apiVer, // api版本，必填
      },
      params: params || {}, // 业务参数，必填
    },
    headers: {
      accept: 'application/json',
    },
    timeout: 3000,
  });
  return result;
};

class AliyunService extends Service {
  async accountAtt() {
    const { ctx, config } = this;
    const params = {
      url: 'http://api.link.aliyun.com/iotx/account/listAttr',
      apiVer: '1.0.4',
      params: {
        request: 'value1',
      },
      config: {
        AppKey: config.aliyun.iot.AppKey,
        AppSecret: config.aliyun.iot.AppSecret,
      },
    };

    return Gateway(params);
    //   .then(res => console.log(res))
    //   .catch(res => console.log(res));

  }
}

module.exports = AliyunService;
