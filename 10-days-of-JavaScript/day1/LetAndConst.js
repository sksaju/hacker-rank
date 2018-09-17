function main() {
    const PI = 3.141592653589793;
    const radius = parseFloat(readLine());
    let area = PI*(radius*radius);
    let perimeter = 2*PI*radius;
    console.log(area);
    console.log(perimeter);
}