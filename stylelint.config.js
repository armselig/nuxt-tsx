module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // allow Tailwind CSS @-rules
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'extend',
          'include',
        ],
      },
    ],
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': null,
  },
}
