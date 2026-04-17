import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MemberUpdate = () => {
    const [member, setMember] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    const { register, handleSubmit, setValue, formState: { isSubmitting } } = useForm()
    
    useEffect(() => {
        fetch(`http://localhost:10000/api/members/${id}`)
            .then(res => res.json())
            .then(res => {
                setMember(res.data)
                setValue("memberEmail", res.data.memberEmail)
                setValue("memberName", res.data.memberName)
                setValue("memberPassword", res.data.memberPassword)
            })
            .catch(err => console.log(err))
    }, [id, setValue])

    const update = handleSubmit(async (memberUpdateRequestDTO) => {
        await fetch(`http://localhost:10000/api/members/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(memberUpdateRequestDTO)
        })
        .then(async (res) => {
            if (!res.ok) {
                const error = await res.json()
                throw new Error(error?.message)
            }
            return res.json()
        })
        .then((res) => {
            console.log(res)
            navigate("/members/member-list")
        })
        .catch((err) => {
            console.log(err)
        })
    })

    return (
        <div>
            <div>
                <p>이메일</p>
                <input {...register("memberEmail")} />
            </div>
            <div>
                <p>이름</p>
                <input {...register("memberName")} />
            </div>
            <div>
                <p>비밀번호</p>
                <input {...register("memberPassword")} type="password" />
            </div>
            <button onClick={update} disabled={isSubmitting}>회원정보 수정</button>
        </div>
    );
};

export default MemberUpdate;