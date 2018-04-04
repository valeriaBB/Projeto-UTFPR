class Robo {
    constructor(velocidade, movimento){
        this._velocidade = velocidade;
        this._movimento = movimento; //'por segundo/ por rotação/ '
        Object.freeze(this); // para encapsulamento
    }

    get velocidade(){
        return this._velocidade;
    }

    get movimento(){
        return this._movimento;
    }
}