<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">NMX-R-025-SCFI-2015</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">
      Norma Mexicana en Igualdad Laboral y No Discriminación
    </h1>
    <select
      class="form-select"
      multiple
      aria-label="multiple select example"
      v-model="selected_opt_NMX_R_025_SCFI_2015"
      size="4"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="serviciodeimplantacion">Servicio de implantación</option>
      <option value="capacitacion">Capacitación</option>
      <option value="transparencia">Transparencia</option>
      <option value="Implantación de Norma Mexicana">
        Implantación de Norma Mexicana NMX-R-025-SCFI-2015 en centros de trabajo
      </option>
      <option value="Herramientas para la mejora continua">
        Herramientas para la mejora continua del centro de trabajo una vez
        certificado en Norma Mexicana NMX-R-025-SCFI-2015
      </option>
      <option value="Formación del equipo auditor">
        Formación del equipo auditor
      </option>
      <option value="Inducción a la Norma Mexicana">
        Inducción a la Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y
        No Discriminación.
      </option>
    </select>
    <div
      class="my-5"
      v-if="selected_opt_NMX_R_025_SCFI_2015[0] === 'enqueconsiste'"
    >
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NMX_R_025_SCFI_2015[0] === 'serviciodeimplantacion'"
    >
      <ServicioDeImplantacion />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NMX_R_025_SCFI_2015[0] === 'capacitacion'"
    >
      <Capacitacion />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NMX_R_025_SCFI_2015[0] === 'transparencia'"
    >
      <Transparencia />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_NMX_R_025_SCFI_2015[0] === 'Implantación de Norma Mexicana'
      "
    >
      <ImplantacióndeNormaMexicana />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_NMX_R_025_SCFI_2015[0] ===
        'Herramientas para la mejora continua'
      "
    >
      <Herramientasparalamejoracontinua />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_NMX_R_025_SCFI_2015[0] === 'Formación del equipo auditor'
      "
    >
      <Formacióndelequipoauditor />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_NMX_R_025_SCFI_2015[0] === 'Inducción a la Norma Mexicana'
      "
    >
      <InducciónalaNormaMexicana />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Capacitacion from "./Capacitacion.vue";
import Transparencia from "./Transparencia.vue";
import ImplantacióndeNormaMexicana from "./capacitacion/Implantación de Norma Mexicana.vue";
import Herramientasparalamejoracontinua from "./capacitacion/Herramientas para la mejora continua.vue";
import Formacióndelequipoauditor from "./capacitacion/Formación del equipo auditor.vue";
import InducciónalaNormaMexicana from "./capacitacion/Inducción a la Norma Mexicana.vue";

export default {
  name: "NMX_R_025_SCFI_2015",
  data() {
    return {
      selected_opt_NMX_R_025_SCFI_2015: ["enqueconsiste"],
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Capacitacion,
    Transparencia,
    ImplantacióndeNormaMexicana,
    Herramientasparalamejoracontinua,
    Formacióndelequipoauditor,
    InducciónalaNormaMexicana,
  },
};
</script>
  
<style>
</style>