input.onButtonPressed(Button.A, function () {
    led.setBrightness(255)
    basic.showString("i love you mom")
    music.play(music.createSoundExpression(WaveShape.Noise, 500, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.AB, function () {
    led.setBrightness(255)
    basic.showString("i love you dad")
    music.play(music.createSoundExpression(WaveShape.Noise, 500, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sword)
    basic.pause(2000)
    basic.showString("hello brian")
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Angry)
    basic.showString("don't do that !!!!!!!")
})
