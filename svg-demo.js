    console.log('hello Im working');
    let draw= SVG('drawing').size(480, 480);
    let rectWit=200;
    let rectHei=200;
    let rect= draw.rect(rectWit, rectHei).fill('purple');
    let x=0;
    let y=0;
    let rectDirection = 'rigth';
    let moveDis = 20;

    document.getElementById('move-rectangle-button').onclick =function(){
    console.log('move rectangle');

    function moveRectangle (direction){
        if(rectDirection == 'rigth'){
            x=x+moveDis;
            y=y+moveDis;
            rect.move(x,y);
    
        }else if(rectDirection == 'left'){
            x=x-moveDis;
            y=y-moveDis;
            rect.move(x,y);
        }else{
            console.error('Error moving rectangle, the direction was' + rectDirection);
        }

    }

    if(x > 480-rectWit){
        //normal case - we want to move down and to the rigth.
        console.log('moving down and to the rigth');
        rectDirection = 'left'; 
    }else if(x<0){
        console.log('moving to the left');
        rectDirection = 'rigth';
    }
    moveRectangle('rigth');

    


    }

