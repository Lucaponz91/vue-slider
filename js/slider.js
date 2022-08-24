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

	},
	methods:{
		prevSlide() {
			
		},
		nextSlide(){
			if (this.index === this.slides.length - 1) {
				this.index = 0} else {
					this.index++
				}

			
		}
	}
    
})
