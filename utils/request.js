export class requestData {
  constructor() {
    this.header = {
      'content-type': 'application/x-www-form-urlencoded'
    }
    this.URL = 'https://www.wzrylt.com'
    // this.URL = 'http://172.17.2.4:3030'
  }

  // get方法
  get(REQUEST_HEADER, DATA, HEADER = this.header) {
    return new Promise(resolve => {
      this.requestFun(this.URL + REQUEST_HEADER, 'GET', DATA, HEADER).then(res => {
        resolve(res)
      })
    })
  }
  // post方法
  post(REQUEST_HEADER, DATA, HEADER = this.header) {
    return new Promise(resolve => {
      this.requestFun(this.URL + REQUEST_HEADER, 'POST', DATA, HEADER).then(res => {
        resolve(res)
      })
    })
  }
  // put方法
  put(REQUEST_HEADER, DATA, HEADER = this.header) {
    return new Promise(resolve => {
      this.requestFun(this.URL + REQUEST_HEADER, 'PUT', DATA, HEADER).then(res => {
        resolve(res)
      })
    })
  }
  // delete方法
  delete(REQUEST_HEADER, DATA, HEADER = this.header) {
    return new Promise(resolve => {
      this.requestFun(this.URL + REQUEST_HEADER, 'DELETE', DATA, HEADER).then(res => {
        resolve(res)
      })
    })
  }
  // 请求封装
  requestFun(URL, METHOD, DATA, HEADER = this.header) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: URL,
        data: DATA,
        header: HEADER,
        method: METHOD,
        success: (res) => {
          res = res.data
          if (res.code === 200 || res.status === 200) {
            resolve(res)
          } else {
            this.errFun(res.data)
            // resolve(res)
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
      title: err,
      duration: 2000,
      icon: 'none'
    })
  }
}