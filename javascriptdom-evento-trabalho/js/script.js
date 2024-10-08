
let contador = 0;

        document.getElementById('contador-btn').addEventListener('click', () => {
            contador++;
            document.getElementById('resultado').innerText = `Número de cliques: ${contador}`;
        });

        document.getElementById('alert-btn').addEventListener('click', () => {
            alert('Adicionado com sucesso');
        });

        document.getElementById('campo-texto').addEventListener('blur', () => {
            const valor = document.getElementById('campo-texto').value;
            const mensagemDiv = document.getElementById('mensagem');

            if (valor.trim() === '') {
                mensagemDiv.innerText = 'Erro: O campo não pode estar vazio.';
            } else {
                mensagemDiv.innerText = 'Sucesso: Campo preenchido corretamente.';
            }
        });

        const produtos = document.getElementsByClassName('produto');

        Array.from(produtos).forEach(produto => {
            produto.addEventListener('click', () => {
                const descricao = produto.getAttribute('data-descricao');
                const preco = produto.getAttribute('data-preco');
                document.getElementById('detalhes').innerText = `Pacote: ${descricao}, Preço: ${preco}`;
            });
        });

