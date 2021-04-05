'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  /*admin API*/
  router.get("/admin/manager",controller.admin.manager.index);
  router.get("/admin/manager/create",controller.admin.manager.create);
  router.post("/admin/manager",controller.admin.manager.save);

  //创建管理员
  router.post("/admin/api/manager",controller.admin.manager.isave);
  //获取管理员列表
  router.get("/admin/api/manager",controller.admin.manager.iindex);

  
};
