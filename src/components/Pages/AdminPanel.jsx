import React , { useState } from "react";
import "./PagesStyle.css";

function AdminPanel() {
  const [section, setSection] = useState("users");
  const [users, setUsers] = useState([{ id: 1, name: "Admin", email: "admin@mail.com" }]);
  const [blogs, setBlogs] = useState([{ id: 1, title: "First Blog", status: "pending" }]);

  return (
    <main className="admin-panel">
      <aside className="admin-panel-sidebar">
        <h2 className="admin-panel-logo">QuizBot Admin Panel</h2>
        <button onClick={() => setSection("users")} className={section === "users" ? "active" : ""}>Users</button>
        <button onClick={() => setSection("blogs")} className={section === "blogs" ? "active" : ""}>Blogs</button>
      </aside>

      <section className="admin-panel-content">
        {section === "users" && (
          <div className="admin-panel-card">
            <h3>User Management</h3>


            <ul className="admin-panel-list">
              {users.map(u => (
                <li key={u.id} className="admin-panel-list-item">
                  <span>{u.name} • {u.email}</span>
                  <div>
                    <button >Edit</button>
                    <button className="danger" onClick={() => setUsers(users.filter(x => x.id !== u.id))}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {section === "blogs" && (
          <div className="admin-panel-card">
            <h3>Blog Moderation</h3>

            <ul className="admin-panel-list">
              {blogs.map(b => (
                <li key={b.id} className="admin-panel-list-item">
                  <span>{b.title} • {b.status}</span>
                  <div>
                    <button onClick={() => setBlogs(blogs.map(x => x.id === b.id ? { ...x, status: "approved" } : x))}>Approve</button>
                    <button className="danger" onClick={() => setBlogs(blogs.map(x => x.id === b.id ? { ...x, status: "declined" } : x))}>Decline</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}

export default AdminPanel