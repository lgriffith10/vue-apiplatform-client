import { defineStore } from "pinia";

import { Agent } from '@/entities/hero/types';

import { useGetHeroes } from '@/entities/hero/hooks'

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
        getAgentByUuid: (state: ValorantDataInterface) => (
            (agentUuid: Agent['uuid']) => state.agents.find((agent: Agent) => agentUuid === agent.uuid)
        )
    },
    actions: {
        setAgents() {
            if(this.agents.length) {
                return;
            }

            useGetHeroes()
                .then((data) => {
                    this.agents = data as Agent[];
                })
        }
    }
})
