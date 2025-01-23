// console.log(window);
// console.log(document);
// console.log("sanka");

// console.log(module);

const { log } = require("console");
const os = require("os");

console.log('Operating system' , os.platform());
console.log('Architecture' , os.arch());
console.log('Relese' , os.platform());
console.log('Hostname' , os.platform());



console.log('Numberof CPUs' , os.cpus());
console.log('Cpu model' , os.cpus()[0].model);
console.log('Cpu Speed' , os.cpus()[0].speed);

//obtain network interfaces:
console.log('Network interface' , os.networkInterfaces());

//Finding up time
console.log('uptime' , os.uptime() + "seconds");

//Getting tempory Direcotory path
console.log('tempory Direcotory' , os.tmpdir());

//determining Home Directory
console.log('Home Derectory' , os.homedir());

// request ekakin ena data 1000 withara wena file ekak liyanna tempory  location ekaka load karna eka thama meken karanne
const fs = require("fs")

const tmpfile = os.tmpdir() + "/temp.txt";
fs.writeFileSync(tmpfile, "This is a tempory file.");
console.log("Temporary File created:", tmpfile);


//getting current user information
console.log("Current user:" , os.userInfo().username);


