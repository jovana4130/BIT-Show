(function (data, ui) {
    const searchInput = document.querySelector('search-input');

    const onSearch = (e) => {
        console.log(e.target.value);
    };

    data.getShows().then((shows) => {
        ui.renderHomePage(shows)
    });

    searchInput.addEventListener('keyup', onSearch);
})(dattaModule, uiModule);