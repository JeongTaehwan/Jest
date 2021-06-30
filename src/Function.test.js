const fn = require("./Function");

test('1 = 1', () => {
    expect(1).toBe(1);
});

test('2 + 3 = 5', () => {
    expect(fn.add(2, 3)).toBe(5);
});

test('3 + 3 != 5', () => {
    expect(fn.add(3, 3)).not.toBe(5); // toBe는 숫자나 문자 등 기본 타입 값을 비교할 때 사용
});

test('2 + 3 = 5', () => {
    expect(fn.add(2, 3)).toEqual(5);
});

test('이름과 나이를 전달받아서 객체를 반환해줘 toEqual', () => {
    expect(fn.makeUser('Mike', 30)).toEqual({ //toBe와 비슷함
        name: 'Mike',
        age: 30,
    });
});

test('이름과 나이를 전달받아서 객체를 반환해줘 toStrictEqual', () => {
    expect(fn.makeUser('Mike', 30)).toStrictEqual({ // 보다 더 엄격하게 검사
        name: 'Mike',
        age: 30,
    });
});