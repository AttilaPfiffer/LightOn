export default class Lampa {
    #allapot = false;
    #id = 0;
    #divElem;
    #szuloElem;
    constructor(allapot, id, szuloElem) {
        this.#allapot = allapot;
        this.#id = id;
        this.#szuloElem = szuloElem;
        this.#megjelenit();
        this.#divElem = this.#szuloElem.children("div:last-child");
        this.#szinBeallit();
        this.#esemenykezelo();


    }

    #esemenykezelo() {
        this.#divElem.on("click", () => {
            
            this.kattintasTrigger("kapcsolas")
            //console.log(this.#id)
            
            
        
        
    })
    }

    #megjelenit() {
        let txt = `
                <div class = "lampa">
                    
                </div>`
        
                this.#szuloElem.append(txt)
    }

    #szinBeallit() {
        if (this.#allapot) {
            this.#divElem.addClass("felkapcs")
        }
    }

    kattintasTrigger(esemenynev) {
        const e = new CustomEvent(esemenynev, {detail:this.#id})
        window.dispatchEvent(e)
    }
}