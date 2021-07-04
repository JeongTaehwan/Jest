const fn = require("./Function")

// mock function : 테스트하기 위해 흉내만 내는 함수
// .mock 프로퍼티에 호출된 값이 고스란히 저장되 있다는 강점이 있음 
// calls로 알 수 있는 것은 함수가 총 몇 번 호출 됬는지와 호출될 때 전달 된 값을 알 수 있음
const mockFn = jest.fn();

mockFn(1);
mockFn(2);

test('함수는 2번 실행됨', () => {
    expect(mockFn.mock.calls.length).toBe(2);
})

test('두 번째로 호출된 mock함수의 첫번째 인수 값은 2이다', () => {
    expect(mockFn.mock.calls[1][0]).toBe(2);
})