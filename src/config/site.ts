import type {
  FAQItem,
  VideoFeature,
  CloudProvider,
  EcosystemCard,
  EditionCard,
  StoryFeature,
  BentoCard,
} from '@/types';


export const SITE_CONFIG = {
  name: "PulsarOS Bitten Fruit",
  edition: "Bitten Fruit Edition",
  brandTagline: "The macOS experience on Linux.",
  description: "PulsarOS is a Linux distribution engineered to replicate commercial operating systems. Bitten Fruit is specifically crafted to reproduce the macOS interface, animation rhythm, and user experience.",
  githubUrl: "https://github.com/Inled-Pulsar-OS",
  releasesUrl: "https://github.com/Inled-Pulsar-OS/ISO/releases/latest",
  downloadsUrl: "https://downloads-os.inled.es/",
  bugReportUrl: "https://bugme-os.inled.es/",
  feedUrl: "https://feed-os.inled.es/",
  license: "MIT-INLED",
} as const;

export const FAQS: FAQItem[] = [
  {
    question: "What makes Pulsar OS different from other Linux distributions?",
    answer: "Normal Linux distributions give you only a base and a graphical environment, but many do not even add functionality and very few innovate. Pulsar OS focuses on replicating the look and, very importantly, workflow of the operating systems that people use to offer the good of Linux with the good of, in this case, macOS.",
  },
  {
    question: "Can I install it on my Macbook?",
    answer: "Of course you can on those Macbooks that have an Intel chip (those manufactured before 2020). We are working on a new release that includes all the drivers so that everything on your Mac works perfectly.",
  },
  {
    question: "Can I run macOS, Windows, and Android applications?",
    answer: "Yes, of course, we include all the necessary applications for this.",
  },
  {
    question: "Does it have an App Store?",
    answer: "Yes, we include a convenient program that allows you to install applications in multiple formats, without touching code. We also include the Pulsar Store, which allows you to install applications developed by people who love Pulsar OS, which have been reviewed by artificial intelligence.",
  },
];

export const CLOUD_PROVIDERS: CloudProvider[] = [
  { name: "iCloud", logo: "/logos/providers/icloud.svg" },
  { name: "Google Drive", logo: "/logos/providers/googledrive.svg" },
  { name: "Dropbox", logo: "/logos/providers/dropbox.svg" },
  { name: "OneDrive", logo: "/logos/providers/onedrive.svg" },
  { name: "Nextcloud", logo: "/logos/providers/nextcloud.svg" },
  { name: "Proton Drive", logo: "/logos/providers/proton.svg" },
  { name: "Box", logo: "/logos/providers/box.svg" },
  { name: "Mega", logo: "/logos/providers/mega.svg" },
];

export const INTELLIGENCE_FEATURES: VideoFeature[] = [
  {
    title: "Session Restore",
    subtitle: "Continuity",
    description: "Reboot or power on, and every app, window, and document reopens on its own. Pick up right where you left off.",
    video: "/videos/session-restore.mp4",
    poster: "/assets/desktop.png",
    badge: "Continuity",
  },
  {
    title: "Sayri AI Assistant",
    subtitle: "Privacy First",
    description: "An intelligent assistant that runs local models of your choice. Completely private, fast, and secure on your hardware.",
    video: "/videos/sayri.mp4",
    poster: "/assets/spotlight.png",
    logo: "/logos/sayri.webp",
    badge: "Local AI",
  },
];

