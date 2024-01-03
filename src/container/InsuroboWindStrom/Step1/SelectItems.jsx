import React from "react";
import styled, { css } from "styled-components";
import { useFormContext, Controller } from 'react-hook-form';

import store from '../../../assets/icon/insuroboWindstorm/store.png';
import factory from '../../../assets/icon/insuroboWindstorm/factory.png';
import circleCheckIcon from '../../../assets/icon/insuroboWindstorm/circleCheckIcon.png';


const SelectItems = () => {
  const { control } = useFormContext();
  const data = [
    {
      idx: '1',
      title: '일반상가',
      icon: store,
      name: 'objCat',
      value: '2',
    },
    {
      idx: '2',
      title: '공장',
      icon: factory,
      name: 'objCat',
      value: '4',
    }
  ]
  return (
      <Controller
        name="objCat"
        control={control}
        render={({ field }) => {
          return (
            <Form {...field}>
              {data.map((item) => {
                return (
                  <label htmlFor={item.idx.toString()}>
                    <Icon color={field.value == item.value}>
                    <img src={item.icon} alt={item.title} />
                    {field.value == item.value && (
                      <CircleIcon />
                    )}
                    </Icon>
                    <FormCheck
                      key={item.idx}
                      type="radio"
                      defaultValues='2'
                      id={item.idx.toString()}
                      name={field.name}
                      value={item.value} 
                      checked={field.value == item.value}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                    />
                    <Title color={field.value == item.value}>{item.title}</Title>
                  </label>
                );
              })}
            </Form>
          );
        }}
    />
  ) 
}

export default SelectItems;

const Icon = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid #F0F0F0;
  ${props => props.color && css`
    border: 2px solid #2EA5FF;
  `}
  > img {
    max-width: 50.55px;
  }
`


const CircleIcon = styled.div`
  width: 22.5px;
  height: 22.5px;
  background-image: url(${circleCheckIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
`;

const FormCheck = styled.input`
  position: absolute;
  left: -2000%;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 60px;
  > label {
    display: block;
    text-align: center;
  }
  > label:first-child {
    margin-right: 40px;
  }
  > label:last-child {
    margin-left: 40px;
  }
`;

const Title = styled.p`
  display: block;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  color: #808080;
  ${props => props.color && css`
    color: #2EA5FF;
  `}
`;


