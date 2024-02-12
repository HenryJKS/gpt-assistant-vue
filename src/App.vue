<script setup>
import { onMounted, ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon, ChevronDoubleUpIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'
const prompt = ref('');
const isWriting = ref(false);
// const showDropdown = ref(false);

async function promptBoost() {
    isWriting.value = true

    const response = await axios.post('http://localhost:3000/api/boost', {
        prompt: prompt.value
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    prompt.value = ''

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

async function promptSimplify() {
    isWriting.value = true

    const response = await axios.post('http://localhost:3000/api/simplify', {
        prompt: prompt.value
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    prompt.value = ''

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

async function promptComplete() {
    isWriting.value = true

    const response = await axios.post('http://localhost:3000/api/complete', {
        prompt: prompt.value
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

// Solicitar Documentos Faltantes - passando o tracking e o funcionário
async function promptDocuments() {
    isWriting.value = true

    const response = await axios.post('http://localhost:3000/api/documents', {
        tracking: 'TR000049583BR',
        funcionario: 'Henry'
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    prompt.value = ''

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

// Solicitar Comprovação de Valor - Passando o Tracking e o funcionário
async function promptProvingValue() {
    isWriting.value = true

    const response = await axios.post('http://localhost:3000/api/provingValue', {
        tracking: 'TR000049583BR',
        funcionario: 'Henry'
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    prompt.value = ''

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

async function promptCPFIrregular() {
    isWriting.value = true

    // Solicitar Análise CPF Irregular - Passando o Tracking e o funcionário
    const response = await axios.post('http://localhost:3000/api/cpfirregular', {
        tracking: 'TR000049583BR',
        funcionario: 'Henry'
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    prompt.value = ''

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

// Solicitar Atualização de Status - Passando o status e o tracking e o funcionário
async function promptUpdateShipment() {
    isWriting.value = true

    const response = await axios.post('http://localhost:3000/api/updateShipment', {
        tracking: 'TR000049583BR',
        funcionario: 'Henry'
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    prompt.value = ''

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

// Traduzir para Inglês
async function promptTranslateEnglish() {
    isWriting.value = true

    const response = await axios.post('http://localhost:3000/api/translateEng', {
        prompt: prompt.value,
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    prompt.value = ''

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

async function promptTranslateSpanish() {
    isWriting.value = true

    const response = await axios.post('http://localhost:3000/api/translateSpa', {
        prompt: prompt.value,
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    prompt.value = ''

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

async function promptTranslateRussian() {
    isWriting.value = true

    const response = await axios.post('http://localhost:3000/api/translateRus', {
        prompt: prompt.value,
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    prompt.value = ''

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

// Traduzir para Alemão
async function promptTranslateGerman() {
    isWriting.value = true

    const response = await axios.post('http://localhost:3000/api/translateGer', {
        prompt: prompt.value,
    }).then(res => res.data).catch(err => {
        console.error(err)
        return 'Erro ao se comunicar com o servidor'
    })

    prompt.value = ''

    for (let i = 0; i < response.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        prompt.value += response.charAt(i);
    }

    isWriting.value = false
}

</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-4 space-y-4 bg-white rounded-lg shadow-lg">
            <div class="text-center">
                <h1 class="text-2xl font-bold text-blue-600">TristarAI</h1>
            </div>
            <hr>
            <div class="flex flex-col space-y-4">
                <div class="flex flex-col space-y-2">
                    <div class="flex flex-col items-stretch">
                        <label for="prompt" class="text-sm font-semibold" />
                        <textarea v-model="prompt" @keyup.enter="promptBoost" id="prompt" type="text" :disabled="isWriting"
                            class="w-full p-2 border border-gray-300 rounded-md min-h-[100px] max-h-[400px]" />
                        <Listbox v-model="selected" as="div" class="mt-1 relative">
                            <ListboxButton
                                class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-orange-500 sm:text-sm">
                                <span class="block truncate">Selecione uma opção</span>
                                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <ChevronUpDownIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>
                            <ListboxOptions
                                class="flex flex-col absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                <div class="hr-text">Boost</div>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left" @click="promptBoost">Melhore
                                        o Texto</button>
                                    <span class="text-green-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <ChevronDoubleUpIcon class="w-5 h-5" aria-hidden="true" />
                                    </span>
                                </ListboxOption>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left"
                                        @click="promptComplete">Complete o Texto</button>
                                    <span class="text-green-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <ChevronDoubleUpIcon class="w-5 h-5" aria-hidden="true" />
                                    </span>
                                </ListboxOption>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left"
                                        @click="promptSimplify">Simplifique o Texto</button>
                                    <span class="text-green-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <ChevronDoubleUpIcon class="w-5 h-5" aria-hidden="true" />
                                    </span>
                                </ListboxOption>
                                <div class="hr-text">Service</div>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left"
                                        @click="promptDocuments">Solicitar Documentos Faltantes</button>
                                    <span class="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <font-awesome-icon :icon="['fas', 'file']" class="w-5 h-5" aria-hidden="true"
                                            color="#0d3e56" />
                                    </span>
                                </ListboxOption>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left"
                                        @click="promptProvingValue">Solicitar Comprovação de Valor</button>
                                    <span class="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <font-awesome-icon :icon="['fas', 'dollar-sign']" class="w-5 h-5" aria-hidden="true"
                                            color="#0d3e56" />
                                    </span>
                                </ListboxOption>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left"
                                        @click="promptCPFIrregular">Solicitar Análise CPF Irregular</button>
                                    <span class="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <font-awesome-icon :icon="['fas', 'thumbs-down']" class="w-5 h-5" aria-hidden="true"
                                            color="#0d3e56" />
                                    </span>
                                </ListboxOption>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left"
                                        @click="promptUpdateShipment">Solicitar Atualização de Status</button>
                                    <span class="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <font-awesome-icon :icon="['fas', 'note-sticky']" class="w-5 h-5" aria-hidden="true"
                                            color="#0d3e56" />
                                    </span>
                                </ListboxOption>
                                <div class="hr-text">Traduzir</div>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left"
                                        @click="promptTranslateEnglish">Inglês</button>
                                    <span class="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <font-awesome-icon :icon="['fas', 'language']" class="w-5 h-5" aria-hidden="true"
                                            color="#0d3e56" />
                                    </span>
                                </ListboxOption>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left"
                                        @click="promptTranslateSpanish">Espanhol</button>
                                    <span class="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <font-awesome-icon :icon="['fas', 'language']" class="w-5 h-5" aria-hidden="true"
                                            color="#0d3e56" />
                                    </span>
                                </ListboxOption>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left"
                                        @click="promptTranslateRussian">Russo</button>
                                    <span class="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <font-awesome-icon :icon="['fas', 'language']" class="w-5 h-5" aria-hidden="true"
                                            color="#0d3e56" />
                                    </span>
                                </ListboxOption>
                                <ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4">
                                    <button class="font-normal block truncate w-full text-left"
                                        @click="promptTranslateGerman">Alemão</button>
                                    <span class="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-3">
                                        <font-awesome-icon :icon="['fas', 'language']" class="w-5 h-5" aria-hidden="true"
                                            color="#0d3e56" />
                                    </span>
                                </ListboxOption>
                            </ListboxOptions>

                        </Listbox>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.hr-text {
    display: flex;
    align-items: center;
    text-align: center;
    color: #999;
    font-weight: 400;
}

.hr-text::before,
.hr-text::after {
    content: "";
    flex: 1;
    border-bottom: 0.2px solid #999;
}

.hr-text::before {
    margin-right: .25em;
}

.hr-text::after {
    margin-left: .25em;
}
</style>