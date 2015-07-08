var SectionBuilder = function (segments, sections) {
    var sections = sections || [];
    var x = 0,
        y = 0;

    function _isSectionAt(x, y) {
        return sections.filter(function(sec) {
            return sec.min.x===x && sec.min.y===y;
        }).length;
    }

    var _nextGap = function () {
        if (sections.length == 0) {
            return {x: 0, y: 0};
        }
        else {
            for(var i=0; i<sections.length;i++) {
                var section = sections[i];
                if (section.max.x >= 100 || section.max.y >= 100) {
                    continue;
                }
                if (!_isSectionAt(section.max.x, section.min.y)) {
                    return {x: section.max.x, y: section.min.y};
                }
                else if (!_isSectionAt(section.min.x, section.max.y)) {
                    return {x: section.min.x, y: section.max.y};
                }
            };
        }
        return null;
    };
    var _validSections = function () {
        var segmentIsInBounds = function (s) {
            return ((s.x + x) <= 100 && (s.y + y) <= 100);
        };
        var segmentWouldNotOverlap = function (segment, section) {
            return !(new Section(x, y, segment).overlaps(section));
        };
        return segments.filter(function (segment) {
            var segmentNotOverlapsSections = function () {
                if (sections.length == 0) {
                    return true;
                }
                return sections.filter(function (section) {
                        return segmentWouldNotOverlap(segment, section);
                    }).length > 0;
            };
            return segmentIsInBounds(segment) && segmentNotOverlapsSections();
        }).map(function (segment) {
            return new Section(x, y, segment);
        });
    };

    var _random = function (to) {
        return Math.floor(Math.random() * to+1)
    };
    var _build = function () {
        var validSections = _validSections();
        var nxtRand = _random(validSections.length);
        var section = validSections[nxtRand-1];

        if(!section) {
            return sections;
        }

        sections.push(section);
        var gap = _nextGap();
        if (!gap) {
            return sections;
        }
        else {
            x = gap.x;
            y = gap.y;
            return _build();
        }
    };

    return {
        nextValidSections: _validSections,
        nextGap: _nextGap,
        build: _build
    };
};