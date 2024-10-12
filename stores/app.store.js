import {
	defineStore
} from 'pinia'

export const useAppStore = defineStore('app', {
	state: () => ({
		hasInitiated: false,
	}),
	actions: {
		initiate (v) {
			this.hasInitiated = true
		}
	},
})