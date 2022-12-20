import styles from "./AddEnsemblePostForm.module.css";
import EnsemblePostFormValidation from "./EnsemblePostFormValidation";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputTagText from "../atoms/InputTagText";
import LabelTag from "../atoms/LabelTag";
import TextareaTag from "../atoms/TextareaTag";
import SelectTag from "../atoms/SelectTag";
import Chips from "../form-components/Chips";
import ButtonTag from "../atoms/ButtonTag";
import DisabledButton from "../form-components/DisabledButton";
import Validation from "../form-components/Validation";
import Error from "../form-components/Error";

export default function AddEnsemblePostForm() {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [instruments, setInstruments] = useState(["Violone", "Violin", "Viola", "Viol", "Vihuela", "Trumpet", "Theorbo", "Slide trumpet", "Serpent", "Sackbut", "Natural trumpet", "Natural horn"]);
    const [selectedInstrument, setSelectedInstrument] = useState("");
    const [minimumskillLevel, setMinimumSkillLevel] = useState(["1 - Beginner", "2 - Intermediate", "3 - Advanced", "4 - Expert"]);
    const [selectedMinimumSkillLevel, setSelectedMinimumSkillLevel] = useState("");
    const [genres, setGenres] = useState(["Baroque", "Folk music", "Chamber music", "Romantic", "Late modern", "Late Romantic", "Symphonic"]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formValidation, setFormValidation] = useState(false);
    const [formValidations, setFormValidations] = useState([]);
    const [formError, setFormError] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    const navigate = useNavigate();
    
    function titleProp(e) {
        setTitle(e.target.value);
    }

    function descriptionProp(e) {
        setDescription(e.target.value);
    }

    function instrumentNameProp(e) {
        setSelectedInstrument(e.target.value);
    }

    function minimumSkillLevelProp(e) {
        setSelectedMinimumSkillLevel(e.target.value);
    }

    function selectGenre(e) {
        let selectedGenre = e.target.value;

        if(!selectedGenre == "") {
            if (selectedGenres.indexOf(selectedGenre) == -1) {
                setSelectedGenres((selectedGenres) => [...selectedGenres, selectedGenre]);
            }
        }
    }

    function addEnsemblePost(e) {
        e.preventDefault();

        setIsLoading(true);

        const post = { 
            title,
            description,
            instrument: selectedInstrument,
            minimumSkillLevel: selectedMinimumSkillLevel,
            genre: selectedGenres,
        }

        const validation = EnsemblePostFormValidation(post);

        if(validation.length === 0) {
            
            fetch("http://127.0.0.1:3000/ensembles/" + id + "/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
                })
                .then((res) => {
                    if (!res.status === 201) {
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
        <form className={styles.addEnsemblePostForm} onSubmit={addEnsemblePost}>
            <InputTagText inputPlaceholder="Title" inputValue={title} inputFunction={titleProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            <TextareaTag textareaPlaceholder="Write a short description of what you are looking for..." textareaValue={description} textareaFunction={descriptionProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Instrument" />
            <SelectTag selectPlaceholder="Select instrument" selectOptions={instruments} selectFunction={instrumentNameProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Minimum skill level" />
            <SelectTag selectPlaceholder="Select minimum skill level" selectOptions={minimumskillLevel} selectFunction={minimumSkillLevelProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
            <SelectTag selectPlaceholder="Genres" selectOptions={genres} selectFunction={selectGenre} />
            <Chips selected={selectedGenres} setSelectedGenres={setSelectedGenres} />
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Add post" />}
            {isLoading && <DisabledButton disabledButtonText="Adding post..." />}
            <Validation formValidation={formValidation} setFormValidation={setFormValidation} formValidations={formValidations} />
            <Error formError={formError} setFormError={setFormError} error={error} />
        </form>
    );
}