const { describe } = require('jest-circus');

describe('login', () => {
  it('should have a welcome screen', async () => {
    await expect(element(by.id('welcome-button'))).toBeVisible();
    await element(by.id('welcome-button')).tap();
  });

  it('should have a reminders screen', async () => {
    await expect(element(by.id('reminders-button'))).toBeVisible();
    await expect(element(by.id('continue-button'))).toBeVisible();
    await element(by.id('continue-button')).tap();
    await element(by.text("I'm sure! Continue.")).tap();
  });

  describe('sign up and in', () => {
    it('should have a sign up screen', async () => {
      await expect(element(by.id('signup-container'))).toBeVisible();
    });

    it('should reject garbage emails', async () => {
      await expect(element(by.id('email-input'))).toBeVisible();
      await element(by.id('email-input')).typeText('Not an email');

      await element(by.id('email-input')).tapReturnKey();
      await element(by.id('signup-continue-button')).tap();

      await expect(element(by.id('email-input'))).toBeVisible();
      await element(by.id('email-input')).clearText();

      await element(by.id('email-input')).typeText('not@email');

      await element(by.id('email-input')).tapReturnKey();
      await expect(element(by.id('signup-continue-button'))).toBeVisible();
      await element(by.id('signup-continue-button')).tap();
      await element(by.id('email-input')).clearText();
    });

    it('should accept valid emails', async () => {
      await expect(element(by.id('email-input'))).toBeVisible();
      await element(by.id('email-input')).typeText('test1@yahoo.com');

      await expect(element(by.id('signup-continue-button'))).toBeVisible();
      await element(by.id('signup-continue-button')).tap();
      await element(by.id('email-input')).tapReturnKey();
    });

    it('should reject invalid passwords', async () => {
      await expect(element(by.id('password-input'))).toBeVisible();
      await element(by.id('password-input')).typeText('murp');
      await element(by.id('password-input')).clearText();

      await expect(element(by.id('signup-continue-button'))).toBeVisible();
      await element(by.id('signup-continue-button')).tap();
      await element(by.id('signup-continue-button')).tap();
    });

    it('should accept valid passwords', async () => {
      await expect(element(by.id('password-input'))).toBeVisible();
      await element(by.id('password-input')).typeText('111111');

      await expect(element(by.id('signup-continue-button'))).toBeVisible();
      await element(by.id('signup-continue-button')).tap();

      await element(by.id('password-input')).tapReturnKey('111111');
      await expect(element(by.id('homescreen-container'))).toBeVisible();
    });
  });
});
