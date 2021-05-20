let player;
function Player(classType,health,mana,strength,agility,speed,img) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
    this.img = img;
}

let PlayerMoves = {
    calcAttack: function() {
        //attack first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
            //player attacks
        let playerAttack = function() {
            let calcBaseDamage;
            if (player.mana>0) {
                calcBaseDamage = player.strength*player.mana /100;
            } else {
                calcBaseDamage = player.strength;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility/10)/2)+1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues
        }
        //enemy attacks
        let enemyAttack = function() {
            let calcBaseDamage;
            if (enemy.mana>0) {
                calcBaseDamage = enemy.strength*enemy.mana /100;
            } else {
                calcBaseDamage = enemy.strength;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility/10)/2)+1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues
        }
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        //initiate attacks
        if(getPlayerSpeed>=getEnemySpeed){
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("you hit" + playerAttackValues[0]+"damage"+playerAttackValues[1]+"times");
            if(enemy.health<=0){
                alert("you win")
                getPlayerHealth.innerHTML = 'Health: '+ player.health;
                getEnemyHealth.innerHTML = 'health: 0'
            }else{
                getEnemyHealth.innerHTML = 'health: ' + enemy.health;
                //enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("enemy hit" + enemyAttackValues[0]+"damage"+enemyAttackValues[1]+"times");
                if(player.health<=0){
                    alert("you lost")
                    getEnemyHealth.innerHTML = 'Health: '+ enemy.health;
                    getPlayerHealth.innerHTML = 'health: 0'
                }else{
                    getPlayersHealth.innerHTML = 'Health: '+ player.health
                }
            }
        }

    }
}