import { Link } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Favorites = () => {

    const {store, dispatch} =useGlobalReducer()

    return (
    <div>
        <Link to="/demo">
        <div className="dropdown">
        <button
            className="btn btn-primary dropdown-toggle" 
            type="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
        >
            Favorites
        </button>
        <ul className="dropdown-menu">
            {store.favorites.map((item)=>{
                return(
                        <li>
                            <a className="dropdown-item" href="#">
                                {item}
                            </a>
                        </li>
                )
            })
        }
        </ul>
        </div>
		</Link>
    </div>
    );
};