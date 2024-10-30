import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h2>Our user: {users.length}</h2>
            <p>User Details</p>

            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>

    );
};

export default Users;