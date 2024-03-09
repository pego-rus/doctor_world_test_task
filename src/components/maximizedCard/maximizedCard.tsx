import { createElement, useContext } from 'react'
import styles from './maximizedCard.module.css'
import { maximizedCardTextData } from './maximizedCardContent.data'
import Image from "next/image"
import { OpenCardContext } from '../openCardContext/openCardContext'

interface MaximizedCardProps {
    numCard: 'First' | 'Second'
}

export default function MaximizedCard ({numCard}: MaximizedCardProps) {
    return(
        createElement(
            MaximizedCard[numCard],
            {}
          )
    )
}

MaximizedCard.First = function () {

    const {state, setState} = useContext(OpenCardContext)

    return(
        <div onClick={(event) => {
                    event.stopPropagation();
                    setState(!state)
            }} className={styles.maximizedCard}>
            <p>
            В десятилетнем исследовании <strong>«Генетическая эпидемиология ХОБЛ» (COPDGene)</strong> среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено <strong>преобладание женщин (66%)</strong>, а в возрасте 60-64 лет количество женщин и мужчин.
            </p>
            <p>
            Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более <strong>высокий процент площади стенок</strong>, но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.
            </p>
            <Image className={styles.image} src='/Group 44.png'
                            width={1211}
                            height={389}
                            alt='graph'/>
        </div>
    )
}

MaximizedCard.Second = function () {

    const {state, setState} = useContext(OpenCardContext)
    const { first, second, third } = maximizedCardTextData

    return(
        <div onClick={(event) => {
                    event.stopPropagation();
                    setState(!state)
            }} className={styles.maximizedCard}>
            <p>
                <strong>
                Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.
                </strong>
            </p>
            <p>
            В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.
            </p>
            <p className={styles.title}>Пятилетняя выживаемость пациентов</p>
            <div className={styles.flexContainer}>
                <MaximizedCard.CardContent imgWidth={83} imgSrc={'/Рисунок4.svg'} textFirst={first.firstText} textSecond={first.secondText} textThird={first.thirdText}/>
                <MaximizedCard.CardContent imgWidth={103} imgSrc={'/Рисунок5.svg'} textFirst={second.firstText} textSecond={second.secondText} textThird={second.thirdText}/>
                <MaximizedCard.CardContent imgWidth={117.92} imgSrc={'/Рисунок6.svg'} textFirst={third.firstText} textSecond={third.secondText} textThird={third.thirdText}/>
            </div>
        </div>
    )
}

interface MaximizedCardContentProps {
    imgWidth: number,
    imgSrc: string;
    textFirst: string;
    textSecond: string;
    textThird: string
}

MaximizedCard.CardContent= function (props: MaximizedCardContentProps) {
    return(
        <div className={styles.flexCardContainer}>
            <Image src={props.imgSrc}
                    width={props.imgWidth}                            
                    height={134}
                    alt='card'/>
            <p className={styles.item}>{props.textFirst}</p>
            <p dangerouslySetInnerHTML={{ __html: props.textSecond }} className={styles.item}></p>
            <p dangerouslySetInnerHTML={{ __html: props.textThird }} className={styles.item}></p>
        </div>
    )
}