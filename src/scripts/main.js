document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 3000,
        once: true,
    });

    setTimeout(() => {
        AOS.refresh()
    }, 3000)
});


const dataDoEvento = new Date("2025-06-11T21:00:00");
const timeStampleDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => {
    const now = new Date();
    const timeStampleAtual = now.getTime();

    const distanciaAteOEvento = timeStampleDoEvento - timeStampleAtual;

    const diaEmMs = 24 * 60 * 60 * 1000;
    const horaEmMs = 60 * 60 * 1000;
    const minutoEmMs = 60 * 1000;

    const diasAteOevento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasRestantesMs = distanciaAteOEvento % diaEmMs;
    const horasAteOevento = Math.floor(horasRestantesMs / horaEmMs);
    const minutosRestantesMs = horasRestantesMs % horaEmMs;
    const minutosAteOevento = Math.floor(minutosRestantesMs / minutoEmMs);
    const segundosRestantesMs = minutosRestantesMs % minutoEmMs;
    const segundosAteOevento = Math.floor(segundosRestantesMs / 1000);

    document.getElementById('timer').innerHTML = `${diasAteOevento}d ${horasAteOevento}h ${minutosAteOevento}m ${segundosAteOevento}s`;
}, 1000);



