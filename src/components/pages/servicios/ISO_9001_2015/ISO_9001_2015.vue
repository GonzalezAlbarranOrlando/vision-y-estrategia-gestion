<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO 9001:2015</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Sistema de Gestión de la Calidad</h1>
    <select
      class="form-select"
      multiple
      aria-label="multiple select example"
      v-model="selected_opt_ISO_9001_2015"
      size="4"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="serviciodeimplantacion">Servicio de implantación</option>
      <option value="capacitacion">Capacitación</option>
      <option value="transparencia">Transparencia</option>
      <option
        value="Análisis y constitución de la Norma Internacional ISO 9001"
      >
        Análisis y constitución de la Norma Internacional ISO 9001:2015
      </option>
      <option
        value="Metodologías para implementar la Norma Internacional ISO 9001"
      >
        Metodologías para implementar la Norma Internacional ISO 9001:2015
      </option>
      <option
        value="Formación y actualización de auditores internos en la Norma ISO 9001"
      >
        Formación y actualización de auditores internos en la Norma ISO
        9001:2015
      </option>
    </select>
    <div class="my-5" v-if="selected_opt_ISO_9001_2015[0] === 'enqueconsiste'">
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_9001_2015[0] === 'serviciodeimplantacion'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_9001_2015[0] === 'capacitacion'">
      <Capacitacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_9001_2015[0] === 'transparencia'">
      <Transparencia />
    </div>

    <div
      class="my-5"
      v-if="
        selected_opt_ISO_9001_2015[0] ===
        'Análisis y constitución de la Norma Internacional ISO 9001'
      "
    >
      <AnálisisyconstitucióndelaNormaInternacional />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_9001_2015[0] ===
        'Metodologías para implementar la Norma Internacional ISO 9001'
      "
    >
      <MetodologíasparaimplementarlaNormaInternacionalISO9001 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_9001_2015[0] ===
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
import Capacitacion from "./Capacitacion.vue";
import Transparencia from "./Transparencia.vue";
import AnálisisyconstitucióndelaNormaInternacional from "./capacitacion/Análisis y constitución de la Norma Internacional ISO 9001.vue";
import MetodologíasparaimplementarlaNormaInternacionalISO9001 from "./capacitacion/Metodologías para implementar la Norma Internacional ISO 9001.vue";
import FormaciónyactualizacióndeauditoresinternosenlaNormaISO9001 from "./capacitacion/Formación y actualización de auditores internos en la Norma ISO 9001.vue";

export default {
  name: "ISO_9001_2015",
  data() {
    return {
      selected_opt_ISO_9001_2015: ["enqueconsiste"],
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Capacitacion,
    Transparencia,
    AnálisisyconstitucióndelaNormaInternacional,
    MetodologíasparaimplementarlaNormaInternacionalISO9001,
    FormaciónyactualizacióndeauditoresinternosenlaNormaISO9001,
  },
};
</script>
  
<style>
</style>