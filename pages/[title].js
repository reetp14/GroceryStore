import { useRouter } from "next/router";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Popup from "../components/Popup";
var tableify = require("tableify");
var parse = require("html-react-parser");
import MuiTable from "../components/muitable";

const Page = props => {
  const router = useRouter();

  const user = props.data.map(user => {
    return [user.fname, user.lname, user.phoneNo, user.emailId];
  });
  console.log(props.data);
  console.log(user);

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the '{router.query.title}' List.</p>
      <MuiTable data={user} />
      <Popup></Popup>
    </Layout>
  );
};

Page.getInitialProps = async function() {
  const res = await fetch("http://localhost:80/app/adminUser");
  var data = await res.json();

  // console.log(data);

  return {
    data
  };
};

export default Page;
