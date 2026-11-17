import type { Content } from './en';

export const es: Content = {
  meta: {
    title: 'PulsarOS Bitten Fruit — La experiencia macOS, sin un Mac',
    description:
      'PulsarOS Bittenfruit reproduce la interfaz y la experiencia de macOS con funciones innovadoras nunca vistas en Linux. Gratis, de código abierto y hecho por la comunidad.',
  },

  a11y: {
    skip: 'Saltar al contenido principal',
  },

  nav: {
    home: 'Inicio de PulsarOS Bitten Fruit',
    download: 'Descargar ISO',
    language: 'Cambiar idioma',
    primary: 'Navegación principal',
    overview: 'Resumen',
    features: 'Funciones',
    editions: 'Ediciones',
    faq: 'Preguntas',
    appStore: 'App Store',
    help: 'Ayuda',
    bug: 'Informar de un fallo',
    rss: 'RSS',
    resources: 'Recursos',
  },

  hero: {
    titleHtml:
      'La verdadera<br />experiencia <span>Mac</span><span class="bg-gradient-to-r from-[#0071e3] via-[#0066cc] to-[#1d1d1f] text-transparent bg-clip-text">OS</span><br />en Linux',
    aria: 'Resumen principal',
    phrases: [
      'Sin reinventar la rueda',
      'Basado en necesidades reales de los usuarios',
      'No es otro GNOME/KDE con un tema encima',
      'Sin AI slop o hate - La IA como ayuda',
      'Con un ecosistema real, del móvil a Windows',
      'Con soporte directo de los desarrolladores',
    ],
    comingSoon: 'Próximamente',
    discord: 'Únete a Discord',
    madeBy: 'Hecho por la comunidad',
    trust: '+1.000 personas confían en PulsarOS',
    trustSource: '(datos de SourceForge)',
    avatarSuffix: 'avatar',
  },

  features: {
    aria: 'Funciones de Pulsar OS',
    heading: '¡Pulsar OS puede hacer más que otros sistemas!',
    subheading:
      'Descubre las funciones que convierten Bitten Fruit en la verdadera experiencia macOS en Linux.',
    items: [
      {
        title: 'Touch ID y Face ID',
        description: 'Touch ID y Face ID, con protección contra suplantación de identidad',
        media: '/videos/touch-face-id.webm',
        poster: '/videos/touch-face-id.webp',
        kind: 'video',
      },
      {
        title: 'Fondos Animados (Live)',
        description:
          'Fondos animados en el escritorio y en la pantalla de inicio de sesión. Compatibilidad con la pantalla de bloqueo en camino.',
        media: '/videos/live-wallpaper.webm',
        poster: '/videos/live-wallpaper.webp',
        kind: 'video',
      },
      {
        title: 'Liquid Glass',
        description:
          'Un diseño de material translúcido precioso que fluye por toda la interfaz. Profundidad, luz y refinamiento en cada superficie. Creado por nuestro colaborador Angelo, experto en UI.',
        media: '/videos/liquid-glass.webm',
        poster: '/videos/liquid-glass.webp',
        kind: 'video',
      },
      {
        title: 'Notch',
        description:
          'Lo que siempre quisiste del Notch de tu macOS y para lo que tenías que instalar mil complementos, ahora todo en uno.',
        media: '/videos/notch.webm',
        poster: '/videos/notch.webp',
        kind: 'video',
      },
      {
        title: 'Rodea para buscar',
        description:
          'Agita el cursor, rodea cualquier cosa de la pantalla y búscala en Google, pregúntale a Sayri o copia el texto con OCR.',
        media: '/videos/circle-to-search.webm',
        poster: '/videos/circle-to-search.webp',
        kind: 'video',
      },
      {
        title: 'Cortafuegos de PulsarOS',
        description:
          'PulsarOS incluye UFW por defecto con nuestra única interfaz de cortafuegos realmente fácil de configurar. Cuando una app intenta escuchar en un puerto, Pulsar te pregunta, así no tienes que pelearte con la configuración.',
        media: '/videos/firewall.webm',
        poster: '/videos/firewall.webp',
        kind: 'video',
      },
      {
        title: 'Menú global real',
        description:
          'Ninguna distro de Linux lo tiene en GNOME. Una verdadera barra de menú global en la parte superior de la pantalla, como en macOS, para todas las apps.',
        media: '/videos/global-menu.webm',
        poster: '/videos/global-menu.webp',
        kind: 'video',
      },
      {
        title: 'Pulsar VPN',
        description:
          'Olvídate del dolor de cabeza de Wireguard: Pulsar OS incluye una interfaz sencilla para Tailscale. Inicia sesión y listo.',
        media: 'https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png',
        poster: 'https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png',
        kind: 'image',
      },
      {
        title: 'Pulsar Windows',
        description:
          'Apps de Windows como apps nativas en el escritorio. Por debajo, se ejecutan en un Windows. No necesitas activar Windows para usarlo.',
        media: '/videos/pulsar-windows.webm',
        poster: '/videos/pulsar-windows.webp',
        kind: 'video',
      },
      {
        title: 'FileVault (cifrado)',
        description:
          'Cifra tu disco y protege tus datos: si te roban el ordenador, no se llevarán lo más importante, su contenido.',
        media: '/videos/encryption.webm',
        poster: '/videos/encryption.webp',
        kind: 'video',
      },
      {
        title: 'El mejor Spotlight',
        description:
          'Despídete de la asquerosa cutreza de spotlight de macOS27. El de PulsarOS hace mucho más que el de macOS',
        media: '/videos/spotlight.webm',
        poster: '/videos/spotlight.webp',
        kind: 'video',
      },
      {
        title: 'Restaurar sesión',
        description:
          'Reinicia o enciende y cada app, ventana y documento se abre solo. Sigue justo donde lo dejaste. Ninguna distro de Linux hace esto.',
        media: '/videos/session-restore.webm',
        poster: '/videos/session-restore.webp',
        kind: 'video',
      },
      {
        title: 'Asistente de IA Sayri',
        description:
          '¡La alternativa segura, más barata y funcional a Openclaw! Pruébala ahora.',
        media: '/videos/sayri.webm',
        poster: '/videos/sayri.webp',
        kind: 'video',
      },
      {
        title: 'Gestión de ventanas',
        description:
          'Vista dividida, gestos de Mission Control, pantalla completa en espacios de trabajo dinámicos y ajuste fluido de ventanas para usuarios avanzados.',
        media: '/videos/window-mode.webm',
        poster: '/videos/window-mode.webp',
        kind: 'video',
      },
      {
        title: 'Finder, reconstruido',
        description:
          'El gestor de archivos que ya conoces: navegación estilo Mac, vistas previas, etiquetas y Google Drive, Dropbox, OneDrive, Nextcloud y más de 50 servicios en la nube justo donde están tus archivos.',
        media: '/videos/nautilus-providers.webm',
        poster: '/videos/nautilus-providers.webp',
        kind: 'video',
      },
      {
        title: 'App Store',
        description:
          'Instala cualquier paquete (pkg, deb, aur, extensión de GNOME, Pulsar Store), pregunta a la IA por la seguridad de una app y cuál es la mejor que necesitas.',
        media: '/videos/app-store.webm',
        poster: '/videos/app-store.webp',
        kind: 'video',
      },
      {
        title: 'Time Machine',
        description:
          'Copias de todo tu sistema, guardadas donde quieras: un servidor de red, uno de los 50 servicios en la nube o un USB. Si tu ordenador se rompe, vuelve a ponerlo todo.',
        media: '/videos/time-machine.webm',
        poster: '/videos/time-machine.webp',
        kind: 'video',
      },
      {
        title: 'Recuperación integrada',
        description:
          'La única distribución de Linux con un sistema de recuperación aislado, diseñado para los casos más extremos, para que recuperes tu ordenador, tus datos y tu sistema sin perder archivos.',
        media: '/videos/recovery.webm',
        poster: '/videos/recovery.webp',
        kind: 'video',
      },
      {
        title: 'Remapeo de teclado',
        description:
          '¿Eres más del universo Mac o prefieres mantener los atajos de Linux y Windows? Sin problema: cambia todos los atajos de Mac a Linux y viceversa.',
        media: '/videos/remap-live-wallpaper.webm',
        poster: '/videos/remap-live-wallpaper.webp',
        kind: 'video',
      },
    ],
  },
  phone: {
    aria: 'Pulsar Phone',
    logoAlt: 'Logotipo de Pulsar Phone',
    eyebrow: 'Pulsar Phone',
    title: 'Haz más que el ecosistema Apple... ¡sin Apple!',
    body:
      'La app que lo puede todo. Envía archivos del móvil al PC y viceversa, monta el sistema de archivos de tu PC en el móvil, usa la terminal del PC desde el móvil, comparte portapapeles y notificaciones, ve y comparte pantallas, controla apps del PC como si fueran móviles, sincroniza con QR, VPN en el móvil con un clic y ejecuta apps del móvil de forma nativa en tu PC. Osea, todo en uno, y sin pagar nada.',
    items: [
      {
        title: 'Transferir archivos',
        description:
          'Envía archivos del móvil al PC y al revés sin cables ni software complicado.',
      },
      {
        title: 'Sistema de archivos del PC',
        description:
          'Monta el sistema de archivos de tu PC en el móvil y accede a todos los archivos directamente.',
      },
      {
        title: 'Acceso a la terminal',
        description:
          'Usa la terminal de tu PC desde el móvil, ejecuta comandos donde quieras y cuando quieras.',
      },
      {
        title: 'Portapapeles y notificaciones',
        description:
          'Comparte el portapapeles y las notificaciones entre el móvil y el PC sin esfuerzo.',
      },
      {
        title: 'Control de pantalla',
        description:
          'Ve y comparte pantallas, controla apps del PC como si fueran móviles a un clic.',
      },
    ],
  },

  windows: {
    aria: 'Pulsar Windows',
    logoAlt: 'Logotipo de Pulsar Windows',
    eyebrow: 'Pulsar Windows',
    title: 'Ejecuta apps de Windows como nativas, sin emulación',
    body:
      'Ejecuta un sistema Windows real con un clic mientras sigues usando apps de Windows en Pulsar OS: se ejecutan en Windows, pero aparecen en Pulsar OS como nativas, sin dolores de cabeza. Además, puedes usar Tiny11, un Windows 11 de código abierto (el script de compilación de la ISO es abierto) que consume menos recursos.',
    demoAria: 'Demo de Pulsar Windows',
  },

  benefits: {
    aria: 'Por qué Pulsar OS',
    heading: 'Y mucho más.',
    items: [
      {
        title: 'Cada vez mejor',
        description:
          'Gracias a nuestra increible comunidad, somos muchas personas atentas a diferentes cosas y por ello somos capaces de encontrar cosas que mejorar e implementarlas para que tú disfrutes de la comodidad.',
      },
      {
        title: 'Hecho para durar.',
        description:
          'Sin obsolescencia. Tu PC recibirá actualizaciones hasta que deje de poder funcionar.',
      },
      {
        title: 'Completamente gratis.',
        description:
          'Sin licencias, sin suscripciones, sin cuentas. Descárgalo, instálalo, úsalo. No cuesta nada, hoy y siempre.',
      },
      {
        title: 'La primera distro auditable de extremo a extremo',
        description:
          'Todo se procesa en un sistema llamado Github Actions, cuya configuración puedes revisar. La ISO se genera allí, no en nuestros ordenadores, así que somos la primera distro auditable de extremo a extremo.',
      },
      {
        title: 'Una nueva vida para tu viejo Mac o PC',
        description:
          'Ese Mac que junta polvo en un cajón puede sentirse nuevo otra vez: la misma comodidad, la misma familiaridad, años más de uso.',
      },
      {
        title: 'Gratis y cómodo.',
        description:
          'Sal del ecosistema de Apple sin renunciar a nada de comodidad. Todo está donde esperas, tal y como ya lo conoces.',
      },
    ],
  },

  cloud: {
    badge: 'Integración con Finder',
    title: 'Compatibilidad nativa con 55 servicios en la nube',
    subtitle:
      'Accede a OneDrive, Google Drive, iCloud, Dropbox, Nextcloud y Proton Drive directamente dentro de Finder, sin latencia de sincronización.',
    more: '+ 47 más vía Rclone',
  },

  editions: {
    aria: 'Ediciones disponibles, gestores de arranque y descargas',
    title: 'Elige tu edición',
    subtitle:
      'Bitten Fruit llega en dos ediciones base, Debian y Arch. Ambas incluyen dos variantes de arranque: GRUB y rEFInd. rEFInd es la más cercana a la experiencia Mac y la más cómoda de usar.',
    cards: [
      {
        name: 'Edición Debian',
        headline: 'Una base sólida y sencilla.',
        description:
          'Perfecta para ordenadores viejos o para quien valora la estabilidad por encima de todo. Incluye GRUB y rEFInd; la variante rEFInd es mucho más parecida a un Mac y más cómoda.',
        badge: 'Núcleo estable',
        bootVariants: ['GRUB (dispositivos BIOS)', 'rEFInd (dispositivos UEFI)'],
      },
      {
        name: 'Edición Arch',
        headline: 'Siempre al día.',
        description:
          'Los drivers y paquetes más recientes. La elección para hardware moderno. Incluye GRUB y rEFInd; la variante rEFInd es mucho más parecida a un Mac y más cómoda.',
        badge: 'Núcleo continuo',
        bootVariants: ['GRUB (dispositivos BIOS)', 'rEFInd (dispositivos UEFI)'],
      },
    ],
    bootTitle: '¿Qué variante de arranque necesito?',
    bootLeadHtml:
      'Las ediciones GRUB <strong>solo funcionan en ordenadores con BIOS</strong>. Si tu ordenador usa UEFI, usa la versión rEFInd.',
    explainers: [
      {
        title: '¿Qué es un procesador de 64 bits (AMD64)?',
        body:
          'Es el tipo de procesador que casi todos los PCs usan desde hace 15 años. «AMD64» es el nombre del diseño de 64 bits y funciona tanto con procesadores AMD como Intel. Si tu ordenador ejecuta Windows 8 o posterior, casi seguro que cumple.',
      },
      {
        title: '¿Qué es el BIOS?',
        body:
          'El BIOS es la forma antigua de arrancar los ordenadores, habitual en máquinas anteriores a 2012. Muestra un menú de solo texto al encender. Si tu PC tiene BIOS, descarga la edición GRUB.',
      },
      {
        title: '¿Qué es UEFI?',
        body:
          'UEFI es el sustituto moderno del BIOS. Todos los ordenadores vendidos en la última década lo usan. Arranca el sistema con un menú gráfico agradable y, con rEFInd, se siente muy cercano a un Mac. Si tu PC tiene UEFI, descarga la edición rEFInd.',
      },
      {
        title: '¿Cómo los distingo?',
        body:
          'Regla sencilla: si tu ordenador venía con Windows 8, 10 u 11, es UEFI → elige rEFInd. Solo PCs mucho más antiguos (Windows 7 o anterior, aproximadamente anteriores a 2012) usan BIOS → elige GRUB. ¿No lo tienes claro? Usa el comprobador de compatibilidad de abajo.',
      },
    ],
    compatTitle: '¿Funcionará en tu PC?',
    compatLead:
      'Escribe el modelo de tu PC y le preguntaremos a Google AI si puede ejecutar Pulsar OS y qué edición descargar.',
    compatPlaceholder: 'p. ej. Lenovo ThinkPad T480, HP Pavilion 15, Dell Inspiron 3520…',
    compatInputAria: 'Modelo de tu PC',
    compatButton: 'Comprobar compatibilidad',
    compatNote:
      'Abre una búsqueda en Google AI Mode con tu modelo, los requisitos de Pulsar OS y la edición que encaja.',
    compatQuery:
      '¿Puede mi ordenador ejecutar Pulsar OS Bitten Fruit? Modelo: {model}. Requisitos: procesador de 64 bits (AMD64), 4 GB de RAM, 20 GB de disco, USB de 8 GB. ¿Qué edición debo usar, Debian o Arch, y qué variante de arranque: GRUB si el PC usa BIOS heredado, o rEFInd si usa UEFI?',
    requirementsTitle: 'Lo que necesitas',
    requirements: [
      { id: 'arch', text: 'Un procesador de 64 bits (AMD64)' },
      { id: 'ram', text: '4 GB de RAM' },
      { id: 'disk', text: '20 GB de espacio libre en disco' },
      { id: 'usb', text: 'Un USB de 8 GB. Nada más.' },
    ],
    requirementsScanButton: 'Comprobar este PC',
    requirementsScanBusy: 'Comprobando…',
    requirementsScanOk: 'Todo bien',
    requirementsScanFail: 'Insuficiente',
    requirementsScanUnknown: 'No verificable',
    requirementsScanManual: 'Compruébalo tú',
    requirementsScanSummaryOk:
      'Parece compatible. Es una estimación: tu navegador no puede ver todo.',
    requirementsScanSummaryFail:
      'Probablemente no es compatible. Es una estimación basada en lo que informa tu navegador.',
    requirementsScanSummaryUnknown:
      'Tu navegador no puede confirmarlo todo. Revisa las filas marcadas arriba, o pruébalo en vivo.',
    requirementsScanLive:
      '¿Dudas? Ejecuta Pulsar OS en vivo desde el USB. No se instala ni se cambia nada.',
    requirementsScanDownload: 'Descargar',
    requirementsNoteHtml:
      'Eso es todo. ¿Y la mejor forma de saber cómo se siente? <strong>Pruébalo en tu propio PC</strong>: puedes ejecutar Pulsar OS en vivo desde el USB, sin instalar nada y sin cambiar lo que ya hay en tu ordenador.',
    usbTitle: 'Poner Pulsar OS en el USB',
    usbBodyHtml:
      'En Windows, usa <a class="text-secondary hover:underline" href="https://rufus.ie" target="_blank" rel="noopener">Rufus</a> y, cuando pregunte, elige el <strong>modo DD</strong>. En Linux, usa <strong>Discos de GNOME</strong> («Restaurar imagen de disco»). Recomendamos <strong>no usar Etcher</strong> ni <strong>Ventoy</strong> (aún es experimental con estas ISOs).',
    downloadsTitle: '¿Listo para descargar Pulsar OS?',
    downloadsBody:
      'Todas las ediciones y variantes de arranque están en nuestra página de descargas. Descarga la ISO que corresponde a tu PC y prueba Pulsar OS en vivo desde el USB.',
    downloadsCta: 'Ir a descargas',
    copied: 'Copiado ✓',
  },

  recovery: {
    aria: 'Recuperación',
    eyebrow: 'Recuperación',
    title: 'Nunca lo romperás.',
    lead:
      'Como un Mac, Pulsar OS incluye una partición de recuperación oculta. Pero fuimos más lejos: por grave que sea el desastre, siempre hay vuelta atrás. Cuanto más abajo caes, peor se pone, y aun así cada paso se recupera.',
    steps: [
      {
        title: 'Time Machine',
        description:
          'Tu sistema está respaldado en un disco, un USB, un NAS o cualquiera de los 55 servicios en la nube. Restaura todo con un clic. Ni siquiera parece que algo se haya roto.',
      },
      {
        title: 'Recuperación por Internet',
        description:
          '¿El sistema no arranca? Entra en Recuperación y la Recuperación por Internet descarga un entorno de recuperación nuevo desde nuestros servidores, al estilo Apple.',
      },
      {
        title: 'Recuperación por USB',
        description:
          '¿Sin red? Conecta un USB al entorno en vivo que contiene un squashfs y restaura desde él.',
      },
      {
        title: 'La ISO en vivo',
        description:
          '¿Borraste el gestor de arranque Y la partición de recuperación? La propia ISO que descargaste para instalar Pulsar OS contiene un entorno de recuperación completo. Arráncala y repara, restablece o vuelve atrás. Nunca te quedas fuera.',
      },
    ],
    bestCase: 'Mejor caso',
    worstCase: 'Peor caso',
    level: 'Nivel {n}',
    reassuranceTitle: '¡Que no cunda el panico!',
    reassuranceBodyHtml:
      'Y con <strong class="text-on-surface-default">Time Machine</strong>, que funciona de maravilla con un disco, un USB, un NAS o 55 servicios en la nube, tus datos nunca estuvieron en peligro.',
  },

  faq: {
    badge: '¿Preguntas? Respuestas.',
    title: 'Preguntas frecuentes',
    subtitle: 'Todo lo que necesitas saber sobre la edición PulsarOS Bitten Fruit.',
    items: [
      {
        question: '¿Por qué debería elegir Pulsar OS y no otras distros tipo Mac?',
        answer:
          'La mayoría de las distribuciones tipo Mac que existen ahora las desarrolla una sola persona y solo se ven bien a primera vista, pero luego no son realmente usables. Otras dicen ejecutar apps de Mac, pero están hechas enteramente con IA.',
      },
      {
        question: '¿Qué hace diferente a Pulsar OS de otras distribuciones de Linux?',
        answer:
          'Las distribuciones normales de Linux solo te dan una base y un entorno gráfico, pero muchas ni siquiera añaden funcionalidad y muy pocas innovan. Pulsar OS se centra en replicar el aspecto y, muy importante, el flujo de trabajo de los sistemas que la gente usa, para ofrecer lo bueno de Linux con lo bueno de, en este caso, macOS.',
      },
      {
        question: '¿Puedo instalarlo en mi MacBook?',
        answer:
          'Claro que puedes en los MacBook con chip Intel (los fabricados antes de 2020). Estamos trabajando en una nueva versión que incluye todos los drivers para que todo funcione perfectamente en tu Mac.',
      },
      {
        question: '¿Puedo ejecutar aplicaciones de macOS, Windows y Android?',
        answer:
          'Sí, por supuesto; incluimos todas las aplicaciones necesarias. Para apps de macOS tienes que ejecutar un macOS completo en una máquina virtual sin aceleración gráfica si no tienes una GPU AMD o NVIDIA antigua; no se puede arreglar, es una limitación de macOS. Trabajaremos pronto en el soporte de apps de macOS...',
      },
      {
        question: '¿Tiene App Store?',
        answer:
          'Sí, incluimos un programa cómodo que te permite instalar aplicaciones en varios formatos sin tocar código. También incluimos Pulsar Store, que permite instalar aplicaciones desarrolladas por gente que ama Pulsar OS, revisadas por inteligencia artificial.',
      },
    ],
    talkTitle: 'Únete y habla con la comunidad',
    talkBodyHtml:
      '¿Atascado con la instalación? ¿Alguna propuesta? ¿Solo quieres saludar? <strong class="text-on-surface-default">Nuestra comunidad es amable y estamos por aquí todos los días</strong>: cualquier duda que tengas, alguien responderá.',
    discordDesc: 'El sitio mas concurrido',
    telegramDesc: 'Preguntas rápidas y noticias.',
    matrixDesc: 'Abierto y ligero, para los curiosos.',
    githubDesc: 'Echa un vistazo a cómo está hecho todo.',
    auditBefore: '¿Prefieres comprobarlo tú mismo?',
    auditLink: 'Audita el código',
    auditAfter: '— cada línea es pública.',
  },

  community: {
    aria: 'Personas detrás de Pulsar OS',
    title: 'Las personas que hay detrás',
    bodyHtml:
      'Cuando contribuyes a Pulsar OS, sea como sea, se reconoce tu contribución. Somos un equipo que crece, ¡únete! <br />Somos una comunidad amigable, sin elitismo, sin política ni ideología, sin malos humos y ayudándonos juntos.',
    order: '(En orden de incorporación)',
  },

  resources: {
    title: 'Enlaces útiles',
    subtitle: 'Enlaces que probablemente necesites, aquí a mano',
    open: 'Abrir',
    items: [
      {
        title: 'App Store',
        description: 'Instala apps creadas por la comunidad de PulsarOS, revisadas por IA.',
      },
      {
        title: 'Ayuda y documentación',
        description: 'Guías de instalación, hardware, contribución y mucho más.',
      },
      {
        title: 'Kit de prensa',
        description:
          '¿Quieres escribir sobre Pulsar OS en internet? Aquí tienes recursos preparados para ello.',
      },
      {
        title: 'Informar de un fallo',
        description: '¿Algo se ha roto? Cuéntanoslo en BugMe y lo arreglaremos.',
      },
      {
        title: 'Feed RSS',
        description: 'Suscríbete y recibe cada versión y noticia en tu lector.',
      },
    ],
  },

  footer: {
    aria: 'Navegación del pie de página',
    editionLabel: 'Edición Bitten Fruit',
    columns: [
      {
        title: 'Explora PulsarOS',
        links: [
          'Edición Bitten Fruit',
          'Restaurar sesión',
          'Asistente de IA Sayri',
          'Búsqueda Spotlight',
          'Centro de control',
        ],
      },
      {
        title: 'Virtualización',
        links: [
          'MacBoat (OpenCore)',
          'WinBoat App Runtime',
          'DroidTux Mobile',
          'Sincronización GSConnect',
          'Passthrough nativo de KVM',
        ],
      },
      {
        title: 'Ecosistema y apps',
        links: [
          'App Store (Flathub y AUR)',
          '55 servicios en la nube',
          'Fondos dinámicos',
          'Remapeador de teclas de macOS',
        ],
      },
      {
        title: 'Ediciones y descargas',
        links: ['Debian Stable Core', 'Arch Rolling Core', 'Descargar ISO de Bitten Fruit', 'Notas de versión'],
      },
      {
        title: 'Comunidad y valores',
        links: [
          'Repositorio de GitHub',
          'Informar de un fallo',
          'Feed RSS',
          'Código abierto (MIT-INLED)',
          'Arquitectura que prioriza la privacidad',
          'Compatibilidad de hardware',
        ],
      },
    ],
    footnotes: [
      '1. PulsarOS Bitten Fruit es un proyecto independiente de distribución Linux de código abierto. macOS, Mac, OpenCore y los elementos de diseño del logotipo de Apple son marcas registradas de Apple Inc. en EE. UU. y otros países y regiones.',
      '2. ¡La máquina virtual de macOS no tiene aceleración gráfica!',
    ],
    moreWaysHtml:
      'Más formas de conseguir PulsarOS: <a href="{downloads}" target="_blank" rel="noopener" class="text-primary hover:underline font-normal">descarga la ISO de Bittenfruit</a> o <a href="{github}" target="_blank" rel="noopener" class="text-primary hover:underline font-normal">contribuye en GitHub</a>.',
    creditsHtml:
      'Primera web desarrollada por nuestro gran colaborador <a href="https://www.victorrosario.dev/" target="_blank" rel="noopener" class="hover:text-on-surface-default hover:underline">Victor Rosario (diseño principal)</a>. Nuevos cambios de <a href="https://jaimegh.com" target="_blank" rel="noopener" class="hover:text-on-surface-default hover:underline">JaimeGH</a>',
    legal: {
      github: 'GitHub',
      releases: 'Versiones',
      bug: 'Informar de un fallo',
      rss: 'Feed RSS',
      license: 'Licencia MIT-INLED',
    },
  },

  banner: {
    text: 'Estamos preparando la mayor actualización de Pulsar OS: la versión 2.0',
    link: 'Únete a Discord para estar al día →',
  },

  popup: {
    close: 'Cerrar ventana',
    comingSoon: 'Próximamente',
    body: 'El mayor cambio en Pulsar OS. Nadie hace lo que hacemos nosotros. Ninguna distro ha logrado esto. Estate atento!.',
    discord: 'Únete a Discord',
  },

  floating: {
    aria: 'Acciones rápidas',
    brand: 'PulsarOS Bittenfruit',
    scrollTop: 'Volver arriba',
    scrollAria: 'Volver al inicio de la página',
  },

  lightbox: {
    maximize: 'Maximizar {name}',
    close: 'Cerrar vídeo',
  },
} as Content;
