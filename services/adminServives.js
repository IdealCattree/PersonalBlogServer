const Admin = require("../models/admin");

/**
 * 创建管理员
 * @param {*} adminObj
 */
exports.addAdmin = async function (adminObj) {
  const ins = await Admin.create(adminObj);
  return ins.toJSON();
};

/**
 * 登录
 * @param {*} admin_id
 * @param {*} admin_pwd
 */
exports.login = async function (admin_id, admin_pwd) {
  console.log(admin_id, admin_pwd);
  const result = await Admin.findOne({
    where: {
      admin_id,
      admin_pwd,
    },
  });
  if (result && result.admin_id === admin_id && result.admin_pwd === admin_pwd) {
    const res = JSON.parse(JSON.stringify(result));

    return {
      id: res.id,
      loginId: res.admin_id,
      name: res.admin_name,
    };
  } else {
    return null;
  }
};

/**
 *  根据id查询
 * @param {*} id
 */
exports.getAdminById = async function (id) {
  const result = await Admin.findByPk(id, {
    attributes: ["id", "admin_id", "admin_name"],
  });
  return result.toJSON();
};

/**
 * 根据id删除管理员
 * @param {*} id
 */
exports.deleteAdmin = async function (id) {
  const result = await Admin.destroy({
    where: {
      id,
    },
  });
  return JSON.parse(JSON.stringify(result));
};

/**
 * 根据id修改管理员
 * @param {*} id
 * @param {*} adminObj
 */
exports.updateAdmin = async function (id, adminObj) {
  const result = await Admin.update(adminObj, {
    where: {
      id,
    },
  });
  return JSON.parse(JSON.stringify(result));
};
