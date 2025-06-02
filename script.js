// ==========================================
// 📜 CONFIGURACIÓN Y DATOS DEL CURSO
// Define la estructura y contenido del curso.
// ==========================================

const courseData = {
  sections: [
    {
      title: "📁 BIENVENIDA Y FUNDAMENTOS",
      icon: "fas fa-door-open",
      lessons: [
        { id: "introduccion", title: "Introducción al Curso", icon: "fas fa-info-circle", file: "temas/introduccion.html" },
        { id: "google-colab", title: "Uso de Google Colab", icon: "fab fa-google", file: "temas/google-colab.html" },
        { id: "markdown", title: "Sintaxis Markdown", icon: "fas fa-paragraph", file: "temas/markdown.html" },
        { id: "latex", title: "Introducción a LaTeX", icon: "fas fa-subscript", file: "temas/latex.html" },
        // --- NUEVAS LECCIONES AÑADIDAS AQUÍ ---
        { id: "html5", title: "HTML5 Esencial", icon: "fab fa-html5", file: "temas/html5_curso.html" },
        { id: "css3", title: "CSS3 para Estilos Web", icon: "fab fa-css3-alt", file: "temas/css3_estilos.html" },
        { id: "javascript", title: "JavaScript Básico", icon: "fab fa-js-square", file: "temas/javascript_intro.html" },
        // --- FIN DE NUEVAS LECCIONES ---
        { id: "instalacion", title: "Instalación y Entornos", icon: "fas fa-laptop-code", file: "temas/instalacion.html" }
      ]
    },
    {
      title: "⚙️ PRIMEROS PASOS",
      icon: "fas fa-seedling",
      lessons: [
        { id: "hola-mundo", title: "Hola Mundo", icon: "fas fa-terminal", file: "temas/hola-mundo.html" },
        { id: "comentarios-estilo", title: "Comentarios y Estilo de Código", icon: "fas fa-comment-dots", file: "temas/comentarios-estilo.html" },
        { id: "variables-tipos", title: "Variables y Tipos de Datos", icon: "fas fa-font", file: "temas/variables-tipos.html" },
        { id: "entrada-salida", title: "Entrada y Salida de Datos", icon: "fas fa-keyboard", file: "temas/entrada-salida.html" },
        { id: "operadores", title: "Operadores en Python", icon: "fas fa-equals", file: "temas/operadores.html" }
      ]
    },
    {
      title: "🧺 COLECCIONES Y ESTRUCTURAS DE DATOS",
      icon: "fas fa-layer-group",
      lessons: [
        { id: "listas", title: "Listas", icon: "fas fa-list", file: "temas/listas.html" },
        { id: "tuplas", title: "Tuplas", icon: "fas fa-stream", file: "temas/tuplas.html" },
        { id: "conjuntos", title: "Conjuntos (sets)", icon: "fas fa-object-ungroup", file: "temas/conjuntos.html" },
        { id: "diccionarios", title: "Diccionarios", icon: "fas fa-book", file: "temas/diccionarios.html" },
        { id: "deque", title: "Listas tipo deque", icon: "fas fa-warehouse", file: "temas/deque.html" }
      ]
    },
    {
      title: "🧠 ESTRUCTURAS DE CONTROL O DECISIÓN",
      icon: "fas fa-code-branch",
      lessons: [
        { id: "condicionales", title: "Condicionales (if, else, elif)", icon: "fas fa-code-branch", file: "temas/condicionales.html" },
        { id: "match-case", title: "Estructura match-case", icon: "fas fa-random", file: "temas/match-case.html" },
        { id: "excepciones", title: "Manejo de excepciones", icon: "fas fa-bug", file: "temas/excepciones.html" }
      ]
    },
    {
      title: "🔁 ESTRUCTURAS DE REPETICIÓN (CICLOS)",
      icon: "fas fa-sync-alt",
      lessons: [
        { id: "for", title: "Ciclo for", icon: "fas fa-sync-alt", file: "temas/for.html" },
        { id: "while", title: "Ciclo while", icon: "fas fa-redo-alt", file: "temas/while.html" }
      ]
    },
    {
      title: "🔧 FUNCIONES",
      icon: "fas fa-puzzle-piece",
      lessons: [
        { id: "funciones", title: "Introducción a funciones", icon: "fas fa-puzzle-piece", file: "temas/funciones.html" }
      ]
    },
    {
      title: "🧰 LIBRERÍAS BÁSICAS DE PYTHON",
      icon: "fas fa-toolbox",
      lessons: [
        { id: "librerias-basicas", title: "Librería math, calendar, tabulate", icon: "fas fa-toolbox", file: "temas/librerias-basicas.html" }
      ]
    },
    {
      title: "📈 GRÁFICAS EN PYTHON",
      icon: "fas fa-chart-line",
      lessons: [
        { id: "graficas", title: "matplotlib, plotly, seaborn", icon: "fas fa-chart-line", file: "temas/graficas.html" }
      ]
    },
    {
      title: "📂 ARCHIVOS",
      icon: "fas fa-folder-open",
      lessons: [
        { id: "archivos", title: "Lectura y escritura de archivos", icon: "fas fa-folder-open", file: "temas/archivos.html" }
      ]
    },
    {
      title: "🧱 PROGRAMACIÓN ORIENTADA A OBJETOS",
      icon: "fas fa-cube",
      lessons: [
        { id: "poo", title: "Clases, atributos y métodos", icon: "fas fa-cube", file: "temas/poo.html" }
      ]
    },
    {
      title: "🧪 LIBRERÍAS CIENTÍFICAS",
      icon: "fas fa-flask",
      lessons: [
        { id: "numpy", title: "NumPy", icon: "fas fa-square-root-alt", file: "temas/numpy.html" },
        { id: "sympy", title: "SymPy", icon: "fas fa-superscript", file: "temas/sympy.html" },
        { id: "scipy", title: "SciPy", icon: "fas fa-flask", file: "temas/scipy.html" }
      ]
    },
    {
      title: "🖥️ INTERFACES GRÁFICAS",
      icon: "fas fa-window-restore",
      lessons: [
        { id: "tkinter", title: "Tkinter", icon: "fas fa-window-restore", file: "temas/tkinter.html" }
      ]
    },
    {
      title: "🌐 PÁGINAS WEB CON PYTHON",
      icon: "fas fa-globe",
      lessons: [
        { id: "flask", title: "Introducción a Flask", icon: "fab fa-python", file: "temas/flask.html" },
        { id: "django", title: "Introducción a Django", icon: "fas fa-network-wired", file: "temas/django.html" }
      ]
    }
  ]
};

