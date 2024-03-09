import MaximizedCard from "@/components/maximizedCard/maximizedCard";
import MinimizedCard from "@/components/minimizedCard/minimizedCard";
import { minimizedCardText } from "@/components/minimizedCard/minimizedCard.data";
import MinimizedCardTitle from "@/components/minimizedCard/minimizedCardTitle";
import { OpenCardContext } from "@/components/openCardContext/openCardContext";
import { useContext } from "react";


export default function FirstCard () {
    
    const { state } = useContext(OpenCardContext)
    
    return(
        <>
            {state ? <>
                        <MaximizedCard numCard='First'/>
                    </>
                    : <>
                        <MinimizedCard height='194.5px' 
                                        picture='/Group 2.png' 
                                        title={<MinimizedCardTitle 
                                        cardNum={1} />} 
                                        text={minimizedCardText.first} 
                                        icon='/Group 118.png'/>
                    </>}
        </>
    )
} 