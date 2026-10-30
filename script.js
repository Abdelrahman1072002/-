/**
 * ملف شواهد الأداء الوظيفي للمعلمة - وزارة التعليم
 * JavaScript تفاعلي: الوضع الداكن، المؤثرات الصوتية، بطاقات 3D Flip، ونوافذ الشواهد
 */

// ==========================================
// 1. Data Store for Performance Elements
// ==========================================
const performanceData = [
  {
    id: 1,
    title: 'أداء الواجبات الوظيفية',
    icon: '💼',
    category: 'الالتزام المهني واللوائح',
    evidenceItems: [
      'خطة علاجية وإثرائية للطلاب',
      'تقرير الزيارات الصفية والتوجيهات',
      'الاختبارات القبلية والبعدية ونتائجها',
      'إعداد المادة التعليمية وخطط العمل الدورية'
    ],
    documents: [
      { title: 'خطة علاج الطلاب الضعاف دراسياً', type: 'PDF', date: '1445/03/15 هـ', size: '1.2 MB', badge: 'معتمد' },
      { title: 'سجل حضور وانصراف الحصص والأنشطة', type: 'DOC', date: '1445/04/02 هـ', size: '640 KB', badge: 'مكتمل' },
      { title: 'تقرير زيارة المشرفة التربوية والثناء', type: 'PDF', date: '1445/05/20 هـ', size: '2.1 MB', badge: 'امتياز' }
    ]
  },
  {
    id: 2,
    title: 'التفاعل مع المجتمع المهني',
    icon: '👥',
    category: 'التطوير المهني والتعاون',
    evidenceItems: [
      'المشاركة في ورش العمل وحلقات النقاش',
      'تبادل الخبرات ومجتمعات التعلم المهنية',
      'حضور اللقاءات والندوات التربوية',
      'نقل أثر التدريب للزميلات والمعلمين الجدد'
    ],
    documents: [
      { title: 'شهادة حضور ورشة الذكاء الاصطناعي في التعليم', type: 'صورة', date: '1445/02/10 هـ', size: '850 KB', badge: 'معتمدة' },
      { title: 'محضر اجتماع مجتمع التعلم المهني (PLC)', type: 'PDF', date: '1445/04/18 هـ', size: '1.4 MB', badge: 'منفذ' },
      { title: 'حقيبة تدريبية مقدمة للزميلات في التخصص', type: 'DOC', date: '1445/06/01 هـ', size: '3.5 MB', badge: 'مبادرة' }
    ]
  },
  {
    id: 3,
    title: 'التفاعل مع أولياء الأمور',
    icon: '👨‍👩‍👧',
    category: 'الشراكة المجتمعية والأسرة',
    evidenceItems: [
      'سجل التواصل المستمر مع أولياء الأمور',
      'المشاركة في الجمعيات العمومية ومجالس الأمهات',
      'إرسال إشعارات المستوى الدراسي والتفوق',
      'الرد على استفسارات وتساؤلات الأسر عبر القنوات الرسمية'
    ],
    documents: [
      { title: 'سجل التواصل الدوري عبر منصة مدرستي', type: 'PDF', date: '1445/03/30 هـ', size: '920 KB', badge: 'محدث' },
      { title: 'تقرير المشاركة في الملتقى السنوي للأمهات', type: 'DOC', date: '1445/05/12 هـ', size: '1.1 MB', badge: 'توثيق' },
      { title: 'رسائل الشكر والتقدير المستلمة من أولياء الأمور', type: 'صورة', date: '1445/07/04 هـ', size: '1.8 MB', badge: 'شهادات' }
    ]
  },
  {
    id: 4,
    title: 'استراتيجيات التدريس',
    icon: '🧩',
    category: 'الممارسات التدريسية والابتكار',
    evidenceItems: [
      'استخدام استراتيجيات التعلم النشط المتنوعة',
      'التنوع في طرق التدريس حسب الفروق الفردية',
      'خطط ونماذج حصص تطبيقية متميزة',
      'تطبيق استراتيجيات العصف الذهني والتعلم التعاوني'
    ],
    documents: [
      { title: 'درس تطبيقي باستخدام استراتيجية فكر - زاوج - شارك', type: 'PDF', date: '1445/02/25 هـ', size: '2.8 MB', badge: 'مميز' },
      { title: 'نموذج تصميم درس بالتعلم القائم على المشروعات', type: 'DOC', date: '1445/04/14 هـ', size: '1.5 MB', badge: 'تطبيقي' },
      { title: 'ألبوم صور تفعيل استراتيجية لعب الأدوار بالصف', type: 'صورة', date: '1445/06/10 هـ', size: '4.2 MB', badge: 'شواهد مصورة' }
    ]
  },
  {
    id: 5,
    title: 'تحسين نتائج المتعلمين',
    icon: '📈',
    category: 'التحصيل الدراسي والتقويم',
    evidenceItems: [
      'خطط برامج رفع مستوى التحصيل الدراسي',
      'برامج رعاية الموهوبات ومعالجة الفاقد التعليمي',
      'مقارنة درجات الطلاب قبل وبعد البرامج العلاجية',
      'مبادرات تحفيز وتكريم الطلاب المتفوقين والمتميزين'
    ],
    documents: [
      { title: 'تقرير قياس الأثر والتحسن في درجات الاختبارات', type: 'PDF', date: '1445/04/01 هـ', size: '1.7 MB', badge: 'إحصائي' },
      { title: 'سجل رعاية وتكريم الطلاب المتفوقين', type: 'DOC', date: '1445/05/22 هـ', size: '890 KB', badge: 'تكريم' },
      { title: 'شهادات شكر وتقدير من مديرة المدرسة لارتفاع التحصيل', type: 'صورة', date: '1445/07/15 هـ', size: '1.9 MB', badge: 'تقدير' }
    ]
  },
  {
    id: 6,
    title: 'إعداد وتنفيذ خطة التعلم',
    icon: '📝',
    category: 'التخطيط التربوي وتوزيع المنهج',
    evidenceItems: [
      'الخطة الفصلية والأسبوعية لتوزيع المنهج الدراسي',
      'تحضير الدروس وفق النموذج الوزاري الحديث',
      'أوراق العمل والأنشطة الإثرائية المتزامنة مع الدروس',
      'مطابقة الخطة للجدول الزمني المعتمد من الوزارة'
    ],
    documents: [
      { title: 'خطة توزيع المنهج للفصل الدراسي الأول والثاني', type: 'PDF', date: '1445/01/05 هـ', size: '1.3 MB', badge: 'معتمد' },
      { title: 'سجل تحضير الدروس الإلكتروني عبر منصة مدرستي', type: 'رابط', date: '1445/02/01 هـ', size: 'رابط مباشر', badge: 'مفعل' },
      { title: 'بنك أوراق العمل والأنشطة الأسبوعية', type: 'PDF', date: '1445/03/18 هـ', size: '3.6 MB', badge: 'شامل' }
    ]
  },
  {
    id: 7,
    title: 'توظيف التقنيات والوسائل',
    icon: '💻',
    category: 'التعليم الرقمي والتقنية',
    evidenceItems: [
      'استخدام المنصات التعليمية الرسمية (مدرستي)',
      'تصميم الدروس التفاعلية والعروض الرقمية المشوقة',
      'توظيف تطبيقات الذكاء الاصطناعي في التعليم',
      'تصميم الاختبارات الإلكترونية والاستبانات التفاعلية'
    ],
    documents: [
      { title: 'إحصائية استخدام أدوات منصة مدرستي والأنشطة الرقمية', type: 'PDF', date: '1445/03/28 هـ', size: '1.1 MB', badge: 'رسمي' },
      { title: 'روابط عروض تفاعلية باستخدام Canva وNearpod', type: 'رابط', date: '1445/04/10 هـ', size: 'تفاعلي', badge: 'مبتكر' },
      { title: 'نماذج اختبارات رقمية تفاعلية عبر Microsoft Forms', type: 'PDF', date: '1445/05/08 هـ', size: '1.4 MB', badge: 'تقويم' }
    ]
  },
  {
    id: 8,
    title: 'تهيئة البيئة التعليمية',
    icon: '🎨',
    category: 'البيئة المدرسية والمحفزات',
    evidenceItems: [
      'تنظيم أركان الصف ومجموعات التعلم التفاعلية',
      'لوحات التعزيز والتحفيز الصفية المبتكرة',
      'خلق بيئة صفية آمنة وجاذبة ومحفزة للابتكار',
      'تطبيق قواعد الأمن والسلامة والإجراءات الوقائية'
    ],
    documents: [
      { title: 'معرض صور لتنظيم وترتيب الغرفة الصفية والمجموعات', type: 'صورة', date: '1445/01/20 هـ', size: '5.1 MB', badge: 'ألبوم صور' },
      { title: 'لوحة الشرف والتحفيز الأسبوعية للمجموعات', type: 'PDF', date: '1445/03/05 هـ', size: '1.8 MB', badge: 'تحفيز' },
      { title: 'سجل السلامة الصفية والإجراءات الوقائية', type: 'DOC', date: '1445/04/19 هـ', size: '750 KB', badge: 'سلامة' }
    ]
  },
  {
    id: 9,
    title: 'الإدارة الصفية',
    icon: '🏫',
    category: 'إدارة السلوك والوقت',
    evidenceItems: [
      'ميثاق وقواعد السلوك الصفي المتفق عليها مع الطلاب',
      'إدارة الوقت بفاعلية واستثمار كامل زمن الحصة',
      'تعزيز السلوك الإيجابي ومكافأة المبادرات الطلابية',
      'سجلات الحضور والغياب والانضباط المدرسي الدقيق'
    ],
    documents: [
      { title: 'وثيقة ميثاق الصف وقواعد السلوك التفاعلي', type: 'PDF', date: '1445/01/15 هـ', size: '1.2 MB', badge: 'اتفاقية' },
      { title: 'سجل معالجة السلوكيات وتعزيز الانضباط', type: 'DOC', date: '1445/03/22 هـ', size: '820 KB', badge: 'متابعة' },
      { title: 'تقرير الانضباط المدرسي ونسبة التزام الصف', type: 'PDF', date: '1445/06/15 هـ', size: '1.5 MB', badge: 'متميز' }
    ]
  },
  {
    id: 10,
    title: 'تحليل نتائج المتعلمين',
    icon: '📊',
    category: 'القياس والتحليل والتشخيص',
    evidenceItems: [
      'الاختبارات البنائية والختامية المنظمة',
      'تحليل نتائج تقويم أعمال السنة والمهام الأدائية',
      'نماذج الرصد وتحليل الإحصاءات والرسوم البيانية',
      'ملفات إنجاز الطالب والتقارير الفردية التشخيصية'
    ],
    documents: [
      { title: 'تقرير التحليل الإحصائي لنتائج الفصل الدراسي الأول', type: 'PDF', date: '1445/04/28 هـ', size: '2.5 MB', badge: 'إحصائي' },
      { title: 'رسوم بيانية توضح نسب الإتقان لكل معيار تعليمي', type: 'صورة', date: '1445/05/18 هـ', size: '2.2 MB', badge: 'بياني' },
      { title: 'نموذج تقرير تشخيصي لملف إنجاز الطالب الفردي', type: 'DOC', date: '1445/06/25 هـ', size: '1.1 MB', badge: 'فردي' }
    ]
  }
];

