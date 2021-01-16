function 左轉 () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
}
function 右轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
}
function 後退 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
}
function 直線 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
}
function 停 () {
    maqueen.motorStop(maqueen.Motors.All)
}
basic.forever(function () {
    直線()
    basic.pause(1000)
    右轉()
    basic.pause(1000)
    左轉()
    basic.pause(1000)
})
