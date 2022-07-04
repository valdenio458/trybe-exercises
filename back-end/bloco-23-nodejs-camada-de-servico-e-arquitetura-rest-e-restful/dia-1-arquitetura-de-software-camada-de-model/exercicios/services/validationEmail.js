function isValidEmail (email) {
const TEST_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

if(!email || typeof email !== 'string') return false;
if(!TEST_EMAIL.test(email)) return false;

return true
}

module.exports = isValidEmail;