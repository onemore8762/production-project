module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    // '@typescript-eslint',
    'i18next'
  ],
  rules: {
    'react/jsx-indent': ['error', 4], // 4 - spaces
    'react/jsx-indent-props': ['error', 4], // 4 - spaces
    // indent: [2, 2], // 2 - error, 4 - spaces
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // 2 - error - Запретить расширения файлов, которые могут содержать JSX
    'import/no-unresolved': 'off', // Отключить правило, которое не позволяет импортировать модули, которые не были установлены через npm
    'import/prefer-default-export': 'off', // Отключить правило, которое требует, чтобы каждый модуль имел по крайней мере один экспорт по умолчанию,
    'no-unused-vars': 'error', // Предупреждение, если переменная не используется
    '@typescript-eslint/no-unused-vars': 'warn', // Предупреждение, если переменная не используется,
    'react/require-default-props': 'off', // Отключить правило, которое требует, чтобы все пропсы имели значения по умолчанию
    'react/react-in-jsx-scope': 'off', // Отключить правило, которое требует, чтобы каждый файл, содержащий JSX, импортировал React
    'react/button-has-type': 'error', // Предупреждение, если кнопка не имеет типа
    'react/jsx-props-no-spreading': 'off', // Отключить правило, которое предупреждает о распространении пропсов
    'react/function-component-definition': 'off', // Отключить правило, которое требует, чтобы функциональные компоненты были определены как стрелочные функции или функции
    '@typescript-eslint/explicit-function-return-type': 'warn', // Предупреждение, если функция не возвращает тип
    'no-shadow': 'off', // Отключить правило, которое запрещает объявлять переменные с тем же именем, что и переменные, определенные во внешней области видимости
    'import/extensions': 'off', // Отключить правило, которое требует, чтобы импорты имели расширения
    'import/no-extraneous-dependencies': 'warn', // Отключить правило, которое запрещает импортировать модули, которые не указаны в package.json
    'no-underscore-dangle': 'off', // Отключить правило, которое запрещает использовать подчеркивание в идентификаторах
    '@typescript-eslint/strict-boolean-expressions': 'off', // Отключить правило, которое требует, чтобы выражения boolean были явными
    // '@typescript-eslint/explicit-function-return-type': 'off', // Отключить правило, которое требует, чтобы функции и методы возвращали тип
    // '@typescript-eslint/prefer-nullish-coalescing': 'off' // Отключить правило, которое предлагает использовать оператор объединения с null вместо логического ИЛИ
    // '@typescript-eslint/naming-convention': 'off' // Отключить правило, которое требует, чтобы имена переменных соответствовали определенным шаблонам
    'i18next/no-literal-string': ['error', { markupOnly: true, onlyAttribute: [''] }] // Предупреждение, если строка не является литеральной строкой
  },
  globals: {
    __IS_DEV__: true
  }
}
