var readPkg = require('.');
var path = require('path');

readPkg().then(function (pkg) {
	console.log(pkg);
});

readPkg(__dirname).then(function (pkg) {
	console.log(pkg);
});

readPkg(path.join('unicorn', 'package.json')).then(function (pkg) {
	console.log(pkg);
});
