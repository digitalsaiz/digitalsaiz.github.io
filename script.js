// ── Inject language pickers from template FIRST ─────────────────────────
// Must run before anything tries to query .lang-picker elements.
(function injectPickers() {
  const tpl = document.getElementById('lang-picker-tpl');
  if (!tpl) return;
  ['lang-picker-desktop', 'lang-picker-mobile'].forEach(id => {
    const slot = document.getElementById(id);
    if (slot) slot.replaceWith(tpl.content.cloneNode(true));
  });
})();

// ── Translations ──────────────────────────────────────────────────────────
const T = {
  en: {
    // nav
    'nav.who':      "Who It's For",
    'nav.how':      'How It Works',
    'nav.features': 'Features',
    'nav.plans':    'Plans',
    'nav.security': 'Security',
    'nav.download': 'Download Free',

    // hero
    'hero.badge':    '✦ Powered by AI · Built for APD & Medicaid Providers',
    'hero.h1':       'Turn Every Session Into a<br /><span class="teal">Professional Service Note</span><br />— in Seconds',
    'hero.sub':      'Note TCA guides you through a quick session wizard and generates a complete, audit-ready note you can share or save immediately. No more blank screens. No more generic language.',
    'hero.ios-pre':  'Download on the',
    'hero.ios':      'App Store',
    'hero.and-pre':  'Get it on',
    'hero.and':      'Google Play',
    'hero.free':     '<strong>Start free</strong> — no account required to explore the app.',
    'mockup.label':  'Generated Session Note · ABA',
    'mockup.note':   "The provider implemented behavior intervention strategies during today's session. The individual demonstrated improved task engagement and responded positively to prompting techniques. Guardian communication was documented and goals reviewed per the current support plan…",
    'mockup.chip1':  '✦ AI Generated',
    'mockup.chip2':  '📋 Share',
    'mockup.chip3':  '☁ Saved',

    // who
    'who.tag':   "Who It's For",
    'who.title': 'Built for Every APD & Medicaid Service Provider',
    'who.sub':   'Note TCA is purpose-built for the providers who spend hours on documentation after every shift. Take that time back.',
    'who.c1.h':  'Direct Support Professionals',
    'who.c1.p':  'DSPs providing companion, personal support, or respite services.',
    'who.c2.h':  'Behavior Analysts & ABA',
    'who.c2.p':  'Behavior analysts and assistants implementing behavior intervention plans.',
    'who.c3.h':  'Speech Therapists',
    'who.c3.p':  'SLPs documenting communication and language therapy sessions.',
    'who.c4.h':  'Occupational Therapists',
    'who.c4.p':  'OTs working on fine motor, sensory, and daily living skills.',
    'who.c5.h':  'Physical Therapists',
    'who.c5.p':  'PTs documenting mobility, strength, and balance therapy progress.',
    'who.c6.h':  'Waiver Support Coordinators',
    'who.c6.p':  'WSCs managing care coordination and support plan documentation.',

    // how
    'how.tag':   'How It Works',
    'how.title': 'From Session to Signed Note in 4 Steps',
    'how.sub':   'No templates to fill. No copy-pasting. Just answer a few quick questions and let AI do the rest.',
    'how.s1.h':  'Open the App',
    'how.s1.p':  'Tap New Note from the home screen. Start a note any time — even mid-session.',
    'how.s2.h':  'Walk the Wizard',
    'how.s2.p':  'Provider, recipient, service type, location, date, and a short service-specific questionnaire. Takes under 2 minutes.',
    'how.s3.h':  'Tap Generate',
    'how.s3.p':  'AI writes a professional 2–4 paragraph note in seconds. Specific, clinical, and audit-ready — never generic.',
    'how.s4.h':  'Review & Share',
    'how.s4.p':  'Edit if needed, then share or save to the cloud. Notes stay searchable in your history.',

    // features
    'feat.tag':    'Key Features',
    'feat.title':  'Everything You Need, Nothing You Don\'t',
    'feat.sub':    'Every feature was designed around a real provider workflow.',
    'feat.f1.h':   'AI Note Generation',
    'feat.f1.p':   'Powered by leading AI models with automatic failover. Notes are specific, concrete, and audit-ready — never generic.',
    'feat.f2.h':   'Multiple Languages',
    'feat.f2.p':   'Generate notes in English, Spanish, or Haitian Creole. Switch languages at any step of the wizard.',
    'feat.f3.h':   'Bilingual Output',
    'feat.f3.p':   'Get the official English note plus a reference translation in one tap — no extra steps needed.',
    'feat.f4.h':   'Service Sets',
    'feat.f4.p':   'Save your most common provider + service + location combos and start a full note in one tap from the home screen.',
    'feat.f5.h':   'Smart Preferences',
    'feat.f5.p':   'The app remembers your note options per service and recipient so every new note starts exactly how you like it.',
    'feat.f6.h':   'Recipient Management',
    'feat.f6.p':   'Store client profiles including diagnosis, guardians, preferences, and goals. AI uses this context for richer notes.',
    'feat.f7.h':   'Full History',
    'feat.f7.p':   'All saved notes are stored in the cloud and searchable by client, service, date range, or provider.',
    'feat.f8.h':   'Edit & Regenerate',
    'feat.f8.p':   'Manually edit any note or add suggestions and regenerate. Compare versions with full undo/redo history.',
    'feat.f9.h':   'Works on Every Device',
    'feat.f9.p':   'Native iOS and Android apps. Start a note on your phone, review it on your tablet — everything syncs instantly.',

    // services
    'svc.tag':   'Service Types',
    'svc.title': 'Notes for Every Type of Service',
    'svc.sub':   'Note TCA includes purpose-built questionnaires for each service type so AI can capture exactly the right detail.',
    'svc.s1.h':  'Companion',              'svc.s1.p': 'Socialization, supervision & community activities',
    'svc.s2.h':  'Personal Supports',      'svc.s2.p': 'Personal care, ADLs & skill building',
    'svc.s3.h':  'Respite',                'svc.s3.p': 'Supervision & caregiver relief',
    'svc.s4.h':  'WSC',                    'svc.s4.p': 'Care coordination & support plan management',
    'svc.s5.h':  'Behavior Analyst / ABA', 'svc.s5.p': 'Behavior intervention & skill building',
    'svc.s6.h':  'Speech Therapy',         'svc.s6.p': 'Communication & language therapy',
    'svc.s7.h':  'Occupational Therapy',   'svc.s7.p': 'Fine motor, sensory & daily living skills',
    'svc.s8.h':  'Physical Therapy',       'svc.s8.p': 'Mobility, strength & balance therapy',

    // pricing
    'pr.tag':    'Subscription Plans',
    'pr.title':  'Simple, Transparent Pricing',
    'pr.sub':    "Start free with no account required. Upgrade when you're ready for more.",
    'pr.b.h':    'AI Note Generation',
    'pr.b.desc': 'Everything you need to generate professional, audit-ready session notes using AI.',
    'pr.b.f1':   'Daily AI note generations',
    'pr.b.f2':   'English, Spanish & Haitian Creole',
    'pr.b.f3':   'Custom provider & recipient references',
    'pr.b.f4':   'First-person or third-person writing',
    'pr.b.f5':   'Edit & regenerate with suggestions',
    'pr.b.f6':   '3 free notes to start — no account needed',
    'pr.b.cta':  'Get Started Free',
    'pr.p.badge': '⭐ Premium',
    'pr.p.h':    'Cloud Storage',
    'pr.p.desc': 'Everything in AI Note Generation, plus full cloud sync and team-ready features.',
    'pr.p.f1':   'Everything in AI Note Generation',
    'pr.p.f2':   'Save & access notes from any device',
    'pr.p.f3':   'Unlimited recipient & provider profiles',
    'pr.p.f4':   'Service sets for 1-tap note creation',
    'pr.p.f5':   'Full searchable notes history',
    'pr.p.f6':   'Offline-ready with cloud sync',
    'pr.p.cta':  'Download & Subscribe',
    'pr.free':   '<strong>Start free</strong> — explore the app with no account required. Free trial included for new users.',

    // privacy
    'prv.tag':   'Privacy & Security',
    'prv.title': 'Your Data, Protected',
    'prv.sub':   'Note TCA is built with security and data ownership at its core. You are always in control.',
    'prv.c1.h':  'Encrypted Storage',
    'prv.c1.p':  'Notes are stored securely via Supabase — encrypted at rest and in transit using industry-standard protocols.',
    'prv.c2.h':  'Minimal Data Sharing',
    'prv.c2.p':  'No PHI is shared with third parties beyond what is needed for AI note generation. We never sell your data.',
    'prv.c3.h':  'You Own Your Data',
    'prv.c3.p':  'Delete your account at any time and all associated data is permanently removed from our servers within 30 days.',
    'prv.c4.h':  'Compliance-Aware',
    'prv.c4.p':  'Notes are formatted for Florida APD/Medicaid audit standards. You are responsible for final compliance review.',

    // cta banner
    'cta.h':   'Spend Less Time on Paperwork.<br />More Time on Care.',
    'cta.p':   'Join providers across Florida who use Note TCA to generate professional session notes in seconds — not hours.',

    // footer
    'ft.copy': '© 2026 AdminTCA. Note TCA is a product of AdminTCA.',
  },

  // ─── Spanish ──────────────────────────────────────────────────────────
  es: {
    'nav.who':      'Para Quién',
    'nav.how':      'Cómo Funciona',
    'nav.features': 'Características',
    'nav.plans':    'Planes',
    'nav.security': 'Seguridad',
    'nav.download': 'Descargar Gratis',

    'hero.badge':    '✦ Impulsado por IA · Para Proveedores de APD y Medicaid',
    'hero.h1':       'Convierte Cada Sesión en una<br /><span class="teal">Nota de Servicio Profesional</span><br />— en Segundos',
    'hero.sub':      'Note TCA te guía por un asistente de sesión rápido y genera una nota completa y lista para auditoría que puedes compartir o guardar de inmediato. Sin pantallas en blanco. Sin lenguaje genérico.',
    'hero.ios-pre':  'Descargar en',
    'hero.ios':      'App Store',
    'hero.and-pre':  'Disponible en',
    'hero.and':      'Google Play',
    'hero.free':     '<strong>Comienza gratis</strong> — no se requiere cuenta para explorar la app.',
    'mockup.label':  'Nota de Sesión Generada · ABA',
    'mockup.note':   "El proveedor implementó estrategias de intervención conductual durante la sesión de hoy. El individuo demostró mayor compromiso con las tareas y respondió positivamente a las técnicas de apoyo. La comunicación con el tutor fue documentada y los objetivos revisados según el plan de apoyo actual…",
    'mockup.chip1':  '✦ Generado con IA',
    'mockup.chip2':  '📋 Compartir',
    'mockup.chip3':  '☁ Guardado',

    'who.tag':   'Para Quién',
    'who.title': 'Para Cada Proveedor de Servicios APD y Medicaid',
    'who.sub':   'Note TCA está diseñado para los proveedores que pasan horas en documentación después de cada turno. Recupera ese tiempo.',
    'who.c1.h':  'Profesionales de Apoyo Directo',
    'who.c1.p':  'DSPs que ofrecen servicios de compañía, apoyo personal o respiro.',
    'who.c2.h':  'Analistas de Conducta y ABA',
    'who.c2.p':  'Analistas y asistentes que implementan planes de intervención conductual.',
    'who.c3.h':  'Terapeutas del Habla',
    'who.c3.p':  'SLPs que documentan sesiones de terapia de comunicación y lenguaje.',
    'who.c4.h':  'Terapeutas Ocupacionales',
    'who.c4.p':  'OTs que trabajan en habilidades motoras finas, sensoriales y de vida diaria.',
    'who.c5.h':  'Fisioterapeutas',
    'who.c5.p':  'PTs que documentan el progreso en movilidad, fuerza y equilibrio.',
    'who.c6.h':  'Coordinadores de Apoyo (WSC)',
    'who.c6.p':  'WSCs que gestionan la coordinación del cuidado y la documentación del plan de apoyo.',

    'how.tag':   'Cómo Funciona',
    'how.title': 'De la Sesión a la Nota Firmada en 4 Pasos',
    'how.sub':   'Sin plantillas que llenar. Sin copiar y pegar. Solo responde unas preguntas rápidas y deja que la IA haga el resto.',
    'how.s1.h':  'Abre la App',
    'how.s1.p':  'Toca Nueva Nota desde la pantalla principal. Comienza una nota en cualquier momento — incluso a mitad de sesión.',
    'how.s2.h':  'Sigue el Asistente',
    'how.s2.p':  'Proveedor, destinatario, tipo de servicio, ubicación, fecha y un cuestionario breve. Tarda menos de 2 minutos.',
    'how.s3.h':  'Toca Generar',
    'how.s3.p':  'La IA escribe una nota profesional de 2 a 4 párrafos en segundos. Específica, clínica y lista para auditoría.',
    'how.s4.h':  'Revisa y Comparte',
    'how.s4.p':  'Edita si es necesario, luego comparte o guarda en la nube. Las notas quedan buscables en tu historial.',

    'feat.tag':    'Características Clave',
    'feat.title':  'Todo lo que Necesitas, Nada Más',
    'feat.sub':    'Cada función fue diseñada en torno al flujo de trabajo real de un proveedor.',
    'feat.f1.h':   'Generación de Notas con IA',
    'feat.f1.p':   'Impulsado por los mejores modelos de IA con conmutación automática. Las notas son específicas, concretas y listas para auditoría.',
    'feat.f2.h':   'Múltiples Idiomas',
    'feat.f2.p':   'Genera notas en inglés, español o criollo haitiano. Cambia de idioma en cualquier paso del asistente.',
    'feat.f3.h':   'Salida Bilingüe',
    'feat.f3.p':   'Obtén la nota oficial en inglés más una traducción de referencia con un solo toque.',
    'feat.f4.h':   'Conjuntos de Servicio',
    'feat.f4.p':   'Guarda tus combinaciones más comunes de proveedor + servicio + ubicación e inicia una nota completa con un toque.',
    'feat.f5.h':   'Preferencias Inteligentes',
    'feat.f5.p':   'La app recuerda tus opciones de nota por servicio y destinatario, para que cada nota nueva empiece exactamente como te gusta.',
    'feat.f6.h':   'Gestión de Destinatarios',
    'feat.f6.p':   'Almacena perfiles de clientes con diagnóstico, tutores, preferencias y objetivos. La IA usa este contexto para notas más ricas.',
    'feat.f7.h':   'Historial Completo',
    'feat.f7.p':   'Todas las notas guardadas están en la nube y son buscables por cliente, servicio, rango de fechas o proveedor.',
    'feat.f8.h':   'Editar y Regenerar',
    'feat.f8.p':   'Edita cualquier nota manualmente o agrega sugerencias y regenera. Compara versiones con historial completo.',
    'feat.f9.h':   'Funciona en Todos los Dispositivos',
    'feat.f9.p':   'Apps nativas para iOS y Android. Comienza una nota en tu teléfono, revísala en tu tableta — todo se sincroniza al instante.',

    'svc.tag':   'Tipos de Servicio',
    'svc.title': 'Notas para Cada Tipo de Servicio',
    'svc.sub':   'Note TCA incluye cuestionarios específicos para cada tipo de servicio para que la IA capture exactamente el detalle correcto.',
    'svc.s1.h':  'Compañía',              'svc.s1.p': 'Socialización, supervisión y actividades comunitarias',
    'svc.s2.h':  'Apoyo Personal',        'svc.s2.p': 'Cuidado personal, AVD y desarrollo de habilidades',
    'svc.s3.h':  'Respiro',               'svc.s3.p': 'Supervisión y alivio del cuidador',
    'svc.s4.h':  'WSC',                   'svc.s4.p': 'Coordinación del cuidado y gestión del plan de apoyo',
    'svc.s5.h':  'Analista de Conducta',  'svc.s5.p': 'Intervención conductual y desarrollo de habilidades',
    'svc.s6.h':  'Terapia del Habla',     'svc.s6.p': 'Terapia de comunicación y lenguaje',
    'svc.s7.h':  'Terapia Ocupacional',   'svc.s7.p': 'Motricidad fina, sensorial y habilidades de vida diaria',
    'svc.s8.h':  'Fisioterapia',          'svc.s8.p': 'Terapia de movilidad, fuerza y equilibrio',

    'pr.tag':    'Planes de Suscripción',
    'pr.title':  'Precios Simples y Transparentes',
    'pr.sub':    'Empieza gratis sin necesidad de cuenta. Mejora tu plan cuando estés listo.',
    'pr.b.h':    'Generación de Notas con IA',
    'pr.b.desc': 'Todo lo que necesitas para generar notas de sesión profesionales y listas para auditoría.',
    'pr.b.f1':   'Generaciones de notas diarias con IA',
    'pr.b.f2':   'Inglés, español y criollo haitiano',
    'pr.b.f3':   'Referencias personalizadas de proveedor y destinatario',
    'pr.b.f4':   'Escritura en primera o tercera persona',
    'pr.b.f5':   'Editar y regenerar con sugerencias',
    'pr.b.f6':   '3 notas gratis para empezar — sin cuenta',
    'pr.b.cta':  'Comenzar Gratis',
    'pr.p.badge': '⭐ Premium',
    'pr.p.h':    'Almacenamiento en la Nube',
    'pr.p.desc': 'Todo lo de Generación de Notas con IA, más sincronización total en la nube y funciones para equipos.',
    'pr.p.f1':   'Todo lo de Generación de Notas con IA',
    'pr.p.f2':   'Guarda y accede a notas desde cualquier dispositivo',
    'pr.p.f3':   'Perfiles ilimitados de destinatarios y proveedores',
    'pr.p.f4':   'Conjuntos de servicio para crear notas con 1 toque',
    'pr.p.f5':   'Historial completo de notas con búsqueda',
    'pr.p.f6':   'Disponible sin conexión con sincronización en la nube',
    'pr.p.cta':  'Descargar y Suscribirse',
    'pr.free':   '<strong>Comienza gratis</strong> — explora la app sin necesidad de cuenta. Prueba gratuita incluida para nuevos usuarios.',

    'prv.tag':   'Privacidad y Seguridad',
    'prv.title': 'Tus Datos, Protegidos',
    'prv.sub':   'Note TCA está construido con la seguridad y la propiedad de datos como pilares fundamentales. Tú siempre tienes el control.',
    'prv.c1.h':  'Almacenamiento Cifrado',
    'prv.c1.p':  'Las notas se almacenan de forma segura a través de Supabase — cifradas en reposo y en tránsito con protocolos estándar de la industria.',
    'prv.c2.h':  'Compartición Mínima de Datos',
    'prv.c2.p':  'No se comparte información de salud con terceros más allá de lo necesario para generar notas. Nunca vendemos tus datos.',
    'prv.c3.h':  'Tus Datos Son Tuyos',
    'prv.c3.p':  'Elimina tu cuenta en cualquier momento y todos los datos asociados se eliminan permanentemente de nuestros servidores en 30 días.',
    'prv.c4.h':  'Orientado al Cumplimiento',
    'prv.c4.p':  'Las notas están formateadas para los estándares de auditoría de APD/Medicaid de Florida. Tú eres responsable de la revisión final de cumplimiento.',

    'cta.h':   'Menos Tiempo en Papeleo.<br />Más Tiempo en el Cuidado.',
    'cta.p':   'Únete a los proveedores de Florida que usan Note TCA para generar notas de sesión profesionales en segundos, no en horas.',
    'ft.copy': '© 2026 AdminTCA. Note TCA es un producto de AdminTCA.',
  },

  // ─── Haitian Creole ────────────────────────────────────────────────────
  ht: {
    'nav.who':      'Pou Kiyès',
    'nav.how':      'Kijan Li Travay',
    'nav.features': 'Karakteristik',
    'nav.plans':    'Plan',
    'nav.security': 'Sekirite',
    'nav.download': 'Telechaje Gratis',

    'hero.badge':    '✦ Teknoloji IA · Bati pou Founisè APD ak Medicaid',
    'hero.h1':       'Tounen Chak Sesyon an<br /><span class="teal">Yon Nòt Sèvis Pwofesyonèl</span><br />— an Segond',
    'hero.sub':      'Note TCA gide ou nan yon asistan sesyon rapid epi jenere yon nòt konplè, prè pou odit, ou ka pataje oswa sove imedyatman. Pa gen paj vid. Pa gen lang jeneral.',
    'hero.ios-pre':  'Telechaje sou',
    'hero.ios':      'App Store',
    'hero.and-pre':  'Jwenn li sou',
    'hero.and':      'Google Play',
    'hero.free':     '<strong>Kòmanse gratis</strong> — pa bezwen kont pou eksplore aplikasyon an.',
    'mockup.label':  'Nòt Sesyon Jenere · ABA',
    'mockup.note':   "Founisè a te aplike estrateji entèvansyon konpòtman pandan sesyon jodi a. Moun nan te montre angajman amelyore ak tach yo epi te reponn pozitivman ak teknik ankadrement yo. Kominikasyon ak gadyen an te dokimante epi objektif yo te revize selon plan sipò aktyèl la…",
    'mockup.chip1':  '✦ Jenere ak IA',
    'mockup.chip2':  '📋 Pataje',
    'mockup.chip3':  '☁ Sovgade',

    'who.tag':   'Pou Kiyès',
    'who.title': 'Bati pou Tout Founisè Sèvis APD ak Medicaid',
    'who.sub':   'Note TCA fèt espesyalman pou founisè yo ki pase èdtan nan dokimantasyon apre chak vire. Reprann tan sa a.',
    'who.c1.h':  'Pwofesyonèl Sipò Dirèk',
    'who.c1.p':  'DSP yo ki bay sèvis konpayi, sipò pèsonèl oswa repo.',
    'who.c2.h':  'Analis Konpòtman ak ABA',
    'who.c2.p':  'Analis ak asistan ki aplike plan entèvansyon konpòtman.',
    'who.c3.h':  'Terapis Langaj',
    'who.c3.p':  'SLP yo ki dokimante sesyon terapi kominikasyon ak langaj.',
    'who.c4.h':  'Terapis Okipasyonèl',
    'who.c4.p':  'OT yo ki travay sou motrisite fin, sansoryèl ak konpetans vi chak jou.',
    'who.c5.h':  'Fiziyoterapis',
    'who.c5.p':  'PT yo ki dokimante pwogrè mobilite, fòs ak ekilib.',
    'who.c6.h':  'Koordinatè Sipò (WSC)',
    'who.c6.p':  'WSC yo ki jere kòdinasyon swen ak dokimantasyon plan sipò a.',

    'how.tag':   'Kijan Li Travay',
    'how.title': 'Soti nan Sesyon rive nan Nòt Siyen an 4 Etap',
    'how.sub':   'Pa gen modèl pou ranpli. Pa gen kopi-kole. Jis reponn kèk kesyon rapid epi kite IA fè rès la.',
    'how.s1.h':  'Ouvri Aplikasyon an',
    'how.s1.p':  'Tape Nòt Nouvo sou ekran prensipal la. Kòmanse yon nòt nenpòt ki lè — menm pandan sesyon an.',
    'how.s2.h':  'Swiv Asistan an',
    'how.s2.p':  'Founisè, resipyan, tip sèvis, kote, dat ak yon kesyonè kout. Sa pran mwens pase 2 minit.',
    'how.s3.h':  'Tape Jenere',
    'how.s3.p':  'IA ekri yon nòt pwofesyonèl 2 a 4 paragraf an segond. Espesifik, klinik ak prè pou odit.',
    'how.s4.h':  'Revize ak Pataje',
    'how.s4.p':  'Edite si nesesè, epi pataje oswa sove nan nwaj la. Nòt yo ret rechèchab nan istwa ou.',

    'feat.tag':    'Karakteristik Prensipal',
    'feat.title':  'Tout Sa ou Bezwen, Pa Anyen an Plis',
    'feat.sub':    'Chak karakteristik te konsevre autour de flou de travay reyèl yon founisè.',
    'feat.f1.h':   'Jenerasyon Nòt ak IA',
    'feat.f1.p':   'Alimante pa pi bon modèl IA yo ak baskile otomatik. Nòt yo espesifik, konkrè ak prè pou odit.',
    'feat.f2.h':   'Plizyè Langaj',
    'feat.f2.p':   'Jenere nòt an anglè, espanyòl oswa kreyòl ayisyen. Chanje lang nan nenpòt etap nan asistan an.',
    'feat.f3.h':   'Rezilta Bileng',
    'feat.f3.p':   'Jwenn nòt ofisyèl anglè a plis yon tradiksyon referans ak yon sèl tape.',
    'feat.f4.h':   'Ansanm Sèvis',
    'feat.f4.p':   'Sove konbinezon founisè + sèvis + kote ou itilize pi souvan epi kòmanse yon nòt konplè ak yon sèl tape.',
    'feat.f5.h':   'Preferans Entèlijan',
    'feat.f5.p':   'Aplikasyon an sonje opsyon nòt ou yo pa sèvis ak resipyan pou chak nòt nouvo kòmanse jan ou vle a.',
    'feat.f6.h':   'Jesyon Resipyan',
    'feat.f6.p':   'Sove pwofil kliyan yo enkli dyagnòz, gadyen, preferans ak objektif. IA itilize kontèks sa a pou nòt pi rich.',
    'feat.f7.h':   'Istwa Konplè',
    'feat.f7.p':   'Tout nòt sovgade yo nan nwaj la epi rechèchab pa kliyan, sèvis, ranje dat oswa founisè.',
    'feat.f8.h':   'Edite ak Rejene',
    'feat.f8.p':   'Edite nenpòt nòt manyèlman oswa ajoute sijesyon epi rejene. Konpare vèsyon yo ak istwa konplè.',
    'feat.f9.h':   'Travay sou Tout Aparèy',
    'feat.f9.p':   'Aplikasyon natif iOS ak Android. Kòmanse yon nòt sou telefòn ou, revize li sou tablèt ou — tout bagay senkronize imedyatman.',

    'svc.tag':   'Tip Sèvis',
    'svc.title': 'Nòt pou Chak Tip Sèvis',
    'svc.sub':   'Note TCA gen kesyonè espesifik pou chak tip sèvis pou IA ka kaptire egzakteman detay ki kòrèk la.',
    'svc.s1.h':  'Konpayi',              'svc.s1.p': 'Sosyalizasyon, sipèvizyon ak aktivite kominotè',
    'svc.s2.h':  'Sipò Pèsonèl',         'svc.s2.p': 'Swen pèsonèl, AVD ak devlopman konpetans',
    'svc.s3.h':  'Repo',                 'svc.s3.p': 'Sipèvizyon ak soulajman gadyen',
    'svc.s4.h':  'WSC',                  'svc.s4.p': 'Kòdinasyon swen ak jesyon plan sipò',
    'svc.s5.h':  'Analis Konpòtman/ABA', 'svc.s5.p': 'Entèvansyon konpòtman ak devlopman konpetans',
    'svc.s6.h':  'Terapi Langaj',        'svc.s6.p': 'Terapi kominikasyon ak langaj',
    'svc.s7.h':  'Terapi Okipasyonèl',   'svc.s7.p': 'Motrisite fin, sansoryèl ak konpetans vi chak jou',
    'svc.s8.h':  'Fiziyoterapi',         'svc.s8.p': 'Terapi mobilite, fòs ak ekilib',

    'pr.tag':    'Plan Abònman',
    'pr.title':  'Pri Senp ak Transparan',
    'pr.sub':    'Kòmanse gratis san kont. Amelyore plan ou lè ou prè.',
    'pr.b.h':    'Jenerasyon Nòt ak IA',
    'pr.b.desc': 'Tout sa ou bezwen pou jenere nòt sesyon pwofesyonèl ak prè pou odit.',
    'pr.b.f1':   'Jenerasyon nòt IA chak jou',
    'pr.b.f2':   'Anglè, espanyòl ak kreyòl ayisyen',
    'pr.b.f3':   'Referans founisè ak resipyan pèsonalize',
    'pr.b.f4':   'Ekri an premye oswa twazyèm pèsòn',
    'pr.b.f5':   'Edite ak rejene ak sijesyon',
    'pr.b.f6':   '3 nòt gratis pou kòmanse — san kont',
    'pr.b.cta':  'Kòmanse Gratis',
    'pr.p.badge': '⭐ Premium',
    'pr.p.h':    'Estokaj nan Nwaj',
    'pr.p.desc': 'Tout nan Jenerasyon Nòt ak IA, plis senkronizasyon nwaj konplè ak fonksyon pou ekip.',
    'pr.p.f1':   'Tout nan Jenerasyon Nòt ak IA',
    'pr.p.f2':   'Sove ak aksede nòt yo soti sou nenpòt aparèy',
    'pr.p.f3':   'Pwofil resipyan ak founisè san limit',
    'pr.p.f4':   'Ansanm sèvis pou kreye nòt ak 1 tape',
    'pr.p.f5':   'Istwa nòt konplè ak rechèch',
    'pr.p.f6':   'Disponib san koneksyon ak senkronizasyon nwaj',
    'pr.p.cta':  'Telechaje ak Abòne',
    'pr.free':   '<strong>Kòmanse gratis</strong> — eksplore aplikasyon an san kont. Eseye gratis enkli pou nouvo itilizatè yo.',

    'prv.tag':   'Enfòmasyon Prive ak Sekirite',
    'prv.title': 'Done Ou, Pwoteje',
    'prv.sub':   'Note TCA bati ak sekirite ak pwopriyete done kòm poto. Ou toujou gen kontwòl.',
    'prv.c1.h':  'Estokaj Chifre',
    'prv.c1.p':  'Nòt yo estoke an sekirite via Supabase — chifre an repo ak an tranzit ak pwotokòl estanda endistriyèl.',
    'prv.c2.h':  'Pataj Done Minimòm',
    'prv.c2.p':  'Pa gen enfòmasyon sante pataje ak twazyèm pati plis pase sa ki nesesè pou jenere nòt. Nou pa janm vann done ou.',
    'prv.c3.h':  'Done Ou Se Pou Ou',
    'prv.c3.p':  'Efase kont ou nenpòt ki lè epi tout done asosye elimine pèmanan nan sèvè nou yo nan 30 jou.',
    'prv.c4.h':  'Oriyante sou Konfòmite',
    'prv.c4.p':  'Nòt yo fòmante pou estanda odit APD/Medicaid Florida. Ou responsab pou revizyon konfòmite final la.',

    'cta.h':   'Mwens Tan sou Papèwork.<br />Plis Tan sou Swen.',
    'cta.p':   'Jwenn founisè nan Florid ki itilize Note TCA pou jenere nòt sesyon pwofesyonèl an segond — pa nan èdtan.',
    'ft.copy': '© 2026 AdminTCA. Note TCA se yon pwodui AdminTCA.',
  },
};

