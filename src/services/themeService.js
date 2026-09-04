export function setTheme(themeName){
    const HTML = document.documentElement
    HTML.setAttribute('data-theme', themeName)
    localStorage.setItem('app-theme', themeName)
}

export function getTheme() {
    if(!localStorage.getItem('app-theme')){
        return 'light'
    } else {
        return localStorage.getItem('app-theme')
    }
}

export function initTheme(){
    setTheme(getTheme())
}

export function toggleTheme(){
    if(getTheme() === 'light') {
        setTheme('dark')
    } else {
        setTheme('light')
    }
}