<template>
    <div class="dashboard-container">
        <header class="dashboard-header glass">
            <div class="header-left">
                <img src="../assets/logo-sin-letras.png" width="80">
                <h1 class="header-title gradient-text">Pro-Ciudadano</h1>
            </div>
            <div class="header-right">
                <ThemeToggle />
                <button class="icon-btn" @click="showNotifications" title="Notificaciones">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    <span class="notification-badge">3</span>
                </button>
                <button class="icon-btn" @click="goToProfile" title="Perfil">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
            </div>
        </header>

        <main class="dashboard-main">
            <section class="welcome-section">
                <div class="welcome-content">
                    <h2 class="welcome-title">¡Bienvenido, Luis Romero!</h2>
                    <p class="welcome-text">Tu asistente inteligente gubernamental está listo para ayudarte</p>
                </div>
            </section>

            <section class="stats-section">
                <div class="stat-card card">
                    <div class="stat-icon" style="background: linear-gradient(135deg, #5b7cff 0%, #00d4ff 100%);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                    </div>
                    <div class="stat-info">
                        <p class="stat-label">Trámites Activos</p>
                        <h3 class="stat-value">2</h3>
                    </div>
                </div>
                <div class="stat-card card">
                    <div class="stat-icon" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div class="stat-info">
                        <p class="stat-label">Completados</p>
                        <h3 class="stat-value">5</h3>
                    </div>
                </div>
                <div class="stat-card card">
                    <div class="stat-icon" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <div class="stat-info">
                        <p class="stat-label">Tiempo Estimado</p>
                        <h3 class="stat-value">3d</h3>
                    </div>
                </div>
            </section>

            <section class="tramites-section">
                <div class="section-header">
                    <h3 class="section-title">Trámites Destacados</h3>
                    <p class="section-subtitle">Impulsados por Inteligencia Artificial</p>
                </div>

                <div class="tramites-grid">
                    <div class="tramite-card card" @click="goToTramite('licencia-funcionamiento')">
                        <div class="tramite-header">
                            <div class="tramite-icon"
                                style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            </div>
                            <span class="tramite-badge">Popular</span>
                        </div>
                        <h4 class="tramite-title">Licencia de Funcionamiento</h4>
                        <p class="tramite-description">Apertura de negocios y establecimientos comerciales</p>
                        <div class="tramite-meta">
                            <span class="meta-item">⏱️ 5-7 días</span>
                            <span class="meta-item">��� 4 requisitos</span>
                        </div>
                    </div>

                    <div class="tramite-card card" @click="goToTramite('cedula-identidad')">
                        <div class="tramite-header">
                            <div class="tramite-icon"
                                style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                            <span class="tramite-badge ai">IA</span>
                        </div>
                        <h4 class="tramite-title">Cédula de Identidad</h4>
                        <p class="tramite-description">Obtención y renovación de documento</p>
                        <div class="tramite-meta">
                            <span class="meta-item">⏱️ 3-5 días</span>
                            <span class="meta-item">��� 3 requisitos</span>
                        </div>
                    </div>

                    <div class="tramite-card card" @click="goToTramite('nit')">
                        <div class="tramite-header">
                            <div class="tramite-icon"
                                style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                        </div>
                        <h4 class="tramite-title">NIT (Impuestos)</h4>
                        <p class="tramite-description">Registro tributario nacional</p>
                        <div class="tramite-meta">
                            <span class="meta-item">⏱️ 2-4 días</span>
                            <span class="meta-item">��� 5 requisitos</span>
                        </div>
                    </div>

                    <div class="tramite-card card" @click="goToTramite('licencia-conducir')">
                        <div class="tramite-header">
                            <div class="tramite-icon"
                                style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="1" y="3" width="15" height="13"></rect>
                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                </svg>
                            </div>
                        </div>
                        <h4 class="tramite-title">Licencia de Conducir</h4>
                        <p class="tramite-description">Nueva licencia o renovación</p>
                        <div class="tramite-meta">
                            <span class="meta-item">⏱️ 7-10 días</span>
                            <span class="meta-item">��� 6 requisitos</span>
                        </div>
                    </div>

                    <div class="tramite-card card" @click="goToTramite('antecedentes')">
                        <div class="tramite-header">
                            <div class="tramite-icon"
                                style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                </svg>
                            </div>
                            <span class="tramite-badge ai">IA</span>
                        </div>
                        <h4 class="tramite-title">Antecedentes</h4>
                        <p class="tramite-description">Certificado policial y judicial</p>
                        <div class="tramite-meta">
                            <span class="meta-item">⏱️ 1-2 días</span>
                            <span class="meta-item">��� 2 requisitos</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <NotificationsModal :isOpen="showNotificationsModal" @close="showNotificationsModal = false" />
        <ProfileModal :isOpen="showProfileModal" @close="showProfileModal = false" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ThemeToggle from '../components/ThemeToggle.vue'
