<template>
  <div class="container-fluid">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">SERVICIO_123_45</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">subtitle</h1>
    <select
      class="form-select"
      multiple
      aria-label="multiple select example"
      v-model="selected_opt_SERVICIO_123_45"
      size="4"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="serviciodeimplantacion">Servicio de implantación</option>
      <option value="consultoria">Consultoría</option>
      <option value="capacitacion">Capacitación</option>
      <option value="transparencia">Transparencia</option>
    </select>
    <div
      class="my-5"
      v-if="selected_opt_SERVICIO_123_45[0] === 'enqueconsiste'"
    >
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_SERVICIO_123_45[0] === 'serviciodeimplantacion'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_SERVICIO_123_45[0] === 'consultoria'">
      <Consultoria />
    </div>
    <div class="my-5" v-if="selected_opt_SERVICIO_123_45[0] === 'capacitacion'">
      <Capacitacion />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_SERVICIO_123_45[0] === 'transparencia'"
    >
      <Transparencia />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Consultoria from "./Consultoria.vue";
import Capacitacion from "./Capacitacion.vue";
import Transparencia from "./Transparencia.vue";

export default {
  name: "SERVICIO_123_45",
  data() {
    return {
      selected_opt_SERVICIO_123_45: ["enqueconsiste"],
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Consultoria,
    Capacitacion,
    Transparencia,
  },
};
</script>
  
<style>
</style>