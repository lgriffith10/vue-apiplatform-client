import { defineStore } from "pinia";

import { Agent } from '@/entities/hero/types';

interface ValorantDataInterface {
    agents: Agent[],
}

export const useValorantStore = defineStore('valorant', {
    state: (): ValorantDataInterface => ({
        agents: []
    }),
    getters: {
        getAgents: (state: ValorantDataInterface) => state.agents,
        getAgentByUuid: (state) => (
            (agentUuid: Agent['uuid']) => state.agents.find((agent: Agent) => agent.uuid = agentUuid)
        )
    },
    actions: {
        setAgents(agents: Agent[]) {
            this.agents = agents;
        }
    }
})
