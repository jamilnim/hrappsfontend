
const Box=(props)=>{
    return(

        <div class='box'>
            <p>Name:{props.name}</p>
            <p>Title:{props.title} </p>
            <p>Salary:{props.salary} </p>
            <p>Phone:{props.phone} </p>
            <p>Email:{props.email} </p>
            <p>Animal:{props.animal} </p>


        </div>


    )
}

export default Box;