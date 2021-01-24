import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FancyButton = styled.button`
  background: lightgreen;
  border: black 1px;
  border-style: solid;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: green;
  }
`

export const OuterDiv = styled.div`
  padding: 10px 20px;
`

export const BackgroundDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://cdn.uconnectlabs.com/wp-content/uploads/sites/7/2016/02/bigstock-Stack-Of-Books-70033240.jpg');
`

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  border: rgba(40,40,40,0.5) 4px;
  border-style: solid;
  text-align: center;
  position: fixed;
  width: 400px;
  height: 490px;
  top: 50vh;
  left: 50vw;
  margin-top: -270px;
  margin-left: -204px;
  /* background-color: rgba(108,128,150,0.8); */
  animation: color-change 40s infinite;
  position: center;
  @keyframes color-change {
    0% { background-color: rgba(100,128,150,0.8); }
    20% { background-color: rgba(128,128,100,0.8); }
    40% { background-color: rgba(100,128,128,0.8); }
    60% { background-color: rgba(150,100,128,0.8); }
    80% { background-color: rgba(128,150,100,0.8); }
    100% { background-color: rgba(108,128,150,0.8); }
  }
`

export const InputDiv = styled.div`
  display: flex;
  justify-content: top;
  flex-direction: column;
  width: 25vw;
  padding: 5px;
`

export const RowDiv = styled.div`
  display: flex;
  justify-content: left;
  /* float: right; */
  flex-direction: row;
  /* margin: 10px; */
  /* padding: 10px; */
  margin: auto auto 0 0;
  width: 60vw;
`

export const StyledInput = styled.input`
  padding: 0px;
  margin: 0px;
`

export const RedP = styled.p`
  color: red;
  /* margin: auto; */
`

export const EvenEntryDiv = styled.div`
  padding: 10px 10px;
  border: black 1px;
  border-style: none solid solid solid;
  background-color: rgb(200,200,200);
  display: flex;
  justify-content: space-between;
`

export const OddEntryDiv = styled.div`
  padding: 10px 10px;
  border: black 1px;
  border-style: none solid solid solid;
  background-color: rgb(230,230,230);
  display: flex;
  justify-content: space-between;
`

export const TopEntryDiv = styled.div`
  margin: 10px 0 0 0;
  padding: 10px 10px;
  border: black 1px;
  border-style: solid;
  background-color: rgb(200,200,200);
  display: flex;
  justify-content: space-between;
`

export const HomeLink = styled(Link)`
  margin: 7px 20px;
  padding: 18px;
  border: black 1px;
  border-style: solid;
  background-color: rgb(20,20,255);
  color: white;
  text-align: center;
  font-size: 30px;
  text-decoration: none;
  border-radius: 36px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgb(70,70,255);
  }
`

export const GoBackLink = styled(Link)`
  color: blue;
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover {
    color: orange;
  }
`

export const EntryLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightgreen;
  border: black 1px;
  border-style: solid;
  border-radius: 4px;
  padding: 10px;
  margin: 0 0 auto 0;
  text-decoration: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: white;
    background-color: green;
  }
`
