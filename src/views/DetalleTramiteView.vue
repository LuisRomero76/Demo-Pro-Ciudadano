<template>
    <div class="detalle-tramite-view">
        <header class="header">
            <div class="header-content">
                <button class="btn-back" @click="goBack" aria-label="Volver atrás">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 class="header-title">{{ tramiteName }}</h1>
                <div class="header-actions">
                    <ThemeToggle />
                    <button class="btn-share" @click="openShare" aria-label="Compartir">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="18" cy="5" r="3" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" />
                            <circle cx="6" cy="12" r="3" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" />
                            <circle cx="18" cy="19" r="3" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" />
                            <path d="M8.59 13.51l6.83 3.98" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" />
                            <path d="M15.41 6.51l-6.83 3.98" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>

        <main class="page">
            <section class="hero">
                <div class="hero-icon">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <rect width="80" height="80" rx="16" fill="var(--color-accent)" opacity="0.1" />
                        <path
                            d="M28 32H52C54.2091 32 56 33.7909 56 36V60C56 62.2091 54.2091 64 52 64H28C25.7909 64 24 62.2091 24 60V36C24 33.7909 25.7909 32 28 32Z"
                            fill="var(--color-accent)" />
                        <path d="M32 40H48M32 48H48M32 56H40" stroke="var(--color-background)" stroke-width="2"
                            stroke-linecap="round" />
                    </svg>
                </div>
                <div class="hero-copy">
                    <p class="eyebrow">Guía ciudadana</p>
                    <h2 class="hero-title">{{ tramiteName }}</h2>
                    <p class="hero-subtitle">{{ tramite.heroSubtitle }}</p>

                    <div class="status-row">
                        <span class="status-badge" :class="status">
                            {{ statusText[status] }}
                        </span>
                        <button class="cta-btn" :disabled="status === 'completado'" @click="advanceStatus">
                            {{ ctaLabel }}
                        </button>
                    </div>
                    <p class="status-hint">Este botón solo marca tu avance en la guía. El trámite real se hace en la
                        entidad.</p>
                </div>
            </section>

            <section class="layout-grid">
                <div class="content">
                    <div class="guide-card">
                        <div class="guide-header">
                            <span class="guide-chip">Paso a paso</span>
                            <p class="guide-summary">Sigue esta ruta y evita filas dobles. Cada paso indica dónde
                                hacerlo.</p>
                        </div>
                        <ol class="step-list">
                            <li v-for="(step, index) in tramite.steps" :key="step.title" class="step-item">
                                <div class="step-badge">{{ index + 1 }}</div>
                                <div class="step-body">
                                    <div class="step-top">
                                        <h3>{{ step.title }}</h3>
                                        <span class="step-location">{{ step.location }}</span>
                                    </div>
                                    <p>{{ step.detail }}</p>
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div class="requirement-card">
                        <div class="card-head">
                            <h2>Lo que necesitas</h2>
                            <p class="card-sub">Tenlos listos antes de salir.</p>
                        </div>
                        <div class="requirement-grid">
                            <div v-for="item in tramite.requirements" :key="item.title" class="requirement-item">
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.detail }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="tips-card">
                        <h2>Antes de empezar</h2>
                        <ul class="tip-list">
                            <li v-for="tip in tramite.tips" :key="tip">{{ tip }}</li>
                        </ul>
                    </div>

                    <div v-if="tramite.precheck && tramite.precheck.length" class="checklist-card">
                        <h2>Checklist previo</h2>
                        <ul class="checklist-list">
                            <li v-for="item in tramite.precheck" :key="item">{{ item }}</li>
                        </ul>
                    </div>

                    <div v-if="tramite.extras && tramite.extras.length" class="extras-card">
                        <h2>Notas y recursos</h2>
                        <ul class="extras-list">
                            <li v-for="note in tramite.extras" :key="note">{{ note }}</li>
                        </ul>
                    </div>
                </div>

                <aside class="sidebar">
                    <div class="sidebar-card emphasis">
                        <p class="eyebrow">Guía informativa</p>
                        <h3>Esta página no procesa tu trámite.</h3>
                        <p class="muted">Aquí encuentras pasos y requisitos. El trámite se realiza presencialmente en la
                            entidad.</p>
                    </div>

                    <div class="sidebar-card">
                        <h4>Datos rápidos</h4>
                        <div class="facts">
                            <div>
                                <span class="fact-label">Tiempo estimado</span>
                                <span class="fact-value">{{ tramite.facts.time }}</span>
                            </div>
                            <div>
                                <span class="fact-label">Costo</span>
                                <span class="fact-value">{{ tramite.facts.cost }}</span>
                            </div>
                            <div>
                                <span class="fact-label">Entidad</span>
                                <span class="fact-value">{{ tramite.facts.entity }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-card">
                        <h4>Dónde hacerlo</h4>
                        <p class="muted">{{ tramite.location }}</p>
                    </div>

                    <div v-if="tramite.contact || tramite.schedule" class="sidebar-card">
                        <h4>Contacto y horarios</h4>
                        <p v-if="tramite.schedule" class="muted">Horario: {{ tramite.schedule }}</p>
                        <p v-if="tramite.contact" class="muted">Contacto: {{ tramite.contact }}</p>
                    </div>

                    <div class="sidebar-card chat-card">
                        <div class="chat-head">
                            <div>
                                <p class="eyebrow">Acompañamiento</p>
                                <h4>¿Necesitas orientación?</h4>
                            </div>
                        </div>
                        <ChatPanel />
                    </div>
                </aside>
            </section>

            <section class="alert-section">
                <div class="alert alert-info">
                    <div class="alert-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" stroke-width="2" />
                            <path d="M12 16v-4M12 8h.01" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div class="alert-content">
                        <h4>Recuerda</h4>
                        <p>Confirma que la dirección y horarios no hayan cambiado antes de desplazarte.</p>
                    </div>
                </div>
            </section>
        </main>

        <ShareModal v-if="showShareModal" :tramiteName="tramiteName" @close="showShareModal = false" />
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
import ShareModal from '@/components/ShareModal.vue'
import ChatPanel from '@/components/ChatPanel.vue'

const props = defineProps({
    id: {
        type: String,
        default: '',
    },
})

const router = useRouter()
const route = useRoute()
const showShareModal = ref(false)
const status = ref('pendiente')

const tramiteData = {
    licencia: {
        name: 'Licencia de Funcionamiento',
        heroSubtitle: 'Guía para obtener tu licencia presencialmente, sin filas innecesarias.',
        steps: [
            { title: 'Prepara documentos', location: 'En tu hogar u oficina', detail: 'Reúne identificación, RUT/NIT y comprobante de pago.' },
            { title: 'Entrega en ventanilla', location: 'Carrera 7 #45-32, Centro', detail: 'Radica los documentos y solicita tu número de seguimiento.' },
            { title: 'Revisión técnica', location: 'Departamento de Gestión', detail: 'El equipo valida requisitos y te contacta si falta algo.' },
            { title: 'Retira tu licencia', location: 'Oficina de Trámites, Piso 3', detail: 'Lleva tu documento original para recibir el certificado.' },
        ],
        requirements: [
            { title: 'Cédula o Pasaporte', detail: 'Documento de identidad vigente.' },
            { title: 'RUT o NIT', detail: 'Registro actualizado del establecimiento.' },
            { title: 'Comprobante de Pago', detail: 'Recibo o factura del pago del trámite.' },
            { title: 'Declaración Jurada', detail: 'Formato diligenciado y firmado.' },
        ],
        facts: {
            time: '5-7 días hábiles',
            cost: '$250,000 - $500,000',
            entity: 'Secretaría de Gobierno',
        },
        location: 'Ventanilla única, Carrera 7 #45-32, Centro. Lleva original y copia de tus documentos.',
        schedule: 'Lun-Vie, 8:00 a.m. - 4:00 p.m.',
        contact: 'licencias@alcaldia.gov - Ext. 120',
        tips: [
            'Verifica que los documentos estén legibles y sin tachones.',
            'Consulta horarios de atención antes de desplazarte.',
            'Guarda copias digitales por si te piden enviar soporte por correo.',
        ],
        precheck: [
            'Confirma que el RUT/NIT esté actualizado.',
            'Revisa que el local cumpla con normas de uso de suelo.',
            'Si eres persona jurídica, lleva certificado de existencia (30 días).',
        ],
        extras: [
            'Si manejas alimentos, prepara certificado sanitario aparte.',
            'Lleva medio de pago aceptado en la ventanilla (débito/crédito).',
            'Pregunta por ventanilla preferencial si eres adulto mayor.',
        ],
    },
    permiso_evento: {
        name: 'Permiso para Evento Público',
        heroSubtitle: 'Pasos para tramitar tu permiso antes de la fecha del evento.',
        steps: [
            { title: 'Define el aforo y fecha', location: 'Planificación', detail: 'Ten claro lugar, fecha y estimación de asistentes.' },
            { title: 'Pre-radicación', location: 'Ventanilla de Eventos', detail: 'Entrega formato de solicitud y plan de seguridad.' },
            { title: 'Revisión con seguridad', location: 'Comité de Riesgos', detail: 'Se valida aforo, salidas de emergencia y pólizas.' },
            { title: 'Retira la resolución', location: 'Oficina de Eventos', detail: 'Recoge el permiso firmado y publícalo en el recinto.' },
        ],
        requirements: [
            { title: 'Formato de solicitud', detail: 'Descargado y diligenciado.' },
            { title: 'Póliza de responsabilidad', detail: 'Vigente por el valor indicado por la entidad.' },
            { title: 'Plan de emergencias', detail: 'Incluye rutas de evacuación y personal de apoyo.' },
            { title: 'Autorización del lugar', detail: 'Carta del dueño o administrador del espacio.' },
        ],
        facts: {
            time: '8-12 días hábiles',
            cost: 'Según aforo y uso del espacio',
            entity: 'Alcaldía / Oficina de Eventos',
        },
        location: 'Oficina de Eventos, Cra 10 #12-34. Lleva copia de tu cédula y del plan de emergencias.',
        schedule: 'Lun-Vie, 8:00 a.m. - 4:30 p.m.',
        contact: 'eventos@alcaldia.gov - Ext. 234',
        tips: [
            'Radica con al menos 15 días de anticipación.',
            'Revisa que la póliza cubra la fecha y el aforo completo.',
            'Si cambias la fecha, notifica y actualiza la póliza.',
        ],
        precheck: [
            'Confirma aforo y plano del espacio.',
            'Cotiza la póliza con aseguradora avalada.',
            'Designa responsables de seguridad y primeros auxilios.',
        ],
        extras: [
            'Si hay venta de alcohol, añade permiso sanitario.',
            'Incluye señalización de salidas y puntos de encuentro.',
            'Guarda copia digital del plan de emergencias en la nube.',
        ],
    },
    certificado_estrato: {
        name: 'Certificado de Estratificación',
        heroSubtitle: 'Solicita tu certificado para trámites de servicios y subsidios.',
        steps: [
            { title: 'Reúne los documentos', location: 'En casa', detail: 'Copia de escritura o contrato y tu documento de identidad.' },
            { title: 'Radica la solicitud', location: 'Punto de Atención SISBEN', detail: 'Entrega el formulario y recibe número de radicado.' },
            { title: 'Visita técnica', location: 'Tu domicilio', detail: 'Un verificador confirma la información en sitio.' },
            { title: 'Recoge el certificado', location: 'Punto de Atención SISBEN', detail: 'Presenta tu radicado y documento original.' },
        ],
        requirements: [
            { title: 'Documento de identidad', detail: 'Cédula o pasaporte vigente.' },
            { title: 'Soporte de residencia', detail: 'Recibo público o contrato de arrendamiento.' },
            { title: 'Formulario de solicitud', detail: 'Diligenciado y firmado.' },
        ],
        facts: {
            time: '3-5 días hábiles',
            cost: 'Sin costo',
            entity: 'Secretaría de Planeación',
        },
        location: 'Puntos SISBEN o Centro Administrativo Local. Lleva copias legibles.',
        schedule: 'Lun-Vie, 7:30 a.m. - 3:30 p.m.',
        contact: 'sisben@planeacion.gov - PBX 555000 opción 3',
        tips: [
            'Ten disponibilidad para la visita técnica.',
            'Si cambias de domicilio, radica nuevamente.',
            'Conserva el radicado para hacer seguimiento.',
        ],
        precheck: [
            'Revisa que el recibo de servicios tenga menos de 2 meses.',
            'Confirma que los nombres en escritura/contrato coincidan con quien solicita.',
            'Si eres arrendatario, lleva carta de autorización del propietario.',
        ],
        extras: [
            'Pregunta si puedes descargar el certificado en línea después del radicado.',
            'Si no puedes asistir, autoriza a un tercero con poder simple y copia de cédula.',
        ],
    },
    cedula_identidad: {
        name: 'Cédula de Identidad',
        heroSubtitle: 'Guía para obtener o renovar tu documento de identidad.',
        steps: [
            { title: 'Agenda tu cita', location: 'Portal de Identificación', detail: 'Selecciona sede y horario disponible.' },
            { title: 'Presenta documentos', location: 'Oficina de Identificación', detail: 'Lleva formulario, fotos y pago.' },
            { title: 'Captura biométrica', location: 'Oficina de Identificación', detail: 'Huella, firma y foto en ventanilla.' },
            { title: 'Retira tu cédula', location: 'Misma oficina', detail: 'Entrega comprobante y verifica tus datos.' },
        ],
        requirements: [
            { title: 'Formulario de solicitud', detail: 'Diligenciado e impreso.' },
            { title: 'Fotografías 3x4', detail: 'Fondo blanco, recientes.' },
            { title: 'Comprobante de pago', detail: 'Recibo oficial de la entidad.' },
        ],
        facts: {
            time: '3-5 días hábiles',
            cost: '$70,000 - $95,000',
            entity: 'Registro de Identificación Nacional',
        },
        location: 'Oficinas de Identificación, selecciona la más cercana al agendar.',
        schedule: 'Lun-Vie, 8:00 a.m. - 5:00 p.m.',
        contact: 'soporte-id@registro.gov - Línea 01 8000 123 456',
        tips: [
            'Llega 15 minutos antes de tu cita.',
            'Verifica que el nombre esté como en tu registro civil.',
            'Guarda el comprobante de pago para retirar.',
        ],
        precheck: [
            'Revisa vigencia de tus fotos (máx. 6 meses).',
            'Imprime el formulario sin tachones.',
        ],
        extras: [
            'Si perdiste tu cédula, lleva denuncia por pérdida.',
            'Personas con discapacidad: pregunta por fila preferencial.',
        ],
    },
    nit: {
        name: 'NIT (Impuestos)',
        heroSubtitle: 'Inscribe o actualiza tu Número de Identificación Tributaria.',
        steps: [
            { title: 'Preinscripción en línea', location: 'Portal tributario', detail: 'Diligencia datos de la empresa o persona natural.' },
            { title: 'Carga de soportes', location: 'Portal tributario', detail: 'Adjunta documento de identidad y RUT preliminar.' },
            { title: 'Validación', location: 'Oficina virtual', detail: 'La entidad valida homonimias y actividad económica.' },
            { title: 'Descarga del NIT', location: 'Portal tributario', detail: 'Obtén el certificado digital con código QR.' },
        ],
        requirements: [
            { title: 'Documento de identidad', detail: 'Cédula o pasaporte del representante.' },
            { title: 'RUT preliminar', detail: 'Generado en el portal tributario.' },
            { title: 'Soporte de domicilio', detail: 'Recibo público o contrato de arrendamiento.' },
        ],
        facts: {
            time: '2-4 días hábiles',
            cost: 'Sin costo',
            entity: 'Autoridad Tributaria Nacional',
        },
        location: 'Portal tributario (virtual) o punto de atención presencial.',
        schedule: 'Lun-Vie, 8:00 a.m. - 6:00 p.m.',
        contact: 'ayuda-nit@tributacion.gov - Chat en portal',
        tips: [
            'Revisa que la actividad económica (CIIU) sea correcta.',
            'Si es persona jurídica, adjunta certificado de existencia (30 días).',
            'Mantén copia PDF del NIT para bancos y proveedores.',
        ],
        precheck: [
            'Confirma el correo electrónico del representante legal.',
            'Ten a mano el código de verificación enviado al correo.',
        ],
        extras: [
            'Si cambias de dirección, actualiza el NIT en 1 mes.',
            'Descarga el NIT en PDF con QR para validaciones rápidas.',
        ],
    },
    licencia_conducir: {
        name: 'Licencia de Conducir',
        heroSubtitle: 'Renueva u obtiene tu licencia con esta guía presencial.',
        steps: [
            { title: 'Examen médico', location: 'Centro de reconocimiento', detail: 'Visión, audición y aptitud psicomotriz.' },
            { title: 'Curso teórico-práctico', location: 'Escuela de conducción', detail: 'Horas teóricas y prácticas según categoría.' },
            { title: 'Pago de derechos', location: 'Punto de pago autorizado', detail: 'Con tu número de documento o inscripción.' },
            { title: 'Entrega de licencia', location: 'Oficina de Tránsito', detail: 'Presenta comprobantes y biometría final.' },
        ],
        requirements: [
            { title: 'Documento de identidad', detail: 'Cédula o pasaporte vigente.' },
            { title: 'Certificado médico', detail: 'Aprobado y en vigencia.' },
            { title: 'Certificado de curso', detail: 'Escuela autorizada por tránsito.' },
            { title: 'Recibo de pago', detail: 'Derechos de trámite y examen.' },
        ],
        facts: {
            time: '7-10 días hábiles',
            cost: '$180,000 - $260,000',
            entity: 'Secretaría de Tránsito',
        },
        location: 'Oficina de Tránsito de tu ciudad.',
        schedule: 'Lun-Vie, 8:00 a.m. - 4:30 p.m.',
        contact: 'licencias@transito.gov - Ventanilla 7',
        tips: [
            'Agenda el examen médico antes del curso para evitar filas.',
            'Verifica la categoría solicitada (A2, B1, C1, etc.).',
            'Lleva copia de certificados y pagos.',
        ],
        precheck: [
            'Revisa que tu RH/fecha de nacimiento estén correctos.',
            'Confirma que tu EPS esté activa para el examen médico.',
        ],
        extras: [
            'Si perdiste la licencia, lleva denuncia y foto reciente.',
            'Para recategorización, lleva certificado de experiencia si aplica.',
        ],
    },
    antecedentes: {
        name: 'Certificado de Antecedentes',
        heroSubtitle: 'Obtén tu certificado policial y judicial.',
        steps: [
            { title: 'Solicitud en línea', location: 'Portal de antecedentes', detail: 'Ingresa con tu documento y solicita el certificado.' },
            { title: 'Validación de pagos', location: 'Portal de pagos', detail: 'Cancela si aplica tasa administrativa.' },
            { title: 'Descarga del certificado', location: 'Portal de antecedentes', detail: 'Recibe PDF con código de verificación.' },
        ],
        requirements: [
            { title: 'Documento de identidad', detail: 'Cédula o pasaporte.' },
            { title: 'Medio de pago', detail: 'Tarjeta débito/crédito o PSE.' },
        ],
        facts: {
            time: '1-2 días hábiles',
            cost: 'Según tipo de certificado',
            entity: 'Policía / Ministerio de Justicia',
        },
        location: 'Portal de antecedentes en línea.',
        schedule: '24/7 en línea; soporte Lun-Vie 8:00 a.m. - 5:00 p.m.',
        contact: 'soporte-antecedentes@justicia.gov',
        tips: [
            'Verifica que tus nombres coincidan con tu documento.',
            'Descarga el PDF y guarda el código de verificación.',
        ],
        precheck: [
            'Ten una conexión estable para la descarga.',
        ],
        extras: [
            'Si el certificado no carga, intenta en horario hábil por validaciones.',
        ],
    },
}

const tramiteAliases = {
    '1': 'licencia',
    '2': 'permiso_evento',
    '3': 'certificado_estrato',
    licencia: 'licencia',
    'licencia-funcionamiento': 'licencia',
    'permiso-evento': 'permiso_evento',
    permiso_evento: 'permiso_evento',
    'certificado-estrato': 'certificado_estrato',
    certificado_estrato: 'certificado_estrato',
    'cedula-identidad': 'cedula_identidad',
    cedula_identidad: 'cedula_identidad',
    nit: 'nit',
    'licencia-conducir': 'licencia_conducir',
    licencia_conducir: 'licencia_conducir',
    antecedentes: 'antecedentes',
}

const fallbackTramite = {
    name: 'Trámite ciudadano',
    heroSubtitle: 'Guía referencial del proceso seleccionado.',
    steps: [],
    requirements: [],
    facts: { time: 'N/D', cost: 'N/D', entity: 'Entidad responsable' },
    location: 'Consulta la entidad correspondiente.',
    schedule: '',
    contact: '',
    tips: ['Revisa los requisitos en la entidad oficial.'],
    precheck: [],
    extras: [],
}

const statusText = {
    pendiente: 'Pendiente',
    en_progreso: 'En progreso',
    completado: 'Completado',
}

const ctaLabel = computed(() => {
    if (status.value === 'pendiente') return 'Activar trámite'
    if (status.value === 'en_progreso') return 'Marcar como completado'
    return 'Trámite completado'
})

const goBack = () => {
    router.back()
}

const openShare = () => {
    showShareModal.value = true
}

const advanceStatus = () => {
    if (status.value === 'pendiente') {
        status.value = 'en_progreso'
    } else if (status.value === 'en_progreso') {
        status.value = 'completado'
    }
}

const idSource = computed(() => props.id || route.params.id || '')
const tramiteKey = computed(() => tramiteAliases[idSource.value] || idSource.value)
const tramite = computed(() => tramiteData[tramiteKey.value] || fallbackTramite)
const tramiteName = computed(() => tramite.value.name)

watch(idSource, () => {
    status.value = 'pendiente'
})
</script>

<style scoped>
:root {
    --color-background: light-dark(#ffffff, #1a1a1a);
    --color-background-secondary: light-dark(#f5f5f5, #2d2d2d);
    --color-text-primary: light-dark(#1a1a1a, #ffffff);
    --color-text-secondary: light-dark(#666666, #b0b0b0);
    --color-accent: light-dark(#3b82f6, #60a5fa);
    --color-accent-light: light-dark(#dbeafe, #1e3a8a);
    --color-border: light-dark(#e5e7eb, #404040);
    --color-success: light-dark(#10b981, #34d399);
    --color-warning: light-dark(#f59e0b, #fbbf24);
    --border-radius: 0.75rem;
    --transition: all 0.3s ease;
}

* {
    box-sizing: border-box;
}

.detalle-tramite-view {
    min-height: 100vh;
    background-color: var(--color-background);
    color: var(--color-text-primary);
    transition: var(--transition);
}

.header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--color-background-elevated);
    border-bottom: 1px solid var(--color-border);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1rem;
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.btn-back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background-color: var(--color-background-secondary);
    color: var(--color-text-primary);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
}

.btn-back:hover {
    background-color: var(--color-accent);
    color: white;
    transform: translateX(-2px);
}

.header-title {
    flex: 1;
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: left;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.btn-share {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background-color: var(--color-background-secondary);
    color: var(--color-text-primary);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
}

.btn-share:hover {
    background-color: var(--color-accent);
    color: white;
    transform: scale(1.05);
}

.page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.hero {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    align-items: center;
    background-color: var(--color-background-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    padding: 1.5rem;
}

.hero-icon {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-8px);
    }
}

.hero-copy {
    display: grid;
    gap: 0.35rem;
}

.status-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.5rem;
}

.status-badge {
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
    font-weight: 700;
    border: 1px solid var(--color-border);
    background-color: var(--color-background);
}

.status-badge.pendiente {
    color: var(--color-warning);
    border-color: var(--color-warning);
}

.status-badge.en_progreso {
    color: var(--color-accent);
    border-color: var(--color-accent);
}

.status-badge.completado {
    color: var(--color-success);
    border-color: var(--color-success);
}

.cta-btn {
    padding: 0.65rem 1.1rem;
    border-radius: 10px;
    border: 1px solid var(--color-accent);
    background: var(--color-accent);
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
}

.cta-btn:hover:not(:disabled) {
    filter: brightness(1.05);
    transform: translateY(-1px);
}

.cta-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.status-hint {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
}

.eyebrow {
    margin: 0;
    font-size: 0.875rem;
    letter-spacing: 0.02em;
    color: var(--color-accent);
    font-weight: 700;
}

.hero-title {
    margin: 0;
    font-size: 2rem;
    font-weight: 750;
}

.hero-subtitle {
    margin: 0;
    color: var(--color-text-secondary);
}

.layout-grid {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
    gap: 1.25rem;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.guide-card,
.requirement-card,
.tips-card {
    background-color: var(--color-background-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    padding: 1.5rem;
}

.guide-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.guide-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    background-color: light-dark(#e8efff, #0f1b33);
    color: var(--color-accent);
    font-weight: 700;
    font-size: 0.85rem;
}

.guide-summary {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: 0.95rem;
}

.step-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.step-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    background-color: var(--color-background);
}

.step-badge {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
    color: white;
    display: grid;
    place-items: center;
    font-weight: 800;
}

.step-body {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.step-top {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: baseline;
}

.step-top h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
}

.step-location {
    color: var(--color-accent);
    font-weight: 600;
    font-size: 0.875rem;
}

.step-item p {
    margin: 0;
    color: var(--color-text-secondary);
}

.card-head h2,
.card-head p,
.tips-card h2 {
    margin: 0;
}

.card-sub {
    color: var(--color-text-secondary);
}

.requirement-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.75rem;
    margin-top: 1rem;
}

.requirement-item {
    padding: 1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    background-color: var(--color-background);
}

.requirement-item h3 {
    margin: 0 0 0.25rem 0;
    font-size: 1rem;
}

.requirement-item p {
    margin: 0;
    color: var(--color-text-secondary);
}

.tips-card {
    display: grid;
    gap: 0.75rem;
}

.tip-list {
    margin: 0;
    padding-left: 1.25rem;
    color: var(--color-text-secondary);
    display: grid;
    gap: 0.35rem;
}

.checklist-card,
.extras-card {
    background-color: var(--color-background-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    padding: 1.25rem;
    display: grid;
    gap: 0.5rem;
}

.checklist-list,
.extras-list {
    margin: 0;
    padding-left: 1.25rem;
    color: var(--color-text-secondary);
    display: grid;
    gap: 0.35rem;
}

.sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.sidebar-card {
    background-color: var(--color-background-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    padding: 1.25rem;
}

.sidebar-card h3,
.sidebar-card h4,
.sidebar-card p {
    margin: 0;
}

.sidebar-card.emphasis {
    border-color: var(--color-accent);
}

.muted {
    color: var(--color-text-secondary);
}

.facts {
    display: grid;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.fact-label {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
}

.fact-value {
    display: block;
    font-weight: 700;
}

.chat-card {
    display: grid;
    gap: 0.75rem;
}

.chat-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.alert-section {
    margin-top: 0.5rem;
}

.alert {
    display: flex;
    gap: 1rem;
    padding: 1.25rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    align-items: center;
}

.alert-info {
    background-color: var(--color-background-secondary);
    border-color: var(--color-accent);
}

.alert-icon {
    display: flex;
    align-items: flex-start;
    color: var(--color-accent);
}

.alert-content h4 {
    margin: 0 0 0.25rem 0;
}

.alert-content p {
    margin: 0;
    color: var(--color-text-secondary);
}

@media (max-width: 900px) {
    .layout-grid {
        grid-template-columns: 1fr;
    }

    .hero {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .header-content {
        gap: 0.5rem;
    }

    .header-title {
        font-size: 1.05rem;
    }

    .hero-title {
        font-size: 1.5rem;
    }

    .step-item {
        grid-template-columns: 1fr;
    }
}
</style>
