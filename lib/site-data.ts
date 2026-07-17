export type Project = {
  title: string
  category: string
  location: string
  year: string
  estructure: string
  area: string
  image: string
  span: 'tall' | 'wide' | 'regular'
  summary: string
  scope: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    title: 'Casa Cunaco',
    category: 'casas',
    location: 'Cunaco, Nancagua. ',
    year: '2024',
    estructure: 'Madera, Panel SIP.',
    area: '163m2',
    image: '/images/casas/casacunaco/init5.jpg',
    span: 'tall',
    summary:
      'Vivienda unifamiliar de un piso que dialoga con su entorno natural a través de grandes paños vidriados y revestimientos en madera nativa.',
    scope: ['Diseño arquitectónico', 'Visualización 3D', 'Desarrollo técnico'],
    gallery: [ '/images/casas/casacunaco/2.jpg', '/images/casas/casacunaco/3.jpg', '/images/casas/casacunaco/4.jpg', '/images/casas/casacunaco/1.jpg', '/images/casas/casacunaco/6.jpg', '/images/casas/casacunaco/7.jpg',],
  },
  {
    title: 'Casa Mostazal',
    category: 'casas',
    location: 'San Francisco de Mostazal',
    year: '2021',
    estructure: 'Albañilería reforzada, acero y metalcon.',
    area: '163,75m2',
    image: '/images/casas/casamostazal/28.jpg',
    span: 'regular',
    summary: '',
    scope: [],
    gallery: [
      '/images/casas/casamostazal/28.jpg',
      '/images/casas/casamostazal/29.jpg',
      '/images/casas/casamostazal/30.jpg',
      '/images/casas/casamostazal/31.jpg',
      '/images/casas/casamostazal/33.jpg',
      '/images/casas/casamostazal/34.jpg',
      '/images/casas/casamostazal/35.jpg',
    ],
  },
  {
    title: 'Casa La Estrella',
    category: 'casas',
    location: 'San Miguel de los Llanos, La Estrella',
    year: '2022',
    estructure: 'Acero y Madera.',
    area: '66,25m2',
    image: '/images/casas/casalaestrella/2.jpg',
    span: 'regular',
    summary: '',
    scope: [],
    gallery: [
      '/images/casas/casalaestrella/2.jpg',
      '/images/casas/casalaestrella/1.jpg',
      '/images/casas/casalaestrella/3.jpg',
      '/images/casas/casalaestrella/4.jpg',
      '/images/casas/casalaestrella/5.jpg',
    ],
  },
  {
    title: 'Casa Malalcahuello',
    category: 'casas',
    location: 'Malalcahuello, La Araucanía',
    year: '2025',
    estructure: 'Madera.',
    area: '103m2',
    image: '/images/casas/casamalalcahuello/r1.jpg',
    span: 'regular',
    summary: '',
    scope: [],
    gallery: [
      '/images/casas/casamalalcahuello/r1.jpg',
      '/images/casas/casamalalcahuello/r2.jpg',
      '/images/casas/casamalalcahuello/r3.jpg',
      '/images/casas/casamalalcahuello/r4.jpg',
      '/images/casas/casamalalcahuello/r5.jpg',
      '/images/casas/casamalalcahuello/r6.jpg',
      '/images/casas/casamalalcahuello/r7.jpg',
      '/images/casas/casamalalcahuello/r8.jpg',
      '/images/casas/casamalalcahuello/r9.jpg',
      '/images/casas/casamalalcahuello/r10.jpg',
      '/images/casas/casamalalcahuello/r11.jpg',
      '/images/casas/casamalalcahuello/r13.jpg',
    ],
  },
  {
    title: 'Anteproyecto Casa Puerto Varas',
    category: 'casas',
    location: 'Puerto Varas, Los Lagos',
    year: '2025',
    estructure: 'Madera, Panel SIP.',
    area: '200m2',
    image: '/images/casas/anteproyecto/render 01.jpg',
    span: 'regular',
    summary: 'El proyecto se articula a través de un volumen horizontal que respeta la escala del paisaje circundante. La propuesta material apuesta por el contraste térmico y visual: una envolvente oscura de textura lineal que resalta la nobleza de los pilares de madera. El diseño prioriza la transición fluida hacia el exterior mediante un gran porche cubierto, complementado por un paisajismo de bajo mantenimiento con especies silvestres que integran orgánicamente la obra en su entorno.',
    scope: [],
    gallery: [
      '/images/casas/anteproyecto/render 01.jpg',
      '/images/casas/anteproyecto/render 02.jpg',
      '/images/casas/anteproyecto/render 03.jpg',
      '/images/casas/anteproyecto/render 04.jpg',
      '/images/casas/anteproyecto/render 05.jpg',
      '/images/casas/anteproyecto/render 06.jpg',
      '/images/casas/anteproyecto/render 07.jpg',
      '/images/casas/anteproyecto/render 08.jpg',
      '/images/casas/anteproyecto/render 09.jpg',
      '/images/casas/anteproyecto/render 10.jpg',
    ],
  },
  {
    title: 'Conjunto de Cabañas Puerto Varas',
    category: 'casas',
    location: 'Puerto Varas, Los Lagos',
    year: '',
    estructure: '',
    area: '',
    image: '/images/casas/Conjunto de Cabañas Puerto Varas/PV1.jpg',
    span: 'regular',
    summary: 'Diseño arquitectónico de un conjunto de cabañas concebidas para integrarse con el paisaje del sur de Chile, privilegiando la funcionalidad, la materialidad y la relación con el entorno natural.',
    scope: [
      'Diseño arquitectónico',
      'Anteproyecto',
      'Visualización 3D',
    ],
    gallery: [
      '/images/casas/Conjunto de Cabañas Puerto Varas/PV1.jpg',
      '/images/casas/Conjunto de Cabañas Puerto Varas/PV2.jpg',
      '/images/casas/Conjunto de Cabañas Puerto Varas/PV3.jpg',
      '/images/casas/Conjunto de Cabañas Puerto Varas/PV4.jpg',
      '/images/casas/Conjunto de Cabañas Puerto Varas/PV5.jpg',
      '/images/casas/Conjunto de Cabañas Puerto Varas/PV6.jpg',
      '/images/casas/Conjunto de Cabañas Puerto Varas/PV7.jpg',
      '/images/casas/Conjunto de Cabañas Puerto Varas/PV8.jpg',
    ],
  },
  {
    title: 'Casa Melipilla',
    category: 'remodelacion',
    location: 'Melipilla, Santiago',
    year: '2024',
    estructure: 'Acero y metalcon.',
    area: '',
    image: '/images/remodelaciones/casamelipilla/Frontis Melipilla.png',
    span: 'regular',
    summary: 'Ampliación de segundo piso y diseño integral de fachada.',
    scope: [
      'Ampliación segundo piso',
      'Diseño de fachada',
    ],
    gallery: [
      '/images/remodelaciones/casamelipilla/Frontis Melipilla.png',
      '/images/remodelaciones/casamelipilla/Frontis Melipilla 2.png',
      '/images/remodelaciones/casamelipilla/Frontis Melipilla 3.png',
    ],
  },
  {
    title: 'Casa Esmeralda',
    category: 'remodelacion',
    location: 'La Florida, Santiago',
    year: '2024',
    estructure: 'Acero y metalcon.',
    area: '',
    image: '/images/remodelaciones/casaesmeralda/1.jpg',
    span: 'regular',
    summary: 'Ampliación de segundo piso, remodelación del primer nivel y rediseño de fachadas.',
    scope: [
      'Ampliación segundo piso',
      'Remodelación primer piso',
      'Diseño de fachadas',
    ],
    gallery: [
      '/images/remodelaciones/casaesmeralda/1.jpg',
      '/images/remodelaciones/casaesmeralda/2.jpg',
      '/images/remodelaciones/casaesmeralda/3.jpg',
      '/images/remodelaciones/casaesmeralda/4.jpg',
      '/images/remodelaciones/casaesmeralda/5.jpg',
      '/images/remodelaciones/casaesmeralda/6.jpg',
      '/images/remodelaciones/casaesmeralda/7.jpg',
    ],
  },
  {
    title: 'Casa Litueche',
    category: 'remodelacion',
    location: 'Melipilla, Santiago R.M.',
    year: '2024',
    estructure: 'Metalcon, Madera.',
    area: '',
    image: '/images/remodelaciones/casalitueche/01.png',
    span: 'regular',
    summary: 'Proyecto de remodelación y ampliación residencial.',
    scope: [
      'Remodelación',
      'Diseño arquitectónico',
    ],
    gallery: [
      '/images/remodelaciones/casalitueche/01.png',
      '/images/remodelaciones/casalitueche/02.png',
      '/images/remodelaciones/casalitueche/03.png',
      '/images/remodelaciones/casalitueche/04.png',
    ],
  },
  {
    title: 'Casa San Bernardo',
    category: 'remodelacion',
    location: 'San Bernardo, Santiago R.M.',
    year: '2023',
    estructure: 'Acero, Metalcon.',
    area: '',
    image: '/images/remodelaciones/casasanbernardo/san bernardo 01.png',
    span: 'regular',
    summary: 'Proyecto de remodelación y ampliación residencial.',
    scope: [
      'Remodelación',
      'Diseño arquitectónico',
    ],
    gallery: [
      '/images/remodelaciones/casasanbernardo/san bernardo 01.png',
      '/images/remodelaciones/casasanbernardo/san bernardo 02.png',
      '/images/remodelaciones/casasanbernardo/san bernardo 03.png',
      '/images/remodelaciones/casasanbernardo/san bernardo 04.png',
      '/images/remodelaciones/casasanbernardo/san bernardo 05.png',
    ],
  },
  {
    title: 'Quincho Newen IV',
    category: 'remodelacion',
    location: 'Puente Alto, Santiago R.M.',
    year: '2025',
    estructure: 'Acero, Metalcon, Hormigón armado.',
    area: '',
    image: '/images/remodelaciones/quincho/Imagen 0.jpg',
    span: 'regular',
    summary: 'Diseño y desarrollo de quincho contemporáneo para vivienda unifamiliar.',
    scope: [
      'Diseño arquitectónico',
      'Quincho',
      'Desarrollo técnico',
    ],
    gallery: [
      '/images/remodelaciones/quincho/Imagen 0.jpg',
      '/images/remodelaciones/quincho/Imagen 1.jpg',
      '/images/remodelaciones/quincho/Imagen28_000.jpg',
      '/images/remodelaciones/quincho/Imagen29.jpg',
    ],
  },
  {
    title: 'Casa Linderos',
    category: 'interiores',
    location: 'Buin, Santiago',
    year: '2024',
    estructure: 'Melamina, MDF enchapado.',
    area: '',
    image: '/images/diseno-interior-moviliario/casalinderos/2.jpg',
    span: 'regular',
    summary: 'Diseño de mobiliario personalizado para estar-comedor, incluyendo mueble para tocadiscos y biblioteca.',
    scope: [
      'Diseño de interiores',
      'Mobiliario a medida',
      'Biblioteca',
    ],
    gallery: [
      '/images/diseno-interior-moviliario/casalinderos/2.jpg',
      '/images/diseno-interior-moviliario/casalinderos/1.jpg',
      '/images/diseno-interior-moviliario/casalinderos/3.jpg',
      '/images/diseno-interior-moviliario/casalinderos/4.jpg',
      '/images/diseno-interior-moviliario/casalinderos/5.jpg',
    ],
  },
  {
    title: 'Muebles Dormitorio',
    category: 'interiores',
    location: 'Las Condes, Santiago',
    year: '2023',
    estructure: 'Madera laminada, MDF, Melamina.',
    area: '',
    image: '/images/diseno-interior-moviliario/mueblesdormitorio/1.jpg',
    span: 'regular',
    summary: 'Diseño y fabricación de mobiliario personalizado para dormitorio principal.',
    scope: [
      'Diseño de mobiliario',
      'Dormitorio',
    ],
    gallery: [
      '/images/diseno-interior-moviliario/mueblesdormitorio/1.jpg',
      '/images/diseno-interior-moviliario/mueblesdormitorio/2.jpg',
    ],
  },
  {
    title: 'Casa Marco',
    category: 'interiores',
    location: 'Maipú, Santiago',
    year: '2024',
    estructure: 'Melamina, MDF enchapado, superficies Staron, madera pino Oregón.',
    area: '',
    image: '/images/diseno-interior-moviliario/casamarco/4.jpg',
    span: 'regular',
    summary: 'Proyecto de cocina minimalista y diseño de cobertizo con mobiliario personalizado.',
    scope: [
      'Diseño de cocina',
      'Mobiliario',
      'Cobertizo',
    ],
    gallery: [
      '/images/diseno-interior-moviliario/casamarco/4.jpg',
      '/images/diseno-interior-moviliario/casamarco/1.jpg',
      '/images/diseno-interior-moviliario/casamarco/2.jpg',
      '/images/diseno-interior-moviliario/casamarco/3.jpg',
      '/images/diseno-interior-moviliario/casamarco/5.jpg',
      '/images/diseno-interior-moviliario/casamarco/6.jpg',
      '/images/diseno-interior-moviliario/casamarco/7.jpg',
      '/images/diseno-interior-moviliario/casamarco/8.jpg',
    ],
  },
  {
    title: 'Casa Los Alerces',
    category: 'interiores',
    location: 'Pudahuel, Santiago',
    year: '2024',
    estructure: 'Melamina, madera laminada, superficies Staron.',
    area: '',
    image: '/images/diseno-interior-moviliario/casalosalerces/1.jpg',
    span: 'regular',
    summary: 'Ampliación y remodelación de cocina con un estilo contemporáneo.',
    scope: [
      'Diseño de cocina',
      'Remodelación',
      'Mobiliario',
    ],
    gallery: [
      '/images/diseno-interior-moviliario/casalosalerces/1.jpg',
      '/images/diseno-interior-moviliario/casalosalerces/2.jpg',
      '/images/diseno-interior-moviliario/casalosalerces/3.jpg',
      '/images/diseno-interior-moviliario/casalosalerces/4.jpg',
      '/images/diseno-interior-moviliario/casalosalerces/5.jpg',
    ],
  },
  {
    title: 'Cocina Litueche',
    category: 'interiores',
    location: "Litueche, Región de O'Higgins",
    year: '2025',
    estructure: 'Melamina, MDF enchapado, cuarzo.',
    area: '',
    image: '/images/diseno-interior-moviliario/cocina/05.png',
    span: 'regular',
    summary: 'Diseño contemporáneo de cocina con mobiliario a medida y cubierta de cuarzo.',
    scope: [
      'Diseño de cocina',
      'Mobiliario',
      'Visualización 3D',
    ],
    gallery: [
      '/images/diseno-interior-moviliario/cocina/05.png',
      '/images/diseno-interior-moviliario/cocina/06.png',
      '/images/diseno-interior-moviliario/cocina/07.png',
    ],
  },
  {
    title: 'Clínica Cliniplastic',
    category: 'comerciales',
    location: 'Concepción',
    year: '2025',
    estructure: 'Placas de madera enchapadas, melamina, MDF enchapado, piso vinílico y cerámico.',
    area: '',
    image: '/images/comerciales-oficinas/cliniplastic/3.jpeg',
    span: 'regular',
    summary: 'Remodelación interior de clínica, incluyendo revestimientos, pintura y mobiliario personalizado.',
    scope: [
      'Remodelación interior',
      'Revestimientos',
      'Pintura',
      'Mobiliario personalizado',
    ],
    gallery: [
      '/images/comerciales-oficinas/cliniplastic/3.jpeg',
      '/images/comerciales-oficinas/cliniplastic/1.jpg',
      '/images/comerciales-oficinas/cliniplastic/2.jpg',
      '/images/comerciales-oficinas/cliniplastic/4.jpeg',
      '/images/comerciales-oficinas/cliniplastic/5.jpeg',
    ],
  },
  {
    title: 'Barbería Gio',
    category: 'comerciales',
    location: 'San Bernardo, Santiago',
    year: '2025',
    estructure: 'Madera pino radiata, melamina, MDF enchapado.',
    area: '',
    image: '/images/comerciales-oficinas/barberiario/1.jpg',
    span: 'regular',
    summary: 'Remodelación interior y desarrollo de mobiliario personalizado para barbería.',
    scope: [
      'Remodelación interior',
      'Mobiliario personalizado',
    ],
    gallery: [
      '/images/comerciales-oficinas/barberiario/1.jpg',
      '/images/comerciales-oficinas/barberiario/2.jpg',
      '/images/comerciales-oficinas/barberiario/3.jpg',
      '/images/comerciales-oficinas/barberiario/4.jpg',
    ],
  },
  {
    title: 'Remodelación Fachada ETEX',
    category: 'comerciales',
    location: 'Maipú, Santiago RM',
    year: '2025',
    estructure: 'Acero.',
    area: '',
    image: '/images/comerciales-oficinas/remodelacion/render 004.png',
    span: 'regular',
    summary: 'Propuesta de remodelación de fachada corporativa mediante visualización arquitectónica.',
    scope: [
      'Diseño de fachada',
      'Visualización 3D',
    ],
    gallery: [
      '/images/comerciales-oficinas/remodelacion/render 004.png',
      '/images/comerciales-oficinas/remodelacion/vista tipo 0002.png',
      '/images/comerciales-oficinas/remodelacion/vista tipo 003 (3).png',
    ],
  },
  {
    title: 'Laboratorio Quintero',
    category: 'comerciales',
    location: 'Quintero, Valparaíso',
    year: '2025',
    estructure: 'Acero, melamina.',
    area: '',
    image: '/images/comerciales-oficinas/laboratorio/vista 02 color 1.png',
    span: 'regular',
    summary: 'Diseño arquitectónico y propuesta interior para laboratorio clínico.',
    scope: [
      'Diseño arquitectónico',
      'Diseño interior',
      'Visualización 3D',
    ],
    gallery: [
      '/images/comerciales-oficinas/laboratorio/vista 02 color 1.png',
      '/images/comerciales-oficinas/laboratorio/vista 02 color 2.png',
      '/images/comerciales-oficinas/laboratorio/vista 03 color 1.png',
      '/images/comerciales-oficinas/laboratorio/vista 03 color 2.png',
    ],
  },
  {
    title: 'Sala Médica Cerrillos',
    category: 'comerciales',
    location: 'Cerrillos, Santiago RM',
    year: '2025',
    estructure: 'Acero, acero inoxidable, melamina.',
    area: '',
    image: '/images/comerciales-oficinas/sala/sala-medica-cerrillos-01.jpg',
    span: 'regular',
    summary: 'Diseño y desarrollo de sala médica con mobiliario especializado y distribución funcional.',
    scope: [
      'Diseño arquitectónico',
      'Diseño interior',
      'Mobiliario clínico',
    ],
    gallery: [
      '/images/comerciales-oficinas/sala/sala-medica-cerrillos-01.jpg',
      '/images/comerciales-oficinas/sala/sala-medica-cerrillos-02.jpg',
      '/images/comerciales-oficinas/sala/sala-medica-cerrillos-03.jpg',
      '/images/comerciales-oficinas/sala/sala-medica-cerrillos-04.jpg',
    ],
  },
  {
    title: 'BMX Day 2026',
    category: 'visualizacion',
    location: '',
    year: '2026',
    estructure: 'Visualización 3D',
    area: '',
    image: '/images/visualizacion-eventos-publicidad/Bmx day 2026/R1.jpeg',
    span: 'regular',
    summary: 'Visualización conceptual desarrollada para el evento BMX Day 2026.',
    scope: [
      'Visualización 3D',
      'Diseño conceptual',
      'Renderizado',
    ],
    gallery: [
      '/images/visualizacion-eventos-publicidad/Bmx day 2026/R1.jpeg',
      '/images/visualizacion-eventos-publicidad/Bmx day 2026/R2.jpeg',
      '/images/visualizacion-eventos-publicidad/Bmx day 2026/R3.jpeg',
      '/images/visualizacion-eventos-publicidad/Bmx day 2026/R4.jpeg',
      '/images/visualizacion-eventos-publicidad/Bmx day 2026/R5.jpeg',
    ],
  },

  {
    title: 'Expo Dopamine',
    category: 'visualizacion',
    location: '',
    year: '',
    estructure: 'Visualización 3D',
    area: '',
    image: '/images/visualizacion-eventos-publicidad/Expo Dopamine/R1.jpeg',
    span: 'regular',
    summary: 'Propuesta de visualización para espacio expositivo y experiencia de marca.',
    scope: [
      'Visualización 3D',
      'Diseño expositivo',
      'Renderizado',
    ],
    gallery: [
      '/images/visualizacion-eventos-publicidad/Expo Dopamine/R1.jpeg',
      '/images/visualizacion-eventos-publicidad/Expo Dopamine/R2.jpeg',
      '/images/visualizacion-eventos-publicidad/Expo Dopamine/R3.jpeg',
    ],
  },

  {
    title: 'Vans x FuelFest',
    category: 'visualizacion',
    location: '',
    year: '',
    estructure: 'Visualización 3D',
    area: '',
    image: '/images/visualizacion-eventos-publicidad/VansXFuelfest/R1 (2).png',
    span: 'wide',
    summary: 'Desarrollo de renders para activación de marca y evento automotriz.',
    scope: [
      'Visualización 3D',
      'Activación de marca',
      'Diseño de evento',
    ],
    gallery: [
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R1 (2).png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R2 (2).png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R3 (2).png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R4 (2).png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R5 (2).png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R6 (2).png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R7.png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R8.png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R9.png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R10.png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R11.png',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R13.png',
    ],
  },

  {
    title: 'Zignal x AFP Habitat',
    category: 'visualizacion',
    location: '',
    year: '',
    estructure: 'Visualización 3D',
    area: '',
    image: '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R1 (1).png',
    span: 'regular',
    summary: 'Visualización para activación corporativa y experiencia de marca.',
    scope: [
      'Visualización 3D',
      'Diseño comercial',
      'Renderizado',
    ],
    gallery: [
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R1 (1).png',
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R2 (1).png',
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R3 (1).png',
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R4 (1).png',
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R5 (1).png',
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R6 (1).png',
    ],
  },

  {
    title: 'Zignal x Stanley',
    category: 'visualizacion',
    location: '',
    year: '',
    estructure: 'Visualización 3D',
    area: '',
    image: '/images/visualizacion-eventos-publicidad/Zignal X Stanley/R-1.jpeg',
    span: 'regular',
    summary: 'Propuesta de visualización para activación de marca Stanley.',
    scope: [
      'Visualización 3D',
      'Diseño de espacios',
      'Renderizado',
    ],
    gallery: [
      '/images/visualizacion-eventos-publicidad/Zignal X Stanley/R-1.jpeg',
      '/images/visualizacion-eventos-publicidad/Zignal X Stanley/R-2.jpeg',
      '/images/visualizacion-eventos-publicidad/Zignal X Stanley/R-3.jpeg',
      '/images/visualizacion-eventos-publicidad/Zignal X Stanley/R-4.jpeg',
      '/images/visualizacion-eventos-publicidad/Zignal X Stanley/R-5.jpeg',
    ],
  },
]

