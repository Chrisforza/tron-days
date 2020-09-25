namespace SpriteKind {
    export const Upgrade = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Input_Choice == 2) {
        Flappy_Goose.ay = 300
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Input_Choice == 0) {
        Flappy_Goose.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Upgrade, function (sprite, otherSprite) {
    if (Upgrade_Choice == 1) {
        Input_Choice = 1
        Flappy_Goose.destroy()
        Flappy_Goose = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            e . . . . . . . e e . . . . . . 
            e e . . . . . . e e . . . . . . 
            e e . . . . . e e e . . . . . . 
            e e e . . e e e e . . . . . . . 
            e e e e d d e e e . f f f . . . 
            . e e e d d d e e f f f f f f f 
            . e d d 1 1 d d d f f 1 1 f 2 . 
            . e d d 1 1 1 d f f . . 1 f f f 
            . d 1 1 1 1 1 d f f . . . . . . 
            . e e 1 1 d e e . . . . . . . . 
            . e . . . . . e . . . . . . . . 
            e e e . . . e e e . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        Upgrade.destroy()
        game.showLongText("Hold button B to use jetpack!", DialogLayout.Bottom)
    } else {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Input_Choice == 2) {
        Flappy_Goose.ay = -300
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Lives = Lives - 1
    Input_Choice = 0
    Flappy_Goose.destroy()
    Flappy_Goose = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        e . . . . . . . e e . . . . . . 
        e e . . . . . . e e . . . . . . 
        e e . . . . . e e e . . . . . . 
        e e e . . e e e e . . . . . . . 
        e e e e d d e e e . f f f . . . 
        . e e e d d d e e f f f f f f f 
        . e d d 1 1 d d d f f 1 1 f 2 . 
        . e d d 1 1 1 d f f . . 1 f f f 
        . d 1 1 1 1 1 d f f . . . . . . 
        . e e 1 1 d e e . . . . . . . . 
        . e . . . . . e . . . . . . . . 
        e e e . . . e e e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
let ObstacleY = 0
let ObstacleX = 0
let Obstacle: Sprite = null
let Obstacle_Choice = 0
let Upgrade: Sprite = null
let Upgrade_Choice = 0
let Flappy_Goose: Sprite = null
let Lives = 0
let Input_Choice = 0
Input_Choice = 0
let time = 0
Lives = 1
info.setScore(0)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999ddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999ddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999ddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999ddddddddddddddddddddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999999d99999999999999999999d9999999999999999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996d66666666666666d66666dd66666666666d999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996dd666666666666dd666666d6666666666dd999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd99999999999999999999999999999999999999999999999999999966dd6666666666dd6666666dd666666666d6999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd999999999999999999999999999999999999999999999999999999666dd66666666dd666666666d66666666dd6999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996666d6666666dd6666666666dd666666dd66999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd99999999999999999999999999999999999999999999999999999966666dd66666d666666666666ddd6666d666999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd99999999999999999999999999999999999999999999999999999966666ddddddd66666666666666ddddddd666999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd99999999999999999999999999999999999999999999999999999966666d666666d666666666666d666666d666999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996666dd666666dd6666666666dd6666666d66999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd999999999999999999999999999999999999999999999999999999666dd666666666d66666666dd66666666dd6999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996ddd6666666666dd6666666d6666666666d6999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996d6666666666666dddddddd66666666666dd999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996d666666666666dd6666666d66666666666d999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996d666666666666d66666666d6666666666dd999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996dd6666666666dd666666666d666666666d6999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd99999999999999999999999999999999999999999999999999999966dd666666666d6666666666dd6666666dd6999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd999999999999999999999999999999999999999999999999999999666dd6666666dd66666666666d6666666d66999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996666dd666666d666666666666ddd6666dd66999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd99999999999999999999999999999999999999999999999999999966666dddddddd66666666666666dddddd666999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999999999999999999999999999999999999999999996666dd666666dd666666666666dd666dd666999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd999999999999999999999999999999999999999999999999999999666dd66666666d66666666666dd66666d666999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd999999999999999666666666666666666666666666666666666666666d666666666dd6666666666d666666dd66999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999996666666666666666666666666666666666666666ddd6666666666dd6666666dd66666666d66999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999996666666666666666666666666666666666666666d6666666666666d6666666d666666666dd6999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd9999999999999996666666666666666666666666666666666666666dd666666666666dddddddd66666666666dd999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd99999999999999966666666666666666666666666666666666666666d66666666666dd666666d666666666666dd99999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd99999999999999966666666666666666666666666666666666666666dd666666666dd6666666dd66666666666d999999999999999999999999
    99999ddfddfddfddfddfddfddfddfddfddfddfddfddfdd999999999999999666666666666666666666666666666666666666666dd66666666d666666666dd666666666d6999999999999999999999999
    99999ddddddddddddddddddddddddddddddddddddddddd9999999999999996666666666666666666666666666666666666666666d6666666dd6666666666dd66666666d6999999999999999999999999
    99999ddddddddddddddddddddddddddddddddddddddddd99999999999999966666666666666666666666666666666666dddddddddddddddddddddddddddddddddddddd66999999999999999999999999
    99999ddddddddddddddddddddddddddddddddddddddddd99999999999999966666666666666666666666666666666666dddddddddddddddddddddddddddddddddddddd66999999999999999999999999
    999999999111111111111111111111111111111999999999999999999999966666666666666666666666666666666666ddddddddddddddddddddddddddddddddddddd666999999999999999999999999
    999999999111111111111111111111111111111999999999999999999999966666666666666666666666666666666666dddddddddddddddddddddddddddddddddddddd66999999999999999999999999
    999999999111111111111111111111111111111999999999999999999999966666666666666666666666666666666666ddddddddddddddddddddddddddddddddddddddd6999999999999999999999999
    9999999ddddddddddddddddddddddddddddddddddd999999999999999999966666666666666666666666666666666666ddddddddddddddddddddddddddddddddddddd6d6999999999999999999999999
    9999999ddddddddddddddddddddddddddddddddddd999999999999999999966666666666666666666666666666666666ddddddddddddddddddddddddddddddddddddd6dd999999999999999999999999
    9999999ddfddfddfddfddfddfddfddfddfddfddfdd99999999999999999999999f9999999999999999999999999999f9ddddddddddddddddddddddddddddddddddddd999999999999999999999999999
    9999999ddddddddddddddddddddddddddddddddddd99999999999999999999999f9999999999999999999999999999f9ddddddddddddddddddddddddddddddddddddd999999999999999999999999999
    9999999ddddddddddddddddddddddddddddddddddd99999999999999999999999f9999999999999999999999999999f9ddddddddddddddddddddddddddddddddddddd999999999999999999999999999
    99999999999111111111111111111111111111999999999999999999999999999f9999999999999999999999999999f9ddddddddddddddddddddddddddddddddddddd999999999999999999999999999
    99999999999111111111111111111111111111999999999999999999999999999f9999999999999999999999999999f9ddddddddddddddddddddddddddddddddddddd999999999999999999999999999
    99999999999111111111111111111111111111999999999999999999999999999f9999999999999999999999999999f999999f99999999999999999999999999f9999999999999999999999999999999
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f5555555555555555ffffffff555555555555555ffffffff555555555555555555fffffffff555555555555555555ffffffffff555555555555555ffffffffff5555555555555555ffffff5555555555
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
Flappy_Goose = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    e . . . . . . . e e . . . . . . 
    e e . . . . . . e e . . . . . . 
    e e . . . . . e e e . . . . . . 
    e e e . . e e e e . . . . . . . 
    e e e e d d e e e . f f f . . . 
    . e e e d d d e e f f f f f f f 
    . e d d 1 1 d d d f f 1 1 f 2 . 
    . e d d 1 1 1 d f f . . 1 f f f 
    . d 1 1 1 1 1 d f f . . . . . . 
    . e e 1 1 d e e . . . . . . . . 
    . e . . . . . e . . . . . . . . 
    e e e . . . e e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Flappy_Goose.ay = 300
game.onUpdateInterval(1000, function () {
    Obstacle_Choice = randint(1, 6)
    if (Obstacle_Choice == 1) {
        Obstacle = sprites.create(img`
            ...cccccccccccccccccc...
            ..cbddddddddddddddddbc..
            .cddddddddddddddddddddc.
            .cddbbbbbbbbbbbbbbbbddc.
            .cdbbbbbbbbbbbbbbbbbbdc.
            .cdbbbbbbbbbbbbbbbbbbdc.
            cbbbccccccccccccccccbbbc
            cddcbddddddddddddddbcddc
            cddcddddddddddddddddcddc
            cddcddddddddddddddddcddc
            cddcddddddddddddddddcddc
            cbdcddddddddddddddddcdbc
            ccbbbbbbbbbbbbbbbbbbbbcc
            ccbbbbbbbbbbbbbbbbbbbbcc
            cccccccccccccccccccccccc
            ..cbbc............cbbc..
            `, SpriteKind.Enemy)
        ObstacleX = 200
        ObstacleY = 80
    } else if (Obstacle_Choice == 2) {
        Obstacle = sprites.create(img`
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67eeee....
            ......ee6eeeeee6cef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......eeeeeeeeeeecf.....
            ......eeeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67ee......
            ......ee6eeeeee6ce......
            ......eefeeeeeeece......
            ......eeceeeeeeece......
            ......eeceeeeeeefe......
            ......eeceeeeeeefe......
            ......eeeeeeeeeefe......
            ......eeeeeeeeeece......
            .....6eeeeeeeeeece6.....
            ....6776eeeeeeeee676....
            ...6776666eeee6766776...
            ..6776ee77777777667776..
            ...668ce7768867788666...
            ......ce77eeee67ee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......beeeeeeeeeeb......
            .......beeeeeeeeb.......
            ........beeeeeeb........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        ObstacleX = 200
        ObstacleY = 60
    } else if (Obstacle_Choice == 3) {
        Obstacle = sprites.create(img`
            ........................
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff..........
            .ffefbf44fbfeff.........
            .fee41fddf14eef.........
            fdfeeddddd4eff..........
            fbffee444edd4e..........
            fbf4f2222edde...........
            fcf.f22cccee............
            .ff.f44cdc4f............
            ....fffddcff............
            .....fddcff.............
            ....cddc................
            ....cdc.................
            ....cc..................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        ObstacleX = 200
        ObstacleY = 90
    } else if (Obstacle_Choice == 4) {
        Obstacle = sprites.create(img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f f 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e d d 4 . 
            . . f 1 1 1 1 e d d e . 
            . f f 6 6 6 6 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `, SpriteKind.Enemy)
        ObstacleX = 200
        ObstacleY = 90
    } else if (Obstacle_Choice == 5) {
        Obstacle = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 2 2 . . 
            . . . . . 2 c 2 2 2 2 2 2 4 2 . 
            . . . . 2 c c 2 2 2 2 2 2 4 c 2 
            . . d 2 4 c c 2 4 4 4 4 4 4 c c 
            . d 2 2 4 c b e e e e e e e 2 c 
            . 2 2 2 4 b e e b b b e b b e 2 
            . 2 2 2 2 2 e b b b b e b b b e 
            . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
            . 2 d d 2 e f e e e f e e e e e 
            . d d 2 e e e f e e f e e e e e 
            . e e e e e e e f f f e e e e e 
            . e e e e f f f e e e e f f f f 
            . . . e f f f f f e e f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        ObstacleX = 200
        ObstacleY = 110
    } else if (Obstacle_Choice == 6) {
        Obstacle = sprites.create(img`
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 b c 5 5 d 4 c . . 
            . b b b b 5 5 5 b f d d 4 4 4 b 
            . b d 5 b 5 5 b c b 4 4 4 4 b . 
            . . b 5 5 b 5 5 5 4 4 4 4 b . . 
            . . b d 5 5 b 5 5 5 5 5 5 b . . 
            . b d b 5 5 5 d 5 5 5 5 5 5 b . 
            b d d c d 5 5 b 5 5 5 5 5 5 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Enemy)
        ObstacleX = 200
        ObstacleY = 10
    } else {
    	
    }
    Obstacle.x = ObstacleX
    Obstacle.y = ObstacleY
    Obstacle.setVelocity(-45, 0)
})
forever(function () {
    if (Input_Choice == 1 && controller.B.isPressed()) {
        Flappy_Goose.ay = 300
        Flappy_Goose.vy = -75
    }
})
forever(function () {
    pause(1000)
    info.changeScoreBy(1)
    time = time + 1
    Flappy_Goose.setFlag(SpriteFlag.StayInScreen, true)
    if (Lives < 1) {
        game.over(false)
    }
})
forever(function () {
    Upgrade.setVelocity(-10, Math.cos(time) * 40)
})
game.onUpdateInterval(20000, function () {
    if (0 == 0) {
        Upgrade_Choice = 1
        if (Upgrade_Choice == 1) {
            Upgrade = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . d d d d d d d d d d d d . . 
                . . d f f f d d d d f f f d . . 
                . . d f f f d d d d f f f d . . 
                . . d f f f d d d d f f f d . . 
                . . d f f f d d d d f f f d . . 
                . . d f f f d d d d f f f d . . 
                . . d f f f d d d d f f f d . . 
                . . d f f f d d d d f f f d . . 
                . . . f f f . . . . f f f . . . 
                . . . 2 4 2 . . . . 2 4 2 . . . 
                . . . 4 4 2 . . . . 4 4 4 . . . 
                . . . . 2 . . . . . 4 2 2 . . . 
                . . . . . . . . . . . 2 . . . . 
                `, SpriteKind.Upgrade)
        } else {
        	
        }
        Upgrade.x = 200
        Upgrade.y = 50
    }
})
