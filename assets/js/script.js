var quiz = {
    q1: ["Azərbaycanın paytaxtı Bakıdır", true],
    q2: ["Azərbaycanın keçmiş paytaxtı Sumqayıtdır", false],
    q3: ["Osmanlının son şahı Sultan Vahdettin olub", true],
    q4: ["İstanbulun Fəthi 1453-cü ildə olub.", true],
    q5: ["Osmanlının yaranma tarixi 1199-cu ildir.", false],
    q6: ["Osmanlının qurucusu 1-ci Osmandır.", true],
    q7: ["Türkmənçay müqaviləsi 1828-ci ildə olub.", true],
    q8: ["II Dünya müharibəsi 1941-ci ildə başlayıb.", false],
    q9: ["Adolf Hitlerin məzarı Berlindədir.", false],
    q10: ["I Qarabağ müharibəsi 1988-ci ildə başlayıb", true],
}

var answer;
var point = 0;
var question_number = 0;
var array = [];


for (let i in quiz) {
    array.push(i);
}

function showQuestion() {
    if (question_number === array.length) {
        return 0;
    }
    document.getElementById("question").innerHTML = quiz[array[question_number]][0];
}

showQuestion();

function isMatching() {
    return answer === quiz[array[question_number]][1];
}

function compare() {
    if (isMatching()) {
        point++;
        document.getElementById("score-id").innerHTML = `Your score : ${point}`;
        if (answer) {
            agreeTrue();
        } else {
            disagreeTrue();
        }
    } else {
        if (!answer) {
            agreeTrue();
        } else {
            disagreeTrue();
        }
    }
}

function agree() {
    answer = true;
    compare();
}

function disagree() {
    answer = false;
    compare();
}

function refresh() {
    location.reload();
}

function agreeTrue() {
    document.getElementById("true_button").style.background = "#0f0";
    document.getElementById("false_button").style.background = "#f00";
}

function disagreeTrue() {
    document.getElementById("true_button").style.background = "#f00";
    document.getElementById("false_button").style.background = "#0f0";
}

function toNext() {
    question_number++;
    document.getElementById("true_button").style.background = "#00008b";
    document.getElementById("false_button").style.background = "#00008b";
    showQuestion();

    if (question_number === array.length - 1) {
        document.getElementById("next_button").innerHTML = "Finish !";
    } else if (question_number === array.length) {
        document.getElementById("next_button").style.visibility = "hidden";
        document.getElementById("true_button").style.visibility = "hidden";
        document.getElementById("false_button").style.visibility = "hidden";
        document.getElementById("question").innerHTML = "Game over :)";
        document.getElementById("refresh_button").style.visibility = "visible";
    }
}