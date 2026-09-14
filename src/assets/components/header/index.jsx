export function Header({ aoClicar, valorPesquisa, aoPesquisar }) {
    return (
        <header>
            <div className='logo'>
                <p>Locadora CineChibli</p>
            </div>
            <div className='pesquisa'>
                <img src="/src/assets/lupa-removebg-preview.png" alt='lupa' className='lupa' />
                <input
                    type='text'
                    placeholder='digite o nome do filme...'
                    value={valorPesquisa}
                    onChange={(e) => aoPesquisar(e.target.value)}
                />
            </div>
            <img
                src='/src/assets/carrinho-removebg-preview.png'
                alt='carrinho'
                onClick={aoClicar}
                className="alugar"
            />
        </header>
    )
}