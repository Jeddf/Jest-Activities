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
});