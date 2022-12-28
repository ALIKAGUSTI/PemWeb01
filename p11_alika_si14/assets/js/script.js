// menagkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
    // jika di klik akan menjalankan fungsi computerchoice
    a.addEventListener("click",(element) => {
        computerchoice(element);
    })
);
function computerchoice(element){
    // tangkap pilihan user
    let pilihanuser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung 
    // nilai hasil dari game
    let pilihancomputer = document.querySelector("#result") 

    // membuat array pilihan untuk komputer
    let choice = ["Rock","Paper","Scissors"];

    // pilihan random untuk komputer
    pilihancomputer.innerHTML =
    choice[Math.round(Math.random() *choice.length)];
    pilihancomputer = pilihancomputer.innerHTML;

    // jika pilihan komputer sama dengan pilihan user(Draw)
    if(pilihanuser == pilihancomputer){
        alert("draw");
    } 
    
    // jika pilihan user menang
    if(pilihanuser == "Rock" && pilihancomputer == "scissiors"){
        alert("You Win");
    }else if(pilihanuser == "Paper" && pilihancomputer == "Rock"){
        alert("You Win");
    }else if(pilihanuser == "Scissors" && pilihancomputer == "Paper")
        alert("You Win");

    // jika pilihan komputer menang
    if(pilihanuser == "Rock" && pilihancomputer == "Paper"){
        alert("Computer Win");
    }else if(pilihanuser == "paper" && pilihancomputer == "scissors"){
        alert("Computer Win");
    }else if(pilihanuser == "Scissors" && pilihancomputer == "Rock")
        alert("Computer Win");
}