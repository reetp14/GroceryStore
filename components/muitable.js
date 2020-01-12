import React from "react";
import MUIDataTable from "mui-datatables";

class MuiTable extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const columns = [" First Name", "Last Name", "Phone No", "Email"];

    const options = {
      filterType: "dropdown",
      responsive: "scrollMaxHeight"
    };

    return (
      <MUIDataTable
        title={"Admin User List"}
        data={this.props.data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default MuiTable;
