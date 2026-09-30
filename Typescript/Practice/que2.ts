function solve(envelopes: number[][]): number {
    if (!envelopes || envelopes.length === 0) {
        return 0;
    }

    // Sort by width ascending; if widths match, sort by height descending
    envelopes.sort(function(a, b) {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return b[1] - a[1];
    });

    // tails[i] stores the smallest tail of all increasing subsequences of length i + 1
    var tails: number[] = [];

    for (var i = 0; i < envelopes.length; i++) {
        var h = envelopes[i][1];

        // Binary search for the insertion index of h in tails
        var left = 0;
        var right = tails.length;

        while (left < right) {
            var mid = Math.floor((left + right) / 2);
            if (tails[mid] < h) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (left === tails.length) {
            tails.push(h);
        } else {
            tails[left] = h;
        }
    }

    return tails.length;
}