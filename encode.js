function encode() {
  var key = process.argv[2] || "";
  var text = process.argv[3] || "";
  var crypto = require("crypto");
  var cipher = crypto.createCipher("aes-256-cbc", key);
  var crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  console.log(crypted);
}
encode();
