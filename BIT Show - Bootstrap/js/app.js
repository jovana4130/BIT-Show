(function (data, ui) {
    const searchInput = $('#search-input');
    const searchDropdownEl = $('#search-dropdown');
    const homeButtonEl = $('#home-button');
    const mainContentWrapper = $('#main-content');

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
        if (e.target.getAttribute('class') !== 'search-item') {
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

    const onSingleTvShowClick = (e) => {
        //console.log(e.target.parentElement.getAttribute('class'));
        const targetEl = e.target.parentElement;
        if (targetEl.getAttribute('class') !== 'show-item') {
            return;
        };

        const id = targetEl.getAttribute('id');
        data.getSingleTvShow(id).then((show) => {
            ui.renderSingleTvShowPage(show);
        });
    };

    const onClickHomeButtonHandler = () => {
        data.getShows().then((shows) => {
        ui.renderHomePage(shows);
        });
    };

    onClickHomeButtonHandler();

    searchInput.keyup(onSearch);
    searchDropdownEl.click(onSearchDropdownClick);
    homeButtonEl.click(onClickHomeButtonHandler);
    mainContentWrapper.click(onSingleTvShowClick);
})(dataModule, uiModule);