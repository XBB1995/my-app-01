#让cra支持@修饰器写法

1. 不管你是要配置什么 都要使用 react-app-rewired这个包来对cra创建的项目进行轻微的配置调整
2. 安装之后 再package.json中把scripts里的react-scripts替换成react-app-rewired
3. 在根目录下创建一个config-overrides.js文件

    module.exports = (config) => {
      return config
    }
    
4. 现在更推荐使用customsize-cra来修改 修改config-overrides.js文件内容为

    const { override, addDecoratorsLegacy } = require('customsize-cra')
    module.exports = override(
      addDecoratorsLegacy()
    )

    