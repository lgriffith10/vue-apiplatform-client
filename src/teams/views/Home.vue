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
import { ComputedRef, computed } from 'vue';

import { useValorantStore } from '@/store';

import { AgentCard } from '@/teams/agents';
import { Agent } from '@/entities/hero/types';

const valorantStore = useValorantStore();

const agents: ComputedRef<Agent[]> = computed(() => 
    valorantStore.getAgents as Agent[]
)
</script>
