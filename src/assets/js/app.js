(function () {

    const slides = [
        {
            index: 0,
            img: "assets/img/slide-1.png",
            startTime: 0,
            endTime: 10,
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
            }, {
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
            index: 1,
            img: "assets/img/slide-2.png",
            startTime: 10,
            endTime: 15,
            notes: []
        }, {
            index: 2,
            img: "assets/img/slide-3.png",
            startTime: 15,
            endTime: 21,
            notes: []
        }, {
            index: 3,
            img: "assets/img/slide-4.png",
            startTime: 21,
            endTime: 30,
            notes: []
        }, {
            index: 4,
            img: "assets/img/slide-5.png",
            startTime: 30,
            endTime: 40,
            notes: []
        }, {
            index: 5,
            img: "assets/img/slide-6.png",
            startTime: 40,
            endTime: 53,
            notes: []
        }, {
            index: 6,
            img: "assets/img/slide-7.png",
            startTime: 53,
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
        currentSlideEl: null,
        playing: false,
        slideNodes: [],
        videoDuration: 0,
        interval: null,
        createSlides: function() {
            slides.forEach( (slide) => {
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
            }
        },
        changeTime: function(time) {
            this.video.currentTime = time;
        },
        setSeeker: function() {
            this.video.addEventListener('durationchange', (ev) => {
                this.duration = this.video.duration;
                this.seekerEl.max = this.duration;
                console.log(this.seekerEl)
            });
        },
        updateSeeker: function() {
            this.seekerEl.value = this.video.currentTime;
        },
        handleSeeker: function() {
            const _this = this;
            this.seekerEl.addEventListener("change", function () {
                _this.changeTime(this.value);
                _this.setSlide();
            })
        },
        startInterval: function() {
            const _this = this;
            this.interval = setInterval(function(){
                _this.setSlide();
                _this.updateSeeker();
            }, 1000);
        },
        init: function () {
            this.createSlides();
            this.setSeeker();
            this.handleSeeker();

            this.media.addEventListener("click", (ev) => {
                if(!this.playing) {
                    this.video.play();
                    this.playing = true;
                    this.media.classList.remove("paused");
                    this.startInterval();
                } else {
                    this.video.pause();
                    this.playing = false;
                    this.media.classList.add("paused");
                    clearInterval(this.interval);
                }
            });
        }
    };

    presentation.init();

}());