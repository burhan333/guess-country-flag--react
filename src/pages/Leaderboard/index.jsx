import { useEffect, useState } from "react"
import { HttpService } from "../../services/HttpService"
import { alert } from "../../helpers"
import Navbar from "../../components/Navbar"

const Leaderboard = () => {

    const httpService = new HttpService()
    const [scores, setScores] = useState({})

    useEffect(() => {
        getTopScore()
    }, [])

    const getTopScore = async () => {
        try {
            const response = await httpService.getTopScore()
            if (response.data.status === 'Success') {
                console.log('response', response);
                setScores(response.data.data)
            }
        }
        catch(error) {
            console.log('error in getting top score', error)
            alert('error', 'Something Went Wrong')
        }
    }

    return(
        <div className="leader">
            <Navbar />
            <p className="leader_title">LEADERBOARD</p>
            <div className="leader_body">
                <div className="leader_colum">
                    <p className="leader_subTitle">Easy</p>
                    <div className="leader_head">
                        <div className="d-flex">
                            <p>No</p>
                            <p>Name</p>
                        </div>
                        <p>Score</p>
                    </div>
                    {scores?.easy?.map((item, index) => (
                        <div className="leader_row">
                            <div className="d-flex align-items-center">
                                <p className="leader_sno">{index+1}</p>
                                <p>{item.name}</p>
                            </div>
                            <p>{item.score}</p>
                        </div>
                    ))}
                </div>
                <div className="leader_colum">
                    <p className="leader_subTitle">Medium</p>
                    <div className="leader_head">
                        <div className="d-flex">
                            <p>No</p>
                            <p>Name</p>
                        </div>
                        <p>Score</p>
                    </div>
                    {scores?.medium?.map((item, index) => (
                        <div className="leader_row">
                            <div className="d-flex align-items-center">
                                <p className="leader_sno">{index+1}</p>
                                <p>{item.name}</p>
                            </div>
                            <p>{item.score}</p>
                        </div>
                    ))}
                </div>
                <div className="leader_colum">
                    <p className="leader_subTitle">Hard</p>
                    <div className="leader_head">
                        <div className="d-flex">
                            <p>No</p>
                            <p>Name</p>
                        </div>
                        <p>Score</p>
                    </div>
                    {scores?.hard?.map((item, index) => (
                        <div className="leader_row">
                            <div className="d-flex align-items-center">
                                <p className="leader_sno">{index+1}</p>
                                <p>{item.name}</p>
                            </div>
                            <p>{item.score}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Leaderboard