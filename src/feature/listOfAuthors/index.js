import './style.scss'
import AuthorCard from "../../components/authorCard";
import Peoples from "../../page/aboutUs/people_random_socials.json"

export default function ListOfAuthors() {
    return (
        <div className={'container'}>
            <div className={'listOfAuthors'}>
                <div className={'listOfAuthors__headline'}>
                    List of Authors
                </div>
                <div className={'listOfAuthors__cards'}>
                    {Peoples.map((card) => {
                        return (
                            <AuthorCard card={card}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}