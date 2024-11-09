const accentColors = [
    '#FF0000',
    '#FFFF00',
    '#00FF00',
    '#00FFFF'
];

function initializeAccentColor() {
    const existingColor = localStorage.getItem('accentColor');
    const existingIndex = localStorage.getItem('accentColorIndex');

    if (existingColor !== null && existingIndex !== null) {
        document.body.style.setProperty('--accent-color', existingColor);
    } else {
        const randomIndex = Math.floor(Math.random() * accentColors.length);
        const selectedColor = accentColors[randomIndex];
        document.body.style.setProperty('--accent-color', selectedColor);
        localStorage.setItem('accentColor', selectedColor);
        localStorage.setItem('accentColorIndex', randomIndex);
    }
}

window.addEventListener('storage', (e) => {
    if (e.key === 'accentColor') {
        document.body.style.setProperty('--accent-color', e.newValue);
    }
});

initializeAccentColor();