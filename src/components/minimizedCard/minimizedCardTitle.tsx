import { ReactNode } from 'react'
import { TitleProps } from '../mainBoard/title/title'
import styles from './minimizedCard.module.css'

type titleDataType = {
    1: ReactNode,
    2: ReactNode
}

type Props = {
    cardNum: number
}

export default function MinimizedCardTitle ({cardNum}: Props)  {

    const titleData: titleDataType = {
        1: <MinimizedCardTitle.Title textBefore='ХОБЛ болеют ' textBold='преимущественно мужчины?' textAfter='' />,
        2: <MinimizedCardTitle.Title textBefore='' textBold='Опасно' textAfter=' не наличие заболевания, а обострения?' />
    }

    return(
        <div className={styles.title}>
            {titleData[cardNum as keyof titleDataType]}
        </div>
    )
}

MinimizedCardTitle.Title = function MinCardTitle (props: TitleProps) {
    return(
        <div className={styles.titleText}>
            <p>{props.textBefore}<strong>{props.textBold}</strong>{props.textAfter}</p>
        </div>
    )
}