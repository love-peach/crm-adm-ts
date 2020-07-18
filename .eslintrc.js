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
    '@typescript-eslint/no-var-requires': 'off', // 解决不能 require node 模块
    '@typescript-eslint/interface-name-prefix': 'off', // 解决不能以 I 开头的接口声明
    '@typescript-eslint/no-explicit-any': 'off', // 解决不能声明 any 类型
  },
};
