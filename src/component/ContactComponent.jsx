import React, { Component } from "react";
import ContactService from "../service/ContactService";

class ContactComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: 'A'
        }
    }

    componentDidMount() {
        if(this.state.id == -1) {return}

        ContactService.getContact(this.state.id)
        .then(response => this.setState({
            name: response.data.contactName
        }))
    }

    render(){
        let name = this.state.name
        let id = this.state.id

        return(
            <div>
                 <h1>Contact details</h1>
                 <div>{name}</div>
                 <div>{id}</div>   
            </div>
                
                
        )
    }
}
export default ContactComponent