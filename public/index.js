const pokePic = document.getElementById('img-holder')
const appearMsg = document.getElementById('appearTxt')
const choiceBtns = document.getElementById('btn-holder')
const pokeStorage = document.getElementById('caught-pokemon')
const searchBtn = document.getElementById('searchBtn')
const lvl = document.getElementById('lvl')
const screen = document.getElementById('screen')
const textBox = document.getElementById('text-box')
const catchBtn = document.getElementById('catchBtn')
const fightBtn = document.getElementById('fightBtn')
let pokeName = ''
let playerXp = 0
let sprite=''
let playerLvl = 0
const levels = [0,50,100,175,250,500,1000,2000,6000,10000]
      document.getElementById("searchBtn").onclick = function () {
        let rand = Math.floor(Math.random() * 890);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`)
            .then(function (response) {
              screen.style.backgroundImage = `url('https://www.digitaleidoscope.com//wp-content/uploads/2015/06/ps_02_04.gif')`
              // pokePic.style.width = '20vw'
              pokePic.style.backgroundImage = 'none'
              textBox.style.visibility = 'hidden'
              setTimeout(() => {
                textBox.style.visibility = 'visible'
                screen.style.backgroundImage = 'none'
                pokePic.style.width = '16vw'
                pokeName = response.data.name
                sprite = response.data.sprites.front_default
                pokePic.style.backgroundImage = 
                `url('${sprite}')`
                appearMsg.textContent = `${pokeName} has appeared`
                
                searchBtn.textContent = "run away"
                choiceBtns.style.display = 'inline' }, 1500);
              
            });
      };

      //change visibility of pokemon storage
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

          screen.style.backgroundImage = `url('https://media2.giphy.com/media/AE6BTS3QZ5OdUI9zxT/200w.webp?cid=ecf05e47psxmi9btf424ctvvcnreoh1zby1z0fw1qe1mspol&rid=200w.webp&ct=g')`
          textBox.style.visibility = 'hidden'
          pokePic.style.backgroundImage = 'none'
         setTimeout(() => { 
          textBox.style.visibility = 'visible'
          screen.style.backgroundImage ='none'
          pokePic.style.backgroundImage = `url('https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png')` }, 750);
         searchBtn.textContent = "Search"
         //add pokemon to storage
        let newPoke = document.createElement('h3')
        newPoke.textContent = pokeName
        pokeStorage.appendChild(newPoke)
        appearMsg.textContent = `${pokeName} has been caught!`
        let catchXp = Math.floor(Math.random() * 50);
        playerXp += catchXp
        setTimeout(() => {
          appearMsg.textContent = `you have earned ${catchXp} xp`
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
          
          screen.style.backgroundImage = `url('https://thumbs.gfycat.com/AridArtisticBassethound.webp')`
          textBox.style.visibility = 'hidden'
          pokePic.style.backgroundImage = 'none'
              pokePic.style.width = '25vw'
              setTimeout(() => {
                textBox.style.visibility = 'visible'
                screen.style.backgroundImage ='none'
              pokePic.style.backgroundImage = 
              `url('${sprite}')`
              appearMsg.textContent = `${pokeName} has been defeated!`
              setTimeout(() => {
                appearMsg.textContent = `you have earned ${battleXp} xp`
                pokePic.style.backgroundImage = 
              `url('https://img.favpng.com/5/3/24/ash-ketchum-pokxe9mon-go-pokxe9mon-ruby-and-sapphire-pikachu-misty-png-favpng-yk4QpKB0R2FnEi4aSayacxA6C_t.jpg')`
                
              },1000)
              let battleXp = Math.floor((Math.random() * 100)+50);
              playerXp += battleXp
              
              for (let i = 0; i<levels.length; i++){
                if(playerXp < levels[i]){
                  lvl.textContent = `Player lvl: ${i-1}`
                  return
                }
              }
              
            },6200);
          
              }
              searchBtn.textContent = "Search"
              pokePic.style.width = '16vw'
      }

    