import create, { State } from 'zustand'

interface ThemeInterface{
    state: boolean
    changeState:()=>void
    primaryColor: string
    secondaryColor: string
    changePColor: (newColor:string)=>void
}

const useTheme =  create<ThemeInterface>()((set)=>({
    state: true,
    changeState: ()=>set((state)=>({state: !state.state})),
    primaryColor:'#fffa',
    secondaryColor: '#fffa2',
    changePColor: (newColor)=>set((state)=>({primaryColor:newColor}))
}))

export  {useTheme};