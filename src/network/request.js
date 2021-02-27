import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/h8",
    timeout: 5000
  });

  instance.interceptors.response.use(response => {
    // 拦截器，当请求发送成功，并成功接收到数据
    // 处理数据
    return response.data;
  }, (err) => {
    console.log(err);
  })


  return instance(config);
}