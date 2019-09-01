import React,{Component} from 'react';
import HomeContainer from './HomeContainer'


class Profile extends Component {
    state = {  }
    render() {
        return (
            <div>
                <div class="row">

                    
                    <div class="col-4">
                        <h5>Asma</h5>
                        <p>Class B</p>
                    </div>


                    <div class="col-8">
                    <HomeContainer/>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default Profile;