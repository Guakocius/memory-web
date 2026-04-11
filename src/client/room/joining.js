let tb_player = new Map();
let g_pl = "";
let oldInnerHTML = "";

function joinRoom() {
  const msg = "Somebody joined the room!";
  alert(msg);
}

function initLeaderboard() {
  let tblStart = "<table id='leaderboardID'>";
  let tblEnd = "</table>";
  let lb = tblStart + "<tr><td>Player</td><td>Score</td></tr>" + tblEnd;

  let leader_id = document.getElementById("leaderboard_p");
  leader_id.innerHTML = lb;
  oldInnerHTML = leader_id.getHTML()
}

function playerAsTB(v, key) {
  g_pl += "<tr id='new-player-id' ><td id='player-name' >" + key + "</td><td id='player-score' >" + v + "</td></tr>";
  // alert("new g_pl:\n" + g_pl);
}

function addPlayer() {
  let name = document.getElementById("name-input").value;
  alert("Name : " + name);
  if (name != "") {
    tb_player.set(name, 0);
  }

  tb_player.forEach(playerAsTB);
  
  let leader_id = document.getElementById("leaderboard_p");

  leader_id.innerHTML = oldInnerHTML.substr(0, oldInnerHTML.length - 8) + g_pl + "</table>";

  // alert("LEADERID:\n" +  leader_id.innerHTML.toString())

  g_pl = "";
}
