(function (data, ui) {
    const searchInput = document.querySelector('search-input');
    const searchDropdownEl = document.querySelector('#search-dropdown');

    const onSearch = (e) => {
        //console.log(e.target.value);
        const term = e.target.value;
        data.searchShow(term).then((shows) => {
            //console.log(shows);
            ui.clearDropdown();
            ui.renderHomePage(shows);
        });
    };

    const onSearchDropdownClick = (e) => {
        if (event.target.getAttribute('class') !== 'search-item') {
            ui.clearDropdown();
            return;
        }
        ui.clearDropdown();
        console.log(event.target.getAttribute('id'));
    };





    data.getShows().then((shows) => {
        ui.renderHomePage(shows);
    });


    searchInput.addEventListener('keyup', onSearch);
    searchInput.addEventListener('click', onSearchDropdownClick);
    //searchInput.addEventListener('blur', ui.clearDropdown);
})(dataModule, uiModule);