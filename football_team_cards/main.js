const footballTeam = {
    team: "Argentina",
    year: 1986,
    headCoach: "Carlos Bilardo",
    players: [
        {
            name: "Sergio Almirón",
            position: "forward",
            isCaptain: false,
        },
        {
            name: "Sergio Batista",
            position: "midfielder",
            isCaptain: false,
        },
        {
            name: "JRicardo Bochini",
            position: "midfielder",
            isCaptain: false,
        },
        {
            name: "Claudio Borghi",
            position: "midfielder",
            isCaptain: false,
        },
        {
            name: "José Luis Brown",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "Daniel Passarella",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "Jorge Burruchaga",
            position: "forward",
            isCaptain: false,
        },
        {
            name: "Néstor Clausen",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "José Luis Cuciuffo",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "Diego Maradona",
            position: "midfielder",
            isCaptain: true,
        },
        {
            name: "Jorge Valdano",
            position: "forward",
            isCaptain: false,
        },
        {
            name: "Héctor Enrique",
            position: "midfielder",
            isCaptain: false,
        },
        {
            name: "Oscar Garré",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "Ricardo Giusti",
            position: "midfielder",
            isCaptain: false,
        },
        {
            name: "Luis Islas",
            position: "goalkeeper",
            isCaptain: false,
        },
        {
            name: "Julio Olarticoechea",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "Pedro Pasculli",
            position: "forward",
            isCaptain: false,
        },
        {
            name: "Nery Pumpido",
            position: "goalkeeper",
            isCaptain: false,
        },
        {
            name: "Oscar Ruggeri",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "Carlos Tapia",
            position: "midfielder",
            isCaptain: false,
        },
        {
            name: "Marcelo Trobbiani",
            position: "midfielder",
            isCaptain: false,
        },
        {
            name: "Héctor Zelada",
            position: "goalkeeper",
            isCaptain: false,
        }
    ]
}

const headCoach = document.getElementById("head-coach");
headCoach.textContent = footballTeam.headCoach;

const team = document.getElementById("team");
team.textContent = footballTeam.team;

const year = document.getElementById("year");
year.textContent = footballTeam.year;

const playerCards = document.getElementById("player-cards");
const selectPlayers = document.getElementById("players");

function renderPlayers () {
    playerCards.innerHTML = "";

    if (selectPlayers.value === "all") {

        footballTeam.players.forEach(player => {
            createPlayerCard(player);
        })
        return;
    }

    footballTeam.players.forEach(player => {
        if(player.position === selectPlayers.value) {
            createPlayerCard(player);
        }
    })
}
function createPlayerCard(player) {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const playerName = document.createElement("h2");
    playerName.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;

    const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;

    playerCard.append(playerName, playerPosition);
    playerCards.appendChild(playerCard);
}

renderPlayers();
selectPlayers.addEventListener("change", renderPlayers);
selectPlayers.addEventListener("input", renderPlayers);



