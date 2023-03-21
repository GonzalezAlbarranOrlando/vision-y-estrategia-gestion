<template>
  <div class="container-fluid">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">Cursos</p>
    </div>
    <!--Animated title end-->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="" to="/">
            Inicio
          </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Cursos</li>
      </ol>
    </nav>
    <div class="general-text">
      Nuestro servicio se ajusta a las necesidades de nuestros clientes.
      Contamos con un cuerpo de consultores altamente calificados para cubrir
      todos los aspectos de tu organización.
    </div>
    <div class="row justify-content-center my-5">
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Gesti%C3%B3n_de_la_Innovaci%C3%B3n"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/gestion-de-la-inovacion.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Gestión de la Innovación</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Indicadores_para_el_Sistema_de_Gesti%C3%B3n"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/indicadores-para-el-sistema-de-gestion.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Indicadores para el Sistema de Gestión</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Planeaci%C3%B3n_Estrat%C3%A9gica_y_Control_de_Calidad"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/planeacion-estrategica-y-control-de-la-calidad.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">
                  Planeación Estratégica y Control de Calidad
                </h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Administraci%C3%B3n_de_Proyectos_Seis_Sigma"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/administracion-de-proyectos.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Administración de Proyectos Seis Sigma</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Mapeo_de_Procesos"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/mapeo-de-procesos.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Mapeo de Procesos</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Gesti%C3%B3n_Estrat%C3%A9gica"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/gestion-estrategica.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Gestión Estratégica</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Planeaci%C3%B3n_Avanzada_de_la_Calidad"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/planeacion-avanzada.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Planeación Avanzada de la Calidad</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Desarrollo_de_Habilidades_Directivas"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/desarrollo-de-habilidades-directivas.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Desarrollo de Habilidades Directivas</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Gesti%C3%B3n_por_Procesos"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/gestion-de-procesos.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Gestión por Procesos</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/An%C3%A1lisis_de_Causa_Ra%C3%ADz_y_Acciones_Correctivas"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/analisis-de-causa-raiz-y-acciones-correctivas.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">
                  Análisis de Causa Raíz y Acciones Correctivas
                </h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Indicadores_de_Desempe%C3%B1o"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/indicadores-de-desempeño.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Indicadores de Desempeño</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Liderazgo_Creativo"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/liderazgo-creativo.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Liderazgo Creativo</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Gesti%C3%B3n_Antisoborno_37001"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/37001.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Gestión Antisoborno 37001</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Sistemas_de_Gesti%C3%B3n_de_la_Calidad"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/sistema-de-gestión-de-la-calidad.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Sistemas de Gestión de la Calidad</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-4 col-xl-3 col-6 py-2">
        <div class="card">
          <router-link
            to="/cursos/Curso_Auditor_Interno_ISO_9001"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/cursos/cursos/ISO-9001.jpg"
              class="w-100"
              alt="..."
            />
            <div class="card-header card-cursos ext-box">
              <div class="int-box">
                <h5 class="my-3">Curso Auditor Interno ISO 9001</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "CursosPage",
};
</script>
    
<style>
</style>