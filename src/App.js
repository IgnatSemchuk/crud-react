import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {Header} from "./components/Header";
import {TableUsers} from "./components/TableUsers/TableUsers";
import {AppBackend} from "./AppBackend";
import {Footer} from "./components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      limit: 15,
      page: 1,
      search: ''
    };

    this.backend = new AppBackend();
  }

  componentDidMount() {
    this.updateUsers();
  }

  onSelectChange = async (limit) => {
    this.setState({limit}, () => {
      this.updateUsers();
    });
  };

  onSearchChange = async (value) => {
    const search = event.target.value;

    this.setState({search}, () => {
      this.updateUsers();
    });
  };

  onPageChange = async (value) => {
    this.setState({page: value}, () => {
      this.updateUsers();
    });
  }

  updateUsers = async () => {
    const {limit, search} = this.state;

    const users = await this.backend.get({
      search,
      limit,
    });

    this.setState({
      users
    });
  };

  render() {
    return (
      <Container>
        <Header onSelectChange={this.onSelectChange}
                limit={this.state.limit}
                onSearhChange={this.onSearchChange}
        />
        <TableUsers users={this.state.users}/>
        <Footer onPageChange={this.onPageChange}/>
      </Container>
    );
  }
}

export default App;
