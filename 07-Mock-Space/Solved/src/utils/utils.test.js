import {randomColour, colourPalettes, checkIfInSpace} from '.';
import axios from 'axios';

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

const mockAstronauts = [
    {name: 'mockAstronaut1'},
    {name: 'mockAstronaut2'},
]

jest.mock('axios', () => ({
    get: jest.fn(() => {
        return Promise.resolve({data: {number: 1, people: mockAstronauts}})
    })
}));

describe('checkIfInSpace', () => {
    it ('should call axios.get with correct url', () => {
        checkIfInSpace(mockAstronauts[0].name);
        expect(axios.get.mock.calls[0]).toMatchSnapshot();
    })
    it ('should filter people by passed name', () => {
        checkIfInSpace(mockAstronauts[0].name).then((spaceInfo) => {
            expect(spaceInfo.people.length).toEqual(1);
            expect(spaceInfo.people[0]).toEqual(mockAstronauts[0]);
        });
    })
})