<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO 31000</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Sistema Gestión del Riesgo-Directrices</h1>
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_opt_ISO_31000"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="implementación">Implementación</option>
      <option value="ventajas">Ventajas</option>
    </select>
    <div class="my-5" v-if="selected_opt_ISO_31000 === 'enqueconsiste'">
      <EnQueConsiste />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_31000 === 'implementación'">
      <implementacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_31000 === 'ventajas'">
      <Ventajas />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import Implementacion from "./Implementacion.vue";
import Ventajas from "./Ventajas.vue";

export default {
  name: "ISO_31000",
  data() {
    return {
      selected_opt_ISO_31000: "enqueconsiste",
    };
  },
  components: { EnQueConsiste, Implementacion, Ventajas },
};
</script>
  
<style>
</style>