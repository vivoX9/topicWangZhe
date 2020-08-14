import {
  requestData
} from "../utils/request.js"
const request=new requestData()
const HOST = "https://www.wzrylt.com/api"

// 上传图片
export const uploadImg = (params) => {
  request.get(HOST + "/comment/list").then(res => {
    console.log(res)
  })
}