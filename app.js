$(() => {
    $pitch = $('.list')

    $('.square').on("click", (event) => {
        const $currentPitch = $('<div>').appendTo($pitch).text(event.target.id).addClass('onePitch')
    })

    $('.atBat').on('click', () => {
        $new = $('<div>').appendTo($pitch).text("--AT BAT OVER--").addClass('bat-over')
    })


    $('.clear').on('click', () => {
        $pitch.text('')
    })

    $('.button').on("click", () => {
    let squareNumber = Math.floor(Math.random() * 8);
    if (squareNumber === 1) {
        randomSquare='upper-left'
    } else if (squareNumber === 2) {
        randomSquare='upper-center'
    } else if (squareNumber === 3) {
        randomSquare='upper-right'
    } else if (squareNumber === 4) {
        randomSquare='middle-left'
    } else if (squareNumber === 5) {
        randomSquare='middle-center'
    } else if (squareNumber === 6) {
        randomSquare='middle-right'
    } else if (squareNumber === 7) {
        randomSquare='lower-left'
    } else if (squareNumber === 8) {
        randomSquare='lower-center'
    } else if (squareNumber === 9) {
        randomSquare='lower-right'
    }

    $('#' + randomSquare).addClass("randomSquareHit").delay(3000).queue(function(){$(this).removeClass('randomSquareHit')});
})
})
