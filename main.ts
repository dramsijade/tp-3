basic.forever(function () {
    if (input.acceleration(Dimension.X) < -200) {
        if (true) {
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . . #
                `)
        } else if (input.acceleration(Dimension.X) < 200) {
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                # . . . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
    } else if (false) {
    	
    } else {
    	
    }
})
