import styles from './title.module.css'

export interface TitleProps {
    textBefore: string;
    textBold: string;
    textAfter: string
}

export default function Title (props: TitleProps) {
    return (
        <div>
            <p className={styles.title}>{props.textBefore}<br/><strong>{props.textBold}</strong>{props.textAfter}</p>
        </div>
    )
}