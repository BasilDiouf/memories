import { createReducer } from "@reduxjs/toolkit";
import {
  actionChangeInput,
  actionLogout,
  actionToggleIsOpen,
  actionToggleIsSignUp,
} from "../actions/loginActions";
import actionCheckLogin from "../thunks/loginThunk";

const initialState = {
  isOpen: false, // isOpen pour piloter l'affichage du bloc settings
  isSignUp: false,
  email: "",
  password: "",
  isConnected: false,
  pseudo: "",
  errorMessage: "",
};

const loginPopupReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionToggleIsOpen, (state, action) => {
      // ici modif de isOpen
      state.isOpen = !state.isOpen;
    })
    .addCase(actionToggleIsSignUp, (state, action) => {
      // ici modif de isSignUp
      state.isSignUp = !state.isSignUp;
    })
    .addCase(actionChangeInput, (state, action) => {
      // action.payload contient {newValue: 'totoA', inputName: 'email'}
      // action.payload.inputName contient la propriété de state qu'on veut modifier
      // action.payload.newValue contient la nouvelle valeur
      state[action.payload.inputName] = action.payload.newValue;
    })
    .addCase(actionCheckLogin.fulfilled, (state, action) => {
      // ON sait que le user s'est connecté correctement
      // enregistrer isConnected à true + le pseudo
      state.isConnected = true;
      state.pseudo = action.payload;
      state.errorMessage = "";
      // ferme le panneau setting
      state.isOpen = false;
    })
    .addCase(actionCheckLogin.rejected, (state, action) => {
      // ici on pourrait enregistrer un message d'erreur dans le state
      state.errorMessage = "Erreur de connexion";
    })
    .addCase(actionLogout, (state, action) => {
      // ici on remet isConnected à false
      state.isConnected = false;
      state.pseudo = "";
    });
});

export default loginPopupReducer;
