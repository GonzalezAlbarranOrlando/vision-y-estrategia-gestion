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
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <router-link to="/contacto">
            <img
              src="https://picsum.photos/id/237/700/200"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/contacto">
            <img
              src="https://picsum.photos/id/238/700/200"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/contacto">
            <img
              src="https://picsum.photos/id/239/700/200"
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
          <router-link to="/contacto" style="text-decoration: none">
            <img
              src="https://picsum.photos/id/236/600/300"
              class="w-100"
              alt="..."
            />
            <div class="card-header table-title">
              <h5 class="my-3">Consultoría</h5>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-sm-3 col-6 py-2">
        <div class="card">
          <router-link to="/contacto" style="text-decoration: none">
            <img
              src="https://picsum.photos/id/235/600/300"
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
          <router-link to="/contacto" style="text-decoration: none">
            <img
              src="https://picsum.photos/id/235/600/300"
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
    <router-link to="/template"> Template </router-link>
  </div>
</template>

<script>
export default {
  name: "InicioPage",
};
</script>

<style>
</style>