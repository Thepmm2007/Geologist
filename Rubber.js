class Rubber{
    constructor(x,y){
        var options={
            restitution:0.3,
            density:1,
            friction:5
        };
        this.body=Bodies.elipse(x,y,55,55,options);
        this.width=55;
        this.height=55;
        World.add(world,this.body);

    }
}