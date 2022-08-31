# create-account
Basic function that accepts an email address and environment as input, and appends the environment to the email username separated by a plus-code.

If the original email address already contains a `+`, it uses a `-` as the separator instead.

## Usage
1. To run the code from source: `npm run ts-run`
2. To compile it to JS: `npm build`
3. To run tests: `npm run test`