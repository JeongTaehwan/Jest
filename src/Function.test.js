const fn = require("./Function")

// mock function : 테스트하기 위해 흉내만 내는 함수
// .mock 프로퍼티에 호출된 값이 고스란히 저장되 있다는 강점이 있음 
// .calls로 알 수 있는 것은 함수가 총 몇 번 호출 됬는지와 호출될 때 전달 된 값을 알 수 있음
// .results에는 return된 값이 배열로 들어있음
// ReturnValueOnce를 이용하여 실행할 때 마다 각각 다른 값을 넣어 줄 수 있음
// mockResolvedValue는 비동기 함수를 흉내낼 수 있음
// jest.mock으로 fn을 모킹모듈로 만듬
// 모킹모듈을 활용하면 선언한 함수가 작동하지 않음

jest.mock("./Function");

fn.createUser.mockReturnValue({ name: 'Taehwan' });

test('유저를 만든다', () => {
    const user = fn.createUser('Taehwan');
    expect(user.name).toBe('Taehwan');
})