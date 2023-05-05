import { defineStore } from "pinia";

import { Agent } from '@/entities/hero/types';

import { useGetHeroes } from '@/entities/hero/hooks'
import { AxiosResponse } from "axios";

interface ValorantDataInterface {
    agents: Agent[],
}

export const useValorantStore = defineStore('valorant', {
    state: (): ValorantDataInterface => ({
        agents: []
    }),
    getters: {
        getAgents: (state: ValorantDataInterface) => {
            if (state.agents.length) {
                return state.agents            
            } else {
                useGetHeroes()
                    .then((data) => {
                        state.agents = data as Agent[];
                    }).then(() => 
                        state.agents
                    )               
            }
        },
        getAgentByUuid: (state) => (
            (agentUuid: Agent['uuid']) => state.agents.find((agent: Agent) => agentUuid === agent.uuid)
        )
    },
    actions: {
        setAgents(agents: Agent[]) {
            this.agents = agents;
        }
    }
})
