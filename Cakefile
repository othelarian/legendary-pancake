bach = require 'bach'
coffee = require 'coffeescript'
connect = require 'connect'
fs = require 'fs'
fsp = require 'fs/promises'
http = require 'http'
lr = require 'livereload'
{ extname } = require 'path'
rimraf = require 'rimraf'
{ rollup, watch } = require 'rollup'
rust = require '@wasm-tool/rollup-plugin-rust'
sass = require 'sass'
serveStatic = require 'serve-static'
{ terser } = require 'rollup-plugin-terser'

# OPTIONS #############################

option '-d', '--debug', 'set compilation mode to debug (default)'
option '-r', '--release', 'set compilation mode to release'

# GLOBAL VARS #########################

envRelease = false
watching = false

# ROLLUP PLUGINS ######################

rollCoffee = =>
  name: 'rolling-coffee'
  transform: (code, id) ->
    if extname(id) != '.coffee' then return null
    out = null
    try
      out = coffee.compile code
    catch e
      throw e
    code: out

rollHtml = (filename) =>
  name: 'rolling-html'
  buildStart: ->
    this.addWatchFile filename
  generateBundle: ->
    cfg =
      type: 'asset'
      fileName: filename
      source: fs.readFileSync filename
    this.emitFile cfg

rollSass = =>
  css = ''
  name: 'rolling-sass'
  transform: (_, file) ->
    style = if envRelease then 'compressed' else 'expanded'
    rendered = sass.compile file, {style}
    css = rendered.css
    'export default ""'
  generateBundle: (options, bundle) ->
    Object.keys(bundle).forEach (filename) => delete bundle[filename]
    fs.writeFileSync options.file, css
    return null

# ACTION FUNCTIONS ####################

checkEnv = (options) ->
  if options.debug and options.release
    console.error 'error: debug and release can\'t be active together'
    throw '`debug` and `release` in the same time'
  else
    if options.release then envRelease = true

compileJs = (cb) ->
  rustCfg =
    debug: not envRelease
  inOpts =
    input: './scripts/index.coffee'
    plugins: [
      rollCoffee()
      rust rustCfg
      ]
  outOpts =
    file: './dist/index.js'
    format: 'iife'
    assetFileNames: 'wasm/[name][extname]'
    plugins: (if envRelease then [terser()] else [])
  bundle = await rollup inOpts
  await bundle.write outOpts
  stmp = new Date().toLocaleString()
  console.log "#{stmp} => coffee/wasm compilation done"
  cb null, 0

compileSass = (cb) ->
  targets =
    targets: [{src: 'index.html', dest: './dist'}]
    copyOnce: true
  inOpts =
    input: './style.sass'
    plugins: [rollSass(), rollHtml 'index.html']
  outOpts =
    file: './dist/style.css'
    exports: 'default'
    format: 'cjs'
  if watching
    watcher = watch {inOpts..., output: outOpts}
    watcher.on 'event', (event) =>
      if event.code == 'ERROR' then console.log event.error
      else if event.code == 'END'
        stmp = new Date().toLocaleString()
        console.log "#{stmp} => sass/html compilation done"
    cb null, 0
  else
    sass = await rollup inOpts
    await sass.write outOpts
    stmp = new Date().toLocaleString()
    console.log "#{stmp} => sass/html compilation done"
    cb null, 0

copyDevin = (cb) ->
  args = {force: true, recursive: true}
  fs.cp './devin', './dist/devin', args, (r) ->
    if r? then cb r, null
    else
      console.log 'copy devin files => done'
      cb null, 0

createDir = (cb) ->
  try
    await fsp.mkdir './dist'
    cb null, 0
  catch e
    if e.code = 'EEXIST'
      console.warn 'Warning: \'dist\' already exists'
      cb null, 1
    else cb e, null

launchServer = ->
  console.log 'launching server...'
  app = connect()
  app.use(serveStatic './dist')
  http.createServer(app).listen 5000
  lrServer = lr.createServer()
  console.log __dirname
  lrServer.watch './dist'

# TASKS ###############################

task 'build', 'build the app (core + sass + wasm)', (options) ->
  checkEnv options
  console.log 'building...'
  building = bach.series copyDevin, compileSass, compileJs
  building (e, _) ->
    if e?
      console.log 'Something go wrong'
      console.log e
    else console.log 'building => done'

task 'clean', 'rm ./dist', (options) ->
  console.log 'cleaning `dist`...'
  rimraf './dist', (e) =>
    if e? then console.log e
    else console.log '`dist` removed successfully'

task 'sass', 'compile only sass and html', (options) ->
  checkEnv options
  sassing = bach.series createDir, compileSass
  sassing (e, _) -> if e? then console.log e

task 'serve', 'launch a micro server and watch files', (options) ->
  checkEnv options
  if envRelease
    console.error 'Impossible to use `serve` in `release` mode!'
  else
    watching = true
    serving = bach.series copyDevin, compileJs,
      (bach.parallel compileSass, launchServer)
    serving (e, _) -> if e? then console.log e

task 'wasm', 'use rollup to compile wasm and coffee', (options) ->
  checkEnv options
  compileJs => 42
