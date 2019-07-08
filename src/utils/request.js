import wepy from 'wepy'
/**
 * @param {string} url 数据请求地址
 */
function checkStatus(info, callBack, errTip) {
  if ((info.statusCode >= 200 && info.statusCode <= 207) || info.statusCode === 304) {
    return false
  } else {
    /**
     * 401没有限权，重新登录
     */
    if (info.statusCode === 401) {
      wepy.redirectTo({
        url: 'index'
      })
    }
    if (status <= 504 && status >= 500) {
      wepy.redirectTo({
        url: ''
      })
    }
    if (status >= 404 && status < 422) {
      wepy.redirectTo({
        url: ''
      })
    }
    const errortext = info.data.message
    wepy.showToast({
      title: `请求错误 ${info.statusCode}: ${errortext}${info.url}`,
      icon: 'loading',
      duration: 3000
    })
    return true
  }
}

export default function request(url, options) {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: url,
      method: options.method || 'GET',
      data: options.data || {},
      Authorization: 'AuthorizationToken',
      header: {
        'content-type': 'application/json' // 默认值
      },
      dataType: 'json',
      complete: function (res) {
        console.log('res=', res)
        let error = checkStatus(res)
        if (error) return false
        resolve(res)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}
