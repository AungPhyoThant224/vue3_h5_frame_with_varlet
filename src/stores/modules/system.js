import { defineStore } from "pinia";

export const systemStore = defineStore({
    id: 'System',
    state: () => ({
        lang: localStorage.getItem('lang') || 'en',
    }),

    getters: {
        getLang: ( state ) => {
            return state.lang;
        }
    },

    actions: {

        /**
         * SET LANGUAGE TO LOCAL STORAGE
         * @param {String} lang - eg. 'en' 
         */
        setLang(lang){
            localStorage.setItem('lang', lang);
        }
    }
})