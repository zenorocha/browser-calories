var zipFolder = require('zip-folder');
var fs = require('fs');

process.chdir("dist")
 
zipFolder('./', '../browser-calories.xpi', function(err) {
	if(err) {
		console.log('oh no!', err);
	} else {
		console.log('WebExtension packaged as browser-calories.xpi');
	}
});