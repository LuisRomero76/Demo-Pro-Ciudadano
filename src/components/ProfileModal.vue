<template>
    <div v-if="isOpen" class="profile-overlay" @click.self="closeProfile">
        <div class="profile-content">
            <div class="profile-header">
                <button class="back-btn" @click="closeProfile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>
                <h2>Mi Perfil</h2>
                <div style="width: 40px;"></div>
            </div>

            <div class="profile-main">
                <div class="profile-avatar-section">
                    <div class="profile-avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="profile-basic">
                        <h3>Luis Romero</h3>
                        <p>Ciudadano Registrado</p>
                    </div>
                </div>

                <div class="profile-section">
                    <h4 class="section-title">Información Personal</h4>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">Correo</span>
                            <span class="info-value">admin@gmail.com</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Cédula</span>
                            <span class="info-value">1234567-89</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Teléfono</span>
                            <span class="info-value">+591 7 1234567</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Fecha de Nacimiento</span>
                            <span class="info-value">15/08/1990</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h4 class="section-title">Ubicación</h4>
                    <div class="location-info">
                        <div class="info-item">
                            <span class="info-label">Departamento</span>
                            <span class="info-value">La Paz</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Ciudad</span>
                            <span class="info-value">La Paz</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Dirección</span>
                            <span class="info-value">Calle Principal 123, Zona Centro</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <h4 class="section-title">Resumen de Trámites</h4>
                    <div class="stats-grid">
                        <div class="stat-box">
                            <span class="stat-number">2</span>
                            <span class="stat-label">Activos</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">5</span>
                            <span class="stat-label">Completados</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">0</span>
                            <span class="stat-label">Rechazados</span>
                        </div>
                    </div>
                </div>

                <div class="profile-actions">
                    <button class="btn-secondary">Editar Perfil</button>
                    <button class="btn-secondary">Cambiar Contraseña</button>
                    <button class="btn-secondary btn-danger">Cerrar Sesión</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['close'])

const closeProfile = () => {
    emit('close')
}
</script>

<style scoped>
.profile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
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

.profile-content {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    background: var(--color-background-mute);
    border-left: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    animation: slideInRight 0.3s ease;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}

.profile-header {
    padding: 24px;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-background);
}

.profile-header h2 {
    font-size: 20px;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
}

.back-btn {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.back-btn:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: white;
}

.profile-main {
    overflow-y: auto;
    padding: 24px;
    flex: 1;
}

.profile-avatar-section {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background: var(--color-background);
    border-radius: 16px;
    margin-bottom: 24px;
}

.profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--pc-accent-gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
}

.profile-basic h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 4px 0;
}

.profile-basic p {
    font-size: 14px;
    color: var(--color-text-muted);
    margin: 0;
}

.profile-section {
    margin-bottom: 24px;
}

.section-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 16px 0;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-border);
}

.info-grid,
.location-info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
}

.info-item {
    display: flex;
    flex-direction: column;
    padding: 12px;
    background: var(--color-background);
    border-radius: 10px;
}

.info-label {
    font-size: 12px;
    color: var(--color-text-muted);
    margin-bottom: 4px;
}

.info-value {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-text-primary);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
}

.stat-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    background: var(--color-background);
    border-radius: 12px;
    border: 1px solid var(--color-border);
}

.stat-number {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 4px;
}

.stat-label {
    font-size: 12px;
    color: var(--color-text-muted);
}

.profile-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
    border-top: 1px solid var(--color-border);
}

.btn-secondary {
    padding: 12px 20px;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 10px;
    color: var(--color-text-primary);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: white;
}

.btn-danger {
    color: var(--pc-error);
}

.btn-danger:hover {
    background: var(--pc-error);
    color: white;
}

@media (max-width: 768px) {
    .profile-content {
        max-width: 100%;
    }
}
</style>
