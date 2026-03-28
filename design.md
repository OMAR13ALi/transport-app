this the design for this app 
<!-- Design System -->
<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#F97316",
                        secondary: "#64748b",
                        background: "#f8fafc",
                        surface: "#ffffff",
                        "on-surface": "#0f172a",
                        "on-surface-variant": "#64748b",
                        outline: "#e2e8f0"
                    },
                    fontFamily: {
                        "headline": ["Plus Jakarta Sans"],
                        "body": ["Inter"],
                        "label": ["Inter"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "2xl": "1.5rem",
                        "3xl": "2rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </style>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .airy-card {
            background: #ffffff;
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
            border: 1px solid #f1f5f9;
        }
        .glass-header {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .safety-gradient {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        }
        body {
            background-color: #f8fafc;
            color: #0f172a;
        }
    </style>
</head>
<body class="font-body selection:bg-orange-100 min-h-screen pb-40">
<!-- Top Navigation Shell - COMPONENTS_9: TopAppBar -->
<header class="fixed top-0 w-full z-50 glass-header border-b border-slate-100 shadow-[0_8px_32px_rgba(44,47,49,0.04)] h-16">
<div class="flex justify-between items-center px-6 h-full max-w-7xl mx-auto">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-orange-600">menu</span>
<span class="text-orange-600 font-plus-jakarta text-lg font-bold tracking-tight">Luminous Logistics</span>
</div>
<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-100">
<img alt="Photo de profil utilisateur" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjsgQszEvG7MsO51xer_6w4p1y4MW7yO3IVUGjuTTCEE1eEy0C1c4zsPoXTmeU2pNf86okaf5JkT2QFU1rEqL46uKvqvKte9CUXVDQUIdVVz7eZlXGA2VxDN29Vt1fkBEZD5vcsSE_m9HInTZyTlidr8CKhZDhJr-7HkjgoZND1V6I-jruaJA-GJHKJXy_IubfcscOFrXdkNO-hzswBB5w_zIEhkl_pA99kW7FNODArNTSw5JFsVRCs15JzAQMdPUQuOhshutE9x5D"/>
</div>
</div>
</header>
<main class="pt-24 px-6 max-w-2xl mx-auto space-y-10">
<!-- Header Section & Station Picker -->
<section class="space-y-6">
<h1 class="font-headline font-extrabold text-4xl text-slate-900 tracking-tight">Colis disponibles</h1>
<!-- Station Picker - High Contrast -->
<div class="airy-card rounded-2xl p-5 flex items-center justify-between group cursor-pointer hover:border-orange-200 transition-all duration-300">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">near_me</span>
</div>
<div>
<p class="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Station actuelle</p>
<p class="font-headline font-extrabold text-slate-900 text-lg">Tunis Central</p>
</div>
</div>
<span class="material-symbols-outlined text-slate-400 group-hover:text-orange-500 transition-colors">expand_more</span>
</div>
</section>
<!-- Package List Container -->
<section class="space-y-6">
<div class="flex items-center justify-between px-2">
<h2 class="font-headline font-bold text-slate-500 text-sm uppercase tracking-widest">Près de chez vous</h2>
<span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">14 colis</span>
</div>
<!-- Package Card 1 -->
<div class="airy-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 active:scale-[0.99]">
<div class="p-7 space-y-6">
<div class="flex justify-between items-start">
<div class="flex gap-4">
<div class="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
<span class="material-symbols-outlined text-3xl">inventory_2</span>
</div>
<div>
<h3 class="font-headline font-bold text-xl text-slate-900">Moyen (5-10kg)</h3>
<div class="flex items-center gap-2 mt-1">
<span class="w-2 h-2 rounded-full bg-orange-500"></span>
<span class="text-slate-500 text-sm font-medium">Urgent • Express</span>
</div>
</div>
</div>
<div class="text-right">
<p class="text-orange-600 font-headline font-extrabold text-3xl tracking-tight">12 DT</p>
<p class="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Récompense</p>
</div>
</div>
<div class="relative py-4 px-5 bg-slate-50 rounded-2xl border border-slate-100/50">
<div class="flex items-center gap-6">
<div class="flex flex-col items-center gap-1">
<span class="w-3 h-3 rounded-full border-2 border-orange-500 bg-white"></span>
<div class="w-0.5 h-10 bg-gradient-to-b from-orange-500 to-orange-200"></div>
<span class="w-3 h-3 rounded-full bg-orange-500"></span>
</div>
<div class="flex flex-col gap-6 py-1">
<div>
<p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Départ</p>
<p class="font-bold text-slate-800">Tunis, Centre Ville</p>
</div>
<div>
<p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Arrivée</p>
<p class="font-bold text-slate-900 text-lg">Sousse, Port de Sousse</p>
</div>
</div>
</div>
</div>
<button class="safety-gradient w-full py-4.5 py-4 rounded-2xl font-headline font-bold text-white shadow-xl shadow-orange-500/20 active:scale-95 transition-all">
                    Accepter la livraison
                </button>
</div>
</div>
<!-- Package Card 2 -->
<div class="airy-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
<div class="p-7 space-y-6">
<div class="flex justify-between items-start">
<div class="flex gap-4">
<div class="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
<span class="material-symbols-outlined text-3xl">package_2</span>
</div>
<div>
<h3 class="font-headline font-bold text-xl text-slate-900">Petit (&lt; 5kg)</h3>
<div class="flex items-center gap-2 mt-1">
<span class="w-2 h-2 rounded-full bg-slate-300"></span>
<span class="text-slate-500 text-sm font-medium">Standard • Fragile</span>
</div>
</div>
</div>
<div class="text-right">
<p class="text-orange-600 font-headline font-extrabold text-3xl tracking-tight">8 DT</p>
<p class="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Récompense</p>
</div>
</div>
<div class="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100/50">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-orange-500">route</span>
<span class="font-bold text-slate-800">Tunis → Hammamet</span>
</div>
<span class="text-xs font-bold text-slate-400">65 km</span>
</div>
<button class="bg-slate-900 w-full py-4 rounded-2xl font-headline font-bold text-white shadow-xl shadow-slate-900/10 active:scale-95 transition-all">
                    Accepter
                </button>
</div>
</div>
<!-- Package Card 3 -->
<div class="airy-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
<div class="p-7 space-y-6">
<div class="flex justify-between items-start">
<div class="flex gap-4">
<div class="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
<span class="material-symbols-outlined text-3xl">deployed_code</span>
</div>
<div>
<h3 class="font-headline font-bold text-xl text-slate-900">Large (&gt; 15kg)</h3>
<div class="flex items-center gap-2 mt-1">
<span class="w-2 h-2 rounded-full bg-red-400"></span>
<span class="text-slate-500 text-sm font-medium">Volumineux</span>
</div>
</div>
</div>
<div class="text-right">
<p class="text-orange-600 font-headline font-extrabold text-3xl tracking-tight">24 DT</p>
<p class="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Récompense</p>
</div>
</div>
<div class="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100/50">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-orange-500">local_shipping</span>
<span class="font-bold text-slate-800">Tunis → Bizerte</span>
</div>
<span class="text-xs font-bold text-slate-400">72 km</span>
</div>
<button class="bg-slate-900 w-full py-4 rounded-2xl font-headline font-bold text-white shadow-xl shadow-slate-900/10 active:scale-95 transition-all">
                    Accepter
                </button>
</div>
</div>
</section>
</main>
<!-- Navigation Shell - COMPONENTS_9: BottomNavBar -->
<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md rounded-3xl overflow-hidden bg-white/80 backdrop-blur-lg shadow-[0_20px_50px_rgba(249,115,22,0.1)] z-50">
<div class="flex justify-around items-center p-2">
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined">local_shipping</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-plus-jakarta mt-1">Fleet</span>
</a>
<a class="flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl px-5 py-2 shadow-lg shadow-orange-500/30 active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">package_2</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-plus-jakarta mt-1">Shipments</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined">map</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-plus-jakarta mt-1">Routes</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-plus-jakarta mt-1">Profile</span>
</a>
</div>
</nav>
<!-- Decorative Elements -->
<div class="fixed top-1/4 -left-20 w-80 h-80 bg-orange-100/30 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
<div class="fixed bottom-1/4 -right-20 w-96 h-96 bg-blue-50/50 rounded-full blur-[140px] pointer-events-none z-[-1]"></div>
</body></html>

<!-- Flux Chauffeur (Clair) -->
<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#F97316",
              "on-primary": "#FFFFFF",
              "background": "#F8FAFC",
              "surface": "#FFFFFF",
              "on-surface": "#0F172A",
              "on-surface-variant": "#64748B",
              "outline-variant": "#E2E8F0",
              "secondary-container": "#F1F5F9",
              "on-secondary-container": "#475569",
              "tertiary-container": "#FFF7ED",
              "tertiary": "#EA580C"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.5rem", "lg": "0.75rem", "xl": "1rem", "2xl": "1.5rem", "3xl": "2rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .liquid-gradient {
            background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
        }
        body {
            background-color: #F8FAFC;
            color: #0F172A;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
    </style>
</head>
<body class="font-body selection:bg-primary selection:text-on-primary overflow-x-hidden">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(44,47,49,0.04)] border-b border-slate-100/50">
<div class="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
<div class="flex items-center gap-3">
<button class="text-slate-500 hover:bg-orange-50 p-2 rounded-full transition-colors active:scale-95 duration-200">
<span class="material-symbols-outlined">menu</span>
</button>
<span class="text-orange-600 font-extrabold italic tracking-tighter font-headline text-lg">Luminous Logistics</span>
</div>
<div class="flex items-center gap-4">
<div class="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-100 shadow-sm transition-transform active:scale-95 duration-200 cursor-pointer">
<img alt="User profile avatar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwX9--tHlYHqvtRBtMhaE1AH8FD3aBKYDZc5f20s9eUF4iXGcx22qN_Qf_rnMxACDqs8ZmbVsiQTap2_fvqJ3GZi0Ll2h2LeBQILpcz1EXRrJIF5hIJvwkQanO3XWYIScEQGscyyuyy-CG5-Wt9Mrnn0zrMy-_1Jdhq3fa7AQm3PCU8jxVALl9zvmKXkI-cEGE1HuGD9iOJtGmNur-24uyT7F6tjX-_NZCQIjixpEDMZqxhVC6SQ96dJhXmqfSzk7BUvSWtmidcLVe"/>
</div>
</div>
</div>
</header>
<main class="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-10">
<!-- Welcome Header -->
<section class="space-y-1">
<h1 class="font-headline text-3xl font-extrabold tracking-tight text-slate-900">Bonjour, Ahmed</h1>
<p class="text-slate-500 font-medium">Gérez vos expéditions en toute fluidité.</p>
</section>
<!-- Primary CTA: Large 'Envoyer un colis' -->
<section>
<button class="w-full liquid-gradient group relative overflow-hidden rounded-3xl p-6 flex flex-col items-start gap-4 shadow-xl shadow-orange-500/20 active:scale-[0.98] transition-all duration-300">
<!-- Overlay Effect -->
<div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div class="absolute -top-12 -right-12 w-48 h-48 bg-white/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
<div class="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-sm">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">local_shipping</span>
</div>
<div class="text-left">
<h2 class="font-headline text-2xl font-bold text-white leading-none mb-1">Envoyer un colis</h2>
<p class="text-white/80 font-medium text-sm">Créez un nouvel envoi instantanément</p>
</div>
<div class="absolute bottom-6 right-6 bg-white/20 p-2 rounded-full backdrop-blur-sm">
<span class="material-symbols-outlined text-white">arrow_forward</span>
</div>
</button>
</section>
<!-- Section: Mes envois actifs -->
<section class="space-y-6">
<div class="flex items-center justify-between">
<h3 class="font-headline text-xl font-bold text-slate-900">Mes envois actifs</h3>
<span class="text-orange-600 font-bold text-xs bg-orange-50 px-3 py-1 rounded-full border border-orange-100">3 en cours</span>
</div>
<div class="grid gap-5">
<!-- Shipment Card 1 -->
<div class="bg-white rounded-3xl p-5 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-lg transition-shadow">
<div class="flex justify-between items-start mb-6">
<div class="space-y-1">
<p class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Référence: #LL-4920</p>
<h4 class="font-headline text-lg font-bold text-slate-900">Tunis → Sfax</h4>
</div>
<div class="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-xl border border-orange-100 flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
<span class="text-[10px] font-bold uppercase tracking-wider">À la station</span>
</div>
</div>
<div class="flex items-end justify-between">
<div class="space-y-1">
<div class="flex items-center gap-2 text-slate-500">
<span class="material-symbols-outlined text-sm">schedule</span>
<span class="text-sm font-medium">Il y a 2h</span>
</div>
</div>
<div class="text-right">
<span class="text-2xl font-black font-headline text-slate-900">15 <span class="text-sm font-bold text-slate-400">DT</span></span>
</div>
</div>
<!-- Subtle Progress Path -->
<div class="mt-6 h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
<div class="h-full w-1/3 liquid-gradient rounded-full"></div>
</div>
</div>
<!-- Shipment Card 2 -->
<div class="bg-white rounded-3xl p-5 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden opacity-90 hover:opacity-100 transition-all hover:shadow-lg">
<div class="flex justify-between items-start mb-6">
<div class="space-y-1">
<p class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Référence: #LL-5011</p>
<h4 class="font-headline text-lg font-bold text-slate-900">Sousse → Bizerte</h4>
</div>
<div class="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-2">
<span class="text-[10px] font-bold uppercase tracking-wider">Ramassage</span>
</div>
</div>
<div class="flex items-end justify-between">
<div class="space-y-1">
<div class="flex items-center gap-2 text-slate-500">
<span class="material-symbols-outlined text-sm">schedule</span>
<span class="text-sm font-medium">Hier, 18:30</span>
</div>
</div>
<div class="text-right">
<span class="text-2xl font-black font-headline text-slate-900">22 <span class="text-sm font-bold text-slate-400">DT</span></span>
</div>
</div>
</div>
</div>
</section>
<!-- Informative Bento Card -->
<section class="grid grid-cols-2 gap-4">
<div class="bg-white border border-slate-100 p-5 rounded-3xl space-y-3 shadow-sm">
<div class="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shield</span>
</div>
<div>
<h5 class="font-headline font-bold text-slate-900">Assurance</h5>
<p class="text-xs text-slate-500">Colis protégés à 100%</p>
</div>
</div>
<div class="bg-white border border-slate-100 p-5 rounded-3xl space-y-3 shadow-sm">
<div class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">map</span>
</div>
<div>
<h5 class="font-headline font-bold text-slate-900">Couverture</h5>
<p class="text-xs text-slate-500">24 Gouvernorats</p>
</div>
</div>
</section>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md rounded-3xl overflow-hidden bg-white/80 backdrop-blur-lg shadow-[0_20px_50px_rgba(249,115,22,0.1)] z-50 flex justify-around items-center p-2">
<a class="flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl px-5 py-2 shadow-lg shadow-orange-500/30 active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined text-[24px]" style="font-variation-settings: 'FILL' 1;">local_shipping</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-headline mt-1">Fleet</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined text-[24px]">package_2</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-headline mt-1">Shipments</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined text-[24px]">map</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-headline mt-1">Routes</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined text-[24px]">person</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-headline mt-1">Profile</span>
</a>
</nav>
</body></html>

<!-- Tableau de bord (Clair) -->
<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#F97316",
                        "surface": "#F8FAFC",
                        "on-surface": "#0F172A",
                        "surface-container": "#FFFFFF",
                        "on-surface-variant": "#64748B",
                        "outline-variant": "#E2E8F0"
                    },
                    fontFamily: {
                        "plus-jakarta": ["Plus Jakarta Sans"],
                        "headline": ["Plus Jakarta Sans"],
                        "body": ["Inter"],
                        "label": ["Inter"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "2xl": "1.25rem",
                        "3xl": "1.5rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .liquid-gradient {
            background: linear-gradient(135deg, #F97316 0%, #FB923C 100%);
        }
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body min-h-screen pb-32">
<!-- TopAppBar from COMPONENTS_9 -->
<header class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(44,47,49,0.04)] h-16 border-b border-slate-100/50">
<div class="flex justify-between items-center px-6 h-full max-w-7xl mx-auto">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-orange-600 active:scale-95 duration-200 cursor-pointer">arrow_back</span>
<h1 class="font-plus-jakarta text-lg font-bold tracking-tight text-orange-600">Tunis → Sfax</h1>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-slate-500">location_on</span>
<div class="w-8 h-8 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
<img alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCix8EoUdAWhpS9FVsP8uYZeONpvgyAFdpHDpK8eIyblHKyCUbHKsx79yW39kBLNz1a_qup_FX1QPDYA2Zbfp-p346iChMc37g0MEaLSRdyFbc148kg_7bCe4h3_vTlp4H-45T5ESSAricxHpCNp1ecFMgqatljmE6oFt7od31GqoVgH00jK6a6z-Xyqap2x91VLVSzD2QxDiV5mna8mmxC9_62wurYB5YyrM4KN2-CvMuE4zaVKM1AUY12Gvx29CY6MzibFBjA-KJ"/>
</div>
</div>
</div>
</header>
<main class="pt-20 px-4 max-w-2xl mx-auto space-y-6">
<!-- Route Map Placeholder - Adjusted for light interface -->
<section class="relative w-full h-48 rounded-3xl overflow-hidden shadow-sm border border-slate-100">
<div class="absolute inset-0 bg-slate-50">
<img class="w-full h-full object-cover opacity-60 mix-blend-multiply grayscale-[0.2]" data-alt="Abstract aerial map of Tunisian landscape with glowing digital route lines in orange and blue flowing through the terrain" data-location="Tunisia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7mIO3sMayDfdAMeLyYZt8y21NYfaglK-1pHukbbOioL-LIAknYRVzONqWYKrOLHYkP3BEIrZWKS96QTJk88iNEcF3-oJceMAI0_S4D7hjtH_ApGT-MVMMYr4mpr0olWpW41XCW6stUjP4WEzYSngo3DpBv19WUkeKBJ__x8_QPsxpazX5jYfMU223vHM8G5FjP8GomPajGfHdXpMn_GqNpDL_qa8Q4-VMVuHkqgtwtAsQ-RCkkkrF-xsLgn09CjZr0KtnyjeBnSe2"/>
</div>
<div class="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
<div class="absolute bottom-4 left-6 flex items-center gap-3">
<div class="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.4)]"></div>
<p class="text-sm font-bold tracking-wide font-headline text-slate-900">En cours vers Sfax</p>
</div>
</section>
<!-- Clean 3-Step Stepper -->
<section class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-8">
<div class="flex justify-between relative">
<!-- Progress Line -->
<div class="absolute top-4 left-0 w-full h-[2px] bg-slate-100 z-0">
<div class="h-full bg-orange-500 w-1/2"></div>
</div>
<!-- Steps -->
<div class="relative z-10 flex flex-col items-center gap-2">
<div class="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">check</span>
</div>
<span class="font-label text-[10px] uppercase tracking-widest text-orange-600 font-bold">Reçu</span>
</div>
<div class="relative z-10 flex flex-col items-center gap-2">
<div class="w-8 h-8 rounded-full liquid-gradient flex items-center justify-center text-white ring-4 ring-orange-50">
<span class="material-symbols-outlined text-sm">local_shipping</span>
</div>
<span class="font-label text-[10px] uppercase tracking-widest text-orange-600 font-bold">En route</span>
</div>
<div class="relative z-10 flex flex-col items-center gap-2">
<div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined text-sm">inventory_2</span>
</div>
<span class="font-label text-[10px] uppercase tracking-widest text-slate-400 font-bold">Livré</span>
</div>
</div>
</section>
<!-- Bento Details Grid with Glassmorphism -->
<section class="grid grid-cols-2 gap-4">
<!-- Poids Card -->
<div class="glass-panel p-5 rounded-3xl shadow-sm flex flex-col gap-3">
<div class="flex items-center gap-2 text-orange-600">
<span class="material-symbols-outlined text-lg">weight</span>
<span class="font-label text-[10px] uppercase tracking-widest font-bold">Poids</span>
</div>
<div class="flex items-baseline gap-1">
<span class="text-2xl font-headline font-extrabold text-slate-900">8</span>
<span class="text-sm font-medium text-slate-500">kg</span>
</div>
</div>
<!-- Taille Card -->
<div class="glass-panel p-5 rounded-3xl shadow-sm flex flex-col gap-3">
<div class="flex items-center gap-2 text-orange-600">
<span class="material-symbols-outlined text-lg">straighten</span>
<span class="font-label text-[10px] uppercase tracking-widest font-bold">Taille</span>
</div>
<div class="flex items-baseline gap-1">
<span class="text-2xl font-headline font-extrabold text-slate-900">Moyen</span>
</div>
</div>
<!-- Prix Card -->
<div class="glass-panel p-5 rounded-3xl shadow-sm flex flex-col gap-3">
<div class="flex items-center gap-2 text-orange-600">
<span class="material-symbols-outlined text-lg">payments</span>
<span class="font-label text-[10px] uppercase tracking-widest font-bold">Prix</span>
</div>
<div class="flex items-baseline gap-1">
<span class="text-2xl font-headline font-extrabold text-slate-900">15</span>
<span class="text-sm font-bold text-slate-500 font-label uppercase">DT</span>
</div>
</div>
<!-- Paiement Card -->
<div class="glass-panel p-5 rounded-3xl shadow-sm flex flex-col gap-3">
<div class="flex items-center gap-2 text-orange-600">
<span class="material-symbols-outlined text-lg">account_balance_wallet</span>
<span class="font-label text-[10px] uppercase tracking-widest font-bold">Paiement</span>
</div>
<div class="flex items-center gap-2">
<span class="text-lg font-headline font-extrabold text-slate-900">Espèces</span>
<span class="text-[9px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-black uppercase">Cash</span>
</div>
</div>
</section>
<!-- CTAs -->
<section class="flex flex-col gap-4 mt-8">
<button class="w-full py-5 rounded-2xl liquid-gradient text-white font-headline font-extrabold text-base tracking-tight shadow-lg shadow-orange-500/30 active:scale-95 transition-all">
                Confirmer Récupération
            </button>
<button class="w-full py-5 rounded-2xl border-2 border-orange-500/20 bg-white text-orange-600 font-headline font-bold text-base tracking-tight active:scale-95 transition-all flex items-center justify-center gap-3">
<span class="material-symbols-outlined">call</span>
                Appeler l'expéditeur
            </button>
</section>
</main>
<!-- BottomNavBar from COMPONENTS_9 -->
<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_20px_50px_rgba(249,115,22,0.1)] z-50 overflow-hidden">
<div class="flex justify-around items-center p-2">
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300" href="#">
<span class="material-symbols-outlined">local_shipping</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-plus-jakarta">Fleet</span>
</a>
<a class="flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl px-5 py-2 shadow-lg shadow-orange-500/30 active:scale-90 duration-300" href="#">
<span class="material-symbols-outlined">package_2</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-plus-jakarta">Shipments</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300" href="#">
<span class="material-symbols-outlined">map</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-plus-jakarta">Routes</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300" href="#">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-plus-jakarta">Profile</span>
</a>
</div>
</nav>
</body></html>

<!-- Détails du colis (Clair) -->
<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#F97316",
              "on-primary": "#FFFFFF",
              "surface": "#F8FAFC",
              "on-surface": "#0F172A",
              "on-surface-variant": "#475569",
              "outline": "#E2E8F0",
              "outline-variant": "#CBD5E1",
              "secondary-container": "#F1F5F9",
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Inter"],
              "label": ["Plus Jakarta Sans"]
            },
            borderRadius: {
              "DEFAULT": "0.5rem",
              "lg": "0.75rem",
              "xl": "1rem",
              "2xl": "1.5rem",
              "3xl": "2rem",
              "full": "9999px"
            },
          },
        },
      }
    </script>
