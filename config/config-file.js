const oldKey = '904e82d4-bc62-490d-ada3-8bc535e9d037';
const apiKey = '7NweGUTSv7TJG5zUg6gw';
const apiUrl = 'https://fortnite.y3n.co/v2/player/{playerName}';
let platform;
let userName;
let userData = [];

/*
$('.radio-platform-btns input').on('change', function () {
        $('.radio-platform-btns label').removeClass('active-btn');
        $(this).next().addClass('active-btn');
        platform = $('input[name=platform]:checked', '.radio-platform-btns').val();
    }); //event listner for selected platform

    <article class="radioBtn-section">
                <h3>Select Your Platform</h3>
                <div class="radio-platform-btns">
                    <input type="radio" name="platform" value="PC" id="pc" checked="checked">
                    <label class="active-btn" for="pc">PC</label>
                    <input type="radio" name="platform" value="xb1" id="xbox">
                    <label for="xbox">Xbox</label>
                    <input type="radio" name="platform" value="psn" id="playstation">
                    <label for="playstation">PlayStation</label>
                </div>
            </article>
*/