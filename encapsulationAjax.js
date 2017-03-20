/*
  =================================
  = description: 封装 Vue-Resource
  = author: LXJ                   
  = date: 2017.3.20               
  = tool: sublime text 3          
  = contact: me@linxiangjun.cn 
  = blog: www.linxiangjun.top  
  =================================
*/

//封装GET方法
function getRequest(url, params, options) {
  return new Promist((resolve, reject) => {
    Vue.http.get(
      url,
      {
        params: params
      },
      {emulateJSON: true}
    )
    .then((res) => {
      res = res.body;
    })
    .catch((res) => {
      /*统一处理失败回调*/
    });
  });
}
//封装POST方法
function postRequest(url, params, options) {
  return new Promist((resolve, reject) => {
    Vue.http.post(
      url,
      {
        params
      },
      {emulateJSON: true}
    )
    .then((res) => {
      resolve(res.body);
    })
    .catch((res) => {
      /*统一处理失败回调*/
      reject(res.body);
    });
  });
}

//用法示例：调用一个Ajax请求
//var params = new Object();
//var params.id = id;
//var url = url;
//postRequest(url, params)
//.then((message) => {});

//调用多个Ajax嵌套
//postRequest(url, params)
//.then((message) => {
//  return getRequest(url, params)
//  .then((message) => {
//  ...
//  }) 
//}).catch((message) => {

//})
