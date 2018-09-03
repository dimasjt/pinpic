module.exports = {
  roots: [
    '<rootDir>',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  'testRegex': '(/spec/javascript/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    'utils/*': '<rootDir>/app/javascript/app/utils',
  },
}
