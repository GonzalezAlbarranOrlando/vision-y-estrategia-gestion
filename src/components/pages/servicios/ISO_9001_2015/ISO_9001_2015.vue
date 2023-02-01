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
        <b>ISO 9001:2015</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_9001_2015_prb = 'enqueconsiste';
          boolean_sidenav = false;
        "
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_9001_2015_prb = 'serviciodeimplantacion';
          boolean_sidenav = false;
        "
      >
        Servicio de implantación
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_9001_2015_prb = 'transparencia';
          boolean_sidenav = false;
        "
      >
        Transparencia
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_9001_2015_prb = 'Interpretación a la Norma ISO 9001';
          boolean_sidenav = false;
        "
      >
        Interpretación a la Norma ISO 9001:2015
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_9001_2015_prb =
            'Metodologías para implementar la Norma Internacional ISO 9001';
          boolean_sidenav = false;
        "
      >
        Metodologías para implementar la Norma Internacional ISO 9001:2015
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_9001_2015_prb =
            'Formación y actualización de auditores internos en la Norma ISO 9001';
          boolean_sidenav = false;
        "
      >
        Formación y actualización de auditores internos en la Norma ISO
        9001:2015
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO 9001:2015</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Sistema de Gestión de la Calidad</h1>

    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
    <div class="my-5" v-if="selected_opt_ISO_9001_2015_prb === 'enqueconsiste'">
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_9001_2015_prb === 'serviciodeimplantacion'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_9001_2015_prb === 'transparencia'">
      <Transparencia />
    </div>

    <div
      class="my-5"
      v-if="
        selected_opt_ISO_9001_2015_prb === 'Interpretación a la Norma ISO 9001'
      "
    >
      <InterpretaciónalaNormaISO9001 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_9001_2015_prb ===
        'Metodologías para implementar la Norma Internacional ISO 9001'
      "
    >
      <MetodologíasparaimplementarlaNormaInternacionalISO9001 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_9001_2015_prb ===
        'Formación y actualización de auditores internos en la Norma ISO 9001'
      "
    >
      <FormaciónyactualizacióndeauditoresinternosenlaNormaISO9001 />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Transparencia from "./Transparencia.vue";
import InterpretaciónalaNormaISO9001 from "./capacitacion/Interpretación a la Norma ISO 9001.vue";
import MetodologíasparaimplementarlaNormaInternacionalISO9001 from "./capacitacion/Metodologías para implementar la Norma Internacional ISO 9001.vue";
import FormaciónyactualizacióndeauditoresinternosenlaNormaISO9001 from "./capacitacion/Formación y actualización de auditores internos en la Norma ISO 9001.vue";

export default {
  name: "ISO_9001_2015",
  data() {
    return {
      selected_opt_ISO_9001_2015: ["enqueconsiste"],
      selected_opt_ISO_9001_2015_prb: "enqueconsiste",
      boolean_sidenav: false,
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Transparencia,
    InterpretaciónalaNormaISO9001,
    MetodologíasparaimplementarlaNormaInternacionalISO9001,
    FormaciónyactualizacióndeauditoresinternosenlaNormaISO9001,
  },
};
</script>
  
<style>
</style>