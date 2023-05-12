radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    a(1)
})
function a (_1: number) {
    servos.P2.setAngle(90)
    basic.pause(3000)
    servos.P2.setAngle(0)
    basic.pause(3000)
}
radio.setGroup(1)
game.setLife(3)
game.setScore(0)
game.startCountdown(120000)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        game.addScore(10)
        game.addLife(1)
        a(1)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        game.addScore(1000000)
        game.removeLife(1000000000000000)
    }
})
basic.forever(function () {
    radio.sendNumber(game.score())
    if (game.score() != 0) {
        basic.showNumber(game.score())
    } else if (game.isGameOver()) {
    	
    }
    if (input.buttonIsPressed(Button.A)) {
        game.pause()
    } else if (input.buttonIsPressed(Button.B)) {
        game.resume()
    }
})
