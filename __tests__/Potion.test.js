test('creates  health potion object', ()=>{
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number))
});