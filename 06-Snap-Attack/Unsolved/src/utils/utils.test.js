import {randomColour, colourPalettes} from '.';

describe('randomColour', () => {
    it('should return a string', () => {
        const result = randomColour();
        expect(typeof result).toEqual('string');
    })

    it('should return a default palette colour when no type specified', () => {
        const result = randomColour();
        expect(colourPalettes.default).toContain(result);
    });

    Object.keys(colourPalettes).forEach((paletteType) => {
        it (`should return a ${paletteType} palette colour when specified`, () => {
            const result = randomColour(paletteType);
            expect(colourPalettes[paletteType]).toContain(result);
        });
    });
});