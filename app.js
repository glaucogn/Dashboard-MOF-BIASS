// ============================================
// MOF Call Center Financiero - Application
// ============================================

// ============================================
// DATA: 22 MOF Definitions
// ============================================

const AREAS = {
    direccion: { name: 'Dirección General', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.25)' },
    comercial: { name: 'Gerencia Comercial', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.25)' },
    operaciones: { name: 'Gerencia de Operaciones', color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.25)' },
    calidad: { name: 'Back Office y Calidad', color: '#10b981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.25)' },
    rrhh: { name: 'Recursos Humanos', color: '#f43f5e', bg: 'rgba(244,63,94,0.12)', border: 'rgba(244,63,94,0.25)' },
    ti: { name: 'Tecnología', color: '#f97316', bg: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.25)' },
    bi: { name: 'Business Intelligence', color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.25)' },
    admin: { name: 'Administración', color: '#94a3b8', bg: 'rgba(148,163,184,0.12)', border: 'rgba(148,163,184,0.25)' },
    convenios: { name: 'Ventas Convenio', color: '#14b8a6', bg: 'rgba(20,184,166,0.12)', border: 'rgba(20,184,166,0.25)' }
};

const MOF_DATA = [
    // ===== 1. GERENCIA GENERAL =====
    {
        id: 'gerente-general',
        titulo: 'Gerencia General',
        area: 'direccion',
        reportaA: 'Directorio / Accionistas',
        supervisa: ['Gerencia Comercial', 'Supervisor de Back Office y Calidad', 'Jefe de RRHH', 'Coordinador Administrativo / Contable'],
        objetivo: 'Dirigir, planificar y coordinar todas las actividades de la empresa, garantizando el cumplimiento de los objetivos estratégicos y la rentabilidad del negocio, así como el mantenimiento de relaciones comerciales sólidas con los bancos clientes.',
        funcionesPrincipales: [
            'Definir la visión, misión y objetivos estratégicos de la empresa.',
            'Representar legalmente a la empresa ante terceros, clientes (bancos) y entidades reguladoras.',
            'Negociar y firmar contratos comerciales con los bancos para la venta de productos financieros.',
            'Supervisar el cumplimiento de metas de ventas, calidad y rentabilidad de todas las campañas.',
            'Aprobar presupuestos anuales y controlar la ejecución financiera.',
            'Liderar las reuniones de gerencia y tomar decisiones estratégicas.',
            'Evaluar el desempeño de las gerencias y coordinaciones a su cargo.',
            'Garantizar el cumplimiento de normativas laborales y regulaciones del sector financiero.'
        ],
        funcionesSecundarias: [
            'Representar a la empresa en eventos del sector y networking.',
            'Impulsar la innovación y mejora continua de procesos operativos.',
            'Gestionar relaciones con proveedores estratégicos (telecomunicaciones, tecnología).',
            'Aprobar políticas internas y manuales de la organización.'
        ],
        requisitos: {
            educacion: 'Título universitario en Administración de Empresas, Ingeniería Industrial, Economía o afines. MBA o maestría deseable.',
            experiencia: 'Mínimo 5 años en posiciones gerenciales en call centers, banca o empresas de servicios financieros.',
            conocimientos: ['Gestión empresarial y planificación estratégica', 'Productos financieros (tarjetas de crédito, préstamos, seguros)', 'Normativa laboral y regulaciones del sector financiero', 'Indicadores de gestión y análisis financiero', 'Gestión de operaciones de call center']
        },
        competencias: [
            { nombre: 'Liderazgo estratégico', tipo: 'blanda' },
            { nombre: 'Negociación', tipo: 'blanda' },
            { nombre: 'Toma de decisiones', tipo: 'blanda' },
            { nombre: 'Orientación a resultados', tipo: 'blanda' },
            { nombre: 'Comunicación ejecutiva', tipo: 'blanda' },
            { nombre: 'Visión de negocio', tipo: 'blanda' },
            { nombre: 'Gestión financiera', tipo: 'tecnica' },
            { nombre: 'Análisis de KPIs', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Rentabilidad general', descripcion: 'Margen neto de la empresa' },
            { nombre: 'Cumplimiento de metas comerciales', descripcion: '% de cumplimiento vs. objetivos pactados con bancos' },
            { nombre: 'Satisfacción del cliente (banco)', descripcion: 'NPS o encuesta de satisfacción de los bancos' },
            { nombre: 'Rotación de personal', descripcion: '% de rotación mensual/anual' }
        ],
        coordinaciones: {
            internas: 'Todas las gerencias y coordinaciones de la empresa.',
            externas: 'Directivos de bancos clientes, proveedores de telecomunicaciones, asesores legales, auditores.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario administrativo con disponibilidad extendida según necesidad.',
            modalidad: 'Presencial con posibilidad de reuniones virtuales.',
            herramientas: 'Computadora, teléfono corporativo, acceso a sistemas gerenciales y BI.'
        }
    },
    // ===== 2. GERENCIA COMERCIAL =====
    {
        id: 'gerente-comercial',
        titulo: 'Gerencia Comercial',
        area: 'comercial',
        reportaA: 'Gerencia General',
        supervisa: ['Supervisor de Ventas', 'Jefe de Convenios', 'Jefe de BI (Business Intelligence)'],
        objetivo: 'Liderar la estrategia comercial de la empresa, gestionando las campañas de venta de productos financieros para los distintos bancos clientes, maximizando la productividad de la fuerza de ventas y el cumplimiento de metas comerciales.',
        funcionesPrincipales: [
            'Diseñar e implementar la estrategia comercial para cada campaña/banco.',
            'Gestionar la relación operativa con los bancos clientes (reuniones, reportes, acuerdos).',
            'Establecer metas de ventas por campaña, equipo y asesor.',
            'Supervisar el desempeño de los Supervisores de Ventas y el Jefe de Convenios.',
            'Analizar indicadores de productividad, conversión y efectividad de ventas.',
            'Coordinar con el Analista de BI la asignación y calidad de las bases de clientes.',
            'Proponer esquemas de comisiones e incentivos para la fuerza de ventas.',
            'Reportar resultados comerciales a la Gerencia General.'
        ],
        funcionesSecundarias: [
            'Identificar oportunidades de nuevos negocios con bancos potenciales.',
            'Coordinar con Capacitación la formación de asesores en nuevos productos.',
            'Participar en la selección de Supervisores de Ventas.',
            'Analizar tendencias del mercado financiero para ajustar estrategias.'
        ],
        requisitos: {
            educacion: 'Título universitario en Administración, Marketing, Ingeniería Comercial o afines.',
            experiencia: 'Mínimo 3 años en jefatura o gerencia comercial en call centers o empresas de servicios financieros.',
            conocimientos: ['Gestión de campañas de telemarketing y ventas', 'Productos financieros bancarios', 'Análisis de indicadores comerciales (conversión, TMO, contactabilidad)', 'CRM y herramientas de gestión comercial', 'Excel avanzado y herramientas de reporting']
        },
        competencias: [
            { nombre: 'Liderazgo comercial', tipo: 'blanda' },
            { nombre: 'Orientación a resultados', tipo: 'blanda' },
            { nombre: 'Negociación', tipo: 'blanda' },
            { nombre: 'Pensamiento analítico', tipo: 'blanda' },
            { nombre: 'Gestión de equipos', tipo: 'blanda' },
            { nombre: 'Manejo de CRM', tipo: 'tecnica' },
            { nombre: 'Análisis de datos comerciales', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Ventas totales', descripcion: 'Cantidad de ventas cerradas vs. meta mensual' },
            { nombre: 'Tasa de conversión', descripcion: '% de contactos que se convierten en ventas' },
            { nombre: 'Productividad por asesor', descripcion: 'Ventas promedio por asesor por día' },
            { nombre: 'Cumplimiento por campaña', descripcion: '% de meta alcanzada por cada banco/campaña' }
        ],
        coordinaciones: {
            internas: 'Gerencia General, Supervisores de Ventas, Jefe de Convenios, Analista de BI, Coordinador de Capacitación.',
            externas: 'Ejecutivos de cuenta de los bancos clientes, proveedores de bases de datos.'
        },
        condiciones: {
            horario: 'Lunes a sábado, horario completo con disponibilidad para reportes fuera de horario.',
            modalidad: 'Presencial.',
            herramientas: 'Computadora, teléfono, CRM, sistemas de marcación, herramientas de BI.'
        }
    },
    // ===== 3. SUPERVISOR DE VENTAS =====
    {
        id: 'supervisor-ventas',
        titulo: 'Supervisor de Ventas',
        area: 'comercial',
        reportaA: 'Gerencia Comercial',
        supervisa: ['Monitor de Ventas'],
        objetivo: 'Gestionar y liderar un equipo de asesores de ventas asignado a una campaña o banco específico, asegurando el cumplimiento de las metas de ventas diarias y mensuales mediante el coaching, seguimiento y motivación del equipo.',
        funcionesPrincipales: [
            'Supervisar en tiempo real la gestión de ventas de su equipo de asesores.',
            'Realizar seguimiento diario de indicadores: ventas, llamadas, contactabilidad, conversión.',
            'Brindar coaching y retroalimentación individual a los asesores.',
            'Coordinar con el Monitor de Ventas para identificar oportunidades de mejora.',
            'Gestionar la asistencia, puntualidad y disciplina de su equipo.',
            'Escalar incidencias operativas a la Gerencia Comercial o áreas de soporte.',
            'Implementar estrategias de motivación (concursos, incentivos internos).',
            'Elaborar reportes diarios y semanales de resultados de su equipo.'
        ],
        funcionesSecundarias: [
            'Participar en la inducción de nuevos asesores junto con Capacitación.',
            'Proponer mejoras en los scripts y argumentarios de ventas.',
            'Coordinar con Validación la corrección de ventas observadas.',
            'Asistir a reuniones de calibración con el banco cliente.'
        ],
        requisitos: {
            educacion: 'Técnico o universitario en Administración, Marketing o afines. Estudios truncos aceptados con experiencia comprobada.',
            experiencia: 'Mínimo 1 año como supervisor de ventas en call center o fuerza de ventas de productos financieros.',
            conocimientos: ['Técnicas de venta telefónica y manejo de objeciones', 'Productos financieros del banco asignado', 'Manejo de plataformas de marcación y CRM', 'Excel intermedio para reportes', 'Coaching y gestión de equipos']
        },
        competencias: [
            { nombre: 'Liderazgo operativo', tipo: 'blanda' },
            { nombre: 'Coaching', tipo: 'blanda' },
            { nombre: 'Comunicación asertiva', tipo: 'blanda' },
            { nombre: 'Orientación a resultados', tipo: 'blanda' },
            { nombre: 'Manejo de presión', tipo: 'blanda' },
            { nombre: 'Manejo de sistemas de marcación', tipo: 'tecnica' },
            { nombre: 'Reportería en Excel', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Cumplimiento de meta de ventas', descripcion: '% de meta diaria y mensual alcanzada por su equipo' },
            { nombre: 'Tasa de conversión del equipo', descripcion: '% de contactos efectivos que resultan en venta' },
            { nombre: 'Rotación de asesores', descripcion: '% de rotación mensual de su equipo' },
            { nombre: 'TMO (Tiempo Medio de Operación)', descripcion: 'Tiempo promedio de llamada de su equipo' }
        ],
        coordinaciones: {
            internas: 'Gerencia Comercial, Monitor de Ventas, Asesores Comerciales, Supervisor de Back Office y Calidad, Coordinador de Capacitación.',
            externas: 'Contacto indirecto con ejecutivos del banco en reuniones de calibración.'
        },
        condiciones: {
            horario: 'Lunes a sábado, turno completo según campaña asignada.',
            modalidad: 'Presencial en sala de operaciones.',
            herramientas: 'Computadora, headset, sistemas de marcación, CRM, pizarra de indicadores.'
        }
    },
    // ===== 4. MONITOR DE VENTAS =====
    {
        id: 'monitor-ventas',
        titulo: 'Monitor de Ventas',
        area: 'comercial',
        reportaA: 'Supervisor de Ventas',
        supervisa: [],
        objetivo: 'Realizar escuchas y evaluaciones de las llamadas de los asesores de ventas para asegurar la calidad del proceso de venta, el cumplimiento del protocolo de atención y la correcta oferta de los productos financieros.',
        funcionesPrincipales: [
            'Realizar monitoreos de llamadas en tiempo real y grabaciones de los asesores.',
            'Evaluar la calidad de las llamadas utilizando la parrilla de monitoreo establecida.',
            'Identificar oportunidades de mejora en el discurso, manejo de objeciones y cierre de ventas.',
            'Elaborar informes de monitoreo con feedback específico por asesor.',
            'Coordinar con el Supervisor sesiones de retroalimentación basadas en los monitoreos.',
            'Detectar prácticas de venta inadecuadas o incumplimiento de protocolos.',
            'Proponer actualizaciones al script de ventas basadas en hallazgos de monitoreo.'
        ],
        funcionesSecundarias: [
            'Participar en calibraciones de calidad con el Supervisor de Back Office y Calidad.',
            'Apoyar en la capacitación de nuevos asesores con ejemplos de buenas prácticas.',
            'Generar reportes estadísticos de calidad por equipo.'
        ],
        requisitos: {
            educacion: 'Técnico o universitario en Administración, Comunicaciones o afines.',
            experiencia: 'Mínimo 6 meses como asesor de ventas con desempeño destacado o experiencia previa en monitoreo de calidad.',
            conocimientos: ['Técnicas de venta telefónica', 'Productos financieros bancarios', 'Evaluación de calidad de llamadas', 'Manejo de herramientas de grabación y escucha', 'Excel básico-intermedio']
        },
        competencias: [
            { nombre: 'Atención al detalle', tipo: 'blanda' },
            { nombre: 'Comunicación efectiva', tipo: 'blanda' },
            { nombre: 'Objetividad', tipo: 'blanda' },
            { nombre: 'Escucha activa', tipo: 'blanda' },
            { nombre: 'Manejo de herramientas de monitoreo', tipo: 'tecnica' },
            { nombre: 'Elaboración de informes', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Cantidad de monitoreos realizados', descripcion: 'Número de escuchas evaluadas por día/semana' },
            { nombre: 'Nota promedio de calidad', descripcion: 'Promedio de calificación de las evaluaciones' },
            { nombre: 'Detección de incidencias', descripcion: 'Número de prácticas inadecuadas detectadas' },
            { nombre: 'Cumplimiento de cuota de monitoreo', descripcion: '% de asesores monitoreados vs. total' }
        ],
        coordinaciones: {
            internas: 'Supervisor de Ventas, Asesores Comerciales, Supervisor de Back Office y Calidad.',
            externas: 'N/A'
        },
        condiciones: {
            horario: 'Lunes a sábado, turno completo según campaña asignada.',
            modalidad: 'Presencial en sala de operaciones.',
            herramientas: 'Computadora, headset, software de grabación y monitoreo, planillas de evaluación.'
        }
    },
    // ===== 5. ASESOR COMERCIAL =====
    {
        id: 'asesor-ventas',
        titulo: 'Asesor Comercial',
        area: 'comercial',
        reportaA: 'Supervisor de Ventas',
        supervisa: [],
        objetivo: 'Realizar contactos telefónicos con clientes potenciales para ofrecer y vender productos financieros del banco asignado (tarjetas de crédito, préstamos personales, seguros, etc.), cumpliendo los protocolos de venta y las metas establecidas.',
        funcionesPrincipales: [
            'Realizar llamadas outbound a clientes de la base de datos asignada.',
            'Presentar y ofrecer los productos financieros según el script y protocolo establecido.',
            'Manejar objeciones del cliente utilizando técnicas de venta consultiva.',
            'Registrar correctamente la información del cliente y la venta en el sistema/CRM.',
            'Cumplir con las metas diarias y mensuales de ventas asignadas.',
            'Transferir ventas al área de Validación cuando sea requerido.',
            'Respetar las normativas de protección de datos personales del cliente.'
        ],
        funcionesSecundarias: [
            'Participar en las capacitaciones y actualizaciones de productos.',
            'Reportar incidencias técnicas con el sistema de marcación.',
            'Cumplir con las directrices de calidad en cada llamada.',
            'Asistir a las sesiones de retroalimentación con su supervisor.'
        ],
        requisitos: {
            educacion: 'Secundaria completa (mínimo). Estudios técnicos o universitarios en curso, deseables.',
            experiencia: 'No indispensable. Experiencia previa en ventas telefónicas o atención al cliente es deseable.',
            conocimientos: ['Técnicas básicas de venta', 'Comunicación telefónica', 'Manejo básico de computadora', 'Disposición para aprender sobre productos financieros']
        },
        competencias: [
            { nombre: 'Persuasión', tipo: 'blanda' },
            { nombre: 'Comunicación clara', tipo: 'blanda' },
            { nombre: 'Tolerancia a la frustración', tipo: 'blanda' },
            { nombre: 'Orientación a metas', tipo: 'blanda' },
            { nombre: 'Proactividad', tipo: 'blanda' },
            { nombre: 'Manejo de CRM', tipo: 'tecnica' },
            { nombre: 'Digitación rápida', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Ventas diarias', descripcion: 'Número de ventas cerradas por día' },
            { nombre: 'Tasa de conversión individual', descripcion: '% de contactos efectivos que resultan en venta' },
            { nombre: 'TMO', descripcion: 'Tiempo promedio por llamada' },
            { nombre: 'Calidad de llamada', descripcion: 'Nota promedio en monitoreos de calidad' }
        ],
        coordinaciones: {
            internas: 'Supervisor de Ventas, Monitor de Ventas, Back Office.',
            externas: 'Clientes finales (personas naturales contactadas telefónicamente).'
        },
        condiciones: {
            horario: 'Lunes a sábado, turno de 6-8 horas según campaña.',
            modalidad: 'Presencial en sala de operaciones.',
            herramientas: 'Computadora, headset, sistema de marcación automática/predictiva, CRM.'
        }
    },
    // ===== 6. JEFE DE CONVENIOS =====
    {
        id: 'coordinador-convenios',
        titulo: 'Jefe de Convenios',
        area: 'convenios',
        reportaA: 'Gerencia Comercial',
        supervisa: ['Asesor de Venta de Convenios', 'Back Office de Convenios'],
        objetivo: 'Gestionar y desarrollar el canal de ventas por convenios, estableciendo alianzas con empresas e instituciones para la colocación de productos financieros a sus colaboradores, supervisando al equipo de asesores y back office de convenios.',
        funcionesPrincipales: [
            'Identificar, contactar y negociar convenios con empresas e instituciones para ofrecer productos financieros a sus colaboradores.',
            'Supervisar y dirigir al equipo de Asesores de Venta de Convenios y Validadores de Convenios.',
            'Establecer metas de ventas por convenio y hacer seguimiento al cumplimiento.',
            'Coordinar las visitas y presentaciones en las empresas conveniadas.',
            'Mantener actualizado el portafolio de convenios activos.',
            'Gestionar la documentación y contratos de cada convenio.',
            'Elaborar reportes de resultados del canal de convenios a la Gerencia Comercial.'
        ],
        funcionesSecundarias: [
            'Participar en ferias y eventos corporativos para captar nuevos convenios.',
            'Coordinar con Capacitación la formación de los asesores de convenios.',
            'Resolver incidencias o reclamos de las empresas conveniadas.',
            'Proponer mejoras en los procesos del canal de convenios.'
        ],
        requisitos: {
            educacion: 'Título universitario en Administración, Marketing, Ingeniería Comercial o afines.',
            experiencia: 'Mínimo 2 años en ventas corporativas, convenios empresariales o desarrollo de canales comerciales.',
            conocimientos: ['Venta corporativa y desarrollo de cuentas', 'Productos financieros bancarios', 'Negociación empresarial', 'Gestión de equipos de venta', 'Office intermedio-avanzado']
        },
        competencias: [
            { nombre: 'Negociación empresarial', tipo: 'blanda' },
            { nombre: 'Relaciones públicas', tipo: 'blanda' },
            { nombre: 'Liderazgo', tipo: 'blanda' },
            { nombre: 'Orientación al cliente', tipo: 'blanda' },
            { nombre: 'Planificación', tipo: 'blanda' },
            { nombre: 'CRM y gestión de cuentas', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Nuevos convenios firmados', descripcion: 'Cantidad de nuevos convenios por mes' },
            { nombre: 'Ventas por canal convenios', descripcion: 'Total de ventas generadas por el canal' },
            { nombre: 'Convenios activos', descripcion: 'Cantidad de convenios vigentes y productivos' },
            { nombre: 'Satisfacción de empresas conveniadas', descripcion: 'Encuesta de satisfacción a empresas aliadas' }
        ],
        coordinaciones: {
            internas: 'Gerencia Comercial, Asesores de Venta de Convenios, Back Office de Convenios, Capacitación.',
            externas: 'Gerentes de RRHH y administradores de empresas conveniadas, ejecutivos de bancos.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario completo con disponibilidad para visitas externas.',
            modalidad: 'Mixta: oficina y visitas a empresas conveniadas.',
            herramientas: 'Computadora, teléfono, CRM, material de presentación, vehículo (deseable).'
        }
    },
    // ===== SUPERVISOR DE VENTAS DE CONVENIOS =====
    {
        id: 'supervisor-convenios',
        titulo: 'Supervisor de Ventas de Convenios',
        area: 'convenios',
        reportaA: 'Jefe de Convenios',
        supervisa: ['Asesor de Venta de Convenios'],
        objetivo: 'Supervisar al equipo de asesores de ventas de convenios y asegurar el cumplimiento de las metas comerciales.',
        funcionesPrincipales: [
            'Supervisar en tiempo real la gestión de ventas de su equipo.',
            'Realizar seguimiento diario al cumplimiento de metas.',
            'Brindar retroalimentación y coaching a los asesores.'
        ],
        funcionesSecundarias: [
            'Reportar indicadores de gestión a la Jefatura.'
        ],
        kpis: [
            { nombre: 'Cumplimiento de meta', descripcion: '% de ventas vs meta' },
            { nombre: 'Calidad de ventas', descripcion: '% de ventas aprobadas' }
        ],
        coordinaciones: {
            internas: 'Jefe de Convenios, Back Office.',
            externas: 'N/A'
        },
        condiciones: {
            horario: 'Lunes a viernes 9am a 6pm, sábados 9am a 1pm.',
            modalidad: 'Presencial.',
            herramientas: 'PC, Headset, Sistema de marcación.'
        }
    },
    // ===== 7. ASESOR DE VENTA DE CONVENIOS =====
    {
        id: 'asesor-convenios',
        titulo: 'Asesor de Venta de Convenios',
        area: 'convenios',
        reportaA: 'Jefe de Convenios',
        supervisa: [],
        objetivo: 'Realizar la venta presencial o telefónica de productos financieros a colaboradores de empresas con convenio vigente, cumpliendo las metas de colocación y brindando una atención de calidad.',
        funcionesPrincipales: [
            'Visitar empresas conveniadas para ofrecer productos financieros a sus colaboradores.',
            'Realizar presentaciones grupales o individuales sobre los beneficios de los productos.',
            'Completar solicitudes y recopilar la documentación requerida para cada venta.',
            'Cumplir con las metas de ventas por convenio asignado.',
            'Registrar las ventas y seguimiento en el sistema/CRM.',
            'Coordinar con el Back Office de Convenios la verificación de cada operación.'
        ],
        funcionesSecundarias: [
            'Reportar incidencias o rechazos al Jefe de Convenios.',
            'Participar en capacitaciones sobre nuevos productos.',
            'Mantener actualizado el material de ventas y formularios.',
            'Brindar atención posventa a clientes del canal de convenios.'
        ],
        requisitos: {
            educacion: 'Técnico o universitario en Administración, Marketing o afines.',
            experiencia: 'Mínimo 6 meses en ventas de productos financieros o ventas presenciales/campo.',
            conocimientos: ['Ventas presenciales y corporativas', 'Productos financieros', 'Atención al cliente', 'Manejo básico de Office y CRM']
        },
        competencias: [
            { nombre: 'Comunicación interpersonal', tipo: 'blanda' },
            { nombre: 'Persuasión', tipo: 'blanda' },
            { nombre: 'Presentación en público', tipo: 'blanda' },
            { nombre: 'Organización', tipo: 'blanda' },
            { nombre: 'Manejo de CRM', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Ventas por convenio', descripcion: 'Número de productos colocados por convenio' },
            { nombre: 'Visitas realizadas', descripcion: 'Cantidad de visitas a empresas por semana' },
            { nombre: 'Tasa de aprobación', descripcion: '% de solicitudes aprobadas por el banco' },
            { nombre: 'Satisfacción del colaborador', descripcion: 'Feedback de los empleados atendidos' }
        ],
        coordinaciones: {
            internas: 'Jefe de Convenios, Validador de Convenios.',
            externas: 'Colaboradores de empresas conveniadas, áreas de RRHH de las empresas.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario completo con desplazamiento a empresas.',
            modalidad: 'Presencial con trabajo de campo.',
            herramientas: 'Laptop/tablet, celular, material de ventas, formularios, CRM.'
        }
    },
    // ===== 8. BACK OFFICE DE CONVENIOS =====
    {
        id: 'validador-convenios',
        titulo: 'Back Office de Convenios',
        area: 'convenios',
        reportaA: 'Jefe de Convenios',
        supervisa: [],
        objetivo: 'Verificar y validar las ventas realizadas por el canal de convenios, asegurando que cumplan con los requisitos documentarios y normativos del banco, garantizando la calidad y legitimidad de cada operación.',
        funcionesPrincipales: [
            'Revisar la documentación completa de cada venta realizada por convenio.',
            'Verificar que los datos del cliente coincidan y estén correctos en el sistema.',
            'Contactar al cliente para confirmar la venta y verificar su conformidad.',
            'Registrar el resultado de la validación (aprobada, observada, rechazada).',
            'Reportar incidencias o irregularidades al Jefe de Convenios.',
            'Mantener actualizado el registro de validaciones en el sistema.'
        ],
        funcionesSecundarias: [
            'Coordinar con el banco la resolución de casos observados.',
            'Proponer mejoras en el checklist de validación.',
            'Apoyar en el archivo y organización de documentación.'
        ],
        requisitos: {
            educacion: 'Técnico en Administración, Contabilidad o afines.',
            experiencia: 'Mínimo 6 meses en validación de documentos, back office o control de calidad en servicios financieros.',
            conocimientos: ['Documentación financiera y requisitos bancarios', 'Verificación de datos', 'Manejo de sistemas de gestión', 'Atención al detalle', 'Office básico']
        },
        competencias: [
            { nombre: 'Atención al detalle', tipo: 'blanda' },
            { nombre: 'Integridad', tipo: 'blanda' },
            { nombre: 'Organización', tipo: 'blanda' },
            { nombre: 'Comunicación clara', tipo: 'blanda' },
            { nombre: 'Manejo de sistemas de gestión', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Validaciones diarias', descripcion: 'Cantidad de expedientes validados por día' },
            { nombre: 'Tasa de aprobación', descripcion: '% de ventas aprobadas sin observaciones' },
            { nombre: 'Tiempo promedio de validación', descripcion: 'Tiempo desde recepción hasta resultado' },
            { nombre: 'Detección de irregularidades', descripcion: 'Número de casos irregulares detectados' }
        ],
        coordinaciones: {
            internas: 'Jefe de Convenios, Asesores de Venta de Convenios.',
            externas: 'Áreas de back office del banco cliente.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario administrativo.',
            modalidad: 'Presencial.',
            herramientas: 'Computadora, sistemas del banco, escáner, teléfono.'
        }
    },
    // ===== 9. ANALISTA DE BI (BUSINESS INTELLIGENCE) =====
    {
        id: 'analista-bd',
        titulo: 'Analista de BI (Business Intelligence)',
        area: 'bi',
        reportaA: 'Gerencia Comercial',
        supervisa: [],
        objetivo: 'Gestionar, depurar y distribuir las bases de datos de clientes para las campañas de venta, así como elaborar reportes de gestión e indicadores de desempeño (MIS) que soporten la toma de decisiones comerciales.',
        funcionesPrincipales: [
            'Recibir, depurar y segmentar las bases de datos proporcionadas por los bancos clientes.',
            'Cargar y asignar las bases de datos al sistema de marcación según criterios de campaña.',
            'Elaborar reportes diarios, semanales y mensuales de indicadores de gestión (MIS).',
            'Generar dashboards de productividad, conversión, ventas y calidad.',
            'Analizar la efectividad de las bases de datos (contactabilidad, penetración, rendimiento).',
            'Garantizar la confidencialidad y protección de los datos personales según normativa.',
            'Coordinar con los bancos el envío y recepción de bases de datos y resultados.'
        ],
        funcionesSecundarias: [
            'Proponer segmentaciones estratégicas para mejorar la contactabilidad.',
            'Automatizar procesos de reportería.',
            'Apoyar al Jefe de BI con datos para análisis avanzados.',
            'Documentar los procedimientos de gestión de bases de datos.'
        ],
        requisitos: {
            educacion: 'Título universitario o técnico en Ingeniería de Sistemas, Estadística, Administración o afines.',
            experiencia: 'Mínimo 1 año en gestión de bases de datos en call centers o empresas de servicios.',
            conocimientos: ['Excel avanzado (tablas dinámicas, macros, Power Query)', 'SQL básico-intermedio', 'Sistemas de marcación y CRM', 'Protección de datos personales', 'Herramientas de BI (Power BI, Google Data Studio deseable)']
        },
        competencias: [
            { nombre: 'Pensamiento analítico', tipo: 'blanda' },
            { nombre: 'Atención al detalle', tipo: 'blanda' },
            { nombre: 'Organización', tipo: 'blanda' },
            { nombre: 'Confidencialidad', tipo: 'blanda' },
            { nombre: 'Excel avanzado', tipo: 'tecnica' },
            { nombre: 'SQL', tipo: 'tecnica' },
            { nombre: 'Herramientas de BI', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Contactabilidad de bases', descripcion: '% de registros contactados vs. total asignado' },
            { nombre: 'Oportunidad de reportes', descripcion: 'Entrega puntual de reportes MIS' },
            { nombre: 'Calidad de datos', descripcion: '% de registros válidos (sin duplicados, datos completos)' },
            { nombre: 'Automatización', descripcion: 'Procesos manuales automatizados por período' }
        ],
        coordinaciones: {
            internas: 'Gerencia Comercial, Supervisores de Ventas, Jefe de BI, Soporte de TI.',
            externas: 'Áreas de bases de datos y operaciones de los bancos clientes.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario administrativo. Sábados según necesidad.',
            modalidad: 'Presencial.',
            herramientas: 'Computadora con alto rendimiento, Excel, SQL, sistema de marcación, herramientas de BI.'
        }
    },
    // ===== 12. SUPERVISOR DE BACK OFFICE Y CALIDAD =====
    {
        id: 'coordinador-validacion',
        titulo: 'Supervisor de Back Office y Calidad',
        area: 'calidad',
        reportaA: 'Gerencia General',
        supervisa: ['Back Office'],
        objetivo: 'Garantizar la calidad y legitimidad de las ventas realizadas, liderando el equipo de Back Office y estableciendo los estándares de calidad en el proceso de verificación de ventas según los lineamientos de cada banco cliente.',
        funcionesPrincipales: [
            'Diseñar e implementar los procesos de validación y calidad de ventas.',
            'Supervisar el desempeño del equipo de Back Office.',
            'Definir y actualizar las parrillas de evaluación y los criterios de calidad.',
            'Analizar las causas de rechazo y proponer acciones correctivas.',
            'Coordinar con los bancos clientes los lineamientos de calidad y validación.',
            'Elaborar reportes de calidad con indicadores de aprobación, rechazo y observación.',
            'Liderar calibraciones de calidad con supervisores y monitores de ventas.',
            'Velar por el cumplimiento de las políticas de protección al consumidor.'
        ],
        funcionesSecundarias: [
            'Capacitar al equipo de back office en nuevos lineamientos del banco.',
            'Participar en reuniones operativas con el Supervisor de Operaciones.',
            'Proponer mejoras en el flujo de validación para reducir tiempos.',
            'Documentar y actualizar los procedimientos de calidad.'
        ],
        requisitos: {
            educacion: 'Título universitario en Administración, Ingeniería Industrial, Derecho o afines.',
            experiencia: 'Mínimo 2 años en calidad, validación o auditoría en call centers o servicios financieros.',
            conocimientos: ['Procesos de validación y control de calidad', 'Normativa de protección al consumidor financiero', 'Gestión de equipos', 'Excel intermedio-avanzado', 'Auditoría de procesos']
        },
        competencias: [
            { nombre: 'Liderazgo', tipo: 'blanda' },
            { nombre: 'Atención al detalle', tipo: 'blanda' },
            { nombre: 'Integridad', tipo: 'blanda' },
            { nombre: 'Pensamiento crítico', tipo: 'blanda' },
            { nombre: 'Gestión de calidad', tipo: 'tecnica' },
            { nombre: 'Auditoría de procesos', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Tasa de aprobación de ventas', descripcion: '% de ventas validadas exitosamente' },
            { nombre: 'Tiempo de validación', descripcion: 'Tiempo promedio de validación por venta' },
            { nombre: 'Rechazo por errores del asesor', descripcion: '% de rechazos por fallas en el proceso de venta' },
            { nombre: 'Cumplimiento de estándares del banco', descripcion: '% de cumplimiento de los lineamientos del cliente' }
        ],
        coordinaciones: {
            internas: 'Supervisor de Operaciones, Back Office, Supervisores de Ventas, Monitores de Ventas.',
            externas: 'Áreas de calidad y back office de los bancos clientes.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario administrativo. Sábados según necesidad.',
            modalidad: 'Presencial.',
            herramientas: 'Computadora, sistemas de grabación, sistemas del banco, herramientas de calidad.'
        }
    },
    // ===== 13. BACK OFFICE =====
    {
        id: 'validador',
        titulo: 'Back Office',
        area: 'calidad',
        reportaA: 'Supervisor de Back Office y Calidad',
        supervisa: [],
        objetivo: 'Verificar y validar las ventas realizadas por los asesores de ventas, contactando al cliente para confirmar su conformidad y revisando que la operación cumpla con todos los requisitos del banco.',
        funcionesPrincipales: [
            'Contactar telefónicamente a los clientes para confirmar la venta realizada.',
            'Verificar que los datos registrados por el asesor sean correctos y completos.',
            'Escuchar las grabaciones de las llamadas de venta cuando sea necesario.',
            'Clasificar las ventas como aprobadas, observadas o rechazadas según los criterios establecidos.',
            'Registrar el resultado de cada validación en el sistema.',
            'Reportar ventas con irregularidades al Supervisor de Back Office y Calidad.'
        ],
        funcionesSecundarias: [
            'Apoyar en la resolución de casos observados con los asesores.',
            'Participar en calibraciones de calidad.',
            'Mantener actualizado su conocimiento de los lineamientos de cada banco.'
        ],
        requisitos: {
            educacion: 'Técnico en Administración o afines. Secundaria completa con experiencia relevante.',
            experiencia: 'Mínimo 6 meses en validación, back office o calidad en call centers o servicios financieros.',
            conocimientos: ['Verificación de datos y documentos', 'Protocolos de validación bancaria', 'Manejo de sistemas de gestión', 'Comunicación telefónica']
        },
        competencias: [
            { nombre: 'Atención al detalle', tipo: 'blanda' },
            { nombre: 'Integridad', tipo: 'blanda' },
            { nombre: 'Comunicación clara', tipo: 'blanda' },
            { nombre: 'Criterio', tipo: 'blanda' },
            { nombre: 'Manejo de sistemas', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Validaciones diarias', descripcion: 'Cantidad de ventas validadas por día' },
            { nombre: 'Precisión', descripcion: '% de validaciones sin errores de criterio' },
            { nombre: 'Tiempo de validación', descripcion: 'Tiempo promedio por validación' },
            { nombre: 'Contactabilidad', descripcion: '% de clientes contactados para validación' }
        ],
        coordinaciones: {
            internas: 'Supervisor de Back Office y Calidad, Supervisores de Ventas, Asesores Comerciales.',
            externas: 'Clientes finales (contacto de verificación).'
        },
        condiciones: {
            horario: 'Lunes a sábado, turno según operación.',
            modalidad: 'Presencial.',
            herramientas: 'Computadora, headset, sistema de grabaciones, sistema de gestión.'
        }
    },
    // ===== 16. JEFE DE RRHH =====
    {
        id: 'gerente-rrhh',
        titulo: 'Jefe de RRHH',
        area: 'rrhh',
        reportaA: 'Gerencia General',
        supervisa: ['Asistente de RRHH'],
        objetivo: 'Dirigir la gestión integral del talento humano de la empresa, incluyendo reclutamiento masivo, relaciones laborales, administración de personal, bienestar y clima laboral, alineando la gestión de personas con los objetivos estratégicos del negocio.',
        funcionesPrincipales: [
            'Diseñar e implementar la estrategia de gestión de talento humano.',
            'Liderar los procesos de reclutamiento masivo para cubrir la operación.',
            'Gestionar las relaciones laborales y velar por el cumplimiento de la normativa laboral.',
            'Administrar la planilla, beneficios, vacaciones y compensaciones.',
            'Implementar programas de bienestar y clima laboral.',
            'Gestionar los procesos de desvinculación y liquidaciones.',
            'Diseñar programas de retención de talento para reducir la rotación.',
            'Supervisar al Asistente de RRHH en las funciones administrativas.'
        ],
        funcionesSecundarias: [
            'Coordinar con Capacitación los programas de desarrollo del personal.',
            'Gestionar la documentación legal laboral (contratos, adendas, constancias).',
            'Representar a la empresa ante el Ministerio de Trabajo en inspecciones.',
            'Organizar actividades de integración y reconocimiento.'
        ],
        requisitos: {
            educacion: 'Título universitario en Administración, Psicología, Derecho o Ingeniería Industrial. Especialización en RRHH deseable.',
            experiencia: 'Mínimo 3 años en jefatura o gerencia de RRHH, preferentemente en empresas con alta rotación (call centers, retail).',
            conocimientos: ['Legislación laboral vigente', 'Reclutamiento y selección masiva', 'Administración de planillas y compensaciones', 'Gestión del clima laboral', 'Sistemas de gestión de RRHH']
        },
        competencias: [
            { nombre: 'Liderazgo', tipo: 'blanda' },
            { nombre: 'Empatía', tipo: 'blanda' },
            { nombre: 'Negociación', tipo: 'blanda' },
            { nombre: 'Resolución de conflictos', tipo: 'blanda' },
            { nombre: 'Comunicación efectiva', tipo: 'blanda' },
            { nombre: 'Legislación laboral', tipo: 'tecnica' },
            { nombre: 'Gestión de planillas', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Rotación mensual', descripcion: '% de personal que se desvincula por mes' },
            { nombre: 'Tiempo de cobertura', descripcion: 'Días promedio para cubrir una vacante' },
            { nombre: 'Clima laboral', descripcion: 'Resultado de encuesta de clima organizacional' },
            { nombre: 'Cumplimiento legal', descripcion: '% de cumplimiento de obligaciones laborales' }
        ],
        coordinaciones: {
            internas: 'Gerencia General, todas las gerencias y coordinaciones, Asistente de RRHH.',
            externas: 'Ministerio de Trabajo, EsSalud/AFP, bolsas de empleo, universidades.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario administrativo.',
            modalidad: 'Presencial.',
            herramientas: 'Computadora, sistema de planillas, sistema de asistencia, teléfono.'
        }
    },
    // ===== 17. ASISTENTE DE RRHH =====
    {
        id: 'asistente-rrhh',
        titulo: 'Asistente de RRHH',
        area: 'rrhh',
        reportaA: 'Jefe de RRHH',
        supervisa: [],
        objetivo: 'Brindar soporte administrativo y operativo en los procesos de gestión de recursos humanos, incluyendo reclutamiento, control de asistencia, gestión documental y atención a los colaboradores.',
        funcionesPrincipales: [
            'Publicar convocatorias de empleo en bolsas de trabajo y redes sociales.',
            'Filtrar CVs y coordinar entrevistas con los candidatos.',
            'Gestionar el proceso de ingreso de nuevos colaboradores (documentación, contratos, fotocheck).',
            'Controlar la asistencia, tardanzas y permisos del personal.',
            'Mantener actualizados los files de personal y la base de datos de empleados.',
            'Elaborar boletas de pago, constancias y certificados de trabajo.',
            'Atender consultas de los colaboradores sobre temas laborales y beneficios.'
        ],
        funcionesSecundarias: [
            'Apoyar en la organización de actividades de bienestar e integración.',
            'Coordinar con el Asistente Administrativo temas de planilla.',
            'Gestionar el control de uniformes y material de oficina para nuevos ingresos.',
            'Archivar y organizar documentación laboral.'
        ],
        requisitos: {
            educacion: 'Técnico o universitario en curso en Administración, Psicología o afines.',
            experiencia: 'Mínimo 6 meses en asistencia de RRHH o funciones administrativas.',
            conocimientos: ['Procesos de reclutamiento y selección', 'Legislación laboral básica', 'Control de asistencia y planillas', 'Office intermedio', 'Atención al cliente interno']
        },
        competencias: [
            { nombre: 'Organización', tipo: 'blanda' },
            { nombre: 'Empatía', tipo: 'blanda' },
            { nombre: 'Discreción', tipo: 'blanda' },
            { nombre: 'Comunicación', tipo: 'blanda' },
            { nombre: 'Manejo de sistemas de RRHH', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Candidatos filtrados', descripcion: 'Cantidad de CVs evaluados y entrevistas coordinadas' },
            { nombre: 'Precisión en control de asistencia', descripcion: '% de reportes de asistencia sin errores' },
            { nombre: 'Tiempo de gestión de ingreso', descripcion: 'Días desde la selección hasta el ingreso efectivo' },
            { nombre: 'Atención a consultas', descripcion: 'Tiempo promedio de respuesta a consultas del personal' }
        ],
        coordinaciones: {
            internas: 'Jefe de RRHH, todas las áreas (consultas de personal), Asistente Administrativo.',
            externas: 'Candidatos, bolsas de empleo, EsSalud/AFP.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario administrativo.',
            modalidad: 'Presencial.',
            herramientas: 'Computadora, sistema de asistencia, impresora, teléfono.'
        }
    },
    // ===== 18. SOPORTE DE TI / SOPORTE TÉCNICO =====
    {
        id: 'coordinador-ti',
        titulo: 'Soporte de TI / Soporte Técnico',
        area: 'ti',
        reportaA: 'Gerencia General',
        supervisa: [],
        objetivo: 'Garantizar la disponibilidad, estabilidad y correcto funcionamiento de la infraestructura tecnológica del call center, incluyendo los sistemas de marcación, red de datos, equipos de cómputo y plataformas de comunicación.',
        funcionesPrincipales: [
            'Administrar y mantener la infraestructura de red, servidores y equipos del call center.',
            'Gestionar el sistema de marcación telefónica (predictivo, automático, manual).',
            'Brindar soporte técnico de primer y segundo nivel a todas las áreas.',
            'Configurar y mantener las posiciones de trabajo (PC, headset, software).',
            'Gestionar las cuentas de usuario, accesos y permisos en los sistemas.',
            'Coordinar con proveedores de telecomunicaciones la estabilidad del servicio.',
            'Implementar medidas de seguridad informática y respaldo de datos.',
            'Elaborar reportes de disponibilidad de sistemas y atención de incidencias.'
        ],
        funcionesSecundarias: [
            'Evaluar e implementar nuevas tecnologías para mejorar la operación.',
            'Capacitar a usuarios en el uso de herramientas y sistemas.',
            'Gestionar el inventario de equipos tecnológicos.',
            'Documentar procedimientos técnicos y manuales de uso.'
        ],
        requisitos: {
            educacion: 'Título universitario o técnico en Ingeniería de Sistemas, Informática o afines.',
            experiencia: 'Mínimo 2 años en soporte técnico o administración de TI en call centers o empresas medianas.',
            conocimientos: ['Administración de redes y servidores', 'Sistemas de marcación de call center (Avaya, Asterisk, Vicidial, etc.)', 'Windows Server, Active Directory', 'Seguridad informática básica', 'Telefonía IP y VoIP']
        },
        competencias: [
            { nombre: 'Resolución de problemas', tipo: 'blanda' },
            { nombre: 'Trabajo bajo presión', tipo: 'blanda' },
            { nombre: 'Comunicación técnica', tipo: 'blanda' },
            { nombre: 'Proactividad', tipo: 'blanda' },
            { nombre: 'Administración de redes', tipo: 'tecnica' },
            { nombre: 'Sistemas de marcación', tipo: 'tecnica' },
            { nombre: 'Seguridad informática', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Disponibilidad de sistemas', descripcion: '% de uptime de la plataforma tecnológica' },
            { nombre: 'Tiempo de resolución', descripcion: 'Tiempo promedio de atención de incidencias' },
            { nombre: 'Incidencias recurrentes', descripcion: 'Reducción de incidencias repetitivas' },
            { nombre: 'Satisfacción del usuario', descripcion: 'Encuesta de satisfacción del soporte técnico' }
        ],
        coordinaciones: {
            internas: 'Gerencia General, todas las áreas (soporte), Analista de BI.',
            externas: 'Proveedores de telecomunicaciones, internet, hardware y software.'
        },
        condiciones: {
            horario: 'Lunes a sábado, horario completo con disponibilidad para emergencias.',
            modalidad: 'Presencial.',
            herramientas: 'Computadora, herramientas de diagnóstico, acceso remoto, servidor, equipos de red.'
        }
    },
    // ===== 19. JEFE DE BI (BUSINESS INTELLIGENCE) =====
    {
        id: 'encargado-bi',
        titulo: 'Jefe de BI (Business Intelligence)',
        area: 'bi',
        reportaA: 'Gerencia General',
        supervisa: ['Coordinador de Proyectos', 'Analista de BI (Business Intelligence)', 'Soporte de TI / Soporte Técnico', 'Analista de BI Junior'],
        objetivo: 'Desarrollar e implementar soluciones de Business Intelligence para la empresa, proporcionando análisis de datos, dashboards y reportes estratégicos que faciliten la toma de decisiones a nivel gerencial.',
        funcionesPrincipales: [
            'Diseñar e implementar dashboards e informes estratégicos para la gerencia.',
            'Analizar datos de ventas, operaciones, calidad y RRHH para identificar tendencias y oportunidades.',
            'Desarrollar modelos de datos para el seguimiento de KPIs del negocio.',
            'Coordinar la integración de datos de diversas fuentes (CRM, marcador, sistemas del banco).',
            'Presentar informes de inteligencia de negocio a la Gerencia General y gerencias.',
            'Supervisar al Coordinador de Proyectos en la implementación de iniciativas de mejora.',
            'Proponer estrategias basadas en análisis de datos para mejorar el rendimiento.'
        ],
        funcionesSecundarias: [
            'Investigar nuevas herramientas y tecnologías de BI.',
            'Capacitar a las áreas en la lectura e interpretación de dashboards.',
            'Automatizar procesos de recopilación y análisis de datos.',
            'Coordinar con TI la infraestructura necesaria para BI.'
        ],
        requisitos: {
            educacion: 'Título universitario en Ingeniería de Sistemas, Estadística, Administración o afines.',
            experiencia: 'Mínimo 2 años en análisis de datos, BI o roles analíticos en empresas de servicios.',
            conocimientos: ['Power BI, Tableau o Google Data Studio', 'SQL intermedio-avanzado', 'Excel avanzado y modelamiento de datos', 'ETL y manejo de bases de datos', 'Estadística descriptiva e inferencial']
        },
        competencias: [
            { nombre: 'Pensamiento analítico', tipo: 'blanda' },
            { nombre: 'Visión estratégica', tipo: 'blanda' },
            { nombre: 'Comunicación de datos', tipo: 'blanda' },
            { nombre: 'Innovación', tipo: 'blanda' },
            { nombre: 'Power BI / Tableau', tipo: 'tecnica' },
            { nombre: 'SQL avanzado', tipo: 'tecnica' },
            { nombre: 'Modelamiento de datos', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Dashboards implementados', descripcion: 'Cantidad de dashboards activos y actualizados' },
            { nombre: 'Precisión de reportes', descripcion: '% de reportes entregados sin errores' },
            { nombre: 'Impacto de recomendaciones', descripcion: 'Mejora en indicadores a partir de insights de BI' },
            { nombre: 'Automatización', descripcion: 'Procesos manuales automatizados' }
        ],
        coordinaciones: {
            internas: 'Gerencia General, todas las gerencias, Analista de BI, Soporte de TI, Coordinador de Proyectos.',
            externas: 'Proveedores de herramientas de BI.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario administrativo.',
            modalidad: 'Presencial con posibilidad de trabajo remoto parcial.',
            herramientas: 'Computadora de alto rendimiento, Power BI/Tableau, SQL, acceso a bases de datos, sistemas de la empresa.'
        }
    },
    // ===== 20. COORDINADOR DE PROYECTOS =====
    {
        id: 'coordinador-proyectos',
        titulo: 'Coordinador de Proyectos',
        area: 'bi',
        reportaA: 'Jefe de BI',
        supervisa: [],
        objetivo: 'Coordinar y gestionar los proyectos de mejora e innovación de la empresa, desde su planificación hasta la implementación, asegurando el cumplimiento de plazos, presupuesto y calidad.',
        funcionesPrincipales: [
            'Planificar, ejecutar y controlar los proyectos asignados por el Jefe de BI o la Gerencia.',
            'Elaborar cronogramas, presupuestos y planes de trabajo para cada proyecto.',
            'Coordinar con las diferentes áreas los recursos necesarios para los proyectos.',
            'Realizar seguimiento al avance de los proyectos e identificar riesgos.',
            'Elaborar reportes de estado de los proyectos (avance, hitos, pendientes).',
            'Documentar lecciones aprendidas y mejores prácticas.',
            'Facilitar reuniones de seguimiento con los stakeholders.'
        ],
        funcionesSecundarias: [
            'Apoyar al Jefe de BI en el análisis de viabilidad de nuevas iniciativas.',
            'Gestionar la comunicación del proyecto a las áreas involucradas.',
            'Proponer metodologías de gestión de proyectos (Scrum, Kanban, PMI).',
            'Mantener actualizado el portafolio de proyectos de la empresa.'
        ],
        requisitos: {
            educacion: 'Título universitario en Ingeniería Industrial, Administración, Sistemas o afines. Certificación PMP o Scrum deseable.',
            experiencia: 'Mínimo 1 año en coordinación o gestión de proyectos.',
            conocimientos: ['Metodologías de gestión de proyectos (PMI, Scrum, Kanban)', 'Herramientas de gestión (Trello, Jira, MS Project)', 'Excel intermedio-avanzado', 'Análisis de riesgos', 'Comunicación y reportería']
        },
        competencias: [
            { nombre: 'Organización', tipo: 'blanda' },
            { nombre: 'Comunicación', tipo: 'blanda' },
            { nombre: 'Gestión del tiempo', tipo: 'blanda' },
            { nombre: 'Pensamiento sistémico', tipo: 'blanda' },
            { nombre: 'Herramientas de gestión de proyectos', tipo: 'tecnica' },
            { nombre: 'Análisis de datos', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Proyectos completados a tiempo', descripcion: '% de proyectos entregados en el plazo' },
            { nombre: 'Cumplimiento de presupuesto', descripcion: '% de proyectos dentro del presupuesto' },
            { nombre: 'Satisfacción del sponsor', descripcion: 'Evaluación del área solicitante del proyecto' },
            { nombre: 'Documentación', descripcion: '% de proyectos documentados con lecciones aprendidas' }
        ],
        coordinaciones: {
            internas: 'Jefe de BI, todas las áreas involucradas en proyectos.',
            externas: 'Proveedores y consultores externos cuando aplique.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario administrativo.',
            modalidad: 'Presencial.',
            herramientas: 'Computadora, herramientas de gestión de proyectos, Office, herramientas colaborativas.'
        }
    },
    // ===== 21. COORDINADOR ADMINISTRATIVO / CONTABLE =====
    {
        id: 'asistente-admin',
        titulo: 'Coordinador Administrativo / Contable',
        area: 'admin',
        reportaA: 'Gerencia General',
        supervisa: ['Encargado de Limpieza'],
        objetivo: 'Gestionar las actividades administrativas y contables de la empresa, incluyendo facturación, control de gastos, pagos a proveedores, y el manejo de la documentación administrativa, así como la supervisión del personal de limpieza.',
        funcionesPrincipales: [
            'Elaborar y controlar la facturación a los bancos clientes.',
            'Gestionar pagos a proveedores, servicios y obligaciones de la empresa.',
            'Llevar el control de caja chica y gastos operativos.',
            'Coordinar con el contador externo la información contable y tributaria.',
            'Gestionar la compra de materiales de oficina y suministros.',
            'Supervisar al Encargado de Limpieza y el mantenimiento de las instalaciones.',
            'Archivar y organizar la documentación administrativa y contable.',
            'Elaborar reportes de gastos e ingresos para la Gerencia General.'
        ],
        funcionesSecundarias: [
            'Coordinar con RRHH la información para la planilla (horas extras, descuentos).',
            'Gestionar los contratos de servicios (alquiler, luz, agua, internet).',
            'Atender requerimientos administrativos de las diferentes áreas.',
            'Apoyar en la logística de eventos internos.'
        ],
        requisitos: {
            educacion: 'Técnico o universitario en Contabilidad, Administración o afines.',
            experiencia: 'Mínimo 1 año en funciones administrativas o contables.',
            conocimientos: ['Contabilidad básica y tributación', 'Facturación electrónica', 'Control de gastos y presupuesto', 'Office intermedio (Excel especialmente)', 'Gestión documentaria']
        },
        competencias: [
            { nombre: 'Organización', tipo: 'blanda' },
            { nombre: 'Responsabilidad', tipo: 'blanda' },
            { nombre: 'Atención al detalle', tipo: 'blanda' },
            { nombre: 'Discreción', tipo: 'blanda' },
            { nombre: 'Contabilidad', tipo: 'tecnica' },
            { nombre: 'Excel intermedio', tipo: 'tecnica' },
            { nombre: 'Facturación electrónica', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Puntualidad en facturación', descripcion: 'Facturas emitidas dentro de plazo' },
            { nombre: 'Control de gastos', descripcion: 'Gastos dentro del presupuesto aprobado' },
            { nombre: 'Pagos a tiempo', descripcion: '% de pagos a proveedores sin mora' },
            { nombre: 'Orden documentario', descripcion: 'Documentación archivada y accesible' }
        ],
        coordinaciones: {
            internas: 'Gerencia General, Jefe de RRHH, todas las áreas (requerimientos), Encargado de Limpieza.',
            externas: 'Contador externo, proveedores, bancos (facturación), SUNAT.'
        },
        condiciones: {
            horario: 'Lunes a viernes, horario administrativo.',
            modalidad: 'Presencial.',
            herramientas: 'Computadora, sistema contable, sistema de facturación electrónica, impresora.'
        }
    },
    // ===== 22. ENCARGADO DE LIMPIEZA =====
    {
        id: 'encargado-limpieza',
        titulo: 'Encargado de Limpieza',
        area: 'admin',
        reportaA: 'Coordinador Administrativo / Contable',
        supervisa: [],
        objetivo: 'Mantener las instalaciones del call center en óptimas condiciones de limpieza, orden e higiene, contribuyendo a un ambiente de trabajo saludable y profesional.',
        funcionesPrincipales: [
            'Realizar la limpieza diaria de las áreas de trabajo: salas de operaciones, oficinas, recepción.',
            'Limpiar y desinfectar los servicios higiénicos de forma periódica.',
            'Mantener limpias las áreas comunes: comedor, sala de descanso, pasillos.',
            'Gestionar y reportar la necesidad de materiales de limpieza.',
            'Realizar la limpieza profunda semanal de pisos, ventanas y superficies.',
            'Recoger y disponer los residuos según el protocolo de la empresa.'
        ],
        funcionesSecundarias: [
            'Reportar desperfectos o daños en las instalaciones al Asistente Administrativo.',
            'Apoyar en el ordenamiento de mobiliario cuando se requiera.',
            'Mantener el almacén de limpieza ordenado.',
            'Cumplir con los protocolos de bioseguridad establecidos.'
        ],
        requisitos: {
            educacion: 'Secundaria completa.',
            experiencia: 'Experiencia previa en limpieza o mantenimiento es deseable.',
            conocimientos: ['Técnicas de limpieza y desinfección', 'Uso de productos de limpieza', 'Protocolo de manejo de residuos', 'Bioseguridad básica']
        },
        competencias: [
            { nombre: 'Responsabilidad', tipo: 'blanda' },
            { nombre: 'Puntualidad', tipo: 'blanda' },
            { nombre: 'Proactividad', tipo: 'blanda' },
            { nombre: 'Discreción', tipo: 'blanda' },
            { nombre: 'Técnicas de limpieza', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Estado de instalaciones', descripcion: 'Evaluación periódica de limpieza y orden' },
            { nombre: 'Cumplimiento de rutinas', descripcion: '% de rutinas de limpieza completadas' },
            { nombre: 'Control de insumos', descripcion: 'Uso eficiente de materiales de limpieza' }
        ],
        coordinaciones: {
            internas: 'Coordinador Administrativo / Contable.',
            externas: 'N/A'
        },
        condiciones: {
            horario: 'Lunes a sábado, horario según necesidad operativa (usualmente ingreso temprano).',
            modalidad: 'Presencial.',
            herramientas: 'Materiales de limpieza, equipos de limpieza, EPP.'
        }
    },
    // ===== 20. ANALISTA DE BI JUNIOR =====
    {
        id: 'analista-bi-junior',
        titulo: 'Analista de BI Junior',
        area: 'bi',
        reportaA: 'Jefe de BI (Business Intelligence)',
        supervisa: [],
        objetivo: 'Apoyar en la recopilación, análisis y presentación de datos operativos y comerciales para facilitar la toma de decisiones, garantizando la integridad de la información mediante herramientas de Business Intelligence.',
        funcionesPrincipales: [
            'Recopilar, consolidar, depurar y validar información proveniente de diferentes fuentes de datos.',
            'Elaborar, actualizar y mantener reportes operativos, comerciales y ejecutivos mediante herramientas de Business Intelligence.',
            'Diseñar, desarrollar y administrar dashboards e indicadores de gestión (KPIs) para el seguimiento de resultados.',
            'Brindar soporte en el desarrollo y optimización de consultas SQL para la extracción y análisis de información.',
            'Ejecutar procesos de extracción, transformación y carga de datos (ETL) para garantizar la calidad de la información.',
            'Apoyar en la automatización de reportes y procesos analíticos mediante herramientas tecnológicas.',
            'Validar la integridad, consistencia y confiabilidad de la información utilizada en los análisis y reportes.',
            'Elaborar documentación técnica de los desarrollos, procesos y procedimientos implementados.',
            'Participar en proyectos de mejora continua relacionados con Business Intelligence, automatización de procesos y análisis de datos.',
            'Coordinar con las diferentes áreas la validación de información necesaria para la elaboración de reportes e indicadores.',
            'Emitir reportes técnicos, análisis y recomendaciones para apoyar la toma de decisiones de la Gerencia.',
            'Cumplir estrictamente las políticas de confidencialidad, protección de datos personales, seguridad de la información, Código de Ética y demás lineamientos internos establecidos por LA CONTRATANTE.',
            'Ejecutar cualquier otra actividad profesional compatible con la naturaleza del presente contrato y relacionada con el área de Business Intelligence.'
        ],
        funcionesSecundarias: [
            'Asistir en la capacitación de usuarios finales sobre las herramientas de BI.',
            'Mantener actualizada la documentación técnica.'
        ],
        requisitos: {
            educacion: 'Bachiller o titulado en Ingeniería de Sistemas, Informática, Estadística, Computación o afines.',
            experiencia: 'Mínimo 1 año en posiciones similares de análisis de datos o Business Intelligence.',
            conocimientos: ['SQL', 'Herramientas de BI (Power BI, Tableau, etc.)', 'Excel avanzado', 'ETL']
        },
        competencias: [
            { nombre: 'Capacidad analítica', tipo: 'blanda' },
            { nombre: 'Atención al detalle', tipo: 'blanda' },
            { nombre: 'Resolución de problemas', tipo: 'blanda' },
            { nombre: 'Comunicación efectiva', tipo: 'blanda' },
            { nombre: 'SQL y bases de datos', tipo: 'tecnica' },
            { nombre: 'Herramientas BI', tipo: 'tecnica' }
        ],
        kpis: [
            { nombre: 'Disponibilidad de reportes', descripcion: '% de uptime de dashboards' },
            { nombre: 'Calidad de datos', descripcion: 'Número de incidencias reportadas por datos erróneos' },
            { nombre: 'Entrega oportuna', descripcion: '% de reportes entregados en la fecha límite' }
        ],
        coordinaciones: {
            internas: 'Jefe de BI, Analista de BI, Soporte de TI, Gerencia Comercial, Gerencia de Operaciones.',
            externas: 'Ninguna.'
        },
        condiciones: {
            horario: 'Lunes a viernes en horario administrativo.',
            modalidad: 'Presencial o híbrido.',
            herramientas: 'Computadora, acceso a bases de datos, software de BI y desarrollo.'
        }
    }
];

// Expose data to window for the ES module Word export in index.html
window.AREAS = AREAS;
window.MOF_DATA = MOF_DATA;

// ============================================
// WORKFLOWS DATA
// ============================================
const WORKFLOWS_DATA = [
    {
        id: 'flujo-venta-outbound',
        title: 'Proceso de Venta Outbound',
        description: 'Flujo principal para el contacto, venta y validación de productos financieros.',
        steps: [
            { roleId: 'analista-bd', action: 'Asigna base de datos a campañas' },
            { roleId: 'supervisor-ventas', action: 'Monitorea contactabilidad y asigna metas' },
            { roleId: 'asesor-ventas', action: 'Contacta al cliente y cierra la venta' },
            { roleId: 'validador', action: 'Verifica y confirma la venta con el cliente' },
            { roleId: 'coordinador-validacion', action: 'Audita ventas y genera reportes' }
        ]
    },

    {
        id: 'flujo-convenios',
        title: 'Proceso de Venta por Convenios',
        description: 'Flujo B2B para captación de clientes a través de empresas aliadas.',
        steps: [
            { roleId: 'coordinador-convenios', action: 'Firma alianza con empresa' },
            { roleId: 'asesor-convenios', action: 'Visita empresa y capta solicitudes' },
            { roleId: 'validador-convenios', action: 'Verifica documentos físicos/digitales' },
            { roleId: 'gerente-comercial', action: 'Aprueba comisiones y pagos' }
        ]
    }
];
window.WORKFLOWS_DATA = WORKFLOWS_DATA;

// ============================================
// STAFF DIRECTORY DATA
// ============================================
const INITIAL_STAFF_DATA = [
    { id: 'EMP-001', nombreCompleto: 'CASTILLO DOBOBUTO NILEDYS LUISANA', puestoId: 'validador', tipoDoc: 'CE', numDoc: '5449295', estado: 'activo', fechaIngreso: '2025-09-03' },
    { id: 'EMP-002', nombreCompleto: 'CCALLA RAMIREZ JULIO CESAR', puestoId: 'encargado-limpieza', tipoDoc: 'DNI', numDoc: '75142369', estado: 'activo', fechaIngreso: '2025-11-10' },
    { id: 'EMP-003', nombreCompleto: 'CLARIANA GAYOSO EXSON ERNESTO', puestoId: 'supervisor-ventas', tipoDoc: 'DNI', numDoc: '74904249', estado: 'activo', fechaIngreso: '2025-09-01' },
    { id: 'EMP-004', nombreCompleto: 'CUEVA AGUIRRE JOHAN ALDHAIR', puestoId: 'supervisor-ventas', tipoDoc: 'DNI', numDoc: '74393913', estado: 'activo', fechaIngreso: '2026-02-01' },
    { id: 'EMP-005', nombreCompleto: 'DE LOS RIOS DUEÑAS LUDMY FLOW', puestoId: 'supervisor-ventas', tipoDoc: 'DNI', numDoc: '44053746', estado: 'activo', fechaIngreso: '2025-11-03' },
    { id: 'EMP-006', nombreCompleto: 'DÍAZ DE LOS RIOS CAMILA DEL PILAR', puestoId: 'asistente-rrhh', tipoDoc: 'DNI', numDoc: '73050403', estado: 'activo', fechaIngreso: '2026-04-01' },
    { id: 'EMP-007', nombreCompleto: 'FLORES BENDEZÚ FÁTIMA CRISTINA', puestoId: 'coordinador-validacion', tipoDoc: 'DNI', numDoc: '40920866', estado: 'activo', fechaIngreso: '2026-04-01' },
    { id: 'EMP-008', nombreCompleto: 'FLORES GARCIA EDUARDO MAXIMO', puestoId: 'validador-convenios', tipoDoc: 'DNI', numDoc: '42211482', estado: 'activo', fechaIngreso: '2026-05-05' },
    { id: 'EMP-009', nombreCompleto: 'GARCÍA FERNÁNDEZ LISSET ROSMERY', puestoId: 'validador', tipoDoc: 'DNI', numDoc: '77674601', estado: 'activo', fechaIngreso: '2025-09-03' },
    { id: 'EMP-010', nombreCompleto: 'GONZALES NAVA GLAUCO ANTONIO', puestoId: 'coordinador-proyectos', tipoDoc: 'DNI', numDoc: '42710489', estado: 'activo', fechaIngreso: '2026-02-23' },
    { id: 'EMP-011', nombreCompleto: 'GUTIERREZ AMADO ALFONSO ALVARO', puestoId: 'coordinador-convenios', tipoDoc: 'DNI', numDoc: '10010006', estado: 'activo', fechaIngreso: '2026-03-02' },
    { id: 'EMP-012', nombreCompleto: 'LA ROSA JERÍ CARLOS EDUARDO', puestoId: 'gerente-general', tipoDoc: 'DNI', numDoc: '42596765', estado: 'activo', fechaIngreso: '2025-04-20' },
    { id: 'EMP-012B', nombreCompleto: 'LA ROSA JERÍ CARLOS EDUARDO', puestoId: 'gerente-comercial', tipoDoc: 'DNI', numDoc: '42596765', estado: 'activo', fechaIngreso: '2025-04-20' },
    { id: 'EMP-013', nombreCompleto: 'LA ROSA JERÍ JEANNETH ELIZABETH', puestoId: 'gerente-rrhh', tipoDoc: 'DNI', numDoc: '41660089', estado: 'activo', fechaIngreso: '2025-04-20' },
    { id: 'EMP-014', nombreCompleto: 'LLANOS EDQUEN NIXON JAMES', puestoId: 'encargado-bi', tipoDoc: 'DNI', numDoc: '44699655', estado: 'activo', fechaIngreso: '2026-05-02' },
    { id: 'EMP-015', nombreCompleto: 'MAURY MACHACA MIRIAM', puestoId: 'supervisor-ventas', tipoDoc: 'DNI', numDoc: '76727817', estado: 'activo', fechaIngreso: '2026-02-19' },
    { id: 'EMP-016', nombreCompleto: 'MENDOZA BRIONES JOSE CARLOS', puestoId: 'analista-bd', tipoDoc: 'DNI', numDoc: '72926381', estado: 'activo', fechaIngreso: '2025-09-07' },
    { id: 'EMP-017', nombreCompleto: 'MONZON BECERRA VALERIA CRISTINA', puestoId: 'monitor-ventas', tipoDoc: 'DNI', numDoc: '74032003', estado: 'activo', fechaIngreso: '2026-04-27' },
    { id: 'EMP-018', nombreCompleto: 'MOLLEAPAZA ARTEAGA RUBEN ALONSO', puestoId: 'analista-bd', tipoDoc: 'DNI', numDoc: '72393938', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-019', nombreCompleto: 'MORON VARGAS SERGIO', puestoId: 'validador', tipoDoc: 'DNI', numDoc: '76043302', estado: 'activo', fechaIngreso: '2025-05-01' },
    { id: 'EMP-020', nombreCompleto: 'MOSQUEIRA TICSE FIORELLA MARIA CLAUDIA', puestoId: 'validador', tipoDoc: 'DNI', numDoc: '48697560', estado: 'activo', fechaIngreso: '2025-04-23' },
    { id: 'EMP-021', nombreCompleto: 'QUEGUA MEDIANA TANIA TEODOMIRA', puestoId: 'supervisor-ventas', tipoDoc: 'DNI', numDoc: '77343529', estado: 'activo', fechaIngreso: '2025-04-21' },
    { id: 'EMP-022', nombreCompleto: 'RAMOS ÑIQUEN EDGAR HUGO', puestoId: 'supervisor-ventas', tipoDoc: 'DNI', numDoc: '44824911', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-023', nombreCompleto: 'REVILLA SALAZAR JOSE ALEX', puestoId: 'gerente-general', tipoDoc: 'DNI', numDoc: '10203688', estado: 'activo', fechaIngreso: '2025-04-21' },
    { id: 'EMP-024', nombreCompleto: 'ROMÁN TELLO JUAN GIOVANNI', puestoId: 'validador', tipoDoc: 'DNI', numDoc: '45434590', estado: 'activo', fechaIngreso: '2026-04-01' },
    { id: 'EMP-025', nombreCompleto: 'SALDAÑA ANGULO CARLITA ROSMERY', puestoId: 'asistente-admin', tipoDoc: 'DNI', numDoc: '48258639', estado: 'activo', fechaIngreso: '2025-08-11' },
    { id: 'EMP-026', nombreCompleto: 'SORIANO VILLANUEVA FERNANDO ALONSO', puestoId: 'validador', tipoDoc: 'DNI', numDoc: '75959129', estado: 'activo', fechaIngreso: '2026-05-18' },
    { id: 'EMP-027', nombreCompleto: 'TAFUR ALBRECHT RICHARD JESÚS', puestoId: 'monitor-ventas', tipoDoc: 'DNI', numDoc: '71526649', estado: 'activo', fechaIngreso: '2026-04-01' },
    { id: 'EMP-028', nombreCompleto: 'VIACAVA CHILIN NILTON EDUARDO', puestoId: 'supervisor-ventas', tipoDoc: 'DNI', numDoc: '47367311', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-029', nombreCompleto: 'ANGULO ALAYO JHEANNYNE ANNECHEL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '10425887', estado: 'activo', fechaIngreso: '2026-05-10' },
    { id: 'EMP-030', nombreCompleto: 'BULLON MULERIG MILAGRITOS PAOLA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '09939739', estado: 'activo', fechaIngreso: '2026-02-01' },
    { id: 'EMP-031', nombreCompleto: 'CORNEJO VARGAS CRISTINA MABEL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '76978840', estado: 'activo', fechaIngreso: '2025-10-01' },
    { id: 'EMP-032', nombreCompleto: 'DAVILA RIVAS JHEY JESUS', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '74075841', estado: 'activo', fechaIngreso: '2026-02-01' },
    { id: 'EMP-033', nombreCompleto: 'DIAZ SOTERO KELLY ALYSON', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '70763042', estado: 'activo', fechaIngreso: '2026-04-06' },
    { id: 'EMP-034', nombreCompleto: 'ESPINOZA BARRIOS OSWALDO MARTIN', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41111294', estado: 'activo', fechaIngreso: '2026-06-01' },
    { id: 'EMP-035', nombreCompleto: 'ESTRADA PORTA PILAR ANGELICA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '48335854', estado: 'activo', fechaIngreso: '2026-04-27' },
    { id: 'EMP-036', nombreCompleto: 'HURTADO VILLEGAS GONZALO ALEJANDRO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72180444', estado: 'activo', fechaIngreso: '2026-07-07' },
    { id: 'EMP-037', nombreCompleto: 'MEDINA SEVERINO JAZMIN ZENOBIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47683935', estado: 'activo', fechaIngreso: '2026-01-11' },
    { id: 'EMP-038', nombreCompleto: 'MEJIA MATHEUS JESSICA MARIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '08775570', estado: 'activo', fechaIngreso: '2026-05-11' },
    { id: 'EMP-039', nombreCompleto: 'MORI CHOQUE MASSIEL ESPERANZA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '62852858', estado: 'activo', fechaIngreso: '2026-04-14' },
    { id: 'EMP-040', nombreCompleto: 'NORIEGA BERROSPI PATRICIA DEL PILAR', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '40899329', estado: 'activo', fechaIngreso: '2026-03-11' },
    { id: 'EMP-041', nombreCompleto: 'NU�EZ OSORIO ARACELI YUDITZA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '70093423', estado: 'activo', fechaIngreso: '2026-02-04' },
    { id: 'EMP-042', nombreCompleto: 'OLAECHEA MANCHEGO FIORELLA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '43188390', estado: 'activo', fechaIngreso: '2025-11-13' },
    { id: 'EMP-043', nombreCompleto: 'ORUE MARTINEZ PEDRO ROBERTO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '09350718', estado: 'activo', fechaIngreso: '2026-04-01' },
    { id: 'EMP-044', nombreCompleto: 'PARIONA RAMOS GUSTAVO OSWALDO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '45218395', estado: 'activo', fechaIngreso: '2026-04-06' },
    { id: 'EMP-045', nombreCompleto: 'PRADA JAYO MERY NICOLE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72454792', estado: 'activo', fechaIngreso: '2026-02-02' },
    { id: 'EMP-046', nombreCompleto: 'TIPANI PRADO LELIA AMPARO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '10060383', estado: 'activo', fechaIngreso: '2026-05-10' },
    { id: 'EMP-047', nombreCompleto: 'VALIENTE SAAVEDRA PEGGY MARIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '10060383', estado: 'activo', fechaIngreso: '2026-07-07' },
    { id: 'EMP-048', nombreCompleto: 'AQUINO MARIN GERALDINE LUZ', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '71016422', estado: 'activo', fechaIngreso: '2026-02-05' },
    { id: 'EMP-049', nombreCompleto: 'ARMAS ANGASPILLO TANIA NATALI', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '10555684', estado: 'activo', fechaIngreso: '2026-02-10' },
    { id: 'EMP-050', nombreCompleto: 'PE�ARES CONDO FELICITAS ANAI', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41356487', estado: 'activo', fechaIngreso: '2026-03-11' },
    { id: 'EMP-051', nombreCompleto: 'REQUE NECIOSUP ANA VIOLETA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47466658', estado: 'activo', fechaIngreso: '2026-06-02' },
    { id: 'EMP-052', nombreCompleto: 'RODRIGUEZ WITTGREN OMAIRA ADRIANA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '49018419', estado: 'activo', fechaIngreso: '2026-06-08' },
    { id: 'EMP-053', nombreCompleto: 'RUIZ CANAQUIRI IGNACIO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47313330', estado: 'activo', fechaIngreso: '2026-05-04' },
    { id: 'EMP-054', nombreCompleto: 'UGAZ ZAPATA JUDITH PERPETUA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '28577249', estado: 'activo', fechaIngreso: '2026-02-12' },
    { id: 'EMP-055', nombreCompleto: 'CRUZATE MORENO EVELYN ROCIO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42084542', estado: 'activo', fechaIngreso: '2026-02-02' },
    { id: 'EMP-056', nombreCompleto: 'GUERRERO MOGOLLON SARA JESENIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '43241542', estado: 'activo', fechaIngreso: '2026-07-01' },
    { id: 'EMP-057', nombreCompleto: 'MEDIANERO ARANCIBIA ALFONSO ALEJANDRO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '75904118', estado: 'activo', fechaIngreso: '2026-01-05' },
    { id: 'EMP-058', nombreCompleto: 'MELENDEZ TREJO INOCENCIA GRECIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '48239445', estado: 'activo', fechaIngreso: '2026-04-14' },
    { id: 'EMP-059', nombreCompleto: 'MINAYA MESTANZA CYNTHIA JANNETT', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '48799922', estado: 'activo', fechaIngreso: '2025-11-04' },
    { id: 'EMP-060', nombreCompleto: 'OLORTEGUI ASIN RAISA GERALDINE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72940170', estado: 'activo', fechaIngreso: '2026-01-09' },
    { id: 'EMP-061', nombreCompleto: 'RODRIGUEZ MELGAREJO JENNY', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '44090752', estado: 'activo', fechaIngreso: '2026-05-04' },
    { id: 'EMP-062', nombreCompleto: 'ROJAS FUENTES EVELYN MARLENE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '44043880', estado: 'activo', fechaIngreso: '2026-01-05' },
    { id: 'EMP-063', nombreCompleto: 'ALCANTARA LLANOS MELIDA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '43761223', estado: 'activo', fechaIngreso: '2025-09-03' },
    { id: 'EMP-064', nombreCompleto: 'AYBAR TOVAR NATALIA LUZ', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '09393401', estado: 'activo', fechaIngreso: '2026-07-06' },
    { id: 'EMP-065', nombreCompleto: 'CABRERA VALDIVIEZO JACQUELINE TEODOSIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '70016231', estado: 'activo', fechaIngreso: '2025-11-10' },
    { id: 'EMP-066', nombreCompleto: 'CASTILLO LAVAN MARIA ISABEL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '06685625', estado: 'activo', fechaIngreso: '2025-11-18' },
    { id: 'EMP-067', nombreCompleto: 'GONZALES VELASQUEZ ELSA HERMINIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '08209052', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-068', nombreCompleto: 'GOYTIZOLO CANCHARI GLORIA MARIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '09647893', estado: 'activo', fechaIngreso: '2026-07-09' },
    { id: 'EMP-069', nombreCompleto: 'HUANAY APAZA GRECIA BRIGHITTE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '45522506', estado: 'activo', fechaIngreso: '2026-04-15' },
    { id: 'EMP-070', nombreCompleto: 'JIMENEZ CONDORI VIDAL ALBERTO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42945540', estado: 'activo', fechaIngreso: '2026-04-08' },
    { id: 'EMP-071', nombreCompleto: 'JURUPE PIZARRO LOURDES VIRGINIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '43600914', estado: 'activo', fechaIngreso: '2025-05-02' },
    { id: 'EMP-072', nombreCompleto: 'LLONTOP LLONTOP LUZ AMPARO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '48285510', estado: 'activo', fechaIngreso: '2025-09-03' },
    { id: 'EMP-073', nombreCompleto: 'MALLMA YACHAS CINDY LEONELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47100915', estado: 'activo', fechaIngreso: '2026-01-09' },
    { id: 'EMP-074', nombreCompleto: 'MERINO VALIENTE DANIELA AIRAM', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '70003154', estado: 'activo', fechaIngreso: '2026-04-01' },
    { id: 'EMP-075', nombreCompleto: 'MICULICICH REVOREDO MARIANITA ALESSANDRA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42887953', estado: 'activo', fechaIngreso: '2025-05-15' },
    { id: 'EMP-076', nombreCompleto: 'MONTESINOS MATOS HEYDI SHURIRA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72974902', estado: 'activo', fechaIngreso: '2026-07-08' },
    { id: 'EMP-077', nombreCompleto: 'OLIVARI VALLE ANA MARIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '8788840', estado: 'activo', fechaIngreso: '2026-07-05' },
    { id: 'EMP-078', nombreCompleto: 'ROJAS ENCINAS EDUARDO GUSTAVO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41558241', estado: 'activo', fechaIngreso: '2025-11-19' },
    { id: 'EMP-079', nombreCompleto: 'ROM�N BARRAZA MARIA DEL ROSARIO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41405115', estado: 'activo', fechaIngreso: '2026-04-15' },
    { id: 'EMP-080', nombreCompleto: 'VEGA FARFAN ALLISON RAQUEL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47873323', estado: 'activo', fechaIngreso: '2026-07-07' },
    { id: 'EMP-081', nombreCompleto: 'ALCALA RAMIREZ MARIA DEL CARMEN', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '09880243', estado: 'activo', fechaIngreso: '2025-10-06' },
    { id: 'EMP-082', nombreCompleto: 'ALEJO GARCIA ANDREA LUCIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47467549', estado: 'activo', fechaIngreso: '2026-04-06' },
    { id: 'EMP-083', nombreCompleto: 'ALEJO SARMIENTO JOSHUA KEFLY', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '75420445', estado: 'activo', fechaIngreso: '2026-06-01' },
    { id: 'EMP-084', nombreCompleto: 'BARRERA VENEGAS MACCIE VIVIANA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42085346', estado: 'activo', fechaIngreso: '2026-05-04' },
    { id: 'EMP-085', nombreCompleto: 'CHINCAY GARCIA JOSELYN DANITZA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '76855890', estado: 'activo', fechaIngreso: '2026-01-22' },
    { id: 'EMP-086', nombreCompleto: 'GAMARRA CARRERO NICOLE BRITNEY', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '74380055', estado: 'activo', fechaIngreso: '2026-07-08' },
    { id: 'EMP-087', nombreCompleto: 'GAMARRA MACO MARIBEL NADINE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '18903847', estado: 'activo', fechaIngreso: '2026-07-06' },
    { id: 'EMP-088', nombreCompleto: 'GARCIA MUJICA FRANCIS', puestoId: 'asesor-ventas', tipoDoc: 'CE', numDoc: '01202129', estado: 'activo', fechaIngreso: '2026-03-24' },
    { id: 'EMP-089', nombreCompleto: 'JACINTO SORALUZ LORENT CASSANDRA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '75892583', estado: 'activo', fechaIngreso: '2025-09-03' },
    { id: 'EMP-090', nombreCompleto: 'JIMENEZ DE SANCHEZ ARIAMINY', puestoId: 'asesor-ventas', tipoDoc: 'CE', numDoc: '16406433', estado: 'activo', fechaIngreso: '2026-03-23' },
    { id: 'EMP-091', nombreCompleto: 'LLONTOP MAMANI YESENIA ELVIRA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47523495', estado: 'activo', fechaIngreso: '2026-02-02' },
    { id: 'EMP-092', nombreCompleto: 'MESTANZA HUAMAN VERONICA RAQUEL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '46894221', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-093', nombreCompleto: 'NOLTE PALACIOS OLENKA ANTUANE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '75018834', estado: 'activo', fechaIngreso: '2026-07-08' },
    { id: 'EMP-094', nombreCompleto: 'OLIVERA CUADROS ASTRID JAZMIN', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '77555490', estado: 'activo', fechaIngreso: '2026-02-09' },
    { id: 'EMP-095', nombreCompleto: 'PAJUELO VILLANUEVA CAROLINA YOLANDA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '71420129', estado: 'activo', fechaIngreso: '2026-01-22' },
    { id: 'EMP-096', nombreCompleto: 'PINHEIRO RIOS MARIA DEL PILAR', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41340814', estado: 'activo', fechaIngreso: '2026-02-02' },
    { id: 'EMP-097', nombreCompleto: 'PORTOCARRERO MARTINEZ CYNTHIA KATHERIN', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '43481633', estado: 'activo', fechaIngreso: '2025-11-05' },
    { id: 'EMP-098', nombreCompleto: 'REYES ESCALANTE SOLEDAD MARIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '10306629', estado: 'activo', fechaIngreso: '2025-10-01' },
    { id: 'EMP-099', nombreCompleto: 'SALAS CRUZADO SAYRA SUSANA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41926029', estado: 'activo', fechaIngreso: '2025-11-03' },
    { id: 'EMP-100', nombreCompleto: 'SALAS CRUZADO SILVIA ZARELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42890382', estado: 'activo', fechaIngreso: '2026-02-02' },
    { id: 'EMP-101', nombreCompleto: 'SIFONTES NAVARRO MADISSON', puestoId: 'asesor-ventas', tipoDoc: 'CE', numDoc: '006070047', estado: 'activo', fechaIngreso: '2026-05-10' },
    { id: 'EMP-102', nombreCompleto: 'SILVIA DIAZ ESTEFANIA ANDREINA', puestoId: 'asesor-ventas', tipoDoc: 'CE', numDoc: '002433886D', estado: 'activo', fechaIngreso: '2026-07-02' },
    { id: 'EMP-103', nombreCompleto: 'SOSA CASTILLO DORA ELIZABETH', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '25748979', estado: 'activo', fechaIngreso: '2026-07-01' },
    { id: 'EMP-104', nombreCompleto: 'VASQUEZ CUEVA MERLY GUISSELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '25748979', estado: 'activo', fechaIngreso: '2026-07-02' },
    { id: 'EMP-105', nombreCompleto: 'ABAD BERROSPI MELISSA BRILLIT', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47924057', estado: 'activo', fechaIngreso: '2025-10-30' },
    { id: 'EMP-106', nombreCompleto: 'ABARCA CARCAS LUCERO AMPARO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '74724785', estado: 'activo', fechaIngreso: '2026-05-04' },
    { id: 'EMP-107', nombreCompleto: 'ACHULLI HUALLPA YHON MAYCOL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47627051', estado: 'activo', fechaIngreso: '2026-07-01' },
    { id: 'EMP-108', nombreCompleto: 'ACO PEREZ JENNY GRACIELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '40015747', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-109', nombreCompleto: 'ALTAMIRANO PALOMINO ELISABETH ROC�O', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47925892', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-110', nombreCompleto: 'BENITES REA�O MICHELLE CAMILLA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72847742', estado: 'activo', fechaIngreso: '2026-01-14' },
    { id: 'EMP-111', nombreCompleto: 'DAVILA RAMOS SANDRA ANTONIETA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41357282', estado: 'activo', fechaIngreso: '2026-07-07' },
    { id: 'EMP-112', nombreCompleto: 'DURAN VERGARA GINA JAYNE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '80519528', estado: 'activo', fechaIngreso: '2026-07-07' },
    { id: 'EMP-113', nombreCompleto: 'ENCISO ZAPATA JACKELINNE ELIZABETH', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '46374469', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-114', nombreCompleto: 'ESTELA BALLADARES ANAVELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '70994761', estado: 'activo', fechaIngreso: '2025-10-15' },
    { id: 'EMP-029', nombreCompleto: 'ANGULO ALAYO JHEANNYNE ANNECHEL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '10425887', estado: 'activo', fechaIngreso: '2026-05-10' },
    { id: 'EMP-030', nombreCompleto: 'BULLON MULERIG MILAGRITOS PAOLA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '09939739', estado: 'activo', fechaIngreso: '2026-02-01' },
    { id: 'EMP-031', nombreCompleto: 'CORNEJO VARGAS CRISTINA MABEL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '76978840', estado: 'activo', fechaIngreso: '2025-10-01' },
    { id: 'EMP-032', nombreCompleto: 'DAVILA RIVAS JHEY JESUS', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '74075841', estado: 'activo', fechaIngreso: '2026-02-01' },
    { id: 'EMP-033', nombreCompleto: 'DIAZ SOTERO KELLY ALYSON', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '70763042', estado: 'activo', fechaIngreso: '2026-04-06' },
    { id: 'EMP-034', nombreCompleto: 'ESPINOZA BARRIOS OSWALDO MARTIN', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41111294', estado: 'activo', fechaIngreso: '2026-06-01' },
    { id: 'EMP-035', nombreCompleto: 'ESTRADA PORTA PILAR ANGELICA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '48335854', estado: 'activo', fechaIngreso: '2026-04-27' },
    { id: 'EMP-036', nombreCompleto: 'HURTADO VILLEGAS GONZALO ALEJANDRO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72180444', estado: 'activo', fechaIngreso: '2026-07-07' },
    { id: 'EMP-037', nombreCompleto: 'MEDINA SEVERINO JAZMIN ZENOBIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47683935', estado: 'activo', fechaIngreso: '2026-01-11' },
    { id: 'EMP-038', nombreCompleto: 'MEJIA MATHEUS JESSICA MARIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '08775570', estado: 'activo', fechaIngreso: '2026-05-11' },
    { id: 'EMP-039', nombreCompleto: 'MORI CHOQUE MASSIEL ESPERANZA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '62852858', estado: 'activo', fechaIngreso: '2026-04-14' },
    { id: 'EMP-040', nombreCompleto: 'NORIEGA BERROSPI PATRICIA DEL PILAR', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '40899329', estado: 'activo', fechaIngreso: '2026-03-11' },
    { id: 'EMP-041', nombreCompleto: 'NUEZ OSORIO ARACELI YUDITZA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '70093423', estado: 'activo', fechaIngreso: '2026-02-04' },
    { id: 'EMP-042', nombreCompleto: 'OLAECHEA MANCHEGO FIORELLA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '43188390', estado: 'activo', fechaIngreso: '2025-11-13' },
    { id: 'EMP-043', nombreCompleto: 'ORUE MARTINEZ PEDRO ROBERTO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '09350718', estado: 'activo', fechaIngreso: '2026-04-01' },
    { id: 'EMP-044', nombreCompleto: 'PARIONA RAMOS GUSTAVO OSWALDO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '45218395', estado: 'activo', fechaIngreso: '2026-04-06' },
    { id: 'EMP-045', nombreCompleto: 'PRADA JAYO MERY NICOLE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72454792', estado: 'activo', fechaIngreso: '2026-02-02' },
    { id: 'EMP-046', nombreCompleto: 'TIPANI PRADO LELIA AMPARO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '10060383', estado: 'activo', fechaIngreso: '2026-05-10' },
    { id: 'EMP-047', nombreCompleto: 'VALIENTE SAAVEDRA PEGGY MARIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '10060383', estado: 'activo', fechaIngreso: '2026-07-07' },
    { id: 'EMP-048', nombreCompleto: 'AQUINO MARIN GERALDINE LUZ', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '71016422', estado: 'activo', fechaIngreso: '2026-02-05' },
    { id: 'EMP-049', nombreCompleto: 'ARMAS ANGASPILLO TANIA NATALI', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '10555684', estado: 'activo', fechaIngreso: '2026-02-10' },
    { id: 'EMP-050', nombreCompleto: 'PEARES CONDO FELICITAS ANAI', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41356487', estado: 'activo', fechaIngreso: '2026-03-11' },
    { id: 'EMP-051', nombreCompleto: 'REQUE NECIOSUP ANA VIOLETA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47466658', estado: 'activo', fechaIngreso: '2026-06-02' },
    { id: 'EMP-052', nombreCompleto: 'RODRIGUEZ WITTGREN OMAIRA ADRIANA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '49018419', estado: 'activo', fechaIngreso: '2026-06-08' },
    { id: 'EMP-053', nombreCompleto: 'RUIZ CANAQUIRI IGNACIO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47313330', estado: 'activo', fechaIngreso: '2026-05-04' },
    { id: 'EMP-054', nombreCompleto: 'UGAZ ZAPATA JUDITH PERPETUA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '28577249', estado: 'activo', fechaIngreso: '2026-02-12' },
    { id: 'EMP-055', nombreCompleto: 'CRUZATE MORENO EVELYN ROCIO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42084542', estado: 'activo', fechaIngreso: '2026-02-02' },
    { id: 'EMP-056', nombreCompleto: 'GUERRERO MOGOLLON SARA JESENIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '43241542', estado: 'activo', fechaIngreso: '2026-07-01' },
    { id: 'EMP-057', nombreCompleto: 'MEDIANERO ARANCIBIA ALFONSO ALEJANDRO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '75904118', estado: 'activo', fechaIngreso: '2026-01-05' },
    { id: 'EMP-058', nombreCompleto: 'MELENDEZ TREJO INOCENCIA GRECIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '48239445', estado: 'activo', fechaIngreso: '2026-04-14' },
    { id: 'EMP-059', nombreCompleto: 'MINAYA MESTANZA CYNTHIA JANNETT', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '48799922', estado: 'activo', fechaIngreso: '2025-11-04' },
    { id: 'EMP-060', nombreCompleto: 'OLORTEGUI ASIN RAISA GERALDINE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72940170', estado: 'activo', fechaIngreso: '2026-01-09' },
    { id: 'EMP-061', nombreCompleto: 'RODRIGUEZ MELGAREJO JENNY', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '44090752', estado: 'activo', fechaIngreso: '2026-05-04' },
    { id: 'EMP-062', nombreCompleto: 'ROJAS FUENTES EVELYN MARLENE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '44043880', estado: 'activo', fechaIngreso: '2026-01-05' },
    { id: 'EMP-063', nombreCompleto: 'ALCANTARA LLANOS MELIDA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '43761223', estado: 'activo', fechaIngreso: '2025-09-03' },
    { id: 'EMP-064', nombreCompleto: 'AYBAR TOVAR NATALIA LUZ', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '09393401', estado: 'activo', fechaIngreso: '2026-07-06' },
    { id: 'EMP-065', nombreCompleto: 'CABRERA VALDIVIEZO JACQUELINE TEODOSIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '70016231', estado: 'activo', fechaIngreso: '2025-11-10' },
    { id: 'EMP-066', nombreCompleto: 'CASTILLO LAVAN MARIA ISABEL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '06685625', estado: 'activo', fechaIngreso: '2025-11-18' },
    { id: 'EMP-067', nombreCompleto: 'GONZALES VELASQUEZ ELSA HERMINIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '08209052', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-068', nombreCompleto: 'GOYTIZOLO CANCHARI GLORIA MARIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '09647893', estado: 'activo', fechaIngreso: '2026-07-09' },
    { id: 'EMP-069', nombreCompleto: 'HUANAY APAZA GRECIA BRIGHITTE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '45522506', estado: 'activo', fechaIngreso: '2026-04-15' },
    { id: 'EMP-070', nombreCompleto: 'JIMENEZ CONDORI VIDAL ALBERTO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42945540', estado: 'activo', fechaIngreso: '2026-04-08' },
    { id: 'EMP-071', nombreCompleto: 'JURUPE PIZARRO LOURDES VIRGINIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '43600914', estado: 'activo', fechaIngreso: '2025-05-02' },
    { id: 'EMP-072', nombreCompleto: 'LLONTOP LLONTOP LUZ AMPARO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '48285510', estado: 'activo', fechaIngreso: '2025-09-03' },
    { id: 'EMP-073', nombreCompleto: 'MALLMA YACHAS CINDY LEONELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47100915', estado: 'activo', fechaIngreso: '2026-01-09' },
    { id: 'EMP-074', nombreCompleto: 'MERINO VALIENTE DANIELA AIRAM', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '70003154', estado: 'activo', fechaIngreso: '2026-04-01' },
    { id: 'EMP-075', nombreCompleto: 'MICULICICH REVOREDO MARIANITA ALESSANDRA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42887953', estado: 'activo', fechaIngreso: '2025-05-15' },
    { id: 'EMP-076', nombreCompleto: 'MONTESINOS MATOS HEYDI SHURIRA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72974902', estado: 'activo', fechaIngreso: '2026-07-08' },
    { id: 'EMP-077', nombreCompleto: 'OLIVARI VALLE ANA MARIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '8788840', estado: 'activo', fechaIngreso: '2026-07-05' },
    { id: 'EMP-078', nombreCompleto: 'ROJAS ENCINAS EDUARDO GUSTAVO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41558241', estado: 'activo', fechaIngreso: '2025-11-19' },
    { id: 'EMP-079', nombreCompleto: 'ROMN BARRAZA MARIA DEL ROSARIO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41405115', estado: 'activo', fechaIngreso: '2026-04-15' },
    { id: 'EMP-080', nombreCompleto: 'VEGA FARFAN ALLISON RAQUEL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47873323', estado: 'activo', fechaIngreso: '2026-07-07' },
    { id: 'EMP-081', nombreCompleto: 'ALCALA RAMIREZ MARIA DEL CARMEN', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '09880243', estado: 'activo', fechaIngreso: '2025-10-06' },
    { id: 'EMP-082', nombreCompleto: 'ALEJO GARCIA ANDREA LUCIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47467549', estado: 'activo', fechaIngreso: '2026-04-06' },
    { id: 'EMP-083', nombreCompleto: 'ALEJO SARMIENTO JOSHUA KEFLY', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '75420445', estado: 'activo', fechaIngreso: '2026-06-01' },
    { id: 'EMP-084', nombreCompleto: 'BARRERA VENEGAS MACCIE VIVIANA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42085346', estado: 'activo', fechaIngreso: '2026-05-04' },
    { id: 'EMP-085', nombreCompleto: 'CHINCAY GARCIA JOSELYN DANITZA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '76855890', estado: 'activo', fechaIngreso: '2026-01-22' },
    { id: 'EMP-086', nombreCompleto: 'GAMARRA CARRERO NICOLE BRITNEY', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '74380055', estado: 'activo', fechaIngreso: '2026-07-08' },
    { id: 'EMP-087', nombreCompleto: 'GAMARRA MACO MARIBEL NADINE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '18903847', estado: 'activo', fechaIngreso: '2026-07-06' },
    { id: 'EMP-088', nombreCompleto: 'GARCIA MUJICA FRANCIS', puestoId: 'asesor-ventas', tipoDoc: 'CE', numDoc: '01202129', estado: 'activo', fechaIngreso: '2026-03-24' },
    { id: 'EMP-089', nombreCompleto: 'JACINTO SORALUZ LORENT CASSANDRA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '75892583', estado: 'activo', fechaIngreso: '2025-09-03' },
    { id: 'EMP-090', nombreCompleto: 'JIMENEZ DE SANCHEZ ARIAMINY', puestoId: 'asesor-ventas', tipoDoc: 'CE', numDoc: '16406433', estado: 'activo', fechaIngreso: '2026-03-23' },
    { id: 'EMP-091', nombreCompleto: 'LLONTOP MAMANI YESENIA ELVIRA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47523495', estado: 'activo', fechaIngreso: '2026-02-02' },
    { id: 'EMP-092', nombreCompleto: 'MESTANZA HUAMAN VERONICA RAQUEL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '46894221', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-093', nombreCompleto: 'NOLTE PALACIOS OLENKA ANTUANE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '75018834', estado: 'activo', fechaIngreso: '2026-07-08' },
    { id: 'EMP-094', nombreCompleto: 'OLIVERA CUADROS ASTRID JAZMIN', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '77555490', estado: 'activo', fechaIngreso: '2026-02-09' },
    { id: 'EMP-095', nombreCompleto: 'PAJUELO VILLANUEVA CAROLINA YOLANDA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '71420129', estado: 'activo', fechaIngreso: '2026-01-22' },
    { id: 'EMP-096', nombreCompleto: 'PINHEIRO RIOS MARIA DEL PILAR', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41340814', estado: 'activo', fechaIngreso: '2026-02-02' },
    { id: 'EMP-097', nombreCompleto: 'PORTOCARRERO MARTINEZ CYNTHIA KATHERIN', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '43481633', estado: 'activo', fechaIngreso: '2025-11-05' },
    { id: 'EMP-098', nombreCompleto: 'REYES ESCALANTE SOLEDAD MARIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '10306629', estado: 'activo', fechaIngreso: '2025-10-01' },
    { id: 'EMP-099', nombreCompleto: 'SALAS CRUZADO SAYRA SUSANA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41926029', estado: 'activo', fechaIngreso: '2025-11-03' },
    { id: 'EMP-100', nombreCompleto: 'SALAS CRUZADO SILVIA ZARELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42890382', estado: 'activo', fechaIngreso: '2026-02-02' },
    { id: 'EMP-101', nombreCompleto: 'SIFONTES NAVARRO MADISSON', puestoId: 'asesor-ventas', tipoDoc: 'CE', numDoc: '006070047', estado: 'activo', fechaIngreso: '2026-05-10' },
    { id: 'EMP-102', nombreCompleto: 'SILVIA DIAZ ESTEFANIA ANDREINA', puestoId: 'asesor-ventas', tipoDoc: 'CE', numDoc: '002433886D', estado: 'activo', fechaIngreso: '2026-07-02' },
    { id: 'EMP-103', nombreCompleto: 'SOSA CASTILLO DORA ELIZABETH', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '25748979', estado: 'activo', fechaIngreso: '2026-07-01' },
    { id: 'EMP-104', nombreCompleto: 'VASQUEZ CUEVA MERLY GUISSELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '25748979', estado: 'activo', fechaIngreso: '2026-07-02' },
    { id: 'EMP-105', nombreCompleto: 'ABAD BERROSPI MELISSA BRILLIT', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47924057', estado: 'activo', fechaIngreso: '2025-10-30' },
    { id: 'EMP-106', nombreCompleto: 'ABARCA CARCAS LUCERO AMPARO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '74724785', estado: 'activo', fechaIngreso: '2026-05-04' },
    { id: 'EMP-107', nombreCompleto: 'ACHULLI HUALLPA YHON MAYCOL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47627051', estado: 'activo', fechaIngreso: '2026-07-01' },
    { id: 'EMP-108', nombreCompleto: 'ACO PEREZ JENNY GRACIELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '40015747', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-109', nombreCompleto: 'ALTAMIRANO PALOMINO ELISABETH ROCO', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '47925892', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-110', nombreCompleto: 'BENITES REAO MICHELLE CAMILLA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72847742', estado: 'activo', fechaIngreso: '2026-01-14' },
    { id: 'EMP-111', nombreCompleto: 'DAVILA RAMOS SANDRA ANTONIETA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '41357282', estado: 'activo', fechaIngreso: '2026-07-07' },
    { id: 'EMP-112', nombreCompleto: 'DURAN VERGARA GINA JAYNE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '80519528', estado: 'activo', fechaIngreso: '2026-07-07' },
    { id: 'EMP-113', nombreCompleto: 'ENCISO ZAPATA JACKELINNE ELIZABETH', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '46374469', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-114', nombreCompleto: 'ESTELA BALLADARES ANAVELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '70994761', estado: 'activo', fechaIngreso: '2025-10-15' },
    { id: 'EMP-115', nombreCompleto: 'HIGINIO ROJAS EVELYN JANET', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42836100', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-116', nombreCompleto: 'HUAMANI CACERES ELIZABET NANCI', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '74798584', estado: 'activo', fechaIngreso: '2026-05-22' },
    { id: 'EMP-117', nombreCompleto: 'MATAMOROS SOTO DELIA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '00114010', estado: 'activo', fechaIngreso: '2025-09-18' },
    { id: 'EMP-118', nombreCompleto: 'PASCO PAREDES PATRICK FELIPE', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72499010', estado: 'activo', fechaIngreso: '2026-07-01' },
    { id: 'EMP-119', nombreCompleto: 'POLINO YDELFONSO ROBIN YIOVANNI', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '44185233', estado: 'activo', fechaIngreso: '2026-01-14' },
    { id: 'EMP-120', nombreCompleto: 'SAMANIEGO QUISPE CRISTIAN PAUL', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '72726270', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-121', nombreCompleto: 'SEDANO MERLO DAISY PAMELA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '42459403', estado: 'activo', fechaIngreso: '2026-01-28' },
    { id: 'EMP-122', nombreCompleto: 'SEGURA DELGADO KARLA DEL PILAR', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '46540891', estado: 'activo', fechaIngreso: '2026-04-20' },
    { id: 'EMP-123', nombreCompleto: 'TANTARUNA CRISOSTOMO SHARON TATIANA', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '45781070', estado: 'activo', fechaIngreso: '2025-08-01' },
    { id: 'EMP-124', nombreCompleto: 'VALENCIA DELGADO ANGELA MAGALY', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '46065252', estado: 'activo', fechaIngreso: '2026-07-02' },
    { id: 'EMP-125', nombreCompleto: 'VILCA PANTIGOSO LOURDES SALOME', puestoId: 'asesor-ventas', tipoDoc: 'DNI', numDoc: '44614235', estado: 'activo', fechaIngreso: '2026-07-01' },
];

let STAFF_DATA = [];
const savedStaff = localStorage.getItem('mof_staff_data_v3');
if (savedStaff) {
    try {
        STAFF_DATA = JSON.parse(savedStaff);
    } catch(e) {
        STAFF_DATA = INITIAL_STAFF_DATA;
    }
} else {
    const uniqueStaff = [];
    const seenStaff = new Set();
    for (let emp of INITIAL_STAFF_DATA) {
        if (!seenStaff.has(emp.id)) {
            seenStaff.add(emp.id);
            uniqueStaff.push(emp);
        }
    }
    STAFF_DATA = uniqueStaff;
    localStorage.setItem('mof_staff_data_v3', JSON.stringify(STAFF_DATA));
}

function saveStaffData() {
    localStorage.setItem('mof_staff_data_v3', JSON.stringify(STAFF_DATA));
}

let staffViewMode = 'cards'; // 'cards' or 'table'
let staffFilter = 'all';
let staffStatusFilter = 'all';
let staffSortColumn = 'id';
let staffSortDirection = 'asc';

// ============================================
// ORG CHART STRUCTURE
// ============================================
const ORG_STRUCTURE = {
    id: 'gerente-general',
    children: [
        {
            id: 'spacer',
            children: [
                {
                    id: 'coordinador-validacion',
                    children: [
                        { 
                            id: 'spacer',
                            children: [{ id: 'validador', children: [] }]
                        }
                    ]
                },
                {
                    id: 'gerente-rrhh',
                    children: [
                        {
                            id: 'spacer',
                            children: [
                                { id: 'asistente-rrhh', children: [] }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'gerente-comercial',
            children: [
                {
                    id: 'supervisor-ventas',
                    children: [
                        {
                            id: 'monitor-ventas',
                            children: [
                                { id: 'asesor-ventas', children: [] }
                            ]
                        }
                    ]
                },
                {
                    id: 'coordinador-convenios',
                    children: [
                        {
                            id: 'supervisor-convenios',
                            children: [
                                { id: 'asesor-convenios', children: [] }
                            ]
                        },
                        {
                            id: 'spacer',
                            children: [
                                { id: 'validador-convenios', children: [] }
                            ]
                        }
                    ]
                },
                {
                    id: 'encargado-bi',
                    children: [
                        { id: 'coordinador-proyectos', children: [] },
                        { id: 'analista-bd', children: [] },
                        { id: 'coordinador-ti', children: [] },
                        { id: 'analista-bi-junior', children: [] }
                    ]
                }
            ]
        },
        {
            id: 'spacer',
            children: [
                {
                    id: 'asistente-admin',
                    children: [
                        {
                            id: 'spacer',
                            children: [
                                { id: 'encargado-limpieza', children: [] }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

// ============================================
// APP STATE & HELPERS
// ============================================
let currentPage = 'dashboard';
let currentFilter = 'all';
let currentSearchQuery = '';

function getMOFById(id) {
    return MOF_DATA.find(m => m.id === id);
}

function getAreaInfo(areaKey) {
    return AREAS[areaKey] || AREAS.admin;
}

function getAreaPositions(areaKey) {
    return MOF_DATA.filter(m => m.area === areaKey);
}

function getUniqueAreas() {
    const seen = new Set();
    return MOF_DATA.reduce((acc, m) => {
        if (!seen.has(m.area)) {
            seen.add(m.area);
            acc.push(m.area);
        }
        return acc;
    }, []);
}

// ============================================
// RENDER: Dashboard
// ============================================
function renderDashboard() {
    const areas = getUniqueAreas();
    const areaCount = areas.length;

    let html = `
        <div class="dashboard-hero">
            <h1>Manual de Organización y Funciones</h1>
            <p>Sistema integral de documentación organizacional del call center. Consulta la descripción de cada puesto, sus funciones, requisitos y el organigrama completo de la empresa.</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card stagger-in" style="animation-delay: 100ms; cursor: pointer;" onclick="navigateTo('puestos')" title="Ver Tipos de Puesto">
                <div class="stat-icon blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div class="stat-info">
                    <h3>22</h3>
                    <p>Tipos de Puesto</p>
                </div>
            </div>
            <div class="stat-card stagger-in" style="animation-delay: 200ms; cursor: pointer" onclick="navigateTo('staff')" title="Ver Directorio">
                <div class="stat-icon gold">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
                </div>
                <div class="stat-info">
                    <h3>${STAFF_DATA.filter(s => s.estado !== 'inactivo').length}</h3>
                    <p>Empleados Activos</p>
                </div>
            </div>
            <div class="stat-card stagger-in" style="animation-delay: 300ms; cursor: pointer;" onclick="navigateTo('areas')" title="Ver Áreas">
                <div class="stat-icon emerald">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </div>
                <div class="stat-info">
                    <h3>${areaCount}</h3>
                    <p>Áreas</p>
                </div>
            </div>
            <div class="stat-card stagger-in" style="animation-delay: 400ms; cursor: pointer;" onclick="navigateTo('mof-list')" title="Ver Manuales MOF">
                <div class="stat-icon purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div class="stat-info">
                    <h3>22</h3>
                    <p>MOF Documentados</p>
                </div>
            </div>
        </div>

        <h2 class="section-title"><span class="dot"></span>Áreas de la Empresa</h2>
        <div class="areas-grid">
    `;

    areas.forEach((areaKey, i) => {
        const area = getAreaInfo(areaKey);
        const positions = getAreaPositions(areaKey);
        html += `
            <div class="area-card stagger-in" style="--area-color: ${area.color}; animation-delay: ${(i * 50) + 400}ms" onclick="navigateToMOFList('${areaKey}')">
                <div style="position:absolute;top:0;left:0;width:4px;height:100%;background:${area.color};border-radius:2px 0 0 2px;z-index:2"></div>
                <div class="area-card-header">
                    <h3>${area.name}</h3>
                    <span class="area-badge" style="background:${area.bg};color:${area.color};border:1px solid ${area.border}">${positions.length} puesto${positions.length > 1 ? 's' : ''}</span>
                </div>
                <div class="area-card-positions">
                    ${positions.map(p => `
                        <div class="position-link" onclick="event.stopPropagation(); openMOFDetail('${p.id}')">${p.titulo}</div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    html += '</div>';
    document.getElementById('page-content').innerHTML = html;
    animateStagger();
}

// ============================================
// RENDER: MOF List
// ============================================
function renderMOFList(filterArea = 'all') {
    currentFilter = filterArea;
    const areas = getUniqueAreas();
    let filtered = filterArea === 'all' ? MOF_DATA : MOF_DATA.filter(m => m.area === filterArea);

    if (currentSearchQuery) {
        filtered = filtered.filter(m => 
            m.titulo.toLowerCase().includes(currentSearchQuery) ||
            m.objetivo.toLowerCase().includes(currentSearchQuery) ||
            getAreaInfo(m.area).name.toLowerCase().includes(currentSearchQuery) ||
            (m.funcionesPrincipales && m.funcionesPrincipales.some(f => f.toLowerCase().includes(currentSearchQuery)))
        );
    }

    let html = `
        <div class="mof-list-header">
            <h1>Manuales de Organización y Funciones</h1>
            <p>Selecciona un puesto para ver su MOF completo</p>
        </div>
        <div class="filter-bar">
            <button class="filter-btn ${filterArea === 'all' ? 'active' : ''}" onclick="renderMOFList('all')">Todos</button>
            ${areas.map(a => {
                const area = getAreaInfo(a);
                return `<button class="filter-btn ${filterArea === a ? 'active' : ''}" onclick="renderMOFList('${a}')" style="${filterArea === a ? `background:${area.color};border-color:${area.color}` : ''}">${area.name}</button>`;
            }).join('')}
        </div>
        <div class="mof-cards-grid">
    `;

    if (filtered.length === 0) {
        html += `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:48px;height:48px;margin-bottom:16px;opacity:0.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <p style="font-size: 1.1rem;">No se encontraron resultados para "${currentSearchQuery}"</p>
                 </div>`;
    }

    filtered.forEach((mof, i) => {
        const area = getAreaInfo(mof.area);
        const initials = mof.titulo.split(' ').map(w => w[0]).filter(c => c === c.toUpperCase() && c.match(/[A-ZÁ-Ú]/i)).slice(0, 2).join('');
        html += `
            <div class="mof-card stagger-in" style="animation-delay: ${i * 50}ms" onclick="openMOFDetail('${mof.id}')">
                <div style="position:absolute;bottom:0;left:0;width:100%;height:3px;background:linear-gradient(90deg, ${area.color}, transparent);opacity:0;transition:opacity 0.25s;" class="card-accent"></div>
                <div class="mof-card-top">
                    <div class="mof-card-icon" style="background:linear-gradient(135deg, ${area.color}, ${area.color}dd)">${initials}</div>
                    <span class="mof-card-area" style="background:${area.bg};color:${area.color};border:1px solid ${area.border}">${area.name}</span>
                </div>
                <h3>${mof.titulo}</h3>
                <p class="mof-card-reporta">Reporta a: ${mof.reportaA}</p>
                <p class="mof-card-objective">${mof.objetivo}</p>
                <span class="view-more">Ver MOF completo →</span>
            </div>
        `;
    });

    html += '</div>';
    document.getElementById('page-content').innerHTML = html;

    // Add hover effect for card accent
    document.querySelectorAll('.mof-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.card-accent').style.opacity = '1';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-accent').style.opacity = '0';
        });
    });
}

// ============================================
// RENDER: MOF Detail
// ============================================
function openMOFDetail(id) {
    const mof = getMOFById(id);
    if (!mof) return;
    const area = getAreaInfo(mof.area);

    const html = `
        <div class="mof-detail-header">
            <span class="mof-area-badge" style="background:${area.bg};color:${area.color};border:1px solid ${area.border}">${area.name}</span>
            <h1>${mof.titulo}</h1>
            <p class="mof-objective">${mof.objetivo}</p>
        </div>

        <div class="mof-detail-meta">
            <div class="mof-meta-item">
                <div class="meta-label">Reporta a</div>
                <div class="meta-value">${mof.reportaA}</div>
            </div>
            <div class="mof-meta-item">
                <div class="meta-label">Supervisa a</div>
                <div class="meta-value">${mof.supervisa.length > 0 ? mof.supervisa.join(', ') : 'N/A (puesto operativo)'}</div>
            </div>
            <div class="mof-meta-item">
                <div class="meta-label">Área</div>
                <div class="meta-value">${area.name}</div>
            </div>
            <div class="mof-meta-item">
                <div class="meta-label">Modalidad</div>
                <div class="meta-value">${mof.condiciones.modalidad}</div>
            </div>
        </div>

        <div class="mof-section">
            <h3 class="mof-section-title">
                <span class="section-icon" style="background:${area.bg};color:${area.color}">📋</span>
                Funciones Principales
            </h3>
            <ul>
                ${mof.funcionesPrincipales.map(f => `<li style="border-left-color:${area.color}">${f}</li>`).join('')}
            </ul>
        </div>

        <div class="mof-section">
            <h3 class="mof-section-title">
                <span class="section-icon" style="background:${area.bg};color:${area.color}">📌</span>
                Funciones Secundarias
            </h3>
            <ul>
                ${mof.funcionesSecundarias.map(f => `<li style="border-left-color:${area.color}88">${f}</li>`).join('')}
            </ul>
        </div>

        <div class="mof-section">
            <h3 class="mof-section-title">
                <span class="section-icon" style="background:${area.bg};color:${area.color}">🎓</span>
                Requisitos del Puesto
            </h3>
            <ul>
                <li style="border-left-color:${area.color}"><strong>Educación:</strong> ${mof.requisitos.educacion}</li>
                <li style="border-left-color:${area.color}"><strong>Experiencia:</strong> ${mof.requisitos.experiencia}</li>
                ${mof.requisitos.conocimientos.map(c => `<li style="border-left-color:${area.color}88">${c}</li>`).join('')}
            </ul>
        </div>

        <div class="mof-section">
            <h3 class="mof-section-title">
                <span class="section-icon" style="background:${area.bg};color:${area.color}">💡</span>
                Competencias
            </h3>
            <div class="competencies-grid">
                ${mof.competencias.map(c => `
                    <div class="competency-tag">
                        <span class="tag-dot" style="background:${c.tipo === 'blanda' ? '#3b82f6' : '#10b981'}"></span>
                        ${c.nombre}
                        <span style="font-size:0.65rem;color:var(--text-muted);margin-left:auto">${c.tipo === 'blanda' ? 'Blanda' : 'Técnica'}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="mof-section">
            <h3 class="mof-section-title">
                <span class="section-icon" style="background:${area.bg};color:${area.color}">📊</span>
                Indicadores de Desempeño (KPIs)
            </h3>
            <div class="kpi-list">
                ${mof.kpis.map(k => `
                    <div class="kpi-item">
                        <div class="kpi-name">${k.nombre}</div>
                        <div class="kpi-desc">${k.descripcion}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="mof-section">
            <h3 class="mof-section-title">
                <span class="section-icon" style="background:${area.bg};color:${area.color}">🔗</span>
                Relaciones de Coordinación
            </h3>
            <ul>
                <li style="border-left-color:${area.color}"><strong>Internas:</strong> ${mof.coordinaciones.internas}</li>
                <li style="border-left-color:${area.color}88"><strong>Externas:</strong> ${mof.coordinaciones.externas}</li>
            </ul>
        </div>

        <div class="mof-section">
            <h3 class="mof-section-title">
                <span class="section-icon" style="background:${area.bg};color:${area.color}">🔄</span>
                Participación en Flujos de Trabajo
            </h3>
            <div class="workflow-badges">
                ${WORKFLOWS_DATA.filter(w => w.steps.some(s => s.roleId === mof.id)).length > 0 
                    ? WORKFLOWS_DATA.filter(w => w.steps.some(s => s.roleId === mof.id)).map(w => `<span class="workflow-badge" style="border-color:${area.color}55;color:${area.color}">${w.title}</span>`).join('') 
                    : '<span style="color:var(--text-muted);font-size:0.8rem">No participa en flujos mapeados directamente.</span>'}
            </div>
        </div>

        <div class="mof-section">
            <h3 class="mof-section-title">
                <span class="section-icon" style="background:${area.bg};color:${area.color}">⚙️</span>
                Condiciones de Trabajo
            </h3>
            <ul>
                <li style="border-left-color:${area.color}"><strong>Horario:</strong> ${mof.condiciones.horario}</li>
                <li style="border-left-color:${area.color}"><strong>Modalidad:</strong> ${mof.condiciones.modalidad}</li>
                <li style="border-left-color:${area.color}88"><strong>Herramientas:</strong> ${mof.condiciones.herramientas}</li>
            </ul>
        </div>
    `;

    document.getElementById('mof-detail-content').innerHTML = html;
    const overlay = document.getElementById('mof-detail-overlay');
    overlay.classList.remove('hidden');
    overlay.scrollTop = 0;

    document.getElementById('mof-print-btn').onclick = () => printSingleMOF(mof);
    document.getElementById('mof-export-word-btn').onclick = () => exportToWord(mof);
}

function closeMOFDetail() {
    document.getElementById('mof-detail-overlay').classList.add('hidden');
}

// ============================================
// RENDER: Organigrama
// ============================================
function renderOrgChart() {
    let html = `
        <div class="orgchart-page">
            <h1>Organigrama de la Empresa</h1>
            <p>Estructura jerárquica del call center. Haz clic en cualquier puesto para ver su MOF.</p>
            <div class="orgchart-controls" style="margin-bottom:16px; display:flex; align-items:center;">
                <button class="toggle-btn active" id="btn-org-report" onclick="toggleOrgView('report')">Líneas de Reporte</button>
                <button class="toggle-btn" id="btn-org-coord" onclick="toggleOrgView('coord')">Líneas de Coordinación</button>
                <button class="btn btn-primary" onclick="printOrgChart()" style="margin-left:auto;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                    Imprimir Organigrama
                </button>
            </div>
            <div class="orgchart-wrapper" id="orgchart-container" style="position:relative;">
                ${buildOrgTree(ORG_STRUCTURE)}
                <svg id="org-svg-layer" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;display:none;"></svg>
            </div>
        </div>
    `;
    document.getElementById('page-content').innerHTML = html;
}

window.toggleOrgView = function(viewType) {
    const btnReport = document.getElementById('btn-org-report');
    const btnCoord = document.getElementById('btn-org-coord');
    if(btnReport) btnReport.classList.toggle('active', viewType === 'report');
    if(btnCoord) btnCoord.classList.toggle('active', viewType === 'coord');
    
    const svgLayer = document.getElementById('org-svg-layer');
    if (viewType === 'coord') {
        svgLayer.style.display = 'block';
        drawCoordinationLines();
    } else {
        svgLayer.style.display = 'none';
        svgLayer.innerHTML = '';
    }
};

function drawCoordinationLines() {
    const svgLayer = document.getElementById('org-svg-layer');
    svgLayer.innerHTML = '';
    const container = document.getElementById('orgchart-container');
    const containerRect = container.getBoundingClientRect();
    
    // Mock coordinations mapping for visualization
    const coordinations = [
        ['supervisor-ventas', 'coordinador-validacion'],
        ['coordinador-capacitacion', 'supervisor-ventas'],
        ['coordinador-ti', 'analista-bd'],
        ['asistente-admin', 'coordinador-ti']
    ];
    
    let svgHtml = '';
    coordinations.forEach(pair => {
        const el1 = document.getElementById('node-' + pair[0]);
        const el2 = document.getElementById('node-' + pair[1]);
        if (el1 && el2) {
            const rect1 = el1.getBoundingClientRect();
            const rect2 = el2.getBoundingClientRect();
            const scale = container.getBoundingClientRect().width / container.offsetWidth; // Handle scaling
            
            // Adjust coordinates based on scroll and container position
            const x1 = (rect1.left + rect1.width / 2 - containerRect.left) / scale;
            const y1 = (rect1.top + rect1.height / 2 - containerRect.top) / scale;
            const x2 = (rect2.left + rect2.width / 2 - containerRect.left) / scale;
            const y2 = (rect2.top + rect2.height / 2 - containerRect.top) / scale;
            
            const cx = (x1 + x2) / 2;
            const cy = Math.min(y1, y2) - 80; // arc upwards
            
            svgHtml += `<path d="M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-dasharray="6,6" />`;
        }
    });
    // Set SVG size to match content
    svgLayer.style.width = container.scrollWidth + 'px';
    svgLayer.style.height = container.scrollHeight + 'px';
    svgLayer.innerHTML = svgHtml;
}

function buildOrgTree(node) {
    if (node.id === 'spacer') {
        let childrenHtml = '';
        if (node.children && node.children.length > 0) {
            childrenHtml = `
                <div class="org-connector-v"></div>
                <div class="org-children" style="position:relative;">
                    ${node.children.map(child => `
                        <div class="org-child-branch">
                            <div class="org-connector-v"></div>
                            ${buildOrgTree(child)}
                        </div>
                    `).join('')}
                </div>
            `;
        }
        return `
            <div class="org-branch">
                <div class="org-connector-v" style="height: 60px;"></div>
                ${childrenHtml}
            </div>
        `;
    }

    const mof = getMOFById(node.id);
    if (!mof) return '';
    const area = getAreaInfo(mof.area);

    let childrenHtml = '';
    if (node.children && node.children.length > 0) {
        childrenHtml = `
            <div class="org-connector-v"></div>
            <div class="org-children" style="position:relative;">
                ${node.children.map(child => `
                    <div class="org-child-branch">
                        <div class="org-connector-v"></div>
                        ${buildOrgTree(child)}
                    </div>
                `).join('')}
            </div>
        `;
    }

    return `
        <div class="org-branch">
            <div class="org-node" id="node-${mof.id}" onclick="openMOFDetail('${mof.id}')" style="border-color:${area.border}; position:relative; z-index:1;">
                <div class="node-title">${mof.titulo}</div>
                <span class="node-area" style="background:${area.bg};color:${area.color};border:1px solid ${area.border};font-size:0.6rem;">${area.name}</span>
            </div>
            ${childrenHtml}
        </div>
    `;
}

// ============================================
// RENDER: Workflows
// ============================================
function renderWorkflows() {
    let html = `
        <div class="workflow-page">
            <div class="workflow-header">
                <h1>Flujos de Trabajo y Procesos</h1>
                <p>Mapeo de los principales procesos operativos y las posiciones involucradas en cada paso.</p>
            </div>
            <div class="workflow-grid">
    `;

    WORKFLOWS_DATA.forEach((workflow, i) => {
        html += `
            <div class="workflow-card stagger-in" style="animation-delay: ${i * 100}ms">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h2>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;color:var(--accent-blue)"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                        ${workflow.title}
                    </h2>
                    <div class="workflow-actions" style="display: flex; gap: 8px;">
                        <button class="btn-icon" title="Imprimir Tabla" onclick="printSingleWorkflow('${workflow.id}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                        </button>
                        <button class="btn-icon" title="Imprimir Gráfico" onclick="printSingleWorkflowGraph('${workflow.id}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                        </button>
                        <button class="btn-icon" title="Exportar Flujo a Word" onclick="exportWorkflowToWord('${workflow.id}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        </button>
                    </div>
                </div>
                <p>${workflow.description}</p>
                <div class="workflow-steps">
        `;
        
        workflow.steps.forEach((step, index) => {
            const mof = getMOFById(step.roleId);
            const area = getAreaInfo(mof ? mof.area : 'admin');
            const initials = mof ? mof.titulo.split(' ').map(w => w[0]).filter(c => c && c === c.toUpperCase() && c.match(/[A-ZÁ-Ú]/i)).slice(0, 2).join('') : '?';
            
            html += `
                <div class="workflow-step" onclick="openMOFDetail('${step.roleId}')">
                    <div class="workflow-step-icon" style="color:${area.color}; border-color:${area.color}55; background:${area.bg}">
                        ${initials}
                    </div>
                    <div class="workflow-step-role">${mof ? mof.titulo : step.roleId}</div>
                    <div class="workflow-step-desc">${step.action}</div>
                </div>
            `;
            
            if (index < workflow.steps.length - 1) {
                html += `
                    <div class="workflow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                `;
            }
        });
        
        html += `
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    document.getElementById('page-content').innerHTML = html;
}

// ============================================
// SEARCH
// ============================================
function handleSearch(query) {
    if (!query.trim()) {
        if (currentPage === 'dashboard') renderDashboard();
        else if (currentPage === 'mof-list') renderMOFList(currentFilter);
        else if (currentPage === 'orgchart') renderOrgChart();
        else if (currentPage === 'staff') { currentSearchQuery = ''; renderStaffDirectory(); }
        return;
    }

    // If on staff page, use staff directory's own search
    if (currentPage === 'staff') {
        currentSearchQuery = query.toLowerCase().trim();
        renderStaffDirectory();
        return;
    }

    const q = query.toLowerCase();
    const results = MOF_DATA.filter(mof => {
        return mof.titulo.toLowerCase().includes(q) ||
            mof.objetivo.toLowerCase().includes(q) ||
            mof.funcionesPrincipales.some(f => f.toLowerCase().includes(q)) ||
            mof.funcionesSecundarias.some(f => f.toLowerCase().includes(q)) ||
            mof.competencias.some(c => c.nombre.toLowerCase().includes(q)) ||
            AREAS[mof.area].name.toLowerCase().includes(q) ||
            mof.reportaA.toLowerCase().includes(q);
    });

    let html = `
        <div class="search-results-header">
            <h2>Resultados de búsqueda</h2>
            <p>${results.length} resultado${results.length !== 1 ? 's' : ''} para "${query}"</p>
        </div>
    `;

    if (results.length === 0) {
        html += `
            <div class="no-results">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <h3>Sin resultados</h3>
                <p>Intenta con otro término de búsqueda</p>
            </div>
        `;
    } else {
        html += '<div class="mof-cards-grid">';
        results.forEach((mof, i) => {
            const area = getAreaInfo(mof.area);
            const initials = mof.titulo.split(' ').map(w => w[0]).filter(c => c === c.toUpperCase() && c.match(/[A-ZÁ-Ú]/i)).slice(0, 2).join('');
            html += `
                <div class="mof-card stagger-in" style="animation-delay: ${i * 50}ms" onclick="openMOFDetail('${mof.id}')">
                    <div class="mof-card-top">
                        <div class="mof-card-icon" style="background:linear-gradient(135deg, ${area.color}, ${area.color}dd)">${initials}</div>
                        <span class="mof-card-area" style="background:${area.bg};color:${area.color};border:1px solid ${area.border}">${area.name}</span>
                    </div>
                    <h3>${mof.titulo}</h3>
                    <p class="mof-card-reporta">Reporta a: ${mof.reportaA}</p>
                    <p class="mof-card-objective">${mof.objetivo}</p>
                    <span class="view-more">Ver MOF completo →</span>
                </div>
            `;
        });
        html += '</div>';
    }

    document.getElementById('page-content').innerHTML = html;
}

// ============================================
// RENDER: Staff Directory
// ============================================
function getStaffByArea(areaKey) {
    return STAFF_DATA.filter(s => {
        const mof = getMOFById(s.puestoId);
        return mof && mof.area === areaKey;
    });
}

function getStaffByPosition(puestoId) {
    return STAFF_DATA.filter(s => s.puestoId === puestoId);
}

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function getAntiguedad(dateStr) {
    const start = new Date(dateStr + 'T00:00:00');
    const now = new Date();
    const years = now.getFullYear() - start.getFullYear();
    const months = now.getMonth() - start.getMonth();
    const totalMonths = years * 12 + months;
    if (totalMonths < 12) return `${totalMonths} mes${totalMonths !== 1 ? 'es' : ''}`;
    const y = Math.floor(totalMonths / 12);
    const m = totalMonths % 12;
    return m > 0 ? `${y} año${y > 1 ? 's' : ''}, ${m} mes${m > 1 ? 'es' : ''}` : `${y} año${y > 1 ? 's' : ''}`;
}

function getStatusConfig(estado) {
    switch(estado) {
        case 'activo': return { label: 'Activo', color: '#10b981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: '●' };
        case 'inactivo': return { label: 'Inactivo', color: '#64748b', bg: 'rgba(100,116,139,0.12)', border: 'rgba(100,116,139,0.3)', icon: '○' };
        case 'vacaciones': return { label: 'Vacaciones', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.3)', icon: '◐' };
        default: return { label: estado, color: '#94a3b8', bg: 'rgba(148,163,184,0.12)', border: 'rgba(148,163,184,0.3)', icon: '○' };
    }
}

function renderStaffDirectory() {
    const areas = getUniqueAreas();
    let filtered = STAFF_DATA.slice();

    // Filter by area
    if (staffFilter !== 'all') {
        filtered = filtered.filter(s => {
            const mof = getMOFById(s.puestoId);
            return mof && mof.area === staffFilter;
        });
    }

    // Filter by status
    if (staffStatusFilter !== 'all') {
        filtered = filtered.filter(s => s.estado === staffStatusFilter);
    }

    // Filter by search
    if (currentSearchQuery) {
        const q = currentSearchQuery.toLowerCase();
        filtered = filtered.filter(s => {
            const mof = getMOFById(s.puestoId);
            const areaName = mof ? getAreaInfo(mof.area).name : '';
            return s.nombreCompleto.toLowerCase().includes(q) ||
                (mof && mof.titulo.toLowerCase().includes(q)) ||
                areaName.toLowerCase().includes(q) ||
                s.numDoc.toLowerCase().includes(q) ||
                s.id.toLowerCase().includes(q);
        });
    }

    // Sort
    filtered.sort((a, b) => {
        let valA = '', valB = '';
        if (staffSortColumn === 'id') { valA = a.id; valB = b.id; }
        else if (staffSortColumn === 'nombreCompleto') { valA = a.nombreCompleto; valB = b.nombreCompleto; }
        else if (staffSortColumn === 'puestoId') { 
            const mA = getMOFById(a.puestoId); const mB = getMOFById(b.puestoId);
            valA = mA ? mA.titulo : a.puestoId; valB = mB ? mB.titulo : b.puestoId;
        }
        else if (staffSortColumn === 'area') {
            const mA = getMOFById(a.puestoId); const mB = getMOFById(b.puestoId);
            valA = mA ? getAreaInfo(mA.area).name : ''; valB = mB ? getAreaInfo(mB.area).name : '';
        }
        else if (staffSortColumn === 'tipoDoc') { valA = a.tipoDoc; valB = b.tipoDoc; }
        else if (staffSortColumn === 'numDoc') { valA = a.numDoc; valB = b.numDoc; }
        else if (staffSortColumn === 'fechaIngreso') { valA = a.fechaIngreso || ''; valB = b.fechaIngreso || ''; }
        else if (staffSortColumn === 'estado') { valA = a.estado; valB = b.estado; }
        
        // Handle undefined or null safely
        valA = valA || ''; valB = valB || '';
        
        if (valA < valB) return staffSortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return staffSortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const totalActive = STAFF_DATA.filter(s => s.estado === 'activo').length;
    const totalVacaciones = STAFF_DATA.filter(s => s.estado === 'vacaciones').length;
    const totalInactive = STAFF_DATA.filter(s => s.estado === 'inactivo').length;

    let html = `
        <div class="staff-header" style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
                <h1>Directorio de Personal</h1>
                <p>Gestiona y consulta la información de los empleados asignados a cada puesto del MOF.</p>
            </div>
            <div style="display:flex; gap:12px;">
                <button class="btn btn-primary" onclick="openEmployeeModal()">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px; vertical-align:text-bottom;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Nuevo Empleado
                </button>
                <button class="btn btn-success" onclick="exportStaffToExcel()">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px; vertical-align:text-bottom;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    Exportar Excel
                </button>
            </div>
        </div>

        <div class="staff-stats-bar">
            <div class="staff-stat-chip" onclick="staffStatusFilter='all'; renderStaffDirectory()" style="cursor:pointer">
                <span class="staff-stat-number">${STAFF_DATA.length}</span>
                <span class="staff-stat-label">Total</span>
            </div>
            <div class="staff-stat-chip active-chip" onclick="staffStatusFilter='activo'; renderStaffDirectory()" style="cursor:pointer">
                <span class="staff-stat-dot" style="background:#10b981"></span>
                <span class="staff-stat-number">${totalActive}</span>
                <span class="staff-stat-label">Activos</span>
            </div>
            <div class="staff-stat-chip vacation-chip" onclick="staffStatusFilter='vacaciones'; renderStaffDirectory()" style="cursor:pointer">
                <span class="staff-stat-dot" style="background:#3b82f6"></span>
                <span class="staff-stat-number">${totalVacaciones}</span>
                <span class="staff-stat-label">Vacaciones</span>
            </div>
            <div class="staff-stat-chip inactive-chip" onclick="staffStatusFilter='inactivo'; renderStaffDirectory()" style="cursor:pointer">
                <span class="staff-stat-dot" style="background:#64748b"></span>
                <span class="staff-stat-number">${totalInactive}</span>
                <span class="staff-stat-label">Inactivos</span>
            </div>
        </div>

        <div class="staff-controls">
            <div class="filter-bar">
                <button class="filter-btn ${staffFilter === 'all' ? 'active' : ''}" onclick="staffFilter='all'; renderStaffDirectory()">Todos</button>
                ${areas.map(a => {
                    const area = getAreaInfo(a);
                    return `<button class="filter-btn ${staffFilter === a ? 'active' : ''}" onclick="staffFilter='${a}'; renderStaffDirectory()" style="${staffFilter === a ? `background:${area.color};border-color:${area.color}` : ''}">${area.name}</button>`;
                }).join('')}
            </div>
            <div class="view-toggle-group">
                <button class="view-toggle-btn ${staffViewMode === 'cards' ? 'active' : ''}" onclick="staffViewMode='cards'; renderStaffDirectory()" title="Vista Tarjetas">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                </button>
                <button class="view-toggle-btn ${staffViewMode === 'table' ? 'active' : ''}" onclick="staffViewMode='table'; renderStaffDirectory()" title="Vista Tabla">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                </button>
            </div>
        </div>

        <div class="staff-results-info">
            <span>${filtered.length} empleado${filtered.length !== 1 ? 's' : ''}</span>
            ${staffFilter !== 'all' ? `<span class="staff-filter-active">en ${getAreaInfo(staffFilter).name}</span>` : ''}
            ${staffStatusFilter !== 'all' ? `<span class="staff-filter-active">• ${getStatusConfig(staffStatusFilter).label}</span>` : ''}
        </div>
    `;

    if (staffViewMode === 'cards') {
        html += renderStaffCards(filtered);
    } else {
        html += renderStaffTable(filtered);
    }

    document.getElementById('page-content').innerHTML = html;
    animateStagger();
}

function renderStaffCards(staff) {
    if (staff.length === 0) {
        return `<div class="staff-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:56px;height:56px;opacity:0.3;margin-bottom:16px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <h3>No se encontraron empleados</h3>
            <p>Prueba con otros filtros o términos de búsqueda</p>
        </div>`;
    }

    const ths = [
        { col: 'id', label: 'ID' },
        { col: 'nombreCompleto', label: 'Empleado' },
        { col: 'puestoId', label: 'Puesto' },
        { col: 'area', label: 'Área' },
        { col: 'tipoDoc', label: 'Tipo Doc' },
        { col: 'numDoc', label: 'N° Documento' },
        { col: 'fechaIngreso', label: 'Ingreso' },
        { col: 'fechaIngreso', label: 'Antigüedad' },
        { col: 'estado', label: 'Estado' }
    ];

    let html = `
        <div class="staff-sort-bar" style="display: flex; gap: 20px; padding: 12px 16px; background: var(--bg-secondary); border: 1px solid var(--border-glass); border-radius: var(--radius-md); margin-bottom: 24px; overflow-x: auto; white-space: nowrap; box-shadow: var(--shadow-sm); align-items: center; scrollbar-width: none;">
            <span style="color: var(--text-secondary); font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 4px;">Ordenar por:</span>
            ${ths.map(th => `
                <div onclick="setStaffSort('${th.col}')" style="cursor:pointer; user-select:none; font-size: 0.85rem; font-weight: 500; display: flex; align-items: center; gap: 4px; color: ${staffSortColumn === th.col ? 'var(--accent-primary)' : 'var(--text-secondary)'}; transition: color 0.2s;">
                    ${th.label}
                    <span style="font-size:0.8em; ${staffSortColumn === th.col ? 'opacity:1' : 'opacity:0.3'}">
                        ${staffSortColumn === th.col ? (staffSortDirection === 'asc' ? '▲' : '▼') : '↕'}
                    </span>
                </div>
            `).join('')}
        </div>
        <div class="staff-grid">
    `;

    staff.forEach((emp, i) => {
        const mof = getMOFById(emp.puestoId);
        const area = mof ? getAreaInfo(mof.area) : getAreaInfo('admin');
        const status = getStatusConfig(emp.estado);
        const nameParts = emp.nombreCompleto.split(' ');
        const initials = (nameParts[0][0] + (nameParts.length > 1 ? nameParts[nameParts.length-1][0] : '')).toUpperCase();
        const puesto = mof ? mof.titulo : emp.puestoId;

        html += `
            <div class="staff-card stagger-in" style="animation-delay: ${i * 40}ms">
                <div class="staff-card-status-bar" style="background:${status.color}"></div>
                <div class="staff-card-top">
                    <div class="staff-avatar" style="background:linear-gradient(135deg, ${area.color}, ${area.color}cc)">
                        ${initials}
                        <span class="staff-status-dot" style="background:${status.color};box-shadow:0 0 0 3px var(--bg-card)" title="${status.label}"></span>
                    </div>
                    <div class="staff-card-info">
                        <h3 title="${emp.nombreCompleto}">${emp.nombreCompleto}</h3>
                        <p class="staff-card-puesto">${puesto}</p>
                        <span class="staff-card-area-badge" style="background:${area.bg};color:${area.color};border:1px solid ${area.border}">${area.name}</span>
                    </div>
                </div>
                <div class="staff-card-details">
                    <div class="staff-detail-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><circle cx="9" cy="10" r="2"/><path d="M15 8h2"/><path d="M15 12h2"/><path d="M7 16h5"/></svg>
                        <span>${emp.tipoDoc}: ${emp.numDoc}</span>
                    </div>
                    <div class="staff-detail-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <span>${formatDate(emp.fechaIngreso)} <span class="staff-antiguedad">(${getAntiguedad(emp.fechaIngreso)})</span></span>
                    </div>
                </div>
                <div class="staff-card-footer" style="justify-content: flex-end; gap: 8px;">
                    <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem;" onclick="openEmployeeModal('${emp.id}')" title="Editar">Editar</button>
                    <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem; color:var(--accent-rose); border-color:var(--accent-rose);" onclick="deleteEmployee('${emp.id}')" title="Eliminar">Eliminar</button>
                    <button class="staff-mof-link" onclick="openMOFDetail('${emp.puestoId}')" title="Ver MOF del puesto">
                        Ver MOF →
                    </button>
                </div>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

function setStaffSort(col) {
    if (staffSortColumn === col) {
        staffSortDirection = staffSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        staffSortColumn = col;
        staffSortDirection = 'asc';
    }
    renderStaffDirectory();
}

function renderStaffTable(staff) {
    if (staff.length === 0) {
        return `<div class="staff-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:56px;height:56px;opacity:0.3;margin-bottom:16px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <h3>No se encontraron empleados</h3>
            <p>Prueba con otros filtros o términos de búsqueda</p>
        </div>`;
    }

    const ths = [
        { col: 'id', label: 'ID' },
        { col: 'nombreCompleto', label: 'Empleado' },
        { col: 'puestoId', label: 'Puesto' },
        { col: 'area', label: 'Área' },
        { col: 'tipoDoc', label: 'Tipo Doc' },
        { col: 'numDoc', label: 'N° Documento' },
        { col: 'fechaIngreso', label: 'Ingreso' },
        { col: 'fechaIngreso', label: 'Antigüedad' },
        { col: 'estado', label: 'Estado' }
    ];

    let html = `
        <div class="staff-table-wrapper">
            <table class="staff-table">
                <thead>
                    <tr>
                        ${ths.map(th => `
                            <th onclick="setStaffSort('${th.col}')" style="cursor:pointer; user-select:none" class="sortable-th">
                                ${th.label}
                                <span class="sort-indicator" style="font-size:0.8em; margin-left:4px; ${staffSortColumn === th.col ? 'opacity:1' : 'opacity:0.3'}">
                                    ${staffSortColumn === th.col ? (staffSortDirection === 'asc' ? '▲' : '▼') : '↕'}
                                </span>
                            </th>
                        `).join('')}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
    `;

    staff.forEach((emp, i) => {
        const mof = getMOFById(emp.puestoId);
        const area = mof ? getAreaInfo(mof.area) : getAreaInfo('admin');
        const status = getStatusConfig(emp.estado);
        const nameParts = emp.nombreCompleto.split(' ');
        const initials = (nameParts[0][0] + (nameParts.length > 1 ? nameParts[nameParts.length-1][0] : '')).toUpperCase();

        html += `
            <tr class="stagger-in" style="animation-delay: ${i * 30}ms">
                <td class="staff-table-id">${emp.id}</td>
                <td>
                    <div class="staff-table-employee">
                        <div class="staff-table-avatar" style="background:linear-gradient(135deg, ${area.color}, ${area.color}cc)">${initials}</div>
                        <span title="${emp.nombreCompleto}">${emp.nombreCompleto}</span>
                    </div>
                </td>
                <td>${mof ? mof.titulo : emp.puestoId}</td>
                <td><span class="staff-table-area" style="background:${area.bg};color:${area.color};border:1px solid ${area.border}">${area.name}</span></td>
                <td class="staff-table-email">${emp.tipoDoc}</td>
                <td class="staff-table-ext">${emp.numDoc}</td>
                <td>${formatDate(emp.fechaIngreso)}</td>
                <td>${getAntiguedad(emp.fechaIngreso)}</td>
                <td><span class="staff-status-badge" style="background:${status.bg};color:${status.color};border:1px solid ${status.border}">${status.icon} ${status.label}</span></td>
                <td>
                    <div style="display:flex; gap:8px;">
                        <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem;" onclick="openEmployeeModal('${emp.id}')" title="Editar">Editar</button>
                        <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem; color:var(--accent-rose); border-color:var(--accent-rose);" onclick="deleteEmployee('${emp.id}')" title="Eliminar">Eliminar</button>
                        <button class="staff-mof-link" onclick="openMOFDetail('${emp.puestoId}')">MOF →</button>
                    </div>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table></div>';
    return html;
}

// ============================================
// RENDER: Puestos
// ============================================
let puestosSortColumn = 'nivel_orden';
let puestosSortDirection = 'asc';

function setPuestosSort(col) {
    if (puestosSortColumn === col) {
        puestosSortDirection = puestosSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        puestosSortColumn = col;
        puestosSortDirection = 'asc';
    }
    renderPuestosDirectory();
}

function getMofNivelOrden(titulo) {
    const t = titulo.toLowerCase();
    if (t.includes('gerent')) return { nombre: 'Gerencial', orden: 1 };
    if (t.includes('jefe') || t.includes('coordinador')) return { nombre: 'Jefatura/Coordinación', orden: 2 };
    if (t.includes('supervisor')) return { nombre: 'Supervisión', orden: 3 };
    if (t.includes('asistente') || t.includes('analista') || t.includes('encargado') || t.includes('monitor') || t.includes('validador')) return { nombre: 'Técnico/Administrativo', orden: 4 };
    return { nombre: 'Operativo', orden: 5 };
}

function renderPuestosDirectory() {
    let puestosList = MOF_DATA.map(mof => {
        const area = getAreaInfo(mof.area);
        const empleadosCount = STAFF_DATA.filter(s => s.puestoId === mof.id && s.estado !== 'inactivo').length;
        const nivel = getMofNivelOrden(mof.titulo);
        return {
            id: mof.id,
            titulo: mof.titulo,
            areaNombre: area.name,
            areaColor: area.color,
            areaBg: area.bg,
            areaBorder: area.border,
            nivel: nivel.nombre,
            nivel_orden: nivel.orden,
            empleados: empleadosCount
        };
    });

    // Sorting
    puestosList.sort((a, b) => {
        let valA = a[puestosSortColumn];
        let valB = b[puestosSortColumn];
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();
        
        if (valA < valB) return puestosSortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return puestosSortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const ths = [
        { col: 'id', label: 'ID Puesto' },
        { col: 'titulo', label: 'Título del Puesto' },
        { col: 'areaNombre', label: 'Área' },
        { col: 'nivel_orden', label: 'Nivel' },
        { col: 'empleados', label: 'Empleados' }
    ];

    let html = `
        <div class="mof-header">
            <div>
                <h1>Tipos de Puesto</h1>
                <p>Lista de todos los puestos documentados en la organización.</p>
            </div>
            <div class="staff-results-info">
                <span>${puestosList.length} puestos diferentes</span>
            </div>
        </div>
        
        <div class="staff-table-wrapper" style="margin-top: 20px;">
            <table class="staff-table">
                <thead>
                    <tr>
                        ${ths.map(th => `
                            <th onclick="setPuestosSort('${th.col}')" class="${puestosSortColumn === th.col ? 'active' : ''}" style="cursor:pointer; user-select:none;">
                                ${th.label}
                                <span class="sort-icon">${puestosSortColumn === th.col ? (puestosSortDirection === 'asc' ? '▲' : '▼') : '↕'}</span>
                            </th>
                        `).join('')}
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
    `;

    puestosList.forEach((p, i) => {
        html += `
            <tr class="stagger-in" style="animation-delay: ${i * 30}ms; cursor: pointer;" onclick="openMOFDetail('${p.id}')" title="Ver MOF">
                <td class="staff-table-id" style="font-weight: 500;">${p.id}</td>
                <td><b>${p.titulo}</b></td>
                <td><span class="staff-table-area" style="background:${p.areaBg};color:${p.areaColor};border:1px solid ${p.areaBorder}">${p.areaNombre}</span></td>
                <td><span style="font-size: 0.85rem; padding: 4px 8px; border-radius: 4px; background: var(--bg-tertiary); color: var(--text-secondary); border: 1px solid var(--border-glass);">${p.nivel}</span></td>
                <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-weight: bold; color: ${p.empleados > 0 ? 'var(--text-primary)' : 'var(--text-tertiary)'};">${p.empleados}</span>
                        ${p.empleados > 0 ? `<div style="display:flex; margin-left:4px;">${Array.from({length: Math.min(3, p.empleados)}).map(() => `<div style="width:6px;height:6px;border-radius:50%;background:var(--accent-primary);margin-right:2px;"></div>`).join('')}${p.empleados > 3 ? '<span style="font-size:10px;color:var(--text-tertiary);margin-left:2px;">+</span>' : ''}</div>` : ''}
                    </div>
                </td>
                <td>
                    <button class="btn btn-primary" style="padding: 6px 12px; font-size: 0.8rem;" onclick="event.stopPropagation(); openMOFDetail('${p.id}')">Ver MOF</button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table></div>';
    
    document.getElementById('page-content').innerHTML = html;
    animateStagger();
}

// ============================================
// RENDER: Areas
// ============================================
let areasSortColumn = 'empleados';
let areasSortDirection = 'desc';

function setAreasSort(col) {
    if (areasSortColumn === col) {
        areasSortDirection = areasSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        areasSortColumn = col;
        areasSortDirection = 'asc';
    }
    renderAreasDirectory();
}

function renderAreasDirectory() {
    const areaKeys = getUniqueAreas();
    
    let areasList = areaKeys.map(key => {
        const info = getAreaInfo(key);
        const mofs = MOF_DATA.filter(m => m.area === key);
        const empleadosCount = STAFF_DATA.filter(s => mofs.some(m => m.id === s.puestoId) && s.estado !== 'inactivo').length;
        return {
            id: key,
            nombre: info.name,
            color: info.color,
            bg: info.bg,
            border: info.border,
            puestos: mofs.length,
            empleados: empleadosCount
        };
    });

    // Sorting
    areasList.sort((a, b) => {
        let valA = a[areasSortColumn];
        let valB = b[areasSortColumn];
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();
        
        if (valA < valB) return areasSortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return areasSortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const ths = [
        { col: 'id', label: 'Código' },
        { col: 'nombre', label: 'Área' },
        { col: 'puestos', label: 'Tipos de Puesto' },
        { col: 'empleados', label: 'Empleados' }
    ];

    let html = `
        <div class="mof-header">
            <div>
                <h1>Áreas de la Empresa</h1>
                <p>Resumen de puestos y empleados por cada área.</p>
            </div>
            <div class="staff-results-info">
                <span>${areasList.length} áreas</span>
            </div>
        </div>
        
        <div class="staff-table-wrapper" style="margin-top: 20px;">
            <table class="staff-table">
                <thead>
                    <tr>
                        ${ths.map(th => `
                            <th onclick="setAreasSort('${th.col}')" class="${areasSortColumn === th.col ? 'active' : ''}" style="cursor:pointer; user-select:none;">
                                ${th.label}
                                <span class="sort-icon">${areasSortColumn === th.col ? (areasSortDirection === 'asc' ? '▲' : '▼') : '↕'}</span>
                            </th>
                        `).join('')}
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
    `;

    areasList.forEach((a, i) => {
        html += `
            <tr class="stagger-in" style="animation-delay: ${i * 30}ms; cursor: pointer;" onclick="staffFilter='${a.id}'; navigateTo('staff')" title="Ver Empleados">
                <td class="staff-table-id" style="text-transform: uppercase;">${a.id}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, ${a.color}, ${a.color}cc); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px;">
                            ${a.nombre.charAt(0)}
                        </div>
                        <b>${a.nombre}</b>
                    </div>
                </td>
                <td><span class="staff-table-area" style="background:${a.bg};color:${a.color};border:1px solid ${a.border}">${a.puestos} puestos</span></td>
                <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-weight: bold; color: ${a.empleados > 0 ? 'var(--text-primary)' : 'var(--text-tertiary)'};">${a.empleados}</span>
                        ${a.empleados > 0 ? `<div style="display:flex; margin-left:4px;">${Array.from({length: Math.min(5, a.empleados)}).map(() => `<div style="width:6px;height:6px;border-radius:50%;background:var(--accent-primary);margin-right:2px;"></div>`).join('')}${a.empleados > 5 ? '<span style="font-size:10px;color:var(--text-tertiary);margin-left:2px;">+</span>' : ''}</div>` : ''}
                    </div>
                </td>
                <td>
                    <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.8rem;" onclick="event.stopPropagation(); staffFilter='${a.id}'; navigateTo('staff')">Ver Directorio</button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table></div>';
    
    document.getElementById('page-content').innerHTML = html;
    animateStagger();
}

// ============================================
// EXPORT TO WORD
// ============================================
async function exportToWord(mof) {
    if (typeof window._exportToWordImpl === 'function') {
        const areaName = getAreaInfo(mof.area).name;
        return window._exportToWordImpl(mof, areaName);
    }
    alert('La librería de exportación aún se está cargando. Por favor espera un momento e intenta de nuevo.');
}

async function exportWorkflowToWord(workflowId) {
    if (typeof window._exportWorkflowToWordImpl !== 'function') {
        alert('La librería de exportación aún se está cargando. Por favor espera un momento e intenta de nuevo.');
        return;
    }
    const workflow = WORKFLOWS_DATA.find(w => w.id === workflowId);
    if (!workflow) return;
    
    const enrichedWorkflow = JSON.parse(JSON.stringify(workflow));
    enrichedWorkflow.steps.forEach(step => {
        const mof = getMOFById(step.roleId);
        if (mof) step.roleName = mof.titulo;
    });

    await window._exportWorkflowToWordImpl(enrichedWorkflow);
}

async function exportAllToWord() {
    if (currentPage === 'staff') {
        if (typeof window._exportStaffToWordImpl === 'function') {
            await window._exportStaffToWordImpl(STAFF_DATA, getMOFById, getAreaInfo);
        } else {
            alert('La librería de exportación aún se está cargando. Por favor espera un momento e intenta de nuevo.');
        }
        return;
    }

    if (currentPage === 'workflows') {
        if (typeof window._exportWorkflowToWordImpl !== 'function') {
            alert('La librería de exportación aún se está cargando. Por favor espera un momento e intenta de nuevo.');
            return;
        }
        const btn = document.getElementById('export-all-word-btn');
        if (btn) { btn.disabled = true; btn.title = 'Generando...'; }
        
        for (const workflow of WORKFLOWS_DATA) {
            await exportWorkflowToWord(workflow.id);
            await new Promise(r => setTimeout(r, 600));
        }
        
        if (btn) { btn.disabled = false; btn.title = 'Exportar todos los Flujos a Word'; }
        return;
    }

    if (typeof window._exportToWordImpl !== 'function') {
        alert('La librería de exportación aún se está cargando. Por favor espera un momento e intenta de nuevo.');
        return;
    }
    const btn = document.getElementById('export-all-word-btn');
    if (btn) { btn.disabled = true; btn.title = 'Generando...'; }
    
    for (const mof of MOF_DATA) {
        await exportToWord(mof);
        await new Promise(r => setTimeout(r, 600));
    }
    
    if (btn) { btn.disabled = false; btn.title = 'Exportar todos los MOF a Word'; }
}

// ============================================
// PRINT
// ============================================
function getPrintContainer() {
    let el = document.getElementById('print-container');
    if (!el) {
        el = document.createElement('div');
        el.id = 'print-container';
        document.body.appendChild(el);
    }
    return el;
}

function generatePrintWorkflow(workflow) {
    const enrichedSteps = workflow.steps.map((step, index) => {
        const mof = getMOFById(step.roleId);
        const roleName = mof ? mof.titulo : step.roleId;
        return `
            <tr>
                <td style="text-align:center;"><b>${index + 1}</b></td>
                <td>${roleName}</td>
                <td>${step.action}</td>
            </tr>
        `;
    }).join('');

    return `
        <div class="print-mof">
            <h1>Flujo de Trabajo: ${workflow.title}</h1>
            <p>${workflow.description}</p>
            <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #000; padding: 8px; background: #f0f0f0;">Paso</th>
                        <th style="border: 1px solid #000; padding: 8px; background: #f0f0f0;">Rol / Responsable</th>
                        <th style="border: 1px solid #000; padding: 8px; background: #f0f0f0;">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    ${enrichedSteps}
                </tbody>
            </table>
        </div>
        <style>
            .print-mof table td { border: 1px solid #000; padding: 8px; }
        </style>
    `;
}

function printSingleWorkflow(workflowId) {
    const workflow = WORKFLOWS_DATA.find(w => w.id === workflowId);
    if (!workflow) return;
    const printContainer = getPrintContainer();
    printContainer.innerHTML = generatePrintWorkflow(workflow);
    printContainer.classList.add('active');
    setTimeout(() => {
        window.print();
        setTimeout(() => {
            printContainer.classList.remove('active');
            printContainer.innerHTML = '';
        }, 500);
    }, 300);
}

function generatePrintWorkflowGraph(workflow) {
    let stepsHtml = `<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: center; margin-top: 40px; padding: 20px;">`;
    
    workflow.steps.forEach((step, index) => {
        const mof = getMOFById(step.roleId);
        const area = getAreaInfo(mof ? mof.area : 'admin');
        const initials = mof ? mof.titulo.split(' ').map(w => w[0]).filter(c => c && c === c.toUpperCase() && c.match(/[A-ZÁ-Ú]/i)).slice(0, 2).join('') : '?';
        const roleName = mof ? mof.titulo : step.roleId;

        stepsHtml += `
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center; width: 160px; min-height: 140px; border: 2px solid #ddd; border-radius: 12px; padding: 16px; page-break-inside: avoid; background: #fff;">
                <div style="width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; font-size: 1.4rem; font-weight: bold; background: ${area.bg}; color: ${area.color}; border: 2px solid ${area.border}; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
                    ${initials}
                </div>
                <div style="font-size: 0.95rem; font-weight: bold; color: #333; margin-bottom: 6px; line-height: 1.2;">${roleName}</div>
                <div style="font-size: 0.8rem; color: #666; line-height: 1.2;">${step.action}</div>
            </div>
        `;
        
        if (index < workflow.steps.length - 1) {
            stepsHtml += `
                <div style="color: #999; display: flex; align-items: center; justify-content: center; width: 40px;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 32px; height: 32px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
            `;
        }
    });
    
    stepsHtml += `</div>`;

    return `
        <div class="print-mof" style="font-family: 'Segoe UI', Arial, sans-serif;">
            <h1 style="color: #1F3864; border-bottom: 2px solid #1F3864; padding-bottom: 10px;">Flujo de Trabajo (Diagrama Visual)</h1>
            <h2 style="color: #333; margin-top: 20px;">Proceso: ${workflow.title}</h2>
            <p style="color: #555; font-size: 1.1rem;">${workflow.description}</p>
            ${stepsHtml}
        </div>
    `;
}

function printSingleWorkflowGraph(workflowId) {
    const workflow = WORKFLOWS_DATA.find(w => w.id === workflowId);
    if (!workflow) return;
    const printContainer = getPrintContainer();
    printContainer.innerHTML = generatePrintWorkflowGraph(workflow);
    printContainer.classList.add('active');
    setTimeout(() => {
        window.print();
        setTimeout(() => {
            printContainer.classList.remove('active');
            printContainer.innerHTML = '';
        }, 500);
    }, 300);
}

function printSingleMOF(mof) {
    const printContainer = getPrintContainer();
    printContainer.innerHTML = generatePrintMOF(mof);
    printContainer.classList.add('active');
    closeMOFDetail();
    setTimeout(() => {
        window.print();
        setTimeout(() => {
            printContainer.classList.remove('active');
            printContainer.innerHTML = '';
        }, 500);
    }, 300);
}

function printAllMOFs() {
    if (currentPage === 'workflows') {
        const printContainer = getPrintContainer();
        printContainer.innerHTML = WORKFLOWS_DATA.map(workflow => {
            return generatePrintWorkflowGraph(workflow) + 
                   '<div style="page-break-after: always;"></div>' +
                   generatePrintWorkflow(workflow) + 
                   '<div style="page-break-after: always;"></div>';
        }).join('');
        printContainer.classList.add('active');
        setTimeout(() => {
            window.print();
            setTimeout(() => {
                printContainer.classList.remove('active');
                printContainer.innerHTML = '';
            }, 500);
        }, 300);
        return;
    }

    const printContainer = getPrintContainer();
    printContainer.innerHTML = MOF_DATA.map(mof => generatePrintMOF(mof) + '<div style="page-break-after: always;"></div>').join('');
    printContainer.classList.add('active');
    setTimeout(() => {
        window.print();
        setTimeout(() => {
            printContainer.classList.remove('active');
            printContainer.innerHTML = '';
        }, 500);
    }, 300);
}

function printOrgChart() {
    // Capture the visual org chart as rendered in the DOM
    const orgContainer = document.getElementById('orgchart-container');
    if (!orgContainer) {
        window.print();
        return;
    }

    const printContainer = getPrintContainer();
    // Build a print wrapper that includes the org chart visual HTML + all needed inline styles
    printContainer.innerHTML = `
        <div class="print-orgchart-wrapper">
            <div class="print-orgchart-header">
                <div class="print-orgchart-logo">BIASS</div>
                <div class="print-orgchart-title">Organigrama Institucional</div>
                <div class="print-orgchart-subtitle">Call Center Financiero</div>
            </div>
            <div class="print-orgchart-body">
                ${orgContainer.innerHTML}
            </div>
        </div>
    `;
    printContainer.classList.add('active');

    setTimeout(() => {
        window.print();
        setTimeout(() => {
            printContainer.classList.remove('active');
            printContainer.innerHTML = '';
        }, 800);
    }, 400);
}

function generatePrintMOF(mof) {
    const area = getAreaInfo(mof.area);
    return `
        <div class="print-mof">
            <h1>MOF - ${mof.titulo}</h1>
            <div class="print-meta">
                <div><span class="label">Área:</span> ${area.name}</div>
                <div><span class="label">Reporta a:</span> ${mof.reportaA}</div>
                <div><span class="label">Supervisa a:</span> ${mof.supervisa.length > 0 ? mof.supervisa.join(', ') : 'N/A'}</div>
                <div><span class="label">Modalidad:</span> ${mof.condiciones.modalidad}</div>
            </div>
            <h2>Objetivo del Puesto</h2>
            <p>${mof.objetivo}</p>
            <h2>Funciones Principales</h2>
            <ul>${mof.funcionesPrincipales.map(f => `<li>${f}</li>`).join('')}</ul>
            <h2>Funciones Secundarias</h2>
            <ul>${mof.funcionesSecundarias.map(f => `<li>${f}</li>`).join('')}</ul>
            <h2>Requisitos del Puesto</h2>
            <ul>
                <li><strong>Educación:</strong> ${mof.requisitos.educacion}</li>
                <li><strong>Experiencia:</strong> ${mof.requisitos.experiencia}</li>
                ${mof.requisitos.conocimientos.map(c => `<li>${c}</li>`).join('')}
            </ul>
            <h2>Competencias</h2>
            <ul>${mof.competencias.map(c => `<li>${c.nombre} (${c.tipo === 'blanda' ? 'Blanda' : 'Técnica'})</li>`).join('')}</ul>
            <h2>Indicadores de Desempeño (KPIs)</h2>
            <ul>${mof.kpis.map(k => `<li><strong>${k.nombre}:</strong> ${k.descripcion}</li>`).join('')}</ul>
            <h2>Relaciones de Coordinación</h2>
            <ul>
                <li><strong>Internas:</strong> ${mof.coordinaciones.internas}</li>
                <li><strong>Externas:</strong> ${mof.coordinaciones.externas}</li>
            </ul>
            <h2>Condiciones de Trabajo</h2>
            <ul>
                <li><strong>Horario:</strong> ${mof.condiciones.horario}</li>
                <li><strong>Modalidad:</strong> ${mof.condiciones.modalidad}</li>
                <li><strong>Herramientas:</strong> ${mof.condiciones.herramientas}</li>
            </ul>
        </div>
    `;
}

// ============================================
// NAVIGATION
// ============================================
function navigateTo(page) {
    currentPage = page;
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });
    document.getElementById('search-input').value = '';
    currentSearchQuery = '';

    const pageContent = document.getElementById('page-content');
    pageContent.style.animation = 'none';
    pageContent.offsetHeight; // trigger reflow
    pageContent.style.animation = 'fadeInPage 0.4s ease';

    switch (page) {
        case 'dashboard': renderDashboard(); break;
        case 'mof-list': renderMOFList('all'); break;
        case 'orgchart': renderOrgChart(); break;
        case 'workflows': renderWorkflows(); break;
        case 'staff': renderStaffDirectory(); break;
        case 'puestos': renderPuestosDirectory(); break;
        case 'areas': renderAreasDirectory(); break;
        case 'analytics': renderAnalytics(); break;
        case 'comparator': renderComparator(); break;
        case 'evaluations': renderEvaluations(); break;
    }

    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');
}

function navigateToMOFList(areaFilter) {
    currentPage = 'mof-list';
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === 'mof-list');
    });
    renderMOFList(areaFilter);
}

// ============================================
// SEARCH LOGIC
// ============================================
function handleSearch(query) {
    currentSearchQuery = query.toLowerCase().trim();
    if (currentPage !== 'mof-list') {
        navigateTo('mof-list');
    } else {
        renderMOFList(currentFilter);
    }
}


// ============================================
// ANIMATION HELPERS
// ============================================
function animateStagger() {
    document.querySelectorAll('.stagger-in').forEach((el, i) => {
        el.style.animationDelay = `${i * 60}ms`;
    });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => navigateTo(item.dataset.page));
    });

    // Mobile menu toggle
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });

    // Close overlay
    document.getElementById('mof-detail-close').addEventListener('click', closeMOFDetail);
    document.getElementById('mof-detail-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeMOFDetail();
    });

    // Search
    let searchTimeout;
    document.getElementById('search-input').addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => handleSearch(e.target.value), 300);
    });

    // Export all to Word
    document.getElementById('export-all-word-btn').addEventListener('click', exportAllToWord);

    // Print all
    document.getElementById('print-all-btn').addEventListener('click', printAllMOFs);

    // Keyboard shortcut: Escape to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMOFDetail();
            document.getElementById('employee-modal-overlay').classList.add('hidden');
        }
    });
    
    // Window resize scaling for org chart
    window.addEventListener('resize', () => {
        if (currentPage === 'orgchart') {
            adjustOrgChartScale();
        }
    });

    // --- NEW: Theme Toggle ---
    const themeBtn = document.getElementById('theme-toggle-btn');
    const sunIcon = themeBtn.querySelector('.sun-icon');
    const moonIcon = themeBtn.querySelector('.moon-icon');
    
    const currentTheme = localStorage.getItem('mof_theme') || 'dark';
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }

    themeBtn.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-theme');
        if (isLight) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            localStorage.setItem('mof_theme', 'light');
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            localStorage.setItem('mof_theme', 'dark');
        }
    });

    // --- NEW: Notifications ---
    initNotifications();

    // --- NEW: Employee Form ---
    document.getElementById('employee-form').addEventListener('submit', handleEmployeeSubmit);

    // Initial render
    renderDashboard();
});

// ============================================
// ORG CHART SCALING
// ============================================
function adjustOrgChartScale() {
    const container = document.getElementById('orgchart-container');
    if (!container) return;
    const wrapper = container.parentElement;
    if (!wrapper) return;
    const wrapperWidth = wrapper.offsetWidth;
    const contentWidth = container.scrollWidth;
    if (contentWidth > wrapperWidth) {
        const scale = Math.max(0.5, wrapperWidth / contentWidth);
        container.style.transform = `scale(${scale})`;
        container.style.transformOrigin = 'top center';
    } else {
        container.style.transform = 'scale(1)';
    }
}

// ============================================
// NEW FEATURE: NOTIFICATIONS
// ============================================
function initNotifications() {
    const notifBtn = document.getElementById('notifications-btn');
    const notifDropdown = document.getElementById('notifications-dropdown');
    const notifBadge = document.getElementById('notif-badge');
    const notifList = document.getElementById('notif-list');
    const clearBtn = document.getElementById('clear-notif-btn');

    let notifications = generateNotifications();

    function renderNotifications() {
        if (notifications.length > 0) {
            notifBadge.style.display = 'block';
            notifBadge.textContent = notifications.length;
            notifList.innerHTML = notifications.map(n => `
                <div class="notif-item">
                    <div class="notif-icon" style="background:var(--bg-glass)">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--accent-gold)" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <div class="notif-content">
                        <p>${n.msg}</p>
                        <span class="notif-date">${n.date}</span>
                    </div>
                </div>
            `).join('');
        } else {
            notifBadge.style.display = 'none';
            notifList.innerHTML = '<div class="empty-notif">No hay notificaciones recientes</div>';
        }
    }

    notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notifDropdown.classList.toggle('hidden');
    });

    clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notifications = [];
        renderNotifications();
        notifDropdown.classList.add('hidden');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
            notifDropdown.classList.add('hidden');
        }
    });

    renderNotifications();
}

function generateNotifications() {
    const notifs = [];
    const today = new Date();
    
    STAFF_DATA.forEach(emp => {
        if (!emp.fechaIngreso || emp.estado !== 'activo') return;
        const ingreso = new Date(emp.fechaIngreso);
        const diffTime = Math.abs(today - ingreso);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        // Example: Probation period ending soon (approx 90 days)
        if (diffDays >= 80 && diffDays <= 90) {
            notifs.push({
                msg: `${emp.nombreCompleto} está por culminar su periodo de prueba (Día ${diffDays}/90).`,
                date: 'Reciente'
            });
        }
        
        // Example: Work anniversary (modulo 365)
        if (diffDays > 300 && (diffDays % 365 >= 355 || diffDays % 365 <= 5)) {
            const years = Math.round(diffDays / 365);
            notifs.push({
                msg: `¡${emp.nombreCompleto} cumple ${years} año(s) en la empresa!`,
                date: 'Importante'
            });
        }
    });
    
    return notifs;
}

// ============================================
// NEW FEATURE: ANALYTICS
// ============================================
let charts = [];
function renderAnalytics() {
    const html = `
        <div class="mof-list-header">
            <h1>Reportes y Analíticas</h1>
            <p>Métricas clave del personal y estructura</p>
        </div>
        <div class="analytics-grid">
            <div class="chart-card">
                <h3>Distribución por Área</h3>
                <div class="chart-container">
                    <canvas id="chartArea"></canvas>
                </div>
            </div>
            <div class="chart-card">
                <h3>Estado del Personal</h3>
                <div class="chart-container">
                    <canvas id="chartStatus"></canvas>
                </div>
            </div>
            <div class="chart-card" style="grid-column: 1 / -1;">
                <h3>Personal por Puesto</h3>
                <div class="chart-container">
                    <canvas id="chartRole"></canvas>
                </div>
            </div>
        </div>
    `;
    
    const pageContent = document.getElementById('page-content');
    pageContent.innerHTML = html;
    
    // Clear old charts
    charts.forEach(c => c.destroy());
    charts = [];
    
    // Prepare Data
    const areaCounts = {};
    const statusCounts = {};
    const roleCounts = {};
    
    STAFF_DATA.forEach(emp => {
        const mof = MOF_DATA.find(m => m.id === emp.puestoId);
        if (mof) {
            areaCounts[mof.area] = (areaCounts[mof.area] || 0) + 1;
            roleCounts[mof.titulo] = (roleCounts[mof.titulo] || 0) + 1;
        }
        statusCounts[emp.estado] = (statusCounts[emp.estado] || 0) + 1;
    });

    // Colors
    const isLight = document.body.classList.contains('light-theme');
    const textColor = isLight ? '#475569' : '#94a3b8';
    
    Chart.defaults.color = textColor;
    Chart.defaults.font.family = "'Inter', sans-serif";

    // Chart 1: Area (Pie)
    const ctxArea = document.getElementById('chartArea').getContext('2d');
    charts.push(new Chart(ctxArea, {
        type: 'pie',
        data: {
            labels: Object.keys(areaCounts).map(k => getAreaInfo(k).name),
            datasets: [{
                data: Object.values(areaCounts),
                backgroundColor: Object.keys(areaCounts).map(k => getAreaInfo(k).color),
                borderWidth: 0
            }]
        },
        options: { maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }
    }));

    // Chart 2: Status (Doughnut)
    const ctxStatus = document.getElementById('chartStatus').getContext('2d');
    charts.push(new Chart(ctxStatus, {
        type: 'doughnut',
        data: {
            labels: Object.keys(statusCounts).map(s => s.toUpperCase()),
            datasets: [{
                data: Object.values(statusCounts),
                backgroundColor: ['#10b981', '#f59e0b', '#f43f5e'],
                borderWidth: 0
            }]
        },
        options: { maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
    }));

    // Chart 3: Roles (Bar)
    const ctxRole = document.getElementById('chartRole').getContext('2d');
    charts.push(new Chart(ctxRole, {
        type: 'bar',
        data: {
            labels: Object.keys(roleCounts),
            datasets: [{
                label: 'Cantidad de Empleados',
                data: Object.values(roleCounts),
                backgroundColor: '#3b82f6',
                borderRadius: 4
            }]
        },
        options: { 
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
            plugins: { legend: { display: false } }
        }
    }));
}

// ============================================
// NEW FEATURE: COMPARATOR
// ============================================
function renderComparator() {
    const optionsHtml = MOF_DATA.map(m => `<option value="${m.id}">${m.titulo}</option>`).join('');
    
    const html = `
        <div class="mof-list-header">
            <h1>Comparador de Puestos</h1>
            <p>Selecciona dos puestos para comparar sus perfiles y funciones</p>
        </div>
        <div class="comparator-grid">
            <div class="comparator-col" id="comp-col-1">
                <select id="comp-select-1" onchange="updateComparator(1)">
                    <option value="" disabled selected>Seleccione el 1er puesto...</option>
                    ${optionsHtml}
                </select>
                <div id="comp-content-1"></div>
            </div>
            <div class="comparator-col" id="comp-col-2">
                <select id="comp-select-2" onchange="updateComparator(2)">
                    <option value="" disabled selected>Seleccione el 2do puesto...</option>
                    ${optionsHtml}
                </select>
                <div id="comp-content-2"></div>
            </div>
        </div>
    `;
    document.getElementById('page-content').innerHTML = html;
}

window.updateComparator = function(colNum) {
    const select = document.getElementById('comp-select-' + colNum);
    const mofId = select.value;
    const container = document.getElementById('comp-content-' + colNum);
    
    if (!mofId) {
        container.innerHTML = '';
        return;
    }
    
    const mof = MOF_DATA.find(m => m.id === mofId);
    if (!mof) return;
    
    container.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:16px;">
            <div><strong style="color:var(--text-secondary)">Área:</strong> <br>${getAreaInfo(mof.area).name}</div>
            <div><strong style="color:var(--text-secondary)">Reporta a:</strong> <br>${mof.reportaA}</div>
            <div><strong style="color:var(--text-secondary)">Educación requerida:</strong> <br>${mof.requisitos.educacion}</div>
            <div><strong style="color:var(--text-secondary)">Experiencia:</strong> <br>${mof.requisitos.experiencia}</div>
            <div>
                <strong style="color:var(--text-secondary)">Funciones Clave (Top 3):</strong> 
                <ul style="margin-top:8px; padding-left:20px; color:var(--text-muted); font-size:0.9rem;">
                    ${mof.funcionesPrincipales.slice(0, 3).map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
};

// ============================================
// NEW FEATURE: EVALUATIONS
// ============================================
function renderEvaluations() {
    const html = `
        <div class="mof-list-header">
            <h1>Evaluación de Desempeño</h1>
            <p>Califica a los empleados según los KPIs de su perfil (MOF)</p>
        </div>
        <div class="evaluations-container">
            <div class="eval-sidebar">
                <h3 style="margin-bottom:16px; font-size:1rem;">Seleccionar Empleado</h3>
                <input type="text" id="eval-search" placeholder="Buscar empleado..." style="width:100%; padding:8px; margin-bottom:16px; border-radius:var(--radius-sm); border:1px solid var(--border-glass); background:var(--bg-secondary); color:var(--text-primary);">
                <div id="eval-emp-list" style="display:flex; flex-direction:column; gap:8px; max-height:400px; overflow-y:auto;">
                    ${STAFF_DATA.filter(e => e.estado === 'activo').map(emp => `
                        <div class="position-link" onclick="selectEvalEmployee('${emp.id}')">${emp.nombreCompleto}</div>
                    `).join('')}
                </div>
            </div>
            <div class="eval-main" id="eval-content">
                <div class="empty-notif" style="margin-top:100px;">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--border-glass-hover)" stroke-width="2" style="margin-bottom:16px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    <p>Selecciona un empleado para cargar su formulario de evaluación de KPIs.</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('page-content').innerHTML = html;
    
    // Simple filter for the eval sidebar
    document.getElementById('eval-search').addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        document.querySelectorAll('#eval-emp-list .position-link').forEach(el => {
            el.style.display = el.textContent.toLowerCase().includes(q) ? 'block' : 'none';
        });
    });
}

window.selectEvalEmployee = function(empId) {
    const emp = STAFF_DATA.find(e => e.id === empId);
    const mof = MOF_DATA.find(m => m.id === emp.puestoId);
    
    if (!mof) return;
    
    const kpisHtml = mof.kpis.map((k, idx) => `
        <div class="kpi-eval-card">
            <div class="kpi-eval-header">
                <h4>${k.nombre}</h4>
                <div class="rating-group" data-kpi="${idx}">
                    <button class="rating-btn" onclick="setRating(this, 1)">1</button>
                    <button class="rating-btn" onclick="setRating(this, 2)">2</button>
                    <button class="rating-btn" onclick="setRating(this, 3)">3</button>
                    <button class="rating-btn" onclick="setRating(this, 4)">4</button>
                    <button class="rating-btn" onclick="setRating(this, 5)">5</button>
                </div>
            </div>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0;">Meta/Descripción: ${k.descripcion}</p>
            <textarea class="eval-textarea" placeholder="Comentarios u observaciones..."></textarea>
        </div>
    `).join('');
    
    const html = `
        <h2 style="margin-bottom:8px;">${emp.nombreCompleto}</h2>
        <p style="color:var(--text-secondary); margin-bottom:24px;">Puesto evaluado: <strong>${mof.titulo}</strong></p>
        
        <div class="eval-form">
            ${kpisHtml}
            <button class="btn btn-primary" onclick="alert('Evaluación guardada localmente (Demo)')" style="margin-top:16px;">Guardar Evaluación</button>
        </div>
    `;
    
    document.getElementById('eval-content').innerHTML = html;
};

window.setRating = function(btn, rating) {
    const group = btn.parentElement;
    group.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
};

// ============================================
// NEW FEATURE: EMPLOYEES CRUD & EXPORTS
// ============================================
window.openEmployeeModal = function(empId = null) {
    const modal = document.getElementById('employee-modal-overlay');
    const form = document.getElementById('employee-form');
    const title = document.getElementById('employee-modal-title');
    
    // Load roles into select
    const roleSelect = document.getElementById('emp-role');
    roleSelect.innerHTML = MOF_DATA.map(m => `<option value="${m.id}">${m.titulo}</option>`).join('');
    
    if (empId) {
        title.textContent = 'Editar Empleado';
        const emp = STAFF_DATA.find(e => e.id === empId);
        document.getElementById('emp-original-id').value = emp.id;
        document.getElementById('emp-id').value = emp.id;
        document.getElementById('emp-name').value = emp.nombreCompleto;
        document.getElementById('emp-doc-type').value = emp.tipoDoc;
        document.getElementById('emp-doc-num').value = emp.numDoc;
        document.getElementById('emp-role').value = emp.puestoId;
        document.getElementById('emp-date').value = emp.fechaIngreso || '';
        document.getElementById('emp-status').value = emp.estado;
    } else {
        title.textContent = 'Nuevo Empleado';
        form.reset();
        document.getElementById('emp-original-id').value = '';
    }
    
    modal.classList.remove('hidden');
};

window.deleteEmployee = function(empId) {
    if (confirm('¿Estás seguro de eliminar este empleado?')) {
        STAFF_DATA = STAFF_DATA.filter(e => e.id !== empId);
        saveStaffData();
        renderStaffDirectory();
    }
};

window.handleEmployeeSubmit = function(e) {
    e.preventDefault();
    const origId = document.getElementById('emp-original-id').value;
    const empData = {
        id: document.getElementById('emp-id').value,
        nombreCompleto: document.getElementById('emp-name').value.toUpperCase(),
        tipoDoc: document.getElementById('emp-doc-type').value,
        numDoc: document.getElementById('emp-doc-num').value,
        puestoId: document.getElementById('emp-role').value,
        fechaIngreso: document.getElementById('emp-date').value,
        estado: document.getElementById('emp-status').value
    };
    
    if (origId) {
        // Edit
        const idx = STAFF_DATA.findIndex(emp => emp.id === origId);
        if (idx !== -1) STAFF_DATA[idx] = empData;
    } else {
        // Add
        STAFF_DATA.push(empData);
    }
    
    saveStaffData();
    document.getElementById('employee-modal-overlay').classList.add('hidden');
    renderStaffDirectory();
};

window.exportStaffToExcel = function() {
    const data = STAFF_DATA.map(emp => {
        const mof = MOF_DATA.find(m => m.id === emp.puestoId);
        return {
            "ID": emp.id,
            "Nombre Completo": emp.nombreCompleto,
            "Tipo Doc": emp.tipoDoc,
            "N° Doc": emp.numDoc,
            "Puesto": mof ? mof.titulo : emp.puestoId,
            "Área": mof ? getAreaInfo(mof.area).name : '',
            "Fecha Ingreso": emp.fechaIngreso,
            "Estado": emp.estado.toUpperCase()
        };
    });
    
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Personal");
    XLSX.writeFile(wb, "Directorio_Personal_BIASS.xlsx");
};

window.exportMOFToPDF = async function() {
    const modalContent = document.querySelector('.mof-detail-container');
    if (!modalContent) return;
    
    // Temporary hide close/action buttons for screenshot
    const actions = modalContent.querySelectorAll('button');
    actions.forEach(btn => btn.style.display = 'none');
    
    try {
        const canvas = await html2canvas(modalContent, {
            scale: 2,
            useCORS: true,
            backgroundColor: document.body.classList.contains('light-theme') ? '#ffffff' : '#111827'
        });
        
        const imgData = canvas.toDataURL('image/jpeg', 0.9);
        const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('MOF_Detalle.pdf');
    } catch (e) {
        console.error("PDF Export Error", e);
        alert("Ocurrió un error al exportar a PDF.");
    } finally {
        // Restore buttons
        actions.forEach(btn => btn.style.display = '');
    }
};

