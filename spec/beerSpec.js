describe ('canbuybeer' ,() => {
    describe('when greater than 17', () => {
        it('should allow to buy beer', () => {

            expect(canBuyBeer(18)).toBe(true);

        });
    });
});

describe('canGregBuyBeer', () => {
    describe('when greg is 18', () => {
      it('should return "Greg is 18, he can buy beer!"', () => {
        const originalAge = greg.age;
        greg.age = 18
        
        const result = canGregBuyBeer();
  
        expect(result).toBe('Greg is 18, he can buy beer!');
        greg.age = originalAge;
      })
    });
  });

  describe('canGregBuyBeer', () => {
    describe('when greg is less than 18', () => {
      it('should return "Greg is underage, he cannot buy beer!"', () => {
        const originalAge = greg.age;
        greg.age = 17
        
        const result = canGregBuyBeer();
  
        expect(result).toBe("Greg is" + " " + greg.age + ", he can't buy beer :(");
        greg.age = originalAge;
      })
    });
  });






