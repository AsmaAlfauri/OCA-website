import React,{Component} from 'react';

class NavBar extends Component {
    state = {  }
    render() {
        return (
        <div className="container">
            <nav className="navbar sticky-top navbar-light bg-light">
                <a className="navbar-brand" href="#">Home</a>

                <a className="navbar-brand" href="#">Courses</a>

                <a className="navbar-brand" href="#">Ask</a>

                <a className="navbar-brand" href="#">Events</a>

                <a className="navbar-brand" href="#">contact Us</a>
                <form className="form-inline">

                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        <button type="button" class="btn btn-light">logout</button>

                </form>

            </nav>
</div>
        );
    }
}

export default NavBar;