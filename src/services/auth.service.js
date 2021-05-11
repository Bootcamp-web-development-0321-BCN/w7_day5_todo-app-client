import axios from 'axios';

export default class AuthService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    })
  }

  signup = (data) => this.instance.post('/signup', data);
  login = (data) => this.instance.post('/login', data);
  logout = () => this.instance.post('/logout');
  isLoggedIn = () => this.instance.get('/loggedin');
  edit = (data) => this.instance.put('/edit', data);
}