import { createContext, useState} from "react";

export const UpdateContext = createContext()

export const UpdateState = (props) =>
{
    const [rank, setRank] = useState(12890)
    const [percentile, setPercentile] = useState(37)
    const [score, setScore] = useState(7)

    const setScores = (rank, percentile, score) =>
    {
        setRank(rank);
        setPercentile(percentile);
        setScore(score);
    }


    return (
        <UpdateContext.Provider value={{rank,percentile,score,setScores}}>
        {props.children}
        </UpdateContext.Provider>
        )
}