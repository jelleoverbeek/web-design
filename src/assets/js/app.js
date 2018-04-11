(function () {

    const movies = {
        elements: document.querySelectorAll("article"),
        toggle: function (el) {
            el.classList.toggle("active");
        },
        init: function () {
            const _this = this;

            this.elements.forEach(function (article) {
                console.log(article)

                article.addEventListener("click", function (ev) {
                    _this.toggle(this)
                })
            })
        }
    };

    movies.init();

})();