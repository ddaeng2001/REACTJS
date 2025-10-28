const EventComponent_05 = () => {

    const handleSubmit = (e)=>{
        e.preventDefault() //기본 기능을 사용하지 않도록 하겠다는 의미! - URL이 바뀌지 않고 내부에서 
                           //submit이 동작함
        console.log("submit...");
    }


    return(
        <div>
            <form onSubmit={handleSubmit} action="/test.jsp">
                <input type="text" /><br/>
                <button type="submit">전송</button>
            </form>
        </div>
    )
}

export default EventComponent_05