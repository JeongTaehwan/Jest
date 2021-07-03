
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
test("3초 뒤 받아올 나이는 18", () => {
    // return fn.getAge().then(age => { // promise사용시 return을 해주어야 함
    //     expect(age).toBe(18);
    // });
    return expect(fn.getAge()).resolve.toBe(18);
});