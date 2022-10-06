import React from 'react'
import oneStar from '../../assets/partners/1-stars.svg'
import twoStars from '../../assets/partners/2-stars.svg'
import threeStars from '../../assets/partners/3-stars.svg'
import fourStars from '../../assets/partners/4-stars.svg'
import fiveStars from '../../assets/partners/5-stars.svg'

interface StarProps {
    rating: number
}

export const Star: React.FC<StarProps> = ({ rating }) => {
    let stars = ""

    switch(rating) {
        case 1:
            stars = oneStar
            break;
        case 2:
            stars = twoStars
            break;
        case 3:
            stars = threeStars
            break;
        case 4:
            stars = fourStars
            break;
        case 5:
            stars = fiveStars
            break;
    }

    return (
        <img src={stars} alt="stars" />
    )
} 