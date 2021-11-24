import GT1 from '../GT1.png';
import GT3 from '../GT3.png';
import GT4 from '../GT4.png';
import GTE from '../GTE.png';

const ClassSelector = ({selectedClass,setSelectedClass}) => {
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center body mt-3">
                <div className="container-fluid">
                    <div className="row imageContainer">
                        <div className={`classSelector ${selectedClass==='GT1'?'active-class':''}`}>
                            <img src={GT1} alt="GT1" onClick={()=>setSelectedClass('GT1')} width="181" height="100"/>
                        </div>
                        <div className={`classSelector ${selectedClass==='GT3'?'active-class':''}`}>
                            <img src={GT3} alt="GT3" onClick={()=>setSelectedClass('GT3')} width="100" height="100"/>
                        </div>
                        <div className={`classSelector ${selectedClass==='GT4'?'active-class':''}`}>
                            <img src={GT4} alt="GT4" onClick={()=>setSelectedClass('GT4')} width="100" height="100"/>
                        </div>
                        <div className={`classSelector ${selectedClass==='GTE'?'active-class':''}`}>
                            <img src={GTE} alt="GTE" onClick={()=>setSelectedClass('GTE')} width="100" height="100"/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </div>    
    )
}
export default ClassSelector;