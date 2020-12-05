input.onButtonPressed(Button.A, function () {
    ShowSaber()
})
function HideSaber () {
    music.playMelody("C G F E D C5 G - ", 120)
    SaberUp = 0
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    HideSaber()
})
input.onGesture(Gesture.Shake, function () {
    SaberUp += 1
    SaberUp = SaberUp % 2
    if (SaberUp == 1) {
        ShowSaber()
    } else {
        HideSaber()
    }
})
function ShowSaber () {
    music.playMelody("C G F E D C5 G - ", 120)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    SaberUp = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
}
let SaberUp = 0
ShowSaber()
HideSaber()
SaberUp = 0
