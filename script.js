document.addEventListener("scroll", function () {
    var items = document.querySelectorAll(".reveal");
    var trigger = window.innerHeight * 0.85;
    items.forEach(function (el) {
        var top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add("active");
    });
});

document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function (e) {
        var targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
            e.preventDefault();
            var target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                document.querySelectorAll(".nav a").forEach(function (l) {
                    l.classList.remove("active");
                });
                link.classList.add("active");
            }
        }
    });
});

var downloadBtn = document.querySelector(".btn-download");
var modalBackdrop = document.querySelector(".modal-backdrop");
var closeButtons = document.querySelectorAll(".modal-close, .modal-close-bottom");

if (downloadBtn && modalBackdrop) {
    downloadBtn.addEventListener("click", function () {
        modalBackdrop.classList.add("open");
    });
}

closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        modalBackdrop.classList.remove("open");
    });
});

if (modalBackdrop) {
    modalBackdrop.addEventListener("click", function (e) {
        if (e.target === modalBackdrop) modalBackdrop.classList.remove("open");
    });
}
