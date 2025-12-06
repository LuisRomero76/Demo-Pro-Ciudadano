<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Notificaciones</h2>
                <button class="close-btn" @click="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="notifications-list">
                <div v-for="notification in notifications" :key="notification.id" class="notification-item"
                    :class="notification.type">
                    <div class="notification-icon">
                        <svg v-if="notification.type === 'success'" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <svg v-else-if="notification.type === 'pending'" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    </div>
                    <div class="notification-content">
                        <h4>{{ notification.title }}</h4>
                        <p>{{ notification.message }}</p>
                        <span class="notification-time">{{ notification.time }}</span>
                    </div>
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
    }
})

const emit = defineEmits(['close'])

const notifications = ref([
    {
        id: 1,
        type: 'success',
        title: '✅ Cédula Completada',
        message: 'Tu trámite de Cédula de Identidad está listo para recoger',
        time: 'Hace 2 horas'
    },
    {
        id: 2,
        type: 'pending',
        title: '⏳ Pago Pendiente',
        message: 'Se requiere realizar el pago de Bs. 250 para el NIT',
        time: 'Hace 5 horas'
    },
    {
        id: 3,
        type: 'reminder',
        title: '🔔 Recordatorio',
        message: 'Tu Licencia de Conducir vence en 30 días. Inicia renovación',
        time: 'Hace 1 día'
    }
])

const closeModal = () => {
    emit('close')
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
    max-width: 500px;
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

.notifications-list {
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.notification-item {
    display: flex;
    gap: 16px;
    padding: 16px;
    background: var(--color-background);
    border-radius: 12px;
    border-left: 4px solid;
    transition: all 0.3s ease;
}

.notification-item:hover {
    transform: translateX(4px);
}

.notification-item.success {
    border-left-color: var(--pc-success);
}

.notification-item.pending {
    border-left-color: var(--pc-warning);
}

.notification-item.reminder {
    border-left-color: var(--pc-info);
}

.notification-icon {
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
}

.notification-item.success .notification-icon {
    color: var(--pc-success);
}

.notification-item.pending .notification-icon {
    color: var(--pc-warning);
}

.notification-item.reminder .notification-icon {
    color: var(--pc-info);
}

.notification-content h4 {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 4px 0;
}

.notification-content p {
    font-size: 14px;
    color: var(--color-text-muted);
    margin: 0 0 8px 0;
    line-height: 1.5;
}

.notification-time {
    font-size: 12px;
    color: var(--color-text-muted);
}
</style>
