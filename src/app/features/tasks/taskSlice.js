import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        task: "task 1",
        description: "task Description 1",
        status: false
    },
    {
        id: "2",
        task: "task 2",
        description: "task Description 2",
        status: false
    }
]

export const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state, action)=>{
            state.push(action.payload)
        },
        editTask:(state,action)=>{
            const {id,task,description} = action.payload
            const foundtask = state.find(tarea => tarea.id === id)
            if (foundtask) {
                foundtask.task = task,
                foundtask.description = description
            }
        },
        deleteTask:(state, action)=>{
           const taskfound = state.find(task => task.id === action.payload)
           if (taskfound) {
            state.splice(state.indexOf(taskfound),1)
           }
        }
        
    }
})

export const {deleteTask,addTask,editTask} = taskSlice.actions

export default taskSlice.reducer