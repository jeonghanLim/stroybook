"use client";

import { TextField } from "@/components/inputs/textField/TextField"
import { Popup } from "@/components/popup/Popup";
import { useState } from "react";


export default function Test() {
    const [userId, setUserId] = useState('');

    const handleClick = () => {
        setIsOpen(true);
    }

    const open = true;

    return (
        <>
            <TextField
                label="테스트 텍스트필드"
                labelLeft='true'
                value={userId}
                error='true'
                // dense='true'
                // readOnly={true}
                onChange={(e) => {
                    setUserId(e);
                    console.log('value?', e);
                }}
            />

            <button
                onClick={handleClick} 
            >
                팝업
            </button>
            {open && (
                <Popup
                    title="로그아웃 하시겠습니까?"
                    contents="로그아웃하면 다시 로그인해야 합니다."
                    cancelBtnText="취소"
                    okBtnText="확인"
                    hasOkBtn
                />
            )}
        </>
    )
}