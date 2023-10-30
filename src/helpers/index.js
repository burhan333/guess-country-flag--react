import { toast } from "react-toastify";

export const alert = (type, msg, autoCloseTime) => {
    if (type === 'success') {
        toast.success(msg, {
            position: 'top-right',
            autoClose: autoCloseTime ? autoCloseTime : 5000 
        })
    }
    else if (type === 'error') {
        toast.error(msg, {
            position: 'top-right',
            autoClose: autoCloseTime ? autoCloseTime : 5000
        })
    }
}

export const translation = (text) => {
    const { defaultLang } = window["appconfig"];
    const languages = window["locale"];
    
    return languages[defaultLang][text]
}