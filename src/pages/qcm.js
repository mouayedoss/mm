import React, { useState,useEffect } from 'react';
import axios from "axios";
//import Checkbox from '@material-ui/core/Checkbox';
import Swal from "sweetalert2";


function IberiaQuestionnaire() {
  const [answer, setAnswer] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [listeQuestion, setListeQuestion] = useState([]);
  let [count, setCount] = useState(0);
  // let [chaine, setChaine] = useState('');
  useEffect(() => {
    // Update the document title using the browser API
   getqcm()
  },[])
  let res=[]
  let chaine=''
  function handleAnswerChange(event,liste,response){
    event.preventDefault()
    console.log('liste',liste);
    console.log('liste',liste.rep_exacte);
    console.log('liste',response);
   console.log('response===liste.rep_exacte',response==liste.rep_exacte);
  /*  join selected elements in res (line 19)*/
   res.push(response)
   chaine=res.join("/") 
  
 
 
   
   //   console.log('in if block');
//  count=count+1
//   setCount(count) mo hey tawa aka eli tsajel fyh f res sajlo fl table qcm eli aamaltha maaha id w matricule w kol shay aandk kol taa l poste kifh tzyd aaml fl back nafes l code taa create w orbto bl front fel choix bsh thot res eli nty kaaed tekho feha id taa question w matricule w kol shay deja aandk taamlao ajout direct w baed fel consulter bsh tjib m tabla qcm w howa direct bsh yafichilk rep eli deja cochehom kbal mochkla mch fam ghofrane mochkla ili ena res amlha type tableau bch njm nabyha be hajet keka we ki bch nsoubha fi tablea fi choix lzemha tkoun chain naref ili lzem namlha function join nbdelha chain ema marftch kifch we win aalh fonctionw salan nty aaleh taaml feha type tab melowel khtr njm couchi akther min haja fi blasa eyy fl base tnajamsh thot akther mn wahda f nafs champ w deja nty les qcm teek aamlin radio button moush chekbox lek heatr radio button tekbel ken rep wahda w chekbox akthr mn wahda le el enaa amlhom chekbox we be join tnjm tsobhom kol fared wwahda wnty tkhtar chnwa benthom baed taml aakes bch trjaahom fl base k bsh thes akther mn rep bsh yetsabolk f champ choix? ey nsobhom ka chaine whda mathlan bnthom , baaaed fi affichage njbed choix we rajo be akes joint we nkhdem khtr hany kotlk res thez akther min whda bhy ena faza hedhy m aandy aaleha hata fekra le kifh taaml function bsh tbadl w trajaa le shay omry le khdemtha w aslan m naarfhsh jemla narch andekch fekra okhra kifch njm nkdhemha nty fl les qcm eli aatawhomlk mahtoutin des chekbox ?ey fma wahdet akther min reponse/ }
console.log('res',res);
console.log('chaine',chaine);  

  }

  
  function handleSubmit(event) {
  event.preventDefault()
  console.log('chaine',chaine);
  let body={
    MATRICULLE:localStorage.getItem('MATRICULLE'),
    id_question:1,
    id_poste:localStorage.getItem('Id_poste'),
    choix:chaine
}
    axios.post("http://localhost:5000/resultat/", body).then(res => {
   
      console.log(res.data);
     
    })
    .catch(err => {
      console.log("erreurrrr",err);
    });
   
      
    };
    // Insérer le code pour gérer la réponse ici
    /* poste :creation du table qcm avec l'idqcm, et la variable selectedResponse qui est une chaine contenant les reponses choisi :exp Variable:"Au début  de travail,A la fin de la transition" */
 
  //get qcm a partir get poste a partir get id
function getqcm(){
  axios.get(`http://localhost:5000/reponse/${localStorage.getItem('Id_poste')}`)
  
  .then((res) => {
    console.log(res,'res');
    setListeQuestion(res.data)
    
  })
  .catch((err) => {
    console.log(err);
  });
}
function handleClickButton(){
  Swal.fire({
    title: "Partie QCM?",
    text: "termine! ",
    //vous avez repondu a "+count+' sur '+listeQuestion.length,
    icon: "success",
    //showCancelButton: true,
    confirmButtonText: "continue!",
    //cancelButtonText: "No,répéter",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/test";
      // User clicked the "Yes, delete it!" button
      // Delete the item
    } else if (result.isDenied) {
     
      // User clicked the "No, cancel" button
      // Do nothing
    }
  });
}
/* explication */
/* if(liste&&liste.rep_d!=''){
  display radio input 
  else{
    diplay empty tag
  } 
} 

liste&&liste.rep_d!='' ? display input : display empty tag

? => if condition
: => else condition

*/
  return (
    <div >
    
      
      

     <form onSubmit={handleSubmit}>
<br/>
     <h1><i><b><u>Partie QCM :</u></b></i></h1>
      <br/>
     <div>

      {listeQuestion.map(liste => (
          <><label><b><i>*{liste.question}</i></b></label>
           <br/>
           <br/>
              <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(event)=> handleAnswerChange(event,liste,liste.rep_a)}
              />
        {/*   <Checkbox*/}
        {/* //checked={(event)=> compaireAnswers(event,liste,liste.rep_a)}*/}
        {/*  */}
        {/* onChange={(event)=> handleAnswerChange(event,liste,liste.rep_a)}*/}
        {/*/>*/}
       <label htmlFor="q1-1">{liste.rep_a }</label>
       <br />
       
       {liste&&liste.rep_b!=null?
           <input
               type="checkbox"
               checked={isChecked}
        onChange={(event)=> handleAnswerChange(event,liste,liste.rep_b)}
        />
      :<></>}
       
      
       <label htmlFor="q1-1">{liste.rep_b}</label>
       <br />
       {liste&&liste.rep_c!=''?
           <input
               type="checkbox"
               checked={isChecked}
       onChange={(event)=> handleAnswerChange(event,liste,liste.rep_c)}
        />
        :<></>}
       <label htmlFor="q1-1">{liste.rep_c}</label>
       <br />
       {liste&&liste.rep_d!=''?
           <input
               type="checkbox"
               checked={isChecked}
        onChange={(event)=> handleAnswerChange(event,liste,liste.rep_d)}
        />
      :<></>}
       <label htmlFor="q1-1">{liste.rep_d}</label>
      
       <br />
       {liste&&liste.rep_e!=''?
           <input
               type="checkbox"
               checked={isChecked}
       onChange={(event)=> handleAnswerChange(event,liste,liste.rep_e)}
        />
        :<></>}
       <label htmlFor="q1-1">{liste.rep_e}</label>
       <br />
       {liste&&liste.rep_f!=''?
           <input
               type="checkbox"
               checked={isChecked}
       onChange={(event)=> handleAnswerChange(event,liste,liste.rep_f)}
        />
        :<></>}
       <label htmlFor="q1-1">{liste.rep_f}</label>
<br/>
           </> 
        ))}
      </div>
      
       
   
                  {<button type='submit' onClick={handleClickButton} 
                  style={{width:'150px',  backgroundColor: "#4CAF50",color: "white", padding: "15px 32px",
                   display: "inline-block", margin: "4px 600px",cursor: "pointer"}} > 
                   
                   <h3>Terminer 1/2</h3></button>}

               
        </form>      
   </div>
   
  );
}

export default IberiaQuestionnaire ;
