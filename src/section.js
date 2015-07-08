var Section = function (x, y, segment) {
    var _segmentBounds = {
        bl: {x: x, y: y},
        br: {x: segment.x + x, y: y},
        tl: {x: x, y: segment.y + y},
        tr: {x: segment.x + x, y: segment.y + y}
    };
    var _max = {
        x: _segmentBounds.br.x,
        y: _segmentBounds.tl.y
    };
    var _min = {
        x: _segmentBounds.bl.x,
        y: _segmentBounds.bl.y
    };


    var _overlaps_v2 = function (other) {
        var notConsuming = (other.max.x <= _min.x) ||
            (other.max.y <= _min.y) ||
            (other.min.y >= _max.y) ||
            (other.min.x >= _max.x);

        return !notConsuming;
    };

    return {
        overlaps: _overlaps_v2,
        bounds: _segmentBounds,
        max: _max,
        min: _min,
        dimensions: segment

    }
};