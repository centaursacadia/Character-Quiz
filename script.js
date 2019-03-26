$("button").click(function() {
    var age = $(".age").val();
    var band = $(".band").val();
    
    if (age <= 23 && band === "Metallica") {
        $(".character").text("Beavis");
         $(".image").html("<img src='https://bloodypopcorn.com/wp-content/uploads/2015/10/beavisheadbang.gif'>");
            $(".desc").text("You are Butt-Head's best friend and sidekick. You are very spontaneous, unpredictable, and unintelligent, which causes you to harm yourself most of the time. ");
    
    } else if (age <= 23 && band === "AC/DC") {
        $(".character").text("Butt-head");
         $(".image").html("<img src='http://assets.stickpng.com/thumbs/584fd35e6a5ae41a83ddee97.png'>");
            $(".desc").text("You are Beavis's best friend; you're the more dominant one in the friendship. You're narcissistic, sadistic and apathetic, so you dont show much concern for Beavis. You're calm, laid-back, and slightly more intelligent than your friend. ");

    } else if (age <=23 && band === "Winger") {
        $(".character").text("Stewart");
         $(".image").html("<img src='https://i.pinimg.com/originals/75/df/9b/75df9ba45756c014e482000a2bcec659.jpg'>");
            $(".desc").text("You're kind of nerdy and wimpy. You try to make friends with Beavis and Butt-Head, but they always end up getting you in trouble.");


    } else if (age >= 23 && band === "Metallica") {
        $(".character").text("Old Beavis");
          $(".image").html("<img src='https://i.imgur.com/BzgiwGi.jpg'>");
            $(".desc").text("You're Beavis, but old.");
          
    } else if (age >= 23 && band === "AC/DC") {
        $(".character").text("Old Butt-head");
          $(".image").html("<img src='https://i.imgur.com/JLMspTt.jpg'>");
           $(".desc").text("You're Butt-Head, but old.");
          
    } else if (age >= 23 && band === "Winger") {
        $(".character").text("Mr.Stevenson");
          $(".image").html("<img src='https://vignette.wikia.nocookie.net/beavisandbutthead/images/4/4f/Tumblr_ljd1a82V4j1qda8iw.jpg/revision/latest/scale-to-width-down/185?cb=20140424132952'>");
            $(".desc").text("You are Stewart's father. You're hot tempered and kind of cowardly. And you always get caught up in Beavis and Butt-Head's shenanigans.");

    } else {
        $(".user").text("That’s not a valid combination…" );
          $(".image").html("<img src='https://cdn.pastemagazine.com/www/system/images/photo_albums/daria-memes/large/giphy-5.gif?1384968217'>");
                
        }
        



}); 


