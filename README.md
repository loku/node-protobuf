This is a fork of [protobuf-for-node](http://code.google.com/p/protobuf-for-node/).

Changes
-------

* Fixed to be compatible with node 0.6.

but

* Removed protoservice example.
* Removed native interface.

Otherwise it wouldn't compile.


Prerequisites
-------------

* [protobuf](http://code.google.com/p/protobuf/)


Usage
-----

1. Write proto file(s)
2. Generate desc file from proto file(s) with `protoc --descriptor_set_out ...`
3. Use desc files from your scripts like this:

        var fs = require('fs'),
            Schema = require('..').Schema;

        var schema = new Schema(fs.readFileSync(__dirname + '/feeds.desc'));
        var Feed = schema['feeds.Feed'];
        var serialized = Feed.serialize({ title: 'Title', ignored: 42 });
        console.log('Serialized:', serialized);

        var aFeed = Feed.parse(serialized);
        console.log('Parsed:', aFeed);

4. Output:

        Serialized: <SlowBuffer 0a 05 54 69 74 6c 65>
        Parsed: { title: 'Title' }
