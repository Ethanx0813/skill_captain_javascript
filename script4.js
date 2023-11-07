function rectangle(width,height) {
    this.width = width;
    this.height = height;
    this.area = function() {
        return this.width*this.height;
    }
     
}
let myRectangle = new rectangle(2,3);
let area = myRectangle.area();
console.log("the area of rectangle is " + area);