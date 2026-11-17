import type { Content } from './en';

export const de: Content = {
  meta: {
    title: 'PulsarOS Bitten Fruit — Das macOS-Erlebnis, ohne Mac',
    description:
      'PulsarOS Bittenfruit reproduziert die Oberfläche und das Erlebnis von macOS mit Funktionen, die es unter Linux noch nie gab. Kostenlos, quelloffen und von der Community gemacht.',
  },

  a11y: {
    skip: 'Zum Hauptinhalt springen',
  },

  nav: {
    home: 'Startseite von PulsarOS Bitten Fruit',
    download: 'ISO herunterladen',
    language: 'Sprache ändern',
    primary: 'Hauptnavigation',
    overview: 'Überblick',
    features: 'Funktionen',
    editions: 'Editionen',
    faq: 'Fragen',
    appStore: 'App Store',
    help: 'Hilfe',
    bug: 'Fehler melden',
    rss: 'RSS',
    resources: 'Ressourcen',
  },

  hero: {
    titleHtml:
      'Das echte<br />Erlebnis <span>Mac</span><span class="bg-gradient-to-r from-[#0071e3] via-[#0066cc] to-[#1d1d1f] text-transparent bg-clip-text">OS</span><br />unter Linux',
    aria: 'Hauptüberblick',
    phrases: [
      'Ohne das Rad neu zu erfinden',
      'Auf echten Nutzerbedürfnissen aufgebaut',
      'Kein weiteres GNOME/KDE mit einem Theme obendrauf',
      'Kein AI-Slop und kein Hass — KI als Hilfe',
      'Mit einem echten Ökosystem, vom Handy bis Windows',
      'Mit direktem Support von den Entwicklern',
    ],
    comingSoon: 'Demnächst',
    discord: 'Discord beitreten',
    madeBy: 'Von der Community gemacht',
    trust: '+1.000 Menschen vertrauen PulsarOS',
    trustSource: '(Daten von SourceForge)',
    avatarSuffix: 'Avatar',
  },

  features: {
    aria: 'Funktionen von Pulsar OS',
    heading: 'Pulsar OS kann mehr als andere Systeme!',
    subheading:
      'Entdecke die Funktionen, die Bitten Fruit zum echten macOS-Erlebnis unter Linux machen.',
    items: [
      {
        title: 'Touch ID und Face ID',
        description: 'Touch ID und Face ID, mit Schutz gegen Identitätsbetrug',
        media: '/videos/touch-face-id.webm',
        poster: '/videos/touch-face-id.webp',
        kind: 'video',
      },
      {
        title: 'Animierte Hintergründe (Live)',
        description:
          'Animierte Hintergründe auf dem Schreibtisch und am Anmeldebildschirm. Kompatibilität mit dem Sperrbildschirm folgt.',
        media: '/videos/live-wallpaper.webm',
        poster: '/videos/live-wallpaper.webp',
        kind: 'video',
      },
      {
        title: 'Liquid Glass',
        description:
          'Ein wunderschönes transluzentes Materialdesign, das sich durch die ganze Oberfläche zieht. Tiefe, Licht und Feinschliff auf jeder Fläche. Entwickelt von unserem Mitarbeiter Angelo, UI-Experte.',
        media: '/videos/liquid-glass.webm',
        poster: '/videos/liquid-glass.webp',
        kind: 'video',
      },
      {
        title: 'Notch',
        description:
          'Was du dir vom Notch unter macOS immer gewünscht hast und wofür du tausend Erweiterungen installieren musstest: jetzt alles in einem.',
        media: '/videos/notch.webm',
        poster: '/videos/notch.webp',
        kind: 'video',
      },
      {
        title: 'Kreisen zum Suchen',
        description:
          'Schüttle den Cursor, umkreise irgendetwas auf dem Bildschirm und suche es bei Google, frage Sayri oder kopiere den Text per OCR.',
        media: '/videos/circle-to-search.webm',
        poster: '/videos/circle-to-search.webp',
        kind: 'video',
      },
      {
        title: 'PulsarOS-Firewall',
        description:
          'PulsarOS bringt UFW standardmäßig mit unserer einzigartigen, wirklich einfach einzurichtenden Firewall-Oberfläche mit. Wenn eine App auf einem Port lauschen will, fragt Pulsar dich – kein Kampf mehr mit der Konfiguration.',
        media: '/videos/firewall.webm',
        poster: '/videos/firewall.webp',
        kind: 'video',
      },
      {
        title: 'Echtes globales Menü',
        description:
          'Keine Linux-Distro hat es unter GNOME. Eine echte globale Menüleiste oben am Bildschirm, wie bei macOS, für alle Apps.',
        media: '/videos/global-menu.webm',
        poster: '/videos/global-menu.webp',
        kind: 'video',
      },
      {
        title: 'Pulsar VPN',
        description:
          'Schluss mit Wireguard-Kopfschmerzen: Pulsar OS bringt eine einfache Oberfläche für Tailscale mit. Anmelden und fertig.',
        media: 'https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png',
        poster: 'https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png',
        kind: 'image',
      },
      {
        title: 'Pulsar Windows',
        description:
          'Windows-Apps wie native Apps auf dem Schreibtisch. Darunter laufen sie in einem Windows. Du musst Windows nicht aktivieren, um es zu nutzen.',
        media: '/videos/pulsar-windows.webm',
        poster: '/videos/pulsar-windows.webp',
        kind: 'video',
      },
      {
        title: 'FileVault (Verschlüsselung)',
        description:
          'Verschlüssele deine Festplatte und schütze deine Daten: Wenn dir der Rechner gestohlen wird, kommt niemand an das Wichtigste – den Inhalt.',
        media: '/videos/encryption.webm',
        poster: '/videos/encryption.webp',
        kind: 'video',
      },
      {
        title: 'Das beste Spotlight',
        description:
          'Verabschiede dich von der widerlichen Billigkeit des Spotlight in macOS 27. Das von PulsarOS kann viel mehr als das von macOS.',
        media: '/videos/spotlight.webm',
        poster: '/videos/spotlight.webp',
        kind: 'video',
      },
      {
        title: 'Sitzung wiederherstellen',
        description:
          'Neustart oder Einschalten, und jede App, jedes Fenster und jedes Dokument öffnet sich von selbst. Du machst genau dort weiter, wo du warst. Keine Linux-Distro schafft das.',
        media: '/videos/session-restore.webm',
        poster: '/videos/session-restore.webp',
        kind: 'video',
      },
      {
        title: 'KI-Assistent Sayri',
        description:
          'Die sichere, günstigere und funktionierende Alternative zu Openclaw! Probiere sie jetzt aus.',
        media: '/videos/sayri.webm',
        poster: '/videos/sayri.webp',
        kind: 'video',
      },
      {
        title: 'Fensterverwaltung',
        description:
          'Geteilte Ansicht, Mission-Control-Gesten, Vollbild in dynamischen Arbeitsbereichen und flüssige Fensteranpassung für fortgeschrittene Nutzer.',
        media: '/videos/window-mode.webm',
        poster: '/videos/window-mode.webp',
        kind: 'video',
      },
      {
        title: 'Finder, neu gebaut',
        description:
          'Der Dateimanager, den du kennst: Navigation im Mac-Stil, Vorschauen, Tags und Google Drive, Dropbox, OneDrive, Nextcloud und über 50 Cloud-Dienste genau dort, wo deine Dateien sind.',
        media: '/videos/nautilus-providers.webm',
        poster: '/videos/nautilus-providers.webp',
        kind: 'video',
      },
      {
        title: 'App Store',
        description:
          'Installiere jedes Paket (pkg, deb, aur, GNOME-Erweiterung, Pulsar Store), frage die KI, ob eine App sicher ist und welche die beste für dich ist.',
        media: '/videos/app-store.webm',
        poster: '/videos/app-store.webp',
        kind: 'video',
      },
      {
        title: 'Time Machine',
        description:
          'Backups deines ganzen Systems, gespeichert wo du willst: ein Netzwerkserver, einer der 50 Cloud-Dienste oder ein USB-Stick. Wenn dein Rechner kaputtgeht, stell alles wieder her.',
        media: '/videos/time-machine.webm',
        poster: '/videos/time-machine.webp',
        kind: 'video',
      },
      {
        title: 'Integrierte Wiederherstellung',
        description:
          'Die einzige Linux-Distribution mit einem isolierten Wiederherstellungssystem, gemacht für die extremsten Fälle, damit du Rechner, Daten und System wiederbekommst, ohne Dateien zu verlieren.',
        media: '/videos/recovery.webm',
        poster: '/videos/recovery.webp',
        kind: 'video',
      },
      {
        title: 'Tastatur-Neubelegung',
        description:
          'Eher Mac-Universum oder lieber Linux- und Windows-Shortcuts behalten? Kein Problem: Stelle alle Mac-Shortcuts auf Linux um und umgekehrt.',
        media: '/videos/remap-live-wallpaper.webm',
        poster: '/videos/remap-live-wallpaper.webp',
        kind: 'video',
      },
    ],
  },

  phone: {
    aria: 'Pulsar Phone',
    logoAlt: 'Pulsar Phone Logo',
    eyebrow: 'Pulsar Phone',
    title: 'Mach mehr als das Apple-Ökosystem … ohne Apple!',
    body:
      'Die App, die alles kann. Schick Dateien vom Handy zum PC und zurück, binde das Dateisystem deines PCs am Handy ein, nutze das Terminal des PCs vom Handy aus, teile Zwischenablage und Benachrichtigungen, sieh und teile Bildschirme, steuere PC-Apps wie Handy-Apps, synchronisiere per QR, VPN am Handy mit einem Klick und führe Handy-Apps nativ auf deinem PC aus. Also alles in einem, und ohne etwas zu zahlen.',
    items: [
      {
        title: 'Dateien übertragen',
        description:
          'Schick Dateien vom Handy zum PC und zurück, ohne Kabel und komplizierte Software.',
      },
      {
        title: 'Dateisystem des PCs',
        description:
          'Binde das Dateisystem deines PCs am Handy ein und greife direkt auf alle Dateien zu.',
      },
      {
        title: 'Terminal-Zugriff',
        description:
          'Nutze das Terminal deines PCs vom Handy aus, führe Befehle aus, wo und wann du willst.',
      },
      {
        title: 'Zwischenablage und Benachrichtigungen',
        description:
          'Teile Zwischenablage und Benachrichtigungen mühelos zwischen Handy und PC.',
      },
      {
        title: 'Bildschirmsteuerung',
        description:
          'Sieh und teile Bildschirme, steuere PC-Apps wie Handy-Apps mit einem Klick.',
      },
    ],
  },

  windows: {
    aria: 'Pulsar Windows',
    logoAlt: 'Pulsar Windows Logo',
    eyebrow: 'Pulsar Windows',
    title: 'Windows-Apps nativ ausführen, ohne Emulation',
    body:
      'Starte ein echtes Windows-System mit einem Klick und nutze Windows-Apps weiter in Pulsar OS: Sie laufen in Windows, erscheinen in Pulsar OS aber wie native Apps, ohne Kopfschmerzen. Außerdem kannst du Tiny11 nutzen, ein quelloffenes Windows 11 (das Build-Skript der ISO ist offen), das weniger Ressourcen braucht.',
    demoAria: 'Pulsar Windows Demo',
  },

  benefits: {
    aria: 'Warum Pulsar OS',
    heading: 'Und vieles mehr.',
    items: [
      {
        title: 'Immer besser',
        description:
          'Dank unserer unglaublichen Community sind wir viele Menschen, die auf unterschiedliche Dinge achten – so finden wir, was besser werden kann, und setzen es um, damit du den Komfort genießt.',
      },
      {
        title: 'Gebaut, um zu bleiben.',
        description:
          'Keine Obsoleszenz. Dein PC bekommt Updates, bis er nicht mehr funktionieren kann.',
      },
      {
        title: 'Völlig kostenlos.',
        description:
          'Keine Lizenzen, keine Abos, keine Konten. Herunterladen, installieren, nutzen. Es kostet nichts, heute und immer.',
      },
      {
        title: 'Die erste durchgängig prüfbare Distro',
        description:
          'Alles wird in einem System namens GitHub Actions verarbeitet, dessen Konfiguration du einsehen kannst. Die ISO entsteht dort, nicht auf unseren Rechnern – wir sind die erste durchgängig prüfbare Distro.',
      },
      {
        title: 'Ein neues Leben für deinen alten Mac oder PC',
        description:
          'Der Mac, der im Schrank Staub sammelt, kann sich wieder neu anfühlen: derselbe Komfort, dieselbe Vertrautheit, Jahre mehr Nutzung.',
      },
      {
        title: 'Kostenlos und komfortabel.',
        description:
          'Verlasse das Apple-Ökosystem, ohne auf Komfort zu verzichten. Alles ist dort, wo du es erwartest, genau wie du es kennst.',
      },
    ],
  },

  cloud: {
    badge: 'Integration in den Finder',
    title: 'Native Kompatibilität mit 55 Cloud-Diensten',
    subtitle:
      'Greife direkt im Finder auf OneDrive, Google Drive, iCloud, Dropbox, Nextcloud und Proton Drive zu, ohne Synchronisationsverzögerung.',
    more: '+ 47 weitere über Rclone',
  },

  editions: {
    aria: 'Verfügbare Editionen, Bootloader und Downloads',
    title: 'Wähle deine Edition',
    subtitle:
      'Bitten Fruit gibt es in zwei Basis-Editionen, Debian und Arch. Beide enthalten zwei Boot-Varianten: GRUB und rEFInd. rEFInd kommt dem Mac-Erlebnis am nächsten und ist am bequemsten.',
    cards: [
      {
        name: 'Debian-Edition',
        headline: 'Eine solide, einfache Basis.',
        description:
          'Perfekt für alte Rechner oder für alle, denen Stabilität über alles geht. Enthält GRUB und rEFInd; die rEFInd-Variante wirkt viel mehr wie ein Mac und ist bequemer.',
        badge: 'Stabiler Kern',
        bootVariants: ['GRUB (BIOS-Geräte)', 'rEFInd (UEFI-Geräte)'],
      },
      {
        name: 'Arch-Edition',
        headline: 'Immer aktuell.',
        description:
          'Die neuesten Treiber und Pakete. Die Wahl für moderne Hardware. Enthält GRUB und rEFInd; die rEFInd-Variante wirkt viel mehr wie ein Mac und ist bequemer.',
        badge: 'Rollender Kern',
        bootVariants: ['GRUB (BIOS-Geräte)', 'rEFInd (UEFI-Geräte)'],
      },
    ],
    bootTitle: 'Welche Boot-Variante brauche ich?',
    bootLeadHtml:
      'Die GRUB-Editionen <strong>funktionieren nur auf Rechnern mit BIOS</strong>. Nutzt dein Rechner UEFI, nimm die rEFInd-Version.',
    explainers: [
      {
        title: 'Was ist ein 64-Bit-Prozessor (AMD64)?',
        body:
          'Das ist der Prozessortyp, den fast alle PCs seit 15 Jahren nutzen. „AMD64“ ist der Name des 64-Bit-Designs und funktioniert mit AMD- wie Intel-Prozessoren. Läuft auf deinem Rechner Windows 8 oder neuer, ist das fast sicher der Fall.',
      },
      {
        title: 'Was ist das BIOS?',
        body:
          'Das BIOS ist die alte Art, Rechner zu starten, üblich bei Maschinen von vor 2012. Beim Einschalten zeigt es ein reines Textmenü. Hat dein PC ein BIOS, lade die GRUB-Edition.',
      },
      {
        title: 'Was ist UEFI?',
        body:
          'UEFI ist der moderne Nachfolger des BIOS. Alle Rechner der letzten zehn Jahre nutzen es. Es startet das System mit einem schönen grafischen Menü und fühlt sich mit rEFInd fast wie ein Mac an. Hat dein PC UEFI, lade die rEFInd-Edition.',
      },
      {
        title: 'Woran erkenne ich das?',
        body:
          'Einfache Regel: Kam dein Rechner mit Windows 8, 10 oder 11, ist es UEFI → wähle rEFInd. Nur deutlich ältere PCs (Windows 7 oder älter, grob vor 2012) nutzen BIOS → wähle GRUB. Unsicher? Nutze den Kompatibilitätscheck unten.',
      },
    ],
    compatTitle: 'Läuft es auf deinem PC?',
    compatLead:
      'Gib das Modell deines PCs ein und wir fragen Google AI, ob es Pulsar OS ausführen kann und welche Edition du laden solltest.',
    compatPlaceholder: 'z. B. Lenovo ThinkPad T480, HP Pavilion 15, Dell Inspiron 3520…',
    compatInputAria: 'Modell deines PCs',
    compatButton: 'Kompatibilität prüfen',
    compatNote:
      'Öffnet eine Suche im Google AI Mode mit deinem Modell, den Anforderungen von Pulsar OS und der passenden Edition.',
    compatQuery:
      'Kann mein Computer Pulsar OS Bitten Fruit ausführen? Modell: {model}. Anforderungen: 64-Bit-Prozessor (AMD64), 4 GB RAM, 20 GB Speicher, 8-GB-USB-Stick. Welche Edition soll ich nutzen, Debian oder Arch, und welche Boot-Variante: GRUB, wenn der PC Legacy-BIOS nutzt, oder rEFInd, wenn er UEFI nutzt?',
    requirementsTitle: 'Was du brauchst',
    requirements: [
      { id: 'arch', text: 'Einen 64-Bit-Prozessor (AMD64)' },
      { id: 'ram', text: '4 GB RAM' },
      { id: 'disk', text: '20 GB freien Speicherplatz' },
      { id: 'usb', text: 'Einen 8-GB-USB-Stick. Mehr nicht.' },
    ],
    requirementsScanButton: 'Diesen PC prüfen',
    requirementsScanBusy: 'Prüfe…',
    requirementsScanOk: 'Sieht gut aus',
    requirementsScanFail: 'Nicht genug',
    requirementsScanUnknown: 'Nicht prüfbar',
    requirementsScanManual: 'Selbst prüfen',
    requirementsScanSummaryOk:
      'Sieht kompatibel aus. Das ist eine Schätzung: Dein Browser sieht nicht alles.',
    requirementsScanSummaryFail:
      'Wahrscheinlich nicht kompatibel. Das ist eine Schätzung auf Basis der Browser-Angaben.',
    requirementsScanSummaryUnknown:
      'Dein Browser kann nicht alles bestätigen. Prüfe die oben markierten Zeilen oder probiere es live.',
    requirementsScanLive:
      'Unsicher? Starte Pulsar OS live vom USB-Stick. Es wird nichts installiert oder verändert.',
    requirementsScanDownload: 'Herunterladen',
    requirementsNoteHtml:
      'Das ist alles. Und der beste Weg herauszufinden, wie es sich anfühlt? <strong>Probiere es auf deinem eigenen PC</strong>: Du kannst Pulsar OS live vom USB-Stick starten, ohne etwas zu installieren und ohne das zu verändern, was schon auf deinem Rechner ist.',
    usbTitle: 'Pulsar OS auf den USB-Stick bringen',
    usbBodyHtml:
      'Unter Windows nutzt du <a class="text-secondary hover:underline" href="https://rufus.ie" target="_blank" rel="noopener">Rufus</a> und wählst, wenn gefragt wird, den <strong>DD-Modus</strong>. Unter Linux nutzt du <strong>GNOME Datenträgerverwaltung</strong> („Abbild wiederherstellen“). Wir empfehlen, <strong>Etcher nicht zu verwenden</strong> und <strong>Ventoy</strong> auch nicht (mit diesen ISOs noch experimentell).',
    downloadsTitle: 'Bereit, Pulsar OS herunterzuladen?',
    downloadsBody:
      'Alle Editionen und Boot-Varianten findest du auf unserer Download-Seite. Lade die ISO für deinen PC und probiere Pulsar OS live vom USB-Stick.',
    downloadsCta: 'Zu den Downloads',
    copied: 'Kopiert ✓',
  },

  recovery: {
    aria: 'Wiederherstellung',
    eyebrow: 'Wiederherstellung',
    title: 'Du wirst es nie kaputt machen.',
    lead:
      'Wie ein Mac hat Pulsar OS eine versteckte Wiederherstellungspartition. Aber wir sind weiter gegangen: So schlimm die Katastrophe auch ist, es gibt immer einen Weg zurück. Je tiefer du fällst, desto schlimmer wird es – und trotzdem lässt sich jede Stufe retten.',
    steps: [
      {
        title: 'Time Machine',
        description:
          'Dein System ist auf einer Festplatte, einem USB-Stick, einem NAS oder einem der 55 Cloud-Dienste gesichert. Stelle alles mit einem Klick wieder her. Es sieht nicht einmal so aus, als wäre etwas kaputt gewesen.',
      },
      {
        title: 'Wiederherstellung über das Internet',
        description:
          'Das System startet nicht? Geh in die Wiederherstellung, und die Internet-Wiederherstellung lädt eine frische Wiederherstellungsumgebung von unseren Servern, ganz im Apple-Stil.',
      },
      {
        title: 'Wiederherstellung per USB',
        description:
          'Kein Netz? Schließe einen USB-Stick an die Live-Umgebung mit einem squashfs an und stelle von dort wieder her.',
      },
      {
        title: 'Die Live-ISO',
        description:
          'Du hast den Bootloader UND die Wiederherstellungspartition gelöscht? Die ISO, die du zum Installieren von Pulsar OS heruntergeladen hast, enthält eine vollständige Wiederherstellungsumgebung. Starte sie und repariere, setze zurück oder geh zurück. Du bist nie ausgesperrt.',
      },
    ],
    bestCase: 'Bester Fall',
    worstCase: 'Schlimmster Fall',
    level: 'Stufe {n}',
    reassuranceTitle: 'Keine Panik!',
    reassuranceBodyHtml:
      'Und mit <strong class="text-on-surface-default">Time Machine</strong>, das mit einer Festplatte, einem USB-Stick, einem NAS oder 55 Cloud-Diensten hervorragend funktioniert, waren deine Daten nie in Gefahr.',
  },

  faq: {
    badge: 'Fragen? Antworten.',
    title: 'Häufige Fragen',
    subtitle: 'Alles, was du über die PulsarOS Bitten Fruit Edition wissen musst.',
    items: [
      {
        question: 'Warum sollte ich Pulsar OS statt anderer Mac-artiger Distros wählen?',
        answer:
          'Die meisten Mac-artigen Distributionen werden von einer einzigen Person entwickelt und sehen nur auf den ersten Blick gut aus, sind dann aber nicht wirklich benutzbar. Andere behaupten, Mac-Apps auszuführen, sind aber vollständig mit KI gebaut.',
      },
      {
        question: 'Was macht Pulsar OS anders als andere Linux-Distributionen?',
        answer:
          'Normale Linux-Distributionen geben dir nur eine Basis und eine grafische Oberfläche, aber viele fügen nicht einmal Funktionen hinzu und nur sehr wenige innovieren. Pulsar OS konzentriert sich darauf, das Aussehen und – sehr wichtig – den Arbeitsablauf der Systeme nachzubilden, die Menschen nutzen, um das Gute von Linux mit dem Guten von, in diesem Fall, macOS zu verbinden.',
      },
      {
        question: 'Kann ich es auf meinem MacBook installieren?',
        answer:
          'Natürlich, auf MacBooks mit Intel-Chip (gebaut vor 2020). Wir arbeiten an einer neuen Version mit allen Treibern, damit auf deinem Mac alles perfekt funktioniert.',
      },
      {
        question: 'Kann ich macOS-, Windows- und Android-Anwendungen ausführen?',
        answer:
          'Ja, natürlich; wir liefern alle nötigen Anwendungen mit. Für macOS-Apps musst du ein vollständiges macOS in einer virtuellen Maschine ohne Grafikbeschleunigung ausführen, wenn du keine alte AMD- oder NVIDIA-GPU hast; das lässt sich nicht beheben, es ist eine Einschränkung von macOS. Wir arbeiten bald an der Unterstützung für macOS-Apps …',
      },
      {
        question: 'Hat es einen App Store?',
        answer:
          'Ja, wir liefern ein bequemes Programm mit, mit dem du Anwendungen in verschiedenen Formaten installieren kannst, ohne Code anzufassen. Außerdem gibt es den Pulsar Store, mit dem du Anwendungen von Menschen installieren kannst, die Pulsar OS lieben – von KI geprüft.',
      },
    ],
    talkTitle: 'Komm dazu und sprich mit der Community',
    talkBodyHtml:
      'Bei der Installation hängengeblieben? Eine Idee? Du willst nur Hallo sagen? <strong class="text-on-surface-default">Unsere Community ist freundlich und wir sind jeden Tag da</strong>: Auf jede Frage antwortet jemand.',
    discordDesc: 'Der belebteste Ort',
    telegramDesc: 'Kurze Fragen und Neuigkeiten.',
    matrixDesc: 'Offen und leicht, für Neugierige.',
    githubDesc: 'Schau dir an, wie alles gebaut ist.',
    auditBefore: 'Willst du es lieber selbst prüfen?',
    auditLink: 'Prüfe den Code',
    auditAfter: '— jede Zeile ist öffentlich.',
  },

  community: {
    aria: 'Die Menschen hinter Pulsar OS',
    title: 'Die Menschen dahinter',
    bodyHtml:
      'Wenn du zu Pulsar OS beiträgst, egal wie, wird dein Beitrag anerkannt. Wir sind ein wachsendes Team – mach mit! <br />Wir sind eine freundliche Community, ohne Elitismus, ohne Politik oder Ideologie, ohne schlechte Stimmung, und wir helfen einander.',
    order: '(In der Reihenfolge des Beitritts)',
  },

  resources: {
    title: 'Nützliche Links',
    subtitle: 'Links, die du wahrscheinlich brauchst, hier griffbereit',
    open: 'Öffnen',
    items: [
      {
        title: 'App Store',
        description: 'Installiere Apps aus der PulsarOS-Community, von KI geprüft.',
      },
      {
        title: 'Hilfe und Dokumentation',
        description: 'Installationsanleitungen, Hardware, Mitarbeit und vieles mehr.',
      },
      {
        title: 'Pressemappe',
        description:
          'Du willst im Internet über Pulsar OS schreiben? Hier sind passende Ressourcen.',
      },
      {
        title: 'Fehler melden',
        description: 'Etwas ist kaputt? Sag es uns auf BugMe und wir beheben es.',
      },
      {
        title: 'RSS-Feed',
        description: 'Abonniere und erhalte jede Version und Neuigkeit in deinem Reader.',
      },
    ],
  },

  footer: {
    aria: 'Navigation in der Fußzeile',
    editionLabel: 'Bitten Fruit Edition',
    columns: [
      {
        title: 'PulsarOS entdecken',
        links: [
          'Bitten Fruit Edition',
          'Sitzung wiederherstellen',
          'KI-Assistent Sayri',
          'Spotlight-Suche',
          'Kontrollzentrum',
        ],
      },
      {
        title: 'Virtualisierung',
        links: [
          'MacBoat (OpenCore)',
          'WinBoat App Runtime',
          'DroidTux Mobile',
          'GSConnect-Synchronisierung',
          'Nativer KVM-Passthrough',
        ],
      },
      {
        title: 'Ökosystem und Apps',
        links: [
          'App Store (Flathub und AUR)',
          '55 Cloud-Dienste',
          'Dynamische Hintergründe',
          'macOS-Tastenbelegung ändern',
        ],
      },
      {
        title: 'Editionen und Downloads',
        links: [
          'Debian Stable Core',
          'Arch Rolling Core',
          'Bitten Fruit ISO herunterladen',
          'Versionshinweise',
        ],
      },
      {
        title: 'Community und Werte',
        links: [
          'GitHub-Repository',
          'Fehler melden',
          'RSS-Feed',
          'Open Source (MIT-INLED)',
          'Datenschutzfreundliche Architektur',
          'Hardware-Kompatibilität',
        ],
      },
    ],
    footnotes: [
      '1. PulsarOS Bitten Fruit ist ein unabhängiges Open-Source-Linux-Distributionsprojekt. macOS, Mac, OpenCore und die Designelemente des Apple-Logos sind Marken von Apple Inc. in den USA und anderen Ländern und Regionen.',
      '2. Die macOS-VM hat keine Grafikbeschleunigung!',
    ],
    moreWaysHtml:
      'Weitere Wege zu PulsarOS: <a href="{downloads}" target="_blank" rel="noopener" class="text-primary hover:underline font-normal">lade die Bittenfruit-ISO herunter</a> oder <a href="{github}" target="_blank" rel="noopener" class="text-primary hover:underline font-normal">hilf auf GitHub mit</a>.',
    creditsHtml:
      'Erste Website entwickelt von unserem großartigen Mitarbeiter <a href="https://www.victorrosario.dev/" target="_blank" rel="noopener" class="hover:text-on-surface-default hover:underline">Victor Rosario (Hauptdesign)</a>. Neue Änderungen von <a href="https://jaimegh.com" target="_blank" rel="noopener" class="hover:text-on-surface-default hover:underline">JaimeGH</a>',
    legal: {
      github: 'GitHub',
      releases: 'Versionen',
      bug: 'Fehler melden',
      rss: 'RSS-Feed',
      license: 'MIT-INLED-Lizenz',
    },
  },

  banner: {
    text: 'Wir bereiten das größte Update von Pulsar OS vor: Version 2.0',
    link: 'Tritt Discord bei, um auf dem Laufenden zu bleiben →',
  },

  popup: {
    close: 'Fenster schließen',
    comingSoon: 'Demnächst',
    body: 'Die größte Veränderung von Pulsar OS. Niemand macht, was wir machen. Keine Distro hat das geschafft. Bleib dran!',
    discord: 'Discord beitreten',
  },

  floating: {
    aria: 'Schnellaktionen',
    brand: 'PulsarOS Bittenfruit',
    scrollTop: 'Nach oben',
    scrollAria: 'Zurück zum Seitenanfang',
  },

  lightbox: {
    maximize: '{name} maximieren',
    close: 'Video schließen',
  },
} as Content;
