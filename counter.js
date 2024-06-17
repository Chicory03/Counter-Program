(() => {
    const $counter = document.getElementById("js-counter");
    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
        } else {
            $counter.textContent = currentCount - 1;
        }


        // 追加
        if ($counter.textContent % 2 === 0) {
            // 偶数
            document.querySelector(".counter").style.backgroundColor = "#ea518c";
        } else {
            // 奇数
             document.querySelector(".counter").style.backgroundColor = "#017a38";
        }
    }
    

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e))
    }

})();   



