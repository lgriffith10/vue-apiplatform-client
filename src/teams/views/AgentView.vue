<template>
    <div class="container mx-auto my-[50px]" v-loading="agent ? false : true">
        <div v-if="agent">
            test
            <div class="grid grid-cols-12 ">
                <div class="col-span-3">
                    <img :src="agent.image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { Agent } from '@/entities/hero/types';
import { useValorantStore } from '@/store';
import { useRoute } from 'vue-router';

const valorantStore = useValorantStore();

const route = useRoute();

const agentUuid = computed<Agent['uuid']>(() => 
    route.params.uuid as Agent['uuid']
)

const agent = computed<Agent>(() =>
    valorantStore.getAgentByUuid(agentUuid.value) as Agent
)
</script>