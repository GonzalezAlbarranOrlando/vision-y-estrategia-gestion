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
        <b>title</b>
      </div>
      <button class="text-truncate" v-on:click="selected_sidenav = 'opt1'">
        opt1
      </button>
      <button class="text-truncate" v-on:click="selected_sidenav = 'opt2'">
        opt2
      </button>
      <button class="text-truncate" v-on:click="selected_sidenav = 'opt3'">
        opt3
      </button>
      <button class="text-truncate" v-on:click="selected_sidenav = 'opt4'">
        opt4
      </button>
      <button class="text-truncate" v-on:click="selected_sidenav = 'opt5'">
        opt5
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button class="text-truncate" v-on:click="selected_sidenav = 'opt6'">
        opt6
      </button>
      <button class="text-truncate" v-on:click="selected_sidenav = 'opt7'">
        opt7
      </button>
      <button class="text-truncate" v-on:click="selected_sidenav = 'opt8'">
        opt8
      </button>
      <button class="text-truncate" v-on:click="selected_sidenav = 'opt9'">
        opt9
      </button>
      <button class="text-truncate" v-on:click="selected_sidenav = 'opt10'">
        opt10
      </button>
      <a href="#" class="text-truncate">VW</a>
    </div>
    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">Animated title</p>
    </div>
    <!--Animated title end-->
    <!--Select option-->
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_opt"
    >
      <option selected value="opt1">opt1</option>
      <option value="opt2">opt2</option>
      <option value="opt3">opt3</option>
      <option value="opt4">opt4</option>
    </select>
    <div>
      selected: {{selected_opt }}
    </div>
    <div class="my-5" v-if="selected_opt === 'opt1'">
      div opt1
    </div>
    <div class="my-5" v-if="selected_opt === 'opt2'">
      div opt2
    </div>
    <div class="my-5" v-if="selected_opt === 'opt3'">
      div opt3
    </div>
    <div class="my-5" v-if="selected_opt === 'opt4'">
      div opt4
    </div>
    <br/>
    <br/>
    <br/>
    <!--Select option end-->
    <select class="form-select" multiple aria-label="multiple select example" v-model="selected_opt_multiple" size="5">
      <option selected value="One">One</option>
      <option value="Two">Two</option>
      <option value="Three">Three</option>
      <optgroup label="Cars">
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
      </optgroup>
    </select>
    <div>
      selectedmultiple: {{selected_opt_multiple }}
    </div>
    <div class="my-5" v-if="selected_opt_multiple[0] === 'One'">
      div One
    </div>
    <div class="my-5" v-if="selected_opt_multiple[0] === 'Two'">
      div Two
    </div>
    <div class="my-5" v-if="selected_opt_multiple[0] === 'Three'">
      div Three
    </div>
    <div class="my-5" v-if="selected_opt_multiple[0] === 'Mercedes'">
      div Mercedes
    </div>
    <div class="my-5" v-if="selected_opt_multiple[0] === 'Audi'">
      div Audi
    </div>
    <!--Heading 1-->
    <h1 class="my-h1">Heading 1</h1>
    <!--General text-->
    <div class="general-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      <br />
      1234567890
    </div>
    <!--General text end-->
    <!--Heading 2-->
    <h2 class="my-h2">Heading 2</h2>
    <!--General text-->
    <div class="general-text">
      <ul>
        <li>El eficiente diseño de los programas presupuestarios.</li>
        <li>La efectividad de los programas presupuestarios.</li>
        <li>Aspectos susceptibles de Mejora.</li>
        <li>Hallazgos.</li>
      </ul>
    </div>
    <!--General text end-->
    <br />
    <!--download here-->
    <a class="download-here" href="/pdf/example.pdf" target="_blank"> aquí </a>
    <!--download here end-->
    <br />

    <!--download text-->
    <div class="mb-3" style="text-align: center">
      <a class="download-text" href="/pdf/example.pdf" target="_blank">
        Download text
        <i class="fa fa-cloud-download download-text"></i>
      </a>
    </div>
    <!--download text end-->

    <h3 class="my-h3">SUCESIÓN</h3>

    <!--timeline-->
    <div class="page">
      <div class="timeline">
        <div class="timeline__group">
          <span class="timeline__year time" aria-hidden="true">2008</span>
          <div class="timeline__cards">
            <div class="timeline__card card">
              <header class="card__header">
                <time class="time" datetime="2008-02-02">
                  <span class="time__day">2</span>
                  <span class="time__month">Feb</span>
                </time>
              </header>
              <div class="card__content">
                <p>
                  Attends the Philadelphia Museum School of Industrial Art.
                  Studies design with Alexey Brodovitch, art director at
                  Harper's Bazaar, and works as his assistant.
                </p>
              </div>
            </div>
            <div class="timeline__card card">
              <header class="card__header">
                <time class="time" datetime="2008-09-01">
                  <span class="time__day">1</span>
                  <span class="time__month">Sept</span>
                </time>
                <h3 class="card__title r-title">
                  The part of my life in University of Pennsylvania
                </h3>
              </header>
              <div class="card__content">
                <p>
                  Started from University of Pennsylvania. This is an important
                  stage of my career. Here I worked in the local magazine. The
                  experience greatly affected me
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline__group">
          <span class="timeline__year time" aria-hidden="true">2014</span>
          <div class="timeline__cards">
            <div class="timeline__card card">
              <header class="card__header">
                <time class="time" datetime="2008-07-14">
                  <span class="time__day">14</span>
                  <span class="time__month">Jul</span>
                </time>
              </header>
              <div class="card__content">
                <p>
                  Travels to France, Italy, Spain, and Peru. After completing
                  fashion editorial in Lima, prolongs stay to make portraits of
                  local people in a daylight studio
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline__group">
          <span class="timeline__year time" aria-hidden="true">2016</span>
          <div class="timeline__cards">
            <div class="timeline__card card">
              <header class="card__header">
                <time class="time" datetime="2008-08-18">
                  <span class="time__day">28</span>
                  <span class="time__month">Aug</span>
                </time>
              </header>
              <div class="card__content">
                <p>
                  Upon moving to Brooklyn that summer, I began photographing
                  weddings in Chicago
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline__group">
          <span class="timeline__year time" aria-hidden="true"
            >Principios de los sesenta (Siglo XX)
          </span>
          <div class="timeline__cards">
            <div class="timeline__card card">
              <header class="card__header">
                <time class="time" datetime="2008-08-18">
                  <span class="time__day"
                    >Principios de los sesenta (Siglo XX)
                  </span>
                </time>
              </header>
              <div class="card__content">
                <p>
                  La NASA desarrolla requisitos propios para sus provedores.
                  Busca acreditar la calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline__group">
          <span class="timeline__year time" aria-hidden="true">date</span>
          <div class="timeline__cards">
            <div class="timeline__card card">          
              <div class="card__content">
                <p>
                  text
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--timeline end-->
    <div class="general-text">
      <p>
        Actualmente, ya no se habla de <b>conformidad</b>, sino que la calidad
        tiene que ver con la <b>mejora continua</b>. Siguiendo este objetivo, la
        última revisión de esta norma, que contiene los requisitos del
        <b>Sistema de Gestión de la Calidad</b>, es una respuesta a los grandes
        cambios en la tecnología, la diversidad de negocios y el comercio
        mundial que se han producido a lo largo de los 15 años transcurridos
        desde la publicación de la norma ISO 9001:2000.
      </p>
    </div>
    <h3 class="my-h3">Relación con otras normas de sistemas de gestión</h3>
    <div class="general-text">
      <p>
        Esta Norma Internacional 9001:2015, Sistema de Gestión de Calidad aplica el marco de referencia desarrollado por ISO para mejorar el alineamiento entre sus Normas Internacionales para sistemas de gestión. Permite a una organización utilizar el enfoque a procesos, en conjunto con el ciclo PHVA y el pensamiento basado en riesgos, para alinear o integrar su sistema de gestión de la calidad con los requisitos de otras normas de sistemas de gestión. 
      </p>
      <p>
        Se relaciona con la Norma ISO 9000 y la Norma ISO 9004 como sigue:
        <ul>
          <li>ISO 9000 Sistemas de Gestión de la Calidad — Fundamentos y vocabulario, proporciona una referencia esencial para la comprensión e implementación adecuadas de esta Norma Internacional.</li>
          <li>ISO 9004 Gestión para el éxito sostenido de una organización. — Enfoque de gestión de la calidad, proporciona orientación para las organizaciones que elijan ir más allá de los requisitos de esta Norma Internacional.</li>
        </ul>
      </p>
    </div>
    <h3 class="my-h3">Utilidad</h3>
    <div class="general-text">
      <p>
        La <b>ISO 9001</b> es el estándar internacional publicado por <b>ISO</b> (International Organization for Standardization) es útil para establecer de manera efectiva un Sistema de Gestión de la Calidad. ... Por ello, este estándar de calidad puede ser aplicado tanto por un trabajador autónomo, una empresa o una institución sin ánimo de lucro.
      </p>
    </div>
    <br/>
    <br/>
        <!--Accordion mood-->
        <div class="accordion" id="accordionMood">
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading1">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="true"
            aria-controls="collapse1"
          >
            title
          </button>
        </h2>
        <div
          id="collapse1"
          class="accordion-collapse collapse show"
          aria-labelledby="heading1"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">
            <div class="table-white">
              <b>Objetivo:</b>
              <p>
                text
              </p>
            </div>
            <div class="table-blue">
              <b>Descripción:</b>
              <p>
                text
              </p>
            </div>
            <div class="table-white">
              <b>Características:</b>
              <p>
                <b>Dirigido a: </b>
              </p>
              <p>
                <b>Garantía de satisfacción: </b>
              </p>
              <p>
                <b>Constancia: </b>
              </p>
            </div>
            <div class="table-blue">
              <b>Temario:</b>
              <p></p>
            </div>
            <div class="table-white">
              <b>Horas de duración: </b>
            </div>
            <div class="table-blue">
              <b>Fecha de realización: </b>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading2">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="false"
            aria-controls="collapse2"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapse2"
          class="accordion-collapse collapse"
          aria-labelledby="heading2"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #2</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading3">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-expanded="false"
            aria-controls="collapse3"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapse3"
          class="accordion-collapse collapse"
          aria-labelledby="heading3"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #3</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading4">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapse4"
          >
            Accordion Item #4
          </button>
        </h2>
        <div
          id="collapse4"
          class="accordion-collapse collapse"
          aria-labelledby="heading4"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #4</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading5">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapse5"
          >
            Accordion Item #5
          </button>
        </h2>
        <div
          id="collapse5"
          class="accordion-collapse collapse"
          aria-labelledby="heading5"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #5</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="heading6">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse6"
            aria-expanded="false"
            aria-controls="collapse6"
          >
            Accordion Item #6
          </button>
        </h2>
        <div
          id="collapse6"
          class="accordion-collapse collapse"
          aria-labelledby="heading6"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #6</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="heading7">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse7"
            aria-expanded="false"
            aria-controls="collapse7"
          >
            Accordion Item #7
          </button>
        </h2>
        <div
          id="collapse7"
          class="accordion-collapse collapse"
          aria-labelledby="heading7"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #7</div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="heading8">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse8"
            aria-expanded="false"
            aria-controls="collapse8"
          >
            Accordion Item #8
          </button>
        </h2>
        <div
          id="collapse8"
          class="accordion-collapse collapse"
          aria-labelledby="heading8"
          data-bs-parent="#accordionMood"
        >
          <div class="accordion-body">text #8</div>
        </div>
      </div>
    </div>
    <!--Accordion mood end-->
    <br/>
    <br/>
    <br/>
    <br/>
    

    <!--Accordion Boletines-->
    <div class="accordion" id="accordionBoletines">
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading1">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="false"
            aria-controls="collapse1"
          >
            <b>title1</b>
          </button>
        </h2>
        <div
          id="collapse1"
          class="accordion-collapse collapse"
          aria-labelledby="heading1"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text1</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading2">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="false"
            aria-controls="collapse2"
          >
            <b>title2</b>
          </button>
        </h2>
        <div
          id="collapse2"
          class="accordion-collapse collapse"
          aria-labelledby="heading2"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text2</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading3">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-expanded="false"
            aria-controls="collapse3"
          >
            <b>title3</b>
          </button>
        </h2>
        <div
          id="collapse3"
          class="accordion-collapse collapse"
          aria-labelledby="heading3"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text3</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading4">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapse4"
          >
            <b>title4</b>
          </button>
        </h2>
        <div
          id="collapse4"
          class="accordion-collapse collapse"
          aria-labelledby="heading4"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text4</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading5">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapse5"
          >
            <b>title5</b>
          </button>
        </h2>
        <div
          id="collapse5"
          class="accordion-collapse collapse"
          aria-labelledby="heading5"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text5</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading6">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse6"
            aria-expanded="false"
            aria-controls="collapse6"
          >
            <b>title6</b>
          </button>
        </h2>
        <div
          id="collapse6"
          class="accordion-collapse collapse"
          aria-labelledby="heading6"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text6</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading7">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse7"
            aria-expanded="false"
            aria-controls="collapse7"
          >
            <b>title7</b>
          </button>
        </h2>
        <div
          id="collapse7"
          class="accordion-collapse collapse"
          aria-labelledby="heading7"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text7</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading8">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse8"
            aria-expanded="false"
            aria-controls="collapse8"
          >
            <b>title8</b>
          </button>
        </h2>
        <div
          id="collapse8"
          class="accordion-collapse collapse"
          aria-labelledby="heading8"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text8</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading9">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse9"
            aria-expanded="false"
            aria-controls="collapse9"
          >
            <b>title9</b>
          </button>
        </h2>
        <div
          id="collapse9"
          class="accordion-collapse collapse"
          aria-labelledby="heading9"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text9</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading10">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse10"
            aria-expanded="false"
            aria-controls="collapse10"
          >
            <b>title10</b>
          </button>
        </h2>
        <div
          id="collapse10"
          class="accordion-collapse collapse"
          aria-labelledby="heading10"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text10</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <b>titleOne</b>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">textOne</div>
          </div>
        </div>
      </div>
    </div>
    <!--Accordion Boletines end-->
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="row">
      <div class="col-sm-6 py-2">
        <!--card transparencia-->
        <div class="card">
          <img src="@/assets/img/example.jpg" class="w-100" alt="..." />
          <div class="card-body ext-box" style="min-height: 300px;">
            <div class="int-box">
              <h2 class="my-h2">Title</h2>
              <div class="general-text">
                <p>text</p>
              </div>
            </div>
          </div>
        </div>
        <!--card transparencia end-->
      </div>
      <div class="col-sm-6 py-2">
        <!--card transparencia-->
        <div class="card">
          <img src="@/assets/img/example.jpg" class="w-100" alt="..." />
          <div class="card-body ext-box" style="min-height: 300px;">
            <div class="int-box">
              <h2 class="my-h2">Title</h2>
              <div class="general-text">
                <p>text</p>
              </div>
            </div>
          </div>
        </div>
        <!--card transparencia end-->
      </div>
    </div>

  </div>
</template>
    
<script>
export default {
  name: "TemplatePage",
  data() {
    return {
      selected_opt: "opt1",
      selected_opt_multiple: ["One"],
      boolean_sidenav: true,
      selected_sidenav: "opt1",
    };
  },
};
</script>
    
<style>
</style>