import styles from "./HTag.module.css";

export default function HTag({hType, hColor, hText}) {
    
    const CustomHTag = hType;
    
    return(
        <CustomHTag className={`${styles.hDefaultTag} ${styles[hType + "Tag"]} ${styles[hColor]}`}>
            {hText}
        </CustomHTag>
    );
}