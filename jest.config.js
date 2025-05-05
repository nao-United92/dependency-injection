module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'], // テストファイルの場所を指定
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
};
