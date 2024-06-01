import Datas from "../Customhooks/Datas"
import IMAGE from "../assets/Trash.png"

const Body = ({...proxy}) => {

const {datas,datasPush,textSet,Text,deleteData} = Datas()
console.log(datas)
  return (
    <div {...proxy}>


        <div className="Container_Notes">
        <input type="text"
         placeholder="Text......."
         value={Text.text}
          onChange={e => textSet(e.target.value,"text")} 
          />
        <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
        <div onClick={datasPush} className="circle">+</div>
        </div>
       
        </div>


        <div className="Notes">
                {
                  datas.map((elements,index)=>{
                    return(
                      <div key={index} className="items">
                            <dl>
                              <dt>Note</dt>
                              <dd>{elements.text}</dd>
                              <div className="IMG">
                                <img src={IMAGE} alt=""  onClick={()=>deleteData(elements.text)} />
                              </div>
                            </dl>
                          
                        </div>
                    )
                  })
                }
        </div>
      
    </div>
  )
}

export default Body