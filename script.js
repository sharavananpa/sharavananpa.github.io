const accentColors = [
    '#FF0000',
    '#FFFF00',
    '#00FF00',
    '#00FFFF'
];

function changeFavicon(color) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001" xml:space="preserve"><path style="fill:${color}" d="M152.629 10.58 10.58 152.331v349.091L152.629 359.67zM503.834 10.58 361.786 152.331v349.091L503.834 359.67z"/><path style="fill:${color}" d="M12.993 152.338H361.79v348.797H12.993z"/><path style="fill:${color}" d="M152.635 10.58h348.797v348.797H152.635z"/><path style="fill:#666" d="M152.628 55.011c-5.844 0-10.579-4.737-10.579-10.579V10.58c0-5.842 4.735-10.579 10.579-10.579s10.579 4.737 10.579 10.579v33.853c0 5.842-4.735 10.578-10.579 10.578zM152.628 285.235c-5.844 0-10.579-4.737-10.579-10.579v-64.248c0-5.842 4.735-10.579 10.579-10.579s10.579 4.737 10.579 10.579v64.248c0 5.842-4.735 10.579-10.579 10.579zm0-115.113c-5.844 0-10.579-4.737-10.579-10.579V95.296c0-5.842 4.735-10.579 10.579-10.579s10.579 4.737 10.579 10.579v64.248c0 5.842-4.735 10.578-10.579 10.578zM186.481 369.951h-33.853c-5.844 0-10.579-4.737-10.579-10.579v-33.853c0-5.842 4.735-10.579 10.579-10.579s10.579 4.737 10.579 10.579v23.274h23.274c5.844 0 10.579 4.737 10.579 10.579s-4.735 10.579-10.579 10.579zM416.705 369.951h-64.25c-5.844 0-10.579-4.737-10.579-10.579s4.735-10.579 10.579-10.579h64.25c5.844 0 10.579 4.737 10.579 10.579s-4.735 10.579-10.579 10.579zm-115.112 0h-64.248c-5.844 0-10.579-4.737-10.579-10.579s4.735-10.579 10.579-10.579h64.248c5.844 0 10.579 4.737 10.579 10.579s-4.737 10.579-10.579 10.579zM501.422 369.951h-33.853c-5.844 0-10.579-4.737-10.579-10.579s4.735-10.579 10.579-10.579h33.853c5.844 0 10.579 4.737 10.579 10.579s-4.737 10.579-10.579 10.579zM10.58 512.001a10.547 10.547 0 0 1-7.481-3.099c-4.131-4.131-4.131-10.83 0-14.96l23.938-23.938c4.133-4.131 10.83-4.131 14.962 0 4.131 4.131 4.131 10.83 0 14.96L18.06 508.902a10.548 10.548 0 0 1-7.48 3.099zM82.907 439.674a10.547 10.547 0 0 1-7.481-3.099c-4.131-4.131-4.131-10.83 0-14.96l23.938-23.938c4.133-4.131 10.83-4.131 14.962 0 4.131 4.131 4.131 10.83 0 14.96l-23.938 23.938a10.553 10.553 0 0 1-7.481 3.099z"/><path d="M501.422.001H152.628a10.58 10.58 0 0 0-7.481 3.099L3.1 145.147a10.553 10.553 0 0 0-3.099 7.481v348.793C.001 507.263 4.736 512 10.58 512h348.791a10.55 10.55 0 0 0 7.481-3.099l142.049-142.049a10.58 10.58 0 0 0 3.098-7.48V10.58c.002-5.843-4.735-10.579-10.577-10.579zM157.01 21.159h318.871L354.99 142.05H36.121L157.01 21.159zm191.784 469.682H21.159V163.208h327.633v327.633h.002zm21.158-14.961V157.011L490.843 36.12v318.87L369.952 475.88z"/></svg>
    `;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const favicon = document.getElementById('favicon');
    favicon.href = url;
}

function initializeAccentColor() {
    const existingColor = localStorage.getItem('accentColor');
    const existingIndex = localStorage.getItem('accentColorIndex');

    if (existingColor !== null && existingIndex !== null) {
        document.body.style.setProperty('--accent-color', existingColor);
        changeFavicon(existingColor);
    } else {
        const randomIndex = Math.floor(Math.random() * accentColors.length);
        const selectedColor = accentColors[randomIndex];
        document.body.style.setProperty('--accent-color', selectedColor);
        changeFavicon(selectedColor);
        localStorage.setItem('accentColor', selectedColor);
        localStorage.setItem('accentColorIndex', randomIndex);
    }
}

window.addEventListener('storage', (e) => {
    if (e.key === 'accentColor') {
        document.body.style.setProperty('--accent-color', e.newValue);
        changeFavicon(e.newValue);
    }
});

initializeAccentColor();