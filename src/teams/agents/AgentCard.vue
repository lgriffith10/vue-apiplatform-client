<template>
    <div class="w-full flex flex-col gap-y-[20px] bg-gray-100 rounded">
        <img class="w-full" :src="agent.image" />
        <div class=" px-[10px] pb-[10px] flex justify-between items-center w-full">
            <p class="text-[20px]">{{ agent.displayName }}</p>
            <img :src="agent.roleImg" class="max-w-[30px]" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType , computed } from 'vue';

import { Agent } from '@/entities/hero/types';
import { useValorantStore } from '@/store';

const valorantStore = useValorantStore();

const props = defineProps({
    uuid: String as PropType<Agent['uuid']>
});

const agent = computed<Agent>(() =>
    valorantStore.getAgentByUuid(props.uuid as string) as Agent
)
</script>
