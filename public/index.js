const pokePic = document.getElementById('img-holder')
const appearMsg = document.getElementById('appearTxt')
const choiceBtns = document.getElementById('btn-holder')
const pokeStorage = document.getElementById('caught-pokemon')
const searchBtn = document.getElementById('searchBtn')
const lvl = document.getElementById('lvl')
let pokeName = ''
let playerXp = 0
let sprite=''
let playerLvl = 0
const levels = [0,100,500,1000,2000,6000,10000]
      document.getElementById("searchBtn").onclick = function () {
        let rand = Math.floor(Math.random() * 890);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`)
            .then(function (response) {
              pokePic.style.backgroundImage = `url('https://www.washingtonpost.com/resizer/K9D1z0UPiXWsQ3fMVf6sZ0aVuEM=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UAGGWS3KVAYKXBPOYNIT3YNQ3Y.gif')`
              pokePic.style.width = '20vw'
              setTimeout(() => {
                pokePic.style.width = '16vw'
                pokeName = response.data.name
                sprite = response.data.sprites.front_default
                pokePic.style.backgroundImage = 
                `url('${sprite}')`
                appearMsg.textContent = `${pokeName} has appeared`
                searchBtn.textContent = "run away"
                choiceBtns.style.display = 'inline' }, 1000);
              
            });
      };
      
      document.getElementById('storageBtn').addEventListener('click',viewStorage)
      function viewStorage() {
        if(pokeStorage.style.display =='none'){
          pokeStorage.style.display = 'flex'
        }else{
          pokeStorage.style.display = 'none'
        }
      }

      //catch pokemon
      document.getElementById('catchBtn').addEventListener('click',catchPokemon)
      function catchPokemon() {
        if(appearMsg.textContent.endsWith("appeared")){
         pokePic.style.backgroundImage = `url('https://media2.giphy.com/media/AE6BTS3QZ5OdUI9zxT/200w.webp?cid=ecf05e47psxmi9btf424ctvvcnreoh1zby1z0fw1qe1mspol&rid=200w.webp&ct=g')`
         setTimeout(() => { pokePic.style.backgroundImage = `url('https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png')` }, 750);
         searchBtn.textContent = "Search"
         choiceBtns.style.display = 'none'
        let newPoke = document.createElement('h3')
        newPoke.textContent = pokeName
        pokeStorage.appendChild(newPoke)
        appearMsg.textContent = `${pokeName} has been caught!`
        let catchXp = Math.floor(Math.random() * 50);
        playerXp += catchXp
        setTimeout(() => {
          appearMsg.textContent = `you have earned ${playerXp} xp`
        },1800)
        for (let i = 0; i<levels.length; i++){
          if(playerXp < levels[i]){
            lvl.textContent = `Player lvl: ${i-1}`
            return
          }
        }
        
        
      }
      
      }

      //battle pokemon
      document.getElementById('fightBtn').addEventListener('click',fightPokemon)
      function fightPokemon() {
        if(appearMsg.textContent.endsWith("appeared")){
          
          pokePic.style.backgroundImage = `url('https://thumbs.gfycat.com/AridArtisticBassethound.webp')`
              pokePic.style.width = '25vw'
              setTimeout(() => {
              pokePic.style.backgroundImage = 
              `url('${sprite}')`
              appearMsg.textContent = `${pokeName} has been defeated!`
              setTimeout(() => {
                pokePic.style.backgroundImage = 
              `url('https://img.favpng.com/5/3/24/ash-ketchum-pokxe9mon-go-pokxe9mon-ruby-and-sapphire-pikachu-misty-png-favpng-yk4QpKB0R2FnEi4aSayacxA6C_t.jpg')`
                appearMsg.textContent = `you have earned ${playerXp} xp`
              },1000)
              let battleXp = Math.floor((Math.random() * 100)+50);
              playerXp += battleXp
              for (let i = 0; i<levels.length; i++){
                if(playerXp < levels[i]){
                  lvl.textContent = `Player lvl: ${i-1}`
                  return
                }
              }
              choiceBtns.style.display = 'none'
              
            },6200);
          
              }
              searchBtn.textContent = "Search"
              pokePic.style.width = '16vw'
      }

    