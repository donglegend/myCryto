function decode() {
  var key = process.argv[2] || "";
  var crypted = process.argv[3] || "";
  var crypto = require("crypto");
  var decipher = crypto.createDecipher("aes-256-cbc", key);
  var dec = decipher.update(crypted, "hex", "utf8");
  dec += decipher.final("utf8");
  console.log(dec);
}
decode();
