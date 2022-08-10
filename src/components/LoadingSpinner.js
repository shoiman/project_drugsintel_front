import React from "react";
import "../css/spinner.css"

export default function LoadingSpinner() {
    return (
        <div className="spinner-container mt-5 offset-5 col-2">
            <div className="loading-spinner">
            </div>
        </div>
    );
}