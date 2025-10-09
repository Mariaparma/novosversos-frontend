"use client";
import React, { useState } from "react";
import styles from "./Contato.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por ${formData.name} (${formData.email})!`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Entre em Contato </h1>
      <p className={styles.subtitle}>
        Tem alguma dúvida, sugestão ou quer apenas mandar um alô?  
        Preencha o formulário abaixo!
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Assunto"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
        <textarea
          placeholder="Escreva sua mensagem..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button type="submit" className={styles.button}>
          Enviar Mensagem
        </button>
      </form>
      <Footer />
    </div>
  );
}
