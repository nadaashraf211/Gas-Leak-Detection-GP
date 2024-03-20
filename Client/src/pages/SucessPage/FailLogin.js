import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  //npm install bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Fail = () => {
    const x=useNavigate()

    return (
        <section className="Sucess" id="Sucess">

<div class="modal-show container text-center align-items-center" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-body">
        <div class="checkmark-circle" style={{ backgroundColor: '#ff0000' }}>
          <i class="checkmark">X</i>
        </div>     
      </div>
      <div class="container">
    <div class="success-card" style={{ color: '#ff0000' }}>
      <h2 >Login Failed</h2>
      <p>Failed to submit data. Please try again later.</p>
      
      <div class="modal-footer">
        <button className="btn" style={{ backgroundColor: '#ff0000' }} type="button" onClick={()=>x("/login")} class="btn start-button">Retry</button>
      </div>
    </div>
    </div>
      
      
    </div>
  </div>
</div>
        </section>

    );
}

export default Fail;