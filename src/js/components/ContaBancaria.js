
export class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = parseFloat(localStorage.getItem("agencia"));
    this.numero = parseFloat(localStorage.getItem("numero"));
    this.tipo = localStorage.getItem("tipo");
    this._saldo = parseFloat(localStorage.getItem("saldo"));
  }

  // Getter para obter o saldo
  get saldo() {
    return this._saldo;
  }

  // Setter para definir o saldo
  set saldo(valor) {
    this._saldo = valor;
  }

  // Método para sacar dinheiro
  sacar(valor) {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor;
      return true;
    } else {
      console.log("Saldo insuficiente ou valor inválido.");
      return false;
    }
  }

  // Método para depositar dinheiro
  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      return true;
    } else {
      console.log("Valor de depósito inválido.");
      return false;
    }
  }
}

