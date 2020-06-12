import React from 'react';

import {HomeNavigationBar} from './HomeNavigationBar';
import MovieSlider from "./MovieSlider";
import FooterComponent from "./FooterComponent";
import UserService from "../../services/UserService"
import MovieServiceClient from "../../services/MovieService";

import posed from 'react-pose';

const AnimatedDiv = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1}
});

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();

        this.state = {
            popularMovies: [],
            nowPlayingMovies: [],
            searchQuery: '',
            userProfile: '',
            searchType: 'movie',
            isVisible: false
        }

        this.userService.getProfile().then(
            response => this.setState({
                userProfile: response
            })
        )

        this.searchTextUpdated = this.searchTextUpdated.bind(this);
        this.searchButtonClicked = this.searchButtonClicked.bind(this);
        this.searchTypeUpdated = this.searchTypeUpdated.bind(this);
    }

    componentDidMount() {

        setTimeout(() => {
          this.setState({ isVisible: !this.state.isVisible });
        }, 500);

        MovieServiceClient.instance.getPopularMovies().then(response => {
            this.setState({
                popularMovies: response.results
            })
        })

        MovieServiceClient.instance.getNowPlayingMovies().then(response => {
            this.setState({
                nowPlayingMovies: response.results
            })
        })
    }

    searchTextUpdated(event) {
        this.setState({
            searchQuery: event.target.value
        })
    }

    searchTypeUpdated(event) {
        this.setState({
            searchType: event.target.value
        })
    }

    searchButtonClicked() {
        if (this.state.searchQuery !== '') {
            if (this.state.searchType === 'movie') {
                this.props.history.push('/movie/search/' + this.state.searchQuery);
            }
            else {
                this.props.history.push('/user/search/' + this.state.searchQuery);
            }
        }
        else {
            alert("Enter a search query first!");
        }
    }

    logout = () => {
        this.userService.logout();
    };

    render() {
        if (this.state.userProfile.message === 'You are not logged in') {
            return (
                <AnimatedDiv pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    <HomeNavigationBar loggedIn={false}/>
                    <div className="row col-12 justify-content-center mt-4">
                        <div className="col-6">
                            <input
                                style={{backgroundColor: 'rgb(0,0,0,0.3)', caretColor: 'rgb(255,255,0)', color: 'white', backgroundBlendMode: 'overlay', borderRadius: '100px', height: '40px', fontSize: '20px'}}
                                className="form-control" type="text" onChange={this.searchTextUpdated}
                                placeholder="Search" value={this.state.searchQuery}
                                aria-label="Search"/>
                        </div>
                        <select style={{width: '100px',backgroundColor: 'rgb(255,255,255,1)', color: 'black', borderRadius: '20px', height: '40px', fontSize: '18px'}}
                                className="custom-select col-lg-1 col-xs-1" onChange={this.searchTypeUpdated}>
                            <option value="movie">Movies</option>
                            <option value="user">Users</option>
                        </select>
                        <button type='btn' className="text-white btn btn-outline-primary ml-3" onClick={this.searchButtonClicked}>
                            GO
                        </button>

                    </div>

                    <h3 className="ml-4 mt-4 white-title text-center"> Popular Movies </h3><br></br>
                    <MovieSlider movies={this.state.popularMovies}/>

                    <h3 className="ml-4 mt-4 white-title text-center"> In Theatres </h3><br></br>
                    <MovieSlider movies={this.state.nowPlayingMovies}/>
                    
                    <FooterComponent/>
                </AnimatedDiv>
  
            )
        }
        else if (this.state.userProfile !== undefined) {
            return (
            <AnimatedDiv pose={this.state.isVisible ? 'visible' : 'hidden'}>
                <div>
                    <HomeNavigationBar loggedIn={true}
                                       username={this.state.userProfile.username}
                                       logout={this.logout}/>
                    <h5 className="ml-4 mt-4 white-title">Hello {this.state.userProfile.username}!</h5>
                </div>
                <div className="row col-12 justify-content-center mt-4">
                    <div className="col-6">
                        <input
                            style={{backgroundColor: 'rgb(0,0,0,0.3)', caretColor: 'rgb(255,255,0)', color: 'white', backgroundBlendMode: 'overlay', borderRadius: '100px', height: '40px', fontSize: '20px'}}
                            className="form-control" type="text" onChange={this.searchTextUpdated}
                            placeholder="Search" value={this.state.searchQuery}
                            aria-label="Search"/>
                    </div>
                    <select style={{width: '100px',backgroundColor: 'rgb(255,255,255,1)', color: 'black', borderRadius: '20px', height: '40px', fontSize: '18px'}}
                            className="custom-select col-lg-1 col-xs-1" onChange={this.searchTypeUpdated}>
                        <option value="movie">Movies</option>
                        <option value="user">Users</option>
                    </select>
                    <button type='btn' className="text-white btn btn-outline-success ml-2" onClick={this.searchButtonClicked}>
                        GO
                    </button>

                </div>

                <h3 className="ml-4 mt-4 white-title text-center"> Popular Movies </h3><br></br>
                <MovieSlider movies={this.state.popularMovies}/>

                <h3 className="ml-4 mt-4 white-title text-center"> In Theatres </h3><br></br>
                <MovieSlider movies={this.state.nowPlayingMovies}/>

                <FooterComponent/>
            </AnimatedDiv>

            )
        }

        
    }
}
