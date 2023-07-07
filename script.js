const kullaniciIcons = document.querySelectorAll(".kullaniciIcon")
const PCicons = document.querySelectorAll(".PCicon")
const kullaniciScoreSpan = document.getElementById("kullaniciScore")
const pcScoreSpan = document.getElementById("pcScore")
const resetIcon = document.getElementById("resetIcon")
const result = document.getElementById("result")

function resetColorforkullaniciIcons(){
    kullaniciIcons.forEach(icon=>{
        icon.classList.remove("text-dark")
        icon.classList.add("text-primary")
    })
}

function resetColorforPCicons(){
    PCicons.forEach(icon=>{
        icon.classList.remove("text-dark")
        icon.classList.add("text-danger")
    })
}

kullaniciIcons.forEach(icon=>{
    
    icon.addEventListener("click",()=>{
        resetColorforkullaniciIcons()
        icon.classList.add("text-dark")
        randomNumber(icon.id);
    })
})

function randomNumber(iconid){
    const number = Math.floor(Math.random()*3);
    selectPcIcon(number,iconid);

}
function selectPcIcon(number,iconid){
    resetColorforPCicons();
    switch(number){
        case 0:
            PCicons[0].classList.add("text-dark");
            winOrLose(PCicons[0].id,iconid)
            break;
        case 1:
            PCicons[1].classList.add("text-dark")
            winOrLose(PCicons[1].id,iconid)
            break;
        case 2:
            PCicons[2].classList.add("text-dark")
            winOrLose(PCicons[2].id,iconid)
            break;
    }
}

let kullaniciScore = 0;
let pcScore = 0;
let isWinKullanici = false;
let berabere = false;

function winOrLose(pcid,iconid){


    switch(iconid){
        case "rock":
            if(pcid=="scissors_pc"){
                kullaniciScore++;
                isWinKullanici = true;
                berabere=false;
                isWinOrLose(isWinKullanici,berabere)
            }
            else if(pcid=="rock_pc"){
                berabere = true;
                isWinKullanici = false;
                isWinOrLose(isWinKullanici,berabere)
                return;
            }
            else{
                pcScore++;
                isWinKullanici=false;
                berabere=false;
                isWinOrLose(isWinKullanici,berabere)
            }
            break;
        case "paper":
            if(pcid=="rock_pc"){
                kullaniciScore++;
                isWinKullanici = true;
                berabere=false;
                isWinOrLose(isWinKullanici,berabere)
            }
            else if(pcid=="paper_pc"){
                berabere = true;
                isWinKullanici = false;
                isWinOrLose(isWinKullanici,berabere)
                return;
            }
            else{
                pcScore++;
                isWinKullanici=false;
                berabere=false;
                isWinOrLose(isWinKullanici,berabere)
            }
            break;
        case "scissors":
            if(pcid=="paper_pc"){
                kullaniciScore++;
                isWinKullanici = true;
                berabere=false;
                isWinOrLose(isWinKullanici,berabere)
            }
            else if(pcid=="scissors_pc"){
                berabere = true;
                isWinKullanici = false;
                isWinOrLose(isWinKullanici,berabere)
                return;
            }
            else{
                pcScore++;
                isWinKullanici = false;
                berabere=false;
                isWinOrLose(isWinKullanici,berabere)
            }
            break;
    }
    kullaniciScoreSpan.textContent = kullaniciScore;
    pcScoreSpan.textContent = pcScore;
}

resetIcon.addEventListener("click",()=>{
    kullaniciScore = 0;
    pcScore = 0;
    kullaniciScoreSpan.textContent = kullaniciScore;
    pcScoreSpan.textContent = pcScore;
})  

function isWinOrLose(isWinKullanici,berabere){
    if(isWinKullanici&&!berabere){
        result.textContent="Kullanici Kazandı."
    }
    else if(berabere&&!isWinKullanici){
        result.textContent="Berabere"
    }
    else{
        result.textContent="Pc Kazandı."
    }
}