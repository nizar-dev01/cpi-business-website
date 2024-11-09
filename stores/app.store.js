import {
	defineStore
} from 'pinia'

export const useAppStore = defineStore('app', {
	state: () => ({
		hasInitiated: false,
		cursorState: "default",
		pageScrollPosition: {
			home: {
				x: 0,
				y: 0
			}
		},
		activeSliderIndex: 0,
		pageThemeSelector: null
	}),
	actions: {
		initiate (v) {
			this.hasInitiated = true
		},
		setCursorState (value) {
			this.cursorState = value || "default"
		},
		setPageScrollPosition (page, y, x = 0) {
			if (this.pageScrollPosition[page]) {
				this.pageScrollPosition[page].y = y
				this.pageScrollPosition[page].x = x
			}
		},
		setActiveSliderIndex (index) {
			this.activeSliderIndex = index
		},
		setPageThemeSelector (selector) {
			this.pageThemeSelector = selector
		}
	},
	getters: {
		pageTheme: s => s.pageThemeSelector === 'yellow' ? '#FFB400' : 'white'
	}
})