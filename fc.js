    console.log('GO WORK!!!');
    var draw = SVG('workSpace').size(600, 600);


    function flower(x,y){
        var polygon = draw.polygon('0,0 40,40 100,0 60,40 100,100 60,60 0,100 40,60');
    polygon.fill('red').move(x+20, y+20);

    var line = draw.line(50,0, 50,60).move(x+75, y+85);
    line.stroke({ color: 'green', width: 5, linecap: 'round' });
    var rect = draw.circle(10).fill('yellow').move(x+65, y+65)
}
flower(0,0);
flower(220,0);
flower(440,0);
flower(0,220);
flower(220,220);
flower(440,220);
flower(0,440);
flower(220,440);
flower(440,440);

    var ellipse = draw.ellipse(60, 40).fill('orange').move(145, 145);
    var line1 = draw.line(20,3, 20,37).move(165,148);
    line1.stroke({ color: 'black', width: 5, linecap: 'round' });
    var line2 = draw.line(20,3, 20,37).move(185,148);
    line2.stroke({ color: 'black', width: 5, linecap: 'round' });



