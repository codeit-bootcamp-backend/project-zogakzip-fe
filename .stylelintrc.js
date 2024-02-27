module.exports = {
  // 2. 사용할 스타일린트 플러그인을 지정합니다.
  plugins: ['stylelint-scss'],

  // 1. 사용할 스타일린트 구성을 확장합니다.
  extends: ['stylelint-config-standard-scss', 'stylelint-config-property-sort-order-smacss'],

  // 3. 규칙(rule)을 정의합니다.
  rules: {
    // 3.1. 클래스 선택자의 이름 패턴을 무시합니다.
    'selector-class-pattern': null,

    // 3.2. ID 선택자의 이름 패턴을 무시합니다.
    'selector-id-pattern': null,

    // 3.3. 키프레임 이름의 패턴을 무시합니다.
    'keyframes-name-pattern': null,

    // 3.4. 숫자 앞에 불필요한 0을 허용하지 않습니다.
    // 'number-leading-zero': 'never', // 이유: Unknown rule

    // 3.5. 색상 코드의 길이를 무시합니다.
    'color-hex-length': null,

    // 3.6. 값에 벤더 접두사를 사용할 수 있도록 허용합니다.
    'value-no-vendor-prefix': null,

    // 3.7. 특정 단위를 사용하지 못하도록 지정합니다.
    // 'unit-disallowed-list': ['px'], // 이유: 프로젝트 반응형 필요 x

    // 3.8. @규칙 이전에 항상 빈 줄을 요구하며, 'include' 예외를 허용합니다.
    'at-rule-empty-line-before': ['always', { ignoreAtRules: ['include'] }],

    // 3.9. 선언 이전에 빈 줄을 허용하지 않습니다.
    'declaration-empty-line-before': ['never'],

    // 3.10. 문자열은 작은따옴표로 표기합니다.
    // 'string-quotes': 'single', // 이유: Unknown rule

    // 3.11. 폰트 패밀리의 이름에 키워드를 사용하지 않을 경우, 따옴표를 요구합니다.
    'font-family-name-quotes': 'always-unless-keyword',

    // 3.12. 선택자의 특이성을 내림차순으로 허용합니다.
    'no-descending-specificity': null,

    // 3.13. 알 수 없는 가상 클래스 선택자를 금지하며, 'global'은 예외로 허용합니다.
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],

    // 3.14. SCSS mixin의 이름 패턴을 정의합니다.
    'scss/at-mixin-pattern': /^[a-z][a-zA-Z0-9]*$/,
  },
}
