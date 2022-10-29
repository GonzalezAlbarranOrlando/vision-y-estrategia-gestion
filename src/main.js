import { createApp } from 'vue'
import App from './App.vue'
//vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// 1. Define route components.
import Inicio from './components/pages/Inicio.vue'
import Contacto from './components/pages/Contacto.vue'
import Nosotros from './components/pages/Nosotros.vue'
import Template from './components/pages/Template.vue'
import ISO_9001_2015 from './components/pages/servicios/ISO_9001_2015/ISO_9001_2015.vue'
import ISO_37001_2016 from './components/pages/servicios/ISO_37001_2016/ISO_37001_2016.vue'
import ISO_31000 from './components/pages/servicios/ISO_31000/ISO_31000.vue'

// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', component: Inicio },
    { path: '/contacto', component: Contacto },
    { path: '/nosotros', component: Nosotros },
    { path: '/template', component: Template },
    { path: '/ISO_9001:2015', component: ISO_9001_2015 },
    { path: '/ISO_37001:2016', component: ISO_37001_2016 },
    { path: '/ISO_31000', component: ISO_31000 },
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// use the router instance to make the
// whole app router-aware.
app.use(router)
app.mount('#app')