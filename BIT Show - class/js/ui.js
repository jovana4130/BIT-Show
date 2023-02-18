const uiModule = (function () {
    const mainContentWrapperEl = document.querySelector('#main-content')
    const renderHomePage = (shows) => {
        let html = `
        <h1>All TV Shows</h1>
        <div id='show-list'></div>
        `;

        shows.forEach(show => {
            html += `
            <div class='show-item' id=${show.id}></div>
            <img src='${show.coverUrl}' alt='show cover image'/>
            <p>${show.name}</p>
            </div>
            `;
        });

        html += `</div`;
        mainContentWrapperEl.innerHTML = html;
    };
    return { renderHomePage };
})();