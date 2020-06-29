import axios from 'axios'

class ContactService {

    getAllContacts() {
        return axios({
            method: 'GET',
        url: 'http://localhost:8080/api/v1/contacts/getAll'
    }).then((response) => {
        return response;
        });
}

    deleteContact(id) {
        return axios.delete(`http://localhost:8080/api/v1/contacts/delete/${id}`);
    }
}

export default new ContactService()