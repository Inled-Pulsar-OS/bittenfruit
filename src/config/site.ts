import type { FAQItem, VideoFeature, CloudProvider, EditionCard } from '@/types';

/** Site-wide strings and links. Edit these to change the brand copy. */
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

/** FAQ section + JSON-LD on every page. */
export const FAQS: FAQItem[] = [
    {
    question: "Why I should choose Pulsar OS and not other Mac-OS like distros?",
    answer: "Most Mac-type distributions that currently exist are either developed by a single person and only look good at first glance but then are not really usable. Others also claim to run Mac apps but are made entirely with AI.",
  },
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
    answer: "Yes, of course, we include all the necessary applications for this. For MacOS apps you have to run a full MacOS on vm with no graphics accel if you dont have an old amd or nvidia gpu, cannot be fixed, is MacOS limitation. We will work soon on MacOS app support...",
  },
  {
    question: "Does it have an App Store?",
    answer: "Yes, we include a convenient program that allows you to install applications in multiple formats, without touching code. We also include the Pulsar Store, which allows you to install applications developed by people who love Pulsar OS, which have been reviewed by artificial intelligence.",
  },
];

/** Cloud provider pills in the Finder / cloud providers section. */
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

/**
 * Feature gallery, in page order. Each entry is one block: title, description,
 * video (or image) and an optional poster. Add, remove or reorder freely.
 */
export const GALLERY_FEATURES: VideoFeature[] = [
    {
    title: "Touch & Face ID",
    description: "Touch ID and Face ID, with protection against identity theft",
    video: "https://hosted.inled.es/cdn/pulsar-demo-touch-face-id.webp",
    poster: "",
  },
    {
    title: "Live Wallpapers",
    description: "Live wallpapers on the desktop and login screen. Lock screen support in progress.",
    video: "https://hosted.inled.es/cdn/pulsar-live-wallpaper-supra-demo.webp",
    poster: "",
  },
    {
    title: "Liquid Glass",
    description: "A gorgeous, translucent material design that flows across the UI. Depth, light, and refinement in every surface. Made by our contributor Angelo, expert in UI",
    video: "https://hosted.inled.es/cdn/pulsar-liquid-glass-pulsar-demos.webp",
    poster: "",
  },
    {
    title: "Notch",
    description: "What you always wanted from the notch on your MacOS, and you had to install a thousand plugins, here it is all in one.",
    video: "https://hosted.inled.es/cdn/pulsaros-notch-pulsar-demos.webp",
    poster: "",
  },
    {
    title: "Circle to Search",
    description: "Shake the cursor, circle anything on your screen and search it on Google, ask Sayri about it, or grab the text with OCR.",
    video: "https://hosted.inled.es/cdn/circle-to-search.webp",
    poster: "/assets/desktop.png",
  },
  {
    title: "Pulsar Firewall",
    description: "Pulsaros has UFW by default. The only firewall interfaze that's actually easy to configure. When an app tries to listen on a port, Pulsar asks you so you dont have to fight with firewall settings",
    video: "https://hosted.inled.es/cdn/pulsar-firewall-pulsar-demos.webp",
    poster: "",
  },
  {
    title: "Real Global Menu",
    description: "No Linux distro has this on GNOME. A true global menu bar at the top of the screen, just like macOS, for every app.",
    video: "https://hosted.inled.es/cdn/pulsar-global-menu-pulsar-demos.webp",
    poster: "",
  },
  {
    title: "Pulsar VPN",
    description: "Forget the headache of Wireguard: Pulsar OS comes with a simple interface for Tailscale, just log in and go",
    video: "https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png",
    poster: "https://hosted.inled.es/cdn/pulsar-vpn-static-pulsar-demos.png",
  },
  {
    title: "Pulsar Windows",
    description: "Windows apps as native apps on desktop. Below, a real Windows consuming as little as possible. You don't need to activate Windows to use it.",
    video: "https://hosted.inled.es/cdn/pulsar-windows-pulsar-demos.webp",
    poster: "",
  },
   {
    title: "File vault (encryption)",
    description: "Encrypt your drive and protect your data, so that if your computer is stolen, they don't steal the most important thing: its content.",
    video: "https://hosted.inled.es/cdn/pulsar-demo-encryption-pulsaros.webp",
    poster: "",
  },
  {
    title: "The Best Spotlight",
    description: "Say goodbye to the shitty spotlight that Apple created for the latest macOS. This spotlight is smart and can do a lot more things than the macOS one.",
    video: "https://hosted.inled.es/cdn/spotlight.webp",
    poster: "",
  },
  {
    title: "Session Restore",
    description: "Reboot or power on, and every app, window, and document reopens on its own. Pick up right where you left off. No Linux distro does this",
    video: "https://hosted.inled.es/cdn/session-restore.webp",
    poster: "/assets/desktop.png",
  },
  {
    title: "Sayri AI Assistant",
    description: "The safe, less expensive and functional alternative to Openclaw! try it now",
    video: "https://hosted.inled.es/cdn/sayri.webp",
    poster: "/assets/spotlight.png",
  },
  {
    title: "Window Management",
    description: "Split view, Mission Control gestures, full screen on dynamic workspaces, and fluid window snapping built for power users.",
    video: "https://hosted.inled.es/cdn/window-mode.webp",
    poster: "/assets/desktop.png",
  },
  {
    title: "Finder, Rebuilt",
    description: "The file manager you already know: Mac-style navigation, previews, tags, and Google Drive, Dropbox, OneDrive, Nextcloud and 50+ cloud providers right where your files live.",
    video: "https://hosted.inled.es/cdn/nautilus-providers.webp",
    poster: "/assets/finder.png",
  },
  {
    title: "App Store",
    description: "Install any package (pkg, deb, aur, gnome extension, pulsar store), ask AI for security of an app and ask it what is the best app you need.",
    video: "https://hosted.inled.es/cdn/app-store.webp",
    poster: "",
  },
  {
    title: "Time Machine",
    description: "Copies of your whole system, stored wherever you like: a network server, one of the 50 cloud providers, or a USB stick. If your computer ever breaks, put everything back.",
    video: "https://hosted.inled.es/cdn/time-machine.webp",
    poster: "/assets/desktop.png",
  },
  {
    title: "Recovery, Built In",
    description: "The only Linux distribution with an isolated recovery system, specifically designed for the most extreme cases, so you can recover your computer, your data and your system without losing files",
    video: "https://hosted.inled.es/cdn/recovery.webp",
    poster: "/assets/select-disk.png",
  },
  {
    title: "Keyboard Remap",
    description: "Are you more of a Mac universe or do you prefer to keep the Linux and Windows commands? No problem: change all shortcuts from Mac to Linux and vice versa.",
    video: "https://hosted.inled.es/cdn/remap-live-wallpaper.webp",
    poster: "/assets/quick-setting.png",
  },
];

/** Texts mirror the "Choose your edition" section on https://os.inled.es/bitten-fruit/ */
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

/** ISO manifest used by the editions/downloads section. */
export const RELEASES_JSON_URL = "https://downloads-os.inled.es/isos.json";
