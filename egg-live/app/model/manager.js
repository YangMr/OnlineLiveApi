
module.exports = app => {
    const { STRING, INTEGER, DATE, ENUM, TEXT } = app.Sequelize;

    const Manager = app.model.define('manager', {
        id: {
            type: INTEGER(20),
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: STRING(30),
            allowNull: false,
            defaultValue: '',
            comment: '用户名',
            unique: true
        },
        password: {
            type: STRING,
            allowNull: false,
            defaultValue: '',
            comment: "密码"
        },
        created_time:DATE,
        updated_time: DATE,
    });
    return Manager;
};