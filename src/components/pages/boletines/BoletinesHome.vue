<template>
  <div class="container mb-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="" to="/"> Inicio </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Boletines</li>
      </ol>
    </nav>
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">Boletines</p>
    </div>
    <!--Animated title end-->
    <div class="row justify-content-center" id="boletines">
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/estres.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Aplicación del protocolo para prevenir, atender y erradicar la
              violencia laboral.
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                ¿Acaso no haces nada bien?, ¡Qué sea la última vez que...!,
                ¡Tienes suerte de trabajar aquí, en otros lados…!, ¡No es mi
                problema!, ¡Para eso te pago!, ¡El que manda soy yo!, ¡No te
                pago por pensar, te pago por hacer!...
              </em>
              <br />
              La violencia laboral pasó, de ser ocasional y espontanea, a ser
              una herramienta para controlar y amedrentar al personal sin
              importar si se tiene o no la razón. Para quien la ejerce lo que
              importa es que se note su autoridad, aún a costa de la salud
              mental y financiera de todas y todos quienes forman parte del
              centro de trabajo, incluyendo a los socios de negocio.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Aplicaci%C3%B3n_del_protocolo"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/vote.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Hablemos de la calidad de los árbitros electorales
            </h5>
            <p class="crop-text-4 general-text">
              “Él puede ganar las elecciones, pero, ¿puede manejar a un país?”.
              Frase de la película Invictus.
              <br />
              Datos del Instituto Nacional Electoral (INE) del año 2015,
              consignan que, por cada 100 pesos presupuestados por el organismo
              electoral, 73 fueron utilizados para preparar la logística del
              proceso de votaciones.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Hablemos_de_la_calidad"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/servicio.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Cartas de servicio (UNE 93200). Herramienta para empoderar y
              dialogar con la ciudadanía.
            </h5>
            <p class="crop-text-4 general-text">
              Simplificación administrativa, reingeniería de procesos, mejora
              regulatoria, y sistema de calidad, son las primeras ideas que
              surgen en la mente del directivo que ve como la atención al
              público se deteriora todos los días en las áreas bajo su
              responsabilidad. Dado que muchas de estas estrategias ya fueron
              implantadas y no funcionaron no le queda más remedio que imitar a
              Nerón y empezar a tocar la lira mientas la oficina arde.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Cartas_de_servicio_UNE_93200"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/company.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">Empresas tóxicas</h5>
            <p class="crop-text-4 general-text">
              <em>
                ¡A usted no le pagan para pensar!,<br />
                frase tóxica escuchada siempre en un centro de trabajo tóxico.
              </em>
              <br />
              La pandemia deterioró las relaciones laborales en todo el mundo,
              prueba de ello es la información que nos comparte Xavier Marcet al
              puntualizar que entre abril y septiembre de 2021, 24 millones de
              trabajadores dejaron su empleo voluntariamente en EEUU, cifra que
              equivaldría a que un poco menos de la mitad de la Población
              Económicamente Activa de México (55 millones), decidiera de un día
              para otro emigrar a nuevas aventuras laborales. Será hasta el
              cierre de 2022 cuando conoceremos la afectación a las metas de
              productividad de las empresas y del país que estamos padeciendo.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Empresas_t%C3%B3xicas"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/igualdad_salarial.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              ¿CÓMO VAMOS CON LA IGUALDAD SALARIAL?
            </h5>
            <p class="crop-text-4 general-text">
              La realidad es que, si nos quedamos de brazos cruzados, nos
              llevará 75 años o hasta que cumpla 100 que las mujeres ganen lo
              mismo que los hombres por el mismo trabajo.<br />Emma Watson,
              actriz
              <br />
              De acuerdo con estadísticas de la Organización de las Naciones
              Unidas (ONU), en 2017 las tasas de desempleo de mujeres y hombres
              en América Latina y el Caribe eran del 10,4% y el 7,6%,
              respectivamente. Casi un tercio de las mujeres de la región no
              contaban con ingresos propios, situación que las hace altamente
              vulnerables y económicamente dependientes.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/C%C3%93MO_VAMOS_CON_LA_IGUALDAD_SALARIAL"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/discriminate.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">Discriminación laboral</h5>
            <p class="crop-text-4 general-text">
              Frase común para ofertar un empleo: “Buscamos un trabajador joven,
              enérgico y ágil para unirse a nuestro equipo” <br />
              Vivimos una discriminación laboral estructural, es común despedir
              del trabajo a las mujeres por resultar embarazadas; es más común
              aún solicitar certificado médico de ingravidez como requisito para
              contratar laboralmente a la mujer; también es común negar el
              acceso a personas con discapacidad (ciegas, en sillas de ruedas) o
              por apariencia física, a establecimientos comerciales que prestan
              u ofrecen servicios al público; se discrimina la homofobia, la
              lesbofobia, y también se despide a personas adultas mayores, o por
              tener alguna discapacidad (deficiencia física, intelectual, mental
              o sensorial).
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Discriminaci%C3%B3n_laboral"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/gender.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">Equidad o igualdad</h5>
            <p class="crop-text-4 general-text">
              Equidad de género e igualdad de género. ¿Son lo mismo?
              <br />
              Ramón Cuevas Martínez
              <br />
              <em>
                “La primera igualdad es la equidad”. Víctor Hugo, escritor
                francés.
              </em>
              <br />
              La comprensión correcta de temas como igualdad y equidad, en el
              contexto laboral, y también en el personal, son de las habilidades
              blandas que más necesitan en este momento los centros de trabajo,
              dado que se trata de destrezas asociadas a la
              <b>inteligencia emocional</b> y a la capacidad que tiene un
              individuo para interactuar efectivamente a nivel personal y
              profesional.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Equidad_o_igualdad"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/diversity.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              La diversidad, un nuevo reto que atender en los centros de trabajo
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                Los clientes serán la palanca fundamental del cambio en la
                medida en que nos exijan a las organizaciones una participación
                igualitaria entre hombres y mujeres y diversa (de otros
                colectivos) en los proyectos. Pero sólo podrán exigir cuando las
                primeras organizaciones lo empiecen a asumir.
              </em>
              <br />
              La ONU establece una declaratoria universal sobre la diversidad,
              entendida como la manifestación en la originalidad y pluralidad de
              identidades que caracterizan a los grupos y sociedades que
              componen la humanidad y, por ende, repercuten en las personas.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/La_diversidad"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/corruption.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">Índice de corrupción</h5>
            <p class="crop-text-4 general-text">
              DE 2011 a la fecha, México ha caído 24 lugares en el índice de
              Percepción de la Corrupción (IPC)
              <br />
              Existe una máxima en la gestión para resultados que plantea lo
              siguiente: “lo que se mide, se puede mejorar”. En Visión y
              Estreategia hemos completado esta frase diciendo “lo que no se
              mide, se deteriora”.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/%C3%8Dndice_de_corrupci%C3%B3n"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/documentos.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Cartas de servicios, gestión por resultados y comunicación
              efectiva con los usuarios
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                “La diferencia entre la participación y el compromiso es como el
                jamón y los huevos. El pollo está involucrado; el cerdo está
                comprometido”. Martina Navratilova
              </em>
              <br />
              Las cartas de servicios están revolucionando la prestación de los
              trámites en el sector público y la forma como se trata a los
              usuarios de los servicios en la empresa.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Cartas_de_servicios"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/telecommuting.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Teletrabajar después de la pandemia
            </h5>
            <p class="crop-text-4 general-text">
              El secreto del éxito en los negocios está en detectar hacia dónde
              va el mundo y llegar ahí primero. Bill Gates
              <br />
              La pandemia nos obligó a teletrabajar, ahí aprendimos que en casa
              no existe un horario para trabajar, pues se precisa atender
              también labores domésticas, aprendimos que nadie respetaba los
              horarios de desconexión, y también aprendimos que el trabajo se
              exigía como si tuviéramos todos los recursos disponibles. Todos
              estos factores ocasionaron problemas laborales y también mentales
              de las personas que teletrabajaron.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Teletrabajar"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/justice.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Planes de Igualdad, el camino hacia la inclusión de las mujeres en
              el trabajo
            </h5>
            <p class="crop-text-4 general-text">
              “Un centro de trabajo que busca mejorar su productividad, no puede
              prescindir de promover la igualdad”
              <br />
              En el año 2017 la Organización para la Cooperación y el Desarrollo
              Económico (OCDE), de la cual México forma parte, publicó el
              documento “Construir un México inclusivo: políticas y buena
              gobernanza para la igualdad de género” en el que se destaca que
              las naciones pertenecientes a la OCDE promedian un 67% de fuerza
              de trabajo femenino; por su parte, México se encuentra por debajo
              con un 47%, lo cual da cuenta del enorme reto que tenemos a
              cuestas.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Planes_de_Igualdad"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/waiting_to_vote.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Programa de implantación exitosa de un sistema de gestión
              electoral bajo la norma ISO 54001
            </h5>
            <p class="crop-text-4 general-text">
              Como todas las normas ISO que llegan a nuestro país, actualmente
              la 54001 se encuentra en proceso de consulta pública por parte de
              la Secretaría de Economía, como instancia responsable del Sistema
              Nacional de Metrología y Normalización., por lo que pronto
              tendremos una nueva norma mexicana “no obligatoria”, que se pondrá
              a disposición de las organizaciones electorales que quieran
              mejorar su desempeño.
              <br />
              También significa que pronto surgirán los primeros organismos de
              certificación autorizados por la Entidad Mexicana de Acreditación
              (EMA), para realizar auditorías que constaten la debida
              implantación de todos los requisitos de un sistema de gestión
              electoral. Conozco muchos expertos electorales que deben
              aprovechar la posibilidad de formarse como auditores electorales,
              hay pocos en México.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Programa_de_implantaci%C3%B3n"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/decline.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              ¿Qué alcances tiene un Sistema de Gestión Antisoborno?
            </h5>
            <p class="crop-text-4 general-text">
              Soborno: Dar dinero o regalos a alguien para conseguir algo de
              forma ilícita. (Definición RAE)
              <br />
              ISO 37001:2016 es la norma internacional de Sistemas de Gestión
              Antisoborno (SGAS), para su integración se tomó como base la Norma
              BS 10500: Anticorrupción y Ética empresarial, desarrollada por el
              British Standard Institute (BSI). Proporciona los requisitos,
              implementar, mantener y mejorar un sistema de gestión antisoborno.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Qu%C3%A9_alcances_tiene_un_Sistema_de_Gesti%C3%B3n_Antisoborno"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/checklist.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              10 puntos críticos de un Sistema de Gestión Antisoborno (SGAS).
            </h5>
            <p class="crop-text-4 general-text">
              Todos los sistemas de gestión tienen requisitos que identifican
              particularmente la finalidad que persiguen, por ejemplo, un
              sistema de igualdad laboral pone especial interés en el proceso de
              reclutamiento y ascenso; el sistema de gestión de la calidad en el
              mapeo exacto de procesos; y el sistema antisoborno, pone especial
              énfasis en 10 puntos críticos que posibilitan una implantación
              exitosa:
            </p>
            <router-link
              aria-current="page"
              to="/boletines/10_puntos_cr%C3%ADticos"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/dirty_money.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              El soborno, lubricante y engrudo
            </h5>
            <p class="crop-text-4 general-text">
              La peor forma de corrupción es la incompetencia. José Chanes Nieto
              <br />
              El soborno es una práctica más común en la vida cotidiana de lo
              que nos imaginamos, pero contrariamente a esta afirmación,
              <b
                >la mayoría de la población está convencida de que cuando
                realiza actos de esta naturaleza no está sobornando</b
              >,
              <em
                >porque no lo identifica plenamente y no se identifica como una
                persona deshonesta</em
              >, por supuesto que tampoco lo considera un delito dado que existe
              la opinión generalizada de que solo es soborno cuando están en
              medio grandes cantidades de dinero.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/El_soborno_lubricante_y_engrudo"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/unsplash.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              El soborno, una de las 10 formas de corrupción más recurrente
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                Cuando no tomas una postura en contra de la corrupción,
                tácitamente la apoyas. Kamal Haasan.
              </em>
              <br />
              En 2019 fue presentado el “Barómetro Global de la Corrupción
              (BGC): América Latina y el Caribe”, elaborado por Transparencia
              Internacional; estudio en el cual México se colocó como el segundo
              país con más sobornos de Latinoamérica. De acuerdo con la
              investigación, la policía es la institución a la que se pagan más
              sobornos, lo cual habla no solo de un tema de corrupción, sino
              también de falta de calidad y profesionalismo en la seguridad
              pública. También se documentó que tres de cada diez personas
              tuvieron que pagar algún soborno para obtener algún servicio
              público.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/El_soborno"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/whatsapp.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              WhatsApp, principal medio digital para ejercer violencia laboral
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                Aceptar nuestra vulnerabilidad en lugar de tratar de ocultarla
                es la mejor manera de adaptarse a la realidad.
              </em>
              <br />
              Vivimos tiempos de rinocerontes grises donde es costumbre para
              algunos ejecutivos voltear a otro lado cuando se identifica una
              vulnerabilidad, entre todas las existentes, la violencia laboral
              una de las más peligrosas, por lo que su tratamiento y posibles
              consecuencias deben ser parte de la agenda de trabajo de empresas
              e instituciones.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/WhatsApp"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/anxiety.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">Violencia Laboral</h5>
            <p class="crop-text-4 general-text">
              <em>
                ¿Acaso no haces nada bien?, ¡Qué sea la última vez que...!,
                ¡Tienes suerte de trabajar aquí, en otros lados…!, ¡No es mi
                problema!, ¡Para eso te pago!, ¡El que manda soy yo!, ¡No te
                pago por pensar, te pago por hacer!...
              </em>
              <br />
              Las últimas modificaciones a la ley Federal del Trabajo,
              incorporan la palabra TRABAJO DIGNO, lo cual quiere decir que se
              respeta plenamente la dignidad humana del trabajador; no existe
              discriminación por origen étnico o nacional, género, edad,
              discapacidad, condición social, condiciones de salud, religión,
              condición migratoria, opiniones, preferencias sexuales o estado
              civil; se tiene acceso a la seguridad social y se percibe un
              salario remunerador.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Violencia_Laboral"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoletinesHome",
};
</script>

<style>
</style>