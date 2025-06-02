// ==========================================
// 📜 CONFIGURACIÓN Y DATOS DEL CURSO
// Define la estructura y contenido del curso.
// ==========================================

const courseData = {
  sections: [
    {
      title: "📁 BIENVENIDA Y FUNDAMENTOS", // Emoji añadido para consistencia visual con el HTML
      icon: "fas fa-door-open", // Icono de la sección
      lessons: [
        { id: "introduccion", title: "Introducción al Curso", icon: "fas fa-info-circle", file: "temas/introduccion.html" },
        { id: "google-colab", title: "Uso de Google Colab", icon: "fab fa-google", file: "temas/google-colab.html" },
        { id: "markdown", title: "Sintaxis Markdown", icon: "fas fa-paragraph", file: "temas/markdown.html" },
        { id: "latex", title: "Introducción a LaTeX", icon: "fas fa-subscript", file: "temas/latex.html" },
        { id: "instalacion", title: "Instalación y Entornos", icon: "fas fa-laptop-code", file: "temas/instalacion.html" }
      ]
    },
    {
      title: "⚙️ PRIMEROS PASOS",
      icon: "fas fa-seedling",
      lessons: [
        // NOTA: El archivo original 'temas/operadores.html' se dividirá o se crearán archivos individuales.
        // Por ahora, asumimos archivos individuales según el nuevo menú.
        { id: "hola-mundo", title: "Hola Mundo", icon: "fas fa-terminal", file: "temas/hola-mundo.html" }, // Archivo individual
        { id: "comentarios-estilo", title: "Comentarios y Estilo de Código", icon: "fas fa-comment-dots", file: "temas/comentarios-estilo.html" }, // Archivo individual
        { id: "variables-tipos", title: "Variables y Tipos de Datos", icon: "fas fa-font", file: "temas/variables-tipos.html" }, // Archivo individual
        { id: "entrada-salida", title: "Entrada y Salida de Datos", icon: "fas fa-keyboard", file: "temas/entrada-salida.html" }, // Archivo individual
        { id: "operadores", title: "Operadores en Python", icon: "fas fa-equals", file: "temas/operadores.html" } // Archivo general de operadores
      ]
    },
    {
      title: "🧺 COLECCIONES Y ESTRUCTURAS DE DATOS",
      icon: "fas fa-layer-group",
      lessons: [
        { id: "listas", title: "Listas", icon: "fas fa-list", file: "temas/listas.html" },
        { id: "tuplas", title: "Tuplas", icon: "fas fa-stream", file: "temas/tuplas.html" }, // Icono cambiado para diferenciar
        { id: "conjuntos", title: "Conjuntos (sets)", icon: "fas fa-object-ungroup", file: "temas/conjuntos.html" }, // Icono cambiado
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
      icon: "fas fa-globe", // Icono general para la sección
      lessons: [
        { id: "flask", title: "Introducción a Flask", icon: "fab fa-python", file: "temas/flask.html" }, // Icono específico de Python/Flask
        { id: "django", title: "Introducción a Django", icon: "fas fa-network-wired", file: "temas/django.html" }
      ]
    }
  ]
};

// ==========================================
// ⚙️ ESTADO DE LA APLICACIÓN
// Variables globales para mantener el estado.
// ==========================================
let currentLessonId = null; // ID de la lección actualmente cargada
let sidebarOpen = window.innerWidth > 768; // Sidebar abierto por defecto en desktop
let isDarkMode = false;   // Estado del tema (oscuro/claro)

// ==========================================
// 🎉 INICIALIZACIÓN DE LA APLICACIÓN
// Se ejecuta cuando el DOM está completamente cargado.
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM completamente cargado y analizado.');
  // Esperar un poco para que se vean las animaciones del loader y asegurar que otros recursos se carguen.
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      console.log('✅ Loader oculto.');
    }
    initializeApp();
  }, 800); // 800ms de espera, puedes ajustarlo.
});

/**
 * Función principal para inicializar la aplicación.
 */
