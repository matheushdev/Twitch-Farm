let d = new Date()
let h = `${d.getHours()}`.padStart(2, '0')
let m = `${d.getMinutes()}`.padStart(2, '0')
let s = `${d.getSeconds()}`.padStart(2, '0')
var time = `${h}:${m}:${s}`;
var i = 1;

async function farmBox() {
    setInterval(() => {
        var box = document.querySelector('.tw-button__text');
        if (!box) {
            console.log(`[${time}] Não encontrou nada...\n`);
        } else {
            var qnt = i++; 
            console.log(`[${time}] Encontrou recompensa.\n`);
            box.click();
            console.log(`[${time}] Recompensa pega. (TOTAL: ${qnt})\n`);
        }
    }, 60000);
}

farmBox();
