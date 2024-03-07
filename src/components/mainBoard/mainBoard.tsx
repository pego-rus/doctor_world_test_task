'use client'

import Image from 'next/image'
import styles from './mainBoard.module.css'
import ContentBlock from './contentBlock/contentBlock'
import { contentBlockText } from './mainBoard.data'
import { OpenContextFirstProvider, OpenContextSecondProvider } from '../openCardContext/openContextProvider'
import FirstCard from './cards/firstCard'
import SecondCard from './cards/secondCard'
import { useContext } from 'react'
import { OpenCardContext } from '../openCardContext/openCardContext'

const { textOne, textTwo, textThree, textFour, textFive} = contentBlockText

export default function MainBoard () {    
    return(
        <div className={styles.card}>
            <section className={styles.cardHead}>
                <h1>ХОБЛ: мифы и реальность</h1>
            </section>
            <section className={styles.cardContent}>
                <div className={styles.cardTop}>
                    <OpenContextFirstProvider>
                        <FirstCard />
                    </OpenContextFirstProvider>
                    <OpenContextSecondProvider>
                        <SecondCard />
                    </OpenContextSecondProvider>
                </div>
            </section>
            <section className={styles.cardHead}>
                <h1>Терапия ХОБЛ: что в фокусе?</h1>
            </section>
            <section className={styles.cardContent}>
                <div className={styles.bigTitle}>
                    <p>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</p>
                </div>
                <p className={styles.underTitle}>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</p>
                <div className={styles.flexContainer}>
                    <ContentBlock picture={'/Group 7.png'} text={textOne} height={'608px'} width={'410px'} blockNumber={1}/>
                    <ContentBlock picture={'/Group 7-1.png'} text={textTwo} height={'608px'} width={'410px'} blockNumber={2}/>
                    <ContentBlock picture={'/Group 7-2.png'} text={textThree} height={'608px'} width={'410px'} blockNumber={3}/>
                    <div className={styles.arrows}>
                        <Image src='/Group 8.png'
                            width={425}
                            height={54}
                            alt='arrow'/>
                        <Image src='/Group 8.png'
                            width={425}
                            height={54}
                            alt='arrow'/>
                    </div>
                    <ContentBlock picture={''} text={textFour} height={'400px'} width={'630px'} blockNumber={4}/>
                    <ContentBlock picture={''} text={textFive} height={'400px'} width={'630px'} blockNumber={5}/>
                </div>
            </section>
        </div>
    )
}