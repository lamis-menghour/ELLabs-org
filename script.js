// ############################# Slide Show #############################  //
var slideImage_1 = {
    src: "img/slide-1.jpg",
    text: "”Programming isn't about what you know, it's about what you can figure out.” - CHRIS PINE"
};
var slideImage_2 = {
    src: "img/slide-2.jpg",
    text: "”Learning to code is learning to create and innovate.”-ENDA KENNY"
};
var slideImage_3 = {
    src: "img/slide-3.jpg",
    text: "To be a hero, you must choose the right path."
};
var slideImage_4 = {
    src: "img/slide-4.jpg",
    text: "Yes, it's hard, but it's worth it."
};
var slideIMAGES = [slideImage_1, slideImage_2, slideImage_3, slideImage_4];

var slideImages = document.querySelector(".slideImages img");
var slideText = document.querySelector(".slideText");
var slideIndex = 0;
function slideShow() {
    setInterval(function () {
        if (slideIndex < slideIMAGES.length) {
            slideImages.src = slideIMAGES[slideIndex].src;
            slideText.textContent = slideIMAGES[slideIndex].text;
            slideIndex++;
        } else {
            slideIndex = 0;
        };
    }, 5000);
};

window.onload = slideShow();

// ############################# Gallery #############################  //
var gallery = document.querySelector('#gallery');
var album_1 = {
    title: "super genius",
    src: [
        "img/slider.jpg",
        "img/slider1.jpg",
        "img/slider01.jpg",
        "img/slider.jpg",
        "img/slider1.jpg",
        "img/slider01.jpg"
    ]
};
var album_2 = {
    title: "optimize jijel",
    src: [
        "img/optimize1.jpg",
        "img/optimize2.jpg",
        "img/optimize3.jpg",
        "img/optimize1.jpg",
        "img/optimize2.jpg",
        "img/optimize3.jpg"
    ]
};
var album_3 = {
    title: "Meet & code",
    src: [
        "img/1.JPG",
        "img/3.JPG",
        "img/S2.JPG",
        "img/1.JPG",
        "img/3.JPG",
        "img/S2.JPG"
    ]
};
var ALBUM = [album_1, album_3, album_1, album_3, album_1, album_3];

function createAlbum(index) {
    var albumContainer = document.createElement("div");
    var albumTitle = document.createElement("div");
    var album = document.createElement("div");

    albumContainer.className = "albumContainer";
    albumTitle.className = "albumTitle";
    album.className = "album";

    albumContainer.setAttribute('id', index)
    albumTitle.textContent = ALBUM[index].title;
    for (let i = 0; i < 3; i++) {
        var album_image = document.createElement("img");
        album_image.src = ALBUM[index].src[i];
        album.appendChild(album_image);
    };

    albumContainer.appendChild(albumTitle);
    albumContainer.appendChild(album);
    gallery.appendChild(albumContainer);
};

for (let i = 0; i < ALBUM.length; i++) {
    createAlbum(i);
};

// ############################# Gallery Full Screen #############################
var galleryImages = document.getElementById("galleryImages");
var mainImage = document.querySelector("#mainImage img");
function createGalleryImage(index) {
    mainImage.setAttribute("src", ALBUM[index].src[0]);
    for (let k = 0; k < ALBUM[index].src.length; k++) {
        var galleryImage = document.createElement('img');
        galleryImage.className = "galleryImage";
        galleryImage.setAttribute("src", ALBUM[index].src[k]);
        galleryImage.setAttribute('id', k);
        galleryImages.appendChild(galleryImage);
    };
};

var galleryFullScreen = document.getElementById("galleryFullScreen");
var albumContainer = document.querySelectorAll('.albumContainer');
localStorage.galleryIndex = 0;
var galleryINDEX = localStorage.galleryIndex;

albumContainer.forEach(album => {
    album.onclick = () => {
        galleryFullScreen.style.display = "flex";
        createGalleryImage(album.id);
        galleryFullScreen.requestFullscreen() || galleryFullScreen.webkitRequestFullscreen();
        var galleryIMAGES = document.querySelectorAll(".galleryImage");
        galleryIMAGES.forEach(img => {
            img.onclick = () => {
                mainImage.src = img.src;
                galleryINDEX = img.id;
            };
        });
    };
});

