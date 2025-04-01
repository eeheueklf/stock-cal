import { useState } from "react";

export default function DividendCalculator() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/test')
            .then((res) => {
                setHello(res.data);
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
