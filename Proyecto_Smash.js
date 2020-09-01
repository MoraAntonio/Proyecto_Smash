// there are 58 characters in the roster of smash 4.
// there are  characters in the roster of Ultimate.

const list = document.getElementById("list");



function get_Character(){
    
    const promises = [];
    for (let i = 1; i < 59; i++){
         const url = `https://api.kuroganehammer.com/api/characters/${i}`;
         promises.push(fetch(url).then((res) => res.json()));
    }
         
            Promise.all(promises).then((results) => {
            const character = results.map((data) => ({
                name: data.DisplayName,
                id: data.OwnerId,
                image: data.ThumbnailUrl,
                color: data.ColorTheme
            }));
        displayCharacter(character);
        })      
}

function open_page(o){
    
    let url = `Character.html?id=${o}`;

    window.open(url, "_self");

    

  
}

function displayCharacter(character){
            
            console.log(character);
            const createstr = character.map((ss) => 
                `<div class="card" onclick=open_page(${ss.id})>
                <img class="card-img" src="${ss.image}"/>
                <div class="card_title" style="color: ${ss.color}">${ss.id}. ${ss.name}</div> 
                </div>`
    
    ).join('');
    console.log(createstr);
    list.innerHTML = createstr;
}



get_Character();