// ==========================================
// ⚙️ ESTADO DE LA APLICACIÓN
// ==========================================
let currentLessonId = null;
let sidebarOpen = window.innerWidth > 768;
let isDarkMode = false;

// ==========================================
// 🎉 INICIALIZACIÓN DE LA APLICACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM completamente cargado y analizado.');
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      console.log('✅ Loader oculto.');
    }
    initializeApp();
  }, 800);
});

function initializeApp() {
  console.log('🚀 Inicializando aplicación...');
  loadTheme();
  setupEventListeners();
  
  const initialLessonId = getInitialLessonId();
  if (initialLessonId) {
    loadLesson(initialLessonId);
  } else {
    loadWelcomeContent();
  }

  if (typeof hljs !== 'undefined') {
    console.log('✨ Highlight.js listo.');
  }
  console.log('👍 Aplicación inicializada.');
}

function getInitialLessonId() {
  if (window.location.hash) {
    const lessonIdFromHash = window.location.hash.substring(1);
    for (const section of courseData.sections) {
      if (section.lessons.some(lesson => lesson.id === lessonIdFromHash)) {
        console.log(`📌 Lección inicial desde URL hash: ${lessonIdFromHash}`);
        return lessonIdFromHash;
      }
    }
  }

  const savedLessonId = localStorage.getItem('currentLessonId');
  if (savedLessonId) {
     for (const section of courseData.sections) {
      if (section.lessons.some(lesson => lesson.id === savedLessonId)) {
        console.log(`📌 Lección inicial desde localStorage: ${savedLessonId}`);
        return savedLessonId;
      }
    }
  }

  if (courseData.sections.length > 0 && courseData.sections[0].lessons.length > 0) {
    const firstLessonId = courseData.sections[0].lessons[0].id;
    console.log(`📌 Lección inicial por defecto: ${firstLessonId}`);
    return firstLessonId;
  }
  
  return null;
}

