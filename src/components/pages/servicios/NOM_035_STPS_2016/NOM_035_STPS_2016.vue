<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">NOM-035-STPS-2016</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">
      Factores de riesgo psicosocial en el trabajo-Identificación, análisis y
      prevención
    </h1>
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_opt_NOM_035_STPS_2016"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="implementación">Implementación</option>
      <option value="ventajas">Ventajas</option>
    </select>
    <div class="my-5" v-if="selected_opt_NOM_035_STPS_2016 === 'enqueconsiste'">
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016 === 'implementación'"
    >
      <implementacion />
    </div>
    <div class="my-5" v-if="selected_opt_NOM_035_STPS_2016 === 'ventajas'">
      <Ventajas />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import Implementacion from "./Implementacion.vue";
import Ventajas from "./Ventajas.vue";

export default {
  name: "NOM_035_STPS_2016",
  data() {
    return {
      selected_opt_NOM_035_STPS_2016: "enqueconsiste",
    };
  },
  components: { EnQueConsiste, Implementacion, Ventajas },
};
</script>
  
<style>
</style>