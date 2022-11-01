<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO 9001:2015</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Sistema de Gestión de la Calidad</h1>
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_opt_ISO_9001_2015"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="serviciodeimplantacion">Servicio de implantación</option>
      <option value="capacitacion">Capacitación</option>
      <option value="transparencia">Transparencia</option>
    </select>
    <div class="my-5" v-if="selected_opt_ISO_9001_2015 === 'enqueconsiste'">
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_9001_2015 === 'serviciodeimplantacion'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_9001_2015 === 'capacitacion'">
      <Capacitacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_9001_2015 === 'transparencia'">
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
  name: "ISO_9001_2015",
  data() {
    return {
      selected_opt_ISO_9001_2015: "enqueconsiste",
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