// ==========================================
// 🎨 GESTIÓN DEL TEMA (MODO OSCURO/CLARO)
// ==========================================
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    isDarkMode = (savedTheme === 'dark');
    console.log(`🌓 Tema cargado desde localStorage: ${isDarkMode ? 'Oscuro' : 'Claro'}`);
  } else {
    isDarkMode = false;
    localStorage.setItem('theme', 'light');
    console.log('💡 Primera visita. Estableciendo tema claro por defecto.');
  }
  
  applyTheme();
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  applyTheme();
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  console.log(`🌓 Tema cambiado a: ${isDarkMode ? 'Oscuro' : 'Claro'}`);
}

function applyTheme() {
  const body = document.body;
  const themeToggleButton = document.getElementById('theme-toggle');
  const themeIcon = themeToggleButton ? themeToggleButton.querySelector('i') : null;
  const themeText = themeToggleButton ? themeToggleButton.querySelector('span') : null;

  body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  
  if (themeToggleButton) {
    if (themeIcon) {
      themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
    if (themeText) {
      themeText.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
    }
  }
}

// ==========================================
// 📖 GESTIÓN DE CONTENIDO: CARGA DE LECCIONES
// ==========================================
async function loadLesson(lessonId) {
  console.log(`🔄 Intentando cargar lección con ID: ${lessonId}`);
  const contentArea = document.getElementById('content-area');
  if (!contentArea) {
    console.error('❌ Área de contenido #content-area no encontrada.');
    return;
  }

  let lessonToLoad = null;
  let sectionOfLesson = null;

  for (const section of courseData.sections) {
    const found = section.lessons.find(lesson => lesson.id === lessonId);
    if (found) {
      lessonToLoad = found;
      sectionOfLesson = section;
      break;
    }
  }

  if (!lessonToLoad) {
    console.error(`❌ Lección con ID "${lessonId}" no encontrada en courseData.`);
    contentArea.innerHTML = `<div class="content-section"><p style="color:red;">Error: Lección no encontrada.</p></div>`;
    return;
  }

  currentLessonId = lessonId;
  localStorage.setItem('currentLessonId', lessonId);
  window.location.hash = lessonId;

  contentArea.innerHTML = `<div class="content-section"><p><i class="fas fa-spinner fa-spin"></i> Cargando "${lessonToLoad.title}"...</p></div>`;

  try {
    const response = await fetch(lessonToLoad.file);
    if (!response.ok) {
      throw new Error(`Error al cargar el archivo: ${response.status} ${response.statusText} para ${lessonToLoad.file}`);
    }
    const htmlContent = await response.text();
    
    const lessonTitleHTML = `
      <h2 class="content-title">
        <i class="${lessonToLoad.icon || sectionOfLesson.icon}"></i> 
        ${lessonToLoad.title}
      </h2>
      <p class="content-text" style="color: var(--text-muted); font-size: var(--font-size-sm);">
        Sección: ${sectionOfLesson.title.replace(/<i[^>]*><\/i>|📁|⚙️|🧺|🧠|🔁|🔧|🧰|📈|📂|🧱|🧪|🖥️|🌐/g, '').trim()}
      </p>
      <hr style="margin-bottom: var(--spacing-lg); border-color: var(--border-color);">
    `;

    contentArea.innerHTML = `<div class="content-section">${lessonTitleHTML}${htmlContent}</div>`;

    const [filePathOnly, anchor] = lessonToLoad.file.split('#');
    if (anchor) {
      setTimeout(() => {
        const targetElement = document.getElementById(anchor);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          console.log(`🔗 Desplazado al ancla: #${anchor}`);
        } else {
          console.warn(`⚠️ Ancla #${anchor} no encontrada. Desplazando al inicio.`);
          contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (typeof hljs !== 'undefined') {
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
      console.log('🎨 Código resaltado con highlight.js.');
    }
    if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
      MathJax.typesetPromise([contentArea])
        .then(() => console.log('📐 Fórmulas procesadas con MathJax.'))
        .catch(err => console.error('❌ Error con MathJax:', err));
    }

    updateActiveMenuItem(lessonId);
    if (window.innerWidth <= 768 && sidebarOpen) {
      closeSidebar();
    }

  } catch (error) {
    console.error('❌ Error al cargar o procesar la lección:', error);
    contentArea.innerHTML = `
      <div class="content-section">
        <h2 class="content-title" style="color: red;"><i class="fas fa-exclamation-triangle"></i> Error al Cargar Lección</h2>
        <p>No se pudo cargar el contenido para "${lessonToLoad.title}".</p>
        <p>Detalle: ${error.message}</p>
        <p>Por favor, verifica que el archivo <code>${lessonToLoad.file}</code> exista y sea accesible.</p>
      </div>`;
  }
}

function updateActiveMenuItem(lessonId) {
  document.querySelectorAll('#sidebar-menu .menu-item').forEach(item => {
    item.classList.remove('active');
    const itemLessonId = item.getAttribute('data-lesson-id');
    if (itemLessonId === lessonId) {
      item.classList.add('active');
    }
  });
  console.log(`🎯 Lección activa marcada en el menú: ${lessonId}`);
}

function loadWelcomeContent() {
  const contentArea = document.getElementById('content-area');
  if (!contentArea) return;
  
  console.log('🏠 Contenido de bienvenida ya presente.');
}

// ==========================================
// ↔️ SIDEBAR: MOSTRAR/OCULTAR
// ==========================================
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const overlay = document.getElementById('sidebar-overlay');

  if (!sidebar || !mainContent || !overlay) return;

  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('open', sidebarOpen);
    overlay.classList.toggle('active', sidebarOpen);
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
  } else {
    sidebar.classList.toggle('collapsed', !sidebarOpen); 
    mainContent.classList.toggle('sidebar-collapsed', !sidebarOpen);
  }
  console.log(`Sidebar ${sidebarOpen ? 'abierto' : 'cerrado'}.`);
}

function closeSidebar() {
  if (!sidebarOpen && window.innerWidth <= 768) return;
  
  sidebarOpen = false;
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const overlay = document.getElementById('sidebar-overlay');

  if (sidebar) {
    sidebar.classList.remove('open');
    if (window.innerWidth > 768) {
        sidebar.classList.remove('collapsed');
    } else {
        sidebar.classList.add('collapsed');
    }
  }
  if (mainContent && window.innerWidth > 768) {
    mainContent.classList.remove('sidebar-collapsed');
  }
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
  console.log('🚪 Sidebar cerrado.');
}

// ==========================================
// 🎧 EVENT LISTENERS (ESCUCHADORES DE EVENTOS)
// ==========================================
function setupEventListeners() {
  // Botones para toggle del sidebar
  document.getElementById('sidebar-toggle')?.addEventListener('click', toggleSidebar);
  document.getElementById('mobile-menu-toggle')?.addEventListener('click', toggleSidebar);
  document.getElementById('sidebar-overlay')?.addEventListener('click', closeSidebar);

  // Botón para cambiar tema
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

  // === CONFIGURACIÓN MEJORADA PARA ITEMS DEL MENÚ ===
  const menuItems = document.querySelectorAll('#sidebar-menu .menu-item');
  console.log(`🔍 Encontrados ${menuItems.length} items del menú`);
  
  menuItems.forEach((item, index) => {
    // Primero, verificar si ya tiene data-lesson-id
    let lessonIdToLoad = item.getAttribute('data-lesson-id');
    
    // Si no tiene data-lesson-id, intentar encontrarlo por el href
    if (!lessonIdToLoad) {
      const lessonFile = item.getAttribute('href');
      console.log(`📁 Procesando item ${index}: ${lessonFile}`);
      
      for (const section of courseData.sections) {
        const lesson = section.lessons.find(l => l.file === lessonFile);
        if (lesson) {
          lessonIdToLoad = lesson.id;
          item.setAttribute('data-lesson-id', lessonIdToLoad);
          console.log(`✅ Asignado data-lesson-id="${lessonIdToLoad}" a ${lessonFile}`);
          break;
        }
      }
    }

    // Configurar el event listener si encontramos un ID válido
    if (lessonIdToLoad) {
      // Remover cualquier listener previo (evitar duplicados)
      item.removeEventListener('click', handleMenuClick);
      
      // Agregar el nuevo listener
      item.addEventListener('click', handleMenuClick);
      console.log(`🎧 Event listener agregado para: ${lessonIdToLoad}`);
    } else {
      console.warn(`⚠️ No se encontró ID para el archivo: ${item.getAttribute('href')}`);
    }
  });

  // Eventos de ventana
  window.addEventListener('resize', handleResize);
  document.addEventListener('keydown', handleKeyNavigation);
  window.addEventListener('hashchange', handleHashChange);

  console.log('🎧 Event listeners configurados.');
}

// Función separada para manejar clics en el menú
function handleMenuClick(event) {
  event.preventDefault(); // ¡CRUCIAL! Evita la navegación normal
  event.stopPropagation(); // Evita propagación del evento
  
  const lessonId = event.currentTarget.getAttribute('data-lesson-id');
  console.log(`🖱️ Clic en menú detectado para: ${lessonId}`);
  
  if (lessonId) {
    loadLesson(lessonId);
  } else {
    console.error('❌ No se encontró data-lesson-id en el elemento clickeado');
  }
}

function handleHashChange() {
  console.log('🔄 Hash de URL cambiado.');
  const lessonIdFromHash = window.location.hash.substring(1);
  if (lessonIdFromHash && lessonIdFromHash !== currentLessonId) {
     for (const section of courseData.sections) {
      if (section.lessons.some(lesson => lesson.id === lessonIdFromHash)) {
        loadLesson(lessonIdFromHash);
        return;
      }
    }
    console.warn(`⚠️ ID de lección del hash "${lessonIdFromHash}" no es válido.`);
  } else if (!lessonIdFromHash && currentLessonId) {
    loadWelcomeContent();
  }
}

function handleResize() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const overlay = document.getElementById('sidebar-overlay');

  if (!sidebar || !mainContent || !overlay) return;

  if (window.innerWidth > 768) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (sidebarOpen) {
        sidebar.classList.remove('collapsed');
        mainContent.classList.remove('sidebar-collapsed');
    } else {
        sidebar.classList.add('collapsed');
        mainContent.classList.add('sidebar-collapsed');
    }
    sidebar.classList.remove('open');
  } else {
    if (!sidebarOpen) {
        sidebar.classList.add('collapsed');
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
  }
}

function handleKeyNavigation(event) {
  if (event.key === 'Escape' && window.innerWidth <= 768 && sidebarOpen) {
    closeSidebar();
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    toggleSidebar();
  }
}

// ==========================================
// 🌐 GLOBAL: Hacer funciones accesibles desde HTML
// ==========================================
window.loadLesson = loadLesson;

console.log('🏁 Script del curso completamente evaluado.');