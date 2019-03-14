
module.exports = {
  setupFiles: ["<rootDir>/scripts/jest/setupTests.js"],
  "verbose": true,
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/scripts/jest/__mocks__/fileMock.js",
    "\\.(css|styl)$": "<rootDir>/scripts/jest/__mocks__/styleMock.js"
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
}
