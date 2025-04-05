import React from 'react';
import { useState , useEffect} from "react"
import axios from 'axios';


export default function Test() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        // axios.get('http://localhost:8080/api/test')
        //     .then((res) => {
        //         setHello(res.data);
        //     })
        //     .catch((error) => {
        //         console.error("에러 발생:", error);
        //     });


        fetch('http://localhost:8080/api/test', {
            method: "GET",
            headers: {
                "Accept": "text/plain" // 또는 "*/*"
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.text();  // <- 핵심: json() 말고 text()로
            })
            .then((data) => {
                setHello(data); // 그대로 출력
            })
            .catch((error) => {
                console.error("에러 발생:", error);
            });
    }, []);



    return (
        <div className="App">
            백엔드 데이터 : {hello}
        </div>
    );
}