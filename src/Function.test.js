const fn = require("./Function")
const mockFn = jest.fn();

// mock function : 테스트하기 위해 흉내만 내는 함수
// .mock 프로퍼티에 호출된 값이 고스란히 저장되 있다는 강점이 있음 
// .calls로 알 수 있는 것은 함수가 총 몇 번 호출 됬는지와 호출될 때 전달 된 값을 알 수 있음
// .results에는 return된 값이 배열로 들어있음
// ReturnValueOnce를 이용하여 실행할 때 마다 각각 다른 값을 넣어 줄 수 있음
// mockResolvedValue는 비동기 함수를 흉내낼 수 있음
// jest.mock으로 fn을 모킹모듈로 만듬
// 모킹모듈을 활용하면 선언한 함수가 작동하지 않음

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test('한 번 이상 호출?', () => {
    expect(mockFn).toBeCalled(); // toBeCalled는 한 번이라도 호출됬으면 통과
});

test('정확히 3번 호출?', () => {
    expect(mockFn).toBeCalledTimes(3); // toBeCalledTimes는 정확한 호출 회수를 의미
});

test('10, 20을 전달받은 함수가 있는가?', () => {
    expect(mockFn).toBeCalledWith(10, 20); // toBeCalledWith는 인수로 어떤 값들을 받았는지 체크함
});

test('마지막 함수는 30,40을 받았는가?', () => {
    expect(mockFn).lastCalledWith(30, 40); // lastCalledWith는 마지막으로 받아온 인수만을 확인함
});