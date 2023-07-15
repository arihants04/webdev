hex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
rgb = (r, g, b) => {
    return `rgb(${r}, ${g},${b})`;
}

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        let { r, g, b } = this;
        return `rgb(${r}, ${g},${b})`;
    }
    color.hex = function () {
        let { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this)
}

new Color(255, 40, 100);