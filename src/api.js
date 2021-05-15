export async function fetchImages(breed) { //DOG APIから画像取得を行う関数
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/12`
  );
  const data = await response.json();
  return data.message;
}
//fethImages関数は犬種の文字列を受け取り、fetch関数を使ってDog APIからその犬種の画像URLのリストを取得します。
//コンポーネントからfetchImages関数を利用します
