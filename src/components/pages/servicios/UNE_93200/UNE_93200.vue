<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">Norma UNE 93200</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">Cartas de Servicios</h1>
    <select
      class="form-select"
      multiple
      aria-label="multiple select example"
      v-model="selected_opt_UNE_93200"
      size="4"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="serviciodeimplantacion">Servicio de implantación</option>
      <option value="capacitacion">Capacitación</option>
      <option value="transparencia">Transparencia</option>
      <option value="Confección y gestión de una carta de servicio">
        Confección y gestión de una carta de servicio
      </option>
      <option value="Inducción a la gestión de las cartas de servicio">
        Inducción a la gestión de las cartas de servicio
      </option>
      <option
        value="Generación y gestión de las cartas de servicio y certificación"
      >
        Generación y gestión de las cartas de servicio y certificación de
        compromisos conforme a la Norma UNE 93200:2008
      </option>
      <option
        value="Aspectos metodológicos en el desarrollo de las cartas de servicios"
      >
        Aspectos metodológicos en el desarrollo de las cartas de servicios con
        base en la Norma UNE 93200:2008
      </option>
      <option value="Requisitos beneficios y ventajas">
        Requisitos, beneficios y ventajas al implantar las cartas de servicios
        en una organización de la administración pública, organismo autónomo, y
        entidad y empresa pública y privada
      </option>
    </select>
    <div class="my-5" v-if="selected_opt_UNE_93200[0] === 'enqueconsiste'">
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_UNE_93200[0] === 'serviciodeimplantacion'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_UNE_93200[0] === 'capacitacion'">
      <Capacitacion />
    </div>
    <div class="my-5" v-if="selected_opt_UNE_93200[0] === 'transparencia'">
      <Transparencia />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_UNE_93200[0] ===
        'Confección y gestión de una carta de servicio'
      "
    >
      <Confecciónygestióndeunacartadeservicio />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_UNE_93200[0] ===
        'Inducción a la gestión de las cartas de servicio'
      "
    >
      <Inducciónalagestióndelascartasdeservicio />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_UNE_93200[0] ===
        'Generación y gestión de las cartas de servicio y certificación'
      "
    >
      <Generaciónygestióndelascartasdeservicioycertificación />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_UNE_93200[0] ===
        'Aspectos metodológicos en el desarrollo de las cartas de servicios'
      "
    >
      <Aspectosmetodológicoseneldesarrollodelascartasdeservicios />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_UNE_93200[0] === 'Requisitos beneficios y ventajas'"
    >
      <Requisitosbeneficiosyventajas />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Capacitacion from "./Capacitacion.vue";
import Transparencia from "./Transparencia.vue";
import Confecciónygestióndeunacartadeservicio from "./capacitacion/Confección y gestión de una carta de servicio.vue";
import Inducciónalagestióndelascartasdeservicio from "./capacitacion/Inducción a la gestión de las cartas de servicio.vue";
import Generaciónygestióndelascartasdeservicioycertificación from "./capacitacion/Generación y gestión de las cartas de servicio y certificación.vue";
import Aspectosmetodológicoseneldesarrollodelascartasdeservicios from "./capacitacion/Aspectos metodológicos en el desarrollo de las cartas de servicios.vue";
import Requisitosbeneficiosyventajas from "./capacitacion/Requisitos beneficios y ventajas.vue";

export default {
  name: "UNE_93200",
  data() {
    return {
      selected_opt_UNE_93200: ["enqueconsiste"],
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Capacitacion,
    Transparencia,
    Confecciónygestióndeunacartadeservicio,
    Inducciónalagestióndelascartasdeservicio,
    Generaciónygestióndelascartasdeservicioycertificación,
    Aspectosmetodológicoseneldesarrollodelascartasdeservicios,
    Requisitosbeneficiosyventajas,
  },
};
</script>
  
<style>
</style>