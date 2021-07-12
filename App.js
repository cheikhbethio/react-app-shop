import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from "redux";
import ShopNavigator from "./navigation/ShopNavigator";
import ProductReducer from "./screens/store/reducers/product";

export default function App() {
  const rootReducer = combineReducers({
    product: ProductReducer
  })
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <ShopNavigator></ShopNavigator>
    </Provider>
  );
}
