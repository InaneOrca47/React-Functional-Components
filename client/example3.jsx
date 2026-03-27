const React = require('react');
const { createRoot } = require('react-dom/client');



const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<Song />);
}

window.onload = init;