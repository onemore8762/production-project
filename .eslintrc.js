module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'fsd-stabilized'
    ],
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off'
            }
        }
    ],
    rules: {
        indent: 'off',
        'react/jsx-indent-props': [2, 'first'],
        'react/jsx-indent': ['error', 4], // 4 - spaces
        '@typescript-eslint/indent': ['error', 4, { ignoredNodes: ['JSXAttribute'] }],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
        ], // 2 - error - Запретить расширения файлов, которые могут содержать JSX
        'import/no-unresolved': 'off', // Отключить правило, которое не позволяет импортировать модули, которые не были установлены через npm
        'import/prefer-default-export': 'off', // Отключить правило, которое требует, чтобы каждый модуль имел по крайней мере один экспорт по умолчанию,
        'no-unused-vars': 'warn', // Предупреждение, если переменная не используется
        '@typescript-eslint/no-unused-vars': 'warn', // Предупреждение, если переменная не используется,
        'react/require-default-props': 'off', // Отключить правило, которое требует, чтобы все пропсы имели значения по умолчанию
        'react/react-in-jsx-scope': 'off', // Отключить правило, которое требует, чтобы каждый файл, содержащий JSX, импортировал React
        'react/button-has-type': 'error', // Предупреждение, если кнопка не имеет типа
        'react/jsx-props-no-spreading': 'off', // Отключить правило, которое предупреждает о распространении пропсов
        'react/function-component-definition': 'off', // Отключить правило, которое требует, чтобы функциональные компоненты были определены как стрелочные функции или функции
        '@typescript-eslint/explicit-function-return-type': 'off', // Предупреждение, если функция не возвращает тип
        'no-shadow': 'off', // Отключить правило, которое запрещает объявлять переменные с тем же именем, что и переменные, определенные во внешней области видимости
        'import/extensions': 'off', // Отключить правило, которое требует, чтобы импорты имели расширения
        'import/no-extraneous-dependencies': 'warn', // Отключить правило, которое запрещает импортировать модули, которые не указаны в package.json
        'no-underscore-dangle': 'off', // Отключить правило, которое запрещает использовать подчеркивание в идентификаторах
        '@typescript-eslint/strict-boolean-expressions': 'off', // Отключить правило, которое требует, чтобы выражения boolean были явными// Предупреждение, если строка не является литеральной строкой
        'max-len': ['error', { ignoreComments: true, code: 120 }], // Ошибка, если строка превышает 120 символов
        '@typescript-eslint/consistent-type-assertions': 'off', // export default
        '@typescript-eslint/prefer-includes': 'off', // Предупреждение, если не используется метод includes
        '@typescript-eslint/prefer-nullish-coalescing': 'off', // Предупреждение, если не используется оператор объединения с null
        'react/display-name': 'off', // Предупреждение, если компонент не имеет отображаемого имени
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, onlyAttribute: [''] }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/array-type': 'off',
        'fsd-stabilized/path-checker': ['error', { alias: '@' }],
        'fsd-stabilized/public-api-imports': ['error', { alias: '@' }]
        // '@typescript-eslint/no-non-null-assertion': 'off',
        // '@typescript-eslint/no-unnecessary-type-assertion': 'off'
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    }

}
