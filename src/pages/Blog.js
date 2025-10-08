import React, { useState } from "react";

const Blog = () => {
  const [blogSnippets, setBlogSnippets] = useState([
    {
      id: 1,
      type: "quick-tip",
      title: "🍳 Kitchen Hack",
      content:
        "Add a pinch of salt to your coffee grounds before brewing - it reduces bitterness!",
      author: "Chef Maria",
      likes: 42,
    },
    {
      id: 2,
      type: "review",
      title: "⭐ Recipe Review",
      content:
        "Tried the Lemon Herb Chicken - absolutely delicious! My family loved it. ⭐⭐⭐⭐⭐",
      author: "Sarah K.",
      likes: 28,
    },
    {
      id: 3,
      type: "fact",
      title: "🌱 Food Fact",
      content:
        "Avocados are actually berries! They're classified as single-seeded berries.",
      author: "Nutritionist Tom",
      likes: 35,
    },
    {
      id: 4,
      type: "quick-tip",
      title: "🥑 Storage Tip",
      content:
        "Store tomatoes at room temperature - refrigeration makes them mealy!",
      author: "Kitchen Pro",
      likes: 19,
    },
    {
      id: 5,
      type: "review",
      title: "⭐ Recipe Review",
      content:
        "The Chocolate Chip Cookies were perfect! Crispy edges, soft center. Will make again!",
      author: "Mike R.",
      likes: 31,
    },
    {
      id: 6,
      type: "fact",
      title: "🍯 Sweet Fact",
      content:
        "Honey never spoils. Archaeologists found edible honey in ancient Egyptian tombs!",
      author: "Food Historian",
      likes: 47,
    },
    {
      id: 7,
      type: "quick-tip",
      title: "🧅 Prep Tip",
      content:
        "To avoid crying while cutting onions, chill them in the fridge for 30 minutes first.",
      author: "Smart Cook",
      likes: 23,
    },
    {
      id: 8,
      type: "review",
      title: "⭐ Recipe Review",
      content:
        "Berry Smoothie Bowl was a hit with the kids! So colorful and healthy. 🌈",
      author: "Mom of Two",
      likes: 39,
    },
  ]);

  const communityReviews = [
    {
      id: 1,
      recipe: "Lemon Herb Chicken",
      rating: 5,
      comment:
        "This recipe saved my dinner party! Everyone asked for the recipe.",
      author: "David L.",
      date: "2 days ago",
    },
    {
      id: 2,
      recipe: "Chocolate Chip Cookies",
      rating: 4,
      comment:
        "Perfect balance of sweet and chocolatey. My new go-to cookie recipe!",
      author: "Priya M.",
      date: "1 week ago",
    },
    {
      id: 3,
      recipe: "Berry Smoothie Bowl",
      rating: 5,
      comment: "So refreshing and healthy! Love the topping ideas.",
      author: "Emma T.",
      date: "3 days ago",
    },
  ];

  const [showForm, setShowForm] = useState(false);
  const [newTip, setNewTip] = useState({ author: "", content: "" });

  const getTypeColor = (type) => {
    switch (type) {
      case "quick-tip":
        return "#4a7c59";
      case "review":
        return "#f8b500";
      case "fact":
        return "#d9534f";
      default:
        return "#6c757d";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "quick-tip":
        return "💡";
      case "review":
        return "⭐";
      case "fact":
        return "📚";
      default:
        return "📝";
    }
  };

  const handleShareTipClick = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTip({ ...newTip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTip.author.trim() && newTip.content.trim()) {
      const tip = {
        id: blogSnippets.length + 1,
        type: "quick-tip",
        title: "💡 Community Tip",
        content: newTip.content,
        author: newTip.author,
        likes: 0,
      };
      setBlogSnippets([tip, ...blogSnippets]);
      setNewTip({ author: "", content: "" });
      setShowForm(false);
      alert("Your tip has been shared!");
    }
  };

  return (
    <div className="container" style={{ marginTop: "40px", marginBottom: "60px" }}>
      <div className="main-content">
        <div className="recipes-section">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1 style={{ color: "#4a7c59", marginBottom: "10px" }}>
              Tasty Bites Community
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Quick tips, recipe reviews, and food facts from our cooking
              community
            </p>
          </div>

          {/* Quick Snippets Grid */}
          <div style={{ marginBottom: "50px" }}>
            <h2
              style={{
                color: "#4a7c59",
                marginBottom: "20px",
                borderBottom: "2px solid #6b9d7a",
                paddingBottom: "10px",
              }}
            >
              Community Snippets
            </h2>
            <div className="recipe-grid">
              {blogSnippets.map((snippet) => (
                <div key={snippet.id} className="recipe-card" style={{ minHeight: "200px" }}>
                  <div
                    className="recipe-content"
                    style={{
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: getTypeColor(snippet.type),
                          color: "white",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        {getTypeIcon(snippet.type)} {snippet.title}
                      </span>
                    </div>

                    <p
                      style={{
                        flex: 1,
                        fontSize: "1rem",
                        lineHeight: "1.5",
                        marginBottom: "15px",
                        color: "#333",
                      }}
                    >
                      {snippet.content}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "auto",
                      }}
                    >
                      <span style={{ color: "#666", fontSize: "0.9rem" }}>
                        By {snippet.author}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <span style={{ color: "#d9534f" }}>❤️</span>
                        <span style={{ color: "#666", fontSize: "0.9rem" }}>
                          {snippet.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recipe Reviews Section */}
          <div>
            <h2
              style={{
                color: "#4a7c59",
                marginBottom: "20px",
                borderBottom: "2px solid #6b9d7a",
                paddingBottom: "10px",
              }}
            >
              Recent Recipe Reviews
            </h2>
            <div style={{ display: "grid", gap: "20px" }}>
              {communityReviews.map((review) => (
                <div
                  key={review.id}
                  style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "10px",
                    }}
                  >
                    <h4 style={{ margin: 0, color: "#4a7c59" }}>{review.recipe}</h4>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} style={{ color: "#f8b500" }}>
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.5",
                      color: "#333",
                      marginBottom: "10px",
                    }}
                  >
                    "{review.comment}"
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    <span>By {review.author}</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Sidebar */}
        <div className="sidebar">
          <div className="sidebar-section">
            <h3>Community Stats</h3>
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#4a7c59",
                    fontWeight: "bold",
                  }}
                >
                  1.2K+
                </div>
                <div style={{ color: "#666" }}>Community Members</div>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#4a7c59",
                    fontWeight: "bold",
                  }}
                >
                  25
                </div>
                <div style={{ color: "#666" }}>Recipes</div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#4a7c59",
                    fontWeight: "bold",
                  }}
                >
                  156
                </div>
                <div style={{ color: "#666" }}>Reviews Shared</div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Quick Categories</h3>
            <ul className="categories-list" style={{ listStyle: "none", padding: 0 }}>
              <li>💡 Kitchen Tips</li>
              <li>⭐ Recipe Reviews</li>
              <li>📚 Food Facts</li>
              <li>👨‍🍳 Chef Secrets</li>
              <li>🥗 Healthy Eating</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Top Contributors</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#6b9d7a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  MK
                </div>
                <div>
                  <div style={{ fontWeight: "500" }}>Maria K.</div>
                  <div style={{ fontSize: "0.8rem", color: "#666" }}>
                    42 tips shared
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#f8b500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  DT
                </div>
                <div>
                  <div style={{ fontWeight: "500" }}>David T.</div>
                  <div style={{ fontSize: "0.8rem", color: "#666" }}>
                    28 reviews
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#d9534f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  SP
                </div>
                <div>
                  <div style={{ fontWeight: "500" }}>Sarah P.</div>
                  <div style={{ fontSize: "0.8rem", color: "#666" }}>
                    35 contributions
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Join the Conversation</h3>
            <p>Share your cooking tips and recipe reviews with our community!</p>
            <button
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "10px" }}
              onClick={handleShareTipClick}
            >
              {showForm ? "Cancel" : "Share Your Tip"}
            </button>

            {showForm && (
              <form
                onSubmit={handleSubmit}
                style={{
                  marginTop: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <input
                  type="text"
                  name="author"
                  placeholder="Your Name"
                  value={newTip.author}
                  onChange={handleInputChange}
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
                <textarea
                  name="content"
                  placeholder="Share your quick tip..."
                  value={newTip.content}
                  onChange={handleInputChange}
                  rows="3"
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    resize: "none",
                  }}
                  required
                ></textarea>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#4a7c59",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  Submit Tip
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