export interface ProjectCategory {
  slug: string
  title: string
  category: string
  description: string
  image: string
  total: number

  intro: {
    eyebrow: string
    title: string
    description: string
    counterLabel: string
    counterDescription: string
  }
}

export const projectCategories: ProjectCategory[] = [
  {
    slug: 'casas',
    title: 'Casas',
    category: 'casas',
    description:
      'Proyectos de arquitectura residencial diseñados para mejorar la calidad de vida, combinando funcionalidad, diseño y una integración armónica con el entorno.',
    image: '/images/casas/anteproyecto/render 01.jpg',
    total: 6,
        intro: {
      eyebrow: 'Proyectos',

      title:
        'Renovamos espacios para una nueva forma de vivir.',

      description:
        'Cada remodelación busca potenciar el inmueble existente, incorporando nuevas distribuciones, materialidades y soluciones contemporáneas que respetan su contexto y aumentan su valor.',

      counterLabel:
        'Portafolio',

      counterDescription:
        'proyectos de remodelación ejecutados.',
    },
  },
  {
    slug: 'remodelacion',
    title: 'Remodelaciones',
    category: 'remodelacion',
    description:
      'Intervenciones arquitectónicas que transforman espacios existentes, optimizando su funcionalidad, estética y eficiencia.',
    image: '/images/remodelaciones/casamelipilla/Frontis%20Melipilla.png',
    total: 5,
        intro: {
      eyebrow: 'Proyectos',

      title:
        'Renovamos espacios para una nueva forma de vivir.',

      description:
        'Cada remodelación busca potenciar el inmueble existente, incorporando nuevas distribuciones, materialidades y soluciones contemporáneas que respetan su contexto y aumentan su valor.',

      counterLabel:
        'Portafolio',

      counterDescription:
        'proyectos de remodelación ejecutados.',
    },
  },
  {
    slug: 'comerciales',
    title: 'Comerciales',
    category: 'comerciales',
    description:
      'Diseño y desarrollo de oficinas, clínicas y espacios comerciales adaptados a la identidad y objetivos de cada empresa.',
    image: '/images/comerciales-oficinas/remodelacion/vista%20tipo%20003%20(3).png',
    total: 5,
        intro: {
      eyebrow: 'Proyectos',

      title:
        'Renovamos espacios para una nueva forma de vivir.',

      description:
        'Cada remodelación busca potenciar el inmueble existente, incorporando nuevas distribuciones, materialidades y soluciones contemporáneas que respetan su contexto y aumentan su valor.',

      counterLabel:
        'Portafolio',

      counterDescription:
        'proyectos de remodelación ejecutados.',
    },
  },
  {
    slug: 'interiores',
    title: 'Diseño Interior & Mobiliario',
    category: 'interiores',
    description:
      'Diseño de interiores y mobiliario personalizado que combina materiales, funcionalidad y detalles para crear espacios únicos.',
    image: '/images/diseno-interior-moviliario/cocina/07.png',
    total: 5,
        intro: {
      eyebrow: 'Proyectos',

      title:
        'Renovamos espacios para una nueva forma de vivir.',

      description:
        'Cada remodelación busca potenciar el inmueble existente, incorporando nuevas distribuciones, materialidades y soluciones contemporáneas que respetan su contexto y aumentan su valor.',

      counterLabel:
        'Portafolio',

      counterDescription:
        'proyectos de remodelación ejecutados.',
    },
  },
{
  slug: 'visualizacion',
  title: 'Visualización para Eventos & Publicidad',
  category: 'visualizacion',
  description:
    'Desarrollo de visualizaciones 3D, renders y propuestas espaciales para eventos, activaciones de marca, exhibiciones y campañas publicitarias, comunicando conceptos de forma atractiva antes de su ejecución.',
  image: '/images/visualizacion-eventos-publicidad/VansXFuelfest/R1 (2).png',
  total: 5,
  intro: {
    eyebrow: 'Proyectos',

    title:
      'Transformamos ideas en experiencias visuales.',

    description:
      'Creamos representaciones arquitectónicas y comerciales para eventos, ferias, activaciones de marca y campañas publicitarias, permitiendo visualizar cada detalle del proyecto antes de su construcción o montaje.',

    counterLabel:
      'Portafolio',

    counterDescription:
      'proyectos de visualización desarrollados.',
  },
},
]

