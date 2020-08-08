import React, { Component, Fragment } from 'react';
class Ajout extends Component {

    initLivres = {id:1, titre:"", auteur:"", resumer:"", genre:"", genre:"",resumer:""};
    state = this.initLivres;
    modifier = (e) =>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    envoyer = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.ajouter(this.state);
    }
    render(){
        const {titre, auteur, resumer, annees, genre, pays} = this.state;
        return(
            <Fragment>
            <div className="text-right">
            
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal">
            <i className="fa fa-plus"></i>
            Ajouter
            </button>
            </div>
                                
            <div className="modal" id="myModal">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Ajout d'une voiture</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
            <form>
                <div className="form-group ">
                     <label htmlFor="titre">titre</label>
                     <input type="text" className="form-control" id="titre" name="titre" value={titre} placeholder="Entrez le titre" onChange={this.modifier}/>
                </div>
                
                <div className="form-group ">
                     <label htmlFor="auteur">auteur</label>
                     <input type="text" className="form-control" id="auteur" name="auteur" value={auteur} placeholder="Entrez l'auteur'" onChange={this.modifier}/>
                </div>
                
                <div className="form-group ">
                     <textarea id="resumer" name="resumer" rows="4" cols="50"></textarea> 
                     <label htmlFor="resumer" >
                        resumer
                    </label>
                        
                    
                     <input type="text" className="form-control" id="resumer" name="resumer" value={resumer} placeholder="Entrez le resumer" onChange={this.modifier}/>
                </div>
               
                <div className="form-group ">
                     <label htmlFor="genre">genre</label>
                     <input type="text" className="form-control" id="genre" name="genre" value={genre} placeholder="Selectionner le genre" onChange={this.modifier}/>
                </div>
                <div className="form-group ">
                     <label htmlFor="annees">annees</label>
                     <input type="text" className="form-control" id="annees" name="annees" value={annees} placeholder="Selectionner l'annees" onChange={this.modifier}/>
                </div>
                <div className="form-group ">
                     <label htmlFor="pays">pays</label>
                     <input type="text" className="form-control" id="pays" name="pays" value={pays} placeholder="Selectionner le pays" onChange={this.modifier}/>
                </div>
               
               <button type="button" className="btn btn-primary btn-block" 
               onClick={this.envoyer} data-dismiss="modal">Soumettre</button>
            </form>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-primary " data-dismiss="modal"></button> *
                        </div>

                        </div>
                    </div>
                    </div>
            </Fragment>
        );
    }
}

export default Ajout;