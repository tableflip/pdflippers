#!/usr/bin/env node

var opts = require('nomnom')
  .options({
    path: {
      required: true,
      position: 0,
      help: 'you have to pass in the path to your .md file',
      list: true
    },
    output: {
      abbr: 'o',
      required: false,
      help: 'specify the output destination for your .pdf file',
      list: true
    },
    html: {
      flag: true,
      abbr: 'h',
      required: false,
      help: 'output just the html to stdout (exits process)',
      list: true
    }
  }).parse()

require('../render')(opts.path[0], opts)
