import React from 'react';
import { useHistory } from "react-router-dom";

function BackRoute () {
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    return (
      <div>
        <button className="back-button"
          onClick={goToPreviousPath}
        >
        <i class="fa fa-angle-left" aria-hidden="true"></i>
        </button>
      </div>
    );
}


export default BackRoute;