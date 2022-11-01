describe('Strategy pattern', () => {
  it('should run', () => {
    const auth = new Authenticator();
    auth.use('twitter', new TwitterStrategy());
    const res = auth.authenticate('twitter', '123');
    expect(res).toBe('Twitter account authentication failed!');
  });
});
