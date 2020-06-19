// 抽取基地址
const BASE_URL = 'http://localhost:3000'

export default function request(options) {
  return new Promise((resolve, reject) => {
    // 把异步任务放到promise构造函数里面，当请求成功后，resolve数据
    // 请求前开启loading
    wx.showLoading({
      title: '加载中',
      mask: true
    })

    wx.request({
      url: BASE_URL + options.url,
      success: res => {
        let { status, message } = res.data
        if (status === 0) {
          resolve(message)
        }
      },

      complete: () => {
        wx.hideLoading()
      }
    })
  })
}