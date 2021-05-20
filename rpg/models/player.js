const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const playerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: 'Guest'
    },
    characters: {
        char: {
            type: String,
            default: 'Alex'
        },
        skill: {
            type: String,
            default: 'Defence'
        },
        hp: {
            type: Number,
            default: 100
        },
        atk: {
            type: Number,
            default: 10
        },
        def: {
            type: Number,
            default: 10
        }
    },
    stats: {
        attack: {
            type: Number,
            default: 100
        },
        defence: {
            type: Number,
            default: 100
        },
        health: {
            type: Number,
            default: 1000
        }
    },
    progress: {
        experience: {
            type: Number,
            default: 0
        },
        area: {
            type: Number,
            default: 1
        },
        level: {
            type: Number,
            default: 1
        },
    },
    inventory: {
        weapon: {
            type: String,
            default: 'Nil'
        },
        defence: {
            type: String,
            default: 'Nil'
        },
        gold: {
            type: Number,
            default: 1000
        },
        gems: {
            type: Number,
            default: 10
        },
        daimonds: {
            type: Number,
            default: 5
        },
        food: {
            apple: {
                type: Number,
                default: 5
            },
            bread: {
                type: Number,
                default: 5
            },
            steak: {
                type: Number,
                default: 5
            },
            chicken: {
                type: Number,
                default: 5
            }
        },
        potions: {
            type: Number,
            default: 10
        }
    }
});

const Player = mongoose.model('Player',playerSchema);
module.exports = Player;
