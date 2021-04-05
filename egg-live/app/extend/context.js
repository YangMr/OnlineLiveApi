// app/extend/context.js
module.exports = {
  // 成功提示
  apiSuccess(data = '', msg = 'ok', code = 200) {
    this.body = { msg, data };
    this.status = code;
  },
  // 失败提示
  apiFail(data = '', msg = 'fail', code = 400) {
    this.body = { msg, data };
    this.status = code;
  },
  //分页
  async page(moduleName,where = {},options = {}){
    let page = this.query.page ? parseInt(this.query.page) : 1;
		let limit = this.query.limit ? parseInt( this.query.limit) : 5;
		let offset = (page -1) * limit;

    let res = await this.app.model[moduleName].findAndCountAll({
      where,
      offset,
      limit,
      ...options
    });

    return res.rows;
  }
};