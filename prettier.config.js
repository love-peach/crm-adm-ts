module.exports = {
  printWidth: 120, // 超过最大值换行
  useTabs: false, // 使用tab缩进，默认false
  tabWidth: 2, // tab缩进大小,默认为2
  endOfLine: 'lf', // 结尾是 \n \r \n\r auto
  semi: true, // 使用分号, 默认true
  singleQuote: true, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  trailingComma: 'all', // 行尾逗号,默认none,可选 none|es5|all
  bracketSpacing: true, // 对象中的空格 默认true
  jsxBracketSameLine: false, // JSX标签闭合位置 默认false; 在jsx中把'>' 是否单独放一行
  arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 avoid| always
  htmlWhitespaceSensitivity: 'ignore',
  eslintIntegration: true, // 不让prettier使用eslint的代码格式进行校验
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
};
