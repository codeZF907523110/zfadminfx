import { request } from './index.js'
export function getHomeMultidata() {
    return request({
        url: '/zf'
    })
}
export function getPicgoods() {
    return request({
        url: '/zf'
    })
}
export function getUserinfo() {
    return request({
        url: '/login'
    })
}