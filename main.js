import './style.css'

// const create = tag => document.createElement(tag)
const query = selector => document.querySelector(selector)
// const queryAll = selector => document.querySelectorAll(selector)
// const style = (element, styles) => Object.assign(element.style, styles)

const app = query('#app')

app.innerText = 'Hello world'
