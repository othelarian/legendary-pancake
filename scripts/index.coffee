import lp from '../Cargo.toml'

getId = (id) -> document.getElementById id

sleep = (ms) -> new Promise (resolve) => setTimeout(resolve, ms)

window.showVeil = ->
  getId('lp-veil').style.display = 'block'
  return

initLP = ->
  # SET VEIL ################
  getId 'lp-thanks-close'
  .addEventListener 'click', =>
    getId('lp-veil').style.display = 'none'
  # GET THE DEVIN ###########
  #
  events = await fetch 'devin/events.txt'
  triggers = await fetch 'devin/triggers.txt'
  #
  # TODO: load devin triggers and events
  #
  #console.log await events.text()
  #
  # ACTIVATE WASM ###########
  await sleep 2500
  #
  # TODO: adding a chance to get the waiter
  #
  getId('lp-waiter1').style.display = 'block'
  await sleep 2500
  getId('lp-waiter2').style.display = 'block'
  await sleep 2500
  app = await lp()
  console.log 'launching wasm'
  #
  # TODO: launch the app
  #
  #
  #
  #app.main_js getId 'lp-wasm'
  return

window.launchLP = initLP
