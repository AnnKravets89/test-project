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
            name: "(Captain) Diego Maradona",
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
headCoach.innerText = footballTeam.headCoach;

const team = document.getElementById("team");
team.innerText = footballTeam.team;

const year = document.getElementById("year");
year.innerText = footballTeam.year;

const playerCards = document.getElementById("player-cards");
const selectPlayers = document.getElementById("players");

function renderPlayers () {
    playerCards.innerHTML = "";

    const selected = selectPlayers.value.toLowerCase();

    for (const player of footballTeam.players) {
        const position = player.position.toLowerCase();

        if(selected === "all" || selected === position) {
            const playerCard = document.createElement("div");
            playerCard.classList.add("player-card");

            let playerName = document.createElement("h2");
            playerName.innerText = player.name;

            let playerPosition = document.createElement("p");
            playerPosition.innerText = `Position: ${player.position}`;

            playerCard.append(playerName, playerPosition);
            playerCards.appendChild(playerCard);
        }
    }
}

renderPlayers();
selectPlayers.addEventListener("change", renderPlayers);




