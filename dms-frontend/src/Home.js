import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Dealer Management System</h1>
                <p>Manage vehicles, customers, and sales easily with our platform.</p>
                <div className="home-buttons">
                    <button className="btn">View Vehicles</button>
                    <button className="btn">View Customers</button>
                    <button className="btn">View Sales</button>
                </div>
            </header>
        </div>
    );
}

export default Home;
