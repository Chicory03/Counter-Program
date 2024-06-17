(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = () => {
        $counter.textContent = 0;
        document.querySelector(".counter").style.backgroundColor = "#fff";
    };
    document.getElementById("js-reset-button").addEventListener("click", clickHandler);

})();

