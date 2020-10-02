describe('getWeatherFor', () => {
    describe('when passed "Sydney"', () => {
      it('should resolve 25', () => {
        return expectAsync(getWeatherFor('Sydney')).toBeResolvedTo(25);
      });
    });
  });

    describe ('When passsed "Melboune"', () => {
        it ('should resolve 15' ,() => {
            return expectAsync(getWeatherFor('Melbourne')).toBeResolvedTo(15);
        });
    });

    describe ('When passed any other city apart from "Sydney and Melbourne"'  ,() => {
        it ('should throw an error' ,() => {
            return expectAsync(getWeatherFor('London')).toBeRejectedWith('City London does not exist in our database');
        });
    });
  