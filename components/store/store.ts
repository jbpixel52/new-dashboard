import create from 'zustand'


type State = {
  componentState: boolean,
  changeState: () => void,
};


const useStore = create<State>((set) => ({
  componentState: true,
  changeState: () => set((state) => ({ componentState: !state.componentState })),

}));


export default useStore;