export type Service = {
  number: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Diseño de Arquitectura',
    description:
      'Combinamos diseño e innovación para crear espacios icónicos e ideales. Aplicamos tecnologías de construcción y sistemas que optimizan la eficiencia energética.',
  },
  {
    number: '02',
    title: 'Visualización 3D',
    description:
      'Damos vida a tus proyectos antes de que se construyan. Modelado 3D y visualización arquitectónica con representaciones realistas y detalladas.',
  },
  {
    number: '03',
    title: 'Diseño de Interiores',
    description:
      'Convertimos tus espacios en entornos funcionales, elegantes y llenos de armonía, con mobiliario a medida y personalizado que refleja tu esencia.',
  },
  {
    number: '04',
    title: 'Asesoría en Construcción',
    description:
      'Acompañamiento técnico integral, supervisión en obra y análisis constructivo para garantizar el mejor resultado en cada etapa del proyecto.',
  },
  {
    number: '05',
    title: 'Remodelación',
    description:
      'Renovamos y revalorizamos espacios existentes, optimizando su funcionalidad, confort y estética con soluciones a la medida de cada cliente.',
  },
  {
    number: '06',
    title: 'Proyectos Comerciales',
    description:
      'Diseñamos oficinas, locales y espacios comerciales que potencian la identidad de cada marca, alineados con sus objetivos estratégicos.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Reunión Inicial',
    description: 'Escuchamos tus ideas, necesidades y objetivos para definir la visión del proyecto.',
  },
  {
    number: '02',
    title: 'Diseño Arquitectónico',
    description: 'Desarrollamos el concepto y la distribución óptima de los espacios.',
  },
  {
    number: '03',
    title: 'Visualización 3D',
    description: 'Creamos renders realistas que te permiten ver tu proyecto antes de construirlo.',
  },
  {
    number: '04',
    title: 'Desarrollo Técnico',
    description: 'Preparamos planos, especificaciones y documentación para la ejecución.',
  },
  {
    number: '05',
    title: 'Acompañamiento en Obra',
    description: 'Supervisamos la construcción para asegurar calidad y fidelidad al diseño.',
  },
]

