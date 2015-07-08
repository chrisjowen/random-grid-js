describe("Section", function() {
    it("should overlap if is consumed", function() {
        var fullWidthAndHeightSegment = {x:100,y:100};
        var fullWidthAndHeightSection = new Section(0,0, fullWidthAndHeightSegment);
        expect(fullWidthAndHeightSection.overlaps(new Section(0,0, {x:1, y:1}))).toBe(true);
    });
    it("should overlap only if touching", function() {
        var section = new Section(0, 10, {x: 10, y: 10});git p
        expect(section.overlaps(new Section(0,0, {x:10, y:10}))).toBe(false);
        expect(section.overlaps(new Section(0,0, {x:11, y:11}))).toBe(true);
    });
    it("should overlap only if touching as error shows", function() {
        var section = new Section(25, 25, {x: 50, y: 50});
        expect(section.overlaps(new Section(50,25, {x:25, y:25}))).toBe(true);
    });
});