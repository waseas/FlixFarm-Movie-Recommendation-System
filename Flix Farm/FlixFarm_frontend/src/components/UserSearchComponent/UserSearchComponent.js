import React from 'react';
import {HomeNavigationBar} from "../HomeComponent/HomeNavigationBar";
import {UserSearchResultItem} from "./UserSearchResultItem";
import UserService from "../../services/UserService";
import FooterComponent from "../../components/HomeComponent/FooterComponent";
import posed from "react-pose";

const AnimatedDiv = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1}
});

export default class UserSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            userProfile: '',
            searchQuery: '',
            searchType: 'movie',
            isVisible: false
        }

        this.userService = new UserService();

        this.searchTextUpdated = this.searchTextUpdated.bind(this);
        this.searchButtonClicked = this.searchButtonClicked.bind(this);
        this.searchTypeUpdated = this.searchTypeUpdated.bind(this);
    }

    componentDidMount() {
        this.userService.search(this.props.match.params.query).then(response => {
            this.setState({
                searchResults: response
            })
        })

        setTimeout(() => {
            this.setState({ isVisible: !this.state.isVisible });
        }, 500);

        this.userService.getProfile().then(
            response => this.setState({
                userProfile: response
            })
        )
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
                window.location.reload(false);
            }
            else {
                this.props.history.push('/user/search/' + this.state.searchQuery);
                window.location.reload(false);
            }
        }
        else {
            alert("Enter a search query first!");
        }
    }

    renderSearchResults() {
        if(this.state.searchResults) {
            let items = this.state.searchResults
                .map(function(result) {
                    return <UserSearchResultItem searchResult={result}/>;
                });
            return (items);
        }
    }

    render() {
        return (
            <AnimatedDiv pose={this.state.isVisible ? 'visible' : 'hidden'}>
                {
                    this.state.userProfile.message === 'You are not logged in' &&
                    <HomeNavigationBar loggedIn={false}/>

                }
                {
                    this.state.userProfile.username !== undefined &&
                    <div>
                        <HomeNavigationBar loggedIn={true}
                                           username={this.state.userProfile.username}
                                           logout={this.logout}/>
                    </div>
                }

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

                <div className="container-fluid ml-0 text-center">
                <h6 className={'mt-4 col-12 white-title'}> Search results for "{this.props.match.params.query}" </h6>
                </div>
                

                <div className='row'>
                    <div className='col-3'></div>
                    <div className={"col-6 mt-4 justify-content-center"}>
                        <ul className="list-group">
                            {this.renderSearchResults()}
                        </ul>
                    </div>
                </div>
                <FooterComponent/>
            </AnimatedDiv>
        );
    }
}