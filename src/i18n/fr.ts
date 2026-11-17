import type { Content } from './en';

export const fr: Content = {
  meta: {
    title: 'PulsarOS Bitten Fruit — L’expérience macOS, sans Mac',
    description:
      'PulsarOS Bittenfruit reproduit l’interface et l’expérience de macOS avec des fonctions inédites sous Linux. Gratuit, open source et fait par la communauté.',
  },

  a11y: {
    skip: 'Aller au contenu principal',
  },

  nav: {
    home: 'Accueil de PulsarOS Bitten Fruit',
    download: 'Télécharger l’ISO',
    language: 'Changer de langue',
    primary: 'Navigation principale',
    overview: 'Aperçu',
    features: 'Fonctionnalités',
    editions: 'Éditions',
    faq: 'Questions',
    appStore: 'App Store',
    help: 'Aide',
    bug: 'Signaler un bug',
    rss: 'RSS',
    resources: 'Ressources',
  },

  hero: {
    titleHtml:
      'La véritable<br />expérience <span>Mac</span><span class="bg-gradient-to-r from-[#0071e3] via-[#0066cc] to-[#1d1d1f] text-transparent bg-clip-text">OS</span><br />sous Linux',
    aria: 'Aperçu principal',
    phrases: [
      'Sans réinventer la roue',
      'Fondé sur les besoins réels des utilisateurs',
      'Pas un énième GNOME/KDE avec un thème par-dessus',
      'Sans AI slop ni haine — l’IA comme un outil',
      'Avec un véritable écosystème, du mobile à Windows',
      'Avec le support direct des développeurs',
    ],
    comingSoon: 'Bientôt disponible',
    discord: 'Rejoindre Discord',
    madeBy: 'Fait par la communauté',
    trust: '+1 000 personnes font confiance à PulsarOS',
    trustSource: '(données SourceForge)',
    avatarSuffix: 'avatar',
  },

  features: {
    aria: 'Fonctionnalités de Pulsar OS',
    heading: 'Pulsar OS peut faire plus que les autres systèmes !',
    subheading:
      'Découvrez les fonctions qui font de Bitten Fruit la véritable expérience macOS sous Linux.',
    items: [
      {
        title: 'Touch ID et Face ID',
        description: 'Touch ID et Face ID, avec protection contre l’usurpation d’identité',
        media: '/videos/touch-face-id.webm',
        poster: '/videos/touch-face-id.webp',
        kind: 'video',
      },
      {
        title: 'Fonds d’écran animés (Live)',
        description:
          'Fonds d’écran animés sur le bureau et sur l’écran de connexion. La compatibilité avec l’écran verrouillé arrive.',
        media: '/videos/live-wallpaper.webm',
        poster: '/videos/live-wallpaper.webp',
        kind: 'video',
      },
      {
        title: 'Liquid Glass',
        description:
          'Un superbe design de matière translucide qui traverse toute l’interface. Profondeur, lumière et raffinement sur chaque surface. Créé par notre collaborateur Angelo, expert en UI.',
        media: '/videos/liquid-glass.webm',
        poster: '/videos/liquid-glass.webp',
        kind: 'video',
      },
      {
        title: 'Notch',
        description:
          'Ce que vous avez toujours voulu du notch de macOS, et pour quoi il fallait installer mille extensions : désormais tout-en-un.',
        media: '/videos/notch.webm',
        poster: '/videos/notch.webp',
        kind: 'video',
      },
      {
        title: 'Encercler pour rechercher',
        description:
          'Secouez le curseur, encerclez n’importe quoi à l’écran et cherchez-le sur Google, demandez à Sayri ou copiez le texte par OCR.',
        media: '/videos/circle-to-search.webm',
        poster: '/videos/circle-to-search.webp',
        kind: 'video',
      },
      {
        title: 'Pare-feu de PulsarOS',
        description:
          'PulsarOS inclut UFW par défaut avec notre interface de pare-feu unique, vraiment simple à configurer. Quand une appli veut écouter sur un port, Pulsar vous demande : plus besoin de vous battre avec la configuration.',
        media: '/videos/firewall.webm',
        poster: '/videos/firewall.webp',
        kind: 'video',
      },
      {
        title: 'Vrai menu global',
        description:
          'Aucune distro Linux ne l’a sous GNOME. Une véritable barre de menus globale en haut de l’écran, comme sur macOS, pour toutes les applis.',
        media: '/videos/global-menu.webm',
        poster: '/videos/global-menu.webp',
        kind: 'video',
      },
      {
        title: 'Pulsar VPN',
        description:
          'Oubliez le casse-tête Wireguard : Pulsar OS inclut une interface simple pour Tailscale. Connectez-vous, c’est prêt.',
        media: 'https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png',
        poster: 'https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png',
        kind: 'image',
      },
      {
        title: 'Pulsar Windows',
        description:
          'Des applis Windows comme des applis natives sur le bureau. En dessous, elles tournent dans un Windows. Pas besoin d’activer Windows pour l’utiliser.',
        media: '/videos/pulsar-windows.webm',
        poster: '/videos/pulsar-windows.webp',
        kind: 'video',
      },
      {
        title: 'FileVault (chiffrement)',
        description:
          'Chiffrez votre disque et protégez vos données : si on vous vole l’ordinateur, on ne repartira pas avec le plus important, son contenu.',
        media: '/videos/encryption.webm',
        poster: '/videos/encryption.webp',
        kind: 'video',
      },
      {
        title: 'Le meilleur Spotlight',
        description:
          'Dites adieu à la laideur crasse du Spotlight de macOS 27. Celui de PulsarOS fait bien plus que celui de macOS.',
        media: '/videos/spotlight.webm',
        poster: '/videos/spotlight.webp',
        kind: 'video',
      },
      {
        title: 'Restauration de session',
        description:
          'Redémarrez ou allumez, et chaque appli, fenêtre et document se rouvre tout seul. Vous reprenez exactement là où vous en étiez. Aucune distro Linux ne fait ça.',
        media: '/videos/session-restore.webm',
        poster: '/videos/session-restore.webp',
        kind: 'video',
      },
      {
        title: 'Assistant IA Sayri',
        description:
          'L’alternative sûre, moins chère et fonctionnelle à Openclaw ! Essayez-la dès maintenant.',
        media: '/videos/sayri.webm',
        poster: '/videos/sayri.webp',
        kind: 'video',
      },
      {
        title: 'Gestion des fenêtres',
        description:
          'Affichage divisé, gestes Mission Control, plein écran dans des espaces de travail dynamiques et ajustement fluide des fenêtres pour les utilisateurs avancés.',
        media: '/videos/window-mode.webm',
        poster: '/videos/window-mode.webp',
        kind: 'video',
      },
      {
        title: 'Finder, reconstruit',
        description:
          'Le gestionnaire de fichiers que vous connaissez : navigation façon Mac, aperçus, étiquettes et Google Drive, Dropbox, OneDrive, Nextcloud et plus de 50 services cloud, là où sont vos fichiers.',
        media: '/videos/nautilus-providers.webm',
        poster: '/videos/nautilus-providers.webp',
        kind: 'video',
      },
      {
        title: 'App Store',
        description:
          'Installez n’importe quel paquet (pkg, deb, aur, extension GNOME, Pulsar Store), demandez à l’IA si une appli est sûre et laquelle est la meilleure pour vous.',
        media: '/videos/app-store.webm',
        poster: '/videos/app-store.webp',
        kind: 'video',
      },
      {
        title: 'Time Machine',
        description:
          'Des sauvegardes de tout votre système, stockées où vous voulez : un serveur réseau, l’un des 50 services cloud ou une clé USB. Si votre ordinateur casse, remettez tout en place.',
        media: '/videos/time-machine.webm',
        poster: '/videos/time-machine.webp',
        kind: 'video',
      },
      {
        title: 'Récupération intégrée',
        description:
          'La seule distribution Linux avec un système de récupération isolé, conçu pour les cas les plus extrêmes, pour récupérer votre ordinateur, vos données et votre système sans perdre de fichiers.',
        media: '/videos/recovery.webm',
        poster: '/videos/recovery.webp',
        kind: 'video',
      },
      {
        title: 'Remappage du clavier',
        description:
          'Plutôt univers Mac ou vous préférez garder les raccourcis Linux et Windows ? Aucun problème : passez tous les raccourcis de Mac à Linux, et inversement.',
        media: '/videos/remap-live-wallpaper.webm',
        poster: '/videos/remap-live-wallpaper.webp',
        kind: 'video',
      },
    ],
  },

  phone: {
    aria: 'Pulsar Phone',
    logoAlt: 'Logo Pulsar Phone',
    eyebrow: 'Pulsar Phone',
    title: 'Faites plus que l’écosystème Apple… sans Apple !',
    body:
      'L’appli qui peut tout faire. Envoyez des fichiers du mobile au PC et inversement, montez le système de fichiers de votre PC sur le mobile, utilisez le terminal du PC depuis le mobile, partagez presse-papiers et notifications, voyez et partagez des écrans, contrôlez les applis du PC comme si c’étaient des applis mobiles, synchronisez par QR, VPN sur le mobile en un clic et exécutez les applis du mobile nativement sur votre PC. Bref, tout-en-un, et sans rien payer.',
    items: [
      {
        title: 'Transférer des fichiers',
        description:
          'Envoyez des fichiers du mobile au PC et inversement, sans câble ni logiciel compliqué.',
      },
      {
        title: 'Système de fichiers du PC',
        description:
          'Montez le système de fichiers de votre PC sur le mobile et accédez directement à tous vos fichiers.',
      },
      {
        title: 'Accès au terminal',
        description:
          'Utilisez le terminal de votre PC depuis le mobile, exécutez des commandes où et quand vous voulez.',
      },
      {
        title: 'Presse-papiers et notifications',
        description:
          'Partagez le presse-papiers et les notifications entre le mobile et le PC sans effort.',
      },
      {
        title: 'Contrôle d’écran',
        description:
          'Voyez et partagez des écrans, contrôlez les applis du PC comme des applis mobiles, en un clic.',
      },
    ],
  },

  windows: {
    aria: 'Pulsar Windows',
    logoAlt: 'Logo Pulsar Windows',
    eyebrow: 'Pulsar Windows',
    title: 'Exécutez les applis Windows comme des natives, sans émulation',
    body:
      'Lancez un vrai système Windows en un clic tout en continuant à utiliser les applis Windows dans Pulsar OS : elles tournent dans Windows, mais apparaissent dans Pulsar OS comme des natives, sans prise de tête. Vous pouvez aussi utiliser Tiny11, un Windows 11 open source (le script de compilation de l’ISO est ouvert) qui consomme moins de ressources.',
    demoAria: 'Démo de Pulsar Windows',
  },

  benefits: {
    aria: 'Pourquoi Pulsar OS',
    heading: 'Et bien plus encore.',
    items: [
      {
        title: 'De mieux en mieux',
        description:
          'Grâce à notre incroyable communauté, nous sommes nombreuses et nombreux à être attentifs à des choses différentes : nous pouvons donc repérer ce qui doit être amélioré et le mettre en place pour que vous profitiez du confort.',
      },
      {
        title: 'Fait pour durer.',
        description:
          'Sans obsolescence. Votre PC recevra des mises à jour jusqu’à ce qu’il ne puisse plus fonctionner.',
      },
      {
        title: 'Entièrement gratuit.',
        description:
          'Sans licence, sans abonnement, sans compte. Téléchargez, installez, utilisez. Ça ne coûte rien, aujourd’hui et toujours.',
      },
      {
        title: 'La première distro auditable de bout en bout',
        description:
          'Tout est traité dans un système appelé GitHub Actions, dont vous pouvez consulter la configuration. L’ISO y est générée, pas sur nos ordinateurs : nous sommes donc la première distro auditable de bout en bout.',
      },
      {
        title: 'Une nouvelle vie pour votre vieux Mac ou PC',
        description:
          'Ce Mac qui prend la poussière dans un tiroir peut se sentir neuf : le même confort, les mêmes repères, des années d’utilisation en plus.',
      },
      {
        title: 'Gratuit et confortable.',
        description:
          'Sortez de l’écosystème Apple sans rien perdre du confort. Tout est là où vous l’attendez, exactement comme vous le connaissez.',
      },
    ],
  },

  cloud: {
    badge: 'Intégration à Finder',
    title: 'Compatibilité native avec 55 services cloud',
    subtitle:
      'Accédez à OneDrive, Google Drive, iCloud, Dropbox, Nextcloud et Proton Drive directement dans Finder, sans latence de synchronisation.',
    more: '+ 47 autres via Rclone',
  },

  editions: {
    aria: 'Éditions disponibles, gestionnaires d’amorçage et téléchargements',
    title: 'Choisissez votre édition',
    subtitle:
      'Bitten Fruit existe en deux éditions de base, Debian et Arch. Toutes deux incluent deux variantes d’amorçage : GRUB et rEFInd. rEFInd est la plus proche de l’expérience Mac et la plus agréable à utiliser.',
    cards: [
      {
        name: 'Édition Debian',
        headline: 'Une base solide et simple.',
        description:
          'Parfaite pour les vieux ordinateurs ou pour qui privilégie la stabilité avant tout. Inclut GRUB et rEFInd ; la variante rEFInd ressemble bien plus à un Mac et est plus agréable.',
        badge: 'Noyau stable',
        bootVariants: ['GRUB (appareils BIOS)', 'rEFInd (appareils UEFI)'],
      },
      {
        name: 'Édition Arch',
        headline: 'Toujours à jour.',
        description:
          'Les pilotes et paquets les plus récents. Le choix pour le matériel moderne. Inclut GRUB et rEFInd ; la variante rEFInd ressemble bien plus à un Mac et est plus agréable.',
        badge: 'Noyau continu',
        bootVariants: ['GRUB (appareils BIOS)', 'rEFInd (appareils UEFI)'],
      },
    ],
    bootTitle: 'Quelle variante d’amorçage me faut-il ?',
    bootLeadHtml:
      'Les éditions GRUB <strong>ne fonctionnent que sur les ordinateurs à BIOS</strong>. Si votre ordinateur utilise l’UEFI, prenez la version rEFInd.',
    explainers: [
      {
        title: 'Qu’est-ce qu’un processeur 64 bits (AMD64) ?',
        body:
          'C’est le type de processeur que presque tous les PC utilisent depuis 15 ans. « AMD64 » est le nom de la conception 64 bits et fonctionne aussi bien avec les processeurs AMD qu’Intel. Si votre ordinateur fait tourner Windows 8 ou plus récent, c’est presque sûrement le cas.',
      },
      {
        title: 'Qu’est-ce que le BIOS ?',
        body:
          'Le BIOS est l’ancienne façon de démarrer les ordinateurs, courante sur les machines d’avant 2012. Il affiche un menu en mode texte à l’allumage. Si votre PC a un BIOS, téléchargez l’édition GRUB.',
      },
      {
        title: 'Qu’est-ce que l’UEFI ?',
        body:
          'L’UEFI est le remplaçant moderne du BIOS. Tous les ordinateurs vendus ces dix dernières années l’utilisent. Il démarre le système avec un joli menu graphique et, avec rEFInd, on se croirait presque sur un Mac. Si votre PC a l’UEFI, téléchargez l’édition rEFInd.',
      },
      {
        title: 'Comment les distinguer ?',
        body:
          'Règle simple : si votre ordinateur est arrivé avec Windows 8, 10 ou 11, c’est de l’UEFI → choisissez rEFInd. Seuls les PC bien plus anciens (Windows 7 ou antérieur, grosso modo avant 2012) utilisent un BIOS → choisissez GRUB. Vous hésitez ? Utilisez le vérificateur de compatibilité ci-dessous.',
      },
    ],
    compatTitle: 'Ça marchera sur votre PC ?',
    compatLead:
      'Écrivez le modèle de votre PC et nous demanderons à Google AI s’il peut faire tourner Pulsar OS et quelle édition télécharger.',
    compatPlaceholder: 'ex. Lenovo ThinkPad T480, HP Pavilion 15, Dell Inspiron 3520…',
    compatInputAria: 'Modèle de votre PC',
    compatButton: 'Vérifier la compatibilité',
    compatNote:
      'Ouvre une recherche dans Google AI Mode avec votre modèle, les prérequis de Pulsar OS et l’édition qui convient.',
    compatQuery:
      'Mon ordinateur peut-il faire tourner Pulsar OS Bitten Fruit ? Modèle : {model}. Prérequis : processeur 64 bits (AMD64), 4 Go de RAM, 20 Go de disque, clé USB de 8 Go. Quelle édition dois-je utiliser, Debian ou Arch, et quelle variante d’amorçage : GRUB si le PC utilise un BIOS hérité, ou rEFInd s’il utilise l’UEFI ?',
    requirementsTitle: 'Ce qu’il vous faut',
    requirements: [
      { id: 'arch', text: 'Un processeur 64 bits (AMD64)' },
      { id: 'ram', text: '4 Go de RAM' },
      { id: 'disk', text: '20 Go d’espace disque libre' },
      { id: 'usb', text: 'Une clé USB de 8 Go. Rien de plus.' },
    ],
    requirementsScanButton: 'Vérifier ce PC',
    requirementsScanBusy: 'Vérification…',
    requirementsScanOk: 'Tout va bien',
    requirementsScanFail: 'Insuffisant',
    requirementsScanUnknown: 'Non vérifiable',
    requirementsScanManual: 'À vérifier',
    requirementsScanSummaryOk:
      'Semble compatible. C’est une estimation : votre navigateur ne voit pas tout.',
    requirementsScanSummaryFail:
      'Probablement incompatible. C’est une estimation basée sur ce que signale votre navigateur.',
    requirementsScanSummaryUnknown:
      'Votre navigateur ne peut pas tout confirmer. Vérifiez les lignes signalées ci-dessus, ou essayez en live.',
    requirementsScanLive:
      'Un doute ? Lancez Pulsar OS en live depuis la clé USB. Rien n’est installé ni modifié.',
    requirementsScanDownload: 'Télécharger',
    requirementsNoteHtml:
      'C’est tout. Et la meilleure façon de voir ce que ça donne ? <strong>Essayez-le sur votre propre PC</strong> : vous pouvez lancer Pulsar OS en direct depuis la clé USB, sans rien installer et sans changer ce qu’il y a déjà sur votre ordinateur.',
    usbTitle: 'Mettre Pulsar OS sur la clé USB',
    usbBodyHtml:
      'Sous Windows, utilisez <a class="text-secondary hover:underline" href="https://rufus.ie" target="_blank" rel="noopener">Rufus</a> et, quand il le demande, choisissez le <strong>mode DD</strong>. Sous Linux, utilisez <strong>Disques de GNOME</strong> (« Restaurer une image disque »). Nous recommandons de <strong>ne pas utiliser Etcher</strong> ni <strong>Ventoy</strong> (encore expérimental avec ces ISO).',
    downloadsTitle: 'Prêt à télécharger Pulsar OS ?',
    downloadsBody:
      'Toutes les éditions et variantes d’amorçage sont sur notre page de téléchargements. Téléchargez l’ISO qui correspond à votre PC et essayez Pulsar OS en direct depuis la clé USB.',
    downloadsCta: 'Aller aux téléchargements',
    copied: 'Copié ✓',
  },

  recovery: {
    aria: 'Récupération',
    eyebrow: 'Récupération',
    title: 'Vous ne le casserez jamais.',
    lead:
      'Comme un Mac, Pulsar OS inclut une partition de récupération cachée. Mais nous sommes allés plus loin : aussi grave soit le désastre, il y a toujours un retour possible. Plus vous tombez bas, plus ça se complique, et pourtant chaque étape se récupère.',
    steps: [
      {
        title: 'Time Machine',
        description:
          'Votre système est sauvegardé sur un disque, une clé USB, un NAS ou l’un des 55 services cloud. Restaurez tout en un clic. On dirait même que rien ne s’est cassé.',
      },
      {
        title: 'Récupération par Internet',
        description:
          'Le système ne démarre pas ? Entrez dans Récupération et la Récupération par Internet télécharge un nouvel environnement de récupération depuis nos serveurs, à la manière d’Apple.',
      },
      {
        title: 'Récupération par USB',
        description:
          'Pas de réseau ? Branchez une clé USB à l’environnement live qui contient un squashfs et restaurez depuis celle-ci.',
      },
      {
        title: 'L’ISO live',
        description:
          'Vous avez effacé le gestionnaire d’amorçage ET la partition de récupération ? L’ISO que vous avez téléchargée pour installer Pulsar OS contient un environnement de récupération complet. Démarrez-la et réparez, réinitialisez ou revenez en arrière. Vous n’êtes jamais bloqué.',
      },
    ],
    bestCase: 'Meilleur cas',
    worstCase: 'Pire cas',
    level: 'Niveau {n}',
    reassuranceTitle: 'Pas de panique !',
    reassuranceBodyHtml:
      'Et avec <strong class="text-on-surface-default">Time Machine</strong>, qui fonctionne à merveille avec un disque, une clé USB, un NAS ou 55 services cloud, vos données n’ont jamais été en danger.',
  },

  faq: {
    badge: 'Des questions ? Des réponses.',
    title: 'Questions fréquentes',
    subtitle: 'Tout ce qu’il faut savoir sur l’édition PulsarOS Bitten Fruit.',
    items: [
      {
        question: 'Pourquoi choisir Pulsar OS plutôt qu’une autre distro façon Mac ?',
        answer:
          'La plupart des distributions façon Mac existantes sont développées par une seule personne et ne sont belles qu’en apparence : à l’usage, elles ne sont pas vraiment utilisables. D’autres prétendent faire tourner des applis Mac, mais sont entièrement faites avec de l’IA.',
      },
      {
        question: 'Qu’est-ce qui distingue Pulsar OS des autres distributions Linux ?',
        answer:
          'Les distributions Linux classiques ne vous donnent qu’une base et un environnement graphique, mais beaucoup n’ajoutent même pas de fonctionnalités et très peu innovent. Pulsar OS cherche à reproduire l’apparence et, surtout, la façon de travailler des systèmes que les gens utilisent, pour offrir le meilleur de Linux avec le meilleur de, ici, macOS.',
      },
      {
        question: 'Puis-je l’installer sur mon MacBook ?',
        answer:
          'Bien sûr, sur les MacBook à processeur Intel (fabriqués avant 2020). Nous travaillons sur une nouvelle version qui inclut tous les pilotes pour que tout fonctionne parfaitement sur votre Mac.',
      },
      {
        question: 'Puis-je exécuter des applications macOS, Windows et Android ?',
        answer:
          'Oui, bien sûr ; nous incluons toutes les applications nécessaires. Pour les applis macOS, il faut faire tourner un macOS complet dans une machine virtuelle sans accélération graphique si vous n’avez pas d’ancien GPU AMD ou NVIDIA ; ce n’est pas réparable, c’est une limite de macOS. Nous travaillerons bientôt sur la prise en charge des applis macOS…',
      },
      {
        question: 'A-t-il un App Store ?',
        answer:
          'Oui, nous incluons un programme pratique qui permet d’installer des applications dans plusieurs formats sans toucher au code. Nous incluons aussi Pulsar Store, qui permet d’installer des applications développées par des gens qui aiment Pulsar OS, vérifiées par intelligence artificielle.',
      },
    ],
    talkTitle: 'Rejoignez la communauté et discutez',
    talkBodyHtml:
      'Bloqué à l’installation ? Une idée ? Vous voulez juste dire bonjour ? <strong class="text-on-surface-default">Notre communauté est bienveillante et nous sommes là tous les jours</strong> : quelle que soit votre question, quelqu’un répondra.',
    discordDesc: 'L’endroit le plus animé',
    telegramDesc: 'Questions rapides et actualités.',
    matrixDesc: 'Ouvert et léger, pour les curieux.',
    githubDesc: 'Voyez comment tout est fabriqué.',
    auditBefore: 'Vous préférez vérifier par vous-même ?',
    auditLink: 'Auditez le code',
    auditAfter: '— chaque ligne est publique.',
  },

  community: {
    aria: 'Les personnes derrière Pulsar OS',
    title: 'Les personnes derrière',
    bodyHtml:
      'Quand vous contribuez à Pulsar OS, de quelque manière que ce soit, votre contribution est reconnue. Nous sommes une équipe qui grandit, rejoignez-nous ! <br />Nous sommes une communauté sympathique, sans élitisme, sans politique ni idéologie, sans mauvaise humeur, et nous nous entraidons.',
    order: '(Par ordre d’arrivée)',
  },

  resources: {
    title: 'Liens utiles',
    subtitle: 'Les liens dont vous aurez probablement besoin, ici à portée de main',
    open: 'Ouvrir',
    items: [
      {
        title: 'App Store',
        description: 'Installez des applis créées par la communauté PulsarOS, vérifiées par IA.',
      },
      {
        title: 'Aide et documentation',
        description: 'Guides d’installation, matériel, contribution et bien plus.',
      },
      {
        title: 'Kit presse',
        description:
          'Vous voulez écrire sur Pulsar OS sur internet ? Voici des ressources prévues pour ça.',
      },
      {
        title: 'Signaler un bug',
        description: 'Quelque chose est cassé ? Dites-le-nous sur BugMe et nous le réparerons.',
      },
      {
        title: 'Flux RSS',
        description: 'Abonnez-vous et recevez chaque version et actualité dans votre lecteur.',
      },
    ],
  },

  footer: {
    aria: 'Navigation du pied de page',
    editionLabel: 'Édition Bitten Fruit',
    columns: [
      {
        title: 'Explorer PulsarOS',
        links: [
          'Édition Bitten Fruit',
          'Restauration de session',
          'Assistant IA Sayri',
          'Recherche Spotlight',
          'Centre de contrôle',
        ],
      },
      {
        title: 'Virtualisation',
        links: [
          'MacBoat (OpenCore)',
          'WinBoat App Runtime',
          'DroidTux Mobile',
          'Synchronisation GSConnect',
          'Passthrough natif KVM',
        ],
      },
      {
        title: 'Écosystème et applis',
        links: [
          'App Store (Flathub et AUR)',
          '55 services cloud',
          'Fonds d’écran dynamiques',
          'Remappeur de touches macOS',
        ],
      },
      {
        title: 'Éditions et téléchargements',
        links: [
          'Debian Stable Core',
          'Arch Rolling Core',
          'Télécharger l’ISO de Bitten Fruit',
          'Notes de version',
        ],
      },
      {
        title: 'Communauté et valeurs',
        links: [
          'Dépôt GitHub',
          'Signaler un bug',
          'Flux RSS',
          'Open source (MIT-INLED)',
          'Architecture respectueuse de la vie privée',
          'Compatibilité matérielle',
        ],
      },
    ],
    footnotes: [
      '1. PulsarOS Bitten Fruit est un projet indépendant de distribution Linux open source. macOS, Mac, OpenCore et les éléments de design du logo Apple sont des marques déposées d’Apple Inc. aux États-Unis et dans d’autres pays et régions.',
      '2. La machine virtuelle macOS n’a pas d’accélération graphique !',
    ],
    moreWaysHtml:
      'Autres façons d’obtenir PulsarOS : <a href="{downloads}" target="_blank" rel="noopener" class="text-primary hover:underline font-normal">téléchargez l’ISO de Bittenfruit</a> ou <a href="{github}" target="_blank" rel="noopener" class="text-primary hover:underline font-normal">contribuez sur GitHub</a>.',
    creditsHtml:
      'Premier site développé par notre formidable collaborateur <a href="https://www.victorrosario.dev/" target="_blank" rel="noopener" class="hover:text-on-surface-default hover:underline">Victor Rosario (design principal)</a>. Nouveaux changements par <a href="https://jaimegh.com" target="_blank" rel="noopener" class="hover:text-on-surface-default hover:underline">JaimeGH</a>',
    legal: {
      github: 'GitHub',
      releases: 'Versions',
      bug: 'Signaler un bug',
      rss: 'Flux RSS',
      license: 'Licence MIT-INLED',
    },
  },

  banner: {
    text: 'Nous préparons la plus grande mise à jour de Pulsar OS : la version 2.0',
    link: 'Rejoignez Discord pour rester informé →',
  },

  popup: {
    close: 'Fermer la fenêtre',
    comingSoon: 'Bientôt disponible',
    body: 'Le plus grand changement de Pulsar OS. Personne ne fait ce que nous faisons. Aucune distro n’a réussi ça. Restez à l’écoute !',
    discord: 'Rejoindre Discord',
  },

  floating: {
    aria: 'Actions rapides',
    brand: 'PulsarOS Bittenfruit',
    scrollTop: 'Retour en haut',
    scrollAria: 'Revenir au début de la page',
  },

  lightbox: {
    maximize: 'Agrandir {name}',
    close: 'Fermer la vidéo',
  },
} as Content;
