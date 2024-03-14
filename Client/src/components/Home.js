import React from "react";
import { HashLink } from "react-router-hash-link";


const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home">
                <div className="container">
                    <div className="home-information">
                        <h2 className="home-title margin-bottom">Health And Safety</h2>
                        <h4 className="home-info">Gas Is Dangerous!</h4>
                        <p className="home-desc">
                            Gas has a nasty habit of exploding: It’s responsible for hundreds of deaths and billions in damage in the past decade alone. But it also causes slow-motion health harms, making people who live near wellsites and in homes with gas appliances sick from toxic fumes.
                        </p>
                        {/* <HashLink to="#home">
                        <button className="vvd">
                            <span>Let’s Connect</span>
                        </button>
                    </HashLink> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;