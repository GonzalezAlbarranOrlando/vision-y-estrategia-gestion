<template>
  <div class="container py-5">
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-dark my-shadow"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <router-link to="/ISO_9001:2015">
            <img
              src="@/assets/img/servicioscarousel/ISO_9001_2015.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/ISO_37001:2016">
            <img
              src="@/assets/img/servicioscarousel/ISO_37001_2016.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/ISO_31000">
            <img
              src="@/assets/img/servicioscarousel/ISO_31000.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/NMX-R-025-SCFI-2015">
            <img
              src="@/assets/img/servicioscarousel/NMX-R-025-SCFI-2015.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/ISO_TS_54001:2019">
            <img
              src="@/assets/img/servicioscarousel/ISO_TS_54001_2019.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/NOM-035-STPS-2016">
            <img
              src="@/assets/img/servicioscarousel/NOM-035-STPS-2016.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/UNE_93200">
            <img
              src="@/assets/img/servicioscarousel/UNE_93200.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="row justify-content-around mt-5">
      <div class="col-sm-3 col-6 py-2">
        <div class="card">
          <router-link to="/cursos" style="text-decoration: none">
            <img
              src="@/assets/img/inicio/cursos.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">Cursos</h5>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-3 col-6 py-2">
        <div class="card">
          <router-link to="/boletines" style="text-decoration: none">
            <img
              src="@/assets/img/inicio/boletines.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">Boletines</h5>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <h1 class="my-h1 mt-5">Servicios</h1>
    <div class="row justify-content-center">
      <div class="col-sm-4 py-2">
        <!--card servicios-->
        <div class="card">
          <router-link to="/ISO_9001:2015" style="text-decoration: none">
            <img
              src="@/assets/img/servicios/ISO_9001_2015.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">ISO 9001:2015</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios end-->
      </div>
      <div class="col-sm-4 py-2">
        <!--card servicios-->
        <div class="card">
          <router-link to="/ISO_37001:2016" style="text-decoration: none">
            <img
              src="@/assets/img/servicios/ISO_37001_2016.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">ISO 37001:2016</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios end-->
      </div>
      <div class="col-sm-4 py-2">
        <!--card servicios-->
        <div class="card">
          <router-link to="/ISO_31000" style="text-decoration: none">
            <img
              src="@/assets/img/servicios/ISO_31000.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">ISO 31000</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios end-->
      </div>
      <div class="col-sm-4 py-2">
        <!--card servicios-->
        <div class="card">
          <router-link to="/NMX-R-025-SCFI-2015" style="text-decoration: none">
            <img
              src="@/assets/img/servicios/NMX_R_025_SCFI_2015.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">NMX-R-025-SCFI-2015</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios end-->
      </div>
      <div class="col-sm-4 py-2">
        <!--card servicios-->
        <div class="card">
          <router-link to="/ISO_TS_54001:2019" style="text-decoration: none">
            <img
              src="@/assets/img/servicios/ISO_TS_54001_2019.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">ISO/TS 54001:2019</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios end-->
      </div>
      <div class="col-sm-4 py-2">
        <!--card servicios-->
        <div class="card">
          <router-link to="/NOM-035-STPS-2016" style="text-decoration: none">
            <img
              src="@/assets/img/servicios/NOM_035_STPS_2016.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">NOM-035-STPS-2016</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios end-->
      </div>
      <div class="col-sm-4 py-2">
        <!--card servicios-->
        <div class="card">
          <router-link to="/UNE_93200" style="text-decoration: none">
            <img
              src="@/assets/img/servicios/UNE_93200.jpeg"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">UNE 93200:2008</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios end-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InicioPage",
};
</script>

<style>
</style>