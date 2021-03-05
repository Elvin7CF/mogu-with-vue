import Toast from './Toast'

const obj = {}

// Vue.use()后，会执行install函数
obj.install = function(Vue){

  // 创建Vue组件模版(组件构造器)
  const toastModel = Vue.extend(Toast);

  // 创建根据构造器创建组件实例
  const toast = new toastModel();

  // 将组件对象手动挂载到某一元素上
  toast.$mount(document.createElement('div'));

  // 挂载到实际DOM上，toast.$el就是组件到整个div
  document.body.appendChild(toast.$el)

  // 把$toast放到Vue到原型链上,$toast指向创建的toast对象
  Vue.prototype.$toast = toast;
}

export default obj