import React from 'react'
import styled from 'styled-components'

export const Styledcomponent = (props) => {
    let H3=styled.h3`
     display:flex;
     justify-content:center;
     align-items:center;
    `
    let P=styled.p`
    display:flex;
    justify-content:center;
    align-items:center;
    `
    let Div=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    `
    let Button=styled.button`
    background-color:${(props)=>(props.primary?'#6caff7ff':'6c757d')};
    padding:5px 15px;
    border:2px solid black;
    border-radius:5px;
    cursor:pointer;
    `
  return (
    <>
    <div>
        <card>
            <H3>Styled Component Card</H3>
            <P>This is a simple example ofusing styled-components in react</P>
            <Div>
                <Button primary>Primary</Button>
                <Button style={{marginLeft:'10px'}}>Secondary</Button>
            </Div>
        </card>
    </div>
    </>
  )
}
