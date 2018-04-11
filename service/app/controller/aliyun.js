'use strict';

/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
const Controller = require('egg').Controller;

class AliyunController extends Controller {
  async index() {
    this.ctx.body = 'hi, aliyun';
  }

  async accountAtt() {
    const { ctx, service } = this;
    const result = await service.aliyun.accountAtt();
    this.ctx.body = result;
  }
}

module.exports = AliyunController;
