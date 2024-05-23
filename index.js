
import JatekTer from "./JatekTer.js";


class Allapot {
    
    #lista = [false, false, true, true, false, true, false, true, true]
    #db = 0;
    constructor() {
        new JatekTer(this.#lista)
        $(window).on("kapcsolas", (event) => {
            //console.log(event.detail)
            let id = event.detail;
            /* itt változtatjuk meg a program állapotát */
            this.#szomszedokValtoztatasa(id);
            new JatekTer(this.#lista);
        })
    }

    #szomszedokValtoztatasa(id) {
        this.#lista[id] = !this.#lista[id]
        if (id % 3 !== 0) {
            this.#lista[id - 1] = !this.#lista[id - 1]
        }
        if (id % 3 !== 2) {
            this.#lista[id + 1] = !this.#lista[id+1]
        }
        if (id > 2) {
            this.#lista[id - 3] = !this.#lista[id - 3]
        }
        if (id < 6) {
            this.#lista[id + 3] = !this.#lista[id + 3]
        }
    }

    #lekapcsoltakSzama() {
        
    }
}

new Allapot();