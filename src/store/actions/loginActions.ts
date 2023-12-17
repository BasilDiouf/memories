import { createAction } from "@reduxjs/toolkit";
/**
 * --- TOGGLE_ISOPEN ---
 * cette action est dispatchée au click sur le bouton + ou X
 * du bloc setting pour demander à inverser la valeur de isOpen dans le state
 * l'action renvoyée par notre actionToggleIsOpen n'a pas de payload
 */
export const actionToggleIsOpen = createAction("@settings/TOGGLE_ISOPEN");

export const actionToggleIsSignUp = createAction("@settings/TOGGLE_ISSIGNUP");
/**
 * --- CHANGE_EMAIL ---
 * l'action renvoyée par cet actionCreator sera dispatchée au change sur l'input email
 * ajouter ça : <string>
 * revient à dire à createAction : ajout eun paramètre de type string à mon actionCreator
 * et place la valeur de ce paramètre dans la propriété payload de l'action renvoyée
 */
interface IPayloadActionChangeInput {
  newValue: string;
  inputName: "email" | "password";
}
export const actionChangeInput = createAction<IPayloadActionChangeInput>(
  "@settings/CHANGE_INPUT"
);

/**
 * --- LOGOUT ---
 * action dispatché au click sur le bouton deconnexion
 */
export const actionLogout = createAction("@setting/LOGOUT");
