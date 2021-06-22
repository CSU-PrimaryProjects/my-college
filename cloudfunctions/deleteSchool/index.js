// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event) => {

  const wxContext = cloud.getWXContext()
  const db = cloud.database();
  const _ = db.command;

    await db.collection('users')
      .where({
        _openid: wxContext.OPENID,
        'schools.name':event.theSchoolName,
      })
      .update({
        data: {
          'schools.$.name':null
        }
      }).then(res => console.log(res))

}
