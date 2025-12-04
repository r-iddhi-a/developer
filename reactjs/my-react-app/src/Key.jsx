function Key(){
    const users=[{id:1,name:"Riddhi"},
        {id:2 , name:"Dhurvi"},
        {id:3 , name:"Jisha"},
        {id:4 , name:"Rina"}
    ];

    return(
        <div>
            <h3>User List</h3>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Key;