function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 10);
console.log(rand);