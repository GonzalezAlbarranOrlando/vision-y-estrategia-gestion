import { createApp } from 'vue'
import App from './App.vue'
//vue-router
import {createRouter, createWebHistory} from 'vue-router'

// 1. Define route components.
import Inicio from './components/pages/Inicio.vue'
import Contacto from './components/pages/Contacto.vue'
import Nosotros from './components/pages/Nosotros.vue'
import Template from './components/pages/Template.vue'
import Boletines from './components/pages/Boletines.vue'
import Cursos from './components/pages/cursos/CursosMenu.vue'

import Gestión_de_la_Innovación from './components/pages/cursos/Gestión de la Innovación.vue'
import Indicadores_para_el_Sistema_de_Gestión from './components/pages/cursos/Indicadores para el Sistema de Gestión.vue'
import Planeación_Estratégica_y_Control_de_Calidad from './components/pages/cursos/Planeación Estratégica y Control de Calidad.vue'
import Administración_de_Proyectos_Seis_Sigma from './components/pages/cursos/Administración de Proyectos Seis Sigma.vue'
import Mapeo_de_Procesos from './components/pages/cursos/Mapeo de Procesos.vue'
import Gestión_Estratégica from './components/pages/cursos/Gestión Estratégica.vue'
import Planeación_Avanzada_de_la_Calidad from './components/pages/cursos/Planeación Avanzada de la Calidad.vue'
import Desarrollo_de_Habilidades_Directivas from './components/pages/cursos/Desarrollo de Habilidades Directivas.vue'
import Gestión_por_Procesos from './components/pages/cursos/Gestión por Procesos.vue'
import Análisis_de_Causa_Raíz_y_Acciones_Correctivas from './components/pages/cursos/Análisis de Causa Raíz y Acciones Correctivas.vue'
import Indicadores_de_Desempeño from './components/pages/cursos/Indicadores de Desempeño.vue'
import Liderazgo_Creativo from './components/pages/cursos/Liderazgo Creativo.vue'
import Gestión_Antisoborno_37001 from './components/pages/cursos/Gestión Antisoborno 37001.vue'
import Sistemas_de_Gestión_de_la_Calidad from './components/pages/cursos/Sistemas de Gestión de la Calidad.vue'
import Curso_Auditor_Interno_ISO_9001 from './components/pages/cursos/Curso Auditor Interno ISO 9001.vue'

import ISO_9001_2015 from './components/pages/servicios/ISO_9001_2015/ISO_9001_2015.vue'
import ISO_37001_2016 from './components/pages/servicios/ISO_37001_2016/ISO_37001_2016.vue'
import ISO_31000 from './components/pages/servicios/ISO_31000/ISO_31000.vue'
import NMX_R_025_SCFI_2015 from './components/pages/servicios/NMX_R_025_SCFI_2015/NMX_R_025_SCFI_2015.vue'
import ISO_TS_54001_2019 from './components/pages/servicios/ISO_TS_54001_2019/ISO_TS_54001_2019.vue'
import NOM_035_STPS_2016 from './components/pages/servicios/NOM_035_STPS_2016/NOM_035_STPS_2016.vue'
import UNE_93200 from './components/pages/servicios/UNE_93200/UNE_93200.vue'

// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', component: Inicio },
    { path: '/contacto', component: Contacto },
    { path: '/nosotros', component: Nosotros },
    { path: '/template', component: Template },
    { path: '/boletines', component: Boletines },
    { path: '/cursos', component: Cursos },

    { path: '/cursos/Gesti%C3%B3n_de_la_Innovaci%C3%B3n', component: Gestión_de_la_Innovación },
    { path: '/cursos/Indicadores_para_el_Sistema_de_Gesti%C3%B3n', component: Indicadores_para_el_Sistema_de_Gestión },
    { path: '/cursos/Planeaci%C3%B3n_Estrat%C3%A9gica_y_Control_de_Calidad', component: Planeación_Estratégica_y_Control_de_Calidad },
    { path: '/cursos/Administraci%C3%B3n_de_Proyectos_Seis_Sigma', component: Administración_de_Proyectos_Seis_Sigma },
    { path: '/cursos/Mapeo_de_Procesos', component: Mapeo_de_Procesos },
    { path: '/cursos/Gesti%C3%B3n_Estrat%C3%A9gica', component: Gestión_Estratégica },
    { path: '/cursos/Planeaci%C3%B3n_Avanzada_de_la_Calidad', component: Planeación_Avanzada_de_la_Calidad },
    { path: '/cursos/Desarrollo_de_Habilidades_Directivas', component: Desarrollo_de_Habilidades_Directivas },
    { path: '/cursos/Gesti%C3%B3n_por_Procesos', component: Gestión_por_Procesos },
    { path: '/cursos/An%C3%A1lisis_de_Causa_Ra%C3%ADz_y_Acciones_Correctivas', component: Análisis_de_Causa_Raíz_y_Acciones_Correctivas },
    { path: '/cursos/Indicadores_de_Desempe%C3%B1o', component: Indicadores_de_Desempeño },
    { path: '/cursos/Liderazgo_Creativo', component: Liderazgo_Creativo },
    { path: '/cursos/Gesti%C3%B3n_Antisoborno_37001', component: Gestión_Antisoborno_37001 },
    { path: '/cursos/Sistemas_de_Gesti%C3%B3n_de_la_Calidad', component: Sistemas_de_Gestión_de_la_Calidad },
    { path: '/cursos/Curso_Auditor_Interno_ISO_9001', component: Curso_Auditor_Interno_ISO_9001 }, 

    { path: '/ISO_9001:2015', component: ISO_9001_2015 },
    { path: '/ISO_37001:2016', component: ISO_37001_2016 },
    { path: '/ISO_31000', component: ISO_31000 },
    { path: '/NMX-R-025-SCFI-2015', component: NMX_R_025_SCFI_2015 },
    { path: '/ISO_TS_54001:2019', component: ISO_TS_54001_2019 },
    { path: '/NOM-035-STPS-2016', component: NOM_035_STPS_2016 },
    { path: '/UNE_93200', component: UNE_93200 },
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// use the router instance to make the
// whole app router-aware.
app.use(router)
app.mount('#app')