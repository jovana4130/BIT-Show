const uiModule = (function () {
    const mainContentWrapperEl = document.querySelector('#main-content');
    const searchDropdownEl = document.querySelector('#search-dropdown');
    
    const renderPage = (htmlString) => {
        let html = `
        <h1>All TV Shows</h1>
        <div id='show-list'>${htmlString}</div>
        `;

        mainContentWrapperEl.innerHTML = html;
    };

    const renderHomePage = (shows) => {
        let tvShowsHtml = ``;

        shows.forEach((show) => {
            TvShowHtml += `
            <div class='show-item' id=${show.id}></div>
            <img src='${show.coverUrl}' alt='show cover image'/>
            <p>${show.name}</p>
            </div>
            `;
        renderPage(tvShowsHtml);
        });

        mainContentWrapperEl.innerHTML = html;
    };

    const renderSearchDropdown = (shows) => {
        shows.forEach((show) => {
            const itemEl = document.createElement('div');
            itemEl.setAttribute('id', show.id);
            itemEl.classList.add('search-item');
            itemEl.textContent = show.name;
            searchDropdownEl.appendChild(itemEl);
        });
    };



    const clearDropdown = () => {
        searchDropdownEl.textContent = ('');
    };
    return { renderPage, renderHomePage, renderSearchDropdown, clearDropdown };
})();