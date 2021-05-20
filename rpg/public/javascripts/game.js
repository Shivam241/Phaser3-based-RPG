let Game = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();

    },
    resetPlayer: function(classType) {
        let getPlayer = document.querySelector(".player");

        switch (classType) {
            case 'Warrior':
                player = new Player(classType,  80, 10, 50, 50,200 ,"https://e7.pngegg.com/pngimages/998/877/png-clipart-dungeons-dragons-pathfinder-roleplaying-game-role-playing-game-warrior-player-character-warrior-game-weapon-thumbnail.png");
                break;
            case 'Hunter':
                player = new Player(classType,  80, 10, 50, 50,200,"https://c0.klipartz.com/pngpicture/329/646/gratis-png-juego-de-rol-pathfinder-juego-de-rol-de-guardabosques-del-sistema-d20-dungeons-dragons-enano-thumbnail.png");
                break;
            case 'Mage':
                player = new Player(classType, 80, 10, 50, 50,200,"https://c0.klipartz.com/pngpicture/525/864/gratis-png-asistente-del-equipo-mazmorras-y-dragones-pionero-juego-de-juego-de-rol-sistema-d20-asistente-mago-asistente-thumbnail.png");
                break;
        }
        
        getPlayer.innerHTML = '<div><h1 class ="title is-3">You have selected: ' + classType + '</h1><img style="max-width:46%;" src=' + player.img + '><p class="title is-6 health-player">Health:'
         + player.health + '</p><p class="title is-6">Mana:' + player.mana + '</p><p class="title is-6">Strength:' + player.strength + '</p><p class="title is-6">Speed:'
          + player.speed + '</p></div>';
    },
    setPreFight: function() {
        
        let getArena = document.querySelector(".arena");
        let getInterface = document.querySelector(".interface");
        let getHeader = document.querySelector(".header");
        getInterface.innerHTML = '<a href="#" class="btn-prefight title is-4 button is-warning is-light is-rounded" onclick="Game.setFight()">Search for Enemy</a>';
        getHeader.innerHTML = '<p class="title">Find Enemy</p>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getEnemy = document.querySelector(".enemy");
        let getInterface = document.querySelector(".interface");
        //create enemy
        let chooseEnemy = Math.floor(Math.random() * Math.floor(2));
        // let chooseEnemy = 0;
        switch (chooseEnemy) {
            case 0:
                enemy = new Enemy("Goblin", 100, 0, 100, 80, 200,"https://c0.klipartz.com/pngpicture/77/178/gratis-png-juego-de-rol-de-pathfinder-goblin-paizo-publicando-rol-critico-mazmorras-y-dragones-mazmorras-y-dragones-thumbnail.png");;
                break;
            case 1:
                enemy = new Enemy("Troll", 150, 0, 150,50,  150,"https://c0.klipartz.com/pngpicture/413/276/gratis-png-troll-verde-con-martillo-y-espada-ilustracion-troll-monstruo-minotauro-criatura-legendaria-gigante-criaturas-gigantes-s-thumbnail.png");;
                break;        
        }
        getHeader.innerHTML = '<p class="title is-5">Choose Your Move!!</p>';
        getInterface.innerHTML = '<a href="#" class="btn-prefight title is-4 button is-danger is-rounded" onclick="PlayerMoves.calcAttack()">ATTACK!!!</a>';
        getEnemy.innerHTML = '<div><h1 class ="title is-3">You have found a : ' + enemy.enemyType + '</h1><img style="max-width:50%;" src=' + enemy.img + '><p class="title is-6 health-enemy">Health:'
        + enemy.health + '</p><p class="title is-6">Mana:' + enemy.mana + '</p><p class="title is-6">Strength:' + enemy.strength + '</p><p class="title is-6">Speed:'
         + enemy.speed + '</p></div>';
        }
}