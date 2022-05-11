import lp from '../Cargo.toml'

getId = (id) -> document.getElementById id
sleep = (ms) -> new Promise (resolve) => setTimeout(resolve, ms)

LP =
  rnd: (top) -> Math.floor(Math.random() * top)
  showVeil: ->
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
  wait_time = 1500
  await sleep wait_time
  wait = false
  if (LP.rnd 5) == 5
    wait = wait_time
    getId('lp-waiter1').style.display = 'block'
    await sleep 1500
  if wait and (LP.rnd 10) == 10
    getId('lp-waiter2').style.display = 'block'
    await sleep wait_time
  app = await lp()
  app.main_js getId 'lp-core'
  return

window.LP = LP
window.launchLP = initLP
