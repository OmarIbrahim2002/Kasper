//* ---Start Theme
let spans = document.querySelectorAll(".theme span");
let field = document.querySelector("body");
let links = document.querySelectorAll
    (".pricing .plans .plan_box .plan_footer a");
spans.forEach((span) => {
    span.addEventListener("click", (s) => {
        spans.forEach((span) => {
            span.classList.toggle("none");
        });

        s.currentTarget.classList.add("none");

        window.localStorage.setItem("theme",
            s.currentTarget.dataset.theme);

        window.localStorage.setItem("color",
            s.currentTarget.dataset.color);

        field.style.background = s.currentTarget.dataset.theme;
        field.style.color = s.currentTarget.dataset.color;
    });
});

if (window.localStorage.getItem("theme") &&
    window.localStorage.getItem("color")) {
    field.style.background = window.localStorage.getItem("theme");
    field.style.color = window.localStorage.getItem("color");
    spans.forEach((span) => {
        span.classList.remove("none");
    });
    document.querySelector(
        `[data-theme="${window.localStorage.
            getItem("theme")}"]`
    ).classList.add("none");

    if (window.localStorage.getItem("color") == "white") {
        links.forEach((a) => {
            a.style.color = "white";
        });
    };
};
//* ---End Theme
// ----------------------------------------

//* ---Active Link
let lis = document.querySelectorAll("li a");
lis.forEach(a => {
    a.addEventListener("click", (a) => {
        lis.forEach(a => {
            a.classList.remove("active");
        });
        a.currentTarget.classList.add("active");
    });
});
// ----------------------------------------
//* -----**
let progressSpan = document.querySelectorAll(".skills .prog span");
let section = document.querySelector(".our_skills");
window.onscroll = () => {
    if (window.scrollY >= section.offsetTop) {
        progressSpan.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    };
    goUp();
};
// ----------------------------------------
//* ---Start Go Up Btn
let upBtn = document.querySelector("#up");
function goUp () {
    if (window.scrollY >= 752) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    };
};
upBtn.onclick = function up () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};
//* ---End Go Up Btn
// ----------------------------------------
let bullets = document.querySelectorAll(".testmonials .bullets li");
let divs = document.querySelectorAll(".testmonials .tab");

let bulletsArray = Array.from(bullets);
let divsArray = Array.from(divs);

bulletsArray.forEach(bullet => {
    bullet.addEventListener("click", (b) => {
        bulletsArray.forEach(b => {
            b.classList.remove("active");
        });
        b.currentTarget.classList.add("active");

        divsArray.forEach(div => {
            div.style.display = "none";
        });
        document.querySelector(b.currentTarget.dataset.cont)
            .style.display = "block";
    });
});
// ----------------------------------------
console.log("In This Site There's Theme And Go Up Btn");
// ----------------------------------------