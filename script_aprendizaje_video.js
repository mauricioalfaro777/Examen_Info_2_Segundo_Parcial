document.addEventListener('DOMContentLoaded', function() {
    const examenForm = document.getElementById('examenForm');
    const submitBtn = document.getElementById('submitBtn');
    const resultadosFinalesDiv = document.getElementById('resultadosFinales');
    const puntajeTotalP = document.getElementById('puntajeTotal');
    const mensajeFinalP = document.getElementById('mensajeFinal');

    const bancoPreguntas = [
        {
            id: 1,
            enunciado: "La herramienta que se usa para compartir una impresora en Windows es...",
            tipo: "seleccion_simple",
            opciones: { a: "CMD", b: "Panel de Control", c: "Administrador de dispositivos" },
            respuestaCorrecta: "b",
            explicacion: {
                general: "Compartir impresoras es una función común en entornos de red.",
                correcta: "b) Panel de Control: Tradicionalmente y en muchas versiones de Windows, la gestión de impresoras, incluyendo compartirlas, se realiza a través del 'Panel de Control' (o la aplicación 'Configuración' en versiones más nuevas, que es una evolución del Panel de Control). Aquí encuentras 'Dispositivos e impresoras'.",
                incorrecta: {
                    a: "CMD (Símbolo del sistema) es una interfaz de línea de comandos. Aunque se pueden gestionar impresoras con comandos (ej. `net share`), no es la herramienta gráfica principal para usuarios comunes.",
                    c: "Administrador de dispositivos se usa para gestionar los drivers y el estado del hardware, no para configurar el uso compartido de una impresora."
                }
            }
        },
        {
            id: 2,
            enunciado: "La tecnología de almacenamiento más rápida actualmente es...",
            tipo: "seleccion_simple",
            opciones: { a: "DVD", b: "HDD", c: "SSD" },
            respuestaCorrecta: "c",
            explicacion: {
                general: "La velocidad de acceso a los datos es crucial para el rendimiento del sistema.",
                correcta: "c) SSD (Solid State Drive): Las unidades de estado sólido utilizan memoria flash y no tienen partes móviles, lo que les permite velocidades de lectura y escritura significativamente más altas y tiempos de acceso mucho menores que los HDD.",
                incorrecta: {
                    a: "DVD (Digital Versatile Disc) es un medio óptico, mucho más lento que los SSD y HDD para acceso general a datos.",
                    b: "HDD (Hard Disk Drive) son discos duros mecánicos con platos giratorios y cabezales de lectura/escritura. Son más lentos que los SSD."
                }
            }
        },
        {
            id: 3,
            enunciado: "¿Qué característica permite almacenar información de forma permanente?",
            tipo: "seleccion_simple",
            opciones: { a: "Memoria", b: "Almacenamiento", c: "Persistencia de datos" },
            respuestaCorrecta: "c",
            explicacion: {
                general: "La capacidad de retener datos incluso sin energía es fundamental.",
                correcta: "c) Persistencia de datos: Este término describe la característica de los sistemas de almacenamiento que les permite conservar los datos a lo largo del tiempo, incluso después de que se corta la alimentación eléctrica. Es el concepto fundamental.",
                incorrecta: {
                    a: "Memoria (generalmente se refiere a RAM - Random Access Memory) es típicamente volátil, lo que significa que pierde su contenido cuando se apaga la energía. Es para almacenamiento temporal y rápido.",
                    b: "Almacenamiento es un término amplio. Si bien el 'almacenamiento no volátil' permite guardar información permanentemente, 'persistencia de datos' es la propiedad que describe esta capacidad."
                }
            }
        },
        {
            id: 4,
            enunciado: "La unidad que mide la velocidad de transferencia es...",
            tipo: "seleccion_simple",
            opciones: { a: "Mbps", b: "Hz", c: "GB" },
            respuestaCorrecta: "a",
            explicacion: {
                general: "La velocidad de transferencia indica cuántos datos se mueven por unidad de tiempo.",
                correcta: "a) Mbps (Megabits por segundo): Esta es una unidad estándar para medir la velocidad de transferencia de datos en redes y dispositivos de almacenamiento. También se usa Gbps (Gigabits por segundo).",
                incorrecta: {
                    b: "Hz (Hertz) mide la frecuencia (ciclos por segundo), como la velocidad de un procesador o la tasa de refresco de un monitor.",
                    c: "GB (Gigabytes) mide la capacidad de almacenamiento, no la velocidad de transferencia."
                }
            }
        },
        {
            id: 5,
            enunciado: "Una empresa emergente desarrolla una plataforma de contabilidad en línea para PYMES. El modelo recomendado sería...",
            tipo: "seleccion_simple",
            opciones: { a: "Hardware como servicio", b: "Software como servicio", c: "Red como servicio" },
            respuestaCorrecta: "b",
            explicacion: {
                general: "Los modelos de servicio en la nube ofrecen diferentes niveles de gestión y abstracción.",
                correcta: "b) Software como servicio (SaaS): En este modelo, la empresa proporciona una aplicación completa (la plataforma de contabilidad) a los clientes a través de internet, generalmente bajo suscripción. Los clientes no gestionan la infraestructura ni la plataforma subyacente, solo usan el software.",
                incorrecta: {
                    a: "Hardware como servicio (HaaS) o Infraestructura como servicio (IaaS) implicaría que la empresa emergente gestiona los servidores y la infraestructura base, pero la pregunta se refiere a ofrecer la *plataforma de contabilidad* directamente.",
                    c: "Red como servicio (NaaS) se enfoca en proporcionar servicios de conectividad y red, no una aplicación de software completa."
                }
            }
        },
        {
            id: 6,
            enunciado: "Empareja cada tipo de interfaz con su descripción:",
            tipo: "emparejamiento_select",
            items: [
                { id: "ethernet", nombre: "Ethernet" },
                { id: "scsi", nombre: "SCSI" },
                { id: "usb", nombre: "USB" }
            ],
            descripciones: [
                { id: "d1", texto: "Protocolo de red que permite compartir impresoras y otros dispositivos en red." },
                { id: "d2", texto: "Interfaz utilizada principalmente en servidores y sistemas de almacenamiento masivo." },
                { id: "d3", texto: "Conexión de alta velocidad, común en dispositivos actuales." }
            ],
            respuestaCorrecta: { ethernet: "d1", scsi: "d2", usb: "d3" },
            explicacion: {
                general: "Las interfaces permiten la conexión y comunicación entre dispositivos.",
                correcta: {
                    "Ethernet": "Se empareja con 'Protocolo de red que permite compartir impresoras y otros dispositivos en red.' Ethernet es el estándar para redes locales (LAN) y facilita el compartir recursos.",
                    "SCSI": "Se empareja con 'Interfaz utilizada principalmente en servidores y sistemas de almacenamiento masivo.' SCSI (Small Computer System Interface) es robusta y de alto rendimiento, ideal para esos entornos.",
                    "USB": "Se empareja con 'Conexión de alta velocidad, común en dispositivos actuales.' USB (Universal Serial Bus) es la interfaz estándar para la mayoría de periféricos hoy en día."
                }
            }
        },
        {
            id: 7,
            enunciado: "Empareja los siguientes componentes físicos de una red con su función correspondiente:",
            tipo: "emparejamiento_select",
            items: [
                { id: "firewall", nombre: "Firewall" },
                { id: "switch", nombre: "Switch" },
                { id: "router", nombre: "Router" }
            ],
            descripciones: [
                { id: "d_controla", texto: "Controla y filtra el tráfico de red entrante y saliente." },
                { id: "d_interconecta_local", texto: "Permite la interconexión de dispositivos en una red local." },
                { id: "d_conecta_redes", texto: "Permite la conexión entre redes." }
            ],
            respuestaCorrecta: { firewall: "d_controla", switch: "d_interconecta_local", router: "d_conecta_redes" },
            explicacion: {
                general: "Cada dispositivo de red tiene un rol específico en la infraestructura.",
                correcta: {
                    "Firewall": "Su función principal es la seguridad, inspeccionando el tráfico y aplicando reglas para permitir o bloquearlo.",
                    "Switch": "Opera en la Capa 2 y conecta dispositivos dentro de una misma LAN, usando direcciones MAC para reenviar tramas eficientemente al destinatario correcto.",
                    "Router": "Opera en la Capa 3 y conecta diferentes redes (ej. tu LAN con Internet), usando direcciones IP para enrutar paquetes entre ellas."
                }
            }
        },
        {
            id: 8,
            enunciado: "Los medios de transmisión se clasifican habitualmente como...",
            tipo: "seleccion_simple",
            opciones: { a: "Determinados o indeterminados", b: "Metálicos o no metálicos", c: "Guiados o no guiados" },
            respuestaCorrecta: "c",
            explicacion: {
                general: "Los medios de transmisión son el camino físico por donde viajan las señales.",
                correcta: "c) Guiados o no guiados: Los medios guiados son aquellos que proporcionan un camino físico para las señales (ej. cables de cobre, fibra óptica). Los medios no guiados transmiten señales a través del aire o el espacio (ej. ondas de radio, microondas, infrarrojos).",
                incorrecta: {
                    a: "'Determinados o indeterminados' no es una clasificación estándar para medios de transmisión en este contexto.",
                    b: "'Metálicos o no metálicos' describe el material de algunos medios guiados (cobre vs. fibra), pero no es la clasificación general que incluye los no guiados."
                }
            }
        },
        {
            id: 9,
            enunciado: "La red inalámbrica de corto alcance conocida como Bluetooth se adecua a la...",
            tipo: "seleccion_simple",
            opciones: { a: "Red PAN", b: "Red LAN", c: "Red punto a punto" },
            respuestaCorrecta: "a",
            explicacion: {
                general: "Bluetooth es una tecnología para conexiones personales de corto alcance.",
                correcta: "a) Red PAN (Personal Area Network): Bluetooth está diseñado para crear redes personales, conectando dispositivos cercanos como smartphones, auriculares, teclados, relojes inteligentes, etc., típicamente en un rango de hasta 10 metros.",
                incorrecta: {
                    b: "Red LAN (Local Area Network) cubre un área más grande, como una casa u oficina, usualmente con tecnologías como Wi-Fi o Ethernet.",
                    c: "Red punto a punto describe una conexión directa entre solo dos dispositivos, lo cual puede ser una característica de una PAN, pero PAN es la clasificación más adecuada para el ámbito de Bluetooth."
                }
            }
        },
        {
            id: 10,
            enunciado: "Una empresa lanza un sistema para la venta y decide ofrecerlo 100% en línea. El modelo recomendado sería...",
            tipo: "seleccion_simple",
            opciones: { a: "Base de datos en la nube", b: "Plataforma como servicio", c: "Software como servicio" },
            respuestaCorrecta: "c",
            explicacion: {
                general: "Elegir el modelo de nube correcto depende de lo que se quiera ofrecer.",
                correcta: "c) Software como servicio (SaaS): Si la empresa ofrece un 'sistema para la venta' completo y listo para usar por los clientes a través de internet, es un modelo SaaS. Los clientes acceden al software sin preocuparse por la infraestructura o plataforma subyacente.",
                incorrecta: {
                    a: "Base de datos en la nube (DBaaS) es un componente que podría usar el sistema de venta, pero no es el modelo completo del sistema ofrecido al cliente final.",
                    b: "Plataforma como servicio (PaaS) sería si la empresa ofreciera una plataforma para que *otros* desarrollen y ejecuten sus propios sistemas de venta, lo cual no es el caso aquí."
                }
            }
        },
        {
            id: 11,
            enunciado: "Un cable coaxial está formado por un núcleo interno de cobre y una segunda cubierta exterior...",
            tipo: "seleccion_simple",
            opciones: { a: "Par trenzado", b: "Par trenzado blindado" },
            respuestaCorrecta: "b", // Respuesta según el video, aunque conceptualmente problemática.
            explicacion: {
                general: "La estructura del cable coaxial es clave para su funcionamiento.",
                correcta: "b) Par trenzado blindado (según la opción dada en el video, aunque es una descripción imprecisa para un cable coaxial). Un cable coaxial tiene: 1. Conductor central (núcleo de cobre), 2. Aislante dieléctrico, 3. Malla conductora o blindaje (esta sería la 'segunda cubierta' a la que se refiere de forma indirecta), 4. Cubierta exterior protectora.",
                incorrecta: {
                    a: "Par trenzado es otro tipo de cable completamente diferente, formado por pares de hilos de cobre trenzados."
                },
                nota_importante: "La estructura real de un cable coaxial después del núcleo de cobre es un aislante dieléctrico, luego una malla de blindaje (que podría interpretarse como 'cubierta exterior' en un sentido amplio y si 'par trenzado blindado' se toma como un distractor que alude al blindaje). 'Par trenzado blindado' como tal es otro tipo de cable (STP)."
            }
        },
        {
            id: 12,
            enunciado: "El término \"arquitectura de red\" se refiere a...",
            tipo: "seleccion_simple_doble", // Tipo especial para respuestas "Ambas" o "Ninguna"
            opciones: { 
                a: "Un marco para la especificación de los componentes físicos de una red.", 
                b: "Su organización funcional y configuración.",
                c: "Ambas opciones.", // Asumiendo que el video implícitamente tenía esta opción o similar.
                d: "Ninguna de las opciones."
            },
            respuestaCorrecta: "c", // Si "Ambas opciones" es la correcta.
            explicacion: {
                general: "La arquitectura de red es el diseño conceptual de una red.",
                correcta: "c) Ambas opciones: La arquitectura de red abarca tanto el diseño físico (cómo se conectan los componentes, qué tipo de cableado, topología física) como el diseño lógico y funcional (cómo fluyen los datos, protocolos utilizados, direccionamiento, configuración de servicios, topología lógica).",
                incorrecta: {
                    a: "Es solo una parte de la arquitectura (la física).",
                    b: "Es solo una parte de la arquitectura (la funcional/lógica)."
                }
            }
        },
        {
            id: 13,
            enunciado: "La velocidad máxima del cable coaxial es de 10 MBPS.",
            tipo: "verdadero_falso",
            respuestaCorrecta: "verdadero",
            explicacion: {
                general: "El cable coaxial ha tenido diversas aplicaciones y velocidades.",
                correcta: "Verdadero (en el contexto de ciertas redes Ethernet antiguas): Tipos de cable coaxial como el 10BASE2 (Thinnet) usado en redes Ethernet más antiguas tenían una velocidad especificada de 10 Mbps. Es importante notar que otros tipos de cable coaxial (usados para televisión por cable, por ejemplo) pueden soportar anchos de banda mucho mayores.",
                incorrecta: "Considerando todos los tipos de cable coaxial que existen, la afirmación no es universalmente verdadera, pero en el contexto de redes de datos específicas, 10 Mbps fue una velocidad relevante."
            }
        },
        {
            id: 14,
            enunciado: "En un Datacenter, una de las tareas más sensibles es el control del tráfico. Si seleccionamos el Firewall pasivo, esto implica que la configuración será manual.",
            tipo: "verdadero_falso",
            respuestaCorrecta: "verdadero",
            explicacion: {
                general: "Los firewalls son cruciales para la seguridad de la red.",
                correcta: "Verdadero. Un 'firewall pasivo' (término no estándar, pero interpretado como un firewall que no interviene activamente en modificar el tráfico o aprender dinámicamente, sino que aplica reglas predefinidas) generalmente requeriría que sus reglas y políticas de filtrado se configuren manualmente por un administrador. Los firewalls 'activos' o de próxima generación pueden tener capacidades de aprendizaje y adaptación más dinámicas.",
                incorrecta: "Los firewalls, por naturaleza, necesitan configuración. La distinción 'pasivo' aquí probablemente enfatiza la dependencia de una configuración manual estricta."
            }
        },
        {
            id: 15,
            enunciado: "La tarjeta de interfaz de red es un conector o toma en un dispositivo de red en el cual el medio se conecta con un host o con otro dispositivo de red.",
            tipo: "verdadero_falso",
            respuestaCorrecta: "verdadero",
            explicacion: {
                general: "La NIC es el hardware que permite la conexión a la red.",
                correcta: "Verdadero. La Tarjeta de Interfaz de Red (NIC), también conocida como adaptador de red, es el componente de hardware que contiene el puerto (conector/toma) donde se conecta el medio de transmisión (cable Ethernet, antena Wi-Fi). Permite que el host (PC, servidor) o dispositivo de red se comunique con la red.",
                incorrecta: "La descripción es acertada para una NIC."
            }
        },
        {
            id: 16,
            enunciado: "El cable coaxial es más resistente a interferencias que el UTP.",
            tipo: "verdadero_falso",
            respuestaCorrecta: "verdadero",
            explicacion: {
                general: "La resistencia a interferencias (EMI/RFI) varía entre tipos de cable.",
                correcta: "Verdadero. El cable coaxial, debido a su construcción con una malla de blindaje conductora alrededor del dieléctrico y el conductor central, ofrece una mejor protección contra interferencias electromagnéticas (EMI) y de radiofrecuencia (RFI) en comparación con el cable de Par Trenzado No Blindado (UTP).",
                incorrecta: "El UTP, al no tener blindaje, es más susceptible a interferencias externas."
            }
        },
        {
            id: 17,
            enunciado: "La IP dinámica se configura manualmente.",
            tipo: "verdadero_falso",
            respuestaCorrecta: "falso",
            explicacion: {
                general: "Las direcciones IP pueden ser estáticas o dinámicas.",
                correcta: "Falso. Una dirección IP dinámica es asignada automáticamente a un dispositivo por un servidor DHCP (Dynamic Host Configuration Protocol) cuando el dispositivo se conecta a la red. No requiere configuración manual en el dispositivo cliente. La que se configura manualmente es la IP estática.",
                incorrecta: "La configuración manual es característica de las IP estáticas."
            }
        },
        {
            id: 18,
            enunciado: "El uso de la nube elimina la necesidad de dispositivos físicos.",
            tipo: "verdadero_falso",
            respuestaCorrecta: "falso",
            explicacion: {
                general: "La nube abstrae la infraestructura, pero no la elimina.",
                correcta: "Falso. Aunque el usuario final puede no gestionar o incluso no ver los dispositivos físicos, los servicios en la nube se ejecutan en hardware físico real (servidores, almacenamiento, equipos de red) que se encuentra en los datacenters del proveedor de la nube. La nube elimina la necesidad de que *el usuario* posea y gestione esos dispositivos físicos, pero no elimina su existencia.",
                incorrecta: "La infraestructura física es la base de la nube."
            }
        },
        {
            id: 19,
            enunciado: "Los drivers son necesarios para que un periférico funcione correctamente.",
            tipo: "verdadero_falso",
            respuestaCorrecta: "verdadero",
            explicacion: {
                general: "Los drivers actúan como traductores entre el SO y el hardware.",
                correcta: "Verdadero. Un driver (controlador) es un software que permite al sistema operativo comunicarse y controlar un dispositivo de hardware (periférico). Sin el driver adecuado, el periférico podría no funcionar en absoluto o solo con funcionalidades muy limitadas (usando un driver genérico).",
                incorrecta: "Para la mayoría de los periféricos, especialmente los que tienen funcionalidades complejas, los drivers son esenciales."
            }
        },
        {
            id: 20,
            enunciado: "Cuando un administrador de redes quiere comprobar el acceso a un servidor utiliza el comando PING. Si al cabo de una prueba la respuesta del otro equipo es \"Tiempo de espera agotado\", esto puede ser debido a que el equipo tiene activado el firewall.",
            tipo: "verdadero_falso",
            respuestaCorrecta: "verdadero",
            explicacion: {
                general: "El comando PING es una herramienta básica de diagnóstico de red.",
                correcta: "Verdadero. El comando PING envía paquetes ICMP Echo Request. Si el firewall del equipo de destino está configurado para bloquear las solicitudes ICMP entrantes (o las respuestas ICMP salientes), el equipo que envía el PING no recibirá respuesta y mostrará \"Tiempo de espera agotado\", aunque el servidor esté encendido y conectado a la red. Otras causas pueden ser problemas de red, que el host esté apagado, etc., pero el firewall es una causa común.",
                incorrecta: "El firewall es una de las posibles razones para un timeout de PING."
            }
        },
        {
            id: 21, // Ya incluida y detallada arriba.
            enunciado: "En una oficina se requiere que varias máquinas tengan acceso a una impresora que está disponible, pero esta no tiene puerto de red. Entonces el técnico decide que puede compartir la misma desde una máquina por USB, pero el protocolo para compartirla es token ring. Todos en la oficina pudieron imprimir.",
            tipo: "verdadero_falso",
            respuestaCorrecta: "falso",
            explicacion: {
                general: "Compartir impresoras USB en red es común, pero los protocolos deben ser compatibles.",
                correcta: "Falso. Se puede compartir una impresora USB a través de una PC conectada a la red, y otros equipos en la red (usualmente Ethernet o Wi-Fi) pueden acceder a ella. Sin embargo, Token Ring es una tecnología de red local (LAN) específica y más antigua, distinta de Ethernet/Wi-Fi, que define cómo los dispositivos acceden al medio y transmiten datos. No es un 'protocolo para compartir' una impresora USB. El uso compartido en Windows se basa en protocolos como SMB/CIFS sobre TCP/IP. La mención de Token Ring aquí es irrelevante y confusa para el método de compartición descrito.",
                incorrecta: "La premisa de compartir una impresora USB es válida, pero la justificación del protocolo 'token ring' para ello es incorrecta."
            }
        },
        {
            id: 22,
            enunciado: "La dirección MAC que tienen las NIC están compuestas por...",
            tipo: "seleccion_simple",
            opciones: { a: "32 bits representados en decimal, separados en 4 bloques.", b: "48 bits representados en hexadecimal, separados en 2 bloques.", c: "Ninguna de las opciones." },
            respuestaCorrecta: "b",
            explicacion: {
                general: "Las direcciones MAC son identificadores físicos únicos.",
                correcta: "b) 48 bits representados en hexadecimal, separados en 2 bloques. Una dirección MAC estándar consta de 48 bits. Comúnmente se representa como 6 pares de dígitos hexadecimales (ej. 00:1A:2B:3C:4D:5E). 'Separados en 2 bloques' no es la forma más precisa (son 6 bloques de 1 byte o 6 pares hexadecimales), pero de las opciones dadas, esta es la que más se acerca al indicar 48 bits y hexadecimal. Los primeros 3 bytes (24 bits) identifican al fabricante (OUI) y los últimos 3 bytes son asignados por el fabricante.",
                incorrecta: {
                    a: "32 bits es para IPv4. Las MAC no son decimales en su representación común.",
                    c: "La opción b es la más cercana a la descripción correcta, aunque la forma de agrupar en '2 bloques' es inusual."
                }
            }
        },
        {
            id: 23,
            enunciado: "¿Qué nivel del modelo OSI se corresponde con el nivel TCP/UDP?",
            tipo: "seleccion_simple",
            opciones: { a: "Aplicación", b: "Transporte", c: "Enlace de datos", d: "Red" },
            respuestaCorrecta: "b",
            explicacion: {
                general: "TCP y UDP son protocolos fundamentales para la entrega de datos.",
                correcta: "b) Transporte: TCP (Transmission Control Protocol) y UDP (User Datagram Protocol) operan en la Capa 4 (Transporte) del modelo OSI. Se encargan de la comunicación de extremo a extremo entre procesos de aplicación, proporcionando segmentación, control de flujo (TCP) y multiplexación.",
                incorrecta: {
                    a: "Aplicación (Capa 7) usa los servicios de la capa de transporte (ej. HTTP usa TCP).",
                    c: "Enlace de datos (Capa 2) maneja tramas entre nodos adyacentes (ej. Ethernet).",
                    d: "Red (Capa 3) maneja el enrutamiento de paquetes (ej. IP)."
                }
            }
        },
        {
            id: 24, // Repetida con Q34
            enunciado: "¿Cuál es una ventaja del uso de servicios en la nube?",
            tipo: "seleccion_simple",
            opciones: { a: "Menor movilidad", b: "Alto consumo energético", c: "Licencias perpetuas", d: "Acceso desde cualquier lugar" },
            respuestaCorrecta: "d",
            explicacion: {
                general: "La nube ofrece diversas ventajas para usuarios y empresas.",
                correcta: "d) Acceso desde cualquier lugar: Siempre que se tenga una conexión a Internet, se puede acceder a los servicios y datos almacenados en la nube desde diferentes dispositivos y ubicaciones, lo que fomenta la movilidad y flexibilidad.",
                incorrecta: {
                    a: "Al contrario, la nube suele aumentar la movilidad.",
                    b: "Si bien los datacenters consumen energía, para el usuario final el consumo puede ser menor al no necesitar mantener servidores propios. No es una ventaja intrínseca para el usuario.",
                    c: "Los modelos de nube suelen ser de suscripción (pago por uso), no de licencias perpetuas."
                }
            }
        },
        {
            id: 25,
            enunciado: "¿Cuál de las siguientes afirmaciones es cierta con relación a una dirección IP (refiriéndose a IPv4)?",
            tipo: "seleccion_simple",
            opciones: { a: "Tiene 32 bits.", b: "Contiene un identificador de estación de longitud fija.", c: "Se divide en exactamente dos clases.", d: "Todas las opciones." },
            respuestaCorrecta: "a",
            explicacion: {
                general: "Las direcciones IPv4 son la base del direccionamiento en Internet.",
                correcta: "a) Tiene 32 bits. Una dirección IPv4 está compuesta por 32 bits, usualmente representada en formato decimal separado por puntos (ej. 192.168.1.1).",
                incorrecta: {
                    b: "Una dirección IP tiene una porción de red y una porción de host, pero la longitud de estas porciones varía según la clase de la dirección y el uso de máscaras de subred (CIDR). No es un 'identificador de estación de longitud fija' en todos los casos.",
                    c: "Las direcciones IPv4 se dividían tradicionalmente en cinco clases (A, B, C, D, E), no dos.",
                    d: "Solo 'a' es correcta."
                }
            }
        },
        {
            id: 26, // Repetida con Q35 y Q40
            enunciado: "¿Qué tipo de IP requiere una configuración manual para su uso en impresoras (y otros servidores)?",
            tipo: "seleccion_simple",
            opciones: { a: "IP dinámica (DHCP)", b: "IP estática", c: "IP pública", d: "IP privada" },
            respuestaCorrecta: "b",
            explicacion: {
                general: "Para dispositivos que necesitan ser encontrados consistentemente en la red, la configuración IP es importante.",
                correcta: "b) IP estática: Se asigna manualmente una dirección IP fija a la impresora. Esto asegura que su dirección no cambie, facilitando que los usuarios y servidores la encuentren siempre en la misma dirección para imprimir.",
                incorrecta: {
                    a: "IP dinámica (DHCP) es asignada automáticamente y puede cambiar, lo que dificultaría el acceso constante a una impresora de red.",
                    c: "IP pública se usa para identificar dispositivos en Internet, no es el tipo de configuración interna para una impresora en LAN, aunque una impresora podría ser accesible remotamente a través de una IP pública (del router).",
                    d: "IP privada es el rango de direcciones usado en redes locales. Una impresora en LAN tendrá una IP privada, y esta puede ser estática o dinámica. La pregunta se refiere al *método de asignación*."
                }
            }
        },
        {
            id: 27, // Repetida con Q36 y Q41
            enunciado: "¿Qué medio es más susceptible a interferencias electromagnéticas?",
            tipo: "seleccion_simple",
            opciones: { a: "Fibra óptica", b: "Par trenzado apantallado (STP)", c: "Par trenzado sin apantallar (UTP)", d: "Coaxial" },
            respuestaCorrecta: "c",
            explicacion: {
                general: "La susceptibilidad a EMI/RFI depende de la construcción del medio.",
                correcta: "c) Par trenzado sin apantallar (UTP): Al no tener blindaje, el UTP es el más vulnerable a interferencias electromagnéticas y de radiofrecuencia de fuentes externas (motores, luces fluorescentes, otros cables).",
                incorrecta: {
                    a: "Fibra óptica transmite luz, por lo que es inmune a EMI/RFI.",
                    b: "Par trenzado apantallado (STP) tiene un blindaje que reduce significativamente la interferencia.",
                    d: "Coaxial tiene un blindaje que lo hace más resistente que el UTP, aunque menos que la fibra o el STP bien instalado."
                }
            }
        },
        {
            id: 28, // Repetida con Q37 y Q42
            enunciado: "¿Qué factor no influye directamente en la elección de un dispositivo de almacenamiento?",
            tipo: "seleccion_simple",
            opciones: { a: "Capacidad", b: "Conectividad", c: "Velocidad", d: "Color del dispositivo" },
            respuestaCorrecta: "d",
            explicacion: {
                general: "Al elegir almacenamiento, se consideran factores funcionales y de rendimiento.",
                correcta: "d) Color del dispositivo: El color es un factor estético y no tiene un impacto directo en la funcionalidad, rendimiento o capacidad del dispositivo de almacenamiento.",
                incorrecta: {
                    a: "Capacidad (cuántos datos puede almacenar) es fundamental.",
                    b: "Conectividad (tipo de interfaz, ej. USB, SATA, NVMe) determina cómo se conecta y a menudo influye en la velocidad.",
                    c: "Velocidad (de lectura/escritura, tiempo de acceso) es crucial para el rendimiento."
                }
            }
        },
        {
            id: 29, // Repetida con Q38
            enunciado: "¿Qué estándar de cableado define el orden de los colores en conectores RJ-45?",
            tipo: "seleccion_simple",
            opciones: { a: "ISO/OSI", b: "IEEE 802.3", c: "RS-232", d: "ANSI/EIA/TIA-568" },
            respuestaCorrecta: "d",
            explicacion: {
                general: "El cableado estructurado sigue estándares para asegurar la interoperabilidad.",
                correcta: "d) ANSI/EIA/TIA-568: Este estándar (específicamente TIA-568A y TIA-568B) define las asignaciones de pines (pinouts) para el cableado de par trenzado en conectores RJ-45, asegurando que los cables se terminen correctamente para redes Ethernet.",
                incorrecta: {
                    a: "ISO/OSI es el modelo de referencia de 7 capas, no un estándar de cableado.",
                    b: "IEEE 802.3 es el estándar para Ethernet, que define muchos aspectos, pero el orden específico de los colores del cableado lo detalla TIA-568.",
                    c: "RS-232 es un estándar para comunicación serie, usando conectores diferentes (como DB9 o DB25)."
                }
            }
        },
        {
            id: 30, // Repetida con Q39
            enunciado: "¿Cuál es la función de un driver?",
            tipo: "seleccion_simple",
            opciones: { a: "Eliminar archivos temporales", b: "Enviar correos electrónicos", c: "Reproducir videos", d: "Traducir la información del hardware al sistema operativo" },
            respuestaCorrecta: "d",
            explicacion: {
                general: "Los drivers son software esencial para la interacción hardware-software.",
                correcta: "d) Traducir la información del hardware al sistema operativo: Un driver (controlador) actúa como un intermediario o traductor, permitiendo que el sistema operativo se comunique y controle las funciones de un dispositivo de hardware específico.",
                incorrecta: {
                    a: "Es función de utilidades de limpieza del sistema.",
                    b: "Es función de clientes de correo electrónico (que usan protocolos de Capa de Aplicación).",
                    c: "Es función de reproductores multimedia (que usan códecs y servicios del SO)."
                }
            }
        },
        {
            id: 31,
            enunciado: "La técnica de E/S (Entrada/Salida) utilizada por la impresora corresponde a...",
            tipo: "seleccion_simple",
            opciones: { a: "Controlada por interrupción", b: "Controlada por programa", c: "DMA o Controladas por programa" },
            respuestaCorrecta: "a",
            explicacion: {
                general: "Las impresoras necesitan un mecanismo para notificar al CPU cuando están listas o han completado una tarea.",
                correcta: "a) Controlada por interrupción: Las impresoras, al ser dispositivos relativamente lentos comparados con el CPU, suelen usar E/S controlada por interrupción. Cuando la impresora necesita atención (ej. ha terminado de imprimir una página, necesita más datos, o hay un error), envía una señal de interrupción al CPU. El CPU entonces suspende su tarea actual y atiende a la impresora. Esto es más eficiente que la E/S controlada por programa para estos dispositivos.",
                incorrecta: {
                    b: "Controlada por programa (o sondeo/polling) implicaría que el CPU constantemente pregunta a la impresora por su estado, lo cual es ineficiente.",
                    c: "DMA (Acceso Directo a Memoria) se usa para transferencias de grandes bloques de datos directamente entre el periférico y la memoria sin intervención constante del CPU (ej. discos duros). Si bien una impresora podría usar DMA para la transferencia de datos del buffer, el mecanismo general de notificación y gestión de eventos suele ser por interrupciones."
                }
            }
        },
        // Q32 ya incluida arriba (es la misma que Q22 con diferente respuesta correcta según el video).
        // Q33 ya incluida arriba (con la corrección importante sobre la capa de IP).
        // Q34, Q35, Q36, Q37, Q38, Q39, Q40, Q41, Q42 son repeticiones de preguntas anteriores (24, 26, 27, 28, 29, 30), así que no las añado de nuevo para evitar redundancia en el examen simulado.

        {
            id: 43, // Adaptación de pregunta visual
            enunciado: "Identifique los tipos de adaptadores de red basándose en estas descripciones: Tipo A tiene un puerto RJ-45 para conectar un cable de red. Tipo B no tiene un puerto de cable visible y está diseñado para conectarse a redes mediante señales de radio.",
            tipo: "identificar_adaptadores", // Necesitaríamos un tipo específico o usar dos preguntas simples
            opciones: {
                q43_a: { label: "Tipo A (con puerto RJ-45):", choices: {inal: "Inalámbrica", alam: "Alámbrica"} },
                q43_b: { label: "Tipo B (sin puerto de cable visible, usa radio):", choices: {inal: "Inalámbrica", alam: "Alámbrica"} }
            },
            respuestaCorrecta: { q43_a: "alam", q43_b: "inal" },
            explicacion: {
                general: "Los adaptadores de red permiten que los dispositivos se conecten a una red.",
                correcta: {
                    "Tipo A": "Descripción corresponde a un adaptador de red Alámbrica (Ethernet), que usa un cable con conector RJ-45.",
                    "Tipo B": "Descripción corresponde a un adaptador de red Inalámbrica (Wi-Fi o Bluetooth), que usa antenas y señales de radio."
                }
            }
        },
        {
            id: 44, // Adaptación de pregunta visual
            enunciado: "Una topología de red se muestra con un dispositivo central (como un switch) al cual se conectan varios otros dispositivos (como PCs y servidores) de forma individual. Desde este dispositivo central, hay una conexión a otro dispositivo que a su vez podría ser el centro de otra estrella o conectar a un backbone. ¿Qué tipo de topología describe mejor esta estructura general?",
            tipo: "seleccion_simple",
            opciones: { a: "Jerárquica", b: "Anillo", c: "Bus Completo", d:"Malla"}, // Opciones basadas en lo que pudiste ver o es común.
            respuestaCorrecta: "a", // Asumiendo que la descripción apunta a una jerarquía de estrellas.
            explicacion: {
                general: "Las topologías describen la organización física o lógica de una red.",
                correcta: "a) Jerárquica (o de Árbol): Esta topología se caracteriza por tener un nodo raíz y múltiples niveles de dispositivos conectados en una estructura similar a un árbol. Esencialmente, es una colección de topologías en estrella conectadas entre sí de forma jerárquica. La descripción encaja con esto.",
                incorrecta: {
                    b: "Anillo: Los dispositivos se conectan en un círculo cerrado.",
                    c: "Bus Completo: No es un término estándar. La topología de bus tiene un único cable troncal.",
                    d: "Malla: Cada dispositivo está conectado a muchos otros (malla completa) o a algunos otros (malla parcial), ofreciendo redundancia."
                }
            }
        }
    ];

    // El resto del JavaScript (mostrarPreguntas, evaluarRespuestas, etc.)
    // sería igual o muy similar al que te proporcioné en la respuesta anterior,
    // solo asegurándote de que el switch en evaluarRespuestas maneje bien el nuevo tipo
    // 'identificar_adaptadores' si lo implementas como un tipo único, o si usas
    // preguntas simples para cada parte.

    // Aquí va la lógica de mostrarPreguntas y evaluarRespuestas adaptada:

    function mostrarPreguntas() {
        bancoPreguntas.forEach(pregunta => {
            const preguntaDiv = document.createElement('div');
            preguntaDiv.className = 'pregunta-container';
            preguntaDiv.setAttribute('data-question-id', pregunta.id);

            let contenidoPregunta = `<p class="enunciado"><strong>${pregunta.id}.</strong> ${pregunta.enunciado}</p><div class="opciones">`;

            switch (pregunta.tipo) {
                case 'seleccion_simple':
                case 'seleccion_simple_doble': // Tratar igual para la generación de HTML
                    const opcionesAMostrar = pregunta.opciones_corregidas || pregunta.opciones;
                    for (const key in opcionesAMostrar) {
                        contenidoPregunta += `<label><input type="radio" name="q${pregunta.id}" value="${key}"> ${opcionesAMostrar[key]}</label>`;
                    }
                    break;
                case 'verdadero_falso':
                    contenidoPregunta += `<label><input type="radio" name="q${pregunta.id}" value="verdadero"> Verdadero</label>`;
                    contenidoPregunta += `<label><input type="radio" name="q${pregunta.id}" value="falso"> Falso</label>`;
                    break;
                case 'emparejamiento_select':
                    pregunta.items.forEach(item => {
                        contenidoPregunta += `<div class="emparejamiento-container"><p>${item.nombre}: <select name="q${pregunta.id}_${item.id}">`;
                        contenidoPregunta += `<option value="">Selecciona...</option>`;
                        pregunta.descripciones.forEach(desc => {
                            contenidoPregunta += `<option value="${desc.id}">${desc.texto}</option>`;
                        });
                        contenidoPregunta += `</select></p></div>`;
                    });
                    break;
                case 'identificar_adaptadores':
                     for (const parteKey in pregunta.opciones) { // q43_a, q43_b
                        const parteInfo = pregunta.opciones[parteKey];
                        contenidoPregunta += `<p>${parteInfo.label}`;
                        for (const choiceKey in parteInfo.choices) {
                             contenidoPregunta += `<label style="display:inline-block; margin-left:10px;"><input type="radio" name="${parteKey}" value="${choiceKey}"> ${parteInfo.choices[choiceKey]}</label>`;
                        }
                        contenidoPregunta += `</p>`;
                    }
                    break;
            }
            contenidoPregunta += `</div>`;
            contenidoPregunta += `<div class="feedback" style="display:none;">
                                    <p><strong>Tu respuesta:</strong> <span class="user-answer-text"></span></p>
                                    <p><strong>Respuesta correcta:</strong> <span class="correct-answer-text"></span></p>
                                    <div class="explanation-content"></div>
                                 </div>`;
            preguntaDiv.innerHTML = contenidoPregunta;
            examenForm.appendChild(preguntaDiv);
        });
    }
    
    function evaluarRespuestas() {
        let puntajeObtenido = 0;
        let totalPreguntas = bancoPreguntas.length; 

        bancoPreguntas.forEach(pregunta => {
            const preguntaContainer = examenForm.querySelector(`.pregunta-container[data-question-id="${pregunta.id}"]`);
            const feedbackDiv = preguntaContainer.querySelector('.feedback');
            const userAnswerSpan = feedbackDiv.querySelector('.user-answer-text');
            const correctAnswerSpan = feedbackDiv.querySelector('.correct-answer-text');
            const explanationContentDiv = feedbackDiv.querySelector('.explanation-content');
            
            let esCorrectaLaPregunta = false;
            let respuestaUsuarioFormateada = "No contestada";
            let respuestaCorrectaFormateada = "";
            let notaAdicionalHTML = "";

            if (pregunta.explicacion && pregunta.explicacion.nota_importante) {
                 notaAdicionalHTML += `<p style="color:red; font-weight:bold;"><em>Nota Importante:</em> ${pregunta.explicacion.nota_importante}</p>`;
            }
            if (pregunta.explicacion && pregunta.explicacion.nota) { // Para Q32
                notaAdicionalHTML += `<p><em>Nota: ${pregunta.explicacion.nota}</em></p>`;
            }


            switch (pregunta.tipo) {
                case 'seleccion_simple':
                case 'seleccion_simple_doble':
                    const radioSeleccionado = preguntaContainer.querySelector(`input[name="q${pregunta.id}"]:checked`);
                    const valorUsuarioRadio = radioSeleccionado ? radioSeleccionado.value : "";
                    const opcionesUsadas = pregunta.opciones_corregidas || pregunta.opciones;
                    const respuestaCorrectaActual = pregunta.respuestaCorrecta_corregida || pregunta.respuestaCorrecta;

                    respuestaUsuarioFormateada = radioSeleccionado ? opcionesUsadas[valorUsuarioRadio] : "No contestada";
                    respuestaCorrectaFormateada = opcionesUsadas[respuestaCorrectaActual];
                    esCorrectaLaPregunta = valorUsuarioRadio === respuestaCorrectaActual;
                    break;

                case 'verdadero_falso':
                    const vfSeleccionado = preguntaContainer.querySelector(`input[name="q${pregunta.id}"]:checked`);
                    const valorUsuarioVF = vfSeleccionado ? vfSeleccionado.value : "";
                    respuestaUsuarioFormateada = vfSeleccionado ? (valorUsuarioVF === "verdadero" ? "Verdadero" : "Falso") : "No contestada";
                    respuestaCorrectaFormateada = pregunta.respuestaCorrecta.charAt(0).toUpperCase() + pregunta.respuestaCorrecta.slice(1);
                    esCorrectaLaPregunta = valorUsuarioVF === pregunta.respuestaCorrecta;
                    break;
                
                case 'emparejamiento_select':
                    let todasEmparejadasCorrectas = true;
                    let userAnswersEmp = [];
                    let correctAnswersEmp = [];

                    pregunta.items.forEach(item => {
                        const selectElem = preguntaContainer.querySelector(`select[name="q${pregunta.id}_${item.id}"]`);
                        const userChoiceId = selectElem.value;
                        const userChoiceText = userChoiceId && pregunta.descripciones.find(d => d.id === userChoiceId) ? pregunta.descripciones.find(d => d.id === userChoiceId).texto : "No seleccionado";
                        userAnswersEmp.push(`<em>${item.nombre}</em> -> ${userChoiceText}`);
                        
                        const correctDescId = pregunta.respuestaCorrecta[item.id];
                        const correctDescText = pregunta.descripciones.find(d => d.id === correctDescId).texto;
                        correctAnswersEmp.push(`<em>${item.nombre}</em> -> ${correctDescText}`);

                        if (userChoiceId !== correctDescId) {
                            todasEmparejadasCorrectas = false;
                        }
                    });
                    esCorrectaLaPregunta = todasEmparejadasCorrectas;
                    respuestaUsuarioFormateada = userAnswersEmp.join('<br>');
                    respuestaCorrectaFormateada = correctAnswersEmp.join('<br>');
                    break;
                case 'identificar_adaptadores':
                    let adaptadoresCorrectos = true;
                    let userAnswersAdapt = [];
                    let correctAnswersAdapt = [];
                    for (const parteKey in pregunta.opciones) { // q43_a, q43_b
                        const parteInfo = pregunta.opciones[parteKey];
                        const radioParteSel = preguntaContainer.querySelector(`input[name="${parteKey}"]:checked`);
                        const valUserParte = radioParteSel ? radioParteSel.value : "";
                        
                        userAnswersAdapt.push(`${parteInfo.label} ${radioParteSel ? parteInfo.choices[valUserParte] : "(No contestado)"}`);
                        correctAnswersAdapt.push(`${parteInfo.label} ${parteInfo.choices[pregunta.respuestaCorrecta[parteKey]]}`);

                        if (valUserParte !== pregunta.respuestaCorrecta[parteKey]) {
                            adaptadoresCorrectos = false;
                        }
                    }
                    esCorrectaLaPregunta = adaptadoresCorrectos;
                    respuestaUsuarioFormateada = userAnswersAdapt.join('<br>');
                    respuestaCorrectaFormateada = correctAnswersAdapt.join('<br>');
                    break;
            }

            userAnswerSpan.innerHTML = respuestaUsuarioFormateada; 
            correctAnswerSpan.innerHTML = respuestaCorrectaFormateada; 
            
            let explanationHTML = `<p class="explanation-title">Explicación:</p>`;
            explanationHTML += notaAdicionalHTML; 
            explanationHTML += `<p>${pregunta.explicacion.general || ""}</p>`;

            if (esCorrectaLaPregunta) {
                preguntaContainer.classList.add('correct');
                feedbackDiv.classList.add('correct-feedback');
                if (typeof pregunta.explicacion.correcta === 'string') {
                    explanationHTML += `<p class="reason-correct">${pregunta.explicacion.correcta}</p>`;
                } else if (typeof pregunta.explicacion.correcta === 'object') { 
                    explanationHTML += `<p class="reason-correct">Detalles de la respuesta correcta:</p><ul>`;
                    for(const key in pregunta.explicacion.correcta){
                        explanationHTML += `<li><strong>${key.replace(/\b\w/g, l => l.toUpperCase())}:</strong> ${pregunta.explicacion.correcta[key]}</li>`;
                    }
                    explanationHTML += `</ul>`;
                }
                puntajeObtenido++;
            } else {
                preguntaContainer.classList.add('incorrect');
                feedbackDiv.classList.add('incorrect-feedback');
                 if (pregunta.explicacion.incorrecta) {
                     explanationHTML += `<p class="reason-incorrect">Análisis de las opciones incorrectas o tu respuesta:</p>`;
                    if (typeof pregunta.explicacion.incorrecta === 'string') {
                         explanationHTML += `<p>${pregunta.explicacion.incorrecta}</p>`;
                    } else if (typeof pregunta.explicacion.incorrecta === 'object') { 
                        explanationHTML += `<ul>`;
                        const opcionesUsadasEval = pregunta.opciones_corregidas || pregunta.opciones; // Para Q33
                        for (const key in pregunta.explicacion.incorrecta) {
                            const opcionTexto = (opcionesUsadasEval && opcionesUsadasEval[key]) ? opcionesUsadasEval[key] : key.toUpperCase();
                            explanationHTML += `<li><strong>Opción ${opcionTexto}:</strong> ${pregunta.explicacion.incorrecta[key]}</li>`;
                        }
                        explanationHTML += `</ul>`;
                    }
                }
            }
            explanationContentDiv.innerHTML = explanationHTML;
            feedbackDiv.style.display = 'block';
        });

        puntajeTotalP.textContent = `Obtuviste ${puntajeObtenido} de ${totalPreguntas} preguntas correctas.`;
        let porcentaje = (totalPreguntas > 0) ? (puntajeObtenido / totalPreguntas) * 100 : 0;
        if (porcentaje === 100) {
            mensajeFinalP.textContent = "¡Felicidades! ¡Todas las respuestas son correctas! Estás listo.";
        } else if (porcentaje >= 70) {
            mensajeFinalP.textContent = "¡Muy bien! Repasa las explicaciones de las preguntas incorrectas para afianzar.";
        } else {
            mensajeFinalP.textContent = "Necesitas repasar más. Concéntrate en las explicaciones para entender los conceptos.";
        }
        resultadosFinalesDiv.style.display = 'block';
        submitBtn.disabled = true;
        window.scrollTo(0, document.body.scrollHeight);
    }

    mostrarPreguntas();
    submitBtn.addEventListener('click', evaluarRespuestas);
});