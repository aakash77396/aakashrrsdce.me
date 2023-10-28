let cels = document.getElementById("cels");
let fah = document.getElementById("fah");

cels.addEventListener("input", function () {
    let c = this.value;
    if (c.length == 0) {
        fah.value = null;
    } else {
        let f = (c * 9 / 5) + 32;
        if (!Number.isInteger(f)) {
            f = f.toFixed(4);
        }
        fah.value = f;
    }
});

fah.addEventListener("input", function () {
    let f = this.value;
    if (f.length == 0) {
        cels.value = null;
    } else {
        let c = (f - 32) * 5 / 9;
        if (!Number.isInteger(c)) {
            c = c.toFixed(4);
        }
        cels.value = c;
    }
});