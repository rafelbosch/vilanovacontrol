function Coreografia () {
    coreografia_part = 11
    part1()
    coreografia_part = 12
    Part2()
    coreografia_part = 13
    radio.sendString("C" + convertToText(coreografia_part))
    part1()
    coreografia_part = 14
    Part3()
    coreografia_part = 15
    radio.sendString("C" + convertToText(coreografia_part))
    par4()
    coreografia_part = 16
    part5()
    coreografia_part = 17
    radio.sendString("C" + convertToText(coreografia_part))
    par4()
    coreografia_part = 18
    part6()
    coreografia_part = 21
    radio.sendString("C" + convertToText(coreografia_part))
    part1()
    coreografia_part = 22
    Part2()
    coreografia_part = 23
    part1()
    coreografia_part = 24
    Part3()
    coreografia_part = 25
    radio.sendString("C" + convertToText(coreografia_part))
    par4()
    coreografia_part = 26
    part5()
    coreografia_part = 27
    par4()
    coreografia_part = 28
    part6()
    coreografia_part = 31
    radio.sendString("C" + convertToText(coreografia_part))
    part1()
    coreografia_part = 32
    radio.sendString("C" + convertToText(coreografia_part))
    Part2()
    coreografia_part = 33
    part1()
    coreografia_part = 34
    radio.sendString("C" + convertToText(coreografia_part))
    Part3()
    coreografia_part = 35
    radio.sendString("C" + convertToText(coreografia_part))
    par4()
    coreografia_part = 36
    part5()
    coreografia_part = 37
    radio.sendString("C" + convertToText(coreografia_part))
    par4()
    coreografia_part = 38
    radio.sendString("C" + convertToText(coreografia_part))
    part6_llarc()
    radio.sendString("fi")
}
function part5 () {
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    music.setVolume(204)
    Coreografia()
})
function part6 () {
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function par4 () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(740, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function part6_llarc () {
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Double))
    music.playTone(784, music.beat(BeatFraction.Double))
}
function Part2 () {
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
}
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 2; index++) {
        for (let index2 = 0; index2 <= 7; index2++) {
            coreografia_part = index * 10 + index2 + 11
            radio.sendString("C" + convertToText(coreografia_part))
            basic.pause(4900)
        }
    }
    radio.sendString("fi")
})
function Part3 () {
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
function part1 () {
    music.setTempo(140)
    music.setVolume(169)
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
let coreografia_part = 0
let cont = 0
radio.setGroup(100)
basic.showLeds(`
    . . # # .
    . # . . .
    . # . . .
    . # . . .
    . . # # .
    `)
