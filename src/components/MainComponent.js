import React,{ Component } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact'; 
import Header from './Navbar';
import Footer from './Footer'
import {connect} from 'react-redux';
import Cards from './Card';

const mapStateToProps = state =>{
  return{
    cards: state.cards,
  }
};

/*const mapDispatchToProps = dispatch =>({
  fetchCards:() => dispatch(fetchCards())
})*/

class Main extends Component{

  /*componentDidMount(){
    this.props.fetchCards();
  }*/
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
    }
  }


  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({isLoading: false}) //After 1 second, set render to true
    }.bind(this), 3000)
  }

  onCardSelect(cardId) {
    this.setState({ selectedCard: cardId  });
  }
    render() {

      const HomePage =() => {
        return(
          <Home 
            cards={this.props.cards}
            cardsLoading = {this.state.isLoading}
          />
        );
      }


      const WorkPage =() => {
        return(
          <Work 
            cards={this.props.cards}
            cardsLoading={this.state.isLoading}
          />
        );
      }

      const CardWithId = ({match}) => {
        return(
          <Cards cards={this.props.cards.filter((card) => card.id === parseInt(match.params.cardId,10))[0]}
          isLoading={this.state.isLoading}

        />
        );
      };


        return (
            <>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/aboutus" component={() => <About />} />
                        <Route exact path="/work" component={WorkPage} />
                        <Route path = "/work/:cardId" component={CardWithId} />
                        <Route exact path="/contactus" component={() => <Contact />} />
                        <Redirect to="/home" />
                    </Switch>
                    <Footer />
                </div>
            </>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));