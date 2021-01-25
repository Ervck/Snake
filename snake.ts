class Snake {

private currentPosition: number;
private currentDirection: number;
  constructor() {
    this.currentPosition = 0;
    this.currentDirection = 1;

  }

public move(pos:number) {
   display("The Snake Slithers Sinisterly");
   if (this.currentDirection == 1) {this.currentPosition + pos, display("The snake has moved foward by: ", pos, "space.");}
   else {this.currentPosition - pos, display("The snake has moved backwards by: ", pos, "space.");}

  }
public turn(dir:number) {
   if (this.currentDirection == 1) {this.currentDirection - 2, display("The Snake Whips It's Tail, Turning Backward. ");}
   else {this.currentDirection + 2, display("The Snake Whips It's Tail, Turning Foward. ");}

}


public get position() {
 return this.currentPosition;
}

}

export default Snake;
