function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1 === "" || name2 === "") {
        alert("Please enter names.");
    } else {
        const lovePercentage = Math.floor(Math.random() * 101); //taking 101 is because taking 100 excludes 100 number and only showing result from 0 to 99
        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}%`;

        if(lovePercentage < 30) {
            result.innerHTML += "<br> Not a great match. Keeping looking";
        } else if(lovePercentage >= 30 && lovePercentage < 70) {
            result.innerHTML += "<br> There is potenial. Give it a try!";
        } else {
            result.innerHTML += "<br> Great Match! Love is in the air 🥰";
        }
    }

    console.log(name1);
    console.log(name2);
}