//1. arr 배열 요소에 각각 *2 인 값을 가져오기
const arr = [1, 2, 3, 4];
const result = [];
for (let i = 0; i < 4; i++) {
    result.push(arr[i] * 2);
} //[2,4,6,8]
arr.map((element, index) => {
    return element * 2;
}) //기존배열 값은 변하지 않는다. 새로운 배열을 생성해 넣는다. arr[2,4,6,8]

//2. [1,2,3,4,5,6,7,8,9] 생성
Array(9); //[비어 있음 × 9]
Array(9).fill(); //[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] 
Array(3).fill(5); // [5, 5, 5]
Array(9).fill(0).map((element, index) => {
    return element + 1;
}) // [1, 1, 1, 1, 1]
Array(9).fill(0).map((e, i) => {
    return i + 1;
})  //[1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = Array(9).fill().map((v, i) => i + 1);
//화살표 함수 중괄호 return 생략가능
//for문으로 push하는 것보다 간결함 (성능은 조금 떨어짐)


//259p 1분퀴즈
const array = [1,3,5,7];
for(let i = 0 ; i < array.length; i++) {
    const index = i;
    console.log (array[i], i);
}
//답
for(let i = 0 ; i < array.length; i++) {
    console.log (array[i], i);
}