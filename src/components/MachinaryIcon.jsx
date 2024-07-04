import React from 'react'

const MachinaryIcon = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", margin:"10px", padding:"0 30px"}}>
      
          <div style={{margin:"20px", width:"390px",height:"389px", padding:"64px 0" }}>
            <h3 style={{ textAlign: 'center', color:"#BFBFBF", fontFamily: 'gilroyextrabold', fontSize:"55px", fontWeight:"bold", letterSpacing: 0.03 }}>MACHINERY STRENGTH.</h3><br></br>
          </div>

          <div style={{padding:"40px 25px", margin:"20px 50px", width:"900px", display:"flex", flexDirection:"row", flexWrap:"wrap", alignItems:"center"}}>
              {machinaryiIcons.map((item)=>{
                return (
                  <div key={item.id} style={{ height:"268px", width:"186px", margin:"10px",
                    display:"flex",alignItems:"center",flexDirection:"column",
                    padding:"10px 0 0 0"
                  }}>
                    <img style={{width:"172px", height:"137px", cursor:"pointer",}} src={item.image}></img>
                    <div style={{width:"172px", height:"137px", display:"flex", flexDirection:"row",}}>
                      <span style={{fontSize:"26px", color: "#EA762D", marginRight:"12px",width:"6px",textAlign:"start", paddingTop:"8px" }}>{item.Item}</span>
                      <p style={{width:"190px", fontSize:"16px", textTransform:"uppercase", textAlign:"start", gap:"0.5", lineHeight:"1.3", fontFamily:"Gilroy", padding:"5px 10px", marginLeft:"15px"}}>{item.id}</p>
                    </div>
                    
                  </div>
                )
              })}

          </div>
          
        </div>
    
  )
}

export default MachinaryIcon;

const machinaryiIcons = [
  {
    id:'Concrete batch mix plant',
    image:'	https://patelinfra.com/images/financila_info/Concrete_Batch_Mix_Plants.jpg',
    Item:23
  },
  {
    id:'Hot mix plants batch type',
    image:'	https://patelinfra.com/images/financila_info/Hot_Mix_Plants_Batch_Type.jpg',
    Item:9
  },
  {
    id:'Crusher plants screening plants sand plants',
    image:'https://patelinfra.com/images/financila_info/Crusher_Plants.jpg',
    Item:18
  },
  {
    id:'Asphalt pavers',
    image:'https://patelinfra.com/images/financila_info/Asphalt_Pavers.jpg',
    Item:21
  },
  {
    id:'Automatic slip form concrete pavers',
    image:'	https://patelinfra.com/images/financila_info/Automatic_Slip_Form_Concrete_Pavers.jpg',
    Item:3
  },
  {
    id:'Milling machines',
    image:'https://patelinfra.com/images/financila_info/Milling_Machines.jpg',
    Item:2
  },
  {
    id:'Rollers And compactors',
    image:'https://patelinfra.com/images/financila_info/Rollers_Compactors.jpg',
    Item:82
  },
  {
    id:'Loders and excavators',
    image:'https://patelinfra.com/images/financila_info/Loaders_Excavators.jpg',
    Item:102
  },

]