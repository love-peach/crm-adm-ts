# crm-admin-ts

## 格式化校验 editorconfig eslint prettier

1、.editorconfig

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

2、eslint

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

3、prettier

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

4、vs code 参考设置

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
