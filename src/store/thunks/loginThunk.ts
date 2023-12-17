// ici on écrit le code qui va aller faire l'appel API (action asynchrone)
// ce thunk sera executé au dispatch à la soumission du form
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

const actionCheckLogin = createAsyncThunk(
  // le nom de l'action
  "@settings/CHECK_LOGIN",
  // le middleware (fonction asynchrone qui s'executera au moment du dispatch)
  async (arg, thunkAPI) => {
    // - ARG : le premier paramètre de la fonction asynchrone contient la valeur passée au moement de l'execution du actionCreator dans le dispatch
    // - THUNK_API : le deuxieme paramètre de lafonction asynchrone est un objet qui contient la fonction getState
    // on peut s'en servir pour recuperer des données du state
    const state = thunkAPI.getState() as RootState;
    const { email, password } = state.loginPopupReducer;

    // ici on peut faire un traitement asynchrone comme notre requete POST
    const result = await axios.post(
      // l'adresse du endpoint
      "http://localhost:3001/login",
      // le body de la request (les datas pour le back)
      {
        // eslint-disable-next-line object-shorthand
        email: email,
        // eslint-disable-next-line object-shorthand
        password: password,
      }
    );
    console.log("thunk executé, reponse reçue !!", result);

    // si on reçoit une 401 : enregi console.log(state.id);strer un message d'erreur dans le state
    // si on reçoit une 200 : enregistrer le pseudo un état isConnected dans le state
    // c'est le reducer qui est responsable des modif de state donc on va lui envoyer une demande
    // ça tombe bien il va recevoir automatiquement les actions
    // @settings/CHECK_LOGIN.pending
    // @settings/CHECK_LOGIN.fullfiled

    // pour envoyer des infos dans le payload de l'action fullfiled on a juste à les retourner ici
    // ici on envoie en payload le pseudo reçu depuis le back (trouvé dans la response)
    return result.data.pseudo;
  }
);

export default actionCheckLogin;
