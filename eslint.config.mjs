import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
    rules: {
      // 自動排序 import
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // 內建模組：fs, path...
            'external', // 外部套件：react, next...
            'internal', // 專案內部 import
            ['parent', 'sibling', 'index'], // 相對路徑
            'object', // object imports
            'type', // TypeScript type imports
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          'newlines-between': 'always', // 分群間空一行
          alphabetize: { order: 'asc', caseInsensitive: true }, // 依字母排序
        },
      ],
    },
  },
]

export default eslintConfig
