// ==========================================
// CONFIGURACIÓN Y DATOS DEL CURSO (Actualizado)
// ==========================================

const courseData = {
  sections: [
    {
      title: "Bienvenida y Fundamentos",
      icon: "fas fa-door-open",
      lessons: [
        { id: "introduccion", title: "Introducción al Curso", icon: "fas fa-info-circle", file: "temas/introduccion.html" },
        { id: "google-colab", title: "Uso de Google Colab", icon: "fab fa-google", file: "temas/google-colab.html" },
        { id: "markdown", title: "Sintaxis Markdown", icon: "fas fa-paragraph", file: "temas/markdown.html" },
        { id: "latex", title: "Introducción a LaTeX", icon: "fas fa-subscript", file: "temas/latex.html" },
        { id: "instalacion", title: "Instalación y Entornos", icon: "fas fa-laptop-code", file: "temas/instalacion.html" }
      ]
    },
    {
      title: "Primeros Pasos",
      icon: "fas fa-seedling",
      lessons: [
        { id: "hola-mundo", title: "Hola Mundo", icon: "fas fa-terminal", file: "temas/hola-mundo.html" },
        { id: "comentarios", title: "Comentarios y Estilo de Código", icon: "fas fa-comment-dots", file: "temas/comentarios-estilo.html" },
        { id: "variables-tipos", title: "Variables y Tipos de Datos", icon: "fas fa-font", file: "temas/variables-tipos.html" },
        { id: "entrada-salida", title: "Entrada y Salida de Datos", icon: "fas fa-keyboard", file: "temas/entrada-salida.html" },
        { id: "operadores", title: "Operadores en Python", icon: "fas fa-equals", file: "temas/operadores.html" }
      ]
    },
    {
      title: "Colecciones y Estructuras de Datos",
      icon: "fas fa-layer-group",
      lessons: [
        { id: "listas", title: "Listas", icon: "fas fa-list", file: "temas/listas.html" },
        { id: "tuplas", title: "Tuplas", icon: "fas fa-stream", file: "temas/tuplas.html" },
        { id: "conjuntos", title: "Conjuntos (sets)", icon: "fas fa-layer-group", file: "temas/conjuntos.html" },
        { id: "diccionarios", title: "Diccionarios", icon: "fas fa-book", file: "temas/diccionarios.html" },
        { id: "deque", title: "Listas tipo deque", icon: "fas fa-warehouse", file: "temas/deque.html" }
      ]
    },
    {
      title: "Estructuras de Control",
      icon: "fas fa-code-branch",
      lessons: [
        { id: "condicionales", title: "Condicionales", icon: "fas fa-code-branch", file: "temas/condicionales.html" },
        { id: "match-case", title: "Estructura match-case", icon: "fas fa-random", file: "temas/match-case.html" },
        { id: "excepciones", title: "Manejo de Excepciones", icon: "fas fa-bug", file: "temas/excepciones.html" }
      ]
    },
    {
      title: "Estructuras de Repetición (Ciclos)",
      icon: "fas fa-sync-alt",
      lessons: [
        { id: "for", title: "Ciclo for", icon: "fas fa-sync-alt", file: "temas/for.html" },
        { id: "while", title: "Ciclo while", icon: "fas fa-redo-alt", file: "temas/while.html" }
      ]
    },
    {
      title: "Funciones",
      icon: "fas fa-puzzle-piece",
      lessons: [
        { id: "funciones", title: "Introducción a Funciones", icon: "fas fa-puzzle-piece", file: "temas/funciones.html" }
      ]
    },
    {
      title: "Librerías Básicas",
      icon: "fas fa-toolbox",
      lessons: [
        { id: "librerias-basicas", title: "math, calendar, tabulate", icon: "fas fa-toolbox", file: "temas/librerias-basicas.html" }
      ]
    },
    {
      title: "Gráficas",
      icon: "fas fa-chart-line",
      lessons: [
        { id: "graficas", title: "matplotlib, seaborn, plotly", icon: "fas fa-chart-line", file: "temas/graficas.html" }
      ]
    },
    {
      title: "Archivos",
      icon: "fas fa-folder-open",
      lessons: [
        { id: "archivos", title: "Lectura y Escritura", icon: "fas fa-folder-open", file: "temas/archivos.html" }
      ]
    },
    {
      title: "Programación Orientada a Objetos",
      icon: "fas fa-cube",
      lessons: [
        { id: "poo", title: "Clases y Objetos", icon: "fas fa-cube", file: "temas/poo.html" }
      ]
    },
    {
      title: "Librerías Científicas",
      icon: "fas fa-flask",
      lessons: [
        { id: "numpy", title: "NumPy", icon: "fas fa-square-root-alt", file: "temas/numpy.html" },
        { id: "sympy", title: "SymPy", icon: "fas fa-superscript", file: "temas/sympy.html" },
        { id: "scipy", title: "SciPy", icon: "fas fa-flask", file: "temas/scipy.html" }
      ]
    },
    {
      title: "Interfaces Gráficas",
      icon: "fas fa-window-restore",
      lessons: [
        { id: "tkinter", title: "Tkinter", icon: "fas fa-window-restore", file: "temas/tkinter.html" }
      ]
    },
    {
      title: "Páginas Web con Python",
      icon: "fas fa-globe",
      lessons: [
        { id: "flask", title: "Introducción a Flask", icon: "fab fa-python", file: "temas/flask.html" },
        { id: "django", title: "Introducción a Django", icon: "fas fa-network-wired", file: "temas/django.html" }
      ]
    }
  ]
};
