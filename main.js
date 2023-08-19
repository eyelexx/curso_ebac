function Aprendiz(nome, classe, equipamento, poderPrimario, poderSecundario) {
    this.nome = nome;
    this.classe = classe;
    this.equipamento = equipamento
    this.poderPrimario = poderPrimario;
    this.poderSecundario = poderSecundario;

    this.xp = function() {
        return
    }
}

function Mago(nome, classe, elementoMagico, equipamento, poderPrimario, poderSecundario) {
    Aprendiz.call(this, nome, classe, equipamento, poderPrimario, poderSecundario);

    this.elementoMagico = elementoMagico;

    this.xp = function() {
        return 10
    }
}

function Guerreiro(nome, classe, equipamento, poderPrimario, poderSecundario, energia) {  //Variáveis também são passadas como argumentos
    Aprendiz.call(this, nome, classe, equipamento, poderPrimario, poderSecundario);
    
    let _energia = energia;
    
    this.getEnergia = function() {
        return `Energia: ${_energia}`;
    }

    this.setEnergia = function(valor) {
        if (typeof valor === 'number') {
            _energia = valor
        }
    }

    this.xp = function() {
        return 15
    }
}

function Arqueiro(nome, classe, equipamento, poderPrimario, poderSecundario) {
    Aprendiz.call(this, nome, classe, equipamento, poderPrimario, poderSecundario)

    this.xp = function() {
        return 20
    }
}

const mago1 = new Mago('Douglas', 'Mago', 'Vento', 'Livro', 'Vento Cortante', 'Tornado');
const mago2 = new Mago('Eduardo', 'Mago', 'Fogo', 'Livro', 'Bola de Fogo', 'Incinerar');

const guerreiro1 = new Guerreiro('Leon', 'Guerreiro', 'Espada', 'Lâmina Feroz', 'Golpe Fatal');
const guerreiro2 = new Guerreiro('Dante', 'Guerreiro', 'Machado', 'Giro Rápido', 'Quebra Cascos');

const arqueiro1 = new Arqueiro('Sam', 'Arqueiro', 'Besta', 'Chuva de Flechas', 'Flecha Fantasma');
const arqueiro2 = new Arqueiro('Eric', 'Arqueiro', 'Arco Longo', 'Concentrar', 'Invocar Lobo');

guerreiro1.setEnergia(100);

console.log(mago1);

console.log(guerreiro1);

console.log(arqueiro1);