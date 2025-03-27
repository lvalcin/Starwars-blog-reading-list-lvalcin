import { Link } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Favorites = () => {

    const {store, dispatch} =useGlobalReducer()

    return (
    <div>
        <Link to="/demo">
        <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
        </button>
        <ul class="dropdown-menu">
            {store.favorites.map((item)=>{
                return(
                        <li><a class="dropdown-item" href="#">{item}</a></li>
                )
            })
        }
        </ul>
        </div>
		</Link>
    </div>
    );
};