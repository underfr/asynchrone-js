export function setTheme(themeName){
    const HTML = document.documentElement
    HTML.setAttribute('data-theme', themeName)
    localStorage.setItem('app-theme', themeName)
}

export function getTheme() {
    return localStorage.getItem('app-theme') ?? 'light';
}

export function initTheme(){
    setTheme(getTheme())
}

export function toggleTheme() {
    setTheme(getTheme() === 'light' ? 'dark' : 'light');
}