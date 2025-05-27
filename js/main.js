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
    // Inicializar la animación de logos
    const logoTracks = document.querySelectorAll('.logo-grid-track');
    
    logoTracks.forEach(track => {
        const tl = gsap.timeline({repeat: -1}); // Timeline para controlar la secuencia
        
        // Aseguramos que el primer logo esté visible al inicio
        gsap.set(track, {y: '0%'});
        
        tl.to(track, {
            y: '-33.33%', // Mover al segundo logo (ajustado para 3 logos)
            duration: 0.5,
            ease: 'power2.inOut'
        })
        .to(track, {
            duration: 4, // Pausa en el segundo logo
        })
        .to(track, {
            y: '-66.66%', // Mover al tercer logo (ajustado para 3 logos)
            duration: 0.5,
            ease: 'power2.inOut'
        })
        .to(track, {
            duration: 4, // Pausa en el tercer logo
        })
        .to(track, {
            y: '0%', // Volver al primer logo
            duration: 0.5,
            ease: 'power2.inOut'
        })
        .to(track, {
            duration: 4, // Pausa en el primer logo
        });
        
        // Iniciamos la animación después de un pequeño delay para asegurar que todo esté cargado
        tl.delay(0.1);
    });
    
    console.log('Componentes inicializados');
}

// Configuración de animaciones
function setupAnimations() {
    // Animación de scroll horizontal para el título principal
    gsap.registerPlugin(ScrollTrigger);

    // Efecto parallax para la imagen circular del equipo
    gsap.to('.image-wrap.cricle .paralax-image', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.image-wrap.cricle',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
        }
    });

    // Efecto fade gradient para testimonios y estadísticas
    gsap.utils.toArray('.testimonials-text, .fun-facts-grid .fun-number, .expertise-text').forEach(element => {
        const gradient = document.createElement('div');
        gradient.className = 'fade-gradient';
        Object.assign(gradient.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent 0%, black 10%, black 100%)',
            pointerEvents: 'none'
        });
        
        element.style.position = 'relative';
        element.appendChild(gradient);
        
        gsap.to(gradient, {
            x: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });

    // Efecto hover para el botón work with us
    const workWithUsBtn = document.querySelector('.fade-in-wrapper .button-3d');
    if (workWithUsBtn) {
        workWithUsBtn.addEventListener('mouseenter', () => {
            gsap.to(workWithUsBtn, {
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        workWithUsBtn.addEventListener('mouseleave', () => {
            gsap.to(workWithUsBtn, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.in'
            });
        });
    }

    // Efecto parallax para las imágenes de proyectos
    const projectImages = document.querySelectorAll('.paralax-image');
    
    projectImages.forEach(image => {
        gsap.to(image, {
            y: '20%',
            ease: 'none',
            scrollTrigger: {
                trigger: image.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
                toggleActions: 'play none none reverse'
            }
        });
    });
    
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
            scrub: -6,
        }
    });

    // Animación del fade-gradient y la sección for-logo
    gsap.fromTo('.fade-gradient', 
        {
            x: '-100%', // Posición inicial: cubre todo desde la izquierda
            width: '300%' // Asegura que cubra todo el ancho
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