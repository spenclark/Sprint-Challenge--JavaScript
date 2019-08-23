class CubeClass{
   constructor(attr) {
    this.length = attr.length;
    this.width = attr.length;
    this.height = attr.height;
    }
    volume() {
        return this.length * this.width * this.height;
      };
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
      };
  };

const aNewCube = new CuboidMaker({
    length: 4,
    width: 4,
    height: 4,
  });

console.log(aNewCube.volume()); // 100
console.log(aNewCube.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CubeClass{
    constructor(attrs){
        super(attrs);
    }
    volume() {
        return aNewCube.length *  aNewCube.width *  aNewCube.height;
      };
    surfaceArea(){
        return 2 * ( aNewCube.length *  aNewCube.width +  aNewCube.length *  aNewCube.height +  aNewCube.width *  aNewCube.height)
      };
}

const newCube = new CubeMaker({
    
  });

  console.log(newCube.volume()); // 100
console.log(newCube.surfaceArea())