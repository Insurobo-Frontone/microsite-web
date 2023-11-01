import React from "react";
import styled from "styled-components";
import { useFormContext, Controller } from "react-hook-form";
import closeIcon from '../../../../assets/icon/calenderClose.png';
import MbcloseIcon from '../../../../assets/icon/travelMobileCloseIcon.png';
import checkedIcon from '../../../../assets/icon/popupCheckedIcon.png';

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
              <PopupBody {...field}> 
                {data.map((item) => {
                  return (
                    <div>
                      <input
                        key={item.id}
                        type="radio"
                        id={item.id.toString()}
                        name={field.name}
                        value={item.value}
                        checked={field.value === item.value}
                        onChange={(e) => {
                          field.onChange(e.target.value)
                          setValue('list3', e.target.value)
                          close()
                        }}
                      />
                      <label htmlFor={item.id.toString()}>{item.value}</label>
                    </div>
                  )}
                )}
              </PopupBody>
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
  z-index: 1000;
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 4px 6px 16px 0px rgba(0, 0, 0, 0.25); 

  ${(props) => props.theme.window.mobile} {
    width: 312px;
    
  }
`;

const PopupHeader = styled.div`
  background-color: #2EA5FF;
  height: 89px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-radius: 15px 15px 0 0;
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

  ${(props) => props.theme.window.mobile} {
    padding: 31px 30px 32px;
    > h2 {
      font-size: 18px;
    }
    .cancel {
      width: 24px;
      height: 24px;
      background-image: url(${MbcloseIcon});
    }
  }
`;

const PopupBody = styled.div`
  overflow-y: scroll;
  height: 690px;
  margin-top: 20px;
  ::-webkit-scrollbar, ::-webkit-scrollbar-track {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #D9D9D9;
    border-radius: 30px;
    width: 5px;
    height: 237px;
    background-clip: padding-box;
  }
  
  > div:first-child {
    padding: 20px 30px;
    border-bottom: 1px solid #F0F0F0;
    box-sizing: border-box;
  }
  > div:nth-child(2), div:nth-child(7), div:nth-child(14) {
    padding-top: 20px;
  }
  > div:nth-child(6), div:nth-child(13), div:nth-child(6) {
    padding-bottom: 20px;
    border-bottom: 1px solid #F0F0F0;
  }
  > div:last-child {
    padding-bottom: 20px;
  }
  > div { 
    padding: 10px 30px;

    > input {
      position: absolute;
      left: -1000%;
    }

    > label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333333;
      line-height: 39px;
      ::after {
        content: '';
        display: flex;
        width: 24px;
        height: 24px;
        border: 1px solid #B4B4B4;
        border-radius: 50%;
        box-sizing: border-box;
        
      }
    }
    > input:checked + label {
      ::after {
        background-color: #5974FF;
        border: none;
        background-image: url(${checkedIcon});
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  ${(props) => props.theme.window.mobile} {
    height: 450px;
    
    > div:first-child {
      padding: 18px 30px 26px;
    }
    > div:nth-child(2), div:nth-child(7), div:nth-child(14) {
      padding-top: 27px;
    }
    > div:nth-child(6), div:nth-child(13), div:nth-child(6), div:last-child {
      padding-bottom: 27px;
    }
    > div {
      padding: 0 30px 25px;
      > label {
        line-height: 24px;
        font-size: 16px;
        ::after {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

