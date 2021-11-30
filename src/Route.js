import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar,Nav,Container} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Book from './book';
import Movie from './movie';
import MovieQuotes from './movieQuotes'
import Characters from './character'
function Routing() {
    return (
      <Router>
        <div className="App">
          <Navbar >
            <Container>
            <Navbar.Brand href="/">API</Navbar.Brand>
              <Nav className="me-auto">
                <LinkContainer to ="/book">
                  <Nav.Link>Book</Nav.Link>
                </LinkContainer>
                <LinkContainer to ="/movie">
                  <Nav.Link>Movie</Nav.Link>
                </LinkContainer>
                <LinkContainer to ="/movie/:id/quote">
                  <Nav.Link>MovieQuotes</Nav.Link>
                </LinkContainer>
                <LinkContainer to ="/character">
                  <Nav.Link>Characters</Nav.Link>
                </LinkContainer>
                
              </Nav>
            </Container>
          </Navbar>
        </div>
        <Switch>
        <Route exact path="/book" component={Book} />
        <Route exact path="/movie" component={Movie} />
        <Route  path="/movie/:id/quote" component={MovieQuotes} />
        <Route  path="/character" component={Characters} />
       
       
        </Switch>
      </Router>
    );
  }
export default Routing;
  