import styles from "./EditEnsembleForm.module.css";
import EnsembleFormValidation from "./EnsembleFormValidation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import InputTagCheckboxChecked from "../form-components/InputTagCheckboxChecked";
import PTag from "../atoms/PTag";
import InputTagText from "../atoms/InputTagText";
import LabelTag from "../atoms/LabelTag";
import SelectTag from "../atoms/SelectTag";
import TextareaTag from "../atoms/TextareaTag";
import Chips from "../form-components/Chips";
import TerritoryInputs from "../form-components/TerritoryInputs";
import ButtonTag from "../atoms/ButtonTag";
import DisabledButton from "../form-components/DisabledButton";
import Validation from "../form-components/Validation";
import Error from "../form-components/Error";

export default function EditEnsembleForm({id, ensemble}) {

    const [name, setName] = useState(ensemble.name);
    const [description, setDescription] = useState(ensemble.description);
    const [website, setWebsite] = useState(ensemble.website);
    const [zipCode, setZipCode] = useState(ensemble.zipCode);
    const [city, setCity] = useState(ensemble.city);
    const [continuously, setContinuously] = useState(ensemble.continuously);
    const [projectBased, setProjectBased] = useState(ensemble.projectBased);
    const [activeMusicians, setActiveMusicians] = useState(["1 - 4 musicians", "5 - 9 musicians", "10 - 24 musicians", "25 - 49 musicians", "More than 50 musicians"]);
    const [selectedActiveMusicians, setSelectedActiveMusicians] = useState(ensemble.activeMusicians);
    const [frequency, setFrequency] = useState(["Several times a week", "1 time per week", "1 time every two weeks", "1 time per month", "1 time per month", "1 time every two months or"]);
    const [practiceFrequency, setPracticeFrequency] = useState(ensemble.practiceFrequency);
    const [genres, setGenres] = useState(["Baroque", "Folk music", "Chamber music", "Romantic", "Late modern", "Late Romantic", "Symphonic"]);
    const [selectedGenres, setSelectedGenres] = useState(ensemble.genre);
    const [isLoading, setIsLoading] = useState(false);
    const [formValidation, setFormValidation] = useState(false);
    const [formValidations, setFormValidations] = useState([]);
    const [formError, setFormError] = useState(false);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();
    
    function nameProp(e) {
        setName(e.target.value);
    }

    function descriptionProp(e) {
        setDescription(e.target.value);
    }

    function websiteProp(e) {
        setWebsite(e.target.value);
    }

    function zipCodeProp(e) {
        setZipCode(e.target.value);
    }

    function cityProp(e) {
        setCity(e.target.value);
    }

    function activeMusiciansProp(e) {
        setSelectedActiveMusicians(e.target.value);
    }

    function practiceFrequencyProp(e) {
        setPracticeFrequency(e.target.value);
    }

    function continuouslyProp(e) {
        setContinuously(e.target.checked);
    }

    function projectBasedProp(e) {
        setProjectBased(e.target.checked);
    }

    function selectGenre(e) {
        let selectedGenre = e.target.value;

        if(!selectedGenre == "") {
            if (selectedGenres.indexOf(selectedGenre) == -1) {
                setSelectedGenres((selectedGenres) => [...selectedGenres, selectedGenre]);
            }
        }
    }

    function editEnsemble(e) {
        e.preventDefault();

        setIsLoading(true);

        const ensemble = { 
            name,
            description,
            website,
            zipCode,
            city,
            activeMusicians: selectedActiveMusicians,
            practiceFrequency: practiceFrequency,
            continuously,
            projectBased,
            genre: selectedGenres,
        }

        const validation = EnsembleFormValidation(ensemble);

        if(validation.length == 0) {
            
            fetch("http://127.0.0.1:3000/ensembles/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ensemble)
                })
                .then((res) => {
                    if (!res.status === 200) {
                        throw new Error("Could not fetch the data!")
                    }
                    return res.json();
                }).then(() => {
                    setIsLoading(false);
                    navigate("/profile");
                })
                .catch((error) => {
                    setFormError(true)
                    setError(error.message);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
            setFormValidation(true);
            setFormValidations(validation);
        }
    }

    return (
        <form className={styles.editEnsembleForm} onSubmit={editEnsemble} >
            <InputTagText inputPlaceholder="Ensemble name" inputValue={name} inputFunction={nameProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            <TextareaTag textareaPlaceholder="Write a short description of your ensemble or orchestra..." textareaValue={description} textareaFunction={descriptionProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Website" />
            <InputTagText inputPlaceholder="Insert link" inputValue={website} inputFunction={websiteProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Territory" />
            <TerritoryInputs zipCode={zipCode} zipCodeProp={zipCodeProp} city={city} cityProp={cityProp}/>
            <LabelTag labelType="normal" labelColor="blue" labelText="Number of active musicians" />
            <SelectTag selectedOption={selectedActiveMusicians} selectPlaceholder="Select number" selectOptions={activeMusicians} selectFunction={activeMusiciansProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Practice frequency" />
            <SelectTag selectedOption={practiceFrequency} selectPlaceholder="Select frequency" selectOptions={frequency} selectFunction={practiceFrequencyProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="The ensemble plays…" />
            <div className={styles.checkbox}>
                {!continuously && <InputTagCheckbox inputValue={continuously} inputFunction={continuouslyProp} />}
                {continuously && <InputTagCheckboxChecked  inputValue={continuously} inputFunction={continuouslyProp} />}
                <PTag pType="small" pColor="grey" pText="Continuously" />
            </div>
            <div className={styles.checkbox}>
                {!projectBased && <InputTagCheckbox inputValue={projectBased} inputFunction={projectBasedProp} />}
                {projectBased && <InputTagCheckboxChecked  inputValue={projectBased} inputFunction={projectBasedProp} />}
                <PTag pType="small" pColor="grey" pText="Project-based" />
            </div>
            <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
            <SelectTag selectPlaceholder="Genres" selectOptions={genres} selectFunction={selectGenre} />
            <Chips selected={selectedGenres} setSelectedGenres={setSelectedGenres} />
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />}
            {isLoading && <DisabledButton disabledButtonText="Saving changes..." />}
            <Validation formValidation={formValidation} setFormValidation={setFormValidation} formValidations={formValidations} />
            <Error formError={formError} setFormError={setFormError} error={error} />
        </form>
    );
}