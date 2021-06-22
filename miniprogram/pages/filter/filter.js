//index.js
const app = getApp()

Page({
  data: {
    provinces: [{ text: '山东省', value: 0 }, { text: '山西省', value: 1 }, { text: '辽宁省', value: 2 }, { text: '吉林省', value: 3 }, { text: '黑龙江省', value: 4 }, { text: '江苏省', value: 5 }, { text: '浙江省', value: 6 }, { text: '安徽省', value: 7 }, { text: '福建省', value: 8 }, { text: '江西省', value: 9 }, { text: '河北省', value: 10 }, { text: '河南省', value: 11 }, { text: '湖北省', value: 12 }, { text: '湖南省', value: 13 }, { text: '广东省', value: 14 }, { text: '海南省', value: 15 }, { text: '四川省', value: 16 }, { text: '贵州省', value: 17 }, { text: '云南省', value: 18 }, { text: '陕西省', value: 19 }, { text: '甘肃省', value: 20 }, { text: '青海省', value: 21 }, { text: '台湾省', value: 22 }],
    value1: 0,
    active: 'filter',
    schools:[{"school": {
      "sort": [9223372036854776000],
      "type": "doc",
      "source": {
        "money": "4880",
        "image": "https://static-data.eol.cn/upload/logo/885.jpg",
        "renqizhi": "人气值",
        "daxue": "大学",
        "subject": {
          "list": [
            {
              "score": "455",
              "pici": "普通类二段",
              "name": "综合",
              "fencha": "305"
            }
          ]
        },
        "city": "北京",
        "subject1": {
          "list1": [
            {
              "name1": "综合",
              "fencha1": "305",
              "score1": "455",
              "pici1": "普通类二段"
            }
          ]
        },
        "zhuanketype": "双高院校;国家级示范;现代学徒制试点院校",
        "location": "山东",
        "type": "985;211;强基计划;双一流",
        "pcurl": "https://gkcx.eol.cn/school/885?fromcoop=sougou",
        "province": "北京",
        "hit": "高考锦囊",
        "nature": "公办",
        "company": "",
        "renqizhirange": "1211",
        "updatetime": "2021-06-21 11:57:05",
        "key": "北京工业职业技术学院山东",
        "leixing": "理工类",
        "school": "北京工业职业技术学院",
        "level": "普通类二段",
        "url": "http://vr.ftp.sogou/ftpdata/vrmaker/gaokao2021/selectschool/selectschool107.xml",
        "work": "",
        "url": "https://g.eol.cn/school/885?fromcoop=sougou",
        "levelmingzhong": "专科批"
      },
      "score": null,
      "index": "gaoxiao702317002",
      "id": "7cf9a0cab7f7bfb5a7937907916405bb"
    }}]
  },

  onTabChange(event) {
    wx.redirectTo({
      url: `../${event.detail}/${event.detail}`
    })
  },

})
