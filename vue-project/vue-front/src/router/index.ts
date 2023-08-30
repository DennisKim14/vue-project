import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
          path: "/welcome",
          name: "welcome",
          component: () => import("../components/TheWelCome.vue"),
        },
        {
          path: "/board",
          name: "board",
          component: () => import("../components/Board.vue"),
        }
    ]

})

export default router;