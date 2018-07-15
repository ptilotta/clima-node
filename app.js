const argv = require('./config/yargs.js').argv;
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }`;

    } catch (e) {
        return `No se puede determinar la termperatura de la ciudad ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));