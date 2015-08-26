var markdawn = require('markdawn')
var fs = require('fs')
var path = require('path')
var exec = require('child_process').exec

var pathToDoc = process.argv[2]
var destination = process.argv[3] || '~/Desktop/'
var filename = 'TABLEFLIP-' + path.parse(pathToDoc).name + '.pdf'

fs.readFile(pathToDoc, function (err, content) {
  if (err) throw new Error(err)
  markdawn.generate(content.toString(), {
    index: './theme/index.html',
    out: filename
  })
  openFile(filename)
})

function openFile (filename) {
  fs.open('./' + filename, 'r', function (err, exists) {
    if (err) {
      if(err.errno !== -2) throw new Error(err)
    }
    if (exists) {
      var cmd = 'mv ' + filename + ' ' + destination+filename + ' && open ' + destination+filename
      exec(cmd, function (err) {
        if (err) throw new Error(err)
        process.exit()
      })
    }else{
      setTimeout(function () {
        openFile(filename)
      }, 250)
    }
  })
}
