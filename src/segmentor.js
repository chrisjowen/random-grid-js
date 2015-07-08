var Segmentor = function () {
    var segment = function (maxXSections, maxYSections, minxSections, minYSections) {
        var segments = [];
        var minxSections = minxSections || 1;
        var minYSections = minYSections || 1;

        for (var x = maxXSections; x >= minxSections; x--) {
            for (var y = maxYSections; y >= minYSections; y--) {
                segments.push({x: 100 / x, y: 100 / y});
            }
        }
        return segments;
    };
    return {
        segment: segment
    }
};