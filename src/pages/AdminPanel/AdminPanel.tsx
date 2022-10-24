import { observer } from 'mobx-react-lite'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/Button/Button'
import { CreateChapter, CreateChapterProps } from '../../components/Popup/CreateChapter/CreateChapter'
import { CreateFeedback } from '../../components/Popup/CreateFeedback/CreateFeedback'
import { CreateNews, CreateNewsProps } from '../../components/Popup/CreateNews/CreateNews'
import { CreatePartner } from '../../components/Popup/CreatePartner/CreatePartner'
import { DeleteNews } from '../../components/Popup/DeleteNews/DeleteNews'
import { DeletePartner } from '../../components/Popup/DeletePartner/DeletePartner'
import { EditNewsImage } from '../../components/Popup/EditNewsImage/EditNewsImage'
import { EditPartner } from '../../components/Popup/EditPartner/EditPartner'
import { Popup } from '../../components/Popup/Popup'
import { PagesRoutes } from '../../routes'
import { authStore } from '../../store/authStore'
import './AdminPanel.scss'

enum ActivePopup {
    NEWS_POPUP = "NEWS_POPUP",  
    CHAPTERS_POPUP = "CHAPTERS_POPUP",
    PARTNERS_POPUP = 'PARTNERS_POPUP',
    FEEDBACK_POPUP = 'FEEDBACK_POPUP',
    DELETE_NEWS = 'DELETE_NEWS',
    DELETE_PARTNER = 'DELETE_PARTNER',
    EDIT_PARTNER = 'EDIT_PARTNER',
    EDIT_NEWS_IMAGE = 'EDIT_NEWS_IMAGE'
}

type popupProps = CreateNewsProps | CreateChapterProps

export const AdminPanel: React.FC = observer((props) => {
    const navigate = useNavigate()
    const [active, setActive] = useState<ActivePopup | undefined>()
    const [success, setSuccess] = useState<string>()
    const [error, setError] = useState<string>()
    const Element = useMemo<React.FC<popupProps>>(() => {
        switch(active) {
            case ActivePopup.NEWS_POPUP:
                return CreateNews
            case ActivePopup.CHAPTERS_POPUP:
                return CreateChapter
            case ActivePopup.PARTNERS_POPUP:
                return CreatePartner
            case ActivePopup.FEEDBACK_POPUP:
                return CreateFeedback
            case ActivePopup.DELETE_NEWS:
                return DeleteNews
            case ActivePopup.DELETE_PARTNER:
                return DeletePartner
            case ActivePopup.EDIT_PARTNER:
                return EditPartner
            case ActivePopup.EDIT_NEWS_IMAGE:
                return EditNewsImage
            default:
                return () => <></>
        }
    }, [active])

    useEffect(() => {
        if (!success) return

        setTimeout(() => {
            setSuccess("")
        }, 7000)

    }, [success])

    useEffect(() => {
        if (!error) return

        setTimeout(() => {
            setError("")
        }, 7000)
    })

    if (!authStore.item) {
        navigate(PagesRoutes.AUTH)
    }

    return (
        <div style={{position: 'relative', zIndex: 2500520, marginTop: 130}} className="admin-panel">
            <div className="container">
                <Button onClick={() => setActive(ActivePopup.NEWS_POPUP)}>Создать News</Button>
                <Button onClick={() => setActive(ActivePopup.CHAPTERS_POPUP)}>Создать Chapter</Button>
                <Button onClick={() => setActive(ActivePopup.PARTNERS_POPUP)}>Создать Partner</Button>
                <Button onClick={() => setActive(ActivePopup.FEEDBACK_POPUP)}>Создать Feedback</Button>
                <Button onClick={() => setActive(ActivePopup.DELETE_NEWS)}>Delete News</Button>
                <Button onClick={() => setActive(ActivePopup.DELETE_PARTNER)}>Delete Partner</Button>
                <Button onClick={() => setActive(ActivePopup.EDIT_PARTNER)}>Edit Partner</Button>
                <Button onClick={() => setActive(ActivePopup.EDIT_NEWS_IMAGE)}>Edit news' image</Button>

                {active &&
                    <Popup onHide={() => setActive(undefined)}>
                        <Element 
                            onHide={() => setActive(undefined)} 
                            setSuccess={(val: string) => setSuccess(val)}
                            setError={(val: string) => setError(val)}
                         />
                    </Popup>
                }

                {success && 
                    <div className="success">
                        <p style={{fontSize: "20px"}}>{success}</p>
                    </div>
                }

                {error && 
                    <div className="success">
                        <p style={{fontSize: "20px", color: "red"}}>{error}</p>
                    </div>
                }
                
            </div>
        </div>
    )
})