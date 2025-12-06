<template>
    <button @click="toggleTheme" class="theme-toggle"
        :title="isDark() ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'">
        <transition name="fade" mode="out-in">
            <svg v-if="isDark()" key="moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <svg v-else key="sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        </transition>
    </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { toggleTheme, isDark } = useTheme()
</script>

<style scoped>
.theme-toggle {
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
    box-shadow: var(--shadow-sm);
}

.theme-toggle:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-accent);
}

.theme-toggle:active {
    transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
}

.fade-leave-to {
    opacity: 0;
    transform: rotate(180deg) scale(0.5);
}
</style>
