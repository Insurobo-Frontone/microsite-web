import React, { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import styled from "styled-components";

const UserAddForm = () => {
  const methods = useFormContext();
  const { register, control } = methods;
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "accUser"
  });
  useEffect(() => {
    update(0, { name: '',  })
  }, []);
  
  return (
    <>
      {fields.map((item, index) => {
        return (
          <Wrap>
            <li key={item.id}>
              <input
                type='text'
                name={`accUser.${index}.name`}
                {...register(`accUser.${index}.name`)}
                placeholder="이름"
              />
              <button
                type="button"
                onClick={() => {
                  index === 0 ? append(index) : remove(index)
                }}
              >{index === 0 ? '추가' : '삭제'}</button>
            </li>
          </Wrap>
         );
      })}
    </>
  )
}
export default UserAddForm;


const Wrap = styled.div`
  width: 100%;
  padding: 20px;
  border: 1.5px solid #CECECE;
  border-radius: 10px;
  margin-top: 50px;
`;
