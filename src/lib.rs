use wasm_bindgen::prelude::*;
use web_sys::Element;
use yew::prelude::*;

#[function_component(App)]
fn app() -> Html {
  //
  //
  // TODO: 1st line: launch, version, selector
  //
  //
  html! { <h1>{"plop hi!"}</h1> }
  //
}

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen]
  fn a_fn() -> String;
}

#[wasm_bindgen]
pub fn main_js(anchor: Element) {
  //
  //let version = env!("CARGO_PKG_VERSION");
  //
  a_fn();
  //
  yew::start_app_in_element::<App>(anchor);
  //
}
