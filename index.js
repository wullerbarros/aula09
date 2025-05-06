const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById('searchButton')
const booksContainer = document.getElementById('booksContainer')

searchButton.addEventListener('click', (event) => {
        event.preventDefault()
        const query = searchInput.value.toLowerCase().trim();
        if (!query) return;
        fetchBooks(query)
})

function fetchBooks(query) {

    const livros = [
        {
            img: './imagem/pokemon.jpg',
            titulo:'Pokémon Scarlet e Violet',
            categoria:'Games',
            preco:420.00,
            desconto:true
    
        },
        {
            img: './imagem/pokemon.jpg',
            titulo:'Pokémon Scarlet e Violet',
            categoria:'Games',
            preco:420.00,
            desconto:true
    
        },
        {
            img: './imagem/pokemon.jpg',
            titulo:'Pokémon Scarlet e Violet',
            categoria:'Games',
            preco:420.00,
            desconto:false
    
        },
        {
            img: './imagem/pokemon.jpg',
            titulo:'Pokémon Scarlet e Violet',
            categoria:'Games',
            preco:420.00,
            desconto:false
    
        }
    ]
    const livrosFiltrados = livros.filter(item => 
        item.titulo.toLowerCase().includes(query) ||
        item.categoria.toLowerCase().includes(query)
    )
    if (livrosFiltrados.length === 0){
        booksContainer.innerHTML = `<h1> Nenhum Game encontrado</h1>`
        return
    }

    booksContainer.innerHTML = livrosFiltrados.map(item => {
        return `
              <div class="div-card">
                <div class="div-img">
                    <img src="${item.img}" alt="capa do jogo">
                    <p class="tag-p">Frete grátis</p>
                </div>
                <div class="div-texto">
                <div class="div-titulo">
                <h1>${item.titulo}</h1>
                <button>+</button>
            </div>
                <h2><a href="">${item.categoria}</a></h2>
                <p>R${item.preco}</p>
            </div>
        </div>
        
        `

    }).join('')
}
