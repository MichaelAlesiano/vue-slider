let app = new Vue({

  el: '#app',
  data: {
    counter: 0,
    slideShow: '',
    src: [
      'img/image1.jpg',
      'img/image2.jpg',
      'img/image3.jpg',
      'img/image4.jpg'
    ]
  },
  methods: {
    movePrev() {
      (this.counter == 0) ? this.counter = this.src.length - 1 :
      this.counter --;
    },
    moveNext() {
      (this.counter == this.src.length - 1) ? this.counter = 0 :
      this.counter ++;
    },
    changeImg(indice) {
      this.counter = indice;
    }
  }
});
