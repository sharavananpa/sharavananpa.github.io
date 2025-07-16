const accentColors = [
    '#CC3333',
    '#FFB300',
    '#33AA55',
    '#3366CC'
];

let base64Cache = new Map();

function changeFavicon(color) {

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path fill="${color}" d="M161.13 4.86v345.96H504L356.29 499.36H10.55V145.7z"/><path fill="${darken(color)}" d="M152.63 10.58h348.8v348.8h-348.8z"/><path fill="#555" d="M152.63 55.01a10.58 10.58 0 0 1-10.58-10.58V10.58a10.58 10.58 0 1 1 21.16 0v33.85c0 5.84-4.74 10.58-10.58 10.58zm0 230.23a10.58 10.58 0 0 1-10.58-10.58v-64.25a10.58 10.58 0 1 1 21.16 0v64.25c0 5.84-4.74 10.58-10.58 10.58zm0-115.11a10.58 10.58 0 0 1-10.58-10.58V95.3a10.58 10.58 0 1 1 21.16 0v64.25c0 5.84-4.74 10.58-10.58 10.58zm33.85 199.82h-33.85a10.58 10.58 0 0 1-10.58-10.58v-33.85a10.58 10.58 0 1 1 21.16 0v23.27h23.27a10.58 10.58 0 1 1 0 21.16zm230.22 0h-64.25a10.58 10.58 0 1 1 0-21.16h64.25a10.58 10.58 0 1 1 0 21.16zm-115.11 0h-64.25a10.58 10.58 0 1 1 0-21.16h64.25a10.58 10.58 0 1 1 0 21.16zm199.83 0h-33.85a10.58 10.58 0 1 1 0-21.16h33.85a10.58 10.58 0 1 1 0 21.16zM10.58 512a10.55 10.55 0 0 1-7.48-3.1 10.58 10.58 0 0 1 0-14.96L27.04 470A10.58 10.58 0 0 1 42 484.96L18.06 508.9a10.55 10.55 0 0 1-7.48 3.1zm72.33-72.33a10.55 10.55 0 0 1-7.48-3.1 10.58 10.58 0 0 1 0-14.96l23.93-23.94a10.58 10.58 0 0 1 14.97 14.96l-23.94 23.94a10.55 10.55 0 0 1-7.48 3.1z"/><path fill="#1a1a1a" d="M501.42 0H152.63a10.58 10.58 0 0 0-7.48 3.1L3.1 145.15a10.55 10.55 0 0 0-3.1 7.48v348.8C0 507.25 4.74 512 10.58 512h348.79a10.55 10.55 0 0 0 7.48-3.1L508.9 366.85a10.58 10.58 0 0 0 3.1-7.48V10.58C512 4.74 507.26 0 501.42 0zM157.01 21.16h318.87L354.99 142.05H36.12zm191.78 469.68H21.15V163.2h327.63v327.63zm21.16-14.96V157L490.84 36.1V355z"/></svg>`;

    const favicon = document.getElementById('favicon');
    const hash = fnv1aHash(svg);
    if (!base64Cache.has(hash)) {
        const base64 = svgToBase64(svg);
        base64Cache.set(hash, base64);
    }
    favicon.href = base64Cache.get(hash);
}

function darken(color) {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);

    r = Math.max(0, r - 31);
    g = Math.max(0, g - 31);
    b = Math.max(0, b - 31);

    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
}

function fnv1aHash(str) {
    let hash = 2166136261n;
    for (let i = 0; i < str.length; i++) {
        hash ^= BigInt(str.charCodeAt(i));
        hash *= 16777619n;
    }
    return hash.toString();
}

function svgToBase64(svg) {
    return `data:image/svg+xml;base64,${btoa(encodeURIComponent(svg).replace(/%([0-9A-F]{2})/g, (_, p1) =>
        String.fromCharCode('0x' + p1)
    ))}`;
}

function initializeAccentColor() {
    const existingColor = localStorage.getItem('accentColor');
    const existingIndex = localStorage.getItem('accentColorIndex');

    if (existingColor !== null && existingIndex !== null) {
        document.body.style.setProperty('--accent-color', existingColor);
				document.body.style.setProperty('--accent-color-darkened', darken(existingColor));
        if (browserSupport) {
            changeFavicon(existingColor);
        }
    } else {
        const randomIndex = Math.floor(Math.random() * accentColors.length);
        const selectedColor = accentColors[randomIndex];
        document.body.style.setProperty('--accent-color', selectedColor);
				document.body.style.setProperty('--accent-color-darkened', darken(selectedColor));
        if (browserSupport) {
            changeFavicon(selectedColor);
        }
        localStorage.setItem('accentColor', selectedColor);
        localStorage.setItem('accentColorIndex', randomIndex);
    }
}

function setAccentColor() {
    let randomIndex = 0;
    const existingIndex = localStorage.getItem('accentColorIndex');
    if (existingIndex !== null) {
        randomIndex = (parseInt(existingIndex) + 1) % accentColors.length;
    }
    const selectedColor = accentColors[randomIndex];
    document.body.style.setProperty('--accent-color', selectedColor);
		document.body.style.setProperty('--accent-color-darkened', darken(selectedColor));
    if (browserSupport) {
        changeFavicon(selectedColor);
    }
    localStorage.setItem('accentColor', selectedColor);
    localStorage.setItem('accentColorIndex', randomIndex);
}

const userAgent = navigator.userAgent;
let browserSupport = false;

if (/Chrome/.test(userAgent) || /Firefox/.test(userAgent)) {
    browserSupport = true;
}

window.addEventListener('storage', (e) => {
    if (e.key === 'accentColor') {
        document.body.style.setProperty('--accent-color', e.newValue);
				document.body.style.setProperty('--accent-color-darkened', darken(e.newValue));
        if (browserSupport) {
            changeFavicon(e.newValue);
        }
    }
});

initializeAccentColor();
