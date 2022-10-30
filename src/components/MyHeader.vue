<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container px-4">
      <!--Logo-->
      <router-link aria-current="page" to="/">
        <img src="@/assets/logo.png" width="180" height="110" alt="logo" />
      </router-link>
      <!--Navbar toggler-->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--Navbar-->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item px-3">
            <router-link class="nav-link active" aria-current="page" to="/">
              <i class="fa fa-home"></i>
              <b>Inicio</b>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link class="nav-link" to="/nosotros">
              <i class="fa fa-users"></i>
              <b>Nosotros</b>
            </router-link>
          </li>
          <li class="nav-item px-3 dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-bar-chart"></i>
              <b>Servicios</b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/ISO_9001:2015">
                  <p>ISO 9001:2015</p>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/ISO_37001:2016">
                  <p>ISO 37001:2016</p>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/ISO_31000">
                  <p>ISO 31000</p>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/NMX-R-025-SCFI-2015">
                  <p>NMX-R-025-SCFI-2015</p>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/ISO_TS_54001:2019">
                  <p>ISO/TS 54001:2019</p>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/NOM-035-STPS-2016">
                  <p>NOM-035-STPS-2016</p>
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/UNE_93200">
                  <p>UNE 93200</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item px-3">
            <router-link class="nav-link" to="/contacto">
              <i class="fa fa-phone"></i>
              <b>Contacto</b>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style>
</style>