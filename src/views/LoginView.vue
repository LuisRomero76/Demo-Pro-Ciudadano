<template>
    <div class="login-container">
        <div class="login-background">
            <div class="grid-overlay"></div>
            <div class="gradient-orb orb-1"></div>
            <div class="gradient-orb orb-2"></div>
        </div>

        <ThemeToggle class="theme-toggle-login" />

        <div class="login-content">
            <div class="login-card glass">
                <div class="logo-section">
                    <div class="logo-wrapper">
                        <img src="../assets/logo.png" width="150px">
                        <div class="ai-badge">
                            <span class="ai-dot"></span>
                            <span>IA</span>
                        </div>
                    </div>
                    <p class="app-subtitle">Plataforma Gubernamental de Inteligencia Artificial</p>
                    <div class="subtitle-tags">
                        <span class="tag">🏛️ Gobierno Digital</span>
                        <span class="tag">🤖 IA Asistente</span>
                    </div>
                </div>

                <form class="login-form" @submit.prevent="handleLogin">
                    <div v-if="errorMessage" class="error-alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span>{{ errorMessage }}</span>
                    </div>

                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <div class="input-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                </path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <input type="email" id="email" v-model="email" placeholder="admin@gmail.com"
                                class="form-input" required />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <div class="input-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
                                placeholder="••••••••" class="form-input" required />
                            <button type="button" class="password-toggle" @click="showPassword = !showPassword">
                                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24">
                                    </path>
                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="form-options">
                        <label class="checkbox-label">
                            <input type="checkbox" v-model="rememberMe" />
                            <span>Recordarme</span>
                        </label>
                        <a href="#" @click.prevent="handleForgotPassword" class="link-secondary">¿Olvidaste tu
                            contraseña?</a>
                    </div>

                    <button type="submit" class="btn-primary btn-login" :disabled="isLoading">
                        <span v-if="!isLoading">Iniciar Sesión</span>
                        <span v-else class="loading-spinner">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"
                                    stroke-dasharray="32" stroke-dashoffset="32">
                                    <animate attributeName="stroke-dashoffset" values="32;0" dur="1s"
                                        repeatCount="indefinite" />
                                </circle>
                            </svg>
                            Iniciando...
                        </span>
                    </button>

                    <div class="divider">
                        <span>o continúa con</span>
                    </div>

                    <button type="button" @click="handleRegister" class="btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <line x1="19" y1="8" x2="19" y2="14"></line>
                            <line x1="22" y1="11" x2="16" y2="11"></line>
                        </svg>
                        Crear Nueva Cuenta
                    </button>
                </form>

                <div class="login-footer">
                    <p class="demo-info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        Demo: admin@gmail.com / 123456
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ThemeToggle from '../components/ThemeToggle.vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const errorMessage = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
    errorMessage.value = ''

    // Validar credenciales
    if (email.value !== 'admin@gmail.com' || password.value !== '123456') {
        errorMessage.value = 'Credenciales incorrectas. Por favor, verifica tu correo y contraseña.'
        return
    }

    isLoading.value = true

    // Simular delay de autenticación
    setTimeout(() => {
        isLoading.value = false
        router.push('/dashboard')
    }, 1000)
}

const handleRegister = () => {
    router.push('/dashboard')
}

const handleForgotPassword = () => {
    alert('Recuperación de Contraseña\n\nSe enviará un enlace de recuperación a tu correo electrónico registrado.\n\n(Funcionalidad en desarrollo)')
}
</script>

<style scoped>
.login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    position: relative;
    overflow: hidden;
}

.login-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
}

.grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(var(--color-border) 1px, transparent 1px),
        linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.2;
}

.gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    animation: float 20s infinite ease-in-out;
}

.orb-1 {
    width: 500px;
    height: 500px;
    background: var(--pc-accent-primary);
    top: -250px;
    right: -250px;
}

.orb-2 {
    width: 400px;
    height: 400px;
    background: var(--pc-accent-secondary);
    bottom: -200px;
    left: -200px;
    animation-delay: -10s;
}

