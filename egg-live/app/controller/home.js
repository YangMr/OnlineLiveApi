'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
	
	// ctx.apiSuccess('hello world')
	
	ctx.throw("错误啦")
  }
}

module.exports = HomeController;
