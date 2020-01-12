var fetch = require("isomorphic-unfetch");
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/link";
export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: null,
      emailId: null,
      lname: null,
      phoneNo: null,
      password: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.state = {
      fname: null,
      emailId: null,
      lname: null,
      phoneNo: null,
      password: null
    };
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log("zksrsn");
    const payload = {
      fname: this.state.fname,
      lname: this.state.lname,
      phoneNo: this.state.phoneNo,
      emailId: this.state.emailId,
      password: this.state.password
    };
    return this.postFormData("http://localhost:80/app/users", payload);
  }

  async postFormData(url = "", payload) {
    console.log(JSON.stringify(payload));
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify(payload)
    });

    console.log(response);
    // return await response.json();
  }

  render() {
    return (
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="fname"
          label="First Name"
          autoComplete="fname"
          name="fname"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lname"
          label="Last Name"
          name="lname"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          autoComplete="lname"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="phoneNo"
          label="Phone No"
          name="phoneNo"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          autoComplete="phoneNo"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          autoComplete="password"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="emailId"
          label="Email Id"
          name="emailId"
          type="EmailId"
          value={this.state.value}
          onChange={this.handleChange}
          autoComplete="emailId"
          autoFocus
        />
        <Link href="/AdminUsers">
          <Button
            variant="contained"
            color="primary"
            onClick={e => {
              console.log("clicked");
              {
                this.handleSubmit(e);
              }
            }}
          >
            Create
          </Button>
        </Link>
      </form>
    );
  }
}