function initializeApp() {
  console.log('🚀 Inicializando aplicación...');
  loadTheme();             // Carga el tema guardado (oscuro/claro)
  // generateSidebarMenu(); // Ya no se genera desde JS, el menú está en index.html
  setupEventListeners();     // Configura todos los event listeners
  
  // Cargar una lección inicial (por ejemplo, la introducción o la primera de courseData)
  // O la lección guardada en localStorage, o a partir de la URL (hash)
  const initialLessonId = getInitialLessonId();
  if (initialLessonId) {
    loadLesson(initialLessonId);
  } else {
    loadWelcomeContent(); // Muestra contenido de bienvenida si no hay lección inicial
  }

  if (typeof hljs !== 'undefined') {
    // hljs.highlightAll(); // Se llamará después de cargar cada lección
    console.log('✨ Highlight.js listo.');
  }
  console.log('👍 Aplicación inicializada.');
}

/**
 * Determina la lección inicial a cargar.
 * Puede ser por hash en la URL, localStorage, o la primera lección.
 */
function getInitialLessonId() {
  // Prioridad 1: Hash en la URL (ej. #google-colab)
  if (window.location.hash) {
    const lessonIdFromHash = window.location.hash.substring(1); // Quita el #
    // Validar que el lessonId exista en courseData
    for (const section of courseData.sections) {
      if (section.lessons.some(lesson => lesson.id === lessonIdFromHash)) {
        console.log(`📌 Lección inicial desde URL hash: ${lessonIdFromHash}`);
        return lessonIdFromHash;
      }
    }
  }

  // Prioridad 2: Lección guardada en localStorage (si se implementa)
  const savedLessonId = localStorage.getItem('currentLessonId');
  if (savedLessonId) {
     for (const section of courseData.sections) {
      if (section.lessons.some(lesson => lesson.id === savedLessonId)) {
        console.log(`📌 Lección inicial desde localStorage: ${savedLessonId}`);
        return savedLessonId;
      }
    }
  }

  // Prioridad 3: La primera lección del curso si existe
  if (courseData.sections.length > 0 && courseData.sections[0].lessons.length > 0) {
    const firstLessonId = courseData.sections[0].lessons[0].id;
    console.log(`📌 Lección inicial por defecto: ${firstLessonId}`);
    return firstLessonId;
  }
  
  return null; // No hay lección inicial que cargar
}


// ==========================================
// 🎨 GESTIÓN DEL TEMA (MODO OSCURO/CLARO)
// ==========================================
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  // Si no hay tema guardado y el usuario prefiere oscuro, usar oscuro.
  if (savedTheme === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode = true;
  } else {
    isDarkMode = savedTheme === 'dark';
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
  if (themeIcon) {
    themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
  }
  if (themeText) {
    themeText.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
  }
}