// ==========================================
// 2. Dark Mode Implementation
// ==========================================
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

// Get saved theme or system preference
function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (themeIcon && themeText) {
    if (theme === 'dark') {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'الوضع الفاتح';
    } else {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'الوضع الداكن';
    }
  }
}

// Initialize theme on page load
applyTheme(getInitialTheme());

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    playSfx('click');
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

// ==========================================
// 3. Web Audio Synthesizer (Interactive Sounds)
// ==========================================
let soundEnabled = true;
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSfx(type) {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    if (type === 'flip') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.18);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'click') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'chime') {
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.001, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.35);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.36);
      });
    }
  } catch (e) {
    // silently ignore audio errors
  }
}

// Sound Toggle Floating Button
const soundToggleBtn = document.getElementById('soundToggleBtn');
const soundIcon = document.getElementById('soundIcon');
const soundText = document.getElementById('soundText');

if (soundToggleBtn) {
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      soundToggleBtn.classList.add('active');
      if (soundText) soundText.textContent = 'الأصوات مفعلة';
      if (soundIcon) soundIcon.textContent = '🔊';
      playSfx('click');
    } else {
      soundToggleBtn.classList.remove('active');
      if (soundText) soundText.textContent = 'الأصوات معطلة';
      if (soundIcon) soundIcon.textContent = '🔇';
    }
  });
}

