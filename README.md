# crm-admin-ts

## todolist

- [x] 代码规范相关 eslint prettier 等
- [ ] 风格约定 命名 大小写等
- [x] 引入 element-ui 按需引入
- [x] 样式处理
- [ ] 国际化 18n
- [ ] axios 封装
- [ ] mock 数据

## 目录结构

`tree -l 3 -f --ignore "node_modules/,dist/,.git/" --directoryFirst -a`

```
├── public/
|  ├── favicon.ico
|  └── index.html
├── src/
|  ├── api/
|  |  └── login.ts
|  ├── assets/
|  |  └── logo.png
|  ├── components/
|  |  └── HelloWorld.vue
|  ├── plugins/
|  |  └── element.ts
|  ├── router/
|  |  └── index.ts
|  ├── store/
|  |  └── index.ts
|  ├── styles/
|  |  ├── index.scss
|  |  ├── _layout.scss
|  |  ├── _mixins.scss
|  |  ├── _overwrite_element.scss
|  |  ├── _reset.scss
|  |  ├── _variables.scss
|  |  └── _variables.scss.d.ts
|  ├── utils/
|  |  └── http.ts
|  ├── views/
|  |  ├── About.vue
|  |  └── Home.vue
|  ├── App.vue
|  ├── main.ts
|  ├── shims-tsx.d.ts
|  └── shims-vue.d.ts
├── .browserslistrc
├── .editorconfig
├── .env
├── .env.development
├── .env.production
├── .env.test
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── package.json
├── prettier.config.js
├── README.md
├── tsconfig.json
├── vue.config.js
├── yarn-error.log
└── yarn.lock

```

## 格式化校验

**.editorconfig**

```
root = true

[*]
#缩进风格：空格
indent_style = space
#缩进大小2
indent_size = 2
#换行符lf
end_of_line = lf
#字符集utf-8
charset = utf-8
#是否删除行尾的空格
trim_trailing_whitespace = true
#是否在文件的最后插入一个空行
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

**eslint**

安装依赖。`eslint-plugin-html` 安装在本地还是全局 取决于 `eslint` 的安装方式。这里，无法保证每个人都是全局安装 `eslint`，因此，这里选择将依赖安装到本地，并将依赖写入依赖文件中。

```
yarn add eslint-plugin-html -D
```

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': 'error',
  },
};
```

**prettier**

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "endOfLine": "lf",
  "printWidth": 120,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid"
}
```

**vs code 参考设置**

```json
{
  "editor.fontLigatures": true,
  "editor.formatOnSave": true,
  "editor.detectIndentation": false,
  "editor.tabSize": 2,

  "eslint.validate": ["javascript", "javascriptreact", "html", "vue", "typescript"],
  "eslint.options": {
    "plugins": ["html"]
  },

  "files.eol": "\n",
  "prettier.endOfLine": "lf",
  "prettier.printWidth": 120,
  "prettier.singleQuote": true,
  "prettier.jsxBracketSameLine": false,

  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-expand-multiline"
    },
    "prettyhtml": {
      "printWidth": 120,
      "singleQuote": false,
      "wrapAttributes": false,
      "sortAttributes": false
    },
    "prettier": {
      "semi": true,
      "singleQuote": true
    }
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## 按需引入 element-ui

虽然，项目依赖 `element-ui` 但是，并不是每一个组件都能用上。采用按需引入方式，可以进一步减小打包体积。

**安装依赖**

```
yarn add element-ui -S
yarn add babel-plugin-component -D
```

**修改 babel**

```js
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};
```

**添加管理文件**

添加按需引入组件入口统一管理文件 `plugins/element.ts`

```ts

import Vue from 'vue';
import {
  Pagination,
  Button,
  Message,
}

Vue.use(Pagination);

Vue.prototype.$message = Message;
```

**然后在 src/main.ts 中引入**

```ts
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.ts';
```

**在页面中就可以使用了**

```html
<template>
  <div class="home">
    <el-button>按需引入 element 组件库</el-button>
  </div>
</template>
```

## 样式处理

**样式分类**

目前样式分类如下，如需添加其他模块再讨论

```
src/styles/
├─ index.scss // 样式入口文件，统一从此文件中引入
├─ _layout.scss // 布局相关样式
├─ _mixins.scss // sass 混合宏样式。可以了解下 @include @extend 以及 %占位符的用法及使用场景
├─ _overwrite_element.scss // 需要覆盖element-ui的样式统一写在这 写好备注
├─ _reset.scss // 统一浏览器样式
├─ _variables.scss // 全局变量
└─ _variables.scss.d.ts // 全局变量文件模块声明
```

`index.scss` 文件内容如下：

```scss
@import './reset';
@import './layout';
...
@import './overwrite_element';
```

在 `main.ts` 中引入

```ts
import './styles/index.scss';
```

**厂商前缀处理 autoprefixer**

各个浏览器对 css3 标准的支持程度不太一样，因此，各个浏览器厂商针对个别样式 提供了单独的前缀。

