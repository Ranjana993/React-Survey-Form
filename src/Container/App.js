import './App.css';
import React from "react"
import TextInput from '../Component/TextInput';
import Option from '../Component/Option';

const UserDetail = [
  {
    name: "Title",
    label: "Title"
  },
  {
    name: "firstName",
    label: "First Name"
  },
  {
    name: "lastName",
    label: "Last Name"
  },
  {
    name: "Address",
    label: "Address"
  },
  {
    name: "city",
    label: "City"
  },
  {
    name: "state",
    label: "State/Region"
  },
  {
    name: "postalCode",
    label: "Postal Code"
  },
  {
    name: "country",
    label: "Country"
  },
  {
    name: "phone",
    label: "Phone Number"
  },
  {
    name: "Fax",
    label: "Fax "
  },
  {
    name: "email",
    label: "Email"
  },
  {
    name: "creditCardHolder",
    label: "Credit Card Holder"
  }

]

export default class App extends React.Component {
  state = {
    name: "",
    city: "",
    Title: "",
    firstName: "",
    lastName: "",
    Address: "",
    state: "",
    creditCardHolder: "",
    email: "",
    phone: "",
    country: "",
    Fax: "",
    postalCode: "",


  }
  textChangeHandle = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="main-div">
        <h2>This is Something For billing Information...</h2>
        <div className="text-box-field">
          <form>
            {
              UserDetail.map((v, i) => {
                return (
                  <TextInput
                    className="textField"
                    key={i}
                    name={v.name}
                    label={v.label}
                    value={this.state[v.name]}
                    changeHandle={this.textChangeHandle}
                  />
                )
              })
            }
            <Option />
            <button type="submit" className="btn" >Click to submit</button>
          </form>
        </div>
      </div>
    )
  }
}