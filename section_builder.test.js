describe("SectionBuilder", function() {
    //it("should return ", function() {
    //    var sb = new SectionBuilder([{x:100, y:100}, {x:50, y:50}, {x:101, y:1}]).nextValidSections();
    //    console.log(sb)
    //    expect(sb.length).toBe(2);
    //
    //});
    //
    //it("should return only 1s and 10s", function() {
    //    var sb = new SectionBuilder([{x:10, y:10}, {x:50, y:50}, {x:1, y:1}], [new Section(11, 11, {x:10, y:10})]).nextValidSections();
    //    expect(sb.length).toBe(2);
    //});
    //
    //it("should return 0,0 as next gap", function() {
    //    var gap = new SectionBuilder().nextGap();
    //    expect(gap.x).toBe(0);
    //    expect(gap.y).toBe(0);
    //});
    //
    //it("should return 11,0 as next gap", function() {
    //    var gap = new SectionBuilder([],[new Section(11, 11, {x:10, y:10})]).nextGap();
    //    expect(gap.x).toBe(21);
    //    expect(gap.y).toBe(11);
    //});
    //it("should return 11,0 as next gap", function() {
    //    var gap = new SectionBuilder([],[new Section(0, 0, {x:10, y:10})]).nextGap();
    //    console.log(gap)
    //});


    it("should build until 100% height and width filled with sections", function() {
        var sections = new SectionBuilder([{x:25, y:25},{x:50, y:50}]).build();
        var html = sections.map(function(s){
            return '<div style="left:' + s.min.x + '%;width:' + s.dimensions.x + '%;top:' + s.min.y  + '%;height:' + s.dimensions.y + '%;">' + JSON.stringify(s) + '</div>'
        }).join("\n");


        console.log(html)


    });
});
