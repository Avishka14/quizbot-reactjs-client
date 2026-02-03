import React, { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage";
import LoginRequire from "../LoginRequire";
import * as authServices from "../../../services/authServices";
import "./Admin.css";
import BlogViewCard from "./AdminBlogComponents/BlogViewCard";

function AdminPanel() {
  const [section, setSection] = useState("users");
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    loadAdminData();
  }, []);

      const loadAdminData = async () => {
      try {
        const userRes = await authServices.getUserByToken();
        setAdmin(userRes.data);

        const blogRes = await authServices.getNotApprovedBlogs();
        setBlogs(blogRes.data);
      } catch (err) {
        console.error("Auth error:", err);
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    };

  if (loading) return <LoadingPage />;
  if (!admin) return <LoginRequire />;


const handleBlogApprove = async (blogId) => {
  try {
    const response = await authServices.approveBlog(blogId);
    
    if(response.status === 200) {

    setBlogs(
      blogs.map((x) =>
        x.id === blogId ? { ...x, status: "approved" } : x
      )
    );
    alert("Blog approved successfully!");
    loadAdminData();

  }

  } catch (error) {
    console.log("Error approving blog:", error);
  }
};


const handleBlogDecline = async (blogId) => {
  try {
    const response = await authServices.declineBlog(blogId);
    
    if(response.status === 200) {

    setBlogs(
      blogs.map((x) =>
        x.id === blogId ? { ...x, status: "declined" } : x
      )
    );
    alert("Blog Declined successfully!");
    loadAdminData();

  }

  } catch (error) {
    console.log("Error declining blog:", error);
  }
};

  return (
    <main className="admin-panel">
      <aside className="admin-panel-sidebar">
        <h2 className="admin-panel-logo">QuizBot Admin Panel</h2>
        <button
          onClick={() => setSection("users")}
          className={section === "users" ? "active" : ""}
        >
          Users
        </button>
        <button
          onClick={() => setSection("blogs")}
          className={section === "blogs" ? "active" : ""}
        >
          Blogs
        </button>
      </aside>

      <section className="admin-panel-content">
        {section === "users" && (
          <div className="admin-panel-card">
            <h3>User Management</h3>

            <ul className="admin-panel-list">
              {users.map((u) => (
                <li key={u.id} className="admin-panel-list-item">
                  <span>
                    {u.name} • {u.email}
                  </span>
                  <div>
                    <button>Edit</button>
                    <button
                      className="danger"
                      onClick={() =>
                        setUsers(users.filter((x) => x.id !== u.id))
                      }
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {section === "blogs" && (
          <div className="admin-panel-card">
            <h3>Blog Approval</h3>

            <ul className="admin-panel-list">
              {blogs.map((b) => (
                <li key={b.id} className="admin-panel-list-item">
                   <p>{b.id}</p>
                  <img
                    src={`http://localhost:8080${b.coverImage}`}
                    alt="Article thumbnail"
                    className="approval-thumbnail"
                  />
                  <p>{b.category}</p>
                  <p>
                   {b.title.length > 15 ? b.title.slice(0, 15) + "..." : b.title}
                  </p>
                  <div>

                    <button onClick={() => setSelectedBlog(b)}>Read</button>
                    
                    <button className="success" onClick={() => handleBlogApprove(b.id)}>
                      Approve
                    </button>
                   
                    <button className = "danger" onClick={() => handleBlogDecline(b.id)} >
                      Decline
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

       <BlogViewCard blog={selectedBlog} onClose={() => setSelectedBlog(null)}/>

    </main>
  );
}

export default AdminPanel;
