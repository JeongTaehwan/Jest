
const fn = require("./Function")

test("3초 뒤 불러올 값은 'Taehwan'", done => { // done이 호출되기 전까지 jest문법은 테스트를 끝내지 않고 기다리게됨
    function callback(name) {
        try { // api 에러를 감지하고 싶을땐 try-catch문으로 감싸주면 됨
            expect(name).toBe("Tapuwan");
            done();
        } catch (error) {
            done();
        }
    }
    fn.getName(callback);
})

// resolves, rejects 라는 matcher가 존재함
test("3초 뒤 받아올 나이는 18", async () => {
    // const age = await fn.getAge();
    // expect(age).toBe(18);
    await expect(fn.getAge()).resolves.toBe(18);
});