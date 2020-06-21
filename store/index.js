import uuid from "uuid/dist/v4"

export const state = () => ({
    members: [
        {
            name: "Laith",
            email: "laith@hotmail.com",
            role: "Front-end Developer",
            id: 1
        },
        {
            name: "Zoe",
            email: "Zoe@hotmail.com",
            role: "Front-end Developer",
            id: 2
        },
        {
            name: "Chloe",
            email: "chloe@hotmail.com",
            role: "Back-end Developer",
            id: 3
        },
        {
            name: "Chris",
            email: "Chris@hotmail.com",
            role: "Tech Lead", 
            id: 4
        }
    ],
    teams: []
})


export const mutations = {
    addUser(state, payload){
        let newUser = {
            ...payload,
            id: uuid()
        }
        state.members.push(newUser)
    },
    addTeams(state, payload){
        state.teams = payload
    },
    removeUser(state, id){
        console.log(id)
        state.members = state.members.filter(member => member.id != id)
    }
}


export const getters = {
    getUserById: (state) => (id) => {
        return state.members.find(member => member.id == id)
    } 
}


