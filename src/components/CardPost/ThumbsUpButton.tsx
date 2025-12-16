import { IconButton } from "../IconButton/index.tsx"
import { Spinner } from "../Spinner/index.tsx"
import { IconThumbsUp } from "../icons/IconThumbsUp.tsx"

export const ThumbsUpButton = ({ loading }: { loading: boolean }) => {
    return (
        <IconButton disabled={loading}>
            { loading ? <Spinner /> : <IconThumbsUp /> }
        </IconButton>
    )
}