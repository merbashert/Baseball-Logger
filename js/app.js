$(() => {
    $pitch = $('.list')

    //default pitch 1
    let pitchNumber = 1;

    //log the clicked on pitch to the pitch log and increment the pitch number
    $('.square').on("click", (event) => {
        const $currentPitch = $('<div>').appendTo($pitch).text(pitchNumber + '. ' + event.target.id).addClass('onePitch');
        pitchNumber++;
    })

    //Add a "BAT OVER" element to the pitch log and reset the pitch number
    $('.atBat').on('click', () => {
        $new = $('<div>').appendTo($pitch).text("--AT BAT OVER--").addClass('bat-over');
        pitchNumber = 1;
    })

    //clear pitch log
    $('.clear').on('click', () => {
        $pitch.text('')
        pitchNumber = 1;
    })

    //undo last clicked pitch
    $('.undo').on('click', () => {
        $(".onePitch:last-child").remove()
        if(pitchNumber != 1) {
            pitchNumber--;
        }
    })

    //random square generator
    $('.random').on("click", () => {
        let squareNumber = Math.floor(Math.random() * 8);
        switch(squareNumber) {
            case 1:
            randomSquare='upper-left';
            break;
            case 2:
            randomSquare='upper-center';
            break;
            case 3:
            randomSquare='upper-right';
            break;
            case 4:
            randomSquare='middle-left';
            break;
            case 5:
            randomSquare='middle-center';
            break;
            case 6:
            randomSquare='middle-right';
            break;
            case 7:
            randomSquare='lower-left';
            break;
            case 8:
            randomSquare='lower-center';
            break;
            case 9:
            randomSquare='lower-right';
            break;
        }

        //Grab the clicked square and add the class randomSquareHit to turn it red, wait 3ms, then remove the randomSquareHit class
        $('#' + randomSquare).addClass("randomSquareHit").delay(3000).queue(function(){$(this).removeClass('randomSquareHit')});
    })
})
