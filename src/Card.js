import './Card.css'
import {Link} from "react-router-dom";
function card(){
    return(

            <div className="card text-center d-inline-flex   " styles="width: 800rem;">
            <div className="card-body d-flex p-2 flex-column mb-3 justify-content-around">
                <h5 className="card-title">Nákup</h5>
                <Link to="/second-page" className="btn btn-primary">Zobrazit seznam</Link>
                <button type="button" className="btn btn-danger rounded-pill  mx-auto">Odstranit</button>
            </div>
        </div>
    );
}
export default card;