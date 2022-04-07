const prostor = document.getElementById('pole');
const timeid = document.getElementById('time');

const push = document.getElementById('push');
const form = document.getElementById('form');

var roh1 = 1;
var roh2 = 3;
var roh3 = 7;
var roh4 = 9;

var devet = 0;

let time = 0;
let min = 0;

var promena = 0;

var timevalid = 0;

const batny = document.getElementsByClassName('policka');

for (var i = 0; i < 3; i++) {
    prostor.innerHTML += `<br>`;
    for (var a = 0; a < 3; a++) {
        promena++;
        prostor.innerHTML += `<button onClick="reply_click(this.id)" class="policka" id="${promena}" style="margin: 2%"></button>`;
    }
}

//funkčnost hry
function reply_click(cid) {
    if(timevalid == 0){
    end = new Date();
    timevalid = 1; 
    }
    if (cid == roh1 || cid == roh2 || cid == roh3 || cid == roh4) {
            if (cid == roh1) {
                if (batny[0].style.backgroundColor == "green") {
                    batny[0].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[0].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[1].style.backgroundColor == "green") {
                    batny[1].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[1].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[3].style.backgroundColor == "green") {
                    batny[3].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[3].style.backgroundColor = "green";
                    devet++;
                }
            } else if (cid == roh2) {
                if (batny[2].style.backgroundColor == "green") {
                    batny[2].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[2].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[5].style.backgroundColor == "green") {
                    batny[5].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[5].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[1].style.backgroundColor == "green") {
                    batny[1].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[1].style.backgroundColor = "green";
                    devet++;
                }
            } else if (cid == roh3) {
                if (batny[6].style.backgroundColor == "green") {
                    batny[6].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[6].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[3].style.backgroundColor == "green") {
                    batny[3].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[3].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[7].style.backgroundColor == "green") {
                    batny[7].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[7].style.backgroundColor = "green";
                    devet++;
                }
            } else if (cid == roh4) {
                if (batny[7].style.backgroundColor == "green") {
                    batny[7].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[7].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[5].style.backgroundColor == "green") {
                    batny[5].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[5].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[8].style.backgroundColor == "green") {
                    batny[8].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[8].style.backgroundColor = "green";
                    devet++;
                }
            }
        } else if (Number(cid) > roh1 && Number(cid) < roh2) {
            if (batny[Number(cid) - 1].style.backgroundColor == "green") {
                batny[Number(cid) - 1].style.backgroundColor = "red";
                devet--;
            } else {
                batny[Number(cid) - 1].style.backgroundColor = "green";
                devet++;
            }
            if (batny[Number(cid)].style.backgroundColor == "green") {
                batny[Number(cid)].style.backgroundColor = "red";
                devet--;
            } else {
                batny[Number(cid)].style.backgroundColor = "green";
                devet++;
            }
            if (batny[Number(cid) + 2].style.backgroundColor == "green") {
                batny[Number(cid) + 2].style.backgroundColor = "red";
                devet--;
            } else {
                batny[Number(cid) + 2].style.backgroundColor = "green";
                devet++;
            }
            if (batny[Number(cid) - 2].style.backgroundColor == "green") {
                batny[Number(cid) - 2].style.backgroundColor = "red";
                devet--;
            } else {
                batny[Number(cid) - 2].style.backgroundColor = "green";
                devet++;
            }
        } else if (Number(cid) > roh3 && Number(cid) < roh4) {
            if (batny[Number(cid) - 1].style.backgroundColor == "green") {
                batny[Number(cid) - 1].style.backgroundColor = "red";
                devet--;
            } else {
                batny[Number(cid) - 1].style.backgroundColor = "green";
                devet++;
            }
            if (batny[Number(cid)].style.backgroundColor == "green") {
                batny[Number(cid)].style.backgroundColor = "red";
                devet--;
            } else {
                batny[Number(cid)].style.backgroundColor = "green";
                devet++;
            }
            if (batny[Number(cid) - 4].style.backgroundColor == "green") {
                batny[Number(cid) - 4].style.backgroundColor = "red";
                devet--;
            } else {
                batny[Number(cid) - 4].style.backgroundColor = "green";
                devet++;
            }
            if (batny[Number(cid) - 2].style.backgroundColor == "green") {
                batny[Number(cid) - 2].style.backgroundColor = "red";
                devet--;
            } else {
                batny[Number(cid) - 2].style.backgroundColor = "green";
                devet++;
            }
        } else if (Number(cid) > roh2 && Number(cid) < roh3) {
            if (Number(cid) == 6) {
                if (batny[Number(cid) - 1].style.backgroundColor == "green") {
                    batny[Number(cid) - 1].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[Number(cid) - 2].style.backgroundColor == "green") {
                    batny[Number(cid) - 2].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) - 2].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[Number(cid) - 4].style.backgroundColor == "green") {
                    batny[Number(cid) - 4].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) - 4].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[Number(cid) + 2].style.backgroundColor == "green") {
                    batny[Number(cid) + 2].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) + 2].style.backgroundColor = "green";
                    devet++;
                }
            } else if (Number(cid) == 4) {
                if (batny[Number(cid) - 1].style.backgroundColor == "green") {
                    batny[Number(cid) - 1].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[Number(cid)].style.backgroundColor == "green") {
                    batny[Number(cid)].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid)].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[Number(cid) - 4].style.backgroundColor == "green") {
                    batny[Number(cid) - 4].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) - 4].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[Number(cid) + 2].style.backgroundColor == "green") {
                    batny[Number(cid) + 2].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) + 2].style.backgroundColor = "green";
                    devet++;
                }
            } else {
                if (batny[Number(cid) + 2].style.backgroundColor == "green") {
                    batny[Number(cid) + 2].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) + 2].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[Number(cid) - 4].style.backgroundColor == "green") {
                    batny[Number(cid) - 4].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) - 4].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[Number(cid) - 1].style.backgroundColor == "green") {
                    batny[Number(cid) - 1].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) - 1].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[Number(cid) - 2].style.backgroundColor == "green") {
                    batny[Number(cid) - 2].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid) - 2].style.backgroundColor = "green";
                    devet++;
                }
                if (batny[Number(cid)].style.backgroundColor == "green") {
                    batny[Number(cid)].style.backgroundColor = "red";
                    devet--;
                } else {
                    batny[Number(cid)].style.backgroundColor = "green";
                    devet++;
                }
            }
        }
        if (devet == roh4) {
            prostor.innerHTML = ("");
            form.style.visibility = "visible";
            time = new Date() - end;
        }
    }

push.addEventListener('click', function(){
    timeid.value = msToTime(time);
    console.log(min);
    form.submit();
    });

function msToTime(s) {
    function pad(n, z) {
          z = z || 2;
          return ('00' + n).slice(-z);
        }
      
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
      
        return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
      }