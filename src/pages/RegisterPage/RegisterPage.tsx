import React from "react";
import { Link } from 'react-router-dom';


export default function RegisterPage() {
  return (
    <div>
      <h1>Регистрация</h1>
      <Link to="/login">Логин</Link>
    </div>
  )
}
