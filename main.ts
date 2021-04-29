sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
scene.setBackgroundColor(13)
let Kenny = sprites.create(assets.image`Kenny`, SpriteKind.Player)
controller.moveSprite(Kenny)
let donut = sprites.create(assets.image`donut`, SpriteKind.Food)
