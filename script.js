$.ajax({
    url: 'https://data.cityofnewyork.us/resource/25th-nujf.json',// API linkage
    dataType: 'json',
    success: function(data) {
        // "Everything" prints out how many other females have the same name as the user input in New York City.
        function everything(){
            alert("Welcome! This project will tell you how many other FEMALES in NYC have the same name as you! Let's get started.")
            var theirName = prompt("What is your name? Please capitalize the first letter.");
            for (var i = 0; i < 1000; i++){
                if (theirName == data[i].nm){
                    var count = data[i].cnt;
                }
            }
            var math = parseInt(count);
            var trial = document.querySelector(".class1")
            trial.innerText = math + " other people have your name! (In New York City)";
            var sizes = ["medium", "large", "x-large", "xx-large"]
            trial.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)]
        }
        everything();
        
        //Extention: Asks user if they want a female baby name suggestion. Takes user input of yes or no and applies it.
        function generate(){
            alert("Please write 'yes' or 'no' for the following question.");//Specification on answers in the loop.
            var userAnswer = prompt("Are you having a female baby and you need a name idea?");
            // If statement assigns each object in the API to a number and the number the user picked is the one we show.
            if (userAnswer == 'yes'){
                var userNum = Math.floor(Math.random()*1000 + 1);
                console.log(userNum)
                for (var i = 0; i < data.length; i++){
                    var allNames = [data[i].nm + " " ];
                }
                function restyle(){
                    var oneName = data[Math.floor(Math.random() * userNum)];
                    var note = document.querySelector('.class2');
                    note.innerText = oneName.nm + " is your recommended name!";
                    var colors=['#6d94ab', '#6d7eab', '#7e6dab', '#926dab', '#a96dab', '#ab6d99', '#ab6d7b', '#96ab6d', '#6dab91'];
                    var fonts=['Copperplate', 'Arial', 'Verdana', 'Courier New', 'Times New Roman', 'Brush Script MT'];
                    note.style.color = colors[Math.floor(Math.random() * colors.length)]; // Concatenation
                    note.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
                }
                restyle()
            }
        }
        generate();
    }

});