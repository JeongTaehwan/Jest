const fn = require("./Function")

// mock function : 테스트하기 위해 흉내만 내는 함수
// .mock 프로퍼티에 호출된 값이 고스란히 저장되 있다는 강점이 있음 
// .calls로 알 수 있는 것은 함수가 총 몇 번 호출 됬는지와 호출될 때 전달 된 값을 알 수 있음
// .results에는 return된 값이 배열로 들어있음
// ReturnValueOnce를 이용하여 실행할 때 마다 각각 다른 값을 넣어 줄 수 있음
const mockFn = jest.fn();

mockFn
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValue(true)

const result = [1, 2, 3, 4, 5].filter(num => mockFn(num));

test('홀수는 1,3,5 이다', () => {
    expect(result).toStrictEqual([1, 3, 5]); // 배열을 확인할 땐 toStrictEqual을 사용해야 함 
})