import NotificationsModal from '../components/NotificationsModal.vue'
import ProfileModal from '../components/ProfileModal.vue'

const router = useRouter()
const showNotificationsModal = ref(false)
const showProfileModal = ref(false)

const goToTramite = (tramiteId) => {
    router.push(`/tramite/${tramiteId}`)
}

const showNotifications = () => {
    showNotificationsModal.value = true
}

const goToProfile = () => {
    showProfileModal.value = true
}
</script>

<style scoped>
.dashboard-container {
    min-height: 100vh;
    background: var(--color-background);
}

.dashboard-header {
    position: sticky;
    top: 0;
    padding: 20px 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    border-bottom: 1px solid var(--color-border);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-small {
    width: 40px;
    height: 40px;
    background: var(--pc-accent-gradient);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: var(--shadow-accent);
}

.header-title {
    font-size: 24px;
    font-weight: 800;
    margin: 0;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 12px;
}

.icon-btn {
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: var(--color-background-elevated);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.icon-btn:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: white;
    transform: translateY(-2px);
}

.notification-badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background: var(--pc-error);
    color: white;
    font-size: 10px;
    font-weight: 700;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--color-background-mute);
}

.dashboard-main {
    padding: 40px 6%;
    max-width: 1400px;
    margin: 0 auto;
}

.welcome-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    padding: 32px;
    background: var(--color-background-mute);
    border-radius: 20px;
    border: 1px solid var(--color-border);
}

.welcome-title {
    font-size: 32px;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 8px 0;
}

.welcome-text {
    font-size: 16px;
    color: var(--color-text-muted);
    margin: 0;
}

.ai-status {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: var(--color-background-elevated);
    border: 1px solid var(--color-border);
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    color: var(--pc-success);
}

.status-dot {
    width: 8px;
    height: 8px;
    background: var(--pc-success);
    border-radius: 50%;
    animation: blink 2s infinite;
}

.stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
}

.stat-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
}

.stat-icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
}

.stat-label {
    font-size: 13px;
    color: var(--color-text-muted);
    margin: 0 0 4px 0;
}

.stat-value {
    font-size: 32px;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
}

.tramites-section {
    margin-bottom: 40px;
}

.section-header {
    margin-bottom: 24px;
}

.section-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0 0 4px 0;
}

.section-subtitle {
    font-size: 14px;
    color: var(--color-text-muted);
    margin: 0;
}

.tramites-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
}

.tramite-card {
    cursor: pointer;
    padding: 24px;
    transition: all 0.3s ease;
}

.tramite-card:hover {
    transform: translateY(-6px);
}

.tramite-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
}

.tramite-icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.tramite-badge {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    background: var(--color-background-elevated);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
}

.tramite-badge.ai {
    background: var(--pc-success);
    color: white;
    border-color: var(--pc-success);
}

.tramite-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 8px 0;
}

.tramite-description {
    font-size: 14px;
    color: var(--color-text-muted);
    margin: 0 0 16px 0;
    line-height: 1.5;
}

.tramite-meta {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.meta-item {
    font-size: 13px;
    color: var(--color-text-secondary);
}
</style>
