var player = "O";
var winner = false;
var fieldCounter = 0;

document.getElementById("resetGame").addEventListener("click", resetGame);

document.getElementById("0_0").addEventListener("click", function() {
    box(this);
});
document.getElementById("1_0").addEventListener("click", function() {
    box(this);
});
document.getElementById("2_0").addEventListener("click", function() {
    box(this);
});
document.getElementById("0_1").addEventListener("click", function() {
    box(this);
});
document.getElementById("1_1").addEventListener("click", function() {
    box(this);
});
document.getElementById("2_1").addEventListener("click", function() {
    box(this);
});
document.getElementById("0_2").addEventListener("click", function() {
    box(this);
});
document.getElementById("1_2").addEventListener("click", function() {
    box(this);
});
document.getElementById("2_2").addEventListener("click", function() {
    box(this);
});

function box(field) {
    if (field.innerText != "" || winner) return;
    field.innerText = player;
    console.log(field.innerText);
    player == "O" ? field.style.color = "red" : field.style.color = "blue";
    player == "O" ? player = "X" :  player = "O";
    checkTable();
    fieldCounter++;
    console.log(fieldCounter);

    if (fieldCounter == 9 && winner==false) {
        location.reload();
    }
}

function checkTable() {
    for (var i = 0; i <= 2; i++) {
        winnerIs(
        document.getElementById("0_" + i).innerText,
        document.getElementById("1_" + i).innerText,
        document.getElementById("2_" + i).innerText, "0_" + i, "1_" + i, "2_" + i);
        winnerIs(
        document.getElementById(i + "_0").innerText,
        document.getElementById(i + "_1").innerText,
        document.getElementById(i + "_2").innerText, i + "_0", i + "_1", i + "_2");
    }
    winnerIs( document.getElementById("0_0").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("2_2").innerText, "0_0", "1_1", "2_2");
    winnerIs(document.getElementById("0_2").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_0").innerText, "0_2", "1_1", "2_0");
}

function winnerIs(first, second, third, id1, id2, id3) {
    var xOro = document.getElementById(id3);
    if (first != "" && first == second && first == third) {
        document.getElementById(id1).style.background = "gold";
        document.getElementById(id2).style.background = "gold";
        xOro.style.background = "gold";
        document.getElementById('winnerText').innerHTML =  xOro.innerText;
        setTimeout(function() { 
        document.getElementById('wonTrophy').style.display = "block";
        }, 1000);
    winner = true;
    }
}

function resetGame() {
    document.getElementById('resetGame');
    location.reload();
}