import React from 'react'

import style from "./style.module.scss"

function Table({users}) {
    return (
      <div className={style.tableWrapper}>
        <table className={style.table}>
            <tr>
                <th>№</th>
                <th>Name</th>
                <th>S. Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>

            {users.map((user) => {
                const name = user.name.split(" ")[0];
                const surname = user.name.split(" ")[1];
                const { city, street, suite } = user.address;

                return (
                    <tr>
                        <td>{user.id}</td>
                        <td>{name}</td>
                        <td>{surname}</td>
                        <td>{user.age || "-"}</td>
                        <td>{city}, {street}, {suite}</td>
                    </tr>
                );
            })}

          {/* <tr>
                    <td>1</td>
                    <td>Stephen</td>
                    <td>Cox</td>
                    <td>25</td>
                    <td>Los Angeles</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Josephin</td>
                    <td>Tan</td>
                    <td>19</td>
                    <td>Ass St.</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Joyce</td>
                    <td>Ming</td>
                    <td>35</td>
                    <td>Ashole St.</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>James</td>
                    <td>Pentel</td>
                    <td>25</td>
                    <td>Beach St.</td>
                </tr> */}
        </table>
      </div>
    );
}

export default React.memo(Table)