<style>
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }
        .liquid-gradient {
            background: linear-gradient(135deg, #F97316 0%, #FB923C 100%);
        }
        .bg-mesh {
            background-color: #F8FAFC;
            background-image: 
                radial-gradient(at 0% 0%, rgba(249, 115, 22, 0.05) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(51, 65, 85, 0.03) 0px, transparent 50%);
        }
        .ghost-border {
            border: 1px solid rgba(226, 232, 240, 0.8);
        }
        .active-role-border {
            border: 2px solid #F97316;
            box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.1);
        }
    </style>
<style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
</head>
<body class="bg-mesh min-h-screen text-on-surface font-body selection:bg-primary/20">
<!-- Header Navigation (Shared Component: TopAppBar) -->
<header class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(44,47,49,0.04)] flex justify-between items-center px-6 h-16">
<div class="text-orange-600 font-headline font-extrabold italic tracking-tighter text-lg">
            Logistique Liquide
        </div>
<div class="flex items-center gap-2 text-on-surface-variant font-label text-sm font-semibold">
<span class="material-symbols-outlined text-orange-500" style="font-variation-settings: 'FILL' 1;">location_on</span>
            Tunis, TN
        </div>
</header>
<main class="relative pt-24 pb-32 px-6 max-w-lg mx-auto flex flex-col min-h-screen">
<!-- Hero Section -->
<section class="mt-8 mb-12">
<h1 class="font-headline font-extrabold text-4xl leading-tight text-slate-900 tracking-tight mb-4">
                Bienvenue chez <br/>
