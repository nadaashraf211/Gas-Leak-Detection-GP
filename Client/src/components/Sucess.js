import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  //npm install bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Sucess = () => {
    const x=useNavigate()

    return (
        <section className="Sucess" id="Sucess">

<div class="modal-show container text-center align-items-center" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      {/* <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> */}
      <div class="modal-body">
        <div class="checkmark-circle">
          <i class="checkmark">✓</i>
        </div>
        <p className="txt">Awesome!</p>
        <p className="txt">There is No Gas Leakage</p>
      </div>
      <div class="modal-footer">
        <button type="button" onClick={()=>x("/services/sensor")} class="btn start-button">Go Back</button>
      </div>
    </div>
  </div>
</div>

        </section>

    );
}

export default Sucess;