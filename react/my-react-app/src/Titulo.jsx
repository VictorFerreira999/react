function Titulo({nome, paragrafo}) {

   return (
      <div>
         <h1> Oi eu sou {nome ? nome : "Fulano"}</h1>
         {paragrafo ?
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis ut ad ea dicta, maxime reiciendis obcaecati illum nisi harum, veniam illo, autem inventore asperiores quibusdam aliquid enim nemo eos.</p>
         :
         <p>Nada</p>
      }
      </div>
   )
}

export default Titulo