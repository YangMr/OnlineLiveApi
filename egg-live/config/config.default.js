/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1617533758973_2855';

	// add your middleware config here
	config.middleware = ['errorHandler'];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	//关闭csrf，开启跨域
	config.security = {
		// 关闭 csrf
		csrf: {
			enable: false,
			ignoreJSON: true
			// headerName: 'x-csrf-token',
			// ignore: ctx => {
			// 	return ctx.request.url.startsWith('/api')
			// },
		},
		// 跨域白名单
		domainWhiteList: ['*'],
	};


	// 允许跨域的方法
	config.cors = {
		origin: '*',
		allowMethods: 'GET, PUT, POST, DELETE, PATCH'
	};

	//数据库配置
	config.sequelize = {
		dialect: 'mysql',
		host: '127.0.0.1',
		username: "root",
		password: 'root',
		port: 3306,
		database: 'egg-live',
		// 中国时区
		timezone: '+08:00',
		define: {
			// 取消数据表名复数
			freezeTableName: true,
			// 自动写入时间戳 created_at updated_at
			timestamps: true,
			// 字段生成软删除时间戳 deleted_at
			// paranoid: true,
			createdAt: 'created_time',
			updatedAt: 'updated_time',
			// deletedAt: 'deleted_time',
			// 所有驼峰命名格式化
			underscored: true
		}
	};

	config.view = {
		mapping: {
			'.html': 'nunjucks',
		},
	};

	config.valparams = {
		locale    : 'zh-cn',
		throwError: true
	};

	config.crypto = {
		secret:  'qhdgw@45ncashdaksh2!#@3nxjdas*_672'
	};

	return {
		...config,
		...userConfig,
	};
};
