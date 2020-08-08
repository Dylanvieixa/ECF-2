import React, { Component, Fragment } from 'react';
import Liste from './Liste'
import Ajout from './Ajout'
class Admin extends Component{
    state={
        datas:[
            {id:1,titre:'Le monde s effondre',resumer:'Le monde s\'effondre est un témoignage sur le mode de vie des africains avant et pendant la colonisation de l\'Afrique noir par les européens. Jadis, enraciné dans la culture, le Ibo connaîtra un bouleversement socio- culturel dés les premiers jours de l\'arrivé des colons.', auteur:'Chinua Achebe', annee:1958, genre:'roman', pays:'Nigeria',image:'le monde s effondre.jpg' },

            {id:2,titre:'Contes',resumer:'Petite sirène, soldat de plomb, faux col, empereur, canard, bergère... les héros de ces contes sont bien différents, mais presque tous doivent affronter de terribles épreuves avant de connaître un sort meilleur. Si Andersen récompense les qualités de cœur, il ne manque pas d\'épingler avec humour le mensonge, le ridicule ou la prétention. Ni fées ni carrosses dans ces récits - le merveilleux s\'installe dans le quotidien et le transforme pour notre plus grand plaisir.', auteur:'Hans Christian Adersan', annee:1835, genre:'recueil de contes', pays:'danemark',image:'conste.jpg' },

            {id:3,titre:'Orgueil et Prejuges',resumer:'Mr et Mrs Bennett ont cinq filles à marier. À l’arrivée d’un nouveau et riche voisin, la famille espère que l’une d’entre elles pourra lui plaire… Au-delà des aventures sentimentales des cinq filles Bennett, Jane Austen dépeint les rigidités de la société anglaise au tournant du XIXe siècle. Le comportement et les réflexions d’Elizabeth Bennett, son personnage principal, révèlent les problèmes auxquels sont confrontées les femmes de la gentry campagnarde pour s’assurer sécurité financière et statut social : la solution passe en effet par le mariage', auteur:'Jane Austen', annee:1813, genre:'roman', pays:'Royaume-uni', image:'Orgueil-et-prejuges.jpg' },

            {id:4,titre:'Le Pere Goriot',resumer:'Voici l\'histoire du Père Goriot, qui perd sa femme et s\'éprend pour ses deux filles d\'un amour incomparable. Il leur donne toute sa fortune et fait des efforts incontestés pour elles, pourtant elles mènent toutes deux une vie où leur père est bien effacé', auteur:'Honore de Balzac', annee:1835, genre:'roman', pays:'France',image:'Le-Pere-Goriot.jpg' },

            {id:5,titre:'Voyages au bout de la nuit',resumer:'Bardamu s’engage dans l’armée par hasard et découvre l’horreur de la première guerre mondiale, mais se lie d’amitié avec Robinson, son frère d’arme. Blessé, puis réformé, il fréquente quelques femmes de basse condition (Lola, Musyne) puis quitte la France pour l’Afrique. Là, il constate la brutalité de la vie coloniale. Bardamu contracte une maladie tropicale et est transporté en bateau jusqu’aux Etats-Unis. Il visite New-York, puis Detroit où il est engagé comme ouvrier chez Ford. La découverte de la vie ouvrière ne l’empêche pas de se lier temporairement à Molly, une prostituée. Mais il rentre en France pour y devenir médecin à Drancy, une ville pauvre. Là, il découvre le quotidien misérable, la mort et la cupidité. Lassé des patients, il s’engage dans une troupe de music-hall tandis que Robinson, qui a rencontré une femme (Madelon), devient aveugle. Il revient à Paris pour travailler dans un hôpital psychiatrique. Le docteur Baryton, qui dirige l’établissement, devient fou. Bardamu dirigera l’hôpital en intérim. Robinson sera tué par sa maîtresse, laissant Bardamu seul, amer et définitivement désillusionné.', auteur:'Louis Ferdinand Céline', annee:1932, genre:'roman', pays:'france',image:'louis.jpg'},

            {id:6,titre:'Decameron',resumer:'Boccace a trente-cinq ans en 1348 quand, "juste effet de la colère de Dieu", éclate la grande peste qui flagelle l\'Italie. Composé dans les années qui suivent, le "Livre des dix journées" s\'ouvrira sur ce tableau apocalyptique, à la force grandiose et terrible, qui n\'a rien à envier à la description de la peste d\'Athènes chez Thucydide. C\'est en effet dans ce contexte que sept jeunes filles courtoises et trois jeunes hommes qui ont conservé leur noblesse d\'âme se retirent sur les pentes enchanteresses de Fiesole pour fuir la contagion de Florence, devenue un immense sépulcre, et pendant deux semaines se réunissent à l\'ombre des bosquets et se distraient chaque jour par le récit de dix nouvelles, une pour chacun, tantôt sur un sujet libre, tantôt sur un sujet fixé à l\'avance pour tous, par la reine ou le roi de la journée. Tel est le premier chef-d\'oeuvre de la prose littéraire en langue "vulgaire".', auteur:'Boccace', annee:1349, genre:'reccueil de nouvelle', pays:'italie',image:'docameron.jpg' },

            {id:7,titre:'Fictions',resumer:'Sans doute y a-t-il du dilettantisme dans ces Fictions, jeux de l\'esprit et exercices de style fort ingénieux. Pourtant, le pluriel signale d\'emblée qu\'il s\'agit d\'une réflexion sur la richesse foisonnante de l\'imagination. Au nombre de dix-huit, ces contes fantastiques révèlent, chacun à sa manière, une ambition totalisante qui s\'exprime à travers de nombreux personnages au projet démiurgique ou encore à travers La Bibliothèque de Babel, qui prétend contenir l\'ensemble des livres, existants ou non. La multitude d\'univers parallèles et d\'effets de miroir engendrent un "délire circulaire" vertigineux, une interrogation sur la relativité du temps et de l\'espace. Dans quelle dimension sommes-nous? Qui est ce "je" qui raconte l\'invasion de la cité dans La Loterie de Babylone ? En mettant en vis-à-vis le Quichotte de Ménard et celui de Cervantès, lit-on la même chose ou bien la décision de redire suffit-elle à rendre la redite impossible ? Il n\'est pas certain que l\'on ait envie d\'être relevé du doute permanent qui nous habite au cours de cette promenade dans Le Jardin aux sentiers qui bifurquent. On accepte volontiers d\'être les dupes de ces Artifices, conçus comme le tour le plus impressionnant d\'un prestidigitateur exercé.', auteur:'Jorge Luis Borges', annee:1944, genre:'reccueil de nouvelle', pays:'Argentine',image:'Fictions.jpeg' },

            {id:8,titre:'L etranger',resumer:'Condamné à mort, Meursault. Sur une plage algérienne, il a tué un Arabe. À cause du soleil, dira-t-il, parce qu\'il faisait chaud. On n\'en tirera rien d\'autre. Rien ne le fera plus réagir : ni l\'annonce de sa condamnation, ni la mort de sa mère, ni les paroles du prêtre avant la fin Comme si sur cette plage, il avait soudain eu la révélation de l\'universelle équivalence du tout et du rien. La conscience de n\'être sur la terre qu\'en sursis, d\'une mort qui, quoi qu\'il arrive, arrivera, sans espoir de salut. Et comment être autre chose qu\'indifférent à tout après ça \?Étranger sur la terre, étranger à lui-même, Meursault le bien nommé pose les questions qui deviendront un leitmotiv dans l’œuvre de Camus De La Peste à La Chute, mais aussi dans ses pièces et dans ses essais, celui qui allait devenir Prix Nobel de littérature en 1957 ne cessera de s\'interroger sur le sens de l\'existence. Sa violente en 1960 contribua quelque peu à rendre mythique ce maître à penser de toute une génération', auteur:'Albert Camus', annee:1942, genre:'roman', pays:'France',image:'etranger.jpeg' },
        ]

    }

    componentDidMount=()=>{
        let tabLivres=JSON.parse(localStorage.getItem('datas'))
        if(!tabLivres || tabLivres.length===0){
            let livres1= localStorage.setItem('datas',JSON.stringify(this.state.datas))
            this.setState({datas:livres1},function(){
                console.log(this.statete.datas)
            })
        }else{
            let Livres2=JSON.parse(localStorage.getItem('datas'))
            this.setState({datas:Livres2})
        }
    }
    removeLivres =(index)=>{
        const {datas}=this.state
        this.setState({
            datas:datas.filter((d,i)=>{
                return i!==index
            })
        })
    }
    addLivres = (newLivres) => {
        if(this.state.datas.length !== 0){

            newLivres.id = (this.state.datas[this.state.datas.length - 1].id + 1)
        }
       this.setState({datas: [...this.state.datas, newLivres]},function(){
           localStorage.setItem('datas',JSON.stringify(this.state.datas));
       })
    }


    render(){
        return(
            <Fragment>
                <h1 className="bg-secondary  text-center">Administration</h1>
                <Liste deleteLivres = {this.removeLivres}  livres={this.state.datas} />
                <Ajout ajouter={this.addLivres}/>
            </Fragment>
        )
    }
}

export default Admin;