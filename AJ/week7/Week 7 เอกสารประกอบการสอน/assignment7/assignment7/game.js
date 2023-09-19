window.onload = pageLoad;

function pageLoad() {
    document.getElementById("start").onclick = startGame;
}

function startGame() {
    alert("Ready");
    addBox();
    timeStart();
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timer = null;
    var min = 0.5; // 0.5 minute
    var seconds = min * 60;
    var x = document.getElementById('clock');
    
    // setting timer using setInterval function
    timer = setInterval(timeCount, TIMER_TICK);
    
    function timeCount() {
        var allbox = document.querySelectorAll("#layer div.square");
        
        if (allbox.length > 0) 
		{
            seconds--;
            x.innerText = seconds + "s";

            if (seconds <= 0) 
			{
                clearInterval(timer);
                clearScreen();
                alert("Game over");
            }
        } 	
		else 
		{
            clearInterval(timer);
            alert("You win!");
        }
    }
}

function addBox() {
    var numbox = parseInt(document.getElementById("numbox").value) || 4;
    var gameLayer = document.getElementById('layer');
    var colorDrop = document.getElementById("color").value || "maroon";
    
    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement('div');
        tempbox.className = 'square ' + colorDrop;
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    box.onclick = function () {
        this.style.display = 'none';
    };
}

function clearScreen() {
    var allbox = document.querySelectorAll("#layer div.square");

    for (var i = 0; i < allbox.length; i++) {
        allbox[i].remove();
    }
}
