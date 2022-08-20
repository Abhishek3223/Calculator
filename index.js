let screen = "";
// let scr = document.getElementById("screen");
// console.log(scr)
function deletee(c) {

    num = "";
    array.length = 0;
    const input = document.getElementById("scrren");
    input.value = " ";
    screen = "";
    console.log("AC clicked");
    // console.log(num);
}
function add(currentelem) {

    let value = currentelem.value;
    const input = document.getElementById("scrren");

    screen = screen + value;

    input.value = screen;
    // console.log(input.value);

    // scr.setAttribute()\


    // scr.value
}
let num = "";
let array = [];
function equal(cr) {

    array.length = 0;
    //Array creation from a given string========
    for (let i = 0; i < screen.length; i++) {

        // console.log(i);
        if (Number(screen[i]) || Number(screen[i] == 0)) {
            num += screen[i];
            if (i == screen.length - 1) {
                array.push(Number(num));
                // console.log("hey")
            }
        }

        else {
            array.push(Number(num));
            num = "";

            array.push(screen[i]);
        }
    }
    console.log(array)
    let newa = array;
    if (newa.includes('%')) {
        let i = newa.indexOf('%');
        console.log(`the value / is ${i}`);
        newa[i - 1] = (newa[i - 1] * newa[i + 1])/100;
        newa.splice(i, 2);

        console.log(i);
    }
    if (newa.includes('/')) {
        let i = newa.indexOf('/');
        console.log(`the value / is ${i}`);
        newa[i - 1] = newa[i - 1] / newa[i + 1];
        newa.splice(i, 2);

        console.log(i);
    }
    console.log(newa);

    if (newa.includes('*')) {
        let i = newa.indexOf('*');
        newa[i - 1] = newa[i - 1] * newa[i + 1];
        newa.splice(i, 2);

        console.log(i);
    }
    console.log(newa);
    if (newa.includes('+')) {
        let i = newa.indexOf('+');

        console.log(newa[i - 1] + newa[i + 1]);

        newa[i - 1] = newa[i - 1] + newa[i + 1];
        // newa = newa.slice(0, i) + newa.slice(i + 2,);
        newa.splice(i, 2);

        console.log(i);
    }

    console.log(newa);

    if (newa.includes('-')) {

        let i = newa.indexOf('-');
        console.log(`the value of ${i}`);
        newa[i - 1] = newa[i - 1] - newa[i + 1];
        // newa = newa.slice(0, i) + newa.slice(i + 2,);
        newa.splice(i, 2);

    }

    // if (newa.indexOf('-')) {
    //     let i = newa.indexOf('-');
    //     newa[i - 1] = newa[i - 1] - newa[i + 1];
    //     newa = newa.slice(0, i) + newa.slice(i + 1, -1);
    // }
    console.log(newa);
    let input = document.getElementById("scrren");
    let ans = String(newa[0]);
    input.value =ans;
    // calculatee();
    // returning value ---------------------
    // for (let i = 1; i < array.length; i = i + 2) {

    // }
}


function removeCharacter() {
    console.log(screen);
    const input = document.getElementById("scrren");

    console.log("REMOVE lAst");
    screen = screen.slice(0, screen.length - 1);
    input.value = screen;
}
// function clear() {


function calculatee(a) {
    let i = array.indexOf(a);
    array[i] = array[i - 1]
}
// }
