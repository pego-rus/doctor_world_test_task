import Image from 'next/image';
import styles from './contentBlock.module.css'
import Title from '../title/title';
import { ReactNode } from 'react';

export interface ContentBlockProps {
    blockNumber: number;
    picture: string;
    text: string;
    // height: string;
    // width: string;
}

export type contentType = {
    1: ReactNode,
    2: ReactNode,
    3: null,
    4: null,
    5: null
}

export default function ContentBlock (props: ContentBlockProps) {

    const content = {
        1: <Title textBefore='Ингаляционный ' textBold='антихолинергик' textAfter=''/>,
        2: <Title textBefore='Ингаляционный ' textBold='β2-агонист' textAfter=''/>,
        3: <Title textBefore='Ингаляционный ' textBold='глюкокортикостероид' textAfter=' (ИГКС)'/>,
        4: null,
        5: null
    }

    return(
        <div className={props.blockNumber < 4 ? styles.contentBlockTop : styles.contentBlockBottom}>
            {props.picture ? <Image src={props.picture}
                            width={178}
                            height={145}
                            alt='inhaler'/> 
                            : <></> }
            {content[props.blockNumber as keyof contentType]}
            <p className={props.blockNumber < 4 ? styles.textContentCenter : styles.textContentStart} dangerouslySetInnerHTML={{ __html: props.text }}></p>
        </div>
    )
}