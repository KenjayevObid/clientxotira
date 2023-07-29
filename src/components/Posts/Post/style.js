import { styled } from "styled-components";

export const Container = styled.div`
  width: 220px;
  height: 270px;
  background-color: white;
  border-radius: 8px;
  margin: 10px;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const ImgContainer = styled.div`
  height: 120px;
  width: 100%;
`;
export const ImgFront = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  color: white;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  height: 120px;
  width: 100%;
`;
export const Creator = styled.div`
  text-align: left;
`;

export const CreatedAt = styled.div`
  font-size: 11px;
`;
export const TextCon = styled.div`
  padding: 10px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
`;
export const Title = styled.div`
  font-size: 20px;
  height: 30px;
  color: black;
  font-weight: 600;
  padding: 5px 0;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: none;
`;
export const Update = styled.div`
cursor: pointer;
font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
`;
export const Tags = styled.div`
  height: 10px;
  margin: 5px 0;
  display: inline-block;
  width: 100%;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;
export const Message = styled.p`
  width: 100%;
  height: 50px;
  overflow: hidden;
  margin: 5px 0;
  font-size: 12px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
