import React from "react";
import styled from "styled-components";
import { useFormContext, Controller } from "react-hook-form";
import closeIcon from '../../../assets/icon/calenderClose.png';

const SelectPopup = ({ data, close }) => {
  const { control, setValue } = useFormContext();
  return (
    <Overay>
      <Wrap>
        <PopupHeader>
          <h2>여행목적</h2>
          <div className="cancel" onClick={close} />
        </PopupHeader>
        <Controller 
          name='target'
          control={control}
          render={({ field }) => {
            return (
              <Radio {...field}>
                {data.map((item) => {
                  return (
                    <>
                      <input
                        key={item.id}
                        type="radio"
                        id={item.id.toString()}
                        name={field.name}
                        value={item.value}
                        checked={field.value == item.value}
                        onClick={(e) => {
                          field.onChange(e.target.value)
                          setValue('checkGroup.3.list', e.target.value)
                          close()
                        }}
                      />
                      <label htmlFor={item.id.toString()}>{item.value}</label>
                    </>
                  );
                }
              )}
            </Radio>
          );
        }}
      />
      </Wrap>
    </Overay>
  );
}

export default SelectPopup;

const Overay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 512px;
  height: 779px;
  z-index: 1000;
  background-color: #FFFFFF;
  overflow-y: scroll;
  border-radius: 15px;
  box-shadow: 4px 6px 16px 0px rgba(0, 0, 0, 0.25);

`;

const PopupHeader = styled.div`
  background-color: #2EA5FF;
  height: 89px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  > h2 {
    color: #FFFFFF;
  }
  .cancel {
    width: 32px;
    height: 32px;
    background-image: url(${closeIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Radio = styled.div`
 
`;


