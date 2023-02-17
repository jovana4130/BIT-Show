const dataModule = (function(data,ui) {
    
    class TvShow {
        constructor(name, id, coverUrl) {
            this.id = id;
            this.name = name;
            this.coverUrl = coverUrl
        }
    }

    const getShows = () => {
        fetch('http://api.tvmaze.com/shows')
            .then(function(res) {
                return res.json();
            })
            .then(function (showsRawObjects) {
                return showsRawObjects.map(({name, id, image}) => new TvShow(name, id, image.original));
            })
            .then((finalData)) => console.log(finalData);
    };

    return{getShows};
})(dataModule, uiModule);