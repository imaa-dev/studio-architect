export type FaqItem = {
  question: string
  answer: string
}

export const generalFaqs: FaqItem[] = [
  {
    question: '¿En qué comunas y regiones trabaja MI Arquitectos?',
    answer:
      'Trabajamos desde Santiago con proyectos en la Región Metropolitana y en la zona centro y sur de Chile. Además, desarrollamos proyectos en todo el país, coordinando visitas y profesionales locales cuando la obra lo requiere.',
  },
  {
    question: '¿Qué incluye el servicio de diseño arquitectónico?',
    answer:
      'Incluye el levantamiento de antecedentes, el anteproyecto, la propuesta de distribución y materialidad, la visualización 3D, los planos de arquitectura y las especificaciones técnicas necesarias para tramitar permisos y ejecutar la obra.',
  },
  {
    question: '¿Cuánto demora un proyecto de arquitectura?',
    answer:
      'Los plazos dependen del tamaño y complejidad. Un anteproyecto suele tomar entre 2 y 4 semanas, mientras que un proyecto completo con documentación técnica puede tomar entre 2 y 4 meses. En la primera reunión definimos un cronograma claro.',
  },
  {
    question: '¿Realizan remodelaciones y ampliaciones?',
    answer:
      'Sí. Desarrollamos remodelaciones integrales, ampliaciones, segundos pisos y rediseño de fachadas, revisando la estructura existente y la normativa aplicable antes de proponer cambios.',
  },
  {
    question: '¿Puedo ver cómo quedará mi proyecto antes de construirlo?',
    answer:
      'Sí. Trabajamos con visualización 3D y renders fotorrealistas que permiten entender la volumetría, los materiales y los interiores antes de iniciar la obra, reduciendo cambios y costos durante la ejecución.',
  },
  {
    question: '¿Cómo se cotiza un proyecto?',
    answer:
      'La cotización depende de la superficie, el alcance del servicio, la complejidad del terreno y la etapa en que se encuentra el proyecto. Tras una primera reunión y revisión de antecedentes entregamos una propuesta clara y detallada.',
  },
]

