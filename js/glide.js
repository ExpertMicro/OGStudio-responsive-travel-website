import Glide from '@glidejs/glide';
const config = {
  type: 'carousel',
  perView: 3,
  breakpoints: {
		1400: {
			perView: 2
		},
    950: {
			perView: 1
		}
	}
}

new Glide(".glide", config).mount();
//new Glide(".glide-carousel-testimonials", config).mount();