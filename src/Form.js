import { Component } from "react";

class Form extends Component {
    initialState = {
        subject: '',
        ser: '',
        ver: '',
        tener: '',
        hablar: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {subject, ser, ver, tener, hablar} = this.state

        return (
            <form>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" value={subject} onChange={this.handleChange} />
                <label htmlFor="ser">Ser</label>
                <input type="text" name="ser" id="ser" value={ser} onChange={this.handleChange} />
                <label htmlFor="ver">Ver</label>
                <input type="text" name="ver" id="ver" value={ver} onChange={this.handleChange} />
                <label htmlFor="tener">Tener</label>
                <input type="text" name="tener" id="tener" value={tener} onChange={this.handleChange} />
                <label htmlFor="hablar">Hablar</label>
                <input type="text" name="hablar" id="hablar" value={hablar} onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;