const config = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': null,
    'declaration-block-no-redundant-longhand-properties': true,
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'theme',
          'apply',
          'layer',
          'tailwind',
          'variants',
          'responsive',
          'screen',
          'custom-variant'
        ]
      }
    ]
  }
};

export default config;
