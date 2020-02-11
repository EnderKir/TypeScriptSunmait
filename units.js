"use strict";
exports.__esModule = true;
function randomNumber(damage) {
    var min = Math.ceil(damage[0]);
    var max = Math.floor(damage[1]);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var Swordsman = /** @class */ (function () {
    function Swordsman() {
        this.health = 500;
        this.name = "swordsman";
        this.damage = [20, 30];
        this.armor = 2;
        this.alive = true;
    }
    Swordsman.prototype.attack = function (target) {
        target.getDamage(randomNumber(this.damage));
    };
    Swordsman.prototype.getDamage = function (damage) {
        this.health -= damage - this.armor;
        this.health <= 0 ? (this.alive = false) : false;
    };
    return Swordsman;
}());
var Archer = /** @class */ (function () {
    function Archer() {
        this.health = 300;
        this.name = "archer";
        this.damage = [15, 20];
        this.mana = 100;
        this.alive = true;
    }
    Archer.prototype.activeSkill = function (target) {
        if (this.mana < 50) {
            return false;
        }
        else {
            target.getDamage(100);
            this.mana -= 50;
        }
    };
    Archer.prototype.attack = function (target) {
        target.getDamage(randomNumber(this.damage));
    };
    Archer.prototype.getDamage = function (damage) {
        this.health -= damage;
        this.health <= 0 ? (this.alive = false) : false;
    };
    return Archer;
}());
var ArcherCaptain = /** @class */ (function () {
    function ArcherCaptain() {
        this.health = 600;
        this.name = "archerCaptain";
        this.damage = [30, 35];
        this.mana = 200;
        this.armor = 1;
        this.alive = true;
    }
    ArcherCaptain.prototype.activeSkill = function (target) {
        if (this.mana < 50) {
            return false;
        }
        else {
            target.getDamage(150);
            this.mana -= 50;
        }
    };
    ArcherCaptain.prototype.attack = function (target) {
        target.getDamage(randomNumber(this.damage));
    };
    ArcherCaptain.prototype.getDamage = function (damage) {
        this.health -= damage - this.armor;
        this.health <= 0 ? (this.alive = false) : false;
    };
    return ArcherCaptain;
}());
var Skeleton = /** @class */ (function () {
    function Skeleton() {
        this.health = 180;
        this.name = "skeleton";
        this.damage = [5, 8];
        this.armor = 1;
        this.damageMultiplier = 2;
        this.chance = 21;
        this.alive = true;
    }
    Skeleton.prototype.passiveSkill = function () {
        var random = Math.random() * 100;
        if (random < this.chance) {
            return true;
        }
        else {
            return false;
        }
    };
    Skeleton.prototype.attack = function (target) {
        this.passiveSkill()
            ? target.getDamage(randomNumber(this.damage) * this.damageMultiplier)
            : target.getDamage(randomNumber(this.damage));
    };
    Skeleton.prototype.getDamage = function (damage) {
        this.health -= damage - this.armor;
        this.health <= 0 ? (this.alive = false) : false;
    };
    return Skeleton;
}());
var Paladin = /** @class */ (function () {
    function Paladin() {
        this.health = 700;
        this.name = "paladin";
        this.damage = [40, 50];
        this.armor = 5;
        this.mana = 300;
        this.damageMultiplier = 3;
        this.chance = 31;
        this.alive = true;
    }
    Paladin.prototype.passiveSkill = function () {
        var random = Math.random() * 100;
        if (random < this.chance) {
            return true;
        }
        else {
            return false;
        }
    };
    Paladin.prototype.attack = function (target) {
        this.passiveSkill()
            ? target.getDamage(randomNumber(this.damage) * this.damageMultiplier)
            : target.getDamage(randomNumber(this.damage));
    };
    Paladin.prototype.getDamage = function (damage) {
        this.health -= damage - this.armor;
        this.health <= 0 ? (this.alive = false) : false;
    };
    return Paladin;
}());
exports.swordsman = new Swordsman();
exports.archer = new Archer();
exports.archerCaptain = new ArcherCaptain();
exports.skeleton = new Skeleton();
exports.paladin = new Paladin();
