var heading = document.querySelector('.secondary-name a').innerHTML;
var split = heading.split(" ");
var words = ["of", "Of", "and", "And", "is", "Is", "she", "She"];

for (var i = 0; i < split.length; i++) {
    for (var j = 0; j < words.length; j++) {
        if (split[i] == words[j]) {
            split[i] = "<span class='connector'>" + split[i] + "</span>";
        }
    }
}

var newHeading = split.join(' ');

document.querySelector('.secondary-name a').innerHTML = newHeading;
//console.log(split);