export const serviceFaqs: Record<string, FaqItem[]> = {
  'diseno-arquitectura': [
    {
      question: '¿El diseño arquitectónico incluye la tramitación de permisos?',
      answer:
        'Sí. Preparamos los planos y antecedentes necesarios para la solicitud de permisos de edificación y regularización, y acompañamos el proceso ante la Dirección de Obras correspondiente.',
    },
    {
      question: '¿Pueden diseñar una casa en un terreno con pendiente?',
      answer:
        'Sí. Analizamos la topografía, la orientación y el acceso para proponer una implantación que aproveche el terreno y minimice el movimiento de tierras.',
    },
    {
      question: '¿Trabajan con constructores que ya tenga el cliente?',
      answer:
        'Sí. Podemos entregar la documentación para que el cliente construya con su equipo o recomendar profesionales y constructores según la zona del proyecto.',
    },
  ],
  'visualizacion-3d': [
    {
      question: '¿Qué entrega el servicio de visualización 3D?',
      answer:
        'Entregamos imágenes en alta resolución, vistas exteriores e interiores y, si el proyecto lo requiere, recorridos o animaciones que permiten presentar la propuesta a clientes, inversionistas o autoridades.',
    },
    {
      question: '¿Cuántas correcciones incluye un render?',
      answer:
        'Cada propuesta contempla una etapa de ajustes sobre la volumetría, los materiales y la iluminación. El número de revisiones se acuerda al inicio según la complejidad del proyecto.',
    },
    {
      question: '¿Sirve para vender un proyecto antes de construirlo?',
      answer:
        'Sí. La visualización 3D es una herramienta clave para presentar proyectos inmobiliarios, comerciales y de eventos antes de su ejecución.',
    },
  ],
  'diseno-interiores': [
    {
      question: '¿El diseño de interiores incluye el mobiliario?',
      answer:
        'Sí. Podemos diseñar mobiliario a medida y coordinar su fabricación e instalación, además de proponer materiales, iluminación y terminaciones.',
    },
    {
      question: '¿Pueden intervenir una casa o departamento ya habitado?',
      answer:
        'Sí. Planificamos la intervención por etapas para reducir el impacto en la vida diaria y coordinamos los trabajos con los especialistas necesarios.',
    },
    {
      question: '¿Trabajan con mis muebles existentes?',
      answer:
        'Sí. Incorporamos piezas existentes cuando aportan al diseño y proponemos nuevas piezas que se integren en materiales y proporciones.',
    },
  ],
  'asesoria-construccion': [
    {
      question: '¿Qué incluye la asesoría en construcción?',
      answer:
        'Incluye revisión del proyecto, visitas periódicas a obra, control de avances y calidad, y recomendaciones técnicas para resguardar la fidelidad al diseño y el cumplimiento de plazos.',
    },
    {
      question: '¿Con qué frecuencia visitan la obra?',
      answer:
        'La frecuencia se define según el tamaño y etapa del proyecto. Puede ser semanal, quincenal o por hitos de avance, siempre con informes claros para el cliente.',
    },
    {
      question: '¿Puedo contratar solo la asesoría si ya tengo planos?',
      answer:
        'Sí. Revisamos los planos existentes, detectamos inconsistencias y acompañamos la ejecución sin necesidad de desarrollar el proyecto desde cero.',
    },
  ],
  remodelacion: [
    {
      question: '¿Necesito permisos para remodelar mi casa?',
      answer:
        'Depende de la intervención. Ampliaciones, cambios estructurales y modificaciones de fachada generalmente requieren permiso de edificación. Evaluamos cada caso y preparamos la documentación necesaria.',
    },
    {
      question: '¿Puedo vivir en la casa durante la remodelación?',
      answer:
        'En muchos casos sí, organizando la obra por etapas y sectores. Cuando la intervención es mayor, recomendamos planificar la convivencia con el equipo para reducir molestias.',
    },
    {
      question: '¿Cómo protegen la estructura existente?',
      answer:
        'Realizamos un diagnóstico previo de la estructura, instalaciones y humedad, y definimos refuerzos o soluciones técnicas antes de intervenir.',
    },
  ],
  'proyectos-comerciales': [
    {
      question: '¿Diseñan locales, oficinas y clínicas?',
      answer:
        'Sí. Desarrollamos proyectos comerciales, de oficinas y equipamiento clínico, considerando la identidad de marca, la operación del negocio y la normativa aplicable.',
    },
    {
      question: '¿Pueden trabajar sobre un local arrendado?',
      answer:
        'Sí. Revisamos las condiciones del local y las exigencias del arrendador para proponer una intervención compatible y reversible cuando sea necesario.',
    },
    {
      question: '¿Cuánto demora un proyecto comercial?',
      answer:
        'Los plazos varían según la superficie y complejidad, pero los proyectos comerciales suelen requerir un proceso más acotado que una vivienda nueva. Definimos el cronograma en la primera reunión.',
    },
  ],
  'fabricacion-muebles-medida': [
    {
      question: '¿Cómo se define el mobiliario a medida?',
      answer:
        'Primero levantamos las medidas del espacio y definimos el uso y los materiales. Luego desarrollamos el diseño, la visualización y la fabricación con talleres especializados.',
    },
    {
      question: '¿Qué materiales utilizan?',
      answer:
        'Trabajamos con melamina, MDF enchapado, madera laminada y superficies como cuarzo o Staron, seleccionando según el uso, el presupuesto y la estética del proyecto.',
    },
    {
      question: '¿Incluye instalación?',
      answer:
        'Sí. Coordinamos la fabricación e instalación del mobiliario, verificando medidas y terminaciones en el lugar.',
    },
  ],
}
