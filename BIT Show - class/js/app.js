(function (data, ui) {
    const searchInput = document.querySelector('search-input');

    const onSearch = (e) => {
        //console.log(e.target.value);
        const term = e.target.value;
        data.searchShow(term).then((shows) => {
            //console.log(shows);
            ui.clearDropdown();
            ui.renderHomePage(shows);
        });
    };

    data.getShows().then((shows) => {
        ui.renderHomePage(shows);
    });

    searchInput.addEventListener('keyup', onSearch);
})(dataModule, uiModule);