const fn = require("./Function")

// beforeEach, afterEach 사용
let num = 0;

beforeEach(() => { // 이 함수는 각 테스트 직전에 실행됨
    num = 0;
})

afterEach(() => { // 이 함수는 각 테스트 직후에 실행됨
    num = 0;
})

test("0 + 1 = 1", () => {
    num = fn.add(num, 1);
    expect(num).toBe(1);
})

test("0 + 2 = 2", () => {
    num = fn.add(num, 2);
    expect(num).toBe(2);
})

// beforeAll, afterAll 사용
let user;

beforeAll(async () => { // 테스트 최초에 한 번 실행됨
    user = await fn.connectUserDb();
})

afterAll(() => { // 테스트 최후에 한 번 실행됨
    return fn.disconnectDb();
})

test("이름은 Taehwan", () => {
    expect(user.name).toBe('Taehwan');
});

test("나이는 18", () => {
    expect(user.age).toBe(18);
});

test("성별은 남성", () => {
    expect(user.gender).toBe('Male');
});

// describe 사용
describe("Car 관련 직업", () => {
    let car;

    beforeAll(async () => { // 테스트 최초에 한 번 실행됨
        car = await fn.connectCarDb();
    })

    afterAll(() => { // 테스트 최후에 한 번 실행됨
        return fn.disconnectCarDb();
    })

    test("차종은 'bmw'", () => {
        expect(car.brand).toBe('bmw');
    });

    test.skip("자동차명은 'z4'", () => { // skip시 이 테스트를 스킵하고 실행시킴
        expect(car.name).toBe('z4');
    });

    test.only("색상은 빨간색", () => { // only시 이 테스트만 실행 나머지 테스트는 스킵
        expect(car.color).toBe('red');
    });
});