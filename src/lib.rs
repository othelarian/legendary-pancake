use wasm_bindgen::prelude::*;
use yew::prelude::*;


#[function_component(App)]
fn app() -> Html {
  //
  //
  html! { <h1>{"plop"}</h1> }
  //
}



#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
  //
  //
  yew::start_app::<App>();
  //
  Ok(())
  //
}
