const dataModule = (function() {
    
    class Season {
        constructor(startDate, endDate) {
            this.startDate = startDate;
            this.endDate = endDate;
        };
    };

    class TvShow {
        constructor(name, id, coverUrl, cast, seasons, summary) {
            this.id = id;
            this.name = name;
            this.coverUrl = coverUrl;
            this.cast = cast;
            this.seasons = seasons;
            this.summary = summary;
        };
    };

    const getShows = () => {
        return $.ajax({
            url:'http://api.tvmaze.com/shows',
            method: 'GET',
            dataType: 'json'
        })
        .then(function (showsRawObjects) {
            const topShows = showsRawObjects
            .filter(show => show.rating.average)
            .sort((a, b) => b.rating.average - a.rating.average)
            .slice(0, 50);
            return topShows.map(({ name, id, image }) => new TvShow(name, id, image.original));
                //image?.original
        });   
    };

    const getSingleTvShow = (id) => {
        return $.ajax({
            url:'https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast',
            method: 'GET',
            dataType: 'json'
        })
        .then(function (rawTvShows) {
            console.log(rawTvShows);
            //console.log('cao');
            const seasons = rawTvShows._embedded.seasons.map((season) => new Season(season.startDate, season.endDate));
            const cast = rawTvShows._embedded.cast.map((actor) => actor.person.name);
            return new TvShow(rawTvShows.name, rawTvShows.id, rawTvShows.image.original, cast, seasons, rawTvShows.summary);
            //console.log(rawTvShows);
        });
    };

    const searchShow = (term) => {
        return $.ajax({
            url: 'https://api.tvmaze.com/search/shows?q=${term}',
            method: 'GET',
            dataType: 'json'
        })
        .then(showsRawObjects => showsRawObjects.slice(0, 10).map(({ show }) => {
                const { name, id, image } = show;
                const imageToUse = image ? image.original : '';
                return new TvShow(name, id, imageToUse);
        }));
    };

    return { getShows, getSingleTvShow, searchShow };
})();

//.then((finalData)) => console.log(finalData);