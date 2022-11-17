<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO 37001:2016</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Sistema de Gestión Antisoborno</h1>
    <select
      class="form-select"
      multiple
      aria-label="multiple select example"
      v-model="selected_opt_ISO_37001_2016"
      size="4"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="serviciodeimplantacion">Servicio de implantación</option>
      <option value="capacitacion">Capacitación</option>
      <option value="transparencia">Transparencia</option>
      <option value="Introducción a la Norma Internacional ISO 37001">
        Introducción a la Norma Internacional ISO 37001:2016
      </option>
      <option value="Implementador líder en la norma ISO 37001">
        Implementador(a) líder en la norma ISO 37001:2016
      </option>
      <option value="Auditor líder en la Norma ISO 37001">
        Auditor(a) líder en la Norma ISO 37001:2016
      </option>
    </select>
    <div class="my-5" v-if="selected_opt_ISO_37001_2016[0] === 'enqueconsiste'">
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_37001_2016[0] === 'serviciodeimplantacion'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_37001_2016[0] === 'capacitacion'">
      <Capacitacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_37001_2016[0] === 'transparencia'">
      <Transparencia />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_37001_2016[0] ===
        'Introducción a la Norma Internacional ISO 37001'
      "
    >
      <IntroducciónalaNormaInternacionalISO37001 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_37001_2016[0] ===
        'Implementador líder en la norma ISO 37001'
      "
    >
      <ImplementadorlíderenlanormaISO37001 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_37001_2016[0] === 'Auditor líder en la Norma ISO 37001'
      "
    >
      <AuditorlíderenlaNormaISO37001 />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Capacitacion from "./Capacitacion.vue";
import Transparencia from "./Transparencia.vue";

import IntroducciónalaNormaInternacionalISO37001 from "./capacitacion/Introducción a la Norma Internacional ISO 37001.vue";
import ImplementadorlíderenlanormaISO37001 from "./capacitacion/Implementador líder en la norma ISO 37001.vue";
import AuditorlíderenlaNormaISO37001 from "./capacitacion/Auditor líder en la Norma ISO 37001.vue";

export default {
  name: "ISO_37001_2016",
  data() {
    return {
      selected_opt_ISO_37001_2016: ["enqueconsiste"],
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Capacitacion,
    Transparencia,
    IntroducciónalaNormaInternacionalISO37001,
    ImplementadorlíderenlanormaISO37001,
    AuditorlíderenlaNormaISO37001,
  },
};
</script>
  
<style>
</style>