// English copy is the source of truth: every other locale mirrors this shape.
// Feature media paths point to local WebM files (WebP posters) generated from
// the original MP4 demos, so the gallery loads faster.

const FEATURE_MEDIA: Record<string, string> = {
  'touch-face-id': '/videos/touch-face-id.webm',
  'live-wallpaper': '/videos/live-wallpaper.webm',
  'liquid-glass': '/videos/liquid-glass.webm',
  notch: '/videos/notch.webm',
  'circle-to-search': '/videos/circle-to-search.webm',
  firewall: '/videos/firewall.webm',
  'global-menu': '/videos/global-menu.webm',
  'pulsar-windows': '/videos/pulsar-windows.webm',
  encryption: '/videos/encryption.webm',
  spotlight: '/videos/spotlight.webm',
  'session-restore': '/videos/session-restore.webm',
  sayri: '/videos/sayri.webm',
  'window-mode': '/videos/window-mode.webm',
  'nautilus-providers': '/videos/nautilus-providers.webm',
  'app-store': '/videos/app-store.webm',
  'time-machine': '/videos/time-machine.webm',
  recovery: '/videos/recovery.webm',
  'remap-live-wallpaper': '/videos/remap-live-wallpaper.webm',
};

const poster = (slug: string) => `/videos/${slug}.webp`;
const media = (slug: string) => FEATURE_MEDIA[slug] ?? '';

