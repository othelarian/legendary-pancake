{ spawn } = require 'child_process'
fs = require 'fs'
rimraf = require 'rimraf'
sass = require 'sass'

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
  if all
    #
    console.log 'not ready'
    #
    #
  else if options.web
    #
    # TODO: compile sass
    #
    #
    console.log 'web'
    #
    # TODO: compile coffee
    #
    #
  else if options.wasm then wasmPack -> 42

checkEnv = (options) ->
  if options.debug and options.release
    console.error "error: debug and release can't be active in the same time"
    throw '`debug` and `release` in the same time'
  else
    if options.release then envRelease = true

sassCompile = (cb) ->
  #
  # TODO: if envRelease then use 'compressed'
  #
  res = sass.compile 'style.sass'
  #
  # TODO: capture error
  #
  # TODO: send res into the css file
  #

wasmPack = (cb) ->
  mode = if envRelease then '--release' else '--debug'
  cp = spawn 'wasm-pack', ['build', envRelease], {stdio: 'inherit'}
  cp.on 'error', (err) => cb(err, null)
  cp.on 'close', (code) => cb(null, 0)

# TASKS ###############################

task 'build', 'build the app', (options) ->
  checkEnv options
  buildProject options

task 'clean', 'clean the different parts of the app', (options) ->
  console.log 'cleaning app...'
  all = options.all or (not options.wasm and not options.web)
  if all or options.web
    console.log 'cleaning ./dist...'
    await rimraf './dist', (r) => 42 #console.log e
  if all or options.wasm
    console.log 'cleaning ./pkg ...'
    await rimraf './pkg', (r) => 42 #console.log e
  console.log 'cleaning done!'

task 'serve', 'launch a micro server and watch files', (options) ->
  #
  console.log 'server task'
  #
  # TODO: if envRelease then no server?
  #

task 'wasm', 'only compile wasm, shortcut for `cake -w build`', (options) ->
  checkEnv options
  wasmPack => 42
