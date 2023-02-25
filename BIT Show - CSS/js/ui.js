const uiModule = (function () {
    
    const mainContentWrapperEl = document.querySelector('#main-content');
    const searchDropdownEl = document.querySelector('#search-dropdown');
    
    const renderHomePage = (shows) => {
        let html = `
            <h1>Popular Shows</h1>
            <div id='show-list'>
        `;

        shows.forEach((show) => {
            html += `
            <div class='show-item' id=${show.id}>
                <img src='${show.coverUrl}' alt='show cover image'/>
                <p>${show.name}</p>
            </div>
            `;
        //renderPage(tvShowsHtml);
        });

        html += `</div>`;
        mainContentWrapperEl.innerHTML = html;
    };

    const renderSingleTvShowPage = (show) => {
        let castListHtml = '';
        show.cast.forEach((string) => {
            castListHtml += `
            <li class='cast-item'>${string}</li>
            `;
        });

        /*let castListHtml = '';
        show.cast.forEach(string => {
            castListHtml += `
            <div class='cast-item'>${string}</div>
            `;
        });*/

        let seasonList = '';
        //let seasonNumber = 
        show.seasons.forEach(({ startDate, endDate}) => {
            seasonList += `
            <li class='season-item'>${startDate} - ${endDate}</li>
            `;
        });

        const finalHtml = `
            <h1>${show.name}</h1>
            <div class="detail-wrapper">
                <img src="${show.coverUrl}" alt="show poster"/>
                <ul class="list-wrapper">
                    <div class='show-seasons'>
                    <p id='seasons-header'>Seasons ()</p>${seasonList}
                    </div>
                    <div class='show-cast'>
                    <p id='cast-header'>Cast</p>${castListHtml}
                    <div>
                </ul>
            </div>
            <div class='show-summary'>
            <p id='summary-header'>Show Details</p>${show.summary}
            </div>
            `;
            mainContentWrapperEl.innerHTML = finalHtml;
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
        searchDropdownEl.innerHTML = '';
    };
    return { renderSingleTvShowPage, renderHomePage, renderSearchDropdown, clearDropdown };
})();