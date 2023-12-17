/* eslint-disable object-shorthand */
import { configureStore } from "@reduxjs/toolkit";

import loginPopupReducer from "./reducers/loginPopupReducer";

const store = configureStore({
  reducer: {
    loginPopupReducer: loginPopupReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
// avec cette ligne (copiée collée de la doc ici :
// https://redux.js.org/usage/usage-with-typescript )
// on recupère le type de state globale (tout le stae avec tous les sous state de chaque reducer)
export type RootState = ReturnType<typeof store.getState>;
// avec cette ligne toujours copié collé de la doc
// on récupère le type de la fonction dispatch du store
// on s'en servira à chaque useDispatch pour recuperer la fonction typée qui acceptera alors des action asynchrones
export type AppDispatch = typeof store.dispatch;
