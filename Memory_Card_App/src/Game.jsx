import { useState,useEffect } from "react";
import { Header } from "./Header";
export function Game({Score,setScore,HighScore,setHigh})
{
    let [details,setdetails]=useState([]);
    let [test,setTest]=useState([]);
    if(test.length==12)
    {
        setTest([]);
    }
    useEffect(() =>
    {
        let data=async () =>{
            try{
            let response=await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=20");
            let res=await response.json();
            let newDetails=res.data.map((character) => ({
                id:(crypto.randomUUID()),
                img:(character.card_images[0].image_url_cropped),
                name:(character.name),
            }) 
            )
            setdetails(newDetails);
            }
            catch(err)
            {
                console.log(err);
            }
           
        }
        data();
    },[])
    function Items()
{
    if(details.length<12)
    {
        return <p>Loading...</p>
    }
    let Itemset=new Set();
    while(Itemset.size<12)
    {
        let num=Math.floor(Math.random()*12);
        if(!Itemset.has(num))
        {
            Itemset.add(num);
        }
    }
    let all=Array.from(Itemset);
    let items=[];
    all.map(item => {
         items.push(
            <div key={details[item].id}  onClick={() => {
                if(test.indexOf(details[item].id)===-1)
                {
                    setScore(Score+1);
                    setTest([...test,details[item].id]);
                }
                else{
                    if(Score>HighScore)
                    {
                        setHigh(Score);
                    }
                    setScore(0);
                    setTest([]);
                }
            }} className="character">
            <img src={details[item].img}></img>
            <p>{details[item].name}</p>
            </div>
        )
    })
    return items;
}

return <>
<Header Score={Score} HighScore={HighScore}/>
<main className="cards">
    <Items />
</main>
</>
}