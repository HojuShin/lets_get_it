//Q.클래스-사람, 생성자 메서드-이름,나이를 속성으로 입력받으시오.
//자신의 이름과 나이를 콘솔에 출력하는 메서드도 두개 만드시오
class Person { //부모
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayName() {
        console.log(this.name);
    }
    displayAge() {
        console.log(age);
    }
}

//Q. HTML, CSS, JS를 할 줄 아는 개발자를 만들어 봅시다.
class Developer extends Person {
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }
}
const developer = new Developer('shin', 27, ['HTML','CSS','js']);