console.log('GO WORK!!!');
    var draw = SVG('workSpace').size(600, 600);
    let heigth=50;
    let width=25;
    let color="none";
    function drawblock(color,posX,posY){
        var block = draw.rect(heigth,width);
        block.fill(color);
        block.move(posX,posY);
        block.stroke("black");
    }
    for(let i=0; i<9;i++){
        let s=i*50;
        drawblock("brown",s+80,575);
    }
    for(let i=0; i<8;i++){
        let s=i*50;
        drawblock("red",s+105,550);
    }
    for(let i=0; i<7;i++){
        let s=i*50;
        drawblock("orange",s+130,525);
    }
    for(let i=0; i<6;i++){
        let s=i*50;
        drawblock("yellow",s+155,500);
    }
    for(let i=0; i<5;i++){
        let s=i*50;
        drawblock("lime",s+180,475);
    }
    for(let i=0; i<4;i++){
        let s=i*50;
        drawblock("green",s+205,450);
    }
    for(let i=0; i<3;i++){
        let s=i*50;
        drawblock("blue",s+230,425);
    }
    for(let i=0; i<2;i++){
        let s=i*50;
        drawblock("purple",s+255,400);
    }
    drawblock("gold",280,375);
    var polygon = draw.polygon('0,0 40,40 100,0 60,40 100,100 60,60 0,100 40,60');
    polygon.fill('cyan').move(250,140);
    var line = draw.line(305,375, 305,200);
    line.stroke({ color: 'cyan', width: 15,});
