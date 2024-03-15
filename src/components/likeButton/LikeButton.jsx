import { Mate } from '../../assets/mate'
export const LikeButton = ({like}) => {    
    return (
        <>
            {like ? (
                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/mate.png" alt="mate" />

            ) : (
                <Mate />
            )}
        </>    
      );
}
