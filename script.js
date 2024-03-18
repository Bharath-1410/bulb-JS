function BulbHandler(bulbValue) {
    if (bulbValue==="on"){
        document.getElementById("Img").src = "./BulbOn.png"
    }
    else{
        document.getElementById("Img").src = "./BulbOff.png"
    }
}