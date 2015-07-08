describe("Segmentor", function() {
    var segmentor = new Segmentor();

    it("should return 100%x100% segment if x and y segment is 1", function() {
        var sections = segmentor.segment(1,1);
        expect(sections.length).toBe(1);
    });
    it("should return [100%x100%,100%50%] segments if x is 1 and y is 2", function() {
        var sections = segmentor.segment(1,2);
        console.log(sections);
        expect(sections.length).toBe(2);
    });
    it("should return [100%x100%,100%50%,50%100%,50%50%] segments if x is 2 and y is 2", function() {
        var sections = segmentor.segment(2,2);
        console.log(sections);
        expect(sections.length).toBe(4);
    });

    it("should return [50%50%, 50%100%] segments if x is 2 and y is 2", function() {
        var sections = segmentor.segment(2,2,2,1);
        console.log(sections);
        expect(sections.length).toBe(2);
    });

});