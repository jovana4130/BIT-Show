const uiModule = (function () {
    
    const mainContentWrapperEl = document.querySelector('#main-content');
    const searchDropdownEl = document.querySelector('#search-dropdown');
    const searchInputEl = document.querySelector('#search-input');
    
    const renderHomePage = (shows) => {
        let html = `
            <h1>Popular Shows</h1>
            <div id='show-list'>
        `;

        shows.forEach((show) => {
            html += `
            <div class='show-item' id=${show.id}>
                <div class='show-board'>
                    <img src='${show.coverUrl}' alt='show board poster'/>
                    <p class='show-name'>${show.name}</p>
                </div>
            </div>
            `;
        //renderPage(tvShowsHtml);
        });

        html += `</div>`;
        mainContentWrapperEl.html(html);
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
        let seasonNumber = 0;
        show.seasons.forEach(({ startDate, endDate}) => {
            seasonNumber++;
            seasonList += `
            <li class='season-item'>${startDate} - ${endDate}</li>
            `;
        });

        const finalHtml = `
        <div class='container'>
            <div class='row text-center'>
                <h1>${show.name}</h1>
            </div>
            <div class="detail-wrapper">
                <img src="${show.coverUrl}" class=\img-responsive show poster' alt="show poster"/>
            </div>
            <div class='list-wrapper'>
                <h2>Seasons (${seasonNumber})</h2>
                <ul>
                ${seasonList}
                </ul>
                <h2>Cast</h2>
                <ul>
                ${castListHtml}
                </ul>
            </div>
        </div>
        <div class='container2'>
            <h2>Show Details</h2>${show.summary}
        </div>
            `;
        mainContentWrapperEl.html(finalHtml);
    };

    const renderSearchDropdown = (shows) => {
        shows.forEach((show) => {
            const itemEl = $(`
            <div id="${show.id}" class="search-item">${show.name}</div>
            `
            );
            itemEl.setAttribute("style", "cursor: pointer;");
            searchDropdownEl.append(itemEl);
        });
    };

    const clearDropdown = () => {
        searchDropdownEl.html = ('');
    };
    return { renderSingleTvShowPage, renderHomePage, renderSearchDropdown, clearDropdown };
})();