export const STORY_FEATURES: StoryFeature[] = [
  {
    id: "session-restore",
    stepNumber: "01",
    category: "Continuity",
    title: "Session Restore",
    description: "Reboot or power on, and every application, window arrangement, and open document reopens instantly where you left off.",
    video: "/videos/session-restore.mp4",
    poster: "/assets/desktop.png",
  },
  {
    id: "sayri-ai",
    stepNumber: "02",
    category: "Private Intelligence",
    title: "Sayri AI Assistant",
    description: "Ask in plain language and it gets things done on your computer. 100% private, no telemetry, no cloud lock-in.",
    video: "/videos/sayri.mp4",
    poster: "/assets/spotlight.png",
  },
  {
    id: "spotlight-search",
    stepNumber: "03",
    category: "Search & Action",
    title: "Spotlight Search",
    description: "Command center for your machine. Search files, launch applications, calculate math, check clipboard history, or trigger system scripts.",
    video: "/videos/spotlight.mp4",
    poster: "/assets/spotlight.png",
  },
  {
    id: "window-management",
    stepNumber: "04",
    category: "Workspaces",
    title: "Window Management",
    description: "Split view, Mission Control gestures, full screen on dynamic workspaces, and fluid window snapping built for power users.",
    video: "/videos/window-mode.mp4",
    poster: "/assets/desktop.png",
  },
  {
    id: "finder-clouds",
    stepNumber: "05",
    category: "Files & Cloud",
    title: "Finder, Rebuilt",
    description: "The file manager you already know: Mac-style navigation, previews, tags, and Google Drive, Dropbox, OneDrive, Nextcloud and 50+ cloud providers right where your files live.",
    video: "/videos/nautilus-providers.mp4",
    poster: "/assets/finder.png",
  },
  {
    id: "circle-to-search",
    stepNumber: "06",
    category: "Search & Action",
    title: "Circle to Search",
    description: "Shake the cursor, circle anything on your screen and search it on Google, ask Sayri about it, or grab the text with OCR.",
    video: "/videos/circle-to-search.mp4",
    poster: "/assets/desktop.png",
  },
  {
    id: "app-store",
    stepNumber: "07",
    category: "Apps",
    title: "App Store",
    description: "Install any app, however it is packaged: Flathub, .deb, pacman, AUR. Search, click, done — no terminal, no reading forums at midnight.",
    video: "/videos/app-store.mp4",
    poster: "/assets/finder.png",
  },
  {
    id: "pulsar-store",
    stepNumber: "08",
    category: "Apps",
    title: "Pulsar Store",
    description: "A curated store of apps built by the PulsarOS community itself, updated with every system release.",
    video: "/videos/pulsar-store.mp4",
    poster: "/assets/finder.png",
  },
  {
    id: "time-machine",
    stepNumber: "09",
    category: "Continuity",
    title: "Time Machine",
    description: "Copies of your whole system, stored wherever you like: a network server, one of the 50 cloud providers, or a USB stick. If your computer ever breaks, put everything back.",
    video: "/videos/time-machine.mp4",
    poster: "/assets/desktop.png",
  },
  {
    id: "recovery",
    stepNumber: "10",
    category: "Continuity",
    title: "Recovery, Built In",
    description: "Repair, reset or roll back the system from recovery: over the internet, even if it won't start, or from a USB stick. No reinstalling from scratch.",
    video: "/videos/recovery.mp4",
    poster: "/assets/select-disk.png",
  },
];

// Texts and structure mirror the "Connected everywhere" ecosystem section on https://os.inled.es/bitten-fruit/
export const BENTO_CARDS: BentoCard[] = [
  {
    id: "ultos",
    title: "UltOS",
    description: "Run real macOS on this same computer, downloaded straight from Apple's own servers. No hassle.",
    logo: "https://hosted.inled.es/cdn/ultimateos-macos-macboat.png",
  },
  {
    id: "winboat",
    title: "WinBoat",
    description: "Windows apps open as normal windows on your desktop. A real Windows underneath, without the awkwardness.",
    logo: "https://hosted.inled.es/winboat_logo.NqN8dmd9.svg",
  },
  {
    id: "droidtux",
    title: "DroidTux",
    description: "Android apps run as desktop windows. Your phone's apps, on your big screen.",
    logo: "https://hosted.inled.es/droidtux.png",
  },
  {
    id: "gsconnect",
    title: "GSConnect",
    description: "Notifications, file sharing, and remote control. Your phone and desktop, unified.",
    logo: "https://hosted.inled.es/gsconnect.png",
  },
];

