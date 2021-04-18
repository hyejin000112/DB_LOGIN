const fs = require('fs');
const appRoot = require("app-root-path"); // 루트 경로를 가져와둠
var accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`,
     { flags: 'a' }
);

module.exports = accessLogStream;