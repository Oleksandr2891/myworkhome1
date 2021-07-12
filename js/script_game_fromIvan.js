// 'use strict';
// ​
// const config = {
//     baseLevelUp: 100,
//     expByMove: 10,
//     confLevel: 1.1,
//     chanceRegHP: 5,
//     chanceRegMP: 30,
//     amountChanceRegHP: [1, 11],
//     amountChanceRegMP: [1, 5]
// }
// ​
// class Hero {
//     #baseHP;
//     #baseMP;
//     #level = 1;
//     #exp = 0;
//     #stats = {
//         rip: 0,
//         kills: 0,
//         amountRegHP: 0,
//         amountRegMP: 0,
//         amountRegHPSkill: 0,
//         amountRegMPSkill: 0,
//         amountProduceDmg: 0,
//         amountGetDmg: 0
//     };
//     #HP;
//     #MP;
//     #attacks;
// ​
//     constructor(name, HP, MP, attacks) {
//         this.name = name;
//         this.baseHP = HP;
//         this.baseMP = MP;
// ​
//         this.HP = this.baseHP;
//         this.MP = this.baseMP;
// ​
//         this.#attacks = attacks;
// ​
//     }
// ​
//     get baseMP() {
//         return this.#baseMP;
//     }
// ​
//     set baseMP(value) {
//         this.#baseMP = value;
//     }
// ​
//     get baseHP() {
//         return this.#baseHP;
//     }
// ​
//     set baseHP(value) {
//         this.#baseHP = value;
//     }
// ​
//     get MP() {
//         return this.#MP;
//     }
// ​
//     set MP(value) {
//         this.#MP = value;
//     }
// ​
//     get HP() {
//         return this.#HP;
//     }
// ​
//     set HP(value) {
//         this.#HP = value;
//     }
// ​
//     get dmg() {
//         const availAttacks = [];
//         for (const attack of this.#attacks) {
//             if (this.MP >= attack.manaCost)
//                 availAttacks.push(attack);
//         }
//         if (!availAttacks.length) return false;
// ​
//         return availAttacks[randomInt(0, availAttacks.length)];
//     }
// ​
//     produceDmg(attack) {
//         this.regHP();
// ​
//         this.MP -= attack.manaCost;
//         this.levelUp();
// ​
//         if (attack.dmg > 0)
//             this.#stats.amountProduceDmg += attack.dmg;
//     }
// ​
//     set dmg(hero) {
//         const attack = hero.dmg;
// ​
//         if (!attack) return false;
// ​
//         if ((attack.dmg < 0 && this.constructor.name !== hero.constructor.name) ||
//             (attack.dmg > 0 && this.constructor.name === hero.constructor.name))
//             return false;
// ​
//         hero.produceDmg(attack);
//         let dmg = attack.dmg;
// ​
//         if ((this.HP - dmg) > 0) {
//             this.regMP();
// ​
//             if ((this.HP - dmg) > this.baseHP)
//                 dmg = this.baseHP - this.HP;
// ​
//             if (dmg < 0) this.#stats.amountRegHPSkill += dmg * -1;
//             else this.#stats.amountGetDmg += dmg;
// ​
//             this.HP -= dmg;
//         } else {
//             hero.getFrag();
//             this.rip();
//         }
//     }
// ​
//     getFrag() {
//         this.#stats.kills++;
//     }
// ​
//     readStat() {
//         return this.#stats;
//     }
// ​
//     readExp() {
//         return { exp: this.#exp, level: this.#level }
//     }
// ​
//     readInfo() {
//         return {
//             name: this.name,
//             HP: this.HP,
//             MP: this.MP,
//             level: this.#level,
//             exp: this.#exp,
//             baseHP: this.baseHP,
//             baseMP: this.baseMP
//         };
//     }
// ​
//     rip() {
//         this.#stats.rip++;
// ​
//         this.#exp = parseInt(this.#exp / 2);
// ​
//         this.HP = this.baseHP;
//         this.MP = this.baseMP;
//     }
// ​
//     regHP() {
//         if (Math.random() > 1 - (config.chanceRegHP / 100)) {
//             const percentHPReg = randomInt(...config.amountChanceRegHP) / 100;
//             let countRegHP = parseInt(percentHPReg * this.baseHP);
// ​
//             if ((countRegHP + this.HP) > this.baseHP)
//                 countRegHP = this.baseHP - this.HP;
// ​
//             this.HP += countRegHP;
// ​
//             this.#stats.amountRegHP += countRegHP;
//         }
//     }
// ​
//     regMP() {
//         if (Math.random() > 1 - (config.chanceRegMP / 100)) {
//             const percentMPReg = randomInt(...config.amountChanceRegMP) / 100;
//             let countRegMP = parseInt(percentMPReg * this.baseMP);
// ​
//             if ((countRegMP + this.MP) >= this.baseMP)
//                 countRegMP = this.baseMP - this.MP;
// ​
//             this.MP += countRegMP;
// ​
//             this.#stats.amountRegMP += countRegMP;
//         }
//     }
// ​
//     levelUp() {
//         this.#exp += config.expByMove;
// ​
//         if (this.#exp >= config.baseLevelUp * this.#level) {
//             this.#level++;
//             this.#exp = 0;
// ​
//             this.baseHP = parseInt(this.baseHP * config.confLevel);
//             this.baseMP = parseInt(this.baseMP * config.confLevel);
// ​
//             this.MP = this.baseMP;
//             this.HP = this.baseHP;
//         }
//     }
// ​
// }
// ​
// class Attack {
//     constructor(name, dmg, manaCost) {
//         this.name = name;
//         this.dmg = dmg;
//         this.manaCost = manaCost;
//     }
// }
// ​
// class Elf extends Hero {
//     constructor(name) {
//         super(name, 1500, 2500, [
//             new Attack('es1', 150, 200),
//             new Attack('es2', 80, 100),
//             new Attack('es3', -100, 150),
//             new Attack('es4', 70, 50)
//         ]);
//     }
// }
// ​
// class Orc extends Hero {
//     constructor(name) {
//         super(name, 3000, 1000, [
//             new Attack('os1', 75, 80),
//             new Attack('os2', 60, 90),
//             new Attack('os3', -70, 100),
//             new Attack('os4', 50, 25)
//         ]);
//     }
// }
// ​
// class Human extends Hero {
//     constructor(name) {
//         super(name, 2000, 1500, [
//             new Attack('hs1', 100, 100),
//             new Attack('hs2', 70, 70),
//             new Attack('hs3', -60, 60),
//             new Attack('hs4', 70, 50)
//         ]);
//     }
// ​
// }
// ​
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
// ​
// const elfs = [];
// for (let i = 0; i < 10; i++)
//     elfs.push(new Elf('Bill_' + (i + 1)));
// ​
// const orcs = [];
// for (let i = 0; i < 10; i++)
//     orcs.push(new Orc('Rexxar_' + (i + 1)));
// ​
// const humans = [];
// for (let i = 0; i < 10; i++)
//     humans.push(new Human('Jhony_' + (i + 1)));
// ​
// const arrHero = [elfs, orcs, humans];
// ​
// for (let i = 0; i < 1000000; i++) {
//     const frac1Index = randomInt(0, arrHero.length);
//     const frac2Index = randomInt(0, arrHero.length);
// ​
//     const hero1Index = randomInt(0, arrHero[frac1Index].length);
//     const hero2Index = randomInt(0, arrHero[frac2Index].length);
// ​
//     arrHero[frac1Index][hero1Index].dmg = arrHero[frac2Index][hero2Index];
// }
// ​
// for (const frac of arrHero)
//     for (const hero of frac)
//         console.log(hero.constructor.name, hero.readInfo(), hero.readStat());