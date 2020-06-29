import React, { Component } from "react";
import ContactService from "../service/ContactService";

class ListContacts extends Component {
    render() {
        return(
            <div className="container">
                <h3>All contacts</h3>
                <hr></hr>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th>nickName</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map(
                                    contact => 
                                    <tr key = {contact.contactName}>
                                        <td>{contact.contactName}</td>
                                        <td>{contact.mobileNumber}</td>
                                        <td>{contact.nickName}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteContactClicked(contact.contactId)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => this.updateContactClicked(contact.contactId)}>Update</button></td>
                                        <br></br>
                                        <br></br>
                                        </tr>
                                       
                                )
                            }
                        </tbody>
                    </table>

                    <div className = "row">
                          <button className = "btn btn-success" onClick = {this.addContactsClicked}>Add</button>      
                    </div>

                </div>
            </div>
        )
    }


    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            message: null
        } 
        this.getAllContacts = this.getAllContacts.bind(this)
        this.deleteContactClicked = this.deleteContactClicked.bind(this)
        this.updateContactClicked = this.updateContactClicked.bind(this)
        this.addContactsClicked = this.addContactsClicked.bind(this)
    }

    componentDidMount() {
        this.getAllContacts();
    }

    getAllContacts() {
        ContactService.getAllContacts()
        .then(response => {
            console.log(response);
            this.setState({contacts: response.data})
        })
    }

    deleteContactClicked(id) {
        ContactService.deleteContact(id)
        .then(response => {
            this.setState({message: <i>Contact deleted successfully!</i>})
            this.getAllContacts()
        })
    }
    
    updateContactClicked(id) {
        console.log(`updating id: ${id}`)
        this.props.history.push(`/contacts/update/${id}`)
    }

    addContactsClicked() {
        this.props.history.push(`/contacts/-1`)
    }
}
export default ListContacts