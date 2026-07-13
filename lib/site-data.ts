export type Project = {
  slug: string
  title: string
  category: string
  location: string
  year: string
  image: string
  span: 'tall' | 'wide' | 'regular'
  summary: string
  scope: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'casa-mirador',
    title: 'Casa Mirador',
    category: 'casas',
    location: 'Santiago, RM',
    year: '2024',
    image: '/images/project-casas.png',
    span: 'tall',
    summary:
      'Vivienda unifamiliar de un piso que dialoga con su entorno natural a través de grandes paños vidriados y revestimientos en madera nativa.',
    scope: ['Diseño arquitectónico', 'Visualización 3D', 'Desarrollo técnico'],
    gallery: ['/images/project-casas.png', '/images/project-living.png', '/images/project-bedroom.png'],
  },
  {
    slug: 'remodelacion-los-andes',
    title: 'Remodelación Los Andes',
    category: 'remodelacion',
    location: 'Colina, RM',
    year: '2024',
    image: '/images/project-remodelacion.png',
    span: 'regular',
    summary:
      'Renovación integral de una vivienda de dos pisos, incorporando volúmenes en madera y una nueva envolvente para optimizar la eficiencia energética.',
    scope: ['Remodelación', 'Diseño arquitectónico', 'Supervisión en obra'],
    gallery: ['/images/project-remodelacion.png', '/images/project-interior.png', '/images/project-living.png'],
  },
  {
    slug: 'cocina-mármol',
    title: 'Interior Marmol',
    category: 'interiores',
    location: 'Las Condes, RM',
    year: '2023',
    image: '/images/project-interior.png',
    span: 'wide',
    summary:
      'Diseño de interior y mobiliario a medida para una cocina y living integrados, combinando roble cálido, mármol y acabados en negro mate.',
    scope: ['Diseño de interior', 'Mobiliario a medida', 'Visualización 3D'],
    gallery: ['/images/project-interior.png', '/images/project-living.png', '/images/project-bedroom.png'],
  },
  {
    slug: 'complejo-etex',
    title: 'Complejo Comercial',
    category: 'comerciales',
    location: 'Santiago, RM',
    year: '2023',
    image: '/images/project-comercial.png',
    span: 'regular',
    summary:
      'Desarrollo de un complejo comercial e industrial con una fachada geométrica limpia, plaza de acceso y una identidad visual sólida.',
    scope: ['Arquitectura comercial', 'Visualización 3D', 'Desarrollo integral'],
    gallery: ['/images/project-comercial.png', '/images/project-oficina.png', '/images/project-arquitectura.png'],
  },
  {
    slug: 'oficinas-agustinas',
    title: 'Oficinas Agustinas',
    category: 'comerciales',
    location: 'Santiago Centro, RM',
    year: '2024',
    image: '/images/project-oficina.png',
    span: 'wide',
    summary:
      'Espacio de trabajo de planta libre que equilibra funcionalidad y calidez, con superficies en madera, luz natural y áreas colaborativas.',
    scope: ['Diseño de oficinas', 'Interiorismo', 'Mobiliario'],
    gallery: ['/images/project-oficina.png', '/images/project-living.png', '/images/project-interior.png'],
  },
  {
    slug: 'edificio-reflejo',
    title: 'Edificio Reflejo',
    category: 'casas',
    location: 'Providencia, RM',
    year: '2024',
    image: '/images/project-arquitectura.png',
    span: 'tall',
    summary:
      'Proyecto residencial de tres niveles con envolvente metálica y vidriada, concebido para maximizar las vistas y la relación con el paisaje.',
    scope: ['Diseño arquitectónico', 'Visualización 3D', 'Licitación'],
    gallery: ['/images/project-arquitectura.png', '/images/project-visualizacion.png', '/images/project-casas.png'],
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
    image: '/images/project-casas.png',
    total: 4,
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
    image: '/images/project-remodelacion.png',
    total: 4,
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
    image: '/images/project-comercial.png',
    total: 2,
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
    image: '/images/project-interior.png',
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
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
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
