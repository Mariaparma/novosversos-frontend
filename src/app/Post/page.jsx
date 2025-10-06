"use client";
import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";

export default function PostPage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/posts";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    image: "",
    tags: "",
    location: "",
  });

  // Buscar posts existentes
  const fetchPosts = async () => {
    try {
      const response = await fetch(API_BASE);
      const data = await response.json();
      console.log("📡 Dados retornados da API:", data);
      const arr = Array.isArray(data) ? data : data.rows || [];
      setPosts(arr);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Criar novo post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("✅ Resposta da API (novo post):", data);

      // Atualiza a lista de posts
      setPosts([data, ...posts]);

      // Limpa formulário
      setFormData({ name: "", message: "", image: "", tags: "", location: "" });
    } catch (error) {
      console.error("Erro ao criar post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLike = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/${id}/like`, { method: "PATCH" });
      if (response.ok) {
        setPosts((prev) =>
          prev.map((post) =>
            post.id === id ? { ...post, likes: post.likes + 1 } : post
          )
        );
      }
    } catch (error) {
      console.error("Erro ao curtir:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Postagens dos Fãs 💬</h1>

      {/* Formulário de criação */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Escreva seu comentário..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="URL da imagem"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tags (separadas por vírgula)"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
        />
        <input
          type="text"
          placeholder="Localização"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <button type="submit" className={styles.submitButton}>
          Publicar
        </button>
      </form>

      {/* Feed de posts */}
      {loading ? (
        <p className={styles.loading}>Carregando posts...</p>
      ) : (
        <div className={styles.feed}>
          {posts.map((post) => (
            <div key={post.id} className={styles.post}>
              {post.image && <img src={post.image} alt="Post" className={styles.image} />}
              <div className={styles.commentBox}>
                <h2 className={styles.name}>{post.name}</h2>
                <p className={styles.message}>{post.message}</p>
                <p className={styles.meta}>
                  <strong>Tags:</strong> {post.tags || "—"} •{" "}
                  <strong>Local:</strong> {post.location || "—"}
                </p>
                <p className={styles.meta}>
                  {post.created_at
                    ? new Date(post.created_at).toLocaleString("pt-BR")
                    : ""}
                </p>
                <div className={styles.likeSection}>
                  <button
                    onClick={() => handleLike(post.id)}
                    className={styles.likeButton}
                  >
                    Curtir
                  </button>
                  <span className={styles.likesCount}>{post.likes} curtidas</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
