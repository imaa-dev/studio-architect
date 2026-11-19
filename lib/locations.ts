export type LocationZone =
  | 'Región Metropolitana'
  | 'Zona Centro'
  | 'Zona Sur'

export type Location = {
  slug: string
  name: string
  region: string
  zone: LocationZone
  metaTitle: string
  metaDescription: string
  summary: string
  image: string
  paragraphs: string[]
  highlights: string[]
  serviceSlugs: string[]
}

export const regions = [
  'Coquimbo',
  'Valparaíso',
  'Región Metropolitana',
  "O'Higgins",
  'Maule',
  'Ñuble',
  'Biobío',
  'La Araucanía',
  'Los Ríos',
  'Los Lagos',
  'Aysén',
  'Magallanes',
]

export const locations: Location[] = [
  {
    slug: 'las-condes',
    name: 'Las Condes',
    region: 'Región Metropolitana',
    zone: 'Región Metropolitana',
    metaTitle: 'Arquitectos en Las Condes | Diseño y remodelación',
    metaDescription:
      'Estudio de arquitectura en Las Condes: diseño de casas, remodelaciones, interiores y proyectos comerciales con acompañamiento técnico integral.',
    summary:
      'Diseñamos y remodelamos casas, departamentos y espacios comerciales en Las Condes, combinando diseño contemporáneo, eficiencia y cumplimiento normativo.',
    image: '/images/diseno-interior-mobiliario/mueblesdormitorio/1.jpg',
    paragraphs: [
      'Las Condes concentra viviendas y oficinas donde el diseño, la funcionalidad y el valor del inmueble van de la mano. Trabajamos en remodelaciones de casas y departamentos, diseño de interiores y proyectos comerciales, adaptando cada propuesta a la normativa de la comuna y a las condiciones reales del edificio.',
      'Nuestro enfoque parte por entender cómo se usa el espacio: distribución, luz natural, materialidades y presupuesto. Desde ahí desarrollamos el anteproyecto, la visualización 3D y la documentación técnica necesaria para ejecutar la obra con claridad.',
    ],
    highlights: [
      'Remodelación de casas y departamentos',
      'Diseño de interiores y mobiliario a medida',
      'Anteproyectos y visualización 3D',
      'Acompañamiento técnico en obra',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'diseno-interiores',
      'visualizacion-3d',
    ],
  },
  {
    slug: 'vitacura',
    name: 'Vitacura',
    region: 'Región Metropolitana',
    zone: 'Región Metropolitana',
    metaTitle: 'Arquitectos en Vitacura | Diseño y remodelación',
    metaDescription:
      'Arquitectura y remodelación en Vitacura: casas, interiores, mobiliario a medida y visualización 3D con un enfoque contemporáneo y detallista.',
    summary:
      'Proyectos residenciales y de interiorismo en Vitacura, con énfasis en materialidades nobles, luz natural y una ejecución cuidadosa del detalle.',
    image: '/images/remodelaciones/casa-la-vendimia/R1.jpg',
    paragraphs: [
      'En Vitacura predominan las viviendas de baja altura y los proyectos donde el detalle constructivo marca la diferencia. Abordamos remodelaciones integrales, ampliaciones y diseño de interiores, cuidando la relación entre arquitectura, mobiliario y paisajismo.',
      'Cada proyecto se desarrolla con planos claros, especificaciones de materiales y renders que permiten tomar decisiones antes de construir. Cuando la obra lo requiere, coordinamos con especialistas y acompañamos el proceso para resguardar la fidelidad al diseño.',
    ],
    highlights: [
      'Remodelaciones y ampliaciones',
      'Interiorismo y mobiliario a medida',
      'Selección de materiales y terminaciones',
      'Renders fotorrealistas para decidir',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'diseno-interiores',
      'fabricacion-muebles-medida',
      'visualizacion-3d',
    ],
  },
  {
    slug: 'chicureo',
    name: 'Chicureo',
    region: 'Región Metropolitana',
    zone: 'Región Metropolitana',
    metaTitle: 'Arquitectos en Chicureo | Casas y anteproyectos',
    metaDescription:
      'Diseño de casas y anteproyectos en Chicureo: viviendas en parcela, eficiencia energética, visualización 3D y acompañamiento en obra.',
    summary:
      'Diseñamos casas en parcela y anteproyectos en Chicureo, integrando el paisaje, la orientación solar y las necesidades de cada familia.',
    image: '/images/casas/anteproyecto/render 01.jpg',
    paragraphs: [
      'Chicureo se ha consolidado como una zona de casas en parcela, donde la orientación, el asoleamiento y la relación con el entorno son determinantes. Proyectamos viviendas que aprovechan el terreno, resuelven el clima de la zona y ordenan los recintos según la vida cotidiana de sus habitantes.',
      'Trabajamos desde el anteproyecto hasta la documentación de obra, con visualizaciones 3D que permiten entender la volumetría, los materiales y la inserción del proyecto en el paisaje antes de iniciar la construcción.',
    ],
    highlights: [
      'Casas nuevas en parcela',
      'Anteproyectos y estudio de cabida',
      'Eficiencia energética y orientación',
      'Visualización 3D del proyecto',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'visualizacion-3d',
      'asesoria-construccion',
      'remodelacion',
    ],
  },
  {
    slug: 'lo-barnechea',
    name: 'Lo Barnechea',
    region: 'Región Metropolitana',
    zone: 'Región Metropolitana',
    metaTitle: 'Arquitectos en Lo Barnechea | Casas y remodelación',
    metaDescription:
      'Arquitectura en Lo Barnechea: casas en pendiente, remodelaciones, interiores y visualización 3D adaptados al clima y al terreno de la zona.',
    summary:
      'Proyectos residenciales en Lo Barnechea con especial atención al terreno, la pendiente, el clima y la integración con el paisaje de montaña.',
    image: '/images/casas/casamalalcahuello/r1.jpg',
    paragraphs: [
      'Lo Barnechea combina sectores urbanos con laderas y terrenos en pendiente, lo que exige soluciones arquitectónicas específicas. Diseñamos casas y remodelaciones que resuelven la topografía, la exposición al sol y el aislamiento térmico sin perder calidad espacial.',
      'Analizamos cada terreno y su entorno antes de proponer, incorporando criterios de eficiencia, materialidad y mantención. La visualización 3D y la documentación técnica permiten anticipar decisiones y reducir imprevistos durante la ejecución.',
    ],
    highlights: [
      'Casas en terrenos con pendiente',
      'Remodelaciones y ampliaciones',
      'Aislamiento térmico y eficiencia',
      'Diseño integrado al paisaje',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'asesoria-construccion',
      'visualizacion-3d',
    ],
  },
  {
    slug: 'providencia',
    name: 'Providencia',
    region: 'Región Metropolitana',
    zone: 'Región Metropolitana',
    metaTitle: 'Arquitectos en Providencia | Interiores y remodelación',
    metaDescription:
      'Arquitectura en Providencia: remodelación de departamentos y oficinas, diseño de interiores y visualización 3D para espacios urbanos.',
    summary:
      'Remodelamos departamentos, oficinas y locales en Providencia, optimizando espacios urbanos con soluciones de diseño y eficiencia.',
    image: '/images/comerciales-oficinas/remodelacion/render 004.jpg',
    paragraphs: [
      'Providencia mezcla edificación antigua con torres modernas, y cada intervención exige leer bien la estructura existente. Trabajamos remodelaciones de departamentos, oficinas y locales comerciales, resolviendo instalaciones, ventilación y luz natural dentro de superficies acotadas.',
      'El diseño de interiores y el mobiliario a medida permiten ganar funcionalidad sin perder identidad. Entregamos planos, especificaciones y renders para que la obra se ejecute con presupuesto y plazos claros.',
    ],
    highlights: [
      'Remodelación de departamentos y oficinas',
      'Optimización de espacios pequeños',
      'Diseño de interiores y mobiliario',
      'Visualización 3D previa a la obra',
    ],
    serviceSlugs: [
      'remodelacion',
      'diseno-interiores',
      'proyectos-comerciales',
      'visualizacion-3d',
    ],
  },
  {
    slug: 'nunoa',
    name: 'Ñuñoa',
    region: 'Región Metropolitana',
    zone: 'Región Metropolitana',
    metaTitle: 'Arquitectos en Ñuñoa | Casas, remodelación e interiores',
    metaDescription:
      'Diseño y remodelación en Ñuñoa: casas y departamentos con valor patrimonial, ampliaciones, interiores y mobiliario a medida.',
    summary:
      'Proyectos en Ñuñoa que rescatan el valor de la vivienda existente con ampliaciones, redistribuciones e interiores contemporáneos.',
    image: '/images/diseno-interior-mobiliario/casalosalerces/1.jpg',
    paragraphs: [
      'Ñuñoa tiene un tejido residencial con casas de mediados del siglo XX y edificios de mayor altura. Abordamos remodelaciones y ampliaciones que respetan la estructura y la fachada original, incorporando criterios actuales de confort, aislación y eficiencia.',
      'También desarrollamos proyectos de interiorismo y cocinas donde el mobiliario a medida resuelve almacenamiento y circulación. La visualización 3D ayuda a comparar alternativas antes de intervenir.',
    ],
    highlights: [
      'Remodelación de casas y departamentos',
      'Ampliaciones y redistribución',
      'Cocinas e interiores a medida',
      'Respeto por la estructura existente',
    ],
    serviceSlugs: [
      'remodelacion',
      'diseno-interiores',
      'fabricacion-muebles-medida',
      'diseno-arquitectura',
    ],
  },
  {
    slug: 'puente-alto',
    name: 'Puente Alto',
    region: 'Región Metropolitana',
    zone: 'Región Metropolitana',
    metaTitle: 'Arquitectos en Puente Alto | Ampliaciones y remodelación',
    metaDescription:
      'Arquitectura en Puente Alto: ampliaciones de viviendas, quinchos, remodelaciones y diseño de interiores con acompañamiento técnico.',
    summary:
      'Diseñamos ampliaciones, quinchos y remodelaciones en Puente Alto, aprovechando el terreno y mejorando la funcionalidad de cada vivienda.',
    image: '/images/remodelaciones/quincho/Imagen 0.jpg',
    paragraphs: [
      'En Puente Alto gran parte de los proyectos son ampliaciones y mejoras de viviendas existentes. Diseñamos segundos pisos, extensiones hacia el patio y quinchos que ordenan el uso del terreno y mejoran la vida al aire libre.',
      'Revisamos la factibilidad estructural y normativa de cada intervención, y entregamos planos y especificaciones para tramitar permisos y ejecutar con seguridad.',
    ],
    highlights: [
      'Ampliaciones y segundos pisos',
      'Quinchos y espacios exteriores',
      'Remodelación de viviendas',
      'Planos para permisos de obra',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'asesoria-construccion',
      'diseno-interiores',
    ],
  },
  {
    slug: 'san-bernardo',
    name: 'San Bernardo',
    region: 'Región Metropolitana',
    zone: 'Región Metropolitana',
    metaTitle: 'Arquitectos en San Bernardo | Remodelación y proyectos',
    metaDescription:
      'Arquitectos en San Bernardo para remodelaciones residenciales, ampliaciones, locales comerciales y diseño de interiores.',
    summary:
      'Remodelaciones y ampliaciones residenciales en San Bernardo, además de proyectos comerciales y de interiorismo para empresas locales.',
    image: '/images/remodelaciones/casasanbernardo/san bernardo 01.jpg',
    paragraphs: [
      'San Bernardo combina viviendas consolidadas con nuevos desarrollos y actividad comercial. Trabajamos ampliaciones, remodelaciones de casas y locales, con soluciones que mejoran fachadas, distribución y confort térmico.',
      'Nuestro acompañamiento incluye diagnóstico del inmueble, propuesta de diseño, visualización 3D y documentación técnica para ejecutar con presupuesto controlado.',
    ],
    highlights: [
      'Remodelación de viviendas',
      'Locales y proyectos comerciales',
      'Ampliaciones y fachadas',
      'Diseño de interiores',
    ],
    serviceSlugs: [
      'remodelacion',
      'proyectos-comerciales',
      'diseno-arquitectura',
      'visualizacion-3d',
    ],
  },
  {
    slug: 'rancagua',
    name: 'Rancagua',
    region: "O'Higgins",
    zone: 'Zona Centro',
    metaTitle: 'Arquitectos en Rancagua | Casas, remodelación e interiores',
    metaDescription:
      'Estudio de arquitectura en Rancagua: diseño de casas, remodelaciones, interiores y proyectos comerciales en la Región de O\'Higgins.',
    summary:
      'Diseñamos casas y remodelaciones en Rancagua y la Región de O\'Higgins, con foco en funcionalidad, materialidad y eficiencia energética.',
    image: '/images/casas/casamostazal/28.jpg',
    paragraphs: [
      'Rancagua y su entorno combinan viviendas urbanas con parcelas y segundas viviendas en el valle. Proyectamos casas a medida y remodelaciones que aprovechan la orientación y el clima mediterráneo de la zona central.',
      'Trabajamos con visualizaciones 3D y documentación completa para que clientes en región puedan seguir el proyecto a distancia, coordinando con profesionales y constructores locales.',
    ],
    highlights: [
      'Casas nuevas y ampliaciones',
      'Remodelaciones integrales',
      'Parcelas y segundas viviendas',
      'Seguimiento remoto del proyecto',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'visualizacion-3d',
      'asesoria-construccion',
    ],
  },
  {
    slug: 'talca',
    name: 'Talca',
    region: 'Maule',
    zone: 'Zona Centro',
    metaTitle: 'Arquitectos en Talca | Casas y remodelación en el Maule',
    metaDescription:
      'Arquitectura en Talca: diseño de viviendas, remodelaciones, interiores y proyectos de eficiencia energética en la Región del Maule.',
    summary:
      'Proyectos residenciales en Talca con soluciones adaptadas al clima del Maule, priorizando confort térmico y bajo mantenimiento.',
    image: '/images/remodelaciones/casaesmeralda/1.jpg',
    paragraphs: [
      'El clima del Maule exige viviendas con buena aislación y control solar. Diseñamos casas y remodelaciones en Talca que equilibran la relación interior-exterior con un uso eficiente de la energía y materiales duraderos.',
      'Acompañamos desde el anteproyecto hasta la obra, con planos detallados y renders que permiten visualizar el resultado antes de construir.',
    ],
    highlights: [
      'Diseño de viviendas nuevas',
      'Remodelación y ampliación',
      'Confort térmico y eficiencia',
      'Materiales de bajo mantenimiento',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'visualizacion-3d',
      'diseno-interiores',
    ],
  },
  {
    slug: 'chillan',
    name: 'Chillán',
    region: 'Ñuble',
    zone: 'Zona Centro',
    metaTitle: 'Arquitectos en Chillán | Casas, remodelación e interiores',
    metaDescription:
      'Arquitectos en Chillán y Ñuble: diseño de casas, remodelaciones, ampliaciones y visualización 3D con foco en clima y funcionalidad.',
    summary:
      'Diseñamos casas y remodelaciones en Chillán y Ñuble, con especial atención a la lluvia, la aislación y la vida de interior.',
    image: '/images/casas/casalaestrella/2.jpg',
    paragraphs: [
      'Chillán tiene un clima de transición con inviernos fríos y lluviosos. Nuestros proyectos priorizan la aislación térmica, la captación solar y la protección de la humedad, sin descuidar la calidad de los espacios interiores.',
      'Diseñamos viviendas nuevas, ampliaciones y remodelaciones, apoyados con visualización 3D y especificaciones claras para la ejecución.',
    ],
    highlights: [
      'Casas nuevas y ampliaciones',
      'Aislación térmica y humedad',
      'Remodelaciones integrales',
      'Visualización 3D del proyecto',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'asesoria-construccion',
      'visualizacion-3d',
    ],
  },
  {
    slug: 'concepcion',
    name: 'Concepción',
    region: 'Biobío',
    zone: 'Zona Sur',
    metaTitle: 'Arquitectos en Concepción | Diseño, remodelación e interiores',
    metaDescription:
      'Estudio de arquitectura en Concepción: diseño de casas, remodelación de interiores, proyectos comerciales y visualización 3D en el Biobío.',
    summary:
      'Proyectos residenciales y comerciales en Concepción, con soluciones pensadas para el clima costero y la vida urbana del Biobío.',
    image: '/images/comerciales-oficinas/cliniplastic/3.jpeg',
    paragraphs: [
      'Concepción combina un centro denso con comunas residenciales y un clima húmedo y lluvioso. Trabajamos casas, remodelaciones y espacios comerciales priorizando aislación, ventilación y materiales resistentes a la humedad.',
      'Desarrollamos el proyecto completo, desde el anteproyecto y los renders hasta la documentación técnica, con reuniones remotas y visitas coordinadas cuando el proyecto lo requiere.',
    ],
    highlights: [
      'Casas y viviendas en parcela',
      'Remodelación de interiores',
      'Locales y oficinas comerciales',
      'Coordinación remota desde Santiago',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'proyectos-comerciales',
      'diseno-interiores',
    ],
  },
  {
    slug: 'los-angeles',
    name: 'Los Ángeles',
    region: 'Biobío',
    zone: 'Zona Sur',
    metaTitle: 'Arquitectos en Los Ángeles | Casas y remodelación',
    metaDescription:
      'Arquitectura en Los Ángeles, Biobío: diseño de casas en parcela, remodelaciones y viviendas con eficiencia energética.',
    summary:
      'Diseñamos casas en parcela y remodelaciones en Los Ángeles, adaptadas al clima del Biobío y al uso cotidiano de cada familia.',
    image: '/images/casas/casamalalcahuello/r1.jpg',
    paragraphs: [
      'Los Ángeles y su entorno rural ofrecen terrenos amplios donde la orientación, el viento y la lluvia condicionan el diseño. Proyectamos viviendas de uno y dos niveles que se protegen del clima y aprovechan las vistas.',
      'La visualización 3D y la documentación técnica permiten tomar decisiones a distancia y ejecutar con constructores locales bajo criterios claros.',
    ],
    highlights: [
      'Casas en parcela',
      'Remodelación y ampliación',
      'Protección climática y eficiencia',
      'Documentación para obra local',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'visualizacion-3d',
      'asesoria-construccion',
    ],
  },
  {
    slug: 'temuco',
    name: 'Temuco',
    region: 'La Araucanía',
    zone: 'Zona Sur',
    metaTitle: 'Arquitectos en Temuco | Casas, remodelación e interiores',
    metaDescription:
      'Arquitectos en Temuco y La Araucanía: diseño de casas, remodelaciones, ampliaciones e interiores adaptados al clima del sur.',
    summary:
      'Proyectos residenciales en Temuco con foco en aislación térmica, materiales nobles y una relación fluida con el entorno natural.',
    image: '/images/casas/casacunaco/init5.jpg',
    paragraphs: [
      'Temuco tiene inviernos fríos y abundantes lluvias, por lo que la envolvente y la eficiencia energética son parte central del diseño. Proyectamos casas y remodelaciones que mantienen el calor, controlan la humedad y aprovechan la luz natural.',
      'Trabajamos con madera y otros materiales locales, integrando visualizaciones 3D para que el cliente pueda entender la propuesta antes de construir.',
    ],
    highlights: [
      'Diseño de casas en La Araucanía',
      'Remodelaciones y ampliaciones',
      'Aislación y eficiencia energética',
      'Uso de materiales locales',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'visualizacion-3d',
      'diseno-interiores',
    ],
  },
  {
    slug: 'villarrica',
    name: 'Villarrica',
    region: 'La Araucanía',
    zone: 'Zona Sur',
    metaTitle: 'Arquitectos en Villarrica | Casas y segundas viviendas',
    metaDescription:
      'Arquitectura en Villarrica: casas, segundas viviendas y cabañas turísticas con diseño integrado al lago y al paisaje.',
    summary:
      'Diseñamos casas y segundas viviendas en Villarrica, integrando el paisaje del lago, la madera y el clima del sur.',
    image: '/images/remodelaciones/casa-la-vendimia/R1.jpg',
    paragraphs: [
      'Villarrica combina vivienda permanente con segundas viviendas y proyectos turísticos. Diseñamos casas y cabañas que aprovechan las vistas al lago y al volcán, con cubiertas y materiales adecuados para la lluvia y la nieve.',
      'Desarrollamos el proyecto a distancia con renders, planos y especificaciones, coordinando la ejecución con equipos locales.',
    ],
    highlights: [
      'Casas y segundas viviendas',
      'Cabañas y proyectos turísticos',
      'Diseño integrado al paisaje',
      'Visualización 3D a distancia',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'visualizacion-3d',
      'remodelacion',
      'asesoria-construccion',
    ],
  },
  {
    slug: 'pucon',
    name: 'Pucón',
    region: 'La Araucanía',
    zone: 'Zona Sur',
    metaTitle: 'Arquitectos en Pucón | Casas, cabañas y remodelación',
    metaDescription:
      'Diseño de casas y cabañas en Pucón: arquitectura integrada al bosque y al lago, con visualización 3D y acompañamiento técnico.',
    summary:
      'Proyectos en Pucón que combinan refugio, turismo y paisaje, con casas y cabañas de bajo impacto y alta eficiencia.',
    image: '/images/casas/Conjunto de Cabañas Puerto Varas/PV1.jpg',
    paragraphs: [
      'Pucón exige proyectos que convivan con el bosque, el lago y las condiciones climáticas del sur. Diseñamos casas y cabañas con cubiertas de pendiente, terrazas cubiertas y materiales que envejecen bien.',
      'Evaluamos la orientación y las vistas de cada terreno, y entregamos renders y planos para coordinar la construcción con equipos de la zona.',
    ],
    highlights: [
      'Casas y cabañas en parcela',
      'Diseño de bajo impacto',
      'Terrazas y espacios exteriores',
      'Visualización 3D del entorno',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'visualizacion-3d',
      'remodelacion',
      'asesoria-construccion',
    ],
  },
  {
    slug: 'valdivia',
    name: 'Valdivia',
    region: 'Los Ríos',
    zone: 'Zona Sur',
    metaTitle: 'Arquitectos en Valdivia | Casas, madera y remodelación',
    metaDescription:
      'Arquitectura en Valdivia: casas de madera, remodelaciones y proyectos residenciales adaptados a la lluvia y a los ríos.',
    summary:
      'Diseñamos casas y remodelaciones en Valdivia con énfasis en madera, protección de la lluvia y relación con los ríos y humedales.',
    image: '/images/casas/Conjunto de Cabañas Puerto Varas/PV2.jpg',
    paragraphs: [
      'Valdivia es una ciudad de ríos, lluvia y tradición maderera. Nuestros proyectos residenciales incorporan cubiertas amplias, ventilación cruzada y materiales adecuados para un clima húmedo.',
      'Trabajamos con visualizaciones 3D y documentación detallada para que la obra se ejecute correctamente incluso a distancia.',
    ],
    highlights: [
      'Casas de madera y mixtas',
      'Remodelación de viviendas',
      'Protección frente a la lluvia',
      'Diseño en relación al agua',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'visualizacion-3d',
      'diseno-interiores',
    ],
  },
  {
    slug: 'osorno',
    name: 'Osorno',
    region: 'Los Lagos',
    zone: 'Zona Sur',
    metaTitle: 'Arquitectos en Osorno | Casas y remodelación',
    metaDescription:
      'Arquitectos en Osorno: diseño de casas y remodelaciones con eficiencia térmica para el clima de Los Lagos.',
    summary:
      'Proyectos residenciales en Osorno con envolventes eficientes, cubiertas de pendiente y espacios interiores protegidos del clima.',
    image: '/images/remodelaciones/casa-holanda/R0.jpeg',
    paragraphs: [
      'Osorno tiene un clima frío y lluvioso que condiciona fuertemente el diseño. Proyectamos casas con buen aislamiento, control de humedad y espacios interiores cálidos y luminosos.',
      'Además de viviendas nuevas, abordamos remodelaciones que mejoran el comportamiento térmico de casas existentes sin perder su carácter.',
    ],
    highlights: [
      'Casas nuevas con eficiencia térmica',
      'Remodelación de viviendas',
      'Control de humedad y ventilación',
      'Visualización 3D del proyecto',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'remodelacion',
      'asesoria-construccion',
      'visualizacion-3d',
    ],
  },
  {
    slug: 'puerto-varas',
    name: 'Puerto Varas',
    region: 'Los Lagos',
    zone: 'Zona Sur',
    metaTitle: 'Arquitectos en Puerto Varas | Casas y cabañas',
    metaDescription:
      'Arquitectura en Puerto Varas: casas, cabañas y segundas viviendas con diseño integrado al lago Llanquihue y los volcanes.',
    summary:
      'Diseñamos casas y cabañas en Puerto Varas, integrando el lago Llanquihue, la madera y el clima del sur de Chile.',
    image: '/images/casas/Conjunto de Cabañas Puerto Varas/PV3.jpg',
    paragraphs: [
      'Puerto Varas combina vivienda permanente, segundas viviendas y proyectos turísticos frente al lago Llanquihue. Diseñamos casas y conjuntos de cabañas que aprovechan las vistas y se protegen de la lluvia y el viento.',
      'La materialidad en madera, las cubiertas de pendiente y los espacios exteriores cubiertos son parte recurrente de nuestras propuestas en la zona.',
    ],
    highlights: [
      'Casas y segundas viviendas',
      'Conjuntos de cabañas',
      'Vistas al lago y volcanes',
      'Ejecución con equipos locales',
    ],
    serviceSlugs: [
      'diseno-arquitectura',
      'visualizacion-3d',
      'remodelacion',
      'asesoria-construccion',
    ],
  },
]

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug)
}

export function getLocationsByZone() {
  const order: LocationZone[] = [
    'Región Metropolitana',
    'Zona Centro',
    'Zona Sur',
  ]

  return order
    .map((zone) => ({
      zone,
      locations: locations.filter((location) => location.zone === zone),
    }))
    .filter((group) => group.locations.length > 0)
}
