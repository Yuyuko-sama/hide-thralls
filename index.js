'use strict'

module.exports = function HideThralls(mod) {

    const Thrall_IDs = [
        
		10235014, //精靈召喚：守護精靈 I  mystic:protection
		10235015, //精靈召喚：守護精靈 II （1）
		10235017, //精靈召喚：守護精靈 II （2）
		10235016, //精靈召喚：守護精靈 III
		10235004, //精靈召喚：守護精靈 IV
		10235005, //精靈召喚：守護精靈 V
		10235006, //精靈召喚：守護精靈 VI
		10235007, //精靈召喚：守護精靈 VII
		10235008, //精靈召喚：守護精靈 VIII
		10235009, //精靈召喚：守護精靈 IX
		10235010, //精靈召喚：守護精靈 X
		10235011, //精靈召喚：守護精靈 XI
		10235012, //精靈召喚：守護精靈 XII
		10235013, //精靈召喚：守護精靈 XIII
		
		10236001, //精靈召喚：生命精靈 I  mystic:life
		10236002, //精靈召喚：生命精靈 II
		10236003, //精靈召喚：生命精靈 III
		10236004, //精靈召喚：生命精靈 IV
		10236005, //精靈召喚：生命精靈 V
		10236006, //精靈召喚：生命精靈 VI
		10236007, //精靈召喚：生命精靈 VII
		10236008, //精靈召喚：生命精靈 VIII
		10236009, //精靈召喚：生命精靈 IX
		10236010, //精靈召喚：生命精靈 X
		10236011, //精靈召喚：生命精靈 XI
		10236012, //精靈召喚：生命精靈 XII
		10236013, //精靈召喚：生命精靈 XIII （1）
		10236014, //精靈召喚：生命精靈 XIII （2）
		10236015, //精靈召喚：生命精靈 XIV
		
		10237003, //召喚精靈：閃電精靈 I mystic:vengeance
		10237004, //召喚精靈：閃電精靈 II （1）
		10237015, //召喚精靈：閃電精靈 II （2）
		10237005, //召喚精靈：閃電精靈 III
		10237006, //召喚精靈：閃電精靈 IV
		10237007, //召喚精靈：閃電精靈 V
		10237008, //召喚精靈：閃電精靈 VI
		10237009, //召喚精靈：閃電精靈 VII
		10237010, //召喚精靈：閃電精靈 VIII
		10237011, //召喚精靈：閃電精靈 IX
		10237012, //召喚精靈：閃電精靈 X
		10237013, //召喚精靈：閃電精靈 XI
		10237014, //召喚精靈：閃電精靈 XII
		10237015, //召喚精靈：閃電精靈 XV
		
		10238001, //召喚精靈：破壞精靈 I mystic:wrath
		10238002, //召喚精靈：破壞精靈 II （1）
		10238008, //召喚精靈：破壞精靈 II （2）
		10238003, //召喚精靈：破壞精靈 III
		10238004, //召喚精靈：破壞精靈 IV
		10238005, //召喚精靈：破壞精靈 V
		10238006, //召喚精靈：破壞精靈 VI
		10238007, //召喚精靈：破壞精靈 VII
		10238008, //召喚精靈：破壞精靈 VIII
		
		10239003,  //召喚元素王 mystic:lord
		
		30301001,  //設置哨兵塔 I gunner:sentry gun
		30301002,  //設置哨兵塔 II
		30301003,  //設置哨兵塔 III
		30301004,  //設置哨兵塔 IV
		
		30302001,  //機器人出擊 I（1）（2） gunner:robot
		30302002,  //機器人出擊 II （1）（2）
		30302003,  //機器人出擊 III （1）（2）
		30302004,  //機器人出擊 IV （1）（2）
		30302005,  //機器人出擊 V （1）（2）
		30302006,  //機器人出擊 VI （1）（2）
		30302007,  //機器人出擊 VII （1）（2）
		
		12345,  //後方移動術 ninja:Decoy Jutsu I
		
		2010100,  //變換影子 I worrior:Smoke Flanker I
		2010101, //變換影子 II worrior:Smoke Flanker II
		
		1010100, //影分身 I worrior:Smoke Aggressor II
		1010101 //影分身 II worrior:Smoke Aggressor II

    ];
	const BLOCKED_CLASSES = ['elementalist'];//, 'priest'
	const HuntingZone_ID = 1023;
	const BlockHuntingZone_ID = [110, 111, 112 , 113 , 114 , 115 , 116 , 117 , 118 , 110 ,7031];
	let enabled = true;

	mod.hook('S_SPAWN_NPC', 9, (event) => {
        if (!enabled || BLOCKED_CLASSES.includes(mod.game.me.class) || BlockHuntingZone_ID.includes(mod.game.me.zone) || BLOCKED_CLASSES.includes(mod.game.me.class)) return;
        if (Thrall_IDs.includes(event.templateId) && event.huntingZoneId == HuntingZone_ID) return false;
    })
    mod.command.add('hide', ()=> {
        enabled = !enabled;
        mod.command.message('(hide-thralls) ' + (enabled ? 'enabled' : 'disabled'));
    });
}
