const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.Browser,
		C3.Behaviors.solid,
		C3.Plugins.Touch,
		C3.Behaviors.EightDir,
		C3.Plugins.Spritefont2,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.fps,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.EightDir.Acts.SimulateControl
	];
};
self.C3_JsPropNameTable = [
	{frames: 0},
	{tactil: 0},
	{Navegador: 0},
	{Sólido: 0},
	{bloqueo: 0},
	{ControlTáctil: 0},
	{"8Direcciones": 0},
	{jugador: 0},
	{Sprite: 0},
	{FuenteSprite: 0}
];

self.InstanceType = {
	frames: class extends self.ITextInstance {},
	tactil: class extends self.ISpriteInstance {},
	Navegador: class extends self.IInstance {},
	bloqueo: class extends self.ISpriteInstance {},
	ControlTáctil: class extends self.IInstance {},
	jugador: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	FuenteSprite: class extends self.ISpriteFontInstance {}
}