window.addEventListener("load", () => {
    fetch("./script/data.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.data = data;
            //dom's
            const image = document.querySelector(".avatar");
            const nameID = document.querySelector(".name");
            const profession = document.querySelector(".profession");
            const description = document.querySelector(".description");
            const ranButton = document.querySelector(".button");
            const left = document.querySelector(".prev");
            const right = document.querySelector(".next");
            let currentItem = 0;
            ranButton.addEventListener('click', () => {
                currentItem = Math.floor(Math.random() * 4);

                rendom(currentItem);
            });
            left.addEventListener('click', () => {
                rendom(currentItem++)
                if (currentItem == )
            })

            function rendom(theVariable) {
                image.src = data[theVariable].image;
                nameID.innerHTML = data[theVariable].name;
                profession.innerHTML = data[theVariable].profession;
                description.innerHTML = data[theVariable].description;
                console.log(theVariable);

            }
            rendom(currentItem);
        });
}, );