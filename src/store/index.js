import { createStore } from "vuex";
import heroes from "./modules/heroes";
import works from "./modules/works";
import advantages from "./modules/advantages";
import feedbacks from "./modules/feedbacks";
import log from "./modules/log";

export default createStore({
  modules: {
    heroes,
    works,
    advantages,
    feedbacks,
    log,
  }
});