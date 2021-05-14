import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>DOG IMAGES</h1>
      </header>
      <main>
        <section>
          <figure>
            <img 
              src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" 
              alt="cute dog"/>
          </figure>
        </section>
      </main>
      <footer>
        <p>DOG images are retrieved from DOG API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">D</a>
        </p>
      </footer>
    </div>
    
  );
}

export default App;
