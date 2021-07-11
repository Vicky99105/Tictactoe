import React, { useState } from "react";
import Button from "../../components/button"

const Tictactoe=(props)=>{
    const[buttonlabels,setButtonlabels]=useState(["?","?","?","?","?","?","?","?","?"]);
    const[activeplayer,setActiveplayer]=useState("X");
    const[Score,setScore]=useState({X:0,O:0,DRAW:0})

    const handleclick=(val,btnidx)=>{
        const newbuttonlabel=buttonlabels.map((label,i)=>{
            if(i===btnidx && label==="?"){
                return activeplayer;
            }
            else{
                return label;
            }
        });
        setButtonlabels(newbuttonlabel);
      
        console.log(newbuttonlabel);

        if((newbuttonlabel[0]==="X" && newbuttonlabel[1]==="X" && newbuttonlabel[2]==="X") ||
        (newbuttonlabel[3]==="X" && newbuttonlabel[4]==="X" && newbuttonlabel[5]==="X") ||
        (newbuttonlabel[6]==="X" && newbuttonlabel[7]==="X" && newbuttonlabel[8]==="X") ||
        (newbuttonlabel[0]==="X" && newbuttonlabel[3]==="X" && newbuttonlabel[6]==="X")||
        (newbuttonlabel[1]==="X" && newbuttonlabel[4]==="X" && newbuttonlabel[7]==="X") ||
        (newbuttonlabel[2]==="X" && newbuttonlabel[5]==="X" && newbuttonlabel[8]==="X")||
        (newbuttonlabel[0]==="X" && newbuttonlabel[4]==="X" && newbuttonlabel[8]==="X") ||
        (newbuttonlabel[2]==="X" && newbuttonlabel[4]==="X" && newbuttonlabel[6]==="X")
        ){
            let xwins=Score.X;
            setScore({...Score,X:xwins+1});    
            alert("Xwon!")
            restartgame();

        }
        else if((newbuttonlabel[0]==="0" && newbuttonlabel[1]==="0" && newbuttonlabel[2]==="0") ||
        (newbuttonlabel[3]==="0" && newbuttonlabel[4]==="0" && newbuttonlabel[5]==="0") ||
        (newbuttonlabel[6]==="0" && newbuttonlabel[7]==="0" && newbuttonlabel[8]==="0") ||
        (newbuttonlabel[0]==="0" && newbuttonlabel[3]==="0" && newbuttonlabel[6]==="0") ||
        (newbuttonlabel[1]==="0" && newbuttonlabel[4]==="0" && newbuttonlabel[7]==="0") ||
        (newbuttonlabel[2]==="0" && newbuttonlabel[5]==="0" && newbuttonlabel[8]==="0")||
        (newbuttonlabel[0]==="0" && newbuttonlabel[4]==="0" && newbuttonlabel[8]==="0" )||
        (newbuttonlabel[2]==="0" && newbuttonlabel[4]==="0" && newbuttonlabel[6]==="0")
        ){
            let owins=Score.O;
            setScore({...Score,O:owins+1});        
            alert("Owon!")
            restartgame();
        }
        else{
            const mark=newbuttonlabel.filter((val)=>{
                return val==="?";
            });
            if(mark.length===0){
                let draws=Score.DRAW;
                setScore({...Score,DRAW:draws+1});
                alert("Drawn!!")
                restartgame();
            }

            
        }

        changeplayer();
       

    };

    const restartgame=()=>{
        setButtonlabels(["?","?","?","?","?","?","?","?","?"]);
        setActiveplayer("X");   
    }

    const changeplayer=()=>{
        
        if(activeplayer==="X"){
            setActiveplayer("0");
        }
        else{
            setActiveplayer("X");
        }
    };

    return(
        <div style={styles.root}>
            <div style={styles.gamecontainer}>
                <h4>Game</h4>
                {
                    buttonlabels.map((label,i)=>{
                        return(<span key={i}>
                            {
                                i%3===0?<br/>:null  
                            }
                            <Button onClick={handleclick}   style={{padding:10,margin:5}} label={label} index={i}/>
                        </span>)})
                    

                }
               
               <div> <Button label="RESTART" onClick={restartgame} style={{padding:5,backgroundColor:"black",color:"White"}}/></div>
                </div>
                
            <div style={styles.scorecardcontainer}>
                <h4>ScoreCard</h4>
                <div style={styles.subscore}>
                    <div style={styles.flex1}>
                        <p>X</p>
                        <p>{Score.X}</p>
                        </div>
                    <div style={styles.flex1}>
                        <p>O</p>
                        <p>{Score.O}</p></div>
                    <div style={styles.flex1}>
                        <p>DRAW</p>
                        <p>{Score.DRAW}</p></div>
                </div>
                </div>
        </div>
    );
};


const styles={
    root:{display:"flex",marginTop:30},
    gamecontainer:{flex:1,marginTop:50},
    scorecardcontainer:{flex:1,marginTop:50},
    subscore:{display:"flex"},
    flex1:{flex:1},
};
export default Tictactoe;