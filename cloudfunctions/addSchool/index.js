// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database();
  const _ = db.command;

  //判断是否存在该用户
  let res = await db.collection('users')
    .where({
      _openid: wxContext.OPENID
    })
    .get()

  if (res.data.length == 0) {
    console.log(res);
    //不存在时，插入该用户
    await db.collection('users')
      .add({
        data: {
          _openid: wxContext.OPENID,
          schools: []
        },
      })
  }


  let isAdded = false;

  await db.collection('users')
    .where({
      _openid: wxContext.OPENID
    })
    .get().then((res) => {
      console.log(res);
      res.data[0] ? res.data[0].schools.map(
        (item) => {
          if (item.name === event.name)
            isAdded = true;
        })
        : {}
    })

  //插入数据
  if (!isAdded) {
    await db.collection('users')
      .where({
        _openid: wxContext.OPENID,
      })
      .update({
        data: {
          schools: _.unshift({
            name: event.name,
            city: event.city,
            url: event.url,
            imgUrl: event.imgUrl,
            leixing: event.leixing,
            score: event.score,
            labels: event.labels,
          })
        }
      }).then(res => console.log(res))
  }

}