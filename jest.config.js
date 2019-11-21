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
  testURL: 'http://localhost/'
}
