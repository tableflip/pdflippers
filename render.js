var markdawn = require('markdawn')
var fs = require('fs')
var path = require('path')
var exec = require('child_process').exec
var async = require('async')

module.exports = function (mdFile, opts) {
  async.waterfall([
    function (cb) {
      readFile(mdFile, opts, cb)
    },
    function (outputDir, opts, cb) {
      processFile(outputDir, opts, cb)
    }
  ], done)  
}

function readFile (mdFile, opts, cb) {
  fs.readFile(mdFile, function (err, content) {
    if (err) return cb(err)
    var options = {
      index: __dirname + '/theme/index.html',
      out: 'TABLEFLIP-' + path.parse(mdFile).name + '.pdf'
    }

    var dir = process.cwd()

    var output = markdawn.generate(content.toString(), options)

    if (opts.html) process.stdout.write(output)
    
    cb(null, options.out, opts)
  })
}

function processFile (output, opts, cb) {
  fs.open(output, 'r', function (err, fileExists) {
    if (err && err.errno !== -2) throw new Error(err)
    if (fileExists && !opts.output) {

      return cb(null, output)

    } else if (fileExists && opts.output[0]) {

      var destination = path.join(opts.output[0], output)
      exec('mv ' + output + ' ' + destination, function (err) {
        if (err) throw new Error(err)
        return cb(null, destination)
      })

    } else {
      processFile(output, opts, cb)
    }
  })
}

function done (err, destination) {
  if (err) throw new Error(err)
  console.log('CREATED ', destination)
  process.exit()
}
