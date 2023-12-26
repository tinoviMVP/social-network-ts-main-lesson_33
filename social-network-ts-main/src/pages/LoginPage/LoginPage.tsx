import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../components/Typography/Heading/Heading";
import { RegistrationInfo } from "../../components/RegistrationPage/RegistrationPage";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading headingType="h1" headingText="Авторизация" />
      <form action="#">
        <input type="name" placeholder="Имя" />
        <input type="email" placeholder="Почта" />
        <input type="tel" placeholder="Номер телефона" />
        <input type="password" placeholder="Пароль" />
        <input type="text" placeholder="Город" />
        <button>Войти</button>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo />
    </div>
  );
};
