import type { Content } from './en';

export const it: Content = {
  meta: {
    title: 'PulsarOS Bitten Fruit — L’esperienza macOS, senza un Mac',
    description:
      'PulsarOS Bittenfruit riproduce l’interfaccia e l’esperienza di macOS con funzioni innovative mai viste su Linux. Gratis, open source e fatto dalla comunità.',
  },

  a11y: {
    skip: 'Vai al contenuto principale',
  },

  nav: {
    home: 'Home di PulsarOS Bitten Fruit',
    download: 'Scarica la ISO',
    language: 'Cambia lingua',
    primary: 'Navigazione principale',
    overview: 'Panoramica',
    features: 'Funzioni',
    editions: 'Edizioni',
    faq: 'Domande',
    appStore: 'App Store',
    help: 'Aiuto',
    bug: 'Segnala un bug',
    rss: 'RSS',
    resources: 'Risorse',
  },

  hero: {
    titleHtml:
      'La vera<br />esperienza <span>Mac</span><span class="bg-gradient-to-r from-[#0071e3] via-[#0066cc] to-[#1d1d1f] text-transparent bg-clip-text">OS</span><br />su Linux',
    aria: 'Panoramica principale',
    phrases: [
      'Senza reinventare la ruota',
      'Basato sui bisogni reali degli utenti',
      'Non è l’ennesimo GNOME/KDE con un tema sopra',
      'Niente AI slop né odio — l’IA come aiuto',
      'Con un ecosistema vero, dal telefono a Windows',
      'Con il supporto diretto degli sviluppatori',
    ],
    comingSoon: 'In arrivo',
    discord: 'Unisciti a Discord',
    madeBy: 'Fatto dalla comunità',
    trust: '+1.000 persone si fidano di PulsarOS',
    trustSource: '(dati SourceForge)',
    avatarSuffix: 'avatar',
  },

  features: {
    aria: 'Funzioni di Pulsar OS',
    heading: 'Pulsar OS può fare più degli altri sistemi!',
    subheading:
      'Scopri le funzioni che rendono Bitten Fruit la vera esperienza macOS su Linux.',
    items: [
      {
        title: 'Touch ID e Face ID',
        description: 'Touch ID e Face ID, con protezione contro l’imitazione dell’identità',
        media: '/videos/touch-face-id.webm',
        poster: '/videos/touch-face-id.webp',
        kind: 'video',
      },
      {
        title: 'Wallpaper animati (Live)',
        description:
          'Wallpaper animati sul desktop e sulla schermata di accesso. La compatibilità con la schermata di blocco è in arrivo.',
        media: '/videos/live-wallpaper.webm',
        poster: '/videos/live-wallpaper.webp',
        kind: 'video',
      },
      {
        title: 'Liquid Glass',
        description:
          'Un bellissimo design in materiale traslucido che attraversa tutta l’interfaccia. Profondità, luce e raffinatezza su ogni superficie. Creato dal nostro collaboratore Angelo, esperto di UI.',
        media: '/videos/liquid-glass.webm',
        poster: '/videos/liquid-glass.webp',
        kind: 'video',
      },
      {
        title: 'Notch',
        description:
          'Quello che hai sempre voluto dal Notch del tuo macOS e per cui dovevi installare mille estensioni: ora tutto in uno.',
        media: '/videos/notch.webm',
        poster: '/videos/notch.webp',
        kind: 'video',
      },
      {
        title: 'Cerchia per cercare',
        description:
          'Scuoti il cursore, cerchia qualunque cosa sullo schermo e cercala su Google, chiedi a Sayri o copia il testo con l’OCR.',
        media: '/videos/circle-to-search.webm',
        poster: '/videos/circle-to-search.webp',
        kind: 'video',
      },
      {
        title: 'Firewall di PulsarOS',
        description:
          'PulsarOS include UFW di default con la nostra unica interfaccia firewall davvero facile da configurare. Quando un’app prova ad ascoltare su una porta, Pulsar te lo chiede: niente più lotte con la configurazione.',
        media: '/videos/firewall.webm',
        poster: '/videos/firewall.webp',
        kind: 'video',
      },
      {
        title: 'Menu globale vero',
        description:
          'Nessuna distro Linux ce l’ha su GNOME. Una vera barra dei menu globale in cima allo schermo, come su macOS, per tutte le app.',
        media: '/videos/global-menu.webm',
        poster: '/videos/global-menu.webp',
        kind: 'video',
      },
      {
        title: 'Pulsar VPN',
        description:
          'Dimentica il mal di testa di Wireguard: Pulsar OS include un’interfaccia semplice per Tailscale. Accedi e basta.',
        media: 'https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png',
        poster: 'https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png',
        kind: 'image',
      },
      {
        title: 'Pulsar Windows',
        description:
          'App Windows come app native sul desktop. Sotto, girano in un Windows. Non devi attivare Windows per usarlo.',
        media: '/videos/pulsar-windows.webm',
        poster: '/videos/pulsar-windows.webp',
        kind: 'video',
      },
      {
        title: 'FileVault (cifratura)',
        description:
          'Cifra il disco e proteggi i tuoi dati: se ti rubano il computer, non si porteranno via la cosa più importante, il suo contenuto.',
        media: '/videos/encryption.webm',
        poster: '/videos/encryption.webp',
        kind: 'video',
      },
      {
        title: 'Il miglior Spotlight',
        description:
          'Dì addio alla squallida bruttezza dello Spotlight di macOS 27. Quello di PulsarOS fa molto più di quello di macOS.',
        media: '/videos/spotlight.webm',
        poster: '/videos/spotlight.webp',
        kind: 'video',
      },
      {
        title: 'Ripristino sessione',
        description:
          'Riavvia o accendi e ogni app, finestra e documento si riaprono da soli. Riprendi esattamente da dove eri rimasto. Nessuna distro Linux lo fa.',
        media: '/videos/session-restore.webm',
        poster: '/videos/session-restore.webp',
        kind: 'video',
      },
      {
        title: 'Assistente IA Sayri',
        description:
          'L’alternativa sicura, più economica e funzionante a Openclaw! Provala subito.',
        media: '/videos/sayri.webm',
        poster: '/videos/sayri.webp',
        kind: 'video',
      },
      {
        title: 'Gestione finestre',
        description:
          'Vista divisa, gesti di Mission Control, schermo intero in spazi di lavoro dinamici e ridimensionamento fluido per gli utenti avanzati.',
        media: '/videos/window-mode.webm',
        poster: '/videos/window-mode.webp',
        kind: 'video',
      },
      {
        title: 'Finder, ricostruito',
        description:
          'Il gestore file che già conosci: navigazione in stile Mac, anteprime, tag e Google Drive, Dropbox, OneDrive, Nextcloud e oltre 50 servizi cloud proprio dove sono i tuoi file.',
        media: '/videos/nautilus-providers.webm',
        poster: '/videos/nautilus-providers.webp',
        kind: 'video',
      },
      {
        title: 'App Store',
        description:
          'Installa qualunque pacchetto (pkg, deb, aur, estensione GNOME, Pulsar Store), chiedi all’IA se un’app è sicura e quale fa per te.',
        media: '/videos/app-store.webm',
        poster: '/videos/app-store.webp',
        kind: 'video',
      },
      {
        title: 'Time Machine',
        description:
          'Backup di tutto il sistema, salvati dove vuoi: un server di rete, uno dei 50 servizi cloud o una USB. Se il computer si rompe, rimetti tutto a posto.',
        media: '/videos/time-machine.webm',
        poster: '/videos/time-machine.webp',
        kind: 'video',
      },
      {
        title: 'Ripristino integrato',
        description:
          'L’unica distribuzione Linux con un sistema di ripristino isolato, pensato per i casi più estremi, per recuperare computer, dati e sistema senza perdere file.',
        media: '/videos/recovery.webm',
        poster: '/videos/recovery.webp',
        kind: 'video',
      },
      {
        title: 'Rimappatura tastiera',
        description:
          'Sei più tipo da universo Mac o preferisci tenere le scorciatoie di Linux e Windows? Nessun problema: passa tutte le scorciatoie da Mac a Linux e viceversa.',
        media: '/videos/remap-live-wallpaper.webm',
        poster: '/videos/remap-live-wallpaper.webp',
        kind: 'video',
      },
    ],
  },

  phone: {
    aria: 'Pulsar Phone',
    logoAlt: 'Logo di Pulsar Phone',
    eyebrow: 'Pulsar Phone',
    title: 'Fai più dell’ecosistema Apple… senza Apple!',
    body:
      'L’app che può tutto. Invia file dal telefono al PC e viceversa, monta il filesystem del PC sul telefono, usa il terminale del PC dal telefono, condividi appunti e notifiche, guarda e condividi schermi, controlla le app del PC come se fossero app del telefono, sincronizza con QR, VPN sul telefono in un clic ed esegui le app del telefono in modo nativo sul PC. Insomma, tutto in uno, e senza pagare niente.',
    items: [
      {
        title: 'Trasferire file',
        description:
          'Invia file dal telefono al PC e viceversa, senza cavi né software complicati.',
      },
      {
        title: 'Filesystem del PC',
        description:
          'Monta il filesystem del PC sul telefono e accedi a tutti i file direttamente.',
      },
      {
        title: 'Accesso al terminale',
        description:
          'Usa il terminale del PC dal telefono, esegui comandi dove e quando vuoi.',
      },
      {
        title: 'Appunti e notifiche',
        description:
          'Condividi appunti e notifiche tra telefono e PC senza sforzo.',
      },
      {
        title: 'Controllo schermo',
        description:
          'Guarda e condividi schermi, controlla le app del PC come se fossero del telefono, in un clic.',
      },
    ],
  },

  windows: {
    aria: 'Pulsar Windows',
    logoAlt: 'Logo di Pulsar Windows',
    eyebrow: 'Pulsar Windows',
    title: 'Esegui le app Windows come native, senza emulazione',
    body:
      'Avvia un vero sistema Windows in un clic continuando a usare le app Windows in Pulsar OS: girano in Windows, ma compaiono in Pulsar OS come native, senza mal di testa. Puoi anche usare Tiny11, un Windows 11 open source (lo script che compila la ISO è aperto) che consuma meno risorse.',
    demoAria: 'Demo di Pulsar Windows',
  },

  benefits: {
    aria: 'Perché Pulsar OS',
    heading: 'E molto altro.',
    items: [
      {
        title: 'Meglio ogni volta',
        description:
          'Grazie alla nostra incredibile comunità, siamo tante persone attente a cose diverse: così riusciamo a trovare ciò che va migliorato e a metterlo in pratica perché tu ti goda la comodità.',
      },
      {
        title: 'Fatto per durare.',
        description:
          'Senza obsolescenza. Il tuo PC riceverà aggiornamenti finché non smetterà di poter funzionare.',
      },
      {
        title: 'Completamente gratis.',
        description:
          'Niente licenze, abbonamenti o account. Scaricalo, installalo, usalo. Non costa nulla, oggi e sempre.',
      },
      {
        title: 'La prima distro verificabile dall’inizio alla fine',
        description:
          'Tutto viene elaborato in un sistema chiamato GitHub Actions, la cui configurazione puoi controllare. La ISO viene generata lì, non sui nostri computer: siamo la prima distro verificabile dall’inizio alla fine.',
      },
      {
        title: 'Una nuova vita per il tuo vecchio Mac o PC',
        description:
          'Quel Mac che prende polvere in un cassetto può sentirsi nuovo: la stessa comodità, la stessa familiarità, anni di utilizzo in più.',
      },
      {
        title: 'Gratis e comodo.',
        description:
          'Esci dall’ecosistema Apple senza rinunciare a niente in fatto di comodità. Tutto è dove te lo aspetti, proprio come lo conosci.',
      },
    ],
  },

  cloud: {
    badge: 'Integrazione con Finder',
    title: 'Compatibilità nativa con 55 servizi cloud',
    subtitle:
      'Accedi a OneDrive, Google Drive, iCloud, Dropbox, Nextcloud e Proton Drive direttamente dentro Finder, senza latenza di sincronizzazione.',
    more: '+ 47 altri via Rclone',
  },

  editions: {
    aria: 'Edizioni disponibili, bootloader e download',
    title: 'Scegli la tua edizione',
    subtitle:
      'Bitten Fruit esiste in due edizioni base, Debian e Arch. Entrambe includono due varianti di avvio: GRUB e rEFInd. rEFInd è la più vicina all’esperienza Mac e la più comoda da usare.',
    cards: [
      {
        name: 'Edizione Debian',
        headline: 'Una base solida e semplice.',
        description:
          'Perfetta per computer vecchi o per chi mette la stabilità sopra ogni cosa. Include GRUB e rEFInd; la variante rEFInd somiglia molto di più a un Mac ed è più comoda.',
        badge: 'Nucleo stabile',
        bootVariants: ['GRUB (dispositivi BIOS)', 'rEFInd (dispositivi UEFI)'],
      },
      {
        name: 'Edizione Arch',
        headline: 'Sempre aggiornata.',
        description:
          'I driver e i pacchetti più recenti. La scelta per l’hardware moderno. Include GRUB e rEFInd; la variante rEFInd somiglia molto di più a un Mac ed è più comoda.',
        badge: 'Nucleo continuo',
        bootVariants: ['GRUB (dispositivi BIOS)', 'rEFInd (dispositivi UEFI)'],
      },
    ],
    bootTitle: 'Quale variante di avvio mi serve?',
    bootLeadHtml:
      'Le edizioni GRUB <strong>funzionano solo su computer con BIOS</strong>. Se il tuo computer usa UEFI, prendi la versione rEFInd.',
    explainers: [
      {
        title: 'Che cos’è un processore a 64 bit (AMD64)?',
        body:
          'È il tipo di processore che quasi tutti i PC usano da 15 anni. «AMD64» è il nome del progetto a 64 bit e funziona sia con processori AMD sia Intel. Se il tuo computer esegue Windows 8 o successivo, quasi sicuramente lo è.',
      },
      {
        title: 'Che cos’è il BIOS?',
        body:
          'Il BIOS è il modo vecchio di avviare i computer, comune sulle macchine precedenti al 2012. All’accensione mostra un menu solo testo. Se il tuo PC ha il BIOS, scarica l’edizione GRUB.',
      },
      {
        title: 'Che cos’è UEFI?',
        body:
          'UEFI è il sostituto moderno del BIOS. Tutti i computer venduti nell’ultimo decennio lo usano. Avvia il sistema con un bel menu grafico e, con rEFInd, sembra molto simile a un Mac. Se il tuo PC ha UEFI, scarica l’edizione rEFInd.',
      },
      {
        title: 'Come li distinguo?',
        body:
          'Regola semplice: se il tuo computer è arrivato con Windows 8, 10 o 11, è UEFI → scegli rEFInd. Solo PC molto più vecchi (Windows 7 o precedente, più o meno prima del 2012) usano il BIOS → scegli GRUB. Non hai le idee chiare? Usa il controllo di compatibilità qui sotto.',
      },
    ],
    compatTitle: 'Funzionerà sul tuo PC?',
    compatLead:
      'Scrivi il modello del tuo PC e chiederemo a Google AI se può eseguire Pulsar OS e quale edizione scaricare.',
    compatPlaceholder: 'es. Lenovo ThinkPad T480, HP Pavilion 15, Dell Inspiron 3520…',
    compatInputAria: 'Modello del tuo PC',
    compatButton: 'Controlla la compatibilità',
    compatNote:
      'Apre una ricerca in Google AI Mode con il tuo modello, i requisiti di Pulsar OS e l’edizione giusta.',
    compatQuery:
      'Il mio computer può eseguire Pulsar OS Bitten Fruit? Modello: {model}. Requisiti: processore a 64 bit (AMD64), 4 GB di RAM, 20 GB di disco, USB da 8 GB. Quale edizione devo usare, Debian o Arch, e quale variante di avvio: GRUB se il PC usa il BIOS legacy, o rEFInd se usa UEFI?',
    requirementsTitle: 'Cosa ti serve',
    requirements: [
      { id: 'arch', text: 'Un processore a 64 bit (AMD64)' },
      { id: 'ram', text: '4 GB di RAM' },
      { id: 'disk', text: '20 GB di spazio libero su disco' },
      { id: 'usb', text: 'Una USB da 8 GB. Nient’altro.' },
    ],
    requirementsScanButton: 'Controlla questo PC',
    requirementsScanBusy: 'Controllo…',
    requirementsScanOk: 'Tutto ok',
    requirementsScanFail: 'Insufficiente',
    requirementsScanUnknown: 'Non verificabile',
    requirementsScanManual: 'Controlla tu',
    requirementsScanSummaryOk:
      'Sembra compatibile. È una stima: il browser non vede tutto.',
    requirementsScanSummaryFail:
      'Probabilmente non compatibile. È una stima basata su ciò che segnala il browser.',
    requirementsScanSummaryUnknown:
      'Il browser non può confermare tutto. Controlla le righe segnate sopra, oppure provalo in live.',
    requirementsScanLive:
      'Non sei sicuro? Avvia Pulsar OS in modalità live dalla USB. Non viene installato né modificato nulla.',
    requirementsScanDownload: 'Scarica',
    requirementsNoteHtml:
      'Tutto qui. E il modo migliore per capire che effetto fa? <strong>Provalo sul tuo PC</strong>: puoi avviare Pulsar OS in live dalla USB, senza installare nulla e senza cambiare ciò che c’è già sul computer.',
    usbTitle: 'Mettere Pulsar OS sulla USB',
    usbBodyHtml:
      'Su Windows usa <a class="text-secondary hover:underline" href="https://rufus.ie" target="_blank" rel="noopener">Rufus</a> e, quando lo chiede, scegli la <strong>modalità DD</strong>. Su Linux usa <strong>Dischi di GNOME</strong> («Ripristina immagine disco»). Consigliamo di <strong>non usare Etcher</strong> né <strong>Ventoy</strong> (ancora sperimentale con queste ISO).',
    downloadsTitle: 'Pronto a scaricare Pulsar OS?',
    downloadsBody:
      'Tutte le edizioni e varianti di avvio sono nella nostra pagina dei download. Scarica la ISO che corrisponde al tuo PC e prova Pulsar OS in live dalla USB.',
    downloadsCta: 'Vai ai download',
    copied: 'Copiato ✓',
  },

  recovery: {
    aria: 'Ripristino',
    eyebrow: 'Ripristino',
    title: 'Non lo romperai mai.',
    lead:
      'Come un Mac, Pulsar OS include una partizione di ripristino nascosta. Ma siamo andati oltre: per quanto grave sia il disastro, c’è sempre un modo per tornare indietro. Più in basso cadi, peggio va, eppure ogni passo si recupera.',
    steps: [
      {
        title: 'Time Machine',
        description:
          'Il tuo sistema è salvato su un disco, una USB, un NAS o uno dei 55 servizi cloud. Ripristina tutto in un clic. Non sembra nemmeno che qualcosa si sia rotto.',
      },
      {
        title: 'Ripristino via Internet',
        description:
          'Il sistema non si avvia? Entra in Ripristino e il Ripristino via Internet scarica dai nostri server un nuovo ambiente di ripristino, in stile Apple.',
      },
      {
        title: 'Ripristino via USB',
        description:
          'Niente rete? Collega una USB all’ambiente live che contiene un squashfs e ripristina da lì.',
      },
      {
        title: 'La ISO live',
        description:
          'Hai cancellato il bootloader E la partizione di ripristino? La ISO che hai scaricato per installare Pulsar OS contiene un ambiente di ripristino completo. Avviala e ripara, reimposta o torna indietro. Non resti mai fuori.',
      },
    ],
    bestCase: 'Caso migliore',
    worstCase: 'Caso peggiore',
    level: 'Livello {n}',
    reassuranceTitle: 'Niente panico!',
    reassuranceBodyHtml:
      'E con <strong class="text-on-surface-default">Time Machine</strong>, che funziona benissimo con un disco, una USB, un NAS o 55 servizi cloud, i tuoi dati non sono mai stati in pericolo.',
  },

  faq: {
    badge: 'Domande? Risposte.',
    title: 'Domande frequenti',
    subtitle: 'Tutto quello che devi sapere sull’edizione PulsarOS Bitten Fruit.',
    items: [
      {
        question: 'Perché scegliere Pulsar OS e non altre distro in stile Mac?',
        answer:
          'La maggior parte delle distribuzioni in stile Mac esistenti è sviluppata da una sola persona e fa bella figura solo all’inizio, ma poi non è davvero utilizzabile. Altre dicono di eseguire app Mac, ma sono fatte interamente con l’IA.',
      },
      {
        question: 'Che cosa rende Pulsar OS diverso dalle altre distribuzioni Linux?',
        answer:
          'Le normali distribuzioni Linux ti danno solo una base e un ambiente grafico, ma molte non aggiungono nemmeno funzionalità e pochissime innovano. Pulsar OS punta a replicare l’aspetto e, cosa molto importante, il flusso di lavoro dei sistemi che la gente usa, per offrire il meglio di Linux con il meglio di, in questo caso, macOS.',
      },
      {
        question: 'Posso installarlo sul mio MacBook?',
        answer:
          'Certo, sui MacBook con chip Intel (prodotti prima del 2020). Stiamo lavorando a una nuova versione che include tutti i driver perché tutto funzioni perfettamente sul tuo Mac.',
      },
      {
        question: 'Posso eseguire applicazioni macOS, Windows e Android?',
        answer:
          'Sì, certo; includiamo tutte le applicazioni necessarie. Per le app macOS devi eseguire un macOS completo in una macchina virtuale senza accelerazione grafica se non hai una vecchia GPU AMD o NVIDIA; non si può risolvere, è un limite di macOS. Lavoreremo presto al supporto delle app macOS…',
      },
      {
        question: 'Ha un App Store?',
        answer:
          'Sì, includiamo un programma comodo che ti permette di installare applicazioni in vari formati senza toccare il codice. Includiamo anche Pulsar Store, che permette di installare applicazioni sviluppate da persone che amano Pulsar OS, controllate dall’intelligenza artificiale.',
      },
    ],
    talkTitle: 'Unisciti e parla con la comunità',
    talkBodyHtml:
      'Bloccato con l’installazione? Una proposta? Vuoi solo salutare? <strong class="text-on-surface-default">La nostra comunità è gentile e siamo qui tutti i giorni</strong>: qualunque dubbio tu abbia, qualcuno risponderà.',
    discordDesc: 'Il posto più affollato',
    telegramDesc: 'Domande rapide e notizie.',
    matrixDesc: 'Aperto e leggero, per i curiosi.',
    githubDesc: 'Dai un’occhiata a come è fatto tutto.',
    auditBefore: 'Preferisci verificarlo da te?',
    auditLink: 'Verifica il codice',
    auditAfter: '— ogni riga è pubblica.',
  },

  community: {
    aria: 'Le persone dietro Pulsar OS',
    title: 'Le persone dietro',
    bodyHtml:
      'Quando contribuisci a Pulsar OS, in qualunque modo, il tuo contributo viene riconosciuto. Siamo una squadra che cresce, unisciti! <br />Siamo una comunità amichevole, senza elitismo, senza politica né ideologia, senza cattivi umori, e ci aiutiamo insieme.',
    order: '(In ordine di arrivo)',
  },

  resources: {
    title: 'Link utili',
    subtitle: 'I link che probabilmente ti servono, qui a portata di mano',
    open: 'Apri',
    items: [
      {
        title: 'App Store',
        description: 'Installa app create dalla comunità di PulsarOS, controllate dall’IA.',
      },
      {
        title: 'Aiuto e documentazione',
        description: 'Guide di installazione, hardware, contribuzione e molto altro.',
      },
      {
        title: 'Press kit',
        description:
          'Vuoi scrivere di Pulsar OS su internet? Ecco risorse pronte per farlo.',
      },
      {
        title: 'Segnala un bug',
        description: 'Qualcosa si è rotto? Diccelo su BugMe e lo sistemeremo.',
      },
      {
        title: 'Feed RSS',
        description: 'Iscriviti e ricevi ogni versione e notizia nel tuo lettore.',
      },
    ],
  },

  footer: {
    aria: 'Navigazione del piè di pagina',
    editionLabel: 'Edizione Bitten Fruit',
    columns: [
      {
        title: 'Esplora PulsarOS',
        links: [
          'Edizione Bitten Fruit',
          'Ripristino sessione',
          'Assistente IA Sayri',
          'Ricerca Spotlight',
          'Centro di controllo',
        ],
      },
      {
        title: 'Virtualizzazione',
        links: [
          'MacBoat (OpenCore)',
          'WinBoat App Runtime',
          'DroidTux Mobile',
          'Sincronizzazione GSConnect',
          'Passthrough nativo KVM',
        ],
      },
      {
        title: 'Ecosistema e app',
        links: [
          'App Store (Flathub e AUR)',
          '55 servizi cloud',
          'Wallpaper dinamici',
          'Rimappatore di tasti macOS',
        ],
      },
      {
        title: 'Edizioni e download',
        links: [
          'Debian Stable Core',
          'Arch Rolling Core',
          'Scarica la ISO di Bitten Fruit',
          'Note di versione',
        ],
      },
      {
        title: 'Comunità e valori',
        links: [
          'Repository GitHub',
          'Segnala un bug',
          'Feed RSS',
          'Open source (MIT-INLED)',
          'Architettura attenta alla privacy',
          'Compatibilità hardware',
        ],
      },
    ],
    footnotes: [
      '1. PulsarOS Bitten Fruit è un progetto indipendente di distribuzione Linux open source. macOS, Mac, OpenCore e gli elementi di design del logo Apple sono marchi registrati di Apple Inc. negli Stati Uniti e in altri paesi e regioni.',
      '2. La macchina virtuale macOS non ha accelerazione grafica!',
    ],
    moreWaysHtml:
      'Altri modi per ottenere PulsarOS: <a href="{downloads}" target="_blank" rel="noopener" class="text-primary hover:underline font-normal">scarica la ISO di Bittenfruit</a> o <a href="{github}" target="_blank" rel="noopener" class="text-primary hover:underline font-normal">contribuisci su GitHub</a>.',
    creditsHtml:
      'Primo sito sviluppato dal nostro grande collaboratore <a href="https://www.victorrosario.dev/" target="_blank" rel="noopener" class="hover:text-on-surface-default hover:underline">Victor Rosario (design principale)</a>. Nuove modifiche di <a href="https://jaimegh.com" target="_blank" rel="noopener" class="hover:text-on-surface-default hover:underline">JaimeGH</a>',
    legal: {
      github: 'GitHub',
      releases: 'Versioni',
      bug: 'Segnala un bug',
      rss: 'Feed RSS',
      license: 'Licenza MIT-INLED',
    },
  },

  banner: {
    text: 'Stiamo preparando il più grande aggiornamento di Pulsar OS: la versione 2.0',
    link: 'Unisciti a Discord per restare aggiornato →',
  },

  popup: {
    close: 'Chiudi finestra',
    comingSoon: 'In arrivo',
    body: 'Il più grande cambiamento di Pulsar OS. Nessuno fa quello che facciamo noi. Nessuna distro ci è riuscita. Resta sintonizzato!',
    discord: 'Unisciti a Discord',
  },

  floating: {
    aria: 'Azioni rapide',
    brand: 'PulsarOS Bittenfruit',
    scrollTop: 'Torna su',
    scrollAria: 'Torna all’inizio della pagina',
  },

  lightbox: {
    maximize: 'Ingrandisci {name}',
    close: 'Chiudi video',
  },
} as Content;
