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

test('null은 null입니다.', () => {
    expect(null).toBeNull(); // 값이 null 값이면 통과함
});

test('0은 false 입니다', () => {
    expect(fn.add(1, -1)).toBeFalsy(); // 값이 false면 통과함
});

test('빈 문자열이 아니면 true입니다', () => {
    expect(fn.add("Hello", "World")).toBeTruthy(); // 값이 false면 통과함
});

test('ID는 10자 이하여야 한다.', () => {
    const id = 'THE_BLACK';
    expect(id.length).toBeLessThanOrEqual(10); // toBeLessThanOrEqual : 작거나 같다.
});

test('비밀번호 4자리', () => {
    const pw = '1234';
    expect(pw.length).toEqual(4);
});

test('0.1 + 0.2 = 0.3', () => {
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3); // 소수 더하기 시 근사치를 구분해줌
});

// 문자열과 관련된 작업 정규표현식과 toMatch 사용

test('사용자중에 Taehwan이라는 사람이 있나?', () => {
    expect('Taehwan').toMatch(/Taehwan/i); // 대소문자 구분을 없애려면 뒤에 "i"를 붙여야함
})

// 배열에서 특정 요쇼가 있는지를 보려면 toContain을 사용해야함

test('유저중 Taehwan이라는 사람이 있나?', () => {
    const user = 'Taehwan';
    const userlist = ['Taehyeon', 'Minhyeok', 'Taehwan'];
    expect(userlist).toContain(user);
});

test('이 코드가 에러가 나나?', () => {
    expect(() => fn.ThrowErr).toThrow();
});