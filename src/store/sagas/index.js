import { all, takeLatest } from "redux-saga/effects";

import { PokemonTypes } from "../ducks/pokemon";
import { capture } from "./pokemon";

// import { NoticiasTypes } from "~/store/ducks/noticias";
// import { fetch as fetchNoticias } from "./noticias";

export default function* rootSaga() {
  yield all([
    // pokemon
    takeLatest(PokemonTypes.CAPTURE_REQUEST, capture),
    // // noticias
    // takeLatest(NoticiasTypes.FETCH_REQUEST, fetchNoticias),
  ]);
}