<span class="text-transparent bg-clip-text liquid-gradient">Logistique Liquide</span>
</h1>
<p class="text-on-surface-variant font-body text-lg leading-relaxed">
                Choisissez votre rôle pour commencer votre voyage à travers le réseau logistique le plus fluide de Tunisie.
            </p>
</section>
<!-- Role Selection Grid -->
<div class="space-y-5">
<!-- Sender Option -->
<label class="relative block group cursor-pointer">
<input checked="" class="peer sr-only" name="user_role" type="radio"/>
<div class="glass-card ghost-border rounded-3xl p-6 transition-all duration-300 peer-checked:active-role-border hover:bg-white/90 shadow-sm">
<div class="flex items-start gap-5">
<div class="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 transition-transform group-hover:scale-110">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">package_2</span>
</div>
<div class="flex-1">
<h3 class="font-headline font-bold text-xl text-slate-900 mb-1">Expéditeur</h3>
<p class="text-on-surface-variant text-sm font-body">Je veux envoyer un colis en toute sécurité à travers le pays.</p>
</div>
<div class="opacity-0 peer-checked:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-orange-600">check_circle</span>
</div>
</div>
</div>
</label>
<!-- Driver Option -->
<label class="relative block group cursor-pointer">
<input class="peer sr-only" name="user_role" type="radio"/>
<div class="glass-card ghost-border rounded-3xl p-6 transition-all duration-300 peer-checked:active-role-border hover:bg-white/90 shadow-sm">
<div class="flex items-start gap-5">
<div class="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-orange-600 transition-transform group-hover:scale-110">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">local_shipping</span>
</div>
<div class="flex-1">
<h3 class="font-headline font-bold text-xl text-slate-900 mb-1">Chauffeur</h3>
<p class="text-on-surface-variant text-sm font-body">Je veux transporter des colis et maximiser mes revenus.</p>
</div>
<div class="opacity-0 peer-checked:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-orange-600">check_circle</span>
</div>
</div>
</div>
</label>
</div>
<!-- Decorative Element -->
<div class="mt-12 mb-8 relative h-32 w-full overflow-hidden rounded-3xl shadow-inner bg-slate-200">
<img class="w-full h-full object-cover opacity-60 mix-blend-multiply" data-alt="Abstract cinematic view of a modern highway in Tunisia at night with long exposure light trails" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8xiku0OH1TAC4nsqQ7IhzSS88UQzKDNDPWjg5Hu7a_VPrXVs94Mp_WsyMawWvYXUQfUALs5q-mwPWoTyN6vfTCzanl5zM-dfoMzi31D1TKD4GCiDl3Q9dultjKT6zCIXd1f1jGD9mUTOJMs5OuobNl5yIWNUrfo3cv7cqXIIRiUYHBhdKw2U2a88_LDynIdyKwF1oqrPOVOl2qW8XFLho9vogmbwdBfCk_L037vvJBWV5pjNFhNTN4uUxfKWNFCarInMnPOO6NcyC"/>
<div class="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
</div>
<!-- Footer Action -->
<div class="mt-auto pt-8">
<button class="w-full liquid-gradient text-white font-headline font-bold text-lg py-5 rounded-2xl shadow-xl shadow-orange-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Continuer
                <span class="material-symbols-outlined font-bold">arrow_forward</span>
