// home and guest scores
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
// count score
let homeScoreNumber = 0;
let guestScoreNumber = 0;
homeScore.textContent = homeScoreNumber;
guestScore.textContent = guestScoreNumber;
// home buttons
function plus_1_home() {
    let home_plus_1 = homeScoreNumber += 1
    homeScore.textContent =  home_plus_1;
}
function plus_2_home() {
    let home_plus_2 = homeScoreNumber += 2
    homeScore.textContent = home_plus_2;
}
function plus_3_home() {
    let home_plus_3 = homeScoreNumber += 3
    homeScore.textContent = home_plus_3;
}

// guest buttons
function plus_1_guest() {
    let guest_plus_1 = guestScoreNumber += 1
    guestScore.textContent =  guest_plus_1;
}
function plus_2_guest() {
    let guest_plus_2 = guestScoreNumber += 2
    guestScore.textContent = guest_plus_2;
}
function plus_3_guest() {
    let guest_plus_3 = guestScoreNumber += 3
    guestScore.textContent = guest_plus_3;
}

// clean the score and start from zero
function clean_home_score() {
    homeScoreNumber = 0
    homeScore.textContent = homeScoreNumber;
}
function clean_guest_score() {
    guestScoreNumber = 0
    guestScore.textContent = guestScoreNumber;
}
