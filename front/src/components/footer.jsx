import React from "react";
import { Link } from "react-router-dom"


const FooterPage = () => (
    <div className="main-footer" >
        <div className="container">
            <div className="row">
                {/*Column1*/}
                <div className="col">
                    <Link to="/products">
                        <h4>BACK TO THE GAME INC</h4>
                    </Link>
                    <ul className="list-unstyled">
                        <li>+54-911-2233-4456</li>
                        <li>Caba,Buenos Aires - Argentina</li>
                        <li>Juan B. Justo - 3456</li>
                    </ul>
                </div>
                {/*Column2*/}
                <div className="col">
                    <Link to="/products">
                        <h4>COMPRAS ONLINE</h4>
                    </Link>
                    <ul className="list-unstyled">
                        <li>Dank meme</li>
                        <li>old stuff</li>
                        <li>new stuff</li>
                    </ul>
                </div>
                {/*Column3*/}
                <div className="col">
                    <h4>TERMINOS Y CONDICIONES</h4>
                    <ul className="list-unstyled">
                        <li>Dank meme</li>
                        <li>old stuff</li>
                        <li>new stuff</li>
                    </ul>
                </div>

            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} THICC MEMES INC | All rigth reserved | Terms Of Service | Privacy
                </p>
            </div>
        </div>
    </div>
);


export default FooterPage;
