def on_logo_pressed():
    game.add_score(10)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def a(_1: number):
    basic.pause(3000)
    servos.P2.set_angle(90)
    basic.pause(3000)
    servos.P2.set_angle(0)
game.set_life(3)
game.set_score(0)
game.start_countdown(120000)

def on_forever():
    if input.pin_is_pressed(TouchPin.P0):
        game.add_score(10)
        game.add_life(1)
        a(1)
    elif input.pin_is_pressed(TouchPin.P1):
        game.add_score(-20)
        game.remove_life(1)
basic.forever(on_forever)

def on_forever2():
    if game.score() != 0:
        basic.show_number(game.score())
    elif game.is_game_over():
        pass
    if input.button_is_pressed(Button.A):
        game.pause()
    elif input.button_is_pressed(Button.B):
        game.resume()
    elif game.score() >= 20:
        a(1)
basic.forever(on_forever2)
