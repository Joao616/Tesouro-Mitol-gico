// Seleciona todos os botões de avanço
const avanca = document.querySelectorAll('.btn-proximo');

// Função para avançar para o próximo passo
avanca.forEach(button => {
    button.addEventListener('click', function() {
        // Seleciona o passo atual e o próximo passo
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        
        // Adiciona uma animação de transição
        atual.classList.add('desaparecer'); // Classe CSS para fade-out (desaparecer)
        
        // Espera o tempo da animação e então troca de passo
        setTimeout(() => {
            // Remove a classe "ativo" do passo atual
            atual.classList.remove('ativo');
            // Adiciona a classe "ativo" ao próximo passo
            document.getElementById(proximoPasso).classList.add('ativo');
            
            // Adiciona animação de fade-in ao novo passo
            document.getElementById(proximoPasso).classList.add('aparecer'); // Classe CSS para fade-in (aparecer)
        }, 500); // Tempo da animação (500ms)
        
        // Verifica a escolha e adiciona uma interação específica baseada nela
        const escolha = this.getAttribute('data-proximo');
        if (escolha == "1" || escolha == "2") {
            mostrarDica(escolha);
        }
    });
});

// Função para exibir dicas ou mensagens dependendo da escolha do jogador
function mostrarDica(escolha) {
    const dicas = {
        1: "O Oráculo de Apolo falou sobre um desafio a ser enfrentado no Monte Olimpo. Prepare-se para o desconhecido.",
        2: "Minos deixou um desafio no Labirinto de Creta. A verdadeira entrada está oculta em suas sombras.",
    };
    
    // Cria um novo elemento de dica
    const dicaElemento = document.createElement('div');
    dicaElemento.classList.add('dica');
    dicaElemento.textContent = dicas[escolha];

    // Adiciona a dica à página
    document.body.appendChild(dicaElemento);

    // Faz a dica desaparecer após alguns segundos
    setTimeout(() => {
        dicaElemento.classList.add('desaparecer');
        setTimeout(() => {
            dicaElemento.remove(); // Remove o elemento da DOM
        }, 500);
    }, 3000);
}

// Função para a animação de desaparecer (fade-out)
const style = document.createElement('style');
style.innerHTML = `
    .desaparecer {
        opacity: 0;
        transition: opacity 0.5s ease-out;
    }
    .aparecer {
        opacity: 1;
        transition: opacity 0.5s ease-in;
    }
    .dica {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 18px;
        z-index: 100;
    }
`;
document.head.appendChild(style);
