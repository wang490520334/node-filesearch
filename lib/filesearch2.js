#! /usr/bin/env node
/**
 * Created by wesswang on 2015/2/6.
 */


var userArgs = process.argv.slice(2); //取得index2以後的參數陣列
var searchParam = userArgs[0]; //取得第一個使用者輸入參數

var exec = require('child_process').exec; //use Node's Child Process library (the exec module, which runs a shell command and buffers the output)
/* Linux
var child = exec('ls -a | grep ' + searchParam, function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
});
*/
var child = exec('dir', function(err, stdout, stderr) {
    if (err) {
        throw err;
    }
    console.log(stdout);
});
