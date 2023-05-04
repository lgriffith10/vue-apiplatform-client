export interface Agent {
    id: number,
    uuid: string,
    displayName: string,
    description: string,
    roleName: string,
    roleImg: string,
    image: string
}

export type GetAgent = Pick<Agent, 'uuid'>
