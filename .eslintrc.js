module.exports = {
  extends: ["airbnb", "eslint:recommended", "plugin:react/recommended"],
  env: {
    "browser": true,
    "node": true,
    "jasmine": true,
    "jest": true,
    "es6": true
  },
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  plugins: [
      "react",
      "jsx-a11y",
      "import"
  ],
  rules: {
    'spaced-comment': [0],
  },
  globals: {
    "__VERSION__": true,
    "React": true,
    "TestUtils": true
  },
  rules: {
    // http://eslint.org/docs/rules/block-spacing
    "block-spacing": 1,
    "brace-style": 1,
    "camelcase": 0,
    "comma-style": 1,
    "complexity": [2, 8],
    "curly": 2,
    "dot-notation": 1,
    "dot-location": [1, "property"],
    "eqeqeq": 2,
    "indent": 0,
    "jsx-a11y/aria-role": 1,
    "jsx-a11y/img-has-alt": [ 2, "Image" ],
    "jsx-a11y/no-access-key": 1,
    "jsx-a11y/img-redundant-alt": 1,
    "jsx-quotes": 1,

    // http://eslint.org/docs/rules/key-spacing
    "key-spacing": 1,
    "max-depth": [2, 2],

    // http://eslint.org/docs/rules/max-len
    "max-len": [1, 140, 2],

    "max-nested-callbacks": [1, 4],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    "no-trailing-spaces": 1,
    "no-use-before-define": 2,
    "no-undef": 2,
    "no-unused-vars": 2,
    "no-unused-expressions": 2,
    "no-lonely-if": 1,
    "no-nested-ternary": 1,
    "no-unneeded-ternary": 1,
    "quotes": [2, "single"],
    "space-before-blocks": 1,
    "space-before-function-paren": 1,

    // react specific rules
    "react/display-name": 1,
    "react/jsx-no-bind": 2,
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": 1,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-max-props-per-line": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-props": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 1,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/sort-prop-types": 1,
    "react/wrap-multilines": 1,
    "semi": [2, "never"]
  }
}
