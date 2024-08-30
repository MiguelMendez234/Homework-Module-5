
import esperarSegundos from './async.js';

const secuencia = async () => {
    await esperarSegundos(2);
    await esperarSegundos(3);

}
secuencia()