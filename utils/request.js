class request {
  constructor() {
    this.header = {}
  }
  // get方法
  get(METHOD, DATA, HEADER = this.header) {
    console.log(1)
    return this.requestFun("GET", DATA, HEADER)
  }
  // post方法
  post(METHOD, DATA, HEADER = this.header) {
    this.requestFun("POST", DATA, HEADER)
  }
  // put方法
  put(METHOD, DATA, HEADER = this.header) {
    this.requestFun("PUT", DATA, HEADER)
  }
  // delete方法
  delete(METHOD, DATA, HEADER = this.header) {
    this.requestFun("DELETE", DATA, HEADER)
  }
  // 请求封装
  requestFun(METHOD, DATA, HEADER = this.header, ) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: URL,
        data: DATA,
        header: HEADER,
        method: METHOD,
        success: (res) => {
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
export default request