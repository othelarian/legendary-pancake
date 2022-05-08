import lp from '../Cargo.toml'

window.a_fn = () ->
  console.log 'calling a_fn'
  'test'

initLP = ->
  app = await lp()
  #
  # TODO: load devin triggers and events
  #
  #
  events = await fetch 'devin/events.txt'
  triggers = await fetch 'devin/triggers.txt'
  #
  #console.log await events.text()
  #
  #app.main_js document.getElementById 'lp-wasm'
  return

initLP()
