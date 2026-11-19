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

export function getProjectSlug(project: Project) {
  return project.title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getProjectBySlug(category: string, slug: string) {
  return projects.find(
    (project) =>
      project.category === category && getProjectSlug(project) === slug
  )
}

export const projects: Project[] = [
  {
    title: 'Casa Cunaco',
    category: 'diseno-de-viviendas',
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
    category: 'diseno-de-viviendas',
    location: 'San Francisco de Mostazal',
    year: '2021',
    estructure: 'Albañilería reforzada, acero y metalcon.',
    area: '163,75m2',
    image: '/images/casas/casamostazal/28.jpg',
    span: 'regular',
    summary:
      'Vivienda unifamiliar de 163,75 m² en San Francisco de Mostazal, resuelta con albañilería reforzada, acero y metalcon. El proyecto prioriza la eficiencia espacial y una fachada de líneas simples integrada al clima de la zona central.',
    scope: ['Diseño arquitectónico', 'Desarrollo técnico'],
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
    category: 'diseno-de-viviendas',
    location: 'San Miguel de los Llanos, La Estrella',
    year: '2022',
    estructure: 'Acero y Madera.',
    area: '66,25m2',
    image: '/images/casas/casalaestrella/2.jpg',
    span: 'regular',
    summary:
      'Casa de 66,25 m² en San Miguel de los Llanos, La Estrella, estructurada en acero y madera. Una vivienda compacta y luminosa que optimiza cada metro cuadrado y se integra al entorno rural.',
    scope: ['Diseño arquitectónico', 'Visualización 3D'],
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
    category: 'diseno-de-viviendas',
    location: 'Malalcahuello, La Araucanía',
    year: '2025',
    estructure: 'Madera.',
    area: '103m2',
    image: '/images/casas/casamalalcahuello/r1.jpg',
    span: 'regular',
    summary:
      'Vivienda de 103 m² en Malalcahuello, La Araucanía, construida íntegramente en madera. El diseño responde al clima del sur de Chile con una volumetría simple, cubierta a dos aguas y una estrecha relación con el bosque nativo.',
    scope: ['Diseño arquitectónico', 'Visualización 3D', 'Desarrollo técnico'],
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
    category: 'diseno-de-viviendas',
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
    category: 'diseno-de-viviendas',
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
    category: 'remodelaciones-de-viviendas',
    location: 'Melipilla, Santiago',
    year: '2024',
    estructure: 'Acero y metalcon.',
    area: '',
    image: '/images/remodelaciones/casamelipilla/Frontis Melipilla.jpg',
    span: 'regular',
    summary: 'Ampliación de segundo piso y diseño integral de fachada.',
    scope: [
      'Ampliación segundo piso',
      'Diseño de fachada',
    ],
    gallery: [
      '/images/remodelaciones/casamelipilla/Frontis Melipilla.jpg',
      '/images/remodelaciones/casamelipilla/Frontis Melipilla 2.jpg',
      '/images/remodelaciones/casamelipilla/Frontis Melipilla 3.jpg',
    ],
  },
  {
    title: 'Casa Esmeralda',
    category: 'remodelaciones-de-viviendas',
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
    category: 'remodelaciones-de-viviendas',
    location: 'Melipilla, Santiago R.M.',
    year: '2024',
    estructure: 'Metalcon, Madera.',
    area: '',
    image: '/images/remodelaciones/casalitueche/01.jpg',
    span: 'regular',
    summary: 'Proyecto de remodelación y ampliación residencial.',
    scope: [
      'Remodelación',
      'Diseño arquitectónico',
    ],
    gallery: [
      '/images/remodelaciones/casalitueche/01.jpg',
      '/images/remodelaciones/casalitueche/02.jpg',
      '/images/remodelaciones/casalitueche/03.jpg',
      '/images/remodelaciones/casalitueche/04.jpg',
    ],
  },
  {
    title: 'Casa San Bernardo',
    category: 'remodelaciones-de-viviendas',
    location: 'San Bernardo, Santiago R.M.',
    year: '2023',
    estructure: 'Acero, Metalcon.',
    area: '',
    image: '/images/remodelaciones/casasanbernardo/san bernardo 01.jpg',
    span: 'regular',
    summary: 'Proyecto de remodelación y ampliación residencial.',
    scope: [
      'Remodelación',
      'Diseño arquitectónico',
    ],
    gallery: [
      '/images/remodelaciones/casasanbernardo/san bernardo 01.jpg',
      '/images/remodelaciones/casasanbernardo/san bernardo 02.jpg',
      '/images/remodelaciones/casasanbernardo/san bernardo 03.jpg',
      '/images/remodelaciones/casasanbernardo/san bernardo 04.jpg',
      '/images/remodelaciones/casasanbernardo/san bernardo 05.jpg',
    ],
  },
  {
    title: 'Quincho Newen IV',
    category: 'remodelaciones-de-viviendas',
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
    title: 'Casa Gascuña',
    category: 'remodelaciones-de-viviendas',
    location: '',
    year: '',
    estructure: 'Visualización 3D',
    area: '',
    image: '/images/remodelaciones/casa-gascuna/1.jpeg',
    span: 'regular',
    summary: 'Propuesta de visualización arquitectónica para Casa Gascuña.',
    scope: [
      'Visualización 3D',
      'Arquitectura',
      'Renderizado',
    ],
    gallery: [
      '/images/remodelaciones/casa-gascuna/1.jpeg',
      '/images/remodelaciones/casa-gascuna/2.jpeg',
      '/images/remodelaciones/casa-gascuna/3.jpeg',
      '/images/remodelaciones/casa-gascuna/4.jpeg',
      '/images/remodelaciones/casa-gascuna/5.jpeg',
      '/images/remodelaciones/casa-gascuna/6.jpeg',
      '/images/remodelaciones/casa-gascuna/7.jpeg',
      '/images/remodelaciones/casa-gascuna/8.jpeg',
      '/images/remodelaciones/casa-gascuna/11.jpeg',
      '/images/remodelaciones/casa-gascuna/12.jpeg',
      '/images/remodelaciones/casa-gascuna/13.jpeg',
      '/images/remodelaciones/casa-gascuna/15.jpeg',
      '/images/remodelaciones/casa-gascuna/16.jpeg',
      '/images/remodelaciones/casa-gascuna/19.jpeg',
      '/images/remodelaciones/casa-gascuna/20.jpeg',
      '/images/remodelaciones/casa-gascuna/25.jpeg',
      '/images/remodelaciones/casa-gascuna/26.jpeg',
    ],
  },
  {
    title: 'Casa Holanda',
    category: 'remodelaciones-de-viviendas',
    location: '',
    year: '',
    estructure: 'Remodelación',
    area: '',
    image: '/images/remodelaciones/casa-holanda/R0.jpeg',
    span: 'regular',
    summary: 'Proyecto de remodelación integral para Casa Holanda.',
    scope: [
      'Remodelación',
      'Arquitectura',
      'Visualización 3D',
    ],
    gallery: [
      '/images/remodelaciones/casa-holanda/R0.jpeg',
      '/images/remodelaciones/casa-holanda/R1.jpeg',
      '/images/remodelaciones/casa-holanda/R2.jpeg',
      '/images/remodelaciones/casa-holanda/R3.jpeg',
      '/images/remodelaciones/casa-holanda/R4.jpeg',
      '/images/remodelaciones/casa-holanda/R5.jpeg',
      '/images/remodelaciones/casa-holanda/R6.jpeg',
      '/images/remodelaciones/casa-holanda/R7.jpeg',
      '/images/remodelaciones/casa-holanda/R8.jpeg',
      '/images/remodelaciones/casa-holanda/R9.jpeg',
      '/images/remodelaciones/casa-holanda/R10.jpeg',
      '/images/remodelaciones/casa-holanda/R11.jpeg',
      '/images/remodelaciones/casa-holanda/R12.jpeg',
      '/images/remodelaciones/casa-holanda/R13.jpeg',
      '/images/remodelaciones/casa-holanda/R14.jpeg',
      '/images/remodelaciones/casa-holanda/R15.jpeg',
    ],
  },
  {
  title: 'Casa La Vendimia',
  category: 'remodelaciones-de-viviendas',
  location: '',
  year: '',
  estructure: 'Remodelación',
  area: '',
  image: '/images/remodelaciones/casa-la-vendimia/R1.jpg',
  span: 'regular',
  summary: 'Proyecto de remodelación para Casa La Vendimia.',
  scope: [
    'Remodelación',
    'Arquitectura',
    'Visualización 3D',
  ],
  gallery: [
    '/images/remodelaciones/casa-la-vendimia/R1.jpg',
    '/images/remodelaciones/casa-la-vendimia/R2.jpg',
    '/images/remodelaciones/casa-la-vendimia/R3.jpg',
    '/images/remodelaciones/casa-la-vendimia/R4.jpg',
    '/images/remodelaciones/casa-la-vendimia/R5.jpg',
    '/images/remodelaciones/casa-la-vendimia/R6.jpg',
    '/images/remodelaciones/casa-la-vendimia/R7.jpg',
    '/images/remodelaciones/casa-la-vendimia/R8.jpg',
  ],
},
  {
    title: 'Muebles Dormitorio',
    category: 'interiores',
    location: 'Las Condes, Santiago',
    year: '2023',
    estructure: 'Madera laminada, MDF, Melamina.',
    area: '',
    image: '/images/diseno-interior-mobiliario/mueblesdormitorio/1.jpg',
    span: 'regular',
    summary: 'Diseño y fabricación de mobiliario personalizado para dormitorio principal.',
    scope: [
      'Diseño de mobiliario',
      'Dormitorio',
    ],
    gallery: [
      '/images/diseno-interior-mobiliario/mueblesdormitorio/1.jpg',
      '/images/diseno-interior-mobiliario/mueblesdormitorio/2.jpg',
    ],
  },
    {
    title: 'Casa Linderos',
    category: 'interiores',
    location: 'Buin, Santiago',
    year: '2024',
    estructure: 'Melamina, MDF enchapado.',
    area: '',
    image: '/images/diseno-interior-mobiliario/casalinderos/2.jpg',
    span: 'regular',
    summary: 'Diseño de mobiliario personalizado para estar-comedor, incluyendo mueble para tocadiscos y biblioteca.',
    scope: [
      'Diseño de interiores',
      'Mobiliario a medida',
      'Biblioteca',
    ],
    gallery: [
      '/images/diseno-interior-mobiliario/casalinderos/2.jpg',
      '/images/diseno-interior-mobiliario/casalinderos/1.jpg',
      '/images/diseno-interior-mobiliario/casalinderos/3.jpg',
      '/images/diseno-interior-mobiliario/casalinderos/4.jpg',
      '/images/diseno-interior-mobiliario/casalinderos/5.jpg',
    ],
  },
  {
    title: 'Recepción y Oficina Peñaflor',
    category: 'interiores',
    location: '',
    year: '',
    estructure: 'Diseño Interior & Mobiliario',
    area: '',
    image: '/images/diseno-interior-mobiliario/recepcion-y-oficina-penaflor/Render 1.jpg',
    span: 'regular',
    summary: 'Proyecto de diseño interior para recepción y oficinas en Peñaflor.',
    scope: [
      'Diseño de Interiores',
      'Visualización 3D',
      'Renderizado',
    ],
    gallery: [
      '/images/diseno-interior-mobiliario/recepcion-y-oficina-penaflor/Render 1.jpg',
      '/images/diseno-interior-mobiliario/recepcion-y-oficina-penaflor/Render 2.jpg',
      '/images/diseno-interior-mobiliario/recepcion-y-oficina-penaflor/Render 3.jpg',
      '/images/diseno-interior-mobiliario/recepcion-y-oficina-penaflor/Render 4.jpg',
      '/images/diseno-interior-mobiliario/recepcion-y-oficina-penaflor/Render 5.jpg',
      '/images/diseno-interior-mobiliario/recepcion-y-oficina-penaflor/Render 6.jpg',
    ],
  },
  {
    title: 'Casa Marco',
    category: 'interiores',
    location: 'Maipú, Santiago',
    year: '2024',
    estructure: 'Melamina, MDF enchapado, superficies Staron, madera pino Oregón.',
    area: '',
    image: '/images/diseno-interior-mobiliario/casamarco/4.jpg',
    span: 'regular',
    summary: 'Proyecto de cocina minimalista y diseño de cobertizo con mobiliario personalizado.',
    scope: [
      'Diseño de cocina',
      'Mobiliario',
      'Cobertizo',
    ],
    gallery: [
      '/images/diseno-interior-mobiliario/casamarco/4.jpg',
      '/images/diseno-interior-mobiliario/casamarco/1.jpg',
      '/images/diseno-interior-mobiliario/casamarco/2.jpg',
      '/images/diseno-interior-mobiliario/casamarco/3.jpg',
      '/images/diseno-interior-mobiliario/casamarco/5.jpg',
      '/images/diseno-interior-mobiliario/casamarco/6.jpg',
      '/images/diseno-interior-mobiliario/casamarco/7.jpg',
      '/images/diseno-interior-mobiliario/casamarco/8.jpg',
    ],
  },
  {
    title: 'Casa Los Alerces',
    category: 'interiores',
    location: 'Pudahuel, Santiago',
    year: '2024',
    estructure: 'Melamina, madera laminada, superficies Staron.',
    area: '',
    image: '/images/diseno-interior-mobiliario/casalosalerces/1.jpg',
    span: 'regular',
    summary: 'Ampliación y remodelación de cocina con un estilo contemporáneo.',
    scope: [
      'Diseño de cocina',
      'Remodelación',
      'Mobiliario',
    ],
    gallery: [
      '/images/diseno-interior-mobiliario/casalosalerces/1.jpg',
      '/images/diseno-interior-mobiliario/casalosalerces/2.jpg',
      '/images/diseno-interior-mobiliario/casalosalerces/3.jpg',
      '/images/diseno-interior-mobiliario/casalosalerces/4.jpg',
      '/images/diseno-interior-mobiliario/casalosalerces/5.jpg',
    ],
  },
  {
    title: 'Cocina Litueche',
    category: 'interiores',
    location: "Litueche, Región de O'Higgins",
    year: '2025',
    estructure: 'Melamina, MDF enchapado, cuarzo.',
    area: '',
    image: '/images/diseno-interior-mobiliario/cocina/05.jpg',
    span: 'regular',
    summary: 'Diseño contemporáneo de cocina con mobiliario a medida y cubierta de cuarzo.',
    scope: [
      'Diseño de cocina',
      'Mobiliario',
      'Visualización 3D',
    ],
    gallery: [
      '/images/diseno-interior-mobiliario/cocina/05.jpg',
      '/images/diseno-interior-mobiliario/cocina/06.jpg',
      '/images/diseno-interior-mobiliario/cocina/07.jpg',
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
    image: '/images/comerciales-oficinas/remodelacion/render 004.jpg',
    span: 'regular',
    summary: 'Propuesta de remodelación de fachada corporativa mediante visualización arquitectónica.',
    scope: [
      'Diseño de fachada',
      'Visualización 3D',
    ],
    gallery: [
      '/images/comerciales-oficinas/remodelacion/render 004.jpg',
      '/images/comerciales-oficinas/remodelacion/vista tipo 0002.jpg',
      '/images/comerciales-oficinas/remodelacion/vista tipo 003 (3).jpg',
    ],
  },
  {
    title: 'Laboratorio Quintero',
    category: 'comerciales',
    location: 'Quintero, Valparaíso',
    year: '2025',
    estructure: 'Acero, melamina.',
    area: '',
    image: '/images/comerciales-oficinas/laboratorio/vista 02 color 1.jpg',
    span: 'regular',
    summary: 'Diseño arquitectónico y propuesta interior para laboratorio clínico.',
    scope: [
      'Diseño arquitectónico',
      'Diseño interior',
      'Visualización 3D',
    ],
    gallery: [
      '/images/comerciales-oficinas/laboratorio/vista 02 color 1.jpg',
      '/images/comerciales-oficinas/laboratorio/vista 02 color 2.jpg',
      '/images/comerciales-oficinas/laboratorio/vista 03 color 1.jpg',
      '/images/comerciales-oficinas/laboratorio/vista 03 color 2.jpg',
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
    title: 'Fachada Publicitaria Pichidegua',
    category: 'comerciales',
    location: '',
    year: '',
    estructure: 'Fachada Publicitaria',
    area: '',
    image: '/images/comerciales-oficinas/fachada-publicitaria-pichidegua/RF1.jpeg',
    span: 'regular',
    summary: 'Proyecto de diseño y visualización de fachada publicitaria para Pichidegua.',
    scope: [
      'Diseño de Fachadas',
      'Visualización 3D',
      'Renderizado',
    ],
    gallery: [
      '/images/comerciales-oficinas/fachada-publicitaria-pichidegua/RF1.jpeg',
      '/images/comerciales-oficinas/fachada-publicitaria-pichidegua/RF2.jpeg',
      '/images/comerciales-oficinas/fachada-publicitaria-pichidegua/Rf3.jpeg',
      '/images/comerciales-oficinas/fachada-publicitaria-pichidegua/RF4.jpeg',
      '/images/comerciales-oficinas/fachada-publicitaria-pichidegua/RF5.jpeg',
      '/images/comerciales-oficinas/fachada-publicitaria-pichidegua/RF6.jpeg',
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
    image: '/images/visualizacion-eventos-publicidad/VansXFuelfest/R1 (2).jpg',
    span: 'wide',
    summary: 'Desarrollo de renders para activación de marca y evento automotriz.',
    scope: [
      'Visualización 3D',
      'Activación de marca',
      'Diseño de evento',
    ],
    gallery: [
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R1 (2).jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R2 (2).jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R3 (2).jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R4 (2).jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R5 (2).jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R6 (2).jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R7.jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R8.jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R9.jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R10.jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R11.jpg',
      '/images/visualizacion-eventos-publicidad/VansXFuelfest/R13.jpg',
    ],
  },

  {
    title: 'Zignal x AFP Habitat',
    category: 'visualizacion',
    location: '',
    year: '',
    estructure: 'Visualización 3D',
    area: '',
    image: '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R1 (1).jpg',
    span: 'regular',
    summary: 'Visualización para activación corporativa y experiencia de marca.',
    scope: [
      'Visualización 3D',
      'Diseño comercial',
      'Renderizado',
    ],
    gallery: [
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R1 (1).jpg',
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R2 (1).jpg',
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R3 (1).jpg',
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R4 (1).jpg',
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R5 (1).jpg',
      '/images/visualizacion-eventos-publicidad/Zignal X AfpHabitat/R6 (1).jpg',
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
  headingTitle?: string
  cardTitle?: string
  detailCategory?: string
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
    slug: 'diseno-de-viviendas',
    title: 'Diseño de viviendas',
    category: 'casas',
    description:
      'Proyectos de arquitectura residencial diseñados para mejorar la calidad de vida, combinando funcionalidad, diseño y una integración armónica con el entorno.',
    image: '/images/casas/anteproyecto/render 01.jpg',
    total: 6,
        intro: {
      eyebrow: 'Proyectos',

      title:
        'Casas diseñadas para tu forma de vivir.',

      description:
        'Diseñamos viviendas unifamiliares que combinan funcionalidad, eficiencia energética y una relación armónica con el entorno. Cada casa se adapta al terreno, al presupuesto y al estilo de vida de sus habitantes, desde la idea inicial hasta su construcción.',

      counterLabel:
        'Portafolio',

      counterDescription:
        'casas y anteproyectos desarrollados.',
    },
  },
  {
    slug: 'remodelaciones-de-viviendas',
    title: 'Remodelaciones de viviendas',
    headingTitle: 'Remodelación de viviendas',
    cardTitle: 'Remodelación de viviendas',
    detailCategory: 'Remodelación de viviendas',
    category: 'remodelacion',
    description:
      'Intervenciones arquitectónicas que transforman espacios existentes, optimizando su funcionalidad, estética y eficiencia.',
    image: '/images/remodelaciones/casamelipilla/Frontis Melipilla.jpg',
    total: 8,
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
    title: 'Proyectos comerciales',
    category: 'comerciales',
    description:
      'Diseño y desarrollo de oficinas, clínicas y espacios comerciales adaptados a la identidad y objetivos de cada empresa.',
    image: '/images/comerciales-oficinas/remodelacion/vista tipo 003 (3).jpg',
    total: 6,
        intro: {
      eyebrow: 'Proyectos',

      title:
        'Espacios comerciales que representan tu marca.',

      description:
        'Diseñamos oficinas, clínicas, locales y espacios corporativos que combinan identidad de marca, funcionalidad y cumplimiento normativo. Cada proyecto busca mejorar la experiencia de clientes y equipos, optimizando la distribución y la materialidad.',

      counterLabel:
        'Portafolio',

      counterDescription:
        'proyectos comerciales y de oficinas desarrollados.',
    },
  },
  {
    slug: 'interiores',
    title: 'Diseño Interior & Mobiliario',
    category: 'interiores',
    description:
      'Diseño de interiores y mobiliario personalizado que combina materiales, funcionalidad y detalles para crear espacios únicos.',
    image: '/images/diseno-interior-mobiliario/cocina/07.jpg',
    total: 6,
        intro: {
      eyebrow: 'Proyectos',

      title:
        'Interiores y mobiliario pensados a medida.',

      description:
        'Diseñamos ambientes y mobiliario personalizado que optimizan cada espacio, combinando materiales, iluminación y detalles funcionales. El resultado son interiores coherentes con la arquitectura y con el estilo de quienes los habitan.',

      counterLabel:
        'Portafolio',

      counterDescription:
        'proyectos de interiorismo y mobiliario entregados.',
    },
  },
{
  slug: 'visualizacion',
  title: 'Visualización para Eventos & Publicidad',
  category: 'visualizacion',
  description:
    'Desarrollo de visualizaciones 3D, renders y propuestas espaciales para eventos, activaciones de marca, exhibiciones y campañas publicitarias, comunicando conceptos de forma atractiva antes de su ejecución.',
  image: '/images/visualizacion-eventos-publicidad/VansXFuelfest/R1 (2).jpg',
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
  slug: string
  title: string
  description: string
  image: string
  projectCategory: string
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Diseño de Arquitectura',
    slug: 'diseno-arquitectura',
    description:
      'Combinamos diseño e innovación para crear espacios icónicos e ideales. Aplicamos tecnologías de construcción y sistemas que optimizan la eficiencia energética.',
    image: '/images/casas/anteproyecto/render 01.jpg',
    projectCategory: 'diseno-de-viviendas',
  },
  {
    number: '02',
    title: 'Visualización 3D',
    slug: 'visualizacion-3d',
    description:
      'Damos vida a tus proyectos antes de que se construyan. Modelado 3D y visualización arquitectónica con representaciones realistas y detalladas.',
    image: '/images/visualizacion-eventos-publicidad/VansXFuelfest/R1 (2).jpg',
    projectCategory: 'visualizacion',
  },
  {
    number: '03',
    title: 'Diseño de Interiores',
    slug: 'diseno-interiores',
    description:
      'Convertimos tus espacios en entornos funcionales, elegantes y llenos de armonía, con mobiliario a medida y personalizado que refleja tu esencia.',
    image: '/images/diseno-interior-mobiliario/cocina/07.jpg',
    projectCategory: 'interiores',
  },
  {
    number: '04',
    title: 'Asesoría en Construcción',
    slug: 'asesoria-construccion',
    description:
      'Acompañamiento técnico integral, supervisión en obra y análisis constructivo para garantizar el mejor resultado en cada etapa del proyecto.',
    image: '/images/casas/casacunaco/init5.jpg',
    projectCategory: 'diseno-de-viviendas',
  },
  {
    number: '05',
    title: 'Remodelación',
    slug: 'remodelacion',
    description:
      'Renovamos y revalorizamos espacios existentes, optimizando su funcionalidad, confort y estética con soluciones a la medida de cada cliente.',
    image: '/images/remodelaciones/casaesmeralda/1.jpg',
    projectCategory: 'remodelaciones-de-viviendas',
  },
  {
    number: '06',
    title: 'Proyectos Comerciales',
    slug: 'proyectos-comerciales',
    description:
      'Diseñamos oficinas, locales y espacios comerciales que potencian la identidad de cada marca, alineados con sus objetivos estratégicos.',
    image: '/images/comerciales-oficinas/remodelacion/vista tipo 003 (3).jpg',
    projectCategory: 'comerciales',
  },
  {
    number: '07',
    title: 'Fabricación de muebles a medida',
    slug: 'fabricacion-muebles-medida',
    description:
      'Diseñamos y fabricamos mobiliario personalizado para cada espacio, combinando materiales, funcionalidad y detalles a medida que reflejan tu estilo.',
    image: '/images/diseno-interior-mobiliario/casalinderos/2.jpg',
    projectCategory: 'interiores',
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}

export const processSteps = [
  {
    number: '01',
    title: 'Reunión Inicial',
    description: 'Evaluacion, asesoria y contizacion de proyecto.',
  },
  {
    number: '02',
    title: 'Propuesta tecnica de proyecto',
    description: 'Evaluacion de presupuesto tecnico y carta gant.',
  },
  {
    number: '03',
    title: 'Servicio desarrollo tecnico',
    description: 'Preparamos planos, especificaciones y documentación para la ejecución.',
  },
  {
    number: '04',
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
  { value: 6, suffix: 'k', label: 'm² diseñados' },
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
