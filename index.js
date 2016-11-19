const postcss = require('postcss');
const syntax = require('postcss-less');
const postcssImport = require('postcss-import');
postcss([postcssImport]).process(`
@import "sample.less";
.a {}
`, { syntax: syntax }).then(function (result) {
    console.log(result);
});
