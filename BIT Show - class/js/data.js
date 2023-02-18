const dataModule = (function(data,ui) {
    
    class Season {
        constructor(startDate, endDate) {
            this.startDate = startDate;
            this.endDate = endDate;
        }
    }

    class TvShow {
        constructor(name, id, coverUrl) {
            this.id = id;
            this.name = name;
            this.coverUrl = coverUrl;
            this.cast = cast;
            this.seasons = seasons;
        }
    }

    const getShows = () => {
        return fetch('http://api.tvmaze.com/shows')
            .then(function (res) {
                return res.json();
            })
            .then(function (showsRawObjects) {
                showsRawObjects.slice(50);
                return showsRawObjects.map(({name, id, image}) => new TvShow(name, id, image?.original));
            });   
    };

    const getSingleTvShow = (id) => {
        return fetch(`http://api.tvmaze.com/shows/${id}?embeded[]=seasons&embeded[]cast`)
        .then(function (res) {
            return res.json();
        })
        .then(function (rawTvShows) {
            const tvSeasons = rawTvShows._embedded.seasons.map((s) => new Season(s.premiereDate, s.endDate));
            const cast = rawTvShows.embeded.cast.map((a) => a.person.name);
            return new TvShow(rawTvShows.name, raw.TvShow.id, rawTvShow.image.original.rawTvShow.summary. cast, tvSeasons);
            //console.log(rawTvShows);
        });
    };

    const searchShow = (term) => {
        return fetch(`http://api.tvmaze.com/search/shows?q=${term}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (showsRawObjects) {
            return showsRawObjects.map(({ show }) => {
                const {name, id, image} = show;
                const imageToUse = image ? image.original : '';
                return new TvShow(name, id, imageToUse);
            });
        });
    };

    return { getShows, getSingleTvShow, searchShow };
})();

//.then((finalData)) => console.log(finalData);