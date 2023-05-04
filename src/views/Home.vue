<template>
    <div class="container mx-auto mt-[50px]">
        <div v-for="agent in agents">
            test
            {{ agent.uuid }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue';

import { Agent } from '@/entities/hero/types';

import { useGetHeroes } from '@/entities/hero/hooks';
import { useValorantStore } from '@/store';

const valorantStore = useValorantStore();

const agents: Ref<Agent[]> = ref([]);

onMounted(() => {
    if (valorantStore.getAgents.length) {
        agents.value = valorantStore.getAgents;
        
    } else {
        useGetHeroes()
            .then((data: Agent[] | void) => {
                if (data?.length) {
                    valorantStore.setAgents(data['hydra:member']);
                }
            })
        ;
    }
})
</script>
