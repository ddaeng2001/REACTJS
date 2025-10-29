

const EventComponent_01 = () => {
    //이벤트 handler를 컴포넌트 내에 두기
    const handleClick = ()=>{console.log('clicked...');}

    return <button onClick={handleClick}>onClick</button>
}

export default EventComponent_01