// ==========================================
// 📖 GESTIÓN DE CONTENIDO: CARGA DE LECCIONES
// ==========================================
/**
 * Carga el contenido de una lección en el área principal.
 * @param {string} lessonId - El ID de la lección a cargar (debe existir en courseData).
 */
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
    // Opcionalmente, cargar un mensaje de bienvenida o la introducción
    // if (lessonId !== courseData.sections[0].lessons[0].id) { // Evitar bucle si la intro falla
    //   loadLesson(courseData.sections[0].lessons[0].id); 
    // }
    return;
  }

  currentLessonId = lessonId;
  localStorage.setItem('currentLessonId', lessonId); // Guardar la lección actual
  window.location.hash = lessonId; // Actualizar el hash de la URL

  // Mostrar un mensaje de carga temporal
  contentArea.innerHTML = `<div class="content-section"><p><i class="fas fa-spinner fa-spin"></i> Cargando "${lessonToLoad.title}"...</p></div>`;

  try {
    const response = await fetch(lessonToLoad.file);
    if (!response.ok) {
      throw new Error(`Error al cargar el archivo: ${response.status} ${response.statusText} para ${lessonToLoad.file}`);
    }
    const htmlContent = await response.text();
    
    // Crear un título para la lección dentro del área de contenido
    // Usar el ícono de la lección y el título de la sección/lección
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

    // Scroll al inicio del área de contenido o al ancla específica
    const [filePathOnly, anchor] = lessonToLoad.file.split('#');
    if (anchor) {
      setTimeout(() => { // Dar tiempo para que el DOM se actualice
        const targetElement = document.getElementById(anchor);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          console.log(`🔗 Desplazado al ancla: #${anchor}`);
        } else {
          console.warn(`⚠️ Ancla #${anchor} no encontrada en ${lessonToLoad.file}. Desplazando al inicio.`);
          contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Pequeña demora
    } else {
      contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Re-inicializar resaltado de código y MathJax
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
    // Cerrar sidebar en móviles después de cargar la lección
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


/**
 * Marca el ítem del menú actual como activo.
 * @param {string} lessonId - El ID de la lección activa.
 */
function updateActiveMenuItem(lessonId) {
  document.querySelectorAll('#sidebar-menu .menu-item').forEach(item => {
    item.classList.remove('active');
    // Comparamos el data-lesson-id (que deberíamos añadir al HTML del menú) o parte del href
    const itemLessonId = item.getAttribute('data-lesson-id');
    if (itemLessonId === lessonId) {
      item.classList.add('active');
    }
  });
  console.log(`🎯 Lección activa marcada en el menú: ${lessonId}`);
}

/**
 * Carga el contenido de bienvenida inicial en el área de contenido.
 */
function loadWelcomeContent() {
  const contentArea = document.getElementById('content-area');
  if (!contentArea) return;
  
  // El contenido de bienvenida ya está en el index.html, 
  // solo nos aseguramos que no haya una lección específica cargada por defecto.
  // Si quisiéramos cargarlo dinámicamente:
  /*
  contentArea.innerHTML = `
    <div class="content-section welcome-message"> // Asegúrate que .welcome-message tenga estilos apropiados
      <h2><i class="fas fa-home"></i> Bienvenido al Curso de Python</h2>
      <p class="content-text">
        Explora el menú de la izquierda y selecciona un tema para comenzar.
      </p>
      <div style="text-align: center; margin-top: var(--spacing-lg);">
        <button class="btn btn-primary" onclick="loadLesson('introduccion')">
          <i class="fas fa-play"></i>
          Comenzar el Curso
        </button>
      </div>
    </div>
  `;
  */
  // Como el mensaje de bienvenida ya está en index.html, solo hacemos log.
  console.log('🏠 Contenido de bienvenida ya presente o gestionado por getInitialLessonId.');
  // Si `getInitialLessonId` no devuelve nada, el contenido de bienvenida del HTML se mostrará.
}

// ==========================================
// ↔️ SIDEBAR: MOSTRAR/OCULTAR
// ==========================================
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const overlay = document.getElementById('sidebar-overlay'); // Para móviles

  if (!sidebar || !mainContent || !overlay) return;

  if (window.innerWidth <= 768) { // Comportamiento móvil
    sidebar.classList.toggle('open', sidebarOpen);
    overlay.classList.toggle('active', sidebarOpen);
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''; // Evitar scroll del body
  } else { // Comportamiento desktop
    // En desktop, 'collapsed' significa que está OCULTO (translateX(-100%))
    // Y 'sidebar-collapsed' en main-content significa que el margen izquierdo es 0.
    sidebar.classList.toggle('collapsed', !sidebarOpen); 
    mainContent.classList.toggle('sidebar-collapsed', !sidebarOpen);
  }
  console.log(` Sidebar ${sidebarOpen ? 'abierto' : 'cerrado'}.`);
}

function closeSidebar() { // Específicamente para cerrar, útil en móviles
  if (!sidebarOpen && window.innerWidth <= 768) return; // Ya está cerrado en móvil
  
  sidebarOpen = false;
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const overlay = document.getElementById('sidebar-overlay');

  if (sidebar) {
    sidebar.classList.remove('open'); // Para móviles
    if (window.innerWidth > 768) { // En desktop, asegurarse que no esté colapsado si debe estar visible
        sidebar.classList.remove('collapsed');
    } else {
        sidebar.classList.add('collapsed'); // Asegurar que esté colapsado en móvil
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

  // --- Configurar listeners para los items del menú ---
  // Esto es crucial si el menú es estático en index.html
  const menuItems = document.querySelectorAll('#sidebar-menu .menu-item');
  menuItems.forEach(item => {
    // El href contiene la ruta del archivo, que coincide con `lesson.file` en `courseData`
    // O podemos añadir un atributo `data-lesson-id` a cada `<a>` tag en el HTML
    // Ejemplo: <a href="temas/introduccion.html" class="menu-item" data-lesson-id="introduccion">...</a>
    const lessonFile = item.getAttribute('href'); // ej: "temas/introduccion.html"
    // Para usar loadLesson(lessonId), necesitamos encontrar el ID correspondiente a este archivo.
    let lessonIdToLoad = null;
    for (const section of courseData.sections) {
        const lesson = section.lessons.find(l => l.file === lessonFile);
        if (lesson) {
            lessonIdToLoad = lesson.id;
            item.setAttribute('data-lesson-id', lessonIdToLoad); // Añadir para updateActiveMenuItem
            break;
        }
    }

    if (lessonIdToLoad) {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar navegación normal del enlace
            loadLesson(lessonIdToLoad);
        });
    } else {
        console.warn(`No se encontró ID para el archivo: ${lessonFile} en el menú.`);
    }
  });
  // --- Fin configuración listeners para items del menú ---

  // Eventos de ventana
  window.addEventListener('resize', handleResize);
  document.addEventListener('keydown', handleKeyNavigation);
  window.addEventListener('hashchange', handleHashChange); // Para navegar con botones de atrás/adelante del navegador

  console.log('🎧 Event listeners configurados.');
}

/**
 * Maneja el cambio de hash en la URL para cargar la lección correspondiente.
 */
function handleHashChange() {
  console.log('🔄 Hash de URL cambiado.');
  const lessonIdFromHash = window.location.hash.substring(1);
  if (lessonIdFromHash && lessonIdFromHash !== currentLessonId) {
    // Validar que el lessonId exista antes de cargar
     for (const section of courseData.sections) {
      if (section.lessons.some(lesson => lesson.id === lessonIdFromHash)) {
        loadLesson(lessonIdFromHash);
        return; // Lección encontrada y cargada
      }
    }
    console.warn(`⚠️ ID de lección del hash "${lessonIdFromHash}" no es válido o ya está cargado.`);
  } else if (!lessonIdFromHash && currentLessonId) {
    // Si el hash se elimina, cargar contenido de bienvenida o la primera lección
    loadWelcomeContent(); // O la primera lección
  }
}


/**
 * Maneja el redimensionamiento de la ventana para ajustar el sidebar.
 */
function handleResize() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const overlay = document.getElementById('sidebar-overlay');

  if (!sidebar || !mainContent || !overlay) return;

  if (window.innerWidth > 768) {
    // Escritorio
    overlay.classList.remove('active'); // Ocultar overlay
    document.body.style.overflow = '';   // Restaurar scroll del body
    // Si el sidebar estaba pensado para estar abierto en desktop por defecto:
    if (sidebarOpen) { // Si el estado global dice que debería estar abierto
        sidebar.classList.remove('collapsed');
        mainContent.classList.remove('sidebar-collapsed');
    } else { // Si el estado global dice que debería estar cerrado
        sidebar.classList.add('collapsed');
        mainContent.classList.add('sidebar-collapsed');
    }
    sidebar.classList.remove('open'); // 'open' es solo para la superposición móvil
  } else {
    // Móvil: si estaba abierto con overlay, mantenerlo. Si no, asegurar que esté colapsado.
    if (!sidebarOpen) {
        sidebar.classList.add('collapsed'); // Asegurar que esté listo para 'open'
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    // El estado 'open' y 'active' del overlay se maneja en toggleSidebar/closeSidebar para móviles
  }
}

/**
 * Maneja la navegación por teclado (ej. Escape para cerrar sidebar).
 */
function handleKeyNavigation(event) {
  if (event.key === 'Escape' && window.innerWidth <= 768 && sidebarOpen) {
    closeSidebar();
  }
  // Atajo Ctrl+K o Cmd+K para toggle sidebar
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    toggleSidebar();
  }
}

// ==========================================
// 🌐 GLOBAL: Hacer funciones importantes accesibles desde HTML (si es necesario)
// ==========================================
// La función loadLesson es llamada por el botón "Comenzar" en index.html
// y por los items del menú generados dinámicamente.
// Si el menú es estático en HTML, los event listeners se encargarán.
// window.loadLesson = loadLesson; // No es estrictamente necesario si los listeners se añaden correctamente.
// Lo mantendremos por si acaso el botón "Comenzar" en el HTML sigue usando onclick="loadLesson(...)" con un ID.
// Actualización: El botón "Comenzar" en el HTML que te di llama a loadLesson('temas/introduccion.html').
// Adaptaremos el botón o la función. Por ahora, hagamos que loadLesson acepte ID.
window.loadLesson = loadLesson; // Necesario para el onclick del botón "Comenzar" si usa ID.

console.log('🏁 Script del curso completamente evaluado.');