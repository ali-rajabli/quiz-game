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


window.onkeypress = function(e) {
    var keypressed = e.key;
    keypressed = keypressed.toUpperCase();
    if (keypressed != 'Y' && keypressed != 'N') {
        alert("You can use only Yes or No : Y/N")
    } else {
        if (keypressed == "Y") {

            keypressed = true;
        } else if (keypressed == "N") {
            keypressed = false;
        }
    }
    guess_answer();
}
var keypressed = e.key;

function guess_answer() {
    for (let i in quiz) {
        var answer = alert(quiz[i][0]);
        if (answer === quiz[i][1]) {
            alert("True!")
        } else {
            alert("Wrong Answer!")
        }
    }
}