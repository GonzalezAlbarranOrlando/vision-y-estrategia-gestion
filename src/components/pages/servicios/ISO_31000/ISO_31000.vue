<template>
  <div class="container">
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
        <b>ISO 31000</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="selected_opt_ISO_31000 = 'En que consiste'"
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="selected_opt_ISO_31000 = 'Preguntas frecuentes'"
      >
        Preguntas frecuentes
      </button>
      <button
        class="text-truncate"
        v-on:click="selected_opt_ISO_31000 = 'Servicio de implantación'"
      >
        Servicio de implantación
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_31000 =
            'Inducción a la Norma ISO 31000:2018 Sistema de Gestión de Riesgos'
        "
      >
        Inducción a la Norma ISO 31000:2018 Sistema de Gestión de Riesgos
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_31000 =
            'Pensamiento basado en riesgos con base en la Norma ISO 31000:2018 Sistema de Gestión de Riesgos'
        "
      >
        Pensamiento basado en riesgos con base en la Norma ISO 31000:2018
        Sistema de Gestión de Riesgos
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_31000 =
            'Formación de equipo auditor en la Norma ISO 31000:2018 Sistema de Gestión de Riesgos'
        "
      >
        Formación de equipo auditor en la Norma ISO 31000:2018 Sistema de
        Gestión de Riesgos
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO 31000</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Sistema Gestión del Riesgo-Directrices</h1>
    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
    <div class="my-5" v-if="selected_opt_ISO_31000 === 'En que consiste'">
      <EnQueConsiste />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_31000 === 'Preguntas frecuentes'">
      <PreguntasFrecuentes />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_31000 === 'Servicio de implantación'"
    >
      <ServicioDeImplantacion />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_31000 ===
        'Inducción a la Norma ISO 31000:2018 Sistema de Gestión de Riesgos'
      "
    >
      <InducciónalaNormaISO31000 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_31000 ===
        'Pensamiento basado en riesgos con base en la Norma ISO 31000:2018 Sistema de Gestión de Riesgos'
      "
    >
      <PensamientobasadoenriesgosconbaseenlaNormaISO31000 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_31000 ===
        'Formación de equipo auditor en la Norma ISO 31000:2018 Sistema de Gestión de Riesgos'
      "
    >
      <FormacióndeequipoauditorenlaNormaISO31000 />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_31000 === 'name4'">
      <name4 />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import PreguntasFrecuentes from "./PreguntasFrecuentes.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import InducciónalaNormaISO31000 from "./capacitacion/Inducción a la Norma ISO 31000.vue";
import PensamientobasadoenriesgosconbaseenlaNormaISO31000 from "./capacitacion/Pensamiento basado en riesgos con base en la Norma ISO 31000.vue";
import FormacióndeequipoauditorenlaNormaISO31000 from "./capacitacion/Formación de equipo auditor en la Norma ISO 31000.vue";

export default {
  name: "ISO_31000",
  data() {
    return {
      selected_opt_ISO_31000: "En que consiste",
      boolean_sidenav: true,
    };
  },
  components: {
    EnQueConsiste,
    PreguntasFrecuentes,
    ServicioDeImplantacion,
    InducciónalaNormaISO31000,
    PensamientobasadoenriesgosconbaseenlaNormaISO31000,
    FormacióndeequipoauditorenlaNormaISO31000,
  },
};
</script>
  
<style>
</style>