我们一般会使用 `autoprefixer` 插件 处理厂商前缀的问题，这一步 `vue-cli` 内置了，我们只需修改 `..browserslistrc` 文件中的配置即可。

因为，`crm` 是一个后台系统，没必须兼容所有浏览器，比如手机浏览器。目前的配置如下：

```
> 1%
last 2 versions
not dead
```

我们可以从这个 [browserl.ist](https://browserl.ist/?q=%3E+1%25%2C+last+2+versions%2C+not+dead) 网站，查看浏览器覆盖率，目前上述配置覆盖率是 `89.91%`

**全局样式变量处理**

全局样式变量分两个部分，第一个部分，是在 `style` 中需要定义的全局颜色，大小等变量，不用每个文件引；第二个部分，是在 `js` 中，可能也用到定义的这些变量，又不想重新弄个 `xx.js` 来维护。

**1) style 中全局样式变量处理**

首先，定义全局样式变量 `/src/styles/_variables.scss`

```scss
$colorPrimary: #409eff;
```

然后，添加依赖

```sh
vue add style-resources-loader
```

接着，会让你选择 `CSS Pre-processor`，选择 `scss`

上述命令，会自动在 `package.json` 文件中添加两个依赖：
`"style-resources-loader": "^1.3.2",`
`"vue-cli-plugin-style-resources-loader": "~0.1.4"`

然后，在 `vue.confgi.js` 中添加配置

```js
const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss'),
      ],
    },
  },
};
```

最后，使用全局样式变量

```html
<template>
  <div class="demo">全局样式变量</div>
</template>

<style lang="scss">
  .demo {
    color: $colorPrimary;
  }
</style>
```

**2) js 中全局样式变量处理**

首先，在 `/src/styles/_variables.scss` 文件中输出变量

```scss
$colorPrimary: #409eff;
$colorSucss: #67c23a;

:export {
  colorPrimary: $colorPrimary;
  colorSucss: $colorSucss;
}
```

然后，在`_variables.scss.d.ts` 文件中，添加声明：

```ts
export interface IScssVariables {
  colorPrimary: string;
  colorSucss: string;
}

export const variables: IScssVariables;

export default variables;
```

最后使用，使用

```html
<template>
  <div class="demo" :style="{ color: variable.colorSucss }">全局样式变量</div>
</template>

<script>
  import variable from '@/styles/_variables.scss';

  export default {
    name: 'Home',
    computed: {
      variable() {
        return variable;
      },
    },
  };
</script>

<style lang="scss">
  .demo {
    color: $colorPrimary;
  }
</style>
```

## 请求封装 axios

**安装依赖**

```sh
yarn add axios -S
```

**封装**

后续再完善

```js
import qs from 'qs';
import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});

service.interceptors.request.use(...);
service.interceptors.response.use(...);

export default {
  get(url: string, params?: any, options?: object) {
    return service.get(url, { params, ...options });
  },
  post(url: string, data?: any, options?: object) {
    return service.post(url, qs.parse(data), options); // TODO: data 统一 qs 处理？
  },
};
```

**定义 api**

在 `api/`目录下添加相应页面的接口文件，如下：

```ts
import fetch from '@/utils/http';

/**
 * @desc 登出
 */
export const logout = (params?: any, options?: any) => fetch.get('/login', params, options);

/**
 * @desc 登陆
 */
export const login = (params?: any, options?: any) => fetch.post('/login', params, options);
```

**使用**

```js
import { logout, login } from '@/api/login';

logout({ name: 'zhang' }).then();

login(
  { name: 'zhang' },
  {
    headers: {
      Authorization: 'token11',
    },
  },
).then();
```

## 区分环境

在 `根目录` 下，创建相应环境的文件，如：`.env`、`.env.development`、`.env.production`、`.env.test`，内容如下

```
NODE_ENV=production
VUE_APP_BASE_API=http://man.btr.jd.com
VUE_APP_APP_ORIGIN=http://man.btr.jd.com
```

其中，只有 `VUE_APP_*` 才会被 `webpack.DefinePlugin` 静态嵌入到客户端侧的包中。

此外，还有两个特殊变量

- `NODE_ENV` - 会是 `"development"`、`"production"` 或 `"test"` 中的一个。具体的值取决于应用运行的模式。
- `BASE_URL` - 会和 `vue.config.js` 中的 `publicPath` 选项相符，即你的应用会部署到的基础路径。

详见：[环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html)

## 模拟数据

~~mockjs~~

通过代理，请求不同 url 实现 mock 与真实数据的切换。

## 问题

**tsconfig 警告**

描述：在 tsconfig 文件，有如下警告

```
Problems loading reference ‘https://schemastore.azurewebsites.net/schemas/json/package.json’: Unable to load schema from ‘https://schemastore.azurewebsites.net/schemas/json/package.json’: Unable to connect to https://schemastore.azurewebsites.net/schemas/json/package.json. Error: read ECONNRESET
```

解决：在 settings.json 中添加，最后重启项目

```
"http.proxyAuthorization": "false"
```
