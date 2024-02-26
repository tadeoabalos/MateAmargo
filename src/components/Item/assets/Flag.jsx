export const Flag = ({country, size}) => {

    const flag = `https://flagsapi.com/${country}/shiny/${size}.png`;

  return (    
      <img src={flag} alt={`${country} flag`}></img>    
  )
}