export const en = {
  meta: {
    title: 'PulsarOS Bitten Fruit — The macOS experience, without a Mac',
    description:
      'PulsarOS Bittenfruit captures the UI and UX of macOS with the most innovative features on Linux. Free, open source, and built by the community.',
  },

  a11y: {
    skip: 'Skip to main content',
  },

  nav: {
    home: 'PulsarOS Bitten Fruit Home',
    download: 'Download ISO',
    language: 'Change language',
    primary: 'Primary navigation',
    overview: 'Overview',
    features: 'Features',
    editions: 'Editions',
    faq: 'FAQ',
    appStore: 'App Store',
    help: 'Help',
    bug: 'Report a bug',
    rss: 'RSS',
    resources: 'Resources',
  },

  hero: {
    titleHtml:
      'The real<br /><span>Mac</span><span class="bg-gradient-to-r from-[#0071e3] via-[#0066cc] to-[#1d1d1f] text-transparent bg-clip-text">OS</span> experience<br />on Linux',
    aria: 'Hero overview',
    phrases: [
      'No reinventing the wheel',
      'Based on users real needs',
      'Not just another GNOME/KDE with a theme on top',
      'No AI Slop & No AI hate - AI as help',
      'With a real ecosystem, from phone to Windows',
      'With direct support from the developers',
    ],
    comingSoon: 'Coming Soon',
    discord: 'Join Discord',
    madeBy: 'Made by the community',
    trust: '+1k people trust',
    trustSource: '(SourceForge stats)',
    avatarSuffix: 'avatar',
  },

  features: {
    aria: 'Pulsar OS Features',
    heading: 'Pulsar OS can do more than other OS!',
    subheading:
      'Discover the features that make Bitten Fruit the real MacOS experience on Linux.',
    items: [
      {
        title: 'Touch & Face ID',
        description: 'Touch ID and Face ID, with protection against identity theft',
        media: media('touch-face-id'),
        poster: poster('touch-face-id'),
        kind: 'video' as const,
      },
      {
        title: 'Live Wallpapers',
        description:
          'Live wallpapers on the desktop and login screen. Lock screen support in progress.',
        media: media('live-wallpaper'),
        poster: poster('live-wallpaper'),
        kind: 'video' as const,
      },
      {
        title: 'Liquid Glass',
        description:
          'A gorgeous, translucent material design that flows across the UI. Depth, light, and refinement in every surface. Made by our contributor Angelo, expert in UI',
        media: media('liquid-glass'),
        poster: poster('liquid-glass'),
        kind: 'video' as const,
      },
      {
        title: 'Notch',
        description:
          'What you always wanted from the notch on your MacOS, and you had to install a thousand plugins, here it is all in one.',
        media: media('notch'),
        poster: poster('notch'),
        kind: 'video' as const,
      },
      {
        title: 'Circle to Search',
        description:
          'Shake the cursor, circle anything on your screen and search it on Google, ask Sayri about it, or grab the text with OCR.',
        media: media('circle-to-search'),
        poster: poster('circle-to-search'),
        kind: 'video' as const,
      },
      {
        title: 'Pulsar Firewall',
        description:
          "Pulsaros has UFW by default. The only firewall interfaze that's actually easy to configure. When an app tries to listen on a port, Pulsar asks you so you dont have to fight with firewall settings",
        media: media('firewall'),
        poster: poster('firewall'),
        kind: 'video' as const,
      },
      {
        title: 'Real Global Menu',
        description:
          'No Linux distro has this on GNOME. A true global menu bar at the top of the screen, just like macOS, for every app.',
        media: media('global-menu'),
        poster: poster('global-menu'),
        kind: 'video' as const,
      },
      {
        title: 'Pulsar VPN',
        description:
          'Forget the headache of Wireguard: Pulsar OS comes with a simple interface for Tailscale, just log in and go',
        media: 'https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png',
        poster: 'https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png',
        kind: 'image' as const,
      },
      {
        title: 'Pulsar Windows',
        description:
          "Windows apps as native apps on desktop. Below, a real Windows consuming as little as possible. You don't need to activate Windows to use it.",
        media: media('pulsar-windows'),
        poster: poster('pulsar-windows'),
        kind: 'video' as const,
      },
      {
        title: 'File vault (encryption)',
        description:
          "Encrypt your drive and protect your data, so that if your computer is stolen, they don't steal the most important thing: its content.",
        media: media('encryption'),
        poster: poster('encryption'),
        kind: 'video' as const,
      },
      {
        title: 'The Best Spotlight',
        description:
          'Say goodbye to the shitty spotlight that Apple created for the latest macOS. This spotlight is smart and can do a lot more things than the macOS one.',
        media: media('spotlight'),
        poster: poster('spotlight'),
        kind: 'video' as const,
      },
      {
        title: 'Session Restore',
        description:
          'Reboot or power on, and every app, window, and document reopens on its own. Pick up right where you left off. No Linux distro does this',
        media: media('session-restore'),
        poster: poster('session-restore'),
        kind: 'video' as const,
      },
      {
        title: 'Sayri AI Assistant',
        description:
          'The safe, less expensive and functional alternative to Openclaw! try it now',
        media: media('sayri'),
        poster: poster('sayri'),
        kind: 'video' as const,
      },
      {
        title: 'Window Management',
        description:
          'Split view, Mission Control gestures, full screen on dynamic workspaces, and fluid window snapping built for power users.',
        media: media('window-mode'),
        poster: poster('window-mode'),
        kind: 'video' as const,
      },
      {
        title: 'Finder, Rebuilt',
        description:
          'The file manager you already know: Mac-style navigation, previews, tags, and Google Drive, Dropbox, OneDrive, Nextcloud and 50+ cloud providers right where your files live.',
        media: media('nautilus-providers'),
        poster: poster('nautilus-providers'),
        kind: 'video' as const,
      },
      {
        title: 'App Store',
        description:
          'Install any package (pkg, deb, aur, gnome extension, pulsar store), ask AI for security of an app and ask it what is the best app you need.',
        media: media('app-store'),
        poster: poster('app-store'),
        kind: 'video' as const,
      },
      {
        title: 'Time Machine',
        description:
          'Copies of your whole system, stored wherever you like: a network server, one of the 50 cloud providers, or a USB stick. If your computer ever breaks, put everything back.',
        media: media('time-machine'),
        poster: poster('time-machine'),
        kind: 'video' as const,
      },
      {
        title: 'Recovery, Built In',
        description:
          'The only Linux distribution with an isolated recovery system, specifically designed for the most extreme cases, so you can recover your computer, your data and your system without losing files',
        media: media('recovery'),
        poster: poster('recovery'),
        kind: 'video' as const,
      },
      {
        title: 'Keyboard Remap',
        description:
          'Are you more of a Mac universe or do you prefer to keep the Linux and Windows commands? No problem: change all shortcuts from Mac to Linux and vice versa.',
        media: media('remap-live-wallpaper'),
        poster: poster('remap-live-wallpaper'),
        kind: 'video' as const,
      },
    ],
  },
  phone: {
    aria: 'Pulsar Phone',
    logoAlt: 'Pulsar Phone logo',
    eyebrow: 'Pulsar Phone',
    title: 'Do more than with the Apple ecosystem, but without Apple',
    body:
      "The app that can do it all. Send files from phone to PC and vice versa, mount your PC's filesystem on your phone, use your PC terminal from your phone, share clipboard and notifications, view and share screens, control PC apps like mobile apps sync with QR, one-click phone VPN, and run phone apps natively on your PC. No more apps, no more friction.",
    items: [
      {
        title: 'Transfer files',
        description: 'Send files from phone to PC and vice versa without cables or complex software.',
      },
      {
        title: 'PC filesystem',
        description: "Mount your PC's filesystem on your phone and access all files directly.",
      },
      {
        title: 'Terminal access',
        description: 'Use your PC terminal from your phone, run commands anywhere, anytime.',
      },
      {
        title: 'Clipboard & notifications',
        description: 'Share clipboard and notifications between phone and PC seamlessly.',
      },
      {
        title: 'Screen control',
        description: 'View and share screens, control PC apps like mobile apps with one click.',
      },
    ],
  },

  windows: {
    aria: 'Pulsar Windows',
    logoAlt: 'Pulsar Windows logo',
    eyebrow: 'Pulsar Windows',
    title: 'Run Windows apps as native without emulation',
    body:
      'Run a real Windows system with one click while still using Windows apps on Pulsar OS, and they run on Windows, only they show up on Pulsar OS as native, without headaches. Additionally, you can use Tiny11, an open source Windows 11 (the iso build script is open source) that consumes less resources',
    demoAria: 'Pulsar Windows demo',
  },

  benefits: {
    aria: 'Why Pulsar OS',
    heading: 'And much more.',
    items: [
      {
        title: 'Always getting better.',
        description:
          'New versions, new apps and improvements arrive constantly. Your system moves forward the day it ships — and every day after.',
      },
      {
        title: 'Built to last.',
        description:
          'Without obsolescence. Your PC will receive updates until it is no longer able to function.',
      },
      {
        title: 'Completely free.',
        description:
          'No licenses, no subscriptions, no accounts. Download it, install it, use it. It costs nothing, today and always.',
      },
      {
        title: 'The first e2e auditable distro',
        description:
          'Everything is processed in a system called Github Actions, whose configuration you can review. The ISO is generated there, not on our computers, so we are the first e2e auditable distro.',
      },
      {
        title: 'A new life for your old Mac or PC',
        description:
          'That Mac gathering dust in a drawer can feel new again — same comfort, same familiarity, years more of use.',
      },
      {
        title: 'Free, and still comfortable.',
        description:
          'Step out of the Apple ecosystem without giving up an ounce of comfort. Everything is where you expect it, the way you already know.',
      },
    ],
  },

  cloud: {
    badge: 'Finder Integration',
    title: 'Native Support for 55 Cloud Providers',
    subtitle:
      'Access OneDrive, Google Drive, iCloud, Dropbox, Nextcloud, and Proton Drive directly inside Finder with zero sync latency.',
    more: '+ 47 More via Rclone',
  },

  editions: {
    aria: 'Available editions, bootloaders and downloads',
    title: 'Choose your edition',
    subtitle:
      'Bitten Fruit comes in two base editions, Debian and Arch. Both include two boot variants: GRUB and rEFInd. rEFInd is the closest to the Mac experience and the most comfortable to use.',
    cards: [
      {
        name: 'Debian Edition',
        headline: 'A rock-solid, simple base.',
        description:
          'Perfect for older computers or anyone who values stability above everything else. Ships with GRUB and rEFInd, the rEFInd variant is much more Mac-like and comfortable.',
        badge: 'Stable Core',
        bootVariants: ['GRUB (BIOS devices)', 'rEFInd (UEFI devices)'],
      },
      {
        name: 'Arch Edition',
        headline: 'Always up to date.',
        description:
          'The newest drivers and packages. The choice for modern hardware. Ships with GRUB and rEFInd, the rEFInd variant is much more Mac-like and comfortable.',
        badge: 'Rolling Core',
        bootVariants: ['GRUB (BIOS devices)', 'rEFInd (UEFI devices)'],
      },
    ],
    bootTitle: 'Which boot variant do I need?',
    bootLeadHtml:
      'The GRUB editions <strong>only work on BIOS computers</strong>. If your computer uses UEFI, use the rEFInd version.',
    explainers: [
      {
        title: 'What is a 64-bit (AMD64) processor?',
        body:
          'It is the type of processor almost every PC has used for the last 15 years. “AMD64” is the name of the 64-bit design, and it works with both AMD and Intel processors. If your computer runs Windows 8 or newer, it almost certainly qualifies.',
      },
      {
        title: 'What is BIOS?',
        body:
          'BIOS is the older way computers start up, common in machines from before 2012. It shows a plain, text-only menu when the computer turns on. If your PC has BIOS, download the GRUB edition.',
      },
      {
        title: 'What is UEFI?',
        body:
          'UEFI is the modern replacement for BIOS. Every computer sold in the last decade uses it. It starts the system with a friendly, graphical menu — with rEFInd, it feels closest to a Mac. If your PC has UEFI, download the rEFInd edition.',
      },
      {
        title: 'How do I tell them apart?',
        body:
          'Simple rule: if your computer came with Windows 8, 10 or 11, it is UEFI → choose rEFInd. Only much older PCs (Windows 7 or earlier, roughly pre-2012) use BIOS → choose GRUB. Not sure? Ask the compatibility helper below.',
      },
    ],
    compatTitle: 'Will it work on your PC?',
    compatLead:
      'Type your PC model and we will ask Google AI whether it can run Pulsar OS, and which edition to download.',
    compatPlaceholder: 'e.g. Lenovo ThinkPad T480, HP Pavilion 15, Dell Inspiron 3520…',
    compatInputAria: 'Your PC model',
    compatButton: 'Check compatibility',
    compatNote:
      'Opens a Google AI Mode search with your model, Pulsar OS requirements, and which edition fits.',
    compatQuery:
      'Can my computer run Pulsar OS Bitten Fruit? Model: {model}. Requirements: 64-bit (AMD64) processor, 4 GB RAM, 20 GB disk, 8 GB USB. Which edition should I use, Debian or Arch, and which boot variant: GRUB if the PC uses legacy BIOS, or rEFInd if it uses UEFI?',
    requirementsTitle: 'What you need',
    requirements: [
      'A 64-bit (AMD64) processor',
      '4 GB of RAM',
      '20 GB of free disk space',
      'A 8 GB USB stick. Nothing more.',
    ],
    requirementsNoteHtml:
      'That is all. And the best way to find out how it feels? <strong>Try it on your own PC</strong> — you can run Pulsar OS live from the USB stick, without installing anything and without changing what is already on your computer.',
    usbTitle: 'Putting Pulsar OS on the USB',
    usbBodyHtml:
      'On Windows, use <a class="text-secondary hover:underline" href="https://rufus.ie" target="_blank" rel="noopener">Rufus</a> — and when it asks, choose <strong>DD mode</strong>. On Linux, use <strong>GNOME Disks</strong> (“Restore Disk Image”). We recommend <strong>not using Etcher</strong>, and <strong>not using Ventoy</strong> (still experimental with these ISOs).',
    downloadsTitle: 'Ready to download Pulsar OS?',
    downloadsBody:
      'All editions and boot variants are available on our downloads page. Grab the ISO that matches your PC and try Pulsar OS live from the USB stick.',
    downloadsCta: 'Go to downloads',
    copied: 'Copied ✓',
  },

  recovery: {
    aria: 'Recovery',
    eyebrow: 'Recovery',
    title: "You'll never break it.",
    lead:
      'Like a Mac, Pulsar OS ships with a hidden recovery partition. But we went further: however bad the disaster is, there is always a way back. The further down you go, the worse it gets — and every step still recovers.',
    steps: [
      {
        title: 'Time Machine',
        description:
          'Your system is backed up against a disk, a USB drive, a NAS or any of 55 cloud providers. Restore everything in one click. Nothing even feels broken.',
      },
      {
        title: 'Internet Recovery',
        description:
          "The system won't start? Enter on the Recovery and Internet Recovery downloads a fresh recovery environment from our servers, Apple-style.",
      },
      {
        title: 'USB Recovery',
        description:
          'No network? Connect a USB to the live environment that contains a squashfs and restore from it',
      },
      {
        title: 'The Live ISO',
        description:
          'Wiped the bootloader AND the recovery partition? The very ISO you downloaded to install Pulsar OS contains a full recovery environment. Boot it and repair, reset or roll back. You are never locked out.',
      },
    ],
    bestCase: 'Best case',
    worstCase: 'Worst case',
    level: 'Level {n}',
    reassuranceTitle: 'Panic is not part of the workflow.',
    reassuranceBodyHtml:
      'And with <strong class="text-on-surface-default">Time Machine</strong> — which works beautifully against a disk, a USB stick, a NAS or 55 cloud providers — your data was never in danger in the first place.',
  },

  faq: {
    badge: 'Questions? Answers.',
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about PulsarOS Bitten Fruit edition.',
    items: [
      {
        question: 'Why I should choose Pulsar OS and not other Mac-OS like distros?',
        answer:
          'Most Mac-type distributions that currently exist are either developed by a single person and only look good at first glance but then are not really usable. Others also claim to run Mac apps but are made entirely with AI.',
      },
      {
        question: 'What makes Pulsar OS different from other Linux distributions?',
        answer:
          'Normal Linux distributions give you only a base and a graphical environment, but many do not even add functionality and very few innovate. Pulsar OS focuses on replicating the look and, very importantly, workflow of the operating systems that people use to offer the good of Linux with the good of, in this case, macOS.',
      },
      {
        question: 'Can I install it on my Macbook?',
        answer:
          'Of course you can on those Macbooks that have an Intel chip (those manufactured before 2020). We are working on a new release that includes all the drivers so that everything on your Mac works perfectly.',
      },
      {
        question: 'Can I run macOS, Windows, and Android applications?',
        answer:
          'Yes, of course, we include all the necessary applications for this. For MacOS apps you have to run a full MacOS on vm with no graphics accel if you dont have an old amd or nvidia gpu, cannot be fixed, is MacOS limitation. We will work soon on MacOS app support...',
      },
      {
        question: 'Does it have an App Store?',
        answer:
          'Yes, we include a convenient program that allows you to install applications in multiple formats, without touching code. We also include the Pulsar Store, which allows you to install applications developed by people who love Pulsar OS, which have been reviewed by artificial intelligence.',
      },
    ],
    talkTitle: 'Talk to the humans behind it',
    talkBodyHtml:
      'Stuck installing? Curious about something? Just want to say hi? <strong class="text-on-surface-default">Our community is friendly and we are around every day</strong> — for any doubt you may have, someone will answer.',
    discordDesc: 'The busiest room. English and Spanish.',
    telegramDesc: 'Quick questions and news.',
    matrixDesc: 'Open and lightweight, for the curious.',
    githubDesc: 'Peek at how it is all made.',
    auditBefore: 'Prefer to check it yourself?',
    auditLink: 'Audit the code',
    auditAfter: '— every line is public.',
  },

  community: {
    aria: 'People behind Pulsar OS',
    title: 'The people behind it',
    bodyHtml:
      'When you contribute to Pulsar OS, no matter how, you get recognized. We are a growing team, join us! <br />We are a really friendly community, no elitism, no politics or ideology, no hate and helping us together!',
    order: '(Listed in order of join)',
  },

  resources: {
    title: 'Useful links',
    subtitle: 'Links that you probably need to use, here quick to access',
    open: 'Open',
    items: [
      {
        title: 'App Store',
        description: 'Install apps built by the PulsarOS community, reviewed by AI.',
      },
      {
        title: 'Help & Docs',
        description: 'Guides for installation, hardware, contributing and more.',
      },
      {
        title: 'Press Kit',
        description:
          'Do you want to write about Pulsar OS on internet? You can obtain resources prepared for this here.',
      },
      {
        title: 'Report a Bug',
        description: "Something broke? Tell us at BugMe and we'll fix it.",
      },
      {
        title: 'RSS Feed',
        description: 'Subscribe and get every release and news in your reader.',
      },
    ],
  },

  footer: {
    aria: 'Footer Directory Navigation',
    editionLabel: 'Bitten Fruit Edition',
    columns: [
      {
        title: 'Explore PulsarOS',
        links: [
          'Bitten Fruit Edition',
          'Session Restore',
          'Sayri AI Assistant',
          'Spotlight Search',
          'Control Center',
        ],
      },
      {
        title: 'Virtualization',
        links: [
          'MacBoat (OpenCore)',
          'WinBoat App Runtime',
          'DroidTux Mobile',
          'GSConnect Device Sync',
          'Native KVM Passthrough',
        ],
      },
      {
        title: 'Ecosystem & Apps',
        links: [
          'App Store (Flathub & AUR)',
          '55 Cloud Providers',
          'Dynamic Wallpapers',
          'macOS Key Remapper',
        ],
      },
      {
        title: 'Editions & Downloads',
        links: ['Debian Stable Core', 'Arch Rolling Core', 'Download Bitten Fruit ISO', 'Release Notes'],
      },
      {
        title: 'Community & Values',
        links: [
          'GitHub Repository',
          'Report a Bug',
          'RSS Feed',
          'Open Source (MIT-INLED)',
          'Privacy First Architecture',
          'Hardware Support',
        ],
      },
    ],
    footnotes: [
      '1. PulsarOS Bitten Fruit is an independent open-source Linux distribution project. macOS, Mac, OpenCore, and Apple logo design elements are trademarks of Apple Inc., registered in the U.S. and other countries and regions.',
      '2. MacOS VM doesnt have GPU acceleration!',
    ],
    moreWaysHtml:
      'More ways to get PulsarOS: <a href="{downloads}" target="_blank" rel="noopener" class="text-primary hover:underline font-normal">Download Bittenfruit ISO</a> or <a href="{github}" target="_blank" rel="noopener" class="text-primary hover:underline font-normal">contribute on GitHub</a>.',
    creditsHtml:
      'First website developed by our great contributor <a href="https://www.victorrosario.dev/" target="_blank" rel="noopener" class="hover:text-on-surface-default hover:underline">Victor Rosario (main design)</a>. New changes by <a href="https://jaimegh.com" target="_blank" rel="noopener" class="hover:text-on-surface-default hover:underline">JaimeGH</a>',
    legal: {
      github: 'GitHub',
      releases: 'Releases',
      bug: 'Report a Bug',
      rss: 'RSS Feed',
      license: 'MIT-INLED license',
    },
  },

  banner: {
    text: 'We’re preparing the biggest update for Pulsar OS: version 2.0',
    link: 'Join Discord to stay up to date →',
  },

  popup: {
    close: 'Close popup',
    comingSoon: 'Coming soon',
    body: 'The biggest change in Pulsar OS. Nobody does what we do. No distro has achieved this. Stay tuned.',
    discord: 'Join Discord',
  },

  floating: {
    aria: 'Quick Actions',
    brand: 'PulsarOS Bittenfruit',
    scrollTop: 'Scroll to Top',
    scrollAria: 'Scroll to top of page',
  },

  lightbox: {
    maximize: 'Maximize {name}',
    close: 'Close video',
  },
};

export type Content = typeof en;
