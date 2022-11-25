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
        <b>ISO 37001:2016</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="selected_opt_ISO_37001_2016 = 'En que consiste'"
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="selected_opt_ISO_37001_2016 = 'Servicio de implantación'"
      >
        Servicio de implantación
      </button>
      <button
        class="text-truncate"
        v-on:click="selected_opt_ISO_37001_2016 = 'Transparencia'"
      >
        Transparencia
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_37001_2016 =
            'Introducción a la Norma Internacional ISO 37001:2016'
        "
      >
        Introducción a la Norma Internacional ISO 37001:2016
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_37001_2016 =
            'Implementador(a) líder en la norma ISO 37001:2016'
        "
      >
        Implementador(a) líder en la norma ISO 37001:2016
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_37001_2016 =
            'Auditor(a) líder en la Norma ISO 37001:2016'
        "
      >
        Auditor(a) líder en la Norma ISO 37001:2016
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO 37001:2016</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Sistema de Gestión Antisoborno</h1>

    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >

    <div class="my-5" v-if="selected_opt_ISO_37001_2016 === 'En que consiste'">
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_37001_2016 === 'Servicio de implantación'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_37001_2016 === 'Transparencia'">
      <Transparencia />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_37001_2016 ===
        'Introducción a la Norma Internacional ISO 37001:2016'
      "
    >
      <IntroducciónalaNormaInternacionalISO37001 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_37001_2016 ===
        'Implementador(a) líder en la norma ISO 37001:2016'
      "
    >
      <ImplementadorlíderenlanormaISO37001 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_37001_2016 ===
        'Auditor(a) líder en la Norma ISO 37001:2016'
      "
    >
      <AuditorlíderenlaNormaISO37001 />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Transparencia from "./Transparencia.vue";

import IntroducciónalaNormaInternacionalISO37001 from "./capacitacion/Introducción a la Norma Internacional ISO 37001.vue";
import ImplementadorlíderenlanormaISO37001 from "./capacitacion/Implementador líder en la norma ISO 37001.vue";
import AuditorlíderenlaNormaISO37001 from "./capacitacion/Auditor líder en la Norma ISO 37001.vue";

export default {
  name: "ISO_37001_2016",
  data() {
    return {
      selected_opt_ISO_37001_2016: "En que consiste",
      boolean_sidenav: false,
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Transparencia,
    IntroducciónalaNormaInternacionalISO37001,
    ImplementadorlíderenlanormaISO37001,
    AuditorlíderenlaNormaISO37001,
  },
};
</script>
  
<style>
</style>