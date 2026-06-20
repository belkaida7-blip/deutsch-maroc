import { useState } from "react";
import { levels, type Level, type Lesson } from "./data/lessons";
import { quizzes, type QuizQuestion } from "./data/quizzes";

type Page = "home" | "lessons" | "lesson-detail" | "quiz" | "quiz-active" | "quiz-result" | "about" | "privacy" | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [quizLevel, setQuizLevel] = useState<string>("A1");
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSent, setContactSent] = useState(false);

  const navigate = (p: Page) => {
    setPage(p);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openLesson = (level: Level, lesson: Lesson) => {
    setSelectedLevel(level);
    setSelectedLesson(lesson);
    navigate("lesson-detail");
  };

  const startQuiz = (level: string) => {
    setQuizLevel(level);
    setQuizIndex(0);
    setQuizAnswers([]);
    setSelectedAnswer(null);
    setShowAnswer(false);
    navigate("quiz-active");
  };

  const answerQuestion = (idx: number) => {
    if (showAnswer) return;
    setSelectedAnswer(idx);
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    const answers = [...quizAnswers, selectedAnswer ?? -1];
    setQuizAnswers(answers);
    const questions = quizzes[quizLevel]?.questions ?? [];
    if (quizIndex + 1 >= questions.length) {
      navigate("quiz-result");
    } else {
      setQuizIndex(quizIndex + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const getScore = () => {
    const questions = quizzes[quizLevel]?.questions ?? [];
    return quizAnswers.filter((a, i) => a === questions[i]?.correct).length;
  };

  const levelColor = (id: string) => {
    const map: Record<string, string> = { A1: "green", A2: "blue", B1: "orange", B2: "purple" };
    return map[id] || "gray";
  };

  const levelBadgeClass = (id: string) => {
    const map: Record<string, string> = {
      A1: "bg-green-100 text-green-800 border-green-300",
      A2: "bg-blue-100 text-blue-800 border-blue-300",
      B1: "bg-orange-100 text-orange-800 border-orange-300",
      B2: "bg-purple-100 text-purple-800 border-purple-300",
    };
    return map[id] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  const levelCardBorder = (id: string) => {
    const map: Record<string, string> = {
      A1: "border-green-300 hover:border-green-500 hover:shadow-green-100",
      A2: "border-blue-300 hover:border-blue-500 hover:shadow-blue-100",
      B1: "border-orange-300 hover:border-orange-500 hover:shadow-orange-100",
      B2: "border-purple-300 hover:border-purple-500 hover:shadow-purple-100",
    };
    return map[id] || "border-gray-300";
  };

  const currentQuiz = quizzes[quizLevel];
  const currentQuestion: QuizQuestion | undefined = currentQuiz?.questions[quizIndex];

  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl" style={{ fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif" }}>
      {/* ===== NAVBAR ===== */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => navigate("home")} className="flex items-center gap-2 font-bold text-lg text-gray-800 hover:text-blue-700 transition-colors">
              <span className="text-2xl">🇩🇪</span>
              <span>دويتش مغرب</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: "الرئيسية", p: "home" as Page },
                { label: "الدروس", p: "lessons" as Page },
                { label: "الامتحانات", p: "quiz" as Page },
                { label: "عن الموقع", p: "about" as Page },
                { label: "اتصل بنا", p: "contact" as Page },
              ].map((item) => (
                <button key={item.p} onClick={() => navigate(item.p)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${page === item.p ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"}`}>
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu btn */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 pb-3 pt-2 space-y-1">
              {[
                { label: "🏠 الرئيسية", p: "home" as Page },
                { label: "📚 الدروس", p: "lessons" as Page },
                { label: "✏️ الامتحانات", p: "quiz" as Page },
                { label: "ℹ️ عن الموقع", p: "about" as Page },
                { label: "📬 اتصل بنا", p: "contact" as Page },
              ].map((item) => (
                <button key={item.p} onClick={() => navigate(item.p)}
                  className={`w-full text-right px-4 py-2 rounded-lg text-sm font-medium transition-colors ${page === item.p ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"}`}>
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ===== HOME PAGE ===== */}
      {page === "home" && (
        <div>
          {/* Hero */}
          <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-16 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
                <span>🆕</span>
                <span>محتوى جديد 2026 — دروس محدّثة وموسّعة</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                تعلم <span className="text-yellow-300">الألمانية</span><br />من الصفر حتى الإجادة
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                المنصة الأولى بالعربية للمغاربة الراغبين في اجتياز امتحانات اللغة الألمانية<br />
                <strong>A1 · A2 · B1 · B2</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm">
                {["🎧 دروس تفاعلية", "📖 شرح بالدارجة", "✏️ امتحانات تجريبية", "🆓 مجاناً 100%"].map(f => (
                  <span key={f} className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">{f}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => navigate("lessons")} className="bg-yellow-400 text-yellow-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-colors text-lg shadow-lg">
                  ابدأ التعلم الآن ←
                </button>
                <button onClick={() => navigate("quiz")} className="bg-white/10 border border-white/30 text-white font-medium px-8 py-3 rounded-xl hover:bg-white/20 transition-colors text-lg">
                  جرّب الامتحانات
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { num: "57+", label: "درس متكامل" },
                  { num: "500+", label: "كلمة ألمانية" },
                  { num: "40", label: "سؤال تدريبي" },
                  { num: "4", label: "مستويات A1→B2" },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold text-blue-700">{s.num}</div>
                    <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ad Banner Placeholder */}
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl p-4 text-center text-gray-400 text-sm">
              {/* مكان إعلان Google AdSense */}
              <p>إعلان</p>
            </div>
          </div>

          {/* Levels */}
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">اختر مستواك</h2>
              <p className="text-gray-500">ابدأ من حيث أنت وتقدّم بخطواتك</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {levels.map(level => (
                <button key={level.id} onClick={() => { setSelectedLevel(level); navigate("lessons"); }}
                  className={`bg-white border-2 rounded-2xl p-6 text-right transition-all hover:shadow-lg hover:-translate-y-1 ${levelCardBorder(level.id)}`}>
                  <div className={`inline-block text-2xl font-bold px-3 py-1 rounded-xl border ${levelBadgeClass(level.id)} mb-3`}>{level.id}</div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{level.nameAr}</h3>
                  <p className="text-gray-500 text-sm mb-3">{level.nameDe}</p>
                  <p className="text-gray-600 text-sm mb-4">{level.description}</p>
                  <div className="flex gap-3 text-xs text-gray-500">
                    <span>📚 {level.lessons.length} درس</span>
                    <span>⏱️ {level.hours}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-12">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">لماذا دويتش مغرب؟</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "📖", title: "شرح بالدارجة", desc: "كل درس مشروح بالعربية مع أمثلة من الحياة اليومية المغربية" },
                  { icon: "🇲🇦", title: "مصمم للمغاربة", desc: "محتوى يراعي السياق المغربي والطموحات الأوروبية" },
                  { icon: "✏️", title: "امتحانات Goethe", desc: "تدرب على امتحانات مشابهة لـ Goethe-Institut وStart Deutsch" },
                  { icon: "🆓", title: "مجاني تماماً", desc: "جميع الدروس والامتحانات مجانية، ممولة بالإعلانات" },
                ].map(f => (
                  <div key={f.title} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="text-4xl mb-3">{f.icon}</div>
                    <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Road Map */}
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">🗺️ خارطة طريق تعلّمك</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { level: "A1", period: "0–3 أشهر", title: "مبتدئ", desc: "التحية، التعارف، الأرقام، الألوان، الأسرة — هدفك التواصل البسيط", color: "green" },
                { level: "A2", period: "3–6 أشهر", title: "أساسي", desc: "التسوق، الطعام، الصحة، الاتجاهات — التواصل في المواقف الاعتيادية", color: "blue" },
                { level: "B1", period: "6–12 شهر", title: "متوسط", desc: "العمل، السفر، التعليم، إبداء الرأي — الاستقلالية في التواصل", color: "orange" },
                { level: "B2", period: "12–18 شهر", title: "فوق المتوسط", desc: "نقاشات معقدة، أخبار، كتابة متقدمة، فهم المتحدث الأصلي", color: "purple" },
              ].map((r, i) => (
                <div key={r.level} className="relative">
                  {i < 3 && <div className="hidden lg:block absolute top-6 left-0 w-full h-0.5 bg-gray-200 z-0" style={{ left: "-50%" }} />}
                  <div className={`border-2 rounded-2xl p-5 bg-white border-${r.color}-200`}>
                    <div className={`text-xl font-bold text-${r.color}-600 mb-1`}>{r.level}</div>
                    <div className="text-xs text-gray-400 mb-2">{r.period}</div>
                    <div className="font-semibold text-gray-800 mb-2">{r.title}</div>
                    <p className="text-gray-500 text-sm">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12 text-center">
              <h2 className="text-2xl font-bold mb-3">جاهز لتبدأ رحلتك مع الألمانية؟</h2>
              <p className="text-blue-100 mb-6">ابدأ اليوم — مجاناً — واجتاز امتحانك بثقة</p>
              <button onClick={() => navigate("lessons")} className="bg-yellow-400 text-yellow-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-colors text-lg">
                ابدأ الآن ←
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== LESSONS PAGE ===== */}
      {page === "lessons" && (
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">📚 الدروس</h1>
            <p className="text-gray-500">اختر مستواك للبدء</p>
          </div>

          {/* Level Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {levels.map(lv => (
              <button key={lv.id} onClick={() => setSelectedLevel(lv)}
                className={`px-5 py-2 rounded-xl font-bold border-2 transition-all text-sm ${selectedLevel?.id === lv.id ? `${levelBadgeClass(lv.id)} shadow-md` : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"}`}>
                {lv.id} — {lv.nameAr}
              </button>
            ))}
          </div>

          {/* Level Info */}
          {selectedLevel && (
            <div className={`border-2 rounded-2xl p-5 mb-8 ${selectedLevel.bgColor} ${selectedLevel.borderColor}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className={`text-2xl font-bold ${selectedLevel.color} mr-2`}>{selectedLevel.id}</span>
                  <span className="font-bold text-gray-700 text-lg">{selectedLevel.nameDe} — {selectedLevel.nameAr}</span>
                  <p className="text-gray-600 mt-1 text-sm">{selectedLevel.description}</p>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-gray-800 text-xl">{selectedLevel.lessons.length}</div>
                    <div className="text-gray-500">درس</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-800 text-xl">{selectedLevel.hours}</div>
                    <div className="text-gray-500">تعلم</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ad Banner */}
          <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl p-3 text-center text-gray-400 text-xs mb-6">
            <p>إعلان</p>
          </div>

          {/* Lessons Grid */}
          {selectedLevel ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedLevel.lessons.map((lesson) => (
                <button key={lesson.id} onClick={() => openLesson(selectedLevel, lesson)}
                  className={`bg-white border-2 rounded-2xl p-5 text-right transition-all hover:shadow-md hover:-translate-y-0.5 ${levelCardBorder(selectedLevel.id)}`}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className={`text-xs font-bold px-2 py-0.5 rounded-full border ${levelBadgeClass(selectedLevel.id)}`}>{selectedLevel.id}</div>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{lesson.category}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{lesson.title}</h3>
                  <p className="text-xs text-gray-500 mb-3 font-medium">{lesson.titleDe}</p>
                  <p className="text-gray-600 text-sm mb-3">{lesson.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>⏱️ {lesson.duration}</span>
                    <span className={`font-medium ${selectedLevel.color}`}>ابدأ الدرس ←</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {levels.map(level => (
                <button key={level.id} onClick={() => setSelectedLevel(level)}
                  className={`bg-white border-2 rounded-2xl p-6 text-right transition-all hover:shadow-lg hover:-translate-y-1 ${levelCardBorder(level.id)}`}>
                  <div className={`inline-block text-xl font-bold px-3 py-1 rounded-xl border ${levelBadgeClass(level.id)} mb-3`}>{level.id}</div>
                  <h3 className="font-bold text-gray-800 mb-1">{level.nameAr}</h3>
                  <p className="text-gray-500 text-sm mb-1">{level.nameDe}</p>
                  <p className="text-gray-600 text-sm mb-3">{level.description}</p>
                  <div className="text-xs text-gray-400">📚 {level.lessons.length} درس · ⏱️ {level.hours}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ===== LESSON DETAIL PAGE ===== */}
      {page === "lesson-detail" && selectedLesson && selectedLevel && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <button onClick={() => navigate("lessons")} className="hover:text-blue-600">الدروس</button>
            <span>/</span>
            <button onClick={() => navigate("lessons")} className={selectedLevel.color + " font-medium"}>{selectedLevel.id} — {selectedLevel.nameAr}</button>
            <span>/</span>
            <span className="text-gray-800 font-medium">{selectedLesson.title}</span>
          </div>

          {/* Header */}
          <div className={`border-2 rounded-2xl p-6 mb-6 ${selectedLevel.bgColor} ${selectedLevel.borderColor}`}>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className={`text-sm font-bold px-3 py-1 rounded-full border ${levelBadgeClass(selectedLevel.id)}`}>{selectedLevel.id}</span>
              <span className="text-xs bg-white/70 border border-gray-200 px-2 py-0.5 rounded-full text-gray-600">{selectedLesson.category}</span>
              <span className="text-xs text-gray-500">⏱️ {selectedLesson.duration}</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">{selectedLesson.title}</h1>
            <p className={`font-medium ${selectedLevel.color} mb-2`}>{selectedLesson.titleDe}</p>
            <p className="text-gray-600">{selectedLesson.description}</p>
          </div>

          {/* Intro */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
            <h2 className="font-bold text-blue-800 mb-2">📌 مقدمة الدرس</h2>
            <p className="text-blue-900">{selectedLesson.content.intro}</p>
          </div>

          {/* Vocabulary */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
            <h2 className="font-bold text-gray-800 text-lg mb-4">📝 المفردات الأساسية</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedLesson.content.vocabulary.map((v, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-blue-700 text-sm">{v.de}</span>
                    <span className="text-gray-700 text-sm">{v.ar}</span>
                  </div>
                  {v.example && <p className="text-xs text-gray-400 mt-1 italic">{v.example}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Grammar */}
          {selectedLesson.content.grammar && (
            <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
              <h2 className="font-bold text-gray-800 text-lg mb-4">⚙️ القواعد</h2>
              <div className="space-y-3">
                {selectedLesson.content.grammar.map((g, i) => (
                  <div key={i} className="border-r-4 border-orange-400 pr-4 py-2">
                    <div className="text-sm font-bold text-gray-700 mb-1">{g.rule}</div>
                    <div className="text-blue-700 font-medium">{g.example}</div>
                    <div className="text-gray-500 text-sm">{g.translation}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dialogue */}
          {selectedLesson.content.dialogue && (
            <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
              <h2 className="font-bold text-gray-800 text-lg mb-4">💬 حوار تطبيقي</h2>
              <div className="space-y-3">
                {selectedLesson.content.dialogue.map((d, i) => (
                  <div key={i} className={`flex gap-3 ${i % 2 === 0 ? "justify-end flex-row-reverse" : ""}`}>
                    <div className={`rounded-2xl px-4 py-3 max-w-xs ${i % 2 === 0 ? "bg-blue-600 text-white rounded-tr-sm" : "bg-gray-100 text-gray-800 rounded-tl-sm"}`}>
                      <div className="text-xs opacity-70 mb-1">{d.speaker}</div>
                      <div className="font-medium text-sm mb-1">{d.de}</div>
                      <div className="text-xs opacity-80">{d.ar}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          {selectedLesson.content.tips && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-6">
              <h2 className="font-bold text-yellow-800 text-lg mb-3">💡 نصائح مهمة</h2>
              <ul className="space-y-2">
                {selectedLesson.content.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-yellow-900 text-sm">
                    <span className="text-yellow-500 mt-0.5">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ad Banner */}
          <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl p-4 text-center text-gray-400 text-sm mb-6">
            <p>إعلان</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate("lessons")} className="flex-1 min-w-[140px] border-2 border-gray-200 text-gray-600 font-medium px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              ← العودة للدروس
            </button>
            <button onClick={() => startQuiz(selectedLevel.id)} className={`flex-1 min-w-[140px] text-white font-bold px-5 py-3 rounded-xl transition-colors bg-${levelColor(selectedLevel.id)}-600 hover:bg-${levelColor(selectedLevel.id)}-700`}
              style={{ backgroundColor: selectedLevel.id === "A1" ? "#16a34a" : selectedLevel.id === "A2" ? "#2563eb" : selectedLevel.id === "B1" ? "#ea580c" : "#9333ea" }}>
              جرّب امتحان {selectedLevel.id} ←
            </button>
          </div>
        </div>
      )}

      {/* ===== QUIZ SELECT PAGE ===== */}
      {page === "quiz" && (
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">✏️ الامتحانات التدريبية</h1>
            <p className="text-gray-500">اختبر معلوماتك وجهّز نفسك للامتحان الرسمي</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {Object.values(quizzes).map(q => (
              <div key={q.level} className={`bg-white border-2 rounded-2xl p-6 ${levelCardBorder(q.level)}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-2xl font-bold px-3 py-1 rounded-xl border ${levelBadgeClass(q.level)}`}>{q.level}</span>
                  <div>
                    <h3 className="font-bold text-gray-800">{q.title}</h3>
                    <p className="text-sm text-gray-500">{q.questions.length} أسئلة · {q.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span>⏱️ {q.duration}</span>
                  <span>🎯 70% للنجاح</span>
                  <span>❓ {q.questions.length} أسئلة</span>
                </div>
                <button onClick={() => startQuiz(q.level)}
                  className="w-full text-white font-bold py-3 rounded-xl transition-colors"
                  style={{ backgroundColor: q.level === "A1" ? "#16a34a" : q.level === "A2" ? "#2563eb" : q.level === "B1" ? "#ea580c" : "#9333ea" }}>
                  ابدأ الامتحان ←
                </button>
              </div>
            ))}
          </div>

          {/* Ad */}
          <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl p-4 text-center text-gray-400 text-sm mt-8">
            <p>إعلان</p>
          </div>
        </div>
      )}

      {/* ===== QUIZ ACTIVE PAGE ===== */}
      {page === "quiz-active" && currentQuiz && currentQuestion && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-bold px-2 py-0.5 rounded-full border ${levelBadgeClass(quizLevel)}`}>{quizLevel}</span>
              <span className="text-sm text-gray-500">السؤال {quizIndex + 1} / {currentQuiz.questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="h-2 rounded-full transition-all" style={{
                width: `${((quizIndex + 1) / currentQuiz.questions.length) * 100}%`,
                backgroundColor: quizLevel === "A1" ? "#16a34a" : quizLevel === "A2" ? "#2563eb" : quizLevel === "B1" ? "#ea580c" : "#9333ea"
              }} />
            </div>
          </div>

          {/* Question */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 leading-relaxed">{currentQuestion.question}</h2>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-5">
            {currentQuestion.options.map((opt, i) => {
              let cls = "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300";
              if (showAnswer) {
                if (i === currentQuestion.correct) cls = "bg-green-50 border-2 border-green-500 text-green-800";
                else if (i === selectedAnswer) cls = "bg-red-50 border-2 border-red-400 text-red-800";
                else cls = "bg-gray-50 border-2 border-gray-200 text-gray-400";
              } else if (i === selectedAnswer) {
                cls = "bg-blue-50 border-2 border-blue-400 text-blue-800";
              }
              return (
                <button key={i} onClick={() => answerQuestion(i)} disabled={showAnswer}
                  className={`w-full text-right px-5 py-4 rounded-xl font-medium transition-all ${cls} ${!showAnswer ? "hover:shadow-sm cursor-pointer" : ""}`}>
                  <span className="font-bold ml-2">{["أ", "ب", "ج", "د"][i]})</span> {opt}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showAnswer && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <div className="flex items-start gap-2">
                <span>💡</span>
                <div>
                  <div className="font-bold text-blue-800 mb-1">الشرح</div>
                  <p className="text-blue-900 text-sm">{currentQuestion.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {showAnswer && (
            <button onClick={nextQuestion} className="w-full text-white font-bold py-4 rounded-xl text-lg transition-colors"
              style={{ backgroundColor: quizLevel === "A1" ? "#16a34a" : quizLevel === "A2" ? "#2563eb" : quizLevel === "B1" ? "#ea580c" : "#9333ea" }}>
              {quizIndex + 1 < currentQuiz.questions.length ? "السؤال التالي ←" : "إنهاء الامتحان ←"}
            </button>
          )}
        </div>
      )}

      {/* ===== QUIZ RESULT PAGE ===== */}
      {page === "quiz-result" && (
        <div className="max-w-2xl mx-auto px-4 py-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center">
            {(() => {
              const score = getScore();
              const total = quizzes[quizLevel]?.questions.length ?? 10;
              const pct = Math.round((score / total) * 100);
              const passed = pct >= 70;
              return (
                <>
                  <div className="text-6xl mb-4">{passed ? "🎉" : "📚"}</div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">{passed ? "مبروك! نجحت" : "حاول مجدداً"}</h1>
                  <div className="text-5xl font-bold my-6" style={{ color: passed ? "#16a34a" : "#ea580c" }}>{pct}%</div>
                  <p className="text-gray-600 mb-2">أجبت على <strong>{score}</strong> من <strong>{total}</strong> أسئلة بشكل صحيح</p>
                  <p className="text-sm text-gray-400 mb-8">{passed ? "أنت مستعد للانتقال للمستوى التالي!" : "راجع الدروس وحاول مجدداً — أنت تتقدم!"}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={() => startQuiz(quizLevel)} className="flex-1 border-2 border-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-50">
                      حاول مجدداً
                    </button>
                    <button onClick={() => { setSelectedLevel(levels.find(l => l.id === quizLevel) || null); navigate("lessons"); }}
                      className="flex-1 text-white font-bold py-3 rounded-xl"
                      style={{ backgroundColor: quizLevel === "A1" ? "#16a34a" : quizLevel === "A2" ? "#2563eb" : quizLevel === "B1" ? "#ea580c" : "#9333ea" }}>
                      مراجعة الدروس ←
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* ===== ABOUT PAGE ===== */}
      {page === "about" && (
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">عن دويتش مغرب</h1>
            <p className="text-gray-500">المنصة الأولى لتعليم الألمانية بالعربية للمغاربة</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { icon: "🎯", title: "هدفنا", desc: "مساعدة المغاربة على اجتياز امتحانات اللغة الألمانية (A1, A2, B1, B2) المطلوبة للتأشيرة والدراسة والعمل في ألمانيا والنمسا وسويسرا." },
              { icon: "📋", title: "الامتحانات الرسمية", desc: "نستعدك لامتحانات: Goethe-Institut · ÖSD · TELC · Start Deutsch وفق أحدث المناهج لعام 2026." },
              { icon: "💰", title: "مجاني تماماً", desc: "جميع الدروس والامتحانات مجانية. نعتمد على الإعلانات لتمويل الموقع وضمان استمراريته." },
              { icon: "📱", title: "يعمل على جميع الأجهزة", desc: "سواء كنت على الهاتف أو الحاسوب، الموقع متجاوب ويعمل بدون تحميل أي تطبيق." },
            ].map(f => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Exams */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
            <h2 className="font-bold text-gray-800 text-lg mb-4">🏆 الامتحانات التي نستعدك لها</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Goethe-Institut", "ÖSD", "TELC", "Start Deutsch"].map(exam => (
                <div key={exam} className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center text-sm font-bold text-blue-700">{exam}</div>
              ))}
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h2 className="font-bold text-gray-800 text-lg mb-3">📋 معلومات مهمة</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              دويتش مغرب موقع تعليمي مجاني مموّل بالإعلانات. نستخدم Google AdSense لعرض إعلانات ملائمة.
              لمزيد من التفاصيل حول خصوصيتك وبياناتك،{" "}
              <button onClick={() => navigate("privacy")} className="text-blue-600 underline hover:text-blue-800">اطلع على سياسة الخصوصية</button>.
            </p>
          </div>
        </div>
      )}

      {/* ===== PRIVACY PAGE ===== */}
      {page === "privacy" && (
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">🔒 سياسة الخصوصية</h1>
            <p className="text-gray-500 text-sm mb-8">آخر تحديث: يناير 2026</p>

            <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
              <section>
                <h2 className="font-bold text-gray-800 text-base mb-2">1. مقدمة</h2>
                <p>يلتزم موقع <strong>دويتش مغرب</strong> بحماية خصوصية زوّاره ومستخدميه. توضح هذه السياسة طبيعة المعلومات التي نجمعها وكيفية استخدامها وحمايتها.</p>
              </section>

              <section>
                <h2 className="font-bold text-gray-800 text-base mb-2">2. المعلومات التي نجمعها</h2>
                <ul className="list-disc list-inside space-y-1 mr-2">
                  <li><strong>بيانات الاستخدام:</strong> معلومات عن كيفية تفاعلك مع الموقع (الصفحات المزارة، مدة الجلسة، الدروس المشاهدة).</li>
                  <li><strong>بيانات الجهاز:</strong> نوع المتصفح، نظام التشغيل، عنوان IP بشكل مجهول.</li>
                  <li><strong>التخزين المحلي:</strong> نستخدم localStorage لحفظ تقدمك في الدروس على جهازك فقط دون إرسالها لخوادمنا.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-gray-800 text-base mb-2">3. الإعلانات (Google AdSense)</h2>
                <p>نستخدم <strong>Google AdSense</strong> لعرض الإعلانات على الموقع. قد يستخدم Google ملفات تعريف الارتباط (Cookies) لعرض إعلانات مخصصة بناءً على زياراتك السابقة. يمكنك إلغاء الاشتراك في الإعلانات المخصصة من خلال{" "}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">إعدادات إعلانات Google</a>.</p>
              </section>

              <section>
                <h2 className="font-bold text-gray-800 text-base mb-2">4. ملفات تعريف الارتباط (Cookies)</h2>
                <p>يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربتك. تُستخدم هذه الملفات من قِبَل شركاء الإعلانات (Google) لتقديم إعلانات ذات صلة. باستمرار استخدامك للموقع، فإنك توافق على استخدام هذه الملفات وفق هذه السياسة.</p>
              </section>

              <section>
                <h2 className="font-bold text-gray-800 text-base mb-2">5. حقوقك</h2>
                <ul className="list-disc list-inside space-y-1 mr-2">
                  <li>الحق في معرفة البيانات التي نجمعها عنك.</li>
                  <li>الحق في طلب حذف بياناتك.</li>
                  <li>الحق في إلغاء الاشتراك في الإعلانات المخصصة.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-gray-800 text-base mb-2">6. التواصل معنا</h2>
                <p>إذا كان لديك أي استفسار حول سياسة الخصوصية، يمكنك التواصل معنا عبر{" "}
                  <button onClick={() => navigate("contact")} className="text-blue-600 underline">صفحة اتصل بنا</button>.</p>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* ===== CONTACT PAGE ===== */}
      {page === "contact" && (
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">📬 اتصل بنا</h1>
            <p className="text-gray-500">نسعد بتلقي اقتراحاتك وملاحظاتك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              { icon: "📧", title: "البريد الإلكتروني", desc: "contact@deutsch-maroc.ma" },
              { icon: "⏰", title: "وقت الرد", desc: "نرد خلال 24–48 ساعة في أيام العمل" },
              { icon: "💬", title: "أنواع الاستفسارات", desc: "دروس، أخطاء، اقتراحات، شراكات" },
            ].map(c => (
              <div key={c.title} className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-2">{c.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{c.title}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h2 className="font-bold text-gray-800 text-lg mb-5">أرسل لنا رسالة</h2>
            {contactSent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">تم إرسال رسالتك!</h3>
                <p className="text-gray-500 mb-6">سنرد عليك في أقرب وقت ممكن.</p>
                <button onClick={() => setContactSent(false)} className="border-2 border-gray-200 text-gray-600 font-medium px-6 py-2 rounded-xl hover:bg-gray-50">
                  أرسل رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setContactSent(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">الاسم *</label>
                    <input type="text" required value={contactForm.name} onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="اسمك الكامل"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني *</label>
                    <input type="email" required value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة *</label>
                  <textarea required rows={5} value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="اكتب رسالتك أو اقتراحك هنا..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none" />
                </div>
                <button type="submit" className="w-full bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors">
                  إرسال الرسالة ←
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇩🇪</span>
                <span className="font-bold text-lg">دويتش مغرب</span>
              </div>
              <p className="text-gray-400 text-sm">المنصة الأولى بالعربية لتعلم الألمانية للمغاربة — مجاناً.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">الدروس</h4>
              <div className="space-y-1 text-gray-400 text-sm">
                {levels.map(l => (
                  <button key={l.id} onClick={() => { setSelectedLevel(l); navigate("lessons"); }} className="block hover:text-white transition-colors">
                    {l.id} — {l.nameAr} ({l.lessons.length} درس)
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">الامتحانات</h4>
              <div className="space-y-1 text-gray-400 text-sm">
                {["A1", "A2", "B1", "B2"].map(l => (
                  <button key={l} onClick={() => startQuiz(l)} className="block hover:text-white transition-colors">
                    امتحان {l}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">روابط سريعة</h4>
              <div className="space-y-1 text-gray-400 text-sm">
                <button onClick={() => navigate("about")} className="block hover:text-white transition-colors">عن الموقع</button>
                <button onClick={() => navigate("privacy")} className="block hover:text-white transition-colors">سياسة الخصوصية</button>
                <button onClick={() => navigate("contact")} className="block hover:text-white transition-colors">اتصل بنا</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
            <p>© 2026 دويتش مغرب. جميع الحقوق محفوظة.</p>
            <div className="flex gap-4">
              <button onClick={() => navigate("privacy")} className="hover:text-white transition-colors">سياسة الخصوصية</button>
              <button onClick={() => navigate("contact")} className="hover:text-white transition-colors">اتصل بنا</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
