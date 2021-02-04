$(document).ready(function(){
    
    $(".button-container").on("click",async function(){
        $(".words").slideUp().animate({margin:"0", padding:"0"})

        var response = await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/")
        var parsedResponse = await response.json()
        

        $(".quote-container").animate({height:"0.5px", paddingTop:"0", paddingBottom: "0"},350).animate({height: "100%", paddingTop:"1px", paddingBottom: "1px"},350)
        $(".words").animate({marginTop:"30px", marginBottom: "30px"}).slideDown(1000)
    })
})