// ── Language engine ──────────────────────────────────────────────────────
let currentLang = localStorage.getItem('notetca_lang') || 'en';

function applyLang(lang) {
  const dict = T[lang];
  if (!dict) return;
  currentLang = lang;
  localStorage.setItem('notetca_lang', lang);

  // Plain text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // HTML elements (allow <br>, <span>, <strong>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Update <html lang>
  document.documentElement.lang = lang;

  // Update language selector button
  const labels = { en: '🇺🇸', es: '🇪🇸', ht: '🇭🇹' };
  document.querySelectorAll('.lang-selected').forEach(el => {
    el.textContent = labels[lang] || 'EN';
  });

  // Mark active option
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
}

// ── Mobile hamburger menu ────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  const spans = hamburger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = '';
  spans[1].style.opacity = '';
  spans[2].style.transform = '';
}

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMenu();
  }
});

// ── Language picker dropdown ─────────────────────────────────────────────
document.querySelectorAll('.lang-picker').forEach(picker => {
  const btn = picker.querySelector('.lang-btn');
  const dropdown = picker.querySelector('.lang-dropdown');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  dropdown.querySelectorAll('[data-lang]').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      applyLang(opt.dataset.lang);
      dropdown.classList.remove('open');
    });
  });

  document.addEventListener('click', () => dropdown.classList.remove('open'));
});

// ── Store link placeholders ──────────────────────────────────────────────
const IOS_URL     = '#';   // e.g. 'https://apps.apple.com/app/id6762950386'
const ANDROID_URL = '#';   // e.g. 'https://play.google.com/store/apps/details?id=com.admintca.note'

['ios-link', 'ios-link-bottom'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = IOS_URL;
});
['android-link', 'android-link-bottom'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = ANDROID_URL;
});

// ── Sticky nav shadow ────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20 ? '0 2px 16px rgba(0,0,0,.08)' : '';
}, { passive: true });

// ── Scroll reveal ────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.who-card, .step, .feature-card, .service-pill, .pricing-card, .privacy-card'
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .45s ease, transform .45s ease';
  observer.observe(el);
});

// ── Init ─────────────────────────────────────────────────────────────────
applyLang(currentLang);
