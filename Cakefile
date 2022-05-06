bach = require 'bach'
coffee = require 'coffeescript'
connect = require 'connect'
connLr = require 'connect-livereload'
cp = require 'child_process'
fs = require 'fs'
fsp = require 'fs/promises'
http = require 'http'
lr = require 'livereload'
rimraf = require 'rimraf'
sass = require 'sass'
serveStatic = require 'serve-static'

# OPTIONS #############################

option '-a', '--all', 'build/clean everything (default)'
option '-w', '--wasm', 'build/clean only wasm part'
option '-b', '--web', 'build/clean only html/js/css part'
option '-d', '--debug', 'set compilation mode to debug (default)'
option '-r', '--release', 'set compilation mode to release'

# GLOBAL VARS #########################

envRelease = false

# PRIVATE FNS #########################

buildProject = (options) ->
  all = options.all or (not options.wasm and not options.web)
  if all or options.web
    startSeries = bach.series createDir, handleHtml,compileSass 
    endSeries = bach.series compileCoffee, compileJs
    cbRes = (err, _) -> if err then console.log "error:\r\n#{err}"
    finalSeries =
      if all then bach.series startSeries, wasmPack, copyWasm, endSeries
      else bach.series startSeries, endSeries
    finalSeries cbRes
  else if options.wasm then wasmPack -> 42

checkEnv = (options) ->
  if options.debug and options.release
    console.error "error: debug and release can't be active in the same time"
    throw '`debug` and `release` in the same time'
  else
    if options.release then envRelease = true

compileCoffee = (cb) ->
  filtering = (script) -> /\.coffee$/.test script
  cfScripts = (await fsp.readdir './scripts').filter filtering
  for script in cfScripts
    path = "./scripts/#{script}"
    res = coffee.compile(fs.readFileSync path, 'utf-8')
    fs.writeFileSync (path.replace 'coffee', 'js'), res
  cb null, 0

compileJs = (cb) ->
  #
  # TODO
  #
  #cb 'jsrollup not ready', null
  cb null, 0

compileSass = (cb) ->
  style = if envRelease then 'compressed' else 'expanded'
  try
    res = sass.compile 'style.sass', {style}
    fsp.writeFile './dist/style.css', res.css
  catch e
    cb e, null

copyWasm = (cb) ->
  #
  # TODO
  #
  #
  cb 'copyWasm not ready', null
  #

createDir = (cb) ->
  try
    await fsp.mkdir './dist'
    cb null, 0
  catch e
    if e.code = 'EEXIST'
      console.warn 'Warning: \'dist\' already exists'
      cb null, 1
    else cb e, null

handleHtml = (cb) -> fsp.cp './index.html', './dist/index.html'

launchServer = ->
  app = connect()
  #
  # TODO: check if wasm is delivered with the right mime-type
  #
  app.use connLr()
  app.use(serveStatic './dist')
  #
  # TODO: check if wasm is watched, I think I need to add extraExts option
  #
  http.createServer(app).listen 5000
  lrServer = lr.createServer()
  lrServer.watch './dist'

wasmPack = (cb) ->
  mode = if envRelease then '--release' else '--debug'
  cp = cp.spawn 'wasm-pack', ['build', envRelease], {stdio: 'inherit'}
  cp.on 'error', (err) => cb(err, null)
  cp.on 'close', (code) => cb(null, 0)

watchSource = ->
  #
  # TODO
  #
  console.log 'watchSource'
  #
  #cb null, 0
  42
  #

# TASKS ###############################

task 'build', 'build the app', (options) ->
  checkEnv options
  buildProject options

task 'clean', 'clean the different parts of the app', (options) ->
  console.log 'cleaning app...'
  all = options.all or (not options.wasm and not options.web)
  switch
    when all or options.web
      console.log 'cleaning ./dist...'
      rimraf './dist', (r) => 42 #console.log e
      rimraf './scripts/*.js', (r) => 42 #console.log e
    when all or options.wasm
      console.log 'cleaning ./pkg ...'
      rimraf './pkg', (r) => 42 #console.log e
  console.log 'cleaning done!'

task 'serve', 'launch a micro server and watch files', (options) ->
  #bach.parallel watchSource, launchServer
  #
  # TODO: if --release then return, no release mode with 'serve'
  #
  launchServer()
  #
  watchSource()
  #

task 'wasm', 'only compile wasm, shortcut for `cake -w build`', (options) ->
  checkEnv options
  wasmPack => 42
