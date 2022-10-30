<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">UNE 93200</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Cartas de Servicios</h1>
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_opt_UNE_93200"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="implementación">Implementación</option>
      <option value="ventajas">Ventajas</option>
    </select>
    <div class="my-5" v-if="selected_opt_UNE_93200 === 'enqueconsiste'">
      <EnQueConsiste />
    </div>
    <div class="my-5" v-if="selected_opt_UNE_93200 === 'implementación'">
      <implementacion />
    </div>
    <div class="my-5" v-if="selected_opt_UNE_93200 === 'ventajas'">
      <Ventajas />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import Implementacion from "./Implementacion.vue";
import Ventajas from "./Ventajas.vue";

export default {
  name: "UNE_93200",
  data() {
    return {
      selected_opt_UNE_93200: "enqueconsiste",
    };
  },
  components: { EnQueConsiste, Implementacion, Ventajas },
};
</script>
  
<style>
</style>