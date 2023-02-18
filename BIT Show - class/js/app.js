(function (data, ui) {
    const searchInput = document.querySelector('search-input');
    const searchDropdownEl = document.querySelector('#search-dropdown');
    const homeButtonEl = document.querySelector('#home-button');

    const onSearch = (e) => {
        //console.log(e.target.value);
        const term = e.target.value;
        data.searchShow(term).then((shows) => {
            //console.log(shows);
            ui.clearDropdown();
            ui.renderSearchDropdown(shows);
        });
    };

    const onSearchDropdownClick = (e) => {
        if (event.target.getAttribute('class') !== 'search-item') {
            //ui.clearDropdown();
            return;
        }
        ui.clearDropdown();
        const id = event.target.getAttribute('id');
        
        data.getSingleTvShow(id).then((show) => {
            ui.renderSingleTvShowPage(show);
        });
        //console.log(event.target.getAttribute('id'));
    };

    data.getShows().then((shows) => {
        ui.renderHomePage(shows);
    });

    searchInput.addEventListener('keyup', onSearch);
    searchDropdownEl.addEventListener('click', onSearchDropdownClick);
    //searchInput.addEventListener('blur', ui.clearDropdown);
})(dataModule, uiModule);