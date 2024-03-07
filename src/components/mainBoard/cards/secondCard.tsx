import MaximizedCard from "@/components/maximizedCard/maximizedCard";
import MinimizedCard from "@/components/minimizedCard/minimizedCard";
import { minimizedCardText } from "@/components/minimizedCard/minimizedCard.data";
import MinimizedCardTitle from "@/components/minimizedCard/minimizedCardTitle";
import { OpenCardContext } from "@/components/openCardContext/openCardContext";
import { useContext } from "react";


export default function SecondCard () {
    
    const { state } = useContext(OpenCardContext)

    return(
        <>
                {state ? <>
                        <MaximizedCard numCard='Second'/>
                    </>
                    : <>
                        <MinimizedCard height='212px' picture='/Group 2-1.png' title={<MinimizedCardTitle cardNum={2} />} text={minimizedCardText.second} icon='/Group 117.png'/>
                    </>}
        </>)
} 