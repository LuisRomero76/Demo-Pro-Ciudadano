<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Compartir Información</h2>
                <button class="close-btn" @click="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="share-content">
                <div class="share-section">
                    <h3>Compartir: {{ tramiteName }}</h3>
                    <p class="share-subtitle">Selecciona cómo deseas compartir esta información</p>
                </div>

                <div class="share-options">
                    <button class="share-btn" @click="copyLink">
                        <div class="share-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                        </div>
                        <div class="share-text">
                            <h4>Copiar enlace</h4>
                            <p>Copiar URL directa al portapapeles</p>
                        </div>
                        <span v-if="copied" class="success-badge">✓ Copiado</span>
                    </button>

                    <button class="share-btn" @click="shareEmail">
                        <div class="share-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </div>
                        <div class="share-text">
                            <h4>Correo electrónico</h4>
                            <p>Enviar información por email</p>
                        </div>
                    </button>

                    <button class="share-btn" @click="shareWhatsApp">
                        <div class="share-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </div>
                        <div class="share-text">
                            <h4>WhatsApp</h4>
                            <p>Compartir vía WhatsApp</p>
                        </div>
                    </button>

                    <button class="share-btn" @click="downloadPDF">
                        <div class="share-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="12" y1="19" x2="12" y2="11"></line>
                                <polyline points="9 14 12 11 15 14"></polyline>
                            </svg>
                        </div>
                        <div class="share-text">
                            <h4>Descargar PDF</h4>
                            <p>Guardar información como PDF</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    tramiteName: {
        type: String,
        default: 'Documento'
    }
})

const emit = defineEmits(['close'])

const copied = ref(false)

const closeModal = () => {
    emit('close')
}

const copyLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 2000)
}

const shareEmail = () => {
    const subject = `Información: ${props.tramiteName}`
    const body = `Consulta esta información sobre ${props.tramiteName}: ${window.location.href}`
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const shareWhatsApp = () => {
    const text = `Consulta esta información sobre ${props.tramiteName}: ${window.location.href}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
}

const downloadPDF = () => {
    alert('📥 Descargando PDF de ' + props.tramiteName + '...\n\n(Funcionalidad en desarrollo)')
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.modal-content {
    background: var(--color-background-mute);
    border-radius: 20px;
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-border);
    animation: slideUp 0.3s ease;
}

@keyframes slideUp {
    from {
        transform: translateY(30px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.modal-header {
    padding: 24px;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h2 {
    font-size: 22px;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
}

.close-btn {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.close-btn:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: white;
}

.share-content {
    padding: 24px;
    overflow-y: auto;
}

.share-section {
    margin-bottom: 24px;
}

.share-section h3 {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 8px 0;
}

.share-subtitle {
    font-size: 14px;
    color: var(--color-text-muted);
    margin: 0;
}

.share-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.share-btn {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.share-btn:hover {
    border-color: var(--color-accent);
    background: var(--color-background-elevated);
    transform: translateX(4px);
}

.share-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--pc-accent-gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
}

.share-text {
    flex: 1;
}

.share-text h4 {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 4px 0;
}

.share-text p {
    font-size: 13px;
    color: var(--color-text-muted);
    margin: 0;
}

.success-badge {
    padding: 6px 12px;
    background: var(--pc-success);
    color: white;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
}
</style>
