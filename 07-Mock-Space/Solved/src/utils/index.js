import axios from 'axios';

export const colourPalettes = {
    warm: [
        '#FEFF89',
        '#FF9F68',
        '#F85959',
        '#AC005D'
    ],
    cool: [
        '#DFF4F3',
        '#DDE7F2',
        '#B9BBDF',
        '#878ECD'
    ],
    default: [
        '#CBF078',
        '#F8F398',
        '#F1B963',
        '#E46161'
    ]
};

export const randomColour = (type) => {
    const colourPalette = colourPalettes[type] || colourPalettes.default;
    const colourIndex = Math.floor(Math.random() * colourPalette.length);
    return colourPalette[colourIndex];
};

export const checkIfInSpace = (name) => {
    return axios.get('http://api.open-notify.org/astros.json').then((response) => {
        var spaceInfo = response.data;
        spaceInfo.people = spaceInfo.people.filter((astronaut) => {
            return astronaut.name.toLowerCase() === name.toLowerCase();
        })
        return spaceInfo;
    })
};