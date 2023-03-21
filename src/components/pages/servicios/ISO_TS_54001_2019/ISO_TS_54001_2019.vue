<template>
  <div class="container-fluid">
    <!--sidenav -->
    <div
      id="mySidenav"
      class="sidenav"
      style="width: 300px"
      v-if="boolean_sidenav"
    >
      <button
        type="button"
        class="btn-close closebtn"
        aria-label="Close"
        v-on:click="boolean_sidenav = false"
      ></button>
      <div class="sidenav-blue">
        <b>ISO/TS 54001:2019</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 = 'En que consiste';
          boolean_sidenav = false;
        "
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 = 'Servicio de implantación';
          boolean_sidenav = false;
        "
      >
        Servicio de implantación
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 = 'Transparencia';
          boolean_sidenav = false;
        "
      >
        Transparencia
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 =
            'Análisis ejecutivo e impacto de la NMX-CC-54001-IMNC-2020 en los organismos electorales';
          boolean_sidenav = false;
        "
      >
        Análisis ejecutivo e impacto de la NMX-CC-54001-IMNC-2020 en los
        organismos electorales
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 =
            'Fundamentos de la ISO 54001 y metodología general para su implementación';
          boolean_sidenav = false;
        "
      >
        Fundamentos de la ISO 54001 y metodología general para su implementación
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 =
            'Mapeo de procesos para el desarrollo de objetivos en las organizaciones electorales';
          boolean_sidenav = false;
        "
      >
        Mapeo de procesos para el desarrollo de objetivos en las organizaciones
        electorales
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 =
            'Gestión de indicadores del sistema electoral';
          boolean_sidenav = false;
        "
      >
        Gestión de indicadores del sistema electoral
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 =
            'Desarrollo de la documentación del Sistema de Gestión Electoral';
          boolean_sidenav = false;
        "
      >
        Desarrollo de la documentación del Sistema de Gestión Electoral
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 =
            'Herramientas de calidad y mejora continua';
          boolean_sidenav = false;
        "
      >
        Herramientas de calidad y mejora continua
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 =
            'Formación de equipo auditor para la auditoría del sistema de gestión electoral';
          boolean_sidenav = false;
        "
      >
        Formación de equipo auditor para la auditoría del sistema de gestión
        electoral
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_ISO_TS_54001_2019 = 'Calidad en el servicio electoral';
          boolean_sidenav = false;
        "
      >
        Calidad en el servicio electoral
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">ISO/TS 54001:2019</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">
      Sistema de Gestión de la Calidad para Organizaciones Electorales
    </h1>
    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
    <div
      class="my-5"
      v-if="selected_opt_ISO_TS_54001_2019 === 'En que consiste'"
    >
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_ISO_TS_54001_2019 === 'Servicio de implantación'"
    >
      <ServicioDeImplantacion />
    </div>
    <div class="my-5" v-if="selected_opt_ISO_TS_54001_2019 === 'Transparencia'">
      <Transparencia />
    </div>

    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019 ===
        'Análisis ejecutivo e impacto de la NMX-CC-54001-IMNC-2020 en los organismos electorales'
      "
    >
      <Análisisejecutivoeimpacto />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019 ===
        'Fundamentos de la ISO 54001 y metodología general para su implementación'
      "
    >
      <FundamentosdelaISO54001ymetodologíageneralparasuimplementación />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019 ===
        'Mapeo de procesos para el desarrollo de objetivos en las organizaciones electorales'
      "
    >
      <Mapeodeprocesosparaeldesarrollodeobjetivosenlasorganizacioneselectorales />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019 ===
        'Gestión de indicadores del sistema electoral'
      "
    >
      <Gestióndeindicadoresdelsistemaelectoral />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019 ===
        'Desarrollo de la documentación del Sistema de Gestión Electoral'
      "
    >
      <DesarrollodeladocumentacióndelSistemadeGestiónElectoral />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019 ===
        'Herramientas de calidad y mejora continua'
      "
    >
      <Herramientasdecalidadymejoracontinua />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019 ===
        'Formación de equipo auditor para la auditoría del sistema de gestión electoral'
      "
    >
      <Formacióndeequipoauditorparalaauditoríadelsistemadegestiónelectoral />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_ISO_TS_54001_2019 === 'Calidad en el servicio electoral'
      "
    >
      <Calidadenelservicioelectoral />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
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
      selected_opt_ISO_TS_54001_2019: "En que consiste",
      boolean_sidenav: false,
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
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