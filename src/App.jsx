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

const Image = (props) => { //Galleryの子コンポーネント
  return(
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src={props.src} //{}の中には、Javascriptの式がかけるため変数だけでなく計算や関数呼び出しも可能
            alt="cute dog!"
          />
        </figure>
      </div>
    </div>
  );
}

const Gallery = (props) => { //Mainの子コンポーネント  Mainからpropsを受け取る
  const { urls } = props;//URLを一旦変数に格納
  return(
    <div className="columns is-vcentered is-multiline">
      {/* <div className="column is-3">
        <Image src={url}/>
      </div> */}
      {urls.map((url) =>{ //URLの配列をmapメソッド  mapメソッドで作られるJSX式は最も外側に要素にkey属性をつけなけばいけません。
        return( //urlの値をkeyとしている mapメソッドを使う場合はkey属性を必ずつける
          <div key={url} className="column is-3"> 
            <Image src={url} />
          </div>
        )
      })}
    </div>
  );
}

const Main = () => { //親コンポーネント
  const urls = [ //この配列に含まれるURLそれぞれをImageコンポーネントに割り当てないといけない
    "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-17.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
  ];
  return(
    <main>
      <section className="section">
        <div className="container">
          <Gallery urls={urls}/>
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
