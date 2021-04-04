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
			headerName: 'x-csrf-token',
			ignore: ctx => {
				return ctx.request.url.startsWith('/api')
			},
		},
		// 跨域白名单
		// domainWhiteList: ['http://localhost:3000'],
	};


	// 允许跨域的方法
	config.cors = {
		origin: '*',
		allowMethods: 'GET, PUT, POST, DELETE, PATCH'
	};


	return {
		...config,
		...userConfig,
	};
};
