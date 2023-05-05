<template>
    <div class="container mx-auto my-[50px]">
        <h1 class="text-center text-[34px] font-bold text-blue-400 mb-[20px]">Liste des héros</h1>

        <div class="container mx-auto grid grid-cols-5 gap-[20px]">
            <router-link 
                v-for="agent in agents" 
                :key="agent.uuid" 
                :to="{ name: 'AgentView', params: { uuid: agent.uuid } }"
            >
                <AgentCard  :uuid="agent.uuid" />
            </router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue';

import { Agent } from '@/entities/hero/types';

import { useGetHeroes } from '@/entities/hero/hooks';
import { useValorantStore } from '@/store';

import { AgentCard } from '@/teams/agents';

const valorantStore = useValorantStore();

const agents: Ref<Agent[]> = ref([]);

onMounted(() => {
    if (valorantStore.getAgents?.length) {
        agents.value = valorantStore.getAgents;
        
    } else {
        useGetHeroes()
            .then((data: Agent[] | void) => {
                if (data?.length) {                    
                    valorantStore.setAgents(data);
                    agents.value = valorantStore.getAgents as Agent[];
                }
            })
        ;
    }
})
</script>
