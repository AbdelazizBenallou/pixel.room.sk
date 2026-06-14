# Étape 02 — Typographie, mode sombre & blanc
# الخطوة 02 — الخطوط، الوضع الداكن والأبيض

---

## FR — Polices et thème

### Police arabe : Amiri

- **Amiri** est une police de caractères classique pour le texte arabe, lisible et élégante.
- Importée depuis Google Fonts : `Amiri:wght@400;700`
- Appliquée automatiquement lorsque la langue arabe est active (`lang="ar"` ou `dir="rtl"`).

### Police française : Ubuntu

- **Ubuntu** est une police moderne, humaniste et très lisible.
- Utilisée pour le français.
- Importée depuis Google Fonts : `Ubuntu:wght@300;400;500;700`

### Règles CSS appliquées

```css
/* Par défaut (français) */
body {
  font-family: "Ubuntu", sans-serif;
}

/* Arabe actif — bascule vers Amiri */
html[lang="ar"] body,
html[dir="rtl"] body {
  font-family: "Amiri", "Traditional Arabic", serif;
}

/* Titres en arabe — Amiri en gras */
html[lang="ar"] .hero-title,
html[dir="rtl"] .hero-title,
html[lang="ar"] .section-title,
html[dir="rtl"] .section-title,
html[lang="ar"] h1, html[lang="ar"] h2, html[lang="ar"] h3,
html[dir="rtl"] h1, html[dir="rtl"] h2, html[dir="rtl"] h3 {
  font-family: "Amiri", "Traditional Arabic", serif;
  font-weight: 700;
}

/* Ajustement du titre hero en arabe */
html[lang="ar"] .hero-title {
  letter-spacing: normal;
  line-height: 1.2;
}
```

### Mode sombre (Dark Mode)

- Bascule via `data-bs-theme="dark"` sur `<html>`.
- Variables CSS réécrites dans `[data-bs-theme="dark"]` :
  - Fond carte : `#141414` au lieu de `#ffffff`
  - Fond section : `#0d0d0d` au lieu de `#f8f9fa`
  - Fond navbar : `rgba(10, 10, 10, 0.82)` au lieu de `rgba(255, 255, 255, 0.82)`
  - Texte secondaire : `#999` au lieu de `#666`
- Sauvegardé dans `localStorage` (clé : `pr-theme`).
- Icône du bouton bascule entre `bi-sun-fill` et `bi-moon-fill`.

### Blanc comme couleur structurelle

- `#ffffff` — fond principal en mode clair, cartes, navbar.
- `#f8f9fa` — fond alterné des sections en mode clair.
- `#fff` — texte sur boutons roses, cartes about.
- En mode sombre, le blanc devient gris foncé (`#141414`, `#0d0d0d`).

### Fichiers modifiés

| Fichier | Changement |
|---------|------------|
| `index.html` | Ajout de l'import Google Fonts pour Amiri + tout le contenu traduit en français |
| `css/style.css` | Règles de police pour l'arabe (Amiri), ajustements RTL |
| `js/main.js` | Cycle langue : FR → AR (anglais retiré), français comme langue par défaut |

---

## AR — الخطوط والسمة

### الخط العربي : Amiri

- **Amiri** هو خط كلاسيكي للنص العربي، مقروء وأنيق.
- تم استيراده من Google Fonts : `Amiri:wght@400;700`
- يتم تطبيقه تلقائياً عند تفعيل اللغة العربية (`lang="ar"` أو `dir="rtl"`).

### الخط الفرنسي : Ubuntu

- **Ubuntu** هو خط حديث وإنساني وقابل للقراءة بدرجة عالية.
- يستخدم للفرنسية.
- تم استيراده من Google Fonts : `Ubuntu:wght@300;400;500;700`

### قواعد CSS المطبقة

```css
/* الوضع الافتراضي (فرنسي) */
body {
  font-family: "Ubuntu", sans-serif;
}

/* عند تفعيل العربية — التبديل إلى Amiri */
html[lang="ar"] body,
html[dir="rtl"] body {
  font-family: "Amiri", "Traditional Arabic", serif;
}

/* العناوين بالعربية — Amiri سميك */
html[lang="ar"] .hero-title,
html[dir="rtl"] .hero-title,
html[lang="ar"] .section-title,
html[dir="rtl"] .section-title,
html[lang="ar"] h1, html[lang="ar"] h2, html[lang="ar"] h3,
html[dir="rtl"] h1, html[dir="rtl"] h2, html[dir="rtl"] h3 {
  font-family: "Amiri", "Traditional Arabic", serif;
  font-weight: 700;
}

/* تعديل عنوان hero بالعربية */
html[lang="ar"] .hero-title {
  letter-spacing: normal;
  line-height: 1.2;
}
```

### الوضع الداكن (Dark Mode)

- التبديل عبر `data-bs-theme="dark"` على عنصر `<html>`.
- إعادة تعريف متغيرات CSS داخل `[data-bs-theme="dark"]` :
  - خلفية البطاقة : `#141414` بدلاً من `#ffffff`
  - خلفية القسم : `#0d0d0d` بدلاً من `#f8f9fa`
  - خلفية الشريط : `rgba(10, 10, 10, 0.82)` بدلاً من `rgba(255, 255, 255, 0.82)`
  - النص الثانوي : `#999` بدلاً من `#666`
- محفوظ في `localStorage` (المفتاح : `pr-theme`).
- أيقونة الزر تتبدل بين `bi-sun-fill` و `bi-moon-fill`.

### الأبيض كلون هيكلي

- `#ffffff` — الخلفية الرئيسية في الوضع الفاتح، البطاقات، الشريط.
- `#f8f9fa` — خلفية الأقسام المتبادلة في الوضع الفاتح.
- `#fff` — النص على الأزرار الوردية، بطاقات about.
- في الوضع الداكن، يتحول الأبيض إلى رمادي داكن (`#141414`, `#0d0d0d`).

### الملفات المعدلة

| الملف | التغيير |
|-------|---------|
| `index.html` | إضافة استيراد Google Fonts لـ Amiri + ترجمة كل المحتوى إلى الفرنسية |
| `css/style.css` | قواعد الخط للعربية (Amiri)، تعديلات RTL |
| `js/main.js` | دورة اللغة : FR → AR (إزالة الإنجليزية)، الفرنسية كلغة افتراضية |

---

*Document rédigé en français et en arabe.*
*تمت كتابة هذا المستند بالفرنسية والعربية.*
