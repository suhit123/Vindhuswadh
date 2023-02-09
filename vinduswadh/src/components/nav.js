const Nav=(showcart)=>{
    return(
        <div className="nav">
            <div className="logo">
                <h1>Vindhu<span>Swadh</span></h1>
            </div>
            <div className="cart_img">
                <button onClick={()=>{showcart()}}><img src="https://th.bing.com/th/id/R.7fe97f6511b1eb7c1ad4e2f7fa9e5143?rik=zfaUupWi3OA5iw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f4Tb%2fprM%2f4TbprM67c.png&ehk=pqIY6chnBPc1FK48dQh0iLDkrhGlz2wXz8dk%2fdPqr7Y%3d&risl=&pid=ImgRaw&r=0"/></button>
            </div>
        </div>
    );
}
export default Nav;