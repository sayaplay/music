import request from '../utils/request'


// export const getSongDetail = (id) => request({
//   url: `/playlist/detail?id=${id}`
// })
export const getSongDetail = (id) => request({
  url: `/playlist/detail?id=${id}`,
  method: "GET"
})