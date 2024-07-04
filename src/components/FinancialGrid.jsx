import React from 'react'

const FinancialGrid = ({data}) => {
  return (
    <div style={{height:"164px", width:"192px", display:"flex",flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
    }}>
      {data.image}
      <p style={{fontSize:"15px", textTransform:"uppercase", lineHeight:"1.3",textAlign:"center", width:"150px", margin:"9px 0 5px 0", fontWeight:"bold", fontFamily: 'inherit'}}>{data.id}</p>
      <p style={{fontWeight:"bold"}}>{data.item}</p>  
    </div>
  )
}

export default FinancialGrid;