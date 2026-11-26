export type Language = "fr" | "en" | "es" | "ar";

export const translations = {
  // ─── Navbar ───
  nav: {
    home: { fr: "Accueil", en: "Home", es: "Inicio", ar: "الرئيسية" },
    services: { fr: "Services", en: "Services", es: "Servicios", ar: "خدماتنا" },
    about: { fr: "À propos", en: "About", es: "Acerca de", ar: "من نحن" },
    contact: { fr: "Contact", en: "Contact", es: "Contacto", ar: "اتصلوا بنا" },
    careers: { fr: "Carrières", en: "Careers", es: "Empleo", ar: "التوظيف" },
    menu: { fr: "Menu", en: "Menu", es: "Menú", ar: "القائمة" },
    skip: { fr: "Aller au contenu", en: "Skip to content", es: "Ir al contenido", ar: "انتقلوا إلى المحتوى" },
    cta: { fr: "Nous contacter", en: "Contact us", es: "Contáctenos", ar: "تواصلوا معنا" },
  },

  // ─── Footer ───
  footer: {
    tagline: {
      fr: "Conseil, développement et accompagnement technique sur mesure.",
      en: "Bespoke consulting, development and technical support.",
      es: "Consultoría, desarrollo y acompañamiento técnico a medida.",
      ar: "استشارات وتطوير ومواكبة تقنية على مقاس احتياجاتكم.",
    },
    navigation: { fr: "Navigation", en: "Navigation", es: "Navegación", ar: "روابط الموقع" },
    servicesTitle: { fr: "Services", en: "Services", es: "Servicios", ar: "خدماتنا" },
    contactTitle: { fr: "Contact", en: "Contact", es: "Contacto", ar: "اتصلوا بنا" },
    consultingIT: { fr: "Conseil IT", en: "IT Consulting", es: "Consultoría IT", ar: "استشارات تكنولوجيا المعلومات" },
    development: { fr: "Développement", en: "Development", es: "Desarrollo", ar: "التطوير" },
    technicalExpertise: { fr: "Architecture", en: "Architecture", es: "Arquitectura", ar: "معمارية الأنظمة" },
    support: { fr: "Accompagnement", en: "Support", es: "Acompañamiento", ar: "المواكبة" },
    rights: { fr: "Tous droits réservés.", en: "All rights reserved.", es: "Todos los derechos reservados.", ar: "جميع الحقوق محفوظة." },
    legalNotice: { fr: "Mentions légales", en: "Legal notice", es: "Aviso legal", ar: "البيانات القانونية" },
  },

  // ─── Index / Home ───
  home: {
    heroTitle: {
      fr: "La réussite de vos projets IT ne doit rien au hasard.",
      en: "The success of your IT projects owes nothing to chance.",
      es: "El éxito de sus proyectos IT no es fruto del azar.",
      ar: "نجاح مشاريعكم المعلوماتية ليس وليد الصدفة.",
    },
    heroSubtitle: {
      fr: "Conseil, développement et accompagnement technique sur mesure pour les entreprises qui exigent l'excellence.",
      en: "Consulting, development and bespoke technical support for companies that demand excellence.",
      es: "Consultoría, desarrollo y acompañamiento técnico a medida para empresas que exigen excelencia.",
      ar: "استشارات وتطوير ومواكبة تقنية على المقاس، للشركات التي لا ترضى بأقل من التميز.",
    },
    heroBtn1: { fr: "Découvrir nos services", en: "Discover our services", es: "Descubrir nuestros servicios", ar: "اكتشفوا خدماتنا" },
    heroBtn2: { fr: "Nous contacter", en: "Contact us", es: "Contáctenos", ar: "تواصلوا معنا" },
    expertiseTitle: {
      fr: "Nos domaines d'expertise",
      en: "Our areas of expertise",
      es: "Nuestras áreas de especialización",
      ar: "مجالات خبرتنا",
    },
    expertiseSubtitle: {
      fr: "Une offre de services complète pour répondre à vos enjeux techniques, du conseil stratégique à la mise en œuvre.",
      en: "A comprehensive service offering to address your technical challenges, from strategic consulting to implementation.",
      es: "Una oferta de servicios completa para responder a sus desafíos técnicos, desde la consultoría estratégica hasta la implementación.",
      ar: "عرض خدمات متكامل يستجيب لتحدياتكم التقنية، من الاستشارة الاستراتيجية إلى التنفيذ.",
    },
    seeAllServices: { fr: "Voir tous nos services", en: "View all services", es: "Ver todos nuestros servicios", ar: "عرض جميع خدماتنا" },
    whyTitle: {
      fr: "Pourquoi choisir Eutykia Solutions ?",
      en: "Why choose Eutykia Solutions?",
      es: "¿Por qué elegir Eutykia Solutions?",
      ar: "لماذا تختارون Eutykia Solutions؟",
    },
    modesTitle: { fr: "Nos modes d'intervention", en: "How we work", es: "Nuestros modos de intervención", ar: "كيف نعمل معكم" },
    modesSubtitle: {
      fr: "Nous nous adaptons à votre organisation et à vos enjeux.",
      en: "We adapt to your organisation and your challenges.",
      es: "Nos adaptamos a su organización y a sus desafíos.",
      ar: "نتكيف مع طريقة عملكم ومع تحدياتكم.",
    },
    ctaTitle: {
      fr: "Un projet ? Une mission ? Parlons-en.",
      en: "Have a project? Let's talk.",
      es: "¿Tiene un proyecto? Hablemos.",
      ar: "لديكم مشروع أو مهمة؟ لنتحدث.",
    },
    ctaSubtitle: {
      fr: "Nous répondons sous 24h pour étudier votre besoin.",
      en: "We respond within 24 hours to assess your needs.",
      es: "Respondemos en menos de 24 horas para estudiar su necesidad.",
      ar: "نرد عليكم خلال 24 ساعة لدراسة احتياجاتكم.",
    },
    ctaBtn: { fr: "Prendre contact", en: "Get in touch", es: "Contactar", ar: "راسلونا" },
  },

  // ─── Expertises (Index page cards) ───
  expertises: [
    {
      title: { fr: "Conseil IT & Stratégie", en: "IT Consulting & Strategy", es: "Consultoría IT y Estrategia", ar: "الاستشارة والاستراتيجية في تكنولوجيا المعلومات" },
      desc: {
        fr: "Audit, cadrage et recommandations pour aligner votre SI avec vos objectifs métier.",
        en: "Audit, scoping and recommendations to align your IT systems with your business goals.",
        es: "Auditoría, definición y recomendaciones para alinear su SI con sus objetivos de negocio.",
        ar: "تدقيق وتأطير وتوصيات لمواءمة نظامكم المعلوماتي مع أهداف أعمالكم.",
      },
    },
    {
      title: { fr: "Développement logiciel", en: "Software Development", es: "Desarrollo de software", ar: "تطوير البرمجيات" },
      desc: {
        fr: "Conception et réalisation d'applications sur mesure, robustes et maintenables.",
        en: "Design and delivery of robust, maintainable custom applications.",
        es: "Diseño y desarrollo de aplicaciones a medida, robustas y mantenibles.",
        ar: "تصميم وإنجاز تطبيقات على المقاس، متينة وسهلة الصيانة.",
      },
    },
    {
      title: { fr: "Architecture & Modernisation", en: "Architecture & Modernisation", es: "Arquitectura y Modernización", ar: "معمارية الأنظمة وتحديثها" },
      desc: {
        fr: "Refonte d'architectures, migration cloud et modernisation de systèmes existants.",
        en: "Architecture redesign, cloud migration and legacy system modernisation.",
        es: "Rediseño de arquitecturas, migración cloud y modernización de sistemas existentes.",
        ar: "إعادة تصميم معمارية الأنظمة، والانتقال إلى السحابة، وتحديث الأنظمة القائمة.",
      },
    },
    {
      title: { fr: "Data & Intelligence Artificielle", en: "Data & Artificial Intelligence", es: "Data e Inteligencia Artificial", ar: "البيانات والذكاء الاصطناعي" },
      desc: {
        fr: "Structuration de données, pipelines analytics et intégration de solutions IA.",
        en: "Data structuring, analytics pipelines and AI solution integration.",
        es: "Estructuración de datos, pipelines de analítica e integración de soluciones IA.",
        ar: "هيكلة البيانات، وبناء مسارات معالجتها وتحليلها، ودمج حلول الذكاء الاصطناعي.",
      },
    },
    {
      title: { fr: "Intégration de solutions", en: "Solution Integration", es: "Integración de soluciones", ar: "دمج الحلول" },
      desc: {
        fr: "Mise en œuvre et intégration de progiciels, API et écosystèmes techniques complexes.",
        en: "Implementation and integration of software packages, APIs and complex technical ecosystems.",
        es: "Implementación e integración de paquetes de software, APIs y ecosistemas técnicos complejos.",
        ar: "إرساء البرمجيات الجاهزة وواجهات API والمنظومات التقنية المعقدة ودمجها.",
      },
    },
    {
      title: { fr: "Accompagnement projet", en: "Project Support", es: "Acompañamiento de proyectos", ar: "مواكبة المشاريع" },
      desc: {
        fr: "Renfort d'équipes, pilotage technique et expertise embarquée sur vos projets critiques.",
        en: "Team reinforcement, technical leadership and embedded expertise on your critical projects.",
        es: "Refuerzo de equipos, dirección técnica y especialistas integrados en sus proyectos críticos.",
        ar: "تعزيز الفرق، والقيادة التقنية، وتوفير خبراء يعملون ضمن فرقكم في مشاريعكم الحيوية.",
      },
    },
  ],

  // ─── Why items (Index) ───
  whyItems: [
    {
      keyword: { fr: "Expertise", en: "Expertise", es: "Especialización", ar: "الخبرة" },
      text: {
        fr: "Des consultants seniors, à l'aise dans les environnements techniques exigeants.",
        en: "Senior consultants at ease in demanding technical environments.",
        es: "Consultores senior que se desenvuelven con soltura en entornos técnicos exigentes.",
        ar: "مستشارون متمرسون، متمكنون من العمل في البيئات التقنية ذات المتطلبات العالية.",
      },
    },
    {
      keyword: { fr: "Réactivité", en: "Responsiveness", es: "Capacidad de respuesta", ar: "سرعة الاستجابة" },
      text: {
        fr: "Un interlocuteur dédié, disponible et impliqué dans la réussite de vos projets.",
        en: "A dedicated contact, available and invested in the success of your projects.",
        es: "Un interlocutor dedicado, disponible e involucrado en el éxito de sus proyectos.",
        ar: "مخاطَب واحد مخصص لكم، حاضر وملتزم بإنجاح مشاريعكم.",
      },
    },
    {
      keyword: { fr: "Exigence", en: "Excellence", es: "Exigencia", ar: "الإتقان" },
      text: {
        fr: "Des livrables de qualité, dans le respect des délais et des engagements.",
        en: "Quality deliverables, on schedule and as committed.",
        es: "Entregables de calidad, dentro de los plazos y compromisos.",
        ar: "مخرجات عالية الجودة، مع احترام الآجال والالتزامات.",
      },
    },
    {
      keyword: { fr: "Agilité", en: "Agility", es: "Agilidad", ar: "المرونة" },
      text: {
        fr: "Une capacité d'adaptation rapide à vos contextes, contraintes et enjeux.",
        en: "The ability to adapt quickly to your context, constraints and challenges.",
        es: "Capacidad de adaptación rápida a sus contextos, restricciones y desafíos.",
        ar: "قدرة على التكيف السريع مع سياقكم وقيودكم وتحدياتكم.",
      },
    },
  ],

  // ─── Services page ───
  services: {
    pageTitle: { fr: "Nos services", en: "Our services", es: "Nuestros servicios", ar: "خدماتنا" },
    pageSubtitle: {
      fr: "Conseil, réalisation et accompagnement technique pour répondre à vos enjeux IT les plus exigeants.",
      en: "Consulting, delivery and technical support to tackle your most demanding IT challenges.",
      es: "Consultoría, realización y acompañamiento técnico para responder a sus desafíos IT más exigentes.",
      ar: "استشارات وإنجاز ومواكبة تقنية لرفع أصعب تحدياتكم المعلوماتية.",
    },
    ctaTitle: {
      fr: "Besoin d'un accompagnement sur mesure ? Contactez-nous.",
      en: "Need bespoke support? Contact us.",
      es: "¿Necesita un acompañamiento a medida? Contáctenos.",
      ar: "تحتاجون إلى مواكبة على المقاس؟ تواصلوا معنا.",
    },
    ctaBtn: { fr: "Nous contacter", en: "Contact us", es: "Contáctenos", ar: "تواصلوا معنا" },
    items: [
      {
        title: { fr: "Conseil IT & Stratégie", en: "IT Consulting & Strategy", es: "Consultoría IT y Estrategia", ar: "الاستشارة والاستراتيجية في تكنولوجيا المعلومات" },
        desc: {
          fr: "Nous aidons les directions IT et métier à prendre les bonnes décisions technologiques. Audit de l'existant, cadrage de projets, études d'opportunité et feuilles de route SI : nous intervenons en amont pour sécuriser vos choix.",
          en: "We help IT and business leaders make the right technology decisions. Existing system audits, project scoping, opportunity studies and IT roadmaps: we step in early to secure your choices.",
          es: "Ayudamos a las direcciones IT y de negocio a tomar las decisiones tecnológicas correctas. Auditoría del existente, definición de proyectos, estudios de oportunidad y hojas de ruta SI: intervenimos aguas arriba para asegurar sus elecciones.",
          ar: "نساعد مديريات نظم المعلومات والمديريات المهنية على اتخاذ القرارات التكنولوجية الصائبة. تدقيق الوضع القائم، وتأطير المشاريع، ودراسات الجدوى، وخرائط طريق نظم المعلومات: نتدخل منذ المراحل الأولى لتأمين اختياراتكم.",
        },
        items: {
          fr: ["Audit et diagnostic SI", "Cadrage et études d'opportunité", "Schéma directeur et feuille de route", "Aide au choix de solutions", "Gouvernance IT"],
          en: ["IT audit & assessment", "Scoping & opportunity studies", "IT master plan & roadmap", "Solution selection support", "IT governance"],
          es: ["Auditoría y diagnóstico SI", "Definición y estudios de oportunidad", "Plan director y hoja de ruta", "Ayuda en la elección de soluciones", "Gobernanza IT"],
          ar: ["تدقيق وتشخيص نظام المعلومات", "التأطير ودراسات الجدوى", "المخطط المديري وخارطة الطريق", "المساعدة في اختيار الحلول", "حوكمة تكنولوجيا المعلومات"],
        },
      },
      {
        title: { fr: "Développement logiciel", en: "Software Development", es: "Desarrollo de software", ar: "تطوير البرمجيات" },
        desc: {
          fr: "Nous concevons et développons des applications métier sur mesure, pensées pour durer. Notre approche allie rigueur technique, bonnes pratiques et proximité avec les équipes produit.",
          en: "We design and develop custom business applications built to last. Our approach combines technical rigour, best practices and close collaboration with product teams.",
          es: "Diseñamos y desarrollamos aplicaciones de negocio a medida, pensadas para durar. Nuestro enfoque combina rigor técnico, buenas prácticas y cercanía con los equipos de producto.",
          ar: "نصمم ونطور تطبيقات أعمال على المقاس، مبنية لتدوم. تجمع مقاربتنا بين الدقة التقنية وأفضل الممارسات والعمل عن قرب مع فرق المنتج.",
        },
        items: {
          fr: ["Applications web et API", "Applications mobiles", "Back-end et microservices", "Tests et qualité logicielle", "Maintenance et évolution"],
          en: ["Web applications & APIs", "Mobile applications", "Back-end & microservices", "Testing & software quality", "Maintenance & evolution"],
          es: ["Aplicaciones web y APIs", "Aplicaciones móviles", "Back-end y microservicios", "Tests y calidad de software", "Mantenimiento y evolución"],
          ar: ["تطبيقات الويب وواجهات API", "تطبيقات الهاتف المحمول", "Back-end والخدمات المصغرة", "الاختبارات وجودة البرمجيات", "الصيانة والتطوير المستمر"],
        },
      },
      {
        title: { fr: "Data & Intelligence Artificielle", en: "Data & Artificial Intelligence", es: "Data e Inteligencia Artificial", ar: "البيانات والذكاء الاصطناعي" },
        desc: {
          fr: "Nous concevons des solutions IA sur mesure qui transforment vos données en levier de performance. De la stratégie data à la mise en production, nous accompagnons vos équipes sur l'ensemble de la chaîne de valeur.",
          en: "We design bespoke AI solutions that turn your data into a performance driver. From data strategy to production deployment, we support your teams across the entire value chain.",
          es: "Diseñamos soluciones IA a medida que transforman sus datos en palanca de rendimiento. Desde la estrategia de datos hasta la puesta en producción, acompañamos a sus equipos en toda la cadena de valor.",
          ar: "نصمم حلول ذكاء اصطناعي على المقاس تحوّل بياناتكم إلى رافعة للأداء. من استراتيجية البيانات إلى الإطلاق في بيئة الإنتاج، نواكب فرقكم على امتداد سلسلة القيمة.",
        },
        items: {
          fr: ["IA Générative & Agents intelligents", "RAG & Knowledge Management", "Data Engineering & Analytics", "MLOps & industrialisation"],
          en: ["Generative AI & Intelligent Agents", "RAG & Knowledge Management", "Data Engineering & Analytics", "MLOps & Industrialisation"],
          es: ["IA Generativa y Agentes inteligentes", "RAG y Knowledge Management", "Data Engineering y Analytics", "MLOps e industrialización"],
          ar: ["الذكاء الاصطناعي التوليدي والوكلاء الأذكياء", "RAG وإدارة المعرفة", "هندسة البيانات والتحليلات", "MLOps ونقل النماذج إلى الإنتاج"],
        },
      },
      {
        title: { fr: "Architecture & Modernisation", en: "Architecture & Modernisation", es: "Arquitectura y Modernización", ar: "معمارية الأنظمة وتحديثها" },
        desc: {
          fr: "Nous accompagnons la transformation de vos systèmes d'information : refonte d'architectures monolithiques, migration cloud, conteneurisation et mise en place de pratiques DevOps.",
          en: "We support the transformation of your information systems: monolithic architecture redesign, cloud migration, containerisation and DevOps adoption.",
          es: "Acompañamos la transformación de sus sistemas de información: rediseño de arquitecturas monolíticas, migración cloud, contenedorización e implementación de prácticas DevOps.",
          ar: "نواكب تحول أنظمتكم المعلوماتية: إعادة تصميم المعماريات الأحادية، والانتقال إلى السحابة، واعتماد الحاويات، وإرساء ممارسات DevOps.",
        },
        items: {
          fr: ["Architecture logicielle et technique", "Migration cloud (AWS, Azure, GCP)", "Conteneurisation et orchestration", "CI/CD et DevOps", "Refonte de SI legacy"],
          en: ["Software & technical architecture", "Cloud migration (AWS, Azure, GCP)", "Containerisation & orchestration", "CI/CD & DevOps", "Legacy system modernisation"],
          es: ["Arquitectura de software y técnica", "Migración cloud (AWS, Azure, GCP)", "Contenedorización y orquestación", "CI/CD y DevOps", "Modernización de SI legacy"],
          ar: ["المعمارية البرمجية والتقنية", "الانتقال إلى السحابة (AWS, Azure, GCP)", "الحاويات وتنسيقها", "CI/CD و DevOps", "تحديث الأنظمة القديمة"],
        },
      },
      {
        title: { fr: "Intégration de solutions", en: "Solution Integration", es: "Integración de soluciones", ar: "دمج الحلول" },
        desc: {
          fr: "Nous prenons en charge l'intégration technique de solutions tierces dans votre écosystème : ERP, CRM, outils métier, API partenaires. Nous garantissons la cohérence et la fiabilité de vos flux.",
          en: "We handle the technical integration of third-party solutions into your ecosystem: ERP, CRM, business tools, partner APIs. We guarantee the consistency and reliability of your data flows.",
          es: "Nos encargamos de la integración técnica de soluciones de terceros en su ecosistema: ERP, CRM, herramientas de negocio, APIs de socios. Garantizamos la coherencia y fiabilidad de sus flujos.",
          ar: "نتكفل بالدمج التقني للحلول الخارجية في منظومتكم: أنظمة ERP و CRM، وأدوات الأعمال، وواجهات API الخاصة بالشركاء. ونضمن اتساق تدفقات بياناتكم وموثوقيتها.",
        },
        items: {
          fr: ["Intégration d'ERP et CRM", "Connecteurs et API", "Orchestration de flux", "Middleware et ESB", "Recette et déploiement"],
          en: ["ERP & CRM integration", "Connectors & APIs", "Workflow orchestration", "Middleware & ESB", "Testing & deployment"],
          es: ["Integración de ERP y CRM", "Conectores y APIs", "Orquestación de flujos", "Middleware y ESB", "Pruebas y despliegue"],
          ar: ["دمج أنظمة ERP و CRM", "الموصِّلات وواجهات API", "تنسيق التدفقات", "Middleware و ESB", "اختبارات القبول والنشر"],
        },
      },
      {
        title: { fr: "Accompagnement projet", en: "Project Support", es: "Acompañamiento de proyectos", ar: "مواكبة المشاريع" },
        desc: {
          fr: "Nous renforçons vos équipes avec des profils experts capables de monter rapidement en charge. Pilotage technique, expertise embarquée ou renfort ponctuel : nous nous adaptons à vos besoins.",
          en: "We reinforce your teams with expert profiles who ramp up fast. Technical leadership, embedded expertise or ad hoc support: we adapt to your needs.",
          es: "Reforzamos sus equipos con perfiles expertos capaces de asumir rápidamente responsabilidades. Dirección técnica, especialistas integrados o refuerzo puntual: nos adaptamos a sus necesidades.",
          ar: "نعزز فرقكم بكفاءات متمرسة قادرة على الاندماج والعطاء بسرعة. قيادة تقنية، أو خبراء يعملون ضمن فرقكم، أو دعم مؤقت: نتكيف مع احتياجاتكم.",
        },
        items: {
          fr: ["Assistance technique et régie", "Pilotage et direction technique", "Expertise ponctuelle", "Renfort d'équipe projet", "Transfert de compétences"],
          en: ["Technical assistance & staff augmentation", "Technical leadership & management", "Ad hoc expertise", "Project team reinforcement", "Knowledge transfer"],
          es: ["Asistencia técnica y delegación", "Dirección y liderazgo técnico", "Asesoría especializada puntual", "Refuerzo de equipo de proyecto", "Transferencia de competencias"],
          ar: ["المساعدة التقنية ووضع الخبراء رهن إشارتكم", "القيادة والإدارة التقنية", "خبرة عند الطلب", "تعزيز فريق المشروع", "نقل المهارات والمعارف"],
        },
      },
    ],
  },

  // ─── Modes d'intervention, environnements techniques, secteurs ───
  offer: {
    interventionModes: [
      {
        title: { fr: "Régie & assistance technique", en: "Staff augmentation & technical assistance", es: "Asistencia técnica y delegación", ar: "المساعدة التقنية ووضع الخبراء رهن الإشارة" },
        text: {
          fr: "Nos consultants intègrent vos équipes pour apporter expertise et capacité de delivery sur vos projets en cours.",
          en: "Our consultants join your teams to provide expertise and delivery capacity on your ongoing projects.",
          es: "Nuestros consultores se integran a sus equipos para aportar conocimiento experto y capacidad de entrega en sus proyectos en curso.",
          ar: "ينضم مستشارونا إلى فرقكم ليقدموا الخبرة وقدرة الإنجاز في مشاريعكم الجارية.",
        },
      },
      {
        title: { fr: "Projets au forfait", en: "Fixed-price projects", es: "Proyectos a precio fijo", ar: "مشاريع بسعر جزافي" },
        text: {
          fr: "Nous prenons en charge la réalisation de bout en bout : cadrage, conception, développement, recette et mise en production.",
          en: "We handle end-to-end delivery: scoping, design, development, testing and production deployment.",
          es: "Nos encargamos de la realización de principio a fin: definición, diseño, desarrollo, pruebas y puesta en producción.",
          ar: "نتكفل بالإنجاز من البداية إلى النهاية: التأطير، والتصميم، والتطوير، واختبارات القبول، والإطلاق في بيئة الإنتاج.",
        },
      },
      {
        title: { fr: "Conseil & expertise", en: "Consulting & expertise", es: "Consultoría y asesoría experta", ar: "الاستشارة والخبرة" },
        text: {
          fr: "Audit, cadrage, architecture, choix technologiques : nous intervenons ponctuellement pour éclairer vos décisions.",
          en: "Audit, scoping, architecture, technology choices: we provide targeted guidance to inform your decisions.",
          es: "Auditoría, definición, arquitectura, elección tecnológica: intervenimos puntualmente para orientar sus decisiones.",
          ar: "تدقيق، وتأطير، ومعمارية، واختيارات تكنولوجية: نتدخل عند الحاجة لمساعدتكم على اتخاذ قرارات مستنيرة.",
        },
      },
    ],
    techTitle: { fr: "Environnements techniques", en: "Technical environments", es: "Entornos técnicos", ar: "البيئات التقنية" },
    techSubtitle: {
      fr: "Les technologies que nous maîtrisons.",
      en: "The technologies we master.",
      es: "Las tecnologías que dominamos.",
      ar: "التقنيات التي نجيدها.",
    },
    techCategories: {
      fr: ["Langages", "Front-end", "Back-end", "Data & IA", "Cloud", "DevOps"],
      en: ["Languages", "Front-end", "Back-end", "Data & AI", "Cloud", "DevOps"],
      es: ["Lenguajes", "Front-end", "Back-end", "Data e IA", "Cloud", "DevOps"],
      ar: ["لغات البرمجة", "Front-end", "Back-end", "البيانات والذكاء الاصطناعي", "السحابة", "DevOps"],
    },
    sectorsTitle: { fr: "Secteurs auxquels nous nous adressons", en: "Sectors we focus on", es: "Sectores a los que nos dirigimos", ar: "القطاعات التي نتوجه إليها" },
    sectors: {
      fr: ["Banque & Finance", "Assurance", "Énergie", "Retail", "Industrie", "Secteur public", "Télécoms", "Santé"],
      en: ["Banking & Finance", "Insurance", "Energy", "Retail", "Industry", "Public sector", "Telecoms", "Healthcare"],
      es: ["Banca y Finanzas", "Seguros", "Energía", "Retail", "Industria", "Sector público", "Telecomunicaciones", "Salud"],
      ar: ["البنوك والمالية", "التأمين", "الطاقة", "تجارة التجزئة", "الصناعة", "القطاع العام", "الاتصالات", "الصحة"],
    },
  },

  // ─── About page ───
  about: {
    pageTitle: { fr: "À propos", en: "About us", es: "Acerca de", ar: "من نحن" },
    pageSubtitle: {
      fr: "L'expertise technique au service de vos enjeux.",
      en: "Technical expertise in service of your challenges.",
      es: "Especialización técnica al servicio de sus desafíos.",
      ar: "خبرتنا التقنية في خدمة أهدافكم.",
    },
    whoTitle: { fr: "Qui sommes-nous", en: "Who we are", es: "Quiénes somos", ar: "من نحن" },
    whoP1: {
      fr: "Eutykia Solutions est une ESN spécialisée dans le conseil, le développement et l'accompagnement technique des entreprises.",
      en: "Eutykia Solutions is a digital services company specialising in consulting, software development and technical support for businesses.",
      es: "Eutykia Solutions es una empresa de servicios digitales especializada en consultoría, desarrollo y acompañamiento técnico de empresas.",
      ar: "Eutykia Solutions شركة خدمات رقمية متخصصة في الاستشارة والتطوير والمواكبة التقنية للشركات.",
    },
    whoP2: {
      fr: "Nous nous adressons aux PME comme aux grandes entreprises, pour des missions à forte valeur ajoutée : stratégie SI, développement sur mesure, architecture, data et pilotage de projets complexes.",
      en: "We are here for SMEs and large enterprises alike, for high-value engagements: IT strategy, custom development, architecture, data and complex project management.",
      es: "Nos dirigimos tanto a pymes como a grandes empresas, para misiones de alto valor añadido: estrategia SI, desarrollo a medida, arquitectura, data y gestión de proyectos complejos.",
      ar: "نتوجه إلى المقاولات الصغرى والمتوسطة وإلى المقاولات الكبرى على حد سواء، لإنجاز مهام ذات قيمة مضافة عالية: استراتيجية نظم المعلومات، والتطوير على المقاس، ومعمارية الأنظمة، والبيانات، وقيادة المشاريع المعقدة.",
    },
    whoP3: {
      fr: "Notre conviction : chaque entreprise mérite un partenaire technique capable de comprendre ses enjeux métier autant que ses défis technologiques. C'est cette exigence qui guide l'ensemble de nos interventions.",
      en: "Our conviction: every company deserves a technology partner who understands their business challenges as well as their technical ones. This commitment to excellence guides everything we do.",
      es: "Nuestra convicción: cada empresa merece un socio tecnológico capaz de comprender sus desafíos de negocio tanto como sus retos tecnológicos. Esta exigencia guía todas nuestras intervenciones.",
      ar: "قناعتنا أن كل شركة تستحق شريكا تقنيا قادرا على فهم رهانات أعمالها بقدر فهمه لتحدياتها التكنولوجية. هذا الحرص هو ما يوجّه جميع تدخلاتنا.",
    },
    nameTitle: { fr: "D'où vient notre nom", en: "Where our name comes from", es: "De dónde viene nuestro nombre", ar: "من أين جاء اسمنا" },
    nameText: {
      fr: "Eutykia vient du grec ancien εὐτυχία : la bonne fortune, la réussite. Les Grecs y voyaient un don du sort. Dans un projet informatique, nous pensons qu'elle se construit : un besoin bien compris, des choix techniques justifiés, une exécution rigoureuse.",
      en: "Eutykia comes from the Ancient Greek εὐτυχία: good fortune, success. The Greeks saw it as a gift of fate. In an IT project, we believe it is built: a need properly understood, technical choices that are justified, rigorous execution.",
      es: "Eutykia viene del griego antiguo εὐτυχία: la buena fortuna, el éxito. Los griegos la veían como un don del destino. En un proyecto informático, creemos que se construye: una necesidad bien comprendida, decisiones técnicas justificadas, una ejecución rigurosa.",
      ar: "اسم Eutykia مشتق من اليونانية القديمة εὐτυχία، ومعناها حسن الطالع والنجاح. كان الإغريق يرون في حسن الطالع هبة من القدر. أما نحن فنرى أن النجاح، في أي مشروع معلوماتي، يُبنى: حاجة مفهومة جيدا، واختيارات تقنية مبرَّرة، وتنفيذ متقَن.",
    },
    valuesTitle: { fr: "Nos valeurs", en: "Our values", es: "Nuestros valores", ar: "قيمنا" },
    values: [
      {
        title: { fr: "Excellence technique", en: "Technical excellence", es: "Excelencia técnica", ar: "التميز التقني" },
        text: {
          fr: "Chaque ligne de code, chaque recommandation reflète notre exigence de qualité et de rigueur.",
          en: "Every line of code, every recommendation reflects our commitment to quality and rigour.",
          es: "Cada línea de código, cada recomendación refleja nuestra exigencia de calidad y rigor.",
          ar: "كل سطر برمجي وكل توصية يعكسان حرصنا على الجودة والدقة.",
        },
      },
      {
        title: { fr: "Engagement client", en: "Client commitment", es: "Compromiso con el cliente", ar: "الالتزام تجاه الزبون" },
        text: {
          fr: "Nous nous impliquons dans la réussite de chaque mission comme si c'était la nôtre.",
          en: "We invest in the success of every engagement as if it were our own.",
          es: "Nos involucramos en el éxito de cada misión como si fuera la nuestra.",
          ar: "ننخرط في إنجاح كل مهمة كما لو كانت مهمتنا.",
        },
      },
      {
        title: { fr: "Pragmatisme", en: "Pragmatism", es: "Pragmatismo", ar: "البراغماتية" },
        text: {
          fr: "Nous privilégions les solutions qui fonctionnent. L'efficacité prime sur les effets de mode.",
          en: "We favour solutions that work. Effectiveness comes before trends.",
          es: "Privilegiamos las soluciones que funcionan. La eficacia prima sobre las modas.",
          ar: "نفضّل الحلول التي تؤتي ثمارها. الفعالية أولى من مجاراة الموضة.",
        },
      },
      {
        title: { fr: "Réactivité", en: "Responsiveness", es: "Capacidad de respuesta", ar: "سرعة الاستجابة" },
        text: {
          fr: "Disponibilité, écoute et adaptation rapide : nous répondons à vos besoins sans inertie.",
          en: "Availability, attentiveness and rapid adaptation: we respond to your needs without delay.",
          es: "Disponibilidad, escucha y adaptación rápida: respondemos a sus necesidades sin inercia.",
          ar: "حضور وإصغاء وتكيف سريع: نستجيب لاحتياجاتكم دون تأخير.",
        },
      },
    ],
    approachTitle: { fr: "Notre approche", en: "Our approach", es: "Nuestro enfoque", ar: "منهجيتنا" },
    steps: [
      {
        title: { fr: "Comprendre", en: "Understand", es: "Comprender", ar: "الفهم" },
        text: {
          fr: "Analyse de votre contexte, vos contraintes et vos objectifs avant toute intervention.",
          en: "Analysis of your context, constraints and objectives before any engagement.",
          es: "Análisis de su contexto, restricciones y objetivos antes de cualquier intervención.",
          ar: "تحليل سياقكم وقيودكم وأهدافكم قبل أي تدخل.",
        },
      },
      {
        title: { fr: "Concevoir", en: "Design", es: "Diseñar", ar: "التصميم" },
        text: {
          fr: "Proposition de solutions adaptées, réalistes et alignées avec votre stratégie technique.",
          en: "Tailored, realistic solutions aligned with your technical strategy.",
          es: "Propuesta de soluciones adaptadas, realistas y alineadas con su estrategia técnica.",
          ar: "اقتراح حلول ملائمة وواقعية ومنسجمة مع استراتيجيتكم التقنية.",
        },
      },
      {
        title: { fr: "Délivrer", en: "Deliver", es: "Entregar", ar: "الإنجاز" },
        text: {
          fr: "Exécution avec rigueur et transparence, en maintenant un dialogue permanent avec vos équipes.",
          en: "Rigorous and transparent execution, maintaining ongoing dialogue with your teams.",
          es: "Ejecución con rigor y transparencia, manteniendo un diálogo permanente con sus equipos.",
          ar: "تنفيذ بدقة وشفافية، مع الحفاظ على حوار دائم مع فرقكم.",
        },
      },
    ],
    ctaTitle: {
      fr: "Un projet ? Une mission ? Parlons-en.",
      en: "Have a project? Let's talk.",
      es: "¿Tiene un proyecto? Hablemos.",
      ar: "لديكم مشروع أو مهمة؟ لنتحدث.",
    },
    ctaSubtitle: {
      fr: "Nous répondons sous 24h pour étudier votre besoin.",
      en: "We respond within 24 hours to assess your needs.",
      es: "Respondemos en menos de 24 horas para estudiar su necesidad.",
      ar: "نرد عليكم خلال 24 ساعة لدراسة احتياجاتكم.",
    },
    ctaBtn: { fr: "Nous contacter", en: "Contact us", es: "Contáctenos", ar: "تواصلوا معنا" },
  },

  // ─── Contact page ───
  contact: {
    pageTitle: { fr: "Contactez-nous", en: "Contact us", es: "Contáctenos", ar: "تواصلوا معنا" },
    pageSubtitle: {
      fr: "Un projet, une mission, une question ? Nous vous répondons sous 24 heures.",
      en: "A project, an engagement, a question? We respond within 24 hours.",
      es: "¿Un proyecto, una misión, una pregunta? Le respondemos en menos de 24 horas.",
      ar: "لديكم مشروع أو مهمة أو استفسار؟ نرد عليكم خلال 24 ساعة.",
    },
    labelName: { fr: "Nom complet", en: "Full name", es: "Nombre completo", ar: "الاسم الكامل" },
    labelEmail: { fr: "Email professionnel", en: "Professional email", es: "Email profesional", ar: "البريد الإلكتروني المهني" },
    labelCompany: { fr: "Entreprise", en: "Company", es: "Empresa", ar: "الشركة" },
    labelPhone: { fr: "Téléphone", en: "Phone", es: "Teléfono", ar: "الهاتف" },
    labelPhoneOptional: { fr: "(optionnel)", en: "(optional)", es: "(opcional)", ar: "(اختياري)" },
    labelSubject: { fr: "Sujet", en: "Subject", es: "Asunto", ar: "الموضوع" },
    labelMessage: { fr: "Message", en: "Message", es: "Mensaje", ar: "الرسالة" },
    placeholderName: { fr: "Prénom Nom", en: "First and last name", es: "Nombre y apellido", ar: "الاسم الشخصي والعائلي" },
    placeholderEmail: { fr: "vous@entreprise.ma", en: "you@company.com", es: "usted@empresa.com", ar: "vous@entreprise.ma" },
    placeholderCompany: { fr: "Nom de votre entreprise", en: "Your company name", es: "Nombre de su empresa", ar: "اسم شركتكم" },
    placeholderSelect: { fr: "Sélectionnez un sujet", en: "Select a subject", es: "Seleccione un asunto", ar: "اختاروا موضوعا" },
    optionProject: { fr: "Nouveau projet", en: "New project", es: "Nuevo proyecto", ar: "مشروع جديد" },
    optionStaff: { fr: "Mission / Régie", en: "Staff augmentation", es: "Misión / Delegación", ar: "مهمة / مساعدة تقنية" },
    optionConsulting: { fr: "Conseil", en: "Consulting", es: "Consultoría", ar: "استشارة" },
    optionPartnership: { fr: "Partenariat", en: "Partnership", es: "Colaboración", ar: "شراكة" },
    optionOther: { fr: "Autre", en: "Other", es: "Otro", ar: "موضوع آخر" },
    placeholderMessage: {
      fr: "Décrivez votre projet ou votre besoin...",
      en: "Describe your project or your needs...",
      es: "Describa su proyecto o su necesidad...",
      ar: "اشرحوا لنا مشروعكم أو احتياجاتكم...",
    },
    submitBtn: { fr: "Envoyer votre message", en: "Send your message", es: "Enviar su mensaje", ar: "إرسال الرسالة" },
    privacy: {
      fr: "Vos données servent uniquement à répondre à votre demande. Elles ne sont ni vendues ni cédées.",
      en: "Your data is used only to answer your request. It is never sold or passed on.",
      es: "Sus datos se utilizan únicamente para responder a su solicitud. No se venden ni se ceden.",
      ar: "تُستعمل معطياتكم حصريا للرد على طلبكم، ولا تُباع ولا تُفوَّت للغير.",
    },
    coordTitle: { fr: "Coordonnées", en: "Contact details", es: "Datos de contacto", ar: "معلومات الاتصال" },
    labelEmailInfo: { fr: "Email", en: "Email", es: "Email", ar: "البريد الإلكتروني" },
    labelLocation: { fr: "Localisation", en: "Location", es: "Ubicación", ar: "المقر" },
    labelAvailability: { fr: "Disponibilité", en: "Availability", es: "Disponibilidad", ar: "أوقات العمل" },
    availabilityText: { fr: "Du lundi au vendredi, de 9h à 18h", en: "Monday to Friday, 9am to 6pm", es: "De lunes a viernes, de 9:00 a 18:00", ar: "من الاثنين إلى الجمعة، من 9:00 إلى 18:00" },
    sendError: {
      fr: "L'envoi a échoué. Réessayez, ou écrivez-nous directement par email.",
      en: "Your message could not be sent. Try again, or email us directly.",
      es: "No se pudo enviar el mensaje. Inténtelo de nuevo o escríbanos por email.",
      ar: "تعذّر إرسال الرسالة. أعيدوا المحاولة أو راسلونا مباشرة عبر البريد الإلكتروني.",
    },
    mailOpened: {
      fr: "Votre messagerie devrait s'être ouverte avec le message prêt à envoyer. Si rien ne s'est passé, écrivez-nous directement à :",
      en: "Your email app should have opened with the message ready to send. If nothing happened, write to us directly at:",
      es: "Su aplicación de correo debería haberse abierto con el mensaje listo para enviar. Si no ha ocurrido nada, escríbanos directamente a:",
      ar: "من المفترض أن يكون تطبيق بريدكم الإلكتروني قد فُتح والرسالة جاهزة للإرسال. إن لم يحدث شيء، راسلونا مباشرة على العنوان التالي:",
    },
    mailFallback: {
      fr: "Votre messagerie va s'ouvrir avec le message prêt à envoyer.",
      en: "Your email app will open with the message ready to send.",
      es: "Su aplicación de correo se abrirá con el mensaje listo para enviar.",
      ar: "سيُفتح تطبيق بريدكم الإلكتروني والرسالة جاهزة للإرسال.",
    },
  },

  // ─── Legal Notice ───
  legal: {
    title: { fr: "Mentions légales", en: "Legal Notice", es: "Aviso legal", ar: "البيانات القانونية" },
    editorTitle: { fr: "1. Éditeur du site", en: "1. Website Publisher", es: "1. Editor del sitio", ar: "1. ناشر الموقع" },
    labelForm: { fr: "Forme juridique", en: "Legal form", es: "Forma jurídica", ar: "الشكل القانوني" },
    labelAddress: { fr: "Siège social", en: "Registered office", es: "Sede social", ar: "المقر الاجتماعي" },
    labelRc: { fr: "Registre du commerce", en: "Trade register", es: "Registro mercantil", ar: "السجل التجاري" },
    labelIce: { fr: "ICE", en: "ICE", es: "ICE", ar: "التعريف الموحد للمقاولة (ICE)" },
    labelDirector: { fr: "Directeur de la publication", en: "Publication director", es: "Director de la publicación", ar: "مدير النشر" },
    hostingTitle: { fr: "2. Hébergement", en: "2. Hosting", es: "2. Alojamiento", ar: "2. الاستضافة" },
    hostingText: {
      fr: "Le site est hébergé par : GitHub, Inc. — 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis — via le service GitHub Pages.",
      en: "This website is hosted by: GitHub, Inc. — 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA — via the GitHub Pages service.",
      es: "El sitio está alojado por: GitHub, Inc. — 88 Colin P Kelly Jr St, San Francisco, CA 94107, EE. UU. — a través del servicio GitHub Pages.",
      ar: "تستضيف الموقع شركة \u2066GitHub, Inc.\u2069 وعنوانها: \u206688 Colin P Kelly Jr St, San Francisco, CA 94107\u2069، الولايات المتحدة الأمريكية، عبر خدمة \u2066GitHub Pages\u2069.",
    },
    ipTitle: { fr: "3. Propriété intellectuelle", en: "3. Intellectual Property", es: "3. Propiedad intelectual", ar: "3. الملكية الفكرية" },
    ipText: {
      fr: "L'ensemble du contenu du site (textes, images, logo, éléments graphiques) est la propriété exclusive de Eutykia Solutions, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
      en: "All content on this website (text, images, logo, graphic elements) is the exclusive property of Eutykia Solutions, unless otherwise stated. Any reproduction, even partial, is prohibited without prior authorisation.",
      es: "Todo el contenido del sitio (textos, imágenes, logotipo, elementos gráficos) es propiedad exclusiva de Eutykia Solutions, salvo mención contraria. Toda reproducción, incluso parcial, está prohibida sin autorización previa.",
      ar: "جميع محتويات الموقع (النصوص، الصور، الشعار، العناصر الغرافيكية) ملك حصري لشركة Eutykia Solutions، ما لم يُذكر خلاف ذلك. يُمنع أي استنساخ، ولو جزئيا، دون إذن مسبق.",
    },
    dataTitle: { fr: "4. Données personnelles", en: "4. Personal Data", es: "4. Datos personales", ar: "4. المعطيات ذات الطابع الشخصي" },
    dataText: {
      fr: "Les données collectées via le formulaire de contact (nom, email, entreprise, téléphone, message) servent uniquement à Eutykia Solutions pour répondre à vos demandes. Elles sont acheminées par notre prestataire d'envoi de formulaires (Web3Forms) et ne sont ni cédées ni vendues. Conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et d'opposition sur vos données. Pour exercer ces droits, écrivez-nous à l'adresse email indiquée ci-dessus.",
      en: "Data collected through the contact form (name, email, company, phone, message) is used solely by Eutykia Solutions to respond to your enquiries. It is delivered through our form-handling provider (Web3Forms) and is neither transferred nor sold. In accordance with Moroccan Law No. 09-08 on the protection of individuals with regard to the processing of personal data, you have the right to access, rectify and object to the processing of your data. To exercise these rights, write to us at the email address given above.",
      es: "Los datos recogidos a través del formulario de contacto (nombre, email, empresa, teléfono, mensaje) se utilizan exclusivamente por Eutykia Solutions para responder a sus solicitudes. Se transmiten a través de nuestro proveedor de formularios (Web3Forms) y no se ceden ni se venden. Conforme a la ley marroquí n.º 09-08 relativa a la protección de las personas físicas en el tratamiento de datos personales, usted dispone de un derecho de acceso, rectificación y oposición sobre sus datos. Para ejercer estos derechos, escríbanos a la dirección de email indicada más arriba.",
      ar: "المعطيات التي تُجمع عبر استمارة الاتصال (الاسم، البريد الإلكتروني، الشركة، الهاتف، الرسالة) تستعملها شركة Eutykia Solutions حصريا للرد على طلباتكم. وتُنقل عبر مزوّدنا لخدمة الاستمارات (Web3Forms)، ولا تُفوَّت ولا تُباع للغير. طبقا للقانون رقم 09.08 المتعلق بحماية الأشخاص الذاتيين تجاه معالجة المعطيات ذات الطابع الشخصي، تتوفرون على حق الولوج إلى معطياتكم وتصحيحها والتعرض على معالجتها. لممارسة هذه الحقوق، راسلونا على عنوان البريد الإلكتروني المذكور أعلاه.",
    },
    cookiesTitle: { fr: "5. Cookies", en: "5. Cookies", es: "5. Cookies", ar: "5. ملفات تعريف الارتباط" },
    cookiesText: {
      fr: "Ce site ne dépose aucun cookie publicitaire ni de suivi. Seul votre choix de langue est mémorisé dans votre navigateur.",
      en: "This website sets no advertising or tracking cookies. Only your language choice is stored in your browser.",
      es: "Este sitio no utiliza cookies publicitarias ni de seguimiento. Solo se guarda en su navegador el idioma elegido.",
      ar: "لا يستخدم هذا الموقع أي ملفات تعريف ارتباط إشهارية أو خاصة بالتتبع. يُحفظ في متصفحكم اختيار اللغة فقط.",
    },
    liabilityTitle: { fr: "6. Responsabilité", en: "6. Liability", es: "6. Responsabilidad", ar: "6. المسؤولية" },
    liabilityText: {
      fr: "Eutykia Solutions s'efforce de maintenir les informations du site à jour mais ne saurait être tenue responsable d'éventuelles inexactitudes ou omissions.",
      en: "Eutykia Solutions endeavours to keep the information on this website up to date but cannot be held liable for any inaccuracies or omissions.",
      es: "Eutykia Solutions se esfuerza por mantener la información del sitio actualizada, pero no puede ser considerada responsable de posibles inexactitudes u omisiones.",
      ar: "تحرص شركة Eutykia Solutions على تحيين معلومات الموقع، غير أنها لا تتحمل مسؤولية ما قد يرد فيه من أخطاء أو إغفالات.",
    },
  },

  // ─── Careers page ───
  careers: {
    pageTitle: { fr: "Carrières", en: "Careers", es: "Empleo", ar: "التوظيف" },
    pageSubtitle: {
      fr: "Rejoignez une équipe d'experts passionnés par la technique et engagés dans la réussite de chaque mission.",
      en: "Join a team of experts passionate about technology and committed to the success of every engagement.",
      es: "Únase a un equipo de expertos apasionados por la tecnología y comprometidos con el éxito de cada misión.",
      ar: "انضموا إلى فريق من الخبراء الشغوفين بالتقنية والملتزمين بإنجاح كل مهمة.",
    },
    whyTitle: { fr: "Pourquoi nous rejoindre ?", en: "Why join us?", es: "¿Por qué unirse a nosotros?", ar: "لماذا تنضمون إلينا؟" },
    whyItems: [
      {
        title: { fr: "Projets stimulants", en: "Challenging projects", es: "Proyectos estimulantes", ar: "مشاريع محفِّزة" },
        text: {
          fr: "Des missions à forte valeur ajoutée, sur des sujets techniques exigeants.",
          en: "High-value engagements on demanding technical subjects.",
          es: "Misiones de alto valor añadido, en temas técnicos exigentes.",
          ar: "مهام ذات قيمة مضافة عالية، في مواضيع تقنية عالية المتطلبات.",
        },
      },
      {
        title: { fr: "Montée en compétences", en: "Skills development", es: "Desarrollo de competencias", ar: "تطوير المهارات" },
        text: {
          fr: "Formations, certifications et accompagnement pour évoluer sur les technologies les plus demandées.",
          en: "Training, certifications and support to grow on the most in-demand technologies.",
          es: "Formación, certificaciones y acompañamiento para crecer en las tecnologías más demandadas.",
          ar: "دورات تكوينية وشهادات مهنية ومواكبة لتطوير مهاراتكم في أكثر التقنيات طلبا.",
        },
      },
      {
        title: { fr: "Environnement bienveillant", en: "Supportive environment", es: "Entorno de apoyo", ar: "بيئة عمل داعمة" },
        text: {
          fr: "Un management de proximité, à l'écoute, avec un vrai suivi de carrière.",
          en: "Hands-on management, attentive to your needs, with genuine career guidance.",
          es: "Una gestión cercana, atenta, con un verdadero seguimiento de carrera.",
          ar: "إدارة قريبة منكم تحسن الإصغاء، مع تتبّع فعلي لمساركم المهني.",
        },
      },
    ],
    noOffers: {
      fr: "Aucun poste n'est ouvert pour le moment. Les candidatures spontanées sont lues avec attention.",
      en: "No positions are open right now. We read every spontaneous application carefully.",
      es: "No hay puestos abiertos por el momento. Leemos con atención todas las candidaturas espontáneas.",
      ar: "لا توجد مناصب شاغرة حاليا. نقرأ طلبات الترشح التلقائي بعناية.",
    },
    offersTitle: { fr: "Nos offres", en: "Open positions", es: "Nuestras ofertas", ar: "عروض العمل" },
    filledBadge: { fr: "Poste pourvu", en: "Position filled", es: "Puesto cubierto", ar: "تم شغل المنصب" },
    activeBadge: { fr: "Poste ouvert", en: "Now hiring", es: "Puesto abierto", ar: "منصب شاغر" },
    applyBtn: { fr: "Postuler", en: "Apply", es: "Postularse", ar: "ترشّحوا" },
    spontaneousTitle: {
      fr: "Vous ne trouvez pas le poste idéal ?",
      en: "Don't see the right role?",
      es: "¿No encuentra el puesto ideal?",
      ar: "لم تجدوا المنصب المناسب؟",
    },
    spontaneousText: {
      fr: "Envoyez-nous votre candidature spontanée. Nous sommes toujours à la recherche de talents.",
      en: "Send us a spontaneous application. We are always looking for talent.",
      es: "Envíenos su candidatura espontánea. Siempre estamos buscando talento.",
      ar: "أرسلوا إلينا ترشحكم التلقائي. نبحث دائما عن الكفاءات.",
    },
    spontaneousBtn: { fr: "Candidature spontanée", en: "Spontaneous application", es: "Candidatura espontánea", ar: "ترشح تلقائي" },
    contract: { fr: "Contrat", en: "Contract", es: "Contrato", ar: "العقد" },
    location: { fr: "Localisation", en: "Location", es: "Ubicación", ar: "مكان العمل" },
    experience: { fr: "Expérience", en: "Experience", es: "Experiencia", ar: "الخبرة المطلوبة" },
    salary: { fr: "Rémunération", en: "Salary", es: "Remuneración", ar: "الأجر" },
    remote: { fr: "Télétravail", en: "Remote work", es: "Teletrabajo", ar: "العمل عن بعد" },
    missions: { fr: "Missions principales", en: "Key responsibilities", es: "Misiones principales", ar: "المهام الرئيسية" },
    stack: { fr: "Environnement technique", en: "Technical environment", es: "Entorno técnico", ar: "البيئة التقنية" },
    profile: { fr: "Profil recherché", en: "Required profile", es: "Perfil buscado", ar: "المؤهلات المطلوبة" },
    benefits: { fr: "Avantages", en: "Benefits", es: "Ventajas", ar: "المزايا" },
    // Ajouter ici les offres (voir le type JobOffer en bas de fichier)
    offers: [] as JobOffer[],
  },

  // ─── 404 Page ───
  notFound: {
    title: { fr: "Page introuvable", en: "Page not found", es: "Página no encontrada", ar: "الصفحة غير موجودة" },
    text: {
      fr: "La page que vous recherchez n'existe pas ou a été déplacée.",
      en: "The page you are looking for does not exist or has been moved.",
      es: "La página que busca no existe o ha sido movida.",
      ar: "الصفحة التي تبحثون عنها غير موجودة أو تم نقلها.",
    },
    btn: { fr: "Retour à l'accueil", en: "Back to home", es: "Volver al inicio", ar: "العودة إلى الرئيسية" },
  },

  // ─── Form validation ───
  validation: {
    invalidEmail: {
      fr: "Veuillez entrer un email valide.",
      en: "Please enter a valid email address.",
      es: "Introduzca una dirección de correo electrónico válida.",
      ar: "المرجو إدخال عنوان بريد إلكتروني صحيح.",
    },
    messageTooShort: {
      fr: "Le message doit contenir au moins 10 caractères.",
      en: "The message must contain at least 10 characters.",
      es: "El mensaje debe contener al menos 10 caracteres.",
      ar: "يجب أن تتضمن الرسالة 10 أحرف على الأقل.",
    },
    successTitle: { fr: "Message envoyé", en: "Message sent", es: "Mensaje enviado", ar: "تم إرسال الرسالة" },
    successText: {
      fr: "Votre message a bien été envoyé. Nous vous répondrons sous 24 h.",
      en: "Your message has been sent successfully. We will reply within 24 hours.",
      es: "Su mensaje ha sido enviado correctamente. Le responderemos en un plazo de 24 horas.",
      ar: "تم إرسال رسالتكم بنجاح. سنرد عليكم خلال 24 ساعة.",
    },
  },
};

type L = Record<Language, string>;
type LList = Record<Language, string[]>;

export interface JobOffer {
  title: L;
  status: "active" | "filled";
  contract: L;
  location: L;
  experience: L;
  salary: L;
  remote: L;
  desc: L;
  missions: LList;
  techStack: string[];
  profileItems: LList;
  benefitsItems: LList;
}
