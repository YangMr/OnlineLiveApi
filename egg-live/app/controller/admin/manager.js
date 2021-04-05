"use strict"

const Controller = require("egg").Controller;

class ManagerController extends Controller {
	//创建管理员
	async create() {
		const {
			ctx
		} = this;
		await ctx.render("/admin/manager/create.html")
	}

	//创建管理员接口
	async save() {
		const {
			ctx,
			app
		} = this;


		//对前台发送的参数进行验证
		ctx.validate({
			username : {
				type : "string",
				required : true,
				desc : "管理员账户"
			},
			password : {
				type : "string",
				required : true,
				desc : "密码"
			}
		})

		//获取前台发送过来的用户名和密码
		let {
			username,
			password
		} = ctx.request.body;

		//查询数据库是否存在当前要创建的用户名
		if (await app.model.Manager.findOne({
			where: {
				username
			}
		})) {
			return ctx.apiFail("该管理员已存在")
		}

		//将用户名和密码存储到数据库
		let manager = await app.model.Manager.create({
			username,
			password
		})

		ctx.apiSuccess(manager)
	}

	async isave() {
		const {
			ctx,
			app
		} = this;

		//获取前台发送过来的用户名和密码
		let {
			username,
			password
		} = ctx.request.body;

		//查询数据库是否存在当前要创建的用户名
		if (await app.model.Manager.findOne({
			where: {
				username
			}
		})) {
			return ctx.apiFail("该管理员已存在")
		}


		//将用户名和密码存储到数据库
		let manager = await app.model.Manager.create({
			username,
			password
		})

		ctx.apiSuccess({
			message: "创建成功"
		})
	}

	//获取管理员列表
	async index(){
		let {ctx,app} = this;

		let data = await ctx.page("Manager")

		console.log(data)

		// let res = await app.model.Manager.findAndCountAll();

		await ctx.render("/admin/manager/index.html",{
			data
		})
	}


	//获取管理员列表接口
	async iindex(){
		let {ctx,app} = this;

		let page = ctx.query.page ? parseInt(ctx.query.page) : 1;
		let limit = ctx.query.limit ? parseInt( ctx.query.limit) : 5;
		let offset = (page -1) * limit;

		let list = await app.model.Manager.findAndCountAll({
			offset,
			limit
		});

		ctx.apiSuccess({
			data : list
		})
	}

}

module.exports = ManagerController;
