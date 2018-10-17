export const colourPalette = [
    '#CBF078',
    '#F8F398',
    '#F1B963',
    '#E46161'
];

export const randomColour = () => {
    const colourIndex = Math.floor(Math.random()*colourPalette.length);
    return colourPalette[colourIndex];
};