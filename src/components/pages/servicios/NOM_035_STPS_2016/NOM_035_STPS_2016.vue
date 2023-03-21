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
        <b>NOM-035-STPS-2016</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NOM_035_STPS_2016 = 'En que consiste';
          boolean_sidenav = false;
        "
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NOM_035_STPS_2016 = 'Servicio de implantación';
          boolean_sidenav = false;
        "
      >
        Servicio de implantación
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NOM_035_STPS_2016 = 'Transparencia';
          boolean_sidenav = false;
        "
      >
        Transparencia
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NOM_035_STPS_2016 = 'Proceso de implantación';
          boolean_sidenav = false;
        "
      >
        Proceso de implantación en la Norma Oficial Mexicana NOM-035-STPS-2018
        factores de riesgos Psicosociales en el trabajo-identificación, análisis
        y prevención en centros de trabajo
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NOM_035_STPS_2016 = 'Obligaciones del patrón';
          boolean_sidenav = false;
        "
      >
        Obligaciones del patrón conforme a la Norma Oficial Mexicana
        NOM-035-STPS-2018 factores de riesgos Psicosociales en el
        trabajo-identificación, análisis y prevenci
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NOM_035_STPS_2016 = 'Obligaciones del trabajador';
          boolean_sidenav = false;
        "
      >
        Obligaciones del trabajador de acuerdo con la Norma Oficial Mexicana
        NOM-035-STPS-2018 factores de riesgos Psicosociales en el
        trabajo-identificación, análisis y prevención
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">NOM-035-STPS-2016</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Factores de riesgo psicosocial en el trabajo</h1>
    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016 === 'En que consiste'"
    >
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016 === 'Servicio de implantación'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_NOM_035_STPS_2016 === 'Transparencia'">
      <Transparencia />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016 === 'Proceso de implantación'"
    >
      <Procesodeimplantación />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016 === 'Obligaciones del patrón'"
    >
      <Obligacionesdelpatrón />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016 === 'Obligaciones del trabajador'"
    >
      <Obligacionesdeltrabajador />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Transparencia from "./Transparencia.vue";
import Procesodeimplantación from "./capacitacion/Proceso de implantación.vue";
import Obligacionesdelpatrón from "./capacitacion/Obligaciones del patrón.vue";
import Obligacionesdeltrabajador from "./capacitacion/Obligaciones del trabajador.vue";

export default {
  name: "NOM_035_STPS_2016",
  data() {
    return {
      selected_opt_NOM_035_STPS_2016: "En que consiste",
      boolean_sidenav: false,
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Transparencia,
    Procesodeimplantación,
    Obligacionesdelpatrón,
    Obligacionesdeltrabajador,
  },
};
</script>
  
<style>
</style>