@keyframes float {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    33% {
        transform: translate(30px, -30px) scale(1.1);
    }

    66% {
        transform: translate(-30px, 30px) scale(0.9);
    }
}

.theme-toggle-login {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 10;
}

.login-content {
    width: 100%;
    max-width: 480px;
    position: relative;
    z-index: 1;
}

.login-card {
    padding: 48px 40px;
    border-radius: 24px;
    animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.logo-section {
    text-align: center;
    margin-bottom: 40px;
}

.logo-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
}

.logo-circle {
    width: 80px;
    height: 80px;
    background: var(--pc-accent-gradient);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: var(--shadow-accent);
    animation: pulse 2s infinite;
}

@keyframes pulse {

    0%,
    100% {
        box-shadow: var(--shadow-accent);
    }

    50% {
        box-shadow: 0 12px 36px rgba(91, 124, 255, 0.5);
    }
}

.ai-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--pc-success);
    color: white;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
    box-shadow: var(--shadow-lg);
}

.ai-dot {
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    animation: blink 2s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }
}

.app-title {
    font-size: 36px;
    font-weight: 800;
    margin: 0 0 12px 0;
    letter-spacing: -1px;
}

.app-subtitle {
    font-size: 15px;
    color: var(--color-text-muted);
    margin: 0 0 16px 0;
    line-height: 1.5;
}

.subtitle-tags {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
}

.tag {
    font-size: 12px;
    padding: 6px 12px;
    background: var(--color-background-elevated);
    border: 1px solid var(--color-border);
    border-radius: 20px;
    color: var(--color-text-secondary);
}

.error-alert {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid var(--pc-error);
    border-radius: 12px;
    color: var(--pc-error);
    font-size: 14px;
    margin-bottom: 20px;
    animation: shake 0.5s;
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-10px);
    }

    75% {
        transform: translateX(10px);
    }
}

.login-form {
    margin-bottom: 24px;
}

.form-group {
    margin-bottom: 24px;
}

.form-group label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 8px;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.input-wrapper svg:first-of-type {
    position: absolute;
    left: 16px;
    color: var(--color-text-muted);
    pointer-events: none;
}

.form-input {
    width: 100%;
    padding: 14px 16px 14px 48px;
    background: var(--color-background);
    border: 2px solid var(--color-border);
    border-radius: 12px;
    color: var(--color-text-primary);
    font-size: 15px;
    font-family: inherit;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

.form-input:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 4px rgba(91, 124, 255, 0.1);
}

.form-input::placeholder {
    color: var(--color-text-muted);
}

.password-toggle {
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    color: var(--color-text-muted);
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    transition: color 0.3s;
}

.password-toggle:hover {
    color: var(--color-accent);
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    color: var(--color-text-secondary);
}

.checkbox-label input[type="checkbox"] {
    cursor: pointer;
}

.link-secondary {
    font-size: 14px;
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 500;
}

.link-secondary:hover {
    text-decoration: underline;
}

.btn-login {
    margin-bottom: 24px;
}

.btn-login:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.loading-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.divider {
    text-align: center;
    position: relative;
    margin: 24px 0;
}

.divider::before,
.divider::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 42%;
    height: 1px;
    background: var(--color-border);
}

.divider::before {
    left: 0;
}

.divider::after {
    right: 0;
}

.divider span {
    color: var(--color-text-muted);
    background: var(--color-background-mute);
    padding: 0 16px;
    font-size: 13px;
}

.btn-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.login-footer {
    padding-top: 20px;
    border-top: 1px solid var(--color-border);
    text-align: center;
}

.demo-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 13px;
    color: var(--color-text-muted);
    margin: 0;
    padding: 12px;
    background: var(--color-background);
    border-radius: 8px;
    border: 1px solid var(--color-border);
}

.demo-info svg {
    color: var(--pc-info);
    flex-shrink: 0;
}
</style>
