import React, {Fragment} from 'react'
const Accueil =()=>{
    const livres=JSON.parse(localStorage.getItem('datas'))
    let test=false;
    let testV=false
    if(livres){
        test=true
    }
    if(test && livres.length>0){
        testV=true
    }
    return (
        <Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">La Librairie</h1>
                    <p className="lead">Tout les livres que vous voulez a portez de click</p>
                </div>
            </div>
            <div className="row">
                <div>
                <div className="row">
                {testV ? livres.map((livres,index) =>{
                    return(
                        <div className="col-md-6">
                            <div className="card mb-3">
                                <img className="card-img-top"src={process.env.PUBLIC_URL + '/image/'+livres.image} width="80px" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">livres N° 00{livres.id}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Marque: {livres.titre}</li>
                                        <li className="list-group-item">Modele: {livres.auteur}</li>
                                        <li className="list-group-item">résumer: {livres.resumer}</li>
                                        <li className="list-group-item">Genre: {livres.genre}</li>
                                        <li className="list-group-item">Pays: {livres.pays}</li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    );
                })
                : 'Pas de livres disponibles.'
            }
            </div>
        </div>
              
                
    </div>
            
            
        </Fragment>
         
     );
}

export default Accueil;