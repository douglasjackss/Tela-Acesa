function pesquisar() {
    // 1. Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "Nenhum resultado foi encontado!"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // 2. Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let genero = "";
  
    // 3. Itera sobre cada item (objeto) da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        genero = dado.genero.toLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a> </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <p class="genero-meta">${dado.genero}</p> 
              <p class="duracao-meta">${dado.duracao}</p>
              <p class="diretor-meta">${dado.diretor}</p>
              <p class="ano-meta">${dado.ano}</p>
              <p class="ondeencontrar-meta">${dado.ondeencontrar}</p>
              </div>
          `;
        }
    }

    if (!resultados) {
      resultados = "<p>Desculpe, nenhum filme foi encontrado!</p>"
    }
  
    // 5. Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
  }



