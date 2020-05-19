let d = new Date()
let h = `${d.getHours()}`.padStart(2, '0')
let m = `${d.getMinutes()}`.padStart(2, '0')
let s = `${d.getSeconds()}`.padStart(2, '0')
var time = `${h}:${m}:${s}`;

async function farmBox() {
    setInterval(() => {
        var box = document.querySelector('.tw-button__text');
        if (!box) {
            console.log(`[${time}] Não encontrou nada...\n`);
        } else {
            console.log(`[${time}] Encontrou recompensa.\n`);
            box.click();
            console.log(`[${time}] Recompensa pega.\n`);
        }
    }, 60000);
}

const interval = setInterval(() => {
    const header = document.querySelector('.community-points-summary');
    if (header) {
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = 'ON';
        button.classList.add('btn-on');
        button.addEventListener('click', () => {
            console.log(`[${time}] Auto farm ON.\n`);
            farmBox();
        });
        header.appendChild(button);


        /*
            const button2x = document.createElement("button");
            button2x.innerHTML = 'OFF';
            button2x.classList.add('btn-off')
            button2x.addEventListener('click', () => {
                console.log(`[${time}] Auto farm OFF.\n`);
            });
            header.appendChild(button2x);
        */
    }
}, 1000)
