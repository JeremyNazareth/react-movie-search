import '../assets/styles/global.css'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import styles from '../components/modules/pages/About.module.css'
import context from 'react-bootstrap/esm/AccordionContext'
import { useEffect, useState } from 'react'
function About(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const list = [0,1,2,3]
    
    useEffect(() =>{
        console.log('a')
        
        let test = document.getElementById('test')
        let test1 = document.getElementById('test1')
        let rigthBtn = document.getElementById('right')
        let leftBtn = document.getElementById('left')
        if(test){
            console.log('b')
            let mov = 0
            test.style.transition = `ease-in-out 2s`
            rigthBtn?.addEventListener('click', () => {
                mov += 100
                //test.style.transform = `translateX(${mov}px)`
                test.style.backgroundColor = `yellow`;
                console.log(mov)
            });
            leftBtn?.addEventListener('click', () => {
                mov -= 100
                test.style.transform = `translateX(${mov}px)`
                console.log(mov)
            });
        } else{
            console.log('final')
        }
    },[])

    const addClass = () =>{
        test1?.classList.add(`${styles.animation}`);
        console.log('a')
    }
    
    const removeClass = () =>{
        test1?.classList.remove(`${styles.animation}`);
        console.log('b')

    }

    const right = () =>{
        if(test1){
            test1.classList.add(`${styles.right}`)
            const changeContent = setTimeout(() => {setCurrentIndex(currentIndex + 1)},500)
            const clearClass = setTimeout(() => {test1.classList.remove(`${styles.right}`)},1000)
        }
        
    }
    console.log(currentIndex)
    return (        
        <>
        <div style={{width:"100px",margin:"auto",height:"70px",background:"black",padding:"10px",backgroundColor:"black",overflow:"hidden"}}>
            <div id='test' style={{gap:"5px", flexDirection:"row",display:"flex",justifyContent:"center",backgroundColor:"blue",overflow:"hidden"}}>
                <div className={`${styles.test}`} style={{width:"100px",height:"50px",background:"red"}}></div>
            </div>
            
        </div>
        <div style={{margin:"auto",justifyContent:"center", display:"flex", gap:"40px"}}>
            <button id='left'>
                ←
            </button>
            <button id='right'>
                →
            </button>
        </div>
        <div style={{margin:"50px"}}>
            <div id='test1' className={styles.test1}><p>{list[currentIndex]}</p></div>
            <div style={{textAlign:"center",margin:"5px"}}>
                <button onClick={() => addClass()}>add</button>
                <button onClick={() => removeClass()}>remove</button>
                <button onClick={() => right()}>right</button>
            </div>
            
        </div>
        </>
        
    )
}

export default About;