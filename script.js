function respondToClick() {
    // Getting the input values from the user
    let initialPopulation = parseFloat(prompt("Enter the value of the initial population: "));
    let rateOfGrowth = parseFloat(prompt("Enter the value of rate of growth: "));
    let timeInHours = parseFloat(prompt("Enter the value of time in hours: "));

    // Checking if the inputs are valid numbers
    if (isNaN(initialPopulation) || isNaN(rateOfGrowth) || isNaN(timeInHours)) {
        alert("Please enter valid numbers.");
        return; // Stop the function if the inputs are invalid
    }

    // Calculating the final population using exponential growth formula
    let finalPopulation = Math.round(initialPopulation * Math.pow(Math.E, (rateOfGrowth * timeInHours)));

    // Getting the monster details
    let locationOfMonster = prompt("Enter location of the monster: ");
    let nameOfMonster = prompt("Enter name of the monster: ");

    // Combining the location and name of the monster
    let nameAndLocationOfMonster = (locationOfMonster + " " + nameOfMonster).toUpperCase();

    // Displaying the result
    document.getElementById("result").innerHTML = 
        "After " + timeInHours + " hours, the population of " + nameAndLocationOfMonster + " has risen to " + finalPopulation;
}
