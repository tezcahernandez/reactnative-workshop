export const navigateTo = (idView) => {
    return {
        type: 'navigateTo',
        idView: idView
    }
}

export const back = () => {
    return {
        type: 'back'
    }
}

export const navigateToHome = () => {
    return {
        type: 'navigateToHome'
    }
}

export const setCurrentNews = (id, title, subtitle, description, image) => {
    return {
        type: "setCurrentNews",
        id: id,
        title: title,
        subtitle: subtitle,
        description: description,
        image: image
    }
}