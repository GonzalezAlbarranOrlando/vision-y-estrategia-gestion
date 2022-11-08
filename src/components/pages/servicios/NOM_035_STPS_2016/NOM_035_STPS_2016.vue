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
      class="form-select"
      multiple
      aria-label="multiple select example"
      v-model="selected_opt_NOM_035_STPS_2016"
      size="4"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="serviciodeimplantacion">Servicio de implantacion</option>
      <option value="capacitacion">Capacitación</option>
      <option value="transparencia">Transparencia</option>
    </select>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016[0] === 'enqueconsiste'"
    >
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016[0] === 'serviciodeimplantacion'"
    >
      <ServicioDeImplantacion />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016[0] === 'capacitacion'"
    >
      <Capacitacion />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016[0] === 'transparencia'"
    >
      <Transparencia />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Capacitacion from "./Capacitacion.vue";
import Transparencia from "./Transparencia.vue";

export default {
  name: "NOM_035_STPS_2016",
  data() {
    return {
      selected_opt_NOM_035_STPS_2016: ["enqueconsiste"],
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Capacitacion,
    Transparencia,
  },
};
</script>
  
<style>
</style>