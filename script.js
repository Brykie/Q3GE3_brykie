function start() {

    var a = parseInt(prompt("What is the length of the first side?"));
    var b = parseInt(prompt("What is the length of the second side?"));
    var c = parseInt(prompt("What is the length of the third side?"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        window.alert("pwease input a real number thank yuu")
        
    }
    else {
    DetermineTriangle(a, b, c);
    }
}



function DetermineTriangle(a, b, c) {
    if (a == b && b ==c) {
        window.alert("The Triangle is EQUILATERAL");
    }

    else if (a == b || b ==c || c == a) {
        window.alert("The Triangle is ISOSCELES");
    }

    else {
        window.alert("The Triangle is SCALENE")
    }
}









