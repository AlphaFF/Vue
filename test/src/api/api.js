import axios from 'axios'

let host = 'http://127.0.0.1:8000';

// 测试第一个api
// api的地址必须使用``,使用''和""会出问题,会把整个当字符串
export const books = params => { return axios.get(`${host}/api/books/`)}
export const getDetail = productId => { return axios.get(`${host}/api/books/${productId}`)}
export const getChapter = (productId,num) => { return axios.get(`${host}/api/books/${productId}/chapters/${num}`)}
// export function getList(argument) {
// 	// body...
// 	return axios.get('${host}/get/')
// }

// export function getDetail(productId){
// 	return axios.get(`${host}/get/${productId}`)
// }
