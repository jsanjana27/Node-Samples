const User = require('../../app/models/user.model');

describe("User APIs", function () {
    describe("addUser", function () {
        it("should add a user with name, email,password,attendance,working_hours", function () {
            user = {
                "name": "Sanj",
                "email": "sanjana@gmail.com",
                "password": "root",
                "attendance": "present",
                "working_hours": "8"
            }
            let value = User.addUser(user);
            expect(value).toBe(1)

        console.log(value);
        });

    })
})


