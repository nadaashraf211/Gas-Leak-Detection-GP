import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //npm install bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Sucess = () => {
  const x = useNavigate();

  return (
    <section className="Sucess" id="Sucess">
      <div
        class="modal-show container text-center align-items-center"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="checkmark-circle">
                <i class="checkmark">✓</i>
              </div>
            </div>
            <div class="container">
              <div class="success-card">
                <h2>Account Created Successfully!</h2>
                <p>Welcome to our website.</p>
                <div class="modal-footer">
                  <button
                    className="btn"
                    type="button"
                    onClick={() => x("/home")}
                    class="btn start-button"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sucess;
