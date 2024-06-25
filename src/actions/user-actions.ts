"use server"

import { redirect } from 'next/navigation';
import { cookies, headers } from 'next/headers';
import { error } from 'console';
import { FieldValues } from 'react-hook-form';

export async function getUserAuthenticated() {
    const sessionCookies = cookies();
    const token = sessionCookies.get('token');
    if (!token || token === null) {
        return null
    }
    const response = await fetch('http:localhost:8080/api/user/v1/me', {headers: {"Authorization": `Bearer ${token.value}`}});
    const user = await response.json();
    return user;
}
export async function logout() {
    const sessionCookies = cookies();
    sessionCookies.delete("token");
    redirect("/home");
}

export const login = async (formData: FieldValues) => {
    'use server'
    const response = await fetch("http:localhost:8080/auth/login", {
        method: "post",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
    
        body: JSON.stringify({email: formData.email, password: formData.password})
    })
    if (response.ok) {
        const data = await response.json();
        const token = data.token;
        const cookieStore = cookies()
        cookieStore.set('token', token, { expires: Date.now() + data.expiresIn});
        redirect("/home");
    } else {
        const message = await response.text();
        throw new Error(message);
    }
}

export const signUp = async(formData: FieldValues) => {
    'use server'    
    const response = await fetch("http:localhost:8080/auth/signup", {
        method: "post",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
    
        body: JSON.stringify({
            email: formData.email, 
            password: formData.password, 
            cellphoneNumber: formData.cellphoneNumber, 
            fullName: formData.fullName,
            avatarUrl: "https://img.freepik.com/fotos-gratis/avatar-androgino-de-pessoa-queer-nao-binaria_23-2151100226.jpg?w=1380&t=st=1719013625~exp=1719014225~hmac=87ad51a52ff37eb9031b410485e454b188a9d38ff7286bed7bcb08699a095faf"
        })
    })
    if (response.ok) {
        const data = await response.json();
        const token = data.token;
        redirect("/login");
    } else {
        const message = await response.text();
        throw new Error(message);
    }
}