export const VIDEO_SHOWCASES: VideoFeature[] = [
  {
    title: "Spotlight Search",
    subtitle: "Command center for your system.",
    description: "Instantly launch applications, search documents, inspect clipboard history, or uninstall software from one search bar.",
    video: "/videos/spotlight.mp4",
    poster: "/assets/spotlight.png",
  },
  {
    title: "Window Management",
    subtitle: "Full macOS windowing experience.",
    description: "Split view, Mission Control, full screen on new workspaces, and seamless desktop space management.",
    video: "/videos/window-mode.mp4",
    poster: "/assets/desktop.png",
  },
  {
    title: "App Store",
    subtitle: "Thousands of apps, zero commands.",
    description: "Browse and install applications from Flathub, AUR, pacman, and apt with a unified store interface.",
    video: "/videos/app-store.mp4",
    poster: "/assets/finder.png",
  },
  {
    title: "Keyboard Remap",
    subtitle: "Mac shortcuts or Linux ones, your call.",
    description: "Are you more of a Mac universe or do you prefer to keep the Linux and Windows commands? No problem: change all shortcuts from Mac to Linux and vice versa.",
    video: "/videos/remap-live-wallpaper.mp4",
    poster: "/assets/quick-setting.png",
    videoRange: { mode: 'head', offsetFromEnd: 6 },
  },
  {
    title: "Live Wallpapers",
    subtitle: "Wallpapers that move with time.",
    description: "Live wallpapers on the desktop and login screen. Lock screen support in progress.",
    video: "/videos/remap-live-wallpaper.mp4",
    poster: "/assets/quick-setting.png",
    videoRange: { mode: 'tail', offsetFromEnd: 6 },
  },
  {
    title: "Finder, Rebuilt",
    subtitle: "Your clouds, in the file manager.",
    description: "Mac-style navigation, previews, tags, and Google Drive, Dropbox, OneDrive, Nextcloud and 50+ cloud providers right where your files live.",
    video: "/videos/nautilus-providers.mp4",
    poster: "/assets/finder.png",
  },
  {
    title: "Circle to Search",
    subtitle: "Circle anything on screen.",
    description: "Shake the cursor, circle anything and search it on Google, ask Sayri about it, or grab the text with OCR.",
    video: "/videos/circle-to-search.mp4",
    poster: "/assets/desktop.png",
  },
  {
    title: "Pulsar Store",
    subtitle: "Community-built apps.",
    description: "A curated store of apps built by the PulsarOS community itself, updated with every system release.",
    video: "/videos/pulsar-store.mp4",
    poster: "/assets/finder.png",
  },
  {
    title: "Time Machine",
    subtitle: "Your whole system, backed up.",
    description: "Full system copies on a network server, one of the 50 cloud providers, or a USB stick. Restore everything if your computer ever breaks.",
    video: "/videos/time-machine.mp4",
    poster: "/assets/desktop.png",
  },
  {
    title: "Recovery, Built In",
    subtitle: "Repair without reinstalling.",
    description: "Repair, reset or roll back the system from recovery: over the internet, even if it won't start, or from a USB stick.",
    video: "/videos/recovery.mp4",
    poster: "/assets/select-disk.png",
  },
];

export const GALLERY_FEATURES: VideoFeature[] = [
  ...INTELLIGENCE_FEATURES,
  ...STORY_FEATURES.map((f) => ({
    title: f.title,
    subtitle: f.category,
    description: f.description,
    video: f.video,
    poster: f.poster,
  })),
  ...VIDEO_SHOWCASES,
].filter((f, i, all) => all.findIndex((o) => o.title === f.title) === i);

export const ECOSYSTEM: EcosystemCard[] = [
  {
    name: "MacBoat",
    headline: "Real macOS, on your computer",
    description: "Run macOS downloaded straight from Apple's own servers. Everything is ready from the first start, no hassle.",
    tag: "macOS Integration",
    logo: "/logos/macboat.webp",
  },
  {
    name: "WinBoat",
    headline: "Windows apps as normal windows",
    description: "Your Windows apps open right on your desktop, without the awkwardness.",
    tag: "Windows Apps",
    logo: "/logos/winboat.svg",
  },
  {
    name: "DroidTux",
    headline: "Android apps on desktop",
    description: "Run mobile Android applications side-by-side with full keyboard, trackpad, and touch support.",
    tag: "Android Apps",
    logo: "/logos/droidtux.webp",
  },
  {
    name: "GSConnect",
    headline: "Universal device sync",
    description: "Instant notification sync, shared clipboard, SMS integration, and trackpad remote between your phone and PC.",
    tag: "iOS & Android",
    logo: "/logos/gsconnect.webp",
  },
];

// Texts mirror the "Choose your edition" section on https://os.inled.es/bitten-fruit/
export const EDITIONS: EditionCard[] = [
  {
    name: "Debian Edition",
    headline: "A rock-solid, simple base.",
    description: "Perfect for older computers or anyone who values stability above everything else. Ships with GRUB and rEFInd, the rEFInd variant is much more Mac-like and comfortable.",
    badge: "Stable Core",
    bootVariants: ["GRUB (BIOS devices)", "rEFInd (UEFI devices)"],
  },
  {
    name: "Arch Edition",
    headline: "Always up to date.",
    description: "The newest drivers and packages. The choice for modern hardware. Ships with GRUB and rEFInd, the rEFInd variant is much more Mac-like and comfortable.",
    badge: "Rolling Core",
    bootVariants: ["GRUB (BIOS devices)", "rEFInd (UEFI devices)"],
  },
];

export const RELEASES_JSON_URL = "https://pulsaros-releases.pages.dev/isos.json";
