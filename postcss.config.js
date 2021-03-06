module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗宽度
      viewportHeight: 667,  // 视窗高度
      unitPrecision: 5, // 指定转换单位后保留的小数点位数
      viewportUnit: 'vw', // 变换后的单位
      selectorBlackList: ['ignore'], // 不进行转换的类名
      minPixelValue: 1,   // 小于或等于1px不转换
      mediaQuery: false,  // 允许媒体查询中转换px
      // exclude: [/TabBar/], // 要排除的文件，要用正则表达式
    }
  }
}
