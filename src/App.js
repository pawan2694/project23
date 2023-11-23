// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Form from "./components/Form";

const App = () => {
 return (
  <Provider store={store}>
   <div>
    <h1>Conditional Logic Form with Redux and Custom Hooks</h1>
    <Form />
   </div>
  </Provider>
 );
};

export default App;