// ==========================================
// 4. Render 3D Flip Performance Elements
// ==========================================
const elementsGrid = document.getElementById('elementsGrid');

function renderPerformanceCards() {
  if (!elementsGrid) return;
  elementsGrid.innerHTML = '';

  performanceData.forEach((item, index) => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'flip-card-container';
    // Flip item 4 (استراتيجيات التدريس) by default like in video
    if (item.id === 4) {
      cardContainer.classList.add('flipped');
    }

    const cardInner = document.createElement('div');
    cardInner.className = 'flip-card-inner';

    // Front Face
    const cardFront = document.createElement('div');
    cardFront.className = 'flip-card-front';
    cardFront.innerHTML = `
      <div style="width: 100%; display: flex; justify-content: flex-end;">
        <span style="font-size: 0.7rem; color: var(--primary); font-weight: 700; background: var(--bg-badge); padding: 2px 6px; border-radius: 4px;">
          بند #${item.id}
        </span>
      </div>
      <div class="icon-wrapper">${item.icon}</div>
      <h3 class="element-title">${item.title}</h3>
      <div class="flip-hint">
        <span>↻</span>
        <span>انقر لعرض الشواهد</span>
      </div>
    `;

    // Back Face (Flipped)
    const cardBack = document.createElement('div');
    cardBack.className = 'flip-card-back';

    const evidenceListHtml = item.evidenceItems.map(ev => `<li>${ev}</li>`).join('');

    cardBack.innerHTML = `
      <div class="back-title">
        <span>الشواهد</span>
        <span style="font-size: 0.8rem; opacity: 0.85;">${item.icon}</span>
      </div>
      <ul class="evidence-list">
        ${evidenceListHtml}
      </ul>
      <button class="btn-view-shawahed" data-id="${item.id}">
        <span>👁️</span>
        <span>عرض الشواهد</span>
      </button>
    `;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardContainer.appendChild(cardInner);

    // Click on container flips card
    cardContainer.addEventListener('click', (e) => {
      // If clicking button inside, do not toggle flip
      if (e.target.closest('.btn-view-shawahed')) return;
      playSfx('flip');
      cardContainer.classList.toggle('flipped');
    });

    // Button opens modal
    const viewBtn = cardBack.querySelector('.btn-view-shawahed');
    if (viewBtn) {
      viewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playSfx('chime');
        openEvidenceModal(item);
      });
    }

    elementsGrid.appendChild(cardContainer);
  });
}

