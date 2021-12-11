enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

/*
enum Role {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR,
} 이렇게 하면 ADMIN은 숫자 5가 되고 다른 식별자들은 시작값으로부터 증가하는식으로 된다.
READ_ONLY = 6, AUTHOR 는 7
 */
const person = {
    name: "Wony",
    age: 30,
    hobbies: ["Sports", "Cokking"],
    role: Role.ADMIN,
    // 관리자는 0, 읽기 전용 사용자가 1, 작성자가 2
};