export const testimonials = [
  {
    quote:
      'MI Arquitectos transformó por completo nuestra casa. La visualización 3D nos permitió tomar decisiones con total confianza antes de construir.',
    name: 'Carolina Fuentes',
    role: 'Proyecto Residencial, Las Condes',
  },
  {
    quote:
      'Profesionalismo y una atención al detalle impecable. El resultado superó todas nuestras expectativas y los plazos se cumplieron.',
    name: 'Rodrigo Salinas',
    role: 'Remodelación, Colina',
  },
  {
    quote:
      'Diseñaron nuestras oficinas entendiendo perfectamente la identidad de la marca. Un espacio funcional, elegante y muy bien logrado.',
    name: 'Valentina Rojas',
    role: 'Proyecto Comercial, Providencia',
  },
]

export const stats = [
  { value: 48, suffix: '+', label: 'Proyectos entregados' },
  { value: 6, suffix: '', label: 'Años de experiencia' },
  { value: 100, suffix: '%', label: 'Clientes satisfechos' },
  { value: 12, suffix: 'k', label: 'm² diseñados' },
]

export const contactInfo = {
  address: 'Av. Agustinas #1022, Ofi. 1004, Santiago RM.',
  phone: '+569 91415163',
  phoneHref: '+56991415163',
  email: 'matignacio.arq@gmail.com',
  social: {
    facebook: 'https://web.facebook.com/profile.php?id=100085673843982&locale=es_LA',
    instagram: 'https://www.instagram.com/miarquitectos_/',
    linkedin: 'https://www.linkedin.com/in/matias-ignacio-alfaro-160b4b283/',
  },
}

export const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Contacto', href: '/#contacto' },
]
