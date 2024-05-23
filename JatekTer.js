import Lampa from "./Lampa.js";

export default class JatekTer {
    #lista = [];
    constructor(lista) {
        this.#lista = lista;
        let szuloElem = $(".jatekter")
        szuloElem.empty()
        this.#lista.forEach((element, index) => {
            new Lampa(element, index, szuloElem);
        });
    }
}