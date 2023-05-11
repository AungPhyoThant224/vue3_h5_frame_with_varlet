import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        counter: 0,
    }),

    getters: {
        getCount: (state) => {
            return state.counter;
        }
    },

    actions: {
        addCount(){
            this.counter++;
        },
        loseCount(){
            this.counter--;
        }
    }
})