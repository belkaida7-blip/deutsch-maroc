export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Quiz {
  level: string;
  title: string;
  duration: string;
  questions: QuizQuestion[];
}

export const quizzes: Record<string, Quiz> = {
  A1: {
    level: "A1", title: "امتحان المستوى A1", duration: "15 دقيقة",
    questions: [
      { id: 1, question: "ما معنى 'Guten Morgen'؟", options: ["مساء الخير", "صباح الخير", "مع السلامة", "مرحباً"], correct: 1, explanation: "'Guten Morgen' تعني 'صباح الخير' وتُستخدم في الصباح." },
      { id: 2, question: "كيف تقول 'أنا طالب' بالألمانية؟", options: ["Ich habe Student.", "Ich bin Student.", "Ich ist Student.", "Du bist Student."], correct: 1, explanation: "نستخدم 'ich bin' مع الضمير 'ich': Ich bin Student." },
      { id: 3, question: "ما هو اليوم الذي يعني 'الاثنين'؟", options: ["Dienstag", "Freitag", "Montag", "Mittwoch"], correct: 2, explanation: "Montag = الاثنين، Dienstag = الثلاثاء، Mittwoch = الأربعاء، Freitag = الجمعة." },
      { id: 4, question: "ما معنى 'rot'؟", options: ["أزرق", "أخضر", "أحمر", "أصفر"], correct: 2, explanation: "rot = أحمر، blau = أزرق، grün = أخضر، gelb = أصفر." },
      { id: 5, question: "كيف تقول 'شكراً' بالألمانية؟", options: ["Bitte", "Danke", "Hallo", "Tschüss"], correct: 1, explanation: "Danke = شكراً. Bitte = من فضلك / عفواً. Hallo = مرحباً." },
      { id: 6, question: "ما معنى 'die Mutter'؟", options: ["الأخت", "الجدة", "الأم", "العمة"], correct: 2, explanation: "die Mutter = الأم. die Schwester = الأخت. die Oma = الجدة." },
      { id: 7, question: "كيف تصرّف فعل 'sein' مع 'wir'؟", options: ["wir ist", "wir bin", "wir sind", "wir seid"], correct: 2, explanation: "wir sind = نحن نكون. التصريف الصحيح هو: ich bin، du bist، er/sie/es ist، wir sind." },
      { id: 8, question: "ما معنى 'fünf'؟", options: ["أربعة", "خمسة", "ستة", "سبعة"], correct: 1, explanation: "fünf = 5 (خمسة). vier = 4، sechs = 6، sieben = 7." },
      { id: 9, question: "ما هو الجمع المذكر لـ 'Arzt' (طبيب)؟", options: ["die Ärztin", "der Ärzte", "die Ärzte", "das Arzt"], correct: 2, explanation: "الجمع هو 'die Ärzte'. 'die Ärztin' هي الطبيبة (المؤنث)." },
      { id: 10, question: "كيف تسأل عن الوقت بالألمانية؟", options: ["Wie viel Uhr ist es?", "Was ist das?", "Wie heißt du?", "Wo wohnst du?"], correct: 0, explanation: "Wie spät ist es? أو Wie viel Uhr ist es? = كم الساعة الآن؟" },
    ],
  },
  A2: {
    level: "A2", title: "امتحان المستوى A2", duration: "15 دقيقة",
    questions: [
      { id: 1, question: "ما معنى 'günstig'؟", options: ["غالي", "رخيص", "جميل", "كبير"], correct: 1, explanation: "günstig/billig = رخيص، teuer = غالي." },
      { id: 2, question: "كيف تقول 'أكلت بيتزا' بصيغة Perfekt؟", options: ["Ich aß Pizza.", "Ich esse Pizza.", "Ich habe Pizza gegessen.", "Ich bin Pizza gegessen."], correct: 2, explanation: "Perfekt = haben/sein + Partizip II. الفعل essen: haben + gegessen." },
      { id: 3, question: "ما معنى 'geradeaus'؟", options: ["يميناً", "يساراً", "للخلف", "مستقيم / للأمام"], correct: 3, explanation: "geradeaus = مستقيم / للأمام. links = يساراً، rechts = يميناً." },
      { id: 4, question: "أي جملة صحيحة في Komparativ؟", options: ["Berlin ist groß als München.", "Berlin ist größer als München.", "Berlin ist am größten als München.", "Berlin ist grö als München."], correct: 1, explanation: "Komparativ = الصفة + -er + als. groß ➜ größer." },
      { id: 5, question: "ما معنى 'die Fahrkarte'؟", options: ["بطاقة الهوية", "التذكرة", "جواز السفر", "الخريطة"], correct: 1, explanation: "die Fahrkarte / das Ticket = التذكرة." },
      { id: 6, question: "كيف تقول 'ذهبت إلى برلين' بالألمانية؟", options: ["Ich habe nach Berlin gefahren.", "Ich bin nach Berlin gefahren.", "Ich fahre nach Berlin.", "Ich fuhr nach Berlin."], correct: 1, explanation: "أفعال الحركة تستخدم 'sein' في Perfekt: Ich bin...gefahren." },
      { id: 7, question: "ما معنى 'aufstehen'؟", options: ["يجلس", "يستيقظ / ينهض", "ينام", "يأكل"], correct: 1, explanation: "aufstehen = يستيقظ / ينهض. schlafen = ينام، sitzen = يجلس." },
      { id: 8, question: "أي جملة صحيحة لطلب موعد؟", options: ["Passt es Ihnen am Montag?", "Bist du am Montag?", "Haben Sie Montag?", "Gehst du Montag?"], correct: 0, explanation: "Passt es Ihnen am...? = هل يناسبك يوم...؟" },
      { id: 9, question: "ما معنى 'die Speisekarte'؟", options: ["بطاقة المترو", "قائمة الطعام", "خريطة المدينة", "بطاقة الائتمان"], correct: 1, explanation: "die Speisekarte = قائمة الطعام في المطعم." },
      { id: 10, question: "كيف تصف الثانوية العليا بالألمانية؟", options: ["die Grundschule", "die Universität", "das Gymnasium", "die Berufsschule"], correct: 2, explanation: "das Gymnasium = الثانوية العليا. die Grundschule = الابتدائية." },
    ],
  },
  B1: {
    level: "B1", title: "امتحان المستوى B1", duration: "20 دقيقة",
    questions: [
      { id: 1, question: "أكمل الجملة: 'Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.'", options: ["denn", "weil", "dass", "obwohl"], correct: 1, explanation: "weil = لأن (الفعل في نهاية الجملة الفرعية)." },
      { id: 2, question: "ما هي الصيغة الصحيحة للمبني للمجهول (Passiv Präsens)؟", options: ["Das Buch liest.", "Das Buch hat gelesen.", "Das Buch wird gelesen.", "Das Buch ist gelesen."], correct: 2, explanation: "Passiv Präsens = werden + Partizip II." },
      { id: 3, question: "ما معنى 'die Stellenanzeige'؟", options: ["عقد العمل", "إعلان الوظيفة", "شهادة العمل", "الراتب"], correct: 1, explanation: "die Stellenanzeige = إعلان الوظيفة." },
      { id: 4, question: "أكمل بـ Konjunktiv II: 'Wenn ich Zeit ___, würde ich reisen.'", options: ["habe", "hatte", "hätte", "haben"], correct: 2, explanation: "Konjunktiv II لـ haben هو 'hätte'." },
      { id: 5, question: "ما معنى 'obwohl'؟", options: ["لأن", "إذا", "رغم أن", "لكي"], correct: 2, explanation: "obwohl = رغم أن / على الرغم من." },
      { id: 6, question: "كيف تعبر عن رأيك بشكل رسمي؟", options: ["Ich denke halt...", "Meiner Meinung nach...", "Ich finde irgendwie...", "So ist das..."], correct: 1, explanation: "Meiner Meinung nach... = في رأيي... (تعبير رسمي)." },
      { id: 7, question: "ما معنى 'nachhaltig'؟", options: ["سريع", "مستدام", "غالي", "جديد"], correct: 1, explanation: "nachhaltig = مستدام (Nachhaltige Entwicklung = التنمية المستدامة)." },
      { id: 8, question: "أكمل: 'Ich bin ___ der Meinung, dass Bildung wichtig ist.'", options: ["an", "von", "bei", "der"], correct: 3, explanation: "التعبير الصحيح هو: 'Ich bin der Meinung, dass...' = أرى أن..." },
      { id: 9, question: "ما معنى 'der Klimawandel'؟", options: ["الطقس اليومي", "تغير المناخ", "التلوث البيئي", "الطاقة الشمسية"], correct: 1, explanation: "der Klimawandel = تغير المناخ (Climate Change)." },
      { id: 10, question: "ما الصحيح لـ Partizip II للفعل 'schreiben'؟", options: ["schreibt", "geschrieben", "schreiben", "schrieb"], correct: 1, explanation: "Partizip II لـ schreiben هو 'geschrieben' (غير منتظم)." },
    ],
  },
  B2: {
    level: "B2", title: "امتحان المستوى B2", duration: "20 دقيقة",
    questions: [
      { id: 1, question: "ما معنى 'infolgedessen'؟", options: ["على الرغم من ذلك", "نتيجة لذلك", "بدلاً من ذلك", "قبل ذلك"], correct: 1, explanation: "infolgedessen = نتيجة لذلك / وبالتالي." },
      { id: 2, question: "أي عبارة تُستخدم في الكتابة الأكاديمية؟", options: ["Es ist halt so...", "Wie aus der Analyse hervorgeht...", "Das find ich gut...", "Na ja..."], correct: 1, explanation: "'Wie aus der Analyse hervorgeht...' = كما يتضح من التحليل... (أسلوب أكاديمي)." },
      { id: 3, question: "ما معنى 'die Anmeldung' في سياق العيش في ألمانيا؟", options: ["فتح حساب بنكي", "التأمين الصحي", "تسجيل الإقامة", "تصريح العمل"], correct: 2, explanation: "die Anmeldung = تسجيل الإقامة في البلدية." },
      { id: 4, question: "أي رابط يُعبّر عن التناقض؟", options: ["weil", "damit", "obwohl", "denn"], correct: 2, explanation: "obwohl = رغم أن (يُعبّر عن التناقض بين الجملتين)." },
      { id: 5, question: "ما معنى 'der Datenschutz'؟", options: ["الأمن السيبراني", "حماية البيانات", "الرقابة الإلكترونية", "الذكاء الاصطناعي"], correct: 1, explanation: "der Datenschutz = حماية البيانات (Data Protection)." },
      { id: 6, question: "كيف تبدأ خاتمة نص أكاديمي بالألمانية؟", options: ["OK also...", "Zusammenfassend lässt sich sagen, dass...", "Irgendwie...", "Halt..."], correct: 1, explanation: "Zusammenfassend lässt sich sagen, dass... = خلاصة القول يمكن القول إن..." },
      { id: 7, question: "ما معنى 'die Gleichstellung'؟", options: ["الديمقراطية", "الهجرة", "المساواة", "الاندماج"], correct: 2, explanation: "die Gleichstellung = المساواة (خاصة بين الجنسين)." },
      { id: 8, question: "أي عبارة تستخدم لإضافة حجة في النقاش؟", options: ["Hinzu kommt, dass...", "Ich weiß nicht...", "Vielleicht...", "Naja..."], correct: 0, explanation: "Hinzu kommt, dass... = يُضاف إلى ذلك أن... (لإضافة حجة)." },
      { id: 9, question: "ما معنى 'die Künstliche Intelligenz'؟", options: ["التكنولوجيا الحيوية", "الذكاء الاصطناعي", "الطاقة المتجددة", "الاقتصاد الرقمي"], correct: 1, explanation: "die Künstliche Intelligenz (KI) = الذكاء الاصطناعي (AI)." },
      { id: 10, question: "أي جملة تعبر عن رأي مهذب في اجتماع عمل؟", options: ["Das ist falsch!", "Darf ich dazu etwas anmerken?", "Nein, niemals!", "Das stimmt nicht!"], correct: 1, explanation: "Darf ich dazu etwas anmerken? = هل يمكنني التعليق على هذا؟ (مهذب جداً)." },
    ],
  },
};
       
