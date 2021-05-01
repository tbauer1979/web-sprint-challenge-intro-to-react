import React from 'react';
import styled from 'styled-components'

const Character = (props) => {


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
  return (
    <div className="character">
      {props.char.map(char =>{
       return ( 
           <CardWrapper>
               <CardBody>
                    <h1 className="Header">{char.name}</h1> 
                    <p >Eye color: {char.birth_year}</p>
                    <Para className="para">Gender: {char.gender}</Para>
                    <p >Eye color: {char.eye_color}</p>
                    <p >Height: {char.height}</p>
                <Char>
                    {char.films.map(film => {
                        return (
                            <div>
                                <li>{film}</li>
                            </div>
                        )
                    })}
                </Char>


                    
                </CardBody>
            </CardWrapper>
       )
      }

      )}
      
    </div>
  );
}

export default Character;


const Para = styled.p`
 border: 1px
  font-size: 1.5em;
  text-align: center;
  color: black;
`;


const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;


 const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const Char = styled.div`
text-align: left;
`;