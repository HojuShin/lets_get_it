//Q. 2021년 2월 21일과 2021년 3월 3일은 며칠 차이?
(new Date(2021, 2, 3) - new Date(2021, 1, 21)) / 1000 / 60
//(밀리초) / 1000 : 초
//(밀리초) / 1000 / 60 : 분
//(밀리초) / 1000 / 60 / 60: 시간
//(밀리초) / 1000 / 60 / 60 / 24 : 일

//reduce 함수
let userList = [
    { name: "mike", age: 30 },
    { name: "tom", age: 10 },
    { name: "jane", age: 27 },
    { name: "sue", age: 26 },
    { name: "harry", age: 42 },
    { name: "steve", age: 60 },
]

let result = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []) //초기값->빈배열에 넣어 반환

//총 나이 구하기
let result = userList.reduce((prev, cur) => {
    return prev + cur.age;
}, 0)

//이름이 3글자
let result = userList.reduce((prev, cur) => {
    if (cur.name.length === 3) {
        prev.push(cur.name);
    }
    return prev;
}, [])
console.log(result);

//