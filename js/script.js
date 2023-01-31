    function slideRightBtn(){
        let img1 = document.getElementById("section__first-customer__right__img1")
        let img2 = document.getElementById("section__first-customer__right__img2")
        let img3 = document.getElementById("section__first-customer__right__img3")
        let lBtn = document.getElementById("lBtn")
        let rBtn = document.getElementById("rBtn")

        if (img1.style.zIndex === "3") {
            img1.style.zIndex = "2"
            img2.style.zIndex = "3"
        } else if(img2.style.zIndex === "3") {
            img1.style.zIndex = "1"
            img2.style.zIndex = "2"
            img3.style.zIndex = "3"
        } else {
            img3.style.zIndex = "3"
            img2.style.zIndex = "2"
            img1.style.zIndex = "1"          
        }

        // if (img2.style.zIndex === "3") {
        //     lBtn.style.marginLeft = "-22em"
        //     rBtn.style.marginLeft = "8em"
        // } else if (img3.style.zIndex === "3"){
        //     lBtn.style.marginLeft = "-17em"
        //     rBtn.style.marginLeft = "17em"
        // } else if (img1.style.zIndex === "3"){
        //     lBtn.style.marginLeft = "-27em"
        //     rBtn.style.marginLeft = "0em"
        // }

        if (img2.style.zIndex === "3") {
            img2.style.border = "2px solid lime"
            img3.style.border = "2px solid white"
            img1.style.border = "2px solid white"
        } else if (img3.style.zIndex === "3") {
            img3.style.border = "2px solid lime"
            img2.style.border = "2px solid white"
            img1.style.border = "2px solid white"
        }
    }

// break
    
    function slideLeftBtn(){
        let img1 = document.getElementById("section__first-customer__right__img1")
        let img2 = document.getElementById("section__first-customer__right__img2")
        let img3 = document.getElementById("section__first-customer__right__img3")

        if (img2.style.zIndex === "2") {
            img2.style.zIndex = "3"
            img3.style.zIndex = "2"
        } else if(img2.style.zIndex === "3") {
            img1.style.zIndex = "3"
            img2.style.zIndex = "2"
            img3.style.zIndex = "1"
        } else {
            img3.style.zIndex = "1"
            img2.style.zIndex = "2"
            img1.style.zIndex = "3"            
        }

        // if (img2.style.zIndex === "3") {
        //     lBtn.style.marginLeft = "-22em"
        //     rBtn.style.marginLeft = "8em"
        // } else if (img3.style.zIndex === "3"){
        //     lBtn.style.marginLeft = "-17em"
        //     rBtn.style.marginLeft = "17em"
        // } else if (img1.style.zIndex === "3"){
        //     lBtn.style.marginLeft = "-27em"
        //     rBtn.style.marginLeft = "0em"
        // }

        if (img2.style.zIndex === "3") {
            img2.style.border = "2px solid lime"
            img3.style.border = "2px solid white"
            img1.style.border = "2px solid white"
        } else if (img1.style.zIndex === "3") {
            img1.style.border = "2px solid lime"
            img2.style.border = "2px solid white"
            img3.style.border = "2px solid white"
        }
    }