export interface Lesson {
  id: number;
  title: string;
  titleDe: string;
  description: string;
  category: string;
  duration: string;
  content: {
    intro: string;
    vocabulary: { de: string; ar: string; example?: string }[];
    grammar?: { rule: string; example: string; translation: string }[];
    dialogue?: { speaker: string; de: string; ar: string }[];
    tips?: string[];
  };
}

export interface Level {
  id: string;
  name: string;
  nameAr: string;
  nameDe: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  hours: string;
  lessons: Lesson[];
}

const a1Lessons: Lesson[] = [
  {
    id: 1, title: "التحيات والمقدمات", titleDe: "Begrüßungen und Vorstellungen",
    description: "تعلم كيف تقول مرحباً وتقدّم نفسك بالألمانية",
    category: "تواصل", duration: "20 دقيقة",
    content: {
      intro: "في هذا الدرس ستتعلم أهم عبارات التحية والتعارف في اللغة الألمانية.",
      vocabulary: [
        { de: "Hallo", ar: "مرحباً", example: "Hallo, ich bin Ahmad." },
        { de: "Guten Morgen", ar: "صباح الخير", example: "Guten Morgen! Wie geht es Ihnen?" },
        { de: "Guten Tag", ar: "مرحباً (نهاراً)", example: "Guten Tag, mein Name ist Sara." },
        { de: "Guten Abend", ar: "مساء الخير", example: "Guten Abend! Willkommen." },
        { de: "Auf Wiedersehen", ar: "مع السلامة", example: "Tschüss! Auf Wiedersehen!" },
        { de: "Tschüss", ar: "وداعاً (غير رسمي)", example: "Tschüss, bis morgen!" },
        { de: "Danke", ar: "شكراً", example: "Danke schön!" },
        { de: "Bitte", ar: "من فضلك / عفواً", example: "Bitte, kommen Sie herein." },
        { de: "Ja", ar: "نعم", example: "Ja, natürlich!" },
        { de: "Nein", ar: "لا", example: "Nein, danke." },
      ],
      dialogue: [
        { speaker: "أحمد", de: "Hallo! Ich heiße Ahmad. Wie heißt du?", ar: "مرحباً! اسمي أحمد. ما اسمك؟" },
        { speaker: "سارة", de: "Hallo Ahmad! Ich bin Sara. Woher kommst du?", ar: "مرحباً أحمد! أنا سارة. من أين أنت؟" },
        { speaker: "أحمد", de: "Ich komme aus Marokko. Und du?", ar: "أنا من المغرب. وأنت؟" },
        { speaker: "سارة", de: "Ich komme aus Deutschland. Schön, dich kennenzulernen!", ar: "أنا من ألمانيا. سعيدة بمعرفتك!" },
      ],
      tips: [
        "استخدم 'Sie' (صيغة المؤدب) مع الغرباء والكبار في السن",
        "'du' تستخدم مع الأصدقاء والأطفال",
        "الألمان يقدّرون اللياقة والمؤدبية في التحيات",
      ],
    },
  },
  {
    id: 2, title: "الأرقام من 1 إلى 100", titleDe: "Zahlen 1-100",
    description: "تعلم الأرقام الألمانية وكيف تستخدمها في الحياة اليومية",
    category: "أساسيات", duration: "25 دقيقة",
    content: {
      intro: "الأرقام أساسية في كل لغة. تعلمها سيساعدك في التسوق والمواصلات والتواصل اليومي.",
      vocabulary: [
        { de: "eins (1)", ar: "واحد" }, { de: "zwei (2)", ar: "اثنان" },
        { de: "drei (3)", ar: "ثلاثة" }, { de: "vier (4)", ar: "أربعة" },
        { de: "fünf (5)", ar: "خمسة" }, { de: "sechs (6)", ar: "ستة" },
        { de: "sieben (7)", ar: "سبعة" }, { de: "acht (8)", ar: "ثمانية" },
        { de: "neun (9)", ar: "تسعة" }, { de: "zehn (10)", ar: "عشرة" },
        { de: "zwanzig (20)", ar: "عشرون" }, { de: "dreißig (30)", ar: "ثلاثون" },
        { de: "vierzig (40)", ar: "أربعون" }, { de: "fünfzig (50)", ar: "خمسون" },
        { de: "hundert (100)", ar: "مئة" },
      ],
      tips: [
        "الأرقام 13-19 تنتهي بـ '-zehn': dreizehn، vierzehn...",
        "العشرات تنتهي بـ '-zig': zwanzig، dreißig...",
        "للتركيب: einundzwanzig (21) = eins + und + zwanzig",
      ],
    },
  },
  {
    id: 3, title: "الألوان", titleDe: "Die Farben",
    description: "تعلم أسماء الألوان وكيف تصف الأشياء بالألمانية",
    category: "مفردات", duration: "15 دقيقة",
    content: {
      intro: "الألوان مهمة لوصف الأشياء من حولك. هيا نتعلمها!",
      vocabulary: [
        { de: "rot", ar: "أحمر", example: "Das Auto ist rot." },
        { de: "blau", ar: "أزرق", example: "Der Himmel ist blau." },
        { de: "grün", ar: "أخضر", example: "Das Gras ist grün." },
        { de: "gelb", ar: "أصفر", example: "Die Sonne ist gelb." },
        { de: "schwarz", ar: "أسود", example: "Die Katze ist schwarz." },
        { de: "weiß", ar: "أبيض", example: "Der Schnee ist weiß." },
        { de: "grau", ar: "رمادي", example: "Der Elefant ist grau." },
        { de: "braun", ar: "بني", example: "Der Tisch ist braun." },
        { de: "orange", ar: "برتقالي", example: "Die Orange ist orange." },
        { de: "lila / violett", ar: "بنفسجي", example: "Die Blume ist lila." },
      ],
      grammar: [
        { rule: "الصفة تتغير حسب جنس الاسم", example: "ein rotes Auto / eine rote Blume", translation: "سيارة حمراء / زهرة حمراء" },
      ],
      tips: [
        "في الجملة البسيطة: Das Haus ist blau (البيت أزرق)",
        "قبل الاسم تتصرف الألوان كصفات وتأخذ لاحقات",
      ],
    },
  },
  {
    id: 4, title: "أفراد العائلة", titleDe: "Die Familie",
    description: "تعرف على مفردات العائلة وكيف تتحدث عن أهلك",
    category: "مفردات", duration: "20 دقيقة",
    content: {
      intro: "العائلة من أهم المواضيع للتواصل. ستتعلم هنا كيف تتحدث عن عائلتك.",
      vocabulary: [
        { de: "die Mutter / die Mama", ar: "الأم / ماما", example: "Meine Mutter heißt Fatima." },
        { de: "der Vater / der Papa", ar: "الأب / بابا", example: "Mein Vater arbeitet in Casablanca." },
        { de: "der Bruder", ar: "الأخ", example: "Ich habe zwei Brüder." },
        { de: "die Schwester", ar: "الأخت", example: "Meine Schwester ist 15 Jahre alt." },
        { de: "die Großmutter / die Oma", ar: "الجدة", example: "Meine Oma wohnt in Marrakesch." },
        { de: "der Großvater / der Opa", ar: "الجد", example: "Mein Opa ist 70 Jahre alt." },
        { de: "der Onkel", ar: "العم / الخال", example: "Mein Onkel wohnt in Deutschland." },
        { de: "die Tante", ar: "العمة / الخالة", example: "Meine Tante hat drei Kinder." },
        { de: "der Cousin / die Cousine", ar: "ابن العم / بنت العم", example: "Mein Cousin studiert in Wien." },
        { de: "das Kind / die Kinder", ar: "الطفل / الأطفال", example: "Ich habe keine Kinder." },
      ],
      dialogue: [
        { speaker: "يوسف", de: "Hast du Geschwister?", ar: "هل لديك إخوة وأخوات؟" },
        { speaker: "لميا", de: "Ja, ich habe einen Bruder und zwei Schwestern.", ar: "نعم، لدي أخ وأختان." },
        { speaker: "يوسف", de: "Wie alt sind sie?", ar: "كم أعمارهم؟" },
        { speaker: "لميا", de: "Mein Bruder ist 20 und meine Schwestern sind 16 und 14.", ar: "أخي عمره 20 وأختاي 16 و14." },
      ],
      tips: [
        "في الألمانية: mein (مذكر) / meine (مؤنث) = بتاعي / ملكي",
        "Ich habe... = عندي / لدي",
      ],
    },
  },
  {
    id: 5, title: "اليوم والوقت", titleDe: "Uhrzeit und Tageszeiten",
    description: "تعلم كيف تسأل عن الوقت وتقرأ الساعة بالألمانية",
    category: "أساسيات", duration: "25 دقيقة",
    content: {
      intro: "معرفة الوقت ضرورية في الحياة اليومية — للمواعيد والقطارات والدراسة.",
      vocabulary: [
        { de: "Wie spät ist es?", ar: "كم الساعة الآن؟" },
        { de: "Es ist ein Uhr.", ar: "الساعة الواحدة." },
        { de: "Es ist halb drei.", ar: "الساعة الثانية والنصف." },
        { de: "Es ist Viertel nach vier.", ar: "الساعة الرابعة والربع." },
        { de: "Es ist Viertel vor fünf.", ar: "الساعة الخامسة إلا ربع." },
        { de: "der Morgen", ar: "الصباح" },
        { de: "der Mittag", ar: "الظهر" },
        { de: "der Nachmittag", ar: "بعد الظهر" },
        { de: "der Abend", ar: "المساء" },
        { de: "die Nacht", ar: "الليل" },
      ],
      grammar: [
        { rule: "للتعبير عن الوقت الرسمي نستخدم الأرقام", example: "Der Zug fährt um 14:30 Uhr ab.", translation: "القطار يغادر الساعة 2:30 ظهراً." },
      ],
      tips: [
        "'halb' تعني النصف وتشير إلى الساعة القادمة: halb drei = 2:30",
        "'Viertel nach' = والربع، 'Viertel vor' = إلا ربع",
      ],
    },
  },
  {
    id: 6, title: "أيام الأسبوع والشهور", titleDe: "Wochentage und Monate",
    description: "تعلم أسماء أيام الأسبوع والشهور والمواسم",
    category: "أساسيات", duration: "20 دقيقة",
    content: {
      intro: "أيام الأسبوع والشهور أساسية للحديث عن المواعيد والخطط.",
      vocabulary: [
        { de: "Montag", ar: "الاثنين" }, { de: "Dienstag", ar: "الثلاثاء" },
        { de: "Mittwoch", ar: "الأربعاء" }, { de: "Donnerstag", ar: "الخميس" },
        { de: "Freitag", ar: "الجمعة" }, { de: "Samstag", ar: "السبت" },
        { de: "Sonntag", ar: "الأحد" }, { de: "Januar", ar: "يناير" },
        { de: "Februar", ar: "فبراير" }, { de: "März", ar: "مارس" },
        { de: "April", ar: "أبريل" }, { de: "Mai", ar: "مايو" },
        { de: "Juni", ar: "يونيو" }, { de: "Juli", ar: "يوليو" },
        { de: "August", ar: "أغسطس" }, { de: "September", ar: "سبتمبر" },
        { de: "Oktober", ar: "أكتوبر" }, { de: "November", ar: "نوفمبر" },
        { de: "Dezember", ar: "ديسمبر" },
      ],
      tips: [
        "الأيام والشهور مذكرة في الألمانية: der Montag، der Januar",
        "am + يوم = في يوم: am Montag = يوم الاثنين",
        "im + شهر = في شهر: im Januar = في يناير",
      ],
    },
  },
  {
    id: 7, title: "الضمائر الشخصية وفعل Sein", titleDe: "Personalpronomen und sein",
    description: "تعلم الضمائر الشخصية وتصريف فعل 'كان / يكون'",
    category: "قواعد", duration: "30 دقيقة",
    content: {
      intro: "الضمائر الشخصية وفعل 'sein' هما أساس كل جملة ألمانية.",
      vocabulary: [
        { de: "ich", ar: "أنا" }, { de: "du", ar: "أنت (غير رسمي)" },
        { de: "er", ar: "هو" }, { de: "sie", ar: "هي / هم / أنت (رسمي)" },
        { de: "es", ar: "هو / هي (للأشياء المحايدة)" }, { de: "wir", ar: "نحن" },
        { de: "ihr", ar: "أنتم (غير رسمي)" }, { de: "Sie", ar: "أنت / أنتم (رسمي)" },
      ],
      grammar: [
        { rule: "ich bin", example: "Ich bin Student.", translation: "أنا طالب." },
        { rule: "du bist", example: "Du bist nett.", translation: "أنت لطيف." },
        { rule: "er/sie/es ist", example: "Er ist Arzt.", translation: "هو طبيب." },
        { rule: "wir sind", example: "Wir sind Freunde.", translation: "نحن أصدقاء." },
        { rule: "ihr seid", example: "Ihr seid müde.", translation: "أنتم متعبون." },
        { rule: "sie/Sie sind", example: "Sie sind Lehrer.", translation: "هم / أنت (رسمي) مدرس." },
      ],
      tips: [
        "'Sie' بحرف كبير = الصيغة الرسمية لـ 'أنت'",
        "'sie' بحرف صغير = هي أو هم",
      ],
    },
  },
  {
    id: 8, title: "الأطعمة والمشروبات", titleDe: "Essen und Trinken",
    description: "تعلم مفردات الطعام والشراب وكيف تطلب في المطعم",
    category: "حياة يومية", duration: "25 دقيقة",
    content: {
      intro: "الطعام موضوع ممتع ومهم. تعلم كيف تتحدث عما تحب وتكره.",
      vocabulary: [
        { de: "das Brot", ar: "الخبز", example: "Ich esse gern Brot." },
        { de: "die Milch", ar: "الحليب", example: "Ich trinke Milch zum Frühstück." },
        { de: "der Käse", ar: "الجبن", example: "Möchten Sie Käse?" },
        { de: "das Fleisch", ar: "اللحم", example: "Ich esse kein Schweinefleisch." },
        { de: "der Fisch", ar: "السمك", example: "Fisch ist gesund." },
        { de: "das Gemüse", ar: "الخضروات", example: "Ich mag Gemüse." },
        { de: "das Obst", ar: "الفاكهة", example: "Obst ist lecker." },
        { de: "der Kaffee", ar: "القهوة", example: "Ich trinke jeden Morgen Kaffee." },
        { de: "der Tee", ar: "الشاي", example: "In Marokko trinkt man viel Tee." },
        { de: "das Wasser", ar: "الماء", example: "Ein Glas Wasser, bitte." },
      ],
      dialogue: [
        { speaker: "نادل", de: "Was möchten Sie trinken?", ar: "ماذا تريد أن تشرب؟" },
        { speaker: "عميل", de: "Ich möchte einen Kaffee und ein Glas Wasser, bitte.", ar: "أريد قهوة وكأس ماء، من فضلك." },
        { speaker: "نادل", de: "Und was essen Sie?", ar: "وماذا ستأكل؟" },
        { speaker: "عميل", de: "Ich nehme das Tagesmenü.", ar: "سآخذ طبق اليوم." },
      ],
      tips: [
        "ich esse gern = أحب أن آكل",
        "ich esse nicht gern = لا أحب أن آكل",
        "Ich möchte... = أريد... (للطلب بأدب)",
      ],
    },
  },
  {
    id: 9, title: "المهن والوظائف", titleDe: "Berufe",
    description: "تعلم أسماء المهن وكيف تتحدث عن عملك",
    category: "حياة يومية", duration: "20 دقيقة",
    content: {
      intro: "معرفة المهن مهمة لتعريف نفسك وفهم محيطك المهني.",
      vocabulary: [
        { de: "der Arzt / die Ärztin", ar: "الطبيب / الطبيبة", example: "Mein Vater ist Arzt." },
        { de: "der Lehrer / die Lehrerin", ar: "المعلم / المعلمة", example: "Ich bin Lehrerin." },
        { de: "der Ingenieur / die Ingenieurin", ar: "المهندس / المهندسة", example: "Er ist Ingenieur bei BMW." },
        { de: "der Student / die Studentin", ar: "الطالب / الطالبة", example: "Ich bin Student an der Universität Rabat." },
        { de: "der Krankenpfleger / die Krankenpflegerin", ar: "الممرض / الممرضة", example: "Sie ist Krankenpflegerin." },
        { de: "der Polizist / die Polizistin", ar: "الشرطي / الشرطية", example: "Der Polizist hilft uns." },
        { de: "der Koch / die Köchin", ar: "الطاهي / الطاهية", example: "Er ist Koch in einem Restaurant." },
        { de: "der Verkäufer / die Verkäuferin", ar: "البائع / البائعة", example: "Die Verkäuferin ist freundlich." },
        { de: "der Fahrer / die Fahrerin", ar: "السائق / السائقة", example: "Er ist Taxifahrer." },
        { de: "der Anwalt / die Anwältin", ar: "المحامي / المحامية", example: "Meine Schwester ist Anwältin." },
      ],
      grammar: [
        { rule: "في الألمانية: Ich bin + مهنة (بدون مقالة)", example: "Ich bin Lehrer. (وليس: Ich bin ein Lehrer)", translation: "أنا معلم." },
        { rule: "المؤنث: نضيف -in في الغالب", example: "Lehrer ➜ Lehrerin", translation: "معلم ➜ معلمة" },
      ],
      tips: [
        "لا تضع مقالة (ein/eine) بعد 'sein' عند ذكر المهنة",
        "الغالبية العظمى من المهن لها صيغة مؤنثة بإضافة '-in'",
      ],
    },
  },
  {
    id: 10, title: "الأماكن في المدينة", titleDe: "Orte in der Stadt",
    description: "تعرف على أسماء الأماكن المهمة في المدينة",
    category: "حياة يومية", duration: "20 دقيقة",
    content: {
      intro: "معرفة أسماء الأماكن ضرورية للتنقل وطلب المساعدة.",
      vocabulary: [
        { de: "der Bahnhof", ar: "محطة القطار", example: "Der Bahnhof ist in der Stadtmitte." },
        { de: "die Apotheke", ar: "الصيدلية", example: "Wo ist die nächste Apotheke?" },
        { de: "das Krankenhaus", ar: "المستشفى", example: "Das Krankenhaus ist um die Ecke." },
        { de: "die Schule", ar: "المدرسة", example: "Die Kinder gehen zur Schule." },
        { de: "die Universität", ar: "الجامعة", example: "Ich studiere an der Universität." },
        { de: "der Supermarkt", ar: "السوبرماركت", example: "Der Supermarkt ist geöffnet." },
        { de: "die Bank", ar: "البنك", example: "Ich muss zur Bank gehen." },
        { de: "das Hotel", ar: "الفندق", example: "Das Hotel ist sehr schön." },
        { de: "der Park", ar: "الحديقة العامة", example: "Kinder spielen im Park." },
        { de: "das Restaurant", ar: "المطعم", example: "Das Restaurant öffnet um 12 Uhr." },
      ],
      dialogue: [
        { speaker: "سائح", de: "Entschuldigung, wo ist der Bahnhof?", ar: "عفواً، أين محطة القطار؟" },
        { speaker: "مواطن", de: "Der Bahnhof ist geradeaus, dann links.", ar: "المحطة في الاتجاه المستقيم، ثم يساراً." },
        { speaker: "سائح", de: "Wie weit ist es?", ar: "كم المسافة؟" },
        { speaker: "مواطن", de: "Ungefähr 10 Minuten zu Fuß.", ar: "حوالي 10 دقائق مشياً." },
      ],
      tips: [
        "Wo ist...? = أين...؟",
        "Wie komme ich zu...? = كيف أصل إلى...؟",
      ],
    },
  },
  {
    id: 11, title: "صفات الأشخاص", titleDe: "Eigenschaften von Personen",
    description: "تعلم كيف تصف شخصيات الناس وصفاتهم",
    category: "مفردات", duration: "20 دقيقة",
    content: {
      intro: "وصف الناس مهارة مهمة في التواصل اليومي.",
      vocabulary: [
        { de: "groß / klein", ar: "طويل / قصير", example: "Er ist groß und sie ist klein." },
        { de: "jung / alt", ar: "شاب / كبير", example: "Meine Oma ist alt aber aktiv." },
        { de: "freundlich", ar: "ودود / لطيف", example: "Die Deutschen sind freundlich." },
        { de: "nett", ar: "طيب", example: "Er ist sehr nett." },
        { de: "klug / intelligent", ar: "ذكي", example: "Sie ist sehr intelligent." },
        { de: "fleißig", ar: "مجتهد", example: "Die Studenten sind fleißig." },
        { de: "lustig", ar: "مضحك / مرح", example: "Mein Bruder ist sehr lustig." },
        { de: "ruhig", ar: "هادئ", example: "Sie ist ruhig und geduldig." },
        { de: "schön", ar: "جميل", example: "Marrakesch ist eine schöne Stadt." },
        { de: "müde", ar: "متعب", example: "Ich bin heute sehr müde." },
      ],
      tips: [
        "يمكن نفي الصفة بـ 'nicht': Er ist nicht groß = هو ليس طويلاً",
        "sehr (جداً) تقوي الصفة: sehr freundlich = لطيف جداً",
      ],
    },
  },
  {
    id: 12, title: "الفعل 'haben'", titleDe: "Das Verb 'haben'",
    description: "تصريف فعل haben واستخدامه في جمل مفيدة",
    category: "قواعد", duration: "25 دقيقة",
    content: {
      intro: "فعل 'haben' (أن يملك / أن يكون عنده) من أهم الأفعال الألمانية.",
      vocabulary: [
        { de: "ich habe", ar: "أنا عندي / أملك", example: "Ich habe ein Auto." },
        { de: "du hast", ar: "أنت عندك", example: "Hast du ein Handy?" },
        { de: "er/sie/es hat", ar: "هو/هي عنده/ا", example: "Sie hat zwei Kinder." },
        { de: "wir haben", ar: "نحن عندنا", example: "Wir haben ein Problem." },
        { de: "ihr habt", ar: "أنتم عندكم", example: "Habt ihr Zeit?" },
        { de: "sie/Sie haben", ar: "هم/أنت(رسمي) عندهم", example: "Sie haben viel Erfahrung." },
      ],
      grammar: [
        { rule: "haben + مفعول به", example: "Ich habe Hunger. / Ich habe Durst.", translation: "أنا جائع. / أنا عطشان." },
        { rule: "النفي: kein/keine", example: "Ich habe keine Zeit.", translation: "ليس عندي وقت." },
      ],
      tips: [
        "Ich habe Hunger = أنا جائع",
        "Ich habe Durst = أنا عطشان",
        "Ich habe Angst = أنا خائف",
      ],
    },
  },
  {
    id: 13, title: "الجسم الإنساني", titleDe: "Der menschliche Körper",
    description: "تعلم أسماء أعضاء الجسم للحديث عن الصحة والطب",
    category: "مفردات", duration: "20 دقيقة",
    content: {
      intro: "معرفة أعضاء الجسم ضرورية خاصة عند زيارة الطبيب.",
      vocabulary: [
        { de: "der Kopf", ar: "الرأس", example: "Ich habe Kopfschmerzen." },
        { de: "das Auge / die Augen", ar: "العين / العيون", example: "Sie hat blaue Augen." },
        { de: "die Nase", ar: "الأنف", example: "Meine Nase tut weh." },
        { de: "der Mund", ar: "الفم", example: "Bitte öffnen Sie den Mund." },
        { de: "das Ohr / die Ohren", ar: "الأذن / الآذان", example: "Meine Ohren tun weh." },
        { de: "der Hals", ar: "الحلق / الرقبة", example: "Ich habe Halsschmerzen." },
        { de: "der Arm / die Arme", ar: "الذراع / الأذرع", example: "Mein Arm ist gebrochen." },
        { de: "die Hand / die Hände", ar: "اليد / الأيادي", example: "Bitte waschen Sie die Hände." },
        { de: "der Bauch", ar: "البطن", example: "Ich habe Bauchschmerzen." },
        { de: "das Bein / die Beine", ar: "الساق / الساقان", example: "Mein Bein tut weh." },
      ],
      tips: [
        "-schmerzen = ألم: Kopfschmerzen (صداع)، Bauchschmerzen (ألم بطن)",
        "Ich habe Schmerzen in... = عندي ألم في...",
        "Wo tut es weh? = أين يؤلمك؟",
      ],
    },
  },
  {
    id: 14, title: "الحيوانات", titleDe: "Haustiere und wilde Tiere",
    description: "تعلم أسماء الحيوانات الشائعة بالألمانية",
    category: "مفردات", duration: "15 دقيقة",
    content: {
      intro: "الحيوانات موضوع محبوب لدى الجميع. هيا نتعلم أسماءها!",
      vocabulary: [
        { de: "der Hund", ar: "الكلب", example: "Ich habe einen Hund." },
        { de: "die Katze", ar: "القطة", example: "Die Katze schläft." },
        { de: "das Pferd", ar: "الحصان", example: "Das Pferd ist schnell." },
        { de: "der Löwe", ar: "الأسد", exampl
