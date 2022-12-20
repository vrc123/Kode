import styles from "./AddInstrumentForm.module.css";
import InstrumentFormValidation from "./InstrumentFormValidation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectTag from "../atoms/SelectTag";
import LabelTag from "../atoms/LabelTag";
import Chips from "../form-components/Chips";
import ButtonTag from "../atoms/ButtonTag";
import DisabledButton from "../form-components/DisabledButton";
import Validation from "../form-components/Validation";
import Error from "../form-components/Error";

export default function AddInstrumentForm() {

    const [instruments, setInstruments] = useState(["Violone", "Violin", "Viola", "Viol", "Vihuela", "Trumpet", "Theorbo", "Slide trumpet", "Serpent", "Sackbut", "Natural trumpet", "Natural horn"]);
    const [selectedInstrument, setSelectedInstrument] = useState("");
    const [skillLevel, setSkillLevel] = useState(["1 - Beginner", "2 - Intermediate", "3 - Advanced", "4 - Expert"]);
    const [selectedSkillLevel, setSelectedSkillLevel] = useState("");
    const [genres, setGenres] = useState(["Baroque", "Folk music", "Chamber music", "Romantic", "Late modern", "Late Romantic", "Symphonic"]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formValidation, setFormValidation] = useState(false);
    const [formValidations, setFormValidations] = useState([]);
    const [formError, setFormError] = useState(false);
    const [error, setError] = useState(null);

    const profileId = localStorage.getItem("profileId");

    const navigate = useNavigate();
    
    function instrumentNameProp(e) {
        setSelectedInstrument(e.target.value);
    }

    function skillLevelProp(e) {
        setSelectedSkillLevel(e.target.value)
    }

    function selectGenre(e) {

        let selectedGenre = e.target.value;

        if(!selectedGenre == "") {

            if (selectedGenres.indexOf(selectedGenre) == -1) {
                setSelectedGenres((selectedGenres) => [...selectedGenres, selectedGenre]);
            }
        }
    }

    function addInstrument(e) {
        e.preventDefault();

        setIsLoading(true);

        const instrument = { 
            instrumentName: selectedInstrument,
            skillLevel: selectedSkillLevel,
            genre: selectedGenres,
        }

        const validation = InstrumentFormValidation(instrument);

        if (validation.length === 0) {

            fetch("http://127.0.0.1:3000/profiles/" + profileId + "/instrument", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(instrument)
            })
            .then((res) => {
                if (!res.status === 201) {
                    throw new Error("Could not fetch the data!")
                }
                return res.json();
            })
            .then(() => {
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
        <form className={styles.addInstrumentForm} onSubmit={addInstrument}>
            <SelectTag selectPlaceholder="Select instrument" selectOptions={instruments} selectFunction={instrumentNameProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="What is your skill level?" />
            <SelectTag selectPlaceholder="Select your skill level" selectOptions={skillLevel} selectFunction={skillLevelProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
            <SelectTag selectPlaceholder="Genres" selectOptions={genres} selectFunction={selectGenre} />
            <Chips selected={selectedGenres} setSelectedGenres={setSelectedGenres} />
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Add instrument" />}
            {isLoading && <DisabledButton disabledButtonText="Adding instrument..." />}
            <Validation formValidation={formValidation} setFormValidation={setFormValidation} formValidations={formValidations} />
            <Error formError={formError} setFormError={setFormError} error={error} />
        </form>
    );
}