(function () {
  "use strict";

  /* ---- Translations ---- */
  const translations = {
    fr: {
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_skills: "Compétences",
      nav_services: "Services",
      nav_work: "Projets",
      nav_contact: "Contact",
      hero_badge: "Identité visuelle · Web · Print",
      hero_title_1: "Votre Image,",
      hero_title_2: "Notre Passion",
      hero_subtitle: "Salsabil Design vous accompagne dans la création de supports visuels professionnels, numériques et imprimés, adaptés à votre image de marque et à vos objectifs.",
      hero_btn_work: "Voir nos réalisations",
      hero_btn_contact: "Contactez-nous",
      about_badge: "À propos",
      about_title_before: "Là où les pixels ",
      about_title_span: "prennent vie",
      about_p1: "Je suis Salsabil, fondatrice de Salsabil Design, un univers créatif dédié à la conception de supports visuels qui allient esthétique, stratégie et authenticité. Spécialisée dans le Social Media Design, l'identité visuelle et les présentations PowerPoint professionnelles, j'aide les marques et les entrepreneurs à construire une image forte et cohérente à travers des créations sur mesure. À travers chaque projet, mon ambition est de donner vie à des designs qui captent l'attention, transmettent un message clair et laissent une impression durable. 💜",
      about_p2: "",
      about_p3: "",
      about_btn: "Explorer",
      about_label_1: "Particuliers",
      about_label_2: "Professionnels",
      about_label_3: "Branding",
      about_label_4: "Social Média",
      about_label_5: "Présentations",
      about_label_6: "Imprimés",
      about_label_7: "UI/UX Design",
      about_label_8: "Motion Design",
      skills_badge: "Nos compétences",
      skills_title_before: "Notre ",
      skills_title_span: "expertise",
      skill_1: "Design pour les réseaux sociaux",
      skill_2: "Création d'identité visuelle",
      skill_3: "Conception de présentations PowerPoint",
      skill_4: "Mise en page de rapports et mémoires",
      skill_5: "Création de produits imprimés",
      skill_6: "Préparation de fichiers pour impression",
      skill_7: "Maîtrise des outils de design",
      skill_8: "Supports de communication modernes",
      services_badge: "Notre savoir-faire",
      services_title_before: "Nos ",
      services_title_span: "Services",
      service_digital_title: "Services Numériques",
      service_social_title: "Social Media Design",
      service_social_items: "Publications • Stories & Reels • Couvertures • Vidéos simples",
      service_brand_title: "Identité Visuelle",
      service_brand_items: "Logo • Charte graphique • Branding",
      service_ppt_title: "Présentations PowerPoint",
      service_ppt_items: "Présentations pro • Rapports • Soutenances",
      service_print_title: "Services Imprimés",
      service_see_projects: "Voir nos projets",
      print_cat_1: "Papeterie & Organisation",
      print_cat_1_items: "Carnets & Planners • Cahiers • Registres & carnets de vente",
      print_cat_2: "Cartes & Albums",
      print_cat_2_items: "Cartes de visite • Cartes de remerciement • Cartes d'invitation • Albums • Cadres",
      print_cat_3: "Autres Créations",
      print_cat_3_items: "Stickers • Services sur demande",
      sprint_1: "Carnets & Planners",
      sprint_2: "Cartes de visite",
      sprint_3: "Cartes de remerciement",
      sprint_4: "Stickers personnalisés",
      sprint_5: "Albums personnalisés",
      sprint_6: "Registres • carnets de vente • chèques",
      sprint_7: "Cahiers organisationnels",
      sprint_8: "Cadres & Photo cards",
      sprint_9: "Plusieurs autres services sur demande",
      sprint_10: "Cartes d'invitation",
      projects_title_before: "Explorez ",
      projects_title_span: "nos projets",
      projects_hero_text: "Découvrez une sélection de nos créations, du digital à l'imprimé.",
      projects_all: "Tous",
      proj_digital_1: "Feed Instagram",
      proj_digital_1_desc: "Design de publications et stories pour une marque de mode.",
      proj_digital_2: "Branding Startup",
      proj_digital_2_desc: "Logo, charte graphique et cartes de visite.",
      proj_digital_3: "Soutenance Master",
      proj_digital_3_desc: "Présentation professionnelle pour mémoire de fin d'études.",
      proj_print_1: "Planner 2026",
      proj_print_1_desc: "Carnet de planning personnalisé, reliure couvrante.",
      proj_print_2: "Cartes Luxe",
      proj_print_2_desc: "Cartes de visite premium avec dorure et finition mate.",
      proj_print_3: "Stickers Pack",
      proj_print_3_desc: "Autocollants personnalisés pour une boutique en ligne.",
      proj_print_4: "Album Mariage",
      proj_print_4_desc: "Album photo personnalisé, couverture rigide.",
      proj_print_5: "Cadre Portrait",
      proj_print_5_desc: "Cadre photo design avec passe-partout.",
      proj_print_6: "Registre de vente",
      proj_print_6_desc: "Carnet de vente personnalisé pour commerce.",
      proj_print_7: "Carte Invitation",
      proj_print_7_desc: "Carte d'invitation personnalisée pour vos événements.",
      work_badge: "Nos réalisations",
      work_title_before: "Projets ",
      work_title_span: "phares",
      work_1_title: "App Mobile",
      work_1_text: "Design UX/UI",
      work_2_title: "E-Commerce",
      work_2_text: "Développement Web",
      work_3_title: "Identité de marque",
      work_3_text: "Branding",
      testim_badge: "Témoignages",
      testim_title_before: "Ce que ",
      testim_title_span: "nos clients disent",
      testim_1_text: "\"Rabbi mlih, service khir bzf. Taw jelly ta3ref tdir design.\"",
      testim_1_fr: "Service excellent, ils savent vraiment faire du design.",
      testim_1_name: "Amina K.",
      testim_1_role: "Entrepreneuse",
      testim_2_text: "\"Wallah madjtouche, khdmah professionnelle w tarif hakkin.\"",
      testim_2_fr: "Rien à redire, travail pro et prix justes.",
      testim_2_name: "Mohamed L.",
      testim_2_role: "Startup Founder",
      testim_3_text: "\"Nsa7 bik bzf, kano professionnels mn lwl l tani.\"",
      testim_3_fr: "Je vous le recommande, professionnels du début à la fin.",
      testim_3_name: "Sara B.",
      testim_3_role: "Coiffeuse",
      testim_4_text: "\"Première fois njrb design, nta3hom fouq. barkallah fihom.\"",
      testim_4_fr: "Première expérience en design, ils sont au top. Bravo.",
      testim_4_name: "Yassine D.",
      testim_4_role: "Artisan",
      contact_badge: "Contactez-nous",
      contact_title_before: "Créons ",
      contact_title_span: "ensemble",
      contact_text: "Donnez vie à vos idées avec des solutions créatives et professionnelles adaptées à vos besoins.",
      contact_text_2: "Pour toute demande d'information ou de devis, n'hésitez pas à nous contacter. Vous pouvez également nous rejoindre sur nos réseaux sociaux pour suivre nos dernières réalisations et actualités.",
      contact_social_text: "Envoyez-nous un message sur nos réseaux sociaux, nous vous répondrons rapidement.",
      contact_email_label: "Email",
      contact_hours_label: "Horaires",
      contact_hours: "Lun–Ven 9h–18h",
      contact_email: "salsabilldesign27@gmail.com",
      contact_location: "Bratislava, Slovaquie",
      form_name: "Votre nom",
      form_email: "Votre email",
      form_subject: "Sujet",
      form_message: "Parlez-nous de votre projet...",
      form_btn: "Envoyer",
      footer_desc: "Design graphique, branding, web et print \u2014 nous donnons vie \u00e0 vos projets cr\u00e9atifs.",
      footer_follow: "Suivez-nous",
      footer_nav: "Navigation",
      footer_services: "Services",
      footer_privacy: "Politique de confidentialit\u00e9",
      footer_terms: "Conditions d\u2019utilisation",
      footer_copyright: "\u00a9 2026 Pixel Room. Tous droits r\u00e9serv\u00e9s."
    },
    ar: {
      nav_home: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
      nav_about: "\u0645\u0646 \u0646\u062d\u0646",
      nav_skills: "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a",
      nav_services: "\u062e\u062f\u0645\u0627\u062a\u0646\u0627",
      nav_work: "\u0623\u0639\u0645\u0627\u0644\u0646\u0627",
      nav_contact: "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",
      hero_badge: "\u0647\u0648\u064a\u0629 \u0628\u0635\u0631\u064a\u0629 \u00b7 \u0648\u064a\u0628 \u00b7 \u0637\u0628\u0627\u0639\u0629",
      hero_title_1: "\u0635\u0648\u0631\u062a\u0643\u060c",
      hero_title_2: "\u0634\u063a\u0641\u0646\u0627",
      hero_subtitle: "Salsabil Design ترافقكم في إنشاء وسائل بصرية مهنية، رقمية ومطبوعة، تتكيف مع هوية علامتكم التجارية وأهدافكم.",
      hero_btn_work: "\u0634\u0627\u0647\u062f \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
      hero_btn_contact: "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",
      about_badge: "\u0645\u0646 \u0646\u062d\u0646",
      about_title_before: "\u062d\u064a\u062b \u062a\u0646\u0628\u0636 \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a ",
      about_title_span: "\u0628\u0627\u0644\u062d\u064a\u0627\u0629",
      about_p1: "أنا Salsabil، مؤسسة Salsabil Design، عالم إبداعي مخصص لتصميم الوسائط البصرية التي تجمع بين الجماليات والاستراتيجية والأصالة. متخصصة في تصميم وسائل التواصل الاجتماعي، الهوية البصرية والعروض التقديمية PowerPoint، أساعد العلامات التجارية ورواد الأعمال في بناء صورة قوية ومتماسكة من خلال إبداعات مخصصة. من خلال كل مشروع، طموحي هو إحياء تصاميم تجذب الانتباه، تنقل رسالة واضحة وتترك انطباعاً دائماً. 💜",
      about_p2: "",
      about_p3: "",
      about_btn: "\u0627\u0633\u062a\u0643\u0634\u0641",
      about_label_1: "\u0623\u0641\u0631\u0627\u062f",
      about_label_2: "\u0645\u062d\u062a\u0631\u0641\u0648\u0646",
      about_label_3: "\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a",
      about_label_4: "\u062a\u0648\u0627\u0635\u0644",
      about_label_5: "\u0639\u0631\u0648\u0636",
      about_label_6: "\u0645\u0637\u0628\u0648\u0639\u0627\u062a",
      about_label_7: "\u062a\u0635\u0645\u064a\u0645 UI/UX",
      about_label_8: "\u062a\u0635\u0645\u064a\u0645 \u062d\u0631\u0643\u0629",
      skills_badge: "\u0645\u0647\u0627\u0631\u0627\u062a\u0646\u0627",
      skills_title_before: "",
      skills_title_span: "\u062e\u0628\u0631\u062a\u0646\u0627",
      skill_1: "\u062a\u0635\u0645\u064a\u0645 \u0644\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a",
      skill_2: "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0628\u0635\u0631\u064a\u0629",
      skill_3: "\u062a\u0635\u0645\u064a\u0645 \u0639\u0631\u0648\u0636 PowerPoint",
      skill_4: "\u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0648\u0627\u0644\u0631\u0633\u0627\u0626\u0644",
      skill_5: "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0645\u0637\u0628\u0648\u0639\u0629",
      skill_6: "\u062a\u062d\u0636\u064a\u0631 \u0645\u0644\u0641\u0627\u062a \u0644\u0644\u0637\u0628\u0627\u0639\u0629",
      skill_7: "\u0625\u062a\u0642\u0627\u0646 \u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062a\u0635\u0645\u064a\u0645",
      skill_8: "\u0648\u0633\u0627\u0626\u0644 \u0627\u062a\u0635\u0627\u0644 \u062d\u062f\u064a\u062b\u0629",
      services_badge: "\u062e\u0628\u0631\u062a\u0646\u0627",
      services_title_before: "",
      services_title_span: "\u062e\u062f\u0645\u0627\u062a\u0646\u0627",
      service_digital_title: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629",
      service_social_title: "\u062a\u0635\u0645\u064a\u0645 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644",
      service_social_items: "\u0645\u0646\u0634\u0648\u0631\u0627\u062a \u2022 \u0642\u0635\u0635 \u0648\u0631\u064a\u0644\u0632 \u2022 \u0623\u063a\u0637\u064a\u0629 \u2022 \u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a",
      service_brand_title: "\u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0628\u0635\u0631\u064a\u0629",
      service_brand_items: "\u0634\u0639\u0627\u0631 \u2022 \u062f\u0644\u064a\u0644 \u0623\u0633\u0644\u0648\u0628 \u2022 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a",
      service_ppt_title: "\u0639\u0631\u0648\u0636 PowerPoint",
      service_ppt_items: "\u0639\u0631\u0648\u0636 \u0645\u0647\u0646\u064a\u0629 \u2022 \u062a\u0642\u0627\u0631\u064a\u0631 \u2022 \u0645\u0646\u0627\u0642\u0634\u0627\u062a",
      service_print_title: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0637\u0628\u0648\u0639\u0629",
      service_see_projects: "\u0639\u0631\u0636 \u0645\u0634\u0627\u0631\u064a\u0639\u0646\u0627",
      print_cat_1: "\u0627\u0644\u0642\u0631\u0637\u0627\u0633\u064a\u0629 \u0648\u0627\u0644\u062a\u0646\u0638\u064a\u0645",
      print_cat_1_items: "\u0643\u0631\u0627\u0633\u0627\u062a \u2022 \u062f\u0641\u0627\u062a\u0631 \u2022 \u0633\u062c\u0644\u0627\u062a",
      print_cat_2: "\u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062a \u0648\u0627\u0644\u0623\u0644\u0628\u0648\u0645\u0627\u062a",
      print_cat_2_items: "بطاقات زيارة • بطاقات شكر • بطاقات دعوة • ألبومات • براويز",
      print_cat_3: "\u0625\u0628\u062f\u0627\u0639\u0627\u062a \u0623\u062e\u0631\u0649",
      print_cat_3_items: "\u0645\u0644\u0635\u0642\u0627\u062a \u2022 \u062e\u062f\u0645\u0627\u062a \u062d\u0633\u0628 \u0627\u0644\u0637\u0644\u0628",
      sprint_1: "\u0643\u0631\u0627\u0633\u0627\u062a \u0648\u0645\u062e\u0637\u0637\u0627\u062a",
      sprint_2: "\u0628\u0637\u0627\u0642\u0627\u062a \u0632\u064a\u0627\u0631\u0629",
      sprint_3: "\u0628\u0637\u0627\u0642\u0627\u062a \u0634\u0643\u0631",
      sprint_4: "\u0645\u0644\u0635\u0642\u0627\u062a \u0645\u062e\u0635\u0635\u0629",
      sprint_5: "\u0623\u0644\u0628\u0648\u0645\u0627\u062a \u0634\u062e\u0635\u064a\u0629",
      sprint_6: "\u0633\u062c\u0644\u0627\u062a \u2022 \u062f\u0641\u0627\u062a\u0631 \u0628\u064a\u0639 \u2022 \u0634\u064a\u0643\u0627\u062a",
      sprint_7: "\u0643\u0631\u0627\u0633\u0627\u062a \u062a\u0646\u0638\u064a\u0645\u064a\u0629",
      sprint_8: "\u0628\u0631\u0627\u0648\u064a\u0632 \u0648\u0628\u0637\u0627\u0642\u0627\u062a \u0635\u0648\u0631",
      sprint_9: "خدمات أخرى حسب الطلب",
      sprint_10: "بطاقات دعوة",
      projects_title_before: "\u0627\u0633\u062a\u0643\u0634\u0641 ",
      projects_title_span: "\u0645\u0634\u0627\u0631\u064a\u0639\u0646\u0627",
      projects_hero_text: "\u0627\u0643\u062a\u0634\u0641 \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0625\u0628\u062f\u0627\u0639\u0627\u062a\u0646\u0627\u060c \u0645\u0646 \u0627\u0644\u0631\u0642\u0645\u064a \u0625\u0644\u0649 \u0627\u0644\u0645\u0637\u0628\u0648\u0639.",
      projects_all: "\u0627\u0644\u0643\u0644",
      proj_digital_1: "\u062a\u063a\u0630\u064a\u0629 \u0625\u0646\u0633\u062a\u063a\u0631\u0627\u0645",
      proj_digital_1_desc: "\u062a\u0635\u0645\u064a\u0645 \u0645\u0646\u0634\u0648\u0631\u0627\u062a \u0648\u0642\u0635\u0635 \u0644\u0639\u0644\u0627\u0645\u0629 \u0623\u0632\u064a\u0627\u0621.",
      proj_digital_2: "\u0647\u0648\u064a\u0629 \u0634\u0631\u0643\u0629 \u0646\u0627\u0634\u0626\u0629",
      proj_digital_2_desc: "\u0634\u0639\u0627\u0631\u060c \u062f\u0644\u064a\u0644 \u0623\u0633\u0644\u0648\u0628 \u0648\u0628\u0637\u0627\u0642\u0627\u062a \u0632\u064a\u0627\u0631\u0629.",
      proj_digital_3: "\u0645\u0646\u0627\u0642\u0634\u0629 \u0645\u0627\u062c\u0633\u062a\u064a\u0631",
      proj_digital_3_desc: "\u0639\u0631\u0636 \u062a\u0642\u062f\u064a\u0645\u064a \u0645\u0647\u0646\u064a \u0644\u0631\u0633\u0627\u0644\u0629 \u0646\u0647\u0627\u0626\u064a\u0629.",
      proj_print_1: "\u0645\u062e\u0637\u0637 2026",
      proj_print_1_desc: "\u0643\u0631\u0627\u0633 \u062a\u062e\u0637\u064a\u0637 \u0634\u062e\u0635\u064a\u060c \u062a\u062c\u0644\u064a\u062f \u0643\u0627\u0645\u0644.",
      proj_print_2: "\u0628\u0637\u0627\u0642\u0627\u062a \u0641\u0627\u062e\u0631\u0629",
      proj_print_2_desc: "\u0628\u0637\u0627\u0642\u0627\u062a \u0632\u064a\u0627\u0631\u0629 \u0645\u0645\u062a\u0627\u0632\u0629 \u0628\u062a\u0630\u0647\u064a\u0628 \u0648\u0644\u0645\u0633\u0629 \u0645\u0627\u062a.",
      proj_print_3: "\u062d\u0632\u0645\u0629 \u0645\u0644\u0635\u0642\u0627\u062a",
      proj_print_3_desc: "\u0645\u0644\u0635\u0642\u0627\u062a \u0645\u062e\u0635\u0635\u0629 \u0644\u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a.",
      proj_print_4: "\u0623\u0644\u0628\u0648\u0645 \u0632\u0641\u0627\u0641",
      proj_print_4_desc: "\u0623\u0644\u0628\u0648\u0645 \u0635\u0648\u0631 \u0634\u062e\u0635\u064a\u060c \u063a\u0644\u0627\u0641 \u0645\u062a\u064a\u0646.",
      proj_print_5: "\u0628\u0631\u0648\u0627\u0632 \u0635\u0648\u0631\u0629",
      proj_print_5_desc: "\u0628\u0631\u0648\u0627\u0632 \u0635\u0648\u0631 \u0628\u062a\u0635\u0645\u064a\u0645 \u0645\u0639 \u0628\u0627\u0633\u0628\u0627\u062a\u0648\u0631.",
      proj_print_6: "\u0633\u062c\u0644 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a",
      proj_print_6_desc: "كراس مبيعات مخصص للمتاجر.",
      proj_print_7: "بطاقة دعوة",
      proj_print_7_desc: "بطاقة دعوة مخصصة لمناسباتك.",
      work_badge: "\u0623\u0639\u0645\u0627\u0644\u0646\u0627",
      work_title_before: "\u0645\u0634\u0627\u0631\u064a\u0639 ",
      work_title_span: "\u0645\u062a\u0645\u064a\u0632\u0629",
      work_1_title: "\u062a\u0637\u0628\u064a\u0642 \u062c\u0648\u0627\u0644",
      work_1_text: "\u062a\u0635\u0645\u064a\u0645 UX/UI",
      work_2_title: "\u062a\u062c\u0627\u0631\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629",
      work_2_text: "\u062a\u0637\u0648\u064a\u0631 \u0648\u064a\u0628",
      work_3_title: "\u0647\u0648\u064a\u0629 \u0639\u0644\u0627\u0645\u0629 \u062a\u062c\u0627\u0631\u064a\u0629",
      work_3_text: "\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629",
      testim_badge: "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
      testim_title_before: "\u0645\u0627 \u064a\u0642\u0648\u0644\u0647 ",
      testim_title_span: "\u0639\u0645\u0644\u0627\u0624\u0646\u0627",
      testim_1_text: "\"\u0631\u0628\u064a \u0645\u0644\u064a\u062d\u060c \u062e\u062f\u0645\u0629 \u062e\u064a\u0631 \u0628\u0632\u0627\u0641. \u062a\u0627\u0648 \u062c\u0644\u064a \u062a\u0639\u0631\u0641 \u062a\u062f\u064a\u0631 \u062f\u064a\u0632\u0627\u064a\u0646.\"",
      testim_1_fr: "\u062e\u062f\u0645\u0629 \u0645\u0645\u062a\u0627\u0632\u0629\u060c \u064a\u0639\u0631\u0641\u0648\u0646 \u062d\u0642\u0627\u064b \u0643\u064a\u0641 \u064a\u0635\u0645\u0645\u0648\u0646.",
      testim_1_name: "\u0622\u0645\u0646\u0629 \u0643.",
      testim_1_role: "\u0631\u0627\u0626\u062f\u0629 \u0623\u0639\u0645\u0627\u0644",
      testim_2_text: "\"\u0648\u0627\u0644\u0644\u0647 \u0645\u0627 \u062f\u062c\u062a\u0648\u0634\u060c \u062e\u062f\u0645\u0629 \u0645\u0647\u0646\u064a\u0629 \u0648 \u062a\u0627\u0631\u064a\u0641 \u062d\u0627\u0642.\"",
      testim_2_fr: "\u0644\u0627 \u0645\u0627 \u0644\u0644\u0627\u0645\u060c \u0639\u0645\u0644 \u0627\u062d\u062a\u0631\u0627\u0641\u064a \u0648\u0623\u0633\u0639\u0627\u0631 \u0645\u0646\u0627\u0633\u0628\u0629.",
      testim_2_name: "\u0645\u062d\u0645\u062f \u0644.",
      testim_2_role: "\u0645\u0624\u0633\u0633 \u0634\u0631\u0643\u0629 \u0646\u0627\u0634\u0626\u0629",
      testim_3_text: "\"\u0646\u0635\u0627\u062d \u0628\u064a\u0643 \u0628\u0632\u0627\u0641\u060c \u0643\u0627\u0646\u0648 \u0645\u062d\u062a\u0631\u0641\u064a\u0646 \u0645\u0646 \u0644\u0648\u0644 \u0644 \u062a\u0627\u0646\u064a.\"",
      testim_3_fr: "\u0623\u0646\u0635\u062d\u0643 \u0628\u0647\u0645\u060c \u0645\u062d\u062a\u0631\u0641\u0648\u0646 \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0625\u0644\u0649 \u0627\u0644\u0646\u0647\u0627\u064a\u0629.",
      testim_3_name: "\u0633\u0627\u0631\u0629 \u0628.",
      testim_3_role: "\u0645\u0635\u0641\u0641\u0629",
      testim_4_text: "\"\u0623\u0648\u0644 \u0645\u0631\u0629 \u0646\u062c\u0631\u0628 \u062f\u064a\u0632\u0627\u064a\u0646\u060c \u0646\u062a\u0627\u0639\u0647\u0645 \u0641\u0648\u0642. \u0628\u0627\u0631\u0643 \u0627\u0644\u0644\u0647 \u0641\u064a\u0647\u0645.\"",
      testim_4_fr: "\u0623\u0648\u0644 \u062a\u062c\u0631\u0628\u0629 \u0641\u064a \u0627\u0644\u062a\u0635\u0645\u064a\u0645\u060c \u0647\u0645 \u0641\u064a \u0627\u0644\u0642\u0645\u0629. \u0628\u0627\u0631\u0643 \u0627\u0644\u0644\u0647 \u0641\u064a\u0647\u0645.",
      testim_4_name: "\u064a\u0627\u0633\u064a\u0646 \u062f.",
      testim_4_role: "\u062d\u0631\u0641\u064a",
      contact_badge: "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",
      contact_title_before: "\u0644\u0646\u0628\u062f\u0639 ",
      contact_title_span: "\u0645\u0639\u064b\u0627",
      contact_text: "\u0623\u062d\u064a\u0648\u0627 \u0623\u0641\u0643\u0627\u0631\u0643 \u0628\u062d\u0644\u0648\u0644 \u0625\u0628\u062f\u0627\u0639\u064a\u0629 \u0648\u0645\u0647\u0646\u064a\u0629 \u0645\u064f\u0644\u0627\u0626\u0645\u0629 \u0644\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0643.",
      contact_text_2: "\u0644\u0623\u064a \u0637\u0644\u0628 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0623\u0648 \u0639\u0631\u0636 \u0633\u0639\u0631\u060c \u0644\u0627 \u062a\u062a\u0631\u062f\u062f \u0641\u064a \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0646\u0627. \u064a\u0645\u0643\u0646\u0643 \u0623\u064a\u0636\u064b\u0627 \u0645\u064f\u062a\u0627\u0628\u0639\u062a\u0646\u0627 \u0639\u0644\u0649 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a \u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0623\u062d\u062f\u062b \u0623\u0639\u0645\u0627\u0644\u0646\u0627 \u0648\u0622\u062e\u0631 \u0627\u0644\u0623\u062e\u0628\u0627\u0631.",
      contact_social_text: "\u0623\u0631\u0633\u0644 \u0644\u0646\u0627 \u0631\u0633\u0627\u0644\u0629 \u0639\u0644\u0649 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u060c \u0633\u0646\u0631\u062f \u0639\u0644\u064a\u0643 \u0628\u0633\u0631\u0639\u0629.",
      contact_email_label: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
      contact_hours_label: "\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644",
      contact_hours: "\u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u2013 \u0627\u0644\u062c\u0645\u0639\u0629 9\u0635\u0628\u0627\u062d\u064b\u0627 \u2013 6\u0645\u0633\u0627\u0621\u064b",
      form_name: "\u0627\u0633\u0645\u0643",
      form_email: "\u0628\u0631\u064a\u062f\u0643 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
      form_subject: "\u0627\u0644\u0645\u0648\u0636\u0648\u0639",
      form_message: "\u062d\u062f\u062b\u0646\u0627 \u0639\u0646 \u0645\u0634\u0631\u0648\u0639\u0643...",
      form_btn: "\u0625\u0631\u0633\u0627\u0644",
      footer_desc: "\u062a\u0635\u0645\u064a\u0645 \u062c\u0631\u0627\u0641\u064a\u0643\u064a\u060c \u0639\u0644\u0627\u0645\u0627\u062a \u062a\u062c\u0627\u0631\u064a\u0629\u060c \u0648\u064a\u0628 \u0648\u0637\u0628\u0627\u0639\u0629 \u2014 \u0646\u0636\u0641\u064a \u0627\u0644\u062d\u064a\u0627\u0629 \u0644\u0645\u0634\u0627\u0631\u064a\u0639\u0643 \u0627\u0644\u0625\u0628\u062f\u0627\u0639\u064a\u0629.",
      footer_follow: "\u062a\u0627\u0628\u0639\u0646\u0627",
      footer_nav: "\u0627\u0644\u062a\u0646\u0642\u0644",
      footer_services: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",
      footer_privacy: "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629",
      footer_terms: "\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",
      footer_copyright: "\u00a9 2026 Pixel Room. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629."
    }
  };

  /* ---- State ---- */
  const STORAGE_THEME = "pr-theme";
  const STORAGE_LANG = "pr-lang";
  const html = document.documentElement;
  let currentTheme = localStorage.getItem(STORAGE_THEME) || "light";
  let currentLang = localStorage.getItem(STORAGE_LANG) || "fr";

  /* ---- DOM refs ---- */
  const navbar = document.getElementById("mainNavbar");
  const themeBtns = document.querySelectorAll("#themeToggle, #mobileThemeToggle");
  const langBtns = document.querySelectorAll("#langToggle, #mobileLangToggle");
  const navLinks = document.querySelectorAll("#navLinks .nav-link, #mobileMenu .mobile-link");

  /* ---- Theme ---- */
  function setTheme(theme) {
    currentTheme = theme;
    html.setAttribute("data-bs-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
    const icon = theme === "dark" ? "bi-moon-fill" : "bi-sun-fill";
    themeBtns.forEach((btn) => {
      const i = btn.querySelector("i");
      if (i) i.className = "bi " + icon;
    });
    document.querySelectorAll(".brand-logo").forEach((img) => {
      img.src = theme === "dark" ? "images/2.png" : "images/1.png";
    });
  }

  function toggleTheme() {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }

  /* ---- i18n ---- */
  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) {
        el.setAttribute("placeholder", t[key]);
      }
    });
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    const label = lang === "fr" ? "AR" : "FR";
    langBtns.forEach((btn) => (btn.textContent = label));

    if (lang === "ar") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", "fr");
    }

    applyTranslations(lang);
  }

  function toggleLang() {
    setLang(currentLang === "fr" ? "ar" : "fr");
  }

  /* ---- Scroll Navbar ---- */
  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  /* ---- Active Nav Link ---- */
  function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;
    const scrollPos = window.scrollY + 150;
    let currentId = "";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentId) {
        link.classList.add("active");
      }
    });
  }

  /* ---- Scroll Entrance ---- */
  function initEntrance() {
    var els = document.querySelectorAll(".entrance, .entrance-left, .entrance-right, .entrance-scale");
    if (!els.length || !("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ---- Smooth Scroll for Drawer Links ---- */
  function initDrawerScroll() {
    document.querySelectorAll("#mobileMenu .mobile-link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        var href = this.getAttribute("href");
        if (!href || href === "#") return;
        var offcanvasEl = document.getElementById("mobileMenu");
        if (!offcanvasEl) return;
        var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (bsOffcanvas) bsOffcanvas.hide();
        if (href.startsWith("#")) {
          e.preventDefault();
          setTimeout(function () {
            var target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
              history.pushState(null, "", href);
            }
          }, 350);
        }
      });
    });
  }
  function init() {
    setTheme(currentTheme);

    const savedLang = localStorage.getItem(STORAGE_LANG);
    if (savedLang === "fr" || savedLang === "ar") {
      setLang(savedLang);
    } else {
      setLang("fr");
    }

    themeBtns.forEach((btn) => btn.addEventListener("click", toggleTheme));
    langBtns.forEach((btn) => btn.addEventListener("click", toggleLang));

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    onScroll();
    updateActiveLink();
    initEntrance();
    initDrawerScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
