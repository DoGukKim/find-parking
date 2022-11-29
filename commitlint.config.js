// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// chore: Changes packages (세팅 추가/수정)
// docs: Documentation only changes (문서 추가/수정)
// feat: A new feature (새 기능 추가)
// fix: A bug fix (버그 해결)
// refactor: A code change that neither fixes a bug nor adds a feature (새 기능 추가/버그 해결을 위한 코드가 아닌 코드 수정)
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'docs',
        'feat',
        'fix',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
}
