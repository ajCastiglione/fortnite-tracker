$(function () {
    const out = $('.output-section');
    const searchBtn = $("#searchStats");
    const un = $("#userName");

    searchBtn.on('click', initSearch);
    un.on('keypress', initSearch);


    function initSearch(evt) {
        let code = evt.keycode || evt.which;

        if (evt.type === 'click') {
            searchBtn.html('loading...');
            evt.preventDefault();
            getStats();
        } else if (code === 13) {
            if (un.val() !== "") {
                searchBtn.html('loading...');
                getStats();
            }
        }

    }


    function getStats() {
        userName = un.val();
        if (!userName) {
            return alert('You must enter a username!')
        }
        let query = apiUrl.replace(/{playerName}/gi, userName);

        $.ajax({
            url: query,
            type: 'GET',
            data: 'JSON',
            headers: {
                'X-key': apiKey
            },
            success: response => {
                console.log(response);
                let stats = response.br.stats.pc;
                let name = response.displayName;
                let solos = stats.solo;
                let duos = stats.duo;
                let squads = stats.squad;

                userData.push({
                    name: name,
                    solo: solos,
                    duo: duos,
                    squad: squads
                });
                searchBtn.html('Search!');
                displayContent();
            },
            error: (xhr, status, error) => {
                if(error) {
                    out.html('Error retriving content, please try again.');
                }
            }
        }); //end of query
    } //end of stat fetching

    function displayContent() {
        out.empty();
        let statsObj = userData[0];
        let userDisplay = statsObj.name;
        let soloContent = $(`
        <h1>Stats for ${userDisplay}</h1>
        <div class="soloContent col-xs-12 col-md-4">
            <h2>Solo</h2>
            <p>${statsObj.solo.matchesPlayed} Matches</p>
            <div class="inner-solo-content">
                <div class="col-xs-3"><p>Score</p><p>${statsObj.solo.score}</p></div>
                <div class="col-xs-3"><p>Kills</p><p>${statsObj.solo.kills}</p></div>
                <div class="col-xs-3"><p>Wins</p><p>${statsObj.solo.wins}</p></div>
                <div class="col-xs-3"><p>K/D</p><p>${statsObj.solo.kpd}</p></div>
            </div>
        </div>
        <div class="soloContent col-xs-12 col-md-4">
            <h2>Duos</h2>
            <p>${statsObj.duo.matchesPlayed} Matches</p>
            <div class="inner-solo-content">
                <div class="col-xs-3"><p>Score</p><p>${statsObj.duo.score}</p></div>
                <div class="col-xs-3"><p>Kills</p><p>${statsObj.duo.kills}</p></div>
                <div class="col-xs-3"><p>Wins</p><p>${statsObj.duo.wins}</p></div>
                <div class="col-xs-3"><p>K/D</p><p>${statsObj.duo.kpd}</p></div>
            </div>
        </div>
        <div class="soloContent col-xs-12 col-md-4">
            <h2>Squads</h2>
            <p>${statsObj.squad.matchesPlayed} Matches</p>
            <div class="inner-solo-content">
                <div class="col-xs-3"><p>Score</p><p>${statsObj.squad.score}</p></div>
                <div class="col-xs-3"><p>Kills</p><p>${statsObj.squad.kills}</p></div>
                <div class="col-xs-3"><p>Wins</p><p>${statsObj.squad.wins}</p></div>
                <div class="col-xs-3"><p>K/D</p><p>${statsObj.squad.kpd}</p></div>
            </div>
        </div>
        `);
        out.append(soloContent);
    }

});