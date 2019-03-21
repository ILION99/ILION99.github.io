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
        moveBee(h,k);
    });
    var line = draw.line(50,0, 50,60).move(x+75, y+85);
    line.stroke({ color: 'green', width: 5, linecap: 'round' });
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
function moveBee(h,k){
    body.move(h,k);
    line1.move(h+20,k+3);
    line2.move(h+40,k+3);
    eye.move(h+5,k+8);
    wing1.move(h+15, k-25);
    wing2.move(h+25, k-25);
}

function addNumbersAndProduct(num1, num2) {
    var sum = num1 + num2;
    var product = num1 * num2;
    return {
        sum: sum,
        product: product,
    };
}

var output = addNumbers(1, 2);
console.log(output.sum);
console.log(output.product);
 