// Flip All Toggle Button
const flipAllBtn = document.getElementById('flipAllBtn');
if (flipAllBtn) {
  let allFlipped = false;
  flipAllBtn.addEventListener('click', () => {
    playSfx('flip');
    const cards = document.querySelectorAll('.flip-card-container');
    allFlipped = !allFlipped;
    cards.forEach(c => {
      if (allFlipped) c.classList.add('flipped');
      else c.classList.remove('flipped');
    });
    flipAllBtn.textContent = allFlipped ? 'إعادة جميع البطاقات للواجهة' : 'قلب جميع البطاقات (3D)';
  });
}

// ==========================================
// 5. Evidence Modal Management
// ==========================================
const evidenceModal = document.getElementById('evidenceModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalEvidenceList = document.getElementById('modalEvidenceList');
const modalDocsList = document.getElementById('modalDocsList');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalFooterCloseBtn = document.getElementById('modalFooterCloseBtn');

function openEvidenceModal(item) {
  if (!evidenceModal) return;

  if (modalTitle) modalTitle.textContent = item.title;
  if (modalCategory) modalCategory.textContent = `بند التقييم #${item.id} · ${item.category}`;

  if (modalEvidenceList) {
    modalEvidenceList.innerHTML = item.evidenceItems.map(ev => `
      <li style="margin-bottom: 6px;">${ev}</li>
    `).join('');
  }

  if (modalDocsList) {
    modalDocsList.innerHTML = item.documents.map(doc => `
      <div class="doc-item">
        <div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.9rem;">${doc.title}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">
            ${doc.date} · ${doc.size}
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="badge-tag">${doc.badge}</span>
          <button onclick="downloadAlert('${doc.title}')" style="background: none; border: none; cursor: pointer; font-size: 1.1rem;" title="تحميل">
            ⬇️
          </button>
        </div>
      </div>
    `).join('');
  }

  evidenceModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEvidenceModal() {
  if (!evidenceModal) return;
  playSfx('click');
  evidenceModal.classList.remove('open');
  document.body.style.overflow = '';
}

window.downloadAlert = function(title) {
  playSfx('click');
  alert(`تم تجهيز تحميل المستند: "${title}"`);
};

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeEvidenceModal);
if (modalFooterCloseBtn) modalFooterCloseBtn.addEventListener('click', closeEvidenceModal);

if (evidenceModal) {
  evidenceModal.addEventListener('click', (e) => {
    if (e.target === evidenceModal) closeEvidenceModal();
  });
}

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && evidenceModal && evidenceModal.classList.contains('open')) {
    closeEvidenceModal();
  }
});

// ==========================================
// 6. Teacher Info Selection (Video 00:08 - 00:10)
// ==========================================
const infoCards = document.querySelectorAll('.info-card');
infoCards.forEach(card => {
  card.addEventListener('click', () => {
    playSfx('click');
    infoCards.forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
  });
});

// ==========================================
// 7. Mobile Navigation Drawer Toggle
// ==========================================
const mobileNavToggle = document.getElementById('mobileNavToggle');
const mobileDrawer = document.getElementById('mobileDrawer');

if (mobileNavToggle && mobileDrawer) {
  mobileNavToggle.addEventListener('click', () => {
    playSfx('click');
    mobileDrawer.classList.toggle('open');
  });

  const drawerLinks = mobileDrawer.querySelectorAll('.nav-link');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  });
}

// ==========================================
// Initialize on DOM Ready
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderPerformanceCards();
});
