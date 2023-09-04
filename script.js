function getComputerChoice() {
    // We need to have 3 choices : rock paper scissors saved somewhere
    // I decided to use an array
    choices = ["rock","paper","scissors"];

    // Then randomly pick one of the 3 choices
    // Since I used an array I tought then to choose a random index using the math.random
    random_index = Math.round(( Math.random() * 10 ) % 2,1)

    // then return the random value
    return choices[random_index];
}