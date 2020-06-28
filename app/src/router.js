import Vue from "vue";
import Router from "vue-router"
import Upgrades from "./views/Upgrades.vue"
import TavernBody from "./components/TavernBody.vue"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/Upgrades",
            name: "Upgrades",
            component: Upgrades
        },
        {
            path: "/",
            name: "Tavernbody",
            component: TavernBody   
        }
    ]
})