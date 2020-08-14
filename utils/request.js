export class requestData {
  constructor() {
    this.header = {}
  }
  // get方法
  get(URL,DATA, HEADER = this.header) {
    return this.requestFun(URL,"GET", DATA, HEADER)
  }
  // post方法
  post(URL,DATA, HEADER = this.header) {
    this.requestFun(URL,"POST", DATA, HEADER)
  }
  // put方法
  put(URL,DATA, HEADER = this.header) {
    this.requestFun(URL,"PUT", DATA, HEADER)
  }
  // delete方法
  delete(URL,DATA, HEADER = this.header) {
    this.requestFun(URL,"DELETE", DATA, HEADER)
  }
  // 请求封装
  requestFun(URL,METHOD, DATA, HEADER = this.header) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: URL,
        data: DATA,
        header: HEADER,
        method: METHOD,
        success: (result) => {
          let res=result.data
          if (res.code === 200 || res.status === 200) {
            resolve(res)
          } else {
            this.errFun(res.message)
            reject(res)
          }
        },
        fail: (err) => {
          this.errFun(err)
          reject(err)
        },
      })
    })
  }
  // 异常处理
  errFun(err) {
    wx.showToast({
      title: res,
      duration: 2000
    })
  }
}