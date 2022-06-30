import create, { State } from 'zustand'


interface ComponentState {
  componentState: boolean
  changeState: () => void
};

const useComponentStore = create<ComponentState>()((set) => ({
  componentState: true,
  changeState: () => set((state) => ({ componentState: !state.componentState }))
}))


interface imageComponentState {
  imageComponentState: boolean
  source: string
  changeState: () => void
  changeSource: (newSource: string) => void
}


const useBackgroundStore = create<imageComponentState>()((set) => ({
  imageComponentState: true,
  changeState: () => set((state) => ({ imageComponentState: !state.imageComponentState })),
  source: 'https://is2.4chan.org/wg/1655090288638.jpg',
  changeSource: (newSource)=>set((state)=>({source: newSource}))
}));


interface Theme{
  theme:string,
  changeTheme: (newTheme:string)=>void,
  
}






export { useComponentStore, useBackgroundStore };