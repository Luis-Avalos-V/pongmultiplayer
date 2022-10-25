namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.vx = 0 - otherSprite.vx
    if (sprite == Player_1) {
        otherSprite.left = sprite.right
        info.changeScoreBy(1)
    } else {
        otherSprite.left = sprite.right
        info.player2.changeScoreBy(1)
    }
})
function create_ball () {
    point = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball)
    point.setBounceOnWall(true)
    point.setVelocity(80, 80)
}
function walls () {
    Player_1 = sprites.create(img`
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        `, SpriteKind.Player)
    controller.player1.moveSprite(Player_1, 0, 100)
    Player_1.x = 0
    Player_1.setStayInScreen(true)
    info.setScore(0)
    Player_2 = sprites.create(img`
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        8 8 8 8 8 . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(Player_2, 0, 100)
    Player_2.x = scene.screenWidth()
    Player_2.setStayInScreen(true)
    info.player2.setScore(0)
}
let Player_2: Sprite = null
let point: Sprite = null
let Player_1: Sprite = null
walls()
create_ball()
