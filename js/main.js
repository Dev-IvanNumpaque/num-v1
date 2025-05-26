// Funciones principales
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de componentes
    initializeComponents();
    
    // Configuración de animaciones
    setupAnimations();
    
    // Manejadores de eventos
    setupEventListeners();
});

// Inicialización de componentes de la interfaz
function initializeComponents() {
    // Aquí puedes agregar la inicialización de tus componentes personalizados
    console.log('Componentes inicializados');
}

// Configuración de animaciones
function setupAnimations() {
    // Animación de scroll horizontal para el título principal
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to('.hero-main-title', {
        x: '-60%', // Mueve el título hacia la izquierda
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-main-title',
            start: 'top left', // Inicia la animación cuando el título está en la parte superior de la ventana
            end: 'bottom top', //
            scrub: true, // Valor más alto = movimiento más lento
        }
    });

    // Animación de desplazamiento vertical para las imágenes
    gsap.to('.hero-images.left', {
        y: '-100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-wrapper',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    });

    gsap.to('.hero-images.right-slide', {
        y: '-100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-wrapper',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    });

    // Animación del fade-gradient y la sección for-logo
    gsap.fromTo('.fade-gradient', 
        {
            x: '-100%', // Posición inicial: cubre todo desde la izquierda
            width: '200%' // Asegura que cubra todo el ancho
        },
        {
            x: '100%', // Posición final: se mueve completamente a la derecha
            ease: 'none',
            scrollTrigger: {
                trigger: '.section.for-logo',
                start: ' bottom left',
                end: 'center center',
                scrub: true,
            }
        }
    );

    gsap.to('.section.for-logo', {
        y: '-30%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.section.for-logo',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        }
    });

    // Otras animaciones existentes
    const funNumbers = document.querySelectorAll('.fun-number');
    funNumbers.forEach(number => {
        animateNumber(number);
    });
}

// Configuración de event listeners
function setupEventListeners() {
    // Agrega tus event listeners personalizados aquí
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
}

// Función de ejemplo para animar números
function animateNumber(element) {
    // Implementa tu lógica de animación aquí
    console.log('Animando número:', element.textContent);
}

// Manejador de eventos para links
function handleLinkClick(e) {
    // Implementa tu lógica personalizada para los clicks en links
    console.log('Link clicked:', e.target.href);
}