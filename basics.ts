function add(
    n1: number,
    n2: number,
    printResult: boolean,
    resultPharse: string
) {
    // 2. 1번의 에러 때문에 result를 생성해줌. 이 경우에는 수학적으로 다뤄짐.
    const result = n1 + n2;
    if (printResult) {
        // 1. 이 경우 string 타입인 resultPharse와 number타입의 n1의 결합이 오래된 버그로 인해 string 으로 변환된다.
        //console.log(resultPharse + n1 + n2);
        console.log(resultPharse + result);
    }
    if (!printResult) {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPharse = "Result is : ";

const result = add(number1, number2, printResult, resultPharse);
console.log(result);
