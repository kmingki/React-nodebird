import React from 'react';
import { useRouter } from 'next/router';

const style={
    display:"flex",
    alignItems:"center",
    height:"50px",
    position:"fixed",
    top:"0",
    zIndex:"1",
    background:"white",
    width:"100%",
    borderBottom: "solid thin #EFEEF5",
}

const Title = () => {
    const router = useRouter();

    const toTop = () => {
        router.push('/main');
        window.scrollTo({top:0, left:0, behavior:'auto'});
    };
    
    return(
        <>
        <div style={style} onClick={toTop}>
            <h1 style={{margin:"0"}}>&nbsp;&nbsp;&nbsp;Home</h1>
        </div>
        </>
    );
};

export default Title;
