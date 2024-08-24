import styled from "styled-components";



export const Button = styled.button`
width: Hug (1,182px)px;
height: Hug (522px)px;
top: 180px;
left: 129px;
gap: 5px;
opacity: 0px;
color : white;
padding : 10px 18px;
background : #000000;
background-radius : 5px;
min-width : 220px;
border : none;
font-size: 16px;
border : 1px solid transparent;
transition : 0.4s background ease-in;
cursor : pointer;


&:hover{
 background-color: white;
 border : 1px solid black;
 color: black;
 transition : 0.3s background ease-in;

}

`;


export const OutlineButton = styled(Button)`
background-color : white;
border : 1px solid black;
color:black;

&:hover{
 background-color: black;
 border : 1px solid ttransparent;
 color: white;
 

}

`;



