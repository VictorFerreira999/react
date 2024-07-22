function Titulo() {

   let nome = "Victor Ferreira"
   const soma = 10 + 10
   const urlImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFYUMxwjoJUgk-Bv9mwUGhi6uhAIKOfWZHw&s"
   return (
      <div>
         <h1> Oi eu sou {nome}</h1>
         <img src={urlImg} />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis ut ad ea dicta, maxime reiciendis obcaecati illum nisi harum, veniam illo, autem inventore asperiores quibusdam aliquid enim nemo eos.</p>
      </div>
   )
}

export default Titulo