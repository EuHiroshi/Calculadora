function criaCalculador() {

        return {
                display: document.querySelector('.display'),

                inicia() {
                        this.cliqueBotoes();
                        this.pressionaEnter();
                },

                pressionaEnter() {
                        this.display.addEventListener('keyup', (e) => {
                                if (e.keyCode === 13) {
                                        this.realizaConta();
                                }
                        });
                },

                realizaConta() {
                        let conta = this.display.value;
                        try {
                                // eval pode ser perigoso devido a segurança de informações
                                conta = eval(conta);
                                if (!conta) {
                                        alert("Conta inválida");
                                        return;
                                }
                                this.display.value = conta
                        } catch (error) {
                                alert("Conta inválida");
                        }
                },

                clearDisplay() {
                        this.display.value = '';
                },

                delete() {
                        this.display.value = this.display.value.slice(0, -1)
                },

                cliqueBotoes() {
                        document.addEventListener('click', (e) => {
                                const el = e.target;

                                if (el.classList.contains('btn-num')) {
                                        this.btnParaDisplay(el.innerText);
                                }

                                if (el.classList.contains('btn-clear')) {
                                        this.clearDisplay();
                                }

                                if (el.classList.contains('btn-del')) {
                                        this.delete();
                                }

                                if (el.classList.contains('btn-eq')) {
                                        this.realizaConta();
                                }
                        });
                },

                btnParaDisplay(valor) {
                        this.display.value += valor;
                }
        };
}

const calculadora = criaCalculador();
calculadora.inicia()