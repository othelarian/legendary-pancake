use wasm_bindgen::prelude::*;
//use yew::prelude::*;

/*
#[function_component(App)]
fn app() -> Html {
  //
  //
  html! { <h1>{"plop"}</h1> }
  //
}
*/

#[wasm_bindgen]
pub fn some_test() -> usize {
  42
}

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen]
  fn a_fn() -> String;
}

//aa

//#[wasm_bindgen(start)]
#[wasm_bindgen]
pub fn main_js() -> Result<(), JsValue> {
  //
  //let version = env!("CARGO_PKG_VERSION");
  //
  //yew::start_app::<App>();
  //
  Ok(())
  //
}
