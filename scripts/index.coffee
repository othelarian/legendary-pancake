import lp from '../Cargo.toml'

getId = (id) -> document.getElementById id
sleep = (ms) -> new Promise (resolve) => setTimeout(resolve, ms)

evts = [];
trgs = [];

LP =
  evtsMax: -> evts.length
  genProphetie: (trgs_lst, evts_lst) ->
    #
    console.log trgs_lst
    console.log evts_lst
    return 'blob'
    #
    p = trgs[trgs_lst[0]]
    if trgs_lst.length > 1
      t = trgs[trgs_lst[1]]
      p = p + ', et ' + t[0].toLowerCase() + t.substring(1)
    p += ', '
    evts_lst = evts_lst.map (x) => evts[x]
    p + evts_lst.join ', et '
  rnd: (top) -> Math.floor(Math.random() * top)
  showVeil: ->
    getId('lp-veil').style.display = 'block'
    return
  trgsMax: -> trgs.length

initLP = ->
  # SET VEIL ################
  getId 'lp-thanks-close'
  .addEventListener 'click', =>
    getId('lp-veil').style.display = 'none'
  # GET THE DEVIN ###########
  events = await fetch 'devin/events.txt'
  triggers = await fetch 'devin/triggers.txt'
  evts = (await events.text()).split '\r\n'
  trgs = (await triggers.text()).split '\r\n'
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
