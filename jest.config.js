module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    // указываем Jest обрабатывать файлы с расширением `*.vue`
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    // обработка файлов с расширением `*.vue` с помощью `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    // обработка файлов с расширением `*.ts` с помощью `ts-jest`
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '.*.test.[t]sx?$',
  testURL: 'http://localhost/',
  setupFiles: [
    '<rootDir>/test/__setup__/index.js'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '**/*.vue',
    '!**/node_modules/**',
    '!**/typings/**'
  ]
}