</button>
<p class="text-center mt-6 text-on-surface-variant font-label text-sm font-medium">
                Vous avez déjà un compte ? <a class="text-orange-600 font-bold hover:underline" href="#">Se connecter</a>
</p>
</div>
</main>
<!-- Bottom Navigation Shell (Suppressed as per rules for Transactional/Onboarding) -->
</body></html>

<!-- Onboarding - Rôle (Clair) -->
<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#F97316",
              "on-primary": "#FFFFFF",
              "background": "#F8FAFC",
              "surface": "#FFFFFF",
              "on-surface": "#0F172A",
              "on-surface-variant": "#64748B",
              "outline-variant": "#E2E8F0",
              "secondary-container": "#F1F5F9",
              "on-secondary-container": "#475569",
              "tertiary-container": "#FFF7ED",
              "tertiary": "#EA580C"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {
                "DEFAULT": "0.5rem", 
                "lg": "0.75rem", 
                "xl": "1rem", 
                "2xl": "1.5rem",
                "3xl": "2rem",
                "full": "9999px"
            },
          },
        },
      }
    </script>
<style>
        body { background-color: #F8FAFC; font-family: 'Inter', sans-serif; }
        .glass-panel {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .liquid-gradient {
            background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
</head>
<body class="text-on-surface selection:bg-primary/20 bg-background overflow-x-hidden">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(44,47,49,0.04)] border-b border-slate-100/50">
<div class="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
<div class="flex items-center gap-3">
<button class="p-2 text-slate-500 hover:bg-orange-50 transition-colors active:scale-95 duration-200 rounded-xl">
<span class="material-symbols-outlined">menu</span>
</button>
<span class="text-orange-600 font-extrabold italic tracking-tighter font-headline text-lg">Luminous Logistics</span>
</div>
<div class="flex items-center gap-4">
<div class="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-100 shadow-sm transition-transform active:scale-95 duration-200 cursor-pointer">
<img alt="User profile avatar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwX9--tHlYHqvtRBtMhaE1AH8FD3aBKYDZc5f20s9eUF4iXGcx22qN_Qf_rnMxACDqs8ZmbVsiQTap2_fvqJ3GZi0Ll2h2LeBQILpcz1EXRrJIF5hIJvwkQanO3XWYIScEQGscyyuyy-CG5-Wt9Mrnn0zrMy-_1Jdhq3fa7AQm3PCU8jxVALl9zvmKXkI-cEGE1HuGD9iOJtGmNur-24uyT7F6tjX-_NZCQIjixpEDMZqxhVC6SQ96dJhXmqfSzk7BUvSWtmidcLVe"/>
</div>
</div>
</div>
</header>
<main class="pt-24 pb-40 px-6 flex flex-col items-center max-w-lg mx-auto min-h-screen">
<!-- Verification Header -->
<div class="w-full mb-8 text-left">
<span class="text-primary font-headline font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Vérification de livraison</span>
<h1 class="text-3xl font-headline font-extrabold text-slate-900 tracking-tight">Scanner pour valider</h1>
</div>
<!-- Main Glass Card -->
<div class="w-full glass-panel rounded-[2.5rem] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)] relative">
<!-- QR Code Section -->
<div class="relative flex flex-col items-center">
<div class="bg-white p-6 rounded-3xl shadow-sm mb-8 transition-transform hover:scale-[1.02] duration-500 border border-slate-100">
<!-- SVG QR Representation -->
<svg class="w-52 h-52 text-slate-900" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3H9V9H3V3ZM5 5V7H7V5H5ZM15 3H21V9H15V3ZM17 5V7H19V5H17ZM3 15H9V21H3V15ZM5 17V19H7V17H5ZM15 15H17V17H15V15ZM17 17H19V19H17V17ZM19 15H21V17H19V15ZM15 19H17V21H15V19ZM19 19H21V21H19V19ZM11 3H13V5H11V3ZM11 7H13V9H11V7ZM11 11H13V13H11V11ZM3 11H5V13H3V11ZM7 11H9V13H7V11ZM15 11H17V13H15V11ZM19 11H21V13H19V11ZM11 15H13V17H11V15ZM11 19H13V21|H11V19ZM13 17H15V19H13V17Z" fill="currentColor"></path>
<rect fill="#F97316" height="3" rx="0.5" width="3" x="10.5" y="10.5"></rect>
</svg>
</div>
<!-- Instructions -->
<div class="space-y-4 w-full">
<div class="bg-white/50 p-4 rounded-2xl border border-white/60 flex items-start gap-4">
<div class="bg-orange-500 text-white p-2 rounded-xl shadow-sm">
<span class="material-symbols-outlined text-xl leading-none">person</span>
</div>
<div>
<p class="text-[10px] font-headline font-bold text-orange-600 uppercase tracking-widest mb-1">Instruction Expéditeur</p>
<p class="text-sm font-body text-slate-900 font-medium leading-tight">Montrez ce code au chauffeur pour confirmer la livraison.</p>
</div>
</div>
<div class="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/60 flex items-start gap-4">
<div class="bg-slate-600 text-white p-2 rounded-xl shadow-sm">
<span class="material-symbols-outlined text-xl leading-none">local_shipping</span>
</div>
<div>
<p class="text-[10px] font-headline font-bold text-slate-600 uppercase tracking-widest mb-1">Instruction Chauffeur</p>
<p class="text-sm font-body text-slate-900 font-medium leading-tight">Scannez le code du destinataire.</p>
</div>
</div>
</div>
</div>
</div>
<!-- Actions -->
<div class="mt-8 w-full flex flex-col gap-4">
<button class="w-full h-14 rounded-2xl liquid-gradient text-white font-headline font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] duration-200 shadow-lg shadow-orange-500/20">
<span class="material-symbols-outlined text-xl">qr_code_scanner</span>
            Démarrer le Scan
        </button>
<button class="w-full h-14 rounded-2xl bg-white border-2 border-slate-100 text-slate-600 font-headline font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-[0.98] duration-200">
<span class="material-symbols-outlined text-xl">arrow_back</span>
            Retour aux détails
        </button>
</div>
<!-- Shipment Summary Cards -->
<div class="mt-8 w-full grid grid-cols-2 gap-4">
<div class="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
<p class="text-[10px] font-headline font-bold text-slate-400 uppercase tracking-widest mb-2">ID Expédition</p>
<p class="text-lg font-headline font-extrabold text-slate-900">#LL-9284</p>
</div>
<div class="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
<p class="text-[10px] font-headline font-bold text-slate-400 uppercase tracking-widest mb-2">Estimation</p>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
<p class="text-lg font-headline font-extrabold text-slate-900">14:30 <span class="text-xs font-bold text-slate-400">DT</span></p>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md rounded-3xl overflow-hidden bg-white/80 backdrop-blur-lg shadow-[0_20px_50px_rgba(249,115,22,0.1)] z-50 flex justify-around items-center p-2">
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined text-[24px]">local_shipping</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-headline mt-1">Fleet</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined text-[24px]">package_2</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-headline mt-1">Shipments</span>
</a>
<a class="flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl px-5 py-2 shadow-lg shadow-orange-500/30 active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined text-[24px]" style="font-variation-settings: 'FILL' 1;">qr_code_scanner</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-headline mt-1">Scanner</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 px-4 py-2 hover:text-orange-400 transition-all active:scale-90 duration-300 ease-out" href="#">
<span class="material-symbols-outlined text-[24px]">person</span>
<span class="text-[10px] font-bold uppercase tracking-widest font-headline mt-1">Profile</span>
</a>
</nav>
</body></html>