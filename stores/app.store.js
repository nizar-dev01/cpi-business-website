import {
	defineStore
} from 'pinia'

export const useAppStore = defineStore('app', {
	state: () => ({
		hasInitiated: false,
		cursorState: "default"
	}),
	actions: {
		initiate (v) {
			this.hasInitiated = true
		},
		setCursorState (value) {
			this.cursorState = value || "default"
		}
	},
})