module.exports = (render) => {
	return function (state, emitter) {
		state.events.RESIZE = 'resize'

		if (typeof window !== 'undefined') {
			window.addEventListener("resize", function (e) {
				emitter.emit(state.events.RESIZE)
				if (render) emitter.emit(state.events.RENDER)
			})
		} else {
			// todo server side
		}
	}
}
