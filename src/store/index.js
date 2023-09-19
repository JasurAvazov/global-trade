import { createStore } from "vuex";
import heroes from "./modules/heroes";
import feedbacks from "./modules/feedbacks";
import passport from "./modules/passport";
import president from "./modules/president";
import check from "./modules/check";
import log from "./modules/log";

export default createStore({
  modules: {
    heroes,
    feedbacks,
    passport,
    president,
    check,
    log,
  }
});