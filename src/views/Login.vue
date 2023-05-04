<template>
    <div class="h-full flex flex-col justify-center gap-y-[30px] items-center">
        <h1 class="text-[34px] text-blue-400 font-medium">Connexion</h1>

        <div class="flex flex-col gap-y-[20px]">
            <el-alert v-if="error" :title="error" type="error" />

            <el-input
                v-model="input"
                placeholder="Entrez un email"
            />
            <el-input
                v-model="password"
                type="password"
                placeholder="Entrez un mot de passe"
                show-password
            />

            <el-button type="primary" class="text-blue-400" @click="handleSubmit">Envoyer</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useGetToken } from '@/entities/user/hooks'; 
import { router } from '@/router';

const input: Ref<string> = ref('');
const password: Ref<string> = ref('');


const error: Ref<string> = ref('');

const handleSubmit = async () => {
    useGetToken(input.value, password.value)
        .then((response) => {
            if (200 === response) {
                router.push('/')
            } 
        })
        .catch(() => {
            error.value = 'Bad credentials, please try again'
        })
    ;
};
</script>
