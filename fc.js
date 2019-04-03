    console.log('GO WORK!!!');
    var draw = SVG('workSpace').size(600, 600);


    let h=0;
    let k=0;

function flower(x,y){
    var polygon = draw.polygon('0,0 40,40 100,0 60,40 100,100 60,60 0,100 40,60');
    polygon.fill('red').move(x+20, y+20);
    var cen = draw.circle(15).fill('yellow').move(x+63, y+63);
    cen.click(function() {
        h=x+63;
        k=y+63;
        bee(h,k);
    });
    var line = draw.line(50,0, 50,60).move(x+75, y+85);
    line.stroke({ color: 'green', width: 5, linecap: 'round' });
}
for(let i=0; i<=440; i+=220){
    for(let j=0; j<=440; j+=220){
    flower(i,j);
    }
}


function bee(a,b){
    var body = draw.ellipse(60, 40).fill('orange').move(a+145,b+145);
    var line1 = draw.line(20,3, 20,37).move(a+165,b+148);
    line1.stroke({ color: 'black', width: 5, linecap: 'round' });
    var line2 = draw.line(20,3, 20,37).move(a+185,b+148);
    line2.stroke({ color: 'black', width: 5, linecap: 'round' });
    var eye = draw.circle(10).fill('lightblue').move(a+150,b+153);
    var wing1 = draw.ellipse(15, 30).fill('cyan').move(a+160,b+120);
    var wing2 = draw.ellipse(15, 30).fill('cyan').move(a+170,b+120);
}
bee(h,k);