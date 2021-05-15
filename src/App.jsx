import './App.css';

//コンポーネントの分割
const Header = () => {
  return(
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            DOG Cute
          </h1>
        </div>
      </div>
    </header>
  );
}

const Image = () => {
  const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
  return(
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
            alt="cute dog!"
          />
        </figure>
      </div>
    </div>
  );
}

const Gallery = () => {
  return(
    <div className="columns is-vcentered is-multiline">
      <div className="column is-3">
        <Image />
      </div>
    </div>
  );
}

const Main = () => {
  return(
    <main>
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </main>
  )
}

const Fotter = () => {
  return(
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Dog images are retrieved from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
      </div>
    </footer>
  )
}

const App = () => {
  return(
    <div>
      <Header />
      <Main />
      <Fotter />
    </div>
  )
}



// const App = () => {
//   return (
//     <div>
//       <header className="hero is-dark is-bold">
//         <div className="hero-body">
//           <div className="container">
//             <h1 className="title">Cute Dog Images</h1>
//           </div>
//         </div>
//       </header>
//       <main>
//         <section className="section">
//           <div className="container">
//             <div className="columns is-vcentered is-multiline">
//               <div className="column is-3">
//                 <div className="card">
//                   <div className="card-image">
//                     <figure className="image">
//                       <img
//                         src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
//                         alt="cute dog"
//                       />
//                     </figure>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="footer">
//         <div className="content has-text-centered">
//           <p>Dog images are retrieved from Dog API</p>
//           <p>
//             <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

export default App;
