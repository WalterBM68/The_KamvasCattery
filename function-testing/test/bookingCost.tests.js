
describe("The booking function for Kamva's Cattery", function(){
    it('On Monday the total cost for booking must be R135.00' , function(){
        assert.equal(135.00, bookingCost({
            check_in_day: 'Monday',
            duration: 3,
            cat_name : 'Snowy'
          }));
    });
    it('On Wednesday the total cost for booking must be R101.25' , function(){
        assert.equal(101.25, bookingCost({
            check_in_day: 'Wednesday',
            duration: 3,
            cat_name : 'Snowy'
          }));
    });
    it('On Friday the total cost for booking must be R114.75' , function(){
        assert.equal(114.75, bookingCost({
            check_in_day: 'Friday',
            duration: 3,
            cat_name : 'Snowy'
          }));
    });
});