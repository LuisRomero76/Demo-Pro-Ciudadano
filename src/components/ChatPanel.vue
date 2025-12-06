<template>
    <div class="chat-panel" :class="{ active: isOpen }">
        <div class="chat-header">
            <h3>Asistente IA</h3>
            <button class="close-chat" @click="toggleChat">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

        <div class="chat-messages">
            <div v-for="message in messages" :key="message.id" class="message" :class="message.type">
                <div class="message-content">{{ message.text }}</div>
            </div>
        </div>

        <div class="chat-input-area">
            <input v-model="inputMessage" type="text" placeholder="Pregunta algo..." class="chat-input"
                @keyup.enter="sendMessage" />
            <button @click="sendMessage" class="send-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </div>
    </div>

    <button v-if="!isOpen" class="chat-toggle" @click="toggleChat" title="Abrir Chat">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>&nbsp;
        Iniciar Chat
    </button>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const inputMessage = ref('')
const messages = ref([
    {
        id: 1,
        type: 'ai',
        text: '¡Hola! Soy tu Asistente IA de Pro-Ciudadano. ¿En qué puedo ayudarte hoy?'
    }
])

const toggleChat = () => {
    isOpen.value = !isOpen.value
}

const sendMessage = () => {
    if (!inputMessage.value.trim()) return

    // Agregar mensaje del usuario
    messages.value.push({
        id: messages.value.length + 1,
        type: 'user',
        text: inputMessage.value
    })

    // Simular respuesta del AI
    setTimeout(() => {
        const responses = [
            'Estoy aquí para ayudarte con tus trámites gubernamentales.',
            'Puedo brindarte información sobre requisitos, pasos y ubicaciones.',
            'También puedo asistirte con consultas sobre tus trámites activos.',
            '¿Hay algo más en lo que pueda ayudarte?',
            'Recuerda que puedo responder preguntas sobre cualquier trámite.'
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]

        messages.value.push({
            id: messages.value.length + 1,
            type: 'ai',
            text: randomResponse
        })
    }, 500)

    inputMessage.value = ''
}
</script>

<style scoped>
.chat-toggle {
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 200px;
    height: 56px;
    border-radius: 20px;
    background: var(--pc-accent-gradient);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: var(--shadow-accent);
    transition: all 0.3s ease;
    z-index: 999;
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-4px);
    }
}

.chat-toggle:hover {
    animation: none;
    transform: scale(1.1);
}

.chat-panel {
    position: fixed;
    bottom: 0;
    right: -400px;
    width: 400px;
    height: 100vh;
    background: var(--color-background-mute);
    border-left: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    z-index: 1000;
    transition: right 0.3s ease;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
}

.chat-panel.active {
    right: 0;
}

.chat-header {
    padding: 20px;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-background);
}

.chat-header h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
}

.close-chat {
    width: 36px;
    height: 36px;
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

.close-chat:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: white;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.message {
    display: flex;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.message.user {
    justify-content: flex-end;
}

.message-content {
    max-width: 85%;
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 14px;
    line-height: 1.5;
}

.message.ai .message-content {
    background: var(--color-background);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
}

.message.user .message-content {
    background: var(--pc-accent-gradient);
    color: white;
}

.chat-input-area {
    padding: 20px;
    border-top: 1px solid var(--color-border);
    display: flex;
    gap: 12px;
    background: var(--color-background);
}

.chat-input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    background: var(--color-background-mute);
    color: var(--color-text-primary);
    font-size: 14px;
    outline: none;
    transition: all 0.3s ease;
}

.chat-input:focus {
    border-color: var(--color-accent);
    background: var(--color-background);
}

.send-btn {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--pc-accent-gradient);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.send-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-accent);
}

@media (max-width: 768px) {
    .chat-panel {
        width: 100%;
        right: -100%;
    }

    .chat-toggle {
        bottom: 20px;
        right: 20px;
    }
}
</style>
