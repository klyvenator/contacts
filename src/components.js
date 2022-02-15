import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types'
import pic from './dp.png';

export const Container = styled.div`
  min-width: 80%;
  min-height: 80%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 10%;
`

export const Header = styled.h1`
  color: #31b18d;
  text-align: center;
  font-family: 'Trebuchet MS', sans-serif;
`

export const Line = styled.div`
  background: rgb(255,207,105);
  background: linear-gradient(90deg, rgba(255,207,105,1) 0%, rgba(34,193,195,1) 100%);
  width: 90%;
  height: 2px;
  margin: auto;
  margin-bottom: 20px;
`

const ContactBG = styled.div`
  padding: 20px;
  height: 200px;
  width: 90%;
  margin: auto;
  display: flex;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #868686;
  justify-content: space-between;

  @media (min-width: 1100px) {
    width: 40%;
    margin: 0;
    margin-bottom: 20px;
    margin-right: 20px;
  }
`
const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  line-height: 1.8;
  color: #868686;
  background-color: #fff;
  font-family: 'Trebuchet MS', sans-serif;
`

const Name = styled.h2`
  color: #868686;
  text-align: center;
  font-family: 'Trebuchet MS', sans-serif;
`
const ThumbnailDiv = styled.div`
  width: 40%;
`
export const ContactBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Button = styled.button`
  background-color: #ed6780;
  color: #fff;
  visibility: hidden;
  border: 0;
  border-radius: 2px;
  &:hover {
    background-color: #e8ed67;
  }
  margin-left: 10px;
`

export const ContactCard = ({ name, email, phone, website }) => {
  return(
    <ContactBG
      onMouseOver={ (e) => {
        if (window.innerWidth > 1000) {
          e.currentTarget.style.width = '45%';
        } else {
          e.currentTarget.style.width = '100%';
        }
        let b = e.currentTarget.lastChild.lastChild;
        b.style.visibility = 'visible';
      }}
      onMouseOut={ (e) => {
        if (window.innerWidth > 1000) {
          e.currentTarget.style.width = '40%';
        } else {
          e.currentTarget.style.width = '90%';
        }
        let b = e.currentTarget.lastChild.lastChild;
        b.style.visibility = 'hidden';
      }}>
      <ThumbnailDiv>
        <img src = {pic} height='100%' width='100%'></img>
      </ThumbnailDiv>
      <DetailsDiv>
        <Name>{ name }</Name>
        Email: { email }<br/>
        Phone: { phone }<br/>
        Website: { website }<br/>
      </DetailsDiv>
      <div><Button>x</Button></div>
      </ContactBG>
  )
}