const {
  swordsman,
  archer,
  archerCaptain,
  skeleton,
  paladin
} = require("./units.js");
const HPTest = (swordsman, archer, archerCaptain, skeleton, paladin) => {
  if (
    swordsman.health === 500 &&
    archer.health === 300 &&
    archerCaptain.health === 600 &&
    skeleton.health === 180 &&
    paladin.health === 700
  ) {
    return `HP test correct`;
  } else {
    return false;
  }
};
const DamageTest = (swordsman, archer, archerCaptain, skeleton, paladin) => {
  if (
    swordsman.damage[0] === 20 &&
    swordsman.damage[1] === 30 &&
    archer.damage[0] === 15 &&
    archer.damage[1] === 20 &&
    archerCaptain.damage[0] === 30 &&
    archerCaptain.damage[1] === 35 &&
    skeleton.damage[0] === 5 &&
    skeleton.damage[1] === 8 &&
    paladin.damage[0] === 40 &&
    paladin.damage[1] === 50
  ) {
    return `Damage test correct`;
  } else {
    return false;
  }
};
const ArmorTest = (swordsman, archer, archerCaptain, skeleton, paladin) => {
  if (
    swordsman.armor === 2 &&
    !archer.armor &&
    archerCaptain.armor === 1 &&
    skeleton.armor === 1 &&
    paladin.armor === 5
  ) {
    return `Armor test correct`;
  } else {
    return false;
  }
};
const ManaTest = (swordsman, archer, archerCaptain, skeleton, paladin) => {
  if (
    !swordsman.mana &&
    archer.mana === 100 &&
    archerCaptain.mana === 200 &&
    !skeleton.mana &&
    paladin.mana === 300
  ) {
    return `Mana test correct`;
  } else {
    return false;
  }
};
const SkeletonHasCritTest = skeleton => {
  const critEvents = [];
  for (let i = 0; i <= 1000000; i++) {
    if (skeleton.passiveSkill()) {
      critEvents.push("critStrike");
    }
  }
  if (critEvents.length >= 200000 && skeleton.damageMultiplier === 2) {
    return `SkeletonHasCritTest is correct`;
  } else {
    return false;
  }
};
const PaladinHasCritTest = paladin => {
  const critEvents = [];
  for (let i = 0; i <= 1000000; i++) {
    if (paladin.passiveSkill()) {
      critEvents.push("critStrike");
    }
  }
  if (critEvents.length >= 300000 && paladin.damageMultiplier === 3) {
    return `PaladinHasCritTest is correct`;
  } else {
    return false;
  }
};
const ArcherShotTest = (archer, target) => {
  const initMana = archer.mana;
  const initHP = target.health;
  archer.activeSkill(target);
  if (archer.mana === initMana - 50 && target.health >= initHP - 100) {
    archer.mana = initMana;
    target.health = initHP;
    return `AcherShotTest is correct`;
  } else {
    return false;
  }
};
const ArcherCaptainShotTest = (archerCaptain, target) => {
  const initMana = archerCaptain.mana;
  const initHP = target.health;
  archerCaptain.activeSkill(target);
  if (archerCaptain.mana === initMana - 50 && target.health >= initHP - 150) {
    archerCaptain.mana = initMana;
    target.health = initHP;
    return `AcherCaptainShotTest is correct`;
  } else {
    return false;
  }
};
const CriticalStrikeTest = (skeleton, swordsman) => {
  const initHP = swordsman.health;
  const initArmor = swordsman.armor;
  swordsman.armor = 0;
  const minDamage = skeleton.damage[0];
  let critStrike = false;
  for (let i = 1; i <= 100; i++) {
    skeleton.attack(swordsman);
    if (initHP - swordsman.health >= minDamage * 2) {
      swordsman.health = initHP;
      swordsman.armor = initArmor;
      critStrike = true;
    } else {
      swordsman.health = initHP;
      swordsman.armor = initArmor;
    }
  }
  if (critStrike) {
    return `CriticalStrikeTest is correct`;
  } else {
    return false;
  }
};
const ArmorWorksTest = (swordsman, archerCaptain, skeleton, paladin) => {
  const initHPSw = swordsman.health;
  const initHPAc = archerCaptain.health;
  const initHPSk = skeleton.health;
  const initHPPa = paladin.health;
  swordsman.getDamage(100);
  archerCaptain.getDamage(100);
  skeleton.getDamage(100);
  paladin.getDamage(100);
  if (
    initHPSw - swordsman.health !== 100 &&
    initHPAc - archerCaptain.health !== 100 &&
    initHPSk - skeleton.health !== 100 &&
    initHPPa - paladin.health !== 100
  ) {
    swordsman.health = initHPSw;
    archerCaptain.health = initHPAc;
    skeleton.health = initHPSk;
    paladin.health = initHPPa;
    return `ArmorWorksTest is correct`;
  } else {
    return false;
  }
};
const DeadTest = (swordsman, archer, archerCaptain, skeleton, paladin) => {
  const initHPSw = swordsman.health;
  const initHPAr = archer.health;
  const initHPAc = archerCaptain.health;
  const initHPSk = skeleton.health;
  const initHPPa = paladin.health;
  swordsman.getDamage(1000);
  archer.getDamage(1000);
  archerCaptain.getDamage(1000);
  skeleton.getDamage(1000);
  paladin.getDamage(1000);
  if (
    !swordsman.alive &&
    !archer.alive &&
    !archerCaptain.alive &&
    !skeleton.alive &&
    !paladin.alive
  ) {
    swordsman.health = initHPSw;
    archer.health = initHPAr;
    archerCaptain.health = initHPAc;
    skeleton.health = initHPSk;
    paladin.health = initHPPa;
    swordsman.alive = true;
    archer.alive = true;
    archerCaptain.alive = true;
    skeleton.alive = true;
    paladin.alive = true;
    return `DeadTest is correct`;
  } else {
    return false;
  }
};
const NoManaTest = (archer, archerCaptain) => {
  const initManaAr = archer.mana;
  const initManaAc = archerCaptain.mana;
  archer.mana = 49;
  archerCaptain.mana = 49;
  if (
    !archer.activeSkill(archerCaptain) &&
    !archerCaptain.activeSkill(archer)
  ) {
    archer.mana = initManaAr;
    archerCaptain.mana = initManaAc;
    return `NoManaTest is correct`;
  } else {
    return false;
  }
};
console.log(HPTest(swordsman, archer, archerCaptain, skeleton, paladin));
console.log(DamageTest(swordsman, archer, archerCaptain, skeleton, paladin));
console.log(ArmorTest(swordsman, archer, archerCaptain, skeleton, paladin));
console.log(ManaTest(swordsman, archer, archerCaptain, skeleton, paladin));
console.log(SkeletonHasCritTest(skeleton));
console.log(PaladinHasCritTest(paladin));
console.log(ArcherShotTest(archer, swordsman));
console.log(ArcherCaptainShotTest(archerCaptain, swordsman));
console.log(CriticalStrikeTest(skeleton, swordsman));
console.log(ArmorWorksTest(swordsman, archerCaptain, skeleton, paladin));
console.log(DeadTest(swordsman, archer, archerCaptain, skeleton, paladin));
console.log(NoManaTest(archer, archerCaptain));
