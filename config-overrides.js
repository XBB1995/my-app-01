// module.exports = (config) => {
//   // 在这里可以对config进行配置
//   return config
// }

const { override, addDecoratorsLegacy } = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy()
)