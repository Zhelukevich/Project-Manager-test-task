import React from "react";
import { Link } from 'react-router-dom';


export default function LoginPage() {
  return (
    <div>
      <h1>Логин</h1>
      <Link to="/register">Регистрация</Link>
    </div>
  );
}
