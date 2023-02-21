'use strict';

var mainModule = (function (ui, data) {

    const setEventListener = () => {
        const $cardHolderElement = $(ui.DOMSelectors.inputSearch);
        const $inputElement = $(ui.DOMSelectors.inputSearch);
        const $logoElement = $(ui.DOMSelectors.aLogo);
        $cardHolderElement.on('click', cardHandler);
        $inputElement.on('keyup', searchHandler);
        $logoElement.on('click', homeButtonHandler);
        $searchResultElement.on('click', cardHandler);
    }

    const homeButtonHandler = event => {
        data.fetchShows(ui.displayShows, ui.displayError);
    }

    const cardHandler = event => {
        ui.setLocalStorageShowId(event);
    }

    const searchHandler = event => {
        const searchValue = ui.collectInputData();
        if (event.key == 'Enter') {
            if (searchValue === '') {
                return;
            }
            data.fetchSearchedShows(searchValue, ui.displayShows, ui.displayError);
            return ui.displaySearchedList([]);
        }
        if (searchValue === '') {
            return ui.displaySearchedList([]);
        }
        data.fetchSearchedShows(searchValue, ui.displaySearchedList, ui.displayError);
    }

    const initHomepage = () => {
        setEventListener();
        ui.formPreventDefault();
        data.fetchShows(ui.displayShows, ui.displayError);
    }

    const initShowInfoPage = () => {
        ui.formPreventDefault();
        setEventListener();
        data.fetchShowInfo(ui.displayShowInfo, ui.displayError);
    }

    return {
        initHomepage,
        initShowInfoPage
    }
})(uModule, dataModule);