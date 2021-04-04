"use strict"

const Controller = require("egg").Controller;

class ManagerController extends Controller {
	//创建管理员
	async create(){
		const {ctx} = this;
		
		await ctx.render("/admin/manager/create.html")
	}
}

module.exports = ManagerController;