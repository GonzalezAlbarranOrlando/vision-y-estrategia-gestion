<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">NOM-035-STPS-2016</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Factores de riesgo psicosocial en el trabajo</h1>
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
      <option value="Proceso de implantación">
        Proceso de implantación en la Norma Oficial Mexicana NOM-035-STPS-2018
        factores de riesgos Psicosociales en el trabajo-identificación, análisis
        y prevención en centros de trabajo
      </option>
      <option value="Obligaciones del patrón">
        Obligaciones del patrón conforme a la Norma Oficial Mexicana
        NOM-035-STPS-2018 factores de riesgos Psicosociales en el
        trabajo-identificación, análisis y prevención
      </option>
      <option value="Obligaciones del trabajador">
        Obligaciones del trabajador de acuerdo con la Norma Oficial Mexicana
        NOM-035-STPS-2018 factores de riesgos Psicosociales en el
        trabajo-identificación, análisis y prevención
      </option>
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
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016[0] === 'Proceso de implantación'"
    >
      <Procesodeimplantación />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016[0] === 'Obligaciones del patrón'"
    >
      <Obligacionesdelpatrón />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NOM_035_STPS_2016[0] === 'Obligaciones del trabajador'"
    >
      <Obligacionesdeltrabajador />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Capacitacion from "./Capacitacion.vue";
import Transparencia from "./Transparencia.vue";
import Procesodeimplantación from "./capacitacion/Proceso de implantación.vue";
import Obligacionesdelpatrón from "./capacitacion/Obligaciones del patrón.vue";
import Obligacionesdeltrabajador from "./capacitacion/Obligaciones del trabajador.vue";

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
    Procesodeimplantación,
    Obligacionesdelpatrón,
    Obligacionesdeltrabajador,
  },
};
</script>
  
<style>
</style>