export function createAccountEmail(email: string, env: string): string {
    if (!email.includes('@')) {
        throw new Error("Error: Must provide a valid email address as input!");
    }

    var separator = '+';
    if (email.includes(separator)) {
        separator = '-';
    }

    var splitEmail = email.split("@");
    var username = splitEmail[0];
    var domain = splitEmail[1];

    return username.concat(separator, env, "@", domain);
}