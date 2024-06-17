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




// class User {
    // constructor(name, language, hitokoto) {
    // this.name = name;
    // this.language = language;
    // this.hitokoto = hitokoto;
    // }
// }
    
    // const user1 = new User("Imai", "PHP", "Bye")
    
    // username = user1.name
    // userlanguage = user1.language
    // userhitokoto = user1.hitokoto
    

    // console.log(`name: ${username}`);
    // console.log(`language: ${userlanguage}`);　テンプレートリテラル
    // console.log(`hitokoto: ${userhitokoto}`);

    // console.log(`name: ${user1.name}`);
    // console.log(`language: ${user1.language}`);
    // console.log(`hitokoto: ${user1.hitokoto}`);