import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AFooter from "./AFooter";
import ANavbar from "./ANavbar";

function Users() {
  const [Userdata, setUserData] = useState([]);
  const ex = true;
  const [userId, setUserId] = useState("");
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  let i = 1;

  useEffect(() => {
    axios
      .get(`http://localhost:2000/user`)
      .then(async (res) => {
        const data = await res.data;
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, [reducerValue]);

  useEffect(() => {
    axios.delete(`http://localhost:2000/user/${userId}`);
    forceUpdate();
  }, [userId]);

  const filter1 = Userdata.filter((user) => {
    if (ex) {
      return user.type === "user";
    }
  });

  const deleteUser = (id, e) => {
    // console.log(id)
    e.preventDefault();
    setUserId(id);
    forceUpdate();
  };

  return (
    <>
      <ANavbar />
      <div className="container mh  mb-3 mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Gmail Address</th>
              <th scope="col">Delete User</th>
            </tr>
          </thead>
          <tbody>
            {filter1.map((row) => {
              return (
                <tr>
                  <th scope="row">{i++}</th>
                  <td>{row.name}</td>
                  <td>{row.mail}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger btn-sm"
                      onClick={(e) => deleteUser(row._id, e)}
                    >
                      Delete User
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <AFooter />
    </>
  );
}

export default Users;
