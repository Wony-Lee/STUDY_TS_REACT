// 객체 형태
const person = {
    // name에는 string 타입이 와야한다.
    name: "Wony",
    // age에는 number 타입이 와야한다.
    age: 30,
    hobbies: ["Sports", "Cokking"],
    // 튜플
    role: [2, "author"],
};
// 정확히 두 개의 요소가 있는 배열을 원하고, 첫 번째는 number, 두 번째는 string이어야할때 그리고 항상 같이 세트로 있어야할 때
// 타입스크립트는 이에 대한 것을 모르기때문에 명시해주어야한다. 이 때 튜플을 해주어야한다.
/* 
    const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
    } = {
    name: "Wony",
    age: 30,
    hobbies: ["Sports", "Cokking"],
    role: [2, "author"],
    }
    이렇게 명시해줌으로써 튜플 타입으로 사용할 수 있다.

    person.role.push('admin')
    push는 실제로 튜플에서 허용되므로 타입스크립트에서 잡을 수 없다.
    person.role = []; 빈 배열을 허락하지 않는다.
    person.role = [0, 'amdin', 'user']; 지정해놓은 길이보다 긴 경우 허락하지않는다.
    
*/
let facoriteActivities: string[];

// facoriteActivities = 'Soprts'
// 에러가 뜬다. 그 이유는 배열이 아니기때문에  facoriteActivities = ['Soprts'] []로 감싸주자.
// facoriteActivities = ['Soprts',1]
// 이 또한 에러가 뜬다. string array에 number가 추가되어 혼합되었기때문에 이런 경우에는 any를 사용해서 둘 다 사용할 수 있다. 자주 사용하지는 말자.

for (const hobby of person.hobbies) {
    console.log(hobby);
    // 이 부분은 에러가 뜨지 않는 이유는 typescript가 타입추론을 통해 string array 라는 것을 알기때문에 에러가 발생하지않는다.

    /*
        hobby.map() 은 에러가 발생한다.
        맵 메서드는 배열에서 사용할 수 있지만, 문자열에서는 사용할 수 없기때문이다.
    */
}

/*
    자바스크립트의 object와 타입스크립트의 object는 다르다.
    const person = {
        name:string;
        age:number;
    } => 타입스크립트의 오브젝트
    const person = {
        name: 'name',
        age: 5,
    } => 자바스크립트의 오브젝트

    타입스크립트는 세미콜론으로 정의가되고, 자바스크립트는 콤마로 정의가 된다.

    const person:object = {
        name: "Wony",
        age: 30,
    } 
    좀 더 나아가서
    const person: {} = {
        name: "Wony",
        age: 30,
    }  빈 객체를 주는 것만으로도 오브젝트라는 것을 알려줄 수 있다.

    이제 빈 객체에 키 밸류를 넣어 value의 타입이 name에 저장될거라고 명시해주는 것이다.
    const person: {
        name: string; 
        age: number;
    } = {
        name: "Wony",
        age: 30,
    } 
    // typescript 가 우리가 작업하는 object type이 무엇인지 이해할 수 있게 돕는 것이다.
*/

console.log(person);
// console.log(person.nickname); => 컴파일 에러를 일으킴. 왜냐하면 존재하지않는 프로퍼티이기때문
