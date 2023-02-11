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

    const 
})