use wasm_bindgen::prelude::*;
use web_sys::Element;
use yew::prelude::*;

//extern crate wee_alloc;

//#[global_allocator]
//static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(PartialEq)]
enum NbPropheties {
  One, Five, Ten
}

fn get_prophetie() -> String {
  //
  log("entering get_prophetie");
  //
  let trgs_max = trgsMax();
  let evts_max = evtsMax();
  //
  log(&format!("get the maxes({}, {})", trgs_max, evts_max));
  //
  let mut trgs = vec!(rnd(trgs_max));
  //
  log("get the first trigger");
  //
  if rnd(40) == 39 {
    //
    log("going for a second trigger");
    //
    let mut lmt = 1000;
    //
    while trgs.len() < 2 && lmt > 0 {
      //
      log("steping in the first loop");
      //
      let tmp = rnd(trgs_max);
      if trgs.iter().position(|x| x == &tmp).is_none() { trgs.push(tmp); }
      lmt -= 1;
    }
    //
    if lmt == 0 { log("something went wrong, first limit"); panic!(); }
    //
  }
  //
  let evt_rnd = rnd(500);
  //
  log(&format!("number of event (rnd): {}", evt_rnd));
  //
  let nb_evts = match evt_rnd {
    0..=124 => 1,
    125..=369 => 2,
    370..=469 => 3,
    470..=489 => 4,
    490..=498 => 5,
    _ => 6
  };
  //
  log(&format!("Number of event (real): {}", nb_evts));
  //
  let evts = if nb_evts == 1 { vec!(rnd(evts_max)) }
  else {
    //
    //
    let mut v = vec!(rnd(evts_max));
    //
    log("first event confirmed");
    //
    let mut lmt = 1000;
    //
    while v.len() < nb_evts {
      let tmp = rnd(evts_max);
      if v.iter().position(|x| x == &tmp).is_none() { v.push(tmp); }
      //
      lmt -= 1;
      //
    }
    //
    if lmt == 0 { log("something went wrong, second limit"); panic!(); }
    //
    v
  };
  //
  //
  genProphetie(
    JsValue::from_serde(&trgs).unwrap(),
    JsValue::from_serde(&evts).unwrap()
  )
}

#[function_component(App)]
fn app() -> Html {
  // STATES ######################
  let prophetie_select = use_state_eq(|| NbPropheties::One);
  let propheties_active = use_state(|| Vec::new());
  let propheties_old = use_state(|| Vec::new());
  // CONFIGS #####################
  let (sel1, sel2, sel3) = match *prophetie_select {
    NbPropheties::One => ("seld", "notseld", "notseld"),
    NbPropheties::Five => ("notseld", "seld", "notseld"),
    NbPropheties::Ten => ("notseld", "notseld", "seld")
  };
  // CBS #########################
  let get_prophetie_cb = {
    let prophetie_select = prophetie_select.clone();
    let propheties_active = propheties_active.clone();
    let propheties_old = propheties_old.clone();
    Callback::from(move |_| {
    //
    log("entering prophetie callback");
    //
    let new_active = match *prophetie_select {
      NbPropheties::One => vec!(get_prophetie()),
      NbPropheties::Five => (0..5).map(|_| get_prophetie()).collect(),
      NbPropheties::Ten => (0..10).map(|_| get_prophetie()).collect()
    };
    let mut tmp = (*propheties_old).clone();
    propheties_active.iter().rev()
      .for_each(|e: &String| tmp.insert(0, e.clone()) );
    if tmp.len() > 100 { let _ = tmp.split_off(100); }
    propheties_active.set(new_active);
    propheties_old.set(tmp);
    })
  };
  let veil_cb = Callback::from(|_| showVeil());
  let sel1_cb = {
    let prophetie_select = prophetie_select.clone();
    Callback::from(move |_| prophetie_select.set(NbPropheties::One))
  };
  let sel5_cb = {
    let prophetie_select = prophetie_select.clone();
    Callback::from(move |_| prophetie_select.set(NbPropheties::Five))
  };
  let sel10_cb = {
    let prophetie_select = prophetie_select.clone();
    Callback::from(move |_| prophetie_select.set(NbPropheties::Ten))
  };
  // PARTIALS ####################
  let actives: Html = propheties_active.iter().map(|prophetie|
    html! {<div class="lp-prophetie">{prophetie}</div>}).collect();
  let olds: Html = propheties_old.iter().map(|prophetie: &String|
    html! {<div class="lp-prophetie lp-old">{prophetie}</div>}).collect();
  // HTML ########################
  html! {
    <>
      <div class="lp-controls">
        <button class="lp-btn" onclick={get_prophetie_cb}>
          {"Que l'oracle parle !"}
        </button>
        <button class="lp-vers-btn" onclick={veil_cb}>
          {env!("CARGO_PKG_VERSION")}
        </button>
        <div class="lp-selector">
          <button class={sel1} onclick={sel1_cb}>{"1 prophétie"}</button>
          <button class={sel2} onclick={sel5_cb}>{"5 prophéties"}</button>
          <button class={sel3} onclick={sel10_cb}>{"10 prophéties"}</button>
        </div>
      </div>
      <hr />
      <div class="lp-propheties">
        if propheties_active.len() == 0 {
          <div class="lp-no-prophetie">
            {"L'oracle ne c'est pas encore exprimé ..."}
          </div>
        } else { {actives} }
      </div>
      <hr />
      if propheties_old.len() > 0 {
        <div><h4 class="lp-historic">{"Anciennes prophéties"}</h4>{olds}</div>
      }
    </>
  }
}

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen(js_namespace = LP)]
  fn evtsMax() -> usize;

  #[wasm_bindgen(js_namespace = LP)]
  fn genProphetie(triggers: JsValue, events: JsValue) -> String;

  #[wasm_bindgen(js_namespace = LP)]
  fn rnd(top: usize) -> usize;

  #[wasm_bindgen(js_namespace = LP)]
  fn showVeil();

  #[wasm_bindgen(js_namespace = LP)]
  fn trgsMax() -> usize;

  // TODO: remove after use
  #[wasm_bindgen(js_namespace = console)]
  fn log(s: &str);
}

#[wasm_bindgen]
pub fn main_js(anchor: Element) {
  yew::start_app_in_element::<App>(anchor);
}
