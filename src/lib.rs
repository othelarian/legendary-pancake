use wasm_bindgen::prelude::*;
use web_sys::Element;
use yew::prelude::*;

extern crate wee_alloc;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(PartialEq)]
enum NbPropheties {
  One, Five, Ten
}

#[function_component(App)]
fn app() -> Html {
  // STATES ######################
  let prophetie_select = use_state_eq(|| NbPropheties::One);
  //
  // TODO: 1st line: launch, version, selector
  //
  // CONFIGS #####################
  let (sel1, sel2, sel3) = match *prophetie_select {
    NbPropheties::One => ("seld", "notseld", "notseld"),
    NbPropheties::Five => ("notseld", "seld", "notseld"),
    NbPropheties::Ten => ("notseld", "notseld", "seld")
  };
  // CBS #########################
  let get_prophetie_cb = {
    let prophetie_select = prophetie_select.clone();
    Callback::from(|_| {
    //
    // TODO
    //
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
      <div>
        //
        // TODO: move the list into a new component
        //
        <div class="lp-prophetie">
          {"Quand le soleil disparaît sous un nuage en forme de serpent, les bouquets du dieu marin descendent du ciel, et l'Esprit détruit les âmes des impies"}
        </div>
        <div class="lp-prophetie">
          {"Quand le soleil disparaît sous un nuage en forme de serpent, les bouquets du dieu marin descendent du ciel, et l'Esprit détruit les âmes des impies"}
        </div>
        //
      </div>
      <hr />
      <div>
        <h4 class="lp-historic">{"Anciennes prophéties"}</h4>
        //
        // TODO: move the list into a new component
        //
        <div class="lp-prophetie lp-old">
          {"Quand le soleil disparaît sous un nuage en forme de serpent, les bouquets du dieu marin descendent du ciel, et l'Esprit détruit les âmes des impies"}
        </div>
        //
      </div>
    </>
  }
}

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen(js_namespace = LP)]
  fn showVeil();

  #[wasm_bindgen(js_namespace = console)]
  fn log(s: &str);
}

#[wasm_bindgen]
pub fn main_js(anchor: Element) {
  yew::start_app_in_element::<App>(anchor);
}
