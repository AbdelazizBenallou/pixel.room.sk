# Étape 01 — Structure du projet Pixel Room
# الخطوة 01 — هيكل مشروع Pixel Room

---

## FR — Ce que nous avons construit

### Architecture du projet

```
pixel.room.sk/
├── index.html        (Page principale — Bootstrap 5)
├── css/style.css     (Thème rose / noir / blanc)
├── js/main.js        (Mode sombre, langues, défilement)
└── steps/step-01.md  (Ce fichier)
```

### Navbar flottante

- Barre de navigation fixe, centrée, avec un effet **glassmorphism** (fond flou, bordure subtile).
- Au défilement, la navbar s'étend sur toute la largeur et perd ses coins arrondis (`scrolled` class).
- **Gauche** : logo SVG + nom « Pixel Room ».
- **Centre** : liens de navigation vers les sections (Accueil, À propos, Services, Projets, Contact) — mise en évidence automatique de la section active.
- **Droite** : bascule thème (☀️/🌙) + bascule langue (FR / AR).
- **Mobile** : le menu se transforme en **Offcanvas drawer** (Bootstrap Offcanvas) avec les mêmes liens + toggles.

### Sections de la page

| Section | Fonction |
|---------|----------|
| **Hero** | Titre surdimensionné, badge, boutons CTA, formes décoratives. |
| **About** | Texte de présentation + cartes visuelles animées (Design, Code, Lancement). |
| **Services** | 3 cartes (Web Design, Développement, Branding) avec icônes et hover. |
| **Work** | Grille de projets avec dégradés et overlay. |
| **Contact** | Formulaire stylisé + infos de contact. |
| **Footer** | Logo, liens sociaux, copyright. |

### Palette de couleurs

- **Rose** `#ff2d7a` — accents, boutons, hover
- **Noir** `#0a0a0a` — fond sombre, cartes dark mode
- **Blanc** `#ffffff` — fond clair, cartes light mode

### Fonctionnalités interactives

- **Mode sombre/clair** : bascule avec `data-bs-theme="dark"`, sauvegardé dans `localStorage`.
- **Langue** : cycle FR → AR, bascule `dir="rtl"` pour l'arabe avec `localStorage`.
- **Défilement** : détection de la section active dans la navbar, animation de la navbar au scroll.
- **Responsive** : 3 breakpoints (`lg`, `md`, `sm`) avec redimensionnement des cartes et de la typographie.
- **Accessibilité** : `prefers-reduced-motion` respecté.

---

## AR — ما قمنا ببنائه

### هيكل المشروع

```
pixel.room.sk/
├── index.html        (الصفحة الرئيسية — Bootstrap 5)
├── css/style.css     (السمة وردي / أسود / أبيض)
├── js/main.js        (الوضع الداكن، اللغات، التمرير)
└── steps/step-01.md  (هذا الملف)
```

### شريط التنقل العائم

- شريط تنقل ثابت في المنتصف مع تأثير **الزجاج المصنفر** (خلفية ضبابية، حد خفيف).
- عند التمرير، يمتد الشريط لعرض الصفحة بالكامل ويفقد زواياه الدائرية (class `scrolled`).
- **اليسار** : شعار SVG + اسم « Pixel Room ».
- **المنتصف** : روابط التنقل إلى الأقسام (Accueil, À propos, Services, Projets, Contact) — يتم تمييز القسم النشط تلقائياً.
- **اليمين** : زر تبديل السمة (☀️/🌙) + زر تبديل اللغة (AR / FR).
- **الجوال** : تتحول القائمة إلى **درج جانبي** (Bootstrap Offcanvas) بنفس الروابط والأزرار.

### أقسام الصفحة

| القسم | الوظيفة |
|-------|---------|
| **Hero** | عنوان كبير، شارة، أزرار CTA، أشكال زخرفية. |
| **About** | نص تعريفي + بطاقات مرئية متحركة (Design, Code, Launch). |
| **Services** | 3 بطاقات (تصميم الويب، التطوير، العلامات التجارية) مع أيقونات وتأثير hover. |
| **Work** | شبكة من المشاريع مع تدرجات لونية. |
| **Contact** | نموذج اتصال منسق + معلومات الاتصال. |
| **Footer** | الشعار، روابط التواصل الاجتماعي، الحقوق. |

### لوحة الألوان

- **وردي** `#ff2d7a` — لمسات، أزرار، hover
- **أسود** `#0a0a0a` — خلفية داكنة، بطاقات الوضع الداكن
- **أبيض** `#ffffff` — خلفية فاتحة، بطاقات الوضع الفاتح

### الميزات التفاعلية

- **الوضع الداكن/الفاتح** : تبديل باستخدام `data-bs-theme="dark"`، محفوظ في `localStorage`.
- **اللغة** : دورة FR → AR، تبديل `dir="rtl"` للعربية مع `localStorage`.
- **التمرير** : كشف القسم النشط في شريط التنقل، تحريك الشريط عند التمرير.
- **التجاوب** : 3 نقاط قطع (`lg`, `md`, `sm`) مع تغيير حجم البطاقات والخطوط.
- **إمكانية الوصول** : احترام `prefers-reduced-motion`.

---

*Document rédigé en français et en arabe.*
*تمت كتابة هذا المستند بالفرنسية والعربية.*
