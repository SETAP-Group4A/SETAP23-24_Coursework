const {
    validateEmail,
    validatePassword
  } = require('./login_signup.js');

  describe('validateEmail function', () => {
    test('should return true for valid email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    test('should return false for invalid email', () => {
      expect(validateEmail('invalidemail')).toBe(false);
    });
  });

  describe('validatePassword function', () => {
    test('should return true for valid password', () => {
      expect(validatePassword('Test123@')).toBe(true);
    });

    test('should return false for invalid password', () => {
      expect(validatePassword('short')).toBe(false);
      expect(validatePassword('nopassword')).toBe(false);
      expect(validatePassword('NoSpecialCharacter123')).toBe(false);
    });
  });