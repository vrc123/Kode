export default function InstrumentFormValidation(instrument) {

    let errorArray = [];
  
    if (!instrument.instrumentName != "") {
        errorArray.push("Instrument is required");
    }
  
    if (!instrument.skillLevel != "") {
        errorArray.push("Skill level is required");
    }

    return errorArray;
}