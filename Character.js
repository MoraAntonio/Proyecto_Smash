let url = new URL(window.location.href); // or construct from window.location

let params = new URLSearchParams(url.search.slice(1));
            
var charId = params.get('id');


const urlget = `https://api.kuroganehammer.com/api/characters/${charId}`;

fetch(urlget)
    .then(response => response.json())
    .then(data => {
    
    const character = {
        
        name:  data.DisplayName,
        id:    data.OwnerId,
        image: data.MainImageUrl,
        links: data.Links,
        color: data.ColorTheme
    }
    
    printer(character);
    console.log(character);
    
})
.catch(err => console.log(err));

function printer(charc){
    
    const header = `<h1>${charc.name}</h1>`;
    const hname  = document.getElementById("head");
    
    hname.innerHTML   = header;
    hname.style.textShadow = `5px 5px ${charc.color}`;
    
    const printImg = `<img src="${charc.image}">`
    document.getElementById("pic").innerHTML = printImg;
    document.title = charc.name;
    
    let printlk = "";
    let y = 1;
    let r = "";
    for(element of charc.links){
          if(y ==1){
        r = "Self";
    } else if(y == 2){
        r = "Moves";
    } else if(y == 3){
        r = "Character Attibutes";
    } else if(y == 4){
        r = "Movements";
    } else if(y == 5){
        r = "Unique Properties"
    }
        printlk = printlk + `<ul>
            <li><a href="${element.Href}">${r}</a></li>
            </ul>`
        y++;
};
    
    console.log(printlk);
    
    const dlk     = document.getElementById("links");
    dlk.innerHTML = printlk;
    dlk.style.borderColor = `${charc.color}`;
}