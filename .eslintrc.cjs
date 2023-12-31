module.exports = {
  "extends": [
    "./extensions/lint-react.json",
    "./extensions/lint-typescript.json",
    "prettier"
  ],
  "rules": {
    "newline-before-return": "warn",
    "no-multiple-empty-lines": ["warn", {"max": 1}],
    "@next/next/no-html-link-for-pages": "off"
  }
}