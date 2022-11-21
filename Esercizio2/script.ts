class SonAccount {
    saldo: number = 0;
    prelievo: number = Math.round(Math.random() * (100 - 1) + 1);
    versamento: number = Math.round(Math.random() * (100 - 1) + 1);

    prel(): any {
        if(this.prelievo < this.saldo) {
            this.saldo -= this.prelievo;
            console.log('Hai appena prelevato €' + this.prelievo);
            console.log('Ora il tuo saldo è €' + this.saldo);
        } else {
            console.log('Mi dispiace, ma non puoi prelevare €' + this.prelievo);
        }
    }

    vers(): any {
        this.saldo += this.versamento;
        console.log('Hai appena versato €' + this.versamento);
        console.log('Ora il tuo saldo è €' + this.saldo);
    }
}

let conto = new SonAccount;

console.log('CONTO: Il tuo saldo attuale è €' + conto.saldo);

conto.vers();
conto.prel();


class MotherAccount extends SonAccount {
    saldo: number = 0;
    prelievo: number = Math.round(Math.random() * (100 - 1) + 1);
    versamento: number = Math.round(Math.random() * (100 - 1) + 1);

    prel(): any {
        if(this.prelievo < this.saldo) {
            this.saldo -= this.prelievo;
            console.log('Hai appena prelevato €' + this.prelievo);
            console.log('Ora il tuo saldo è €' + this.saldo);
        } else {
            console.log('Mi dispiace, ma non puoi prelevare €' + this.prelievo);
        }
    }

    vers(): any {
        this.saldo += this.versamento;
        console.log('Hai appena versato €' + this.versamento);
        console.log('Ora il tuo saldo è €' + this.saldo);
    }

    interesse(): any {
        let interesse = this.saldo * 10 / 100;
        this.saldo = this.saldo + interesse;
        console.log(`È stato aggiunto un interesse del 10% che ammonta a €${interesse}. Il tuo saldo attuale è €${this.saldo}`)
    }
}

let conto2 = new MotherAccount;

console.log('CONTO 2: Il tuo saldo attuale è €' + conto2.saldo);

conto2.vers();
conto2.prel();
conto2.interesse();