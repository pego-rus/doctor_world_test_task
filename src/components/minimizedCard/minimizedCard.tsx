import { ReactNode, useContext } from 'react'
import styles from './minimizedCard.module.css'
import Image from "next/image"
import { OpenCardContext } from '../openCardContext/openCardContext'

interface MinimizedCardProps {
    height: string,
    picture: string,
    title: ReactNode,
    text: string,
    icon: string
}

export default function MinimizedCard (props: MinimizedCardProps) {

    const {state, setState} = useContext(OpenCardContext);
    console.log(state)

    return(
        <div className={styles.minimizedCard} style={{'height':props.height}}>
            <div className={styles.minimizedCardContent}>
                <Image src={props.picture}
                        width={80}
                        height={80}
                        alt='man'/>
                <div className={styles.titleBox}>
                    {props.title}
                </div>
                <div className={styles.textContent}>
                    <p>{props.text}</p>
                </div>
            </div>
            <button onClick = {() => setState((prevState: boolean) => !prevState)}>
                <Image className={styles.minimizedCardImg} src={props.icon}
                            width={48.26}
                            height={48.26}
                            alt='icon'/>
            </button>
        </div>
    )
}