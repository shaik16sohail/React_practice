
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='logo-box'>
        <img src="./twitter.png" alt='twitter_logo' className='logo'></img>
        <h2>Sign In to Twitter</h2>
        <button>
        <img src="./google.jpeg" alt='google_logo'></img>
        Sign in with Google
        </button>
        <button>
        <img src="./apple.png" alt='apple_logo'></img>
        Sign in with Apple
        </button>
        <hr></hr>
        <span>Or</span>
        <form>
          <input type='text' placeholder='username or emailid'></input>
          <button>Next</button>
        </form>
        {/* <button>forget password</button> */}
        <p>Don't have an account &nbsp;&nbsp;
          <a href='#'>Sign up</a></p>
      </div>
    </div>
  );
}

export default App;
