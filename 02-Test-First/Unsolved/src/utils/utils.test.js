import {randomColour, colourPalette} from '.';

describe('randomColour', () => {
    it('should return a string', () => {
        const result = randomColour();
        expect(typeof result).toEqual('string');
    })

    it('should return a palette colour', () => {
        const result = randomColour();
        expect(colourPalette).toContain(result);
    })

    // update tests to cover
    // 1. No palette type being specified.
    // 2. A palette type being specified.
});