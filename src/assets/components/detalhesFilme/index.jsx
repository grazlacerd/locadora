export default function DetalhesFilme({movie, onFechar}) {
    console.log("O filme que chegou no componente de detalhes é:", movie);
    if(!movie) return null;

    return (
        <aside className="modal">
            <div className="detalhes">
            <img 
          src={movie.modalImage} 
          alt={movie.title}
          className="imgModal"/>
          <h2>{movie.title}</h2>
          <p><strong>Ano de Lançamento: {movie.releaseYear}</strong></p>
          <p><strong>Produtora: <span>{movie.produtora}</span></strong></p>
          <p className="descricao">{movie.descricao}</p>
          <div className="botao">
          <button 
          onClick={onFechar}><strong>X</strong></button>
          </div>
          </div>
        </aside>
    )
}