module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "rules": {
        "vue/attribute-hyphenation": "error",
        "vue/attributes-order": "error",
        "vue/block-tag-newline": "error",
        "vue/comment-directive": "error",
        "vue/component-definition-name-casing": "error",
        "vue/component-name-in-template-casing": "error",
        "vue/component-tags-order": "error",
        "vue/custom-event-name-casing": "error",
        "vue/html-button-has-type": "error",
        "vue/html-closing-bracket-newline": "error",
        "vue/html-closing-bracket-spacing": "error",
        "vue/html-comment-content-newline": "error",
        "vue/html-comment-content-spacing": "error",
        "vue/html-comment-indent": "error",
        "vue/html-end-tags": "error",
        "vue/html-indent": "error",
        "vue/html-quotes": "error",
        "vue/html-self-closing": "error",
        "vue/match-component-file-name": "error",
        "vue/multiline-html-element-content-newline": "error",
        "vue/mustache-interpolation-spacing": "error",
        "vue/name-property-casing": "error",
        "vue/new-line-between-multi-line-property": "error",
        "vue/no-confusing-v-for-v-if": "error",
        "vue/no-custom-modifiers-on-v-model": "error",
        "vue/no-deprecated-data-object-declaration": "error",
        "vue/no-deprecated-destroyed-lifecycle": "error",
        "vue/no-deprecated-dollar-listeners-api": "error",
        "vue/no-deprecated-dollar-scopedslots-api": "error",
        "vue/no-deprecated-events-api": "error",
        "vue/no-deprecated-filter": "error",
        "vue/no-deprecated-functional-template": "error",
        "vue/no-deprecated-html-element-is": "error",
        "vue/no-deprecated-inline-template": "error",
        "vue/no-deprecated-props-default-this": "error",
        "vue/no-deprecated-scope-attribute": "error",
        "vue/no-deprecated-slot-attribute": "error",
        "vue/no-deprecated-slot-scope-attribute": "error",
        "vue/no-dupe-v-else-if": "error"
    }
}