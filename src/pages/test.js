import React, { useState, useEffect } from 'react';
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [listeQuestion, setListeQuestion] = useState([]);
  useEffect(() => {
    gettest()
  }, [])
  function gettest() {
    axios.get(`http://localhost:5000/qtest/${localStorage.getItem('Id_poste')}`)

      .then((res) => {
        console.log(res, 'res');
        setListeQuestion(res.data)

      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [feedback, setFeedback] = useState({});
  function onSubmit(e) {
    e.preventDefault()
    console.log('feedbackfeedback',feedback);
    const feedbackarr = [];
    Object.keys(feedback).map((v) => {
        feedbackarr.push({
            "question_id": v,
            "feedback": feedback[v]
        })
    })
    let body = {
      MATRICULLE: localStorage.getItem('MATRICULLE'),
      id_poste: localStorage.getItem('Id_poste'),
      rep:JSON.stringify(feedbackarr)
    }
    axios.post("http://localhost:5000/reptest/", body).then(res => {
      console.log(res.data);
  
      Swal.fire({
        title: "TEST TERMINE?",
        text: "Merci pour votre participation ! ",
     
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/Acceuil";
          
        } else if (result.isDenied) {
         
        
        }
      });
     
    })
      .catch(err => {
        /* toastr error */
        console.log("erreurrrr", err);
      }
     );
   
}

  return (
    <div>
      <form>
        <h1><i><b><u> Partie Question :</u></b></i></h1>
        <br/>
        <br/>
        <div>
          {listeQuestion.map((liste,index) => (
            
            <>  
            <label><b><i>*{liste.qtest}</i></b></label>
             
              {liste.url !== '' ?
                <img style={{ margin:'50px' }} 
                  src={`http://localhost:5000/sendFile/${liste.url}`}
                />
                : <></>}
              
              <textarea style={{ width: '1200px', height: '130px' ,margin:'50px', resize: 'none', border: '2px solid',padding:'10px'}} 
              onChange={(e) => setFeedback({ ...feedback, [liste.id_qtest]:e.target.value })}
              >
              </textarea>
              <br />
            </>
          ))}</div>
   
   {<button onClick={(e)=>onSubmit(e)}
                  style={{width:'150px',  backgroundColor: "#4CAF50",color: "white", padding: "15px 32px",
                   display: "inline-block", margin: "4px 600px",cursor: "pointer"}} > 
                   
                   <h3>Terminer 2/2</h3></button>}
      </form>
    </div>)
}

export default App;
//style={{ width: '1300px', height: '300px' }}

//    margin-left: 174px;
//height: 186px;
//width: 341px;
/*     margin-left: 174px;
    height: 186px;
    width: 341px; 
    alt+shit+all*/