import { useCounterStore } from "./counter";
import { systemStore } from "./system";
import { createPinia, storeToRefs } from "pinia";

/**
 * EXPORT useAppStore OBJECT FOR USING ACTION FROM ALL STORES
 */
const pinia = createPinia();
export const useAppStore = {
  counterStore: useCounterStore(pinia),
  systemStore: systemStore(pinia),
};

/**
 * EXPORT get AppStore OBJECT FOR USING STATE FROM ALL STORES
 */
export const getAppStore = {
  counterStore: storeToRefs(useCounterStore(pinia)),
  systemStore: storeToRefs(systemStore(pinia)),
};
