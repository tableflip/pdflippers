var markdawn = require('markdawn')
var fs = require('fs')
var path = require('path')
var exec = require('child_process').exec

var pathToDoc = process.argv[2]
var location = process.argv[3] || '~/Desktop/'
var filename = 'TABLEFLIP-' + path.parse(pathToDoc).name + '.pdf'
location = location+filename

fs.readFile(pathToDoc, function (err, content) {
  if (err) throw new Error(err)
  markdawn.generate(content.toString(), {
    index: './theme/index.html',
    out: filename
  })
  openFile(filename)
})

function openFile (filename) {
  fs.open('./' + filename, 'r', function (err, itExists) {

    if (err && err.errno !== -2) throw new Error(err)

    if (itExists) {

      var move = 'mv ' + filename + ' ' + location
      var open = 'open ' + location
      
      exec(move + '&&' + open, function (err) {
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
