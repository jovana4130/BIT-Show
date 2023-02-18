'use strict';

const uiModule = (function () {
    const mainContentWrapperEl = document.querySelector('#main-content');
    const searchDropdownEl = document.querySelector('#search-dropdown');
  
    const renderHomePage = (shows) => {
      let html = `
              <h1>All TV Shows</h1>
              <div id="show-list">
          `;
  
      shows.forEach((show) => {
        html += `
               <div class="show-item" id="${show.id}">
                   <img src="${show.coverUrl}" alt="show cover image"/>
                  <p>${show.name}</p>
               </div>
              `;
      });
  
      html += `</div>`;
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
      searchDropdownEl.innerHTML = '';
    };
    return { renderHomePage, renderSearchDropdown, clearDropdown };
  })();
   




















































    
    
    const clearInput = () => {
        $inputElement.val('');
    }

    const formPreventDefault = () => {
        $(windwow).keydown(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                return false;
            }
        });
    }

    const displayShowInfo = ({id, title, cover, seasons, cast, summary}) => {
        clearErrors();
        $title.html(`<h1>${title}</h1>`);

        $singleShowInfo.html(`
            <div class='col-md-7'
                <img src='${cover}' alt='' class='img-fluid poster'> 
            </div>
            <div class='col-md-4 offset-md-right-1 show-info'>
                <div class='season'>
                    <h2>Seasons (${seasons.length})</h2>
                    <ul>

                    </ul>
                </div>
                <div class='cast'>
                    <h2>CAST</h2>
                    <ul>

                    </ul>
                </div>
            </div>
        `);
    const $ulSeasonElement = $(DOMSelectors.ulSeasons);
    const $ulCastElement = $(DOMSelectors.ulCast);
    }

    /*return {
        collectMovieData: collectMovieData,
        setMovieError: setMovieError,
        updateMovieList: updateMovieList,
        clearInputs: clearInputs,
        collectProgramData: collectProgramData,
        programErrorElement: programErrorElement,
        setProgramError: setProgramError,
        updateProgramList: updateProgramList,
        programSelectElement: programSelectElement,
        updateProgramData: updateProgramData,
        }; */






















/*'use strict'

var uiModule = (function () {
    var movieErrorElement = document.querySelector('movie-error');
    var inputTitleElement = document.querySelector('title');
    var inputLenghtElement = document.querySelector('length');
    var selectGenreElement = document.querySelector('#genre');
    var ulMovieListElement = document.querySelector('#movie-list');
    var movieSelectElement = document.querySelector('#movie-select');
    var inputDateElement = document.querySelector('#date');
    var programErrorElement = document.querySelector('#program-error');
    var ulProgramListElement = document.querySelector('#program-list');
    var movieToProgramErrorElement = document.querySelector('#movie-to-program-error');
    var programSelectElement = document.querySelector('#program-select');

    function collectMovieData(){
        var titleValue = inputTitleElement.value;
        var lengthValue = inputLenghtElement.value;
        var genreValue = selectGenreElement.value;

        return {
            title: titleValue,
            genre: genreValue,
            length: lengthValue,
        };
    };

    function setMovieError(error){
        movieErrorElement.textContent = error;
    };

    function updateMovieList(movie, index) {
        var movieDataList = document.createElement('li');
        movieDataList.textContent = movie.getData();
        ulMovieListElement.appendChild(movieDataList);

        var movieOption = document.createElement('li');
        movieOption.textContent = movie.title;
        movieOption.setAttribute('value', index);
        movieSelectElement.appendChild(movieOption);
    };

    function clearInputs() {
        movieErrorElement.textContent = '';
        inputTitleElement.value = '';
        inputLenghtElement.value = '';
        selectGenreElement.value = '';
    };

    function collectProgramData() {
        var dateInputValue = inputDateElement.value;
        return {
            dateInputValue: dateInputValue,
        };
    };

    /*function setMovieToProgramError(error) {
        
    }

    function programErrorElement(error) {

    };

    function setProgramError(error) {

    }; 

    function updateProgramList(program, index) {
        var index = festival.programList.length - 1;
        var li = document.createElement("li");
        li.setAttribute("id", "program-item-" + index);
        li.textContent = program.getData();
        ulProgramListElement.appendChild(li);
    
        var option = document.createElement("option");
        option.setAttribute("value", index);
        option.textContent = program.getData();
        selectProgramElement.appendChild(option);
    };

    function programSelectElement() {

    };


    function updateProgramData(program, oldProgramData) {
        var programListElements = document.querySelectorAll('#program-list li');
        var programSelectOptions = document.querySelectorAll('#program-select option');

        programListElements.forEach(function (li) {
        if (li.textContent === oldProgramData) {
            li.textContent = program.getData();
        }
        });

        programSelectOptions.forEach(function (option) {
        if (option.textContent === oldProgramData) {
            option.textContent = program.getData(); 
        }
        });
        movieToProgramErrorElement.textContent = '';

    
    return {
        collectMovieData: collectMovieData,
        setMovieError: setMovieError,
        updateMovieList: updateMovieList,
        clearInputs: clearInputs,
        collectProgramData: collectProgramData,
        programErrorElement: programErrorElement,
        setProgramError: setProgramError,
        updateProgramList: updateProgramList,
        programSelectElement: programSelectElement,
        updateProgramData: updateProgramData,
        };
    };
})();
