(function () {

    const api = {
        uri: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + config.TMDb_apikey + "",
        getMovies: function () {
            if(config.TMDb_apikey) {
                fetch(this.uri).then(function(response) {
                    response.json().then(function(data) {
                        console.log(data);
                        movies.setMovies(data);
                        movies.refreshFinished();
                    });
                }).catch(function(err) {
                    console.log('Fetch Error', err);
                });
            } else {
                console.log("No api key detected")
            }
        }
    };

    const movies = {
        getMovieElements: function () {
            return document.querySelectorAll(".movie");
        },
        refreshBtn: document.querySelector(".btn-refresh"),
        makeTemplate: function(title, releaseDate, img) {
            const _this = this;

            const html = `<div class="poster">
                            <img src="//image.tmdb.org/t/p/w500/${img}" alt="">
                           </div>
                           <h3>${title} <time>(${releaseDate})</time></h3>
                           <p>Animation, Comedy</p>`;

            let newMovie = document.createElement('article', { className : 'movie' })

            newMovie.className = "movie";
            newMovie.insertAdjacentHTML("afterbegin", html);
            newMovie.addEventListener("click", function (ev) {
                _this.toggleActive(this)
            });

            return newMovie
        },
        getLastMovie: function() {
            let movies = this.getMovieElements();
            return movies[movies.length - 1];
        },
        setMovies: function(movies) {
            const _this = this;

            movies.results.forEach(function (movie) {
                let newMovie = _this.makeTemplate(movie.title, movie.release_date, movie.poster_path);
                _this.getLastMovie().insertAdjacentElement("afterend", newMovie);
            });
        },
        toggleActive: function (el) {
            el.classList.toggle("active");
        },
        refreshFinished: function() {
            this.refreshBtn.classList.remove("loading");
        },
        refresh: function (el) {
            el.classList.add("loading");
            api.getMovies();
        },
        init: function () {
            const _this = this;

            this.refreshBtn.addEventListener("click", function (ev) {
                _this.refresh(this);
            });

            this.getMovieElements().forEach(function (movie) {
                movie.addEventListener("click", function (ev) {
                    _this.toggleActive(this)
                });
            })
        }
    };

    movies.init();

})();