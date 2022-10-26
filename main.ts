namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const player1 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    currentball.vx = -1 * currentball.vx
    currentball.vy = -2 * currentball.vx
    info.player1.changeScoreBy(1)
    pause(200)
    otherSprite.setFlag(SpriteFlag.Ghost, false)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.player1, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    currentball.vx = -1 * currentball.vx
    currentball.vy = -2 * currentball.vx
    info.player1.changeScoreBy(1)
    pause(200)
    otherSprite.setFlag(SpriteFlag.Ghost, false)
})
let currentball: Sprite = null
let Player_1 = sprites.create(img`
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
let Player_2 = sprites.create(img`
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
    `, SpriteKind.player1)
controller.player2.moveSprite(Player_2, 0, 100)
Player_2.x = scene.screenWidth()
Player_2.setStayInScreen(true)
info.player2.setScore(0)
currentball = sprites.create(img`
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
if (Math.percentChance(50)) {
    currentball.vx = -50
    currentball.vy = randint(-50, 50)
} else {
    currentball.vx = 75
    currentball.vy = randint(-50, 50)
}
game.onUpdate(function () {
    if (currentball.y <= 0) {
        currentball.y = 0
        currentball.vy = currentball.vy * -1
    } else if (currentball.y >= scene.screenHeight()) {
        currentball.y = scene.screenHeight()
        currentball.vy += currentball.vy * -1
    }
    if (currentball.x <= 0) {
        info.player2.changeScoreBy(1)
        currentball.setFlag(SpriteFlag.DestroyOnWall, true)
        currentball.destroy()
        currentball.x = 0
        game.reset()
    } else if (currentball.x >= scene.screenWidth()) {
        info.player1.changeScoreBy(1)
        currentball.setFlag(SpriteFlag.DestroyOnWall, true)
        currentball.destroy()
        game.reset()
    }
})
