const fn = require("./Function")

// mock function : 테스트하기 위해 흉내만 내는 함수
// .mock 프로퍼티에 호출된 값이 고스란히 저장되 있다는 강점이 있음 
// .calls로 알 수 있는 것은 함수가 총 몇 번 호출 됬는지와 호출될 때 전달 된 값을 알 수 있음
// .results에는 return된 값이 배열로 들어있음
const mockFn = jest.fn(num => num + 1);

mockFn(10);
mockFn(20);
mockFn(30);

test('10에서 1 증가한 값이 반환된다', () => {
    expect(mockFn.mock.results[0].value).toBe(11);
});

test('20에서 1 증가한 값이 반환된다', () => {
    expect(mockFn.mock.results[1].value).toBe(21);
});

test('30에서 1 증가한 값이 반환된다', () => {
    expect(mockFn.mock.results[2].value).toBe(31);
});
