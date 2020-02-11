interface Unit {
  name: string;
  damage: number[];
  health: number;
  armor?: number;
  mana?: number;
  alive?: boolean;
  activeSkill?(target: Unit): boolean;
  passiveSkill?(): boolean;
  attack?(target: Unit): void;
  getDamage?(damage: number): void;
}

function randomNumber(damage: number[]): number {
  let min: number = Math.ceil(damage[0]);
  let max: number = Math.floor(damage[1]);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Swordsman implements Unit {
  health: number = 500;
  name: string = "swordsman";
  damage: number[] = [20, 30];
  armor: number = 2;
  alive: boolean = true;
  attack(target: Unit): void {
    target.getDamage(randomNumber(this.damage));
  }
  getDamage(damage: number): void {
    this.health -= damage - this.armor;
    this.health <= 0 ? (this.alive = false) : false;
  }
}
class Archer implements Unit {
  health: number = 300;
  name: string = "archer";
  damage: number[] = [15, 20];
  mana: number = 100;
  alive: boolean = true;
  activeSkill(target: Unit): boolean {
    if (this.mana < 50) {
      return false
    } else {
      target.getDamage(100);
      this.mana -= 50;
    }
  }
  attack(target: Unit): void {
    target.getDamage(randomNumber(this.damage));
  }
  getDamage(damage: number): void {
    this.health -= damage;
    this.health <= 0 ? (this.alive = false) : false;
  }
}
class ArcherCaptain implements Unit {
  health: number = 600;
  name: string = "archerCaptain";
  damage: number[] = [30, 35];
  mana: number = 200;
  armor: number = 1;
  alive: boolean = true;
  activeSkill(target: Unit): boolean {
    if (this.mana < 50) {
      return false
    } else {
      target.getDamage(150);
      this.mana -= 50;
    }
  }
  attack(target: Unit): void {
    target.getDamage(randomNumber(this.damage));
  }
  getDamage(damage: number): void {
    this.health -= damage - this.armor;
    this.health <= 0 ? (this.alive = false) : false;
  }
}
class Skeleton implements Unit {
  health: number = 180;
  name: string = "skeleton";
  damage: number[] = [5, 8];
  armor: number = 1;
  damageMultiplier: number = 2;
  chance: number = 21;
  alive: boolean = true;
  passiveSkill(): boolean {
    let random = Math.random() * 100;
    if (random < this.chance) {
      return true;
    } else {
      return false;
    }
  }
  attack(target: Unit): void {
    this.passiveSkill()
      ? target.getDamage(randomNumber(this.damage) * this.damageMultiplier)
      : target.getDamage(randomNumber(this.damage));
  }
  getDamage(damage: number): void {
    this.health -= damage - this.armor;
    this.health <= 0 ? (this.alive = false) : false;
  }
}
class Paladin implements Unit {
  health: number = 700;
  name: string = "paladin";
  damage: number[] = [40, 50];
  armor: number = 5;
  mana: number = 300;
  damageMultiplier: number = 3;
  chance: number = 31;
  alive: boolean = true;
  passiveSkill(): boolean {
    let random = Math.random() * 100;
    if (random < this.chance) {
      return true;
    } else {
      return false;
    }
  }
  attack(target: Unit): void {
    this.passiveSkill()
      ? target.getDamage(randomNumber(this.damage) * this.damageMultiplier)
      : target.getDamage(randomNumber(this.damage));
  }
  getDamage(damage: number): void {
    this.health -= damage - this.armor;
    this.health <= 0 ? (this.alive = false) : false;
  }
}
export const swordsman = new Swordsman();
export const archer = new Archer();
export const archerCaptain = new ArcherCaptain();
export const skeleton = new Skeleton();
export const paladin = new Paladin();
