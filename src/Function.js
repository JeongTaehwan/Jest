const fn = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age) => ({ name, age, gender: undefined }),
    ThrowErr: () => {
        throw new error('Error!'); // 오류 발생 함수
    }
};

module.exports = fn;