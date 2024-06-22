"use server"

import { redirect } from 'next/navigation';
import { cookies, headers } from 'next/headers';

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
    redirect("/initial");
}

export const login = async (formData: FormData) => {
    'use server'
    const response = await fetch("http:localhost:8080/auth/login", {
        method: "post",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
    
        body: JSON.stringify({email: formData.get("email"), password: formData.get("password")})
    })
    if (response.ok) {
        const data = await response.json();
        const token = data.token;
        const cookieStore = cookies()
        cookieStore.set('token', token, { expires: Date.now() + data.expiresIn});
        redirect("/initial");
        return data;
    } else {
        return null;
    }
}