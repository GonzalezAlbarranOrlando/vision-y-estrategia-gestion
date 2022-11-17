<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO 31000</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Sistema Gestión del Riesgo-Directrices</h1>
    <select
      class="form-select"
      multiple
      aria-label="multiple select example"
      v-model="selected_opt_ISO_31000"
      size="4"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="preguntasfrecuentes">Preguntas frecuentes</option>
      <option value="serviciodeimplantacion">Servicio de implantación</option>
      <option value="capacitacion">Capacitación</option>
      <option value="Inducción a la Norma ISO 31000">
        Inducción a la Norma ISO 31000:2018 Sistema de Gestión de Riesgos
      </option>
      <option
        value="Pensamiento basado en riesgos con base en la Norma ISO 31000"
      >
        Pensamiento basado en riesgos con base en la Norma ISO 31000:2018
        Sistema de Gestión de Riesgos
      </option>
      <option value="Formación de equipo auditor en la Norma ISO 31000">
        Formación de equipo auditor en la Norma ISO 31000:2018 Sistema de
        Gestión de Riesgos
      </option>
    </select>
    <div class="my-5" v-if="selected_opt_ISO_31000[0] === 'enqueconsiste'">
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_31000[0] === 'preguntasfrecuentes'"
    >
      <PreguntasFrecuentes />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_31000[0] === 'serviciodeimplantacion'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_31000[0] === 'capacitacion'">
      <Capacitacion />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_31000[0] === 'Inducción a la Norma ISO 31000'"
    >
      <InducciónalaNormaISO31000 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_31000[0] ===
        'Pensamiento basado en riesgos con base en la Norma ISO 31000'
      "
    >
      <PensamientobasadoenriesgosconbaseenlaNormaISO31000 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_31000[0] ===
        'Formación de equipo auditor en la Norma ISO 31000'
      "
    >
      <FormacióndeequipoauditorenlaNormaISO31000 />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_31000[0] === 'name4'">
      <name4 />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import PreguntasFrecuentes from "./PreguntasFrecuentes.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Capacitacion from "./Capacitacion.vue";
import InducciónalaNormaISO31000 from "./capacitacion/Inducción a la Norma ISO 31000.vue";
import PensamientobasadoenriesgosconbaseenlaNormaISO31000 from "./capacitacion/Pensamiento basado en riesgos con base en la Norma ISO 31000.vue";
import FormacióndeequipoauditorenlaNormaISO31000 from "./capacitacion/Formación de equipo auditor en la Norma ISO 31000.vue";

export default {
  name: "ISO_31000",
  data() {
    return {
      selected_opt_ISO_31000: ["enqueconsiste"],
    };
  },
  components: {
    EnQueConsiste,
    PreguntasFrecuentes,
    ServicioDeImplantacion,
    Capacitacion,
    InducciónalaNormaISO31000,
    PensamientobasadoenriesgosconbaseenlaNormaISO31000,
    FormacióndeequipoauditorenlaNormaISO31000,
  },
};
</script>
  
<style>
</style>