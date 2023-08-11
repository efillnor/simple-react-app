import React from 'react';
import './Footer.css';


class Footer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            content: "",
            name:""
        }

        this.contentChange = this.contentChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }

    contentChange(event){
        this.setState({ content: event.target.value});
    }

    nameChange(event){
        this.setState({ name: event.target.value});
    }


    render() {
        return (<footer>
            <input value={this.state.name} onChange={this.nameChange} id="name" type="text" placeholder="Name" />
            <input value={this.state.content} onChange={this.contentChange} id="content" type="text" placeholder="Phone number" />
            <span id="add-btn" onClick={() => this.props.createItem(this.state.name, this.state.content)}>Add</span>
        </footer>)

    }
}

export default Footer;
