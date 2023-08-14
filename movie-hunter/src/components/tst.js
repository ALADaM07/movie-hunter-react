const api_key = '0318c8976c241ad5c1dcb503c3697264';
const api_url = `https://api.themoviedb.org/3/search/movie?query=spiderman&include_adult=false&language=en-US&page=1&api_key=${api_key}`;
const [products, setProducts] = useState([]);

useEffect(() => {
  fetch(api_url)
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, []);
