import "../stylesheets/ModelsList.css"
import React, { useState, useEffect } from 'react'
import ModelCard from './ModelCard'
import SearchBar from "./SearchBar";
// import { useNavigate } from 'react-router-dom'
// import useModel from "../CustomHooks/useModels"
// import PassButton from './PassButton'


function ModelsList({ search, setSearch, filterSearch, models, handleModelButton, isLoading, setIsLoading }) {

    const modelProfiles = filterSearch.map((model) => {
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
        <div >
                <SearchBar search={search} setSearch={setSearch} />
            {/* <h1>All models:</h1> */}
            <div className="grid-body">

                {modelProfiles}
            </div>
        </div>
    )
}

export default ModelsList;