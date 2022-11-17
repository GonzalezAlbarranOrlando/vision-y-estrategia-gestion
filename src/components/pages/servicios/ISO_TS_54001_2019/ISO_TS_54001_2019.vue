<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO/TS 54001:2019</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">
      Sistema de Gestión de la Calidad a Organizaciones Electorales
    </h1>
    <select
      class="form-select"
      multiple
      aria-label="multiple select example"
      v-model="selected_opt_ISO_TS_54001_2019"
      size="4"
    >
      <option selected value="enqueconsiste">En que consiste</option>
      <option value="serviciodeimplantacion">Servicio de implantación</option>
      <option value="capacitacion">Capacitación</option>
      <option value="transparencia">Transparencia</option>

      <option value="Análisis ejecutivo e impacto">
        Análisis ejecutivo e impacto de la NMX-CC-54001-IMNC-2020 en los
        organismos electorales
      </option>
      <option
        value="Fundamentos de la ISO 54001 y metodología general para su implementación"
      >
        Fundamentos de la ISO 54001 y metodología general para su implementación
      </option>
      <option
        value="Mapeo de procesos para el desarrollo de objetivos en las organizaciones electorales"
      >
        Mapeo de procesos para el desarrollo de objetivos en las organizaciones
        electorales
      </option>
      <option value="Gestión de indicadores del sistema electoral">
        Gestión de indicadores del sistema electoral
      </option>
      <option
        value="Desarrollo de la documentación del Sistema de Gestión Electoral"
      >
        Desarrollo de la documentación del Sistema de Gestión Electoral
      </option>
      <option value="Herramientas de calidad y mejora continua">
        Herramientas de calidad y mejora continua
      </option>
      <option
        value="Formación de equipo auditor para la auditoría del sistema de gestión electoral"
      >
        Formación de equipo auditor para la auditoría del sistema de gestión
        electoral
      </option>
      <option value="Calidad en el servicio electoral">
        Calidad en el servicio electoral
      </option>
    </select>
    <div
      class="my-5"
      v-if="selected_opt_ISO_TS_54001_2019[0] === 'enqueconsiste'"
    >
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_TS_54001_2019[0] === 'serviciodeimplantacion'"
    >
      <ServicioDeImplantacion />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_TS_54001_2019[0] === 'capacitacion'"
    >
      <Capacitacion />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_TS_54001_2019[0] === 'transparencia'"
    >
      <Transparencia />
    </div>

    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019[0] === 'Análisis ejecutivo e impacto'
      "
    >
      <Análisisejecutivoeimpacto />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019[0] ===
        'Fundamentos de la ISO 54001 y metodología general para su implementación'
      "
    >
      <FundamentosdelaISO54001ymetodologíageneralparasuimplementación />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019[0] ===
        'Mapeo de procesos para el desarrollo de objetivos en las organizaciones electorales'
      "
    >
      <Mapeodeprocesosparaeldesarrollodeobjetivosenlasorganizacioneselectorales />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019[0] ===
        'Gestión de indicadores del sistema electoral'
      "
    >
      <Gestióndeindicadoresdelsistemaelectoral />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019[0] ===
        'Desarrollo de la documentación del Sistema de Gestión Electoral'
      "
    >
      <DesarrollodeladocumentacióndelSistemadeGestiónElectoral />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019[0] ===
        'Herramientas de calidad y mejora continua'
      "
    >
      <Herramientasdecalidadymejoracontinua />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019[0] ===
        'Formación de equipo auditor para la auditoría del sistema de gestión electoral'
      "
    >
      <Formacióndeequipoauditorparalaauditoríadelsistemadegestiónelectoral />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019[0] === 'Calidad en el servicio electoral'
      "
    >
      <Calidadenelservicioelectoral />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Capacitacion from "./Capacitacion.vue";
import Transparencia from "./Transparencia.vue";

import Análisisejecutivoeimpacto from "./capacitacion/Análisis ejecutivo e impacto.vue";
import FundamentosdelaISO54001ymetodologíageneralparasuimplementación from "./capacitacion/Fundamentos de la ISO 54001 y metodología general para su implementación.vue";
import Mapeodeprocesosparaeldesarrollodeobjetivosenlasorganizacioneselectorales from "./capacitacion/Mapeo de procesos para el desarrollo de objetivos en las organizaciones electorales.vue";
import Gestióndeindicadoresdelsistemaelectoral from "./capacitacion/Gestión de indicadores del sistema electoral.vue";
import DesarrollodeladocumentacióndelSistemadeGestiónElectoral from "./capacitacion/Desarrollo de la documentación del Sistema de Gestión Electoral.vue";
import Herramientasdecalidadymejoracontinua from "./capacitacion/Herramientas de calidad y mejora continua.vue";
import Formacióndeequipoauditorparalaauditoríadelsistemadegestiónelectoral from "./capacitacion/Formación de equipo auditor para la auditoría del sistema de gestión electoral.vue";
import Calidadenelservicioelectoral from "./capacitacion/Calidad en el servicio electoral.vue";

export default {
  name: "ISO_TS_54001_2019",
  data() {
    return {
      selected_opt_ISO_TS_54001_2019: ["enqueconsiste"],
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Capacitacion,
    Transparencia,
    Análisisejecutivoeimpacto,
    FundamentosdelaISO54001ymetodologíageneralparasuimplementación,
    Mapeodeprocesosparaeldesarrollodeobjetivosenlasorganizacioneselectorales,
    Gestióndeindicadoresdelsistemaelectoral,
    DesarrollodeladocumentacióndelSistemadeGestiónElectoral,
    Herramientasdecalidadymejoracontinua,
    Formacióndeequipoauditorparalaauditoríadelsistemadegestiónelectoral,
    Calidadenelservicioelectoral,
  },
};
</script>
  
<style>
</style>