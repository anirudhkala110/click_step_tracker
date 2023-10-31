import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    var clickedBoxes = [];

    function changeColor(box) {
      if (clickedBoxes.length === 8) {
        // Directly change the last box to orange
        box.style.backgroundColor = "orange";
        setTimeout(function () {
          changeToOrangeSequence();
        }, 1000);
      } else {
        if (clickedBoxes.includes(box)) {
          // Alert if the same box is clicked again
          alert("This box has already been clicked!");
        } else {
          box.style.backgroundColor = "green";
          clickedBoxes.push(box);
        }
      }
    }

    function changeToOrangeSequence() {
      var delay = 0;
      for (var i = 0; i < clickedBoxes.length; i++) {
        (function (i) {
          setTimeout(function () {
            clickedBoxes[i].style.backgroundColor = "orange";
          }, delay);
          delay += 500;
        })(i);
      }
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.addEventListener('click', () => changeColor(box));
    });
  }, []);

  const handleRefresh=()=>{
    window.location.reload(true)
  }


  return (
    <div className="min-vh-100 bg-white">
      <nav className='navbar navbar-light bg-dark text-light fixed-top'>
        <span className='fs-3 fw-bold'>Matrix Step Tracker</span>
      </nav>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div>
          <div id="matrix" className="bg-dark d-flex justify-content-center align-items-center p-5 border-3 row shadow-lg rounded rounded-3" style={{ minWidth: "500px", maxWidth: "800px" }}>
            <div className="box col-3 rounded rounded-3 m-2 border border-light shadow shadow-lg btn btn-outline-primary"></div>
            <div className="box col-3 rounded rounded-3 m-2 border border-light shadow shadow-lg btn btn-outline-primary"></div>
            <div className="box col-3 rounded rounded-3 m-2 border border-light shadow shadow-lg btn btn-outline-primary"></div>
            <div className="box col-3 rounded rounded-3 m-2 border border-light shadow shadow-lg btn btn-outline-primary"></div>
            <div className="box col-3 rounded rounded-3 m-2 border border-light shadow shadow-lg btn btn-outline-primary"></div>
            <div className="box col-3 rounded rounded-3 m-2 border border-light shadow shadow-lg btn btn-outline-primary"></div>
            <div className="box col-3 rounded rounded-3 m-2 border border-light shadow shadow-lg btn btn-outline-primary"></div>
            <div className="box col-3 rounded rounded-3 m-2 border border-light shadow shadow-lg btn btn-outline-primary"></div>
            <div className="box col-3 rounded rounded-3 m-2 border border-light shadow shadow-lg btn btn-outline-primary"></div>
          </div>
          <button className='btn btn-primary w-100 my-3 shadow' onClick={e=>handleRefresh()}>Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default App;
