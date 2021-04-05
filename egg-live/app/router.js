'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  //admin API
  router.get("/admin/manager/create",controller.admin.manager.create);
  router.post("/admin/manager",controller.admin.manager.save);
  router.post("/admin/api/manager",controller.admin.manager.isave);
};
