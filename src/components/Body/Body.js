import "./CustomStyles.css";
import "./BodyStyles.css";
import img from "./img.jpg";
import img1 from "./img1.jpeg";

const Body = () => {
    return (

        <div className="contain" id="home-body-container">
            <div className="">
                <h2 className="mar-left" id="body-home-title">What about Maldives</h2>
                <div className="ui clearing divider"></div>
                <div className="paragraph mar-left mar-right">
                    <div class="ui segment">
                        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem
                            aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                            electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
                        </p>
                        <img class="ui large right floated image" src={img} id="cap" alt="mountain" />
                        <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex
                            duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat,
                            ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                        <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no
                             illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, 
                             wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas 
                             minimum postulant per id.</p>
                             <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no
                             illum aperiri quo,  eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas 
                             minimum postulant per id.</p>
                    </div>
                </div>

                <div className="paragraph mar-left mar-right">
                    <div class="ui segment">
                        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem
                            aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                            electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
                        </p>
                        <br/>
                        <img class="ui large left floated image" src={img1} id="cap" alt="mountain" />
                        <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex
                            duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat,
                            ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                        <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
                    </div>
                </div>

            </div>
            <div className="ui clearing divider"></div>
        </div>
        
    )
}

export default Body