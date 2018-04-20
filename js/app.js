$(function(){
    let key = apiKey;
    let url  = apiUrl;
    let platform;

    
    
    $('.radio-platform-btns input').on('change', function() {
        platform = $('input[name=platform]:checked', '.radio-platform-btns').val();
    }); //event listner for selected platform
    
});