var prevImage = document.querySelector('#gallerySlider .leftIcon');
prevImage.onclick = () => {
    var galleryIMAGES = document.querySelectorAll(".galleryImage");
    if (galleryINDEX <= 0) {
        galleryINDEX = galleryIMAGES.length - 1;
    }
    else {
        galleryINDEX--;
    };
    mainImage.src = galleryIMAGES[galleryINDEX].src;
};

var nextImage = document.querySelector('#gallerySlider .rightIcon');
nextImage.onclick = () => {
    var galleryIMAGES = document.querySelectorAll(".galleryImage");
    if (galleryINDEX >= galleryIMAGES.length - 1) {
        galleryINDEX = 0;
    }
    else {
        galleryINDEX++;
    };
    mainImage.src = galleryIMAGES[galleryINDEX].src;
};

var closeGallery = document.getElementById('closeGallery')
closeGallery.onclick = () => {
    galleryFullScreen.style.display = "none";
    document.exitFullscreen() || document.webkitExitFullscreen();
    var galleryIMAGES = document.querySelectorAll(".galleryImage");
    galleryIMAGES.forEach(img => img.remove());
};

// document.addEventListener("keyup", function () {
//     evt = window.event;
//     if (evt.key === "Escape") {
//         console.log('---------------------------------------------')
//         galleryFullScreen.style.backgroundColor = "none";
//     };
// });


// ############################# Courses #############################  //
var course_0 = {
    src: "img/S2.JPG",
    title: "Level 0",
    description: "This is an introductory programming course.",
    details: `Level 0 is an introductory programming course that covers computers,
        operating systems, and programming. It is designed for beginners and schoolchildren,
        introducing complex terms such as algorithms and covering the basics of programming
        and commands. Practical examples like games and animation keep students engaged, 
        and a comprehensive project serves as their assessment. The course concludes with
        an introduction to Arduino and the world of robotics.`,
    price: "8500 DA"
    // price: "Course price 8000 DA + 500 DA registration fee"
};
var course_1 = {
    src: "img/scratch2.jpg",
    title: "Level 1",
    description: "The course covers programming basics with practical examples.",
    details: `In Level 1, students expand their programming skills, learning new techniques that simplify 
        and enhance their projects. They become familiar with various terms and the Scratch interface, gaining 
        the ability to undertake larger and more elaborate projects.`,
    price: "8500 DA"
};
var course_2 = {
    src: "img/slider01.jpg",
    title: "Level 2",
    description: "This introductory course integrates programming with electronics, providing a pathway into the world of robotics.",
    details: `At Level 2, students learn about Arduino, electronics basics, and programming with Scratch language.
        The course emphasizes practical applications, starting with small projects and culminating in an integrated project.`,
    price: "12500 DA"
};
var course_3 = {
    src: "img/slider2.jpg",
    title: "Level 3",
    description: "The course deepens students' understanding of robotics through applied projects and exposure to other programming languages.",
    details: `Level 3 builds upon previous knowledge, teaching students to use the Arduino development environment in addition to Scratch. Students learn to create and program
        Arduino projects, using both languages interchangeably.`,
    price: "12500 DA"
};
var COURSES = [course_0, course_1, course_2, course_3, course_0, course_1, course_2, course_3];

var courses = document.getElementById("courses");
function createCourse(index) {
    // Create elemnets
    var course = document.createElement("div");
    var courseImageContainer = document.createElement("div");
    var courseImage = document.createElement("img");
    var courseTitle = document.createElement("div");
    var courseDscp = document.createElement("div");
    var coursePrice = document.createElement("div");

    // Append Children
    course.appendChild(courseImageContainer);
    courseImageContainer.appendChild(courseImage);
    course.appendChild(courseTitle);
    course.appendChild(courseDscp);
    course.appendChild(coursePrice);

    // Add className
    course.className = "course";
    courseImageContainer.className = "courseImageContainer";
    courseImage.className = "courseImage";
    courseTitle.className = "courseTitle";
    courseDscp.className = "courseDscp";
    coursePrice.className = "coursePrice";

    course.setAttribute("id", index);
    courseImage.setAttribute("src", `${COURSES[index].src}`);

    // Create Text Node
    var titleText = document.createTextNode(COURSES[index].title);
    var dscpText = document.createTextNode(COURSES[index].description);
    var priceText = document.createTextNode(COURSES[index].price);

    // Append Children
    courseTitle.appendChild(titleText);
    courseDscp.appendChild(dscpText);
    coursePrice.appendChild(priceText);
    courses.appendChild(course);
};

