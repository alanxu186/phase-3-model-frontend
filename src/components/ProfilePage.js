import "../stylesheets/ProfilePage.css"
import ProfileTemplate from "./ProfileTemplate"
// import useModel from "../CustomHooks/useModels"
import { useParams } from "react-router-dom"


function ProfilePage({models}) {

    // const [model, setModel] = useModel()
    
    let {id} = useParams()
    // console.log(id)
    
    const foundModels = models.find((individualModel) => (individualModel.id) === parseInt(id))
    // <ProfileTemplate key={individualModel.id} individualModel={individualModel} />
    // console.log(foundModels)

    return (
        <div>
            <ProfileTemplate individualModel={foundModels}/>
        </div>
    )
}

export default ProfilePage