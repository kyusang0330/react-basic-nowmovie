import Movie from './components/Movie';
import { dummy } from './movieDummy';


function App() {
  return (
    <div>
      <div className="app-container">
        {
          dummy.results.map((item) => {
            return (
                <Movie />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
