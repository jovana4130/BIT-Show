const uiModule = (function () {
    const mainContentWrapperEl = document.querySelector('#main-content');
    const searchDropdownEl = document.querySelector('#search-dropdown');
    
    const renderSingleTvShowPage = (show) => {
    
        show.cast.forEach(string => {
            castListHtml += `
            <div class='csst-item'>${string}</div>
            `;
        });

        let castListHtml = '';
        show.cast.forEach(string => {
            castListHtml += `
            <div class='cast-item'>${string}</div>
            `;
        });

        let seasonList = '';
        show.cast.forEach(string => {
            castListHtml += `
            <div class='cast-item'>${string}</div>
            `
        })

        const finalHtml = `
            <h1>${show.name}</h1>
            <div class="detail-wrapper">
                <img src="${show.coverUrl}" alt=""/>
                <div class="list-wrapper">
                    <h2>Seasons</h2>${seasonList}
                    <h2>Cast</h2>${castListHtml}
                </div>
            </div>
            <h2>Show Details</h2>${show.summary}
            `
        };


        /*let html = `
        <h1>All TV Shows</h1>
        <div id='show-list'>${htmlString}</div>
        `;

        mainContentWrapperEl.innerHTML = html;*/
    

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
    return { renderSingleTvShowPage, renderHomePage, renderSearchDropdown, clearDropdown };
})();