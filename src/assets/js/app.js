(function () {

    const slides = [
        {
            index: 0,
            img: "assets/img/slide-1.png",
            startTime: 0,
            endTime: 6,
            notes: []
        }, {
            index: 1,
            img: "assets/img/slide-2.png",
            startTime: 6,
            endTime: 15,
            notes: [{
                author: "Koos Bavinck",
                kudos: 14,
                items: [
                    "Users needs zijn komen ook voor in de beoordeling.",
                    "Groepjes mag je zelf maken."
                ]
            }, {
                author: "Vienna Meijer",
                kudos: 13,
                items: [
                    "Dolor Pellentesque Vulputate Fringilla.",
                    "Cras Fusce Aenean Mattis."
                ]
            }]
        }, {
            index: 2,
            img: "assets/img/slide-3.png",
            startTime: 15,
            endTime: 21,
            notes: [{
                author: "Victor Zumpolle",
                kudos: 13,
                items: ["Ornare Vulputate Risus Fringilla.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod."]
            }, {
                author: "Jelle Overbeek",
                kudos: 9,
                items: [
                    "Ornare Vulputate Risus Fringilla.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod."
                ]
            }]
        }, {
            index: 3,
            img: "assets/img/slide-4.png",
            startTime: 21,
            endTime: 30,
            notes: [{
                author: "Victor Zumpolle",
                kudos: 13,
                items: ["Ornare Vulputate Risus Fringilla.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod."]
            }]
        }, {
            index: 4,
            img: "assets/img/slide-5.png",
            startTime: 30,
            endTime: 40,
            notes: [{
                author: "Koos Bavinck",
                kudos: 14,
                items: [
                    "Users needs zijn komen ook voor in de beoordeling.",
                    "Groepjes mag je zelf maken."
                ]
            }, {
                author: "Vienna Meijer",
                kudos: 13,
                items: [
                    "Dolor Pellentesque Vulputate Fringilla.",
                    "Cras Fusce Aenean Mattis."
                ]
            }]
        }, {
            index: 5,
            img: "assets/img/slide-6.png",
            startTime: 40,
            endTime: 60,
            notes: []
        }
    ];

    const presentation = {
        media: document.querySelector(".presentation__splitscreen"),
        video: document.querySelector(".presentation__splitscreen video"),
        slideEl: document.querySelector(".presentation__splitscreen .current-slide"),
        slidesEl: document.querySelector(".presentation__slides"),
        seekerEl: document.querySelector(".seeker"),
        notesEl: document.querySelector(".notes"),
        currentSlideEl: null,
        playing: false,
        slideNodes: [],
        videoDuration: 0,
        interval: null,
        createSlides: function() {
            slides.forEach((slide) => {
                let img = document.createElement("img");
                img.src = slide.img;

                img.addEventListener("click", (ev) => {
                    this.changeTime(slide.startTime);
                    this.setSlide();
                    this.updateSeeker();
                });

                this.slideNodes.push(img);
                this.slidesEl.insertAdjacentElement('beforeend', img)
            });
        },
        createNotes: function(slide) {
            this.notesEl.innerHTML = "";
            let titleHtml = `<h1>Slide ${slide.index + 1} - ${slide.notes.length} aantekeningen</h1>`;
            this.notesEl.insertAdjacentHTML('beforeend', titleHtml);

            slide.notes.forEach( (note) => {

                let noteList = "";

                note.items.forEach((item) => {
                    noteList += `<li>${item}</li>`
                });

                let template =
                    `<article class="note">
                        <header class="horizontal-header">
                            <h6>${note.author}</h6>
                            <label class="kudos">${note.kudos}<img src="assets/img/plus.svg"></label>
                        </header>
                        <ul>${noteList}</ul>
                    </article>`;

                this.notesEl.insertAdjacentHTML('beforeend', template);
            });

        },
        getSlide: function(currentTime) {
            let currentSlide = null;

            slides.filter(function (slide) {
                if(currentTime >= slide.startTime && currentTime <= slide.endTime) {
                    currentSlide = slide;
                }
            });

            return currentSlide;
        },
        setActiveSlide: function(slide) {
            this.slideNodes.forEach(function (slide) {
                slide.classList.remove("active");
            });

            this.currentSlideEl = this.slideNodes[slide.index];
            this.currentSlideEl.classList.add("active");
        },
        setSlide: function() {
            let slide = this.getSlide(this.video.currentTime);

            if(slide) {
                this.slideEl.src = slide.img;
                this.setActiveSlide(slide);
                this.createNotes(slide);
            }

            if(this.video.currentTime === this.duration) {
                this.pause();
            }
        },
        changeTime: function(time) {
            this.video.currentTime = time;
        },
        setSeeker: function() {
            this.video.addEventListener('durationchange', (ev) => {
                this.duration = this.video.duration;
                this.seekerEl.max = this.duration;
            });
        },
        updateSeeker: function() {
            this.seekerEl.value = this.video.currentTime;
        },
        handleSeeker: function() {
            const _this = this;
            this.seekerEl.addEventListener("change", function () {
                _this.changeTime(this.value);
                _this.updatePresentation();
            })
        },
        startInterval: function() {
            const _this = this;
            this.interval = setInterval(function(){
                _this.updatePresentation();
            }, 1000);
        },
        updatePresentation: function() {
            this.setSlide();
            this.updateSeeker();
        },
        play: function() {
            location.href = "#presentation";
            this.video.play();
            this.playing = true;
            this.media.classList.remove("paused");
            this.startInterval();
        },
        pause: function() {
            this.video.pause();
            this.playing = false;
            this.media.classList.add("paused");
            clearInterval(this.interval);
        },
        init: function () {
            this.createSlides();
            this.setSeeker();
            this.handleSeeker();
            this.updatePresentation();

            this.media.addEventListener("click", (ev) => {
                if(!this.playing) {
                    this.play();
                } else {
                    this.pause();
                }
            });
        }
    };

    presentation.init();

}());