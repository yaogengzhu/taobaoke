;(function (root, factory, undef) {
  if (typeof exports === "object") {
    // CommonJS
    module.exports = exports = factory(require("./core.js"), require("./x64-core.js"), require("./lib-typedarrays.js"), require("./enc-utf16.js"), require("./enc-base64.js"), require("./md5.js"), require("./sha1.js"), require("./sha256.js"), require("./sha224.js"), require("./sha512.js"), require("./sha384.js"), require("./sha3.js"), require("./ripemd160.js"), require("./hmac.js"), require("./pbkdf2.js"), require("./evpkdf.js"), require("./cipher-core.js"), require("./mode-cfb.js"), require("./mode-ctr.js"), require("./mode-ctr-gladman.js"), require("./mode-ofb.js"), require("./mode-ecb.js"), require("./pad-ansix923.js"), require("./pad-iso10126.js"), require("./pad-iso97971.js"), require("./pad-zeropadding.js"), require("./pad-nopadding.js"), require("./format-hex.js"), require("./aes.js"), require("./tripledes.js"), require("./rc4.js"), require("./rabbit.js"), require("./rabbit-legacy.js"));
  } else if (typeof define === "function" && define.amd) {
    // AMD
    define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
  } else {
    // Global (browser)
    root.CryptoJS = factory(root.CryptoJS);
  }
})(this, function (CryptoJS) {

  return CryptoJS;
});