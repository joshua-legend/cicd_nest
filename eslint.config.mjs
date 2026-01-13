// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // any 타입 사용 금지 규칙 해제
      '@typescript-eslint/no-floating-promises': 'warn', // 프로미스 사용시 await/then 안하면 경고
      '@typescript-eslint/no-unsafe-argument': 'warn', // any 등 안전하지 않은 타입을 함수 인자로 넘기면 경고
      '@typescript-eslint/no-unused-vars': 'off', // 사용하지 않는 변수에 대한 경고 해제
      '@typescript-eslint/no-unsafe-assignment': 'off', // any 등 안전하지 않은 값 할당 규칙 해제
      '@typescript-eslint/no-unsafe-call': 'off', // any 등 안전하지 않은 값의 함수 호출 규칙 해제
      '@typescript-eslint/no-unsafe-member-access': 'off', // any 등 안전하지 않은 값의 멤버 접근 규칙 해제
      '@typescript-eslint/no-unsafe-return': 'off', // any 등 안전하지 않은 값의 반환 규칙 해제
    },
  },
);
