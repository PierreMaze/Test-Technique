import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./FooterCard";

const CardBody = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/users/`
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="box-secondary">
      {users.map((user) => (
        <li key={user.id}>
          <div className="box-title">
            <h1>Hello World!</h1>
            <h2>Je m&apos;appelle {user.fullname}</h2>
          </div>
          <div className="box-subtitle">
            <p>
              Tu peux me contacter par mail:{" "}
              <a href="https://www.linkedin.com/\in\pierremazelaygue">
                <strong>{user.email}</strong>
              </a>
            </p>
            <p>
              <strong>Ou alors par téléphone : </strong>
              {user.phone}.
            </p>
            <p>
              <strong>Gender : </strong>
              {user.gender}.
            </p>
            <p>
              <strong>Job : </strong>
              {user.employment}.
            </p>
            <Footer />
          </div>
        </li>
      ))}
    </div>
  );
};

export default CardBody;