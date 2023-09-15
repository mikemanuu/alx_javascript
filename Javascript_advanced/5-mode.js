#!/usr/bin/node

function changeMode(size, weight, transform, background, color) {
    return () => {
        document.body.style.fontSize = size;
        document.body.style.weight = weight;
        document.body.style.transform = transform;
        document.body.style.background = background;
        document.body.style.color = color;
    };
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    const para = document.createElement('p');
    para.innerText = 'Welcome Holberton!';
    document.body.appendChild(para);

    const spookyBtn = document.createElement('button');
    spookyBtn.appendChild(document.createTextNode('Spooky'));
    document.body.appendChild(spookyBtn);
    spookyBtn.addEventListener('click', spooky);

    const darkModeBtn = document.createElement('button');
    darkModeBtn.appendChild(document.createTextNode('Dark Mode'));
    document.body.appendChild(darkModeBtn);
    darkModeBtn.addEventListener('click', darkMode);

    const screamModeBtn = document.createElement('button');
    screamModeBtn.appendChild(document.createTextNode('Scream Mode'));
    document.body.appendChild(screamModeBtn);
    screamModeBtn.addEventListener('click', screamMode);

}
main();
