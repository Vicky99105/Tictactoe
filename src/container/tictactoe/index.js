import React, { useState } from "react";
import Button from "../../components/button"

const Tictactoe=(props)=>{
    const[buttonlabels,setButtonlabels]=useState(["?","?","?","?","?","?","?","?","?"]);
    const[activeplayer,setActiveplayer]=useState("0");
    const handleclick=(val,btnidx)=>{
        const newbuttonlabel=buttonlabels.map((label,i)=>{
            if(i===btnidx){
                return activeplayer;
            }
            else{
                return label;
            }
        })

        setButtonlabels(newbuttonlabel);
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
                <p>Game</p>
                {
                    buttonlabels.map((label,i)=>{
                        return(<span key={i}>
                            {
                                i%3===0?<br/>:null  
                            }
                            <Button onClick={handleclick}   style={{padding:10,margin:5}} label={label} index={i}/>
                        </span>)})
                    

                }
                
                </div>
            <div style={styles.scorecardcontainer}>ScoreCard</div>
        </div>
    );
};


const styles={
    root:{display:"flex",marginTop:30},
    gamecontainer:{flex:1},
    scorecardcontainer:{flex:1},
};
export default Tictactoe;