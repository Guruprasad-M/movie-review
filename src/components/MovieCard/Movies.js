

import {Link} from "react-router-dom"

const Movies = (props) => {
    const {data}=props;
    console.log(data.imdbID)
    
    return (
        <div className='card-item'>
           
       
            
         
                        <p>{data}</p>
                    </div>
       
    );
};

export default Movies;
