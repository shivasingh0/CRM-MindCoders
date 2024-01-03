import React, { useState } from "react";

const Users = [
  {
    id: 1,
    selected: false,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    selected: false,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    selected: false,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: 4,
    selected: false,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    id: 5,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
];

const Table = () => {
  const [list, setList] = useState(Users);
  const [masterChecked, setMasterChecked] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  const onMasterCheck = (e) => {
    const tempList = list.map((user) => ({
      ...user,
      selected: e.target.checked,
    }));

    setMasterChecked(e.target.checked);
    setList(tempList);
    setSelectedList(tempList.filter((e) => e.selected));
  };

  const onItemCheck = (e, item) => {
    const tempList = list.map((user) =>
      user.id === item.id ? { ...user, selected: e.target.checked } : user
    );

    const totalItems = list.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    setMasterChecked(totalItems === totalCheckedItems);
    setList(tempList);
    setSelectedList(tempList.filter((e) => e.selected));
  };

  const getSelectedRows = () => {
    setSelectedList(list.filter((e) => e.selected));
  };

  return (
    <div className="">
      <div>
        <div className="col-md-12">
          {/* Table start */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={masterChecked}
                    id="mastercheck"
                    onChange={(e) => onMasterCheck(e)}
                  />
                </th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((user) => (
                <tr key={user.id} className={user.selected ? "selected" : ""}>
                  <th scope="row">
                    <input
                      type="checkbox"
                      checked={user.selected}
                      className="form-check-input"
                      id={`rowcheck${user.id}`}
                      onChange={(e) => onItemCheck(e, user)}
                    />
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>
                    <i className="bi-eye mr-2 text-dark pointer" />

                    <i className="bi-clipboard-data mr-2 text-primary pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Table end */}
          {/* Count button start */}
          <button className="btn btn-primary" onClick={() => getSelectedRows()}>
            Get Selected Items {selectedList.length}
          </button>
          {/* Count button start */}
        </div>
      </div>
    </div>
  );
};

export default Table;
