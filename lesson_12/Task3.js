'use strict';

{
  const rectangle = {
    width: 5,
    height: 5,
    get rectSquare() {
      return `${this.width * this.height} см`;
    },
    get rectPerime() {
      return `${2 * (this.width + this.height)} см`;
    },
    set rectWidth(val) {
      this.width = val;
    },
    set rectHeight(val) {
      this.height = val;
    },
  };
  console.log(rectangle.rectPerime);
}
