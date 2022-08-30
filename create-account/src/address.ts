function createAccountEmail(email: string, env: string): string {
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

console.log(createAccountEmail("test@example.com", "prod"));
console.log(createAccountEmail("test-123@example.com", "dev"));
console.log(createAccountEmail("test+aws@example.com", "dev"));