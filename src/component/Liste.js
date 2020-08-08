import React from 'react'
const Liste=(props)=>{
        return(
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>id</th><th>Titre</th><th>Auteur</th><th>resumer</th><th>Annees</th><th>Genre</th><th>Pays</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.livres.map((livres, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{livres.id}</td>
                                    <td>{livres.titre}</td>
                                    <td>{livres.auteur}</td>
                                    <td>{livres.resumer}</td>
                                    <td>{livres.annee}</td>
                                    <td>{livres.genre}</td>
                                    <td>{livres.pays}</td>
                                    <td>
                                        <img src={process.env.PUBLIC_URL + '/image/'+livres.image} width="80" alt={livres.image}/>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>{if(window.confirm('Etes vous sûr de  supprimer'))
                                                {props.deleteLivres(index)
                                              };
                                        }}>
                                    <i className="fa fa-trash"> Supprimer</i>
                                    
                                </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        )
}

export default Liste;