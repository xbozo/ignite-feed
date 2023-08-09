import { ImgHTMLAttributes } from "react";
import styles from "./styles.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
    return (
        <div>
            <img 
                className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
                {...props}
            />
        </div>
    )
}