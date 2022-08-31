import { createAccountEmail } from "../src/address";

describe('testing address file', () => {
    var username = "user";
    var plusUsername = "user+newsletter"
    var domain = "@example.com"
    var env = "dev";
    test("adding env with + sign", () => {
        expect(createAccountEmail(username.concat(domain), env)).toBe(username.concat("+", env, domain));
    });

    test("invalid email should throw error", () => {
        expect(() => {
            createAccountEmail(username, env);
        }).toThrowError();
    });

    test("email with + should use - separator", () => {
        expect(createAccountEmail(plusUsername.concat(domain), env)).toBe(plusUsername.concat("-", env, domain))
    });
})