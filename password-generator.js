//Generate one random password
var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);
/*//Generate multiple random passwords
var generator = require('generate-password');

var passwords = generator.generateMultiple(3, {
	length: 10,
	uppercase: false
});

console.log(passwords);*/