// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const app = new Vue({
	el: '#root',
	data: {
		slides,
		index: 0,
		autoSlide: ''

	},
	methods: {
		prevSlide() {
			// clearInterval(this.autoSlide)
			if (this.index === 0) {
				this.index = this.slides.length - 1
			} else {
				this.index--
			}
		},
		nextSlide() {
			// clearInterval(this.autoSlide)
			if (this.index === this.slides.length - 1) {
				this.index = 0
			} else {
				this.index++
			}
		},
		autoNext(){
			this.autoSlide = setInterval(this.nextSlide, 1000);

		},
		pause(){
			clearInterval(this.autoSlide)
		}
	},
	mounted: function () {
		this.autoNext()
	}

})
