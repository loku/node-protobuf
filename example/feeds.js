var fs = require('fs'),
    Schema = require('..').Schema;

var schema = new Schema(fs.readFileSync(__dirname + '/feeds.desc'));
var Feed = schema['feeds.Feed'];
var serialized = Feed.serialize({ title: 'Title', ignored: 42 });
console.log('Serialized:', serialized);

var aFeed = Feed.parse(serialized);
console.log('Parsed:', aFeed);