for (let i = 0; i < COURSES.length; i++) {
    createCourse(i);
};

// #############################################################
var courseRound;
var mediaQueryCheck = window.matchMedia('(min-width: 750px)');
function courseROUND() {
    var course = document.querySelectorAll(".course");
    course.forEach(e => {
        e.style.transform = `translateX(${0}px)`;
    });

    courseIndex = 0;
    if (mediaQueryCheck.matches) {
        courseRound = (COURSES.length - 1) / 2;
        transX = 250
    }
    else {
        courseRound = COURSES.length - 1;
        transX = 230
    };
};

window.addEventListener("load", courseROUND);
window.addEventListener("resize", courseROUND);

var courseIndex;
var prevCourse = document.querySelector('#coursesSlider .leftIcon');
prevCourse.onclick = () => {
    var course = document.querySelectorAll(".course");
    if (courseIndex > 0 && courseIndex <= courseRound) {
        courseIndex -= 1;
        course.forEach(e => {
            e.style.transform += `translateX(${transX}px)`;
        })
        console.log("prev Course");
    }
    else if (courseIndex <= 0) {
        courseIndex = 0;
        console.log("done prev Course");
    };
};

var nextCourse = document.querySelector('#coursesSlider .rightIcon');
nextCourse.onclick = () => {
    var course = document.querySelectorAll(".course");
    if (courseIndex < courseRound) {
        courseIndex += 1;
        course.forEach(e => {
            e.style.transform += `translateX(-${transX}px)`;
        });
        console.log("next Course");
    }
    else {
        courseIndex = courseRound;
        console.log("done next Course");
    };
};

// ############################# Course Info #############################  //
function createCourseInfo(index) {
    var courseInfoImage = document.querySelector('.courseInfoImage img');
    var courseInfoTitle = document.querySelector('.courseInfoTitle');
    var courseInfoDscp = document.querySelector('.courseInfoDscp');
    var courseInfoPrice = document.querySelector('.courseInfoPrice');

    courseInfoImage.src = `${COURSES[index].src}`;
    courseInfoTitle.textContent = COURSES[index].title;
    courseInfoDscp.textContent = COURSES[index].details;
    courseInfoPrice.textContent = COURSES[index].price;
}

var course = document.querySelectorAll('.course');
course.forEach(e => {
    e.addEventListener("click", function () {
        var courseInfo = document.querySelector('#courseInfo');
        createCourseInfo(e.id);
        // courseInfo.classList.remove('hide');
        // courseInfo.classList.add('show');
        courseInfo.classList.toggle('show');

        var y = (courseInfo.getBoundingClientRect().top || courseInfo.offsetTop) + window.scrollY - 110;
        window.scroll({
            top: y,
            behavior: 'smooth'
        });
    })
});

// ############################# Coming Soon #############################  //
var soon_1 = {
    src: "img/Robotics.jpg",
    title: "Robotics Workshop",
    description: "This introductory course integrates programming with electronics, providing a pathway into the world of robotics."
};
var soon_2 = {
    src: "img/2D-design.png",
    title: "2D Design",
    description: "This introductory course integrates programming with electronics, providing a pathway into the world of robotics."
};
var soon_3 = {
    src: "img/3D-design.png",
    title: "3D Design",
    description: "This introductory course integrates programming with electronics, providing a pathway into the world of robotics."
};
var SOON = [soon_1, soon_2, soon_3];


// ############################# Counting #############################  //
var countContainer = document.getElementById("counting");
var COUNTS = document.querySelectorAll(".counts");
var started = false; // function started ? NO

function countingFunction() {
    if (window.scrollY >= countContainer.offsetTop - 500) {
        if (!started) {
            COUNTS.forEach(element => {
                var goal = element.dataset.goal;
                var count = setInterval(() => {
                    element.textContent++;
                    if (element.textContent == goal) {
                        clearInterval(count);
                    }
                }, 2000 / goal);
            });
        };
        started = true;
    };
};
window.addEventListener("scroll", countingFunction);

// ############################# Go-UP #############################  //
var goUP = document.getElementById('goUP');
window.addEventListener("scroll", function () {
    if (scrollY >= 400) {
        goUP.style.opacity = 1;
    }
    else {
        goUP.style.opacity = 0;
    };
});

function goUPFunction() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
goUP.addEventListener("click", goUPFunction);



// ############################# END OF CODE #############################  //