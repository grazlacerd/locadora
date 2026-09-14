import { useState } from 'react';
import './App.css';

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
  );
}

export function DetalhesFilme({ movie, onFechar }) {
  console.log("O filme que chegou no componente de detalhes é:", movie);
  if (!movie) return null;

  return (
    <aside className="modal">
      <div className="detalhes">
        <img 
          src={movie.modalImage} 
          alt={movie.title}
          className="imgModal"
        />
        <h2>{movie.title}</h2>
        <p><strong>Ano de Lançamento: {movie.releaseYear}</strong></p>
        <p><strong>Produtora: <span>{movie.produtora}</span></strong></p>
        <p className="descricao">{movie.descricao}</p>
        <div className="botao">
          <button onClick={onFechar}><strong>X</strong></button>
        </div>
      </div>
    </aside>
  );
}

function App() {
  const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [movieSelecionado, setMovieSelecionado] = useState(null);

  const toggleCarrinho = () => {
    setCarrinhoVisivel(!carrinhoVisivel);
  };

  const adicionarAoCarrinho = (movie) => {
    setCarrinho([...carrinho, movie]);
  };

  const finalizarCompra = () => {
    alert("Aluguel finalizado com sucesso! Aproveite os seus VHS.");
    setCarrinho([]);
  };

  const movies = [
    { "id": 1, "coverImage": "https://i.pinimg.com/736x/a0/98/4a/a0984aa2d07009cf726a91e6528d1517.jpg", "title": "A viagem de Chihiro", "releaseYear": 2001, "produtora": "Studio Ghibli", "descricao": "A Viagem de Chihiro acompanha Chihiro, uma garota de 10 anos que fica presa no mundo dos espíritos após seus pais serem transformados em porcos. Para salvá-los e voltar ao mundo humano, ela precisa trabalhar em uma casa de banhos mística comandada por uma bruxa ambiciosa. É uma jornada mágica sobre amadurecimento, coragem e identidade, sendo uma das animações mais premiadas e famosas do Studio Ghibli.", "modalImage": "https://i.pinimg.com/1200x/43/ab/bb/43abbb9f2607c9dd08d230ae7b27e18e.jpg" },
    { "id": 2, "coverImage": "https://i.pinimg.com/736x/3e/9d/87/3e9d87364b8e499c4094e1e105bef65b.jpg", "title": "Princesa Mononoke", "releaseYear": 1997, "produtora": "Studio Ghibli", "descricao": "Ao buscar a cura para uma maldição mortal, o príncipe Ashitaka se vê no centro de uma guerra brutal entre uma comunidade industrial de mineradores e os deuses da floresta, liderados por San, uma jovem criada por lobos. Um épico sombrio do Studio Ghibli sobre o impacto do progresso humano na natureza e a busca pelo equilíbrio.", "modalImage": "https://i.pinimg.com/1200x/78/af/a6/78afa64dd4522454b42eab443350dffa.jpg" },
    { "id": 3, "coverImage": "https://i.pinimg.com/736x/00/05/49/0005495b50786bd478e9b39bf93f3fa3.jpg", "title": "Nausicaä do Vale do Vento", "releaseYear": 1984, "produtora": "Studio Ghibli", "descricao": "Em um mundo pós-apocalíptico devastado por uma floresta tóxica cheia de insetos gigantes, a jovem e empática princesa Nausicaä luta para guiar seu povo. Enquanto reinos rivais tentam usar a violência para destruir a floresta, ela busca compreender a natureza para alcançar a coexistência pacífica e salvar o planeta. Uma obra-prima pioneira de Hayao Miyazaki sobre pacifismo e ecologia.", "modalImage": "https://i.pinimg.com/1200x/23/31/5c/23315c7cf97fbb548dc6b9bb35b98410.jpg" },
    { "id": 4, "coverImage": "https://i.pinimg.com/736x/11/94/7f/11947fb73f78e40d5a896069289ceb8d.jpg", "title": "O menino e a garça", "releaseYear": 2023, "produtora": "Studio Ghibli", "descricao": "Após perder a mãe na guerra, o jovem Mahito muda-se para o campo, onde descobre uma torre misteriosa e uma garça falante. Ao seguir a ave, ele é levado a um reino fantástico e surreal onde a vida e a morte se fundem. Uma obra profundamente pessoal e visualmente deslumbrante de Hayao Miyazaki sobre o luto, o amadurecimento e a imaginação, vencedora do Oscar de Melhor Animação.", "modalImage": "https://i.pinimg.com/1200x/de/68/ec/de68eca55ecf7775bbc3f6d815f4f7d9.jpg" },
    { "id": 5, "coverImage": "https://i.pinimg.com/736x/99/59/38/9959382f9f878c5b811fdca4fcc9fea4.jpg", "title": "O castelo no céu", "releaseYear": 1986, "produtora": "Studio Ghibli", "descricao": "O jovem órfão Pazu junta-se a Sheeta, uma garota que possui um cristal místico capaz de levá-los até Laputa, uma lendária e tecnológica cidade flutuante escondida nas nuvens. Perseguidos por piratas aéreos e militares gananciosos, eles correm contra o tempo para proteger os segredos dessa civilização perdida. O primeiro filme oficial do Studio Ghibli, repleto de aventura e fantasia steampunk.", "modalImage": "https://i.pinimg.com/736x/18/93/d8/1893d8fc74cc9f9e1287f36eb79d35ed.jpg" },
    { "id": 6, "coverImage": "https://i.pinimg.com/1200x/bf/45/07/bf45072b5b1e2537db65c1d911f9218e.jpg", "title": "Meu amigo Totoro", "releaseYear": 1988, "produtora": "Studio Ghibli", "descricao": "Ao mudarem-se para o campo para ficar perto da mãe internada em um hospital, as irmãs Satsuki e Mei descobrem que a floresta vizinha é habitada por espíritos mágicos. Elas logo fazem amizade com Totoro, uma criatura gigante e dócil que as ajuda a lidar com as ansiedades e medos da infância através da imaginação. Um clássico reconfortante do Studio Ghibli sobre inocência, família e a magia da infância.", "modalImage": "https://i.pinimg.com/vwebp/1200x/f2/ba/85/f2ba85e5441c5d25e7e6865913478b3c.webp" },
    { "id": 7, "coverImage": "https://i.pinimg.com/1200x/a9/64/ae/a964ae62fd6d678715fdddb0b78eff00.jpg", "title": "O castelo animado", "releaseYear": 2004, "produtora": "Studio Ghibli", "descricao": "Após ser amaldiçoada por uma bruxa ciumenta e transformada em uma idosa de 90 anos, a jovem Sophie busca ajuda no incrível castelo andante de Howl, um mago enigmático e vaidoso. Juntos, em meio a uma guerra tecnológica e mágica, eles embarcam em uma jornada emocionante sobre autoaceitação, amor e os custos da violência. Uma das fantasias mais visuais e icônicas do Studio Ghibli.", "modalImage": "https://i.pinimg.com/vwebp/1200x/ce/12/ee/ce12ee32300f639a85977af692047a07.webp" },
    { "id": 8, "coverImage": "https://i.pinimg.com/1200x/16/f6/c2/16f6c20886ea457b39d3cb75b60a00ba.jpg", "title": "O serviço de entregas da Kiki", "releaseYear": 1989, "produtora": "Studio Ghibli", "descricao": "Ao completar 13 anos, a jovem bruxa Kiki muda-se para uma nova cidade litorânea para iniciar seu treinamento de independência. Acompanhada por seu gato preto falante, Jiji, ela abre um serviço de entregas voando em sua vassoura, enfrentando os desafios de crescer, a perda de autoconfiança e a busca pelo seu lugar no mundo. Um conto leve e inspirador sobre amadurecimento e resiliência.", "modalImage": "https://i.pinimg.com/1200x/68/39/c3/6839c31c4b819349b26e75fe0adb75cb.jpg" },
    { "id": 9, "coverImage": "https://i.pinimg.com/736x/52/de/d4/52ded4a374e0bbfcb8a945bbe4e193fc.jpg", "title": "Ponyo", "releaseYear": 2008, "produtora": "Studio Ghibli", "descricao": "Ponyo é uma peixinho-dourado mágica que, ao fugir de seu lar no oceano, faz amizade com Sosuke, um garoto humano de cinco anos. Desejando se tornar humana para ficar com ele, o uso de sua magia poderosa acaba desequilibrando a natureza e causando um grande tsunami. Uma aventura visualmente encantadora e vibrante sobre amizade inocente, lealdade e o respeito pelas forças do mar.", "modalImage": "https://i.pinimg.com/1200x/a7/65/84/a76584e098b43be8b619c914071f74be.jpg" },
    { "id": 10, "coverImage": "https://i.pinimg.com/736x/2b/c5/98/2bc5985c398e8cc9a775b88047a2c209.jpg", "title": "O mundo dos pequeninos", "releaseYear": 2010, "produtora": "Studio Ghibli", "descricao": "Arrietty é uma jovem de 14 anos que pertence a uma raça de pessoas minúsculas que vivem escondidas sob o assoalho de uma casa de campo, sobrevivendo do empréstimo de pequenos itens humanos. Sua vida muda drasticamente quando ela quebra a principal regra de sobrevivência e faz amizade com Shawn, um garoto humano que está hospedado na casa. Uma história delicada e visualmente rica sobre amizade, coragem e o valor das pequenas coisas.", "modalImage": "https://i.pinimg.com/1200x/9c/31/c4/9c31c4effd446898a2d456c8d76f3d1e.jpg" },
    { "id": 11, "coverImage": "https://i.pinimg.com/1200x/4a/0a/63/4a0a63f91d590ea81f461e49da9e5d25.jpg", "title": "As memórias de Marnie", "releaseYear": 2014, "produtora": "Studio Ghibli", "descricao": "Enviada para o litoral por motivos de saúde, a solitária e isolada Anna encontra uma mansão abandonada e conhece Marnie, uma garota misteriosa com quem desenvolve uma conexão profunda e instantânea. Conforme o vínculo entre as duas cresce, Anna começa a descobrir segredos surpreendentes sobre o passado e sobre sua própria identidade. Uma história emocionante e sensível do Studio Ghibli sobre luto, cura e aceitação.", "modalImage": "https://i.pinimg.com/1200x/b2/d1/7f/b2d17f1714c50b1e30d4a5a14f31eccf.jpg" },
    { "id": 12, "coverImage": "https://i.pinimg.com/736x/80/88/9b/80889b5add744b059d78d43625a7e9e9.jpg", "title": "Vidas ao Vento", "releaseYear": 2013, "produtora": "Studio Ghibli", "descricao": "Uma cinebiografia ficcional de Jiro Horikoshi, o engenheiro que projetou os icônicos aviões de caça japoneses durante a Segunda Guerra Mundial. O filme acompanha sua paixão de infância pela aviação, seu romance resiliente com a jovem Nahoko e o dilema moral de ver suas belas criações artísticas sendo utilizadas como instrumentos de destruição. A obra mais realista e abertamente madura de Hayao Miyazaki.", "modalImage": "https://i.pinimg.com/1200x/e4/5a/70/e45a7088c0e0311f7465ee3223b6b854.jpg" }
  ];

  const filmesFiltrados = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(pesquisa.toLowerCase());
  });

  return (
    <div className='lojinha'>
      <Header
        aoClicar={toggleCarrinho}
        valorPesquisa={pesquisa}
        aoPesquisar={setPesquisa}
      />

      <section className='container'>
        <div className='titulo'>
          <h1>Alugue filmes do <span>Studio Ghibli</span> em VHS!</h1>
          <p>Filmes disponíveis:</p>
        </div>

        <main className='movies'>
          {filmesFiltrados.map((movie) => (
            <div key={movie.id} className='movieCard'>
              <div className='containerCard'>
                <img
                  src={movie.coverImage}
                  alt={movie.title}
                  className='imgCard'
                  onClick={() => setMovieSelecionado(movie)} 
                />
                <div className='infos'>
                  <h2>{movie.title}</h2>
                  <p>{movie.produtora}</p>
                  <p>{movie.releaseYear}</p>
                </div>
                <button onClick={() => adicionarAoCarrinho(movie)}>Alugar</button>
              </div>
            </div>
          ))}

          {filmesFiltrados.length === 0 && (
            <p className="sem-resultados">Nenhum VHS encontrado com esse nome.</p>
          )}
        </main>

        <DetalhesFilme
          movie={movieSelecionado}
          onFechar={() => setMovieSelecionado(null)} 
        />

        {carrinhoVisivel && (
          <section className='carrinho'>
            <div className='carrinho-header'>
              <h3>Seu carrinho</h3>
              <button 
                className='btn-fechar-carrinho' 
                onClick={toggleCarrinho}
                aria-label="Fechar carrinho"
              >
                &times;
              </button>
            </div>

            <div className='itens-carrinho'>
              {carrinho.length === 0 ? (
                <p className='pVazio'>Seu carrinho está vazio.</p>
              ) : (
                carrinho.map((item, index) => (
                  <div key={index} className='carrinho-item'>
                    <img src={item.coverImage} alt={item.title} className='imgMini' />
                    <span>{item.title}</span>
                  </div>
                ))
              )}
            </div>

            <div className='botao'>
              <button className='btn-finalizar' onClick={finalizarCompra}>Finalizar</button>
            </div>
          </section>
        )}
      </section>
      <footer>
        <p> &copy; 2026 - Grazielly Lacerda</p>
        </footer>
    </div>
  );
}

export default App;