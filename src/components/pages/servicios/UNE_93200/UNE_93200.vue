<template>
  <div class="container-fluid">
    <!--sidenav -->
    <div
      id="mySidenav"
      class="sidenav"
      style="width: 300px"
      v-if="boolean_sidenav"
    >
      <button
        type="button"
        class="btn-close closebtn"
        aria-label="Close"
        v-on:click="boolean_sidenav = false"
      ></button>
      <div class="sidenav-blue">
        <b>Norma UNE 93200</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_UNE_93200 = 'En que consiste';
          boolean_sidenav = false;
        "
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_UNE_93200 = 'Servicio de implantación';
          boolean_sidenav = false;
        "
      >
        Servicio de implantación
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_UNE_93200 = 'Transparencia';
          boolean_sidenav = false;
        "
      >
        Transparencia
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_UNE_93200 =
            'Confección y gestión de una carta de servicio';
          boolean_sidenav = false;
        "
      >
        Confección y gestión de una carta de servicio
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_UNE_93200 =
            'Inducción a la gestión de las cartas de servicio';
          boolean_sidenav = false;
        "
      >
        Inducción a la gestión de las cartas de servicio
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_UNE_93200 =
            'Generación y gestión de las cartas de servicio y certificación';
          boolean_sidenav = false;
        "
      >
        Generación y gestión de las cartas de servicio y certificación de
        compromisos conforme a la Norma UNE 93200:2008
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_UNE_93200 =
            'Aspectos metodológicos en el desarrollo de las cartas de servicios';
          boolean_sidenav = false;
        "
      >
        Aspectos metodológicos en el desarrollo de las cartas de servicios con
        base en la Norma UNE 93200:2008
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_UNE_93200 = 'Requisitos, beneficios y ventajas';
          boolean_sidenav = false;
        "
      >
        Requisitos, beneficios y ventajas al implantar las cartas de servicios
        en una organización de la administración pública, organismo autónomo, y
        entidad y empresa pública y privada
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">Norma UNE 93200</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Cartas de Servicios</h1>
    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
    <div class="my-5" v-if="selected_opt_UNE_93200 === 'En que consiste'">
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_UNE_93200 === 'Servicio de implantación'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_UNE_93200 === 'Transparencia'">
      <Transparencia />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_UNE_93200 ===
        'Confección y gestión de una carta de servicio'
      "
    >
      <Confecciónygestióndeunacartadeservicio />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_UNE_93200 ===
        'Inducción a la gestión de las cartas de servicio'
      "
    >
      <Inducciónalagestióndelascartasdeservicio />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_UNE_93200 ===
        'Generación y gestión de las cartas de servicio y certificación'
      "
    >
      <Generaciónygestióndelascartasdeservicioycertificación />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_UNE_93200 ===
        'Aspectos metodológicos en el desarrollo de las cartas de servicios'
      "
    >
      <Aspectosmetodológicoseneldesarrollodelascartasdeservicios />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_UNE_93200 === 'Requisitos, beneficios y ventajas'"
    >
      <Requisitosbeneficiosyventajas />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Transparencia from "./Transparencia.vue";
import Confecciónygestióndeunacartadeservicio from "./capacitacion/Confección y gestión de una carta de servicio.vue";
import Inducciónalagestióndelascartasdeservicio from "./capacitacion/Inducción a la gestión de las cartas de servicio.vue";
import Generaciónygestióndelascartasdeservicioycertificación from "./capacitacion/Generación y gestión de las cartas de servicio y certificación.vue";
import Aspectosmetodológicoseneldesarrollodelascartasdeservicios from "./capacitacion/Aspectos metodológicos en el desarrollo de las cartas de servicios.vue";
import Requisitosbeneficiosyventajas from "./capacitacion/Requisitos beneficios y ventajas.vue";

export default {
  name: "UNE_93200",
  data() {
    return {
      boolean_sidenav: false,
      selected_opt_UNE_93200: "En que consiste",
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Transparencia,
    Confecciónygestióndeunacartadeservicio,
    Inducciónalagestióndelascartasdeservicio,
    Generaciónygestióndelascartasdeservicioycertificación,
    Aspectosmetodológicoseneldesarrollodelascartasdeservicios,
    Requisitosbeneficiosyventajas,
  },
};
</script>
  
<style>
</style>