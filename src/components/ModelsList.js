import "../stylesheets/ModelsList.css"
import React, { useState, useEffect } from 'react'
import ModelCard from './ModelCard'
// import { useNavigate } from 'react-router-dom'
// import useModel from "../CustomHooks/useModels"
// import PassButton from './PassButton'


function ModelsList({searchModels, models, handleModelButton, isLoading, setIsLoading }) {

    const modelProfiles = models.map((model) => {
        return (
            <ModelCard
                key={model.id}
                img={model.img}
                first_name={model.first_name}
                last_name={model.last_name}
                handleModelButton={handleModelButton}
                work_status={model.work_status}
                model={model}
                agency={model.agency}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        )
    })

    return (
        <div className="grid-body">
        <div>
        </div>
            {/* <h1>All models:</h1> */}
            {modelProfiles}
        </div>
    )
}

export default ModelsList;