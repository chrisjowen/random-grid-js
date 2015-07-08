//
//var BowlingGame = function() {
//
//    var Frame = function(){
//        var _rolls = [];
//
//        return {
//            rolls : _rolls
//        }
//    }
//
//    var _frame = 0;
//    var _frames = [new Frame()]
//
//    var _roll = function(val) {
//        var currentFrame = _frames[frame];
//        if(currentFrame.)
//    }
//
//    return  {
//        roll: _roll,
//        frames: _frames
//    };
//
//}
//
//
//describe("A bowling game", function() {
//
//    it("first roll should equal first frames first roll", function() {
//        var game = new BowlingGame();
//        var pins = 9;
//        game.roll(pins);
//        expect(game.frames[0].rolls[0]).toBe(9);
//
//    });
//
//    it("first roll should equal first frames first roll", function() {
//        var game = new BowlingGame();
//        var pins = 3;
//        game.roll(pins);
//        game.roll(pins);
//        expect(game.frames[0].rolls[0]).toBe(3);
//        expect(game.frames[0].rolls[1]).toBe(3);
//    });
//
//});