<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO/TS 54001:2019</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">
      Sistema de Gestión de la Calidad a Organizaciones Electorales en todos los
      niveles de gobierno
    </h1>
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_opt_ISO_TS_54001_2019"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="implementación">Implementación</option>
      <option value="ventajas">Ventajas</option>
    </select>
    <div class="my-5" v-if="selected_opt_ISO_TS_54001_2019 === 'enqueconsiste'">
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_TS_54001_2019 === 'implementación'"
    >
      <implementacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_TS_54001_2019 === 'ventajas'">
      <Ventajas />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import Implementacion from "./Implementacion.vue";
import Ventajas from "./Ventajas.vue";

export default {
  name: "ISO_TS_54001_2019",
  data() {
    return {
      selected_opt_ISO_TS_54001_2019: "enqueconsiste",
    };
  },
  components: { EnQueConsiste, Implementacion, Ventajas },
};
</script>
  
<style>
</style>