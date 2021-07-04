const fn = require("./Function")

// mock function : 테스트하기 위해 흉내만 내는 함수
// .mock 프로퍼티에 호출된 값이 고스란히 저장되 있다는 강점이 있음 
// calls로 알 수 있는 것은 함수가 총 몇 번 호출 됬는지와 호출될 때 전달 된 값을 알 수 있음
const mockFn = jest.fn();

function forEachAdd1(arr) {
    arr.forEach(num => {
        mockFn(num + 1);
    });
};

forEachAdd1([10, 20, 30]);

test('Mock함수 호출은 총 3번 됩니다.', () => {
    expect(mockFn.mock.calls.length).toBe(3);
});

test('호출 된 값들은 11,21,31 입니다', () => {
    expect(mockFn.mock.calls[0][0]).toBe(11);
    expect(mockFn.mock.calls[1][0]).toBe(21);
    expect(mockFn.mock.calls[2][0]).toBe(31);
})