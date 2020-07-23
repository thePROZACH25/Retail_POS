import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="">
        <TextField
          id="id"
          label="Search Item"
          name="searchItem"
          style={{ margin: 0 }}
          placeholder="item #"
          fullWidth
          value={this.handleChange}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Button onClick={this.submitItem} variant="contained" color="primary">
          Primary
        </Button>
      </div>
    );
  }
}

export default SearchItem;
