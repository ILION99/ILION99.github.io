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
    let x=80;
    let y=575;

    for(let k=9; k>=1; k--){
      for(let i=0; i<k; i++){
        let s=i*50;
        drawblock("lime",s+x,y);
      }
      x+=25;
      y-=25;
    }
    
    var polygon = draw.polygon('0,0 40,40 100,0 60,40 100,100 60,60 0,100 40,60');
    polygon.fill('cyan').move(250,140);
    var line = draw.line(305,375, 305,200);
    line.stroke({ color: 'cyan', width: 15,});
