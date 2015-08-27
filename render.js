var markdawn = require('markdawn')
var fs = require('fs')
var path = require('path')
var exec = require('child_process').exec
var async = require('async')

module.exports = function (md, opts) {
  async.waterfall([
    function (cb) {
      readFile(md, opts, cb)
    },
    function (outputDir, opts, cb) {
      processFile(outputDir, opts, cb)
    }
  ], done)  
}

function readFile (md, opts, cb) {
  fs.readFile(md, function (err, content) {
    if (err) return cb(err)

    var options = {
      index: './theme/index.html',
      out: 'TABLEFLIP-' + path.parse(md).name + '.pdf'
    }

    var dir = opts.output || process.cwd()

    var outputDir = path.join(dir, options.out)

    var output = markdawn.generate(content.toString(), options)

    if (opts.html) process.stdout.write(output)

    cb(null, outputDir, opts)
  })
}

function processFile (outputDir, opts, cb) {
  fs.open(outputDir, 'r', function (err, fileExists) {

    if (err && err.errno !== -2) throw new Error(err)

    if (fileExists) {
      cb(null, outputDir)
    } else {
      processFile(outputDir, opts, cb)
    }
  })
}

function done (err, destination) {
  if (err) throw new Error(err)
  console.log('CREATED ', destination)
  process.exit()
}
