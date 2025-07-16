document.addEventListener('DOMContentLoaded', () => {
    // --- MODELO DE DATOS (Preguntas Exhaustivas, Emparejadas y Balanceadas) ---
    const allQuestions = [
        // --- 1. Conceptos Fundamentales (Pág. 1) ---
        { type: 'mcq', question: '¿Cuál es el término para el soporte físico que facilita el transporte de información y es fundamental en la comunicación de datos?', options: ['Protocolo', 'Paquete de datos', 'Medio de transmisión', 'Señal digital'], answer: 'Medio de transmisión' },
        { type: 'fill', question: 'El soporte físico, como un cable o el aire, por donde viaja la señal de datos, se conoce como _______.', answer: 'Medio de transmisión' },
        { type: 'mcq', question: '¿Cuál es el propósito principal de trenzar los filamentos metálicos en los cables de pares trenzados?', options: ['Aumentar la flexibilidad', 'Reducir las interferencias', 'Disminuir el costo', 'Facilitar la conexión'], answer: 'Reducir las interferencias' },
        { type: 'fill', question: 'En los cables de red, los pares de filamentos metálicos se trenzan para reducir las _______.', answer: 'interferencias' },
        { type: 'mcq', question: '¿Qué dispositivo se utiliza para restablecer el nivel eléctrico de una señal y así extender la longitud efectiva de un cable?', options: ['Router', 'Repetidor', 'Transceptor', 'Switch'], answer: 'Repetidor' },
        { type: 'fill', question: 'Para evitar la degradación de la señal en tramos largos de cable, se instala un _______ que restablece su nivel eléctrico.', answer: 'Repetidor' },
        
        // --- 2. Tipos de Cable Par Trenzado (Pág. 1) ---
        { type: 'mcq', question: '¿Qué tipo de cable de par trenzado carece de recubrimiento metálico, lo que lo hace barato pero sensible a interferencias?', options: ['STP', 'UTP', 'Fibra Óptica', 'Coaxial'], answer: 'UTP' },
        { type: 'fill', question: 'El cable par trenzado no apantallado, más conocido por sus siglas _______, es flexible y económico.', answer: 'UTP' },
        { type: 'mcq', question: '¿Qué cable de par trenzado tiene un recubrimiento metálico conectado a tierra para protegerlo de interferencias externas?', options: ['UTP', 'STP', 'Cable Plano', 'Cable Paralelo'], answer: 'STP' },
        { type: 'fill', question: 'El cable par trenzado apantallado, o _______, ofrece mayor protección contra interferencias a un costo más elevado.', answer: 'STP' },

        // --- 3. Clasificaciones y Datos Clave de Cableado (Pág. 1) ---
        { type: 'mcq', question: 'En la clasificación de cables, ¿cuál de ellas (de 2 a 7) especifica las características eléctricas como atenuación e impedancia?', options: ['Las Clases', 'Las Series', 'Las Categorías', 'Los Niveles'], answer: 'Categorías' },
        { type: 'fill', question: 'Las _______ de un cable (2, 5e, 6, 7) determinan sus características eléctricas y rendimiento.', answer: 'Categorías' },
        { type: 'mcq', question: '¿Qué clasificación de cables (de A a F) se enfoca en definir las distancias permitidas, el ancho de banda y sus aplicaciones?', options: ['Las Normas', 'Las Clases', 'Las Secciones', 'Las Partidas'], answer: 'Las Clases' },
        { type: 'fill', question: 'Las _______ de un cable (A, B, C...) especifican el ancho de banda y las distancias máximas que puede cubrir.', answer: 'Clases' },
        { type: 'mcq', question: 'Según el texto, un porcentaje muy alto de los fallos en una red se deben a defectos en...', options: ['el software', 'el hardware del servidor', 'la configuración de los routers', 'el cableado'], answer: 'el cableado' },
        { type: 'fill', question: 'Es crucial no escatimar en la inversión de cables, ya que el 70% de los fallos de una red provienen del _______.', answer: 'cableado' },

        // --- 4. Fibra Óptica (Pág. 1 y 2) ---
        { type: 'mcq', question: '¿Cuál es la principal ventaja de la fibra óptica sobre los cables de cobre?', options: ['Es más barata', 'Es más flexible', 'Es inmune a interferencias electromagnéticas', 'Usa conectores universales'], answer: 'Es inmune a interferencias electromagnéticas' },
        { type: 'fill', question: 'Al transmitir señales de luz y ser de vidrio o plástico, la fibra óptica es insensible a la _______ electromagnética.', answer: 'interferencia' },
        { type: 'mcq', question: '¿Cuál es el componente central de la fibra óptica que actúa como conductor de la señal luminosa?', options: ['Revestimiento', 'Buffer', 'Núcleo', 'Cubierta protectora'], answer: 'Núcleo' },
        { type: 'fill', question: 'La señal de luz en una fibra óptica viaja a través de su componente central, llamado _______.', answer: 'núcleo' },
        { type: 'mcq', question: '¿Cuál de las siguientes es una desventaja notable de la fibra óptica?', options: ['Bajo rendimiento', 'Poco alcance', 'Su instalación es cara y es frágil', 'Es muy pesada'], answer: 'Su instalación es cara y es frágil' },
        { type: 'fill', question: 'A pesar de su alto rendimiento, la fibra óptica es considerada _______ y su instalación tiene un costo elevado.', answer: 'frágil' },
        { type: 'mcq', question: '¿Qué tipo de fibra óptica utiliza un núcleo estrecho para que la luz de un láser viaje en un único camino (ideal para largas distancias)?', options: ['Multimodo', 'Monomodo', 'Plástica', 'Coaxial'], answer: 'Monomodo' },
        { type: 'fill', question: 'La fibra _______ es ideal para comunicaciones de larga distancia porque la señal de luz viaja en un único y recto camino.', answer: 'Monomodo' },
        { type: 'mcq', question: '¿Qué tipo de fibra óptica utiliza luz de varios diodos láser que hacen reflexiones en las paredes internas del núcleo?', options: ['Monomodo', 'De Largo Alcance', 'Multimodo', 'Reflectante'], answer: 'Multimodo' },
        { type: 'fill', question: 'La fibra _______ permite el uso de fuentes de luz más económicas como los LED, pero es para distancias más cortas debido a la dispersión de la señal.', answer: 'Multimodo' },

        // --- 5. Sistemas Inalámbricos (Pág. 2) ---
        { type: 'mcq', question: '¿Cómo se llama el efecto físico que provoca que una señal inalámbrica rebote en paredes, techos o suelos?', options: ['Difracción', 'Dispersión', 'Refracción', 'Reflexión'], answer: 'Reflexión' },
        { type: 'fill', question: 'Cuando una señal Wi-Fi rebota en una pared, se produce el fenómeno de _______, que puede causar interferencias.', answer: 'Reflexión' },
        { type: 'mcq', question: '¿Qué efecto físico permite a una señal inalámbrica rodear obstáculos, pero provocando que llegue desfasada?', options: ['Reflexión', 'Difracción', 'Dispersión', 'Atenuación'], answer: 'Difracción' },
        { type: 'fill', question: 'La capacidad de una onda de radio para rodear una esquina o un edificio se conoce como _______.', answer: 'Difracción' },
        { type: 'mcq', question: '¿Qué efecto sufre una señal al esparcirse en varias direcciones cuando choca con partículas pequeñas, afectando su intensidad?', options: ['Dispersión', 'Rebote', 'Difracción', 'Canalización'], answer: 'Dispersión' },
        { type: 'fill', question: 'En un ambiente con niebla o polvo, una señal inalámbrica puede sufrir _______, afectando su claridad e intensidad.', answer: 'Dispersión' },
        
        // --- 6. Conectores (Pág. 2 y 3) ---
        { type: 'mcq', question: '¿Cuál es la función principal de los conectores en una red?', options: ['Amplificar la señal', 'Unir el cableado con los equipos de red', 'Proteger contra virus', 'Filtrar paquetes'], answer: 'Unir el cableado con los equipos de red' },
        { type: 'fill', question: 'Los _______ para redes actúan como la interfaz física que permite unir el cableado con los equipos.', answer: 'Conectores' },
        { type: 'mcq', question: '¿Qué tipo de conector se usa típicamente para cables UTP y STP en topologías en estrella?', options: ['BNC', 'RJ11', 'RJ45', 'DB9'], answer: 'RJ45' },
        { type: 'fill', question: 'El conector estándar para redes Ethernet que se usa en cables de par trenzado es el _______.', answer: 'RJ45' },
        { type: 'mcq', question: '¿Qué conector era comúnmente utilizado para conectar una estación en un bus de cable coaxial fino?', options: ['RJ45', 'BNC', 'DB15', 'SC'], answer: 'BNC' },
        { type: 'fill', question: 'El conector _______ con su mecanismo de giro y bloqueo, era el estándar para las antiguas redes de cable coaxial.', answer: 'BNC' },
        { type: 'mcq', question: 'Los conectores como el DB9 y DB25 se utilizan principalmente para la...', options: ['Fibra óptica', 'Transmisión en serie', 'Redes de alta velocidad', 'Alimentación eléctrica'], answer: 'Transmisión en serie' },
        { type: 'fill', question: 'Para la _______ en serie, como la de un puerto COM, se usan conectores como el DB9 o DB25.', answer: 'transmisión' },
        { type: 'mcq', question: '¿Qué conector de fibra óptica se caracteriza por requerir un giro para su inserción?', options: ['SC', 'FC', 'MT Array', 'ST'], answer: 'ST' },
        { type: 'fill', question: 'El conector de fibra óptica _______ se asegura mediante un mecanismo de bayoneta que requiere un giro.', answer: 'ST' },
        { type: 'mcq', question: '¿Qué conector de fibra óptica permite una conexión y desconexión rápida gracias a su mecanismo de inserción directa (push-pull)?', options: ['ST', 'SC', 'FC', 'BNC'], answer: 'SC' },
        { type: 'fill', question: 'El conector de fibra _______ se caracteriza por su facilidad de uso al ser de inserción y extracción directa (push-pull).', answer: 'SC' },

        // --- 7. Elementos Físicos de la Red (Pág. 3) ---
        { type: 'mcq', question: '¿Qué dispositivo adapta la señal de un cable coaxial o twinaxial para que pueda ser usada en un cable de par trenzado (UTP)?', options: ['Repetidor', 'Router', 'Balum', 'Switch'], answer: 'Balum' },
        { type: 'fill', question: 'Un _______ es un dispositivo que adapta las impedancias para conectar medios diferentes, como un cable coaxial a un UTP.', answer: 'Balum' },
        { type: 'mcq', question: '¿Cómo se llama el armario normalizado que guarda de manera ordenada los equipos y conexiones de la red?', options: ['Gabinete', 'Rack', 'Closet de Red', 'Armario de Servidor'], answer: 'Rack' },
        { type: 'fill', question: 'Los equipos de red como switches y patch panels se instalan de forma ordenada en un armario metálico llamado _______.', answer: 'Rack' },
        { type: 'mcq', question: '¿Cómo se llaman los cables cortos y flexibles que se usan para conectar los puertos del patch panel con los switches dentro de un rack?', options: ['Chicotes', 'Prolongadores', 'Latiguillos', 'Derivaciones'], answer: 'Latiguillos' },
        { type: 'fill', question: 'Para interconectar dispositivos dentro de un mismo rack o para conectar un PC a una roseta, se usan cables cortos llamados _______.', answer: 'Latiguillos' },
        { type: 'mcq', question: '¿Qué estructura metálica o plástica, adosada a una pared, se usa para proteger y organizar el cableado de red?', options: ['Tubo corrugado', 'Canaleta', 'Zócalo', 'Bandeja de red'], answer: 'Canaleta' },
        { type: 'fill', question: 'Para llevar el cableado de forma protegida y ordenada por paredes y techos se utilizan _______.', answer: 'Canaletas' },
        { type: 'mcq', question: '¿Qué elemento se instala en las canaletas o paredes para actuar como interfaz final entre el cableado de red y el latiguillo del dispositivo del usuario?', options: ['Placas de conectores y rosetas', 'Conectores RJ45', 'Terminadores', 'Jacks de red'], answer: 'Placas de conectores y rosetas' },
        { type: 'fill', question: 'El punto de conexión final en una pared, donde se conecta el cable de un ordenador, se denomina _______.', answer: 'Roseta' },
        { type: 'mcq', question: '¿Qué herramienta es indispensable para fijar ("ponchar") un conector RJ45 al extremo de un cable de par trenzado?', options: ['Alicate', 'Crimpadora', 'Pelacables', 'Llave de impacto'], answer: 'Crimpadora' },
        { type: 'fill', question: 'La herramienta que presiona los contactos de un conector RJ45 sobre los hilos del cable UTP se llama _______.', answer: 'Crimpadora' },

        // --- 8. Hardware de Red (NIC, Ethernet, PoE) (Pág. 3 y 4) ---
        { type: 'mcq', question: '¿Qué componente de hardware actúa como interfaz entre un ordenador y la red, conectándose a un slot del bus interno (PCI, USB...)?', options: ['Procesador', 'Disco Duro', 'Tarjeta de red', 'Memoria RAM'], answer: 'Tarjeta de red' },
        { type: 'fill', question: 'La _______ (o NIC) es el componente de hardware que permite a un dispositivo conectarse a una red.', answer: 'Tarjeta de red' },
        { type: 'mcq', question: '¿Qué software es esencial para que el sistema operativo pueda comunicarse y controlar el hardware de una tarjeta de red?', options: ['Firmware', 'BIOS', 'Antivirus', 'Controlador (Driver)'], answer: 'Controlador (Driver)' },
        { type:- 'fill', question: 'Para que una tarjeta de red funcione, es necesario instalar su _______ o driver específico en el sistema operativo.', answer: 'Controlador' },
        { type: 'mcq', question: 'El protocolo de acceso al medio usado por Ethernet (IEEE 802.3), donde los dispositivos "escuchan" antes de "hablar", es el:', options: ['Token Ring', 'CSMA/CD', 'ALOHA', 'Polling'], answer: 'CSMA/CD' },
        { type: 'fill', question: 'Ethernet utiliza el protocolo _______ para gestionar el acceso al medio y manejar las colisiones.', answer: 'CSMA/CD' },
        { type: 'mcq', question: 'En una red Ethernet, ¿qué ocurre cuando dos dispositivos transmiten datos al mismo tiempo en el mismo dominio?', options: ['Una negociación', 'Una latencia', 'Una colisión', 'Una desconexión'], answer: 'Una colisión' },
        { type: 'fill', question: 'Para evitar que afecten a toda la red, los dominios de _______ se segmentan usando switches o routers.', answer: 'colisión' },
        { type: 'mcq', question: '¿Qué tecnología de Ethernet permite suministrar energía eléctrica a un dispositivo (como una cámara IP) a través del mismo cable de red?', options: ['10BaseT', 'PoE', 'Gigabit Ethernet', 'Fast Ethernet'], answer: 'PoE' },
        { type: 'fill', question: 'La tecnología _______ (Power over Ethernet) simplifica las instalaciones al enviar datos y energía por el mismo cable.', answer: 'PoE' },

        // --- 9. Instalación de Redes (Pág. 4) ---
        { type: 'mcq', question: 'En un proyecto de instalación, ¿cuál es el paso que implica la unión física de los cables a los patch panels y rosetas mediante crimpado?', options: ['Tendido de cables', 'Prueba de cables', 'Conectorización', 'Etiquetado'], answer: 'Conectorización' },
        { type: 'fill', question: 'El proceso de instalar los conectores en los extremos de los cables de red se llama _______.', answer: 'Conectorización' },
        { type: 'mcq', question: '¿Qué elemento de una instalación permite ocultar el cableado bajo el piso o sobre el techo, mejorando la estética y la limpieza?', options: ['Canaletas decorativas', 'Suelos y techos técnicos', 'Racks de pared', 'Zócalos registrables'], answer: 'Suelos y techos técnicos' },
        { type: 'fill', question: 'Los _______ permiten ocultar grandes cantidades de cableado y facilitan el acceso para mantenimiento en grandes instalaciones.', answer: 'Suelos y techos técnicos' },
        { type: 'mcq', question: '¿Qué sistema es fundamental en un cuarto de servidores (CPD) para proteger los equipos contra cortes de energía?', options: ['Climatización', 'Control de acceso', 'Sistema de Alimentación Ininterrumpida (SAI)', 'Extinción de incendios'], answer: 'Sistema de Alimentación Ininterrumpida (SAI)' },
        { type: 'fill', question: 'Un _______ proporciona energía de respaldo mediante baterías durante un apagón, protegiendo los equipos de red.', answer: 'SAI' },
        { type: 'mcq', question: '¿Qué es esencial en un Centro de Procesos de Datos (CPD) además de la seguridad y la energía?', options: ['Ventanas al exterior', 'Mobiliario cómodo', 'Sistemas de control de temperatura y humedad', 'Aislamiento acústico'], answer: 'Sistemas de control de temperatura y humedad' },
        { type: 'fill', question: 'La _______ en un CPD es crucial para mantener los servidores funcionando a una temperatura y humedad óptimas.', answer: 'Climatización' },

        // --- 10. Cableado Estructurado (Pág. 5) ---
        { type: 'mcq', question: '¿Qué tipo de latiguillo se utiliza para conectar directamente dos ordenadores entre sí, sin necesidad de un switch o hub?', options: ['Latiguillo directo', 'Latiguillo de fibra', 'Latiguillo cruzado', 'Latiguillo de consola'], answer: 'Latiguillo cruzado' },
        { type: 'fill', question: 'Para conectar dos PCs directamente, se usa un latiguillo _______, que tiene un orden de cables diferente en cada extremo.', answer: 'cruzado' },
        { type: 'mcq', question: 'Según la norma EIA/TIA-606, ¿qué característica debe tener el etiquetado de cables?', options: ['Ser temporal y de colores', 'Ser neutro y permanente', 'Ser visible a distancia', 'Incluir el nombre del instalador'], answer: 'Ser neutro y permanente' },
        { type: 'fill', question: 'La norma _______ especifica cómo realizar el etiquetado de cables para facilitar la administración y el mantenimiento futuro.', answer: 'EIA/TIA-606' },
        { type: 'mcq', question: 'La característica del cableado estructurado que permite construir grandes redes sin aumentar su complejidad se llama:', options: ['Flexibilidad', 'Jerarquía', 'Modularidad', 'Compatibilidad'], answer: 'Modularidad' },
        { type: 'fill', question: 'Gracias a la _______, un sistema de cableado estructurado se puede ampliar fácilmente añadiendo nuevos subsistemas.', answer: 'Modularidad' },
        { type: 'mcq', question: '¿Cómo se llama la cualidad de una red estructurada que facilita su crecimiento y adaptación a futuras necesidades tecnológicas?', options: ['Estabilidad', 'Flexibilidad', 'Seguridad', 'Velocidad'], answer: 'Flexibilidad' },
        { type: 'fill', question: 'Una red bien diseñada debe tener _______, permitiendo cambios y expansiones futuras sin tener que rehacer toda la instalación.', answer: 'Flexibilidad' },
        { type: 'mcq', question: 'Dentro de los subsistemas jerárquicos, ¿cuál es el punto de conexión final donde se encuentran los dispositivos del usuario?', options: ['Subsistema horizontal', 'Puesto de trabajo', 'Subsistema vertical', 'Cuarto de equipos'], answer: 'Puesto de trabajo' },
        { type: 'fill', question: 'El subsistema del _______ es donde se ubica la roseta de red a la que se conecta directamente el PC del usuario.', answer: 'Puesto de trabajo' },
        { type: 'mcq', question: '¿Qué subsistema se encarga de distribuir el cableado desde el rack hasta cada puesto de trabajo en una misma planta?', options: ['Vertical o backbone', 'De campus', 'Horizontal o de planta', 'Administrador'], answer: 'Horizontal o de planta' },
        { type: 'fill', question: 'El cableado _______ va desde el cuarto de telecomunicaciones hasta las rosetas de los usuarios en el mismo piso.', answer: 'Horizontal' },
        { type: 'mcq', question: '¿Qué subsistema conecta los diferentes pisos de un edificio, usualmente con medios de alta capacidad como la fibra óptica?', options: ['De campus', 'Horizontal', 'De distribución', 'Vertical o backbone'], answer: 'Vertical o backbone' },
        { type: 'fill', question: 'La columna vertebral de la red que interconecta los diferentes pisos se llama subsistema _______ o backbone.', answer: 'Vertical' },
        { type: 'mcq', question: '¿Qué subsistema extiende la red entre diferentes edificios, a menudo usando una topología de doble anillo para garantizar redundancia?', options: ['Backbone metropolitano', 'Subsistema de campus', 'Red de área extensa (WAN)', 'Subsistema horizontal'], answer: 'Subsistema de campus' },
        { type: 'fill', question: 'Para interconectar varios edificios de una universidad u hospital se usa un subsistema de cableado de _______.', answer: 'campus' },
        { type: 'mcq', question: '¿Cómo se llama el espacio destinado a recibir los servicios externos (internet, telefonía) y albergar los equipos centrales?', options: ['Data Center', 'Cuarto de servidores', 'Cuartos de entrada y equipos', 'Rack principal'], answer: 'Cuartos de entrada y equipos' },
        { type: 'fill', question: 'Los servicios de proveedores externos, como la fibra de internet, llegan al edificio en los _______ de entrada y equipos.', answer: 'Cuartos' },

        // --- 11. Gestión de Residuos (Pág. 5) ---
        { type: 'mcq', question: '¿Qué significa la sigla RAEE en el contexto del impacto medioambiental?', options: ['Redes y Aparatos Eléctricos y Electrónicos', 'Regulación Ambiental de Equipos Electrónicos', 'Residuos de Aparatos Eléctricos y Electrónicos', 'Reciclaje de Artículos Eléctricos y Especiales'], answer: 'Residuos de Aparatos Eléctricos y Electrónicos' },
        { type: 'fill', question: 'Los cables viejos, switches y tarjetas de red que se desechan son considerados _______ y deben gestionarse de forma especial.', answer: 'RAEE' }
    ];

    // --- VARIABLES DE ESTADO DEL JUEGO ---
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let gameMode = ''; // 'mcq', 'fill-options', 'fill-writing'
    let incorrectlyAnswered = [];

    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const screens = document.querySelectorAll('.screen');
    const gameScreen = document.getElementById('game-screen');
    const resultsScreen = document.getElementById('results-screen');
    const fillModeSelectionScreen = document.getElementById('fill-mode-selection-screen');
    const questionCounter = document.getElementById('question-counter');
    const scoreCounter = document.getElementById('score-counter');
    const questionText = document.getElementById('question-text');
    const interactionArea = document.getElementById('interaction-area');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const skipQuestionBtn = document.getElementById('skip-question-btn');
    const finalScore = document.getElementById('final-score');
    const reviewSection = document.getElementById('review-section');
    const incorrectAnswersList = document.getElementById('incorrect-answers-list');

    // --- MANEJADORES DE EVENTOS DE BOTONES DEL MENÚ ---
    document.getElementById('start-mcq-btn').addEventListener('click', () => startGame('mcq'));
    document.getElementById('start-fill-btn').addEventListener('click', () => showScreen('fill-mode-selection-screen'));
    document.getElementById('start-fill-options-btn').addEventListener('click', () => startGame('fill-options'));
    document.getElementById('start-fill-writing-btn').addEventListener('click', () => startGame('fill-writing'));
    document.getElementById('back-to-menu-btn').addEventListener('click', () => showScreen('menu-screen'));
    document.getElementById('back-to-menu-from-fill').addEventListener('click', () => showScreen('menu-screen'));
    document.getElementById('review-incorrect-btn').addEventListener('click', reviewIncorrect);
    nextQuestionBtn.addEventListener('click', showNextQuestion);

    // --- FUNCIONES PRINCIPALES DEL JUEGO ---

    function showScreen(screenId) {
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    function startGame(mode) {
        gameMode = mode;
        score = 0;
        currentQuestionIndex = 0;
        incorrectlyAnswered = [];

        if (mode === 'mcq') {
            currentQuestions = allQuestions.filter(q => q.type === 'mcq');
        } else {
            currentQuestions = allQuestions.filter(q => q.type === 'fill');
        }
        
        currentQuestions.sort(() => Math.random() - 0.5);
        showScreen('game-screen');
        loadQuestion();
    }
    
    function loadQuestion() {
        nextQuestionBtn.classList.add('hidden');
        skipQuestionBtn.classList.add('hidden');
        interactionArea.innerHTML = '';

        if (currentQuestionIndex >= currentQuestions.length) {
            showResults();
            return;
        }

        const question = currentQuestions[currentQuestionIndex];
        questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1}/${currentQuestions.length}`;
        scoreCounter.textContent = `Puntuación: ${score}`;
        questionText.textContent = question.question.replace(/_______/g, '______');

        if (gameMode === 'mcq' || gameMode === 'fill-options') {
            createOptionButtons(question);
        } else if (gameMode === 'fill-writing') {
            createInputField(question);
            skipQuestionBtn.classList.remove('hidden');
            skipQuestionBtn.onclick = () => skipQuestion(question);
        }
    }

    function createOptionButtons(question) {
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'option-btn-container';
        
        const options = gameMode === 'mcq' 
            ? [...question.options]
            : generateFillOptions(question.answer);

        options.sort(() => Math.random() - 0.5);

        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'btn';
            button.textContent = option;
            button.addEventListener('click', (e) => checkAnswerMCQ(e.target, question.answer));
            optionsContainer.appendChild(button);
        });
        interactionArea.appendChild(optionsContainer);
    }
    
    function generateFillOptions(correctAnswer) {
        const allPossibleAnswers = allQuestions.filter(q => q.type === 'fill').map(q => q.answer);
        const distractors = allPossibleAnswers
            .filter(ans => ans.toLowerCase() !== correctAnswer.toLowerCase())
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        const finalOptions = [correctAnswer, ...distractors];
        return finalOptions;
    }
    
    function createInputField(question) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'fill-input';
        input.autocomplete = 'off';
        input.addEventListener('input', (e) => checkAnswerWriting(e.target, question.answer));
        interactionArea.appendChild(input);
        input.focus();
    }

    function checkAnswerMCQ(selectedButton, correctAnswer) {
        const isCorrect = selectedButton.textContent.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
        
        if (isCorrect) {
            selectedButton.classList.add('correct');
            score++;
        } else {
            selectedButton.classList.add('incorrect');
            incorrectlyAnswered.push(currentQuestions[currentQuestionIndex]);
        }
        
        const buttons = interactionArea.querySelectorAll('.btn');
        buttons.forEach(button => {
            if (button.textContent.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        nextQuestionBtn.classList.remove('hidden');
    }

    function checkAnswerWriting(inputField, correctAnswer) {
        const isCorrect = inputField.value.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
        if (isCorrect) {
            inputField.classList.add('correct');
            inputField.disabled = true;
            score++;
            skipQuestionBtn.classList.add('hidden');
            setTimeout(showNextQuestion, 1000);
        }
    }
    
    function skipQuestion(question) {
        incorrectlyAnswered.push(question);
        const inputField = document.getElementById('fill-input');
        inputField.disabled = true;
        inputField.value = question.answer;
        inputField.classList.add('incorrect');
        skipQuestionBtn.classList.add('hidden');
        setTimeout(showNextQuestion, 1500);
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        loadQuestion();
    }

    function showResults() {
        showScreen('results-screen');
        finalScore.textContent = `Tu puntuación: ${score}/${currentQuestions.length} correctas.`;

        if (incorrectlyAnswered.length > 0) {
            reviewSection.classList.remove('hidden');
            document.getElementById('review-incorrect-btn').classList.remove('hidden');
            incorrectAnswersList.innerHTML = '';
            incorrectlyAnswered.forEach(q => {
                const li = document.createElement('li');
                li.innerHTML = `${q.question.replace(/_______/g, `<strong class="correct-answer-review">[${q.answer}]</strong>`)}`;
                incorrectAnswersList.appendChild(li);
            });
        } else {
            reviewSection.classList.add('hidden');
            document.getElementById('review-incorrect-btn').classList.add('hidden');
            finalScore.innerHTML += "<br>¡Felicidades! Completaste todo sin errores.";
        }
    }

    function reviewIncorrect() {
        if (incorrectlyAnswered.length === 0) return;
        
        gameMode = incorrectlyAnswered[0].type;
        currentQuestions = [...incorrectlyAnswered];
        score = 0;
        currentQuestionIndex = 0;
        incorrectlyAnswered = [];
        
        showScreen('game-screen');
        loadQuestion();
    }
});
