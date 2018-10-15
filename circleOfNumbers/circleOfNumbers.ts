function circleOfNumbers(n: number, firstNumber: number): number {

    const numArray = [];
    const halfWay = n / 2; // halfway point
    // now that we have the halfway point,
    // do we go forwards or backwards

    for (let i = 0; i < n; i++) {
        numArray.push(i);
    }

    if(firstNumber < halfWay) {
        return numArray[firstNumber + halfWay]
    }

    return numArray[firstNumber - halfWay];

}

console.log(circleOfNumbers(10, 2));