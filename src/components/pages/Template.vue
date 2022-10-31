<template>
  <div class="container">
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
    <!--Select option end-->
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

  </div>
</template>
    
<script>
export default {
  name: "TemplatePage",
  data() {
    return {
      selected_opt: "opt1",
    };
  },
};
</script>
    
<style>
</style>